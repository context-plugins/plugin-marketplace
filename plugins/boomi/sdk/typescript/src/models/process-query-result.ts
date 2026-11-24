import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { processSchema, type Process } from "./process.js";

/** Paginated query results for processes. */
export type ProcessQueryResult = {
  /** Total number of matching records. */
  numberOfResults?: number;
  /** Token for retrieving the next page of results. */
  queryToken?: string;
  result?: Process[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processQueryResultSchema: Schema<ProcessQueryResult> = s.object<ProcessQueryResult>(
  {
    numberOfResults: s.optional(s.int()),
    queryToken: s.optional(s.string()),
    result: s.optional(s.array(s.lazy(() => processSchema))),
  },
  { additionalProperties: s.json() },
);
