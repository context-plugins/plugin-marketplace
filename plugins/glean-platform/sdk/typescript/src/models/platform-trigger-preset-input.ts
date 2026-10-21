import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformTriggerPresetInputTypeSchema,
  type PlatformTriggerPresetInputType,
} from "./platform-trigger-preset-input-type.js";
import {
  platformTriggerPresetInputValueSchema,
  type PlatformTriggerPresetInputValue,
} from "./platform-trigger-preset-input-value.js";

export type PlatformTriggerPresetInput = {
  /** Identifier of the input, supplied as a key in the trigger's `inputs`. */
  field: string;
  /** Type of a preset input. */
  type: PlatformTriggerPresetInputType;
  /** Human-readable name for the input. */
  displayName: string;
  /** Whether the caller must supply a value for this input. */
  isRequired: boolean;
  /**
   * Bounded initial set of selectable values for a picklist input. Omitted entirely for free-text
   * inputs.
   */
  values?: PlatformTriggerPresetInputValue[];
  /**
   * Whether additional selectable values were omitted from `values`. When true, use GET
   * /trigger-presets/{preset_id}/input-values with a query to narrow the result set.
   */
  isTruncated?: boolean;
};

export const platformTriggerPresetInputSchema: Schema<PlatformTriggerPresetInput> =
  s.object<PlatformTriggerPresetInput>({
    field: s.string(),
    type: platformTriggerPresetInputTypeSchema,
    displayName: s.string(),
    isRequired: s.boolean(),
    values: s.optional(s.array(s.lazy(() => platformTriggerPresetInputValueSchema))),
    isTruncated: s.optional(s.boolean()),
    _keysMap: {
      displayName: "display_name",
      isRequired: "is_required",
      isTruncated: "is_truncated",
    },
  });
