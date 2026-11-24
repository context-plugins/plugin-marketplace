import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. Encryption type for the region. If the encryption type is CMEK, the cmek_key_name must
 * be provided. If no encryption type is provided, GMEK will be used.
 */
export const EncryptionType = {
  EncryptionTypeUnspecified: "ENCRYPTION_TYPE_UNSPECIFIED",
  Gmek: "GMEK",
  Cmek: "CMEK",
} as const;
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType] | (string & {});

export const encryptionTypeSchema: EnumSchema<EncryptionType> = s.enumOf<EncryptionType>(EncryptionType);
