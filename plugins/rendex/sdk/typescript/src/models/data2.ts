import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { format3Schema, type Format3 } from "./format3.js";

export type Data2 = {
  url?: string;
  format?: Format3;
  content?: string;
  title?: string;
  byline?: string;
  excerpt?: string;
  siteName?: string;
  length?: number;
  loadTimeMs?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data2Schema: Schema<Data2> = s.object<Data2>(
  {
    url: s.optional(s.string()),
    format: s.optional(s.lazy(() => format3Schema)),
    content: s.optional(s.string()),
    title: s.optional(s.string()),
    byline: s.optional(s.string()),
    excerpt: s.optional(s.string()),
    siteName: s.optional(s.string()),
    length: s.optional(s.int()),
    loadTimeMs: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
