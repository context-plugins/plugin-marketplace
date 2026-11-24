import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runtimeHintDetailsSchema, type RuntimeHintDetails } from "./runtime-hint-details.js";

export type RuntimeHints = {
  /**
   * A list of the slots in the intent that should have runtime hints added, and the phrases that
   * should be added for each slot. The first level of the slotHints map is the name of the intent.
   * The second level is the name of the slot within the intent. For more information, see Using
   * hints to improve accuracy. The intent name and slot name must exist.
   */
  slotHints?: Record<string, RuntimeHintDetails>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeHintsSchema: Schema<RuntimeHints> = s.object<RuntimeHints>(
  {
    slotHints: s.optional(
      s.record(
        s.string(),
        s.lazy(() => runtimeHintDetailsSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
