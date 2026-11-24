import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  nativeSqlExecutionUiDataSchema,
  type NativeSqlExecutionUiData,
} from "./native-sql-execution-ui-data.js";

/** Details of a query for a Spark Application */
export type AccessSparkApplicationNativeSqlQueryResponse = {
  /** Native SQL Execution Data */
  executionData?: NativeSqlExecutionUiData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSparkApplicationNativeSqlQueryResponseSchema: Schema<AccessSparkApplicationNativeSqlQueryResponse> =
  s.object<AccessSparkApplicationNativeSqlQueryResponse>(
    {
      executionData: s.optional(s.lazy(() => nativeSqlExecutionUiDataSchema)),
    },
    { additionalProperties: s.json() },
  );
