import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceCoreAnalyticsApiSchema, type SourceCoreAnalyticsApi } from "./source-core-analytics-api.js";
import { typeCoreAnalyticsApiSchema, type TypeCoreAnalyticsApi } from "./type-core-analytics-api.js";

export type ErrorItem = {
  type?: TypeCoreAnalyticsApi;
  code?: string;
  title?: string;
  detail?: string;
  source?: SourceCoreAnalyticsApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorItemSchema: Schema<ErrorItem> = s.object<ErrorItem>(
  {
    type: s.optional(s.lazy(() => typeCoreAnalyticsApiSchema)),
    code: s.optional(s.string()),
    title: s.optional(s.string()),
    detail: s.optional(s.string()),
    source: s.optionalNullable(s.lazy(() => sourceCoreAnalyticsApiSchema)),
  },
  { additionalProperties: s.json() },
);
