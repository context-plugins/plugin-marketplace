import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MarkdownlinkextractorRequest = {
  /** Markdown text to parse (max 100,000 characters) */
  markdown: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MarkdownlinkextractorRequestSchema: Schema<V1MarkdownlinkextractorRequest> =
  s.object<V1MarkdownlinkextractorRequest>(
    {
      markdown: s.string(),
    },
    { additionalProperties: s.json() },
  );
