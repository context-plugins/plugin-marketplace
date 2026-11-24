import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TagFilter = {
  /**
   * Specifies the tag that must be associated with the execution for it to meet the filter
   * criteria. Tags may only contain unicode letters, digits, whitespace, or these symbols: _ . : /
   * = + - \@.
   */
  tag: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagFilterSchema: Schema<TagFilter> = s.object<TagFilter>(
  {
    tag: s.string(),
  },
  { additionalProperties: s.json() },
);
