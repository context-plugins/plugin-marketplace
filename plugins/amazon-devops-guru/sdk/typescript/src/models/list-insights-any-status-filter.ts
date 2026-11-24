import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { startTimeRangeSchema, type StartTimeRange } from "./start-time-range.js";
import {
  typeAmazonDevOpsGuruInsightsApiSchema,
  type TypeAmazonDevOpsGuruInsightsApi,
} from "./type-amazon-dev-ops-guru-insights-api.js";

export type ListInsightsAnyStatusFilter = {
  /** Use to filter for either REACTIVE or PROACTIVE insights. */
  type: TypeAmazonDevOpsGuruInsightsApi;
  startTimeRange: StartTimeRange;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listInsightsAnyStatusFilterSchema: Schema<ListInsightsAnyStatusFilter> =
  s.object<ListInsightsAnyStatusFilter>(
    {
      type: typeAmazonDevOpsGuruInsightsApiSchema,
      startTimeRange: startTimeRangeSchema,
      _keysMap: {
        type: "Type",
        startTimeRange: "StartTimeRange",
      },
    },
    { additionalProperties: s.json() },
  );
