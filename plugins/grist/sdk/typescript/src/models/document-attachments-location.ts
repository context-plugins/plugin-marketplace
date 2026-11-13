import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current location of attachment files in the document */
export const DocumentAttachmentsLocation = {
  None: "none",
  Internal: "internal",
  Mixed: "mixed",
  External: "external",
} as const;
export type DocumentAttachmentsLocation =
  | (typeof DocumentAttachmentsLocation)[keyof typeof DocumentAttachmentsLocation]
  | (string & {});

export const documentAttachmentsLocationSchema: EnumSchema<DocumentAttachmentsLocation> =
  s.enumOf<DocumentAttachmentsLocation>(DocumentAttachmentsLocation);
