import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { structuredResultSchema, type StructuredResult } from "./structured-result.js";

export type StructuredTextItem = {
  link?: string;
  document?: Document;
  text?: string;
  /**
   * A single object that can support any object in the work graph. Only a single object will be
   * populated.
   */
  structuredResult?: StructuredResult;
};

export const structuredTextItemSchema: Schema<StructuredTextItem> = s.object<StructuredTextItem>({
  link: s.optional(s.string()),
  document: s.optional(s.lazy(() => documentSchema)),
  text: s.optional(s.string()),
  structuredResult: s.optional(s.lazy(() => structuredResultSchema)),
});
