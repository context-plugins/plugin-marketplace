# Reference

> Source: [FacebookBusinessManagerClient](src/client.ts)

## AdAccounts

> Source: [AdAccounts](src/resources/ad-accounts.ts)

<details>
<summary><code>getAdAccount(request: AdAccounts.GetAdAccountRequest, options?: RequestOptions): ApiPromise&lt;AdAccount, AdAccounts.GetAdAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific ad account including settings, spend limits, and status information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adAccounts.getAdAccount({ adAccountId: "some example string" });
  // TODO: Handle 'response' of type AdAccount
} catch (err) {
  // TODO: Handle 'err' of type AdAccounts.GetAdAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adAccounts.getAdAccount({ adAccountId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdAccount
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adAccounts.getAdAccount(request)`

- **OnSuccess**: <code>[AdAccount](src/models/ad-account.ts)</code>
- **OnError**: throws <code>[AdAccounts.GetAdAccountError](src/resources/ad-accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adAccounts.getAdAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdAccount, AdAccounts.GetAdAccountError&gt;</code>, with `result.value` of type <code>[AdAccount](src/models/ad-account.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdCreatives

> Source: [AdCreatives](src/resources/ad-creatives.ts)

<details>
<summary><code>createAdCreative(request: AdCreatives.CreateAdCreativeRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, AdCreatives.CreateAdCreativeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ad creative with image, video, copy, and call-to-action configurations for use in ads.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adCreatives.createAdCreative({
    adAccountId: "some example string",
    body: { name: "some example string", objectStorySpec: {} },
  });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type AdCreatives.CreateAdCreativeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adCreatives
  .createAdCreative({
    adAccountId: "some example string",
    body: { name: "some example string", objectStorySpec: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[AdCreativeCreate](src/models/ad-creative-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adCreatives.createAdCreative(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[AdCreatives.CreateAdCreativeError](src/resources/ad-creatives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adCreatives.createAdCreative(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, AdCreatives.CreateAdCreativeError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAdCreatives(request: AdCreatives.ListAdCreativesRequest, options?: RequestOptions): ApiPromise&lt;AdCreativeList, AdCreatives.ListAdCreativesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all ad creatives for the specified ad account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adCreatives.listAdCreatives({ adAccountId: "some example string" });
  // TODO: Handle 'response' of type AdCreativeList
} catch (err) {
  // TODO: Handle 'err' of type AdCreatives.ListAdCreativesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adCreatives.listAdCreatives({ adAccountId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdCreativeList
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |
| <code>limit?</code> | <code>number</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: 25 |
| <code>after?</code> | <code>string</code> | Cursor for pagination to retrieve the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adCreatives.listAdCreatives(request)`

- **OnSuccess**: <code>[AdCreativeList](src/models/ad-creative-list.ts)</code>
- **OnError**: throws <code>[AdCreatives.ListAdCreativesError](src/resources/ad-creatives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adCreatives.listAdCreatives(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdCreativeList, AdCreatives.ListAdCreativesError&gt;</code>, with `result.value` of type <code>[AdCreativeList](src/models/ad-creative-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdImages

> Source: [AdImages](src/resources/ad-images.ts)

<details>
<summary><code>uploadAdImage(request: AdImages.UploadAdImageRequest, options?: RequestOptions): ApiPromise&lt;ActAdimagesResponse, AdImages.UploadAdImageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads an image to the ad account image library for use in ad creatives. Accepts image file bytes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adImages.uploadAdImage({ adAccountId: "some example string" });
  // TODO: Handle 'response' of type ActAdimagesResponse
} catch (err) {
  // TODO: Handle 'err' of type AdImages.UploadAdImageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adImages.uploadAdImage({ adAccountId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActAdimagesResponse
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>filename?</code> | <code>FileInput</code> | The image file to upload |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adImages.uploadAdImage(request)`

- **OnSuccess**: <code>[ActAdimagesResponse](src/models/act-adimages-response.ts)</code>
- **OnError**: throws <code>[AdImages.UploadAdImageError](src/resources/ad-images.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adImages.uploadAdImage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActAdimagesResponse, AdImages.UploadAdImageError&gt;</code>, with `result.value` of type <code>[ActAdimagesResponse](src/models/act-adimages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdSets

> Source: [AdSets](src/resources/ad-sets.ts)

<details>
<summary><code>createAdSet(request: AdSets.CreateAdSetRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, AdSets.CreateAdSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ad set within a campaign. Defines targeting, budget, schedule, optimization goal, and bid strategy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adSets.createAdSet({
    adAccountId: "some example string",
    body: {
      name: "some example string",
      campaignId: "some example string",
      optimizationGoal: OptimizationGoal1.LinkClicks,
      billingEvent: BillingEvent1.Impressions,
      targeting: {},
      status: Status1.Active,
    },
  });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type AdSets.CreateAdSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adSets
  .createAdSet({
    adAccountId: "some example string",
    body: {
      name: "some example string",
      campaignId: "some example string",
      optimizationGoal: OptimizationGoal1.LinkClicks,
      billingEvent: BillingEvent1.Impressions,
      targeting: {},
      status: Status1.Active,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[AdSetCreate](src/models/ad-set-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adSets.createAdSet(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[AdSets.CreateAdSetError](src/resources/ad-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adSets.createAdSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, AdSets.CreateAdSetError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAdSet(request: AdSets.GetAdSetRequest, options?: RequestOptions): ApiPromise&lt;AdSet, AdSets.GetAdSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific ad set including targeting, budget, scheduling, and optimization settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adSets.getAdSet({ adSetId: "some example string" });
  // TODO: Handle 'response' of type AdSet
} catch (err) {
  // TODO: Handle 'err' of type AdSets.GetAdSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adSets.getAdSet({ adSetId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdSet
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
| <code>adSetId</code> | <code>string</code> | The ID of the ad set |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adSets.getAdSet(request)`

- **OnSuccess**: <code>[AdSet](src/models/ad-set.ts)</code>
- **OnError**: throws <code>[AdSets.GetAdSetError](src/resources/ad-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adSets.getAdSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdSet, AdSets.GetAdSetError&gt;</code>, with `result.value` of type <code>[AdSet](src/models/ad-set.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAdSets(request: AdSets.ListAdSetsRequest, options?: RequestOptions): ApiPromise&lt;AdSetList, AdSets.ListAdSetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all ad sets for the specified ad account. Returns targeting, budget, scheduling, and optimization configurations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adSets.listAdSets({ adAccountId: "some example string" });
  // TODO: Handle 'response' of type AdSetList
} catch (err) {
  // TODO: Handle 'err' of type AdSets.ListAdSetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adSets.listAdSets({ adAccountId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdSetList
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |
| <code>limit?</code> | <code>number</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: 25 |
| <code>after?</code> | <code>string</code> | Cursor for pagination to retrieve the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adSets.listAdSets(request)`

- **OnSuccess**: <code>[AdSetList](src/models/ad-set-list.ts)</code>
- **OnError**: throws <code>[AdSets.ListAdSetsError](src/resources/ad-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adSets.listAdSets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdSetList, AdSets.ListAdSetsError&gt;</code>, with `result.value` of type <code>[AdSetList](src/models/ad-set-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAdSet(request: AdSets.UpdateAdSetRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, AdSets.UpdateAdSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing ad set. Supports modifying targeting, budget, schedule, and optimization settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adSets.updateAdSet({ adSetId: "some example string", body: {} });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type AdSets.UpdateAdSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adSets.updateAdSet({ adSetId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>adSetId</code> | <code>string</code> | The ID of the ad set |
| <code>body</code> | <code>[AdSetUpdate](src/models/ad-set-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adSets.updateAdSet(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[AdSets.UpdateAdSetError](src/resources/ad-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adSets.updateAdSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, AdSets.UpdateAdSetError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Ads

> Source: [Ads](src/resources/ads.ts)

<details>
<summary><code>createAd(request: Ads.CreateAdRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, Ads.CreateAdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ad within an ad set. Associates an ad creative with targeting and delivery settings defined at the ad set level.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ads.createAd({
    adAccountId: "some example string",
    body: {
      name: "some example string",
      adsetId: "some example string",
      creative: { creativeId: "some example string" },
      status: StatusFacebookBusinessManagerFacebookMarketingAdsApi.Active,
    },
  });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Ads.CreateAdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ads
  .createAd({
    adAccountId: "some example string",
    body: {
      name: "some example string",
      adsetId: "some example string",
      creative: { creativeId: "some example string" },
      status: StatusFacebookBusinessManagerFacebookMarketingAdsApi.Active,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[AdCreate](src/models/ad-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ads.createAd(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[Ads.CreateAdError](src/resources/ads.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ads.createAd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, Ads.CreateAdError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAd(request: Ads.GetAdRequest, options?: RequestOptions): ApiPromise&lt;Ad, Ads.GetAdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific ad including its creative, status, and configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ads.getAd({ adId: "some example string" });
  // TODO: Handle 'response' of type Ad
} catch (err) {
  // TODO: Handle 'err' of type Ads.GetAdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ads.getAd({ adId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Ad
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
| <code>adId</code> | <code>string</code> | The ID of the ad |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ads.getAd(request)`

- **OnSuccess**: <code>[Ad](src/models/ad.ts)</code>
- **OnError**: throws <code>[Ads.GetAdError](src/resources/ads.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ads.getAd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Ad, Ads.GetAdError&gt;</code>, with `result.value` of type <code>[Ad](src/models/ad.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAds(request: Ads.ListAdsRequest, options?: RequestOptions): ApiPromise&lt;AdList, Ads.ListAdsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all ads for the specified ad account. Returns ad configurations including creative associations and status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ads.listAds({ adAccountId: "some example string" });
  // TODO: Handle 'response' of type AdList
} catch (err) {
  // TODO: Handle 'err' of type Ads.ListAdsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ads.listAds({ adAccountId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdList
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |
| <code>limit?</code> | <code>number</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: 25 |
| <code>after?</code> | <code>string</code> | Cursor for pagination to retrieve the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ads.listAds(request)`

- **OnSuccess**: <code>[AdList](src/models/ad-list.ts)</code>
- **OnError**: throws <code>[Ads.ListAdsError](src/resources/ads.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.ads.listAds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdList, Ads.ListAdsError&gt;</code>, with `result.value` of type <code>[AdList](src/models/ad-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](src/resources/campaigns.ts)

<details>
<summary><code>createCampaign(request: Campaigns.CreateCampaignRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, Campaigns.CreateCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new advertising campaign in the specified ad account. Requires at minimum a name, objective, and status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.createCampaign({
    adAccountId: "some example string",
    body: {
      name: "some example string",
      objective: Objective.OutcomeAwareness,
      status: Status2.Active,
      specialAdCategories: ["some example string"],
    },
  });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.CreateCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns
  .createCampaign({
    adAccountId: "some example string",
    body: {
      name: "some example string",
      objective: Objective.OutcomeAwareness,
      status: Status2.Active,
      specialAdCategories: ["some example string"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[CampaignCreate](src/models/campaign-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.createCampaign(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[Campaigns.CreateCampaignError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.createCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, Campaigns.CreateCampaignError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCampaign(request: Campaigns.DeleteCampaignRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, Campaigns.DeleteCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an advertising campaign. This sets the campaign status to DELETED and it will no longer serve ads.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.deleteCampaign({ campaignId: "some example string" });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.DeleteCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.deleteCampaign({ campaignId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>campaignId</code> | <code>string</code> | The ID of the campaign |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.deleteCampaign(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[Campaigns.DeleteCampaignError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.deleteCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, Campaigns.DeleteCampaignError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaign(request: Campaigns.GetCampaignRequest, options?: RequestOptions): ApiPromise&lt;Campaign, Campaigns.GetCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific campaign by its ID, including configuration, status, and objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.getCampaign({ campaignId: "some example string" });
  // TODO: Handle 'response' of type Campaign
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.GetCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.getCampaign({ campaignId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Campaign
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
| <code>campaignId</code> | <code>string</code> | The ID of the campaign |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.getCampaign(request)`

- **OnSuccess**: <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: throws <code>[Campaigns.GetCampaignError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.getCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Campaign, Campaigns.GetCampaignError&gt;</code>, with `result.value` of type <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCampaigns(request: Campaigns.ListCampaignsRequest, options?: RequestOptions): ApiPromise&lt;CampaignList, Campaigns.ListCampaignsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all campaigns for the specified ad account. Returns a paginated list of campaign objects with their configurations and status information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.listCampaigns({ adAccountId: "some example string" });
  // TODO: Handle 'response' of type CampaignList
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.ListCampaignsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns.listCampaigns({ adAccountId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CampaignList
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |
| <code>limit?</code> | <code>number</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: 25 |
| <code>after?</code> | <code>string</code> | Cursor for pagination to retrieve the next page of results |
| <code>filtering?</code> | <code>string</code> | Filters to apply to the campaign list. Accepts JSON array of filter objects with field, operator, and value. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.listCampaigns(request)`

- **OnSuccess**: <code>[CampaignList](src/models/campaign-list.ts)</code>
- **OnError**: throws <code>[Campaigns.ListCampaignsError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.listCampaigns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CampaignList, Campaigns.ListCampaignsError&gt;</code>, with `result.value` of type <code>[CampaignList](src/models/campaign-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCampaign(request: Campaigns.UpdateCampaignRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, Campaigns.UpdateCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing campaign. Supports modifying name, status, budget, and other campaign-level settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaigns.updateCampaign({ campaignId: "some example string", body: {} });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type Campaigns.UpdateCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaigns
  .updateCampaign({ campaignId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
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
| <code>campaignId</code> | <code>string</code> | The ID of the campaign |
| <code>body</code> | <code>[CampaignUpdate](src/models/campaign-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaigns.updateCampaign(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[Campaigns.UpdateCampaignError](src/resources/campaigns.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaigns.updateCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, Campaigns.UpdateCampaignError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CommentsApi

> Source: [CommentsApi](src/resources/comments-api.ts)

<details>
<summary><code>createComment(request: CommentsApi.CreateCommentRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, CommentsApi.CreateCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Posts a comment on a Page post as the Page. Requires a page access token with pages_manage_engagement permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentsApi.createComment({
    postId: "some example string",
    body: { message: "some example string" },
  });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type CommentsApi.CreateCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentsApi
  .createComment({ postId: "some example string", body: { message: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
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
| <code>postId</code> | <code>string</code> | The ID of the post (format PAGE_ID_POST_ID) |
| <code>body</code> | <code>[CommentsRequest](src/models/comments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentsApi.createComment(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[CommentsApi.CreateCommentError](src/resources/comments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentsApi.createComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, CommentsApi.CreateCommentError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteComment(request: CommentsApi.DeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, CommentsApi.DeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a comment from a Page post. The Page must own the comment or the post the comment is on.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentsApi.deleteComment({ commentId: "some example string" });
  // TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
} catch (err) {
  // TODO: Handle 'err' of type CommentsApi.DeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentsApi.deleteComment({ commentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
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
| <code>commentId</code> | <code>string</code> | The ID of the comment to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentsApi.deleteComment(request)`

- **OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts)</code>
- **OnError**: throws <code>[CommentsApi.DeleteCommentError](src/resources/comments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentsApi.deleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, CommentsApi.DeleteCommentError&gt;</code>, with `result.value` of type <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPostComments(request: CommentsApi.GetPostCommentsRequest, options?: RequestOptions): ApiPromise&lt;CommentList, CommentsApi.GetPostCommentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves comments on a specific post. Supports pagination and filtering by order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.commentsApi.getPostComments({ postId: "some example string" });
  // TODO: Handle 'response' of type CommentList
} catch (err) {
  // TODO: Handle 'err' of type CommentsApi.GetPostCommentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.commentsApi.getPostComments({ postId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommentList
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
| <code>postId</code> | <code>string</code> | The ID of the post (format PAGE_ID_POST_ID) |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | Maximum number of objects to return per page<br>**Default**: 25 |
| <code>after?</code> | <code>string</code> | Cursor for forward pagination |
| <code>filter?</code> | <code>[Filter](src/models/filter.ts)</code> | Filter for comment type |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Order of comments |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.commentsApi.getPostComments(request)`

- **OnSuccess**: <code>[CommentList](src/models/comment-list.ts)</code>
- **OnError**: throws <code>[CommentsApi.GetPostCommentsError](src/resources/comments-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.commentsApi.getPostComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommentList, CommentsApi.GetPostCommentsError&gt;</code>, with `result.value` of type <code>[CommentList](src/models/comment-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomAudiences

> Source: [CustomAudiences](src/resources/custom-audiences.ts)

<details>
<summary><code>createCustomAudience(request: CustomAudiences.CreateCustomAudienceRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, CustomAudiences.CreateCustomAudienceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom audience for ad targeting. Supports customer file audiences, website custom audiences, app activity audiences, and lookalike audiences.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customAudiences.createCustomAudience({
    adAccountId: "some example string",
    body: { name: "some example string", subtype: Subtype1.Custom },
  });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomAudiences.CreateCustomAudienceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customAudiences
  .createCustomAudience({
    adAccountId: "some example string",
    body: { name: "some example string", subtype: Subtype1.Custom },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>body</code> | <code>[CustomAudienceCreate](src/models/custom-audience-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customAudiences.createCustomAudience(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[CustomAudiences.CreateCustomAudienceError](src/resources/custom-audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customAudiences.createCustomAudience(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, CustomAudiences.CreateCustomAudienceError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomAudiences(request: CustomAudiences.ListCustomAudiencesRequest, options?: RequestOptions): ApiPromise&lt;CustomAudienceList, CustomAudiences.ListCustomAudiencesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all custom audiences for the specified ad account. Returns audience configurations and approximate sizes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customAudiences.listCustomAudiences({ adAccountId: "some example string" });
  // TODO: Handle 'response' of type CustomAudienceList
} catch (err) {
  // TODO: Handle 'err' of type CustomAudiences.ListCustomAudiencesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customAudiences
  .listCustomAudiences({ adAccountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomAudienceList
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |
| <code>limit?</code> | <code>number</code> | Maximum number of objects to return per page. Default is 25.<br>**Default**: 25 |
| <code>after?</code> | <code>string</code> | Cursor for pagination to retrieve the next page of results |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customAudiences.listCustomAudiences(request)`

- **OnSuccess**: <code>[CustomAudienceList](src/models/custom-audience-list.ts)</code>
- **OnError**: throws <code>[CustomAudiences.ListCustomAudiencesError](src/resources/custom-audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customAudiences.listCustomAudiences(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomAudienceList, CustomAudiences.ListCustomAudiencesError&gt;</code>, with `result.value` of type <code>[CustomAudienceList](src/models/custom-audience-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/resources/insights.ts)

<details>
<summary><code>getAdAccountInsights(request: Insights.GetAdAccountInsightsRequest, options?: RequestOptions): ApiPromise&lt;InsightsResponse, Insights.GetAdAccountInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves performance insights and analytics for the specified ad account. Supports date range filtering, breakdowns, and action breakdowns.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getAdAccountInsights({ adAccountId: "some example string" });
  // TODO: Handle 'response' of type InsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetAdAccountInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getAdAccountInsights({ adAccountId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsResponse
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
| <code>adAccountId</code> | <code>string</code> | The ID of the ad account (numeric, without the act_ prefix) |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |
| <code>timeRange?</code> | <code>string</code> | JSON object specifying the date range with since and until fields in YYYY-MM-DD format. |
| <code>breakdowns?</code> | <code>string</code> | Comma-separated list of breakdown dimensions such as age, gender, country, or placement. |
| <code>level?</code> | <code>[Level](src/models/level.ts)</code> | Level of aggregation for results. Options include account, campaign, adset, or ad. |
| <code>timeIncrement?</code> | <code>string</code> | Number of days for each increment in the time range, or use monthly or all_days. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getAdAccountInsights(request)`

- **OnSuccess**: <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: throws <code>[Insights.GetAdAccountInsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getAdAccountInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsResponse, Insights.GetAdAccountInsightsError&gt;</code>, with `result.value` of type <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaignInsights(request: Insights.GetCampaignInsightsRequest, options?: RequestOptions): ApiPromise&lt;InsightsResponse, Insights.GetCampaignInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves performance insights for a specific campaign including impressions, clicks, spend, and conversion metrics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getCampaignInsights({ campaignId: "some example string" });
  // TODO: Handle 'response' of type InsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type Insights.GetCampaignInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights.getCampaignInsights({ campaignId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsResponse
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
| <code>campaignId</code> | <code>string</code> | The ID of the campaign |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response. If omitted, default fields are returned. |
| <code>timeRange?</code> | <code>string</code> | JSON object specifying the date range with since and until fields in YYYY-MM-DD format. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getCampaignInsights(request)`

- **OnSuccess**: <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: throws <code>[Insights.GetCampaignInsightsError](src/resources/insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.insights.getCampaignInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsResponse, Insights.GetCampaignInsightsError&gt;</code>, with `result.value` of type <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PageInsights

> Source: [PageInsights](src/resources/page-insights.ts)

<details>
<summary><code>getPageInsights(request: PageInsights.GetPageInsightsRequest, options?: RequestOptions): ApiPromise&lt;PageInsightsResponse, PageInsights.GetPageInsightsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves analytics metrics for the Facebook Page including reach, impressions, engagement, and audience demographics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pageInsights.getPageInsights({
    pageId: "some example string",
    metric: "some example string",
  });
  // TODO: Handle 'response' of type PageInsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type PageInsights.GetPageInsightsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pageInsights
  .getPageInsights({ pageId: "some example string", metric: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PageInsightsResponse
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
| <code>pageId</code> | <code>string</code> | The ID of the Facebook Page |
| <code>metric</code> | <code>string</code> | Comma-separated list of metrics to retrieve such as page_impressions, page_engaged_users, page_fans. |
| <code>period?</code> | <code>[Period](src/models/period.ts)</code> | Aggregation period for the metrics |
| <code>since?</code> | <code>string</code> | Start of the date range in Unix timestamp or YYYY-MM-DD format |
| <code>until?</code> | <code>string</code> | End of the date range in Unix timestamp or YYYY-MM-DD format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pageInsights.getPageInsights(request)`

- **OnSuccess**: <code>[PageInsightsResponse](src/models/page-insights-response.ts)</code>
- **OnError**: throws <code>[PageInsights.GetPageInsightsError](src/resources/page-insights.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pageInsights.getPageInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PageInsightsResponse, PageInsights.GetPageInsightsError&gt;</code>, with `result.value` of type <code>[PageInsightsResponse](src/models/page-insights-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pages

> Source: [Pages](src/resources/pages.ts)

<details>
<summary><code>getPage(request: Pages.GetPageRequest, options?: RequestOptions): ApiPromise&lt;Page, Pages.GetPageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about a Facebook Page including name, category, description, fan count, and other metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pages.getPage({ pageId: "some example string" });
  // TODO: Handle 'response' of type Page
} catch (err) {
  // TODO: Handle 'err' of type Pages.GetPageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pages.getPage({ pageId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Page
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
| <code>pageId</code> | <code>string</code> | The ID of the Facebook Page |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pages.getPage(request)`

- **OnSuccess**: <code>[Page](src/models/page.ts)</code>
- **OnError**: throws <code>[Pages.GetPageError](src/resources/pages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pages.getPage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Page, Pages.GetPageError&gt;</code>, with `result.value` of type <code>[Page](src/models/page.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subscribePageApp(request: Pages.SubscribePageAppRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Pages.SubscribePageAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Installs a Webhooks-configured app on the Page so the app can receive real-time updates about changes to the Page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pages.subscribePageApp({
    pageId: "some example string",
    body: { subscribedFields: ["some example string"] },
  });
  // TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
} catch (err) {
  // TODO: Handle 'err' of type Pages.SubscribePageAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pages
  .subscribePageApp({ pageId: "some example string", body: { subscribedFields: ["some example string"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
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
| <code>pageId</code> | <code>string</code> | The ID of the Facebook Page |
| <code>body</code> | <code>[SubscribedAppsRequest](src/models/subscribed-apps-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pages.subscribePageApp(request)`

- **OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts)</code>
- **OnError**: throws <code>[Pages.SubscribePageAppError](src/resources/pages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pages.subscribePageApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Pages.SubscribePageAppError&gt;</code>, with `result.value` of type <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Photos

> Source: [Photos](src/resources/photos.ts)

<details>
<summary><code>uploadPagePhoto(request: Photos.UploadPagePhotoRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, Photos.UploadPagePhotoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a photo to the Facebook Page. Can be published directly or uploaded as unpublished for later use in posts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.photos.uploadPagePhoto({ pageId: "some example string", body: {} });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Photos.UploadPagePhotoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.photos.uploadPagePhoto({ pageId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
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
| <code>pageId</code> | <code>string</code> | The ID of the Facebook Page |
| <code>body</code> | <code>[PhotosRequest](src/models/photos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.photos.uploadPagePhoto(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[Photos.UploadPagePhotoError](src/resources/photos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.photos.uploadPagePhoto(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, Photos.UploadPagePhotoError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Posts

> Source: [Posts](src/resources/posts.ts)

<details>
<summary><code>createPagePost(request: Posts.CreatePagePostRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, Posts.CreatePagePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes a new post to the Facebook Page feed. Supports text posts, link shares, and scheduled posts. Requires a page access token with pages_manage_posts permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.createPagePost({ pageId: "some example string", body: {} });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Posts.CreatePagePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.createPagePost({ pageId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
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
| <code>pageId</code> | <code>string</code> | The ID of the Facebook Page |
| <code>body</code> | <code>[PostCreate](src/models/post-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.createPagePost(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[Posts.CreatePagePostError](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.createPagePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, Posts.CreatePagePostError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePost(request: Posts.DeletePostRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Posts.DeletePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a post from the Facebook Page. This action cannot be undone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.deletePost({ postId: "some example string" });
  // TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
} catch (err) {
  // TODO: Handle 'err' of type Posts.DeletePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.deletePost({ postId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
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
| <code>postId</code> | <code>string</code> | The ID of the post (format PAGE_ID_POST_ID) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.deletePost(request)`

- **OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts)</code>
- **OnError**: throws <code>[Posts.DeletePostError](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.deletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Posts.DeletePostError&gt;</code>, with `result.value` of type <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPageFeed(request: Posts.GetPageFeedRequest, options?: RequestOptions): ApiPromise&lt;PostList, Posts.GetPageFeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the feed of posts on a Facebook Page. Includes posts published by the page and posts by visitors if allowed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.getPageFeed({ pageId: "some example string" });
  // TODO: Handle 'response' of type PostList
} catch (err) {
  // TODO: Handle 'err' of type Posts.GetPageFeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.getPageFeed({ pageId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostList
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
| <code>pageId</code> | <code>string</code> | The ID of the Facebook Page |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |
| <code>limit?</code> | <code>number</code> | Maximum number of objects to return per page<br>**Default**: 25 |
| <code>after?</code> | <code>string</code> | Cursor for forward pagination |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.getPageFeed(request)`

- **OnSuccess**: <code>[PostList](src/models/post-list.ts)</code>
- **OnError**: throws <code>[Posts.GetPageFeedError](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.getPageFeed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostList, Posts.GetPageFeedError&gt;</code>, with `result.value` of type <code>[PostList](src/models/post-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPost(request: Posts.GetPostRequest, options?: RequestOptions): ApiPromise&lt;Post, Posts.GetPostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific post including message, attachments, reactions, and engagement counts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.getPost({ postId: "some example string" });
  // TODO: Handle 'response' of type Post
} catch (err) {
  // TODO: Handle 'err' of type Posts.GetPostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.getPost({ postId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Post
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
| <code>postId</code> | <code>string</code> | The ID of the post (format PAGE_ID_POST_ID) |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to include in the response |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.getPost(request)`

- **OnSuccess**: <code>[Post](src/models/post.ts)</code>
- **OnError**: throws <code>[Posts.GetPostError](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.getPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Post, Posts.GetPostError&gt;</code>, with `result.value` of type <code>[Post](src/models/post.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePost(request: Posts.UpdatePostRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Posts.UpdatePostError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing post on the Page. Only the message field can be updated after publishing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.updatePost({ postId: "some example string", body: {} });
  // TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
} catch (err) {
  // TODO: Handle 'err' of type Posts.UpdatePostError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.updatePost({ postId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
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
| <code>postId</code> | <code>string</code> | The ID of the post (format PAGE_ID_POST_ID) |
| <code>body</code> | <code>[Request](src/models/request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.updatePost(request)`

- **OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts)</code>
- **OnError**: throws <code>[Posts.UpdatePostError](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.updatePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Posts.UpdatePostError&gt;</code>, with `result.value` of type <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/models/success-response-facebook-business-manager-facebook-pages-comments-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Videos

> Source: [Videos](src/resources/videos.ts)

<details>
<summary><code>uploadPageVideo(request: Videos.UploadPageVideoRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, Videos.UploadPageVideoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a video to the Facebook Page. Supports direct upload via URL or resumable upload for large files.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.videos.uploadPageVideo({ pageId: "some example string", body: {} });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Videos.UploadPageVideoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.videos.uploadPageVideo({ pageId: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
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
| <code>pageId</code> | <code>string</code> | The ID of the Facebook Page |
| <code>body</code> | <code>[VideosRequest](src/models/videos-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.videos.uploadPageVideo(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[Videos.UploadPageVideoError](src/resources/videos.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.videos.uploadPageVideo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, Videos.UploadPageVideoError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[FacebookBusinessManagerError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

