import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubSlotTypeComposition = {
  /** Name of a constituent sub slot inside a composite slot. */
  name: string;
  /**
   * The unique identifier assigned to a slot type. This refers to either a built-in slot type or
   * the unique slotTypeId of a custom slot type.
   */
  slotTypeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subSlotTypeCompositionSchema: Schema<SubSlotTypeComposition> = s.object<SubSlotTypeComposition>(
  {
    name: s.string(),
    slotTypeId: s.string(),
  },
  { additionalProperties: s.json() },
);
