import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocumentContent = {
  /** The plaintext content of the document. */
  fullTextList?: string[];
};

export const documentContentSchema: Schema<DocumentContent> = s.object<DocumentContent>({
  fullTextList: s.optional(s.array(s.string())),
});
