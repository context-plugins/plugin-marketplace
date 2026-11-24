import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingSchema, type Billing } from "./billing.js";
import { chargeStatusSchema, type ChargeStatus } from "./charge-status.js";
import { eventSchema, type Event } from "./event.js";
import { sourceSchema, type Source } from "./source.js";
import { status1Schema, type Status1 } from "./status1.js";
import { tagSchema, type Tag } from "./tag.js";

export type EmailMessage = {
  id?: string;
  /**
   * `queued` only for the moment the message is being handed over (a list can catch it); the send
   * answers `sent` or `failed`.
   */
  status?: Status1;
  from?: string;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  /** What is billed - to + cc + bcc. */
  recipientCount?: number;
  subject?: string;
  /** The RFC 5322 Message-ID of the message as sent. */
  messageId?: string | null;
  /** The receiving server's reason on a bounce or failure. */
  error?: string | null;
  costUsd?: number | null;
  chargeStatus?: ChargeStatus | null;
  statusWebhookUrl?: string | null;
  tags?: Tag[] | null;
  metadata?: Record<string, unknown> | null;
  testMode?: boolean;
  source?: Source;
  /** Body plus decoded attachments. */
  sizeBytes?: number | null;
  createdAt?: Date;
  sentAt?: Date | null;
  deliveredAt?: Date | null;
  lastEventAt?: Date | null;
  /** On the retrieve response only, oldest first. */
  events?: Event[];
  /** On the send response only - what this message cost at its place on the volume curve. */
  estimatedCost?: number | null;
  /** On the send response only - how the message was priced. */
  billing?: Billing | null;
  /** On the send response only - true when an idempotency key replayed an earlier send. */
  replay?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const emailMessageProperties: s.Shape<EmailMessage> = {
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1Schema)),
  from: s.optional(s.string()),
  to: s.optional(s.array(s.string())),
  cc: s.optional(s.array(s.string())),
  bcc: s.optional(s.array(s.string())),
  recipientCount: s.optional(s.int()),
  subject: s.optional(s.string()),
  messageId: s.optionalNullable(s.string()),
  error: s.optionalNullable(s.string()),
  costUsd: s.optionalNullable(s.float64()),
  chargeStatus: s.optionalNullable(s.lazy(() => chargeStatusSchema)),
  statusWebhookUrl: s.optionalNullable(s.string()),
  tags: s.optionalNullable(s.array(s.lazy(() => tagSchema))),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  testMode: s.optional(s.boolean()),
  source: s.optional(s.lazy(() => sourceSchema)),
  sizeBytes: s.optionalNullable(s.int()),
  createdAt: s.optional(s.dateTime()),
  sentAt: s.optionalNullable(s.dateTime()),
  deliveredAt: s.optionalNullable(s.dateTime()),
  lastEventAt: s.optionalNullable(s.dateTime()),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  estimatedCost: s.optionalNullable(s.float64()),
  billing: s.optionalNullable(s.lazy(() => billingSchema)),
  replay: s.optional(s.boolean()),
};

export const emailMessageInternalSchema: Schema<EmailMessage> = s.object<EmailMessage>(
  emailMessageProperties,
  { additionalProperties: s.json() },
);

export const emailMessageSchema: Schema<EmailMessage> = s.lazySchema(() =>
  s.object<EmailMessage>(
    {
      ...emailMessageProperties,
      statusWebhookUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
