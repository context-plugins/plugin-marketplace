import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeCallnodeIoPhoneNumbersApiSchema,
  type TypeCallnodeIoPhoneNumbersApi,
} from "./type-callnode-io-phone-numbers-api.js";

/**
 * How CallNode authenticates to your webhook. The secret itself is write-only and never returned.
 */
export type WebhookAuthStatus = {
  type?: TypeCallnodeIoPhoneNumbersApi;
  headerName?: string;
  valueSet?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookAuthStatusSchema: Schema<WebhookAuthStatus> = s.object<WebhookAuthStatus>(
  {
    type: s.optional(s.lazy(() => typeCallnodeIoPhoneNumbersApiSchema)),
    headerName: s.optional(s.string()),
    valueSet: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
