import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of encryption. Set to KMS for encryption with KMS keys. Set to NONE for default
 * encryption.
 */
export const Type = {
  None: "NONE",
  Kms: "KMS",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
