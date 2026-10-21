import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformTriggerPresetSummary = {
  /** ID of the preset. Pass this when creating a trigger. */
  presetId: string;
  /** Datasource the preset fires on. */
  datasource: string;
  /** Human-readable preset name. */
  displayName: string;
  /** Human-readable description of when the preset fires. */
  description?: string;
};

export const platformTriggerPresetSummarySchema: Schema<PlatformTriggerPresetSummary> =
  s.object<PlatformTriggerPresetSummary>({
    presetId: s.string(),
    datasource: s.string(),
    displayName: s.string(),
    description: s.optional(s.string()),
    _keysMap: {
      presetId: "preset_id",
      displayName: "display_name",
    },
  });
