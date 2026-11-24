# Webhooks

> Source: [parseCompabaseWebhookEvent](src/webhooks/compabase-webhook-event.ts)

## Usage

```ts
const webhookRequest = await WebhookRequest.fromRequest(request);

const event = parseCompabaseWebhookEvent(webhookRequest);

if (event.isWatchlistWebhookEvent()) {
  // TODO: Handle 'event.payload' of type WatchlistWebhookEvent
} else {
  // TODO: Handle 'event' of type CompabaseWebhookEvent, whose payload matches no listed event
}
```

<details>
<summary>Watchlist change event</summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sent to the webhook URL configured in the portal (Settings → Notifications) or with the MCP tool
`set_webhook_url`, for every company on your watchlist that changes. Choose which event types
you receive in the same settings (default: all).

**Signature:** header `X-Compabase-Signature: t=,v1=`, where `v1` is
HMAC-SHA256 of the raw request body with your webhook secret.
Respond with any 2xx within 10 seconds; failed deliveries are retried.

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[WatchlistWebhookEvent](src/models/watchlist-webhook-event.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

