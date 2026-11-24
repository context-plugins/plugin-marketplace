import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { smsSchema, type Sms } from "./sms.js";

export type ApiV1SmsResponse1 = {
  /** Created SMS details */
  sms: Sms;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SmsResponse1Schema: Schema<ApiV1SmsResponse1> = s.object<ApiV1SmsResponse1>(
  {
    sms: smsSchema,
  },
  { additionalProperties: s.json() },
);
