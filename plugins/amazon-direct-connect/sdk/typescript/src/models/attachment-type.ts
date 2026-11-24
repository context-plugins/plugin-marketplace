import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of attachment. */
export const AttachmentType = {
  TransitVirtualInterface: "TransitVirtualInterface",
  PrivateVirtualInterface: "PrivateVirtualInterface",
} as const;
export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType] | (string & {});

export const attachmentTypeSchema: EnumSchema<AttachmentType> = s.enumOf<AttachmentType>(AttachmentType);
