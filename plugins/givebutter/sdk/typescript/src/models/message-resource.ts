import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MessageResource = {
  id: string;
  status: string;
  channel: string;
  internalName: string;
  subject?: string;
  preheader?: string;
  body: string;
  recipientFilters: string;
  recipientCount: string;
  sentAt: string;
  sendingAt: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageResourceSchema: Schema<MessageResource> = s.object<MessageResource>(
  {
    id: s.string(),
    status: s.string(),
    channel: s.string(),
    internalName: s.string(),
    subject: s.optional(s.string()),
    preheader: s.optional(s.string()),
    body: s.string(),
    recipientFilters: s.string(),
    recipientCount: s.string(),
    sentAt: s.string(),
    sendingAt: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      internalName: "internal_name",
      recipientFilters: "recipient_filters",
      recipientCount: "recipient_count",
      sentAt: "sent_at",
      sendingAt: "sending_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
