import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logSchema, type Log } from "./log.js";
import {
  paginationDidlogicComHlrLookupsApiSchema,
  type PaginationDidlogicComHlrLookupsApi,
} from "./pagination-didlogic-com-hlr-lookups-api.js";

export type ApiV2HlrHistoryResponse = {
  /** List of HLR lookup logs */
  logs: Log[];
  /** Pagination metadata */
  pagination: PaginationDidlogicComHlrLookupsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2HlrHistoryResponseSchema: Schema<ApiV2HlrHistoryResponse> =
  s.object<ApiV2HlrHistoryResponse>(
    {
      logs: s.array(s.lazy(() => logSchema)),
      pagination: paginationDidlogicComHlrLookupsApiSchema,
    },
    { additionalProperties: s.json() },
  );
