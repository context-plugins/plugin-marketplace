import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Supported attachment types. This property corresponds to the `attachments_supported` server
 * metadata which was added by the third implementer's draft of OpenID Connect for Identity
 * Assurance 1.0.
 */
export const AttachmentType = {
  Embedded: "EMBEDDED",
  External: "EXTERNAL",
} as const;
export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType] | (string & {});

export const attachmentTypeSchema: EnumSchema<AttachmentType> = s.enumOf<AttachmentType>(AttachmentType);
