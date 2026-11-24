import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SentMessage = {
  body?: string;
  createdAt?: string;
  /** @default 0 */
  creditsUsed?: number;
  id?: string;
  mediaUrl?: string;
  phone?: string;
  shopId?: string;
  subscriberId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sentMessageSchema: Schema<SentMessage> = s.object<SentMessage>(
  {
    body: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    creditsUsed: s.defaulted(s.int(), 0),
    id: s.optional(s.string()),
    mediaUrl: s.optional(s.string()),
    phone: s.optional(s.string()),
    shopId: s.optional(s.string()),
    subscriberId: s.optional(s.string()),
    _keysMap: {
      createdAt: "created_at",
      creditsUsed: "credits_used",
      mediaUrl: "media_url",
      shopId: "shop_id",
      subscriberId: "subscriber_id",
    },
  },
  { additionalProperties: s.json() },
);
