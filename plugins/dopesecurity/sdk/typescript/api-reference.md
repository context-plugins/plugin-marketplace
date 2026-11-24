# Reference

> Source: [DopeSecurityClient](src/client.ts)

## Authorization

> Source: [Authorization](src/resources/authorization.ts)

<details>
<summary><code>generateAccessToken(request: Authorization.GenerateAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;PartnerOauthTokenResponse, Authorization.GenerateAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to generate an access token for use with the Flightdeck API. A valid access token returned from
this API is required in all other Flightdeck API calls.

Token generation is based on the OAuth 2.0 Client Credentials Flow. The returned token is used within the
HTTP Authorization header as follows:

`Authorization: Bearer `

Note:
- The required `client_id` and `client_secret` are created by an admin via the dope console.
- Returned access tokens are valid for a limited time period. Clients must check the `expires_in` value in
the response to generate a new access token before the current one expires.
- The OAuth scopes parameter is not supported and if provided will be ignored. The scopes returned in the access
token are set directly by the authorization server.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authorization.generateAccessToken({
    body: { clientId: "some example string", clientSecret: "some example string" },
  });
  // TODO: Handle 'response' of type PartnerOauthTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Authorization.GenerateAccessTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorization
  .generateAccessToken({ body: { clientId: "some example string", clientSecret: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerOauthTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerOauthTokenRequest](src/models/partner-oauth-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorization.generateAccessToken(request)`

- **OnSuccess**: <code>[PartnerOauthTokenResponse](src/models/partner-oauth-token-response.ts)</code>
- **OnError**: throws <code>[Authorization.GenerateAccessTokenError](src/resources/authorization.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorization.generateAccessToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerOauthTokenResponse, Authorization.GenerateAccessTokenError&gt;</code>, with `result.value` of type <code>[PartnerOauthTokenResponse](src/models/partner-oauth-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomCategoriesApi

> Source: [CustomCategoriesApi](src/resources/custom-categories-api.ts)

<details>
<summary><code>addCustomCategoryUrls(request: CustomCategoriesApi.AddCustomCategoryUrlsRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, CustomCategoriesApi.AddCustomCategoryUrlsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to add URLs to an existing custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`)
and provide a JSON array of URLs in the request body.

Ensure that URLs are properly formatted and included in the array.

Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

If any URL in the list is invalid, the entire request will be rejected.
The 400 error response will include the list of invalid URLs in the error details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customCategoriesApi.addCustomCategoryUrls({
    customCategoryName: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type CustomCategoriesApi.AddCustomCategoryUrlsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customCategoriesApi
  .addCustomCategoryUrls({ customCategoryName: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customCategoryName</code> | <code>string</code> | The name of the custom category to add URLs to |
| <code>body</code> | <code>[CustomCategoriesUrlsRequest](src/models/custom-categories-urls-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customCategoriesApi.addCustomCategoryUrls(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[CustomCategoriesApi.AddCustomCategoryUrlsError](src/resources/custom-categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customCategoriesApi.addCustomCategoryUrls(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, CustomCategoriesApi.AddCustomCategoryUrlsError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomCategory(request: CustomCategoriesApi.CreateCustomCategoryRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, CustomCategoriesApi.CreateCustomCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to create a new custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`).

If the custom category already exists, a `400` error is returned.

Validation rules for `custom_category_name`:
- Must not be empty or whitespace-only
- Must not contain leading or trailing whitespace
- Maximum length of 32 characters
- Must not contain any of the following characters: `# ! @ $ % ^ * ? . / \`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customCategoriesApi.createCustomCategory({
    customCategoryName: "some example string",
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type CustomCategoriesApi.CreateCustomCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customCategoriesApi
  .createCustomCategory({ customCategoryName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customCategoryName</code> | <code>string</code> | The name of the custom category to create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customCategoriesApi.createCustomCategory(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[CustomCategoriesApi.CreateCustomCategoryError](src/resources/custom-categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customCategoriesApi.createCustomCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, CustomCategoriesApi.CreateCustomCategoryError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAllCustomCategoryUrls(request: CustomCategoriesApi.DeleteAllCustomCategoryUrlsRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, CustomCategoriesApi.DeleteAllCustomCategoryUrlsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete all URLs from an existing custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`).

This action will remove all URLs associated with the specified custom category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customCategoriesApi.deleteAllCustomCategoryUrls({
    customCategoryName: "some example string",
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type CustomCategoriesApi.DeleteAllCustomCategoryUrlsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customCategoriesApi
  .deleteAllCustomCategoryUrls({ customCategoryName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customCategoryName</code> | <code>string</code> | The name of the custom category to delete all URLs from |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customCategoriesApi.deleteAllCustomCategoryUrls(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[CustomCategoriesApi.DeleteAllCustomCategoryUrlsError](src/resources/custom-categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customCategoriesApi.deleteAllCustomCategoryUrls(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, CustomCategoriesApi.DeleteAllCustomCategoryUrlsError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomCategory(request: CustomCategoriesApi.DeleteCustomCategoryRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, CustomCategoriesApi.DeleteCustomCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete a single custom category by name.
This action will remove the custom category and all of its associated data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customCategoriesApi.deleteCustomCategory({
    customCategoryName: "some example string",
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type CustomCategoriesApi.DeleteCustomCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customCategoriesApi
  .deleteCustomCategory({ customCategoryName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customCategoryName</code> | <code>string</code> | The name of the custom category to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customCategoriesApi.deleteCustomCategory(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[CustomCategoriesApi.DeleteCustomCategoryError](src/resources/custom-categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customCategoriesApi.deleteCustomCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, CustomCategoriesApi.DeleteCustomCategoryError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomCategoryUrl(request: CustomCategoriesApi.DeleteCustomCategoryUrlRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, CustomCategoriesApi.DeleteCustomCategoryUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete a specific URL from an existing custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`).

Ensure that a given URL is encoded using URL encoding.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customCategoriesApi.deleteCustomCategoryUrl({
    customCategoryName: "some example string",
    encodedUrl: "some example string",
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type CustomCategoriesApi.DeleteCustomCategoryUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customCategoriesApi
  .deleteCustomCategoryUrl({ customCategoryName: "some example string", encodedUrl: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customCategoryName</code> | <code>string</code> | The name of the custom category to delete given URL from |
| <code>encodedUrl</code> | <code>string</code> | The URL to be deleted (Ensure that URLs are properly URL-encoded using<br>the UTF8 encoding method) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customCategoriesApi.deleteCustomCategoryUrl(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[CustomCategoriesApi.DeleteCustomCategoryUrlError](src/resources/custom-categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customCategoriesApi.deleteCustomCategoryUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, CustomCategoriesApi.DeleteCustomCategoryUrlError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomCategories(request?: CustomCategoriesApi.ListCustomCategoriesRequest, options?: RequestOptions): ApiPromise&lt;CustomCategoriesResponse, CustomCategoriesApi.ListCustomCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get a paginated list of all custom categories.

Results are returned in pages using cursor based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customCategoriesApi.listCustomCategories();
  // TODO: Handle 'response' of type CustomCategoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomCategoriesApi.ListCustomCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customCategoriesApi.listCustomCategories().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomCategoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>first?</code> | <code>number</code> | An optional pagination param that states the number of records requested from the **start** of the `cursor`. The default value is **50**.<br>**Default**: 50 |
| <code>after?</code> | <code>string</code> | An optional pagination cursor. Pass the `endCursor` from the previous response's `pageInfo` to fetch the next page. Check `hasNextPage` in the previous response's `pageInfo` to determine whether more records are available. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customCategoriesApi.listCustomCategories(request)`

- **OnSuccess**: <code>[CustomCategoriesResponse](src/models/custom-categories-response.ts)</code>
- **OnError**: throws <code>[CustomCategoriesApi.ListCustomCategoriesError](src/resources/custom-categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customCategoriesApi.listCustomCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomCategoriesResponse, CustomCategoriesApi.ListCustomCategoriesError&gt;</code>, with `result.value` of type <code>[CustomCategoriesResponse](src/models/custom-categories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomCategoryUrls(request: CustomCategoriesApi.ListCustomCategoryUrlsRequest, options?: RequestOptions): ApiPromise&lt;CustomCategoriesUrlsResponse, CustomCategoriesApi.ListCustomCategoryUrlsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get all URLs of an existing custom category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customCategoriesApi.listCustomCategoryUrls({
    customCategoryName: "some example string",
  });
  // TODO: Handle 'response' of type CustomCategoriesUrlsResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomCategoriesApi.ListCustomCategoryUrlsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customCategoriesApi
  .listCustomCategoryUrls({ customCategoryName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomCategoriesUrlsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customCategoryName</code> | <code>string</code> | The name of the custom category to get URLs from |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customCategoriesApi.listCustomCategoryUrls(request)`

- **OnSuccess**: <code>[CustomCategoriesUrlsResponse](src/models/custom-categories-urls-response.ts)</code>
- **OnError**: throws <code>[CustomCategoriesApi.ListCustomCategoryUrlsError](src/resources/custom-categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customCategoriesApi.listCustomCategoryUrls(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomCategoriesUrlsResponse, CustomCategoriesApi.ListCustomCategoryUrlsError&gt;</code>, with `result.value` of type <code>[CustomCategoriesUrlsResponse](src/models/custom-categories-urls-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>overwriteCustomCategoryUrls(request: CustomCategoriesApi.OverwriteCustomCategoryUrlsRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, CustomCategoriesApi.OverwriteCustomCategoryUrlsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to replace all existing URLs of a custom category with a new list of URLs.

Specify the name of the custom category in the path parameter (`custom_category_name`)
and provide a JSON array of URLs in the request body. All existing URLs will be removed
and replaced with the provided list.

Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

If any URL in the list is invalid, the entire request will be rejected.
The 400 error response will include the list of invalid URLs in the error details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customCategoriesApi.overwriteCustomCategoryUrls({
    customCategoryName: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type CustomCategoriesApi.OverwriteCustomCategoryUrlsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customCategoriesApi
  .overwriteCustomCategoryUrls({ customCategoryName: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customCategoryName</code> | <code>string</code> | The name of the custom category to overwrite URLs for |
| <code>body</code> | <code>[CustomCategoriesUrlsRequest](src/models/custom-categories-urls-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customCategoriesApi.overwriteCustomCategoryUrls(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[CustomCategoriesApi.OverwriteCustomCategoryUrlsError](src/resources/custom-categories-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customCategoriesApi.overwriteCustomCategoryUrls(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, CustomCategoriesApi.OverwriteCustomCategoryUrlsError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Endpoints

> Source: [Endpoints](src/resources/endpoints.ts)

<details>
<summary><code>searchEndpoints(request?: Endpoints.SearchEndpointsRequest, options?: RequestOptions): ApiPromise&lt;EndpointsSearchResponse, Endpoints.SearchEndpointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get a list of all endpoints, or search for those matching a query parameter.

Note:
- To return a list of all endpoints do not include any additional parameter.
- Only one of the optional parameters is allowed to be specified per request.
- Results are returned in pages using cursor based pagination and ordered by the `lastSeen` property.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.endpoints.searchEndpoints();
  // TODO: Handle 'response' of type EndpointsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Endpoints.SearchEndpointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.endpoints.searchEndpoints().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EndpointsSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | Broad search query across endpoints by device, user and email identities that contain this string (case-insensitive) |
| <code>emailId?</code> | <code>string</code> | Search by email ids that contain this string (case-insensitive) |
| <code>deviceName?</code> | <code>string</code> | Search by device names that contain this string (case-insensitive) |
| <code>userId?</code> | <code>string</code> | Search by user ids that contain this string (case-insensitive). `userId` for OIDC users is usually their email address. |
| <code>osVersion?</code> | <code>string</code> | Filter by this exact device OS version string |
| <code>status?</code> | <code>[Status](src/models/status.ts)[]</code> | Filter by this exact set of status' |
| <code>debugState?</code> | <code>[DebugState](src/models/debug-state.ts)[]</code> | Filter by this exact set of debug states.<br>0 means not in debug<br>1 means debug request sent to endpoint<br>2 means debug request acknowledged by endpoint |
| <code>fallbackMode?</code> | <code>[FallbackMode](src/models/fallback-mode.ts)</code> | Filter by the fallback mode |
| <code>locationId?</code> | <code>string</code> | Filter by this exact location id - with an underscore separating the case sensitive city and country values e.g. "City_Country" |
| <code>agentVersion?</code> | <code>string</code> | Filter by this exact agent version |
| <code>first?</code> | <code>number</code> | An optional pagination param that states the number of records requested from the **start** of the `cursor`. The default value is **50**.<br>**Default**: 50 |
| <code>after?</code> | <code>string</code> | An optional pagination cursor. Pass the `endCursor` from the previous response's `pageInfo` to fetch the next page. Check `hasNextPage` in the previous response's `pageInfo` to determine whether more records are available. |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | The direction of the sort by the `lastSeen` property. The default is to sort by descending |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.endpoints.searchEndpoints(request)`

- **OnSuccess**: <code>[EndpointsSearchResponse](src/models/endpoints-search-response.ts)</code>
- **OnError**: throws <code>[Endpoints.SearchEndpointsError](src/resources/endpoints.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.endpoints.searchEndpoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EndpointsSearchResponse, Endpoints.SearchEndpointsError&gt;</code>, with `result.value` of type <code>[EndpointsSearchResponse](src/models/endpoints-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Policies

> Source: [Policies](src/resources/policies.ts)

<details>
<summary><code>createPolicy(request: Policies.CreatePolicyRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.CreatePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to create a new policy.

Specify the name of the policy in the path parameter (`policy_name`).

If the policy already exists, a `400` error is returned.

Validation rules for `policy_name`:
- Must not be empty or whitespace-only
- Must not contain leading or trailing whitespace
- Maximum length of 32 characters
- Must not contain any of the following characters: `# ! @ $ % ^ * ? . / \`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.createPolicy({ policyName: "some example string" });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.CreatePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies.createPolicy({ policyName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to create |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.createPolicy(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.CreatePolicyError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.createPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.CreatePolicyError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomApplicationBypass(request: Policies.DeleteCustomApplicationBypassRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.DeleteCustomApplicationBypassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete custom application bypass entries from a policy by name.

The operation is idempotent — names that do not exist are silently ignored.

At least one of `mac` or `windows` must be provided.

Policies that inherit application bypass from the Base Policy cannot have custom applications deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.deleteCustomApplicationBypass({
    policyName: "some example string",
    body: { data: { custom: {} } },
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.DeleteCustomApplicationBypassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .deleteCustomApplicationBypass({ policyName: "some example string", body: { data: { custom: {} } } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to delete application bypass entries from |
| <code>body</code> | <code>[PoliciesBypassApplicationsRequest1](src/models/policies-bypass-applications-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.deleteCustomApplicationBypass(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.DeleteCustomApplicationBypassError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.deleteCustomApplicationBypass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.DeleteCustomApplicationBypassError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomUrlBypass(request: Policies.DeleteCustomUrlBypassRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.DeleteCustomUrlBypassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete custom URL bypass entries from a policy by name.

The operation is idempotent — names that do not exist are silently ignored.

Policies that inherit URL bypass from the Base Policy cannot have custom URLs deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.deleteCustomUrlBypass({
    policyName: "some example string",
    body: { data: { custom: { urls: ["some example string"] } } },
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.DeleteCustomUrlBypassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .deleteCustomUrlBypass({
    policyName: "some example string",
    body: { data: { custom: { urls: ["some example string"] } } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to delete URL bypass entries from |
| <code>body</code> | <code>[PoliciesBypassUrlsRequest1](src/models/policies-bypass-urls-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.deleteCustomUrlBypass(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.DeleteCustomUrlBypassError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.deleteCustomUrlBypass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.DeleteCustomUrlBypassError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePolicy(request: Policies.DeletePolicyRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.DeletePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete a custom policy by name.
This removes the policy and unassigns all users and groups from the policy.

The Base Policy cannot be deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.deletePolicy({ policyName: "some example string" });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.DeletePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies.deletePolicy({ policyName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to delete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.deletePolicy(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.DeletePolicyError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.deletePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.DeletePolicyError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getApplicationBypass(request: Policies.GetApplicationBypassRequest, options?: RequestOptions): ApiPromise&lt;PoliciesBypassApplicationsResponse, Policies.GetApplicationBypassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the application bypass entries for a policy.

The response contains both admin-defined `custom` entries and dope-provided
`default` entries with their per-entry toggle state, split per platform
(`mac` and `windows`).

When a policy inherits from the base policy, `inheritsFromBase` will be `true`
and the `custom` and `default` entries will reflect the base policy's settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.getApplicationBypass({ policyName: "some example string" });
  // TODO: Handle 'response' of type PoliciesBypassApplicationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Policies.GetApplicationBypassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .getApplicationBypass({ policyName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PoliciesBypassApplicationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to retrieve the application bypass for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.getApplicationBypass(request)`

- **OnSuccess**: <code>[PoliciesBypassApplicationsResponse](src/models/policies-bypass-applications-response.ts)</code>
- **OnError**: throws <code>[Policies.GetApplicationBypassError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.getApplicationBypass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PoliciesBypassApplicationsResponse, Policies.GetApplicationBypassError&gt;</code>, with `result.value` of type <code>[PoliciesBypassApplicationsResponse](src/models/policies-bypass-applications-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPolicyAssignments(request: Policies.GetPolicyAssignmentsRequest, options?: RequestOptions): ApiPromise&lt;PoliciesAssignmentsResponse, Policies.GetPolicyAssignmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the users and groups assigned to a policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.getPolicyAssignments({ policyName: "some example string" });
  // TODO: Handle 'response' of type PoliciesAssignmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Policies.GetPolicyAssignmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .getPolicyAssignments({ policyName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PoliciesAssignmentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to get assignments for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.getPolicyAssignments(request)`

- **OnSuccess**: <code>[PoliciesAssignmentsResponse](src/models/policies-assignments-response.ts)</code>
- **OnError**: throws <code>[Policies.GetPolicyAssignmentsError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.getPolicyAssignments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PoliciesAssignmentsResponse, Policies.GetPolicyAssignmentsError&gt;</code>, with `result.value` of type <code>[PoliciesAssignmentsResponse](src/models/policies-assignments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPolicyContent(request: Policies.GetPolicyContentRequest, options?: RequestOptions): ApiPromise&lt;PolicyContentResponse, Policies.GetPolicyContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to retrieve the entire content of a policy, including
categories and custom categories.

When a policy inherits from the base policy, `inheritsFromBase` will be `true`
and the content will reflect the base policy's settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.getPolicyContent({ policyName: "some example string" });
  // TODO: Handle 'response' of type PolicyContentResponse
} catch (err) {
  // TODO: Handle 'err' of type Policies.GetPolicyContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies.getPolicyContent({ policyName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PolicyContentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to retrieve content for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.getPolicyContent(request)`

- **OnSuccess**: <code>[PolicyContentResponse](src/models/policy-content-response.ts)</code>
- **OnError**: throws <code>[Policies.GetPolicyContentError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.getPolicyContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PolicyContentResponse, Policies.GetPolicyContentError&gt;</code>, with `result.value` of type <code>[PolicyContentResponse](src/models/policy-content-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSslInspection(request: Policies.GetSslInspectionRequest, options?: RequestOptions): ApiPromise&lt;PoliciesSslInspectionResponse, Policies.GetSslInspectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the SSL inspection configuration for a policy.

The response returns `sslInspection` as an object containing the resolved
`state` (always `enabled` or `disabled`) and `inheritsFromBase` indicating
whether the policy inherits SSL inspection from the Base Policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.getSslInspection({ policyName: "some example string" });
  // TODO: Handle 'response' of type PoliciesSslInspectionResponse
} catch (err) {
  // TODO: Handle 'err' of type Policies.GetSslInspectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies.getSslInspection({ policyName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PoliciesSslInspectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to retrieve SSL inspection for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.getSslInspection(request)`

- **OnSuccess**: <code>[PoliciesSslInspectionResponse](src/models/policies-ssl-inspection-response.ts)</code>
- **OnError**: throws <code>[Policies.GetSslInspectionError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.getSslInspection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PoliciesSslInspectionResponse, Policies.GetSslInspectionError&gt;</code>, with `result.value` of type <code>[PoliciesSslInspectionResponse](src/models/policies-ssl-inspection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUrlBypass(request: Policies.GetUrlBypassRequest, options?: RequestOptions): ApiPromise&lt;PoliciesBypassUrlsResponse, Policies.GetUrlBypassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the URL bypass entries for a policy.

The response contains both admin-defined `custom` entries and dope-provided
`default` entries with their per-entry toggle state.

When a policy inherits from the base policy, `inheritsFromBase` will be `true`
and the `custom` and `default` entries will reflect the base policy's settings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.getUrlBypass({ policyName: "some example string" });
  // TODO: Handle 'response' of type PoliciesBypassUrlsResponse
} catch (err) {
  // TODO: Handle 'err' of type Policies.GetUrlBypassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies.getUrlBypass({ policyName: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PoliciesBypassUrlsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to retrieve the URL bypass for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.getUrlBypass(request)`

- **OnSuccess**: <code>[PoliciesBypassUrlsResponse](src/models/policies-bypass-urls-response.ts)</code>
- **OnError**: throws <code>[Policies.GetUrlBypassError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.getUrlBypass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PoliciesBypassUrlsResponse, Policies.GetUrlBypassError&gt;</code>, with `result.value` of type <code>[PoliciesBypassUrlsResponse](src/models/policies-bypass-urls-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPolicies(request?: Policies.ListPoliciesRequest, options?: RequestOptions): ApiPromise&lt;PoliciesResponse, Policies.ListPoliciesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get a paginated list of all your policies, ordered by policy name.

Each item includes the policy name, last-modified timestamp, SSL inspection status, and
the number of conflicting assignments.

The `sslInspection` field returns the effective value (`enabled` or `disabled`). If SSL
inspection is not explicitly configured on a policy, the value is inherited from the Base Policy.

Results are returned in pages using cursor-based pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.listPolicies();
  // TODO: Handle 'response' of type PoliciesResponse
} catch (err) {
  // TODO: Handle 'err' of type Policies.ListPoliciesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies.listPolicies().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PoliciesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>first?</code> | <code>number</code> | An optional pagination param that states the number of records requested from the **start** of the `cursor`. The default value is **50**.<br>**Default**: 50 |
| <code>after?</code> | <code>string</code> | An optional pagination cursor. Pass the `endCursor` from the previous response's `pageInfo` to fetch the next page. Check `hasNextPage` in the previous response's `pageInfo` to determine whether more records are available. |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Sort order for policy names. Defaults to `asc`.<br>**Default**: "asc" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.listPolicies(request)`

- **OnSuccess**: <code>[PoliciesResponse](src/models/policies-response.ts)</code>
- **OnError**: throws <code>[Policies.ListPoliciesError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.listPolicies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PoliciesResponse, Policies.ListPoliciesError&gt;</code>, with `result.value` of type <code>[PoliciesResponse](src/models/policies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePolicyAssignments(request: Policies.UpdatePolicyAssignmentsRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.UpdatePolicyAssignmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update the users and groups assigned to a policy.

Each provided field fully replaces that assignment list. Omitted fields are preserved.
Send an empty array to unassign all users or groups.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.updatePolicyAssignments({
    policyName: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.UpdatePolicyAssignmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .updatePolicyAssignments({ policyName: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to update assignments for |
| <code>body</code> | <code>[PoliciesAssignmentsRequest](src/models/policies-assignments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.updatePolicyAssignments(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.UpdatePolicyAssignmentsError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.updatePolicyAssignments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.UpdatePolicyAssignmentsError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePolicyExceptions(request: Policies.UpdatePolicyExceptionsRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.UpdatePolicyExceptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update user/group-level exceptions on dope and custom categories for a policy.

Exceptions are per-user/group overrides of a category's restriction.
Each exception is keyed by the user or group identifier (e.g. email address) within a category.

A single request can update exceptions across multiple dope and custom categories.
Categories not included in the request remain unchanged. For each category provided, the submitted
exception set is treated as the complete source of truth and fully replaces any existing exceptions.
Any existing entries not included in the request for that category will be removed.
To remove all exceptions from a category, pass an empty object `{}` as its value.

All user and group identifiers are validated against the tenant directory.
If any identifier cannot be resolved, the request fails with a `400 Bad Request`,
and the response includes details of the invalid entries.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.updatePolicyExceptions({
    policyName: "some example string",
    body: { data: {} },
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.UpdatePolicyExceptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .updatePolicyExceptions({ policyName: "some example string", body: { data: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to update exceptions for |
| <code>body</code> | <code>[PolicyContentExceptionsRequest](src/models/policy-content-exceptions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.updatePolicyExceptions(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.UpdatePolicyExceptionsError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.updatePolicyExceptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.UpdatePolicyExceptionsError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePolicyRestrictions(request: Policies.UpdatePolicyRestrictionsRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.UpdatePolicyRestrictionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update restrictions on dope and custom categories for a policy.

A single call may update restrictions on any combination of dope
and custom categories. Only submitted categories will be updated -
any category not included in the request will be left unchanged.

This API also resets categories back to inheriting from base.
Both dope categories and custom categories inherit from base
(and are reset) as a whole by sending `{inheritsFromBase:true}` in the payload.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.updatePolicyRestrictions({
    policyName: "some example string",
    body: { data: {} },
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.UpdatePolicyRestrictionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .updatePolicyRestrictions({ policyName: "some example string", body: { data: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to update restrictions for |
| <code>body</code> | <code>[PolicyContentRestrictionsRequest](src/models/policy-content-restrictions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.updatePolicyRestrictions(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.UpdatePolicyRestrictionsError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.updatePolicyRestrictions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.UpdatePolicyRestrictionsError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSslInspection(request: Policies.UpdateSslInspectionRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.UpdateSslInspectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update the SSL inspection configuration for a policy.

The request body must be either:
- `{"state": "enabled" | "disabled"}` to set a custom state on this policy, OR
- `{"inheritsFromBase": true}` to make this policy inherit SSL inspection from the Base Policy.

Exactly one of these two shapes is allowed. Anything else (extra fields,
both fields, `inheritsFromBase: false`) returns `400`. The Base Policy
cannot inherit from itself; setting `inheritsFromBase: true` on the Base
Policy returns `400`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.updateSslInspection({
    policyName: "some example string",
    body: { data: { sslInspection: { state: State.Enabled } } },
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.UpdateSslInspectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .updateSslInspection({
    policyName: "some example string",
    body: { data: { sslInspection: { state: State.Enabled } } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to update SSL inspection for |
| <code>body</code> | <code>[PoliciesSslInspectionRequest](src/models/policies-ssl-inspection-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.updateSslInspection(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.UpdateSslInspectionError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.updateSslInspection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.UpdateSslInspectionError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertApplicationBypass(request: Policies.UpsertApplicationBypassRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.UpsertApplicationBypassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upsert custom application bypass entries and/or update default application bypass states for a policy.

**Custom entries** are matched by name: matching names are overwritten, unknown names are added.
Unmentioned custom entries are preserved.

**Default entries** are matched by name: set `state` to `ignored` to suppress a default entry,
or `applied` to re-enable it. Unknown default entry names are silently ignored.

Pass `inheritsFromBase: true` as the entire `data` payload to reset the policy to inherit
all application bypass configuration from the base policy (this drops all custom entries and default
overrides for this policy).

**Detaching from Base**: If a policy inherits from the Base Policy (`inheritsFromBase: true`),
sending `custom` or `default` entries will detach it. Base entries are not copied — include any
you want to keep in the request. Once detached, further Base Policy changes will no longer
propagate to this policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.upsertApplicationBypass({
    policyName: "some example string",
    body: { data: {} },
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.UpsertApplicationBypassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .upsertApplicationBypass({ policyName: "some example string", body: { data: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to update application bypass entries for |
| <code>body</code> | <code>[PoliciesBypassApplicationsRequest](src/models/policies-bypass-applications-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.upsertApplicationBypass(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.UpsertApplicationBypassError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.upsertApplicationBypass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.UpsertApplicationBypassError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertUrlBypass(request: Policies.UpsertUrlBypassRequest, options?: RequestOptions): ApiPromise&lt;SuccessMessage, Policies.UpsertUrlBypassError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upsert custom URL bypass entries and/or update default URL bypass states for a policy.

**Custom entries** are matched by name: matching names are overwritten, unknown names are added.
Unmentioned custom entries are preserved.

**Default entries** are matched by name: set `state` to `ignored` to suppress a default entry,
or `applied` to re-enable it. Unknown default entry names are silently ignored.

Pass `inheritsFromBase: true` as the entire `data` payload to reset the policy to inherit
all URL bypass configuration from the base policy (this drops all custom entries and default
overrides for this policy).

**Detaching from Base**: If a policy inherits from the Base Policy (`inheritsFromBase: true`),
sending `custom` or `default` entries will detach it. Base entries are not copied — include any
you want to keep in the request. Once detached, further Base Policy changes will no longer
propagate to this policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.policies.upsertUrlBypass({
    policyName: "some example string",
    body: { data: {} },
  });
  // TODO: Handle 'response' of type SuccessMessage
} catch (err) {
  // TODO: Handle 'err' of type Policies.UpsertUrlBypassError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.policies
  .upsertUrlBypass({ policyName: "some example string", body: { data: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessMessage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policyName</code> | <code>string</code> | The name of the policy to update URL bypass entries for |
| <code>body</code> | <code>[PoliciesBypassUrlsRequest](src/models/policies-bypass-urls-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.policies.upsertUrlBypass(request)`

- **OnSuccess**: <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: throws <code>[Policies.UpsertUrlBypassError](src/resources/policies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.policies.upsertUrlBypass(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessMessage, Policies.UpsertUrlBypassError&gt;</code>, with `result.value` of type <code>[SuccessMessage](src/models/success-message.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DopeSecurityError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

