# Reference

> Source: [ContentstackClient](src/client.ts)

## Analytics

> Source: [Analytics](src/resources/analytics.ts)

<details>
<summary><code>getCacheRevalidationUsage(options?: RequestOptions): ApiPromise&lt;CacheUsage, Analytics.GetCacheRevalidationUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the organization's current cache revalidation quota usage, showing how many revalidation requests have been used against the organization's plan limit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.getCacheRevalidationUsage();
  // TODO: Handle 'response' of type CacheUsage
} catch (err) {
  // TODO: Handle 'err' of type Analytics.GetCacheRevalidationUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics.getCacheRevalidationUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CacheUsage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.getCacheRevalidationUsage()`

- **OnSuccess**: <code>[CacheUsage](src/models/cache-usage.ts)</code>
- **OnError**: throws <code>[Analytics.GetCacheRevalidationUsageError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.getCacheRevalidationUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CacheUsage, Analytics.GetCacheRevalidationUsageError&gt;</code>, with `result.value` of type <code>[CacheUsage](src/models/cache-usage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Accounts

> Source: [Accounts](src/resources/accounts.ts)

<details>
<summary><code>getAllAccounts(request: Accounts.GetAllAccountsRequest, options?: RequestOptions): ApiPromise&lt;AccountList, Accounts.GetAllAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all external service account connections configured for the automation project, such as connections to Slack, email services, or other third-party platforms.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.getAllAccounts({
    organizationUid: "some example string",
    projectUid: "some example string",
  });
  // TODO: Handle 'response' of type AccountList
} catch (err) {
  // TODO: Handle 'err' of type Accounts.GetAllAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .getAllAccounts({ organizationUid: "some example string", projectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountList
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.getAllAccounts(request)`

- **OnSuccess**: <code>[AccountList](src/models/account-list.ts)</code>
- **OnError**: throws <code>[Accounts.GetAllAccountsError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.getAllAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountList, Accounts.GetAllAccountsError&gt;</code>, with `result.value` of type <code>[AccountList](src/models/account-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Assets

> Source: [Assets](src/resources/assets.ts)

<details>
<summary><code>getAllAssets(request: Assets.GetAllAssetsRequest, options?: RequestOptions): ApiPromise&lt;AssetList, Assets.GetAllAssetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a list of all published assets in the stack including images, videos, and documents. Supports pagination, filtering, and field selection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.getAllAssets({
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type AssetList
} catch (err) {
  // TODO: Handle 'err' of type Assets.GetAllAssetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets
  .getAllAssets({ apiKey: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetList
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
| <code>skip?</code> | <code>number</code> | Number of entries to skip for pagination.<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | Maximum number of entries to return. Maximum allowed is 250.<br>**Default**: 100 |
| <code>includeCount?</code> | <code>boolean</code> | Set to true to include the total count of assets in the response. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.getAllAssets(request)`

- **OnSuccess**: <code>[AssetList](src/models/asset-list.ts)</code>
- **OnError**: throws <code>[Assets.GetAllAssetsError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.getAllAssets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetList, Assets.GetAllAssetsError&gt;</code>, with `result.value` of type <code>[AssetList](src/models/asset-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleAsset(request: Assets.GetSingleAssetRequest, options?: RequestOptions): ApiPromise&lt;Asset, Assets.GetSingleAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific asset by its UID, returning all metadata including file URL, dimensions, file size, and content type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.getSingleAsset({
    assetUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type Asset
} catch (err) {
  // TODO: Handle 'err' of type Assets.GetSingleAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets
  .getSingleAsset({
    assetUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Asset
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
| <code>assetUid</code> | <code>string</code> | The unique identifier (UID) of the asset. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.getSingleAsset(request)`

- **OnSuccess**: <code>[Asset](src/models/asset.ts)</code>
- **OnError**: throws <code>[Assets.GetSingleAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.getSingleAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Asset, Assets.GetSingleAssetError&gt;</code>, with `result.value` of type <code>[Asset](src/models/asset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadAsset(request: Assets.UploadAssetRequest, options?: RequestOptions): ApiPromise&lt;Asset2, Assets.UploadAssetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a new asset file to the stack. Supports multipart form data for the file upload along with metadata such as title, description, and tags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assets.uploadAsset({ apiKey: "some example string" });
  // TODO: Handle 'response' of type Asset2
} catch (err) {
  // TODO: Handle 'err' of type Assets.UploadAssetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assets.uploadAsset({ apiKey: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Asset2
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
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>authtoken?</code> | <code>string</code> | User session token for authentication. Required if not using management token. |
| <code>assetUpload?</code> | <code>FileInput</code> | The asset file to upload. |
| <code>assetTitle?</code> | <code>string</code> | Display title for the asset. |
| <code>assetDescription?</code> | <code>string</code> | Description of the asset content. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assets.uploadAsset(request)`

- **OnSuccess**: <code>[Asset2](src/models/asset2.ts)</code>
- **OnError**: throws <code>[Assets.UploadAssetError](src/resources/assets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assets.uploadAsset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Asset2, Assets.UploadAssetError&gt;</code>, with `result.value` of type <code>[Asset2](src/models/asset2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Attributes

> Source: [Attributes](src/resources/attributes.ts)

<details>
<summary><code>createAttribute(request: Attributes.CreateAttributeRequestParams, options?: RequestOptions): ApiPromise&lt;Attribute, Attributes.CreateAttributeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new user attribute definition in the Personalize project. Attributes can be of various types including string, number, boolean, and date, and are used to build audience segment rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attributes.createAttribute({
    xProjectUid: "some example string",
    body: { name: "some example string", key: "some example string", dataType: DataType.String },
  });
  // TODO: Handle 'response' of type Attribute
} catch (err) {
  // TODO: Handle 'err' of type Attributes.CreateAttributeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attributes
  .createAttribute({
    xProjectUid: "some example string",
    body: { name: "some example string", key: "some example string", dataType: DataType.String },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Attribute
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateAttributeRequest](src/models/create-attribute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attributes.createAttribute(request)`

- **OnSuccess**: <code>[Attribute](src/models/attribute.ts)</code>
- **OnError**: throws <code>[Attributes.CreateAttributeError](src/resources/attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attributes.createAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Attribute, Attributes.CreateAttributeError&gt;</code>, with `result.value` of type <code>[Attribute](src/models/attribute.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAttribute(request: Attributes.DeleteAttributeRequest, options?: RequestOptions): ApiPromise&lt;undefined, Attributes.DeleteAttributeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an attribute from the Personalize project. Attributes referenced in audience rules cannot be deleted until those references are removed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.attributes.deleteAttribute({ id: "some example string", xProjectUid: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Attributes.DeleteAttributeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attributes
  .deleteAttribute({ id: "some example string", xProjectUid: "some example string" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | The unique identifier of the attribute. |
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attributes.deleteAttribute(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Attributes.DeleteAttributeError](src/resources/attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attributes.deleteAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Attributes.DeleteAttributeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllAttributes(request: Attributes.GetAllAttributesRequest, options?: RequestOptions): ApiPromise&lt;AttributeList, Attributes.GetAllAttributesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all user attribute definitions configured in the Personalize project. Attributes are used to build audience segment rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attributes.getAllAttributes({ xProjectUid: "some example string" });
  // TODO: Handle 'response' of type AttributeList
} catch (err) {
  // TODO: Handle 'err' of type Attributes.GetAllAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attributes.getAllAttributes({ xProjectUid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AttributeList
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attributes.getAllAttributes(request)`

- **OnSuccess**: <code>[AttributeList](src/models/attribute-list.ts)</code>
- **OnError**: throws <code>[Attributes.GetAllAttributesError](src/resources/attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attributes.getAllAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AttributeList, Attributes.GetAllAttributesError&gt;</code>, with `result.value` of type <code>[AttributeList](src/models/attribute-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAttribute(request: Attributes.UpdateAttributeRequest, options?: RequestOptions): ApiPromise&lt;Attribute, Attributes.UpdateAttributeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing attribute in the Personalize project including its name, key, and data type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.attributes.updateAttribute({
    id: "some example string",
    xProjectUid: "some example string",
    body: { name: "some example string", key: "some example string", dataType: DataType.String },
  });
  // TODO: Handle 'response' of type Attribute
} catch (err) {
  // TODO: Handle 'err' of type Attributes.UpdateAttributeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.attributes
  .updateAttribute({
    id: "some example string",
    xProjectUid: "some example string",
    body: { name: "some example string", key: "some example string", dataType: DataType.String },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Attribute
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
| <code>id</code> | <code>string</code> | The unique identifier of the attribute. |
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateAttributeRequest](src/models/create-attribute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.attributes.updateAttribute(request)`

- **OnSuccess**: <code>[Attribute](src/models/attribute.ts)</code>
- **OnError**: throws <code>[Attributes.UpdateAttributeError](src/resources/attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.attributes.updateAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Attribute, Attributes.UpdateAttributeError&gt;</code>, with `result.value` of type <code>[Attribute](src/models/attribute.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Audiences

> Source: [Audiences](src/resources/audiences.ts)

<details>
<summary><code>createAudience(request: Audiences.CreateAudienceRequestParams, options?: RequestOptions): ApiPromise&lt;Audience, Audiences.CreateAudienceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new audience segment in the Personalize project based on attribute conditions and behavioral rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiences.createAudience({
    xProjectUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type Audience
} catch (err) {
  // TODO: Handle 'err' of type Audiences.CreateAudienceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences
  .createAudience({ xProjectUid: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Audience
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateAudienceRequest](src/models/create-audience-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.createAudience(request)`

- **OnSuccess**: <code>[Audience](src/models/audience.ts)</code>
- **OnError**: throws <code>[Audiences.CreateAudienceError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.createAudience(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Audience, Audiences.CreateAudienceError&gt;</code>, with `result.value` of type <code>[Audience](src/models/audience.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAudience(request: Audiences.DeleteAudienceRequest, options?: RequestOptions): ApiPromise&lt;undefined, Audiences.DeleteAudienceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an audience from the Personalize project. Audiences referenced in active experiences cannot be deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.audiences.deleteAudience({ id: "some example string", xProjectUid: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Audiences.DeleteAudienceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences
  .deleteAudience({ id: "some example string", xProjectUid: "some example string" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | The unique identifier of the audience. |
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.deleteAudience(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Audiences.DeleteAudienceError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.deleteAudience(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Audiences.DeleteAudienceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllAudiences(request: Audiences.GetAllAudiencesRequest, options?: RequestOptions): ApiPromise&lt;AudienceList, Audiences.GetAllAudiencesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all audience segment definitions in the Personalize project. Audiences define the user groups that experiences are targeted to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiences.getAllAudiences({ xProjectUid: "some example string" });
  // TODO: Handle 'response' of type AudienceList
} catch (err) {
  // TODO: Handle 'err' of type Audiences.GetAllAudiencesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences.getAllAudiences({ xProjectUid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AudienceList
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.getAllAudiences(request)`

- **OnSuccess**: <code>[AudienceList](src/models/audience-list.ts)</code>
- **OnError**: throws <code>[Audiences.GetAllAudiencesError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.getAllAudiences(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AudienceList, Audiences.GetAllAudiencesError&gt;</code>, with `result.value` of type <code>[AudienceList](src/models/audience-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAudience(request: Audiences.UpdateAudienceRequest, options?: RequestOptions): ApiPromise&lt;Audience, Audiences.UpdateAudienceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the rules and configuration of an existing audience segment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiences.updateAudience({
    id: "some example string",
    xProjectUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type Audience
} catch (err) {
  // TODO: Handle 'err' of type Audiences.UpdateAudienceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences
  .updateAudience({
    id: "some example string",
    xProjectUid: "some example string",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Audience
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
| <code>id</code> | <code>string</code> | The unique identifier of the audience. |
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateAudienceRequest](src/models/create-audience-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.updateAudience(request)`

- **OnSuccess**: <code>[Audience](src/models/audience.ts)</code>
- **OnError**: throws <code>[Audiences.UpdateAudienceError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.updateAudience(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Audience, Audiences.UpdateAudienceError&gt;</code>, with `result.value` of type <code>[Audience](src/models/audience.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLogs

> Source: [AuditLogs](src/resources/audit-logs.ts)

<details>
<summary><code>getAllAuditLogs(request: AuditLogs.GetAllAuditLogsRequest, options?: RequestOptions): ApiPromise&lt;AuditLogList, AuditLogs.GetAllAuditLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all audit log entries for administrative actions taken within the project such as creating, updating, or deleting automations and configuration changes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditLogs.getAllAuditLogs({
    organizationUid: "some example string",
    projectUid: "some example string",
  });
  // TODO: Handle 'response' of type AuditLogList
} catch (err) {
  // TODO: Handle 'err' of type AuditLogs.GetAllAuditLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auditLogs
  .getAllAuditLogs({ organizationUid: "some example string", projectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditLogList
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditLogs.getAllAuditLogs(request)`

- **OnSuccess**: <code>[AuditLogList](src/models/audit-log-list.ts)</code>
- **OnError**: throws <code>[AuditLogs.GetAllAuditLogsError](src/resources/audit-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auditLogs.getAllAuditLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditLogList, AuditLogs.GetAllAuditLogsError&gt;</code>, with `result.value` of type <code>[AuditLogList](src/models/audit-log-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](src/resources/automations.ts)

<details>
<summary><code>activateAutomation(request: Automations.ActivateAutomationRequest, options?: RequestOptions): ApiPromise&lt;Automation, Automations.ActivateAutomationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables an automation so that it will execute when its configured trigger conditions are met. Only automations in a valid, configured state can be activated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.activateAutomation({
    organizationUid: "some example string",
    projectUid: "some example string",
    automationUid: "some example string",
  });
  // TODO: Handle 'response' of type Automation
} catch (err) {
  // TODO: Handle 'err' of type Automations.ActivateAutomationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .activateAutomation({
    organizationUid: "some example string",
    projectUid: "some example string",
    automationUid: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Automation
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |
| <code>automationUid</code> | <code>string</code> | The unique identifier of the automation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.activateAutomation(request)`

- **OnSuccess**: <code>[Automation](src/models/automation.ts)</code>
- **OnError**: throws <code>[Automations.ActivateAutomationError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.activateAutomation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Automation, Automations.ActivateAutomationError&gt;</code>, with `result.value` of type <code>[Automation](src/models/automation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deactivateAutomation(request: Automations.DeactivateAutomationRequest, options?: RequestOptions): ApiPromise&lt;Automation, Automations.DeactivateAutomationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables an active automation, preventing it from executing when its trigger conditions are met. Existing in-progress executions will complete before the automation is fully deactivated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.deactivateAutomation({
    organizationUid: "some example string",
    projectUid: "some example string",
    automationUid: "some example string",
  });
  // TODO: Handle 'response' of type Automation
} catch (err) {
  // TODO: Handle 'err' of type Automations.DeactivateAutomationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .deactivateAutomation({
    organizationUid: "some example string",
    projectUid: "some example string",
    automationUid: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Automation
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |
| <code>automationUid</code> | <code>string</code> | The unique identifier of the automation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.deactivateAutomation(request)`

- **OnSuccess**: <code>[Automation](src/models/automation.ts)</code>
- **OnError**: throws <code>[Automations.DeactivateAutomationError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.deactivateAutomation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Automation, Automations.DeactivateAutomationError&gt;</code>, with `result.value` of type <code>[Automation](src/models/automation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllAutomations(request: Automations.GetAllAutomationsRequest, options?: RequestOptions): ApiPromise&lt;AutomationList, Automations.GetAllAutomationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all automation workflow definitions within a specific project, including their trigger configurations, steps, and activation status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.getAllAutomations({
    organizationUid: "some example string",
    projectUid: "some example string",
  });
  // TODO: Handle 'response' of type AutomationList
} catch (err) {
  // TODO: Handle 'err' of type Automations.GetAllAutomationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .getAllAutomations({ organizationUid: "some example string", projectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationList
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.getAllAutomations(request)`

- **OnSuccess**: <code>[AutomationList](src/models/automation-list.ts)</code>
- **OnError**: throws <code>[Automations.GetAllAutomationsError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.getAllAutomations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationList, Automations.GetAllAutomationsError&gt;</code>, with `result.value` of type <code>[AutomationList](src/models/automation-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAutomation(request: Automations.GetAutomationRequest, options?: RequestOptions): ApiPromise&lt;Automation, Automations.GetAutomationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full configuration of a specific automation including trigger settings, action steps, error handling, and activation status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.getAutomation({
    organizationUid: "some example string",
    projectUid: "some example string",
    automationUid: "some example string",
  });
  // TODO: Handle 'response' of type Automation
} catch (err) {
  // TODO: Handle 'err' of type Automations.GetAutomationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .getAutomation({
    organizationUid: "some example string",
    projectUid: "some example string",
    automationUid: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Automation
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |
| <code>automationUid</code> | <code>string</code> | The unique identifier of the automation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.getAutomation(request)`

- **OnSuccess**: <code>[Automation](src/models/automation.ts)</code>
- **OnError**: throws <code>[Automations.GetAutomationError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.getAutomation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Automation, Automations.GetAutomationError&gt;</code>, with `result.value` of type <code>[Automation](src/models/automation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BrandKits

> Source: [BrandKits](src/resources/brand-kits.ts)

<details>
<summary><code>createBrandKit(request: BrandKits.CreateBrandKitRequestParams, options?: RequestOptions): ApiPromise&lt;BrandKit, BrandKits.CreateBrandKitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Brand Kit in the organization with brand identity configuration including name, description, guidelines, and associated metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.brandKits.createBrandKit({
    organizationUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type BrandKit
} catch (err) {
  // TODO: Handle 'err' of type BrandKits.CreateBrandKitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.brandKits
  .createBrandKit({ organizationUid: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BrandKit
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateBrandKitRequest](src/models/create-brand-kit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.brandKits.createBrandKit(request)`

- **OnSuccess**: <code>[BrandKit](src/models/brand-kit.ts)</code>
- **OnError**: throws <code>[BrandKits.CreateBrandKitError](src/resources/brand-kits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.brandKits.createBrandKit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BrandKit, BrandKits.CreateBrandKitError&gt;</code>, with `result.value` of type <code>[BrandKit](src/models/brand-kit.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBrandKit(request: BrandKits.DeleteBrandKitRequest, options?: RequestOptions): ApiPromise&lt;undefined, BrandKits.DeleteBrandKitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes a Brand Kit from the organization including all associated voice profiles and knowledge vault content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.brandKits.deleteBrandKit({
    brandKitUid: "some example string",
    organizationUid: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type BrandKits.DeleteBrandKitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.brandKits
  .deleteBrandKit({ brandKitUid: "some example string", organizationUid: "some example string" })
  .asApiResult();
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.brandKits.deleteBrandKit(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BrandKits.DeleteBrandKitError](src/resources/brand-kits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.brandKits.deleteBrandKit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BrandKits.DeleteBrandKitError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllBrandKits(request: BrandKits.GetAllBrandKitsRequest, options?: RequestOptions): ApiPromise&lt;BrandKitList, BrandKits.GetAllBrandKitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all Brand Kits in the organization with pagination support and optional filtering. Each Brand Kit contains brand identity information used for AI content generation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.brandKits.getAllBrandKits({ organizationUid: "some example string" });
  // TODO: Handle 'response' of type BrandKitList
} catch (err) {
  // TODO: Handle 'err' of type BrandKits.GetAllBrandKitsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.brandKits
  .getAllBrandKits({ organizationUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BrandKitList
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
| <code>skip?</code> | <code>number</code> | Number of records to skip for pagination.<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | Maximum number of records to return.<br>**Default**: 25 |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.brandKits.getAllBrandKits(request)`

- **OnSuccess**: <code>[BrandKitList](src/models/brand-kit-list.ts)</code>
- **OnError**: throws <code>[BrandKits.GetAllBrandKitsError](src/resources/brand-kits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.brandKits.getAllBrandKits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BrandKitList, BrandKits.GetAllBrandKitsError&gt;</code>, with `result.value` of type <code>[BrandKitList](src/models/brand-kit-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBrandKit(request: BrandKits.GetBrandKitRequest, options?: RequestOptions): ApiPromise&lt;BrandKit, BrandKits.GetBrandKitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full details of a specific Brand Kit including its brand identity configuration, voice profiles, and associated knowledge vault content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.brandKits.getBrandKit({
    brandKitUid: "some example string",
    organizationUid: "some example string",
  });
  // TODO: Handle 'response' of type BrandKit
} catch (err) {
  // TODO: Handle 'err' of type BrandKits.GetBrandKitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.brandKits
  .getBrandKit({ brandKitUid: "some example string", organizationUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BrandKit
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.brandKits.getBrandKit(request)`

- **OnSuccess**: <code>[BrandKit](src/models/brand-kit.ts)</code>
- **OnError**: throws <code>[BrandKits.GetBrandKitError](src/resources/brand-kits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.brandKits.getBrandKit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BrandKit, BrandKits.GetBrandKitError&gt;</code>, with `result.value` of type <code>[BrandKit](src/models/brand-kit.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBrandKit(request: BrandKits.UpdateBrandKitRequest, options?: RequestOptions): ApiPromise&lt;BrandKit, BrandKits.UpdateBrandKitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration and brand identity information for an existing Brand Kit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.brandKits.updateBrandKit({
    brandKitUid: "some example string",
    organizationUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type BrandKit
} catch (err) {
  // TODO: Handle 'err' of type BrandKits.UpdateBrandKitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.brandKits
  .updateBrandKit({
    brandKitUid: "some example string",
    organizationUid: "some example string",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BrandKit
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateBrandKitRequest](src/models/create-brand-kit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.brandKits.updateBrandKit(request)`

- **OnSuccess**: <code>[BrandKit](src/models/brand-kit.ts)</code>
- **OnError**: throws <code>[BrandKits.UpdateBrandKitError](src/resources/brand-kits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.brandKits.updateBrandKit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BrandKit, BrandKits.UpdateBrandKitError&gt;</code>, with `result.value` of type <code>[BrandKit](src/models/brand-kit.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContentTypes

> Source: [ContentTypes](src/resources/content-types.ts)

<details>
<summary><code>createContentType(request: ContentTypes.CreateContentTypeRequestParams, options?: RequestOptions): ApiPromise&lt;ContentType2, ContentTypes.CreateContentTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new content type in the stack with a defined schema of fields. The schema determines the structure of all entries created from this content type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contentTypes.createContentType({
    apiKey: "some example string",
    body: { contentType: { uid: "some example string", title: "some example string", schema: [{}] } },
  });
  // TODO: Handle 'response' of type ContentType2
} catch (err) {
  // TODO: Handle 'err' of type ContentTypes.CreateContentTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contentTypes
  .createContentType({
    apiKey: "some example string",
    body: { contentType: { uid: "some example string", title: "some example string", schema: [{}] } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContentType2
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
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[CreateContentTypeRequest](src/models/create-content-type-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contentTypes.createContentType(request)`

- **OnSuccess**: <code>[ContentType2](src/models/content-type2.ts)</code>
- **OnError**: throws <code>[ContentTypes.CreateContentTypeError](src/resources/content-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contentTypes.createContentType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContentType2, ContentTypes.CreateContentTypeError&gt;</code>, with `result.value` of type <code>[ContentType2](src/models/content-type2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteContentType(request: ContentTypes.DeleteContentTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, ContentTypes.DeleteContentTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a content type from the stack. All entries of this content type must be deleted before the content type can be removed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.contentTypes.deleteContentType({
    contentTypeUid: "some example string",
    apiKey: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type ContentTypes.DeleteContentTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contentTypes
  .deleteContentType({ contentTypeUid: "some example string", apiKey: "some example string" })
  .asApiResult();
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contentTypes.deleteContentType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ContentTypes.DeleteContentTypeError](src/resources/content-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contentTypes.deleteContentType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ContentTypes.DeleteContentTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllContentTypes(request: ContentTypes.GetAllContentTypesRequest, options?: RequestOptions): ApiPromise&lt;ContentTypeList, ContentTypes.GetAllContentTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves comprehensive information of all content types available in a stack. Supports include_count parameter to return the total count of content types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contentTypes.getAllContentTypes({
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type ContentTypeList
} catch (err) {
  // TODO: Handle 'err' of type ContentTypes.GetAllContentTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contentTypes
  .getAllContentTypes({ apiKey: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContentTypeList
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
| <code>includeCount?</code> | <code>boolean</code> | Set to true to include the total count of content types in the response. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contentTypes.getAllContentTypes(request)`

- **OnSuccess**: <code>[ContentTypeList](src/models/content-type-list.ts)</code>
- **OnError**: throws <code>[ContentTypes.GetAllContentTypesError](src/resources/content-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contentTypes.getAllContentTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContentTypeList, ContentTypes.GetAllContentTypesError&gt;</code>, with `result.value` of type <code>[ContentTypeList](src/models/content-type-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleContentType(request: ContentTypes.GetSingleContentTypeRequest, options?: RequestOptions): ApiPromise&lt;ContentType, ContentTypes.GetSingleContentTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information for a specific content type identified by its UID, including all field definitions and schema metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contentTypes.getSingleContentType({
    contentTypeUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type ContentType
} catch (err) {
  // TODO: Handle 'err' of type ContentTypes.GetSingleContentTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contentTypes
  .getSingleContentType({
    contentTypeUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContentType
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>version?</code> | <code>number</code> | Retrieve a specific version of the content type schema. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contentTypes.getSingleContentType(request)`

- **OnSuccess**: <code>[ContentType](src/models/content-type.ts)</code>
- **OnError**: throws <code>[ContentTypes.GetSingleContentTypeError](src/resources/content-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contentTypes.getSingleContentType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContentType, ContentTypes.GetSingleContentTypeError&gt;</code>, with `result.value` of type <code>[ContentType](src/models/content-type.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateContentType(request: ContentTypes.UpdateContentTypeRequest, options?: RequestOptions): ApiPromise&lt;ContentType2, ContentTypes.UpdateContentTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the schema and options of an existing content type. Changes to the schema may affect existing entries that use this content type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contentTypes.updateContentType({
    contentTypeUid: "some example string",
    apiKey: "some example string",
    body: { contentType: { uid: "some example string", title: "some example string", schema: [{}] } },
  });
  // TODO: Handle 'response' of type ContentType2
} catch (err) {
  // TODO: Handle 'err' of type ContentTypes.UpdateContentTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contentTypes
  .updateContentType({
    contentTypeUid: "some example string",
    apiKey: "some example string",
    body: { contentType: { uid: "some example string", title: "some example string", schema: [{}] } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContentType2
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[CreateContentTypeRequest](src/models/create-content-type-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contentTypes.updateContentType(request)`

- **OnSuccess**: <code>[ContentType2](src/models/content-type2.ts)</code>
- **OnError**: throws <code>[ContentTypes.UpdateContentTypeError](src/resources/content-types.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contentTypes.updateContentType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContentType2, ContentTypes.UpdateContentTypeError&gt;</code>, with `result.value` of type <code>[ContentType2](src/models/content-type2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Deployments

> Source: [Deployments](src/resources/deployments.ts)

<details>
<summary><code>createDeployment(request: Deployments.CreateDeploymentRequestParams, options?: RequestOptions): ApiPromise&lt;Deployment, Deployments.CreateDeploymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new deployment to the specified environment. Requires a previously uploaded build artifact referenced by its upload URL. The deployment process builds and publishes the application to the environment's CDN infrastructure.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deployments.createDeployment({
    projectUid: "some example string",
    envUid: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Deployment
} catch (err) {
  // TODO: Handle 'err' of type Deployments.CreateDeploymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deployments
  .createDeployment({ projectUid: "some example string", envUid: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Deployment
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>envUid</code> | <code>string</code> | The unique identifier of the deployment environment. |
| <code>body</code> | <code>[CreateDeploymentRequest](src/models/create-deployment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deployments.createDeployment(request)`

- **OnSuccess**: <code>[Deployment](src/models/deployment.ts)</code>
- **OnError**: throws <code>[Deployments.CreateDeploymentError](src/resources/deployments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deployments.createDeployment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Deployment, Deployments.CreateDeploymentError&gt;</code>, with `result.value` of type <code>[Deployment](src/models/deployment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllDeployments(request: Deployments.GetAllDeploymentsRequest, options?: RequestOptions): ApiPromise&lt;DeploymentList, Deployments.GetAllDeploymentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all deployments for a specific environment, showing deployment history with status, creation times, and build metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deployments.getAllDeployments({
    projectUid: "some example string",
    envUid: "some example string",
  });
  // TODO: Handle 'response' of type DeploymentList
} catch (err) {
  // TODO: Handle 'err' of type Deployments.GetAllDeploymentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deployments
  .getAllDeployments({ projectUid: "some example string", envUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeploymentList
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>envUid</code> | <code>string</code> | The unique identifier of the deployment environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deployments.getAllDeployments(request)`

- **OnSuccess**: <code>[DeploymentList](src/models/deployment-list.ts)</code>
- **OnError**: throws <code>[Deployments.GetAllDeploymentsError](src/resources/deployments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deployments.getAllDeployments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeploymentList, Deployments.GetAllDeploymentsError&gt;</code>, with `result.value` of type <code>[DeploymentList](src/models/deployment-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeployment(request: Deployments.GetDeploymentRequest, options?: RequestOptions): ApiPromise&lt;Deployment, Deployments.GetDeploymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full details of a specific deployment including its status, build configuration, and completion information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deployments.getDeployment({
    projectUid: "some example string",
    envUid: "some example string",
    deployUid: "some example string",
  });
  // TODO: Handle 'response' of type Deployment
} catch (err) {
  // TODO: Handle 'err' of type Deployments.GetDeploymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deployments
  .getDeployment({
    projectUid: "some example string",
    envUid: "some example string",
    deployUid: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Deployment
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>envUid</code> | <code>string</code> | The unique identifier of the deployment environment. |
| <code>deployUid</code> | <code>string</code> | The unique identifier of the deployment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deployments.getDeployment(request)`

- **OnSuccess**: <code>[Deployment](src/models/deployment.ts)</code>
- **OnError**: throws <code>[Deployments.GetDeploymentError](src/resources/deployments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deployments.getDeployment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Deployment, Deployments.GetDeploymentError&gt;</code>, with `result.value` of type <code>[Deployment](src/models/deployment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeploymentLogs(request: Deployments.GetDeploymentLogsRequest, options?: RequestOptions): ApiPromise&lt;LogResponse, Deployments.GetDeploymentLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the build and deployment logs for a specific deployment, useful for debugging failed deployments and monitoring build progress.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deployments.getDeploymentLogs({
    projectUid: "some example string",
    envUid: "some example string",
    deployUid: "some example string",
  });
  // TODO: Handle 'response' of type LogResponse
} catch (err) {
  // TODO: Handle 'err' of type Deployments.GetDeploymentLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deployments
  .getDeploymentLogs({
    projectUid: "some example string",
    envUid: "some example string",
    deployUid: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LogResponse
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>envUid</code> | <code>string</code> | The unique identifier of the deployment environment. |
| <code>deployUid</code> | <code>string</code> | The unique identifier of the deployment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deployments.getDeploymentLogs(request)`

- **OnSuccess**: <code>[LogResponse](src/models/log-response.ts)</code>
- **OnError**: throws <code>[Deployments.GetDeploymentLogsError](src/resources/deployments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deployments.getDeploymentLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LogResponse, Deployments.GetDeploymentLogsError&gt;</code>, with `result.value` of type <code>[LogResponse](src/models/log-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getServerLogs(request: Deployments.GetServerLogsRequest, options?: RequestOptions): ApiPromise&lt;LogResponse, Deployments.GetServerLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves server-side runtime logs for a deployed environment, useful for debugging server-side rendering issues and monitoring application runtime behavior.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deployments.getServerLogs({
    projectUid: "some example string",
    envUid: "some example string",
    deployUid: "some example string",
  });
  // TODO: Handle 'response' of type LogResponse
} catch (err) {
  // TODO: Handle 'err' of type Deployments.GetServerLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deployments
  .getServerLogs({
    projectUid: "some example string",
    envUid: "some example string",
    deployUid: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LogResponse
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>envUid</code> | <code>string</code> | The unique identifier of the deployment environment. |
| <code>deployUid</code> | <code>string</code> | The unique identifier of the deployment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deployments.getServerLogs(request)`

- **OnSuccess**: <code>[LogResponse](src/models/log-response.ts)</code>
- **OnError**: throws <code>[Deployments.GetServerLogsError](src/resources/deployments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deployments.getServerLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LogResponse, Deployments.GetServerLogsError&gt;</code>, with `result.value` of type <code>[LogResponse](src/models/log-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Entries

> Source: [Entries](src/resources/entries.ts)

<details>
<summary><code>createEntry(request: Entries.CreateEntryRequestParams, options?: RequestOptions): ApiPromise&lt;Entry2, Entries.CreateEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new entry for the specified content type. The entry data must conform to the content type schema. Newly created entries are in draft state and must be published separately.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entries.createEntry({
    contentTypeUid: "some example string",
    locale: "en-us",
    apiKey: "some example string",
    body: { entry: {} },
  });
  // TODO: Handle 'response' of type Entry2
} catch (err) {
  // TODO: Handle 'err' of type Entries.CreateEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entries
  .createEntry({
    contentTypeUid: "some example string",
    locale: "en-us",
    apiKey: "some example string",
    body: { entry: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Entry2
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>locale?</code> | <code>string</code> | The locale code for localized content operations. |
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>authtoken?</code> | <code>string</code> | User session token for authentication. Required if not using management token. |
| <code>body</code> | <code>[CreateEntryRequest](src/models/create-entry-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entries.createEntry(request)`

- **OnSuccess**: <code>[Entry2](src/models/entry2.ts)</code>
- **OnError**: throws <code>[Entries.CreateEntryError](src/resources/entries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entries.createEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Entry2, Entries.CreateEntryError&gt;</code>, with `result.value` of type <code>[Entry2](src/models/entry2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEntry(request: Entries.DeleteEntryRequest, options?: RequestOptions): ApiPromise&lt;undefined, Entries.DeleteEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an entry from the stack. Published entries must be unpublished before deletion. This action cannot be undone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.entries.deleteEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    apiKey: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Entries.DeleteEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entries
  .deleteEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    apiKey: "some example string",
  })
  .asApiResult();
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>entryUid</code> | <code>string</code> | The unique identifier (UID) of the entry. |
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>authtoken?</code> | <code>string</code> | User session token for authentication. Required if not using management token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entries.deleteEntry(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Entries.DeleteEntryError](src/resources/entries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entries.deleteEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Entries.DeleteEntryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllEntries(request: Entries.GetAllEntriesRequest, options?: RequestOptions): ApiPromise&lt;EntryList, Entries.GetAllEntriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a list of all published entries for a particular content type. Supports filtering by query, localization, reference inclusion, pagination, sorting, and field selection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entries.getAllEntries({
    contentTypeUid: "some example string",
    locale: "en-us",
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type EntryList
} catch (err) {
  // TODO: Handle 'err' of type Entries.GetAllEntriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entries
  .getAllEntries({
    contentTypeUid: "some example string",
    locale: "en-us",
    apiKey: "some example string",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntryList
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>locale?</code> | <code>string</code> | The locale code to retrieve localized content. Defaults to the default locale of the stack if not specified. |
| <code>skip?</code> | <code>number</code> | Number of entries to skip for pagination.<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | Maximum number of entries to return. Maximum allowed is 250.<br>**Default**: 100 |
| <code>query?</code> | <code>string</code> | A JSON-encoded query object to filter entries. Supports MongoDB-style query operators for field matching and comparison. |
| <code>includeCount?</code> | <code>boolean</code> | Set to true to include the total count of matching entries. |
| <code>includeContentType?</code> | <code>boolean</code> | Set to true to include the content type schema in the response. |
| <code>includeReference?</code> | <code>boolean</code> | Set to true to include referenced entries inline in the response. |
| <code>only?</code> | <code>string</code> | Comma-separated list of fields to include in the response. |
| <code>except?</code> | <code>string</code> | Comma-separated list of fields to exclude from the response. |
| <code>asc?</code> | <code>string</code> | Field name to sort results in ascending order. |
| <code>desc?</code> | <code>string</code> | Field name to sort results in descending order. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entries.getAllEntries(request)`

- **OnSuccess**: <code>[EntryList](src/models/entry-list.ts)</code>
- **OnError**: throws <code>[Entries.GetAllEntriesError](src/resources/entries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entries.getAllEntries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntryList, Entries.GetAllEntriesError&gt;</code>, with `result.value` of type <code>[EntryList](src/models/entry-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleEntry(request: Entries.GetSingleEntryRequest, options?: RequestOptions): ApiPromise&lt;EntryModel, Entries.GetSingleEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific published entry identified by its UID within a given content type. Supports localization, reference inclusion, and field selection parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entries.getSingleEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    locale: "en-us",
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type EntryModel
} catch (err) {
  // TODO: Handle 'err' of type Entries.GetSingleEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entries
  .getSingleEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    locale: "en-us",
    apiKey: "some example string",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntryModel
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>entryUid</code> | <code>string</code> | The unique identifier (UID) of the entry. |
| <code>locale?</code> | <code>string</code> | The locale code to retrieve localized content. Defaults to the default locale of the stack if not specified. |
| <code>includeReference?</code> | <code>boolean</code> | Set to true to include referenced entries inline in the response. |
| <code>version?</code> | <code>number</code> | Retrieve a specific published version of the entry. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entries.getSingleEntry(request)`

- **OnSuccess**: <code>[EntryModel](src/models/entry-model.ts)</code>
- **OnError**: throws <code>[Entries.GetSingleEntryError](src/resources/entries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entries.getSingleEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntryModel, Entries.GetSingleEntryError&gt;</code>, with `result.value` of type <code>[EntryModel](src/models/entry-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publishEntry(request: Entries.PublishEntryRequest, options?: RequestOptions): ApiPromise&lt;undefined, Entries.PublishEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes an entry to one or more environments and locales. Publishing makes the entry available via the Content Delivery API for the specified environments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.entries.publishEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    apiKey: "some example string",
    body: {},
  });
} catch (err) {
  // TODO: Handle 'err' of type Entries.PublishEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entries
  .publishEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    apiKey: "some example string",
    body: {},
  })
  .asApiResult();
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>entryUid</code> | <code>string</code> | The unique identifier (UID) of the entry. |
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>authtoken?</code> | <code>string</code> | User session token for authentication. Required if not using management token. |
| <code>body</code> | <code>[PublishRequest](src/models/publish-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entries.publishEntry(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Entries.PublishEntryError](src/resources/entries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entries.publishEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Entries.PublishEntryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unpublishEntry(request: Entries.UnpublishEntryRequest, options?: RequestOptions): ApiPromise&lt;undefined, Entries.UnpublishEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an entry from one or more environments, making it unavailable via the Content Delivery API for the specified environments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.entries.unpublishEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    apiKey: "some example string",
    body: {},
  });
} catch (err) {
  // TODO: Handle 'err' of type Entries.UnpublishEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entries
  .unpublishEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    apiKey: "some example string",
    body: {},
  })
  .asApiResult();
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>entryUid</code> | <code>string</code> | The unique identifier (UID) of the entry. |
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>authtoken?</code> | <code>string</code> | User session token for authentication. Required if not using management token. |
| <code>body</code> | <code>[PublishRequest](src/models/publish-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entries.unpublishEntry(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Entries.UnpublishEntryError](src/resources/entries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entries.unpublishEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Entries.UnpublishEntryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEntry(request: Entries.UpdateEntryRequestParams, options?: RequestOptions): ApiPromise&lt;Entry2, Entries.UpdateEntryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the field values of an existing entry. Only the fields included in the request body are updated; other fields retain their current values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entries.updateEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    locale: "en-us",
    apiKey: "some example string",
    body: { entry: {} },
  });
  // TODO: Handle 'response' of type Entry2
} catch (err) {
  // TODO: Handle 'err' of type Entries.UpdateEntryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entries
  .updateEntry({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    locale: "en-us",
    apiKey: "some example string",
    body: { entry: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Entry2
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>entryUid</code> | <code>string</code> | The unique identifier (UID) of the entry. |
| <code>locale?</code> | <code>string</code> | The locale code for localized content operations. |
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>authtoken?</code> | <code>string</code> | User session token for authentication. Required if not using management token. |
| <code>body</code> | <code>[UpdateEntryRequest](src/models/update-entry-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entries.updateEntry(request)`

- **OnSuccess**: <code>[Entry2](src/models/entry2.ts)</code>
- **OnError**: throws <code>[Entries.UpdateEntryError](src/resources/entries.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entries.updateEntry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Entry2, Entries.UpdateEntryError&gt;</code>, with `result.value` of type <code>[Entry2](src/models/entry2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EntryVariants

> Source: [EntryVariants](src/resources/entry-variants.ts)

<details>
<summary><code>getAllEntryVariants(request: EntryVariants.GetAllEntryVariantsRequest, options?: RequestOptions): ApiPromise&lt;EntryVariantList, EntryVariants.GetAllEntryVariantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all personalization variants of a specific entry, including their variant UIDs and customized field values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entryVariants.getAllEntryVariants({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type EntryVariantList
} catch (err) {
  // TODO: Handle 'err' of type EntryVariants.GetAllEntryVariantsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entryVariants
  .getAllEntryVariants({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntryVariantList
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>entryUid</code> | <code>string</code> | The unique identifier (UID) of the entry. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entryVariants.getAllEntryVariants(request)`

- **OnSuccess**: <code>[EntryVariantList](src/models/entry-variant-list.ts)</code>
- **OnError**: throws <code>[EntryVariants.GetAllEntryVariantsError](src/resources/entry-variants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entryVariants.getAllEntryVariants(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntryVariantList, EntryVariants.GetAllEntryVariantsError&gt;</code>, with `result.value` of type <code>[EntryVariantList](src/models/entry-variant-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleEntryVariant(request: EntryVariants.GetSingleEntryVariantRequest, options?: RequestOptions): ApiPromise&lt;EntryVariant, EntryVariants.GetSingleEntryVariantError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific variant of an entry identified by the variant UID. Returns the customized field values for that variant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entryVariants.getSingleEntryVariant({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    variantUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type EntryVariant
} catch (err) {
  // TODO: Handle 'err' of type EntryVariants.GetSingleEntryVariantError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entryVariants
  .getSingleEntryVariant({
    contentTypeUid: "some example string",
    entryUid: "some example string",
    variantUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntryVariant
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
| <code>contentTypeUid</code> | <code>string</code> | The unique identifier (UID) of the content type. |
| <code>entryUid</code> | <code>string</code> | The unique identifier (UID) of the entry. |
| <code>variantUid</code> | <code>string</code> | The unique identifier (UID) of the entry variant. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entryVariants.getSingleEntryVariant(request)`

- **OnSuccess**: <code>[EntryVariant](src/models/entry-variant.ts)</code>
- **OnError**: throws <code>[EntryVariants.GetSingleEntryVariantError](src/resources/entry-variants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entryVariants.getSingleEntryVariant(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntryVariant, EntryVariants.GetSingleEntryVariantError&gt;</code>, with `result.value` of type <code>[EntryVariant](src/models/entry-variant.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](src/resources/environments.ts)

<details>
<summary><code>createEnvironment(request: Environments.CreateEnvironmentRequestParams, options?: RequestOptions): ApiPromise&lt;Environment2, Environments.CreateEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new deployment environment for a Launch project. Each environment can have its own domain, build configuration, and deployment settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.createEnvironment({
    projectUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type Environment2
} catch (err) {
  // TODO: Handle 'err' of type Environments.CreateEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .createEnvironment({ projectUid: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment2
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>body</code> | <code>[CreateEnvironmentRequest](src/models/create-environment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.createEnvironment(request)`

- **OnSuccess**: <code>[Environment2](src/models/environment2.ts)</code>
- **OnError**: throws <code>[Environments.CreateEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.createEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment2, Environments.CreateEnvironmentError&gt;</code>, with `result.value` of type <code>[Environment2](src/models/environment2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEnvironment(request: Environments.DeleteEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;undefined, Environments.DeleteEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a deployment environment and its deployment history. This action is irreversible.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.environments.deleteEnvironment({
    projectUid: "some example string",
    envUid: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Environments.DeleteEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .deleteEnvironment({ projectUid: "some example string", envUid: "some example string" })
  .asApiResult();
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>envUid</code> | <code>string</code> | The unique identifier of the deployment environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.deleteEnvironment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Environments.DeleteEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.deleteEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Environments.DeleteEnvironmentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllEnvironments(request: Environments.GetAllEnvironmentsRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentList, Environments.GetAllEnvironmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all deployment environments configured for the stack, such as production, staging, and development.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.getAllEnvironments({ apiKey: "some example string" });
  // TODO: Handle 'response' of type EnvironmentList
} catch (err) {
  // TODO: Handle 'err' of type Environments.GetAllEnvironmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments.getAllEnvironments({ apiKey: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentList
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
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>authtoken?</code> | <code>string</code> | User session token for authentication. Required if not using management token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.getAllEnvironments(request)`

- **OnSuccess**: <code>[EnvironmentList](src/models/environment-list.ts)</code>
- **OnError**: throws <code>[Environments.GetAllEnvironmentsError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.getAllEnvironments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentList, Environments.GetAllEnvironmentsError&gt;</code>, with `result.value` of type <code>[EnvironmentList](src/models/environment-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnvironment(request: Environments.GetEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;Environment2, Environments.GetEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific deployment environment including its domain configuration, framework settings, and latest deployment status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.getEnvironment({
    projectUid: "some example string",
    envUid: "some example string",
  });
  // TODO: Handle 'response' of type Environment2
} catch (err) {
  // TODO: Handle 'err' of type Environments.GetEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .getEnvironment({ projectUid: "some example string", envUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment2
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>envUid</code> | <code>string</code> | The unique identifier of the deployment environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.getEnvironment(request)`

- **OnSuccess**: <code>[Environment2](src/models/environment2.ts)</code>
- **OnError**: throws <code>[Environments.GetEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.getEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment2, Environments.GetEnvironmentError&gt;</code>, with `result.value` of type <code>[Environment2](src/models/environment2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectsByProjectUidEnvironments(request: Environments.GetProjectsByProjectUidEnvironmentsRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentList2, Environments.GetProjectsByProjectUidEnvironmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all deployment environments configured for a Launch project, including their domain configurations and current deployment status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.getProjectsByProjectUidEnvironments({
    projectUid: "some example string",
  });
  // TODO: Handle 'response' of type EnvironmentList2
} catch (err) {
  // TODO: Handle 'err' of type Environments.GetProjectsByProjectUidEnvironmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .getProjectsByProjectUidEnvironments({ projectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentList2
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.getProjectsByProjectUidEnvironments(request)`

- **OnSuccess**: <code>[EnvironmentList2](src/models/environment-list2.ts)</code>
- **OnError**: throws <code>[Environments.GetProjectsByProjectUidEnvironmentsError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.getProjectsByProjectUidEnvironments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentList2, Environments.GetProjectsByProjectUidEnvironmentsError&gt;</code>, with `result.value` of type <code>[EnvironmentList2](src/models/environment-list2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revalidateCache(request: Environments.RevalidateCacheRequest, options?: RequestOptions): ApiPromise&lt;undefined, Environments.RevalidateCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a CDN cache revalidation for the specified environment, forcing the CDN to fetch fresh content on the next request. Subject to cache revalidation quota limits per organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.environments.revalidateCache({
    projectUid: "some example string",
    envUid: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Environments.RevalidateCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .revalidateCache({ projectUid: "some example string", envUid: "some example string" })
  .asApiResult();
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>envUid</code> | <code>string</code> | The unique identifier of the deployment environment. |
| <code>body?</code> | <code>[ProjectsEnvironmentsRevalidateCacheRequest](src/models/projects-environments-revalidate-cache-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.revalidateCache(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Environments.RevalidateCacheError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.revalidateCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Environments.RevalidateCacheError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEnvironment(request: Environments.UpdateEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;Environment2, Environments.UpdateEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of a deployment environment such as domain settings or build configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.updateEnvironment({
    projectUid: "some example string",
    envUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type Environment2
} catch (err) {
  // TODO: Handle 'err' of type Environments.UpdateEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .updateEnvironment({
    projectUid: "some example string",
    envUid: "some example string",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment2
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>envUid</code> | <code>string</code> | The unique identifier of the deployment environment. |
| <code>body</code> | <code>[CreateEnvironmentRequest](src/models/create-environment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.updateEnvironment(request)`

- **OnSuccess**: <code>[Environment2](src/models/environment2.ts)</code>
- **OnError**: throws <code>[Environments.UpdateEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.updateEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment2, Environments.UpdateEnvironmentError&gt;</code>, with `result.value` of type <code>[Environment2](src/models/environment2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>getAllEvents(request: Events.GetAllEventsRequest, options?: RequestOptions): ApiPromise&lt;EventList, Events.GetAllEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all custom event definitions in the Personalize project. Events are used to track user interactions and trigger audience membership updates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.getAllEvents({ xProjectUid: "some example string" });
  // TODO: Handle 'response' of type EventList
} catch (err) {
  // TODO: Handle 'err' of type Events.GetAllEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.getAllEvents({ xProjectUid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventList
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.getAllEvents(request)`

- **OnSuccess**: <code>[EventList](src/models/event-list.ts)</code>
- **OnError**: throws <code>[Events.GetAllEventsError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.getAllEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventList, Events.GetAllEventsError&gt;</code>, with `result.value` of type <code>[EventList](src/models/event-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trackEvents(request: Events.TrackEventsRequest, options?: RequestOptions): ApiPromise&lt;undefined, Events.TrackEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records one or more user behavior events for experience analytics and audience evaluation. Supports both impression events (automatic tracking when experiences are shown) and custom events (defined in the Personalize Management API and triggered by specific user actions).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.events.trackEvents({
    xProjectUid: "some example string",
    xCsPersonalizeUserUid: "some example string",
    body: [{ eventKey: "some example string" }],
  });
} catch (err) {
  // TODO: Handle 'err' of type Events.TrackEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events
  .trackEvents({
    xProjectUid: "some example string",
    xCsPersonalizeUserUid: "some example string",
    body: [{ eventKey: "some example string" }],
  })
  .asApiResult();
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>xCsPersonalizeUserUid</code> | <code>string</code> | The unique identifier for the end user whose events are being tracked. |
| <code>body</code> | <code>[TrackEvent](src/models/track-event.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.trackEvents(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Events.TrackEventsError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.trackEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Events.TrackEventsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExecutionLogs

> Source: [ExecutionLogs](src/resources/execution-logs.ts)

<details>
<summary><code>getAllExecutionLogs(request: ExecutionLogs.GetAllExecutionLogsRequest, options?: RequestOptions): ApiPromise&lt;ExecutionLogList, ExecutionLogs.GetAllExecutionLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of execution log entries for all automations in the project, showing each run with its trigger context, status, and completion time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.executionLogs.getAllExecutionLogs({
    organizationUid: "some example string",
    projectUid: "some example string",
  });
  // TODO: Handle 'response' of type ExecutionLogList
} catch (err) {
  // TODO: Handle 'err' of type ExecutionLogs.GetAllExecutionLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.executionLogs
  .getAllExecutionLogs({ organizationUid: "some example string", projectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExecutionLogList
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.executionLogs.getAllExecutionLogs(request)`

- **OnSuccess**: <code>[ExecutionLogList](src/models/execution-log-list.ts)</code>
- **OnError**: throws <code>[ExecutionLogs.GetAllExecutionLogsError](src/resources/execution-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.executionLogs.getAllExecutionLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExecutionLogList, ExecutionLogs.GetAllExecutionLogsError&gt;</code>, with `result.value` of type <code>[ExecutionLogList](src/models/execution-log-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExecutionLog(request: ExecutionLogs.GetExecutionLogRequest, options?: RequestOptions): ApiPromise&lt;ExecutionLog, ExecutionLogs.GetExecutionLogError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full details of a specific automation execution log entry, including step-by-step results and any error messages encountered.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.executionLogs.getExecutionLog({
    organizationUid: "some example string",
    projectUid: "some example string",
    executionUid: "some example string",
  });
  // TODO: Handle 'response' of type ExecutionLog
} catch (err) {
  // TODO: Handle 'err' of type ExecutionLogs.GetExecutionLogError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.executionLogs
  .getExecutionLog({
    organizationUid: "some example string",
    projectUid: "some example string",
    executionUid: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExecutionLog
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |
| <code>executionUid</code> | <code>string</code> | The unique identifier of the execution log entry. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.executionLogs.getExecutionLog(request)`

- **OnSuccess**: <code>[ExecutionLog](src/models/execution-log.ts)</code>
- **OnError**: throws <code>[ExecutionLogs.GetExecutionLogError](src/resources/execution-logs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.executionLogs.getExecutionLog(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExecutionLog, ExecutionLogs.GetExecutionLogError&gt;</code>, with `result.value` of type <code>[ExecutionLog](src/models/execution-log.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Experiences

> Source: [Experiences](src/resources/experiences.ts)

<details>
<summary><code>createExperience(request: Experiences.CreateExperienceRequestParams, options?: RequestOptions): ApiPromise&lt;Experience, Experiences.CreateExperienceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new experience in the Personalize project. Experiences can be of type SEGMENTED (rule-based audience targeting) or AB_TEST (split testing with traffic distribution).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiences.createExperience({
    xProjectUid: "some example string",
    body: { name: "some example string", type: Type1.Segmented },
  });
  // TODO: Handle 'response' of type Experience
} catch (err) {
  // TODO: Handle 'err' of type Experiences.CreateExperienceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiences
  .createExperience({
    xProjectUid: "some example string",
    body: { name: "some example string", type: Type1.Segmented },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Experience
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateExperienceRequest](src/models/create-experience-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiences.createExperience(request)`

- **OnSuccess**: <code>[Experience](src/models/experience.ts)</code>
- **OnError**: throws <code>[Experiences.CreateExperienceError](src/resources/experiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiences.createExperience(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Experience, Experiences.CreateExperienceError&gt;</code>, with `result.value` of type <code>[Experience](src/models/experience.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteExperience(request: Experiences.DeleteExperienceRequest, options?: RequestOptions): ApiPromise&lt;undefined, Experiences.DeleteExperienceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an experience from the Personalize project. Only experiences in draft or inactive status can be deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.experiences.deleteExperience({
    id: "some example string",
    xProjectUid: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Experiences.DeleteExperienceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiences
  .deleteExperience({ id: "some example string", xProjectUid: "some example string" })
  .asApiResult();
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
| <code>id</code> | <code>string</code> | The unique identifier of the experience. |
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiences.deleteExperience(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Experiences.DeleteExperienceError](src/resources/experiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiences.deleteExperience(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Experiences.DeleteExperienceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllExperiences(request: Experiences.GetAllExperiencesRequest, options?: RequestOptions): ApiPromise&lt;ExperienceList, Experiences.GetAllExperiencesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all experience configurations in the Personalize project, including their variant definitions and audience assignments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiences.getAllExperiences({ xProjectUid: "some example string" });
  // TODO: Handle 'response' of type ExperienceList
} catch (err) {
  // TODO: Handle 'err' of type Experiences.GetAllExperiencesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiences
  .getAllExperiences({ xProjectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExperienceList
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiences.getAllExperiences(request)`

- **OnSuccess**: <code>[ExperienceList](src/models/experience-list.ts)</code>
- **OnError**: throws <code>[Experiences.GetAllExperiencesError](src/resources/experiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiences.getAllExperiences(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExperienceList, Experiences.GetAllExperiencesError&gt;</code>, with `result.value` of type <code>[ExperienceList](src/models/experience-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExperience(request: Experiences.GetExperienceRequest, options?: RequestOptions): ApiPromise&lt;Experience, Experiences.GetExperienceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific experience including its variants, audience assignments, status, and configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiences.getExperience({
    id: "some example string",
    xProjectUid: "some example string",
  });
  // TODO: Handle 'response' of type Experience
} catch (err) {
  // TODO: Handle 'err' of type Experiences.GetExperienceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiences
  .getExperience({ id: "some example string", xProjectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Experience
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
| <code>id</code> | <code>string</code> | The unique identifier of the experience. |
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiences.getExperience(request)`

- **OnSuccess**: <code>[Experience](src/models/experience.ts)</code>
- **OnError**: throws <code>[Experiences.GetExperienceError](src/resources/experiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiences.getExperience(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Experience, Experiences.GetExperienceError&gt;</code>, with `result.value` of type <code>[Experience](src/models/experience.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExperiencePriority(request: Experiences.GetExperiencePriorityRequest, options?: RequestOptions): ApiPromise&lt;ExperiencePriority, Experiences.GetExperiencePriorityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the priority ordering of all active experiences, which determines which experience takes precedence when a user qualifies for multiple experiences.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiences.getExperiencePriority({ xProjectUid: "some example string" });
  // TODO: Handle 'response' of type ExperiencePriority
} catch (err) {
  // TODO: Handle 'err' of type Experiences.GetExperiencePriorityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiences
  .getExperiencePriority({ xProjectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExperiencePriority
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiences.getExperiencePriority(request)`

- **OnSuccess**: <code>[ExperiencePriority](src/models/experience-priority.ts)</code>
- **OnError**: throws <code>[Experiences.GetExperiencePriorityError](src/resources/experiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiences.getExperiencePriority(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExperiencePriority, Experiences.GetExperiencePriorityError&gt;</code>, with `result.value` of type <code>[ExperiencePriority](src/models/experience-priority.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateExperience(request: Experiences.UpdateExperienceRequest, options?: RequestOptions): ApiPromise&lt;Experience, Experiences.UpdateExperienceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing experience including its name, variants, and audience targeting rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiences.updateExperience({
    id: "some example string",
    xProjectUid: "some example string",
    body: { name: "some example string", type: Type1.Segmented },
  });
  // TODO: Handle 'response' of type Experience
} catch (err) {
  // TODO: Handle 'err' of type Experiences.UpdateExperienceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiences
  .updateExperience({
    id: "some example string",
    xProjectUid: "some example string",
    body: { name: "some example string", type: Type1.Segmented },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Experience
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
| <code>id</code> | <code>string</code> | The unique identifier of the experience. |
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[CreateExperienceRequest](src/models/create-experience-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiences.updateExperience(request)`

- **OnSuccess**: <code>[Experience](src/models/experience.ts)</code>
- **OnError**: throws <code>[Experiences.UpdateExperienceError](src/resources/experiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiences.updateExperience(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Experience, Experiences.UpdateExperienceError&gt;</code>, with `result.value` of type <code>[Experience](src/models/experience.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateExperiencePriority(request: Experiences.UpdateExperiencePriorityRequest, options?: RequestOptions): ApiPromise&lt;ExperiencePriority, Experiences.UpdateExperiencePriorityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the priority ordering of experiences to control which experience is applied first when a user qualifies for multiple active experiences.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.experiences.updateExperiencePriority({
    xProjectUid: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ExperiencePriority
} catch (err) {
  // TODO: Handle 'err' of type Experiences.UpdateExperiencePriorityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.experiences
  .updateExperiencePriority({ xProjectUid: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExperiencePriority
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[ExperiencePriority](src/models/experience-priority.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.experiences.updateExperiencePriority(request)`

- **OnSuccess**: <code>[ExperiencePriority](src/models/experience-priority.ts)</code>
- **OnError**: throws <code>[Experiences.UpdateExperiencePriorityError](src/resources/experiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.experiences.updateExperiencePriority(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExperiencePriority, Experiences.UpdateExperiencePriorityError&gt;</code>, with `result.value` of type <code>[ExperiencePriority](src/models/experience-priority.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FileUploads

> Source: [FileUploads](src/resources/file-uploads.ts)

<details>
<summary><code>getProjectUploadUrl(options?: RequestOptions): ApiPromise&lt;UploadUrlResponse, FileUploads.GetProjectUploadUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a pre-signed URL valid for 10 minutes for uploading a project build artifact file. Use this URL to upload your build package before triggering a deployment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fileUploads.getProjectUploadUrl();
  // TODO: Handle 'response' of type UploadUrlResponse
} catch (err) {
  // TODO: Handle 'err' of type FileUploads.GetProjectUploadUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileUploads.getProjectUploadUrl().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadUrlResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileUploads.getProjectUploadUrl()`

- **OnSuccess**: <code>[UploadUrlResponse](src/models/upload-url-response.ts)</code>
- **OnError**: throws <code>[FileUploads.GetProjectUploadUrlError](src/resources/file-uploads.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileUploads.getProjectUploadUrl().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadUrlResponse, FileUploads.GetProjectUploadUrlError&gt;</code>, with `result.value` of type <code>[UploadUrlResponse](src/models/upload-url-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Geolocation

> Source: [Geolocation](src/resources/geolocation.ts)

<details>
<summary><code>getGeoCities(request: Geolocation.GetGeoCitiesRequest, options?: RequestOptions): ApiPromise&lt;GeoList, Geolocation.GetGeoCitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of cities available for location-based audience targeting rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geolocation.getGeoCities({ xProjectUid: "some example string" });
  // TODO: Handle 'response' of type GeoList
} catch (err) {
  // TODO: Handle 'err' of type Geolocation.GetGeoCitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geolocation.getGeoCities({ xProjectUid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeoList
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geolocation.getGeoCities(request)`

- **OnSuccess**: <code>[GeoList](src/models/geo-list.ts)</code>
- **OnError**: throws <code>[Geolocation.GetGeoCitiesError](src/resources/geolocation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geolocation.getGeoCities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeoList, Geolocation.GetGeoCitiesError&gt;</code>, with `result.value` of type <code>[GeoList](src/models/geo-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGeoCountries(request: Geolocation.GetGeoCountriesRequest, options?: RequestOptions): ApiPromise&lt;GeoList, Geolocation.GetGeoCountriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of countries available for location-based audience targeting rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geolocation.getGeoCountries({ xProjectUid: "some example string" });
  // TODO: Handle 'response' of type GeoList
} catch (err) {
  // TODO: Handle 'err' of type Geolocation.GetGeoCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geolocation.getGeoCountries({ xProjectUid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeoList
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geolocation.getGeoCountries(request)`

- **OnSuccess**: <code>[GeoList](src/models/geo-list.ts)</code>
- **OnError**: throws <code>[Geolocation.GetGeoCountriesError](src/resources/geolocation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geolocation.getGeoCountries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeoList, Geolocation.GetGeoCountriesError&gt;</code>, with `result.value` of type <code>[GeoList](src/models/geo-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGeoRegions(request: Geolocation.GetGeoRegionsRequest, options?: RequestOptions): ApiPromise&lt;GeoList, Geolocation.GetGeoRegionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of geographic regions available for location-based audience targeting rules.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geolocation.getGeoRegions({ xProjectUid: "some example string" });
  // TODO: Handle 'response' of type GeoList
} catch (err) {
  // TODO: Handle 'err' of type Geolocation.GetGeoRegionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geolocation.getGeoRegions({ xProjectUid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GeoList
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geolocation.getGeoRegions(request)`

- **OnSuccess**: <code>[GeoList](src/models/geo-list.ts)</code>
- **OnError**: throws <code>[Geolocation.GetGeoRegionsError](src/resources/geolocation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geolocation.getGeoRegions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GeoList, Geolocation.GetGeoRegionsError&gt;</code>, with `result.value` of type <code>[GeoList](src/models/geo-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GlobalFields

> Source: [GlobalFields](src/resources/global-fields.ts)

<details>
<summary><code>getAllGlobalFields(request: GlobalFields.GetAllGlobalFieldsRequest, options?: RequestOptions): ApiPromise&lt;GlobalFieldList, GlobalFields.GetAllGlobalFieldsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches all reusable global field definitions available in the stack. Global fields can be embedded in content type schemas to create consistent field structures across multiple content types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalFields.getAllGlobalFields({
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type GlobalFieldList
} catch (err) {
  // TODO: Handle 'err' of type GlobalFields.GetAllGlobalFieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalFields
  .getAllGlobalFields({ apiKey: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GlobalFieldList
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
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.globalFields.getAllGlobalFields(request)`

- **OnSuccess**: <code>[GlobalFieldList](src/models/global-field-list.ts)</code>
- **OnError**: throws <code>[GlobalFields.GetAllGlobalFieldsError](src/resources/global-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.globalFields.getAllGlobalFields(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GlobalFieldList, GlobalFields.GetAllGlobalFieldsError&gt;</code>, with `result.value` of type <code>[GlobalFieldList](src/models/global-field-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleGlobalField(request: GlobalFields.GetSingleGlobalFieldRequest, options?: RequestOptions): ApiPromise&lt;GlobalField, GlobalFields.GetSingleGlobalFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the schema and metadata for a specific global field identified by its UID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.globalFields.getSingleGlobalField({
    globalFieldUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type GlobalField
} catch (err) {
  // TODO: Handle 'err' of type GlobalFields.GetSingleGlobalFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.globalFields
  .getSingleGlobalField({
    globalFieldUid: "some example string",
    apiKey: "some example string",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GlobalField
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
| <code>globalFieldUid</code> | <code>string</code> | The unique identifier (UID) of the global field. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.globalFields.getSingleGlobalField(request)`

- **OnSuccess**: <code>[GlobalField](src/models/global-field.ts)</code>
- **OnError**: throws <code>[GlobalFields.GetSingleGlobalFieldError](src/resources/global-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.globalFields.getSingleGlobalField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GlobalField, GlobalFields.GetSingleGlobalFieldError&gt;</code>, with `result.value` of type <code>[GlobalField](src/models/global-field.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LlmConfiguration

> Source: [LlmConfiguration](src/resources/llm-configuration.ts)

<details>
<summary><code>configureLlm(request: LlmConfiguration.ConfigureLlmRequest, options?: RequestOptions): ApiPromise&lt;LlmConfig, LlmConfiguration.ConfigureLlmError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers custom API credentials for an LLM provider to enable content generation through the organization's own LLM subscription rather than Contentstack's default AI infrastructure.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.llmConfiguration.configureLlm({
    brandKitUid: "some example string",
    organizationUid: "some example string",
    body: { provider: Provider.Openai, apiKey: "some example string" },
  });
  // TODO: Handle 'response' of type LlmConfig
} catch (err) {
  // TODO: Handle 'err' of type LlmConfiguration.ConfigureLlmError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.llmConfiguration
  .configureLlm({
    brandKitUid: "some example string",
    organizationUid: "some example string",
    body: { provider: Provider.Openai, apiKey: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LlmConfig
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateLlmConfigRequest](src/models/create-llm-config-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.llmConfiguration.configureLlm(request)`

- **OnSuccess**: <code>[LlmConfig](src/models/llm-config.ts)</code>
- **OnError**: throws <code>[LlmConfiguration.ConfigureLlmError](src/resources/llm-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.llmConfiguration.configureLlm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LlmConfig, LlmConfiguration.ConfigureLlmError&gt;</code>, with `result.value` of type <code>[LlmConfig](src/models/llm-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLlmConfig(request: LlmConfiguration.GetLlmConfigRequest, options?: RequestOptions): ApiPromise&lt;LlmConfig, LlmConfiguration.GetLlmConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the custom LLM provider credentials configured for a Brand Kit. This allows organizations to use their own LLM API subscriptions for content generation within the Brand Kit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.llmConfiguration.getLlmConfig({
    brandKitUid: "some example string",
    organizationUid: "some example string",
  });
  // TODO: Handle 'response' of type LlmConfig
} catch (err) {
  // TODO: Handle 'err' of type LlmConfiguration.GetLlmConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.llmConfiguration
  .getLlmConfig({ brandKitUid: "some example string", organizationUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LlmConfig
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.llmConfiguration.getLlmConfig(request)`

- **OnSuccess**: <code>[LlmConfig](src/models/llm-config.ts)</code>
- **OnError**: throws <code>[LlmConfiguration.GetLlmConfigError](src/resources/llm-configuration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.llmConfiguration.getLlmConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LlmConfig, LlmConfiguration.GetLlmConfigError&gt;</code>, with `result.value` of type <code>[LlmConfig](src/models/llm-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ManifestApi

> Source: [ManifestApi](src/resources/manifest-api.ts)

<details>
<summary><code>getManifest(request: ManifestApi.GetManifestRequest, options?: RequestOptions): ApiPromise&lt;Manifest, ManifestApi.GetManifestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all active personalization experiences and their corresponding content variant mappings for the current user. The manifest is evaluated in real-time based on the user's attributes and current audience memberships. This endpoint is called at the beginning of a user session to determine which content variants to display.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.manifestApi.getManifest({ xProjectUid: "some example string" });
  // TODO: Handle 'response' of type Manifest
} catch (err) {
  // TODO: Handle 'err' of type ManifestApi.GetManifestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.manifestApi.getManifest({ xProjectUid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Manifest
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>xCsPersonalizeUserUid?</code> | <code>string</code> | The unique identifier for the end user. If not provided, a new anonymous user will be created and the UID returned in the response headers. |
| <code>xForwardedFor?</code> | <code>string</code> | Original client IP address for geolocation-based targeting. |
| <code>userAgent?</code> | <code>string</code> | User agent string for device-based targeting rules. |
| <code>referer?</code> | <code>string</code> | Referring URL for referral-based audience rules. |
| <code>xPageUrl?</code> | <code>string</code> | Current page URL for page-based audience targeting rules. |
| <code>xLiveAttributes?</code> | <code>string</code> | JSON-encoded object of real-time attribute values to evaluate audience rules against without persisting them. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.manifestApi.getManifest(request)`

- **OnSuccess**: <code>[Manifest](src/models/manifest.ts)</code>
- **OnError**: throws <code>[ManifestApi.GetManifestError](src/resources/manifest-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.manifestApi.getManifest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Manifest, ManifestApi.GetManifestError&gt;</code>, with `result.value` of type <code>[Manifest](src/models/manifest.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/resources/organizations.ts)

<details>
<summary><code>getAllOrganizations(options?: RequestOptions): ApiPromise&lt;OrganizationList, Organizations.GetAllOrganizationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Contentstack organizations that the authenticated user is a member of, along with their roles and permissions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getAllOrganizations();
  // TODO: Handle 'response' of type OrganizationList
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetAllOrganizationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations.getAllOrganizations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrganizationList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getAllOrganizations()`

- **OnSuccess**: <code>[OrganizationList](src/models/organization-list.ts)</code>
- **OnError**: throws <code>[Organizations.GetAllOrganizationsError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getAllOrganizations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrganizationList, Organizations.GetAllOrganizationsError&gt;</code>, with `result.value` of type <code>[OrganizationList](src/models/organization-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrganization(request: Organizations.GetOrganizationRequest, options?: RequestOptions): ApiPromise&lt;Organization, Organizations.GetOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific organization identified by its UID, including plan information and configuration settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getOrganization({ organizationUid: "some example string" });
  // TODO: Handle 'response' of type Organization
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getOrganization({ organizationUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Organization
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getOrganization(request)`

- **OnSuccess**: <code>[Organization](src/models/organization.ts)</code>
- **OnError**: throws <code>[Organizations.GetOrganizationError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getOrganization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Organization, Organizations.GetOrganizationError&gt;</code>, with `result.value` of type <code>[Organization](src/models/organization.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrganizationStacks(request: Organizations.GetOrganizationStacksRequest, options?: RequestOptions): ApiPromise&lt;StackList, Organizations.GetOrganizationStacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all stacks within a given organization that the authenticated user has access to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizations.getOrganizationStacks({
    organizationUid: "some example string",
  });
  // TODO: Handle 'response' of type StackList
} catch (err) {
  // TODO: Handle 'err' of type Organizations.GetOrganizationStacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizations
  .getOrganizationStacks({ organizationUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StackList
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizations.getOrganizationStacks(request)`

- **OnSuccess**: <code>[StackList](src/models/stack-list.ts)</code>
- **OnError**: throws <code>[Organizations.GetOrganizationStacksError](src/resources/organizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizations.getOrganizationStacks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StackList, Organizations.GetOrganizationStacksError&gt;</code>, with `result.value` of type <code>[StackList](src/models/stack-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>createProject(request: Projects.CreateProjectRequestParams, options?: RequestOptions): ApiPromise&lt;Project, Projects.CreateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new automation project within the specified organization. Projects serve as organizational containers for automations and shared configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.createProject({
    organizationUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProject({ organizationUid: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateProjectRequest](src/models/create-project-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.CreateProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.CreateProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProject(request: Projects.DeleteProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, Projects.DeleteProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an automation project and all its automations, variables, and configuration. This action is irreversible.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.deleteProject({
    organizationUid: "some example string",
    projectUid: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Projects.DeleteProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .deleteProject({ organizationUid: "some example string", projectUid: "some example string" })
  .asApiResult();
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.deleteProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.DeleteProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.deleteProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.DeleteProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProjectsByProjectUid(request: Projects.DeleteProjectsByProjectUidRequest, options?: RequestOptions): ApiPromise&lt;undefined, Projects.DeleteProjectsByProjectUidError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a Launch project and all its environments and deployment history. This action is irreversible.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.deleteProjectsByProjectUid({ projectUid: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Projects.DeleteProjectsByProjectUidError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .deleteProjectsByProjectUid({ projectUid: "some example string" })
  .asApiResult();
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.deleteProjectsByProjectUid(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.DeleteProjectsByProjectUidError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.deleteProjectsByProjectUid(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.DeleteProjectsByProjectUidError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllProjects(request: Projects.GetAllProjectsRequest, options?: RequestOptions): ApiPromise&lt;ProjectList, Projects.GetAllProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all automation projects within the specified organization. Each project contains automations, variables, and external service account connections.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getAllProjects({ organizationUid: "some example string" });
  // TODO: Handle 'response' of type ProjectList
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetAllProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.getAllProjects({ organizationUid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectList
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getAllProjects(request)`

- **OnSuccess**: <code>[ProjectList](src/models/project-list.ts)</code>
- **OnError**: throws <code>[Projects.GetAllProjectsError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getAllProjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectList, Projects.GetAllProjectsError&gt;</code>, with `result.value` of type <code>[ProjectList](src/models/project-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.GetProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific automation project including its metadata, creation date, and current status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProject({
    organizationUid: "some example string",
    projectUid: "some example string",
  });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProject({ organizationUid: "some example string", projectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.GetProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjects(options?: RequestOptions): ApiPromise&lt;ProjectList2, Projects.GetProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all Launch projects accessible to the authenticated user or organization. Returns project metadata including names, creation dates, and environment counts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjects();
  // TODO: Handle 'response' of type ProjectList2
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.getProjects().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectList2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjects()`

- **OnSuccess**: <code>[ProjectList2](src/models/project-list2.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectsError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjects().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectList2, Projects.GetProjectsError&gt;</code>, with `result.value` of type <code>[ProjectList2](src/models/project-list2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjectsByProjectUid(request: Projects.GetProjectsByProjectUidRequest, options?: RequestOptions): ApiPromise&lt;Project2, Projects.GetProjectsByProjectUidError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific Launch project including its configuration, current status, and linked Contentstack stack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjectsByProjectUid({ projectUid: "some example string" });
  // TODO: Handle 'response' of type Project2
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectsByProjectUidError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .getProjectsByProjectUid({ projectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project2
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjectsByProjectUid(request)`

- **OnSuccess**: <code>[Project2](src/models/project2.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectsByProjectUidError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjectsByProjectUid(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project2, Projects.GetProjectsByProjectUidError&gt;</code>, with `result.value` of type <code>[Project2](src/models/project2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postProjects(request: Projects.PostProjectsRequest, options?: RequestOptions): ApiPromise&lt;Project2, Projects.PostProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Launch project for deploying a web application. Projects serve as the top-level container for environments and deployments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.postProjects({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Project2
} catch (err) {
  // TODO: Handle 'err' of type Projects.PostProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.postProjects({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project2
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
| <code>body</code> | <code>[CreateProjectRequest2](src/models/create-project-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.postProjects(request)`

- **OnSuccess**: <code>[Project2](src/models/project2.ts)</code>
- **OnError**: throws <code>[Projects.PostProjectsError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.postProjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project2, Projects.PostProjectsError&gt;</code>, with `result.value` of type <code>[Project2](src/models/project2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putProjectsByProjectUid(request: Projects.PutProjectsByProjectUidRequest, options?: RequestOptions): ApiPromise&lt;Project2, Projects.PutProjectsByProjectUidError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing Launch project such as its name, description, or framework settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.putProjectsByProjectUid({
    projectUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type Project2
} catch (err) {
  // TODO: Handle 'err' of type Projects.PutProjectsByProjectUidError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .putProjectsByProjectUid({ projectUid: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project2
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
| <code>projectUid</code> | <code>string</code> | The unique identifier of the Launch project. |
| <code>body</code> | <code>[CreateProjectRequest2](src/models/create-project-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.putProjectsByProjectUid(request)`

- **OnSuccess**: <code>[Project2](src/models/project2.ts)</code>
- **OnError**: throws <code>[Projects.PutProjectsByProjectUidError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.putProjectsByProjectUid(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project2, Projects.PutProjectsByProjectUidError&gt;</code>, with `result.value` of type <code>[Project2](src/models/project2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProject(request: Projects.UpdateProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.UpdateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name or description of an existing automation project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.updateProject({
    organizationUid: "some example string",
    projectUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.UpdateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .updateProject({
    organizationUid: "some example string",
    projectUid: "some example string",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |
| <code>body</code> | <code>[CreateProjectRequest](src/models/create-project-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.updateProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.UpdateProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.updateProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.UpdateProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ScimGroups

> Source: [ScimGroups](src/resources/scim-groups.ts)

<details>
<summary><code>createScimGroup(request: ScimGroups.CreateScimGroupRequest, options?: RequestOptions): ApiPromise&lt;ScimGroup, ScimGroups.CreateScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new group in the Contentstack organization via SCIM. Groups can be mapped to specific roles and stacks in Contentstack to control member access permissions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimGroups.createScimGroup({
    organizationUid: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ScimGroup
} catch (err) {
  // TODO: Handle 'err' of type ScimGroups.CreateScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimGroups
  .createScimGroup({ organizationUid: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimGroup
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>body</code> | <code>[ScimGroup](src/models/scim-group.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimGroups.createScimGroup(request)`

- **OnSuccess**: <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: throws <code>[ScimGroups.CreateScimGroupError](src/resources/scim-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimGroups.createScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimGroup, ScimGroups.CreateScimGroupError&gt;</code>, with `result.value` of type <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteScimGroup(request: ScimGroups.DeleteScimGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, ScimGroups.DeleteScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a SCIM group from the Contentstack organization. Members of the group retain their individual user accounts but lose the role permissions granted by the group mapping.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.scimGroups.deleteScimGroup({
    organizationUid: "some example string",
    groupId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type ScimGroups.DeleteScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimGroups
  .deleteScimGroup({ organizationUid: "some example string", groupId: "some example string" })
  .asApiResult();
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>groupId</code> | <code>string</code> | The SCIM group ID of the group within the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimGroups.deleteScimGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ScimGroups.DeleteScimGroupError](src/resources/scim-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimGroups.deleteScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ScimGroups.DeleteScimGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScimGroup(request: ScimGroups.GetScimGroupRequest, options?: RequestOptions): ApiPromise&lt;ScimGroup, ScimGroups.GetScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the SCIM Group resource for a specific group by its SCIM group ID within the organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimGroups.getScimGroup({
    organizationUid: "some example string",
    groupId: "some example string",
  });
  // TODO: Handle 'response' of type ScimGroup
} catch (err) {
  // TODO: Handle 'err' of type ScimGroups.GetScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimGroups
  .getScimGroup({ organizationUid: "some example string", groupId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimGroup
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>groupId</code> | <code>string</code> | The SCIM group ID of the group within the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimGroups.getScimGroup(request)`

- **OnSuccess**: <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: throws <code>[ScimGroups.GetScimGroupError](src/resources/scim-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimGroups.getScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimGroup, ScimGroups.GetScimGroupError&gt;</code>, with `result.value` of type <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listScimGroups(request: ScimGroups.ListScimGroupsRequest, options?: RequestOptions): ApiPromise&lt;ScimListResponse, ScimGroups.ListScimGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all groups in the organization following the SCIM 2.0 ListResponse format. Supports filtering by displayName for group lookup during IdP sync operations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimGroups.listScimGroups({ organizationUid: "some example string" });
  // TODO: Handle 'response' of type ScimListResponse
} catch (err) {
  // TODO: Handle 'err' of type ScimGroups.ListScimGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimGroups
  .listScimGroups({ organizationUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimListResponse
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>filter?</code> | <code>string</code> | SCIM filter expression for searching groups. Example: displayName eq "Editors" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimGroups.listScimGroups(request)`

- **OnSuccess**: <code>[ScimListResponse](src/models/scim-list-response.ts)</code>
- **OnError**: throws <code>[ScimGroups.ListScimGroupsError](src/resources/scim-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimGroups.listScimGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimListResponse, ScimGroups.ListScimGroupsError&gt;</code>, with `result.value` of type <code>[ScimListResponse](src/models/scim-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceScimGroup(request: ScimGroups.ReplaceScimGroupRequest, options?: RequestOptions): ApiPromise&lt;ScimGroup, ScimGroups.ReplaceScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fully replaces a SCIM group resource including all member assignments. Use this to synchronize the complete group membership from the IdP.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimGroups.replaceScimGroup({
    organizationUid: "some example string",
    groupId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ScimGroup
} catch (err) {
  // TODO: Handle 'err' of type ScimGroups.ReplaceScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimGroups
  .replaceScimGroup({ organizationUid: "some example string", groupId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimGroup
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>groupId</code> | <code>string</code> | The SCIM group ID of the group within the organization. |
| <code>body</code> | <code>[ScimGroup](src/models/scim-group.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimGroups.replaceScimGroup(request)`

- **OnSuccess**: <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: throws <code>[ScimGroups.ReplaceScimGroupError](src/resources/scim-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimGroups.replaceScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimGroup, ScimGroups.ReplaceScimGroupError&gt;</code>, with `result.value` of type <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateScimGroup(request: ScimGroups.UpdateScimGroupRequest, options?: RequestOptions): ApiPromise&lt;ScimGroup, ScimGroups.UpdateScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM group using SCIM 2.0 PATCH operations. Commonly used to add or remove individual members from the group without replacing the entire membership list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimGroups.updateScimGroup({
    organizationUid: "some example string",
    groupId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ScimGroup
} catch (err) {
  // TODO: Handle 'err' of type ScimGroups.UpdateScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimGroups
  .updateScimGroup({ organizationUid: "some example string", groupId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimGroup
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>groupId</code> | <code>string</code> | The SCIM group ID of the group within the organization. |
| <code>body</code> | <code>[ScimPatchRequest](src/models/scim-patch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimGroups.updateScimGroup(request)`

- **OnSuccess**: <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: throws <code>[ScimGroups.UpdateScimGroupError](src/resources/scim-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimGroups.updateScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimGroup, ScimGroups.UpdateScimGroupError&gt;</code>, with `result.value` of type <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ScimSchemaDiscovery

> Source: [ScimSchemaDiscovery](src/resources/scim-schema-discovery.ts)

<details>
<summary><code>getScimResourceTypes(options?: RequestOptions): ApiPromise&lt;ScimListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the SCIM resource types supported by the Contentstack SCIM API including Users and Groups, enabling IdP clients to discover available endpoints and their schemas.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimSchemaDiscovery.getScimResourceTypes();
  // TODO: Handle 'response' of type ScimListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimSchemaDiscovery.getScimResourceTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimSchemaDiscovery.getScimResourceTypes()`

- **OnSuccess**: <code>[ScimListResponse](src/models/scim-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.scimSchemaDiscovery.getScimResourceTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimListResponse, ApiError&gt;</code>, with `result.value` of type <code>[ScimListResponse](src/models/scim-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScimSchemas(options?: RequestOptions): ApiPromise&lt;ScimListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the SCIM schemas supported by the Contentstack SCIM API, enabling IdP clients to understand the available attributes for User and Group resources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimSchemaDiscovery.getScimSchemas();
  // TODO: Handle 'response' of type ScimListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimSchemaDiscovery.getScimSchemas().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimSchemaDiscovery.getScimSchemas()`

- **OnSuccess**: <code>[ScimListResponse](src/models/scim-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.scimSchemaDiscovery.getScimSchemas().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimListResponse, ApiError&gt;</code>, with `result.value` of type <code>[ScimListResponse](src/models/scim-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ScimUsers

> Source: [ScimUsers](src/resources/scim-users.ts)

<details>
<summary><code>createScimUser(request: ScimUsers.CreateScimUserRequest, options?: RequestOptions): ApiPromise&lt;ScimUser, ScimUsers.CreateScimUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a new user in the Contentstack organization via SCIM. The user is created with the attributes provided in the SCIM User resource and assigned to the organization's default role unless group mappings specify otherwise.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimUsers.createScimUser({
    organizationUid: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ScimUser
} catch (err) {
  // TODO: Handle 'err' of type ScimUsers.CreateScimUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimUsers
  .createScimUser({ organizationUid: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimUser
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>body</code> | <code>[ScimUser](src/models/scim-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimUsers.createScimUser(request)`

- **OnSuccess**: <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: throws <code>[ScimUsers.CreateScimUserError](src/resources/scim-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimUsers.createScimUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimUser, ScimUsers.CreateScimUserError&gt;</code>, with `result.value` of type <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScimUser(request: ScimUsers.GetScimUserRequest, options?: RequestOptions): ApiPromise&lt;ScimUser, ScimUsers.GetScimUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the SCIM User resource for a specific user by their SCIM user ID within the organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimUsers.getScimUser({
    organizationUid: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type ScimUser
} catch (err) {
  // TODO: Handle 'err' of type ScimUsers.GetScimUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimUsers
  .getScimUser({ organizationUid: "some example string", userId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimUser
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>userId</code> | <code>string</code> | The SCIM user ID of the user within the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimUsers.getScimUser(request)`

- **OnSuccess**: <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: throws <code>[ScimUsers.GetScimUserError](src/resources/scim-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimUsers.getScimUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimUser, ScimUsers.GetScimUserError&gt;</code>, with `result.value` of type <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listScimUsers(request: ScimUsers.ListScimUsersRequest, options?: RequestOptions): ApiPromise&lt;ScimListResponse, ScimUsers.ListScimUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all users in the organization following the SCIM 2.0 ListResponse format. Supports filtering by userName (email address) using the filter query parameter for user lookup during IdP sync operations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimUsers.listScimUsers({ organizationUid: "some example string" });
  // TODO: Handle 'response' of type ScimListResponse
} catch (err) {
  // TODO: Handle 'err' of type ScimUsers.ListScimUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimUsers.listScimUsers({ organizationUid: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimListResponse
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>filter?</code> | <code>string</code> | SCIM filter expression for searching users. Example: userName eq "user@example.com" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimUsers.listScimUsers(request)`

- **OnSuccess**: <code>[ScimListResponse](src/models/scim-list-response.ts)</code>
- **OnError**: throws <code>[ScimUsers.ListScimUsersError](src/resources/scim-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimUsers.listScimUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimListResponse, ScimUsers.ListScimUsersError&gt;</code>, with `result.value` of type <code>[ScimListResponse](src/models/scim-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceScimUser(request: ScimUsers.ReplaceScimUserRequest, options?: RequestOptions): ApiPromise&lt;ScimUser, ScimUsers.ReplaceScimUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fully replaces a SCIM user resource with the provided attributes. All attributes not included in the request will be cleared or reset to defaults following SCIM 2.0 PUT semantics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimUsers.replaceScimUser({
    organizationUid: "some example string",
    userId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ScimUser
} catch (err) {
  // TODO: Handle 'err' of type ScimUsers.ReplaceScimUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimUsers
  .replaceScimUser({ organizationUid: "some example string", userId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimUser
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>userId</code> | <code>string</code> | The SCIM user ID of the user within the organization. |
| <code>body</code> | <code>[ScimUser](src/models/scim-user.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimUsers.replaceScimUser(request)`

- **OnSuccess**: <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: throws <code>[ScimUsers.ReplaceScimUserError](src/resources/scim-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimUsers.replaceScimUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimUser, ScimUsers.ReplaceScimUserError&gt;</code>, with `result.value` of type <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateScimUser(request: ScimUsers.UpdateScimUserRequest, options?: RequestOptions): ApiPromise&lt;ScimUser, ScimUsers.UpdateScimUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM user resource using SCIM 2.0 PATCH operations. Commonly used to activate or deactivate users by setting the active attribute, or to update specific profile attributes without replacing the entire resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.scimUsers.updateScimUser({
    organizationUid: "some example string",
    userId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ScimUser
} catch (err) {
  // TODO: Handle 'err' of type ScimUsers.UpdateScimUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.scimUsers
  .updateScimUser({ organizationUid: "some example string", userId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimUser
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the Contentstack organization. |
| <code>userId</code> | <code>string</code> | The SCIM user ID of the user within the organization. |
| <code>body</code> | <code>[ScimPatchRequest](src/models/scim-patch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.scimUsers.updateScimUser(request)`

- **OnSuccess**: <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: throws <code>[ScimUsers.UpdateScimUserError](src/resources/scim-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.scimUsers.updateScimUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimUser, ScimUsers.UpdateScimUserError&gt;</code>, with `result.value` of type <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Stacks

> Source: [Stacks](src/resources/stacks.ts)

<details>
<summary><code>createStack(request: Stacks.CreateStackRequestParams, options?: RequestOptions): ApiPromise&lt;Stack, Stacks.CreateStackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Contentstack stack within an organization. A stack is an independent repository for content, assets, and configuration within a Contentstack account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stacks.createStack({
    organizationUid: "some example string",
    body: { stack: { name: "some example string", masterLocale: "some example string" } },
  });
  // TODO: Handle 'response' of type Stack
} catch (err) {
  // TODO: Handle 'err' of type Stacks.CreateStackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stacks
  .createStack({
    organizationUid: "some example string",
    body: { stack: { name: "some example string", masterLocale: "some example string" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Stack
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
| <code>organizationUid</code> | <code>string</code> | The UID of the organization in which to create the stack. |
| <code>body</code> | <code>[CreateStackRequest](src/models/create-stack-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stacks.createStack(request)`

- **OnSuccess**: <code>[Stack](src/models/stack.ts)</code>
- **OnError**: throws <code>[Stacks.CreateStackError](src/resources/stacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stacks.createStack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Stack, Stacks.CreateStackError&gt;</code>, with `result.value` of type <code>[Stack](src/models/stack.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStack(request: Stacks.DeleteStackRequest, options?: RequestOptions): ApiPromise&lt;undefined, Stacks.DeleteStackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a stack and all its contents. This action is irreversible and will remove all content types, entries, assets, and configuration from the stack.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stacks.deleteStack({ apiKey: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Stacks.DeleteStackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stacks.deleteStack({ apiKey: "some example string" }).asApiResult();
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
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stacks.deleteStack(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Stacks.DeleteStackError](src/resources/stacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stacks.deleteStack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Stacks.DeleteStackError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllStacks(options?: RequestOptions): ApiPromise&lt;StackList, Stacks.GetAllStacksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all stacks accessible to the authenticated user, optionally filtered by organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stacks.getAllStacks();
  // TODO: Handle 'response' of type StackList
} catch (err) {
  // TODO: Handle 'err' of type Stacks.GetAllStacksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stacks.getAllStacks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StackList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stacks.getAllStacks()`

- **OnSuccess**: <code>[StackList](src/models/stack-list.ts)</code>
- **OnError**: throws <code>[Stacks.GetAllStacksError](src/resources/stacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stacks.getAllStacks().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StackList, Stacks.GetAllStacksError&gt;</code>, with `result.value` of type <code>[StackList](src/models/stack-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStack(request: Stacks.GetStackRequest, options?: RequestOptions): ApiPromise&lt;Stack, Stacks.GetStackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific stack identified by its API key, including configuration, plan, and region information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stacks.getStack({ apiKey: "some example string" });
  // TODO: Handle 'response' of type Stack
} catch (err) {
  // TODO: Handle 'err' of type Stacks.GetStackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stacks.getStack({ apiKey: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Stack
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
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stacks.getStack(request)`

- **OnSuccess**: <code>[Stack](src/models/stack.ts)</code>
- **OnError**: throws <code>[Stacks.GetStackError](src/resources/stacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stacks.getStack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Stack, Stacks.GetStackError&gt;</code>, with `result.value` of type <code>[Stack](src/models/stack.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStack(request: Stacks.UpdateStackRequestParams, options?: RequestOptions): ApiPromise&lt;Stack, Stacks.UpdateStackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates settings and metadata for a specific stack such as name, description, and master locale configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stacks.updateStack({ apiKey: "some example string", body: {} });
  // TODO: Handle 'response' of type Stack
} catch (err) {
  // TODO: Handle 'err' of type Stacks.UpdateStackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stacks.updateStack({ apiKey: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Stack
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
| <code>apiKey</code> | <code>string</code> | The API key identifying the Contentstack stack. |
| <code>body</code> | <code>[UpdateStackRequest](src/models/update-stack-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stacks.updateStack(request)`

- **OnSuccess**: <code>[Stack](src/models/stack.ts)</code>
- **OnError**: throws <code>[Stacks.UpdateStackError](src/resources/stacks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stacks.updateStack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Stack, Stacks.UpdateStackError&gt;</code>, with `result.value` of type <code>[Stack](src/models/stack.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Synchronization

> Source: [Synchronization](src/resources/synchronization.ts)

<details>
<summary><code>syncContent(request: Synchronization.SyncContentRequest, options?: RequestOptions): ApiPromise&lt;SyncResponse, Synchronization.SyncContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates an initial sync or continues a paginated sync of all published entries and assets in the stack. Use init=true for the first sync to receive a sync token. Use the sync_token from subsequent responses to fetch only the changes since the last sync.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.synchronization.syncContent({
    locale: "en-us",
    apiKey: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type SyncResponse
} catch (err) {
  // TODO: Handle 'err' of type Synchronization.SyncContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.synchronization
  .syncContent({ locale: "en-us", apiKey: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SyncResponse
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
| <code>init?</code> | <code>boolean</code> | Set to true to initiate the first sync and receive a sync token. |
| <code>syncToken?</code> | <code>string</code> | The token received from a previous sync response. Use to fetch only changes since the last sync. |
| <code>paginationToken?</code> | <code>string</code> | Token to retrieve the next page of results in a large sync response. |
| <code>type?</code> | <code>[Type1ContentstackContentDeliverySynchronizationApi](src/models/type1-contentstack-content-delivery-synchronization-api.ts)</code> | Filter sync results by content type. Options: entry_published, entry_unpublished, entry_deleted, asset_published, asset_unpublished, asset_deleted, content_type_deleted. |
| <code>contentTypeUid?</code> | <code>string</code> | Filter sync results to a specific content type UID. |
| <code>locale?</code> | <code>string</code> | The locale code to retrieve localized content. Defaults to the default locale of the stack if not specified. |
| <code>apiKey</code> | <code>string</code> | The API key for the Contentstack stack. |
| <code>accessToken</code> | <code>string</code> | The delivery token for the stack environment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.synchronization.syncContent(request)`

- **OnSuccess**: <code>[SyncResponse](src/models/sync-response.ts)</code>
- **OnError**: throws <code>[Synchronization.SyncContentError](src/resources/synchronization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.synchronization.syncContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SyncResponse, Synchronization.SyncContentError&gt;</code>, with `result.value` of type <code>[SyncResponse](src/models/sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UserAttributes

> Source: [UserAttributes](src/resources/user-attributes.ts)

<details>
<summary><code>mergeUserAttributes(request: UserAttributes.MergeUserAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, UserAttributes.MergeUserAttributesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Merges the attributes of a source user identity into a target user identity. This is used in identity resolution scenarios where an anonymous user record needs to be combined with an authenticated user record upon login, preserving all accumulated behavioral and attribute data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.userAttributes.mergeUserAttributes({
    xProjectUid: "some example string",
    body: { sourceUserUid: "some example string", targetUserUid: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type UserAttributes.MergeUserAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userAttributes
  .mergeUserAttributes({
    xProjectUid: "some example string",
    body: { sourceUserUid: "some example string", targetUserUid: "some example string" },
  })
  .asApiResult();
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>body</code> | <code>[MergeUserAttributesRequest](src/models/merge-user-attributes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userAttributes.mergeUserAttributes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UserAttributes.MergeUserAttributesError](src/resources/user-attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userAttributes.mergeUserAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UserAttributes.MergeUserAttributesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setUserAttributes(request: UserAttributes.SetUserAttributesRequest, options?: RequestOptions): ApiPromise&lt;undefined, UserAttributes.SetUserAttributesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Persists custom user attribute values at the Personalize Edge for use in audience rule evaluation. Attributes set via this endpoint are stored against the user's identifier and used in all subsequent manifest requests. Use this endpoint to update attributes based on user actions or profile data from external systems.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.userAttributes.setUserAttributes({ xProjectUid: "some example string", body: { key: {} } });
} catch (err) {
  // TODO: Handle 'err' of type UserAttributes.SetUserAttributesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userAttributes
  .setUserAttributes({ xProjectUid: "some example string", body: { key: {} } })
  .asApiResult();
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
| <code>xProjectUid</code> | <code>string</code> | The UID of the Contentstack Personalize project. |
| <code>xCsPersonalizeUserUid?</code> | <code>string</code> | The unique identifier for the end user. If not provided, a new anonymous user will be created and the UID returned in the response headers. |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userAttributes.setUserAttributes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UserAttributes.SetUserAttributesError](src/resources/user-attributes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userAttributes.setUserAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UserAttributes.SetUserAttributesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UserSessions

> Source: [UserSessions](src/resources/user-sessions.ts)

<details>
<summary><code>loginUser(request: UserSessions.LoginUserRequest, options?: RequestOptions): ApiPromise&lt;LoginResponse, UserSessions.LoginUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authenticates a user with their email and password and returns an authtoken for use in subsequent API requests. The authtoken is valid for the duration of the session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userSessions.loginUser({
    body: { user: { email: "user@example.com", password: "some example password" } },
  });
  // TODO: Handle 'response' of type LoginResponse
} catch (err) {
  // TODO: Handle 'err' of type UserSessions.LoginUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userSessions
  .loginUser({ body: { user: { email: "user@example.com", password: "some example password" } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LoginResponse
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
| <code>body</code> | <code>[LoginRequest](src/models/login-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userSessions.loginUser(request)`

- **OnSuccess**: <code>[LoginResponse](src/models/login-response.ts)</code>
- **OnError**: throws <code>[UserSessions.LoginUserError](src/resources/user-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userSessions.loginUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LoginResponse, UserSessions.LoginUserError&gt;</code>, with `result.value` of type <code>[LoginResponse](src/models/login-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>logoutUser(options?: RequestOptions): ApiPromise&lt;undefined, UserSessions.LogoutUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invalidates the current user session and authtoken, signing the user out of all Contentstack sessions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.userSessions.logoutUser();
} catch (err) {
  // TODO: Handle 'err' of type UserSessions.LogoutUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userSessions.logoutUser().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userSessions.logoutUser()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UserSessions.LogoutUserError](src/resources/user-sessions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userSessions.logoutUser().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UserSessions.LogoutUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>getUser(options?: RequestOptions): ApiPromise&lt;User, Users.GetUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the account details of the currently authenticated user, including profile information and organization memberships.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUser();
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type Users.GetUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getUser().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type User
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUser()`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[Users.GetUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getUser().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, Users.GetUserError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUser(request: Users.UpdateUserRequestParams, options?: RequestOptions): ApiPromise&lt;User, Users.UpdateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates profile information for the currently authenticated user, including first name, last name, and other account attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateUser({ body: {} });
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type Users.UpdateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.updateUser({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type User
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
| <code>body</code> | <code>[UpdateUserRequest](src/models/update-user-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateUser(request)`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[Users.UpdateUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.updateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, Users.UpdateUserError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Variables

> Source: [Variables](src/resources/variables.ts)

<details>
<summary><code>createVariable(request: Variables.CreateVariableRequestParams, options?: RequestOptions): ApiPromise&lt;Variable, Variables.CreateVariableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project variable that can be referenced in automation configurations. Variables can store API keys, URLs, or other configuration values that are used across multiple automations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variables.createVariable({
    organizationUid: "some example string",
    projectUid: "some example string",
    body: { name: "some example string", key: "some example string", value: "some example string" },
  });
  // TODO: Handle 'response' of type Variable
} catch (err) {
  // TODO: Handle 'err' of type Variables.CreateVariableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variables
  .createVariable({
    organizationUid: "some example string",
    projectUid: "some example string",
    body: { name: "some example string", key: "some example string", value: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Variable
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |
| <code>body</code> | <code>[CreateVariableRequest](src/models/create-variable-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variables.createVariable(request)`

- **OnSuccess**: <code>[Variable](src/models/variable.ts)</code>
- **OnError**: throws <code>[Variables.CreateVariableError](src/resources/variables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variables.createVariable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Variable, Variables.CreateVariableError&gt;</code>, with `result.value` of type <code>[Variable](src/models/variable.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllVariables(request: Variables.GetAllVariablesRequest, options?: RequestOptions): ApiPromise&lt;VariableList, Variables.GetAllVariablesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all project variables defined for the automation project. Variables are reusable key-value pairs that can be referenced across automation configurations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variables.getAllVariables({
    organizationUid: "some example string",
    projectUid: "some example string",
  });
  // TODO: Handle 'response' of type VariableList
} catch (err) {
  // TODO: Handle 'err' of type Variables.GetAllVariablesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variables
  .getAllVariables({ organizationUid: "some example string", projectUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VariableList
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
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>projectUid</code> | <code>string</code> | The unique identifier of the automation project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variables.getAllVariables(request)`

- **OnSuccess**: <code>[VariableList](src/models/variable-list.ts)</code>
- **OnError**: throws <code>[Variables.GetAllVariablesError](src/resources/variables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variables.getAllVariables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VariableList, Variables.GetAllVariablesError&gt;</code>, with `result.value` of type <code>[VariableList](src/models/variable-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VoiceProfiles

> Source: [VoiceProfiles](src/resources/voice-profiles.ts)

<details>
<summary><code>createVoiceProfile(request: VoiceProfiles.CreateVoiceProfileRequestParams, options?: RequestOptions): ApiPromise&lt;VoiceProfile, VoiceProfiles.CreateVoiceProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Voice Profile within a Brand Kit defining the writing style, tone characteristics, persona guidelines, and example content for AI generation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceProfiles.createVoiceProfile({
    brandKitUid: "some example string",
    organizationUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type VoiceProfile
} catch (err) {
  // TODO: Handle 'err' of type VoiceProfiles.CreateVoiceProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceProfiles
  .createVoiceProfile({
    brandKitUid: "some example string",
    organizationUid: "some example string",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VoiceProfile
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateVoiceProfileRequest](src/models/create-voice-profile-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceProfiles.createVoiceProfile(request)`

- **OnSuccess**: <code>[VoiceProfile](src/models/voice-profile.ts)</code>
- **OnError**: throws <code>[VoiceProfiles.CreateVoiceProfileError](src/resources/voice-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceProfiles.createVoiceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VoiceProfile, VoiceProfiles.CreateVoiceProfileError&gt;</code>, with `result.value` of type <code>[VoiceProfile](src/models/voice-profile.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVoiceProfile(request: VoiceProfiles.DeleteVoiceProfileRequest, options?: RequestOptions): ApiPromise&lt;undefined, VoiceProfiles.DeleteVoiceProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently removes a Voice Profile from the Brand Kit. This action cannot be undone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.voiceProfiles.deleteVoiceProfile({
    brandKitUid: "some example string",
    profileUid: "some example string",
    organizationUid: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type VoiceProfiles.DeleteVoiceProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceProfiles
  .deleteVoiceProfile({
    brandKitUid: "some example string",
    profileUid: "some example string",
    organizationUid: "some example string",
  })
  .asApiResult();
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>profileUid</code> | <code>string</code> | The unique identifier of the Voice Profile. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceProfiles.deleteVoiceProfile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VoiceProfiles.DeleteVoiceProfileError](src/resources/voice-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceProfiles.deleteVoiceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VoiceProfiles.DeleteVoiceProfileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllVoiceProfiles(request: VoiceProfiles.GetAllVoiceProfilesRequest, options?: RequestOptions): ApiPromise&lt;VoiceProfileList, VoiceProfiles.GetAllVoiceProfilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all Voice Profiles associated with a specific Brand Kit. Voice Profiles define the writing style and tone used in AI content generation for that Brand Kit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceProfiles.getAllVoiceProfiles({
    brandKitUid: "some example string",
    organizationUid: "some example string",
  });
  // TODO: Handle 'response' of type VoiceProfileList
} catch (err) {
  // TODO: Handle 'err' of type VoiceProfiles.GetAllVoiceProfilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceProfiles
  .getAllVoiceProfiles({ brandKitUid: "some example string", organizationUid: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VoiceProfileList
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceProfiles.getAllVoiceProfiles(request)`

- **OnSuccess**: <code>[VoiceProfileList](src/models/voice-profile-list.ts)</code>
- **OnError**: throws <code>[VoiceProfiles.GetAllVoiceProfilesError](src/resources/voice-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceProfiles.getAllVoiceProfiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VoiceProfileList, VoiceProfiles.GetAllVoiceProfilesError&gt;</code>, with `result.value` of type <code>[VoiceProfileList](src/models/voice-profile-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVoiceProfile(request: VoiceProfiles.GetVoiceProfileRequest, options?: RequestOptions): ApiPromise&lt;VoiceProfile, VoiceProfiles.GetVoiceProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the full configuration of a specific Voice Profile including style guidelines, tone settings, and example content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceProfiles.getVoiceProfile({
    brandKitUid: "some example string",
    profileUid: "some example string",
    organizationUid: "some example string",
  });
  // TODO: Handle 'response' of type VoiceProfile
} catch (err) {
  // TODO: Handle 'err' of type VoiceProfiles.GetVoiceProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceProfiles
  .getVoiceProfile({
    brandKitUid: "some example string",
    profileUid: "some example string",
    organizationUid: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VoiceProfile
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>profileUid</code> | <code>string</code> | The unique identifier of the Voice Profile. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceProfiles.getVoiceProfile(request)`

- **OnSuccess**: <code>[VoiceProfile](src/models/voice-profile.ts)</code>
- **OnError**: throws <code>[VoiceProfiles.GetVoiceProfileError](src/resources/voice-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceProfiles.getVoiceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VoiceProfile, VoiceProfiles.GetVoiceProfileError&gt;</code>, with `result.value` of type <code>[VoiceProfile](src/models/voice-profile.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVoiceProfile(request: VoiceProfiles.UpdateVoiceProfileRequest, options?: RequestOptions): ApiPromise&lt;VoiceProfile, VoiceProfiles.UpdateVoiceProfileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing Voice Profile including style guidelines and tone characteristics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.voiceProfiles.updateVoiceProfile({
    brandKitUid: "some example string",
    profileUid: "some example string",
    organizationUid: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type VoiceProfile
} catch (err) {
  // TODO: Handle 'err' of type VoiceProfiles.UpdateVoiceProfileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.voiceProfiles
  .updateVoiceProfile({
    brandKitUid: "some example string",
    profileUid: "some example string",
    organizationUid: "some example string",
    body: { name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VoiceProfile
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
| <code>brandKitUid</code> | <code>string</code> | The unique identifier of the Brand Kit. |
| <code>profileUid</code> | <code>string</code> | The unique identifier of the Voice Profile. |
| <code>organizationUid</code> | <code>string</code> | The unique identifier of the organization. |
| <code>body</code> | <code>[CreateVoiceProfileRequest](src/models/create-voice-profile-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.voiceProfiles.updateVoiceProfile(request)`

- **OnSuccess**: <code>[VoiceProfile](src/models/voice-profile.ts)</code>
- **OnError**: throws <code>[VoiceProfiles.UpdateVoiceProfileError](src/resources/voice-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.voiceProfiles.updateVoiceProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VoiceProfile, VoiceProfiles.UpdateVoiceProfileError&gt;</code>, with `result.value` of type <code>[VoiceProfile](src/models/voice-profile.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ContentstackError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

