import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Must attach to a contact_id and/or deal_id. */
export type ActivityInput = {
  /** A registered activity.type (note/email/call/meeting/task/...). */
  type?: string;
  body?: string;
  contactId?: string;
  dealId?: string;
  /** ISO datetime; backdates imported history. */
  occurredAt?: string;
  customFields?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityInputSchema: Schema<ActivityInput> = s.object<ActivityInput>(
  {
    type: s.optional(s.string()),
    body: s.optional(s.string()),
    contactId: s.optional(s.string()),
    dealId: s.optional(s.string()),
    occurredAt: s.optional(s.string()),
    customFields: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      contactId: "contact_id",
      dealId: "deal_id",
      occurredAt: "occurred_at",
      customFields: "custom_fields",
    },
  },
  { additionalProperties: s.json() },
);
