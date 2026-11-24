import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  messagingConfigInternalSchema,
  messagingConfigSchema,
  type MessagingConfig,
} from "./messaging-config.js";
import { voiceConfigInternalSchema, voiceConfigSchema, type VoiceConfig } from "./voice-config.js";

export type ApiV1NumbersRequest = {
  friendlyName?: string;
  /**
   * Your own labels for the number. Trimmed, de-duplicated case-insensitively, returned on every
   * number, filterable on the dashboard. PATCH replaces the whole list; send [] to clear.
   */
  tags?: string[];
  /**
   * Voice configuration — how inbound calls to this number are answered. Three modes: a
   * conversational WEBHOOK agent (webhookUrl set), SIP DELIVERY to a literal endpoint (sipUri set),
   * or SIP DELIVERY to one of your saved trunks (trunkId set). sipUri and trunkId are mutually
   * exclusive — setting one clears the other, and either takes precedence over the webhook.
   * Wholesale numbers must always keep at least one mode — a change that would leave none is
   * rejected with 400.
   */
  voice?: VoiceConfig;
  /** Messaging webhook configuration for inbound SMS/MMS to this number. */
  messaging?: MessagingConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1NumbersRequestProperties: s.Shape<ApiV1NumbersRequest> = {
  friendlyName: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
  voice: s.optional(s.lazy(() => voiceConfigInternalSchema)),
  messaging: s.optional(s.lazy(() => messagingConfigInternalSchema)),
};

export const apiV1NumbersRequestInternalSchema: Schema<ApiV1NumbersRequest> = s.object<ApiV1NumbersRequest>(
  apiV1NumbersRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1NumbersRequestSchema: Schema<ApiV1NumbersRequest> = s.lazySchema(() =>
  s.object<ApiV1NumbersRequest>(
    {
      ...apiV1NumbersRequestProperties,
      friendlyName: s.optional(s.string().check(s.maxLength(100))),
      tags: s.optional(
        s
          .array(
            s.string().check(s.minLength(1), s.maxLength(24), s.pattern("^[A-Za-z0-9][A-Za-z0-9 ._-]*$")),
          )
          .check(s.maxLength(10)),
      ),
      voice: s.optional(s.lazy(() => voiceConfigSchema)),
      messaging: s.optional(s.lazy(() => messagingConfigSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
