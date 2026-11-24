import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Encryption type */
export const Type = {
  AwsOwnedKey: "AWS_OWNED_KEY",
  CustomerManagedKmsKey: "CUSTOMER_MANAGED_KMS_KEY",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
