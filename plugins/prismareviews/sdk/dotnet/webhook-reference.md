# Webhooks

> Source: [PrismaReviewsWebhookParser](src/PrismaReviews/Webhooks/PrismaReviewsWebhookParser.cs)

## Usage

```csharp
var webhookRequest = await WebhookRequest.FromStream(requestBody, requestHeaders, cancellationToken);

var evt = parser.Parse(webhookRequest);

if (evt.Payload.TryGetReviewCreatedRequest(out var reviewCreatedRequest))
{
    // TODO: Handle 'reviewCreatedRequest' of type ReviewCreatedRequest
}
else if (evt.Payload.TryGetReviewUpdatedRequest(out var reviewUpdatedRequest))
{
    // TODO: Handle 'reviewUpdatedRequest' of type ReviewUpdatedRequest
}
else if (evt.Payload.TryGetReplyPublishedRequest(out var replyPublishedRequest))
{
    // TODO: Handle 'replyPublishedRequest' of type ReplyPublishedRequest
}
else if (evt.Payload.TryGetReplyFailedRequest(out var replyFailedRequest))
{
    // TODO: Handle 'replyFailedRequest' of type ReplyFailedRequest
}
else if (evt.Payload.TryGetReplyUnknownRequest(out var replyUnknownRequest))
{
    // TODO: Handle 'replyUnknownRequest' of type ReplyUnknownRequest
}
else if (evt.Payload.TryGetConnectionUpdatedRequest(out var connectionUpdatedRequest))
{
    // TODO: Handle 'connectionUpdatedRequest' of type ConnectionUpdatedRequest
}
else if (evt.Payload.TryGetLocationSyncFailedRequest(out var locationSyncFailedRequest))
{
    // TODO: Handle 'locationSyncFailedRequest' of type LocationSyncFailedRequest
}
else if (evt.Payload.TryGetLocationSyncRecoveredRequest(out var locationSyncRecoveredRequest))
{
    // TODO: Handle 'locationSyncRecoveredRequest' of type LocationSyncRecoveredRequest
}
else
{
    // A payload this SDK does not model: evt.Payload.TryGetUnknown(out var raw) carries the body.
}
```

## Forward compatibility

The parser has no discriminator, so the body's shape is the only signal. A body that matches no modeled schema does not fail the delivery: it lands in the union's Unknown arm, `evt.Payload.TryGetUnknown(out JsonElement raw)`, and re-serializes verbatim, and so does a known event whose body is malformed.

`evt.Payload.Match(onReviewCreatedRequest: …, onReviewUpdatedRequest: …, onReplyPublishedRequest: …, onReplyFailedRequest: …, onReplyUnknownRequest: …, onConnectionUpdatedRequest: …, onLocationSyncFailedRequest: …, onLocationSyncRecoveredRequest: …, otherwise: …)` handles every payload exhaustively: one arm per payload model in the order above, then the Unknown arm.

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

<code>[ReviewCreatedRequest](src/PrismaReviews/Models/ReviewCreatedRequest.cs)</code>

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

<code>[ReviewUpdatedRequest](src/PrismaReviews/Models/ReviewUpdatedRequest.cs)</code>

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

<code>[ReplyPublishedRequest](src/PrismaReviews/Models/ReplyPublishedRequest.cs)</code>

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

<code>[ReplyFailedRequest](src/PrismaReviews/Models/ReplyFailedRequest.cs)</code>

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

<code>[ReplyUnknownRequest](src/PrismaReviews/Models/ReplyUnknownRequest.cs)</code>

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

<code>[ConnectionUpdatedRequest](src/PrismaReviews/Models/ConnectionUpdatedRequest.cs)</code>

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

<code>[LocationSyncFailedRequest](src/PrismaReviews/Models/LocationSyncFailedRequest.cs)</code>

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

<code>[LocationSyncRecoveredRequest](src/PrismaReviews/Models/LocationSyncRecoveredRequest.cs)</code>

</dd>
</dl>

</dd>
</dl>

</details>

