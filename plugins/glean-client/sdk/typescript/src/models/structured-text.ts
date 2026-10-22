import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { structuredTextItemSchema, type StructuredTextItem } from "./structured-text-item.js";

export type StructuredText = {
  text: string;
  /**
   * An array of objects each of which contains either a string or a link which optionally
   * corresponds to a document.
   */
  structuredList?: StructuredTextItem[];
};

export const structuredTextSchema: Schema<StructuredText> = s.object<StructuredText>({
  text: s.string(),
  structuredList: s.optional(s.array(s.lazy(() => structuredTextItemSchema))),
});
