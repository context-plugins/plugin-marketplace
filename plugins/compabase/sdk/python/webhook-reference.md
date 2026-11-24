# Webhooks

> Source: [parse_webhook_event](compabase/webhooks/events.py)

## Usage

```python
from compabase import UnknownPayload, WebhookRequest
from compabase.webhooks import parse_webhook_event

webhook_request = WebhookRequest(body=request_body, headers=request_headers)

payload = parse_webhook_event(webhook_request)

match payload:
    case UnknownPayload():
        ...  # A body no payload model accepts: payload.to_dict() carries it
    case _:
        ...  # TODO: Handle 'payload' of type CompabaseEventPayload
```

## Forward compatibility

The API names no event type, so the body's shape is the only signal: `parse_webhook_event` returns `CompabaseEventPayload`: the body decoded as `WatchlistWebhookEvent` when that model accepts it, or an `UnknownPayload` keeping the body as it arrived when it does not. A new event whose body fits a known model parses as that model.

A body that is not JSON is a `ValueError`.

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

<code>[WatchlistWebhookEvent](compabase/models/watchlist_webhook_event.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

