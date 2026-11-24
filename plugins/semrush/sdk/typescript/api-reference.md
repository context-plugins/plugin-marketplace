# Reference

> Source: [SemrushClient](src/client.ts)

## HermesPartnerApi

> Source: [HermesPartnerApi](src/resources/hermes-partner-api.ts)

<details>
<summary><code>getApisV4HermesV0EventById(request: HermesPartnerApi.GetApisV4HermesV0EventByIdRequest, options?: RequestOptions): ApiPromise&lt;EventResponse, HermesPartnerApi.GetApisV4HermesV0EventByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Documentation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hermesPartnerApi.getApisV4HermesV0EventById({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type EventResponse
} catch (err) {
  // TODO: Handle 'err' of type HermesPartnerApi.GetApisV4HermesV0EventByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hermesPartnerApi
  .getApisV4HermesV0EventById({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventResponse
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
| <code>id</code> | <code>string</code> | Subscription id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hermesPartnerApi.getApisV4HermesV0EventById(request)`

- **OnSuccess**: <code>[EventResponse](src/models/event-response.ts)</code>
- **OnError**: throws <code>[HermesPartnerApi.GetApisV4HermesV0EventByIdError](src/resources/hermes-partner-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hermesPartnerApi.getApisV4HermesV0EventById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventResponse, HermesPartnerApi.GetApisV4HermesV0EventByIdError&gt;</code>, with `result.value` of type <code>[EventResponse](src/models/event-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SemrushError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApisV4HermesV0Subscriptions(options?: RequestOptions): ApiPromise&lt;AppSubscriptionsResponse, HermesPartnerApi.GetApisV4HermesV0SubscriptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all application's registered subscriptions
Documentation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hermesPartnerApi.getApisV4HermesV0Subscriptions();
  // TODO: Handle 'response' of type AppSubscriptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type HermesPartnerApi.GetApisV4HermesV0SubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hermesPartnerApi.getApisV4HermesV0Subscriptions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppSubscriptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hermesPartnerApi.getApisV4HermesV0Subscriptions()`

- **OnSuccess**: <code>[AppSubscriptionsResponse](src/models/app-subscriptions-response.ts)</code>
- **OnError**: throws <code>[HermesPartnerApi.GetApisV4HermesV0SubscriptionsError](src/resources/hermes-partner-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hermesPartnerApi.getApisV4HermesV0Subscriptions().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppSubscriptionsResponse, HermesPartnerApi.GetApisV4HermesV0SubscriptionsError&gt;</code>, with `result.value` of type <code>[AppSubscriptionsResponse](src/models/app-subscriptions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SemrushError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApisV4HermesV0UserByUserIdSubscriptionById(request: HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest, options?: RequestOptions): ApiPromise&lt;AppUserSubscriptionStatusResponse, HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Documentation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hermesPartnerApi.getApisV4HermesV0UserByUserIdSubscriptionById({
    userId: 1,
    id: 1,
  });
  // TODO: Handle 'response' of type AppUserSubscriptionStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hermesPartnerApi
  .getApisV4HermesV0UserByUserIdSubscriptionById({ userId: 1, id: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppUserSubscriptionStatusResponse
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
| <code>userId</code> | <code>number</code> | User id |
| <code>id</code> | <code>number</code> | Subscription id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hermesPartnerApi.getApisV4HermesV0UserByUserIdSubscriptionById(request)`

- **OnSuccess**: <code>[AppUserSubscriptionStatusResponse](src/models/app-user-subscription-status-response.ts)</code>
- **OnError**: throws <code>[HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdError](src/resources/hermes-partner-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hermesPartnerApi.getApisV4HermesV0UserByUserIdSubscriptionById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppUserSubscriptionStatusResponse, HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdError&gt;</code>, with `result.value` of type <code>[AppUserSubscriptionStatusResponse](src/models/app-user-subscription-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SemrushError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postApisV4HermesV0Event(request?: HermesPartnerApi.PostApisV4HermesV0EventRequest, options?: RequestOptions): ApiPromise&lt;undefined, HermesPartnerApi.PostApisV4HermesV0EventError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Documentation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.hermesPartnerApi.postApisV4HermesV0Event();
} catch (err) {
  // TODO: Handle 'err' of type HermesPartnerApi.PostApisV4HermesV0EventError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hermesPartnerApi.postApisV4HermesV0Event().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
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
| <code>body?</code> | <code>[CreateEventRequest](src/models/create-event-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hermesPartnerApi.postApisV4HermesV0Event(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[HermesPartnerApi.PostApisV4HermesV0EventError](src/resources/hermes-partner-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.hermesPartnerApi.postApisV4HermesV0Event(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, HermesPartnerApi.PostApisV4HermesV0EventError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SemrushError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## JwtIssuer

> Source: [JwtIssuer](src/resources/jwt-issuer.ts)

<details>
<summary><code>postAppCenterApiV2JwtToken(request?: JwtIssuer.PostAppCenterApiV2JwtTokenRequest, options?: RequestOptions): ApiPromise&lt;IssuerJwtResponse, JwtIssuer.PostAppCenterApiV2JwtTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves JWT for accessing Semrush API.
Documentation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jwtIssuer.postAppCenterApiV2JwtToken();
  // TODO: Handle 'response' of type IssuerJwtResponse
} catch (err) {
  // TODO: Handle 'err' of type JwtIssuer.PostAppCenterApiV2JwtTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jwtIssuer.postAppCenterApiV2JwtToken().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IssuerJwtResponse
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
| <code>body?</code> | <code>[IssuerJwtRequest](src/models/issuer-jwt-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jwtIssuer.postAppCenterApiV2JwtToken(request)`

- **OnSuccess**: <code>[IssuerJwtResponse](src/models/issuer-jwt-response.ts)</code>
- **OnError**: throws <code>[JwtIssuer.PostAppCenterApiV2JwtTokenError](src/resources/jwt-issuer.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jwtIssuer.postAppCenterApiV2JwtToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IssuerJwtResponse, JwtIssuer.PostAppCenterApiV2JwtTokenError&gt;</code>, with `result.value` of type <code>[IssuerJwtResponse](src/models/issuer-jwt-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SemrushError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerService

> Source: [PartnerService](src/resources/partner-service.ts)

<details>
<summary><code>postApisV4AppCenterV2PartnerViewerStatus(request?: PartnerService.PostApisV4AppCenterV2PartnerViewerStatusRequest, options?: RequestOptions): ApiPromise&lt;ViewerStatusResponse, PartnerService.PostApisV4AppCenterV2PartnerViewerStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves user status, related to the app (purchases, subscriptions)
Documentation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerService.postApisV4AppCenterV2PartnerViewerStatus();
  // TODO: Handle 'response' of type ViewerStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type PartnerService.PostApisV4AppCenterV2PartnerViewerStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerService.postApisV4AppCenterV2PartnerViewerStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ViewerStatusResponse
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
| <code>body?</code> | <code>[ViewerStatusRequest](src/models/viewer-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerService.postApisV4AppCenterV2PartnerViewerStatus(request)`

- **OnSuccess**: <code>[ViewerStatusResponse](src/models/viewer-status-response.ts)</code>
- **OnError**: throws <code>[PartnerService.PostApisV4AppCenterV2PartnerViewerStatusError](src/resources/partner-service.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerService.postApisV4AppCenterV2PartnerViewerStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ViewerStatusResponse, PartnerService.PostApisV4AppCenterV2PartnerViewerStatusError&gt;</code>, with `result.value` of type <code>[ViewerStatusResponse](src/models/viewer-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SemrushError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

