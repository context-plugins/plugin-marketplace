import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentInternalSchema, attachmentSchema, type Attachment } from "./attachment.js";
import { tag1InternalSchema, tag1Schema, type Tag1 } from "./tag1.js";
import { emailAddressListSchema, type EmailAddressList } from "./unions/email-address-list.js";

export type SendEmailRequest = {
  /** `Name <address>` or a bare address on one of your active sending domains. */
  from: string;
  /** Recipients. With cc and bcc, 50 at most. */
  to: EmailAddressList;
  /** One address or a list. Each may be `Name <address>` or a bare address. */
  cc?: EmailAddressList;
  /** One address or a list. Each may be `Name <address>` or a bare address. */
  bcc?: EmailAddressList;
  subject: string;
  /** The HTML part. `html` or `text` is required; 2 MB together. */
  html?: string;
  /** The plain-text part. */
  text?: string;
  /**
   * Where replies go: addresses on exactly the From domain (a subdomain counts as a different
   * domain). A reply-to elsewhere answers 400 validation_error before anything is sent.
   */
  replyTo?: EmailAddressList;
  /**
   * Up to 10 custom headers. Names must start `X-` or `List-`, or be `In-Reply-To` / `References`.
   */
  headers?: Record<string, string>;
  /** 10 MB decoded in all. Executables and scripts are refused. */
  attachments?: Attachment[];
  /** Returned on the message and in every webhook. Names starting `cn_` are reserved. */
  tags?: Tag1[];
  /**
   * Receives `email.delivered` / `email.delayed` / `email.bounced` / `email.complained` /
   * `email.failed`, signed per attempt with this key's secret (X-Timestamp, X-Signature,
   * X-Event-Source).
   */
  statusWebhookUrl?: string;
  /** Up to 4 KB, returned unchanged on the message and in every webhook. */
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const sendEmailRequestProperties: s.Shape<SendEmailRequest> = {
  from: s.string(),
  to: emailAddressListSchema,
  cc: s.optional(s.lazy(() => emailAddressListSchema)),
  bcc: s.optional(s.lazy(() => emailAddressListSchema)),
  subject: s.string(),
  html: s.optional(s.string()),
  text: s.optional(s.string()),
  replyTo: s.optional(s.lazy(() => emailAddressListSchema)),
  headers: s.optional(s.record(s.string(), s.string())),
  attachments: s.optional(s.array(s.lazy(() => attachmentInternalSchema))),
  tags: s.optional(s.array(s.lazy(() => tag1InternalSchema))),
  statusWebhookUrl: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    replyTo: "reply_to",
  },
};

export const sendEmailRequestInternalSchema: Schema<SendEmailRequest> = s.object<SendEmailRequest>(
  sendEmailRequestProperties,
  { additionalProperties: s.json() },
);

export const sendEmailRequestSchema: Schema<SendEmailRequest> = s.lazySchema(() =>
  s.object<SendEmailRequest>(
    {
      ...sendEmailRequestProperties,
      subject: s.string().check(s.minLength(1), s.maxLength(255)),
      attachments: s.optional(s.array(s.lazy(() => attachmentSchema)).check(s.maxLength(10))),
      tags: s.optional(s.array(s.lazy(() => tag1Schema)).check(s.maxLength(10))),
      statusWebhookUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
