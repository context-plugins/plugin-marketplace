import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dlrSchema, type Dlr } from "./dlr.js";
import { sm1Schema, type Sm1 } from "./sm1.js";

export type ApiV1SmsRequest = {
  sm: Sm1;
  dlr?: Dlr;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SmsRequestSchema: Schema<ApiV1SmsRequest> = s.object<ApiV1SmsRequest>(
  {
    sm: sm1Schema,
    dlr: s.optional(s.lazy(() => dlrSchema)),
  },
  { additionalProperties: s.json() },
);
