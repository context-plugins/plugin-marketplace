# Reference

> Source: [PrismaReviewsClient](src/client.ts)

## Connections

> Source: [Connections](src/resources/connections.ts)

<details>
<summary><code>createConnectLink(request?: Connections.CreateConnectLinkRequest, options?: RequestOptions): ApiPromise&lt;ConnectLink, Connections.CreateConnectLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A link the owner of a platform account opens to connect it in their browser, with no Prisma account or API key. Connections made through it belong to your workspace and to the mode of the key that created the link, and carry `metadata: {"via": "connect_link"}`. Valid for 7 days and reusable: treat it like a password-reset link. The body is optional.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.createConnectLink({
    body: { platform: PlatformId2.Google, redirectUrl: "https://yourapp.com/connected" },
  });
  // TODO: Handle 'response' of type ConnectLink
} catch (err) {
  // TODO: Handle 'err' of type Connections.CreateConnectLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .createConnectLink({ body: { platform: PlatformId2.Google, redirectUrl: "https://yourapp.com/connected" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[V1ConnectLinksRequest](src/models/v1-connect-links-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.createConnectLink(request)`

- **OnSuccess**: <code>[ConnectLink](src/models/connect-link.ts)</code>
- **OnError**: throws <code>[Connections.CreateConnectLinkError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.createConnectLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectLink, Connections.CreateConnectLinkError&gt;</code>, with `result.value` of type <code>[ConnectLink](src/models/connect-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createConnection(request: Connections.CreateConnectionRequest, options?: RequestOptions): ApiPromise&lt;ConnectionCreated, Connections.CreateConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connects one platform account and imports its locations. How depends on the platform (see `GET /v1/platforms`): `oauth` platforms need `redirect_url` and return `status: "pending"` with an `authorization_url` for the owner; `credentials` platforms need `credentials`, which Prisma tries against the platform before storing anything; `listing_url` platforms need the public `listing_url` of the listing. With a test key any platform connects at once, without credentials, with sample locations and reviews. Locations over the plan limit are not created and are counted in `locations_over_plan_limit`. Not idempotent: retrying creates a second connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.createConnection({
    body: { platform: PlatformId1.Google, redirectUrl: "https://yourapp.com/prisma/callback", metadata: {} },
  });
  // TODO: Handle 'response' of type ConnectionCreated
} catch (err) {
  // TODO: Handle 'err' of type Connections.CreateConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .createConnection({
    body: { platform: PlatformId1.Google, redirectUrl: "https://yourapp.com/prisma/callback", metadata: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionCreated
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ConnectionInput](src/models/connection-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.createConnection(request)`

- **OnSuccess**: <code>[ConnectionCreated](src/models/connection-created.ts)</code>
- **OnError**: throws <code>[Connections.CreateConnectionError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.createConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionCreated, Connections.CreateConnectionError&gt;</code>, with `result.value` of type <code>[ConnectionCreated](src/models/connection-created.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteConnection(request: Connections.DeleteConnectionRequest, options?: RequestOptions): ApiPromise&lt;ConnectionDeleted, Connections.DeleteConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnects the connection: its stored tokens and credentials are deleted at once and its locations become `disconnected` (no more checks, not counted toward the plan). Their reviews stay readable for 30 days and are then deleted. To reauthorize a connection, delete it and create a new one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.deleteConnection({ id: "con_01KJ8P7R5S3T1V9W7X5Y3Z1A2B" });
  // TODO: Handle 'response' of type ConnectionDeleted
} catch (err) {
  // TODO: Handle 'err' of type Connections.DeleteConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections
  .deleteConnection({ id: "con_01KJ8P7R5S3T1V9W7X5Y3Z1A2B" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionDeleted
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Connection ID (`con_…`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.deleteConnection(request)`

- **OnSuccess**: <code>[ConnectionDeleted](src/models/connection-deleted.ts)</code>
- **OnError**: throws <code>[Connections.DeleteConnectionError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.deleteConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionDeleted, Connections.DeleteConnectionError&gt;</code>, with `result.value` of type <code>[ConnectionDeleted](src/models/connection-deleted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listConnections(options?: RequestOptions): ApiPromise&lt;ConnectionList, Connections.ListConnectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every connection of your workspace in the mode of your key, oldest first, including `pending`, `reauth_required` and `disconnected` ones. Not paginated: `next_cursor` is always `null`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.connections.listConnections();
  // TODO: Handle 'response' of type ConnectionList
} catch (err) {
  // TODO: Handle 'err' of type Connections.ListConnectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.connections.listConnections().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConnectionList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.connections.listConnections()`

- **OnSuccess**: <code>[ConnectionList](src/models/connection-list.ts)</code>
- **OnError**: throws <code>[Connections.ListConnectionsError](src/resources/connections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.connections.listConnections().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConnectionList, Connections.ListConnectionsError&gt;</code>, with `result.value` of type <code>[ConnectionList](src/models/connection-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LocationsApi

> Source: [LocationsApi](src/resources/locations-api.ts)

<details>
<summary><code>getLocation(request: LocationsApi.GetLocationRequest, options?: RequestOptions): ApiPromise&lt;Location, LocationsApi.GetLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One location by ID, disconnected ones included until their data is deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationsApi.getLocation({ id: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N" });
  // TODO: Handle 'response' of type Location
} catch (err) {
  // TODO: Handle 'err' of type LocationsApi.GetLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationsApi.getLocation({ id: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Location
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Location ID (`loc_…`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationsApi.getLocation(request)`

- **OnSuccess**: <code>[Location](src/models/location.ts)</code>
- **OnError**: throws <code>[LocationsApi.GetLocationError](src/resources/locations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.locationsApi.getLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Location, LocationsApi.GetLocationError&gt;</code>, with `result.value` of type <code>[Location](src/models/location.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLocations(options?: RequestOptions): ApiPromise&lt;LocationList, LocationsApi.ListLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every location of your workspace in the mode of your key, oldest first, without disconnected ones. Not paginated: `next_cursor` is always `null`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationsApi.listLocations();
  // TODO: Handle 'response' of type LocationList
} catch (err) {
  // TODO: Handle 'err' of type LocationsApi.ListLocationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationsApi.listLocations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LocationList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationsApi.listLocations()`

- **OnSuccess**: <code>[LocationList](src/models/location-list.ts)</code>
- **OnError**: throws <code>[LocationsApi.ListLocationsError](src/resources/locations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.locationsApi.listLocations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LocationList, LocationsApi.ListLocationsError&gt;</code>, with `result.value` of type <code>[LocationList](src/models/location-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshLocation(request: LocationsApi.RefreshLocationRequest, options?: RequestOptions): ApiPromise&lt;LocationRefresh, LocationsApi.RefreshLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks one location for new reviews now instead of waiting for its next scheduled check ("Refresh now"). From the Beam plan; at most once every 15 minutes per location. New reviews arrive as usual, in `GET /v1/reviews` and as `review.created` webhooks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationsApi.refreshLocation({ id: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N" });
  // TODO: Handle 'response' of type LocationRefresh
} catch (err) {
  // TODO: Handle 'err' of type LocationsApi.RefreshLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationsApi
  .refreshLocation({ id: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LocationRefresh
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Location ID (`loc_…`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationsApi.refreshLocation(request)`

- **OnSuccess**: <code>[LocationRefresh](src/models/location-refresh.ts)</code>
- **OnError**: throws <code>[LocationsApi.RefreshLocationError](src/resources/locations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.locationsApi.refreshLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LocationRefresh, LocationsApi.RefreshLocationError&gt;</code>, with `result.value` of type <code>[LocationRefresh](src/models/location-refresh.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Platforms

> Source: [Platforms](src/resources/platforms.ts)

<details>
<summary><code>getPlatform(request: Platforms.GetPlatformRequest, options?: RequestOptions): ApiPromise&lt;Platform, Platforms.GetPlatformError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One platform of `GET /v1/platforms`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.platforms.getPlatform({ id: PlatformId.AppStore });
  // TODO: Handle 'response' of type Platform
} catch (err) {
  // TODO: Handle 'err' of type Platforms.GetPlatformError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.platforms.getPlatform({ id: PlatformId.AppStore }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Platform
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>[PlatformId](src/models/platform-id.ts)</code> | Platform ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.platforms.getPlatform(request)`

- **OnSuccess**: <code>[Platform](src/models/platform.ts)</code>
- **OnError**: throws <code>[Platforms.GetPlatformError](src/resources/platforms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.platforms.getPlatform(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Platform, Platforms.GetPlatformError&gt;</code>, with `result.value` of type <code>[Platform](src/models/platform.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPlatforms(options?: RequestOptions): ApiPromise&lt;PlatformList, Platforms.ListPlatformsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every platform with how it connects, the exact fields `POST /v1/connections` expects, setup steps for the account owner, an example body and whether this workspace can connect it now. Enough to connect a platform without reading the docs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.platforms.listPlatforms();
  // TODO: Handle 'response' of type PlatformList
} catch (err) {
  // TODO: Handle 'err' of type Platforms.ListPlatformsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.platforms.listPlatforms().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.platforms.listPlatforms()`

- **OnSuccess**: <code>[PlatformList](src/models/platform-list.ts)</code>
- **OnError**: throws <code>[Platforms.ListPlatformsError](src/resources/platforms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.platforms.listPlatforms().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformList, Platforms.ListPlatformsError&gt;</code>, with `result.value` of type <code>[PlatformList](src/models/platform-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Replies

> Source: [Replies](src/resources/replies.ts)

<details>
<summary><code>deleteReply(request: Replies.DeleteReplyRequest, options?: RequestOptions): ApiPromise&lt;ReplyDeletion, Replies.DeleteReplyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues the removal of the review's reply from the platform. When the job is done, `reply` becomes `null`. Only on platforms whose API can delete replies (Google Business Profile, App Store, Trustpilot).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.replies.deleteReply({ id: "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E" });
  // TODO: Handle 'response' of type ReplyDeletion
} catch (err) {
  // TODO: Handle 'err' of type Replies.DeleteReplyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.replies.deleteReply({ id: "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReplyDeletion
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Review ID (`rev_…`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.replies.deleteReply(request)`

- **OnSuccess**: <code>[ReplyDeletion](src/models/reply-deletion.ts)</code>
- **OnError**: throws <code>[Replies.DeleteReplyError](src/resources/replies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.replies.deleteReply(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReplyDeletion, Replies.DeleteReplyError&gt;</code>, with `result.value` of type <code>[ReplyDeletion](src/models/reply-deletion.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replyToReview(request: Replies.ReplyToReviewRequest, options?: RequestOptions): ApiPromise&lt;Review, Replies.ReplyToReviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stores the reply and queues it for publishing through the platform's official API: `202` with the review and `reply.status: "queued"`. A background job publishes it (`reply.published` webhook), marks it `failed` (`reply.failed` webhook), or, when the platform never answered and the reply can't be read back, marks it `unknown` without retrying (`reply.unknown` webhook). Posting again replaces the stored reply. With a test key the reply goes through the same steps but never reaches the platform. Read-only platforms return `422 reply_not_supported` with the review's `url`, where it can be answered.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.replies.replyToReview({
    id: "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E",
    body: { text: "Thanks Marta! We have added a second barista at lunch." },
  });
  // TODO: Handle 'response' of type Review
} catch (err) {
  // TODO: Handle 'err' of type Replies.ReplyToReviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.replies
  .replyToReview({
    id: "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E",
    body: { text: "Thanks Marta! We have added a second barista at lunch." },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Review
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Review ID (`rev_…`). |
| <code>idempotencyKey?</code> | <code>string</code> | A unique value per reply (a UUID works). The same key with the same request returns the stored response instead of replying twice; with a different request it returns `409 idempotency_conflict`. Scoped to the workspace; only successful responses are stored. |
| <code>body</code> | <code>[V1ReviewsReplyRequest](src/models/v1-reviews-reply-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.replies.replyToReview(request)`

- **OnSuccess**: <code>[Review](src/models/review.ts)</code>
- **OnError**: throws <code>[Replies.ReplyToReviewError](src/resources/replies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.replies.replyToReview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Review, Replies.ReplyToReviewError&gt;</code>, with `result.value` of type <code>[Review](src/models/review.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reviews

> Source: [Reviews](src/resources/reviews.ts)

<details>
<summary><code>getReview(request: Reviews.GetReviewRequest, options?: RequestOptions): ApiPromise&lt;Review, Reviews.GetReviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One review by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviews.getReview({ id: "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E" });
  // TODO: Handle 'response' of type Review
} catch (err) {
  // TODO: Handle 'err' of type Reviews.GetReviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reviews.getReview({ id: "rev_01KJ8Q2M4T7HX3VB9CWD6NRZ5E" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Review
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Review ID (`rev_…`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reviews.getReview(request)`

- **OnSuccess**: <code>[Review](src/models/review.ts)</code>
- **OnError**: throws <code>[Reviews.GetReviewError](src/resources/reviews.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reviews.getReview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Review, Reviews.GetReviewError&gt;</code>, with `result.value` of type <code>[Review](src/models/review.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listReviews(request?: Reviews.ListReviewsRequest, options?: RequestOptions): ApiPromise&lt;ReviewList, Reviews.ListReviewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reviews of your workspace in the mode of your key, newest first (by `created_at`, then `id`), in the same shape on every platform. Cursor paginated: pass `next_cursor` as `cursor`, with the same filters, until it is `null`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reviews.listReviews({
    locationId: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N",
    since: "2026-10-01",
  });
  // TODO: Handle 'response' of type ReviewList
} catch (err) {
  // TODO: Handle 'err' of type Reviews.ListReviewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reviews
  .listReviews({ locationId: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N", since: "2026-10-01" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReviewList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId?</code> | <code>string</code> | Only reviews of this location. |
| <code>platform?</code> | <code>[PlatformId](src/models/platform-id.ts)</code> | Only reviews from this platform. |
| <code>since?</code> | <code>[Since](src/models/unions/since.ts)</code> | Only reviews written at or after this time (by `created_at`): a date (`2026-10-01`, midnight UTC) or an ISO 8601 timestamp with a time zone offset (`2026-10-01T00:00:00Z`, `2026-10-01T02:00:00+02:00`). |
| <code>hasReply?</code> | <code>[HasReply](src/models/has-reply.ts)</code> | `true`: reviews with a reply in any status. `false`: reviews without one. |
| <code>limit?</code> | <code>number</code> | Page size.<br>**Default**: 50 |
| <code>cursor?</code> | <code>string</code> | The `next_cursor` of the previous page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reviews.listReviews(request)`

- **OnSuccess**: <code>[ReviewList](src/models/review-list.ts)</code>
- **OnError**: throws <code>[Reviews.ListReviewsError](src/resources/reviews.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reviews.listReviews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReviewList, Reviews.ListReviewsError&gt;</code>, with `result.value` of type <code>[ReviewList](src/models/review-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StatsApi

> Source: [StatsApi](src/resources/stats-api.ts)

<details>
<summary><code>getLocationStats(request: StatsApi.GetLocationStatsRequest, options?: RequestOptions): ApiPromise&lt;Stats, StatsApi.GetLocationStatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The same statistics as `GET /v1/stats`, for one location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statsApi.getLocationStats({
    id: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N",
    since: "2026-01-01",
  });
  // TODO: Handle 'response' of type Stats
} catch (err) {
  // TODO: Handle 'err' of type StatsApi.GetLocationStatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statsApi
  .getLocationStats({ id: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N", since: "2026-01-01" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Stats
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Location ID (`loc_…`). |
| <code>since?</code> | <code>[Since](src/models/unions/since.ts)</code> | Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp with offset. Default: 12 months before `until`. |
| <code>until?</code> | <code>[Until](src/models/unions/until.ts)</code> | End of the period (not included). Default: now. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statsApi.getLocationStats(request)`

- **OnSuccess**: <code>[Stats](src/models/stats.ts)</code>
- **OnError**: throws <code>[StatsApi.GetLocationStatsError](src/resources/stats-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statsApi.getLocationStats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Stats, StatsApi.GetLocationStatsError&gt;</code>, with `result.value` of type <code>[Stats](src/models/stats.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStats(request?: StatsApi.GetStatsRequest, options?: RequestOptions): ApiPromise&lt;Stats, StatsApi.GetStatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Review statistics for your workspace in the mode of your key: count, average rating, reviews per star, replies, reply rate, median reply time, unanswered negative reviews and a month-by-month series. Filter by location or platform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statsApi.getStats({
    locationId: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N",
    since: "2026-01-01",
  });
  // TODO: Handle 'response' of type Stats
} catch (err) {
  // TODO: Handle 'err' of type StatsApi.GetStatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statsApi
  .getStats({ locationId: "loc_01KJ8P9W2C4D6F8G0H2J4K6M8N", since: "2026-01-01" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Stats
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId?</code> | <code>string</code> | Only this location. |
| <code>platform?</code> | <code>[PlatformId](src/models/platform-id.ts)</code> | Only this platform. |
| <code>since?</code> | <code>[Since](src/models/unions/since.ts)</code> | Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp with offset. Default: 12 months before `until`. |
| <code>until?</code> | <code>[Until](src/models/unions/until.ts)</code> | End of the period (not included). Default: now. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statsApi.getStats(request)`

- **OnSuccess**: <code>[Stats](src/models/stats.ts)</code>
- **OnError**: throws <code>[StatsApi.GetStatsError](src/resources/stats-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statsApi.getStats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Stats, StatsApi.GetStatsError&gt;</code>, with `result.value` of type <code>[Stats](src/models/stats.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UsageApi

> Source: [UsageApi](src/resources/usage-api.ts)

<details>
<summary><code>getUsage(options?: RequestOptions): ApiPromise&lt;Usage, UsageApi.GetUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The workspace's plan and what it has used in the current calendar month (UTC). The same numbers with a live key and a test key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usageApi.getUsage();
  // TODO: Handle 'response' of type Usage
} catch (err) {
  // TODO: Handle 'err' of type UsageApi.GetUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usageApi.getUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Usage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usageApi.getUsage()`

- **OnSuccess**: <code>[Usage](src/models/usage.ts)</code>
- **OnError**: throws <code>[UsageApi.GetUsageError](src/resources/usage-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usageApi.getUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Usage, UsageApi.GetUsageError&gt;</code>, with `result.value` of type <code>[Usage](src/models/usage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookCreated, Webhooks.CreateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers an HTTPS endpoint for signed event deliveries. The signing `secret` is returned only in this response. Endpoints belong to the workspace, not to a key: they receive events from both live and test mode. Not idempotent: retrying creates a second endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createWebhook({
    body: {
      url: "https://yourapp.com/webhooks/prisma",
      events: [
        WebhookEventFilter.ReviewCreated,
        WebhookEventFilter.ReplyFailed,
        WebhookEventFilter.ConnectionUpdated,
      ],
    },
  });
  // TODO: Handle 'response' of type WebhookCreated
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.CreateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .createWebhook({
    body: {
      url: "https://yourapp.com/webhooks/prisma",
      events: [
        WebhookEventFilter.ReviewCreated,
        WebhookEventFilter.ReplyFailed,
        WebhookEventFilter.ConnectionUpdated,
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookCreated
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1WebhooksRequest](src/models/v1-webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createWebhook(request)`

- **OnSuccess**: <code>[WebhookCreated](src/models/webhook-created.ts)</code>
- **OnError**: throws <code>[Webhooks.CreateWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookCreated, Webhooks.CreateWebhookError&gt;</code>, with `result.value` of type <code>[WebhookCreated](src/models/webhook-created.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookDeleted, Webhooks.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the endpoint; deliveries still pending for it are dropped. There is no update: create a new endpoint and delete the old one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.deleteWebhook({ id: "we_01KJ8R1A3B5C7D9E1F3G5H7J9K" });
  // TODO: Handle 'response' of type WebhookDeleted
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.deleteWebhook({ id: "we_01KJ8R1A3B5C7D9E1F3G5H7J9K" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookDeleted
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Webhook endpoint ID (`we_…`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteWebhook(request)`

- **OnSuccess**: <code>[WebhookDeleted](src/models/webhook-deleted.ts)</code>
- **OnError**: throws <code>[Webhooks.DeleteWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookDeleted, Webhooks.DeleteWebhookError&gt;</code>, with `result.value` of type <code>[WebhookDeleted](src/models/webhook-deleted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(options?: RequestOptions): ApiPromise&lt;WebhookList, Webhooks.ListWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every webhook endpoint of the workspace (shared by live and test keys). Secrets are never returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhooks();
  // TODO: Handle 'response' of type WebhookList
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listWebhooks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhooks()`

- **OnSuccess**: <code>[WebhookList](src/models/webhook-list.ts)</code>
- **OnError**: throws <code>[Webhooks.ListWebhooksError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listWebhooks().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookList, Webhooks.ListWebhooksError&gt;</code>, with `result.value` of type <code>[WebhookList](src/models/webhook-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[PrismaReviewsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

