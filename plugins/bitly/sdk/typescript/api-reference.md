# Reference

> Source: [BitlyClient](src/client.ts)

## Apps

> Source: [Apps](src/resources/apps.ts)

<details>
<summary><code>getOAuthApp(request: Apps.GetOAuthAppRequest, options?: RequestOptions): ApiPromise&lt;OAuthApp, Apps.GetOAuthAppError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details for the provided OAuth App client ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.getOAuthApp({ clientId: "1234a56b789cd0e123456fg7h8901j123km45n6p" });
  // TODO: Handle 'response' of type OAuthApp
} catch (err) {
  // TODO: Handle 'err' of type Apps.GetOAuthAppError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps
  .getOAuthApp({ clientId: "1234a56b789cd0e123456fg7h8901j123km45n6p" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthApp
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId</code> | <code>string</code> | The client ID of an OAuth app |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.getOAuthApp(request)`

- **OnSuccess**: <code>[OAuthApp](src/models/oauth-app.ts)</code>
- **OnError**: throws <code>[Apps.GetOAuthAppError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.getOAuthApp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthApp, Apps.GetOAuthAppError&gt;</code>, with `result.value` of type <code>[OAuthApp](src/models/oauth-app.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BitlinksApi

> Source: [BitlinksApi](src/resources/bitlinks-api.ts)

<details>
<summary><code>createBitlink(request: BitlinksApi.CreateBitlinkRequest, options?: RequestOptions): ApiPromise&lt;ShortenBitlinkBody, BitlinksApi.CreateBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Converts a long url to a Bitlink. You may see errors returned from this endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom domain which doesn't have DNS properly configured.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.createBitlink({ body: { longUrl: "some example string" } });
  // TODO: Handle 'response' of type ShortenBitlinkBody
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.CreateBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .createBitlink({ body: { longUrl: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShortenBitlinkBody
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Shorten](src/models/shorten.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.createBitlink(request)`

- **OnSuccess**: <code>[ShortenBitlinkBody](src/models/shorten-bitlink-body.ts)</code>
- **OnError**: throws <code>[BitlinksApi.CreateBitlinkError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.createBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShortenBitlinkBody, BitlinksApi.CreateBitlinkError&gt;</code>, with `result.value` of type <code>[ShortenBitlinkBody](src/models/shorten-bitlink-body.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createFullBitlink(request: BitlinksApi.CreateFullBitlinkRequest, options?: RequestOptions): ApiPromise&lt;BitlinkBody, BitlinksApi.CreateFullBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Converts a long url to a Bitlink and sets additional parameters. You may see errors returned from this endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom domain which doesn't have DNS properly configured.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.createFullBitlink({
    body: {
      longUrl: "https://dev.bitly.com",
      domain: "yourdomain.co",
      groupGuid: "Ba1bc23dE4F",
      keyword: "new-link",
    },
  });
  // TODO: Handle 'response' of type BitlinkBody
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.CreateFullBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .createFullBitlink({
    body: {
      longUrl: "https://dev.bitly.com",
      domain: "yourdomain.co",
      groupGuid: "Ba1bc23dE4F",
      keyword: "new-link",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BitlinkBody
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FullShorten](src/models/full-shorten.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.createFullBitlink(request)`

- **OnSuccess**: <code>[BitlinkBody](src/models/bitlink-body.ts)</code>
- **OnError**: throws <code>[BitlinksApi.CreateFullBitlinkError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.createFullBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BitlinkBody, BitlinksApi.CreateFullBitlinkError&gt;</code>, with `result.value` of type <code>[BitlinkBody](src/models/bitlink-body.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBitlink(request: BitlinksApi.DeleteBitlinkRequest, options?: RequestOptions): ApiPromise&lt;LinkDeletionResponse, BitlinksApi.DeleteBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an unedited hash Bitlink.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.deleteBitlink({ bitlink: "bit.ly/12a4b6c" });
  // TODO: Handle 'response' of type LinkDeletionResponse
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.DeleteBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi.deleteBitlink({ bitlink: "bit.ly/12a4b6c" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkDeletionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.deleteBitlink(request)`

- **OnSuccess**: <code>[LinkDeletionResponse](src/models/link-deletion-response.ts)</code>
- **OnError**: throws <code>[BitlinksApi.DeleteBitlinkError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.deleteBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkDeletionResponse, BitlinksApi.DeleteBitlinkError&gt;</code>, with `result.value` of type <code>[LinkDeletionResponse](src/models/link-deletion-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>expandBitlink(request: BitlinksApi.ExpandBitlinkRequest, options?: RequestOptions): ApiPromise&lt;ExpandedBitlink, BitlinksApi.ExpandBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the short link and long URL for the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.expandBitlink({ body: {} });
  // TODO: Handle 'response' of type ExpandedBitlink
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.ExpandBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi.expandBitlink({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExpandedBitlink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ExpandBitlink](src/models/expand-bitlink.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.expandBitlink(request)`

- **OnSuccess**: <code>[ExpandedBitlink](src/models/expanded-bitlink.ts)</code>
- **OnError**: throws <code>[BitlinksApi.ExpandBitlinkError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.expandBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExpandedBitlink, BitlinksApi.ExpandBitlinkError&gt;</code>, with `result.value` of type <code>[ExpandedBitlink](src/models/expanded-bitlink.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBitlink(request: BitlinksApi.GetBitlinkRequest, options?: RequestOptions): ApiPromise&lt;BitlinkBody, BitlinksApi.GetBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information for the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getBitlink({ bitlink: "bit.ly/12a4b6c" });
  // TODO: Handle 'response' of type BitlinkBody
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi.getBitlink({ bitlink: "bit.ly/12a4b6c" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BitlinkBody
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getBitlink(request)`

- **OnSuccess**: <code>[BitlinkBody](src/models/bitlink-body.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetBitlinkError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BitlinkBody, BitlinksApi.GetBitlinkError&gt;</code>, with `result.value` of type <code>[BitlinkBody](src/models/bitlink-body.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBitlinksByGroup(request: BitlinksApi.GetBitlinksByGroupRequest, options?: RequestOptions): ApiPromise&lt;Bitlinks, BitlinksApi.GetBitlinksByGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated collection of Bitlinks for a group. The list of custom bitlinks has newest entries first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getBitlinksByGroup({
    groupGuid: "Ba1bc23dE4F",
    size: 10,
    query: "api",
    hostnamePathQuery: "dev.bitly.com/api-reference",
    createdBefore: 1694529902,
    createdAfter: 1694529902,
    archived: Archived.Both,
    deeplinks: Deeplinks.Both,
    domainDeeplinks: DomainDeeplinks.Both,
    campaignGuid: "Ca1bcd2EFGh",
    channelGuid: "Ha1bc2DefGh",
    customBitlink: CustomBitlink.Both,
    hasQrCodes: HasQrCodes.Both,
    tags: ["bitly", "api"],
    launchpadIds: ["M1234567890"],
    encodingLogin: ["chauncey"],
  });
  // TODO: Handle 'response' of type Bitlinks
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetBitlinksByGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getBitlinksByGroup({
    groupGuid: "Ba1bc23dE4F",
    size: 10,
    query: "api",
    hostnamePathQuery: "dev.bitly.com/api-reference",
    createdBefore: 1694529902,
    createdAfter: 1694529902,
    archived: Archived.Both,
    deeplinks: Deeplinks.Both,
    domainDeeplinks: DomainDeeplinks.Both,
    campaignGuid: "Ca1bcd2EFGh",
    channelGuid: "Ha1bc2DefGh",
    customBitlink: CustomBitlink.Both,
    hasQrCodes: HasQrCodes.Both,
    tags: ["bitly", "api"],
    launchpadIds: ["M1234567890"],
    encodingLogin: ["chauncey"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Bitlinks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>searchAfter?</code> | <code>string</code> | Token used to search next batch, only use response from API as input value. |
| <code>query?</code> | <code>string</code> | The value that you would like to search |
| <code>hostnamePathQuery?</code> | <code>string</code> | The hostname and/or path you would like to search (case-insensitive). Subdomains included; query params and fragment ignored. |
| <code>createdBefore?</code> | <code>number</code> | Timestamp as an integer unix epoch (seconds only) |
| <code>createdAfter?</code> | <code>number</code> | Timestamp as an integer unix epoch (seconds only) |
| <code>archived?</code> | <code>[Archived](src/models/archived.ts)</code> | Whether or not to include archived resources<br>**Default**: "off" |
| <code>deeplinks?</code> | <code>[Deeplinks](src/models/deeplinks.ts)</code> | Filter to only Bitlinks that contain deeplinks<br>**Default**: "both" |
| <code>domainDeeplinks?</code> | <code>[DomainDeeplinks](src/models/domain-deeplinks.ts)</code> | Filter to only Bitlinks that contain deeplinks configured with a custom domain<br>**Default**: "both" |
| <code>campaignGuid?</code> | <code>string</code> | Filter to return only links for the given campaign GUID, can be provided |
| <code>channelGuid?</code> | <code>string</code> | Filter to return only links for the given channel GUID, can be provided, overrides all other parameters |
| <code>customBitlink?</code> | <code>[CustomBitlink](src/models/custom-bitlink.ts)</code> | -<br>**Default**: "both" |
| <code>hasQrCodes?</code> | <code>[HasQrCodes](src/models/has-qr-codes.ts)</code> | a filter value if the resource has any QR codes<br>**Default**: "both" |
| <code>isExpired?</code> | <code>[IsExpired](src/models/is-expired.ts)</code> | filter bitlinks by expiration status<br>**Default**: "both" |
| <code>hasExpiration?</code> | <code>[HasExpiration](src/models/has-expiration.ts)</code> | filter bitlinks by presence of expiration<br>**Default**: "both" |
| <code>hasDynamicRouting?</code> | <code>[HasDynamicRouting](src/models/has-dynamic-routing.ts)</code> | filter bitlinks by presence of dynamic routing rules<br>**Default**: "both" |
| <code>tags?</code> | <code>string[]</code> | Filter by given tags |
| <code>launchpadIds?</code> | <code>string[]</code> | Filter by launchpad id |
| <code>encodingLogin?</code> | <code>string[]</code> | Filter by the login of the authenticated user that created the Bitlink |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getBitlinksByGroup(request)`

- **OnSuccess**: <code>[Bitlinks](src/models/bitlinks.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetBitlinksByGroupError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getBitlinksByGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Bitlinks, BitlinksApi.GetBitlinksByGroupError&gt;</code>, with `result.value` of type <code>[Bitlinks](src/models/bitlinks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClicksForBitlink(request: BitlinksApi.GetClicksForBitlinkRequest, options?: RequestOptions): ApiPromise&lt;Clicks, BitlinksApi.GetClicksForBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the click counts for the specified link in an array based on a date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getClicksForBitlink({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type Clicks
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetClicksForBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getClicksForBitlink({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Clicks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getClicksForBitlink(request)`

- **OnSuccess**: <code>[Clicks](src/models/clicks.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetClicksForBitlinkError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getClicksForBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Clicks, BitlinksApi.GetClicksForBitlinkError&gt;</code>, with `result.value` of type <code>[Clicks](src/models/clicks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClicksSummaryForBitlink(request: BitlinksApi.GetClicksSummaryForBitlinkRequest, options?: RequestOptions): ApiPromise&lt;ClicksSummary, BitlinksApi.GetClicksSummaryForBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the click counts for the specified link rolled up into a single field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getClicksSummaryForBitlink({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClicksSummary
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetClicksSummaryForBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getClicksSummaryForBitlink({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClicksSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getClicksSummaryForBitlink(request)`

- **OnSuccess**: <code>[ClicksSummary](src/models/clicks-summary.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetClicksSummaryForBitlinkError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getClicksSummaryForBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClicksSummary, BitlinksApi.GetClicksSummaryForBitlinkError&gt;</code>, with `result.value` of type <code>[ClicksSummary](src/models/clicks-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEngagements(request: BitlinksApi.GetEngagementsRequest, options?: RequestOptions): ApiPromise&lt;TotalEngagements, BitlinksApi.GetEngagementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of engagement counts for the specified link. The array is comprised of button click, click and scan counts for each time window, where the window is based on the provided unit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getEngagements({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type TotalEngagements
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetEngagementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getEngagements({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TotalEngagements
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getEngagements(request)`

- **OnSuccess**: <code>[TotalEngagements](src/models/total-engagements.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetEngagementsError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getEngagements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TotalEngagements, BitlinksApi.GetEngagementsError&gt;</code>, with `result.value` of type <code>[TotalEngagements](src/models/total-engagements.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEngagementsSummary(request: BitlinksApi.GetEngagementsSummaryRequest, options?: RequestOptions): ApiPromise&lt;TotalEngagementsSummary, BitlinksApi.GetEngagementsSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the engagement counts for the specified link rolled up into a single field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getEngagementsSummary({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type TotalEngagementsSummary
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetEngagementsSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getEngagementsSummary({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TotalEngagementsSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getEngagementsSummary(request)`

- **OnSuccess**: <code>[TotalEngagementsSummary](src/models/total-engagements-summary.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetEngagementsSummaryError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getEngagementsSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TotalEngagementsSummary, BitlinksApi.GetEngagementsSummaryError&gt;</code>, with `result.value` of type <code>[TotalEngagementsSummary](src/models/total-engagements-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsForBitlinkByCities(request: BitlinksApi.GetMetricsForBitlinkByCitiesRequest, options?: RequestOptions): ApiPromise&lt;CityMetrics, BitlinksApi.GetMetricsForBitlinkByCitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the city origins of click traffic for the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getMetricsForBitlinkByCities({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type CityMetrics
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetMetricsForBitlinkByCitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getMetricsForBitlinkByCities({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CityMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getMetricsForBitlinkByCities(request)`

- **OnSuccess**: <code>[CityMetrics](src/models/city-metrics.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetMetricsForBitlinkByCitiesError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getMetricsForBitlinkByCities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CityMetrics, BitlinksApi.GetMetricsForBitlinkByCitiesError&gt;</code>, with `result.value` of type <code>[CityMetrics](src/models/city-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsForBitlinkByCountries(request: BitlinksApi.GetMetricsForBitlinkByCountriesRequest, options?: RequestOptions): ApiPromise&lt;ClickMetrics, BitlinksApi.GetMetricsForBitlinkByCountriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the country origins of click traffic for the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getMetricsForBitlinkByCountries({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetrics
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetMetricsForBitlinkByCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getMetricsForBitlinkByCountries({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getMetricsForBitlinkByCountries(request)`

- **OnSuccess**: <code>[ClickMetrics](src/models/click-metrics.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetMetricsForBitlinkByCountriesError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getMetricsForBitlinkByCountries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetrics, BitlinksApi.GetMetricsForBitlinkByCountriesError&gt;</code>, with `result.value` of type <code>[ClickMetrics](src/models/click-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsForBitlinkByDevices(request: BitlinksApi.GetMetricsForBitlinkByDevicesRequest, options?: RequestOptions): ApiPromise&lt;DeviceMetrics, BitlinksApi.GetMetricsForBitlinkByDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the device types generating click traffic to the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getMetricsForBitlinkByDevices({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type DeviceMetrics
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetMetricsForBitlinkByDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getMetricsForBitlinkByDevices({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getMetricsForBitlinkByDevices(request)`

- **OnSuccess**: <code>[DeviceMetrics](src/models/device-metrics.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetMetricsForBitlinkByDevicesError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getMetricsForBitlinkByDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceMetrics, BitlinksApi.GetMetricsForBitlinkByDevicesError&gt;</code>, with `result.value` of type <code>[DeviceMetrics](src/models/device-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsForBitlinkByReferrerName(request: BitlinksApi.GetMetricsForBitlinkByReferrerNameRequest, options?: RequestOptions): ApiPromise&lt;ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferrerNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns referrer click counts for the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getMetricsForBitlinkByReferrerName({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetrics
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetMetricsForBitlinkByReferrerNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getMetricsForBitlinkByReferrerName({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getMetricsForBitlinkByReferrerName(request)`

- **OnSuccess**: <code>[ClickMetrics](src/models/click-metrics.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetMetricsForBitlinkByReferrerNameError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getMetricsForBitlinkByReferrerName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferrerNameError&gt;</code>, with `result.value` of type <code>[ClickMetrics](src/models/click-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsForBitlinkByReferrers(request: BitlinksApi.GetMetricsForBitlinkByReferrersRequest, options?: RequestOptions): ApiPromise&lt;ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferrersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns referrer click counts for the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getMetricsForBitlinkByReferrers({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetrics
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetMetricsForBitlinkByReferrersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getMetricsForBitlinkByReferrers({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getMetricsForBitlinkByReferrers(request)`

- **OnSuccess**: <code>[ClickMetrics](src/models/click-metrics.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetMetricsForBitlinkByReferrersError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getMetricsForBitlinkByReferrers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferrersError&gt;</code>, with `result.value` of type <code>[ClickMetrics](src/models/click-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsForBitlinkByReferrersByDomains(request: BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsRequest, options?: RequestOptions): ApiPromise&lt;ReferrersByDomains, BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns click metrics grouped by referrers for the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getMetricsForBitlinkByReferrersByDomains({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ReferrersByDomains
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getMetricsForBitlinkByReferrersByDomains({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReferrersByDomains
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getMetricsForBitlinkByReferrersByDomains(request)`

- **OnSuccess**: <code>[ReferrersByDomains](src/models/referrers-by-domains.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getMetricsForBitlinkByReferrersByDomains(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReferrersByDomains, BitlinksApi.GetMetricsForBitlinkByReferrersByDomainsError&gt;</code>, with `result.value` of type <code>[ReferrersByDomains](src/models/referrers-by-domains.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMetricsForBitlinkByReferringDomains(request: BitlinksApi.GetMetricsForBitlinkByReferringDomainsRequest, options?: RequestOptions): ApiPromise&lt;ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferringDomainsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the referring domain click counts for the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getMetricsForBitlinkByReferringDomains({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetrics
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetMetricsForBitlinkByReferringDomainsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getMetricsForBitlinkByReferringDomains({
    bitlink: "bit.ly/12a4b6c",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getMetricsForBitlinkByReferringDomains(request)`

- **OnSuccess**: <code>[ClickMetrics](src/models/click-metrics.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetMetricsForBitlinkByReferringDomainsError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getMetricsForBitlinkByReferringDomains(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetrics, BitlinksApi.GetMetricsForBitlinkByReferringDomainsError&gt;</code>, with `result.value` of type <code>[ClickMetrics](src/models/click-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSortedBitlinks(request: BitlinksApi.GetSortedBitlinksRequest, options?: RequestOptions): ApiPromise&lt;SortedLinks, BitlinksApi.GetSortedBitlinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Bitlinks sorted by group. The list of custom bitlinks has newest entries first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getSortedBitlinks({
    groupGuid: "Ba1bc23dE4F",
    sort: Sort.Clicks,
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
    size: 10,
  });
  // TODO: Handle 'response' of type SortedLinks
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetSortedBitlinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getSortedBitlinks({
    groupGuid: "Ba1bc23dE4F",
    sort: Sort.Clicks,
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
    size: 10,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SortedLinks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>sort</code> | <code>[Sort](src/models/sort.ts)</code> | The type of sorting that you would like to do |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time.<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getSortedBitlinks(request)`

- **OnSuccess**: <code>[SortedLinks](src/models/sorted-links.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetSortedBitlinksError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getSortedBitlinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SortedLinks, BitlinksApi.GetSortedBitlinksError&gt;</code>, with `result.value` of type <code>[SortedLinks](src/models/sorted-links.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTopLinksAndQrCodesByEngagements(request: BitlinksApi.GetTopLinksAndQrCodesByEngagementsRequest, options?: RequestOptions): ApiPromise&lt;TopLinksAndQrCodes, BitlinksApi.GetTopLinksAndQrCodesByEngagementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the bitlinks and decoupled QR codes in a group with the most engagements over the requested time window, ranked together in descending order by engagement count. Bitlinks and decoupled QR codes are returned in separate lists; `sorted_links` preserves the unified descending-by-count ordering across both, with each entry's id referencing either a bitlink or a QR code guid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.getTopLinksAndQrCodesByEngagements({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
    size: 10,
  });
  // TODO: Handle 'response' of type TopLinksAndQrCodes
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.GetTopLinksAndQrCodesByEngagementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .getTopLinksAndQrCodesByEngagements({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
    size: 10,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TopLinksAndQrCodes
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time.<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.getTopLinksAndQrCodesByEngagements(request)`

- **OnSuccess**: <code>[TopLinksAndQrCodes](src/models/top-links-and-qr-codes.ts)</code>
- **OnError**: throws <code>[BitlinksApi.GetTopLinksAndQrCodesByEngagementsError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.getTopLinksAndQrCodesByEngagements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TopLinksAndQrCodes, BitlinksApi.GetTopLinksAndQrCodesByEngagementsError&gt;</code>, with `result.value` of type <code>[TopLinksAndQrCodes](src/models/top-links-and-qr-codes.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBitlink(request: BitlinksApi.UpdateBitlinkRequest, options?: RequestOptions): ApiPromise&lt;BitlinkBody, BitlinksApi.UpdateBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates fields in the specified link. To redirect the link (i.e. to update the Long URL), use the long_url parameter. This will always charge an encode limit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.updateBitlink({
    bitlink: "bit.ly/12a4b6c",
    body: { longUrl: "https://www.newdestination.com" },
  });
  // TODO: Handle 'response' of type BitlinkBody
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.UpdateBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .updateBitlink({ bitlink: "bit.ly/12a4b6c", body: { longUrl: "https://www.newdestination.com" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BitlinkBody
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bitlink</code> | <code>string</code> | A Bitlink made of the domain and hash |
| <code>body</code> | <code>[BitlinkUpdateBody](src/models/bitlink-update-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.updateBitlink(request)`

- **OnSuccess**: <code>[BitlinkBody](src/models/bitlink-body.ts)</code>
- **OnError**: throws <code>[BitlinksApi.UpdateBitlinkError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.updateBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BitlinkBody, BitlinksApi.UpdateBitlinkError&gt;</code>, with `result.value` of type <code>[BitlinkBody](src/models/bitlink-body.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBitlinksByGroup(request: BitlinksApi.UpdateBitlinksByGroupRequest, options?: RequestOptions): ApiPromise&lt;BulkUpdate, BitlinksApi.UpdateBitlinksByGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update can add or remove tags or archive up to 100 links at a time; The response includes a list of bitlink ids that were updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bitlinksApi.updateBitlinksByGroup({
    groupGuid: "Ba1bc23dE4F",
    body: { action: Action.Archive },
  });
  // TODO: Handle 'response' of type BulkUpdate
} catch (err) {
  // TODO: Handle 'err' of type BitlinksApi.UpdateBitlinksByGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bitlinksApi
  .updateBitlinksByGroup({ groupGuid: "Ba1bc23dE4F", body: { action: Action.Archive } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpdate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[BulkUpdateRequest](src/models/bulk-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bitlinksApi.updateBitlinksByGroup(request)`

- **OnSuccess**: <code>[BulkUpdate](src/models/bulk-update.ts)</code>
- **OnError**: throws <code>[BitlinksApi.UpdateBitlinksByGroupError](src/resources/bitlinks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bitlinksApi.updateBitlinksByGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpdate, BitlinksApi.UpdateBitlinksByGroupError&gt;</code>, with `result.value` of type <code>[BulkUpdate](src/models/bulk-update.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BsDs

> Source: [BsDs](src/resources/bs-ds.ts)

<details>
<summary><code>getBsDs(options?: RequestOptions): ApiPromise&lt;BsDsResponse, BsDs.GetBsDsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch all Branded Short Domains

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bsDs.getBsDs();
  // TODO: Handle 'response' of type BsDsResponse
} catch (err) {
  // TODO: Handle 'err' of type BsDs.GetBsDsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bsDs.getBsDs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BsDsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bsDs.getBsDs()`

- **OnSuccess**: <code>[BsDsResponse](src/models/bs-ds-response.ts)</code>
- **OnError**: throws <code>[BsDs.GetBsDsError](src/resources/bs-ds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bsDs.getBsDs().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BsDsResponse, BsDs.GetBsDsError&gt;</code>, with `result.value` of type <code>[BsDsResponse](src/models/bs-ds-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignsApi

> Source: [CampaignsApi](src/resources/campaigns-api.ts)

<details>
<summary><code>createCampaign(request: CampaignsApi.CreateCampaignRequest, options?: RequestOptions): ApiPromise&lt;Campaign, CampaignsApi.CreateCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new campaign.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsApi.createCampaign({ body: {} });
  // TODO: Handle 'response' of type Campaign
} catch (err) {
  // TODO: Handle 'err' of type CampaignsApi.CreateCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsApi.createCampaign({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[CampaignModify](src/models/campaign-modify.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignsApi.createCampaign(request)`

- **OnSuccess**: <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: throws <code>[CampaignsApi.CreateCampaignError](src/resources/campaigns-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsApi.createCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Campaign, CampaignsApi.CreateCampaignError&gt;</code>, with `result.value` of type <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createChannel(request: CampaignsApi.CreateChannelRequest, options?: RequestOptions): ApiPromise&lt;Channel, CampaignsApi.CreateChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsApi.createChannel({ body: {} });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type CampaignsApi.CreateChannelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsApi.createChannel({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChannelModify](src/models/channel-modify.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignsApi.createChannel(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[CampaignsApi.CreateChannelError](src/resources/campaigns-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsApi.createChannel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, CampaignsApi.CreateChannelError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaign(request: CampaignsApi.GetCampaignRequest, options?: RequestOptions): ApiPromise&lt;Campaign, CampaignsApi.GetCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a campaign.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsApi.getCampaign({ campaignGuid: "Ca1bcd2EFGh" });
  // TODO: Handle 'response' of type Campaign
} catch (err) {
  // TODO: Handle 'err' of type CampaignsApi.GetCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsApi.getCampaign({ campaignGuid: "Ca1bcd2EFGh" }).asApiResult();
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
| <code>campaignGuid</code> | <code>string</code> | A GUID for a Bitly campaign |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignsApi.getCampaign(request)`

- **OnSuccess**: <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: throws <code>[CampaignsApi.GetCampaignError](src/resources/campaigns-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsApi.getCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Campaign, CampaignsApi.GetCampaignError&gt;</code>, with `result.value` of type <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCampaigns(request?: CampaignsApi.GetCampaignsRequest, options?: RequestOptions): ApiPromise&lt;Campaigns, CampaignsApi.GetCampaignsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the campaigns for the current authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsApi.getCampaigns({ groupGuid: "Ba1bc23dE4F" });
  // TODO: Handle 'response' of type Campaigns
} catch (err) {
  // TODO: Handle 'err' of type CampaignsApi.GetCampaignsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsApi.getCampaigns({ groupGuid: "Ba1bc23dE4F" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Campaigns
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid?</code> | <code>string</code> | A GUID for a Bitly group |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignsApi.getCampaigns(request)`

- **OnSuccess**: <code>[Campaigns](src/models/campaigns.ts)</code>
- **OnError**: throws <code>[CampaignsApi.GetCampaignsError](src/resources/campaigns-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsApi.getCampaigns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Campaigns, CampaignsApi.GetCampaignsError&gt;</code>, with `result.value` of type <code>[Campaigns](src/models/campaigns.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannel(request: CampaignsApi.GetChannelRequest, options?: RequestOptions): ApiPromise&lt;Channel, CampaignsApi.GetChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a channel's details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsApi.getChannel({ channelGuid: "Ha1bc2DefGh" });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type CampaignsApi.GetChannelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsApi.getChannel({ channelGuid: "Ha1bc2DefGh" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelGuid</code> | <code>string</code> | A GUID for a Bitly Channel |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignsApi.getChannel(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[CampaignsApi.GetChannelError](src/resources/campaigns-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsApi.getChannel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, CampaignsApi.GetChannelError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChannels(request?: CampaignsApi.GetChannelsRequest, options?: RequestOptions): ApiPromise&lt;Channels, CampaignsApi.GetChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the channels available to a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsApi.getChannels({
    groupGuid: "Ba1bc23dE4F",
    campaignGuid: "Ca1bcd2EFGh",
  });
  // TODO: Handle 'response' of type Channels
} catch (err) {
  // TODO: Handle 'err' of type CampaignsApi.GetChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsApi
  .getChannels({ groupGuid: "Ba1bc23dE4F", campaignGuid: "Ca1bcd2EFGh" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channels
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid?</code> | <code>string</code> | A GUID for a Bitly group |
| <code>campaignGuid?</code> | <code>string</code> | A GUID for a Bitly campaign |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignsApi.getChannels(request)`

- **OnSuccess**: <code>[Channels](src/models/channels.ts)</code>
- **OnError**: throws <code>[CampaignsApi.GetChannelsError](src/resources/campaigns-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsApi.getChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channels, CampaignsApi.GetChannelsError&gt;</code>, with `result.value` of type <code>[Channels](src/models/channels.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCampaign(request: CampaignsApi.UpdateCampaignRequest, options?: RequestOptions): ApiPromise&lt;Campaign, CampaignsApi.UpdateCampaignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a campaign's details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsApi.updateCampaign({ campaignGuid: "Ca1bcd2EFGh", body: {} });
  // TODO: Handle 'response' of type Campaign
} catch (err) {
  // TODO: Handle 'err' of type CampaignsApi.UpdateCampaignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsApi
  .updateCampaign({ campaignGuid: "Ca1bcd2EFGh", body: {} })
  .asApiResult();
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
| <code>campaignGuid</code> | <code>string</code> | A GUID for a Bitly campaign |
| <code>body</code> | <code>[CampaignModify](src/models/campaign-modify.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignsApi.updateCampaign(request)`

- **OnSuccess**: <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: throws <code>[CampaignsApi.UpdateCampaignError](src/resources/campaigns-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsApi.updateCampaign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Campaign, CampaignsApi.UpdateCampaignError&gt;</code>, with `result.value` of type <code>[Campaign](src/models/campaign.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateChannel(request: CampaignsApi.UpdateChannelRequest, options?: RequestOptions): ApiPromise&lt;Channel, CampaignsApi.UpdateChannelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.campaignsApi.updateChannel({ channelGuid: "Ha1bc2DefGh", body: {} });
  // TODO: Handle 'response' of type Channel
} catch (err) {
  // TODO: Handle 'err' of type CampaignsApi.UpdateChannelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.campaignsApi
  .updateChannel({ channelGuid: "Ha1bc2DefGh", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Channel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelGuid</code> | <code>string</code> | A GUID for a Bitly Channel |
| <code>body</code> | <code>[ChannelModify](src/models/channel-modify.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.campaignsApi.updateChannel(request)`

- **OnSuccess**: <code>[Channel](src/models/channel.ts)</code>
- **OnError**: throws <code>[CampaignsApi.UpdateChannelError](src/resources/campaigns-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.campaignsApi.updateChannel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Channel, CampaignsApi.UpdateChannelError&gt;</code>, with `result.value` of type <code>[Channel](src/models/channel.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomBitlinks

> Source: [CustomBitlinks](src/resources/custom-bitlinks.ts)

<details>
<summary><code>addCustomBitlink(request: CustomBitlinks.AddCustomBitlinkRequest, options?: RequestOptions): ApiPromise&lt;CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.AddCustomBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a keyword (or "custom back-half") to a Bitlink with a Custom Domain (domains must match). This endpoint can also be used for initial redirects to a link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customBitlinks.addCustomBitlink({ body: {} });
  // TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type CustomBitlinks.AddCustomBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customBitlinks.addCustomBitlink({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomBitlinkBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AddCustomBitlink](src/models/add-custom-bitlink.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customBitlinks.addCustomBitlink(request)`

- **OnSuccess**: <code>[CustomBitlinkBitlyCustomBitlinksApi](src/models/custom-bitlink-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[CustomBitlinks.AddCustomBitlinkError](src/resources/custom-bitlinks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customBitlinks.addCustomBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.AddCustomBitlinkError&gt;</code>, with `result.value` of type <code>[CustomBitlinkBitlyCustomBitlinksApi](src/models/custom-bitlink-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getClicksForCustomBitlink(request: CustomBitlinks.GetClicksForCustomBitlinkRequest, options?: RequestOptions): ApiPromise&lt;Clicks, CustomBitlinks.GetClicksForCustomBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the click counts for the specified link. This returns an array with clicks based on a date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customBitlinks.getClicksForCustomBitlink({
    customBitlink: "chauncey.ly/chauncey",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type Clicks
} catch (err) {
  // TODO: Handle 'err' of type CustomBitlinks.GetClicksForCustomBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customBitlinks
  .getClicksForCustomBitlink({
    customBitlink: "chauncey.ly/chauncey",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Clicks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customBitlink</code> | <code>string</code> | A Custom Bitlink made of the domain and keyword |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customBitlinks.getClicksForCustomBitlink(request)`

- **OnSuccess**: <code>[Clicks](src/models/clicks.ts)</code>
- **OnError**: throws <code>[CustomBitlinks.GetClicksForCustomBitlinkError](src/resources/custom-bitlinks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customBitlinks.getClicksForCustomBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Clicks, CustomBitlinks.GetClicksForCustomBitlinkError&gt;</code>, with `result.value` of type <code>[Clicks](src/models/clicks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomBitlink(request: CustomBitlinks.GetCustomBitlinkRequest, options?: RequestOptions): ApiPromise&lt;CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.GetCustomBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details and history of the specified link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customBitlinks.getCustomBitlink({ customBitlink: "chauncey.ly/chauncey" });
  // TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type CustomBitlinks.GetCustomBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customBitlinks
  .getCustomBitlink({ customBitlink: "chauncey.ly/chauncey" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomBitlinkBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customBitlink</code> | <code>string</code> | A Custom Bitlink made of the domain and keyword |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customBitlinks.getCustomBitlink(request)`

- **OnSuccess**: <code>[CustomBitlinkBitlyCustomBitlinksApi](src/models/custom-bitlink-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[CustomBitlinks.GetCustomBitlinkError](src/resources/custom-bitlinks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customBitlinks.getCustomBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.GetCustomBitlinkError&gt;</code>, with `result.value` of type <code>[CustomBitlinkBitlyCustomBitlinksApi](src/models/custom-bitlink-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomBitlinkMetricsByDestination(request: CustomBitlinks.GetCustomBitlinkMetricsByDestinationRequest, options?: RequestOptions): ApiPromise&lt;ClickMetricsBitlyCustomBitlinksApi, CustomBitlinks.GetCustomBitlinkMetricsByDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns click metrics for the specified link by its historical destinations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customBitlinks.getCustomBitlinkMetricsByDestination({
    customBitlink: "chauncey.ly/chauncey",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type CustomBitlinks.GetCustomBitlinkMetricsByDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customBitlinks
  .getCustomBitlinkMetricsByDestination({
    customBitlink: "chauncey.ly/chauncey",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetricsBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customBitlink</code> | <code>string</code> | A Custom Bitlink made of the domain and keyword |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customBitlinks.getCustomBitlinkMetricsByDestination(request)`

- **OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[CustomBitlinks.GetCustomBitlinkMetricsByDestinationError](src/resources/custom-bitlinks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customBitlinks.getCustomBitlinkMetricsByDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetricsBitlyCustomBitlinksApi, CustomBitlinks.GetCustomBitlinkMetricsByDestinationError&gt;</code>, with `result.value` of type <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomBitlink(request: CustomBitlinks.UpdateCustomBitlinkRequest, options?: RequestOptions): ApiPromise&lt;CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.UpdateCustomBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a keyword (or custom back-half) to a different Bitlink (domains must match).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customBitlinks.updateCustomBitlink({
    customBitlink: "chauncey.ly/chauncey",
    body: {},
  });
  // TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type CustomBitlinks.UpdateCustomBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customBitlinks
  .updateCustomBitlink({ customBitlink: "chauncey.ly/chauncey", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomBitlinkBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customBitlink</code> | <code>string</code> | A Custom Bitlink made of the domain and keyword |
| <code>body</code> | <code>[UpdateCustomBitlink](src/models/update-custom-bitlink.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customBitlinks.updateCustomBitlink(request)`

- **OnSuccess**: <code>[CustomBitlinkBitlyCustomBitlinksApi](src/models/custom-bitlink-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[CustomBitlinks.UpdateCustomBitlinkError](src/resources/custom-bitlinks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customBitlinks.updateCustomBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomBitlinkBitlyCustomBitlinksApi, CustomBitlinks.UpdateCustomBitlinkError&gt;</code>, with `result.value` of type <code>[CustomBitlinkBitlyCustomBitlinksApi](src/models/custom-bitlink-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GroupsApi

> Source: [GroupsApi](src/resources/groups-api.ts)

<details>
<summary><code>getGroupMetricsByReferrer(request: GroupsApi.GetGroupMetricsByReferrerRequest, options?: RequestOptions): ApiPromise&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByReferrerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metrics by referrer for the specified group's links.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupMetricsByReferrer({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupMetricsByReferrerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupMetricsByReferrer({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetricsBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupMetricsByReferrer(request)`

- **OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupMetricsByReferrerError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupMetricsByReferrer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByReferrerError&gt;</code>, with `result.value` of type <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupMetricsByReferringNetworks(request: GroupsApi.GetGroupMetricsByReferringNetworksRequest, options?: RequestOptions): ApiPromise&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByReferringNetworksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metrics by referring networks for the specified group's links.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupMetricsByReferringNetworks({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupMetricsByReferringNetworksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupMetricsByReferringNetworks({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetricsBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupMetricsByReferringNetworks(request)`

- **OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupMetricsByReferringNetworksError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupMetricsByReferringNetworks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByReferringNetworksError&gt;</code>, with `result.value` of type <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroup(request: GroupsApi.GetGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, GroupsApi.GetGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroup({ groupGuid: "Ba1bc23dE4F" });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.getGroup({ groupGuid: "Ba1bc23dE4F" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, GroupsApi.GetGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupClicks(request: GroupsApi.GetGroupClicksRequest, options?: RequestOptions): ApiPromise&lt;GroupClicks, GroupsApi.GetGroupClicksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

get number of clicks on bitlinks in a group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupClicks({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type GroupClicks
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupClicksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupClicks({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupClicks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupClicks(request)`

- **OnSuccess**: <code>[GroupClicks](src/models/group-clicks.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupClicksError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupClicks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupClicks, GroupsApi.GetGroupClicksError&gt;</code>, with `result.value` of type <code>[GroupClicks](src/models/group-clicks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupCodeScansByCity(request: GroupsApi.GetGroupCodeScansByCityRequest, options?: RequestOptions): ApiPromise&lt;CityMetricsBitlyGroupsApi, GroupsApi.GetGroupCodeScansByCityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get QR code scan metrics for a group broken down by city.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupCodeScansByCity({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupCodeScansByCityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupCodeScansByCity({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CityMetricsBitlyGroupsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupCodeScansByCity(request)`

- **OnSuccess**: <code>[CityMetricsBitlyGroupsApi](src/models/city-metrics-bitly-groups-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupCodeScansByCityError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupCodeScansByCity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CityMetricsBitlyGroupsApi, GroupsApi.GetGroupCodeScansByCityError&gt;</code>, with `result.value` of type <code>[CityMetricsBitlyGroupsApi](src/models/city-metrics-bitly-groups-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupCodeScansByCountry(request: GroupsApi.GetGroupCodeScansByCountryRequest, options?: RequestOptions): ApiPromise&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupCodeScansByCountryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get QR code scan metrics for a group broken down by country.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupCodeScansByCountry({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupCodeScansByCountryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupCodeScansByCountry({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetricsBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupCodeScansByCountry(request)`

- **OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupCodeScansByCountryError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupCodeScansByCountry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupCodeScansByCountryError&gt;</code>, with `result.value` of type <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupCodeScansOverTime(request: GroupsApi.GetGroupCodeScansOverTimeRequest, options?: RequestOptions): ApiPromise&lt;GroupClicks, GroupsApi.GetGroupCodeScansOverTimeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get QR code scan metrics over time for a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupCodeScansOverTime({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type GroupClicks
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupCodeScansOverTimeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupCodeScansOverTime({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupClicks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupCodeScansOverTime(request)`

- **OnSuccess**: <code>[GroupClicks](src/models/group-clicks.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupCodeScansOverTimeError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupCodeScansOverTime(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupClicks, GroupsApi.GetGroupCodeScansOverTimeError&gt;</code>, with `result.value` of type <code>[GroupClicks](src/models/group-clicks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupFeatureUsage(request: GroupsApi.GetGroupFeatureUsageRequest, options?: RequestOptions): ApiPromise&lt;GroupFeatureUsage, GroupsApi.GetGroupFeatureUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a group's current feature limit usage, optionally provide limit name(s) for usage on specific limit(s)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupFeatureUsage({
    groupGuid: "Ba1bc23dE4F",
    name: ["qr_codes"],
  });
  // TODO: Handle 'response' of type GroupFeatureUsage
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupFeatureUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupFeatureUsage({ groupGuid: "Ba1bc23dE4F", name: ["qr_codes"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupFeatureUsage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>name?</code> | <code>string[]</code> | The limit name you would like usage for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupFeatureUsage(request)`

- **OnSuccess**: <code>[GroupFeatureUsage](src/models/group-feature-usage.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupFeatureUsageError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupFeatureUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupFeatureUsage, GroupsApi.GetGroupFeatureUsageError&gt;</code>, with `result.value` of type <code>[GroupFeatureUsage](src/models/group-feature-usage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupHistoricalUsage(request: GroupsApi.GetGroupHistoricalUsageRequest, options?: RequestOptions): ApiPromise&lt;GroupHistoricalUsage, GroupsApi.GetGroupHistoricalUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a group's historical usage for specific limit(s) and date range. Refer to GET /v4/groups/{group_guid}/feature_usage endpoint response for available limit names.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupHistoricalUsage({
    groupGuid: "Ba1bc23dE4F",
    name: ["qr_codes"],
    startDate: "2022-02-02",
    endDate: "2023-10-04",
    unit: TimeUnitDwm.Month,
  });
  // TODO: Handle 'response' of type GroupHistoricalUsage
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupHistoricalUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupHistoricalUsage({
    groupGuid: "Ba1bc23dE4F",
    name: ["qr_codes"],
    startDate: "2022-02-02",
    endDate: "2023-10-04",
    unit: TimeUnitDwm.Month,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupHistoricalUsage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>name?</code> | <code>string[]</code> | The limit name you would like usage for |
| <code>startDate?</code> | <code>string</code> | The start date for the date range |
| <code>endDate?</code> | <code>string</code> | The end date for the date range |
| <code>unit?</code> | <code>[TimeUnitDwm](src/models/time-unit-dwm.ts)</code> | A unit of time (day, week, or month)<br>**Default**: "month" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupHistoricalUsage(request)`

- **OnSuccess**: <code>[GroupHistoricalUsage](src/models/group-historical-usage.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupHistoricalUsageError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupHistoricalUsage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupHistoricalUsage, GroupsApi.GetGroupHistoricalUsageError&gt;</code>, with `result.value` of type <code>[GroupHistoricalUsage](src/models/group-historical-usage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupLinkClicksByCity(request: GroupsApi.GetGroupLinkClicksByCityRequest, options?: RequestOptions): ApiPromise&lt;CityMetricsBitlyGroupsApi, GroupsApi.GetGroupLinkClicksByCityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by city for all links in a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupLinkClicksByCity({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupLinkClicksByCityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupLinkClicksByCity({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CityMetricsBitlyGroupsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupLinkClicksByCity(request)`

- **OnSuccess**: <code>[CityMetricsBitlyGroupsApi](src/models/city-metrics-bitly-groups-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupLinkClicksByCityError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupLinkClicksByCity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CityMetricsBitlyGroupsApi, GroupsApi.GetGroupLinkClicksByCityError&gt;</code>, with `result.value` of type <code>[CityMetricsBitlyGroupsApi](src/models/city-metrics-bitly-groups-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupLinkClicksByCountry(request: GroupsApi.GetGroupLinkClicksByCountryRequest, options?: RequestOptions): ApiPromise&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupLinkClicksByCountryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by country for all links in a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupLinkClicksByCountry({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupLinkClicksByCountryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupLinkClicksByCountry({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetricsBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupLinkClicksByCountry(request)`

- **OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupLinkClicksByCountryError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupLinkClicksByCountry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupLinkClicksByCountryError&gt;</code>, with `result.value` of type <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupLinkClicksByDevice(request: GroupsApi.GetGroupLinkClicksByDeviceRequest, options?: RequestOptions): ApiPromise&lt;GroupsLinksClicksDevicesResponse, GroupsApi.GetGroupLinkClicksByDeviceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by device for all links in a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupLinkClicksByDevice({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type GroupsLinksClicksDevicesResponse
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupLinkClicksByDeviceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupLinkClicksByDevice({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupsLinksClicksDevicesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupLinkClicksByDevice(request)`

- **OnSuccess**: <code>[GroupsLinksClicksDevicesResponse](src/models/groups-links-clicks-devices-response.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupLinkClicksByDeviceError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupLinkClicksByDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupsLinksClicksDevicesResponse, GroupsApi.GetGroupLinkClicksByDeviceError&gt;</code>, with `result.value` of type <code>[GroupsLinksClicksDevicesResponse](src/models/groups-links-clicks-devices-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupLinkClicksByReferrer(request: GroupsApi.GetGroupLinkClicksByReferrerRequest, options?: RequestOptions): ApiPromise&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupLinkClicksByReferrerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by referrer for all links in a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupLinkClicksByReferrer({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupLinkClicksByReferrerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupLinkClicksByReferrer({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetricsBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupLinkClicksByReferrer(request)`

- **OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupLinkClicksByReferrerError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupLinkClicksByReferrer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupLinkClicksByReferrerError&gt;</code>, with `result.value` of type <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupLinkClicksOverTime(request: GroupsApi.GetGroupLinkClicksOverTimeRequest, options?: RequestOptions): ApiPromise&lt;GroupClicks, GroupsApi.GetGroupLinkClicksOverTimeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks over time for all links in a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupLinkClicksOverTime({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type GroupClicks
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupLinkClicksOverTimeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupLinkClicksOverTime({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupClicks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupLinkClicksOverTime(request)`

- **OnSuccess**: <code>[GroupClicks](src/models/group-clicks.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupLinkClicksOverTimeError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupLinkClicksOverTime(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupClicks, GroupsApi.GetGroupLinkClicksOverTimeError&gt;</code>, with `result.value` of type <code>[GroupClicks](src/models/group-clicks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupMetricsByCities(request: GroupsApi.GetGroupMetricsByCitiesRequest, options?: RequestOptions): ApiPromise&lt;CityMetricsBitlyGroupsApi, GroupsApi.GetGroupMetricsByCitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic origins of click traffic by city for the specified group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupMetricsByCities({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupMetricsByCitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupMetricsByCities({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CityMetricsBitlyGroupsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupMetricsByCities(request)`

- **OnSuccess**: <code>[CityMetricsBitlyGroupsApi](src/models/city-metrics-bitly-groups-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupMetricsByCitiesError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupMetricsByCities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CityMetricsBitlyGroupsApi, GroupsApi.GetGroupMetricsByCitiesError&gt;</code>, with `result.value` of type <code>[CityMetricsBitlyGroupsApi](src/models/city-metrics-bitly-groups-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupMetricsByCountries(request: GroupsApi.GetGroupMetricsByCountriesRequest, options?: RequestOptions): ApiPromise&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByCountriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic origins of click traffic by country for the specified group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupMetricsByCountries({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupMetricsByCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupMetricsByCountries({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ClickMetricsBitlyCustomBitlinksApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupMetricsByCountries(request)`

- **OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupMetricsByCountriesError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupMetricsByCountries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ClickMetricsBitlyCustomBitlinksApi, GroupsApi.GetGroupMetricsByCountriesError&gt;</code>, with `result.value` of type <code>[ClickMetricsBitlyCustomBitlinksApi](src/models/click-metrics-bitly-custom-bitlinks-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupMetricsByDevices(request: GroupsApi.GetGroupMetricsByDevicesRequest, options?: RequestOptions): ApiPromise&lt;DeviceMetricsBitlyGroupsApi, GroupsApi.GetGroupMetricsByDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the device types generating click traffic to the specified group's links.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupMetricsByDevices({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type DeviceMetricsBitlyGroupsApi
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupMetricsByDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupMetricsByDevices({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceMetricsBitlyGroupsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupMetricsByDevices(request)`

- **OnSuccess**: <code>[DeviceMetricsBitlyGroupsApi](src/models/device-metrics-bitly-groups-api.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupMetricsByDevicesError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupMetricsByDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceMetricsBitlyGroupsApi, GroupsApi.GetGroupMetricsByDevicesError&gt;</code>, with `result.value` of type <code>[DeviceMetricsBitlyGroupsApi](src/models/device-metrics-bitly-groups-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupMetricsOverTime(request: GroupsApi.GetGroupMetricsOverTimeRequest, options?: RequestOptions): ApiPromise&lt;GroupClicks, GroupsApi.GetGroupMetricsOverTimeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get group engagement metrics over time for all links in a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupMetricsOverTime({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type GroupClicks
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupMetricsOverTimeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupMetricsOverTime({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupClicks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupMetricsOverTime(request)`

- **OnSuccess**: <code>[GroupClicks](src/models/group-clicks.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupMetricsOverTimeError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupMetricsOverTime(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupClicks, GroupsApi.GetGroupMetricsOverTimeError&gt;</code>, with `result.value` of type <code>[GroupClicks](src/models/group-clicks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupPreferences(request: GroupsApi.GetGroupPreferencesRequest, options?: RequestOptions): ApiPromise&lt;GroupPreferences, GroupsApi.GetGroupPreferencesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns preferences for the specified group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupPreferences({ groupGuid: "Ba1bc23dE4F" });
  // TODO: Handle 'response' of type GroupPreferences
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupPreferencesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.getGroupPreferences({ groupGuid: "Ba1bc23dE4F" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupPreferences
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupPreferences(request)`

- **OnSuccess**: <code>[GroupPreferences](src/models/group-preferences.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupPreferencesError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupPreferences(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupPreferences, GroupsApi.GetGroupPreferencesError&gt;</code>, with `result.value` of type <code>[GroupPreferences](src/models/group-preferences.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupShortenCounts(request: GroupsApi.GetGroupShortenCountsRequest, options?: RequestOptions): ApiPromise&lt;Metrics, GroupsApi.GetGroupShortenCountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all the shorten counts for a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupShortenCounts({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type Metrics
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupShortenCountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupShortenCounts({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Metrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupShortenCounts(request)`

- **OnSuccess**: <code>[Metrics](src/models/metrics.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupShortenCountsError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupShortenCounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Metrics, GroupsApi.GetGroupShortenCountsError&gt;</code>, with `result.value` of type <code>[Metrics](src/models/metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupTags(request: GroupsApi.GetGroupTagsRequest, options?: RequestOptions): ApiPromise&lt;Tags, GroupsApi.GetGroupTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the tags currently used in the specified group. Maximum 1000.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupTags({ groupGuid: "Ba1bc23dE4F" });
  // TODO: Handle 'response' of type Tags
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.getGroupTags({ groupGuid: "Ba1bc23dE4F" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Tags
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>type?</code> | <code>[Type](src/models/type.ts)</code> | Tag set to return; defaults to bitlink<br>**Default**: "bitlink" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupTags(request)`

- **OnSuccess**: <code>[Tags](src/models/tags.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupTagsError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Tags, GroupsApi.GetGroupTagsError&gt;</code>, with `result.value` of type <code>[Tags](src/models/tags.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupTopCodeScans(request: GroupsApi.GetGroupTopCodeScansRequest, options?: RequestOptions): ApiPromise&lt;GroupsCodesScansTopResponse, GroupsApi.GetGroupTopCodeScansError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get top performing QR codes by scan count for all codes in a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupTopCodeScans({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type GroupsCodesScansTopResponse
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupTopCodeScansError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupTopCodeScans({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupsCodesScansTopResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |
| <code>decoupled?</code> | <code>boolean</code> | When true, ranks results by decoupled QR scan count and returns a TopLinksAndQRCodes response with links and QR codes partitioned into separate lists and a unified sorted_engagements ordering. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupTopCodeScans(request)`

- **OnSuccess**: <code>[GroupsCodesScansTopResponse](src/models/unions/groups-codes-scans-top-response.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupTopCodeScansError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupTopCodeScans(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupsCodesScansTopResponse, GroupsApi.GetGroupTopCodeScansError&gt;</code>, with `result.value` of type <code>[GroupsCodesScansTopResponse](src/models/unions/groups-codes-scans-top-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupTopLinkClicks(request: GroupsApi.GetGroupTopLinkClicksRequest, options?: RequestOptions): ApiPromise&lt;SortedLinks, GroupsApi.GetGroupTopLinkClicksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get top performing links by click for all links in a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupTopLinkClicks({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type SortedLinks
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupTopLinkClicksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupTopLinkClicks({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SortedLinks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupTopLinkClicks(request)`

- **OnSuccess**: <code>[SortedLinks](src/models/sorted-links.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupTopLinkClicksError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupTopLinkClicks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SortedLinks, GroupsApi.GetGroupTopLinkClicksError&gt;</code>, with `result.value` of type <code>[SortedLinks](src/models/sorted-links.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupTopMetrics(request: GroupsApi.GetGroupTopMetricsRequest, options?: RequestOptions): ApiPromise&lt;SortedLinks, GroupsApi.GetGroupTopMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get top performing links by engagement for all links in a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroupTopMetrics({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type SortedLinks
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupTopMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .getGroupTopMetrics({
    groupGuid: "Ba1bc23dE4F",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SortedLinks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroupTopMetrics(request)`

- **OnSuccess**: <code>[SortedLinks](src/models/sorted-links.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupTopMetricsError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroupTopMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SortedLinks, GroupsApi.GetGroupTopMetricsError&gt;</code>, with `result.value` of type <code>[SortedLinks](src/models/sorted-links.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroups(request?: GroupsApi.GetGroupsRequest, options?: RequestOptions): ApiPromise&lt;Groups, GroupsApi.GetGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of groups in the organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.getGroups({ organizationGuid: "Oa1bcd234eF" });
  // TODO: Handle 'response' of type Groups
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.GetGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.getGroups({ organizationGuid: "Oa1bcd234eF" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Groups
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationGuid?</code> | <code>string</code> | A GUID for a Bitly organization |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.getGroups(request)`

- **OnSuccess**: <code>[Groups](src/models/groups.ts)</code>
- **OnError**: throws <code>[GroupsApi.GetGroupsError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.getGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Groups, GroupsApi.GetGroupsError&gt;</code>, with `result.value` of type <code>[Groups](src/models/groups.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postCreateGroupExport(request: GroupsApi.PostCreateGroupExportRequest, options?: RequestOptions): ApiPromise&lt;GroupExportResponse, GroupsApi.PostCreateGroupExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Build a CSV export synchronously and return it inline as a base64 data URI plus metadata.
The export_type field selects the CSV shape: link_engagements_batch (engagement metrics for
explicit bitlinks or a filter), links_list (link metadata roster), or qr_codes_list (QR code
metadata roster). Row caps apply per request: 200 rows when metrics are included
(link_engagements_batch, or include_metrics on a list export); 1000 rows for metadata-only
list exports. When the match set exceeds the cap, truncated is true and only the first
cap rows are returned; row_count reports how many data rows are in the CSV.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.postCreateGroupExport({
    groupGuid: "Ba1bc23dE4F",
    body: { exportType: ExportType.LinkEngagementsBatch },
  });
  // TODO: Handle 'response' of type GroupExportResponse
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.PostCreateGroupExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .postCreateGroupExport({ groupGuid: "Ba1bc23dE4F", body: { exportType: ExportType.LinkEngagementsBatch } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupExportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[GroupExportRequestBody](src/models/group-export-request-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.postCreateGroupExport(request)`

- **OnSuccess**: <code>[GroupExportResponse](src/models/group-export-response.ts)</code>
- **OnError**: throws <code>[GroupsApi.PostCreateGroupExportError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.postCreateGroupExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupExportResponse, GroupsApi.PostCreateGroupExportError&gt;</code>, with `result.value` of type <code>[GroupExportResponse](src/models/group-export-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGroup(request: GroupsApi.UpdateGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, GroupsApi.UpdateGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the details of a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.updateGroup({ groupGuid: "Ba1bc23dE4F", body: {} });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.UpdateGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi.updateGroup({ groupGuid: "Ba1bc23dE4F", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[GroupUpdate](src/models/group-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.updateGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[GroupsApi.UpdateGroupError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.updateGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, GroupsApi.UpdateGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGroupPreferences(request: GroupsApi.UpdateGroupPreferencesRequest, options?: RequestOptions): ApiPromise&lt;GroupPreferences, GroupsApi.UpdateGroupPreferencesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates preferences for a group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groupsApi.updateGroupPreferences({ groupGuid: "Ba1bc23dE4F", body: {} });
  // TODO: Handle 'response' of type GroupPreferences
} catch (err) {
  // TODO: Handle 'err' of type GroupsApi.UpdateGroupPreferencesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groupsApi
  .updateGroupPreferences({ groupGuid: "Ba1bc23dE4F", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupPreferences
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[GroupPreferences](src/models/group-preferences.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groupsApi.updateGroupPreferences(request)`

- **OnSuccess**: <code>[GroupPreferences](src/models/group-preferences.ts)</code>
- **OnError**: throws <code>[GroupsApi.UpdateGroupPreferencesError](src/resources/groups-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groupsApi.updateGroupPreferences(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupPreferences, GroupsApi.UpdateGroupPreferencesError&gt;</code>, with `result.value` of type <code>[GroupPreferences](src/models/group-preferences.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationsApi

> Source: [OrganizationsApi](src/resources/organizations-api.ts)

<details>
<summary><code>getOrganization(request: OrganizationsApi.GetOrganizationRequest, options?: RequestOptions): ApiPromise&lt;Organization, OrganizationsApi.GetOrganizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrive details for the specified organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsApi.getOrganization({ organizationGuid: "Oa1bcd234eF" });
  // TODO: Handle 'response' of type Organization
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsApi.GetOrganizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsApi
  .getOrganization({ organizationGuid: "Oa1bcd234eF" })
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
| <code>organizationGuid</code> | <code>string</code> | A GUID for a Bitly organization |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsApi.getOrganization(request)`

- **OnSuccess**: <code>[Organization](src/models/organization.ts)</code>
- **OnError**: throws <code>[OrganizationsApi.GetOrganizationError](src/resources/organizations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsApi.getOrganization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Organization, OrganizationsApi.GetOrganizationError&gt;</code>, with `result.value` of type <code>[Organization](src/models/organization.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrganizationShortenCounts(request: OrganizationsApi.GetOrganizationShortenCountsRequest, options?: RequestOptions): ApiPromise&lt;Metrics, OrganizationsApi.GetOrganizationShortenCountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the shorten counts for a specific organization over a specified time period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsApi.getOrganizationShortenCounts({
    organizationGuid: "Oa1bcd234eF",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type Metrics
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsApi.GetOrganizationShortenCountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsApi
  .getOrganizationShortenCounts({
    organizationGuid: "Oa1bcd234eF",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Metrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationGuid</code> | <code>string</code> | A GUID for a Bitly organization |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsApi.getOrganizationShortenCounts(request)`

- **OnSuccess**: <code>[Metrics](src/models/metrics.ts)</code>
- **OnError**: throws <code>[OrganizationsApi.GetOrganizationShortenCountsError](src/resources/organizations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsApi.getOrganizationShortenCounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Metrics, OrganizationsApi.GetOrganizationShortenCountsError&gt;</code>, with `result.value` of type <code>[Metrics](src/models/metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrganizationShortenCountsByGroup(request: OrganizationsApi.GetOrganizationShortenCountsByGroupRequest, options?: RequestOptions): ApiPromise&lt;Metrics, OrganizationsApi.GetOrganizationShortenCountsByGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the shorten counts for a specific organization by group for the current month.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsApi.getOrganizationShortenCountsByGroup({
    organizationGuid: "Oa1bcd234eF",
  });
  // TODO: Handle 'response' of type Metrics
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsApi.GetOrganizationShortenCountsByGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsApi
  .getOrganizationShortenCountsByGroup({ organizationGuid: "Oa1bcd234eF" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Metrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationGuid</code> | <code>string</code> | A GUID for a Bitly organization |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsApi.getOrganizationShortenCountsByGroup(request)`

- **OnSuccess**: <code>[Metrics](src/models/metrics.ts)</code>
- **OnError**: throws <code>[OrganizationsApi.GetOrganizationShortenCountsByGroupError](src/resources/organizations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsApi.getOrganizationShortenCountsByGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Metrics, OrganizationsApi.GetOrganizationShortenCountsByGroupError&gt;</code>, with `result.value` of type <code>[Metrics](src/models/metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrganizations(request?: OrganizationsApi.GetOrganizationsRequest, options?: RequestOptions): ApiPromise&lt;Organizations, OrganizationsApi.GetOrganizationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of organizations for the authenticated user. By default, only organizations permitted by the token's allowed_orgs are returned. Use include_all=true to return all organizations regardless of token restrictions. Each organization is annotated with its authentication requirements (require_sso, require_2fa) when configured.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsApi.getOrganizations();
  // TODO: Handle 'response' of type Organizations
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsApi.GetOrganizationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsApi.getOrganizations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Organizations
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includeAll?</code> | <code>boolean</code> | When set to true, returns all of the user's organizations regardless of the token's allowed_orgs restrictions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsApi.getOrganizations(request)`

- **OnSuccess**: <code>[Organizations](src/models/organizations.ts)</code>
- **OnError**: throws <code>[OrganizationsApi.GetOrganizationsError](src/resources/organizations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsApi.getOrganizations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Organizations, OrganizationsApi.GetOrganizationsError&gt;</code>, with `result.value` of type <code>[Organizations](src/models/organizations.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPlanLimits(request: OrganizationsApi.GetPlanLimitsRequest, options?: RequestOptions): ApiPromise&lt;PlanLimits, OrganizationsApi.GetPlanLimitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all plan limits and counts available for an organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.organizationsApi.getPlanLimits({ organizationGuid: "Oa1bcd234eF" });
  // TODO: Handle 'response' of type PlanLimits
} catch (err) {
  // TODO: Handle 'err' of type OrganizationsApi.GetPlanLimitsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.organizationsApi.getPlanLimits({ organizationGuid: "Oa1bcd234eF" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlanLimits
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationGuid</code> | <code>string</code> | A GUID for a Bitly organization |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.organizationsApi.getPlanLimits(request)`

- **OnSuccess**: <code>[PlanLimits](src/models/plan-limits.ts)</code>
- **OnError**: throws <code>[OrganizationsApi.GetPlanLimitsError](src/resources/organizations-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.organizationsApi.getPlanLimits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlanLimits, OrganizationsApi.GetPlanLimitsError&gt;</code>, with `result.value` of type <code>[PlanLimits](src/models/plan-limits.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## QrCodes

> Source: [QrCodes](src/resources/qr-codes.ts)

<details>
<summary><code>createQrCodePublic(request: QrCodes.CreateQrCodePublicRequest, options?: RequestOptions): ApiPromise&lt;QrCodeMinimal, QrCodes.CreateQrCodePublicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new QR Code and return its metadata

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.createQrCodePublic({
    body: {
      title: "Minimal QR Code",
      groupGuid: "Ba1bc23dE4F",
      destination: { bitlinkId: "bit.ly/abc123" },
      tags: ["tag1", "tag2"],
    },
  });
  // TODO: Handle 'response' of type QrCodeMinimal
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.CreateQrCodePublicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .createQrCodePublic({
    body: {
      title: "Minimal QR Code",
      groupGuid: "Ba1bc23dE4F",
      destination: { bitlinkId: "bit.ly/abc123" },
      tags: ["tag1", "tag2"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCodeMinimal
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PublicCreateQrCodeRequest](src/models/public-create-qr-code-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.createQrCodePublic(request)`

- **OnSuccess**: <code>[QrCodeMinimal](src/models/qr-code-minimal.ts)</code>
- **OnError**: throws <code>[QrCodes.CreateQrCodePublicError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.createQrCodePublic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCodeMinimal, QrCodes.CreateQrCodePublicError&gt;</code>, with `result.value` of type <code>[QrCodeMinimal](src/models/qr-code-minimal.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStaticQrCodePublic(request: QrCodes.CreateStaticQrCodePublicRequest, options?: RequestOptions): ApiPromise&lt;PublicStaticQrCodeResponse, QrCodes.CreateStaticQrCodePublicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a static QR code image without creating or saving a QR code resource. SVG and PNG output are supported via the Accept header
Contact your Account Manager to discuss enabling this feature for your account.

The `render_customizations` field supports basic appearance options. Customizations that require the rasterize API are not supported: `gradient`, `background_gradient`, `frame`, `text`, and `logo`.

The Accept header controls the response format:
- `application/json` (default): Returns a JSON object with the image as a base64-encoded byte string.
- `image/svg+xml`: Returns the raw SVG image.
- `image/png`: Returns the raw PNG image.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.createStaticQrCodePublic({
    accept: Accept.ImageSvgXml,
    body: { content: "https://bitly.com", groupGuid: "Ba1bc23dE4F" },
  });
  // TODO: Handle 'response' of type PublicStaticQrCodeResponse
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.CreateStaticQrCodePublicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .createStaticQrCodePublic({
    accept: Accept.ImageSvgXml,
    body: { content: "https://bitly.com", groupGuid: "Ba1bc23dE4F" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicStaticQrCodeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | The image format. Supports `svg` and `png`. Ignored if the Accept header specifies an image type.<br>**Default**: "svg" |
| <code>accept?</code> | <code>[Accept](src/models/accept.ts)</code> | Controls the response format. Use `application/json` (default) to receive a JSON-wrapped base64 image, `image/svg+xml` to receive the raw SVG, or `image/png` to receive the raw PNG. |
| <code>body</code> | <code>[PublicCreateStaticQrCodeRequest](src/models/public-create-static-qr-code-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.createStaticQrCodePublic(request)`

- **OnSuccess**: <code>[PublicStaticQrCodeResponse](src/models/public-static-qr-code-response.ts)</code>
- **OnError**: throws <code>[QrCodes.CreateStaticQrCodePublicError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.createStaticQrCodePublic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicStaticQrCodeResponse, QrCodes.CreateStaticQrCodePublicError&gt;</code>, with `result.value` of type <code>[PublicStaticQrCodeResponse](src/models/public-static-qr-code-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteQrCode(request: QrCodes.DeleteQrCodeRequest, options?: RequestOptions): ApiPromise&lt;PublicDeleteQrCodeResponse, QrCodes.DeleteQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a QR Code that has not been redirected and is not for a custom link. Also deletes the associated link (if applicable).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.deleteQrCode({ qrcodeId: "Qabcde12345" });
  // TODO: Handle 'response' of type PublicDeleteQrCodeResponse
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.DeleteQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.deleteQrCode({ qrcodeId: "Qabcde12345" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicDeleteQrCodeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR Code ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.deleteQrCode(request)`

- **OnSuccess**: <code>[PublicDeleteQrCodeResponse](src/models/public-delete-qr-code-response.ts)</code>
- **OnError**: throws <code>[QrCodes.DeleteQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.deleteQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicDeleteQrCodeResponse, QrCodes.DeleteQrCodeError&gt;</code>, with `result.value` of type <code>[PublicDeleteQrCodeResponse](src/models/public-delete-qr-code-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQrCodeByIdPublic(request: QrCodes.GetQrCodeByIdPublicRequest, options?: RequestOptions): ApiPromise&lt;QrCodeDetails, QrCodes.GetQrCodeByIdPublicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the QR code with a matching id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getQrCodeByIdPublic({ qrcodeId: "Qabcde12345" });
  // TODO: Handle 'response' of type QrCodeDetails
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetQrCodeByIdPublicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.getQrCodeByIdPublic({ qrcodeId: "Qabcde12345" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCodeDetails
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR Code ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getQrCodeByIdPublic(request)`

- **OnSuccess**: <code>[QrCodeDetails](src/models/qr-code-details.ts)</code>
- **OnError**: throws <code>[QrCodes.GetQrCodeByIdPublicError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getQrCodeByIdPublic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCodeDetails, QrCodes.GetQrCodeByIdPublicError&gt;</code>, with `result.value` of type <code>[QrCodeDetails](src/models/qr-code-details.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQrCodeImagePublic(request: QrCodes.GetQrCodeImagePublicRequest, options?: RequestOptions): ApiPromise&lt;PublicQrCodeImageResponse, QrCodes.GetQrCodeImagePublicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the image of a given QR Code. The Accept header controls how this is returned (options are "application/json", "image/svg+xml", and "image/png").
If the Accept header is "application/json" the format query parameter will determine the image format inside of the json (which will be base64 encoded and prefixed with its mime type as would be suitable for a HTML image src tag).
To Return the QR Code image itself, set the Accept header to "image/svg+xml" or "image/png", or remove the Accept header and set the format query parameter to “svg” or “png” (if no format is specified the default will be “svg”).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getQrCodeImagePublic({
    qrcodeId: "Qabcde12345",
    format: Format.Svg,
    accept: "image/svg+xml",
  });
  // TODO: Handle 'response' of type PublicQrCodeImageResponse
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetQrCodeImagePublicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .getQrCodeImagePublic({ qrcodeId: "Qabcde12345", format: Format.Svg, accept: "image/svg+xml" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicQrCodeImageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR Code ID |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | The format type of the image. If there is an image format in the header it takes precedence.<br>**Default**: "svg" |
| <code>accept?</code> | <code>string</code> | The file format for the QR code's image. If the accept header is application/json the image data will be wrapped in a json object, base64 encoded and prefixed with its mime type as would be suitable for a HTML image src tag. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getQrCodeImagePublic(request)`

- **OnSuccess**: <code>[PublicQrCodeImageResponse](src/models/public-qr-code-image-response.ts)</code>
- **OnError**: throws <code>[QrCodes.GetQrCodeImagePublicError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getQrCodeImagePublic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicQrCodeImageResponse, QrCodes.GetQrCodeImagePublicError&gt;</code>, with `result.value` of type <code>[PublicQrCodeImageResponse](src/models/public-qr-code-image-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScanMetricsForQrCode(request: QrCodes.GetScanMetricsForQrCodeRequest, options?: RequestOptions): ApiPromise&lt;BitlinkScans, QrCodes.GetScanMetricsForQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of scan counts for the specified QR code. The array is comprised of scan counts for each time window, where the window is based on the provided unit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getScanMetricsForQrCode({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type BitlinkScans
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetScanMetricsForQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .getScanMetricsForQrCode({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BitlinkScans
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR Code ID |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getScanMetricsForQrCode(request)`

- **OnSuccess**: <code>[BitlinkScans](src/models/bitlink-scans.ts)</code>
- **OnError**: throws <code>[QrCodes.GetScanMetricsForQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getScanMetricsForQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BitlinkScans, QrCodes.GetScanMetricsForQrCodeError&gt;</code>, with `result.value` of type <code>[BitlinkScans](src/models/bitlink-scans.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScanMetricsForQrCodeByBrowser(request: QrCodes.GetScanMetricsForQrCodeByBrowserRequest, options?: RequestOptions): ApiPromise&lt;ScanMetrics, QrCodes.GetScanMetricsForQrCodeByBrowserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the browsers generating scan traffic to the specified QR Code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getScanMetricsForQrCodeByBrowser({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ScanMetrics
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetScanMetricsForQrCodeByBrowserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .getScanMetricsForQrCodeByBrowser({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScanMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR Code ID |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getScanMetricsForQrCodeByBrowser(request)`

- **OnSuccess**: <code>[ScanMetrics](src/models/scan-metrics.ts)</code>
- **OnError**: throws <code>[QrCodes.GetScanMetricsForQrCodeByBrowserError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getScanMetricsForQrCodeByBrowser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScanMetrics, QrCodes.GetScanMetricsForQrCodeByBrowserError&gt;</code>, with `result.value` of type <code>[ScanMetrics](src/models/scan-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScanMetricsForQrCodeByCities(request: QrCodes.GetScanMetricsForQrCodeByCitiesRequest, options?: RequestOptions): ApiPromise&lt;CityScanMetrics, QrCodes.GetScanMetricsForQrCodeByCitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the city origins of scan traffic for the specified QR Code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getScanMetricsForQrCodeByCities({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type CityScanMetrics
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetScanMetricsForQrCodeByCitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .getScanMetricsForQrCodeByCities({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CityScanMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR Code ID |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getScanMetricsForQrCodeByCities(request)`

- **OnSuccess**: <code>[CityScanMetrics](src/models/city-scan-metrics.ts)</code>
- **OnError**: throws <code>[QrCodes.GetScanMetricsForQrCodeByCitiesError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getScanMetricsForQrCodeByCities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CityScanMetrics, QrCodes.GetScanMetricsForQrCodeByCitiesError&gt;</code>, with `result.value` of type <code>[CityScanMetrics](src/models/city-scan-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScanMetricsForQrCodeByCountries(request: QrCodes.GetScanMetricsForQrCodeByCountriesRequest, options?: RequestOptions): ApiPromise&lt;ScanMetrics, QrCodes.GetScanMetricsForQrCodeByCountriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the country origins of scan traffic for the specified QR Code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getScanMetricsForQrCodeByCountries({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ScanMetrics
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetScanMetricsForQrCodeByCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .getScanMetricsForQrCodeByCountries({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScanMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR Code ID |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getScanMetricsForQrCodeByCountries(request)`

- **OnSuccess**: <code>[ScanMetrics](src/models/scan-metrics.ts)</code>
- **OnError**: throws <code>[QrCodes.GetScanMetricsForQrCodeByCountriesError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getScanMetricsForQrCodeByCountries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScanMetrics, QrCodes.GetScanMetricsForQrCodeByCountriesError&gt;</code>, with `result.value` of type <code>[ScanMetrics](src/models/scan-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScanMetricsForQrCodeByDevicesOs(request: QrCodes.GetScanMetricsForQrCodeByDevicesOsRequest, options?: RequestOptions): ApiPromise&lt;ScanMetrics, QrCodes.GetScanMetricsForQrCodeByDevicesOsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the device os generating scan traffic for the specified QR Code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getScanMetricsForQrCodeByDevicesOs({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type ScanMetrics
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetScanMetricsForQrCodeByDevicesOsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .getScanMetricsForQrCodeByDevicesOs({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    size: 10,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScanMetrics
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR Code ID |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getScanMetricsForQrCodeByDevicesOs(request)`

- **OnSuccess**: <code>[ScanMetrics](src/models/scan-metrics.ts)</code>
- **OnError**: throws <code>[QrCodes.GetScanMetricsForQrCodeByDevicesOsError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getScanMetricsForQrCodeByDevicesOs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScanMetrics, QrCodes.GetScanMetricsForQrCodeByDevicesOsError&gt;</code>, with `result.value` of type <code>[ScanMetrics](src/models/scan-metrics.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScanMetricsSummaryForQrCode(request: QrCodes.GetScanMetricsSummaryForQrCodeRequest, options?: RequestOptions): ApiPromise&lt;BitlinkScansSummary, QrCodes.GetScanMetricsSummaryForQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the scan counts for a QR Code rolled up into a single field for a specified time window, where the window is based on the provided unit.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getScanMetricsSummaryForQrCode({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  });
  // TODO: Handle 'response' of type BitlinkScansSummary
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetScanMetricsSummaryForQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .getScanMetricsSummaryForQrCode({
    qrcodeId: "Qabcde12345",
    unit: TimeUnit.Month,
    units: 1,
    unitReference: "2006-01-02T15:04:05-0700",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BitlinkScansSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR Code ID |
| <code>unit?</code> | <code>[TimeUnit](src/models/time-unit.ts)</code> | A unit of time<br>**Default**: "day" |
| <code>units?</code> | <code>number</code> | An integer representing the time units to query data for. pass -1 to return all units of time<br>**Default**: -1 |
| <code>unitReference?</code> | <code>string</code> | An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getScanMetricsSummaryForQrCode(request)`

- **OnSuccess**: <code>[BitlinkScansSummary](src/models/bitlink-scans-summary.ts)</code>
- **OnError**: throws <code>[QrCodes.GetScanMetricsSummaryForQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getScanMetricsSummaryForQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BitlinkScansSummary, QrCodes.GetScanMetricsSummaryForQrCodeError&gt;</code>, with `result.value` of type <code>[BitlinkScansSummary](src/models/bitlink-scans-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listQrMinimal(request: QrCodes.ListQrMinimalRequest, options?: RequestOptions): ApiPromise&lt;QrCodesMinimal, QrCodes.ListQrMinimalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of QR codes matching the filter settings. Values are in reverse chronological order.
The pagination occurs by calling the next link in the pagination response object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.listQrMinimal({
    groupGuid: "Ba1bc23dE4F",
    hasRenderCustomizations: HasRenderCustomizations.Both,
    size: 10,
    query: "api",
    hostnamePathQuery: "dev.bitly.com/api-reference",
    createdBefore: 1694529902,
    createdAfter: 1694529902,
    archived: Archived.Both,
    creatingLogin: ["chauncey"],
    qrcType: [QrcType.Bitlink],
    isGs1: IsGs1.Both,
    tags: ["bitly", "api"],
  });
  // TODO: Handle 'response' of type QrCodesMinimal
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.ListQrMinimalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .listQrMinimal({
    groupGuid: "Ba1bc23dE4F",
    hasRenderCustomizations: HasRenderCustomizations.Both,
    size: 10,
    query: "api",
    hostnamePathQuery: "dev.bitly.com/api-reference",
    createdBefore: 1694529902,
    createdAfter: 1694529902,
    archived: Archived.Both,
    creatingLogin: ["chauncey"],
    qrcType: [QrcType.Bitlink],
    isGs1: IsGs1.Both,
    tags: ["bitly", "api"],
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCodesMinimal
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>hasRenderCustomizations?</code> | <code>[HasRenderCustomizations](src/models/has-render-customizations.ts)</code> | Whether or not QRCode has any render customizations (like color or shape changes)<br>**Default**: "both" |
| <code>size?</code> | <code>number</code> | The quantity of items to be be returned<br>**Default**: 50 |
| <code>searchAfter?</code> | <code>string</code> | Token used to search next batch of qr codes, only use response from API as input value. |
| <code>query?</code> | <code>string</code> | The value that you would like to search |
| <code>hostnamePathQuery?</code> | <code>string</code> | The hostname and/or path you would like to search (case-insensitive). Subdomains included; query params and fragment ignored. |
| <code>createdBefore?</code> | <code>number</code> | Timestamp as an integer unix epoch (seconds only) |
| <code>createdAfter?</code> | <code>number</code> | Timestamp as an integer unix epoch (seconds only) |
| <code>archived?</code> | <code>[Archived](src/models/archived.ts)</code> | Whether or not to include archived resources<br>**Default**: "off" |
| <code>creatingLogin?</code> | <code>string[]</code> | Filter by the login of the authenticated user that created the QR Code |
| <code>qrcType?</code> | <code>[QrcType](src/models/qrc-type.ts)[]</code> | - |
| <code>isGs1?</code> | <code>[IsGs1](src/models/is-gs1.ts)</code> | a filter value if the resource is a GS1 QR code<br>**Default**: "both" |
| <code>isExpired?</code> | <code>[IsExpired](src/models/is-expired.ts)</code> | filter bitlinks by expiration status<br>**Default**: "both" |
| <code>hasExpiration?</code> | <code>[HasExpiration](src/models/has-expiration.ts)</code> | filter bitlinks by presence of expiration<br>**Default**: "both" |
| <code>hasDynamicRouting?</code> | <code>[HasDynamicRouting](src/models/has-dynamic-routing.ts)</code> | filter bitlinks by presence of dynamic routing rules<br>**Default**: "both" |
| <code>tags?</code> | <code>string[]</code> | Filter by given tags |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.listQrMinimal(request)`

- **OnSuccess**: <code>[QrCodesMinimal](src/models/qr-codes-minimal.ts)</code>
- **OnError**: throws <code>[QrCodes.ListQrMinimalError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.listQrMinimal(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCodesMinimal, QrCodes.ListQrMinimalError&gt;</code>, with `result.value` of type <code>[QrCodesMinimal](src/models/qr-codes-minimal.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>redirectQrCodeDestination(request: QrCodes.RedirectQrCodeDestinationRequest, options?: RequestOptions): ApiPromise&lt;QrCodeMinimal, QrCodes.RedirectQrCodeDestinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the destination URL that a stand alone QR Code redirects to. This only works for stand alone QR Codes; a QR Code already associated with a bitlink must be updated via the Bitlinks API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.redirectQrCodeDestination({
    qrcodeId: "some example string",
    body: { longUrl: "some example string" },
  });
  // TODO: Handle 'response' of type QrCodeMinimal
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.RedirectQrCodeDestinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .redirectQrCodeDestination({ qrcodeId: "some example string", body: { longUrl: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCodeMinimal
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | - |
| <code>body</code> | <code>[RedirectQrCodeRequest](src/models/redirect-qr-code-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.redirectQrCodeDestination(request)`

- **OnSuccess**: <code>[QrCodeMinimal](src/models/qr-code-minimal.ts)</code>
- **OnError**: throws <code>[QrCodes.RedirectQrCodeDestinationError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.redirectQrCodeDestination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCodeMinimal, QrCodes.RedirectQrCodeDestinationError&gt;</code>, with `result.value` of type <code>[QrCodeMinimal](src/models/qr-code-minimal.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateQrCodePublic(request: QrCodes.UpdateQrCodePublicRequest, options?: RequestOptions): ApiPromise&lt;QrCodeMinimal, QrCodes.UpdateQrCodePublicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the QR code with a matching id and returns it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.updateQrCodePublic({
    qrcodeId: "Qabc123",
    body: { title: "Minimal QR Code Updated", tags: ["tag1", "tag2"] },
  });
  // TODO: Handle 'response' of type QrCodeMinimal
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.UpdateQrCodePublicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .updateQrCodePublic({
    qrcodeId: "Qabc123",
    body: { title: "Minimal QR Code Updated", tags: ["tag1", "tag2"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCodeMinimal
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | The QR code ID |
| <code>body?</code> | <code>[PublicUpdateQrCodeRequest](src/models/public-update-qr-code-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.updateQrCodePublic(request)`

- **OnSuccess**: <code>[QrCodeMinimal](src/models/qr-code-minimal.ts)</code>
- **OnError**: throws <code>[QrCodes.UpdateQrCodePublicError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.updateQrCodePublic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCodeMinimal, QrCodes.UpdateQrCodePublicError&gt;</code>, with `result.value` of type <code>[QrCodeMinimal](src/models/qr-code-minimal.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateQrCodesByGroup(request: QrCodes.UpdateQrCodesByGroupRequest, options?: RequestOptions): ApiPromise&lt;QrcBulkUpdate, QrCodes.UpdateQrCodesByGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update can add or remove tags, or archive/un-archive, up to 100 QR codes at a time.
Pages QR codes cannot be updated with this endpoint.
The response includes a list of QR code ids that were updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.updateQrCodesByGroup({
    groupGuid: "Ba1bc23dE4F",
    body: { action: Action.Archive },
  });
  // TODO: Handle 'response' of type QrcBulkUpdate
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.UpdateQrCodesByGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .updateQrCodesByGroup({ groupGuid: "Ba1bc23dE4F", body: { action: Action.Archive } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrcBulkUpdate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupGuid</code> | <code>string</code> | A GUID for a Bitly group |
| <code>body</code> | <code>[QrcBulkUpdateRequest](src/models/qrc-bulk-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.updateQrCodesByGroup(request)`

- **OnSuccess**: <code>[QrcBulkUpdate](src/models/qrc-bulk-update.ts)</code>
- **OnError**: throws <code>[QrCodes.UpdateQrCodesByGroupError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.updateQrCodesByGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrcBulkUpdate, QrCodes.UpdateQrCodesByGroupError&gt;</code>, with `result.value` of type <code>[QrcBulkUpdate](src/models/qrc-bulk-update.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upgradeQrCodeToBitlink(request: QrCodes.UpgradeQrCodeToBitlinkRequest, options?: RequestOptions): ApiPromise&lt;BitlinkBody, QrCodes.UpgradeQrCodeToBitlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upgrades a stand alone (decoupled) QR Code to a coupled QR Code by associating it with its underlying Bitly short link. This operation consumes one encode from the organization's monthly Link limit. If the QR Code is already coupled, no encode is consumed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.upgradeQrCodeToBitlink({ qrcodeId: "some example string" });
  // TODO: Handle 'response' of type BitlinkBody
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.UpgradeQrCodeToBitlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.upgradeQrCodeToBitlink({ qrcodeId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BitlinkBody
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcodeId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.upgradeQrCodeToBitlink(request)`

- **OnSuccess**: <code>[BitlinkBody](src/models/bitlink-body.ts)</code>
- **OnError**: throws <code>[QrCodes.UpgradeQrCodeToBitlinkError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.upgradeQrCodeToBitlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BitlinkBody, QrCodes.UpgradeQrCodeToBitlinkError&gt;</code>, with `result.value` of type <code>[BitlinkBody](src/models/bitlink-body.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](src/resources/user-api.ts)

<details>
<summary><code>getPlatformLimits(request?: UserApi.GetPlatformLimitsRequest, options?: RequestOptions): ApiPromise&lt;PlatformLimits, UserApi.GetPlatformLimitsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch all platform limits and counts available for an organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userApi.getPlatformLimits({ path: "/organizations/{organization_guid}" });
  // TODO: Handle 'response' of type PlatformLimits
} catch (err) {
  // TODO: Handle 'err' of type UserApi.GetPlatformLimitsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi
  .getPlatformLimits({ path: "/organizations/{organization_guid}" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatformLimits
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>path?</code> | <code>string</code> | The specific path for which information is requested |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userApi.getPlatformLimits(request)`

- **OnSuccess**: <code>[PlatformLimits](src/models/platform-limits.ts)</code>
- **OnError**: throws <code>[UserApi.GetPlatformLimitsError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.getPlatformLimits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatformLimits, UserApi.GetPlatformLimitsError&gt;</code>, with `result.value` of type <code>[PlatformLimits](src/models/platform-limits.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(options?: RequestOptions): ApiPromise&lt;User, UserApi.GetUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information for the current authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userApi.getUser();
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type UserApi.GetUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi.getUser().asApiResult();
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

**Direct**: `await client.userApi.getUser()`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[UserApi.GetUserError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.getUser().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, UserApi.GetUserError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUser(request: UserApi.UpdateUserRequest, options?: RequestOptions): ApiPromise&lt;User, UserApi.UpdateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update fields in the user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userApi.updateUser({ body: {} });
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type UserApi.UpdateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi.updateUser({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[UserUpdate](src/models/user-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userApi.updateUser(request)`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[UserApi.UpdateUserError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.updateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, UserApi.UpdateUserError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/resources/webhooks-api.ts)

<details>
<summary><code>createWebhook(request: WebhooksApi.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksApi.CreateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksApi.createWebhook({
    body: {
      organizationGuid: "some example string",
      name: "some example string",
      event: "some example string",
      url: "some example string",
    },
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.CreateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi
  .createWebhook({
    body: {
      organizationGuid: "some example string",
      name: "some example string",
      event: "some example string",
      url: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WebhookCreate](src/models/webhook-create.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.createWebhook(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[WebhooksApi.CreateWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, WebhooksApi.CreateWebhookError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: WebhooksApi.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;undefined, WebhooksApi.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.webhooksApi.deleteWebhook({ webhookGuid: "Wa1bcDefG23" });
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.deleteWebhook({ webhookGuid: "Wa1bcDefG23" }).asApiResult();
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
| <code>webhookGuid</code> | <code>string</code> | A GUID for a Bitly webhook |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.deleteWebhook(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WebhooksApi.DeleteWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WebhooksApi.DeleteWebhookError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhook(request: WebhooksApi.GetWebhookRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksApi.GetWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksApi.getWebhook({ webhookGuid: "Wa1bcDefG23" });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.GetWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.getWebhook({ webhookGuid: "Wa1bcDefG23" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookGuid</code> | <code>string</code> | A GUID for a Bitly webhook |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.getWebhook(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[WebhooksApi.GetWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.getWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, WebhooksApi.GetWebhookError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWebhooks(request: WebhooksApi.GetWebhooksRequest, options?: RequestOptions): ApiPromise&lt;Webhooks, WebhooksApi.GetWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch all webhooks available for an Organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksApi.getWebhooks({ organizationGuid: "Oa1bcd234eF" });
  // TODO: Handle 'response' of type Webhooks
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.GetWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.getWebhooks({ organizationGuid: "Oa1bcd234eF" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhooks
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organizationGuid</code> | <code>string</code> | A GUID for a Bitly organization |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.getWebhooks(request)`

- **OnSuccess**: <code>[Webhooks](src/models/webhooks.ts)</code>
- **OnError**: throws <code>[WebhooksApi.GetWebhooksError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.getWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhooks, WebhooksApi.GetWebhooksError&gt;</code>, with `result.value` of type <code>[Webhooks](src/models/webhooks.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhook(request: WebhooksApi.UpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksApi.UpdateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksApi.updateWebhook({
    webhookGuid: "Wa1bcDefG23",
    body: { guid: "some example string" },
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.UpdateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi
  .updateWebhook({ webhookGuid: "Wa1bcDefG23", body: { guid: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookGuid</code> | <code>string</code> | A GUID for a Bitly webhook |
| <code>body</code> | <code>[WebhookUpdate](src/models/webhook-update.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.updateWebhook(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[WebhooksApi.UpdateWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.updateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, WebhooksApi.UpdateWebhookError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>verifyWebhook(request: WebhooksApi.VerifyWebhookRequest, options?: RequestOptions): ApiPromise&lt;Webhook, WebhooksApi.VerifyWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends ping event to test webhook configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooksApi.verifyWebhook({ webhookGuid: "Wa1bcDefG23" });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type WebhooksApi.VerifyWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooksApi.verifyWebhook({ webhookGuid: "Wa1bcDefG23" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookGuid</code> | <code>string</code> | A GUID for a Bitly webhook |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooksApi.verifyWebhook(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[WebhooksApi.VerifyWebhookError](src/resources/webhooks-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooksApi.verifyWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, WebhooksApi.VerifyWebhookError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BitlyError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

