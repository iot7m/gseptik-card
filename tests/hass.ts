export type HassState = { state: string };

export type HassLike = {
  states: Record<string, HassState>;
};

export interface LovelaceTestElement extends HTMLElement {
  hass?: HassLike;
  setConfig(config: { entity: string }): void;
  updateComplete: Promise<void>;
}

export function createHassMock(): HassLike {
  return {
    states: {
      "sensor.uroven_zhidkosti_septika": { state: "42" },
      "sensor.kriticheskii_uroven_septika": { state: "80" },
      "sensor.prevyshen_kriticheskii_uroven_septika": { state: "Нет" },
      "sensor.temperatura_septika": { state: "5" },
      "sensor.davlenie_septika": { state: "1010" },
    },
  };
}
