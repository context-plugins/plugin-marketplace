import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executionRecordSchema, type ExecutionRecord } from "./execution-record.js";

/** Paginated query results for execution records. */
export type ExecutionRecordQueryResult = {
  /** Total number of matching records. */
  numberOfResults?: number;
  /** Token for retrieving the next page of results. */
  queryToken?: string;
  result?: ExecutionRecord[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionRecordQueryResultSchema: Schema<ExecutionRecordQueryResult> =
  s.object<ExecutionRecordQueryResult>(
    {
      numberOfResults: s.optional(s.int()),
      queryToken: s.optional(s.string()),
      result: s.optional(s.array(s.lazy(() => executionRecordSchema))),
    },
    { additionalProperties: s.json() },
  );
