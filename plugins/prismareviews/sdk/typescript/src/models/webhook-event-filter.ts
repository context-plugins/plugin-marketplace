import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An event type, or `*` for all. */
export const WebhookEventFilter = {
  ReviewCreated: "review.created",
  ReviewUpdated: "review.updated",
  ReplyPublished: "reply.published",
  ReplyFailed: "reply.failed",
  ReplyUnknown: "reply.unknown",
  ConnectionUpdated: "connection.updated",
  U002A: "*",
} as const;
export type WebhookEventFilter = (typeof WebhookEventFilter)[keyof typeof WebhookEventFilter] | (string & {});

export const webhookEventFilterSchema: EnumSchema<WebhookEventFilter> =
  s.enumOf<WebhookEventFilter>(WebhookEventFilter);
