# Webhooks

> Source: [parse_webhook_event](prisma_reviews/webhooks/events.py)

## Usage

```python
from prisma_reviews import UnknownPayload, WebhookRequest
from prisma_reviews.webhooks import parse_webhook_event

webhook_request = WebhookRequest(body=request_body, headers=request_headers)

payload = parse_webhook_event(webhook_request)

match payload:
    case UnknownPayload():
        ...  # A body no payload model accepts: payload.to_dict() carries it
    case _:
        ...  # TODO: Handle 'payload' of type PrismaReviewsEventPayload
```

## Forward compatibility

The API names no event type, so the body's shape is the only signal: `parse_webhook_event` returns `PrismaReviewsEventPayload`: the body decoded as whichever of `ReviewCreatedRequest`, `ReviewUpdatedRequest`, `ReplyPublishedRequest`, `ReplyFailedRequest`, `ReplyUnknownRequest`, `ConnectionUpdatedRequest`, `LocationSyncFailedRequest`, `LocationSyncRecoveredRequest` it fits best (pydantic's smart union picks the model with the most declared fields set, the first listed on a tie), or an `UnknownPayload` keeping the body as it arrived when none accepts it. A new event whose body fits a known model parses as that model.

A body that is not JSON is a `ValueError`.

<details>
<summary><code>webhook_review_created</code></summary>

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

<code>[ReviewCreatedRequest](prisma_reviews/models/review_created_request.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhook_review_updated</code></summary>

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

<code>[ReviewUpdatedRequest](prisma_reviews/models/review_updated_request.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhook_reply_published</code></summary>

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

<code>[ReplyPublishedRequest](prisma_reviews/models/reply_published_request.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhook_reply_failed</code></summary>

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

<code>[ReplyFailedRequest](prisma_reviews/models/reply_failed_request.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhook_reply_unknown</code></summary>

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

<code>[ReplyUnknownRequest](prisma_reviews/models/reply_unknown_request.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhook_connection_updated</code></summary>

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

<code>[ConnectionUpdatedRequest](prisma_reviews/models/connection_updated_request.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhook_location_sync_failed</code></summary>

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

<code>[LocationSyncFailedRequest](prisma_reviews/models/location_sync_failed_request.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhook_location_sync_recovered</code></summary>

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

<code>[LocationSyncRecoveredRequest](prisma_reviews/models/location_sync_recovered_request.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

