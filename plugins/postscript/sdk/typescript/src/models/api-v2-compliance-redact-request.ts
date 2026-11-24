import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2ComplianceRedactRequest = {
  /** ID of the subscriber you'd like to redact. */
  postscriptSubscriberId?: string;
  /** A shopify customer id of the subscriber you'd like to redact. */
  shopifyCustomerId?: string;
  /** An email of the subscriber you'd like to redact. */
  email?: string;
  /** A phone number of the subscriber you'd like to redact. */
  phoneNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2ComplianceRedactRequestSchema: Schema<ApiV2ComplianceRedactRequest> =
  s.object<ApiV2ComplianceRedactRequest>(
    {
      postscriptSubscriberId: s.optional(s.string()),
      shopifyCustomerId: s.optional(s.string()),
      email: s.optional(s.string()),
      phoneNumber: s.optional(s.string()),
      _keysMap: {
        postscriptSubscriberId: "postscript_subscriber_id",
        shopifyCustomerId: "shopify_customer_id",
        phoneNumber: "phone_number",
      },
    },
    { additionalProperties: s.json() },
  );
