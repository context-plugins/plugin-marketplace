import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotValueOverrideSchema, type SlotValueOverride } from "./slot-value-override.js";

export type IntentOverride = {
  /** The name of the intent. Only required when you're switching intents. */
  name?: string;
  /**
   * A map of all of the slot value overrides for the intent. The name of the slot maps to the value
   * of the slot. Slots that are not included in the map aren't overridden.
   */
  slots?: Record<string, SlotValueOverride>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentOverrideSchema: Schema<IntentOverride> = s.object<IntentOverride>(
  {
    name: s.optional(s.string()),
    slots: s.optional(
      s.record(
        s.string(),
        s.lazy(() => slotValueOverrideSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
