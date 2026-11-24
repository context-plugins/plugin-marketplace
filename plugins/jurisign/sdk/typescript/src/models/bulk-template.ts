import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";

export type BulkTemplate = {
  id?: string;
  name?: string;
  description?: string | null;
  mergeFields?: string[];
  /** Only present on show/create/update responses */
  htmlContent?: string;
  createdAt?: Date;
  createdBy?: CreatedBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkTemplateSchema: Schema<BulkTemplate> = s.object<BulkTemplate>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optionalNullable(s.string()),
    mergeFields: s.optional(s.array(s.string())),
    htmlContent: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    createdBy: s.optional(s.lazy(() => createdBySchema)),
    _keysMap: {
      mergeFields: "merge_fields",
      htmlContent: "html_content",
      createdAt: "created_at",
      createdBy: "created_by",
    },
  },
  { additionalProperties: s.json() },
);
