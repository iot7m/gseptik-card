import type { LovelaceCardConfig } from "custom-card-helpers";

import type { GSeptikEntityKey } from "@/types/defs";

export type GSeptikEntitiesConfig = Record<GSeptikEntityKey, string>;

export interface GSeptikCardConfig extends LovelaceCardConfig {
  entities: GSeptikEntitiesConfig;
  show_pressure: boolean;
  show_x_level: boolean;
  show_header: boolean;
}

export interface GSpepticCardEditorConfig extends LovelaceCardConfig {
  entities?: GSeptikEntitiesConfig;
}
