import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of the field to use for filtering. The allowed names are IntentId and SlotTypeId. */
export const Name23 = {
  IntentId: "IntentId",
  SlotTypeId: "SlotTypeId",
} as const;
export type Name23 = (typeof Name23)[keyof typeof Name23] | (string & {});

export const name23Schema: EnumSchema<Name23> = s.enumOf<Name23>(Name23);
