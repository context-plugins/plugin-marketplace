import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuiltInSlotTypeSummary = {
  /**
   * The signature of the built-in slot type. Use this to specify the parent slot type of a derived
   * slot type.
   */
  slotTypeSignature?: string;
  /** The description of the built-in slot type. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const builtInSlotTypeSummarySchema: Schema<BuiltInSlotTypeSummary> = s.object<BuiltInSlotTypeSummary>(
  {
    slotTypeSignature: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
