# Webhooks

> Source: [parsePrismaReviewsWebhookEvent](src/webhooks/prisma-reviews-webhook-event.ts)

## Usage

```ts
const webhookRequest = await WebhookRequest.fromRequest(request);

const event = parsePrismaReviewsWebhookEvent(webhookRequest);

if (event.isReviewCreatedRequest()) {
  // TODO: Handle 'event.payload' of type ReviewCreatedRequest
} else if (event.isReviewUpdatedRequest()) {
  // TODO: Handle 'event.payload' of type ReviewUpdatedRequest
} else if (event.isReplyPublishedRequest()) {
  // TODO: Handle 'event.payload' of type ReplyPublishedRequest
} else if (event.isReplyFailedRequest()) {
  // TODO: Handle 'event.payload' of type ReplyFailedRequest
} else if (event.isReplyUnknownRequest()) {
  // TODO: Handle 'event.payload' of type ReplyUnknownRequest
} else if (event.isConnectionUpdatedRequest()) {
  // TODO: Handle 'event.payload' of type ConnectionUpdatedRequest
} else if (event.isLocationSyncFailedRequest()) {
  // TODO: Handle 'event.payload' of type LocationSyncFailedRequest
} else if (event.isLocationSyncRecoveredRequest()) {
  // TODO: Handle 'event.payload' of type LocationSyncRecoveredRequest
} else {
  // TODO: Handle 'event' of type PrismaReviewsWebhookEvent, whose payload matches no listed event
}
```

<details>
<summary>webhook_review_created</summary>

<dl>
<dd>

### Description

<dl>
<dd>

A new review was found on a connected location. Sent as a signed `POST` to every endpoint subscribed to `review.created` or `*`. Answer with any 2xx within 10 seconds; failed deliveries are retried with exponential backoff within your plan's retry window.

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[ReviewCreatedRequest](src/models/review-created-request.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>webhook_review_updated</summary>

<dl>
<dd>

### Description

<dl>
<dd>

A review's content changed on the platform, or a reply appeared or changed there. Sent as a signed `POST` to every endpoint subscribed to `review.updated` or `*`. Answer with any 2xx within 10 seconds; failed deliveries are retried with exponential backoff within your plan's retry window.

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[ReviewUpdatedRequest](src/models/review-updated-request.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>webhook_reply_published</summary>

<dl>
<dd>

### Description

<dl>
<dd>

A reply sent through Prisma is live on the platform. Sent as a signed `POST` to every endpoint subscribed to `reply.published` or `*`. Answer with any 2xx within 10 seconds; failed deliveries are retried with exponential backoff within your plan's retry window.

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[ReplyPublishedRequest](src/models/reply-published-request.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>webhook_reply_failed</summary>

<dl>
<dd>

### Description

<dl>
<dd>

The platform refused a reply, or every retry failed. Sent as a signed `POST` to every endpoint subscribed to `reply.failed` or `*`. Answer with any 2xx within 10 seconds; failed deliveries are retried with exponential backoff within your plan's retry window.

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[ReplyFailedRequest](src/models/reply-failed-request.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>webhook_reply_unknown</summary>

<dl>
<dd>

### Description

<dl>
<dd>

A reply was sent but the platform never answered (the connection dropped) and the reply can't be read back, so Prisma stopped without retrying: it may or may not be live. Check the review on the platform before posting again. Only on platforms whose API can't return replies (Judge.me, eBay, Trusted Shops, eKomi); elsewhere Prisma reconciles by reading the review. Sent as a signed `POST` to every endpoint subscribed to `reply.unknown` or `*`. Answer with any 2xx within 10 seconds; failed deliveries are retried with exponential backoff within your plan's retry window.

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[ReplyUnknownRequest](src/models/reply-unknown-request.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>webhook_connection_updated</summary>

<dl>
<dd>

### Description

<dl>
<dd>

An OAuth connection became `active`, or a connection became `reauth_required`. Sent as a signed `POST` to every endpoint subscribed to `connection.updated` or `*`. Answer with any 2xx within 10 seconds; failed deliveries are retried with exponential backoff within your plan's retry window.

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[ConnectionUpdatedRequest](src/models/connection-updated-request.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>webhook_location_sync_failed</summary>

<dl>
<dd>

### Description

<dl>
<dd>

A location's checks failed 3 times in a row (sent once per streak). The location keeps being retried; `GET /v1/locations/{id}` shows `sync.last_error`. Sent as a signed `POST` to every endpoint subscribed to `location.sync_failed` or `*`. Answer with any 2xx within 10 seconds; failed deliveries are retried with exponential backoff within your plan's retry window.

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[LocationSyncFailedRequest](src/models/location-sync-failed-request.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>webhook_location_sync_recovered</summary>

<dl>
<dd>

### Description

<dl>
<dd>

A location that had sent `location.sync_failed` was checked successfully again. Sent as a signed `POST` to every endpoint subscribed to `location.sync_recovered` or `*`. Answer with any 2xx within 10 seconds; failed deliveries are retried with exponential backoff within your plan's retry window.

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[LocationSyncRecoveredRequest](src/models/location-sync-recovered-request.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

