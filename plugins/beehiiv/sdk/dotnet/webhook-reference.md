# Webhooks

> Source: [BeehiivWebhookParser](src/Beehiiv/Webhooks/BeehiivWebhookParser.cs)

## Usage

```csharp
var webhookRequest = await WebhookRequest.FromStream(requestBody, requestHeaders, cancellationToken);

var evt = parser.Parse(webhookRequest);

if (evt.Payload.TryGetNewsletterListSubscription(out var newsletterListSubscription))
{
    // TODO: Handle 'newsletterListSubscription' of type NewsletterListSubscription
}
else if (evt.Payload.TryGetNewsletterListSubscription(out var newsletterListSubscription))
{
    // TODO: Handle 'newsletterListSubscription' of type NewsletterListSubscription
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetPodcastEpisodeBeehiivWebhooksApi(out var podcastEpisodeBeehiivWebhooksApi))
{
    // TODO: Handle 'podcastEpisodeBeehiivWebhooksApi' of type PodcastEpisodeBeehiivWebhooksApi
}
else if (evt.Payload.TryGetPodcastEpisodeBeehiivWebhooksApi(out var podcastEpisodeBeehiivWebhooksApi))
{
    // TODO: Handle 'podcastEpisodeBeehiivWebhooksApi' of type PodcastEpisodeBeehiivWebhooksApi
}
else if (evt.Payload.TryGetPodcastEpisodeBeehiivWebhooksApi(out var podcastEpisodeBeehiivWebhooksApi))
{
    // TODO: Handle 'podcastEpisodeBeehiivWebhooksApi' of type PodcastEpisodeBeehiivWebhooksApi
}
else if (evt.Payload.TryGetPodcastEpisodeBeehiivWebhooksApi(out var podcastEpisodeBeehiivWebhooksApi))
{
    // TODO: Handle 'podcastEpisodeBeehiivWebhooksApi' of type PodcastEpisodeBeehiivWebhooksApi
}
else if (evt.Payload.TryGetPodcastPrivateFeed(out var podcastPrivateFeed))
{
    // TODO: Handle 'podcastPrivateFeed' of type PodcastPrivateFeed
}
else if (evt.Payload.TryGetPostBeehiivWebhooksApi(out var postBeehiivWebhooksApi))
{
    // TODO: Handle 'postBeehiivWebhooksApi' of type PostBeehiivWebhooksApi
}
else if (evt.Payload.TryGetPostBeehiivWebhooksApi(out var postBeehiivWebhooksApi))
{
    // TODO: Handle 'postBeehiivWebhooksApi' of type PostBeehiivWebhooksApi
}
else if (evt.Payload.TryGetPostBeehiivWebhooksApi(out var postBeehiivWebhooksApi))
{
    // TODO: Handle 'postBeehiivWebhooksApi' of type PostBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSubscriptionBeehiivWebhooksApi(out var subscriptionBeehiivWebhooksApi))
{
    // TODO: Handle 'subscriptionBeehiivWebhooksApi' of type SubscriptionBeehiivWebhooksApi
}
else if (evt.Payload.TryGetSurveyResponse(out var surveyResponse))
{
    // TODO: Handle 'surveyResponse' of type SurveyResponse
}
else
{
    // A payload this SDK does not model: evt.Payload.TryGetUnknown(out var raw) carries the body.
}
```

## Forward compatibility

The parser has no discriminator, so the body's shape is the only signal. A body that matches no modeled schema does not fail the delivery: it lands in the union's Unknown arm, `evt.Payload.TryGetUnknown(out JsonElement raw)`, and re-serializes verbatim, and so does a known event whose body is malformed.

`evt.Payload.Match(onNewsletterListSubscription: …, onSubscriptionBeehiivWebhooksApi: …, onPodcastEpisodeBeehiivWebhooksApi: …, onPodcastPrivateFeed: …, onPostBeehiivWebhooksApi: …, onSurveyResponse: …, otherwise: …)` handles every payload exhaustively: one arm per payload model in the order above, then the Unknown arm.

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

<code>[NewsletterListSubscription](src/Beehiiv/Models/NewsletterListSubscription.cs)</code>

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

<code>[NewsletterListSubscription](src/Beehiiv/Models/NewsletterListSubscription.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[PodcastEpisodeBeehiivWebhooksApi](src/Beehiiv/Models/PodcastEpisodeBeehiivWebhooksApi.cs)</code>

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

<code>[PodcastEpisodeBeehiivWebhooksApi](src/Beehiiv/Models/PodcastEpisodeBeehiivWebhooksApi.cs)</code>

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

<code>[PodcastEpisodeBeehiivWebhooksApi](src/Beehiiv/Models/PodcastEpisodeBeehiivWebhooksApi.cs)</code>

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

<code>[PodcastEpisodeBeehiivWebhooksApi](src/Beehiiv/Models/PodcastEpisodeBeehiivWebhooksApi.cs)</code>

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

<code>[PodcastPrivateFeed](src/Beehiiv/Models/PodcastPrivateFeed.cs)</code>

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

<code>[PostBeehiivWebhooksApi](src/Beehiiv/Models/PostBeehiivWebhooksApi.cs)</code>

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

<code>[PostBeehiivWebhooksApi](src/Beehiiv/Models/PostBeehiivWebhooksApi.cs)</code>

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

<code>[PostBeehiivWebhooksApi](src/Beehiiv/Models/PostBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SubscriptionBeehiivWebhooksApi](src/Beehiiv/Models/SubscriptionBeehiivWebhooksApi.cs)</code>

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

<code>[SurveyResponse](src/Beehiiv/Models/SurveyResponse.cs)</code>

</dd>
</dl>

</dd>
</dl>

</details>

