import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endTimeRangeSchema, type EndTimeRange } from "./end-time-range.js";
import {
  typeAmazonDevOpsGuruInsightsApiSchema,
  type TypeAmazonDevOpsGuruInsightsApi,
} from "./type-amazon-dev-ops-guru-insights-api.js";

export type ListInsightsClosedStatusFilter = {
  /** Use to filter for either REACTIVE or PROACTIVE insights. */
  type: TypeAmazonDevOpsGuruInsightsApi;
  endTimeRange: EndTimeRange;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listInsightsClosedStatusFilterSchema: Schema<ListInsightsClosedStatusFilter> =
  s.object<ListInsightsClosedStatusFilter>(
    {
      type: typeAmazonDevOpsGuruInsightsApiSchema,
      endTimeRange: endTimeRangeSchema,
      _keysMap: {
        type: "Type",
        endTimeRange: "EndTimeRange",
      },
    },
    { additionalProperties: s.json() },
  );
