import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumCoreAnalyticsApiSchema, type DatumCoreAnalyticsApi } from "./datum-core-analytics-api.js";
import { initialSchema, type Initial } from "./initial.js";
import { metaCoreAnalyticsApiSchema, type MetaCoreAnalyticsApi } from "./meta-core-analytics-api.js";

export type ConnectionAnalyticsResponse = {
  interval?: string;
  fromDate?: string;
  toDate?: string;
  meta?: MetaCoreAnalyticsApi;
  initial?: Initial;
  data?: DatumCoreAnalyticsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionAnalyticsResponseSchema: Schema<ConnectionAnalyticsResponse> =
  s.object<ConnectionAnalyticsResponse>(
    {
      interval: s.optional(s.string()),
      fromDate: s.optional(s.dateOnly()),
      toDate: s.optional(s.dateOnly()),
      meta: s.optional(s.lazy(() => metaCoreAnalyticsApiSchema)),
      initial: s.optional(s.lazy(() => initialSchema)),
      data: s.optional(s.array(s.lazy(() => datumCoreAnalyticsApiSchema))),
    },
    { additionalProperties: s.json() },
  );
