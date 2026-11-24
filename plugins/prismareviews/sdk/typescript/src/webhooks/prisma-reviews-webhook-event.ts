import * as s from "../core/validation/index.js";
import { readWebhookBody } from "../core/webhooks/webhook-event-parser.js";
import type { WebhookRequest } from "../core/webhooks/webhook-request.js";
import {
  connectionUpdatedRequestSchema,
  type ConnectionUpdatedRequest,
} from "../models/connection-updated-request.js";
import {
  locationSyncFailedRequestSchema,
  type LocationSyncFailedRequest,
} from "../models/location-sync-failed-request.js";
import {
  locationSyncRecoveredRequestSchema,
  type LocationSyncRecoveredRequest,
} from "../models/location-sync-recovered-request.js";
import { replyFailedRequestSchema, type ReplyFailedRequest } from "../models/reply-failed-request.js";
import {
  replyPublishedRequestSchema,
  type ReplyPublishedRequest,
} from "../models/reply-published-request.js";
import { replyUnknownRequestSchema, type ReplyUnknownRequest } from "../models/reply-unknown-request.js";
import { reviewCreatedRequestSchema, type ReviewCreatedRequest } from "../models/review-created-request.js";
import { reviewUpdatedRequestSchema, type ReviewUpdatedRequest } from "../models/review-updated-request.js";

type PrismaReviewsEventPayload =
  | ReviewCreatedRequest
  | ReviewUpdatedRequest
  | ReplyPublishedRequest
  | ReplyFailedRequest
  | ReplyUnknownRequest
  | ConnectionUpdatedRequest
  | LocationSyncFailedRequest
  | LocationSyncRecoveredRequest
  | Record<string, unknown>;

const prismaReviewsEventPayloadSchema = s.bestFit<PrismaReviewsEventPayload>([
  reviewCreatedRequestSchema,
  reviewUpdatedRequestSchema,
  replyPublishedRequestSchema,
  replyFailedRequestSchema,
  replyUnknownRequestSchema,
  connectionUpdatedRequestSchema,
  locationSyncFailedRequestSchema,
  locationSyncRecoveredRequestSchema,
]);

export class PrismaReviewsWebhookEvent<out P extends PrismaReviewsEventPayload = PrismaReviewsEventPayload> {
  readonly payload: P;

  constructor(payload: P) {
    this.payload = payload;
  }

  /**
   * A new review was found on a connected location. Sent as a signed `POST` to every endpoint
   * subscribed to `review.created` or `*`. Answer with any 2xx within 10 seconds; failed deliveries
   * are retried with exponential backoff within your plan's retry window.
   */
  isReviewCreatedRequest(): this is PrismaReviewsWebhookEvent<ReviewCreatedRequest> {
    return reviewCreatedRequestSchema.matches(this.payload);
  }

  /**
   * A review's content changed on the platform, or a reply appeared or changed there. Sent as a
   * signed `POST` to every endpoint subscribed to `review.updated` or `*`. Answer with any 2xx
   * within 10 seconds; failed deliveries are retried with exponential backoff within your plan's
   * retry window.
   */
  isReviewUpdatedRequest(): this is PrismaReviewsWebhookEvent<ReviewUpdatedRequest> {
    return reviewUpdatedRequestSchema.matches(this.payload);
  }

  /**
   * A reply sent through Prisma is live on the platform. Sent as a signed `POST` to every endpoint
   * subscribed to `reply.published` or `*`. Answer with any 2xx within 10 seconds; failed
   * deliveries are retried with exponential backoff within your plan's retry window.
   */
  isReplyPublishedRequest(): this is PrismaReviewsWebhookEvent<ReplyPublishedRequest> {
    return replyPublishedRequestSchema.matches(this.payload);
  }

  /**
   * The platform refused a reply, or every retry failed. Sent as a signed `POST` to every endpoint
   * subscribed to `reply.failed` or `*`. Answer with any 2xx within 10 seconds; failed deliveries
   * are retried with exponential backoff within your plan's retry window.
   */
  isReplyFailedRequest(): this is PrismaReviewsWebhookEvent<ReplyFailedRequest> {
    return replyFailedRequestSchema.matches(this.payload);
  }

  /**
   * A reply was sent but the platform never answered (the connection dropped) and the reply can't
   * be read back, so Prisma stopped without retrying: it may or may not be live. Check the review
   * on the platform before posting again. Only on platforms whose API can't return replies
   * (Judge.me, eBay, Trusted Shops, eKomi); elsewhere Prisma reconciles by reading the review. Sent
   * as a signed `POST` to every endpoint subscribed to `reply.unknown` or `*`. Answer with any 2xx
   * within 10 seconds; failed deliveries are retried with exponential backoff within your plan's
   * retry window.
   */
  isReplyUnknownRequest(): this is PrismaReviewsWebhookEvent<ReplyUnknownRequest> {
    return replyUnknownRequestSchema.matches(this.payload);
  }

  /**
   * An OAuth connection became `active`, or a connection became `reauth_required`. Sent as a signed
   * `POST` to every endpoint subscribed to `connection.updated` or `*`. Answer with any 2xx within
   * 10 seconds; failed deliveries are retried with exponential backoff within your plan's retry
   * window.
   */
  isConnectionUpdatedRequest(): this is PrismaReviewsWebhookEvent<ConnectionUpdatedRequest> {
    return connectionUpdatedRequestSchema.matches(this.payload);
  }

  /**
   * A location's checks failed 3 times in a row (sent once per streak). The location keeps being
   * retried; `GET /v1/locations/{id}` shows `sync.last_error`. Sent as a signed `POST` to every
   * endpoint subscribed to `location.sync_failed` or `*`. Answer with any 2xx within 10 seconds;
   * failed deliveries are retried with exponential backoff within your plan's retry window.
   */
  isLocationSyncFailedRequest(): this is PrismaReviewsWebhookEvent<LocationSyncFailedRequest> {
    return locationSyncFailedRequestSchema.matches(this.payload);
  }

  /**
   * A location that had sent `location.sync_failed` was checked successfully again. Sent as a
   * signed `POST` to every endpoint subscribed to `location.sync_recovered` or `*`. Answer with any
   * 2xx within 10 seconds; failed deliveries are retried with exponential backoff within your
   * plan's retry window.
   */
  isLocationSyncRecoveredRequest(): this is PrismaReviewsWebhookEvent<LocationSyncRecoveredRequest> {
    return locationSyncRecoveredRequestSchema.matches(this.payload);
  }
}

export function parsePrismaReviewsWebhookEvent(request: WebhookRequest): PrismaReviewsWebhookEvent {
  return new PrismaReviewsWebhookEvent(prismaReviewsEventPayloadSchema.decode(readWebhookBody(request)));
}
