import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAmazonDevOpsGuruInsightsApiSchema,
  type TypeAmazonDevOpsGuruInsightsApi,
} from "./type-amazon-dev-ops-guru-insights-api.js";

export type ListInsightsOngoingStatusFilter = {
  /** Use to filter for either REACTIVE or PROACTIVE insights. */
  type: TypeAmazonDevOpsGuruInsightsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listInsightsOngoingStatusFilterSchema: Schema<ListInsightsOngoingStatusFilter> =
  s.object<ListInsightsOngoingStatusFilter>(
    {
      type: typeAmazonDevOpsGuruInsightsApiSchema,
      _keysMap: {
        type: "Type",
      },
    },
    { additionalProperties: s.json() },
  );
