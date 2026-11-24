import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttachmentWhenSigned = {
  SignedDocument: "SIGNED_DOCUMENT",
  SignatureProtocol: "SIGNATURE_PROTOCOL",
} as const;
export type AttachmentWhenSigned =
  | (typeof AttachmentWhenSigned)[keyof typeof AttachmentWhenSigned]
  | (string & {});

export const attachmentWhenSignedSchema: EnumSchema<AttachmentWhenSigned> =
  s.enumOf<AttachmentWhenSigned>(AttachmentWhenSigned);
