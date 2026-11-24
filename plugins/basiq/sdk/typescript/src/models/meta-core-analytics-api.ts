import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetaCoreAnalyticsApi = {
  totalRecords?: number;
  page?: number;
  pageSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaCoreAnalyticsApiSchema: Schema<MetaCoreAnalyticsApi> = s.object<MetaCoreAnalyticsApi>(
  {
    totalRecords: s.optional(s.int()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
