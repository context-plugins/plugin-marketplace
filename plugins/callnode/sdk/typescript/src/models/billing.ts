import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** On the send response only - how the message was priced. */
export type Billing = {
  /** to + cc + bcc. */
  recipients?: number;
  /** How many of them fell inside the plan's included allowance this period. */
  includedRecipients?: number;
  billableRecipients?: number;
  /** The marginal rate applied. */
  perRecipientUsd?: number;
  /** The amount charged (the quote */
  estimatedCostUsd?: number;
  /** Included recipients left this period after this message. */
  includedRemaining?: number;
  /** When the volume window resets. */
  periodEndsAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingSchema: Schema<Billing> = s.object<Billing>(
  {
    recipients: s.optional(s.int()),
    includedRecipients: s.optional(s.int()),
    billableRecipients: s.optional(s.int()),
    perRecipientUsd: s.optional(s.float64()),
    estimatedCostUsd: s.optional(s.float64()),
    includedRemaining: s.optional(s.int()),
    periodEndsAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
