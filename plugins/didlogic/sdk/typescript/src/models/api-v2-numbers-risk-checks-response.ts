import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginationDidlogicComHlrLookupsApiSchema,
  type PaginationDidlogicComHlrLookupsApi,
} from "./pagination-didlogic-com-hlr-lookups-api.js";
import { taskSchema, type Task } from "./task.js";

export type ApiV2NumbersRiskChecksResponse = {
  /** List of risk check tasks */
  tasks: Task[];
  /** Pagination metadata */
  pagination: PaginationDidlogicComHlrLookupsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersRiskChecksResponseSchema: Schema<ApiV2NumbersRiskChecksResponse> =
  s.object<ApiV2NumbersRiskChecksResponse>(
    {
      tasks: s.array(s.lazy(() => taskSchema)),
      pagination: paginationDidlogicComHlrLookupsApiSchema,
    },
    { additionalProperties: s.json() },
  );
