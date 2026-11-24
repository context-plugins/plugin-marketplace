import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sms1Schema, type Sms1 } from "./sms1.js";

export type ApiV1SmsResponse3 = {
  /** SMS message details */
  sms: Sms1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SmsResponse3Schema: Schema<ApiV1SmsResponse3> = s.object<ApiV1SmsResponse3>(
  {
    sms: sms1Schema,
  },
  { additionalProperties: s.json() },
);
