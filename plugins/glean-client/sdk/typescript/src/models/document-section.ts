import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocumentSection = {
  /** The title of the document section (e.g. the section header). */
  title?: string;
  /** The permalink of the document section. */
  url?: string;
};

export const documentSectionSchema: Schema<DocumentSection> = s.object<DocumentSection>({
  title: s.optional(s.string()),
  url: s.optional(s.string()),
});
