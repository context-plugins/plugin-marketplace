import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BulkTemplatesRequest = {
  name: string;
  description?: string | null;
  /** HTML with {{field}} placeholders */
  htmlContent: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkTemplatesRequestProperties: s.Shape<BulkTemplatesRequest> = {
  name: s.string(),
  description: s.optionalNullable(s.string()),
  htmlContent: s.string(),
  _keysMap: {
    htmlContent: "html_content",
  },
};

export const bulkTemplatesRequestInternalSchema: Schema<BulkTemplatesRequest> =
  s.object<BulkTemplatesRequest>(bulkTemplatesRequestProperties, { additionalProperties: s.json() });

export const bulkTemplatesRequestSchema: Schema<BulkTemplatesRequest> = s.lazySchema(() =>
  s.object<BulkTemplatesRequest>(
    {
      ...bulkTemplatesRequestProperties,
      name: s.string().check(s.maxLength(255)),
      description: s.optionalNullable(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
