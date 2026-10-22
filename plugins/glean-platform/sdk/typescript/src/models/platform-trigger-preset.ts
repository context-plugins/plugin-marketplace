import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformTriggerPresetInputSchema,
  type PlatformTriggerPresetInput,
} from "./platform-trigger-preset-input.js";

export type PlatformTriggerPreset = {
  /** ID of the preset. Pass this when creating a trigger. */
  presetId: string;
  /** Datasource the preset fires on. */
  datasource: string;
  /** Human-readable preset name. */
  displayName: string;
  /** Human-readable description of when the preset fires. */
  description?: string;
  /** Inputs the caller may supply when creating a trigger from this preset. */
  inputs: PlatformTriggerPresetInput[];
};

export const platformTriggerPresetSchema: Schema<PlatformTriggerPreset> = s.object<PlatformTriggerPreset>({
  presetId: s.string(),
  datasource: s.string(),
  displayName: s.string(),
  description: s.optional(s.string()),
  inputs: s.array(s.lazy(() => platformTriggerPresetInputSchema)),
  _keysMap: {
    presetId: "preset_id",
    displayName: "display_name",
  },
});
