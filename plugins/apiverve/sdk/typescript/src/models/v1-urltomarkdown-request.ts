import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1UrltomarkdownRequest = {
  /** The URL of the webpage to convert to Markdown */
  url: string;
  /** Whether to include image references in the Markdown output */
  includeImages?: boolean;
  /** Whether to include hyperlinks in the Markdown output */
  includeLinks?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UrltomarkdownRequestSchema: Schema<V1UrltomarkdownRequest> = s.object<V1UrltomarkdownRequest>(
  {
    url: s.string(),
    includeImages: s.optional(s.boolean()),
    includeLinks: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
