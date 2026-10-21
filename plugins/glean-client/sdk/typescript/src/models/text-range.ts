import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { typeSchema, type Type } from "./type.js";

/** A subsection of a given string to which some special formatting should be applied. */
export type TextRange = {
  /** The inclusive start index of the range. */
  startIndex: number;
  /** The exclusive end index of the range. */
  endIndex?: number;
  type?: Type;
  /**
   * The URL associated with the range, if applicable. For example, the linked URL for a LINK range.
   */
  url?: string;
  document?: Document;
};

export const textRangeSchema: Schema<TextRange> = s.object<TextRange>({
  startIndex: s.int(),
  endIndex: s.optional(s.int()),
  type: s.optional(s.lazy(() => typeSchema)),
  url: s.optional(s.string()),
  document: s.optional(s.lazy(() => documentSchema)),
});
