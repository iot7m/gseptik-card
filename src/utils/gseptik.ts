import type { HomeAssistant } from "custom-card-helpers";

export function getLevel(hass: HomeAssistant | undefined, entityId: string): number {
  const value = Number(hass?.states[entityId]?.state);
  return Number.isNaN(value) ? 0 : Math.min(Math.max(value, 0), 100);
}

export function getCriticalLevel(hass: HomeAssistant | undefined, entityId: string): number {
  const value = Number(hass?.states[entityId]?.state);
  return Number.isNaN(value) ? 0 : Math.min(Math.max(value, 0), 100);
}
