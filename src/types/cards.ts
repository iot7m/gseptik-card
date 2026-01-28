import type { LovelaceCardConfig } from "custom-card-helpers";

import type { GSeptikEntityKey } from "@/types/defs";

export type GSeptikEntitiesConfig = Record<GSeptikEntityKey, string>;

interface GsepticHeader {
  text: string;
  show: boolean;
}

export interface GSeptikCardConfig extends LovelaceCardConfig {
  entities: GSeptikEntitiesConfig;
  show_pressure: boolean;
  show_x_level: boolean;
  header: GsepticHeader;
}

export interface GSpepticCardEditorConfig extends LovelaceCardConfig {
  entities?: GSeptikEntitiesConfig;
}
