import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Server-side encryption to use for uploaded objects */
export const ServerSideEncryptionForUploadedObjects = {
  Aes256: "AES256",
  AwsKms: "aws:kms",
} as const;
export type ServerSideEncryptionForUploadedObjects =
  | (typeof ServerSideEncryptionForUploadedObjects)[keyof typeof ServerSideEncryptionForUploadedObjects]
  | (string & {});

export const serverSideEncryptionForUploadedObjectsSchema: EnumSchema<ServerSideEncryptionForUploadedObjects> =
  s.enumOf<ServerSideEncryptionForUploadedObjects>(ServerSideEncryptionForUploadedObjects);
