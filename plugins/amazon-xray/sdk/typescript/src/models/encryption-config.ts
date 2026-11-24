import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { typeSchema, type Type } from "./type.js";

export type EncryptionConfig = {
  /** The ID of the KMS key used for encryption, if applicable. */
  keyId?: string;
  /**
   * The encryption status. While the status is UPDATING, X-Ray may encrypt data with a combination
   * of the new and old settings.
   */
  status?: Status;
  /**
   * The type of encryption. Set to KMS for encryption with KMS keys. Set to NONE for default
   * encryption.
   */
  type?: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const encryptionConfigSchema: Schema<EncryptionConfig> = s.object<EncryptionConfig>(
  {
    keyId: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    type: s.optional(s.lazy(() => typeSchema)),
    _keysMap: {
      keyId: "KeyId",
      status: "Status",
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
