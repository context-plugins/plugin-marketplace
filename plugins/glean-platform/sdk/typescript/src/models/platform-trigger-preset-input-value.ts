import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformTriggerPresetInputValue = {
  /**
   * The exact value to send in the trigger's `inputs` for this choice (e.g. a channel name, a
   * user's email, etc).
   */
  value: string;
  /** Human-readable name for this value. */
  displayName: string;
};

export const platformTriggerPresetInputValueSchema: Schema<PlatformTriggerPresetInputValue> =
  s.object<PlatformTriggerPresetInputValue>({
    value: s.string(),
    displayName: s.string(),
    _keysMap: {
      displayName: "display_name",
    },
  });
