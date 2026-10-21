import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MetricsExplorerPresetUpdate = {
  /** The new display name to set on the preset. */
  displayName: string;
};

export const metricsExplorerPresetUpdateSchema: Schema<MetricsExplorerPresetUpdate> =
  s.object<MetricsExplorerPresetUpdate>({
    displayName: s.string(),
    _keysMap: {
      displayName: "display_name",
    },
  });
