import { LitElement, css, html } from "lit";

import { customElement } from "lit/decorators.js";

import type { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";

import { GSeptikCardConfig } from "@/types/cards";

import { assertAllEntities } from "@/utils/asserts";

import { CARD_PREFIX } from "@/const";

export const CARD_NAME = `${CARD_PREFIX}-cistern-card-editor` as const;

@customElement(CARD_NAME)
export class CisternCardEditor extends LitElement implements LovelaceCardEditor {
  private _config?: GSeptikCardConfig;
  public hass?: HomeAssistant;

  setConfig(config: GSeptikCardConfig) {
    assertAllEntities(config);
    this._config = {
      ...config,
      type: config.type ?? `custom:${CARD_NAME}`,
    };
    this.requestUpdate();
  }

  private _valueChanged(ev: CustomEvent) {
    console.log(ev);
    /*
    const value = ev.detail.value;

    this._config = {
      ...this._config,
      entity: value,
    };
    */

    this._fireConfigChanged();
  }

  private _fireConfigChanged() {
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    if (!this._config || !this.hass) return html`<ha-card>Loading...</ha-card>`;

    return html`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${this._config.entity ?? ""}
        label="Основная сущность"
        @value-changed=${this._valueChanged}
      >
      </ha-entity-picker>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;
}
