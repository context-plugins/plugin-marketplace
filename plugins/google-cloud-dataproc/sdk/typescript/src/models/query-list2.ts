import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A list of queries. */
export type QueryList2 = {
  /**
   * Required. The queries to execute. You do not need to end a query expression with a semicolon.
   * Multiple queries can be specified in one string by separating each with a semicolon. Here is an
   * example of a Dataproc API snippet that uses a QueryList to specify a HiveJob: "hiveJob": {
   * "queryList": { "queries": [ "query1", "query2", "query3;query4", ] } }
   */
  queries?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queryList2Schema: Schema<QueryList2> = s.object<QueryList2>(
  {
    queries: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
