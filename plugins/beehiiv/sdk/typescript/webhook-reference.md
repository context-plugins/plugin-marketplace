# Webhooks

> Source: [parseBeehiivWebhookEvent](src/webhooks/beehiiv-webhook-event.ts)

## Usage

```ts
const webhookRequest = await WebhookRequest.fromRequest(request);

const event = parseBeehiivWebhookEvent(webhookRequest);

if (event.isNewsletterListSubscription()) {
  // TODO: Handle 'event.payload' of type NewsletterListSubscription
} else if (event.isSubscriptionBeehiivWebhooksApi()) {
  // TODO: Handle 'event.payload' of type SubscriptionBeehiivWebhooksApi
} else if (event.isPodcastEpisodeBeehiivWebhooksApi()) {
  // TODO: Handle 'event.payload' of type PodcastEpisodeBeehiivWebhooksApi
} else if (event.isPodcastPrivateFeed()) {
  // TODO: Handle 'event.payload' of type PodcastPrivateFeed
} else if (event.isPostBeehiivWebhooksApi()) {
  // TODO: Handle 'event.payload' of type PostBeehiivWebhooksApi
} else if (event.isSurveyResponse()) {
  // TODO: Handle 'event.payload' of type SurveyResponse
} else {
  // TODO: Handle 'event' of type BeehiivWebhookEvent, whose payload matches no listed event
}
```

<details>
<summary>subscribed</summary>

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

<code>[NewsletterListSubscription](src/models/newsletter-list-subscription.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>unsubscribed</summary>

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

<code>[NewsletterListSubscription](src/models/newsletter-list-subscription.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>paused</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>resumed</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>episode-published</summary>

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

<code>[PodcastEpisodeBeehiivWebhooksApi](src/models/podcast-episode-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>episode-updated</summary>

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

<code>[PodcastEpisodeBeehiivWebhooksApi](src/models/podcast-episode-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>episode-archived</summary>

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

<code>[PodcastEpisodeBeehiivWebhooksApi](src/models/podcast-episode-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>episode-deleted</summary>

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

<code>[PodcastEpisodeBeehiivWebhooksApi](src/models/podcast-episode-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>private-feed-activated</summary>

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

<code>[PodcastPrivateFeed](src/models/podcast-private-feed.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>sent</summary>

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

<code>[PostBeehiivWebhooksApi](src/models/post-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>updated</summary>

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

<code>[PostBeehiivWebhooksApi](src/models/post-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>scheduled</summary>

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

<code>[PostBeehiivWebhooksApi](src/models/post-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>created</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>confirmed</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>deleted</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>upgraded</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>downgraded</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>tier-paused</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>tier-resumed</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>tier-added</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>tier-deleted</summary>

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

<code>[SubscriptionBeehiivWebhooksApi](src/models/subscription-beehiiv-webhooks-api.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary>submitted</summary>

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

<code>[SurveyResponse](src/models/survey-response.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

