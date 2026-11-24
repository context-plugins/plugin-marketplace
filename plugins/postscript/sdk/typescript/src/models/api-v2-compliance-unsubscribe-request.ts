import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2ComplianceUnsubscribeRequest = {
  /** ID of the subscriber you'd like to opt out. */
  postscriptSubscriberId?: string;
  /** A phone number of the subscriber you'd like to opt out. */
  phoneNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2ComplianceUnsubscribeRequestSchema: Schema<ApiV2ComplianceUnsubscribeRequest> =
  s.object<ApiV2ComplianceUnsubscribeRequest>(
    {
      postscriptSubscriberId: s.optional(s.string()),
      phoneNumber: s.optional(s.string()),
      _keysMap: {
        postscriptSubscriberId: "postscript_subscriber_id",
        phoneNumber: "phone_number",
      },
    },
    { additionalProperties: s.json() },
  );
