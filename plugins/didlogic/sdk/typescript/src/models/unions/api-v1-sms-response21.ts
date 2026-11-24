import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiV1SmsResponse2Schema, type ApiV1SmsResponse2 } from "../api-v1-sms-response2.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV1SmsResponse21 = Error | ApiV1SmsResponse2;

export const apiV1SmsResponse21Schema: Schema<ApiV1SmsResponse21> = s.of<ApiV1SmsResponse21>(
  s.union([s.lazy(() => errorSchema), s.lazy(() => apiV1SmsResponse2Schema)]),
);
