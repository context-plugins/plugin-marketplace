import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callRecordSchema, type CallRecord } from "./call-record.js";

export type ApiV1CallsResponse1 = {
  /** A finished or in-progress call on one of your numbers. */
  call?: CallRecord;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallsResponse1Schema: Schema<ApiV1CallsResponse1> = s.object<ApiV1CallsResponse1>(
  {
    call: s.optional(s.lazy(() => callRecordSchema)),
  },
  { additionalProperties: s.json() },
);
