import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  logDidlogicComRiskChecksApiSchema,
  type LogDidlogicComRiskChecksApi,
} from "./log-didlogic-com-risk-checks-api.js";
import {
  paginationDidlogicComHlrLookupsApiSchema,
  type PaginationDidlogicComHlrLookupsApi,
} from "./pagination-didlogic-com-hlr-lookups-api.js";

export type ApiV2NumbersRiskChecksLogsResponse = {
  /** List of risk check logs */
  logs: LogDidlogicComRiskChecksApi[];
  /** Pagination metadata */
  pagination: PaginationDidlogicComHlrLookupsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersRiskChecksLogsResponseSchema: Schema<ApiV2NumbersRiskChecksLogsResponse> =
  s.object<ApiV2NumbersRiskChecksLogsResponse>(
    {
      logs: s.array(s.lazy(() => logDidlogicComRiskChecksApiSchema)),
      pagination: paginationDidlogicComHlrLookupsApiSchema,
    },
    { additionalProperties: s.json() },
  );
