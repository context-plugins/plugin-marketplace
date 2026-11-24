import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsSchemaViewSchema, type AnalyticsSchemaView } from "./analytics-schema-view.js";

export type AnalyticsSchemaResponse = {
  views: AnalyticsSchemaView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsSchemaResponseSchema: Schema<AnalyticsSchemaResponse> =
  s.object<AnalyticsSchemaResponse>(
    {
      views: s.array(s.lazy(() => analyticsSchemaViewSchema)),
    },
    { additionalProperties: s.json() },
  );
