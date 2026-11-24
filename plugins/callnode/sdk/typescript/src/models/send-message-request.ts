import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SendMessageRequest = {
  /** Plus sign followed by 7–15 digits. */
  to: string;
  /**
   * A number you own. For SMS/MMS it must be carrier-registered: associated with your 10DLC
   * campaign (local) or Toll-Free Verified (toll-free).
   */
  from: string;
  /** Message text. Required unless `media` is supplied. */
  body?: string;
  /**
   * Any entry makes this an MMS. Each entry is a public URL or the file itself as a base64 data URL
   * (`data:image/png;base64,...`). JPG, PNG, GIF, WebP, MP4 and PDF; up to 5 MB each. CallNode
   * stores a copy and delivers from its own URL. An inline file of an unsupported type or size is a
   * 400 `invalid_media`.
   */
  media?: string[];
  /** URL we POST delivery status updates to. */
  statusWebhookUrl?: string;
  /** @default false */
  tcpaOverride?: boolean;
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const sendMessageRequestProperties: s.Shape<SendMessageRequest> = {
  to: s.string(),
  from: s.string(),
  body: s.optional(s.string()),
  media: s.optional(s.array(s.string())),
  statusWebhookUrl: s.optional(s.string()),
  tcpaOverride: s.defaulted(s.boolean(), false),
  metadata: s.optional(s.record(s.string(), s.unknown())),
};

export const sendMessageRequestInternalSchema: Schema<SendMessageRequest> = s.object<SendMessageRequest>(
  sendMessageRequestProperties,
  { additionalProperties: s.json() },
);

export const sendMessageRequestSchema: Schema<SendMessageRequest> = s.lazySchema(() =>
  s.object<SendMessageRequest>(
    {
      ...sendMessageRequestProperties,
      to: s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$")),
      from: s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$")),
      media: s.optional(s.array(s.string().check(s.url()))),
      statusWebhookUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
