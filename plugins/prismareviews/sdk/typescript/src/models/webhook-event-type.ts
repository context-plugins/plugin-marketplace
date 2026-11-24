import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WebhookEventType = {
  ReviewCreated: "review.created",
  ReviewUpdated: "review.updated",
  ReplyPublished: "reply.published",
  ReplyFailed: "reply.failed",
  ReplyUnknown: "reply.unknown",
  ConnectionUpdated: "connection.updated",
  LocationSyncFailed: "location.sync_failed",
  LocationSyncRecovered: "location.sync_recovered",
} as const;
export type WebhookEventType = (typeof WebhookEventType)[keyof typeof WebhookEventType] | (string & {});

export const webhookEventTypeSchema: EnumSchema<WebhookEventType> =
  s.enumOf<WebhookEventType>(WebhookEventType);
