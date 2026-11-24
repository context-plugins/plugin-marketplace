import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callRecordSchema, type CallRecord } from "./call-record.js";

export type ApiV1CallsResponse = {
  calls?: CallRecord[];
  count?: number;
  /** Pass as `before` to fetch older records. Null on the last page. */
  nextBefore?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallsResponseSchema: Schema<ApiV1CallsResponse> = s.object<ApiV1CallsResponse>(
  {
    calls: s.optional(s.array(s.lazy(() => callRecordSchema))),
    count: s.optional(s.int()),
    nextBefore: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
