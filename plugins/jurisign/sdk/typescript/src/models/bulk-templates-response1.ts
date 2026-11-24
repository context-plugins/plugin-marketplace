import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bulkTemplateSchema, type BulkTemplate } from "./bulk-template.js";

export type BulkTemplatesResponse1 = {
  data?: BulkTemplate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkTemplatesResponse1Schema: Schema<BulkTemplatesResponse1> = s.object<BulkTemplatesResponse1>(
  {
    data: s.optional(s.lazy(() => bulkTemplateSchema)),
  },
  { additionalProperties: s.json() },
);
