import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of encryption. Set to KMS to use your own key for encryption. Set to NONE for default
 * encryption.
 */
export const Type1 = {
  None: "NONE",
  Kms: "KMS",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
