import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Content that has been generated or extrapolated from the documents present in the document field.
 */
export type GeneratedAttachmentContent = {
  /** The header describing the generated content. */
  displayHeader?: string;
  /** The content that has been generated. */
  text?: string;
};

export const generatedAttachmentContentSchema: Schema<GeneratedAttachmentContent> =
  s.object<GeneratedAttachmentContent>({
    displayHeader: s.optional(s.string()),
    text: s.optional(s.string()),
  });
