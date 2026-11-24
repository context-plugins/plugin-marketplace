import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Field type. 'date' is always auto-filled at signing time, never editable by the signer. */
export const Type = {
  Signature: "signature",
  Text: "text",
  Date: "date",
  Checkbox: "checkbox",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
