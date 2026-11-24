import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WikiPageSectionHolder = {
  id?: string | null;
  title?: string | null;
  styleLevel?: number | null;
  loc?: number[] | null;
  textRaw?: string | null;
  textRich?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikiPageSectionHolderSchema: Schema<WikiPageSectionHolder> = s.object<WikiPageSectionHolder>(
  {
    id: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    styleLevel: s.optionalNullable(s.int()),
    loc: s.optionalNullable(s.array(s.int())),
    textRaw: s.optionalNullable(s.string()),
    textRich: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
