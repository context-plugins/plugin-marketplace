# Webhooks

> Source: [CompabaseWebhookParser](src/Compabase/Webhooks/CompabaseWebhookParser.cs)

## Usage

```csharp
var webhookRequest = await WebhookRequest.FromStream(requestBody, requestHeaders, cancellationToken);

var evt = parser.Parse(webhookRequest);

// TODO: Handle 'evt.Payload' of type WatchlistWebhookEvent
```

<details>
<summary><code>Watchlist change event</code></summary>

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

<code>[WatchlistWebhookEvent](src/Compabase/Models/WatchlistWebhookEvent.cs)</code>

</dd>
</dl>

</dd>
</dl>

</details>

