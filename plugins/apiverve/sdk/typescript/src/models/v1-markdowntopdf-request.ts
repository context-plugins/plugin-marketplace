import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MarkdowntopdfRequest = {
  /** Markdown text to convert (max 100,000 characters) */
  markdown: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MarkdowntopdfRequestSchema: Schema<V1MarkdowntopdfRequest> = s.object<V1MarkdowntopdfRequest>(
  {
    markdown: s.string(),
  },
  { additionalProperties: s.json() },
);
