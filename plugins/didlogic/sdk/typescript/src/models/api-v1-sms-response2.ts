import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SmsResponse2 = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SmsResponse2Schema: Schema<ApiV1SmsResponse2> = s.object<ApiV1SmsResponse2>(
  {
    error: s.string(),
  },
  { additionalProperties: s.json() },
);
