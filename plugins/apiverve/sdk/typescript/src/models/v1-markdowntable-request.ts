import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MarkdowntableRequest = {
  /** Array of column header names */
  headers: string;
  /** Array of row arrays containing cell values */
  rows: string;
  /** Column alignment: left, center, right, or array of alignments per column */
  alignment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MarkdowntableRequestSchema: Schema<V1MarkdowntableRequest> = s.object<V1MarkdowntableRequest>(
  {
    headers: s.string(),
    rows: s.string(),
    alignment: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
