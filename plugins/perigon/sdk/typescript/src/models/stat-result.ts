import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StatResult = {
  /** HTTP status code for the response. */
  status?: number | null;
  /** Statistics returned by the request. */
  results?: Record<string, unknown>[] | null;
  /** Total number of matching records, when calculated by the endpoint. */
  numResults?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statResultSchema: Schema<StatResult> = s.object<StatResult>(
  {
    status: s.optionalNullable(s.int()),
    results: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    numResults: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
