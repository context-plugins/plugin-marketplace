import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BulkTemplatesRequest1 = {
  name?: string;
  description?: string | null;
  htmlContent?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkTemplatesRequest1Schema: Schema<BulkTemplatesRequest1> = s.object<BulkTemplatesRequest1>(
  {
    name: s.optional(s.string()),
    description: s.optionalNullable(s.string()),
    htmlContent: s.optional(s.string()),
    _keysMap: {
      htmlContent: "html_content",
    },
  },
  { additionalProperties: s.json() },
);
