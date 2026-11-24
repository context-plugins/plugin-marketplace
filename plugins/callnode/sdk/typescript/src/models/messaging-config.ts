import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookAuthCallnodeIoPhoneNumbersApiSchema,
  type WebhookAuthCallnodeIoPhoneNumbersApi,
} from "./webhook-auth-callnode-io-phone-numbers-api.js";

/** Messaging webhook configuration for inbound SMS/MMS to this number. */
export type MessagingConfig = {
  webhookUrl?: string | null;
  /** How CallNode authenticates to your webhook endpoint. */
  webhookAuth?: WebhookAuthCallnodeIoPhoneNumbersApi;
  /** @default true */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const messagingConfigProperties: s.Shape<MessagingConfig> = {
  webhookUrl: s.optionalNullable(s.string()),
  webhookAuth: s.optional(s.lazy(() => webhookAuthCallnodeIoPhoneNumbersApiSchema)),
  enabled: s.defaulted(s.boolean(), true),
};

export const messagingConfigInternalSchema: Schema<MessagingConfig> = s.object<MessagingConfig>(
  messagingConfigProperties,
  { additionalProperties: s.json() },
);

export const messagingConfigSchema: Schema<MessagingConfig> = s.lazySchema(() =>
  s.object<MessagingConfig>(
    {
      ...messagingConfigProperties,
      webhookUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
