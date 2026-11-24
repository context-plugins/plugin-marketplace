import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paragraphBlockTextSectionSchema,
  type ParagraphBlockTextSection,
} from "./paragraph-block-text-section.js";

export type ListBlockItemData = {
  /** The plain text content of the list item. */
  text?: string;
  /** The formatted content of the list item. */
  formattedText?: ParagraphBlockTextSection[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBlockItemDataSchema: Schema<ListBlockItemData> = s.object<ListBlockItemData>(
  {
    text: s.optional(s.string()),
    formattedText: s.optional(s.array(s.lazy(() => paragraphBlockTextSectionSchema))),
  },
  { additionalProperties: s.json() },
);
