import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Server-side encryption to use for uploaded objects */
export const ServerSideEncryptionForUploadedObjects7 = {
  Aes256: "AES256",
} as const;
export type ServerSideEncryptionForUploadedObjects7 =
  | (typeof ServerSideEncryptionForUploadedObjects7)[keyof typeof ServerSideEncryptionForUploadedObjects7]
  | (string & {});

export const serverSideEncryptionForUploadedObjects7Schema: EnumSchema<ServerSideEncryptionForUploadedObjects7> =
  s.enumOf<ServerSideEncryptionForUploadedObjects7>(ServerSideEncryptionForUploadedObjects7);
