import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlExecutionUiDataSchema, type SqlExecutionUiData } from "./sql-execution-ui-data.js";

/** Details of a query for a Spark Application */
export type AccessSparkApplicationSqlQueryResponse = {
  /** SQL Execution Data */
  executionData?: SqlExecutionUiData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSparkApplicationSqlQueryResponseSchema: Schema<AccessSparkApplicationSqlQueryResponse> =
  s.object<AccessSparkApplicationSqlQueryResponse>(
    {
      executionData: s.optional(s.lazy(() => sqlExecutionUiDataSchema)),
    },
    { additionalProperties: s.json() },
  );
