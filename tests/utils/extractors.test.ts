import { describe, expect, it } from "vitest";

import type { HomeAssistant } from "custom-card-helpers";

import type { HassState } from "@/types/hass";

import {
  getCriticalLevel,
  getEntityId,
  getErrorName,
  getExceedsCritical,
  getFriendlyName,
  getLevel,
  getLevelEntityId,
  getPressure,
  getStateObj,
  getTemperature,
  getUnitOfMeasure,
} from "@/utils/extractors";

function createHassWithStates(states: Record<string, HassState>): HomeAssistant {
  return { states } as unknown as HomeAssistant;
}

describe("extractors", () => {
  it("getEntityId adds sensor prefix", () => {
    expect(getEntityId("uroven_zhidkosti_septika")).toBe("sensor.uroven_zhidkosti_septika");
  });

  it("getStateObj returns state object", () => {
    const hass = createHassWithStates({
      "sensor.uroven_zhidkosti_septika": { state: "42" },
    });

    expect(getStateObj(hass, "uroven_zhidkosti_septika")?.state).toBe("42");
  });

  it("getUnitOfMeasure returns unit", () => {
    const state: HassState = {
      state: "42",
      attributes: { unit_of_measurement: "%" },
    };

    expect(getUnitOfMeasure(state)).toBe("%");
  });

  it("getFriendlyName returns friendly_name", () => {
    const state: HassState = {
      state: "42",
      attributes: { friendly_name: "Уровень жидкости септика" },
    };

    expect(getFriendlyName(state, "Fallback")).toBe("Уровень жидкости септика");
  });

  it("getLevelEntityId returns normalized id", () => {
    expect(getLevelEntityId("uroven")).toBe("sensor.uroven");
  });

  it("getLevel clamps to 100", () => {
    const hass = createHassWithStates({
      "sensor.level": { state: "120" },
    });

    expect(getLevel(hass, "level")).toBe(100);
  });

  it("getCriticalLevel returns number", () => {
    const hass = createHassWithStates({
      "sensor.critical": { state: "80" },
    });

    expect(getCriticalLevel(hass, "critical")).toBe(80);
  });

  it("getTemperature returns raw value", () => {
    const hass = createHassWithStates({
      "sensor.temp": { state: "5" },
    });

    expect(getTemperature(hass, "temp")).toBe(5);
  });

  it("getPressure returns raw value", () => {
    const hass = createHassWithStates({
      "sensor.pressure": { state: "1010" },
    });

    expect(getPressure(hass, "pressure")).toBe(1010);
  });

  it("getExceedsCritical parses Да as true", () => {
    const hass = createHassWithStates({
      "sensor.exceeded": { state: "Да" },
    });

    expect(getExceedsCritical(hass, "exceeded")).toBe(true);
  });

  it("getErrorName returns error string", () => {
    const hass = createHassWithStates({
      "sensor.error": { state: "SENSOR_TIMEOUT" },
    });

    expect(getErrorName(hass, "error")).toBe("SENSOR_TIMEOUT");
  });
});
