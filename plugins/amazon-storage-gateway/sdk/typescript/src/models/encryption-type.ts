import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A value that specifies the type of server-side encryption that the file share will use for the
 * data that it stores in Amazon S3. We recommend using EncryptionType instead of KMSEncrypted to
 * set the file share encryption method. You do not need to provide values for both parameters. If
 * values for both parameters exist in the same request, then the specified encryption methods must
 * not conflict. For example, if EncryptionType is SseS3, then KMSEncrypted must be false. If
 * EncryptionType is SseKms or DsseKms, then KMSEncrypted must be true.
 */
export const EncryptionType = {
  SseS3: "SseS3",
  SseKms: "SseKms",
  DsseKms: "DsseKms",
} as const;
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType] | (string & {});

export const encryptionTypeSchema: EnumSchema<EncryptionType> = s.enumOf<EncryptionType>(EncryptionType);
