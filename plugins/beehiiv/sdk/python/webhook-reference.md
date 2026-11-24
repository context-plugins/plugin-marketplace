# Webhooks

> Source: [parse_webhook_event](beehiiv/webhooks/events.py)

## Usage

```python
from beehiiv import UnknownPayload, WebhookRequest
from beehiiv.webhooks import parse_webhook_event

webhook_request = WebhookRequest(body=request_body, headers=request_headers)

payload = parse_webhook_event(webhook_request)

match payload:
    case UnknownPayload():
        ...  # A body no payload model accepts: payload.to_dict() carries it
    case _:
        ...  # TODO: Handle 'payload' of type BeehiivEventPayload
```

## Forward compatibility

The API names no event type, so the body's shape is the only signal: `parse_webhook_event` returns `BeehiivEventPayload`: the body decoded as whichever of `NewsletterListSubscription`, `SubscriptionBeehiivWebhooksApi`, `PodcastEpisodeBeehiivWebhooksApi`, `PodcastPrivateFeed`, `PostBeehiivWebhooksApi`, `SurveyResponse` it fits best (pydantic's smart union picks the model with the most declared fields set, the first listed on a tie), or an `UnknownPayload` keeping the body as it arrived when none accepts it. A new event whose body fits a known model parses as that model.

A body that is not JSON is a `ValueError`.

<details>
<summary><code>subscribed</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[NewsletterListSubscription](beehiiv/models/newsletter_list_subscription.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unsubscribed</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[NewsletterListSubscription](beehiiv/models/newsletter_list_subscription.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paused</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resumed</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>episode-published</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[PodcastEpisodeBeehiivWebhooksApi](beehiiv/models/podcast_episode_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>episode-updated</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[PodcastEpisodeBeehiivWebhooksApi](beehiiv/models/podcast_episode_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>episode-archived</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[PodcastEpisodeBeehiivWebhooksApi](beehiiv/models/podcast_episode_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>episode-deleted</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[PodcastEpisodeBeehiivWebhooksApi](beehiiv/models/podcast_episode_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>private-feed-activated</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[PodcastPrivateFeed](beehiiv/models/podcast_private_feed.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sent</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[PostBeehiivWebhooksApi](beehiiv/models/post_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updated</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[PostBeehiivWebhooksApi](beehiiv/models/post_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scheduled</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[PostBeehiivWebhooksApi](beehiiv/models/post_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>created</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmed</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleted</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upgraded</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downgraded</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tier-paused</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tier-resumed</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tier-added</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tier-deleted</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SubscriptionBeehiivWebhooksApi](beehiiv/models/subscription_beehiiv_webhooks_api.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitted</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

-

</dd>
</dl>

### Payload

<dl>
<dd>

<code>[SurveyResponse](beehiiv/models/survey_response.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

