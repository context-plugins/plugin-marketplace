# Reference

> Source: [BundleSocialClient](src/client.ts)

## Analytics

> Source: [Analytics](src/resources/analytics.ts)

<details>
<summary><code>analyticsForcePostAnalytics(request?: Analytics.AnalyticsForcePostAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AnalyticsPostForceResponse, Analytics.AnalyticsForcePostAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an immediate fetch of fresh analytics for a single post instead of waiting for the scheduled refresh. Use sparingly, as it consumes platform rate limits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.analyticsForcePostAnalytics();
  // TODO: Handle 'response' of type ApiV1AnalyticsPostForceResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.AnalyticsForcePostAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics.analyticsForcePostAnalytics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AnalyticsPostForceResponse
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
| <code>body?</code> | <code>[ApiV1AnalyticsPostForceRequest](src/models/api-v1-analytics-post-force-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.analyticsForcePostAnalytics(request)`

- **OnSuccess**: <code>[ApiV1AnalyticsPostForceResponse](src/models/api-v1-analytics-post-force-response.ts)</code>
- **OnError**: throws <code>[Analytics.AnalyticsForcePostAnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.analyticsForcePostAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AnalyticsPostForceResponse, Analytics.AnalyticsForcePostAnalyticsError&gt;</code>, with `result.value` of type <code>[ApiV1AnalyticsPostForceResponse](src/models/api-v1-analytics-post-force-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsForceSocialAccountAnalytics(request?: Analytics.AnalyticsForceSocialAccountAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AnalyticsSocialAccountForceResponse, Analytics.AnalyticsForceSocialAccountAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an immediate fetch of fresh social account analytics from the platform instead of waiting for the scheduled refresh. Use sparingly, as it consumes platform rate limits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.analyticsForceSocialAccountAnalytics();
  // TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountForceResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.AnalyticsForceSocialAccountAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics.analyticsForceSocialAccountAnalytics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AnalyticsSocialAccountForceResponse
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
| <code>body?</code> | <code>[ApiV1AnalyticsSocialAccountForceRequest](src/models/api-v1-analytics-social-account-force-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.analyticsForceSocialAccountAnalytics(request)`

- **OnSuccess**: <code>[ApiV1AnalyticsSocialAccountForceResponse](src/models/api-v1-analytics-social-account-force-response.ts)</code>
- **OnError**: throws <code>[Analytics.AnalyticsForceSocialAccountAnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.analyticsForceSocialAccountAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AnalyticsSocialAccountForceResponse, Analytics.AnalyticsForceSocialAccountAnalyticsError&gt;</code>, with `result.value` of type <code>[ApiV1AnalyticsSocialAccountForceResponse](src/models/api-v1-analytics-social-account-force-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsGetBulkPostAnalytics(request: Analytics.AnalyticsGetBulkPostAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AnalyticsPostBulkResponse, Analytics.AnalyticsGetBulkPostAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve analytics for multiple posts in a single request. Maximum 60 posts per request, paginated with 20 per page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.analyticsGetBulkPostAnalytics({
    postIds: ["some example string"],
    platformType: PlatformType.Tiktok,
  });
  // TODO: Handle 'response' of type ApiV1AnalyticsPostBulkResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.AnalyticsGetBulkPostAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics
  .analyticsGetBulkPostAnalytics({ postIds: ["some example string"], platformType: PlatformType.Tiktok })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AnalyticsPostBulkResponse
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
| <code>postIds</code> | <code>string[]</code> | - |
| <code>platformType</code> | <code>[PlatformType](src/models/platform-type.ts)</code> | - |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.analyticsGetBulkPostAnalytics(request)`

- **OnSuccess**: <code>[ApiV1AnalyticsPostBulkResponse](src/models/api-v1-analytics-post-bulk-response.ts)</code>
- **OnError**: throws <code>[Analytics.AnalyticsGetBulkPostAnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.analyticsGetBulkPostAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AnalyticsPostBulkResponse, Analytics.AnalyticsGetBulkPostAnalyticsError&gt;</code>, with `result.value` of type <code>[ApiV1AnalyticsPostBulkResponse](src/models/api-v1-analytics-post-bulk-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsGetPostAnalytics(request?: Analytics.AnalyticsGetPostAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AnalyticsPostResponse, Analytics.AnalyticsGetPostAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve normalized engagement metrics such as likes, comments, shares, and views for a single published post. Metric names are unified across platforms for easier reporting.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.analyticsGetPostAnalytics();
  // TODO: Handle 'response' of type ApiV1AnalyticsPostResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.AnalyticsGetPostAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics.analyticsGetPostAnalytics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AnalyticsPostResponse
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
| <code>postId?</code> | <code>string</code> | - |
| <code>platformType?</code> | <code>[PlatformType](src/models/platform-type.ts)</code> | - |
| <code>importedPostId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.analyticsGetPostAnalytics(request)`

- **OnSuccess**: <code>[ApiV1AnalyticsPostResponse](src/models/api-v1-analytics-post-response.ts)</code>
- **OnError**: throws <code>[Analytics.AnalyticsGetPostAnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.analyticsGetPostAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AnalyticsPostResponse, Analytics.AnalyticsGetPostAnalyticsError&gt;</code>, with `result.value` of type <code>[ApiV1AnalyticsPostResponse](src/models/api-v1-analytics-post-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsGetPostAnalyticsRaw(request?: Analytics.AnalyticsGetPostAnalyticsRawRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AnalyticsPostRawResponse, Analytics.AnalyticsGetPostAnalyticsRawError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve post analytics exactly as returned by the social platform, without bundle.social's normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.analyticsGetPostAnalyticsRaw();
  // TODO: Handle 'response' of type ApiV1AnalyticsPostRawResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.AnalyticsGetPostAnalyticsRawError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics.analyticsGetPostAnalyticsRaw().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AnalyticsPostRawResponse
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
| <code>postId?</code> | <code>string</code> | - |
| <code>platformType?</code> | <code>[PlatformType](src/models/platform-type.ts)</code> | - |
| <code>importedPostId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.analyticsGetPostAnalyticsRaw(request)`

- **OnSuccess**: <code>[ApiV1AnalyticsPostRawResponse](src/models/api-v1-analytics-post-raw-response.ts)</code>
- **OnError**: throws <code>[Analytics.AnalyticsGetPostAnalyticsRawError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.analyticsGetPostAnalyticsRaw(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AnalyticsPostRawResponse, Analytics.AnalyticsGetPostAnalyticsRawError&gt;</code>, with `result.value` of type <code>[ApiV1AnalyticsPostRawResponse](src/models/api-v1-analytics-post-raw-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsGetSocialAccountAnalytics(request: Analytics.AnalyticsGetSocialAccountAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AnalyticsSocialAccountResponse, Analytics.AnalyticsGetSocialAccountAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve normalized profile-level metrics such as followers, reach, and impressions for a connected social account over a date range. Metric names are unified across platforms so you can chart accounts side by side.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.analyticsGetSocialAccountAnalytics({
    teamId: "some example string",
    platformType: PlatformType.Tiktok,
  });
  // TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.AnalyticsGetSocialAccountAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics
  .analyticsGetSocialAccountAnalytics({ teamId: "some example string", platformType: PlatformType.Tiktok })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AnalyticsSocialAccountResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>platformType</code> | <code>[PlatformType](src/models/platform-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.analyticsGetSocialAccountAnalytics(request)`

- **OnSuccess**: <code>[ApiV1AnalyticsSocialAccountResponse](src/models/api-v1-analytics-social-account-response.ts)</code>
- **OnError**: throws <code>[Analytics.AnalyticsGetSocialAccountAnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.analyticsGetSocialAccountAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AnalyticsSocialAccountResponse, Analytics.AnalyticsGetSocialAccountAnalyticsError&gt;</code>, with `result.value` of type <code>[ApiV1AnalyticsSocialAccountResponse](src/models/api-v1-analytics-social-account-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyticsGetSocialAccountAnalyticsRaw(request: Analytics.AnalyticsGetSocialAccountAnalyticsRawRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AnalyticsSocialAccountRawResponse, Analytics.AnalyticsGetSocialAccountAnalyticsRawError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve social account analytics exactly as returned by the social platform, without bundle.social's normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.analyticsGetSocialAccountAnalyticsRaw({
    teamId: "some example string",
    platformType: PlatformType.Tiktok,
  });
  // TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountRawResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.AnalyticsGetSocialAccountAnalyticsRawError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics
  .analyticsGetSocialAccountAnalyticsRaw({ teamId: "some example string", platformType: PlatformType.Tiktok })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AnalyticsSocialAccountRawResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>platformType</code> | <code>[PlatformType](src/models/platform-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.analyticsGetSocialAccountAnalyticsRaw(request)`

- **OnSuccess**: <code>[ApiV1AnalyticsSocialAccountRawResponse](src/models/api-v1-analytics-social-account-raw-response.ts)</code>
- **OnError**: throws <code>[Analytics.AnalyticsGetSocialAccountAnalyticsRawError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.analyticsGetSocialAccountAnalyticsRaw(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AnalyticsSocialAccountRawResponse, Analytics.AnalyticsGetSocialAccountAnalyticsRawError&gt;</code>, with `result.value` of type <code>[ApiV1AnalyticsSocialAccountRawResponse](src/models/api-v1-analytics-social-account-raw-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## App

> Source: [App](src/resources/app.ts)

<details>
<summary><code>appGetHealth(options?: RequestOptions): ApiPromise&lt;ApiV1Response, App.AppGetHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether the bundle.social API is reachable and see the current operational status of every supported social platform. Use this endpoint for uptime monitoring and to detect platform-side outages before publishing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.app.appGetHealth();
  // TODO: Handle 'response' of type ApiV1Response
} catch (err) {
  // TODO: Handle 'err' of type App.AppGetHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.app.appGetHealth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1Response
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.app.appGetHealth()`

- **OnSuccess**: <code>[ApiV1Response](src/models/api-v1-response.ts)</code>
- **OnError**: throws <code>[App.AppGetHealthError](src/resources/app.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.app.appGetHealth().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1Response, App.AppGetHealthError&gt;</code>, with `result.value` of type <code>[ApiV1Response](src/models/api-v1-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Automation

> Source: [Automation](src/resources/automation.ts)

<details>
<summary><code>automationActivateFlow(request: Automation.AutomationActivateFlowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsActivateResponse, Automation.AutomationActivateFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume a paused flow so that it triggers on new events again.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationActivateFlow({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationsActivateResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationActivateFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationActivateFlow({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsActivateResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationActivateFlow(request)`

- **OnSuccess**: <code>[ApiV1AutomationsActivateResponse](src/models/api-v1-automations-activate-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationActivateFlowError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationActivateFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsActivateResponse, Automation.AutomationActivateFlowError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsActivateResponse](src/models/api-v1-automations-activate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationArchiveFlow(request: Automation.AutomationArchiveFlowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsArchiveResponse, Automation.AutomationArchiveFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retire a flow without deleting it. Archived flows never trigger and are hidden from the default list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationArchiveFlow({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationsArchiveResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationArchiveFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationArchiveFlow({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsArchiveResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationArchiveFlow(request)`

- **OnSuccess**: <code>[ApiV1AutomationsArchiveResponse](src/models/api-v1-automations-archive-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationArchiveFlowError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationArchiveFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsArchiveResponse, Automation.AutomationArchiveFlowError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsArchiveResponse](src/models/api-v1-automations-archive-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationCopyFlows(request?: Automation.AutomationCopyFlowsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsCopyResponse, Automation.AutomationCopyFlowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Duplicate one or more automation flows into another team. The copies are created as drafts so they can be re-pointed at that team's social accounts before going live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationCopyFlows();
  // TODO: Handle 'response' of type ApiV1AutomationsCopyResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationCopyFlowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationCopyFlows().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsCopyResponse
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
| <code>body?</code> | <code>[ApiV1AutomationsCopyRequest](src/models/api-v1-automations-copy-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationCopyFlows(request)`

- **OnSuccess**: <code>[ApiV1AutomationsCopyResponse](src/models/api-v1-automations-copy-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationCopyFlowsError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationCopyFlows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsCopyResponse, Automation.AutomationCopyFlowsError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsCopyResponse](src/models/api-v1-automations-copy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationCreateFlow(request?: Automation.AutomationCreateFlowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsResponse1, Automation.AutomationCreateFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an automation flow from a trigger and a list of steps. The flow starts as a draft and only runs once it is published.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationCreateFlow();
  // TODO: Handle 'response' of type ApiV1AutomationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationCreateFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationCreateFlow().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsResponse1
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
| <code>body?</code> | <code>[ApiV1AutomationsRequest](src/models/api-v1-automations-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationCreateFlow(request)`

- **OnSuccess**: <code>[ApiV1AutomationsResponse1](src/models/api-v1-automations-response1.ts)</code>
- **OnError**: throws <code>[Automation.AutomationCreateFlowError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationCreateFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsResponse1, Automation.AutomationCreateFlowError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsResponse1](src/models/api-v1-automations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationDeleteFlow(request: Automation.AutomationDeleteFlowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsResponse1, Automation.AutomationDeleteFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an automation flow. Past executions are kept for auditing and stay readable.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationDeleteFlow({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationDeleteFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationDeleteFlow({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsResponse1
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationDeleteFlow(request)`

- **OnSuccess**: <code>[ApiV1AutomationsResponse1](src/models/api-v1-automations-response1.ts)</code>
- **OnError**: throws <code>[Automation.AutomationDeleteFlowError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationDeleteFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsResponse1, Automation.AutomationDeleteFlowError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsResponse1](src/models/api-v1-automations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationGetExecution(request: Automation.AutomationGetExecutionRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationExecutionsResponse, Automation.AutomationGetExecutionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single automation run by id, including its input event, its per-step results and any error that stopped it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationGetExecution({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationExecutionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationGetExecutionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationGetExecution({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationExecutionsResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationGetExecution(request)`

- **OnSuccess**: <code>[ApiV1AutomationExecutionsResponse](src/models/api-v1-automation-executions-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationGetExecutionError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationGetExecution(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationExecutionsResponse, Automation.AutomationGetExecutionError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationExecutionsResponse](src/models/api-v1-automation-executions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationGetFlow(request: Automation.AutomationGetFlowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsResponse1, Automation.AutomationGetFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single automation flow by id, including its trigger, its steps and its current status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationGetFlow({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationGetFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationGetFlow({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsResponse1
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationGetFlow(request)`

- **OnSuccess**: <code>[ApiV1AutomationsResponse1](src/models/api-v1-automations-response1.ts)</code>
- **OnError**: throws <code>[Automation.AutomationGetFlowError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationGetFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsResponse1, Automation.AutomationGetFlowError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsResponse1](src/models/api-v1-automations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationGetFlowExecutions(request: Automation.AutomationGetFlowExecutionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsExecutionsResponse, Automation.AutomationGetFlowExecutionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the runs of a single automation flow, newest first. Use it to see which events matched and how each run ended. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on the first page only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationGetFlowExecutions({
    id: "some example string",
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1AutomationsExecutionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationGetFlowExecutionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation
  .automationGetFlowExecutions({ id: "some example string", teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsExecutionsResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>teamId</code> | <code>string</code> | - |
| <code>flowVersionId?</code> | <code>string</code> | - |
| <code>triggerId?</code> | <code>string</code> | - |
| <code>socialAccountId?</code> | <code>string</code> | - |
| <code>platform?</code> | <code>[Platform](src/models/platform.ts)</code> | - |
| <code>status?</code> | <code>[Status31](src/models/status31.ts)</code> | - |
| <code>conversationId?</code> | <code>string</code> | - |
| <code>fetchedCommentId?</code> | <code>string</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>cursor?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationGetFlowExecutions(request)`

- **OnSuccess**: <code>[ApiV1AutomationsExecutionsResponse](src/models/api-v1-automations-executions-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationGetFlowExecutionsError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationGetFlowExecutions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsExecutionsResponse, Automation.AutomationGetFlowExecutionsError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsExecutionsResponse](src/models/api-v1-automations-executions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationGetFlows(request: Automation.AutomationGetFlowsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsResponse, Automation.AutomationGetFlowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the automation flows of a team, newest first. Filter by `socialAccountId`, `status` and `platformScope`. Paginate with `offset` and `limit` (default 10). The response always carries the full `total`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationGetFlows({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationGetFlowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationGetFlows({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>status?</code> | <code>[StatusBundleSocialAutomationApi](src/models/status-bundle-social-automation-api.ts)</code> | - |
| <code>platformScope?</code> | <code>[PlatformScope](src/models/platform-scope.ts)</code> | - |
| <code>socialAccountId?</code> | <code>string</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationGetFlows(request)`

- **OnSuccess**: <code>[ApiV1AutomationsResponse](src/models/api-v1-automations-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationGetFlowsError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationGetFlows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsResponse, Automation.AutomationGetFlowsError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsResponse](src/models/api-v1-automations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationGetProviderSettings(request: Automation.AutomationGetProviderSettingsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationProviderSettingsResponse, Automation.AutomationGetProviderSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the platform-side automation settings stored per social account, such as the Instagram icebreakers or persistent menu we manage for you. Paginate with `offset` and `limit` (default 10). The response always carries the full `total`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationGetProviderSettings({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationProviderSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationGetProviderSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation
  .automationGetProviderSettings({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationProviderSettingsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>platform?</code> | <code>[Platform](src/models/platform.ts)</code> | - |
| <code>socialAccountId?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[Type112](src/models/type112.ts)</code> | - |
| <code>status?</code> | <code>[Status59](src/models/status59.ts)</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationGetProviderSettings(request)`

- **OnSuccess**: <code>[ApiV1AutomationProviderSettingsResponse](src/models/api-v1-automation-provider-settings-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationGetProviderSettingsError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationGetProviderSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationProviderSettingsResponse, Automation.AutomationGetProviderSettingsError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationProviderSettingsResponse](src/models/api-v1-automation-provider-settings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationPauseFlow(request: Automation.AutomationPauseFlowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsPauseResponse, Automation.AutomationPauseFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop a live flow from triggering on new events while keeping its configuration intact.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationPauseFlow({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationsPauseResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationPauseFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationPauseFlow({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsPauseResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationPauseFlow(request)`

- **OnSuccess**: <code>[ApiV1AutomationsPauseResponse](src/models/api-v1-automations-pause-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationPauseFlowError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationPauseFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsPauseResponse, Automation.AutomationPauseFlowError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsPauseResponse](src/models/api-v1-automations-pause-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationPublishFlow(request: Automation.AutomationPublishFlowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsPublishResponse, Automation.AutomationPublishFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a draft flow and make it live, so that matching events start triggering it. Returns 400 when the flow is not valid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationPublishFlow({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationsPublishResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationPublishFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationPublishFlow({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsPublishResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1AutomationsPublishRequest](src/models/api-v1-automations-publish-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationPublishFlow(request)`

- **OnSuccess**: <code>[ApiV1AutomationsPublishResponse](src/models/api-v1-automations-publish-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationPublishFlowError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationPublishFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsPublishResponse, Automation.AutomationPublishFlowError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsPublishResponse](src/models/api-v1-automations-publish-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationSendRichMessage(request: Automation.AutomationSendRichMessageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationRichMessagesConversationsResponse, Automation.AutomationSendRichMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a rich message, such as a button or card template, into a conversation using the same renderer the automation steps use. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationSendRichMessage({
    conversationId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1AutomationRichMessagesConversationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationSendRichMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation
  .automationSendRichMessage({ conversationId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationRichMessagesConversationsResponse
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
| <code>conversationId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1AutomationRichMessagesConversationsRequest](src/models/api-v1-automation-rich-messages-conversations-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationSendRichMessage(request)`

- **OnSuccess**: <code>[ApiV1AutomationRichMessagesConversationsResponse](src/models/api-v1-automation-rich-messages-conversations-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationSendRichMessageError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationSendRichMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationRichMessagesConversationsResponse, Automation.AutomationSendRichMessageError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationRichMessagesConversationsResponse](src/models/api-v1-automation-rich-messages-conversations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationSyncProviderSetting(request: Automation.AutomationSyncProviderSettingRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationProviderSettingsSyncResponse, Automation.AutomationSyncProviderSettingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-push a stored automation setting to the platform, for example after a failed sync or a reconnected account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationSyncProviderSetting({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationProviderSettingsSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationSyncProviderSettingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation
  .automationSyncProviderSetting({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationProviderSettingsSyncResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationSyncProviderSetting(request)`

- **OnSuccess**: <code>[ApiV1AutomationProviderSettingsSyncResponse](src/models/api-v1-automation-provider-settings-sync-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationSyncProviderSettingError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationSyncProviderSetting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationProviderSettingsSyncResponse, Automation.AutomationSyncProviderSettingError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationProviderSettingsSyncResponse](src/models/api-v1-automation-provider-settings-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationTestFlow(request: Automation.AutomationTestFlowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsTestResponse, Automation.AutomationTestFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run a flow once against a sample event and return the resulting execution. Steps that send a message really send it, so a test returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationTestFlow({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationsTestResponse
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationTestFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationTestFlow({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsTestResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1AutomationsTestRequest](src/models/api-v1-automations-test-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationTestFlow(request)`

- **OnSuccess**: <code>[ApiV1AutomationsTestResponse](src/models/api-v1-automations-test-response.ts)</code>
- **OnError**: throws <code>[Automation.AutomationTestFlowError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationTestFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsTestResponse, Automation.AutomationTestFlowError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsTestResponse](src/models/api-v1-automations-test-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationUpdateFlow(request: Automation.AutomationUpdateFlowRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationsResponse1, Automation.AutomationUpdateFlowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the name, trigger or steps of an automation flow. Changes to a published flow take effect on the next matching event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationUpdateFlow({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1AutomationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationUpdateFlowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation.automationUpdateFlow({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationsResponse1
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1AutomationsRequest1](src/models/api-v1-automations-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationUpdateFlow(request)`

- **OnSuccess**: <code>[ApiV1AutomationsResponse1](src/models/api-v1-automations-response1.ts)</code>
- **OnError**: throws <code>[Automation.AutomationUpdateFlowError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationUpdateFlow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationsResponse1, Automation.AutomationUpdateFlowError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationsResponse1](src/models/api-v1-automations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>automationUpsertProviderSetting(request: Automation.AutomationUpsertProviderSettingRequest, options?: RequestOptions): ApiPromise&lt;ApiV1AutomationProviderSettingsResponse1, Automation.AutomationUpsertProviderSettingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or replace the automation setting of a given type for a social account, and push it to the platform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automation.automationUpsertProviderSetting({
    socialAccountId: "some example string",
    type: Type112.FacebookPersistentMenu,
  });
  // TODO: Handle 'response' of type ApiV1AutomationProviderSettingsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Automation.AutomationUpsertProviderSettingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automation
  .automationUpsertProviderSetting({
    socialAccountId: "some example string",
    type: Type112.FacebookPersistentMenu,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1AutomationProviderSettingsResponse1
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
| <code>socialAccountId</code> | <code>string</code> | - |
| <code>type</code> | <code>[Type112](src/models/type112.ts)</code> | - |
| <code>body?</code> | <code>[ApiV1AutomationProviderSettingsRequest](src/models/api-v1-automation-provider-settings-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automation.automationUpsertProviderSetting(request)`

- **OnSuccess**: <code>[ApiV1AutomationProviderSettingsResponse1](src/models/api-v1-automation-provider-settings-response1.ts)</code>
- **OnError**: throws <code>[Automation.AutomationUpsertProviderSettingError](src/resources/automation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automation.automationUpsertProviderSetting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1AutomationProviderSettingsResponse1, Automation.AutomationUpsertProviderSettingError&gt;</code>, with `result.value` of type <code>[ApiV1AutomationProviderSettingsResponse1](src/models/api-v1-automation-provider-settings-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CommentApi

> Source: [CommentApi](src/resources/comment-api.ts)

<details>
<summary><code>commentCreate(request?: CommentApi.CommentCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentResponse, CommentApi.CommentCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a comment or a reply on one of your published posts. Use it to schedule the first comment on Instagram or LinkedIn, or to respond to your audience programmatically.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentCreate();
  // TODO: Handle 'response' of type ApiV1CommentResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi.commentCreate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentResponse
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
| <code>body?</code> | <code>[ApiV1CommentRequest1](src/models/api-v1-comment-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentCreate(request)`

- **OnSuccess**: <code>[ApiV1CommentResponse](src/models/api-v1-comment-response.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentCreateError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentResponse, CommentApi.CommentCreateError&gt;</code>, with `result.value` of type <code>[ApiV1CommentResponse](src/models/api-v1-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentDelete(request: CommentApi.CommentDeleteRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentResponse, CommentApi.CommentDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a comment from bundle.social. Deleting a scheduled comment cancels it before it publishes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentDelete({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1CommentResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi.commentDelete({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentDelete(request)`

- **OnSuccess**: <code>[ApiV1CommentResponse](src/models/api-v1-comment-response.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentDeleteError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentResponse, CommentApi.CommentDeleteError&gt;</code>, with `result.value` of type <code>[ApiV1CommentResponse](src/models/api-v1-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentGet(request: CommentApi.CommentGetRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentResponse, CommentApi.CommentGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single comment you created through bundle.social, including its publishing status and any error details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentGet({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1CommentResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi.commentGet({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentGet(request)`

- **OnSuccess**: <code>[ApiV1CommentResponse](src/models/api-v1-comment-response.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentGetError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentResponse, CommentApi.CommentGetError&gt;</code>, with `result.value` of type <code>[ApiV1CommentResponse](src/models/api-v1-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentGetList(request: CommentApi.CommentGetListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentResponse3, CommentApi.CommentGetListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List and filter the comments your organization has created, with pagination. Use it to track which scheduled comments published successfully.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentGetList({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1CommentResponse3
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentGetListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi.commentGetList({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentResponse3
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
| <code>teamId</code> | <code>string</code> | - |
| <code>postId?</code> | <code>string</code> | - |
| <code>importedPostId?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[Status4](src/models/status4.ts)</code> | - |
| <code>orderBy?</code> | <code>[OrderBy](src/models/order-by.ts)</code> | - |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | - |
| <code>q?</code> | <code>string</code> | - |
| <code>platforms?</code> | <code>[Platform6](src/models/platform6.ts)[]</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentGetList(request)`

- **OnSuccess**: <code>[ApiV1CommentResponse3](src/models/api-v1-comment-response3.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentGetListError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentGetList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentResponse3, CommentApi.CommentGetListError&gt;</code>, with `result.value` of type <code>[ApiV1CommentResponse3](src/models/api-v1-comment-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentImportActionFetchedComment(request: CommentApi.CommentImportActionFetchedCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentImportCommentsActionResponse, CommentApi.CommentImportActionFetchedCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reply to, hide, like, or delete an imported comment directly on the social platform. Use this to moderate and engage without leaving your own app.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentImportActionFetchedComment({
    commentId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1CommentImportCommentsActionResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentImportActionFetchedCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi
  .commentImportActionFetchedComment({ commentId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentImportCommentsActionResponse
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
| <code>commentId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1CommentImportCommentsActionRequest](src/models/api-v1-comment-import-comments-action-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentImportActionFetchedComment(request)`

- **OnSuccess**: <code>[ApiV1CommentImportCommentsActionResponse](src/models/api-v1-comment-import-comments-action-response.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentImportActionFetchedCommentError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentImportActionFetchedComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentImportCommentsActionResponse, CommentApi.CommentImportActionFetchedCommentError&gt;</code>, with `result.value` of type <code>[ApiV1CommentImportCommentsActionResponse](src/models/api-v1-comment-import-comments-action-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentImportCreate(request?: CommentApi.CommentImportCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentImportResponse, CommentApi.CommentImportCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that pulls existing comments from a published post on the social platform into bundle.social so you can read and reply to them through the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentImportCreate();
  // TODO: Handle 'response' of type ApiV1CommentImportResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentImportCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi.commentImportCreate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentImportResponse
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
| <code>body?</code> | <code>[ApiV1CommentImportRequest](src/models/api-v1-comment-import-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentImportCreate(request)`

- **OnSuccess**: <code>[ApiV1CommentImportResponse](src/models/api-v1-comment-import-response.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentImportCreateError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentImportCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentImportResponse, CommentApi.CommentImportCreateError&gt;</code>, with `result.value` of type <code>[ApiV1CommentImportResponse](src/models/api-v1-comment-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentImportGetById(request: CommentApi.CommentImportGetByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentImportResponse, CommentApi.CommentImportGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single comment import job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentImportGetById({ importId: "some example string" });
  // TODO: Handle 'response' of type ApiV1CommentImportResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentImportGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi
  .commentImportGetById({ importId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentImportResponse
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
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentImportGetById(request)`

- **OnSuccess**: <code>[ApiV1CommentImportResponse](src/models/api-v1-comment-import-response.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentImportGetByIdError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentImportGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentImportResponse, CommentApi.CommentImportGetByIdError&gt;</code>, with `result.value` of type <code>[ApiV1CommentImportResponse](src/models/api-v1-comment-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentImportGetFetchedComments(request: CommentApi.CommentImportGetFetchedCommentsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentImportCommentsResponse, CommentApi.CommentImportGetFetchedCommentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the comments pulled in by a comment import, with pagination. Use this to read audience replies and decide which ones need a response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentImportGetFetchedComments({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1CommentImportCommentsResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentImportGetFetchedCommentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi
  .commentImportGetFetchedComments({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentImportCommentsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>postId?</code> | <code>string</code> | - |
| <code>importedPostId?</code> | <code>string</code> | - |
| <code>platform?</code> | <code>[PlatformBundleSocialCommentApi](src/models/platform-bundle-social-comment-api.ts)</code> | - |
| <code>socialAccountId?</code> | <code>string</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentImportGetFetchedComments(request)`

- **OnSuccess**: <code>[ApiV1CommentImportCommentsResponse](src/models/api-v1-comment-import-comments-response.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentImportGetFetchedCommentsError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentImportGetFetchedComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentImportCommentsResponse, CommentApi.CommentImportGetFetchedCommentsError&gt;</code>, with `result.value` of type <code>[ApiV1CommentImportCommentsResponse](src/models/api-v1-comment-import-comments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentImportGetList(request: CommentApi.CommentImportGetListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentImportResponse1, CommentApi.CommentImportGetListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List comment import jobs for a team so you can monitor which imports are queued, running, finished, or failed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentImportGetList({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1CommentImportResponse1
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentImportGetListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi.commentImportGetList({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentImportResponse1
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
| <code>teamId</code> | <code>string</code> | - |
| <code>postId?</code> | <code>string</code> | - |
| <code>importedPostId?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[StatusBundleSocialCommentApi](src/models/status-bundle-social-comment-api.ts)</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentImportGetList(request)`

- **OnSuccess**: <code>[ApiV1CommentImportResponse1](src/models/api-v1-comment-import-response1.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentImportGetListError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentImportGetList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentImportResponse1, CommentApi.CommentImportGetListError&gt;</code>, with `result.value` of type <code>[ApiV1CommentImportResponse1](src/models/api-v1-comment-import-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentRetry(request: CommentApi.CommentRetryRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentRetryResponse, CommentApi.CommentRetryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-attempt publishing a comment that failed, for example after a token expired or a platform outage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentRetry({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1CommentRetryResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentRetryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi.commentRetry({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentRetryResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentRetry(request)`

- **OnSuccess**: <code>[ApiV1CommentRetryResponse](src/models/api-v1-comment-retry-response.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentRetryError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentRetry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentRetryResponse, CommentApi.CommentRetryError&gt;</code>, with `result.value` of type <code>[ApiV1CommentRetryResponse](src/models/api-v1-comment-retry-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentUpdate(request: CommentApi.CommentUpdateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1CommentResponse, CommentApi.CommentUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the content or scheduled time of a comment that has not published yet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentApi.commentUpdate({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1CommentResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentApi.CommentUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentApi.commentUpdate({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1CommentResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1CommentRequest](src/models/api-v1-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentApi.commentUpdate(request)`

- **OnSuccess**: <code>[ApiV1CommentResponse](src/models/api-v1-comment-response.ts)</code>
- **OnError**: throws <code>[CommentApi.CommentUpdateError](src/resources/comment-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentApi.commentUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1CommentResponse, CommentApi.CommentUpdateError&gt;</code>, with `result.value` of type <code>[ApiV1CommentResponse](src/models/api-v1-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConversationApi

> Source: [ConversationApi](src/resources/conversation-api.ts)

<details>
<summary><code>conversationArchive(request: ConversationApi.ConversationArchiveRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsArchiveResponse, ConversationApi.ConversationArchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a conversation out of the active inbox. Incoming messages reopen it automatically.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationArchive({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1ConversationsArchiveResponse
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationArchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi.conversationArchive({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsArchiveResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationArchive(request)`

- **OnSuccess**: <code>[ApiV1ConversationsArchiveResponse](src/models/api-v1-conversations-archive-response.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationArchiveError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsArchiveResponse, ConversationApi.ConversationArchiveError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsArchiveResponse](src/models/api-v1-conversations-archive-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationGet(request: ConversationApi.ConversationGetRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsResponse1, ConversationApi.ConversationGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single conversation by id, including the participant, the linked social account and its unread and status flags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationGet({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1ConversationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi.conversationGet({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsResponse1
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationGet(request)`

- **OnSuccess**: <code>[ApiV1ConversationsResponse1](src/models/api-v1-conversations-response1.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationGetError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsResponse1, ConversationApi.ConversationGetError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsResponse1](src/models/api-v1-conversations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationGetList(request: ConversationApi.ConversationGetListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsResponse, ConversationApi.ConversationGetListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List conversations for a team, newest activity first. Filter by `socialAccountId`, `platform` and `status`. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on the first page only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationGetList({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1ConversationsResponse
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationGetListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi
  .conversationGetList({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>platform?</code> | <code>[PlatformBundleSocialConversationApi](src/models/platform-bundle-social-conversation-api.ts)</code> | - |
| <code>socialAccountId?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[StatusBundleSocialConversationApi](src/models/status-bundle-social-conversation-api.ts)</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>cursor?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationGetList(request)`

- **OnSuccess**: <code>[ApiV1ConversationsResponse](src/models/api-v1-conversations-response.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationGetListError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationGetList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsResponse, ConversationApi.ConversationGetListError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsResponse](src/models/api-v1-conversations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationGetMessages(request: ConversationApi.ConversationGetMessagesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsMessagesResponse, ConversationApi.ConversationGetMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the messages of a conversation. Pages walk backwards in time, while the messages inside a page are ordered oldest first, ready to render. Includes attachments, reactions and delivery state. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on the first page only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationGetMessages({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1ConversationsMessagesResponse
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationGetMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi
  .conversationGetMessages({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsMessagesResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>cursor?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationGetMessages(request)`

- **OnSuccess**: <code>[ApiV1ConversationsMessagesResponse](src/models/api-v1-conversations-messages-response.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationGetMessagesError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationGetMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsMessagesResponse, ConversationApi.ConversationGetMessagesError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsMessagesResponse](src/models/api-v1-conversations-messages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationMarkRead(request: ConversationApi.ConversationMarkReadRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsReadResponse, ConversationApi.ConversationMarkReadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear the unread state of a conversation, optionally up to a specific message.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationMarkRead({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1ConversationsReadResponse
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationMarkReadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi.conversationMarkRead({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsReadResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ConversationsReadRequest](src/models/api-v1-conversations-read-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationMarkRead(request)`

- **OnSuccess**: <code>[ApiV1ConversationsReadResponse](src/models/api-v1-conversations-read-response.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationMarkReadError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationMarkRead(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsReadResponse, ConversationApi.ConversationMarkReadError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsReadResponse](src/models/api-v1-conversations-read-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationOpen(request: ConversationApi.ConversationOpenRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsOpenResponse, ConversationApi.ConversationOpenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move an archived or closed conversation back into the active inbox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationOpen({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1ConversationsOpenResponse
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationOpenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi.conversationOpen({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsOpenResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationOpen(request)`

- **OnSuccess**: <code>[ApiV1ConversationsOpenResponse](src/models/api-v1-conversations-open-response.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationOpenError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationOpen(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsOpenResponse, ConversationApi.ConversationOpenError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsOpenResponse](src/models/api-v1-conversations-open-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationPrivateReply(request?: ConversationApi.ConversationPrivateReplyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsPrivateReplyResponse, ConversationApi.ConversationPrivateReplyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a direct message in reply to a Facebook or Instagram comment we have already imported. Creates the conversation when none exists yet. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationPrivateReply();
  // TODO: Handle 'response' of type ApiV1ConversationsPrivateReplyResponse
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationPrivateReplyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi.conversationPrivateReply().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsPrivateReplyResponse
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
| <code>body?</code> | <code>[ApiV1ConversationsPrivateReplyRequest](src/models/api-v1-conversations-private-reply-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationPrivateReply(request)`

- **OnSuccess**: <code>[ApiV1ConversationsPrivateReplyResponse](src/models/api-v1-conversations-private-reply-response.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationPrivateReplyError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationPrivateReply(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsPrivateReplyResponse, ConversationApi.ConversationPrivateReplyError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsPrivateReplyResponse](src/models/api-v1-conversations-private-reply-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationReactMessage(request: ConversationApi.ConversationReactMessageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsMessagesReactionResponse, ConversationApi.ConversationReactMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add or remove a reaction on a message in a conversation. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationReactMessage({
    id: "some example string",
    messageId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1ConversationsMessagesReactionResponse
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationReactMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi
  .conversationReactMessage({ id: "some example string", messageId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsMessagesReactionResponse
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
| <code>id</code> | <code>string</code> | - |
| <code>messageId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ConversationsMessagesReactionRequest](src/models/api-v1-conversations-messages-reaction-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationReactMessage(request)`

- **OnSuccess**: <code>[ApiV1ConversationsMessagesReactionResponse](src/models/api-v1-conversations-messages-reaction-response.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationReactMessageError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationReactMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsMessagesReactionResponse, ConversationApi.ConversationReactMessageError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsMessagesReactionResponse](src/models/api-v1-conversations-messages-reaction-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationSendMessage(request: ConversationApi.ConversationSendMessageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsMessagesResponse1, ConversationApi.ConversationSendMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the participant of a conversation. The platform reply window must still be open. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationSendMessage({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1ConversationsMessagesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationSendMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi
  .conversationSendMessage({ id: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsMessagesResponse1
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ConversationsMessagesRequest](src/models/api-v1-conversations-messages-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationSendMessage(request)`

- **OnSuccess**: <code>[ApiV1ConversationsMessagesResponse1](src/models/api-v1-conversations-messages-response1.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationSendMessageError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationSendMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsMessagesResponse1, ConversationApi.ConversationSendMessageError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsMessagesResponse1](src/models/api-v1-conversations-messages-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationUpdate(request: ConversationApi.ConversationUpdateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1ConversationsResponse1, ConversationApi.ConversationUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the status of a conversation. This is the general form of the archive and open endpoints, which move a conversation to one specific status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversationApi.conversationUpdate({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1ConversationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ConversationApi.ConversationUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversationApi.conversationUpdate({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1ConversationsResponse1
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1ConversationsRequest](src/models/api-v1-conversations-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversationApi.conversationUpdate(request)`

- **OnSuccess**: <code>[ApiV1ConversationsResponse1](src/models/api-v1-conversations-response1.ts)</code>
- **OnError**: throws <code>[ConversationApi.ConversationUpdateError](src/resources/conversation-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversationApi.conversationUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1ConversationsResponse1, ConversationApi.ConversationUpdateError&gt;</code>, with `result.value` of type <code>[ApiV1ConversationsResponse1](src/models/api-v1-conversations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Credit

> Source: [Credit](src/resources/credit.ts)

<details>
<summary><code>creditGetCreditBalance(options?: RequestOptions): ApiPromise&lt;ApiV1BillingCreditsBalanceResponse, Credit.CreditGetCreditBalanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your organization's prepaid credit balance: settled funds, in-flight holds, and the available amount metered X actions draw from.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credit.creditGetCreditBalance();
  // TODO: Handle 'response' of type ApiV1BillingCreditsBalanceResponse
} catch (err) {
  // TODO: Handle 'err' of type Credit.CreditGetCreditBalanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.credit.creditGetCreditBalance().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1BillingCreditsBalanceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.credit.creditGetCreditBalance()`

- **OnSuccess**: <code>[ApiV1BillingCreditsBalanceResponse](src/models/api-v1-billing-credits-balance-response.ts)</code>
- **OnError**: throws <code>[Credit.CreditGetCreditBalanceError](src/resources/credit.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.credit.creditGetCreditBalance().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1BillingCreditsBalanceResponse, Credit.CreditGetCreditBalanceError&gt;</code>, with `result.value` of type <code>[ApiV1BillingCreditsBalanceResponse](src/models/api-v1-billing-credits-balance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditQuoteBillableUsage(request?: Credit.CreditQuoteBillableUsageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1BillingBillableUsageQuoteResponse, Credit.CreditQuoteBillableUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Estimate the credit cost of a metered X action (post publishing, analytics reads, imports) before running it, and see whether your current balance covers it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.credit.creditQuoteBillableUsage();
  // TODO: Handle 'response' of type ApiV1BillingBillableUsageQuoteResponse
} catch (err) {
  // TODO: Handle 'err' of type Credit.CreditQuoteBillableUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.credit.creditQuoteBillableUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1BillingBillableUsageQuoteResponse
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
| <code>body?</code> | <code>[ApiV1BillingBillableUsageQuoteRequest](src/models/api-v1-billing-billable-usage-quote-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.credit.creditQuoteBillableUsage(request)`

- **OnSuccess**: <code>[ApiV1BillingBillableUsageQuoteResponse](src/models/api-v1-billing-billable-usage-quote-response.ts)</code>
- **OnError**: throws <code>[Credit.CreditQuoteBillableUsageError](src/resources/credit.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.credit.creditQuoteBillableUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1BillingBillableUsageQuoteResponse, Credit.CreditQuoteBillableUsageError&gt;</code>, with `result.value` of type <code>[ApiV1BillingBillableUsageQuoteResponse](src/models/api-v1-billing-billable-usage-quote-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Misc

> Source: [Misc](src/resources/misc.ts)

<details>
<summary><code>miscBlueskyDeleteComment(request?: Misc.MiscBlueskyDeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscBlueskyCommentResponse, Misc.MiscBlueskyDeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Bluesky reply/comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscBlueskyDeleteComment();
  // TODO: Handle 'response' of type ApiV1MiscBlueskyCommentResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscBlueskyDeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscBlueskyDeleteComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscBlueskyCommentResponse
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
| <code>body?</code> | <code>[ApiV1MiscBlueskyCommentRequest](src/models/api-v1-misc-bluesky-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscBlueskyDeleteComment(request)`

- **OnSuccess**: <code>[ApiV1MiscBlueskyCommentResponse](src/models/api-v1-misc-bluesky-comment-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscBlueskyDeleteCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscBlueskyDeleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscBlueskyCommentResponse, Misc.MiscBlueskyDeleteCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscBlueskyCommentResponse](src/models/api-v1-misc-bluesky-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscBlueskyDeletePost(request?: Misc.MiscBlueskyDeletePostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscBlueskyPostResponse, Misc.MiscBlueskyDeletePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Bluesky post.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscBlueskyDeletePost();
  // TODO: Handle 'response' of type ApiV1MiscBlueskyPostResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscBlueskyDeletePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscBlueskyDeletePost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscBlueskyPostResponse
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
| <code>body?</code> | <code>[ApiV1MiscBlueskyPostRequest](src/models/api-v1-misc-bluesky-post-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscBlueskyDeletePost(request)`

- **OnSuccess**: <code>[ApiV1MiscBlueskyPostResponse](src/models/api-v1-misc-bluesky-post-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscBlueskyDeletePostError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscBlueskyDeletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscBlueskyPostResponse, Misc.MiscBlueskyDeletePostError&gt;</code>, with `result.value` of type <code>[ApiV1MiscBlueskyPostResponse](src/models/api-v1-misc-bluesky-post-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscDiscordDeleteMessage(request?: Misc.MiscDiscordDeleteMessageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscDiscordMessageResponse, Misc.MiscDiscordDeleteMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Discord message.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscDiscordDeleteMessage();
  // TODO: Handle 'response' of type ApiV1MiscDiscordMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscDiscordDeleteMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscDiscordDeleteMessage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscDiscordMessageResponse
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
| <code>body?</code> | <code>[ApiV1MiscDiscordMessageRequest](src/models/api-v1-misc-discord-message-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscDiscordDeleteMessage(request)`

- **OnSuccess**: <code>[ApiV1MiscDiscordMessageResponse](src/models/api-v1-misc-discord-message-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscDiscordDeleteMessageError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscDiscordDeleteMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscDiscordMessageResponse, Misc.MiscDiscordDeleteMessageError&gt;</code>, with `result.value` of type <code>[ApiV1MiscDiscordMessageResponse](src/models/api-v1-misc-discord-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookDeleteComment(request?: Misc.MiscFacebookDeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookCommentResponse1, Misc.MiscFacebookDeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Facebook comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookDeleteComment();
  // TODO: Handle 'response' of type ApiV1MiscFacebookCommentResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookDeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscFacebookDeleteComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookCommentResponse1
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
| <code>body?</code> | <code>[ApiV1MiscFacebookCommentRequest1](src/models/api-v1-misc-facebook-comment-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookDeleteComment(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookCommentResponse1](src/models/api-v1-misc-facebook-comment-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookDeleteCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookDeleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookCommentResponse1, Misc.MiscFacebookDeleteCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookCommentResponse1](src/models/api-v1-misc-facebook-comment-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookDeletePost(request?: Misc.MiscFacebookDeletePostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookPostResponse1, Misc.MiscFacebookDeletePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Facebook post or reel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookDeletePost();
  // TODO: Handle 'response' of type ApiV1MiscFacebookPostResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookDeletePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscFacebookDeletePost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookPostResponse1
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
| <code>body?</code> | <code>[ApiV1MiscFacebookPostRequest1](src/models/api-v1-misc-facebook-post-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookDeletePost(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookPostResponse1](src/models/api-v1-misc-facebook-post-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookDeletePostError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookDeletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookPostResponse1, Misc.MiscFacebookDeletePostError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookPostResponse1](src/models/api-v1-misc-facebook-post-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookEditComment(request?: Misc.MiscFacebookEditCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookCommentResponse, Misc.MiscFacebookEditCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Facebook comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookEditComment();
  // TODO: Handle 'response' of type ApiV1MiscFacebookCommentResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookEditCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscFacebookEditComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookCommentResponse
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
| <code>body?</code> | <code>[ApiV1MiscFacebookCommentRequest](src/models/api-v1-misc-facebook-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookEditComment(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookCommentResponse](src/models/api-v1-misc-facebook-comment-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookEditCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookEditComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookCommentResponse, Misc.MiscFacebookEditCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookCommentResponse](src/models/api-v1-misc-facebook-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookEditPost(request?: Misc.MiscFacebookEditPostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookPostResponse, Misc.MiscFacebookEditPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the message/content of a published Facebook post or reel. Note: Only text content can be edited, media cannot be changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookEditPost();
  // TODO: Handle 'response' of type ApiV1MiscFacebookPostResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookEditPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscFacebookEditPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookPostResponse
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
| <code>body?</code> | <code>[ApiV1MiscFacebookPostRequest](src/models/api-v1-misc-facebook-post-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookEditPost(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookPostResponse](src/models/api-v1-misc-facebook-post-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookEditPostError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookEditPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookPostResponse, Misc.MiscFacebookEditPostError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookPostResponse](src/models/api-v1-misc-facebook-post-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookGetRecommendationById(request: Misc.MiscFacebookGetRecommendationByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookRecommendationsResponse1, Misc.MiscFacebookGetRecommendationByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve one imported Facebook recommendation with its rating, text, author, and existing replies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookGetRecommendationById({
    recommendationId: "some example string",
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookGetRecommendationByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscFacebookGetRecommendationById({
    recommendationId: "some example string",
    teamId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookRecommendationsResponse1
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
| <code>recommendationId</code> | <code>string</code> | - |
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookGetRecommendationById(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsResponse1](src/models/api-v1-misc-facebook-recommendations-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookGetRecommendationByIdError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookGetRecommendationById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookRecommendationsResponse1, Misc.MiscFacebookGetRecommendationByIdError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookRecommendationsResponse1](src/models/api-v1-misc-facebook-recommendations-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookGetRecommendationComments(request: Misc.MiscFacebookGetRecommendationCommentsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookRecommendationsCommentsResponse, Misc.MiscFacebookGetRecommendationCommentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the comments in a Facebook recommendation thread so you can see the full conversation before replying.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookGetRecommendationComments({
    recommendationId: "some example string",
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsCommentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookGetRecommendationCommentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscFacebookGetRecommendationComments({
    recommendationId: "some example string",
    teamId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookRecommendationsCommentsResponse
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
| <code>recommendationId</code> | <code>string</code> | - |
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookGetRecommendationComments(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsCommentsResponse](src/models/api-v1-misc-facebook-recommendations-comments-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookGetRecommendationCommentsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookGetRecommendationComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookRecommendationsCommentsResponse, Misc.MiscFacebookGetRecommendationCommentsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookRecommendationsCommentsResponse](src/models/api-v1-misc-facebook-recommendations-comments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookGetRecommendationImportById(request: Misc.MiscFacebookGetRecommendationImportByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookRecommendationsImportResponse, Misc.MiscFacebookGetRecommendationImportByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single Facebook recommendations import job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookGetRecommendationImportById({
    importId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookGetRecommendationImportByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscFacebookGetRecommendationImportById({ importId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookRecommendationsImportResponse
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
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookGetRecommendationImportById(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsImportResponse](src/models/api-v1-misc-facebook-recommendations-import-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookGetRecommendationImportByIdError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookGetRecommendationImportById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookRecommendationsImportResponse, Misc.MiscFacebookGetRecommendationImportByIdError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookRecommendationsImportResponse](src/models/api-v1-misc-facebook-recommendations-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookGetRecommendationImportStatus(request: Misc.MiscFacebookGetRecommendationImportStatusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookRecommendationsImportResponse1, Misc.MiscFacebookGetRecommendationImportStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Facebook recommendation import jobs for a team so you can monitor which imports are queued, running, finished, or failed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookGetRecommendationImportStatus({
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookGetRecommendationImportStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscFacebookGetRecommendationImportStatus({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookRecommendationsImportResponse1
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
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookGetRecommendationImportStatus(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsImportResponse1](src/models/api-v1-misc-facebook-recommendations-import-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookGetRecommendationImportStatusError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookGetRecommendationImportStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookRecommendationsImportResponse1, Misc.MiscFacebookGetRecommendationImportStatusError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookRecommendationsImportResponse1](src/models/api-v1-misc-facebook-recommendations-import-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookGetRecommendations(request: Misc.MiscFacebookGetRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookRecommendationsResponse, Misc.MiscFacebookGetRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Facebook Page recommendations pulled in by an import, with paging and your remaining import capacity. Use it to build a reputation-management inbox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookGetRecommendations({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookGetRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscFacebookGetRecommendations({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookRecommendationsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookGetRecommendations(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsResponse](src/models/api-v1-misc-facebook-recommendations-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookGetRecommendationsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookGetRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookRecommendationsResponse, Misc.MiscFacebookGetRecommendationsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookRecommendationsResponse](src/models/api-v1-misc-facebook-recommendations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookGetTextFormatPresets(options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookTextFormatPresetsResponse, Misc.MiscFacebookGetTextFormatPresetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the text background presets (colored statuses) that can be passed as data.FACEBOOK.textFormatPresetId, grouped by whether each one renders as a flat color, a gradient, or an illustration. Facebook exposes no endpoint of its own for this, so read the list from here instead of hardcoding IDs. Any other numeric ID is also accepted and passed straight through to Facebook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookGetTextFormatPresets();
  // TODO: Handle 'response' of type ApiV1MiscFacebookTextFormatPresetsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookGetTextFormatPresetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscFacebookGetTextFormatPresets().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookTextFormatPresetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookGetTextFormatPresets()`

- **OnSuccess**: <code>[ApiV1MiscFacebookTextFormatPresetsResponse](src/models/api-v1-misc-facebook-text-format-presets-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookGetTextFormatPresetsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookGetTextFormatPresets().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookTextFormatPresetsResponse, Misc.MiscFacebookGetTextFormatPresetsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookTextFormatPresetsResponse](src/models/api-v1-misc-facebook-text-format-presets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookGetTokenDebug(request: Misc.MiscFacebookGetTokenDebugRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookTokenDebugResponse, Misc.MiscFacebookGetTokenDebugError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspect a connected Facebook account's access token, including its scopes and expiry. Use it to diagnose permission errors when publishing fails.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookGetTokenDebug({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscFacebookTokenDebugResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookGetTokenDebugError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscFacebookGetTokenDebug({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookTokenDebugResponse
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
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookGetTokenDebug(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookTokenDebugResponse](src/models/api-v1-misc-facebook-token-debug-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookGetTokenDebugError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookGetTokenDebug(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookTokenDebugResponse, Misc.MiscFacebookGetTokenDebugError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookTokenDebugResponse](src/models/api-v1-misc-facebook-token-debug-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookImportRecommendations(request?: Misc.MiscFacebookImportRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookRecommendationsImportResponse, Misc.MiscFacebookImportRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that pulls recommendations left on your Facebook Page into bundle.social so you can read and reply to them through the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookImportRecommendations();
  // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookImportRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscFacebookImportRecommendations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookRecommendationsImportResponse
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
| <code>body?</code> | <code>[ApiV1MiscFacebookRecommendationsImportRequest](src/models/api-v1-misc-facebook-recommendations-import-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookImportRecommendations(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsImportResponse](src/models/api-v1-misc-facebook-recommendations-import-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookImportRecommendationsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookImportRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookRecommendationsImportResponse, Misc.MiscFacebookImportRecommendationsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookRecommendationsImportResponse](src/models/api-v1-misc-facebook-recommendations-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookReplyToRecommendation(request: Misc.MiscFacebookReplyToRecommendationRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookRecommendationsReplyResponse, Misc.MiscFacebookReplyToRecommendationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a Page reply to a Facebook recommendation. Use it to respond to reviews programmatically instead of through Meta Business Suite.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookReplyToRecommendation({
    recommendationId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsReplyResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookReplyToRecommendationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscFacebookReplyToRecommendation({ recommendationId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookRecommendationsReplyResponse
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
| <code>recommendationId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1MiscFacebookRecommendationsReplyRequest](src/models/api-v1-misc-facebook-recommendations-reply-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookReplyToRecommendation(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsReplyResponse](src/models/api-v1-misc-facebook-recommendations-reply-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookReplyToRecommendationError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookReplyToRecommendation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookRecommendationsReplyResponse, Misc.MiscFacebookReplyToRecommendationError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookRecommendationsReplyResponse](src/models/api-v1-misc-facebook-recommendations-reply-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookReplyToRecommendationComment(request: Misc.MiscFacebookReplyToRecommendationCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookRecommendationsCommentsReplyResponse, Misc.MiscFacebookReplyToRecommendationCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a reply to a specific comment inside a Facebook recommendation thread.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookReplyToRecommendationComment({
    recommendationId: "some example string",
    commentId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsCommentsReplyResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookReplyToRecommendationCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscFacebookReplyToRecommendationComment({
    recommendationId: "some example string",
    commentId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookRecommendationsCommentsReplyResponse
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
| <code>recommendationId</code> | <code>string</code> | - |
| <code>commentId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1MiscFacebookRecommendationsCommentsReplyRequest](src/models/api-v1-misc-facebook-recommendations-comments-reply-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookReplyToRecommendationComment(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsCommentsReplyResponse](src/models/api-v1-misc-facebook-recommendations-comments-reply-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookReplyToRecommendationCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookReplyToRecommendationComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookRecommendationsCommentsReplyResponse, Misc.MiscFacebookReplyToRecommendationCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookRecommendationsCommentsReplyResponse](src/models/api-v1-misc-facebook-recommendations-comments-reply-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscFacebookSearchPages(request: Misc.MiscFacebookSearchPagesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscFacebookPagesResponse, Misc.MiscFacebookSearchPagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches public Facebook Pages and returns IDs that can be inserted into Facebook Page mention tokens.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscFacebookSearchPages({
    teamId: "some example string",
    q: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscFacebookPagesResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscFacebookSearchPagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscFacebookSearchPages({ teamId: "some example string", q: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscFacebookPagesResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>q</code> | <code>string</code> | Free-text query used to search Facebook Pages |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscFacebookSearchPages(request)`

- **OnSuccess**: <code>[ApiV1MiscFacebookPagesResponse](src/models/api-v1-misc-facebook-pages-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscFacebookSearchPagesError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscFacebookSearchPages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscFacebookPagesResponse, Misc.MiscFacebookSearchPagesError&gt;</code>, with `result.value` of type <code>[ApiV1MiscFacebookPagesResponse](src/models/api-v1-misc-facebook-pages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessAddMedia(request?: Misc.MiscGoogleBusinessAddMediaRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessMediaResponse, Misc.MiscGoogleBusinessAddMediaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a photo or video to your Google Business Profile from a bundle.social upload, tagged with a category such as exterior, interior, or product. Fresh photos are a local ranking and conversion signal.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessAddMedia();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessAddMediaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessAddMedia().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessMediaResponse
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessMediaRequest](src/models/api-v1-misc-google-business-media-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessAddMedia(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessMediaResponse](src/models/api-v1-misc-google-business-media-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessAddMediaError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessAddMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessMediaResponse, Misc.MiscGoogleBusinessAddMediaError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessMediaResponse](src/models/api-v1-misc-google-business-media-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessCreatePlaceActionLink(request?: Misc.MiscGoogleBusinessCreatePlaceActionLinkRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, Misc.MiscGoogleBusinessCreatePlaceActionLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an action link such as Book, Order online, or Reserve to your Google Business Profile so customers can convert straight from the listing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessCreatePlaceActionLink();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessCreatePlaceActionLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessCreatePlaceActionLink().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest](src/models/api-v1-misc-google-business-location-place-action-links-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessCreatePlaceActionLink(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1](src/models/api-v1-misc-google-business-location-place-action-links-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessCreatePlaceActionLinkError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessCreatePlaceActionLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, Misc.MiscGoogleBusinessCreatePlaceActionLinkError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1](src/models/api-v1-misc-google-business-location-place-action-links-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessDeleteMedia(request?: Misc.MiscGoogleBusinessDeleteMediaRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessMediaResponse2, Misc.MiscGoogleBusinessDeleteMediaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a photo or video from your Google Business Profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessDeleteMedia();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse2
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessDeleteMediaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessDeleteMedia().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessMediaResponse2
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessMediaRequest1](src/models/api-v1-misc-google-business-media-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessDeleteMedia(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessMediaResponse2](src/models/api-v1-misc-google-business-media-response2.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessDeleteMediaError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessDeleteMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessMediaResponse2, Misc.MiscGoogleBusinessDeleteMediaError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessMediaResponse2](src/models/api-v1-misc-google-business-media-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessDeletePlaceActionLink(request?: Misc.MiscGoogleBusinessDeletePlaceActionLinkRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3, Misc.MiscGoogleBusinessDeletePlaceActionLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an action link from your Google Business Profile, for example when a booking URL is retired.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessDeletePlaceActionLink();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessDeletePlaceActionLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessDeletePlaceActionLink().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2](src/models/api-v1-misc-google-business-location-place-action-links-request2.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessDeletePlaceActionLink(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3](src/models/api-v1-misc-google-business-location-place-action-links-response3.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessDeletePlaceActionLinkError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessDeletePlaceActionLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3, Misc.MiscGoogleBusinessDeletePlaceActionLinkError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3](src/models/api-v1-misc-google-business-location-place-action-links-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessDeletePost(request?: Misc.MiscGoogleBusinessDeletePostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessPostResponse, Misc.MiscGoogleBusinessDeletePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Google Business post.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessDeletePost();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessPostResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessDeletePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessDeletePost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessPostResponse
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessPostRequest](src/models/api-v1-misc-google-business-post-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessDeletePost(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessPostResponse](src/models/api-v1-misc-google-business-post-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessDeletePostError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessDeletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessPostResponse, Misc.MiscGoogleBusinessDeletePostError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessPostResponse](src/models/api-v1-misc-google-business-post-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessDeleteReviewReply(request: Misc.MiscGoogleBusinessDeleteReviewReplyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessReviewsReplyResponse, Misc.MiscGoogleBusinessDeleteReviewReplyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove your owner reply from a Google Review, leaving the customer's review in place.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessDeleteReviewReply({ reviewId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessDeleteReviewReplyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessDeleteReviewReply({ reviewId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
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
| <code>reviewId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessReviewsReplyRequest1](src/models/api-v1-misc-google-business-reviews-reply-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessDeleteReviewReply(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsReplyResponse](src/models/api-v1-misc-google-business-reviews-reply-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessDeleteReviewReplyError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessDeleteReviewReply(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessReviewsReplyResponse, Misc.MiscGoogleBusinessDeleteReviewReplyError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessReviewsReplyResponse](src/models/api-v1-misc-google-business-reviews-reply-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessGetAttributes(request: Misc.MiscGoogleBusinessGetAttributesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationAttributesResponse, Misc.MiscGoogleBusinessGetAttributesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the attributes currently set on your Google Business Profile location, such as accessibility, payment options, or amenities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessGetAttributes({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessGetAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessGetAttributes({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
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
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessGetAttributes(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationAttributesResponse](src/models/api-v1-misc-google-business-location-attributes-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessGetAttributesError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessGetAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationAttributesResponse, Misc.MiscGoogleBusinessGetAttributesError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationAttributesResponse](src/models/api-v1-misc-google-business-location-attributes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessGetFoodMenus(request: Misc.MiscGoogleBusinessGetFoodMenusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationFoodMenusResponse, Misc.MiscGoogleBusinessGetFoodMenusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use typed query param `fields`. Supports both comma-separated values (`fields=name,menus`) and repeated params (`fields=name&fields=menus`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessGetFoodMenus({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessGetFoodMenusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessGetFoodMenus({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>fields?</code> | <code>[Field3](src/models/field3.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessGetFoodMenus(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationFoodMenusResponse](src/models/api-v1-misc-google-business-location-food-menus-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessGetFoodMenusError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessGetFoodMenus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationFoodMenusResponse, Misc.MiscGoogleBusinessGetFoodMenusError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationFoodMenusResponse](src/models/api-v1-misc-google-business-location-food-menus-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessGetLocation(request: Misc.MiscGoogleBusinessGetLocationRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationResponse, Misc.MiscGoogleBusinessGetLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use typed query param `fields`. Supports both comma-separated values (`fields=name,title`) and repeated params (`fields=name&fields=title`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessGetLocation({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessGetLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessGetLocation({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>fields?</code> | <code>[FieldBundleSocialMiscApi](src/models/field-bundle-social-misc-api.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessGetLocation(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationResponse](src/models/api-v1-misc-google-business-location-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessGetLocationError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessGetLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationResponse, Misc.MiscGoogleBusinessGetLocationError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationResponse](src/models/api-v1-misc-google-business-location-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessGetReviewById(request: Misc.MiscGoogleBusinessGetReviewByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessReviewsResponse1, Misc.MiscGoogleBusinessGetReviewByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve one imported Google Review with its star rating, text, reviewer, and any existing owner reply.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessGetReviewById({
    reviewId: "some example string",
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessGetReviewByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessGetReviewById({ reviewId: "some example string", teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessReviewsResponse1
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
| <code>reviewId</code> | <code>string</code> | - |
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessGetReviewById(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsResponse1](src/models/api-v1-misc-google-business-reviews-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessGetReviewByIdError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessGetReviewById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessReviewsResponse1, Misc.MiscGoogleBusinessGetReviewByIdError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessReviewsResponse1](src/models/api-v1-misc-google-business-reviews-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessGetReviewImportById(request: Misc.MiscGoogleBusinessGetReviewImportByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessReviewsImportResponse, Misc.MiscGoogleBusinessGetReviewImportByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single Google Reviews import job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessGetReviewImportById({
    importId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessGetReviewImportByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessGetReviewImportById({ importId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessReviewsImportResponse
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
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessGetReviewImportById(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsImportResponse](src/models/api-v1-misc-google-business-reviews-import-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessGetReviewImportByIdError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessGetReviewImportById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessReviewsImportResponse, Misc.MiscGoogleBusinessGetReviewImportByIdError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessReviewsImportResponse](src/models/api-v1-misc-google-business-reviews-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessGetReviewImportStatus(request: Misc.MiscGoogleBusinessGetReviewImportStatusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessReviewsImportResponse1, Misc.MiscGoogleBusinessGetReviewImportStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Google Review import jobs for a team so you can monitor which imports are queued, running, finished, or failed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessGetReviewImportStatus({
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessGetReviewImportStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessGetReviewImportStatus({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessReviewsImportResponse1
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
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessGetReviewImportStatus(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsImportResponse1](src/models/api-v1-misc-google-business-reviews-import-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessGetReviewImportStatusError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessGetReviewImportStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessReviewsImportResponse1, Misc.MiscGoogleBusinessGetReviewImportStatusError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessReviewsImportResponse1](src/models/api-v1-misc-google-business-reviews-import-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessGetReviews(request: Misc.MiscGoogleBusinessGetReviewsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessReviewsResponse, Misc.MiscGoogleBusinessGetReviewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Google Reviews pulled in by an import, with paging and your remaining import capacity. Use it to build a review inbox or monitor rating trends.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessGetReviews({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessGetReviewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessGetReviews({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessReviewsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessGetReviews(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsResponse](src/models/api-v1-misc-google-business-reviews-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessGetReviewsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessGetReviews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessReviewsResponse, Misc.MiscGoogleBusinessGetReviewsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessReviewsResponse](src/models/api-v1-misc-google-business-reviews-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessGetServiceList(request: Misc.MiscGoogleBusinessGetServiceListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationServiceListResponse, Misc.MiscGoogleBusinessGetServiceListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the services listed on your Google Business Profile, including custom services and prices.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessGetServiceList({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessGetServiceListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessGetServiceList({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
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
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessGetServiceList(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationServiceListResponse](src/models/api-v1-misc-google-business-location-service-list-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessGetServiceListError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessGetServiceList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationServiceListResponse, Misc.MiscGoogleBusinessGetServiceListError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationServiceListResponse](src/models/api-v1-misc-google-business-location-service-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessImportReviews(request?: Misc.MiscGoogleBusinessImportReviewsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessReviewsImportResponse, Misc.MiscGoogleBusinessImportReviewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that pulls your Google Business Profile reviews into bundle.social so you can read and reply to them through the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessImportReviews();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessImportReviewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessImportReviews().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessReviewsImportResponse
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessReviewsImportRequest](src/models/api-v1-misc-google-business-reviews-import-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessImportReviews(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsImportResponse](src/models/api-v1-misc-google-business-reviews-import-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessImportReviewsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessImportReviews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessReviewsImportResponse, Misc.MiscGoogleBusinessImportReviewsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessReviewsImportResponse](src/models/api-v1-misc-google-business-reviews-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessListAvailableAttributes(request: Misc.MiscGoogleBusinessListAvailableAttributesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse, Misc.MiscGoogleBusinessListAvailableAttributesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the attributes Google allows for your location's category and country. Check this before updating attributes, since the valid set differs per business category. `regionCode`/`languageCode` are honoured by looking the attributes up through the location's primary category; when that category or a region code cannot be resolved (common for service-area businesses with no storefront address) the location's own defaults are returned instead and `lookup.by` comes back as `location`, meaning those two parameters were not applied.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessListAvailableAttributes({
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessListAvailableAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessListAvailableAttributes({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>languageCode?</code> | <code>string</code> | - |
| <code>regionCode?</code> | <code>string</code> | - |
| <code>pageSize?</code> | <code>number</code> | - |
| <code>pageToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessListAvailableAttributes(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse](src/models/api-v1-misc-google-business-location-attributes-available-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessListAvailableAttributesError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessListAvailableAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse, Misc.MiscGoogleBusinessListAvailableAttributesError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse](src/models/api-v1-misc-google-business-location-attributes-available-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessListCategories(request: Misc.MiscGoogleBusinessListCategoriesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse, Misc.MiscGoogleBusinessListCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires `regionCode` and `languageCode`. Default `view=BASIC`. Optional `names` fetches exact category IDs through `categories:batchGet`; otherwise `filter` supports `displayName` prefix search.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessListCategories({
    teamId: "some example string",
    regionCode: "some example string",
    languageCode: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessListCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessListCategories({
    teamId: "some example string",
    regionCode: "some example string",
    languageCode: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>regionCode</code> | <code>string</code> | - |
| <code>languageCode</code> | <code>string</code> | - |
| <code>names?</code> | <code>string[]</code> | - |
| <code>filter?</code> | <code>string</code> | - |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>pageToken?</code> | <code>string</code> | - |
| <code>view?</code> | <code>[View](src/models/view.ts)</code> | -<br>**Default**: "BASIC" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessListCategories(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse](src/models/api-v1-misc-google-business-location-categories-available-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessListCategoriesError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessListCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse, Misc.MiscGoogleBusinessListCategoriesError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse](src/models/api-v1-misc-google-business-location-categories-available-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessListMedia(request: Misc.MiscGoogleBusinessListMediaRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessMediaResponse1, Misc.MiscGoogleBusinessListMediaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the photos and videos on your Google Business Profile, with paging. Use it to audit which images are live before adding or removing media.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessListMedia({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessListMediaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessListMedia({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessMediaResponse1
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
| <code>teamId</code> | <code>string</code> | - |
| <code>pageSize?</code> | <code>number</code> | - |
| <code>pageToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessListMedia(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessMediaResponse1](src/models/api-v1-misc-google-business-media-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessListMediaError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessListMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessMediaResponse1, Misc.MiscGoogleBusinessListMediaError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessMediaResponse1](src/models/api-v1-misc-google-business-media-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessListPlaceActionLinks(request: Misc.MiscGoogleBusinessListPlaceActionLinksRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse, Misc.MiscGoogleBusinessListPlaceActionLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the action links on your Google Business Profile, such as booking, ordering, or reservation URLs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessListPlaceActionLinks({
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessListPlaceActionLinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessListPlaceActionLinks({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>pageSize?</code> | <code>number</code> | - |
| <code>pageToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessListPlaceActionLinks(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse](src/models/api-v1-misc-google-business-location-place-action-links-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessListPlaceActionLinksError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessListPlaceActionLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse, Misc.MiscGoogleBusinessListPlaceActionLinksError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse](src/models/api-v1-misc-google-business-location-place-action-links-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessListSearchKeywords(request: Misc.MiscGoogleBusinessListSearchKeywordsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse, Misc.MiscGoogleBusinessListSearchKeywordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Monthly search keyword impressions for your selected location. `startMonth`/`endMonth` are inclusive `YYYY-MM` values; counts are aggregated across the whole range, so request a single month for a per-month figure. Each keyword returns either an exact `value` or a `threshold`, meaning the real count is below that number: low-volume keywords are only ever reported as a threshold, so treat a null `value` as suppressed rather than zero. Counts are unique users, not raw impressions. Paginated with `pageToken`/`nextPageToken`, max `pageSize` 100.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessListSearchKeywords({
    teamId: "some example string",
    startMonth: "some example string",
    endMonth: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessListSearchKeywordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessListSearchKeywords({
    teamId: "some example string",
    startMonth: "some example string",
    endMonth: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>startMonth</code> | <code>string</code> | Month in `YYYY-MM` format, inclusive. |
| <code>endMonth</code> | <code>string</code> | Month in `YYYY-MM` format, inclusive. |
| <code>pageSize?</code> | <code>number</code> | - |
| <code>pageToken?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessListSearchKeywords(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse](src/models/api-v1-misc-google-business-location-search-keywords-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessListSearchKeywordsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessListSearchKeywords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse, Misc.MiscGoogleBusinessListSearchKeywordsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse](src/models/api-v1-misc-google-business-location-search-keywords-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessReplyToReview(request: Misc.MiscGoogleBusinessReplyToReviewRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessReviewsReplyResponse, Misc.MiscGoogleBusinessReplyToReviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish or update the owner reply on a Google Review. Google allows one owner reply per review, so sending again overwrites the previous text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessReplyToReview({ reviewId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessReplyToReviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscGoogleBusinessReplyToReview({ reviewId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
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
| <code>reviewId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessReviewsReplyRequest](src/models/api-v1-misc-google-business-reviews-reply-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessReplyToReview(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsReplyResponse](src/models/api-v1-misc-google-business-reviews-reply-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessReplyToReviewError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessReplyToReview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessReviewsReplyResponse, Misc.MiscGoogleBusinessReplyToReviewError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessReviewsReplyResponse](src/models/api-v1-misc-google-business-reviews-reply-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessUpdateAttributes(request?: Misc.MiscGoogleBusinessUpdateAttributesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationAttributesResponse, Misc.MiscGoogleBusinessUpdateAttributesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set or change attributes on your Google Business Profile location. Complete attributes help your listing surface for more specific local searches.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessUpdateAttributes();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessUpdateAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessUpdateAttributes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessLocationAttributesRequest](src/models/api-v1-misc-google-business-location-attributes-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessUpdateAttributes(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationAttributesResponse](src/models/api-v1-misc-google-business-location-attributes-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessUpdateAttributesError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessUpdateAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationAttributesResponse, Misc.MiscGoogleBusinessUpdateAttributesError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationAttributesResponse](src/models/api-v1-misc-google-business-location-attributes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessUpdateFoodMenus(request?: Misc.MiscGoogleBusinessUpdateFoodMenusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationFoodMenusResponse, Misc.MiscGoogleBusinessUpdateFoodMenusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`menus`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessUpdateFoodMenus();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessUpdateFoodMenusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessUpdateFoodMenus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessLocationFoodMenusRequest](src/models/api-v1-misc-google-business-location-food-menus-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessUpdateFoodMenus(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationFoodMenusResponse](src/models/api-v1-misc-google-business-location-food-menus-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessUpdateFoodMenusError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessUpdateFoodMenus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationFoodMenusResponse, Misc.MiscGoogleBusinessUpdateFoodMenusError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationFoodMenusResponse](src/models/api-v1-misc-google-business-location-food-menus-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessUpdateHours(request?: Misc.MiscGoogleBusinessUpdateHoursRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationHoursResponse, Misc.MiscGoogleBusinessUpdateHoursError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`regularHours`, `specialHours`, `moreHours`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessUpdateHours();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationHoursResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessUpdateHoursError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessUpdateHours().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationHoursResponse
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessLocationHoursRequest](src/models/api-v1-misc-google-business-location-hours-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessUpdateHours(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationHoursResponse](src/models/api-v1-misc-google-business-location-hours-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessUpdateHoursError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessUpdateHours(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationHoursResponse, Misc.MiscGoogleBusinessUpdateHoursError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationHoursResponse](src/models/api-v1-misc-google-business-location-hours-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessUpdateLocation(request?: Misc.MiscGoogleBusinessUpdateLocationRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationResponse, Misc.MiscGoogleBusinessUpdateLocationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Field mask is derived automatically from provided fields.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessUpdateLocation();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessUpdateLocationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessUpdateLocation().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationResponse
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessLocationRequest](src/models/api-v1-misc-google-business-location-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessUpdateLocation(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationResponse](src/models/api-v1-misc-google-business-location-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessUpdateLocationError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessUpdateLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationResponse, Misc.MiscGoogleBusinessUpdateLocationError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationResponse](src/models/api-v1-misc-google-business-location-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessUpdatePlaceActionLink(request?: Misc.MiscGoogleBusinessUpdatePlaceActionLinkRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, Misc.MiscGoogleBusinessUpdatePlaceActionLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`uri`, `placeActionType`, `isPreferred`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessUpdatePlaceActionLink();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessUpdatePlaceActionLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessUpdatePlaceActionLink().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1](src/models/api-v1-misc-google-business-location-place-action-links-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessUpdatePlaceActionLink(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1](src/models/api-v1-misc-google-business-location-place-action-links-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessUpdatePlaceActionLinkError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessUpdatePlaceActionLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1, Misc.MiscGoogleBusinessUpdatePlaceActionLinkError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1](src/models/api-v1-misc-google-business-location-place-action-links-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscGoogleBusinessUpdateServiceList(request?: Misc.MiscGoogleBusinessUpdateServiceListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscGoogleBusinessLocationServiceListResponse, Misc.MiscGoogleBusinessUpdateServiceListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`serviceItems`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscGoogleBusinessUpdateServiceList();
  // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscGoogleBusinessUpdateServiceListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscGoogleBusinessUpdateServiceList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
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
| <code>body?</code> | <code>[ApiV1MiscGoogleBusinessLocationServiceListRequest](src/models/api-v1-misc-google-business-location-service-list-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscGoogleBusinessUpdateServiceList(request)`

- **OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationServiceListResponse](src/models/api-v1-misc-google-business-location-service-list-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscGoogleBusinessUpdateServiceListError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscGoogleBusinessUpdateServiceList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscGoogleBusinessLocationServiceListResponse, Misc.MiscGoogleBusinessUpdateServiceListError&gt;</code>, with `result.value` of type <code>[ApiV1MiscGoogleBusinessLocationServiceListResponse](src/models/api-v1-misc-google-business-location-service-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscInstagramBusinessDiscovery(request: Misc.MiscInstagramBusinessDiscoveryRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscInstagramTagsResponse, Misc.MiscInstagramBusinessDiscoveryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks if an Instagram user exists and returns their public profile data. Only works for Business and Creator accounts and only when Instagram is connected via Facebook Login. Returns followers_count, media_count, and profile picture if available.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscInstagramBusinessDiscovery({
    teamId: "some example string",
    username: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscInstagramTagsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscInstagramBusinessDiscoveryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscInstagramBusinessDiscovery({ teamId: "some example string", username: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscInstagramTagsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>username</code> | <code>string</code> | Instagram username to search for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscInstagramBusinessDiscovery(request)`

- **OnSuccess**: <code>[ApiV1MiscInstagramTagsResponse](src/models/api-v1-misc-instagram-tags-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscInstagramBusinessDiscoveryError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscInstagramBusinessDiscovery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscInstagramTagsResponse, Misc.MiscInstagramBusinessDiscoveryError&gt;</code>, with `result.value` of type <code>[ApiV1MiscInstagramTagsResponse](src/models/api-v1-misc-instagram-tags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscInstagramDeleteComment(request?: Misc.MiscInstagramDeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscInstagramCommentResponse, Misc.MiscInstagramDeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Instagram comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscInstagramDeleteComment();
  // TODO: Handle 'response' of type ApiV1MiscInstagramCommentResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscInstagramDeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscInstagramDeleteComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscInstagramCommentResponse
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
| <code>body?</code> | <code>[ApiV1MiscInstagramCommentRequest](src/models/api-v1-misc-instagram-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscInstagramDeleteComment(request)`

- **OnSuccess**: <code>[ApiV1MiscInstagramCommentResponse](src/models/api-v1-misc-instagram-comment-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscInstagramDeleteCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscInstagramDeleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscInstagramCommentResponse, Misc.MiscInstagramDeleteCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscInstagramCommentResponse](src/models/api-v1-misc-instagram-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscInstagramSearchAudio(request: Misc.MiscInstagramSearchAudioRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscInstagramAudioResponse, Misc.MiscInstagramSearchAudioError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches Instagram music or original sounds that can be attached to Reels. Only works for Instagram accounts connected via Facebook Login.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscInstagramSearchAudio({
    teamId: "some example string",
    audioType: AudioType.OriginalSound,
  });
  // TODO: Handle 'response' of type ApiV1MiscInstagramAudioResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscInstagramSearchAudioError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscInstagramSearchAudio({ teamId: "some example string", audioType: AudioType.OriginalSound })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscInstagramAudioResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>audioType</code> | <code>[AudioType](src/models/audio-type.ts)</code> | The type of Instagram audio to search for. |
| <code>searchQuery?</code> | <code>string</code> | Optional keyword search query. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscInstagramSearchAudio(request)`

- **OnSuccess**: <code>[ApiV1MiscInstagramAudioResponse](src/models/api-v1-misc-instagram-audio-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscInstagramSearchAudioError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscInstagramSearchAudio(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscInstagramAudioResponse, Misc.MiscInstagramSearchAudioError&gt;</code>, with `result.value` of type <code>[ApiV1MiscInstagramAudioResponse](src/models/api-v1-misc-instagram-audio-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscInstagramSearchLocations(request: Misc.MiscInstagramSearchLocationsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscInstagramLocationsResponse, Misc.MiscInstagramSearchLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches Facebook Pages with physical location data and returns IDs that can be used as data.INSTAGRAM.locationId.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscInstagramSearchLocations({
    teamId: "some example string",
    q: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscInstagramLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscInstagramSearchLocationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscInstagramSearchLocations({ teamId: "some example string", q: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscInstagramLocationsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>q</code> | <code>string</code> | Free-text query used to search location pages |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscInstagramSearchLocations(request)`

- **OnSuccess**: <code>[ApiV1MiscInstagramLocationsResponse](src/models/api-v1-misc-instagram-locations-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscInstagramSearchLocationsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscInstagramSearchLocations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscInstagramLocationsResponse, Misc.MiscInstagramSearchLocationsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscInstagramLocationsResponse](src/models/api-v1-misc-instagram-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscLinkedinBuildCommentary(request?: Misc.MiscLinkedinBuildCommentaryRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscLinkedinMentionsBuilderResponse, Misc.MiscLinkedinBuildCommentaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If tag already exists (case insensitive), mentions replace it; otherwise they're appended to the end.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscLinkedinBuildCommentary();
  // TODO: Handle 'response' of type ApiV1MiscLinkedinMentionsBuilderResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscLinkedinBuildCommentaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscLinkedinBuildCommentary().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscLinkedinMentionsBuilderResponse
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
| <code>body?</code> | <code>[ApiV1MiscLinkedinMentionsBuilderRequest](src/models/api-v1-misc-linkedin-mentions-builder-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscLinkedinBuildCommentary(request)`

- **OnSuccess**: <code>[ApiV1MiscLinkedinMentionsBuilderResponse](src/models/api-v1-misc-linkedin-mentions-builder-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscLinkedinBuildCommentaryError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscLinkedinBuildCommentary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscLinkedinMentionsBuilderResponse, Misc.MiscLinkedinBuildCommentaryError&gt;</code>, with `result.value` of type <code>[ApiV1MiscLinkedinMentionsBuilderResponse](src/models/api-v1-misc-linkedin-mentions-builder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscLinkedinDeleteComment(request?: Misc.MiscLinkedinDeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscLinkedinCommentResponse1, Misc.MiscLinkedinDeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published LinkedIn comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscLinkedinDeleteComment();
  // TODO: Handle 'response' of type ApiV1MiscLinkedinCommentResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscLinkedinDeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscLinkedinDeleteComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscLinkedinCommentResponse1
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
| <code>body?</code> | <code>[ApiV1MiscLinkedinCommentRequest1](src/models/api-v1-misc-linkedin-comment-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscLinkedinDeleteComment(request)`

- **OnSuccess**: <code>[ApiV1MiscLinkedinCommentResponse1](src/models/api-v1-misc-linkedin-comment-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscLinkedinDeleteCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscLinkedinDeleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscLinkedinCommentResponse1, Misc.MiscLinkedinDeleteCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscLinkedinCommentResponse1](src/models/api-v1-misc-linkedin-comment-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscLinkedinDeletePost(request?: Misc.MiscLinkedinDeletePostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscLinkedinPostResponse1, Misc.MiscLinkedinDeletePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published LinkedIn post.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscLinkedinDeletePost();
  // TODO: Handle 'response' of type ApiV1MiscLinkedinPostResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscLinkedinDeletePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscLinkedinDeletePost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscLinkedinPostResponse1
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
| <code>body?</code> | <code>[ApiV1MiscLinkedinPostRequest1](src/models/api-v1-misc-linkedin-post-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscLinkedinDeletePost(request)`

- **OnSuccess**: <code>[ApiV1MiscLinkedinPostResponse1](src/models/api-v1-misc-linkedin-post-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscLinkedinDeletePostError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscLinkedinDeletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscLinkedinPostResponse1, Misc.MiscLinkedinDeletePostError&gt;</code>, with `result.value` of type <code>[ApiV1MiscLinkedinPostResponse1](src/models/api-v1-misc-linkedin-post-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscLinkedinEditComment(request?: Misc.MiscLinkedinEditCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscLinkedinCommentResponse, Misc.MiscLinkedinEditCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published LinkedIn comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscLinkedinEditComment();
  // TODO: Handle 'response' of type ApiV1MiscLinkedinCommentResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscLinkedinEditCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscLinkedinEditComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscLinkedinCommentResponse
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
| <code>body?</code> | <code>[ApiV1MiscLinkedinCommentRequest](src/models/api-v1-misc-linkedin-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscLinkedinEditComment(request)`

- **OnSuccess**: <code>[ApiV1MiscLinkedinCommentResponse](src/models/api-v1-misc-linkedin-comment-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscLinkedinEditCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscLinkedinEditComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscLinkedinCommentResponse, Misc.MiscLinkedinEditCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscLinkedinCommentResponse](src/models/api-v1-misc-linkedin-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscLinkedinEditPost(request?: Misc.MiscLinkedinEditPostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscLinkedinPostResponse, Misc.MiscLinkedinEditPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published LinkedIn post.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscLinkedinEditPost();
  // TODO: Handle 'response' of type ApiV1MiscLinkedinPostResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscLinkedinEditPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscLinkedinEditPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscLinkedinPostResponse
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
| <code>body?</code> | <code>[ApiV1MiscLinkedinPostRequest](src/models/api-v1-misc-linkedin-post-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscLinkedinEditPost(request)`

- **OnSuccess**: <code>[ApiV1MiscLinkedinPostResponse](src/models/api-v1-misc-linkedin-post-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscLinkedinEditPostError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscLinkedinEditPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscLinkedinPostResponse, Misc.MiscLinkedinEditPostError&gt;</code>, with `result.value` of type <code>[ApiV1MiscLinkedinPostResponse](src/models/api-v1-misc-linkedin-post-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscLinkedinGetTags(request: Misc.MiscLinkedinGetTagsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscLinkedinMentionsTagsResponse, Misc.MiscLinkedinGetTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for LinkedIn people and organizations that can be @-mentioned, and get the tag IDs needed to insert them into post text. LinkedIn only renders a mention when the display text matches the entity's name exactly (case sensitive), so a vanity slug never works. When a person is resolved from `url` but LinkedIn does not expose their name, the tag comes back with an empty `display` and `needsDisplayName: true` — pass `displayName` to set it. Note that a page can only mention its own followers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscLinkedinGetTags({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscLinkedinMentionsTagsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscLinkedinGetTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscLinkedinGetTags({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscLinkedinMentionsTagsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>q?</code> | <code>string</code> | - |
| <code>url?</code> | <code>string</code> | - |
| <code>displayName?</code> | <code>string</code> | - |
| <code>scope?</code> | <code>[Scope](src/models/scope.ts)</code> | -<br>**Default**: "all" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscLinkedinGetTags(request)`

- **OnSuccess**: <code>[ApiV1MiscLinkedinMentionsTagsResponse](src/models/api-v1-misc-linkedin-mentions-tags-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscLinkedinGetTagsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscLinkedinGetTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscLinkedinMentionsTagsResponse, Misc.MiscLinkedinGetTagsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscLinkedinMentionsTagsResponse](src/models/api-v1-misc-linkedin-mentions-tags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscLinkedinResharePost(request?: Misc.MiscLinkedinResharePostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscLinkedinPostReshareResponse, Misc.MiscLinkedinResharePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a LinkedIn reshare as the currently selected LinkedIn channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscLinkedinResharePost();
  // TODO: Handle 'response' of type ApiV1MiscLinkedinPostReshareResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscLinkedinResharePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscLinkedinResharePost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscLinkedinPostReshareResponse
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
| <code>body?</code> | <code>[ApiV1MiscLinkedinPostReshareRequest](src/models/api-v1-misc-linkedin-post-reshare-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscLinkedinResharePost(request)`

- **OnSuccess**: <code>[ApiV1MiscLinkedinPostReshareResponse](src/models/api-v1-misc-linkedin-post-reshare-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscLinkedinResharePostError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscLinkedinResharePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscLinkedinPostReshareResponse, Misc.MiscLinkedinResharePostError&gt;</code>, with `result.value` of type <code>[ApiV1MiscLinkedinPostReshareResponse](src/models/api-v1-misc-linkedin-post-reshare-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscMastodonDeleteComment(request?: Misc.MiscMastodonDeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscMastodonCommentResponse1, Misc.MiscMastodonDeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Mastodon reply/comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscMastodonDeleteComment();
  // TODO: Handle 'response' of type ApiV1MiscMastodonCommentResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscMastodonDeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscMastodonDeleteComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscMastodonCommentResponse1
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
| <code>body?</code> | <code>[ApiV1MiscMastodonCommentRequest1](src/models/api-v1-misc-mastodon-comment-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscMastodonDeleteComment(request)`

- **OnSuccess**: <code>[ApiV1MiscMastodonCommentResponse1](src/models/api-v1-misc-mastodon-comment-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscMastodonDeleteCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscMastodonDeleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscMastodonCommentResponse1, Misc.MiscMastodonDeleteCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscMastodonCommentResponse1](src/models/api-v1-misc-mastodon-comment-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscMastodonDeleteStatus(request?: Misc.MiscMastodonDeleteStatusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscMastodonStatusResponse1, Misc.MiscMastodonDeleteStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Mastodon status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscMastodonDeleteStatus();
  // TODO: Handle 'response' of type ApiV1MiscMastodonStatusResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscMastodonDeleteStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscMastodonDeleteStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscMastodonStatusResponse1
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
| <code>body?</code> | <code>[ApiV1MiscMastodonStatusRequest1](src/models/api-v1-misc-mastodon-status-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscMastodonDeleteStatus(request)`

- **OnSuccess**: <code>[ApiV1MiscMastodonStatusResponse1](src/models/api-v1-misc-mastodon-status-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscMastodonDeleteStatusError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscMastodonDeleteStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscMastodonStatusResponse1, Misc.MiscMastodonDeleteStatusError&gt;</code>, with `result.value` of type <code>[ApiV1MiscMastodonStatusResponse1](src/models/api-v1-misc-mastodon-status-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscMastodonEditComment(request?: Misc.MiscMastodonEditCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscMastodonCommentResponse, Misc.MiscMastodonEditCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Mastodon reply/comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscMastodonEditComment();
  // TODO: Handle 'response' of type ApiV1MiscMastodonCommentResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscMastodonEditCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscMastodonEditComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscMastodonCommentResponse
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
| <code>body?</code> | <code>[ApiV1MiscMastodonCommentRequest](src/models/api-v1-misc-mastodon-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscMastodonEditComment(request)`

- **OnSuccess**: <code>[ApiV1MiscMastodonCommentResponse](src/models/api-v1-misc-mastodon-comment-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscMastodonEditCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscMastodonEditComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscMastodonCommentResponse, Misc.MiscMastodonEditCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscMastodonCommentResponse](src/models/api-v1-misc-mastodon-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscMastodonEditStatus(request?: Misc.MiscMastodonEditStatusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscMastodonStatusResponse, Misc.MiscMastodonEditStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content and spoiler text of a published Mastodon status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscMastodonEditStatus();
  // TODO: Handle 'response' of type ApiV1MiscMastodonStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscMastodonEditStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscMastodonEditStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscMastodonStatusResponse
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
| <code>body?</code> | <code>[ApiV1MiscMastodonStatusRequest](src/models/api-v1-misc-mastodon-status-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscMastodonEditStatus(request)`

- **OnSuccess**: <code>[ApiV1MiscMastodonStatusResponse](src/models/api-v1-misc-mastodon-status-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscMastodonEditStatusError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscMastodonEditStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscMastodonStatusResponse, Misc.MiscMastodonEditStatusError&gt;</code>, with `result.value` of type <code>[ApiV1MiscMastodonStatusResponse](src/models/api-v1-misc-mastodon-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscPinterestDeletePin(request?: Misc.MiscPinterestDeletePinRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscPinterestPinResponse1, Misc.MiscPinterestDeletePinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Pinterest pin.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscPinterestDeletePin();
  // TODO: Handle 'response' of type ApiV1MiscPinterestPinResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscPinterestDeletePinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscPinterestDeletePin().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscPinterestPinResponse1
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
| <code>body?</code> | <code>[ApiV1MiscPinterestPinRequest1](src/models/api-v1-misc-pinterest-pin-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscPinterestDeletePin(request)`

- **OnSuccess**: <code>[ApiV1MiscPinterestPinResponse1](src/models/api-v1-misc-pinterest-pin-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscPinterestDeletePinError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscPinterestDeletePin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscPinterestPinResponse1, Misc.MiscPinterestDeletePinError&gt;</code>, with `result.value` of type <code>[ApiV1MiscPinterestPinResponse1](src/models/api-v1-misc-pinterest-pin-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscPinterestEditPin(request?: Misc.MiscPinterestEditPinRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscPinterestPinResponse, Misc.MiscPinterestEditPinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Temporarily disabled

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscPinterestEditPin();
  // TODO: Handle 'response' of type ApiV1MiscPinterestPinResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscPinterestEditPinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscPinterestEditPin().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscPinterestPinResponse
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
| <code>body?</code> | <code>[ApiV1MiscPinterestPinRequest](src/models/api-v1-misc-pinterest-pin-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscPinterestEditPin(request)`

- **OnSuccess**: <code>[ApiV1MiscPinterestPinResponse](src/models/api-v1-misc-pinterest-pin-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscPinterestEditPinError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscPinterestEditPin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscPinterestPinResponse, Misc.MiscPinterestEditPinError&gt;</code>, with `result.value` of type <code>[ApiV1MiscPinterestPinResponse](src/models/api-v1-misc-pinterest-pin-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscRedditDeleteComment(request?: Misc.MiscRedditDeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscRedditCommentResponse1, Misc.MiscRedditDeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Reddit comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscRedditDeleteComment();
  // TODO: Handle 'response' of type ApiV1MiscRedditCommentResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscRedditDeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscRedditDeleteComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscRedditCommentResponse1
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
| <code>body?</code> | <code>[ApiV1MiscRedditCommentRequest1](src/models/api-v1-misc-reddit-comment-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscRedditDeleteComment(request)`

- **OnSuccess**: <code>[ApiV1MiscRedditCommentResponse1](src/models/api-v1-misc-reddit-comment-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscRedditDeleteCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscRedditDeleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscRedditCommentResponse1, Misc.MiscRedditDeleteCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscRedditCommentResponse1](src/models/api-v1-misc-reddit-comment-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscRedditDeletePost(request?: Misc.MiscRedditDeletePostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscRedditPostResponse1, Misc.MiscRedditDeletePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Reddit post.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscRedditDeletePost();
  // TODO: Handle 'response' of type ApiV1MiscRedditPostResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscRedditDeletePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscRedditDeletePost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscRedditPostResponse1
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
| <code>body?</code> | <code>[ApiV1MiscRedditPostRequest1](src/models/api-v1-misc-reddit-post-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscRedditDeletePost(request)`

- **OnSuccess**: <code>[ApiV1MiscRedditPostResponse1](src/models/api-v1-misc-reddit-post-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscRedditDeletePostError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscRedditDeletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscRedditPostResponse1, Misc.MiscRedditDeletePostError&gt;</code>, with `result.value` of type <code>[ApiV1MiscRedditPostResponse1](src/models/api-v1-misc-reddit-post-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscRedditEditComment(request?: Misc.MiscRedditEditCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscRedditCommentResponse, Misc.MiscRedditEditCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Reddit comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscRedditEditComment();
  // TODO: Handle 'response' of type ApiV1MiscRedditCommentResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscRedditEditCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscRedditEditComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscRedditCommentResponse
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
| <code>body?</code> | <code>[ApiV1MiscRedditCommentRequest](src/models/api-v1-misc-reddit-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscRedditEditComment(request)`

- **OnSuccess**: <code>[ApiV1MiscRedditCommentResponse](src/models/api-v1-misc-reddit-comment-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscRedditEditCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscRedditEditComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscRedditCommentResponse, Misc.MiscRedditEditCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscRedditCommentResponse](src/models/api-v1-misc-reddit-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscRedditEditPost(request?: Misc.MiscRedditEditPostRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscRedditPostResponse, Misc.MiscRedditEditPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the selftext content of a published Reddit text post. Link and media posts cannot be edited.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscRedditEditPost();
  // TODO: Handle 'response' of type ApiV1MiscRedditPostResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscRedditEditPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscRedditEditPost().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscRedditPostResponse
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
| <code>body?</code> | <code>[ApiV1MiscRedditPostRequest](src/models/api-v1-misc-reddit-post-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscRedditEditPost(request)`

- **OnSuccess**: <code>[ApiV1MiscRedditPostResponse](src/models/api-v1-misc-reddit-post-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscRedditEditPostError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscRedditEditPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscRedditPostResponse, Misc.MiscRedditEditPostError&gt;</code>, with `result.value` of type <code>[ApiV1MiscRedditPostResponse](src/models/api-v1-misc-reddit-post-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscRedditGetPostRequirements(request: Misc.MiscRedditGetPostRequirementsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscRedditPostRequirementsResponse, Misc.MiscRedditGetPostRequirementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check a subreddit's posting rules before publishing, including whether flair is enabled or mandatory. Call this first to avoid rejected submissions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscRedditGetPostRequirements({
    teamId: "some example string",
    subreddit: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscRedditPostRequirementsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscRedditGetPostRequirementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscRedditGetPostRequirements({ teamId: "some example string", subreddit: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscRedditPostRequirementsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>subreddit</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscRedditGetPostRequirements(request)`

- **OnSuccess**: <code>[ApiV1MiscRedditPostRequirementsResponse](src/models/api-v1-misc-reddit-post-requirements-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscRedditGetPostRequirementsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscRedditGetPostRequirements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscRedditPostRequirementsResponse, Misc.MiscRedditGetPostRequirementsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscRedditPostRequirementsResponse](src/models/api-v1-misc-reddit-post-requirements-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscRedditGetSubredditFlairs(request: Misc.MiscRedditGetSubredditFlairsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscRedditSubredditFlairsResponse[], Misc.MiscRedditGetSubredditFlairsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the flairs available in a subreddit so you can attach a valid flair ID when creating a Reddit post.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscRedditGetSubredditFlairs({
    teamId: "some example string",
    subreddit: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscRedditSubredditFlairsResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscRedditGetSubredditFlairsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscRedditGetSubredditFlairs({ teamId: "some example string", subreddit: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscRedditSubredditFlairsResponse[]
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
| <code>teamId</code> | <code>string</code> | - |
| <code>subreddit</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscRedditGetSubredditFlairs(request)`

- **OnSuccess**: <code>[ApiV1MiscRedditSubredditFlairsResponse](src/models/api-v1-misc-reddit-subreddit-flairs-response.ts)[]</code>
- **OnError**: throws <code>[Misc.MiscRedditGetSubredditFlairsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscRedditGetSubredditFlairs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscRedditSubredditFlairsResponse[], Misc.MiscRedditGetSubredditFlairsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscRedditSubredditFlairsResponse](src/models/api-v1-misc-reddit-subreddit-flairs-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscSlackDeleteMessage(request?: Misc.MiscSlackDeleteMessageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscSlackMessageResponse1, Misc.MiscSlackDeleteMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Slack message.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscSlackDeleteMessage();
  // TODO: Handle 'response' of type ApiV1MiscSlackMessageResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscSlackDeleteMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscSlackDeleteMessage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscSlackMessageResponse1
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
| <code>body?</code> | <code>[ApiV1MiscSlackMessageRequest1](src/models/api-v1-misc-slack-message-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscSlackDeleteMessage(request)`

- **OnSuccess**: <code>[ApiV1MiscSlackMessageResponse1](src/models/api-v1-misc-slack-message-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscSlackDeleteMessageError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscSlackDeleteMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscSlackMessageResponse1, Misc.MiscSlackDeleteMessageError&gt;</code>, with `result.value` of type <code>[ApiV1MiscSlackMessageResponse1](src/models/api-v1-misc-slack-message-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscSlackEditMessage(request?: Misc.MiscSlackEditMessageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscSlackMessageResponse, Misc.MiscSlackEditMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Slack message.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscSlackEditMessage();
  // TODO: Handle 'response' of type ApiV1MiscSlackMessageResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscSlackEditMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscSlackEditMessage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscSlackMessageResponse
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
| <code>body?</code> | <code>[ApiV1MiscSlackMessageRequest](src/models/api-v1-misc-slack-message-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscSlackEditMessage(request)`

- **OnSuccess**: <code>[ApiV1MiscSlackMessageResponse](src/models/api-v1-misc-slack-message-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscSlackEditMessageError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscSlackEditMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscSlackMessageResponse, Misc.MiscSlackEditMessageError&gt;</code>, with `result.value` of type <code>[ApiV1MiscSlackMessageResponse](src/models/api-v1-misc-slack-message-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscTiktokDeleteComment(request?: Misc.MiscTiktokDeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscTiktokCommentResponse, Misc.MiscTiktokDeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a published TikTok comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscTiktokDeleteComment();
  // TODO: Handle 'response' of type ApiV1MiscTiktokCommentResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscTiktokDeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscTiktokDeleteComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscTiktokCommentResponse
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
| <code>body?</code> | <code>[ApiV1MiscTiktokCommentRequest](src/models/api-v1-misc-tiktok-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscTiktokDeleteComment(request)`

- **OnSuccess**: <code>[ApiV1MiscTiktokCommentResponse](src/models/api-v1-misc-tiktok-comment-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscTiktokDeleteCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscTiktokDeleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscTiktokCommentResponse, Misc.MiscTiktokDeleteCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscTiktokCommentResponse](src/models/api-v1-misc-tiktok-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscTiktokGetCommercialMusicTrendingList(request: Misc.MiscTiktokGetCommercialMusicTrendingListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscTiktokCmlTrendingListResponse[], Misc.MiscTiktokGetCommercialMusicTrendingListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve up to 100 popular tracks pre-cleared for organic content and ad creation from TikTok CML.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscTiktokGetCommercialMusicTrendingList({
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscTiktokCmlTrendingListResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscTiktokGetCommercialMusicTrendingListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscTiktokGetCommercialMusicTrendingList({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscTiktokCmlTrendingListResponse[]
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
| <code>teamId</code> | <code>string</code> | - |
| <code>genre?</code> | <code>[Genre](src/models/genre.ts)</code> | Genre filter for commercial music results.<br>**Default**: "POP" |
| <code>dateRange?</code> | <code>[DateRange](src/models/date-range.ts)</code> | Timeframe for popular tracks ranking.<br>**Default**: "7DAY" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscTiktokGetCommercialMusicTrendingList(request)`

- **OnSuccess**: <code>[ApiV1MiscTiktokCmlTrendingListResponse](src/models/api-v1-misc-tiktok-cml-trending-list-response.ts)[]</code>
- **OnError**: throws <code>[Misc.MiscTiktokGetCommercialMusicTrendingListError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscTiktokGetCommercialMusicTrendingList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscTiktokCmlTrendingListResponse[], Misc.MiscTiktokGetCommercialMusicTrendingListError&gt;</code>, with `result.value` of type <code>[ApiV1MiscTiktokCmlTrendingListResponse](src/models/api-v1-misc-tiktok-cml-trending-list-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscTiktokGetPostSettings(request: Misc.MiscTiktokGetPostSettingsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscTiktokPostSettingsResponse, Misc.MiscTiktokGetPostSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the privacy levels, interaction settings (comments, duet, stitch) and maximum video duration the connected TikTok account allows, read live from TikTok. A value the account does not allow is not rejected when you create the post, it fails at publish time with TT:40002. Use it to build the options of your own composer, not as a check before every publish: each call counts against the account's TikTok rate limit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscTiktokGetPostSettings({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscTiktokPostSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscTiktokGetPostSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscTiktokGetPostSettings({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscTiktokPostSettingsResponse
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
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscTiktokGetPostSettings(request)`

- **OnSuccess**: <code>[ApiV1MiscTiktokPostSettingsResponse](src/models/api-v1-misc-tiktok-post-settings-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscTiktokGetPostSettingsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscTiktokGetPostSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscTiktokPostSettingsResponse, Misc.MiscTiktokGetPostSettingsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscTiktokPostSettingsResponse](src/models/api-v1-misc-tiktok-post-settings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscTiktokSearchLocations(request: Misc.MiscTiktokSearchLocationsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscTiktokLocationsResponse, Misc.MiscTiktokSearchLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches location tags available to the connected TikTok account (up to 20 results). Pass `locationId` and `name` as data.TIKTOK.locationId and data.TIKTOK.locationName to show the location on a video or photo post.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscTiktokSearchLocations({
    teamId: "some example string",
    q: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscTiktokLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscTiktokSearchLocationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscTiktokSearchLocations({ teamId: "some example string", q: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscTiktokLocationsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>q</code> | <code>string</code> | Free-text query used to search TikTok location tags. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscTiktokSearchLocations(request)`

- **OnSuccess**: <code>[ApiV1MiscTiktokLocationsResponse](src/models/api-v1-misc-tiktok-locations-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscTiktokSearchLocationsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscTiktokSearchLocations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscTiktokLocationsResponse, Misc.MiscTiktokSearchLocationsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscTiktokLocationsResponse](src/models/api-v1-misc-tiktok-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscTwitterDeleteComment(request?: Misc.MiscTwitterDeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscTwitterCommentResponse, Misc.MiscTwitterDeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Twitter/X reply/comment. X charges for deletes ($0.01 per request).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscTwitterDeleteComment();
  // TODO: Handle 'response' of type ApiV1MiscTwitterCommentResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscTwitterDeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscTwitterDeleteComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscTwitterCommentResponse
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
| <code>body?</code> | <code>[ApiV1MiscTwitterCommentRequest](src/models/api-v1-misc-twitter-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscTwitterDeleteComment(request)`

- **OnSuccess**: <code>[ApiV1MiscTwitterCommentResponse](src/models/api-v1-misc-twitter-comment-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscTwitterDeleteCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscTwitterDeleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscTwitterCommentResponse, Misc.MiscTwitterDeleteCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscTwitterCommentResponse](src/models/api-v1-misc-twitter-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscTwitterDeleteTweet(request?: Misc.MiscTwitterDeleteTweetRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscTwitterTweetResponse, Misc.MiscTwitterDeleteTweetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Twitter/X tweet. X charges for deletes ($0.01 per request).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscTwitterDeleteTweet();
  // TODO: Handle 'response' of type ApiV1MiscTwitterTweetResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscTwitterDeleteTweetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscTwitterDeleteTweet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscTwitterTweetResponse
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
| <code>body?</code> | <code>[ApiV1MiscTwitterTweetRequest](src/models/api-v1-misc-twitter-tweet-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscTwitterDeleteTweet(request)`

- **OnSuccess**: <code>[ApiV1MiscTwitterTweetResponse](src/models/api-v1-misc-twitter-tweet-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscTwitterDeleteTweetError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscTwitterDeleteTweet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscTwitterTweetResponse, Misc.MiscTwitterDeleteTweetError&gt;</code>, with `result.value` of type <code>[ApiV1MiscTwitterTweetResponse](src/models/api-v1-misc-twitter-tweet-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscTwitterRetweet(request?: Misc.MiscTwitterRetweetRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscTwitterRetweetResponse, Misc.MiscTwitterRetweetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repost (retweet) any X post from the connected account. X charges for reposts ($0.015 per request); your credits are charged once per post, per connected account, per UTC day, so reposting the same post again on the same day costs no extra credit. Reposting a post that is already reposted is a no-op on X's side.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscTwitterRetweet();
  // TODO: Handle 'response' of type ApiV1MiscTwitterRetweetResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscTwitterRetweetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscTwitterRetweet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscTwitterRetweetResponse
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
| <code>body?</code> | <code>[ApiV1MiscTwitterRetweetRequest](src/models/api-v1-misc-twitter-retweet-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscTwitterRetweet(request)`

- **OnSuccess**: <code>[ApiV1MiscTwitterRetweetResponse](src/models/api-v1-misc-twitter-retweet-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscTwitterRetweetError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscTwitterRetweet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscTwitterRetweetResponse, Misc.MiscTwitterRetweetError&gt;</code>, with `result.value` of type <code>[ApiV1MiscTwitterRetweetResponse](src/models/api-v1-misc-twitter-retweet-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscTwitterUnretweet(request?: Misc.MiscTwitterUnretweetRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscTwitterRetweetResponse, Misc.MiscTwitterUnretweetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a repost (retweet) made by the connected account. X charges for this too ($0.01 per request); your credits are charged once per post, per connected account, per UTC day, the same way reposting is.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscTwitterUnretweet();
  // TODO: Handle 'response' of type ApiV1MiscTwitterRetweetResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscTwitterUnretweetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscTwitterUnretweet().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscTwitterRetweetResponse
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
| <code>body?</code> | <code>[ApiV1MiscTwitterRetweetRequest](src/models/api-v1-misc-twitter-retweet-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscTwitterUnretweet(request)`

- **OnSuccess**: <code>[ApiV1MiscTwitterRetweetResponse](src/models/api-v1-misc-twitter-retweet-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscTwitterUnretweetError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscTwitterUnretweet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscTwitterRetweetResponse, Misc.MiscTwitterUnretweetError&gt;</code>, with `result.value` of type <code>[ApiV1MiscTwitterRetweetResponse](src/models/api-v1-misc-twitter-retweet-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeAddVideoToPlaylist(request?: Misc.MiscYoutubeAddVideoToPlaylistRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubePlaylistItemsResponse, Misc.MiscYoutubeAddVideoToPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Append a video to a YouTube playlist on a connected channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeAddVideoToPlaylist();
  // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeAddVideoToPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscYoutubeAddVideoToPlaylist().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubePlaylistItemsResponse
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
| <code>body?</code> | <code>[ApiV1MiscYoutubePlaylistItemsRequest](src/models/api-v1-misc-youtube-playlist-items-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeAddVideoToPlaylist(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubePlaylistItemsResponse](src/models/api-v1-misc-youtube-playlist-items-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeAddVideoToPlaylistError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeAddVideoToPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubePlaylistItemsResponse, Misc.MiscYoutubeAddVideoToPlaylistError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubePlaylistItemsResponse](src/models/api-v1-misc-youtube-playlist-items-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeCreateNewChannelPlaylist(request?: Misc.MiscYoutubeCreateNewChannelPlaylistRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubePlaylistResponse1, Misc.MiscYoutubeCreateNewChannelPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a playlist on a connected YouTube channel with a title, description, and privacy status. Playlists group related videos and increase session watch time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeCreateNewChannelPlaylist();
  // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeCreateNewChannelPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscYoutubeCreateNewChannelPlaylist().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubePlaylistResponse1
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
| <code>body?</code> | <code>[ApiV1MiscYoutubePlaylistRequest](src/models/api-v1-misc-youtube-playlist-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeCreateNewChannelPlaylist(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubePlaylistResponse1](src/models/api-v1-misc-youtube-playlist-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeCreateNewChannelPlaylistError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeCreateNewChannelPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubePlaylistResponse1, Misc.MiscYoutubeCreateNewChannelPlaylistError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubePlaylistResponse1](src/models/api-v1-misc-youtube-playlist-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeDeleteChannelPlaylist(request: Misc.MiscYoutubeDeleteChannelPlaylistRequest, options?: RequestOptions): ApiPromise&lt;boolean, Misc.MiscYoutubeDeleteChannelPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a playlist from a connected YouTube channel. The videos themselves are not deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeDeleteChannelPlaylist({
    playlistId: "some example string",
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type boolean
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeDeleteChannelPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscYoutubeDeleteChannelPlaylist({ playlistId: "some example string", teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean
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
| <code>playlistId</code> | <code>string</code> | - |
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeDeleteChannelPlaylist(request)`

- **OnSuccess**: <code>boolean</code>
- **OnError**: throws <code>[Misc.MiscYoutubeDeleteChannelPlaylistError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeDeleteChannelPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean, Misc.MiscYoutubeDeleteChannelPlaylistError&gt;</code>, with `result.value` of type <code>boolean</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeDeleteComment(request?: Misc.MiscYoutubeDeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubeCommentResponse1, Misc.MiscYoutubeDeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published YouTube comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeDeleteComment();
  // TODO: Handle 'response' of type ApiV1MiscYoutubeCommentResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeDeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscYoutubeDeleteComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubeCommentResponse1
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
| <code>body?</code> | <code>[ApiV1MiscYoutubeCommentRequest1](src/models/api-v1-misc-youtube-comment-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeDeleteComment(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubeCommentResponse1](src/models/api-v1-misc-youtube-comment-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeDeleteCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeDeleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubeCommentResponse1, Misc.MiscYoutubeDeleteCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubeCommentResponse1](src/models/api-v1-misc-youtube-comment-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeDeleteVideo(request?: Misc.MiscYoutubeDeleteVideoRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubeVideoResponse1, Misc.MiscYoutubeDeleteVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published YouTube video.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeDeleteVideo();
  // TODO: Handle 'response' of type ApiV1MiscYoutubeVideoResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeDeleteVideoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscYoutubeDeleteVideo().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubeVideoResponse1
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
| <code>body?</code> | <code>[ApiV1MiscYoutubeVideoRequest1](src/models/api-v1-misc-youtube-video-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeDeleteVideo(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubeVideoResponse1](src/models/api-v1-misc-youtube-video-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeDeleteVideoError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeDeleteVideo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubeVideoResponse1, Misc.MiscYoutubeDeleteVideoError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubeVideoResponse1](src/models/api-v1-misc-youtube-video-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeDeleteVideoFromPlaylist(request: Misc.MiscYoutubeDeleteVideoFromPlaylistRequest, options?: RequestOptions): ApiPromise&lt;boolean, Misc.MiscYoutubeDeleteVideoFromPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a single video from a YouTube playlist. Pass the playlist item ID, not the video ID. The video itself stays on the channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeDeleteVideoFromPlaylist({
    playlistItemId: "some example string",
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type boolean
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeDeleteVideoFromPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscYoutubeDeleteVideoFromPlaylist({
    playlistItemId: "some example string",
    teamId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type boolean
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
| <code>playlistItemId</code> | <code>string</code> | Playlist item ID (not video ID) |
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeDeleteVideoFromPlaylist(request)`

- **OnSuccess**: <code>boolean</code>
- **OnError**: throws <code>[Misc.MiscYoutubeDeleteVideoFromPlaylistError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeDeleteVideoFromPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;boolean, Misc.MiscYoutubeDeleteVideoFromPlaylistError&gt;</code>, with `result.value` of type <code>boolean</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeEditComment(request?: Misc.MiscYoutubeEditCommentRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubeCommentResponse, Misc.MiscYoutubeEditCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published YouTube comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeEditComment();
  // TODO: Handle 'response' of type ApiV1MiscYoutubeCommentResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeEditCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscYoutubeEditComment().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubeCommentResponse
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
| <code>body?</code> | <code>[ApiV1MiscYoutubeCommentRequest](src/models/api-v1-misc-youtube-comment-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeEditComment(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubeCommentResponse](src/models/api-v1-misc-youtube-comment-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeEditCommentError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeEditComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubeCommentResponse, Misc.MiscYoutubeEditCommentError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubeCommentResponse](src/models/api-v1-misc-youtube-comment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeEditVideo(request?: Misc.MiscYoutubeEditVideoRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubeVideoResponse, Misc.MiscYoutubeEditVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the title, description, tags, category, or privacy status of a published YouTube video.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeEditVideo();
  // TODO: Handle 'response' of type ApiV1MiscYoutubeVideoResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeEditVideoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscYoutubeEditVideo().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubeVideoResponse
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
| <code>body?</code> | <code>[ApiV1MiscYoutubeVideoRequest](src/models/api-v1-misc-youtube-video-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeEditVideo(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubeVideoResponse](src/models/api-v1-misc-youtube-video-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeEditVideoError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeEditVideo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubeVideoResponse, Misc.MiscYoutubeEditVideoError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubeVideoResponse](src/models/api-v1-misc-youtube-video-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeGetChannelPlaylist(request: Misc.MiscYoutubeGetChannelPlaylistRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubePlaylistResponse, Misc.MiscYoutubeGetChannelPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the playlists on a connected YouTube channel, with their IDs, titles, and privacy status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeGetChannelPlaylist({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeGetChannelPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscYoutubeGetChannelPlaylist({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubePlaylistResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>maxResults?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeGetChannelPlaylist(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubePlaylistResponse](src/models/api-v1-misc-youtube-playlist-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeGetChannelPlaylistError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeGetChannelPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubePlaylistResponse, Misc.MiscYoutubeGetChannelPlaylistError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubePlaylistResponse](src/models/api-v1-misc-youtube-playlist-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeGetRegions(request: Misc.MiscYoutubeGetRegionsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubeRegionsResponse, Misc.MiscYoutubeGetRegionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of content regions that the YouTube website supports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeGetRegions({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscYoutubeRegionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeGetRegionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscYoutubeGetRegions({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubeRegionsResponse
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
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeGetRegions(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubeRegionsResponse](src/models/api-v1-misc-youtube-regions-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeGetRegionsError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeGetRegions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubeRegionsResponse, Misc.MiscYoutubeGetRegionsError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubeRegionsResponse](src/models/api-v1-misc-youtube-regions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeGetVideoCategories(request: Misc.MiscYoutubeGetVideoCategoriesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubeVideoCategoriesResponse, Misc.MiscYoutubeGetVideoCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of video categories that can be associated with YouTube videos for a specific region.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeGetVideoCategories({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1MiscYoutubeVideoCategoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeGetVideoCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscYoutubeGetVideoCategories({ teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubeVideoCategoriesResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>regionCode?</code> | <code>string</code> | ISO 3166-1 alpha-2 country code (e.g., 'US', 'GB', 'PL'). Defaults to 'US' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeGetVideoCategories(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubeVideoCategoriesResponse](src/models/api-v1-misc-youtube-video-categories-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeGetVideoCategoriesError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeGetVideoCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubeVideoCategoriesResponse, Misc.MiscYoutubeGetVideoCategoriesError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubeVideoCategoriesResponse](src/models/api-v1-misc-youtube-video-categories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeGetVideosFromPlaylist(request: Misc.MiscYoutubeGetVideosFromPlaylistRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubePlaylistItemsResponse1, Misc.MiscYoutubeGetVideosFromPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the videos in a YouTube playlist, including the playlist item IDs required to remove individual entries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeGetVideosFromPlaylist({
    teamId: "some example string",
    playlistId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistItemsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeGetVideosFromPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc
  .miscYoutubeGetVideosFromPlaylist({ teamId: "some example string", playlistId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubePlaylistItemsResponse1
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
| <code>teamId</code> | <code>string</code> | - |
| <code>playlistId</code> | <code>string</code> | - |
| <code>maxResults?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeGetVideosFromPlaylist(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubePlaylistItemsResponse1](src/models/api-v1-misc-youtube-playlist-items-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeGetVideosFromPlaylistError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeGetVideosFromPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubePlaylistItemsResponse1, Misc.MiscYoutubeGetVideosFromPlaylistError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubePlaylistItemsResponse1](src/models/api-v1-misc-youtube-playlist-items-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeSetThumbnail(request?: Misc.MiscYoutubeSetThumbnailRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubeThumbnailResponse, Misc.MiscYoutubeSetThumbnailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a custom thumbnail for a published YouTube video. Custom thumbnails require a verified channel and strongly influence click-through rate.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeSetThumbnail();
  // TODO: Handle 'response' of type ApiV1MiscYoutubeThumbnailResponse
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeSetThumbnailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscYoutubeSetThumbnail().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubeThumbnailResponse
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
| <code>body?</code> | <code>[ApiV1MiscYoutubeThumbnailRequest](src/models/api-v1-misc-youtube-thumbnail-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeSetThumbnail(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubeThumbnailResponse](src/models/api-v1-misc-youtube-thumbnail-response.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeSetThumbnailError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeSetThumbnail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubeThumbnailResponse, Misc.MiscYoutubeSetThumbnailError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubeThumbnailResponse](src/models/api-v1-misc-youtube-thumbnail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>miscYoutubeUpdateChannelPlaylist(request?: Misc.MiscYoutubeUpdateChannelPlaylistRequest, options?: RequestOptions): ApiPromise&lt;ApiV1MiscYoutubePlaylistResponse1, Misc.MiscYoutubeUpdateChannelPlaylistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the title, description, or privacy status of a YouTube playlist on a connected channel. Send the playlist ID together with the fields you want to update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.misc.miscYoutubeUpdateChannelPlaylist();
  // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse1
} catch (err) {
  // TODO: Handle 'err' of type Misc.MiscYoutubeUpdateChannelPlaylistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.misc.miscYoutubeUpdateChannelPlaylist().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1MiscYoutubePlaylistResponse1
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
| <code>body?</code> | <code>[ApiV1MiscYoutubePlaylistRequest1](src/models/api-v1-misc-youtube-playlist-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.misc.miscYoutubeUpdateChannelPlaylist(request)`

- **OnSuccess**: <code>[ApiV1MiscYoutubePlaylistResponse1](src/models/api-v1-misc-youtube-playlist-response1.ts)</code>
- **OnError**: throws <code>[Misc.MiscYoutubeUpdateChannelPlaylistError](src/resources/misc.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.misc.miscYoutubeUpdateChannelPlaylist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1MiscYoutubePlaylistResponse1, Misc.MiscYoutubeUpdateChannelPlaylistError&gt;</code>, with `result.value` of type <code>[ApiV1MiscYoutubePlaylistResponse1](src/models/api-v1-misc-youtube-playlist-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationApi

> Source: [OrganizationApi](src/resources/organization-api.ts)

<details>
<summary><code>organizationGetCommentsUsage(options?: RequestOptions): ApiPromise&lt;ApiV1OrganizationUsageCommentsResponse, OrganizationApi.OrganizationGetCommentsUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how many comments your organization has consumed against its plan limit for the current billing period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationApi.organizationGetCommentsUsage();
  // TODO: Handle 'response' of type ApiV1OrganizationUsageCommentsResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationApi.OrganizationGetCommentsUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationApi.organizationGetCommentsUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1OrganizationUsageCommentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationApi.organizationGetCommentsUsage()`

- **OnSuccess**: <code>[ApiV1OrganizationUsageCommentsResponse](src/models/api-v1-organization-usage-comments-response.ts)</code>
- **OnError**: throws <code>[OrganizationApi.OrganizationGetCommentsUsageError](src/resources/organization-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationApi.organizationGetCommentsUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1OrganizationUsageCommentsResponse, OrganizationApi.OrganizationGetCommentsUsageError&gt;</code>, with `result.value` of type <code>[ApiV1OrganizationUsageCommentsResponse](src/models/api-v1-organization-usage-comments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationGetDailyLimitsUsage(request: OrganizationApi.OrganizationGetDailyLimitsUsageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1OrganizationUsageDailyLimitsResponse, OrganizationApi.OrganizationGetDailyLimitsUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check how many posts a single social account has already published on a specific day versus the platform's own daily cap. Use this to avoid hitting platform-side publishing limits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationApi.organizationGetDailyLimitsUsage({
    socialAccountId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1OrganizationUsageDailyLimitsResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationApi.OrganizationGetDailyLimitsUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationApi
  .organizationGetDailyLimitsUsage({ socialAccountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1OrganizationUsageDailyLimitsResponse
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
| <code>socialAccountId</code> | <code>string</code> | - |
| <code>date?</code> | <code>Date</code> (date-time) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationApi.organizationGetDailyLimitsUsage(request)`

- **OnSuccess**: <code>[ApiV1OrganizationUsageDailyLimitsResponse](src/models/api-v1-organization-usage-daily-limits-response.ts)</code>
- **OnError**: throws <code>[OrganizationApi.OrganizationGetDailyLimitsUsageError](src/resources/organization-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationApi.organizationGetDailyLimitsUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1OrganizationUsageDailyLimitsResponse, OrganizationApi.OrganizationGetDailyLimitsUsageError&gt;</code>, with `result.value` of type <code>[ApiV1OrganizationUsageDailyLimitsResponse](src/models/api-v1-organization-usage-daily-limits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationGetImportsUsage(request?: OrganizationApi.OrganizationGetImportsUsageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1OrganizationUsageImportsResponse, OrganizationApi.OrganizationGetImportsUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how much import capacity each social account has consumed, paginated and filterable by team or platform. Use it to track post history and review import quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationApi.organizationGetImportsUsage();
  // TODO: Handle 'response' of type ApiV1OrganizationUsageImportsResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationApi.OrganizationGetImportsUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationApi.organizationGetImportsUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1OrganizationUsageImportsResponse
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
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>teamId?</code> | <code>string</code> | - |
| <code>socialAccountType?</code> | <code>[SocialAccountTypeBundleSocialOrganizationApi](src/models/social-account-type-bundle-social-organization-api.ts)</code> | - |
| <code>socialAccountId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationApi.organizationGetImportsUsage(request)`

- **OnSuccess**: <code>[ApiV1OrganizationUsageImportsResponse](src/models/api-v1-organization-usage-imports-response.ts)</code>
- **OnError**: throws <code>[OrganizationApi.OrganizationGetImportsUsageError](src/resources/organization-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationApi.organizationGetImportsUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1OrganizationUsageImportsResponse, OrganizationApi.OrganizationGetImportsUsageError&gt;</code>, with `result.value` of type <code>[ApiV1OrganizationUsageImportsResponse](src/models/api-v1-organization-usage-imports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationGetMessagesUsage(request?: OrganizationApi.OrganizationGetMessagesUsageRequest, options?: RequestOptions): ApiPromise&lt;ApiV1OrganizationUsageMessagesResponse, OrganizationApi.OrganizationGetMessagesUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how many direct messages and automation runs each Facebook, Instagram and TikTok account has used this UTC calendar month against its monthly limits, paginated with `offset`/`limit` and filterable by team, platform or account. Messages counted: every message you sent, including private replies to comments. Not counted: reactions, marking a conversation as read, and inbound messages. Automation runs counted: every run that was allowed to start, including manual test runs; skipped and canceled runs are not counted. Limits reflect per-account and organization overrides on top of the plan default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationApi.organizationGetMessagesUsage();
  // TODO: Handle 'response' of type ApiV1OrganizationUsageMessagesResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationApi.OrganizationGetMessagesUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationApi.organizationGetMessagesUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1OrganizationUsageMessagesResponse
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
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>teamId?</code> | <code>string</code> | - |
| <code>socialAccountType?</code> | <code>[SocialAccountType1BundleSocialOrganizationApi](src/models/social-account-type1-bundle-social-organization-api.ts)</code> | - |
| <code>socialAccountId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationApi.organizationGetMessagesUsage(request)`

- **OnSuccess**: <code>[ApiV1OrganizationUsageMessagesResponse](src/models/api-v1-organization-usage-messages-response.ts)</code>
- **OnError**: throws <code>[OrganizationApi.OrganizationGetMessagesUsageError](src/resources/organization-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationApi.organizationGetMessagesUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1OrganizationUsageMessagesResponse, OrganizationApi.OrganizationGetMessagesUsageError&gt;</code>, with `result.value` of type <code>[ApiV1OrganizationUsageMessagesResponse](src/models/api-v1-organization-usage-messages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationGetOrganization(options?: RequestOptions): ApiPromise&lt;ApiV1OrganizationResponse, OrganizationApi.OrganizationGetOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your organization's details and plan. The `teams` field is deprecated and will be removed on 2026-11-15: to discover team IDs, use the paginated GET /api/v1/team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationApi.organizationGetOrganization();
  // TODO: Handle 'response' of type ApiV1OrganizationResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationApi.OrganizationGetOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationApi.organizationGetOrganization().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1OrganizationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationApi.organizationGetOrganization()`

- **OnSuccess**: <code>[ApiV1OrganizationResponse](src/models/api-v1-organization-response.ts)</code>
- **OnError**: throws <code>[OrganizationApi.OrganizationGetOrganizationError](src/resources/organization-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationApi.organizationGetOrganization().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1OrganizationResponse, OrganizationApi.OrganizationGetOrganizationError&gt;</code>, with `result.value` of type <code>[ApiV1OrganizationResponse](src/models/api-v1-organization-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationGetPostsUsage(options?: RequestOptions): ApiPromise&lt;ApiV1OrganizationUsagePostsResponse, OrganizationApi.OrganizationGetPostsUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how many posts your organization has consumed against its plan limit for the current billing period. Use it to monitor quota before scheduling large batches.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationApi.organizationGetPostsUsage();
  // TODO: Handle 'response' of type ApiV1OrganizationUsagePostsResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationApi.OrganizationGetPostsUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationApi.organizationGetPostsUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1OrganizationUsagePostsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationApi.organizationGetPostsUsage()`

- **OnSuccess**: <code>[ApiV1OrganizationUsagePostsResponse](src/models/api-v1-organization-usage-posts-response.ts)</code>
- **OnError**: throws <code>[OrganizationApi.OrganizationGetPostsUsageError](src/resources/organization-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationApi.organizationGetPostsUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1OrganizationUsagePostsResponse, OrganizationApi.OrganizationGetPostsUsageError&gt;</code>, with `result.value` of type <code>[ApiV1OrganizationUsagePostsResponse](src/models/api-v1-organization-usage-posts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>organizationGetUploadsUsage(options?: RequestOptions): ApiPromise&lt;ApiV1OrganizationUsageUploadsResponse, OrganizationApi.OrganizationGetUploadsUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how much upload capacity your organization has consumed against its plan limit for the current billing period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationApi.organizationGetUploadsUsage();
  // TODO: Handle 'response' of type ApiV1OrganizationUsageUploadsResponse
} catch (err) {
  // TODO: Handle 'err' of type OrganizationApi.OrganizationGetUploadsUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationApi.organizationGetUploadsUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1OrganizationUsageUploadsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationApi.organizationGetUploadsUsage()`

- **OnSuccess**: <code>[ApiV1OrganizationUsageUploadsResponse](src/models/api-v1-organization-usage-uploads-response.ts)</code>
- **OnError**: throws <code>[OrganizationApi.OrganizationGetUploadsUsageError](src/resources/organization-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationApi.organizationGetUploadsUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1OrganizationUsageUploadsResponse, OrganizationApi.OrganizationGetUploadsUsageError&gt;</code>, with `result.value` of type <code>[ApiV1OrganizationUsageUploadsResponse](src/models/api-v1-organization-usage-uploads-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PostApi

> Source: [PostApi](src/resources/post-api.ts)

<details>
<summary><code>postCreate(request?: PostApi.PostCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostResponse1, PostApi.PostCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedule or immediately publish a post to one or more connected social accounts in a single request. Supply shared content plus optional per-platform overrides for captions, media, and platform-specific options.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postApi.postCreate();
  // TODO: Handle 'response' of type ApiV1PostResponse1
} catch (err) {
  // TODO: Handle 'err' of type PostApi.PostCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postApi.postCreate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostResponse1
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
| <code>body?</code> | <code>[ApiV1PostRequest1](src/models/api-v1-post-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postApi.postCreate(request)`

- **OnSuccess**: <code>[ApiV1PostResponse1](src/models/api-v1-post-response1.ts)</code>
- **OnError**: throws <code>[PostApi.PostCreateError](src/resources/post-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postApi.postCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostResponse1, PostApi.PostCreateError&gt;</code>, with `result.value` of type <code>[ApiV1PostResponse1](src/models/api-v1-post-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postDelete(request: PostApi.PostDeleteRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostResponse2, PostApi.PostDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a post from bundle.social. Deleting a scheduled post cancels it; deleting an already-published post does not remove it from the social platform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postApi.postDelete({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostResponse2
} catch (err) {
  // TODO: Handle 'err' of type PostApi.PostDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postApi.postDelete({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostResponse2
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postApi.postDelete(request)`

- **OnSuccess**: <code>[ApiV1PostResponse2](src/models/api-v1-post-response2.ts)</code>
- **OnError**: throws <code>[PostApi.PostDeleteError](src/resources/post-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postApi.postDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostResponse2, PostApi.PostDeleteError&gt;</code>, with `result.value` of type <code>[ApiV1PostResponse2](src/models/api-v1-post-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGet(request: PostApi.PostGetRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostResponse, PostApi.PostGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single post by ID, including its per-platform status, scheduled time, media, and any publishing errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postApi.postGet({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostResponse
} catch (err) {
  // TODO: Handle 'err' of type PostApi.PostGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postApi.postGet({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postApi.postGet(request)`

- **OnSuccess**: <code>[ApiV1PostResponse](src/models/api-v1-post-response.ts)</code>
- **OnError**: throws <code>[PostApi.PostGetError](src/resources/post-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postApi.postGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostResponse, PostApi.PostGetError&gt;</code>, with `result.value` of type <code>[ApiV1PostResponse](src/models/api-v1-post-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetByReferenceKey(request: PostApi.PostGetByReferenceKeyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostReferenceKeyResponse, PostApi.PostGetByReferenceKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single post using your own reference key instead of the bundle.social post ID. Useful when you store your own identifier on create and want to look the post up later without keeping a mapping table.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postApi.postGetByReferenceKey({ referenceKey: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostReferenceKeyResponse
} catch (err) {
  // TODO: Handle 'err' of type PostApi.PostGetByReferenceKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postApi
  .postGetByReferenceKey({ referenceKey: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostReferenceKeyResponse
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
| <code>referenceKey</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postApi.postGetByReferenceKey(request)`

- **OnSuccess**: <code>[ApiV1PostReferenceKeyResponse](src/models/api-v1-post-reference-key-response.ts)</code>
- **OnError**: throws <code>[PostApi.PostGetByReferenceKeyError](src/resources/post-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postApi.postGetByReferenceKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostReferenceKeyResponse, PostApi.PostGetByReferenceKeyError&gt;</code>, with `result.value` of type <code>[ApiV1PostReferenceKeyResponse](src/models/api-v1-post-reference-key-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetList(request: PostApi.PostGetListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostResponse3, PostApi.PostGetListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List and filter posts across a team by status, platform, or date range with pagination. Use this to build a content calendar or reconcile your own database with bundle.social.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postApi.postGetList({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostResponse3
} catch (err) {
  // TODO: Handle 'err' of type PostApi.PostGetListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postApi.postGetList({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostResponse3
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
| <code>teamId</code> | <code>string</code> | - |
| <code>status?</code> | <code>[Status](src/models/status.ts)</code> | - |
| <code>orderBy?</code> | <code>[OrderByBundleSocialPostApi](src/models/order-by-bundle-social-post-api.ts)</code> | - |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | - |
| <code>q?</code> | <code>string</code> | - |
| <code>platforms?</code> | <code>[PlatformBundleSocialPostApi](src/models/platform-bundle-social-post-api.ts)[]</code> | - |
| <code>postDateFrom?</code> | <code>Date</code> (date-time) | - |
| <code>postDateTo?</code> | <code>Date</code> (date-time) | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postApi.postGetList(request)`

- **OnSuccess**: <code>[ApiV1PostResponse3](src/models/api-v1-post-response3.ts)</code>
- **OnError**: throws <code>[PostApi.PostGetListError](src/resources/post-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postApi.postGetList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostResponse3, PostApi.PostGetListError&gt;</code>, with `result.value` of type <code>[ApiV1PostResponse3](src/models/api-v1-post-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postGetReconnectSocialAccountCandidates(request: PostApi.PostGetReconnectSocialAccountCandidatesRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostReconnectSocialAccountCandidatesResponse, PostApi.PostGetReconnectSocialAccountCandidatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List posts that lost their link to a social account after a disconnect, and that can be reattached to a newly connected account of the same platform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postApi.postGetReconnectSocialAccountCandidates({
    teamId: "some example string",
    type: Type.Tiktok,
  });
  // TODO: Handle 'response' of type ApiV1PostReconnectSocialAccountCandidatesResponse
} catch (err) {
  // TODO: Handle 'err' of type PostApi.PostGetReconnectSocialAccountCandidatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postApi
  .postGetReconnectSocialAccountCandidates({ teamId: "some example string", type: Type.Tiktok })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostReconnectSocialAccountCandidatesResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>type</code> | <code>[Type](src/models/type.ts)</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postApi.postGetReconnectSocialAccountCandidates(request)`

- **OnSuccess**: <code>[ApiV1PostReconnectSocialAccountCandidatesResponse](src/models/api-v1-post-reconnect-social-account-candidates-response.ts)</code>
- **OnError**: throws <code>[PostApi.PostGetReconnectSocialAccountCandidatesError](src/resources/post-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postApi.postGetReconnectSocialAccountCandidates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostReconnectSocialAccountCandidatesResponse, PostApi.PostGetReconnectSocialAccountCandidatesError&gt;</code>, with `result.value` of type <code>[ApiV1PostReconnectSocialAccountCandidatesResponse](src/models/api-v1-post-reconnect-social-account-candidates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postReconnectSocialAccount(request?: PostApi.PostReconnectSocialAccountRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostReconnectSocialAccountResponse, PostApi.PostReconnectSocialAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reattach a newly connected social account to posts that were orphaned when the previous account was disconnected, so scheduled posts publish instead of failing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postApi.postReconnectSocialAccount();
  // TODO: Handle 'response' of type ApiV1PostReconnectSocialAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type PostApi.PostReconnectSocialAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postApi.postReconnectSocialAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostReconnectSocialAccountResponse
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
| <code>body?</code> | <code>[ApiV1PostReconnectSocialAccountRequest](src/models/api-v1-post-reconnect-social-account-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postApi.postReconnectSocialAccount(request)`

- **OnSuccess**: <code>[ApiV1PostReconnectSocialAccountResponse](src/models/api-v1-post-reconnect-social-account-response.ts)</code>
- **OnError**: throws <code>[PostApi.PostReconnectSocialAccountError](src/resources/post-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postApi.postReconnectSocialAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostReconnectSocialAccountResponse, PostApi.PostReconnectSocialAccountError&gt;</code>, with `result.value` of type <code>[ApiV1PostReconnectSocialAccountResponse](src/models/api-v1-post-reconnect-social-account-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postRetry(request: PostApi.PostRetryRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostRetryResponse, PostApi.PostRetryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-attempt publishing a post that failed, for example after a token expired or a platform outage. Fix the underlying cause first, then retry.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postApi.postRetry({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostRetryResponse
} catch (err) {
  // TODO: Handle 'err' of type PostApi.PostRetryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postApi.postRetry({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostRetryResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postApi.postRetry(request)`

- **OnSuccess**: <code>[ApiV1PostRetryResponse](src/models/api-v1-post-retry-response.ts)</code>
- **OnError**: throws <code>[PostApi.PostRetryError](src/resources/post-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postApi.postRetry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostRetryResponse, PostApi.PostRetryError&gt;</code>, with `result.value` of type <code>[ApiV1PostRetryResponse](src/models/api-v1-post-retry-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postUpdate(request: PostApi.PostUpdateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostResponse1, PostApi.PostUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the content, media, scheduled time, or target platforms of a post that has not published yet. Only the fields you send are modified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postApi.postUpdate({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostResponse1
} catch (err) {
  // TODO: Handle 'err' of type PostApi.PostUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postApi.postUpdate({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostResponse1
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1PostRequest](src/models/api-v1-post-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postApi.postUpdate(request)`

- **OnSuccess**: <code>[ApiV1PostResponse1](src/models/api-v1-post-response1.ts)</code>
- **OnError**: throws <code>[PostApi.PostUpdateError](src/resources/post-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postApi.postUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostResponse1, PostApi.PostUpdateError&gt;</code>, with `result.value` of type <code>[ApiV1PostResponse1](src/models/api-v1-post-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PostCsv

> Source: [PostCsv](src/resources/post-csv.ts)

<details>
<summary><code>postCsvCreate(request?: PostCsv.PostCsvCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostCsvImportResponse, PostCsv.PostCsvCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload CSV for async bulk post import.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postCsv.postCsvCreate();
  // TODO: Handle 'response' of type ApiV1PostCsvImportResponse
} catch (err) {
  // TODO: Handle 'err' of type PostCsv.PostCsvCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postCsv.postCsvCreate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostCsvImportResponse
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
| <code>file?</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postCsv.postCsvCreate(request)`

- **OnSuccess**: <code>[ApiV1PostCsvImportResponse](src/models/api-v1-post-csv-import-response.ts)</code>
- **OnError**: throws <code>[PostCsv.PostCsvCreateError](src/resources/post-csv.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postCsv.postCsvCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostCsvImportResponse, PostCsv.PostCsvCreateError&gt;</code>, with `result.value` of type <code>[ApiV1PostCsvImportResponse](src/models/api-v1-post-csv-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCsvGetById(request: PostCsv.PostCsvGetByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostCsvImportResponse, PostCsv.PostCsvGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single CSV import with its summary counts and configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postCsv.postCsvGetById({ importId: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostCsvImportResponse
} catch (err) {
  // TODO: Handle 'err' of type PostCsv.PostCsvGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postCsv.postCsvGetById({ importId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostCsvImportResponse
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
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postCsv.postCsvGetById(request)`

- **OnSuccess**: <code>[ApiV1PostCsvImportResponse](src/models/api-v1-post-csv-import-response.ts)</code>
- **OnError**: throws <code>[PostCsv.PostCsvGetByIdError](src/resources/post-csv.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postCsv.postCsvGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostCsvImportResponse, PostCsv.PostCsvGetByIdError&gt;</code>, with `result.value` of type <code>[ApiV1PostCsvImportResponse](src/models/api-v1-post-csv-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCsvGetList(request?: PostCsv.PostCsvGetListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostCsvImportResponse1, PostCsv.PostCsvGetListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List your team's bulk CSV post imports with pagination, so you can see what was uploaded and when.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postCsv.postCsvGetList();
  // TODO: Handle 'response' of type ApiV1PostCsvImportResponse1
} catch (err) {
  // TODO: Handle 'err' of type PostCsv.PostCsvGetListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postCsv.postCsvGetList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostCsvImportResponse1
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
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postCsv.postCsvGetList(request)`

- **OnSuccess**: <code>[ApiV1PostCsvImportResponse1](src/models/api-v1-post-csv-import-response1.ts)</code>
- **OnError**: throws <code>[PostCsv.PostCsvGetListError](src/resources/post-csv.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postCsv.postCsvGetList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostCsvImportResponse1, PostCsv.PostCsvGetListError&gt;</code>, with `result.value` of type <code>[ApiV1PostCsvImportResponse1](src/models/api-v1-post-csv-import-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCsvGetRows(request: PostCsv.PostCsvGetRowsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostCsvImportRowsResponse, PostCsv.PostCsvGetRowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the per-row outcome of a CSV import with pagination, showing which rows created posts and which failed validation and why. Use it to report errors back to the person who uploaded the file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postCsv.postCsvGetRows({ importId: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostCsvImportRowsResponse
} catch (err) {
  // TODO: Handle 'err' of type PostCsv.PostCsvGetRowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postCsv.postCsvGetRows({ importId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostCsvImportRowsResponse
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
| <code>importId</code> | <code>string</code> | - |
| <code>status?</code> | <code>[Status4BundleSocialPostCsvApi](src/models/status4-bundle-social-post-csv-api.ts)</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postCsv.postCsvGetRows(request)`

- **OnSuccess**: <code>[ApiV1PostCsvImportRowsResponse](src/models/api-v1-post-csv-import-rows-response.ts)</code>
- **OnError**: throws <code>[PostCsv.PostCsvGetRowsError](src/resources/post-csv.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postCsv.postCsvGetRows(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostCsvImportRowsResponse, PostCsv.PostCsvGetRowsError&gt;</code>, with `result.value` of type <code>[ApiV1PostCsvImportRowsResponse](src/models/api-v1-post-csv-import-rows-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCsvGetStatus(request: PostCsv.PostCsvGetStatusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostCsvImportStatusResponse, PostCsv.PostCsvGetStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll the progress of a bulk CSV post import, including how many rows are processed, succeeded, and failed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postCsv.postCsvGetStatus({ importId: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostCsvImportStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type PostCsv.PostCsvGetStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postCsv.postCsvGetStatus({ importId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostCsvImportStatusResponse
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
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postCsv.postCsvGetStatus(request)`

- **OnSuccess**: <code>[ApiV1PostCsvImportStatusResponse](src/models/api-v1-post-csv-import-status-response.ts)</code>
- **OnError**: throws <code>[PostCsv.PostCsvGetStatusError](src/resources/post-csv.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postCsv.postCsvGetStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostCsvImportStatusResponse, PostCsv.PostCsvGetStatusError&gt;</code>, with `result.value` of type <code>[ApiV1PostCsvImportStatusResponse](src/models/api-v1-post-csv-import-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PostImport

> Source: [PostImport](src/resources/post-import.ts)

<details>
<summary><code>postImportCreate(request?: PostImport.PostImportCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostHistoryImportResponse, PostImport.PostImportCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that backfills posts a social account published before it was connected to bundle.social, together with their analytics. Use it to get historical reporting from day one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postImport.postImportCreate();
  // TODO: Handle 'response' of type ApiV1PostHistoryImportResponse
} catch (err) {
  // TODO: Handle 'err' of type PostImport.PostImportCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postImport.postImportCreate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostHistoryImportResponse
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
| <code>body?</code> | <code>[ApiV1PostHistoryImportRequest](src/models/api-v1-post-history-import-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postImport.postImportCreate(request)`

- **OnSuccess**: <code>[ApiV1PostHistoryImportResponse](src/models/api-v1-post-history-import-response.ts)</code>
- **OnError**: throws <code>[PostImport.PostImportCreateError](src/resources/post-import.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postImport.postImportCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostHistoryImportResponse, PostImport.PostImportCreateError&gt;</code>, with `result.value` of type <code>[ApiV1PostHistoryImportResponse](src/models/api-v1-post-history-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postImportDeleteImportedPosts(request?: PostImport.PostImportDeleteImportedPostsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostHistoryImportPostsResponse1, PostImport.PostImportDeleteImportedPostsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete up to 100 imported historical posts and their analytics in one request, freeing import capacity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postImport.postImportDeleteImportedPosts();
  // TODO: Handle 'response' of type ApiV1PostHistoryImportPostsResponse1
} catch (err) {
  // TODO: Handle 'err' of type PostImport.PostImportDeleteImportedPostsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postImport.postImportDeleteImportedPosts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostHistoryImportPostsResponse1
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
| <code>body?</code> | <code>[ApiV1PostHistoryImportPostsRequest](src/models/api-v1-post-history-import-posts-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postImport.postImportDeleteImportedPosts(request)`

- **OnSuccess**: <code>[ApiV1PostHistoryImportPostsResponse1](src/models/api-v1-post-history-import-posts-response1.ts)</code>
- **OnError**: throws <code>[PostImport.PostImportDeleteImportedPostsError](src/resources/post-import.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postImport.postImportDeleteImportedPosts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostHistoryImportPostsResponse1, PostImport.PostImportDeleteImportedPostsError&gt;</code>, with `result.value` of type <code>[ApiV1PostHistoryImportPostsResponse1](src/models/api-v1-post-history-import-posts-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postImportGetById(request: PostImport.PostImportGetByIdRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostHistoryImportResponse, PostImport.PostImportGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single post history import job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postImport.postImportGetById({ importId: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostHistoryImportResponse
} catch (err) {
  // TODO: Handle 'err' of type PostImport.PostImportGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postImport.postImportGetById({ importId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostHistoryImportResponse
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
| <code>importId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postImport.postImportGetById(request)`

- **OnSuccess**: <code>[ApiV1PostHistoryImportResponse](src/models/api-v1-post-history-import-response.ts)</code>
- **OnError**: throws <code>[PostImport.PostImportGetByIdError](src/resources/post-import.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postImport.postImportGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostHistoryImportResponse, PostImport.PostImportGetByIdError&gt;</code>, with `result.value` of type <code>[ApiV1PostHistoryImportResponse](src/models/api-v1-post-history-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postImportGetImportedPosts(request: PostImport.PostImportGetImportedPostsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostHistoryImportPostsResponse, PostImport.PostImportGetImportedPostsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the historical posts pulled in by an import, with their analytics and your remaining import capacity. Use it to report on performance from before the account was connected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postImport.postImportGetImportedPosts({
    teamId: "some example string",
    socialAccountType: SocialAccountTypeBundleSocialPostImportApi.Facebook,
  });
  // TODO: Handle 'response' of type ApiV1PostHistoryImportPostsResponse
} catch (err) {
  // TODO: Handle 'err' of type PostImport.PostImportGetImportedPostsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postImport
  .postImportGetImportedPosts({
    teamId: "some example string",
    socialAccountType: SocialAccountTypeBundleSocialPostImportApi.Facebook,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostHistoryImportPostsResponse
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
| <code>teamId</code> | <code>string</code> | - |
| <code>socialAccountType</code> | <code>[SocialAccountTypeBundleSocialPostImportApi](src/models/social-account-type-bundle-social-post-import-api.ts)</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postImport.postImportGetImportedPosts(request)`

- **OnSuccess**: <code>[ApiV1PostHistoryImportPostsResponse](src/models/api-v1-post-history-import-posts-response.ts)</code>
- **OnError**: throws <code>[PostImport.PostImportGetImportedPostsError](src/resources/post-import.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postImport.postImportGetImportedPosts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostHistoryImportPostsResponse, PostImport.PostImportGetImportedPostsError&gt;</code>, with `result.value` of type <code>[ApiV1PostHistoryImportPostsResponse](src/models/api-v1-post-history-import-posts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postImportGetStatus(request: PostImport.PostImportGetStatusRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostHistoryImportResponse1, PostImport.PostImportGetStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List post history import jobs for a team so you can monitor which backfills are queued, running, finished, or failed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postImport.postImportGetStatus({ teamId: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostHistoryImportResponse1
} catch (err) {
  // TODO: Handle 'err' of type PostImport.PostImportGetStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postImport.postImportGetStatus({ teamId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostHistoryImportResponse1
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
| <code>teamId</code> | <code>string</code> | - |
| <code>socialAccountType?</code> | <code>[SocialAccountTypeBundleSocialPostImportApi](src/models/social-account-type-bundle-social-post-import-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postImport.postImportGetStatus(request)`

- **OnSuccess**: <code>[ApiV1PostHistoryImportResponse1](src/models/api-v1-post-history-import-response1.ts)</code>
- **OnError**: throws <code>[PostImport.PostImportGetStatusError](src/resources/post-import.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postImport.postImportGetStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostHistoryImportResponse1, PostImport.PostImportGetStatusError&gt;</code>, with `result.value` of type <code>[ApiV1PostHistoryImportResponse1](src/models/api-v1-post-history-import-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postImportRetryImport(request: PostImport.PostImportRetryImportRequest, options?: RequestOptions): ApiPromise&lt;ApiV1PostHistoryImportRetryResponse, PostImport.PostImportRetryImportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-run a post history import that failed, for example after a token expired or the platform rate-limited the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postImport.postImportRetryImport({ importId: "some example string" });
  // TODO: Handle 'response' of type ApiV1PostHistoryImportRetryResponse
} catch (err) {
  // TODO: Handle 'err' of type PostImport.PostImportRetryImportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postImport
  .postImportRetryImport({ importId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1PostHistoryImportRetryResponse
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
| <code>importId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1PostHistoryImportRetryRequest](src/models/api-v1-post-history-import-retry-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postImport.postImportRetryImport(request)`

- **OnSuccess**: <code>[ApiV1PostHistoryImportRetryResponse](src/models/api-v1-post-history-import-retry-response.ts)</code>
- **OnError**: throws <code>[PostImport.PostImportRetryImportError](src/resources/post-import.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postImport.postImportRetryImport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1PostHistoryImportRetryResponse, PostImport.PostImportRetryImportError&gt;</code>, with `result.value` of type <code>[ApiV1PostHistoryImportRetryResponse](src/models/api-v1-post-history-import-retry-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SocialAccountApi

> Source: [SocialAccountApi](src/resources/social-account-api.ts)

<details>
<summary><code>socialAccountConnect(request?: SocialAccountApi.SocialAccountConnectRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountConnectResponse, SocialAccountApi.SocialAccountConnectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate OAuth URL for social account connection. Redirect user to this URL to connect social account. For Mastodon and Bluesky an unusable `serverUrl` returns 400 with the reason, while a reachable-but-failing instance returns 502.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountConnect();
  // TODO: Handle 'response' of type ApiV1SocialAccountConnectResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountConnectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountConnect().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountConnectResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountConnectRequest](src/models/api-v1-social-account-connect-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountConnect(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountConnectResponse](src/models/api-v1-social-account-connect-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountConnectError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountConnect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountConnectResponse, SocialAccountApi.SocialAccountConnectError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountConnectResponse](src/models/api-v1-social-account-connect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountConnectionCheck(request?: SocialAccountApi.SocialAccountConnectionCheckRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountConnectionCheckResponse, SocialAccountApi.SocialAccountConnectionCheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Force an immediate check of whether a social account's authorization is still valid, instead of waiting for the scheduled check. Use it to surface expired tokens before a scheduled post fails.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountConnectionCheck();
  // TODO: Handle 'response' of type ApiV1SocialAccountConnectionCheckResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountConnectionCheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountConnectionCheck().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountConnectionCheckResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountConnectionCheckRequest](src/models/api-v1-social-account-connection-check-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountConnectionCheck(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountConnectionCheckResponse](src/models/api-v1-social-account-connection-check-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountConnectionCheckError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountConnectionCheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountConnectionCheckResponse, SocialAccountApi.SocialAccountConnectionCheckError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountConnectionCheckResponse](src/models/api-v1-social-account-connection-check-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountCopy(request?: SocialAccountApi.SocialAccountCopyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountCopyResponse[], SocialAccountApi.SocialAccountCopyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Copy connected social accounts from one team to another so you can reuse an existing authorization without sending the user through OAuth again.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountCopy();
  // TODO: Handle 'response' of type ApiV1SocialAccountCopyResponse[]
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountCopyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountCopy().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountCopyResponse[]
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
| <code>body?</code> | <code>[ApiV1SocialAccountCopyRequest](src/models/api-v1-social-account-copy-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountCopy(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountCopyResponse](src/models/api-v1-social-account-copy-response.ts)[]</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountCopyError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountCopy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountCopyResponse[], SocialAccountApi.SocialAccountCopyError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountCopyResponse](src/models/api-v1-social-account-copy-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountCreatePortalLink(request?: SocialAccountApi.SocialAccountCreatePortalLinkRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountCreatePortalLinkResponse, SocialAccountApi.SocialAccountCreatePortalLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Simplify connect flow. Create a portal link which can be used to manage connected social accounts directly on bundle.social platform without implementing the logic on your side.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountCreatePortalLink();
  // TODO: Handle 'response' of type ApiV1SocialAccountCreatePortalLinkResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountCreatePortalLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountCreatePortalLink().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountCreatePortalLinkResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountCreatePortalLinkRequest](src/models/api-v1-social-account-create-portal-link-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountCreatePortalLink(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountCreatePortalLinkResponse](src/models/api-v1-social-account-create-portal-link-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountCreatePortalLinkError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountCreatePortalLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountCreatePortalLinkResponse, SocialAccountApi.SocialAccountCreatePortalLinkError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountCreatePortalLinkResponse](src/models/api-v1-social-account-create-portal-link-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountDisableMessaging(request?: SocialAccountApi.SocialAccountDisableMessagingRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountMessagingDisableResponse, SocialAccountApi.SocialAccountDisableMessagingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop processing DMs for the account and narrow its Meta webhook subscription to what other features still need. Idempotent. Processing stops immediately; if Meta does not confirm the change the status is DISABLE_PENDING and the call returns 502, so it can be retried.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountDisableMessaging();
  // TODO: Handle 'response' of type ApiV1SocialAccountMessagingDisableResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountDisableMessagingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountDisableMessaging().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountMessagingDisableResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountMessagingDisableRequest](src/models/api-v1-social-account-messaging-disable-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountDisableMessaging(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountMessagingDisableResponse](src/models/api-v1-social-account-messaging-disable-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountDisableMessagingError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountDisableMessaging(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountMessagingDisableResponse, SocialAccountApi.SocialAccountDisableMessagingError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountMessagingDisableResponse](src/models/api-v1-social-account-messaging-disable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountDisconnect(request?: SocialAccountApi.SocialAccountDisconnectRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountDisconnectResponse, SocialAccountApi.SocialAccountDisconnectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This will remove the social account from all the scheduled posts too.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountDisconnect();
  // TODO: Handle 'response' of type ApiV1SocialAccountDisconnectResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountDisconnectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountDisconnect().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountDisconnectResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountDisconnectRequest](src/models/api-v1-social-account-disconnect-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountDisconnect(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountDisconnectResponse](src/models/api-v1-social-account-disconnect-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountDisconnectError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountDisconnect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountDisconnectResponse, SocialAccountApi.SocialAccountDisconnectError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountDisconnectResponse](src/models/api-v1-social-account-disconnect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountEnableMessaging(request?: SocialAccountApi.SocialAccountEnableMessagingRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountMessagingEnableResponse, SocialAccountApi.SocialAccountEnableMessagingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe the team's Facebook page or Instagram account to Meta DM webhooks and start processing its messages. Connecting or re-authorizing an account never does this on its own. Idempotent. Returns 403 when the organization has not been granted Instagram and Facebook direct messages and automations (email contact@bundle.social to request it), 400 when the account lacks the messaging permissions (reconnect it), and 502 when Meta rejects the subscription; the account then stays DISABLED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountEnableMessaging();
  // TODO: Handle 'response' of type ApiV1SocialAccountMessagingEnableResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountEnableMessagingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountEnableMessaging().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountMessagingEnableResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountMessagingEnableRequest](src/models/api-v1-social-account-messaging-enable-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountEnableMessaging(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountMessagingEnableResponse](src/models/api-v1-social-account-messaging-enable-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountEnableMessagingError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountEnableMessaging(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountMessagingEnableResponse, SocialAccountApi.SocialAccountEnableMessagingError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountMessagingEnableResponse](src/models/api-v1-social-account-messaging-enable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountGetAccountsToDelete(request?: SocialAccountApi.SocialAccountGetAccountsToDeleteRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountToDeleteResponse, SocialAccountApi.SocialAccountGetAccountsToDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List social accounts queued for deletion, with pagination. Use it to warn users before an account and its data are permanently removed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountGetAccountsToDelete();
  // TODO: Handle 'response' of type ApiV1SocialAccountToDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountGetAccountsToDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountGetAccountsToDelete().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountToDeleteResponse
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
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountGetAccountsToDelete(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountToDeleteResponse](src/models/api-v1-social-account-to-delete-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountGetAccountsToDeleteError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountGetAccountsToDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountToDeleteResponse, SocialAccountApi.SocialAccountGetAccountsToDeleteError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountToDeleteResponse](src/models/api-v1-social-account-to-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountGetByType(request: SocialAccountApi.SocialAccountGetByTypeRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountByTypeResponse, SocialAccountApi.SocialAccountGetByTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up a team's connected account for a specific platform without listing every account first. Useful when you already know which platform you want to publish to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountGetByType({
    type: Type.Tiktok,
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type ApiV1SocialAccountByTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountGetByTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi
  .socialAccountGetByType({ type: Type.Tiktok, teamId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountByTypeResponse
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
| <code>type</code> | <code>[Type](src/models/type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountGetByType(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountByTypeResponse](src/models/api-v1-social-account-by-type-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountGetByTypeError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountGetByType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountByTypeResponse, SocialAccountApi.SocialAccountGetByTypeError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountByTypeResponse](src/models/api-v1-social-account-by-type-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountProfileRefresh(request?: SocialAccountApi.SocialAccountProfileRefreshRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountProfileRefreshResponse, SocialAccountApi.SocialAccountProfileRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pull the latest profile name, handle, and avatar from the platform for a connected account. Use it to keep your own UI in sync after a user renames their profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountProfileRefresh();
  // TODO: Handle 'response' of type ApiV1SocialAccountProfileRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountProfileRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountProfileRefresh().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountProfileRefreshResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountProfileRefreshRequest](src/models/api-v1-social-account-profile-refresh-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountProfileRefresh(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountProfileRefreshResponse](src/models/api-v1-social-account-profile-refresh-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountProfileRefreshError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountProfileRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountProfileRefreshResponse, SocialAccountApi.SocialAccountProfileRefreshError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountProfileRefreshResponse](src/models/api-v1-social-account-profile-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountRefreshChannels(request?: SocialAccountApi.SocialAccountRefreshChannelsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountRefreshChannelsResponse, SocialAccountApi.SocialAccountRefreshChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refresh channels saved on socialAccount.channels. This is only needed for some social account types - Reddit, Discord, Slack, Pinterest.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountRefreshChannels();
  // TODO: Handle 'response' of type ApiV1SocialAccountRefreshChannelsResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountRefreshChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountRefreshChannels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountRefreshChannelsResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountRefreshChannelsRequest](src/models/api-v1-social-account-refresh-channels-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountRefreshChannels(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountRefreshChannelsResponse](src/models/api-v1-social-account-refresh-channels-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountRefreshChannelsError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountRefreshChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountRefreshChannelsResponse, SocialAccountApi.SocialAccountRefreshChannelsError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountRefreshChannelsResponse](src/models/api-v1-social-account-refresh-channels-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountSetChannel(request?: SocialAccountApi.SocialAccountSetChannelRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountSetChannelResponse, SocialAccountApi.SocialAccountSetChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Needed only for some social account types - Youtube, Instagram, Facebook and Linkedin.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountSetChannel();
  // TODO: Handle 'response' of type ApiV1SocialAccountSetChannelResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountSetChannelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountSetChannel().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountSetChannelResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountSetChannelRequest](src/models/api-v1-social-account-set-channel-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountSetChannel(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountSetChannelResponse](src/models/api-v1-social-account-set-channel-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountSetChannelError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountSetChannel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountSetChannelResponse, SocialAccountApi.SocialAccountSetChannelError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountSetChannelResponse](src/models/api-v1-social-account-set-channel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>socialAccountUnsetChannel(request?: SocialAccountApi.SocialAccountUnsetChannelRequest, options?: RequestOptions): ApiPromise&lt;ApiV1SocialAccountUnsetChannelResponse, SocialAccountApi.SocialAccountUnsetChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear selected channel while keeping social account authorization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.socialAccountApi.socialAccountUnsetChannel();
  // TODO: Handle 'response' of type ApiV1SocialAccountUnsetChannelResponse
} catch (err) {
  // TODO: Handle 'err' of type SocialAccountApi.SocialAccountUnsetChannelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.socialAccountApi.socialAccountUnsetChannel().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1SocialAccountUnsetChannelResponse
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
| <code>body?</code> | <code>[ApiV1SocialAccountUnsetChannelRequest](src/models/api-v1-social-account-unset-channel-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.socialAccountApi.socialAccountUnsetChannel(request)`

- **OnSuccess**: <code>[ApiV1SocialAccountUnsetChannelResponse](src/models/api-v1-social-account-unset-channel-response.ts)</code>
- **OnError**: throws <code>[SocialAccountApi.SocialAccountUnsetChannelError](src/resources/social-account-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.socialAccountApi.socialAccountUnsetChannel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1SocialAccountUnsetChannelResponse, SocialAccountApi.SocialAccountUnsetChannelError&gt;</code>, with `result.value` of type <code>[ApiV1SocialAccountUnsetChannelResponse](src/models/api-v1-social-account-unset-channel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TeamApi

> Source: [TeamApi](src/resources/team-api.ts)

<details>
<summary><code>teamCreateTeam(request?: TeamApi.TeamCreateTeamRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TeamResponse1, TeamApi.TeamCreateTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new team in your organization. Create one team per brand, client, or workspace you want to keep separate, then connect social accounts to it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamCreateTeam();
  // TODO: Handle 'response' of type ApiV1TeamResponse1
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamCreateTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamCreateTeam().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TeamResponse1
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
| <code>body?</code> | <code>[ApiV1TeamRequest1](src/models/api-v1-team-request1.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamCreateTeam(request)`

- **OnSuccess**: <code>[ApiV1TeamResponse1](src/models/api-v1-team-response1.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamCreateTeamError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamCreateTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TeamResponse1, TeamApi.TeamCreateTeamError&gt;</code>, with `result.value` of type <code>[ApiV1TeamResponse1](src/models/api-v1-team-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamDeleteTeam(request: TeamApi.TeamDeleteTeamRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TeamResponse1, TeamApi.TeamDeleteTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a team along with its connected social accounts, posts, and uploads. This cannot be undone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamDeleteTeam({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1TeamResponse1
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamDeleteTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamDeleteTeam({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TeamResponse1
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamDeleteTeam(request)`

- **OnSuccess**: <code>[ApiV1TeamResponse1](src/models/api-v1-team-response1.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamDeleteTeamError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamDeleteTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TeamResponse1, TeamApi.TeamDeleteTeamError&gt;</code>, with `result.value` of type <code>[ApiV1TeamResponse1](src/models/api-v1-team-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamGetList(request?: TeamApi.TeamGetListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TeamResponse3, TeamApi.TeamGetListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the teams in your organization with pagination. Use this to discover team IDs, which are required by most publishing and analytics endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamGetList();
  // TODO: Handle 'response' of type ApiV1TeamResponse3
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamGetListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamGetList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TeamResponse3
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
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>search?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamGetList(request)`

- **OnSuccess**: <code>[ApiV1TeamResponse3](src/models/api-v1-team-response3.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamGetListError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamGetList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TeamResponse3, TeamApi.TeamGetListError&gt;</code>, with `result.value` of type <code>[ApiV1TeamResponse3](src/models/api-v1-team-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamGetTeam(request: TeamApi.TeamGetTeamRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TeamResponse, TeamApi.TeamGetTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single team with its connected social accounts and settings. Teams are the container that social accounts, posts, and uploads belong to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamGetTeam({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1TeamResponse
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamGetTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamGetTeam({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TeamResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamGetTeam(request)`

- **OnSuccess**: <code>[ApiV1TeamResponse](src/models/api-v1-team-response.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamGetTeamError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamGetTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TeamResponse, TeamApi.TeamGetTeamError&gt;</code>, with `result.value` of type <code>[ApiV1TeamResponse](src/models/api-v1-team-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamUpdateTeam(request: TeamApi.TeamUpdateTeamRequest, options?: RequestOptions): ApiPromise&lt;ApiV1TeamResponse1, TeamApi.TeamUpdateTeamError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a team's name, avatar, time zone, or other settings. Only the fields you send are changed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamUpdateTeam({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1TeamResponse1
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamUpdateTeamError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamUpdateTeam({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1TeamResponse1
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
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ApiV1TeamRequest](src/models/api-v1-team-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamUpdateTeam(request)`

- **OnSuccess**: <code>[ApiV1TeamResponse1](src/models/api-v1-team-response1.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamUpdateTeamError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamUpdateTeam(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1TeamResponse1, TeamApi.TeamUpdateTeamError&gt;</code>, with `result.value` of type <code>[ApiV1TeamResponse1](src/models/api-v1-team-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UploadApi

> Source: [UploadApi](src/resources/upload-api.ts)

<details>
<summary><code>uploadAbortMultipartUpload(request?: UploadApi.UploadAbortMultipartUploadRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadMultipartAbortResponse, UploadApi.UploadAbortMultipartUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discard an unfinished multipart upload and its parts. Call this when you give up on an upload — abandoned parts stay in storage and count against your usage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadAbortMultipartUpload();
  // TODO: Handle 'response' of type ApiV1UploadMultipartAbortResponse
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadAbortMultipartUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadAbortMultipartUpload().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadMultipartAbortResponse
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
| <code>body?</code> | <code>[ApiV1UploadMultipartAbortRequest](src/models/api-v1-upload-multipart-abort-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadAbortMultipartUpload(request)`

- **OnSuccess**: <code>[ApiV1UploadMultipartAbortResponse](src/models/api-v1-upload-multipart-abort-response.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadAbortMultipartUploadError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadAbortMultipartUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadMultipartAbortResponse, UploadApi.UploadAbortMultipartUploadError&gt;</code>, with `result.value` of type <code>[ApiV1UploadMultipartAbortResponse](src/models/api-v1-upload-multipart-abort-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadCompleteMultipartUpload(request?: UploadApi.UploadCompleteMultipartUploadRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadMultipartCompleteResponse, UploadApi.UploadCompleteMultipartUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assemble the uploaded parts into the final object and add it to your media library. Send every part with the ETag returned by its PUT. A 500 is always retryable — whatever we have (your parts, or the assembled object) is kept, so retry this call rather than re-uploading. A 400 is final: either the part list was wrong, or the file itself was rejected (empty, wrong type, too large, no readable preview) and its bytes have been deleted. A 403 means quota or permissions and is raised before assembly, so your parts are still open — call abort yourself. Calling this again after it already succeeded returns the same upload instead of charging you twice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadCompleteMultipartUpload();
  // TODO: Handle 'response' of type ApiV1UploadMultipartCompleteResponse
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadCompleteMultipartUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadCompleteMultipartUpload().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadMultipartCompleteResponse
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
| <code>body?</code> | <code>[ApiV1UploadMultipartCompleteRequest](src/models/api-v1-upload-multipart-complete-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadCompleteMultipartUpload(request)`

- **OnSuccess**: <code>[ApiV1UploadMultipartCompleteResponse](src/models/api-v1-upload-multipart-complete-response.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadCompleteMultipartUploadError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadCompleteMultipartUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadMultipartCompleteResponse, UploadApi.UploadCompleteMultipartUploadError&gt;</code>, with `result.value` of type <code>[ApiV1UploadMultipartCompleteResponse](src/models/api-v1-upload-multipart-complete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadCreate(request?: UploadApi.UploadCreateRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadResponse1, UploadApi.UploadCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a file. This is the only endpoint that uses multipart/form-data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadCreate();
  // TODO: Handle 'response' of type ApiV1UploadResponse1
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadCreate().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadResponse1
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
| <code>teamId?</code> | <code>string</code> | - |
| <code>file?</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadCreate(request)`

- **OnSuccess**: <code>[ApiV1UploadResponse1](src/models/api-v1-upload-response1.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadCreateError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadResponse1, UploadApi.UploadCreateError&gt;</code>, with `result.value` of type <code>[ApiV1UploadResponse1](src/models/api-v1-upload-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadCreateFromUrl(request?: UploadApi.UploadCreateFromUrlRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadFromUrlResponse, UploadApi.UploadCreateFromUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an image or video to your media library by giving bundle.social a public URL to fetch, instead of uploading the bytes yourself. Useful when your media already lives in a CDN or S3 bucket.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadCreateFromUrl();
  // TODO: Handle 'response' of type ApiV1UploadFromUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadCreateFromUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadCreateFromUrl().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadFromUrlResponse
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
| <code>body?</code> | <code>[ApiV1UploadFromUrlRequest](src/models/api-v1-upload-from-url-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadCreateFromUrl(request)`

- **OnSuccess**: <code>[ApiV1UploadFromUrlResponse](src/models/api-v1-upload-from-url-response.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadCreateFromUrlError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadCreateFromUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadFromUrlResponse, UploadApi.UploadCreateFromUrlError&gt;</code>, with `result.value` of type <code>[ApiV1UploadFromUrlResponse](src/models/api-v1-upload-from-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadDelete(request: UploadApi.UploadDeleteRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadResponse1, UploadApi.UploadDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a single media file from your library. Files still attached to scheduled posts should be replaced first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadDelete({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1UploadResponse1
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadDelete({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadResponse1
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadDelete(request)`

- **OnSuccess**: <code>[ApiV1UploadResponse1](src/models/api-v1-upload-response1.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadDeleteError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadResponse1, UploadApi.UploadDeleteError&gt;</code>, with `result.value` of type <code>[ApiV1UploadResponse1](src/models/api-v1-upload-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadDeleteMany(request?: UploadApi.UploadDeleteManyRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadResponse1[], UploadApi.UploadDeleteManyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete several media files in one request. Use it to clean up your library in bulk instead of calling delete per file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadDeleteMany();
  // TODO: Handle 'response' of type ApiV1UploadResponse1[]
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadDeleteManyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadDeleteMany().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadResponse1[]
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
| <code>body?</code> | <code>[ApiV1UploadRequest](src/models/api-v1-upload-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadDeleteMany(request)`

- **OnSuccess**: <code>[ApiV1UploadResponse1](src/models/api-v1-upload-response1.ts)[]</code>
- **OnError**: throws <code>[UploadApi.UploadDeleteManyError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadDeleteMany(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadResponse1[], UploadApi.UploadDeleteManyError&gt;</code>, with `result.value` of type <code>[ApiV1UploadResponse1](src/models/api-v1-upload-response1.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadFinalizeLargeUpload(request?: UploadApi.UploadFinalizeLargeUploadRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadFinalizeResponse, UploadApi.UploadFinalizeLargeUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finalize large upload.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadFinalizeLargeUpload();
  // TODO: Handle 'response' of type ApiV1UploadFinalizeResponse
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadFinalizeLargeUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadFinalizeLargeUpload().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadFinalizeResponse
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
| <code>body?</code> | <code>[ApiV1UploadFinalizeRequest](src/models/api-v1-upload-finalize-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadFinalizeLargeUpload(request)`

- **OnSuccess**: <code>[ApiV1UploadFinalizeResponse](src/models/api-v1-upload-finalize-response.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadFinalizeLargeUploadError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadFinalizeLargeUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadFinalizeResponse, UploadApi.UploadFinalizeLargeUploadError&gt;</code>, with `result.value` of type <code>[ApiV1UploadFinalizeResponse](src/models/api-v1-upload-finalize-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadGet(request: UploadApi.UploadGetRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadResponse, UploadApi.UploadGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single media file with its processing status, dimensions, duration, and the posts it is attached to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadGet({ id: "some example string" });
  // TODO: Handle 'response' of type ApiV1UploadResponse
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadGet({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadResponse
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
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadGet(request)`

- **OnSuccess**: <code>[ApiV1UploadResponse](src/models/api-v1-upload-response.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadGetError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadResponse, UploadApi.UploadGetError&gt;</code>, with `result.value` of type <code>[ApiV1UploadResponse](src/models/api-v1-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadGetList(request?: UploadApi.UploadGetListRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadResponse[], UploadApi.UploadGetListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the media files in your team's library, newest first. Each file carries `posts`, the links to the posts using it — pass `includePosts=false` to leave them out. Page with `limit` and `offset`. To check whether specific files already exist, filter by `ids` or `urls` instead of listing everything.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadGetList();
  // TODO: Handle 'response' of type ApiV1UploadResponse[]
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadGetListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadGetList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadResponse[]
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
| <code>teamId?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[TypeBundleSocialUploadApi](src/models/type-bundle-social-upload-api.ts)</code> | - |
| <code>types?</code> | <code>[TypeBundleSocialUploadApi](src/models/type-bundle-social-upload-api.ts)[]</code> | - |
| <code>status?</code> | <code>[StatusBundleSocialUploadApi](src/models/status-bundle-social-upload-api.ts)</code> | - |
| <code>ids?</code> | <code>string[]</code> | - |
| <code>urls?</code> | <code>string[]</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>includePosts?</code> | <code>[IncludePosts2](src/models/unions/include-posts2.ts)</code> | - |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadGetList(request)`

- **OnSuccess**: <code>[ApiV1UploadResponse](src/models/api-v1-upload-response.ts)[]</code>
- **OnError**: throws <code>[UploadApi.UploadGetListError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadGetList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadResponse[], UploadApi.UploadGetListError&gt;</code>, with `result.value` of type <code>[ApiV1UploadResponse](src/models/api-v1-upload-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadInitLargeUpload(request?: UploadApi.UploadInitLargeUploadRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadInitResponse, UploadApi.UploadInitLargeUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initialize large upload, you need to initialize a large upload if your file is larger than 90 MB.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadInitLargeUpload();
  // TODO: Handle 'response' of type ApiV1UploadInitResponse
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadInitLargeUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadInitLargeUpload().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadInitResponse
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
| <code>body?</code> | <code>[ApiV1UploadInitRequest](src/models/api-v1-upload-init-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadInitLargeUpload(request)`

- **OnSuccess**: <code>[ApiV1UploadInitResponse](src/models/api-v1-upload-init-response.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadInitLargeUploadError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadInitLargeUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadInitResponse, UploadApi.UploadInitLargeUploadError&gt;</code>, with `result.value` of type <code>[ApiV1UploadInitResponse](src/models/api-v1-upload-init-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadInitMultipartUpload(request?: UploadApi.UploadInitMultipartUploadRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadMultipartInitResponse, UploadApi.UploadInitMultipartUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a multipart upload. Required above the 5 GiB single-request storage limit that /upload/init is bound by, and allowed for any smaller file too. Returns an uploadId plus one presigned URL per part; PUT each part, keep the ETag response header, then call complete with the full part list. Parts are 64 MiB each except the last, up to 10000 parts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadInitMultipartUpload();
  // TODO: Handle 'response' of type ApiV1UploadMultipartInitResponse
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadInitMultipartUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadInitMultipartUpload().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadMultipartInitResponse
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
| <code>body?</code> | <code>[ApiV1UploadMultipartInitRequest](src/models/api-v1-upload-multipart-init-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadInitMultipartUpload(request)`

- **OnSuccess**: <code>[ApiV1UploadMultipartInitResponse](src/models/api-v1-upload-multipart-init-response.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadInitMultipartUploadError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadInitMultipartUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadMultipartInitResponse, UploadApi.UploadInitMultipartUploadError&gt;</code>, with `result.value` of type <code>[ApiV1UploadMultipartInitResponse](src/models/api-v1-upload-multipart-init-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadSignMultipartParts(request?: UploadApi.UploadSignMultipartPartsRequest, options?: RequestOptions): ApiPromise&lt;ApiV1UploadMultipartSignResponse, UploadApi.UploadSignMultipartPartsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issue fresh presigned URLs for parts whose original URLs expired mid-upload. Parts already uploaded keep their ETags — only re-upload the ones that failed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadApi.uploadSignMultipartParts();
  // TODO: Handle 'response' of type ApiV1UploadMultipartSignResponse
} catch (err) {
  // TODO: Handle 'err' of type UploadApi.UploadSignMultipartPartsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadApi.uploadSignMultipartParts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiV1UploadMultipartSignResponse
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
| <code>body?</code> | <code>[ApiV1UploadMultipartSignRequest](src/models/api-v1-upload-multipart-sign-request.ts)</code> | Body |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadApi.uploadSignMultipartParts(request)`

- **OnSuccess**: <code>[ApiV1UploadMultipartSignResponse](src/models/api-v1-upload-multipart-sign-response.ts)</code>
- **OnError**: throws <code>[UploadApi.UploadSignMultipartPartsError](src/resources/upload-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadApi.uploadSignMultipartParts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiV1UploadMultipartSignResponse, UploadApi.UploadSignMultipartPartsError&gt;</code>, with `result.value` of type <code>[ApiV1UploadMultipartSignResponse](src/models/api-v1-upload-multipart-sign-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BundleSocialError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

