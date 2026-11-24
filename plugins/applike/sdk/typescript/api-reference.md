# Reference

> Source: [ApplikeClient](src/client.ts)

## AppEvents

> Source: [AppEvents](src/resources/app-events.ts)

<details>
<summary><code>postAppEventBatch(request: AppEvents.PostAppEventBatchRequest, options?: RequestOptions): ApiPromise&lt;BatchErrorResponse[], AppEvents.PostAppEventBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends batches of batches of events where each inner batch is for a single app and user.
Follows a bulk processing paradigm where individual AppEventBatches in the InputBatch are processed
independently from each other. If an AppEventBatch fails to be processed, this does not affect the processing
of the other AppEventBatches in the InputBatch. For all AppEventBatches that fail an individual error status is
set for its batchId for the "207" status code. An individual AppEventBatch is processed "all or nothing".
After acceptance of a batch, there is delayed processing of it in subsequent components where additional validation happens.
This means that even though a batch was successfully accepted, not necessarily all events will pass processing.
This subsequent processing includes but is not limited to:
- deduplication
- additional semantic validation
- user identity resolution
User Identity is determined once for the whole batch for an app user combination, using the newest information which predates the newest event in the batch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appEvents.postAppEventBatch({
    body: [
      {
        batchId: "00000000-0000-0000-0000-000000000000",
        app: { storeId: "some example string" },
        user: { id: "some example string" },
        events: [{ unit: Unit.Count }],
      },
    ],
  });
  // TODO: Handle 'response' of type BatchErrorResponse[]
} catch (err) {
  // TODO: Handle 'err' of type AppEvents.PostAppEventBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appEvents
  .postAppEventBatch({
    body: [
      {
        batchId: "00000000-0000-0000-0000-000000000000",
        app: { storeId: "some example string" },
        user: { id: "some example string" },
        events: [{ unit: Unit.Count }],
      },
    ],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchErrorResponse[]
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
| <code>body</code> | <code>[AppEventBatch](src/models/app-event-batch.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appEvents.postAppEventBatch(request)`

- **OnSuccess**: <code>[BatchErrorResponse](src/models/batch-error-response.ts)[]</code>
- **OnError**: throws <code>[AppEvents.PostAppEventBatchError](src/resources/app-events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appEvents.postAppEventBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchErrorResponse[], AppEvents.PostAppEventBatchError&gt;</code>, with `result.value` of type <code>[BatchErrorResponse](src/models/batch-error-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AppPartnerConnectionApi

> Source: [AppPartnerConnectionApi](src/resources/app-partner-connection-api.ts)

<details>
<summary><code>getManagementV1AppByAppIdConnectionByPartnerId(request: AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdRequest, options?: RequestOptions): ApiPromise&lt;AppPartnerConnection, AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get data for existing app partner connection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appPartnerConnectionApi.getManagementV1AppByAppIdConnectionByPartnerId({
    appId: 1,
    partnerId: 1,
  });
  // TODO: Handle 'response' of type AppPartnerConnection
} catch (err) {
  // TODO: Handle 'err' of type AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appPartnerConnectionApi
  .getManagementV1AppByAppIdConnectionByPartnerId({ appId: 1, partnerId: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppPartnerConnection
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
| <code>appId</code> | <code>number</code> | justtrack's identifier for the app |
| <code>partnerId</code> | <code>number</code> | justtrack's identifier for the advertising partner |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appPartnerConnectionApi.getManagementV1AppByAppIdConnectionByPartnerId(request)`

- **OnSuccess**: <code>[AppPartnerConnection](src/models/app-partner-connection.ts)</code>
- **OnError**: throws <code>[AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdError](src/resources/app-partner-connection-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appPartnerConnectionApi.getManagementV1AppByAppIdConnectionByPartnerId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppPartnerConnection, AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdError&gt;</code>, with `result.value` of type <code>[AppPartnerConnection](src/models/app-partner-connection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putManagementV1AppByAppIdConnectionByPartnerId(request: AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdRequest, options?: RequestOptions): ApiPromise&lt;AppPartnerConnection, AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connect your app to a partner. If this app-partner connection already exists, update the connection details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appPartnerConnectionApi.putManagementV1AppByAppIdConnectionByPartnerId({
    appId: 1,
    partnerId: 1,
  });
  // TODO: Handle 'response' of type AppPartnerConnection
} catch (err) {
  // TODO: Handle 'err' of type AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appPartnerConnectionApi
  .putManagementV1AppByAppIdConnectionByPartnerId({ appId: 1, partnerId: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppPartnerConnection
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
| <code>appId</code> | <code>number</code> | justtrack's identifier for the app |
| <code>partnerId</code> | <code>number</code> | justtrack's identifier for the advertising partner |
| <code>body?</code> | <code>[AppPartnerConnection](src/models/app-partner-connection.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appPartnerConnectionApi.putManagementV1AppByAppIdConnectionByPartnerId(request)`

- **OnSuccess**: <code>[AppPartnerConnection](src/models/app-partner-connection.ts)</code>
- **OnError**: throws <code>[AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdError](src/resources/app-partner-connection-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appPartnerConnectionApi.putManagementV1AppByAppIdConnectionByPartnerId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppPartnerConnection, AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdError&gt;</code>, with `result.value` of type <code>[AppPartnerConnection](src/models/app-partner-connection.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Apps

> Source: [Apps](src/resources/apps.ts)

<details>
<summary><code>postManagementV1App(request?: Apps.PostManagementV1AppRequest, options?: RequestOptions): ApiPromise&lt;AppOutput, Apps.PostManagementV1AppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an app.

:::info

We validate the following constraints when creating an app:

- The bundle ID must be unique to your organization, though multiple apps within your organization can have the same bundle ID if the platform is different.
- A (bundle ID, platform) pair must be unique within your organization.
- A (name, platform) pair must be unique within your organization.
- The store ID must be unique across all organizations.

:::

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.postManagementV1App();
  // TODO: Handle 'response' of type AppOutput
} catch (err) {
  // TODO: Handle 'err' of type Apps.PostManagementV1AppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.postManagementV1App().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppOutput
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
| <code>body?</code> | <code>[CreateAppRequest](src/models/create-app-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.postManagementV1App(request)`

- **OnSuccess**: <code>[AppOutput](src/models/app-output.ts)</code>
- **OnError**: throws <code>[Apps.PostManagementV1AppError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.postManagementV1App(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppOutput, Apps.PostManagementV1AppError&gt;</code>, with `result.value` of type <code>[AppOutput](src/models/app-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postManagementV1Apps(request?: Apps.PostManagementV1AppsRequest, options?: RequestOptions): ApiPromise&lt;ListAppsResponse, Apps.PostManagementV1AppsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of your organization's apps.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.postManagementV1Apps();
  // TODO: Handle 'response' of type ListAppsResponse
} catch (err) {
  // TODO: Handle 'err' of type Apps.PostManagementV1AppsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.postManagementV1Apps().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAppsResponse
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
| <code>body?</code> | <code>[ListAppsRequest](src/models/list-apps-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.postManagementV1Apps(request)`

- **OnSuccess**: <code>[ListAppsResponse](src/models/list-apps-response.ts)</code>
- **OnError**: throws <code>[Apps.PostManagementV1AppsError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.postManagementV1Apps(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAppsResponse, Apps.PostManagementV1AppsError&gt;</code>, with `result.value` of type <code>[ListAppsResponse](src/models/list-apps-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Bids

> Source: [Bids](src/resources/bids.ts)

<details>
<summary><code>postManagementV1Bids(request?: Bids.PostManagementV1BidsRequest, options?: RequestOptions): ApiPromise&lt;ListBidsResponse, Bids.PostManagementV1BidsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides with the bids within justtrack. In addition, it exposes the status of the latest operation associated with the bid.
The following filter combinations are eligible:
- networkId + campaignId
- networkId + campaignId + countryCode
- networkId + campaignId + countryCode + sourceId
- networkId + adSetId
- networkId + adSetId + countryCode
- networkId + adSetId + countryCode + sourceId

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bids.postManagementV1Bids();
  // TODO: Handle 'response' of type ListBidsResponse
} catch (err) {
  // TODO: Handle 'err' of type Bids.PostManagementV1BidsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bids.postManagementV1Bids().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBidsResponse
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
| <code>body?</code> | <code>[ListBidsRequest](src/models/list-bids-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bids.postManagementV1Bids(request)`

- **OnSuccess**: <code>[ListBidsResponse](src/models/list-bids-response.ts)</code>
- **OnError**: throws <code>[Bids.PostManagementV1BidsError](src/resources/bids.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bids.postManagementV1Bids(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBidsResponse, Bids.PostManagementV1BidsError&gt;</code>, with `result.value` of type <code>[ListBidsResponse](src/models/list-bids-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postManagementV1BidsUpload(request?: Bids.PostManagementV1BidsUploadRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Bids.PostManagementV1BidsUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With this API you can upload a batch of bids, similar to the CSV upload. The same hierarchy, rules, and limitations apply.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bids.postManagementV1BidsUpload();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Bids.PostManagementV1BidsUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bids.postManagementV1BidsUpload().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
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
| <code>body?</code> | <code>[UploadBidInput](src/models/upload-bid-input.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bids.postManagementV1BidsUpload(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Bids.PostManagementV1BidsUploadError](src/resources/bids.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bids.postManagementV1BidsUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Bids.PostManagementV1BidsUploadError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](src/resources/campaigns.ts)

<details>
<summary><code>postManagementV1Campaign(request?: Campaigns.PostManagementV1CampaignRequest, options?: RequestOptions): ApiPromise&lt;CampaignOutput, Campaigns.PostManagementV1CampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Typically, we automatically track campaigns in justtrack when we receive the first click or impression. However, you can also use this API to create a campaign manually.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.postManagementV1Campaign();
  // TODO: Handle 'response' of type CampaignOutput
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.PostManagementV1CampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.postManagementV1Campaign().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignOutput
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
| <code>body?</code> | <code>[CreateCampaignRequest](src/models/create-campaign-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.postManagementV1Campaign(request)`

- **OnSuccess**: <code>[CampaignOutput](src/models/campaign-output.ts)</code>
- **OnError**: throws <code>[Campaigns.PostManagementV1CampaignError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.postManagementV1Campaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignOutput, Campaigns.PostManagementV1CampaignError&gt;</code>, with `result.value` of type <code>[CampaignOutput](src/models/campaign-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postManagementV1Campaigns(request?: Campaigns.PostManagementV1CampaignsRequest, options?: RequestOptions): ApiPromise&lt;CampaignOutput, Campaigns.PostManagementV1CampaignsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of campaigns for your organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.postManagementV1Campaigns();
  // TODO: Handle 'response' of type CampaignOutput
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.PostManagementV1CampaignsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.postManagementV1Campaigns().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignOutput
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
| <code>body?</code> | <code>[ListCampaignsRequest](src/models/list-campaigns-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.postManagementV1Campaigns(request)`

- **OnSuccess**: <code>[CampaignOutput](src/models/campaign-output.ts)</code>
- **OnError**: throws <code>[Campaigns.PostManagementV1CampaignsError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.postManagementV1Campaigns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignOutput, Campaigns.PostManagementV1CampaignsError&gt;</code>, with `result.value` of type <code>[CampaignOutput](src/models/campaign-output.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerConfigurations

> Source: [PartnerConfigurations](src/resources/partner-configurations.ts)

<details>
<summary><code>postManagementV1PartnerConfigurationByFeature(request: PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureRequest, options?: RequestOptions): ApiPromise&lt;ListPartnerConfigurationFeaturesResponse, PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of configured features for a given app and partner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerConfigurations.postManagementV1PartnerConfigurationByFeature({
    feature: "some example string",
  });
  // TODO: Handle 'response' of type ListPartnerConfigurationFeaturesResponse
} catch (err) {
  // TODO: Handle 'err' of type PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerConfigurations
  .postManagementV1PartnerConfigurationByFeature({ feature: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPartnerConfigurationFeaturesResponse
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
| <code>feature</code> | <code>string</code> | - |
| <code>body?</code> | <code>[ListPartnerConfigurationFeaturesRequest](src/models/list-partner-configuration-features-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerConfigurations.postManagementV1PartnerConfigurationByFeature(request)`

- **OnSuccess**: <code>[ListPartnerConfigurationFeaturesResponse](src/models/list-partner-configuration-features-response.ts)</code>
- **OnError**: throws <code>[PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureError](src/resources/partner-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerConfigurations.postManagementV1PartnerConfigurationByFeature(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPartnerConfigurationFeaturesResponse, PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureError&gt;</code>, with `result.value` of type <code>[ListPartnerConfigurationFeaturesResponse](src/models/list-partner-configuration-features-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postManagementV1PartnerConfigurations(request?: PartnerConfigurations.PostManagementV1PartnerConfigurationsRequest, options?: RequestOptions): ApiPromise&lt;ListPartnerConfigurationsResponse, PartnerConfigurations.PostManagementV1PartnerConfigurationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of keys used to configure features for the partners that are available to your organization. You configure the values for each of these keys with the Update configurations API.

:::warning

When you configure a partner feature, you must provide values for all keys associated with that feature from this API. Without them, justtrack wouldn't be able to successfully operate or integrate with the partner.

:::

A configuration key may appear for multiple features. **You must provide a value for each feature.**

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerConfigurations.postManagementV1PartnerConfigurations();
  // TODO: Handle 'response' of type ListPartnerConfigurationsResponse
} catch (err) {
  // TODO: Handle 'err' of type PartnerConfigurations.PostManagementV1PartnerConfigurationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerConfigurations.postManagementV1PartnerConfigurations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPartnerConfigurationsResponse
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
| <code>body?</code> | <code>[ListPartnerConfigurationsRequest](src/models/list-partner-configurations-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerConfigurations.postManagementV1PartnerConfigurations(request)`

- **OnSuccess**: <code>[ListPartnerConfigurationsResponse](src/models/list-partner-configurations-response.ts)</code>
- **OnError**: throws <code>[PartnerConfigurations.PostManagementV1PartnerConfigurationsError](src/resources/partner-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerConfigurations.postManagementV1PartnerConfigurations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPartnerConfigurationsResponse, PartnerConfigurations.PostManagementV1PartnerConfigurationsError&gt;</code>, with `result.value` of type <code>[ListPartnerConfigurationsResponse](src/models/list-partner-configurations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putManagementV1PartnerConfigurationByFeature(request: PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureRequest, options?: RequestOptions): ApiPromise&lt;PartnerConfigurationFeatureOutput[], PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configure a feature for a given app and partner.

:::warning

You must provide values for all keys listed by List partner configurations.

:::

:::info

For attribution viewEventTimeFrame and clickEventTimeFrame, use ISO8601 duration-only format, i.e. `P1DT0H0M`

:::

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerConfigurations.putManagementV1PartnerConfigurationByFeature({
    feature: "some example string",
  });
  // TODO: Handle 'response' of type PartnerConfigurationFeatureOutput[]
} catch (err) {
  // TODO: Handle 'err' of type PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerConfigurations
  .putManagementV1PartnerConfigurationByFeature({ feature: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerConfigurationFeatureOutput[]
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
| <code>feature</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UpsertPartnerConfigurationFeaturesRequest](src/models/upsert-partner-configuration-features-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerConfigurations.putManagementV1PartnerConfigurationByFeature(request)`

- **OnSuccess**: <code>[PartnerConfigurationFeatureOutput](src/models/partner-configuration-feature-output.ts)[]</code>
- **OnError**: throws <code>[PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureError](src/resources/partner-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerConfigurations.putManagementV1PartnerConfigurationByFeature(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerConfigurationFeatureOutput[], PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureError&gt;</code>, with `result.value` of type <code>[PartnerConfigurationFeatureOutput](src/models/partner-configuration-feature-output.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Partners

> Source: [Partners](src/resources/partners.ts)

<details>
<summary><code>postManagementV1Partners(request?: Partners.PostManagementV1PartnersRequest, options?: RequestOptions): ApiPromise&lt;ListPartnersResponse, Partners.PostManagementV1PartnersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of partners available to your organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partners.postManagementV1Partners();
  // TODO: Handle 'response' of type ListPartnersResponse
} catch (err) {
  // TODO: Handle 'err' of type Partners.PostManagementV1PartnersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partners.postManagementV1Partners().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPartnersResponse
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
| <code>body?</code> | <code>[ListPartnersRequest](src/models/list-partners-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partners.postManagementV1Partners(request)`

- **OnSuccess**: <code>[ListPartnersResponse](src/models/list-partners-response.ts)</code>
- **OnError**: throws <code>[Partners.PostManagementV1PartnersError](src/resources/partners.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partners.postManagementV1Partners(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPartnersResponse, Partners.PostManagementV1PartnersError&gt;</code>, with `result.value` of type <code>[ListPartnersResponse](src/models/list-partners-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApplikeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

