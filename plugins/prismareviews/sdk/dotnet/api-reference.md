# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [PrismaReviewsClient](src/PrismaReviews/PrismaReviewsClient.cs)

## Connections

> Source: [Connections](src/PrismaReviews/Api/Connections.cs)

<details>
<summary><code>Task&lt;ConnectLink&gt; CreateConnectLink(CreateConnectLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A link the owner of a platform account opens to connect it in their browser, with no Prisma account or API key. Connections made through it belong to your workspace and to the mode of the key that created the link, and carry `metadata: {"via": "connect_link"}`. Valid for 7 days and reusable: treat it like a password-reset link. The body is optional.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.CreateConnectLink(new CreateConnectLinkRequest
    {
        Body = new V1ConnectLinksRequest
        {
            Platform = PlatformId2.Google,
            RedirectUrl = "https://yourapp.com/connected",
        },
    });
    // TODO: Handle 'response' of type ConnectLink
}
catch (ApiException<CreateConnectLinkError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateConnectLinkRequest](src/PrismaReviews/Requests/Connections/CreateConnectLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectLink](src/PrismaReviews/Models/ConnectLink.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[CreateConnectLinkError](src/PrismaReviews/Errors/CreateConnectLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionCreated&gt; CreateConnection(CreateConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connects one platform account and imports its locations. How depends on the platform (see `GET /v1/platforms`): `oauth` platforms need `redirect_url` and return `status: "pending"` with an `authorization_url` for the owner; `credentials` platforms need `credentials`, which Prisma tries against the platform before storing anything; `listing_url` platforms need the public `listing_url` of the listing. With a test key any platform connects at once, without credentials, with sample locations and reviews. Locations over the plan limit are not created and are counted in `locations_over_plan_limit`. Not idempotent: retrying creates a second connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.CreateConnection(new CreateConnectionRequest
    {
        Body = new ConnectionInput
        {
            Platform = PlatformId1.Google,
            RedirectUrl = "https://yourapp.com/prisma/callback",
        },
    });
    // TODO: Handle 'response' of type ConnectionCreated
}
catch (ApiException<CreateConnectionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateConnectionRequest](src/PrismaReviews/Requests/Connections/CreateConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionCreated](src/PrismaReviews/Models/ConnectionCreated.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[CreateConnectionError](src/PrismaReviews/Errors/CreateConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionDeleted&gt; DeleteConnection(DeleteConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnects the connection: its stored tokens and credentials are deleted at once and its locations become `disconnected` (no more checks, not counted toward the plan). Their reviews stay readable for 30 days and are then deleted. To reauthorize a connection, delete it and create a new one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.DeleteConnection(new DeleteConnectionRequest
    {
        Id = "con_01KJ8P7R5S3T1V9W7X5Y3Z1A2B",
    });
    // TODO: Handle 'response' of type ConnectionDeleted
}
catch (ApiException<DeleteConnectionError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteConnectionRequest](src/PrismaReviews/Requests/Connections/DeleteConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionDeleted](src/PrismaReviews/Models/ConnectionDeleted.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[DeleteConnectionError](src/PrismaReviews/Errors/DeleteConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionList&gt; ListConnections(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every connection of your workspace in the mode of your key, oldest first, including `pending`, `reauth_required` and `disconnected` ones. Not paginated: `next_cursor` is always `null`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.ListConnections();
    // TODO: Handle 'response' of type ConnectionList
}
catch (ApiException<ListConnectionsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionList](src/PrismaReviews/Models/ConnectionList.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[ListConnectionsError](src/PrismaReviews/Errors/ListConnectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LocationsApi

> Source: [LocationsApi](src/PrismaReviews/Api/LocationsApi.cs)

<details>
<summary><code>Task&lt;Location&gt; GetLocation(GetLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One location by ID, disconnected ones included until their data is deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LocationsApi.GetLocation(new GetLocationRequest
    {
        Id = "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N",
    });
    // TODO: Handle 'response' of type Location
}
catch (ApiException<GetLocationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLocationRequest](src/PrismaReviews/Requests/LocationsApi/GetLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](src/PrismaReviews/Models/Location.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[GetLocationError](src/PrismaReviews/Errors/GetLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LocationList&gt; ListLocations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every location of your workspace in the mode of your key, oldest first, without disconnected ones. Not paginated: `next_cursor` is always `null`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LocationsApi.ListLocations();
    // TODO: Handle 'response' of type LocationList
}
catch (ApiException<ListLocationsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LocationList](src/PrismaReviews/Models/LocationList.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[ListLocationsError](src/PrismaReviews/Errors/ListLocationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LocationRefresh&gt; RefreshLocation(RefreshLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks one location for new reviews now instead of waiting for its next scheduled check ("Refresh now"). From the Beam plan; at most once every 15 minutes per location. New reviews arrive as usual, in `GET /v1/reviews` and as `review.created` webhooks.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LocationsApi.RefreshLocation(new RefreshLocationRequest
    {
        Id = "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N",
    });
    // TODO: Handle 'response' of type LocationRefresh
}
catch (ApiException<RefreshLocationError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RefreshLocationRequest](src/PrismaReviews/Requests/LocationsApi/RefreshLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LocationRefresh](src/PrismaReviews/Models/LocationRefresh.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[RefreshLocationError](src/PrismaReviews/Errors/RefreshLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Platforms

> Source: [Platforms](src/PrismaReviews/Api/Platforms.cs)

<details>
<summary><code>Task&lt;Platform&gt; GetPlatform(GetPlatformRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One platform of `GET /v1/platforms`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Platforms.GetPlatform(new GetPlatformRequest { Id = PlatformId.AppStore });
    // TODO: Handle 'response' of type Platform
}
catch (ApiException<GetPlatformError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPlatformRequest](src/PrismaReviews/Requests/Platforms/GetPlatformRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Platform](src/PrismaReviews/Models/Platform.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[GetPlatformError](src/PrismaReviews/Errors/GetPlatformError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlatformList&gt; ListPlatforms(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every platform with how it connects, the exact fields `POST /v1/connections` expects, setup steps for the account owner, an example body and whether this workspace can connect it now. Enough to connect a platform without reading the docs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Platforms.ListPlatforms();
    // TODO: Handle 'response' of type PlatformList
}
catch (ApiException<ListPlatformsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlatformList](src/PrismaReviews/Models/PlatformList.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[ListPlatformsError](src/PrismaReviews/Errors/ListPlatformsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Replies

> Source: [Replies](src/PrismaReviews/Api/Replies.cs)

<details>
<summary><code>Task&lt;ReplyDeletion&gt; DeleteReply(DeleteReplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues the removal of the review's reply from the platform. When the job is done, `reply` becomes `null`. Only on platforms whose API can delete replies (Google Business Profile, App Store, Trustpilot).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Replies.DeleteReply(new DeleteReplyRequest { Id = "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E" });
    // TODO: Handle 'response' of type ReplyDeletion
}
catch (ApiException<DeleteReplyError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteReplyRequest](src/PrismaReviews/Requests/Replies/DeleteReplyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReplyDeletion](src/PrismaReviews/Models/ReplyDeletion.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[DeleteReplyError](src/PrismaReviews/Errors/DeleteReplyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Review&gt; ReplyToReview(ReplyToReviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stores the reply and queues it for publishing through the platform's official API: `202` with the review and `reply.status: "queued"`. A background job publishes it (`reply.published` webhook), marks it `failed` (`reply.failed` webhook), or, when the platform never answered and the reply can't be read back, marks it `unknown` without retrying (`reply.unknown` webhook). Posting again replaces the stored reply. With a test key the reply goes through the same steps but never reaches the platform. Read-only platforms return `422 reply_not_supported` with the review's `url`, where it can be answered.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Replies.ReplyToReview(new ReplyToReviewRequest
    {
        Id = "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E",
        Body = new V1ReviewsReplyRequest { Text = "Thanks Marta! We have added a second barista at lunch." },
    });
    // TODO: Handle 'response' of type Review
}
catch (ApiException<ReplyToReviewError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ReplyToReviewRequest](src/PrismaReviews/Requests/Replies/ReplyToReviewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Review](src/PrismaReviews/Models/Review.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[ReplyToReviewError](src/PrismaReviews/Errors/ReplyToReviewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reviews

> Source: [Reviews](src/PrismaReviews/Api/Reviews.cs)

<details>
<summary><code>Task&lt;Review&gt; GetReview(GetReviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One review by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reviews.GetReview(new GetReviewRequest { Id = "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E" });
    // TODO: Handle 'response' of type Review
}
catch (ApiException<GetReviewError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetReviewRequest](src/PrismaReviews/Requests/Reviews/GetReviewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Review](src/PrismaReviews/Models/Review.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[GetReviewError](src/PrismaReviews/Errors/GetReviewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReviewList&gt; ListReviews(ListReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reviews of your workspace in the mode of your key, newest first (by `created_at`, then `id`), in the same shape on every platform. Cursor paginated: pass `next_cursor` as `cursor`, with the same filters, until it is `null`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reviews.ListReviews(new ListReviewsRequest
    {
        LocationId = "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N",
        Since = DateTimeOffset.Parse("2026-10-01T00:00:00Z"),
    });
    // TODO: Handle 'response' of type ReviewList
}
catch (ApiException<ListReviewsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListReviewsRequest](src/PrismaReviews/Requests/Reviews/ListReviewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReviewList](src/PrismaReviews/Models/ReviewList.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[ListReviewsError](src/PrismaReviews/Errors/ListReviewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StatsApi

> Source: [StatsApi](src/PrismaReviews/Api/StatsApi.cs)

<details>
<summary><code>Task&lt;Stats&gt; GetLocationStats(GetLocationStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The same statistics as `GET /v1/stats`, for one location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StatsApi.GetLocationStats(new GetLocationStatsRequest
    {
        Id = "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N",
        Since = DateTimeOffset.Parse("2026-01-01T00:00:00Z"),
    });
    // TODO: Handle 'response' of type Stats
}
catch (ApiException<GetLocationStatsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLocationStatsRequest](src/PrismaReviews/Requests/StatsApi/GetLocationStatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Stats](src/PrismaReviews/Models/Stats.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[GetLocationStatsError](src/PrismaReviews/Errors/GetLocationStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Stats&gt; GetStats(GetStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Review statistics for your workspace in the mode of your key: count, average rating, reviews per star, replies, reply rate, median reply time, unanswered negative reviews and a month-by-month series. Filter by location or platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StatsApi.GetStats(new GetStatsRequest
    {
        LocationId = "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N",
        Since = DateTimeOffset.Parse("2026-01-01T00:00:00Z"),
    });
    // TODO: Handle 'response' of type Stats
}
catch (ApiException<GetStatsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetStatsRequest](src/PrismaReviews/Requests/StatsApi/GetStatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Stats](src/PrismaReviews/Models/Stats.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[GetStatsError](src/PrismaReviews/Errors/GetStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UsageApi

> Source: [UsageApi](src/PrismaReviews/Api/UsageApi.cs)

<details>
<summary><code>Task&lt;Usage&gt; GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The workspace's plan and what it has used in the current calendar month (UTC). The same numbers with a live key and a test key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UsageApi.GetUsage();
    // TODO: Handle 'response' of type Usage
}
catch (ApiException<GetUsageError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Usage](src/PrismaReviews/Models/Usage.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[GetUsageError](src/PrismaReviews/Errors/GetUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/PrismaReviews/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;WebhookCreated&gt; CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers an HTTPS endpoint for signed event deliveries. The signing `secret` is returned only in this response. Endpoints belong to the workspace, not to a key: they receive events from both live and test mode. Not idempotent: retrying creates a second endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.CreateWebhook(new CreateWebhookRequest
    {
        Body = new V1WebhooksRequest
        {
            Url = "https://yourapp.com/webhooks/prisma",
            Events = [
                WebhookEventFilter.ReviewCreated,
                WebhookEventFilter.ReplyFailed,
                WebhookEventFilter.ConnectionUpdated,
            ],
        },
    });
    // TODO: Handle 'response' of type WebhookCreated
}
catch (ApiException<CreateWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateWebhookRequest](src/PrismaReviews/Requests/WebhooksApi/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookCreated](src/PrismaReviews/Models/WebhookCreated.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookError](src/PrismaReviews/Errors/CreateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookDeleted&gt; DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the endpoint; deliveries still pending for it are dropped. There is no update: create a new endpoint and delete the old one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.DeleteWebhook(new DeleteWebhookRequest
    {
        Id = "we_01KJ8R1A3B5C7D9E1F3G5H7J9K",
    });
    // TODO: Handle 'response' of type WebhookDeleted
}
catch (ApiException<DeleteWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWebhookRequest](src/PrismaReviews/Requests/WebhooksApi/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookDeleted](src/PrismaReviews/Models/WebhookDeleted.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/PrismaReviews/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookList&gt; ListWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every webhook endpoint of the workspace (shared by live and test keys). Secrets are never returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhooks();
    // TODO: Handle 'response' of type WebhookList
}
catch (ApiException<ListWebhooksError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookList](src/PrismaReviews/Models/WebhookList.cs)</code>

**OnError**: <code>[ApiException](src/PrismaReviews/Core/Exceptions/ApiException.cs)&lt;[ListWebhooksError](src/PrismaReviews/Errors/ListWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

