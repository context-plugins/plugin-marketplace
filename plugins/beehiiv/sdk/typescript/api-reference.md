# Reference

> Source: [BeehiivClient](src/client.ts)

## AdNetworkOffers

> Source: [AdNetworkOffers](src/resources/ad-network-offers.ts)

<details>
<summary><code>advertisements(request: AdNetworkOffers.AdvertisementsRequest, options?: RequestOptions): ApiPromise&lt;AdOfferAdvertisementsGetResponse, AdNetworkOffers.AdvertisementsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve the active text advertisement creatives available for an ad offer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adNetworkOffers.advertisements({
    publicationId: "some example string",
    offerId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AdOfferAdvertisementsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type AdNetworkOffers.AdvertisementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adNetworkOffers
  .advertisements({
    publicationId: "some example string",
    offerId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdOfferAdvertisementsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>offerId</code> | <code>string</code> | The ID of the ad offer. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adNetworkOffers.advertisements(request)`

- **OnSuccess**: <code>[AdOfferAdvertisementsGetResponse](src/models/ad-offer-advertisements-get-response.ts)</code>
- **OnError**: throws <code>[AdNetworkOffers.AdvertisementsError](src/resources/ad-network-offers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adNetworkOffers.advertisements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdOfferAdvertisementsGetResponse, AdNetworkOffers.AdvertisementsError&gt;</code>, with `result.value` of type <code>[AdOfferAdvertisementsGetResponse](src/models/ad-offer-advertisements-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>create(request: AdNetworkOffers.CreateRequest, options?: RequestOptions): ApiPromise&lt;AdOfferCreateResponse, AdNetworkOffers.CreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Draft and accept an ad offer, then insert the resulting advertisement opportunity into a post.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adNetworkOffers.create({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AdOfferCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type AdNetworkOffers.CreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adNetworkOffers
  .create({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdOfferCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsAdNetworkOffersRequest](src/models/publications-ad-network-offers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adNetworkOffers.create(request)`

- **OnSuccess**: <code>[AdOfferCreateResponse](src/models/ad-offer-create-response.ts)</code>
- **OnError**: throws <code>[AdNetworkOffers.CreateError](src/resources/ad-network-offers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adNetworkOffers.create(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdOfferCreateResponse, AdNetworkOffers.CreateError&gt;</code>, with `result.value` of type <code>[AdOfferCreateResponse](src/models/ad-offer-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index(request: AdNetworkOffers.IndexRequest, options?: RequestOptions): ApiPromise&lt;AdOffersGetResponse, AdNetworkOffers.IndexError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve a list of ad offers available for the publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adNetworkOffers.index({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AdOffersGetResponse
} catch (err) {
  // TODO: Handle 'err' of type AdNetworkOffers.IndexError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adNetworkOffers
  .index({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdOffersGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>requestedFrom?</code> | <code>string</code> | A source identifier for where the offers request originated. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adNetworkOffers.index(request)`

- **OnSuccess**: <code>[AdOffersGetResponse](src/models/ad-offers-get-response.ts)</code>
- **OnError**: throws <code>[AdNetworkOffers.IndexError](src/resources/ad-network-offers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adNetworkOffers.index(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdOffersGetResponse, AdNetworkOffers.IndexError&gt;</code>, with `result.value` of type <code>[AdOffersGetResponse](src/models/ad-offers-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdNetworkReports

> Source: [AdNetworkReports](src/resources/ad-network-reports.ts)

<details>
<summary><code>accountSummary(request: AdNetworkReports.AccountSummaryRequest, options?: RequestOptions): ApiPromise&lt;AdNetworkReportSummary, AdNetworkReports.AccountSummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve one account-wide aggregate of advertisement performance and revenue across accessible publications.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adNetworkReports.accountSummary({ authorization: "some example string" });
  // TODO: Handle 'response' of type AdNetworkReportSummary
} catch (err) {
  // TODO: Handle 'err' of type AdNetworkReports.AccountSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adNetworkReports
  .accountSummary({ authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdNetworkReportSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>startDate?</code> | <code>string</code> (date) | Include reports for advertisements sent on or after this date in `YYYY-MM-DD` format. |
| <code>endDate?</code> | <code>string</code> (date) | Include reports for advertisements sent on or before this date in `YYYY-MM-DD` format. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adNetworkReports.accountSummary(request)`

- **OnSuccess**: <code>[AdNetworkReportSummary](src/models/ad-network-report-summary.ts)</code>
- **OnError**: throws <code>[AdNetworkReports.AccountSummaryError](src/resources/ad-network-reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adNetworkReports.accountSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdNetworkReportSummary, AdNetworkReports.AccountSummaryError&gt;</code>, with `result.value` of type <code>[AdNetworkReportSummary](src/models/ad-network-report-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index2(request: AdNetworkReports.Index2Request, options?: RequestOptions): ApiPromise&lt;AdNetworkReportsGetResponse, AdNetworkReports.Index2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve advertisement performance and payment reports for the publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adNetworkReports.index2({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AdNetworkReportsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type AdNetworkReports.Index2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adNetworkReports
  .index2({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdNetworkReportsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object. |
| <code>limit?</code> | <code>number</code> | A limit between 1 and 100. Defaults to 10. |
| <code>page?</code> | <code>number</code> | The page of reports to return. Defaults to 1. |
| <code>startDate?</code> | <code>string</code> (date) | Include reports for advertisements sent on or after this date in `YYYY-MM-DD` format. |
| <code>endDate?</code> | <code>string</code> (date) | Include reports for advertisements sent on or before this date in `YYYY-MM-DD` format. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adNetworkReports.index2(request)`

- **OnSuccess**: <code>[AdNetworkReportsGetResponse](src/models/ad-network-reports-get-response.ts)</code>
- **OnError**: throws <code>[AdNetworkReports.Index2Error](src/resources/ad-network-reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adNetworkReports.index2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdNetworkReportsGetResponse, AdNetworkReports.Index2Error&gt;</code>, with `result.value` of type <code>[AdNetworkReportsGetResponse](src/models/ad-network-reports-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>summary(request: AdNetworkReports.SummaryRequest, options?: RequestOptions): ApiPromise&lt;AdNetworkReportSummary, AdNetworkReports.SummaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve aggregate advertisement performance and revenue for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adNetworkReports.summary({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AdNetworkReportSummary
} catch (err) {
  // TODO: Handle 'err' of type AdNetworkReports.SummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adNetworkReports
  .summary({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdNetworkReportSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object. |
| <code>startDate?</code> | <code>string</code> (date) | Include reports for advertisements sent on or after this date in `YYYY-MM-DD` format. |
| <code>endDate?</code> | <code>string</code> (date) | Include reports for advertisements sent on or before this date in `YYYY-MM-DD` format. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adNetworkReports.summary(request)`

- **OnSuccess**: <code>[AdNetworkReportSummary](src/models/ad-network-report-summary.ts)</code>
- **OnError**: throws <code>[AdNetworkReports.SummaryError](src/resources/ad-network-reports.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adNetworkReports.summary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdNetworkReportSummary, AdNetworkReports.SummaryError&gt;</code>, with `result.value` of type <code>[AdNetworkReportSummary](src/models/ad-network-report-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdvertisementOpportunities

> Source: [AdvertisementOpportunities](src/resources/advertisement-opportunities.ts)

<details>
<summary><code>index3(request: AdvertisementOpportunities.Index3Request, options?: RequestOptions): ApiPromise&lt;AdvertisementOpportunitiesGetResponse, AdvertisementOpportunities.Index3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of accepted advertisement opportunities for the publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.advertisementOpportunities.index3({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AdvertisementOpportunitiesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type AdvertisementOpportunities.Index3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.advertisementOpportunities
  .index3({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdvertisementOpportunitiesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.advertisementOpportunities.index3(request)`

- **OnSuccess**: <code>[AdvertisementOpportunitiesGetResponse](src/models/advertisement-opportunities-get-response.ts)</code>
- **OnError**: throws <code>[AdvertisementOpportunities.Index3Error](src/resources/advertisement-opportunities.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.advertisementOpportunities.index3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdvertisementOpportunitiesGetResponse, AdvertisementOpportunities.Index3Error&gt;</code>, with `result.value` of type <code>[AdvertisementOpportunitiesGetResponse](src/models/advertisement-opportunities-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Authorizations

> Source: [Authorizations](src/resources/authorizations.ts)

<details>
<summary><code>authorize(request: Authorizations.AuthorizeRequest, options?: RequestOptions): ApiPromise&lt;undefined, Authorizations.AuthorizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the OAuth2 authorization code flow. This endpoint redirects the user to login and consent (if needed), then redirects back to your `redirect_uri` with a `code` and `state`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.authorizations.authorize({
    clientId: "some example string",
    redirectUri: "some example string",
    responseType: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Authorizations.AuthorizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authorizations
  .authorize({
    clientId: "some example string",
    redirectUri: "some example string",
    responseType: "some example string",
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
| <code>clientId</code> | <code>string</code> | The OAuth application client ID (`uid`). |
| <code>redirectUri</code> | <code>string</code> | Must exactly match one of the app's configured redirect URIs. |
| <code>responseType</code> | <code>string</code> | Must be `code` for the authorization code flow. |
| <code>scope?</code> | <code>string</code> | Space-delimited list of requested scopes. |
| <code>state?</code> | <code>string</code> | Opaque value returned to your callback for CSRF protection. |
| <code>codeChallenge?</code> | <code>string</code> | PKCE code challenge. Required for public clients. |
| <code>codeChallengeMethod?</code> | <code>[CodeChallengeMethod](src/models/code-challenge-method.ts)</code> | PKCE challenge method (`plain` or `S256`). Required for public clients when using PKCE. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authorizations.authorize(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Authorizations.AuthorizeError](src/resources/authorizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authorizations.authorize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Authorizations.AuthorizeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Authors

> Source: [Authors](src/resources/authors.ts)

<details>
<summary><code>index4(request: Authors.Index4Request, options?: RequestOptions): ApiPromise&lt;AuthorsListResponse, Authors.Index4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of authors available for the publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authors.index4({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AuthorsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Authors.Index4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authors
  .index4({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>name?</code> | <code>string</code> | Optionally filter authors by full name or first name (case-insensitive). |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authors.index4(request)`

- **OnSuccess**: <code>[AuthorsListResponse](src/models/authors-list-response.ts)</code>
- **OnError**: throws <code>[Authors.Index4Error](src/resources/authors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authors.index4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorsListResponse, Authors.Index4Error&gt;</code>, with `result.value` of type <code>[AuthorsListResponse](src/models/authors-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show(request: Authors.ShowRequest, options?: RequestOptions): ApiPromise&lt;AuthorsGetResponse, Authors.ShowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single author from a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authors.show({
    publicationId: "some example string",
    authorId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AuthorsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Authors.ShowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authors
  .show({
    publicationId: "some example string",
    authorId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthorsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorId</code> | <code>string</code> | The author identifier. This accepts a prefixed author ID, full name, or first name. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authors.show(request)`

- **OnSuccess**: <code>[AuthorsGetResponse](src/models/authors-get-response.ts)</code>
- **OnError**: throws <code>[Authors.ShowError](src/resources/authors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authors.show(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthorsGetResponse, Authors.ShowError&gt;</code>, with `result.value` of type <code>[AuthorsGetResponse](src/models/authors-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AutomationJourneys

> Source: [AutomationJourneys](src/resources/automation-journeys.ts)

<details>
<summary><code>create2(request: AutomationJourneys.Create2Request, options?: RequestOptions): ApiPromise&lt;AutomationJourneysResponse, AutomationJourneys.Create2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an existing subscription to an automation flow. Requires the automation to have an active *Add by API* trigger. The specified `email` or `subscription_id` will be matched against your existing subscribers. If an existing subscriber is found, they will be enrolled immediately.
Looking to enroll new subscribers? Use the **Create Subscription** endpoint instead and specify the `automation_ids` param.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automationJourneys.create2({
    publicationId: "some example string",
    automationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AutomationJourneysResponse
} catch (err) {
  // TODO: Handle 'err' of type AutomationJourneys.Create2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automationJourneys
  .create2({
    publicationId: "some example string",
    automationId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationJourneysResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>automationId</code> | <code>string</code> | The prefixed ID of the automation object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsAutomationsJourneysRequest](src/models/publications-automations-journeys-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automationJourneys.create2(request)`

- **OnSuccess**: <code>[AutomationJourneysResponse](src/models/automation-journeys-response.ts)</code>
- **OnError**: throws <code>[AutomationJourneys.Create2Error](src/resources/automation-journeys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automationJourneys.create2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationJourneysResponse, AutomationJourneys.Create2Error&gt;</code>, with `result.value` of type <code>[AutomationJourneysResponse](src/models/automation-journeys-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index5(request: AutomationJourneys.Index5Request, options?: RequestOptions): ApiPromise&lt;AutomationJourneysIndexResponse, AutomationJourneys.Index5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of automation journeys that have occurred within a specific automation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automationJourneys.index5({
    publicationId: "some example string",
    automationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AutomationJourneysIndexResponse
} catch (err) {
  // TODO: Handle 'err' of type AutomationJourneys.Index5Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automationJourneys
  .index5({
    publicationId: "some example string",
    automationId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationJourneysIndexResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>automationId</code> | <code>string</code> | The prefixed ID of the automation object |
| <code>status?</code> | <code>[AutomationJourneysGetRequestStatus](src/models/automation-journeys-get-request-status.ts)</code> | Optionally filter the results by the automation journey's status.<br>**Default**: "all" |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10). |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automationJourneys.index5(request)`

- **OnSuccess**: <code>[AutomationJourneysIndexResponse](src/models/automation-journeys-index-response.ts)</code>
- **OnError**: throws <code>[AutomationJourneys.Index5Error](src/resources/automation-journeys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automationJourneys.index5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationJourneysIndexResponse, AutomationJourneys.Index5Error&gt;</code>, with `result.value` of type <code>[AutomationJourneysIndexResponse](src/models/automation-journeys-index-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show2(request: AutomationJourneys.Show2Request, options?: RequestOptions): ApiPromise&lt;AutomationJourneysResponse, AutomationJourneys.Show2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single automation journey by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automationJourneys.show2({
    publicationId: "some example string",
    automationId: "some example string",
    automationJourneyId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AutomationJourneysResponse
} catch (err) {
  // TODO: Handle 'err' of type AutomationJourneys.Show2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automationJourneys
  .show2({
    publicationId: "some example string",
    automationId: "some example string",
    automationJourneyId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationJourneysResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>automationId</code> | <code>string</code> | The prefixed ID of the automation object |
| <code>automationJourneyId</code> | <code>string</code> | The prefixed automation journey id |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automationJourneys.show2(request)`

- **OnSuccess**: <code>[AutomationJourneysResponse](src/models/automation-journeys-response.ts)</code>
- **OnError**: throws <code>[AutomationJourneys.Show2Error](src/resources/automation-journeys.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automationJourneys.show2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationJourneysResponse, AutomationJourneys.Show2Error&gt;</code>, with `result.value` of type <code>[AutomationJourneysResponse](src/models/automation-journeys-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](src/resources/automations.ts)

<details>
<summary><code>index6(request: Automations.Index6Request, options?: RequestOptions): ApiPromise&lt;AutomationsListResponse, Automations.Index6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve automations for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.index6({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AutomationsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Automations.Index6Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .index6({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>expand?</code> | <code>[AutomationsListRequestExpandItem](src/models/automations-list-request-expand-item.ts)</code> | Optional list of expandable objects. |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.index6(request)`

- **OnSuccess**: <code>[AutomationsListResponse](src/models/automations-list-response.ts)</code>
- **OnError**: throws <code>[Automations.Index6Error](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.index6(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationsListResponse, Automations.Index6Error&gt;</code>, with `result.value` of type <code>[AutomationsListResponse](src/models/automations-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEmails(request: Automations.ListEmailsRequest, options?: RequestOptions): ApiPromise&lt;AutomationEmailsListResponse, Automations.ListEmailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all emails belonging to a specific automation, including engagement statistics for each email.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.listEmails({
    publicationId: "some example string",
    automationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AutomationEmailsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Automations.ListEmailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .listEmails({
    publicationId: "some example string",
    automationId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationEmailsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>automationId</code> | <code>string</code> | The prefixed ID of the automation object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>cursor?</code> | <code>string</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. Obtain it from the `next_cursor` field of a previous response. |
| <code>page?</code> | <code>number</code> | **Deprecated**: Use `cursor` instead. Pagination returns the results in pages. Limited to 100 pages maximum. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.listEmails(request)`

- **OnSuccess**: <code>[AutomationEmailsListResponse](src/models/automation-emails-list-response.ts)</code>
- **OnError**: throws <code>[Automations.ListEmailsError](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.listEmails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationEmailsListResponse, Automations.ListEmailsError&gt;</code>, with `result.value` of type <code>[AutomationEmailsListResponse](src/models/automation-emails-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show3(request: Automations.Show3Request, options?: RequestOptions): ApiPromise&lt;AutomationsGetResponse, Automations.Show3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single automation for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.automations.show3({
    publicationId: "some example string",
    automationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type AutomationsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Automations.Show3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.automations
  .show3({
    publicationId: "some example string",
    automationId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AutomationsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>automationId</code> | <code>string</code> | The prefixed ID of the automation object |
| <code>expand?</code> | <code>[AutomationsGetRequestExpandItem](src/models/automations-get-request-expand-item.ts)</code> | Optional list of expandable objects. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.automations.show3(request)`

- **OnSuccess**: <code>[AutomationsGetResponse](src/models/automations-get-response.ts)</code>
- **OnError**: throws <code>[Automations.Show3Error](src/resources/automations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.automations.show3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AutomationsGetResponse, Automations.Show3Error&gt;</code>, with `result.value` of type <code>[AutomationsGetResponse](src/models/automations-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSubscriptionUpdates

> Source: [BulkSubscriptionUpdates](src/resources/bulk-subscription-updates.ts)

<details>
<summary><code>index7(request: BulkSubscriptionUpdates.Index7Request, options?: RequestOptions): ApiPromise&lt;BulkSubscriptionUpdatesListResponse, BulkSubscriptionUpdates.Index7Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Subscription Update objects for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkSubscriptionUpdates.index7({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type BulkSubscriptionUpdatesListResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkSubscriptionUpdates.Index7Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkSubscriptionUpdates
  .index7({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkSubscriptionUpdatesListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSubscriptionUpdates.index7(request)`

- **OnSuccess**: <code>[BulkSubscriptionUpdatesListResponse](src/models/bulk-subscription-updates-list-response.ts)</code>
- **OnError**: throws <code>[BulkSubscriptionUpdates.Index7Error](src/resources/bulk-subscription-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkSubscriptionUpdates.index7(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkSubscriptionUpdatesListResponse, BulkSubscriptionUpdates.Index7Error&gt;</code>, with `result.value` of type <code>[BulkSubscriptionUpdatesListResponse](src/models/bulk-subscription-updates-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patch(request: BulkSubscriptionUpdates.PatchRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsPatchResponse, BulkSubscriptionUpdates.PatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkSubscriptionUpdates.patch({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionsPatchResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkSubscriptionUpdates.PatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkSubscriptionUpdates
  .patch({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsPatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsSubscriptionsBulkActionsRequest](src/models/publications-subscriptions-bulk-actions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSubscriptionUpdates.patch(request)`

- **OnSuccess**: <code>[SubscriptionsPatchResponse](src/models/subscriptions-patch-response.ts)</code>
- **OnError**: throws <code>[BulkSubscriptionUpdates.PatchError](src/resources/bulk-subscription-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkSubscriptionUpdates.patch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsPatchResponse, BulkSubscriptionUpdates.PatchError&gt;</code>, with `result.value` of type <code>[SubscriptionsPatchResponse](src/models/subscriptions-patch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patchStatus(request: BulkSubscriptionUpdates.PatchStatusRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update subscriptions' status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.bulkSubscriptionUpdates.patchStatus({
    publicationId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.bulkSubscriptionUpdates
  .patchStatus({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsSubscriptionsRequest](src/models/publications-subscriptions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSubscriptionUpdates.patchStatus(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.bulkSubscriptionUpdates.patchStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>put(request: BulkSubscriptionUpdates.PutRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionsPatchResponse, BulkSubscriptionUpdates.PutError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkSubscriptionUpdates.put({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionsPatchResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkSubscriptionUpdates.PutError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkSubscriptionUpdates
  .put({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsPatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsSubscriptionsBulkActionsRequest](src/models/publications-subscriptions-bulk-actions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSubscriptionUpdates.put(request)`

- **OnSuccess**: <code>[SubscriptionsPatchResponse](src/models/subscriptions-patch-response.ts)</code>
- **OnError**: throws <code>[BulkSubscriptionUpdates.PutError](src/resources/bulk-subscription-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkSubscriptionUpdates.put(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsPatchResponse, BulkSubscriptionUpdates.PutError&gt;</code>, with `result.value` of type <code>[SubscriptionsPatchResponse](src/models/subscriptions-patch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putStatus(request: BulkSubscriptionUpdates.PutStatusRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update subscriptions' status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.bulkSubscriptionUpdates.putStatus({
    publicationId: "some example string",
    authorization: "some example string",
  });
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
const result = await client.bulkSubscriptionUpdates
  .putStatus({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsSubscriptionsRequest](src/models/publications-subscriptions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSubscriptionUpdates.putStatus(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.bulkSubscriptionUpdates.putStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show4(request: BulkSubscriptionUpdates.Show4Request, options?: RequestOptions): ApiPromise&lt;BulkSubscriptionUpdatesGetResponse, BulkSubscriptionUpdates.Show4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single Subscription Update object for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkSubscriptionUpdates.show4({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type BulkSubscriptionUpdatesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkSubscriptionUpdates.Show4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkSubscriptionUpdates
  .show4({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkSubscriptionUpdatesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>id</code> | <code>string</code> | The ID of the Subscription Update object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSubscriptionUpdates.show4(request)`

- **OnSuccess**: <code>[BulkSubscriptionUpdatesGetResponse](src/models/bulk-subscription-updates-get-response.ts)</code>
- **OnError**: throws <code>[BulkSubscriptionUpdates.Show4Error](src/resources/bulk-subscription-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkSubscriptionUpdates.show4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkSubscriptionUpdatesGetResponse, BulkSubscriptionUpdates.Show4Error&gt;</code>, with `result.value` of type <code>[BulkSubscriptionUpdatesGetResponse](src/models/bulk-subscription-updates-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSubscriptions

> Source: [BulkSubscriptions](src/resources/bulk-subscriptions.ts)

<details>
<summary><code>create3(request: BulkSubscriptions.Create3Request, options?: RequestOptions): ApiPromise&lt;BulkSubscriptionCreateResponse, BulkSubscriptions.Create3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create new subscriptions for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bulkSubscriptions.create3({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type BulkSubscriptionCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type BulkSubscriptions.Create3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bulkSubscriptions
  .create3({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkSubscriptionCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsBulkSubscriptionsRequest](src/models/publications-bulk-subscriptions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bulkSubscriptions.create3(request)`

- **OnSuccess**: <code>[BulkSubscriptionCreateResponse](src/models/bulk-subscription-create-response.ts)</code>
- **OnError**: throws <code>[BulkSubscriptions.Create3Error](src/resources/bulk-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bulkSubscriptions.create3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkSubscriptionCreateResponse, BulkSubscriptions.Create3Error&gt;</code>, with `result.value` of type <code>[BulkSubscriptionCreateResponse](src/models/bulk-subscription-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ComplimentaryAccessApi

> Source: [ComplimentaryAccessApi](src/resources/complimentary-access-api.ts)

<details>
<summary><code>index8(request: ComplimentaryAccessApi.Index8Request, options?: RequestOptions): ApiPromise&lt;IndexComplimentaryAccessResponse, ComplimentaryAccessApi.Index8Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all complimentary access objects belonging to a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.complimentaryAccessApi.index8({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type IndexComplimentaryAccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ComplimentaryAccessApi.Index8Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.complimentaryAccessApi
  .index8({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IndexComplimentaryAccessResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>expand?</code> | <code>string</code> | Optional list of expandable objects.<br>`tier` - Returns the full tier object associated with this complimentary access.<br>`stats` - Returns granted subscription counts. |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>cursor?</code> | <code>string</code> | Use this opaque cursor token to fetch the next page of results. Obtain the value from `next_cursor` in a previous response. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.complimentaryAccessApi.index8(request)`

- **OnSuccess**: <code>[IndexComplimentaryAccessResponse](src/models/index-complimentary-access-response.ts)</code>
- **OnError**: throws <code>[ComplimentaryAccessApi.Index8Error](src/resources/complimentary-access-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.complimentaryAccessApi.index8(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IndexComplimentaryAccessResponse, ComplimentaryAccessApi.Index8Error&gt;</code>, with `result.value` of type <code>[IndexComplimentaryAccessResponse](src/models/index-complimentary-access-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show5(request: ComplimentaryAccessApi.Show5Request, options?: RequestOptions): ApiPromise&lt;ComplimentaryAccessResponse, ComplimentaryAccessApi.Show5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single complimentary access object belonging to a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.complimentaryAccessApi.show5({
    publicationId: "some example string",
    complimentaryAccessId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ComplimentaryAccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ComplimentaryAccessApi.Show5Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.complimentaryAccessApi
  .show5({
    publicationId: "some example string",
    complimentaryAccessId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ComplimentaryAccessResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>complimentaryAccessId</code> | <code>string</code> | The prefixed ID of the complimentary access object |
| <code>expand?</code> | <code>string</code> | Optional list of expandable objects.<br>`tier` - Returns the full tier object associated with this complimentary access. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.complimentaryAccessApi.show5(request)`

- **OnSuccess**: <code>[ComplimentaryAccessResponse](src/models/complimentary-access-response.ts)</code>
- **OnError**: throws <code>[ComplimentaryAccessApi.Show5Error](src/resources/complimentary-access-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.complimentaryAccessApi.show5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ComplimentaryAccessResponse, ComplimentaryAccessApi.Show5Error&gt;</code>, with `result.value` of type <code>[ComplimentaryAccessResponse](src/models/complimentary-access-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ConditionSets

> Source: [ConditionSets](src/resources/condition-sets.ts)

<details>
<summary><code>index9(request: ConditionSets.Index9Request, options?: RequestOptions): ApiPromise&lt;ConditionSetsListResponse, ConditionSets.Index9Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all active condition sets for a publication. Condition sets define reusable audience segments for targeting content to specific subscribers. Use the `purpose` parameter to filter by a specific use case.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conditionSets.index9({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ConditionSetsListResponse
} catch (err) {
  // TODO: Handle 'err' of type ConditionSets.Index9Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conditionSets
  .index9({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConditionSetsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>cursor?</code> | <code>string</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination. |
| <code>page?</code> | <code>number</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to cursor-based pagination using the `cursor` parameter. If not specified, results 1-10 from page 1 will be returned. |
| <code>purpose?</code> | <code>[ConditionSetPurpose](src/models/condition-set-purpose.ts)</code> | Filter condition sets by purpose. When not specified, all active condition sets are returned. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conditionSets.index9(request)`

- **OnSuccess**: <code>[ConditionSetsListResponse](src/models/condition-sets-list-response.ts)</code>
- **OnError**: throws <code>[ConditionSets.Index9Error](src/resources/condition-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conditionSets.index9(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConditionSetsListResponse, ConditionSets.Index9Error&gt;</code>, with `result.value` of type <code>[ConditionSetsListResponse](src/models/condition-sets-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show6(request: ConditionSets.Show6Request, options?: RequestOptions): ApiPromise&lt;ConditionSetShowResponse, ConditionSets.Show6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single active dynamic content condition set for a publication. Use `expand[]=stats` to calculate and return the active subscriber count synchronously.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conditionSets.show6({
    publicationId: "some example string",
    conditionSetId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ConditionSetShowResponse
} catch (err) {
  // TODO: Handle 'err' of type ConditionSets.Show6Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conditionSets
  .show6({
    publicationId: "some example string",
    conditionSetId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConditionSetShowResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>conditionSetId</code> | <code>string</code> | The UUID of the condition set object |
| <code>expand?</code> | <code>[ConditionSetShowExpandItems](src/models/condition-set-show-expand-items.ts)[]</code> | Optionally expand the response to include additional data.<br> `stats` - Calculates and returns the active subscriber count for this condition set synchronously. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conditionSets.show6(request)`

- **OnSuccess**: <code>[ConditionSetShowResponse](src/models/condition-set-show-response.ts)</code>
- **OnError**: throws <code>[ConditionSets.Show6Error](src/resources/condition-sets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conditionSets.show6(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConditionSetShowResponse, ConditionSets.Show6Error&gt;</code>, with `result.value` of type <code>[ConditionSetShowResponse](src/models/condition-set-show-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](src/resources/custom-fields.ts)

<details>
<summary><code>create4(request: CustomFields.Create4Request, options?: RequestOptions): ApiPromise&lt;CustomFieldResponse, CustomFields.Create4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a custom field on a publication, for use in subscriptions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.create4({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomFieldResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.Create4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .create4({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsCustomFieldsRequest](src/models/publications-custom-fields-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.create4(request)`

- **OnSuccess**: <code>[CustomFieldResponse](src/models/custom-field-response.ts)</code>
- **OnError**: throws <code>[CustomFields.Create4Error](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.create4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldResponse, CustomFields.Create4Error&gt;</code>, with `result.value` of type <code>[CustomFieldResponse](src/models/custom-field-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete(request: CustomFields.DeleteRequest, options?: RequestOptions): ApiPromise&lt;CustomFieldsDeleteResponse, CustomFields.DeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a custom field from a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.delete({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomFieldsDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.DeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .delete({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldsDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>id</code> | <code>string</code> | The ID of the Custom Fields object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.delete(request)`

- **OnSuccess**: <code>[CustomFieldsDeleteResponse](src/models/custom-fields-delete-response.ts)</code>
- **OnError**: throws <code>[CustomFields.DeleteError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.delete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldsDeleteResponse, CustomFields.DeleteError&gt;</code>, with `result.value` of type <code>[CustomFieldsDeleteResponse](src/models/custom-fields-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index10(request: CustomFields.Index10Request, options?: RequestOptions): ApiPromise&lt;CustomFieldIndexResponse, CustomFields.Index10Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all custom fields on a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.index10({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomFieldIndexResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.Index10Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .index10({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldIndexResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.index10(request)`

- **OnSuccess**: <code>[CustomFieldIndexResponse](src/models/custom-field-index-response.ts)</code>
- **OnError**: throws <code>[CustomFields.Index10Error](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.index10(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldIndexResponse, CustomFields.Index10Error&gt;</code>, with `result.value` of type <code>[CustomFieldIndexResponse](src/models/custom-field-index-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patch2(request: CustomFields.Patch2Request, options?: RequestOptions): ApiPromise&lt;CustomFieldsPatchResponse, CustomFields.Patch2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom field on a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.patch2({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomFieldsPatchResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.Patch2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .patch2({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldsPatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>id</code> | <code>string</code> | The ID of the Custom Fields object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsCustomFieldsRequest1](src/models/publications-custom-fields-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.patch2(request)`

- **OnSuccess**: <code>[CustomFieldsPatchResponse](src/models/custom-fields-patch-response.ts)</code>
- **OnError**: throws <code>[CustomFields.Patch2Error](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.patch2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldsPatchResponse, CustomFields.Patch2Error&gt;</code>, with `result.value` of type <code>[CustomFieldsPatchResponse](src/models/custom-fields-patch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>put2(request: CustomFields.Put2Request, options?: RequestOptions): ApiPromise&lt;CustomFieldResponse, CustomFields.Put2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom field on a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.put2({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomFieldResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.Put2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .put2({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>id</code> | <code>string</code> | The ID of the Custom Fields object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsCustomFieldsRequest1](src/models/publications-custom-fields-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.put2(request)`

- **OnSuccess**: <code>[CustomFieldResponse](src/models/custom-field-response.ts)</code>
- **OnError**: throws <code>[CustomFields.Put2Error](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.put2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldResponse, CustomFields.Put2Error&gt;</code>, with `result.value` of type <code>[CustomFieldResponse](src/models/custom-field-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show7(request: CustomFields.Show7Request, options?: RequestOptions): ApiPromise&lt;CustomFieldResponse, CustomFields.Show7Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

View a specific custom field on a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.show7({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type CustomFieldResponse
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.Show7Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .show7({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomFieldResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>id</code> | <code>string</code> | The ID of the Custom Fields object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.show7(request)`

- **OnSuccess**: <code>[CustomFieldResponse](src/models/custom-field-response.ts)</code>
- **OnError**: throws <code>[CustomFields.Show7Error](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.show7(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomFieldResponse, CustomFields.Show7Error&gt;</code>, with `result.value` of type <code>[CustomFieldResponse](src/models/custom-field-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataDeletion

> Source: [DataDeletion](src/resources/data-deletion.ts)

<details>
<summary><code>create5(request: DataDeletion.Create5Request, options?: RequestOptions): ApiPromise&lt;DataDeletionRequestResponse, DataDeletion.Create5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.

Creates a data deletion request for a subscriber within your organization. The subscriber's data will be redacted from all publications in the organization after a 14-day safety delay. This action cannot be undone once processing begins.

API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataDeletion.create5({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type DataDeletionRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DataDeletion.Create5Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataDeletion
  .create5({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataDeletionRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsDataPrivacyDeletionRequestsRequest](src/models/publications-data-privacy-deletion-requests-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataDeletion.create5(request)`

- **OnSuccess**: <code>[DataDeletionRequestResponse](src/models/data-deletion-request-response.ts)</code>
- **OnError**: throws <code>[DataDeletion.Create5Error](src/resources/data-deletion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataDeletion.create5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataDeletionRequestResponse, DataDeletion.Create5Error&gt;</code>, with `result.value` of type <code>[DataDeletionRequestResponse](src/models/data-deletion-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index11(request: DataDeletion.Index11Request, options?: RequestOptions): ApiPromise&lt;DataDeletionRequestIndexResponse, DataDeletion.Index11Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.

List all data deletion requests for your organization.

API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataDeletion.index11({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type DataDeletionRequestIndexResponse
} catch (err) {
  // TODO: Handle 'err' of type DataDeletion.Index11Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataDeletion
  .index11({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataDeletionRequestIndexResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataDeletion.index11(request)`

- **OnSuccess**: <code>[DataDeletionRequestIndexResponse](src/models/data-deletion-request-index-response.ts)</code>
- **OnError**: throws <code>[DataDeletion.Index11Error](src/resources/data-deletion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataDeletion.index11(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataDeletionRequestIndexResponse, DataDeletion.Index11Error&gt;</code>, with `result.value` of type <code>[DataDeletionRequestIndexResponse](src/models/data-deletion-request-index-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show8(request: DataDeletion.Show8Request, options?: RequestOptions): ApiPromise&lt;DataDeletionRequestResponse, DataDeletion.Show8Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.

Retrieve the details and current status of a specific data deletion request.

API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataDeletion.show8({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type DataDeletionRequestResponse
} catch (err) {
  // TODO: Handle 'err' of type DataDeletion.Show8Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataDeletion
  .show8({
    publicationId: "some example string",
    id: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DataDeletionRequestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>id</code> | <code>string</code> | The ID of the data deletion request |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataDeletion.show8(request)`

- **OnSuccess**: <code>[DataDeletionRequestResponse](src/models/data-deletion-request-response.ts)</code>
- **OnError**: throws <code>[DataDeletion.Show8Error](src/resources/data-deletion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataDeletion.show8(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DataDeletionRequestResponse, DataDeletion.Show8Error&gt;</code>, with `result.value` of type <code>[DataDeletionRequestResponse](src/models/data-deletion-request-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Engagements

> Source: [Engagements](src/resources/engagements.ts)

<details>
<summary><code>index12(request: Engagements.Index12Request, options?: RequestOptions): ApiPromise&lt;PublicationEngagementsResponse, Engagements.Index12Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve email engagement metrics for a specific publication over a defined date range and granularity.

By default, the endpoint returns metrics for the past day, aggregated daily. The max number of days allowed is 31. All dates and times are in UTC.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.engagements.index12({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PublicationEngagementsResponse
} catch (err) {
  // TODO: Handle 'err' of type Engagements.Index12Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.engagements
  .index12({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicationEngagementsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | - |
| <code>startDate?</code> | <code>string</code> (date) | The starting date for the engagement metrics in `YYYY-MM-DD` format. Defaults to 1 day ago if not provided. |
| <code>numberOfDays?</code> | <code>number</code> | The number of days to return engagement metrics for, starting from `start_date`. Must be between 1 and 31. Defaults to `1` if not provided. |
| <code>granularity?</code> | <code>[PublicationEngagementGranularity](src/models/publication-engagement-granularity.ts)</code> | The granularity at which to report the engagement metrics. Defaults to `day` if not provided. |
| <code>emailType?</code> | <code>[PublicationEngagementEmailType](src/models/publication-engagement-email-type.ts)</code> | Filter engagement metrics by email type. If omitted, all email engagement is included.<br> `post`: Only post emails.<br> `message`: Only automated and system-generated emails. |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to `asc`.<br> `asc`: Oldest to newest<br> `desc`: Newest to oldest<br>**Default**: "asc" |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.engagements.index12(request)`

- **OnSuccess**: <code>[PublicationEngagementsResponse](src/models/publication-engagements-response.ts)</code>
- **OnError**: throws <code>[Engagements.Index12Error](src/resources/engagements.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.engagements.index12(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicationEngagementsResponse, Engagements.Index12Error&gt;</code>, with `result.value` of type <code>[PublicationEngagementsResponse](src/models/publication-engagements-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NewsletterListSubscriptions

> Source: [NewsletterListSubscriptions](src/resources/newsletter-list-subscriptions.ts)

<details>
<summary><code>create6(request: NewsletterListSubscriptions.Create6Request, options?: RequestOptions): ApiPromise&lt;NewsletterListSubscriptionResponse, NewsletterListSubscriptions.Create6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe a subscription to a newsletter list. Accepts either a subscription_id or email to identify the subscription.

This endpoint only enrolls **existing** subscriptions. To create a new subscription **and** enroll it in one or more newsletter lists in a single call, use the Create subscription endpoint and pass the `newsletter_list_ids` parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsletterListSubscriptions.create6({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type NewsletterListSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsletterListSubscriptions.Create6Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterListSubscriptions
  .create6({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsletterListSubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>newsletterListId</code> | <code>string</code> | The prefixed ID of the newsletter list object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsNewsletterListsSubscriptionsRequest](src/models/publications-newsletter-lists-subscriptions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterListSubscriptions.create6(request)`

- **OnSuccess**: <code>[NewsletterListSubscriptionResponse](src/models/newsletter-list-subscription-response.ts)</code>
- **OnError**: throws <code>[NewsletterListSubscriptions.Create6Error](src/resources/newsletter-list-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterListSubscriptions.create6(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsletterListSubscriptionResponse, NewsletterListSubscriptions.Create6Error&gt;</code>, with `result.value` of type <code>[NewsletterListSubscriptionResponse](src/models/newsletter-list-subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index13(request: NewsletterListSubscriptions.Index13Request, options?: RequestOptions): ApiPromise&lt;NewsletterListSubscriptionIndexResponse, NewsletterListSubscriptions.Index13Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all subscriptions for a newsletter list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsletterListSubscriptions.index13({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type NewsletterListSubscriptionIndexResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsletterListSubscriptions.Index13Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterListSubscriptions
  .index13({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsletterListSubscriptionIndexResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>newsletterListId</code> | <code>string</code> | The prefixed ID of the newsletter list object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>cursor?</code> | <code>string</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination. |
| <code>page?</code> | <code>number</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to cursor-based pagination using the `cursor` parameter. If not specified, results 1-10 from page 1 will be returned. |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterListSubscriptions.index13(request)`

- **OnSuccess**: <code>[NewsletterListSubscriptionIndexResponse](src/models/newsletter-list-subscription-index-response.ts)</code>
- **OnError**: throws <code>[NewsletterListSubscriptions.Index13Error](src/resources/newsletter-list-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterListSubscriptions.index13(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsletterListSubscriptionIndexResponse, NewsletterListSubscriptions.Index13Error&gt;</code>, with `result.value` of type <code>[NewsletterListSubscriptionIndexResponse](src/models/newsletter-list-subscription-index-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show9(request: NewsletterListSubscriptions.Show9Request, options?: RequestOptions): ApiPromise&lt;NewsletterListSubscriptionResponse, NewsletterListSubscriptions.Show9Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single newsletter list subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsletterListSubscriptions.show9({
    publicationId: "some example string",
    newsletterListId: "some example string",
    newsletterListSubscriptionId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type NewsletterListSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsletterListSubscriptions.Show9Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterListSubscriptions
  .show9({
    publicationId: "some example string",
    newsletterListId: "some example string",
    newsletterListSubscriptionId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsletterListSubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>newsletterListId</code> | <code>string</code> | The prefixed ID of the newsletter list object |
| <code>newsletterListSubscriptionId</code> | <code>string</code> | The prefixed ID of the newsletter list subscription object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterListSubscriptions.show9(request)`

- **OnSuccess**: <code>[NewsletterListSubscriptionResponse](src/models/newsletter-list-subscription-response.ts)</code>
- **OnError**: throws <code>[NewsletterListSubscriptions.Show9Error](src/resources/newsletter-list-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterListSubscriptions.show9(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsletterListSubscriptionResponse, NewsletterListSubscriptions.Show9Error&gt;</code>, with `result.value` of type <code>[NewsletterListSubscriptionResponse](src/models/newsletter-list-subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update(request: NewsletterListSubscriptions.UpdateRequest, options?: RequestOptions): ApiPromise&lt;NewsletterListSubscriptionResponse, NewsletterListSubscriptions.UpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a newsletter list subscription. Currently supports unsubscribing a subscription from a newsletter list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsletterListSubscriptions.update({
    publicationId: "some example string",
    newsletterListId: "some example string",
    newsletterListSubscriptionId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type NewsletterListSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsletterListSubscriptions.UpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterListSubscriptions
  .update({
    publicationId: "some example string",
    newsletterListId: "some example string",
    newsletterListSubscriptionId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsletterListSubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>newsletterListId</code> | <code>string</code> | The prefixed ID of the newsletter list object |
| <code>newsletterListSubscriptionId</code> | <code>string</code> | The prefixed ID of the newsletter list subscription object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsNewsletterListsSubscriptionsNewsletterListSubscriptionIdRequest](src/models/publications-newsletter-lists-subscriptions-newsletter-list-subscription-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterListSubscriptions.update(request)`

- **OnSuccess**: <code>[NewsletterListSubscriptionResponse](src/models/newsletter-list-subscription-response.ts)</code>
- **OnError**: throws <code>[NewsletterListSubscriptions.UpdateError](src/resources/newsletter-list-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterListSubscriptions.update(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsletterListSubscriptionResponse, NewsletterListSubscriptions.UpdateError&gt;</code>, with `result.value` of type <code>[NewsletterListSubscriptionResponse](src/models/newsletter-list-subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBySubscriptionId(request: NewsletterListSubscriptions.UpdateBySubscriptionIdRequest, options?: RequestOptions): ApiPromise&lt;NewsletterListSubscriptionResponse, NewsletterListSubscriptions.UpdateBySubscriptionIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a newsletter list subscription by subscription ID. An alternative to the update endpoint when you don't have the newsletter list subscription ID. Accepts either a subscription_id or email to identify the subscription. Currently supports unsubscribing a subscription from a newsletter list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsletterListSubscriptions.updateBySubscriptionId({
    publicationId: "some example string",
    newsletterListId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type NewsletterListSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsletterListSubscriptions.UpdateBySubscriptionIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterListSubscriptions
  .updateBySubscriptionId({
    publicationId: "some example string",
    newsletterListId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsletterListSubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>newsletterListId</code> | <code>string</code> | The prefixed ID of the newsletter list object |
| <code>subscriptionId</code> | <code>string</code> | The prefixed ID of the subscription |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsNewsletterListsSubscriptionsBySubscriptionIdSubscriptionIdRequest](src/models/publications-newsletter-lists-subscriptions-by-subscription-id-subscription-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterListSubscriptions.updateBySubscriptionId(request)`

- **OnSuccess**: <code>[NewsletterListSubscriptionResponse](src/models/newsletter-list-subscription-response.ts)</code>
- **OnError**: throws <code>[NewsletterListSubscriptions.UpdateBySubscriptionIdError](src/resources/newsletter-list-subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterListSubscriptions.updateBySubscriptionId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsletterListSubscriptionResponse, NewsletterListSubscriptions.UpdateBySubscriptionIdError&gt;</code>, with `result.value` of type <code>[NewsletterListSubscriptionResponse](src/models/newsletter-list-subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## NewsletterLists

> Source: [NewsletterLists](src/resources/newsletter-lists.ts)

<details>
<summary><code>create7(request: NewsletterLists.Create7Request, options?: RequestOptions): ApiPromise&lt;NewsletterListResponse, NewsletterLists.Create7Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new newsletter list for a publication. The list will be created with an active status. The slug will be auto-generated from the name if not provided.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsletterLists.create7({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type NewsletterListResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsletterLists.Create7Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterLists
  .create7({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsletterListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsNewsletterListsRequest](src/models/publications-newsletter-lists-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterLists.create7(request)`

- **OnSuccess**: <code>[NewsletterListResponse](src/models/newsletter-list-response.ts)</code>
- **OnError**: throws <code>[NewsletterLists.Create7Error](src/resources/newsletter-lists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterLists.create7(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsletterListResponse, NewsletterLists.Create7Error&gt;</code>, with `result.value` of type <code>[NewsletterListResponse](src/models/newsletter-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete2(request: NewsletterLists.Delete2Request, options?: RequestOptions): ApiPromise&lt;undefined, NewsletterLists.Delete2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a newsletter list belonging to a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.newsletterLists.delete2({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type NewsletterLists.Delete2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterLists
  .delete2({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
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
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>newsletterListId</code> | <code>string</code> | The prefixed ID of the newsletter list object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterLists.delete2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[NewsletterLists.Delete2Error](src/resources/newsletter-lists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterLists.delete2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, NewsletterLists.Delete2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index14(request: NewsletterLists.Index14Request, options?: RequestOptions): ApiPromise&lt;NewsletterListIndexResponse, NewsletterLists.Index14Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all newsletter lists for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsletterLists.index14({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type NewsletterListIndexResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsletterLists.Index14Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterLists
  .index14({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsletterListIndexResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterLists.index14(request)`

- **OnSuccess**: <code>[NewsletterListIndexResponse](src/models/newsletter-list-index-response.ts)</code>
- **OnError**: throws <code>[NewsletterLists.Index14Error](src/resources/newsletter-lists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterLists.index14(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsletterListIndexResponse, NewsletterLists.Index14Error&gt;</code>, with `result.value` of type <code>[NewsletterListIndexResponse](src/models/newsletter-list-index-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show10(request: NewsletterLists.Show10Request, options?: RequestOptions): ApiPromise&lt;NewsletterListResponse, NewsletterLists.Show10Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single newsletter list belonging to a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsletterLists.show10({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type NewsletterListResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsletterLists.Show10Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterLists
  .show10({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsletterListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>newsletterListId</code> | <code>string</code> | The prefixed ID of the newsletter list object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterLists.show10(request)`

- **OnSuccess**: <code>[NewsletterListResponse](src/models/newsletter-list-response.ts)</code>
- **OnError**: throws <code>[NewsletterLists.Show10Error](src/resources/newsletter-lists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterLists.show10(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsletterListResponse, NewsletterLists.Show10Error&gt;</code>, with `result.value` of type <code>[NewsletterListResponse](src/models/newsletter-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update2(request: NewsletterLists.Update2Request, options?: RequestOptions): ApiPromise&lt;NewsletterListResponse, NewsletterLists.Update2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a newsletter list belonging to a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.newsletterLists.update2({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type NewsletterListResponse
} catch (err) {
  // TODO: Handle 'err' of type NewsletterLists.Update2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.newsletterLists
  .update2({
    publicationId: "some example string",
    newsletterListId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsletterListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>newsletterListId</code> | <code>string</code> | The prefixed ID of the newsletter list object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsNewsletterListsRequest1](src/models/publications-newsletter-lists-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.newsletterLists.update2(request)`

- **OnSuccess**: <code>[NewsletterListResponse](src/models/newsletter-list-response.ts)</code>
- **OnError**: throws <code>[NewsletterLists.Update2Error](src/resources/newsletter-lists.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.newsletterLists.update2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsletterListResponse, NewsletterLists.Update2Error&gt;</code>, with `result.value` of type <code>[NewsletterListResponse](src/models/newsletter-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OauthUsers

> Source: [OauthUsers](src/resources/oauth-users.ts)

<details>
<summary><code>identify(request: OauthUsers.IdentifyRequest, options?: RequestOptions): ApiPromise&lt;UserIdentifyResponse, OauthUsers.IdentifyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about the user who authorized the OAuth access token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauthUsers.identify({ authorization: "some example string" });
  // TODO: Handle 'response' of type UserIdentifyResponse
} catch (err) {
  // TODO: Handle 'err' of type OauthUsers.IdentifyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oauthUsers.identify({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserIdentifyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oauthUsers.identify(request)`

- **OnSuccess**: <code>[UserIdentifyResponse](src/models/user-identify-response.ts)</code>
- **OnError**: throws <code>[OauthUsers.IdentifyError](src/resources/oauth-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oauthUsers.identify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserIdentifyResponse, OauthUsers.IdentifyError&gt;</code>, with `result.value` of type <code>[UserIdentifyResponse](src/models/user-identify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Podcasts

> Source: [Podcasts](src/resources/podcasts.ts)

<details>
<summary><code>getEpisode(request: Podcasts.GetEpisodeRequest, options?: RequestOptions): ApiPromise&lt;PodcastEpisodeGetResponse, Podcasts.GetEpisodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single episode belonging to a specific podcast.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.podcasts.getEpisode({
    publicationId: "some example string",
    podcastShowId: "some example string",
    podcastEpisodeId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PodcastEpisodeGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Podcasts.GetEpisodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.podcasts
  .getEpisode({
    publicationId: "some example string",
    podcastShowId: "some example string",
    podcastEpisodeId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PodcastEpisodeGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>podcastShowId</code> | <code>string</code> | The prefixed ID of the podcast |
| <code>podcastEpisodeId</code> | <code>string</code> | The prefixed ID of the episode |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.podcasts.getEpisode(request)`

- **OnSuccess**: <code>[PodcastEpisodeGetResponse](src/models/podcast-episode-get-response.ts)</code>
- **OnError**: throws <code>[Podcasts.GetEpisodeError](src/resources/podcasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.podcasts.getEpisode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PodcastEpisodeGetResponse, Podcasts.GetEpisodeError&gt;</code>, with `result.value` of type <code>[PodcastEpisodeGetResponse](src/models/podcast-episode-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPodcast(request: Podcasts.GetPodcastRequest, options?: RequestOptions): ApiPromise&lt;PodcastShowGetResponse, Podcasts.GetPodcastError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single podcast belonging to a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.podcasts.getPodcast({
    publicationId: "some example string",
    podcastShowId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PodcastShowGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Podcasts.GetPodcastError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.podcasts
  .getPodcast({
    publicationId: "some example string",
    podcastShowId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PodcastShowGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>podcastShowId</code> | <code>string</code> | The prefixed ID of the podcast |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.podcasts.getPodcast(request)`

- **OnSuccess**: <code>[PodcastShowGetResponse](src/models/podcast-show-get-response.ts)</code>
- **OnError**: throws <code>[Podcasts.GetPodcastError](src/resources/podcasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.podcasts.getPodcast(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PodcastShowGetResponse, Podcasts.GetPodcastError&gt;</code>, with `result.value` of type <code>[PodcastShowGetResponse](src/models/podcast-show-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpisodes(request: Podcasts.ListEpisodesRequest, options?: RequestOptions): ApiPromise&lt;PodcastEpisodesListResponse, Podcasts.ListEpisodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all episodes belonging to a specific podcast.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.podcasts.listEpisodes({
    publicationId: "some example string",
    podcastShowId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PodcastEpisodesListResponse
} catch (err) {
  // TODO: Handle 'err' of type Podcasts.ListEpisodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.podcasts
  .listEpisodes({
    publicationId: "some example string",
    podcastShowId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PodcastEpisodesListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>podcastShowId</code> | <code>string</code> | The prefixed ID of the podcast |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>cursor?</code> | <code>string</code> | Use this opaque cursor token to fetch the next page of results. Obtain the value from `next_cursor` in a previous response. |
| <code>status?</code> | <code>[PodcastEpisodeStatus](src/models/podcast-episode-status.ts)</code> | Optionally filter the results by the status of the episode.<br>`draft` - Not yet published.<br>`scheduled` - Scheduled for future publication.<br>`published` - Available via web and RSS.<br>`archived` - No longer available via web or RSS. |
| <code>orderBy?</code> | <code>[PodcastEpisodeOrderBy](src/models/podcast-episode-order-by.ts)</code> | The field that the results are sorted by. Defaults to `displayed_date`<br>`created` - The time in which the episode was first created.<br>`updated` - The time the episode was last updated.<br>`publish_date` - The exact time the system published the episode (when it went live), not the scheduled time the user set.<br>`displayed_date` - The time displayed in place of the `publish_date`. Uses a custom display date if set, otherwise the scheduled time the user set for publication, otherwise the `publish_date`, otherwise the creation date. For imported episodes, the original feed's `pubDate` is stored as the custom display date. This is the same field used to order episodes in the podcast's RSS feed.<br>**Default**: "displayed_date" |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to desc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.podcasts.listEpisodes(request)`

- **OnSuccess**: <code>[PodcastEpisodesListResponse](src/models/podcast-episodes-list-response.ts)</code>
- **OnError**: throws <code>[Podcasts.ListEpisodesError](src/resources/podcasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.podcasts.listEpisodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PodcastEpisodesListResponse, Podcasts.ListEpisodesError&gt;</code>, with `result.value` of type <code>[PodcastEpisodesListResponse](src/models/podcast-episodes-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPodcasts(request: Podcasts.ListPodcastsRequest, options?: RequestOptions): ApiPromise&lt;PodcastShowsListResponse, Podcasts.ListPodcastsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all podcasts belonging to a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.podcasts.listPodcasts({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PodcastShowsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Podcasts.ListPodcastsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.podcasts
  .listPodcasts({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PodcastShowsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>cursor?</code> | <code>string</code> | Use this opaque cursor token to fetch the next page of results. Obtain the value from `next_cursor` in a previous response. |
| <code>status?</code> | <code>[PodcastShowStatus](src/models/podcast-show-status.ts)</code> | Optionally filter the results by the status of the podcast.<br>`draft` - No episodes have been published.<br>`live` - Published and active.<br>`archived` - The podcast is no longer active. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.podcasts.listPodcasts(request)`

- **OnSuccess**: <code>[PodcastShowsListResponse](src/models/podcast-shows-list-response.ts)</code>
- **OnError**: throws <code>[Podcasts.ListPodcastsError](src/resources/podcasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.podcasts.listPodcasts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PodcastShowsListResponse, Podcasts.ListPodcastsError&gt;</code>, with `result.value` of type <code>[PodcastShowsListResponse](src/models/podcast-shows-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Polls

> Source: [Polls](src/resources/polls.ts)

<details>
<summary><code>index15(request: Polls.Index15Request, options?: RequestOptions): ApiPromise&lt;PollsListResponse, Polls.Index15Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all polls belonging to a specific publication. Poll choices are always included. Use `expand[]=stats` to include aggregate vote counts per choice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.polls.index15({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PollsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Polls.Index15Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.polls
  .index15({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PollsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>cursor?</code> | <code>string</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination. |
| <code>page?</code> | <code>number</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to cursor-based pagination using the `cursor` parameter. If not specified, results 1-10 from page 1 will be returned. |
| <code>orderBy?</code> | <code>[PollOrderBy](src/models/poll-order-by.ts)</code> | The field that the results are sorted by. Defaults to created.<br> `created` - The time the poll was created.<br> `name` - The name of the poll.<br>**Default**: "created" |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to asc.<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>expand?</code> | <code>[PollsExpandItems](src/models/polls-expand-items.ts)[]</code> | Optionally expand the response to include additional data.<br> `stats` - Returns aggregate vote counts per choice and total completions.<br> `poll_responses` - Returns up to 10 most recent subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br> `trivia_answer` - Returns the correct answer for trivia-type polls. |
| <code>postId?</code> | <code>string</code> | Filter to only return polls that were embedded in the specified post. Accepts a prefixed post ID (e.g. `post_abc123`). |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.polls.index15(request)`

- **OnSuccess**: <code>[PollsListResponse](src/models/polls-list-response.ts)</code>
- **OnError**: throws <code>[Polls.Index15Error](src/resources/polls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.polls.index15(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PollsListResponse, Polls.Index15Error&gt;</code>, with `result.value` of type <code>[PollsListResponse](src/models/polls-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listResponses(request: Polls.ListResponsesRequest, options?: RequestOptions): ApiPromise&lt;PollResponsesListResponse, Polls.ListResponsesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all individual subscriber responses for a specific poll with cursor-based pagination. Use this endpoint for large datasets instead of the `expand[]=poll_responses` parameter on the poll show endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.polls.listResponses({
    publicationId: "some example string",
    pollId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PollResponsesListResponse
} catch (err) {
  // TODO: Handle 'err' of type Polls.ListResponsesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.polls
  .listResponses({
    publicationId: "some example string",
    pollId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PollResponsesListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>pollId</code> | <code>string</code> | The prefixed ID of the poll object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>cursor?</code> | <code>string</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. |
| <code>page?</code> | <code>number</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination. |
| <code>orderBy?</code> | <code>[PollResponsesOrderBy](src/models/poll-responses-order-by.ts)</code> | The field that the results are sorted by. Defaults to created.<br>**Default**: "created" |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to asc.<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>expand?</code> | <code>[PollResponsesExpandItems](src/models/poll-responses-expand-items.ts)[]</code> | Optionally expand the response to include additional data.<br> `post` - Returns the post title and publication date for the post where each response was collected. |
| <code>postId?</code> | <code>string</code> | Filter to only return responses collected via the specified post. Accepts a prefixed post ID (e.g. `post_abc123`). |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.polls.listResponses(request)`

- **OnSuccess**: <code>[PollResponsesListResponse](src/models/poll-responses-list-response.ts)</code>
- **OnError**: throws <code>[Polls.ListResponsesError](src/resources/polls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.polls.listResponses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PollResponsesListResponse, Polls.ListResponsesError&gt;</code>, with `result.value` of type <code>[PollResponsesListResponse](src/models/poll-responses-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show11(request: Polls.Show11Request, options?: RequestOptions): ApiPromise&lt;PollShowResponse, Polls.Show11Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information about a specific poll belonging to a publication. Use `expand[]=stats` for aggregate vote counts, or `expand[]=poll_responses` for individual subscriber responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.polls.show11({
    publicationId: "some example string",
    pollId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PollShowResponse
} catch (err) {
  // TODO: Handle 'err' of type Polls.Show11Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.polls
  .show11({
    publicationId: "some example string",
    pollId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PollShowResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>pollId</code> | <code>string</code> | The prefixed ID of the poll object |
| <code>expand?</code> | <code>[PollsExpandItems](src/models/polls-expand-items.ts)[]</code> | Optionally expand the response to include additional data.<br> `stats` - Returns aggregate vote counts per choice and total completions.<br> `poll_responses` - Returns up to 10 most recent subscriber responses. Use /polls/{pollId}/responses for paginated access to all responses.<br> `trivia_answer` - Returns the correct answer for trivia-type polls. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.polls.show11(request)`

- **OnSuccess**: <code>[PollShowResponse](src/models/poll-show-response.ts)</code>
- **OnError**: throws <code>[Polls.Show11Error](src/resources/polls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.polls.show11(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PollShowResponse, Polls.Show11Error&gt;</code>, with `result.value` of type <code>[PollShowResponse](src/models/poll-show-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PostTemplates

> Source: [PostTemplates](src/resources/post-templates.ts)

<details>
<summary><code>index16(request: PostTemplates.Index16Request, options?: RequestOptions): ApiPromise&lt;PostTemplatesGetResponse, PostTemplates.Index16Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of post templates available for the publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.postTemplates.index16({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PostTemplatesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type PostTemplates.Index16Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.postTemplates
  .index16({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostTemplatesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>order?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction of the request. Defaults to `asc`.<br>**Default**: "asc" |
| <code>orderBy?</code> | <code>string</code> | The field to order by. Defaults to `created`. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.postTemplates.index16(request)`

- **OnSuccess**: <code>[PostTemplatesGetResponse](src/models/post-templates-get-response.ts)</code>
- **OnError**: throws <code>[PostTemplates.Index16Error](src/resources/post-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.postTemplates.index16(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostTemplatesGetResponse, PostTemplates.Index16Error&gt;</code>, with `result.value` of type <code>[PostTemplatesGetResponse](src/models/post-templates-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Posts

> Source: [Posts](src/resources/posts.ts)

<details>
<summary><code>aggregateStats(request: Posts.AggregateStatsRequest, options?: RequestOptions): ApiPromise&lt;PostsAggregateStatsResponse, Posts.AggregateStatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve aggregate stats for all posts

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.aggregateStats({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PostsAggregateStatsResponse
} catch (err) {
  // TODO: Handle 'err' of type Posts.AggregateStatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts
  .aggregateStats({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsAggregateStatsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>audience?</code> | <code>[PostAudienceFilter](src/models/post-audience-filter.ts)</code> | Optionally filter the results by audience<br>**Default**: "all" |
| <code>platform?</code> | <code>[PostPlatformFilter](src/models/post-platform-filter.ts)</code> | Optionally filter the results by platform.<br>`web` - Posts only published to web.<br>`email` - Posts only published to email.<br>`both` - Posts published to email and web.<br>`all` - Does not restrict results by platform.<br>**Default**: "all" |
| <code>status?</code> | <code>[PostStatusFilter](src/models/post-status-filter.ts)</code> | Optionally filter the results by the status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be active after the `scheduled_at`.<br>`archived` - The post is no longer active.<br>`all` - Does not restrict results by status.<br>**Default**: "all" |
| <code>contentTags?</code> | <code>string[]</code> | Optionally filter posts by content_tags. Adding a content tag will return any post with that content tag associated to it.<br>Example: Filtering for `content_tags: ["sales","closing"]` will return results of posts that have *either* sales or closing content_tags. |
| <code>authors?</code> | <code>string[]</code> | Optionally filter posts by their authors. Adding an author name will return any post with that author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for `authors: ["John Doe","Jane Smith"]` will return results of posts that have *either* John Doe or Jane Smith as authors. |
| <code>hiddenFromFeed?</code> | <code>[PostsListRequestHiddenFromFeed](src/models/posts-list-request-hidden-from-feed.ts)</code> | Optionally filter the results by the `hidden_from_feed` attribute of the post.<br>`all` - Does not restrict results by `hidden_from_feed`.<br>`true` - Only return posts hidden from the feed.<br>`false` - Only return posts that are visible on the feed.<br>**Default**: "all" |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.aggregateStats(request)`

- **OnSuccess**: <code>[PostsAggregateStatsResponse](src/models/posts-aggregate-stats-response.ts)</code>
- **OnError**: throws <code>[Posts.AggregateStatsError](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.aggregateStats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsAggregateStatsResponse, Posts.AggregateStatsError&gt;</code>, with `result.value` of type <code>[PostsAggregateStatsResponse](src/models/posts-aggregate-stats-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>create8(request: Posts.Create8Request, options?: RequestOptions): ApiPromise&lt;PostsCreateResponse, Posts.Create8Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is available to publications on the Max and Enterprise plans.

Create a post for a specific publication. For a detailed walkthrough including setup, testing workflows, and working with custom HTML and templates, see the Using the Send API and Create Post Endpoint guide.

## Asynchronous creation

Post creation is processed in the background. This endpoint returns `201` immediately with the post's `id`, but the post is not finished being created at that moment. The returned `id` is stable — it is the same id the post will have once creation completes.

If you fetch the post (`GET /publications/{publicationId}/posts/{postId}`) right away, it may not exist yet. In that case the fetch returns `202` (still being created) — wait briefly and retry, honoring the `Retry-After` header. If background creation fails, the fetch returns `404` with the error code `POST_CREATION_FAILED`, so you should stop retrying, verify your request, and try creating the post again.

## Content methods

There are three ways to provide content for a post. You must provide either `blocks` or `body_content`, but not both.

### 1. Blocks

Use the `blocks` field to build your post with structured content blocks such as paragraphs, images, headings, buttons, tables, and more. Each block has a `type` and its own set of properties. This method gives you fine-grained control over individual content elements and supports features like visual settings, visibility settings, and dynamic content targeting.

### 2. Raw HTML (`body_content`)

Use the `body_content` field to provide a single string of raw HTML. The HTML is wrapped in an `htmlSnippet` block internally. This is useful when you have pre-built HTML content or are migrating from another platform.

### 3. HTML blocks within blocks

Use `type: html` blocks inside the `blocks` array to embed raw HTML snippets alongside other structured blocks. This lets you mix structured content (paragraphs, images, etc.) with custom HTML where needed.

## CSS and styling guardrails

beehiiv processes all HTML content through a sanitization pipeline. When using `body_content` or `html` blocks, be aware of the following:

- **`` tags are removed.** All `` block elements are stripped during sanitization. Do not rely on embedded stylesheets.
- **`` tags are removed.** External stylesheet references are not allowed.
- **Inline styles are preserved.** Styles applied directly to elements via the `style` attribute (e.g., `
`) are kept intact.
- **CSS classes have no effect.** While class attributes are not stripped, no corresponding stylesheets are loaded to apply them.
- **beehiiv's email template wraps your content.** Your HTML is rendered inside beehiiv's email table structure, which applies its own layout and spacing. This may affect the appearance of your content.
- **Use inline styles for all visual styling.** Since `` and `` tags are removed, inline styles on individual elements are the only reliable way to control appearance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.create8({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PostsCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Posts.Create8Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts
  .create8({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsPostsRequest](src/models/publications-posts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.create8(request)`

- **OnSuccess**: <code>[PostsCreateResponse](src/models/posts-create-response.ts)</code>
- **OnError**: throws <code>[Posts.Create8Error](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.create8(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsCreateResponse, Posts.Create8Error&gt;</code>, with `result.value` of type <code>[PostsCreateResponse](src/models/posts-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete3(request: Posts.Delete3Request, options?: RequestOptions): ApiPromise&lt;PostProcessing, Posts.Delete3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete or Archive a post. Any post that has been confirmed will have it's status changed to `archived`. Posts in the `draft` status will be permanently deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.delete3({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PostProcessing
} catch (err) {
  // TODO: Handle 'err' of type Posts.Delete3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts
  .delete3({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostProcessing
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>postId</code> | <code>string</code> | The prefixed ID of the post object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.delete3(request)`

- **OnSuccess**: <code>[PostProcessing](src/models/post-processing.ts)</code>
- **OnError**: throws <code>[Posts.Delete3Error](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.delete3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostProcessing, Posts.Delete3Error&gt;</code>, with `result.value` of type <code>[PostProcessing](src/models/post-processing.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index17(request: Posts.Index17Request, options?: RequestOptions): ApiPromise&lt;PostsListResponse, Posts.Index17Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all posts belonging to a specific publication

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.index17({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PostsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Posts.Index17Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts
  .index17({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>expand?</code> | <code>[PostExpandField](src/models/post-expand-field.ts)[]</code> | Optionally expand the results by adding additional information. <br>`stats` - Adds statistics about the post(s). <br>`free_web_content` - Adds the web HTML rendered to a free reader. <br>`free_email_content` - Adds the email HTML rendered to a free reader. <br>`free_rss_content` - Adds the RSS feed HTML. <br>`premium_web_content` - Adds the web HTML rendered to a premium reader. <br>`premium_email_content` - Adds the email HTML rendered to a premium reader. |
| <code>audience?</code> | <code>[PostAudienceFilter](src/models/post-audience-filter.ts)</code> | Optionally filter the results by audience<br>**Default**: "all" |
| <code>platform?</code> | <code>[PostPlatformFilter](src/models/post-platform-filter.ts)</code> | Optionally filter the results by platform.<br>`web` - Posts only published to web.<br>`email` - Posts only published to email.<br>`both` - Posts published to email and web.<br>`all` - Does not restrict results by platform.<br>**Default**: "all" |
| <code>status?</code> | <code>[PostStatusFilter](src/models/post-status-filter.ts)</code> | Optionally filter the results by the status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be active after the `scheduled_at`.<br>`archived` - The post is no longer active.<br>`all` - Does not restrict results by status.<br>**Default**: "all" |
| <code>contentTags?</code> | <code>string[]</code> | Optionally filter posts by content_tags. Adding a content tag will return any post with that content tag associated to it.<br><br><b>Example</b>: Filtering for `content_tags: ["sales","closing"]` will return results of posts that have *either* `sales` or `closing` content_tags. |
| <code>slugs?</code> | <code>string[]</code> | Optionally filter posts by their slugs. Adding a slug will return any post with that exact slug associated to it.<br><br><b>Example:</b> Filtering for `slugs: ["my-first-post","another-post"]` will return results of posts that have *either* `my-first-post` or `another-post` as their slug. |
| <code>authors?</code> | <code>string[]</code> | Optionally filter posts by their authors. Adding an author name will return any post with that author associated to it (case-insensitive).<br><br><b>Example:</b> Filtering for `authors: ["John Doe","Jane Smith"]` will return results of posts that have *either* John Doe or Jane Smith as authors. |
| <code>premiumTiers?</code> | <code>string[]</code> | Optionally filter posts by audience based on premium tiers.<br> This takes in an array of Display Names of the premium tiers.<br> It will also scope any expanded content output to the specified premium tiers.<br> Note: This is case insensitive. |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>orderBy?</code> | <code>[PostOrderBy](src/models/post-order-by.ts)</code> | The field that the results are sorted by. Defaults to created<br> `created` - The time in which the post was first created.<br> `publish_date` - The time the post was set to be published.<br> `displayed_date` - The time displayed in place of the `publish_date`. If no `displayed_date` was set, it will default to the `publish_date`<br>**Default**: "created" |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>hiddenFromFeed?</code> | <code>[PostsListRequestHiddenFromFeed](src/models/posts-list-request-hidden-from-feed.ts)</code> | Optionally filter the results by the `hidden_from_feed` attribute of the post.<br>`all` - Does not restrict results by `hidden_from_feed`.<br>`true` - Only return posts hidden from the feed.<br>`false` - Only return posts that are visible on the feed.<br>**Default**: "all" |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.index17(request)`

- **OnSuccess**: <code>[PostsListResponse](src/models/posts-list-response.ts)</code>
- **OnError**: throws <code>[Posts.Index17Error](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.index17(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsListResponse, Posts.Index17Error&gt;</code>, with `result.value` of type <code>[PostsListResponse](src/models/posts-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>preview(request: Posts.PreviewRequest, options?: RequestOptions): ApiPromise&lt;PostsPreviewResponse, Posts.PreviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a URL to preview a post as a given audience. The returned `preview_url` renders the post in the beehiiv app and requires a beehiiv session with access to the publication - it is not itself an HTML-returning endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.preview({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PostsPreviewResponse
} catch (err) {
  // TODO: Handle 'err' of type Posts.PreviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts
  .preview({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsPreviewResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>postId</code> | <code>string</code> | The prefixed ID of the post object |
| <code>platform?</code> | <code>string</code> | `email` (default) or `web`. |
| <code>subscriberType?</code> | <code>string</code> | `free` (default) or `premium`. `premium` requires `tier_ids` to be present. Ignored if `subscriber_id` is present. |
| <code>tierIds?</code> | <code>string[]</code> | One or more premium tier IDs to preview as. Only used when `subscriber_type` is `premium`. Ignored if `subscriber_id` is present. |
| <code>subscriberId?</code> | <code>string</code> | Preview using a specific subscriber's real tier memberships. Takes precedence over `subscriber_type`/`tier_ids` when present. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.preview(request)`

- **OnSuccess**: <code>[PostsPreviewResponse](src/models/posts-preview-response.ts)</code>
- **OnError**: throws <code>[Posts.PreviewError](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.preview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsPreviewResponse, Posts.PreviewError&gt;</code>, with `result.value` of type <code>[PostsPreviewResponse](src/models/posts-preview-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show12(request: Posts.Show12Request, options?: RequestOptions): ApiPromise&lt;PostsGetResponse, Posts.Show12Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Post belonging to a specific publication.

Posts created via the Send API are built asynchronously, so a recently created post may not exist yet. When the post is still being created, this endpoint returns `202` (still being created) with a `Retry-After` header — wait briefly and retry. If background creation failed, it returns `404` with the error code `POST_CREATION_FAILED`, indicating the post will never become available; verify your request and try creating it again.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.show12({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PostsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Posts.Show12Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts
  .show12({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>postId</code> | <code>string</code> | The prefixed ID of the post object |
| <code>expand?</code> | <code>[PostExpandField](src/models/post-expand-field.ts)[]</code> | Optionally expand the results by adding additional information. <br>`stats` - Adds statistics about the post(s). <br>`free_web_content` - Adds the web HTML rendered to a free reader. <br>`free_email_content` - Adds the email HTML rendered to a free reader. <br>`free_rss_content` - Adds the RSS feed HTML. <br>`premium_web_content` - Adds the web HTML rendered to a premium reader. <br>`premium_email_content` - Adds the email HTML rendered to a premium reader. |
| <code>premiumTiers?</code> | <code>string[]</code> | Scope any expanded content output to the specified premium tiers.<br> This takes in an array of Display Names of the premium tiers.<br> Note: This is case insensitive. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.show12(request)`

- **OnSuccess**: <code>[PostsGetResponse](src/models/posts-get-response.ts)</code>
- **OnError**: throws <code>[Posts.Show12Error](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.show12(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsGetResponse, Posts.Show12Error&gt;</code>, with `result.value` of type <code>[PostsGetResponse](src/models/posts-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testSend(request: Posts.TestSendRequest, options?: RequestOptions): ApiPromise&lt;PostsTestSendResponse, Posts.TestSendError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a test email for a specific post to one or more email addresses. Returns the number of remaining test sends for the day and the time at which the limit resets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.testSend({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PostsTestSendResponse
} catch (err) {
  // TODO: Handle 'err' of type Posts.TestSendError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts
  .testSend({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsTestSendResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>postId</code> | <code>string</code> | The prefixed ID of the post object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsPostsTestSendsRequest](src/models/publications-posts-test-sends-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.testSend(request)`

- **OnSuccess**: <code>[PostsTestSendResponse](src/models/posts-test-send-response.ts)</code>
- **OnError**: throws <code>[Posts.TestSendError](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.testSend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsTestSendResponse, Posts.TestSendError&gt;</code>, with `result.value` of type <code>[PostsTestSendResponse](src/models/posts-test-send-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update3(request: Posts.Update3Request, options?: RequestOptions): ApiPromise&lt;PostsGetResponse, Posts.Update3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is available to publications on the Max and Enterprise plans.

Update an existing post for a specific publication. Only the fields provided in the request body will be updated — all other fields remain unchanged. For a detailed walkthrough of content methods and working with custom HTML, see the Using the Send API and Create Post Endpoint guide.

To update post content, provide either `blocks` or `body_content` (not both). If neither is provided, the existing content is preserved. The same content methods and CSS guardrails described in the create endpoint apply here.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.update3({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PostsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Posts.Update3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts
  .update3({
    publicationId: "some example string",
    postId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>postId</code> | <code>string</code> | The prefixed ID of the post to update |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsPostsRequest1](src/models/publications-posts-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.update3(request)`

- **OnSuccess**: <code>[PostsGetResponse](src/models/posts-get-response.ts)</code>
- **OnError**: throws <code>[Posts.Update3Error](src/resources/posts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.posts.update3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsGetResponse, Posts.Update3Error&gt;</code>, with `result.value` of type <code>[PostsGetResponse](src/models/posts-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Publications

> Source: [Publications](src/resources/publications.ts)

<details>
<summary><code>index18(request: Publications.Index18Request, options?: RequestOptions): ApiPromise&lt;PublicationsListResponse, Publications.Index18Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all publications associated with your API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publications.index18({ authorization: "some example string" });
  // TODO: Handle 'response' of type PublicationsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Publications.Index18Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publications.index18({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicationsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>expand?</code> | <code>[PublicationsRequestExpandItem](src/models/publications-request-expand-item.ts)[]</code> | Optionally expand the results by adding additional information like subscription counts and engagement stats. |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>orderBy?</code> | <code>[PublicationsListRequestOrderBy](src/models/publications-list-request-order-by.ts)</code> | The field that the results are sorted by. Defaults to created<br> `created` - The time in which the publication was first created.<br> `name` - The name of the publication.<br>**Default**: "created" |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publications.index18(request)`

- **OnSuccess**: <code>[PublicationsListResponse](src/models/publications-list-response.ts)</code>
- **OnError**: throws <code>[Publications.Index18Error](src/resources/publications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.publications.index18(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicationsListResponse, Publications.Index18Error&gt;</code>, with `result.value` of type <code>[PublicationsListResponse](src/models/publications-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show13(request: Publications.Show13Request, options?: RequestOptions): ApiPromise&lt;PublicationsGetResponse, Publications.Show13Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single publication

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publications.show13({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PublicationsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Publications.Show13Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publications
  .show13({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicationsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>expand?</code> | <code>[PublicationsGetRequestExpandItem](src/models/publications-get-request-expand-item.ts)[]</code> | Optionally expand the results by adding additional information like subscription counts and engagement stats. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publications.show13(request)`

- **OnSuccess**: <code>[PublicationsGetResponse](src/models/publications-get-response.ts)</code>
- **OnError**: throws <code>[Publications.Show13Error](src/resources/publications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.publications.show13(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicationsGetResponse, Publications.Show13Error&gt;</code>, with `result.value` of type <code>[PublicationsGetResponse](src/models/publications-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ReferralProgram

> Source: [ReferralProgram](src/resources/referral-program.ts)

<details>
<summary><code>show14(request: ReferralProgram.Show14Request, options?: RequestOptions): ApiPromise&lt;ReferralProgramGetResponse, ReferralProgram.Show14Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details about the publication's referral program, including milestones and rewards.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referralProgram.show14({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type ReferralProgramGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferralProgram.Show14Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referralProgram
  .show14({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReferralProgramGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referralProgram.show14(request)`

- **OnSuccess**: <code>[ReferralProgramGetResponse](src/models/referral-program-get-response.ts)</code>
- **OnError**: throws <code>[ReferralProgram.Show14Error](src/resources/referral-program.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referralProgram.show14(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReferralProgramGetResponse, ReferralProgram.Show14Error&gt;</code>, with `result.value` of type <code>[ReferralProgramGetResponse](src/models/referral-program-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Segments

> Source: [Segments](src/resources/segments.ts)

<details>
<summary><code>create9(request: Segments.Create9Request, options?: RequestOptions): ApiPromise&lt;SegmentShowResponse, Segments.Create9Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new segment.

**Manual segments** — Use `subscriptions` or `emails` input to create a segment from an explicit list of subscription IDs or email addresses. The segment is processed synchronously and returns with `status: completed`. Net new email addresses will be ignored; create subscriptions using the `Create Subscription` endpoint.

**Dynamic segments** — Use `custom_fields` input to create a segment that filters subscribers by custom field values. The segment is processed asynchronously and returns with `status: pending`. Results will be available in the `List Segment Subscribers` endpoint after processing is complete.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.segments.create9({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SegmentShowResponse
} catch (err) {
  // TODO: Handle 'err' of type Segments.Create9Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.segments
  .create9({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SegmentShowResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsSegmentsRequest](src/models/publications-segments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.segments.create9(request)`

- **OnSuccess**: <code>[SegmentShowResponse](src/models/segment-show-response.ts)</code>
- **OnError**: throws <code>[Segments.Create9Error](src/resources/segments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.segments.create9(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SegmentShowResponse, Segments.Create9Error&gt;</code>, with `result.value` of type <code>[SegmentShowResponse](src/models/segment-show-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete4(request: Segments.Delete4Request, options?: RequestOptions): ApiPromise&lt;SegmentDeleteResponse, Segments.Delete4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a segment. Deleting the segment does not effect the subscriptions in the segment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.segments.delete4({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SegmentDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type Segments.Delete4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.segments
  .delete4({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SegmentDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>segmentId</code> | <code>string</code> | The prefixed ID of the segment object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.segments.delete4(request)`

- **OnSuccess**: <code>[SegmentDeleteResponse](src/models/segment-delete-response.ts)</code>
- **OnError**: throws <code>[Segments.Delete4Error](src/resources/segments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.segments.delete4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SegmentDeleteResponse, Segments.Delete4Error&gt;</code>, with `result.value` of type <code>[SegmentDeleteResponse](src/models/segment-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>expandResults(request: Segments.ExpandResultsRequest, options?: RequestOptions): ApiPromise&lt;SegmentsGetResponse, Segments.ExpandResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List subscriber IDs for a segment. Returns a lightweight array of subscription IDs only, without additional subscriber details.
**Use this endpoint when you only need subscriber IDs** (e.g., for counting, ID-based lookups, or integrations with external systems). If you need full subscriber details (email, status, custom fields, etc.), use `/segments/{segmentId}/members` instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.segments.expandResults({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SegmentsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type Segments.ExpandResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.segments
  .expandResults({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SegmentsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>segmentId</code> | <code>string</code> | The prefixed ID of the segment object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.segments.expandResults(request)`

- **OnSuccess**: <code>[SegmentsGetResponse](src/models/segments-get-response.ts)</code>
- **OnError**: throws <code>[Segments.ExpandResultsError](src/resources/segments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.segments.expandResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SegmentsGetResponse, Segments.ExpandResultsError&gt;</code>, with `result.value` of type <code>[SegmentsGetResponse](src/models/segments-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index19(request: Segments.Index19Request, options?: RequestOptions): ApiPromise&lt;SegmentsListResponse, Segments.Index19Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about all segments belonging to a specific publication

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.segments.index19({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SegmentsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Segments.Index19Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.segments
  .index19({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SegmentsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>type?</code> | <code>[SegmentType](src/models/segment-type.ts)</code> | Optionally filter the results by the segment's type.<br>**Default**: "all" |
| <code>status?</code> | <code>[SegmentRequestStatus](src/models/segment-request-status.ts)</code> | Optionally filter the results by the segment's status.<br>**Default**: "all" |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>orderBy?</code> | <code>[SegmentOrderBy](src/models/segment-order-by.ts)</code> | The field that the results are sorted by. Defaults to created<br> `created` - The time in which the segment was first created.<br> `last_calculated` - The time that the segment last completed calculation. Measured in seconds since the Unix epoch.<br>**Default**: "created" |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>expand?</code> | <code>[SegmentsExpandItems](src/models/segments-expand-items.ts)[]</code> | Optionally expand the response to include additional data. <br> `stats` - Requests the most recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7 a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and static segments only calculate once upon upload or creation. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.segments.index19(request)`

- **OnSuccess**: <code>[SegmentsListResponse](src/models/segments-list-response.ts)</code>
- **OnError**: throws <code>[Segments.Index19Error](src/resources/segments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.segments.index19(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SegmentsListResponse, Segments.Index19Error&gt;</code>, with `result.value` of type <code>[SegmentsListResponse](src/models/segments-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMembers(request: Segments.ListMembersRequest, options?: RequestOptions): ApiPromise&lt;SegmentMembersResponse, Segments.ListMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all members in a segment with full subscription data. Each member is returned as a subscription object containing complete subscriber information and their subscription details. Supports optional expansions for stats, custom fields, tags, referrals, and premium tiers.
**Use this endpoint when you need detailed subscriber information.** If you only need subscriber IDs, use `/segments/{segmentId}/results` for a lighter-weight response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.segments.listMembers({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SegmentMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type Segments.ListMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.segments
  .listMembers({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SegmentMembersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>segmentId</code> | <code>string</code> | The prefixed ID of the segment object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>expand?</code> | <code>[SegmentMembersExpandItems](src/models/segment-members-expand-items.ts)[]</code> | Optionally expand the response to include additional data. <br> `stats` - Returns statistics about the subscription(s). <br> `custom_fields` - Returns custom field values set on the subscription. <br> `referrals` - Returns referrals made by the subscription. <br> `tags` - Returns tags associated with the subscription. <br> `subscription_premium_tiers` - Returns premium tier(s) the subscription is subscribed to. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.segments.listMembers(request)`

- **OnSuccess**: <code>[SegmentMembersResponse](src/models/segment-members-response.ts)</code>
- **OnError**: throws <code>[Segments.ListMembersError](src/resources/segments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.segments.listMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SegmentMembersResponse, Segments.ListMembersError&gt;</code>, with `result.value` of type <code>[SegmentMembersResponse](src/models/segment-members-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recalculate(request: Segments.RecalculateRequest, options?: RequestOptions): ApiPromise&lt;SegmentRecalculateResponse, Segments.RecalculateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recalculates a specific segment belonging to a publication

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.segments.recalculate({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SegmentRecalculateResponse
} catch (err) {
  // TODO: Handle 'err' of type Segments.RecalculateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.segments
  .recalculate({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SegmentRecalculateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>segmentId</code> | <code>string</code> | The prefixed ID of the segment object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.segments.recalculate(request)`

- **OnSuccess**: <code>[SegmentRecalculateResponse](src/models/segment-recalculate-response.ts)</code>
- **OnError**: throws <code>[Segments.RecalculateError](src/resources/segments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.segments.recalculate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SegmentRecalculateResponse, Segments.RecalculateError&gt;</code>, with `result.value` of type <code>[SegmentRecalculateResponse](src/models/segment-recalculate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show15(request: Segments.Show15Request, options?: RequestOptions): ApiPromise&lt;SegmentShowResponse, Segments.Show15Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a specific segment belonging to a publication

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.segments.show15({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SegmentShowResponse
} catch (err) {
  // TODO: Handle 'err' of type Segments.Show15Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.segments
  .show15({
    publicationId: "some example string",
    segmentId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SegmentShowResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>segmentId</code> | <code>string</code> | The prefixed ID of the segment object |
| <code>expand?</code> | <code>[SegmentsExpandItems](src/models/segments-expand-items.ts)[]</code> | Optionally expand the response to include additional data. <br> `stats` - Requests the most recently calculated statistics for a segment. <br> Segment stats are recalculated once daily around 7 a.m. UTC for dynamic segments, but can be manually recalculated at any time in the dashboard. Manual and static segments only calculate once upon upload or creation. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.segments.show15(request)`

- **OnSuccess**: <code>[SegmentShowResponse](src/models/segment-show-response.ts)</code>
- **OnError**: throws <code>[Segments.Show15Error](src/resources/segments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.segments.show15(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SegmentShowResponse, Segments.Show15Error&gt;</code>, with `result.value` of type <code>[SegmentShowResponse](src/models/segment-show-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionTags

> Source: [SubscriptionTags](src/resources/subscription-tags.ts)

<details>
<summary><code>create10(request: SubscriptionTags.Create10Request, options?: RequestOptions): ApiPromise&lt;SubscriptionTagsCreateResponse, SubscriptionTags.Create10Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds tags to a subscription. If the tag does not exist on the publication, it will be created automatically.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptionTags.create10({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionTagsCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type SubscriptionTags.Create10Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptionTags
  .create10({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionTagsCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | - |
| <code>subscriptionId</code> | <code>string</code> | - |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsSubscriptionsTagsRequest](src/models/publications-subscriptions-tags-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptionTags.create10(request)`

- **OnSuccess**: <code>[SubscriptionTagsCreateResponse](src/models/subscription-tags-create-response.ts)</code>
- **OnError**: throws <code>[SubscriptionTags.Create10Error](src/resources/subscription-tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptionTags.create10(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionTagsCreateResponse, SubscriptionTags.Create10Error&gt;</code>, with `result.value` of type <code>[SubscriptionTagsCreateResponse](src/models/subscription-tags-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/resources/subscriptions.ts)

<details>
<summary><code>create11(request: Subscriptions.Create11Request, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.Create11Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create new subscriptions for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.create11({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.Create11Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .create11({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[SubscriptionRequest](src/models/subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.create11(request)`

- **OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.Create11Error](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.create11(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponse, Subscriptions.Create11Error&gt;</code>, with `result.value` of type <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete5(request: Subscriptions.Delete5Request, options?: RequestOptions): ApiPromise&lt;SubscriptionDeleteResponse, Subscriptions.Delete5Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This cannot be undone. All data associated with the subscription will also be deleted. We recommend unsubscribing when possible instead of deleting. If a premium subscription is deleted they will no longer be billed. Deletes a subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.delete5({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.Delete5Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .delete5({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>subscriptionId</code> | <code>string</code> | The prefixed ID of the subscription object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.delete5(request)`

- **OnSuccess**: <code>[SubscriptionDeleteResponse](src/models/subscription-delete-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.Delete5Error](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.delete5(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionDeleteResponse, Subscriptions.Delete5Error&gt;</code>, with `result.value` of type <code>[SubscriptionDeleteResponse](src/models/subscription-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getByEmail(request: Subscriptions.GetByEmailRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.GetByEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Please note that this endpoint requires the email to be URL encoded. Please reference your language's documentation for the correct method of encoding. Retrieve a single subscription belonging to a specific email address in a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.getByEmail({
    publicationId: "some example string",
    email: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.GetByEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .getByEmail({
    publicationId: "some example string",
    email: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>email</code> | <code>string</code> | The ID of the subscriber object |
| <code>expand?</code> | <code>[SubscriptionsGetRequestExpandItem](src/models/subscriptions-get-request-expand-item.ts)</code> | Optional list of expandable objects.<br>`subscription_premium_tiers ` - Returns an array of tiers the subscription is associated with.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.<br>`stats` - Returns statistics about the subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription. <br>`tags` - Returns an array of tags that have been set on the subscription.<br>`newsletter_lists` - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.getByEmail(request)`

- **OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.GetByEmailError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.getByEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponse, Subscriptions.GetByEmailError&gt;</code>, with `result.value` of type <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getById(request: Subscriptions.GetByIdRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.GetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

In previous versions of the API, another endpoint existed to retrieve a subscription by the subscriber ID. This endpoint is now deprecated and will be removed in a future version of the API. Please use this endpoint instead. The subscription ID can be found by exporting a list of subscriptions either via the `Settings > Publications > Export Data` or by exporting a CSV in a segment. Retrieve a single subscription belonging to a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.getById({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.GetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .getById({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>subscriptionId</code> | <code>string</code> | The prefixed ID of the subscription object |
| <code>expand?</code> | <code>[SubscriptionsGetRequestExpandItem](src/models/subscriptions-get-request-expand-item.ts)</code> | Optional list of expandable objects.<br>`subscription_premium_tiers` - Returns an array of tiers the subscription is associated with.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.<br>`stats` - Returns statistics about the subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription. <br>`tags` - Returns an array of tags that have been set on the subscription.<br>`newsletter_lists` - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.getById(request)`

- **OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.GetByIdError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.getById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponse, Subscriptions.GetByIdError&gt;</code>, with `result.value` of type <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index20(request: Subscriptions.Index20Request, options?: RequestOptions): ApiPromise&lt;SubscriptionsListResponse, Subscriptions.Index20Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all subscriptions belonging to a specific publication.

**New**: This endpoint now supports cursor-based pagination for better performance and consistency. Use the `cursor` parameter instead of `page` for new integrations.
**Deprecation Notice**: Offset-based pagination (using `page` parameter) is deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination. See our Pagination Guide for details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.index20({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.Index20Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .index20({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>expand?</code> | <code>[SubscriptionsListRequestExpandItem](src/models/subscriptions-list-request-expand-item.ts)</code> | Optional list of expandable objects.<br>`subscription_premium_tiers ` - Returns an array of tiers the subscription is associated with.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.<br>`stats` - Returns statistics about the subscription(s).<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription. <br>`newsletter_lists` - Returns an array of newsletter list prefixed IDs the subscription is actively subscribed to. |
| <code>status?</code> | <code>[SubscriptionsListRequestStatus](src/models/subscriptions-list-request-status.ts)</code> | Optionally filter the results by a status<br>**Default**: "all" |
| <code>tier?</code> | <code>[SubscriptionsListRequestTier](src/models/subscriptions-list-request-tier.ts)</code> | Optionally filter the results by a their tier<br>**Default**: "all" |
| <code>premiumTiers?</code> | <code>string</code> | Optionally filter the results by one or multiple premium tiers |
| <code>premiumTierIds?</code> | <code>string</code> | Optionally filter the results by one or multiple premium tier ids |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>cursor?</code> | <code>string</code> | **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination. See the [Pagination Guide](/welcome/pagination) for more details. |
| <code>page?</code> | <code>number</code> | **Offset-based pagination (deprecated)**: Page number for offset-based pagination. This method is deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination using the `cursor` parameter. If not specified, results 1-10 from page 1 will be returned. See the [Pagination Guide](/welcome/pagination) for migration guidance. |
| <code>email?</code> | <code>string</code> | Optional email address to find a subscription.<br>This param must be an exact match and is case insensitive. |
| <code>orderBy?</code> | <code>[SubscriptionsListRequestOrderBy](src/models/subscriptions-list-request-order-by.ts)</code> | The field that the results are sorted by. Defaults to created<br> `created` - The time in which the subscription was first created.<br><br>**Default**: "created" |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>creationDate?</code> | <code>string</code> | Optional date entry (in the format YYYY/MM/DD) that filters returned subscriptions by their creation date. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.index20(request)`

- **OnSuccess**: <code>[SubscriptionsListResponse](src/models/subscriptions-list-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.Index20Error](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.index20(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionsListResponse, Subscriptions.Index20Error&gt;</code>, with `result.value` of type <code>[SubscriptionsListResponse](src/models/subscriptions-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patch3(request: Subscriptions.Patch3Request, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.Patch3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.patch3({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.Patch3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .patch3({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>subscriptionId</code> | <code>string</code> | The prefixed ID of the subscription object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsSubscriptionsRequest1](src/models/publications-subscriptions-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.patch3(request)`

- **OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.Patch3Error](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.patch3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponse, Subscriptions.Patch3Error&gt;</code>, with `result.value` of type <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>put3(request: Subscriptions.Put3Request, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.Put3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.put3({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.Put3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .put3({
    publicationId: "some example string",
    subscriptionId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>subscriptionId</code> | <code>string</code> | The prefixed ID of the subscription object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsSubscriptionsRequestReferenceSubscriptionsApi](src/models/publications-subscriptions-request-reference-subscriptions-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.put3(request)`

- **OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.Put3Error](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.put3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponse, Subscriptions.Put3Error&gt;</code>, with `result.value` of type <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateByEmail(request: Subscriptions.UpdateByEmailRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Subscriptions.UpdateByEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single subscription by email.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.updateByEmail({
    publicationId: "some example string",
    email: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Subscriptions.UpdateByEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions
  .updateByEmail({
    publicationId: "some example string",
    email: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>email</code> | <code>string</code> | The email of the subscription object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsSubscriptionsByEmailRequest](src/models/publications-subscriptions-by-email-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.updateByEmail(request)`

- **OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: throws <code>[Subscriptions.UpdateByEmailError](src/resources/subscriptions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.subscriptions.updateByEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponse, Subscriptions.UpdateByEmailError&gt;</code>, with `result.value` of type <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tiers

> Source: [Tiers](src/resources/tiers.ts)

<details>
<summary><code>create12(request: Tiers.Create12Request, options?: RequestOptions): ApiPromise&lt;TierResponse, Tiers.Create12Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new tier for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tiers.create12({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type TierResponse
} catch (err) {
  // TODO: Handle 'err' of type Tiers.Create12Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tiers
  .create12({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TierResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsTiersRequest](src/models/publications-tiers-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tiers.create12(request)`

- **OnSuccess**: <code>[TierResponse](src/models/tier-response.ts)</code>
- **OnError**: throws <code>[Tiers.Create12Error](src/resources/tiers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tiers.create12(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TierResponse, Tiers.Create12Error&gt;</code>, with `result.value` of type <code>[TierResponse](src/models/tier-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index21(request: Tiers.Index21Request, options?: RequestOptions): ApiPromise&lt;IndexTiersResponse, Tiers.Index21Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all tiers belonging to a specific publication

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tiers.index21({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type IndexTiersResponse
} catch (err) {
  // TODO: Handle 'err' of type Tiers.Index21Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tiers
  .index21({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IndexTiersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>expand?</code> | <code>string</code> | Optional list of expandable objects.<br>`stats` - Returns statistics about the tier(s).<br>`prices` - Returns prices for the tier(s). |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>page?</code> | <code>number</code> | Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned. |
| <code>direction?</code> | <code>[RequestDirection](src/models/request-direction.ts)</code> | The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.<br>**Default**: "asc" |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tiers.index21(request)`

- **OnSuccess**: <code>[IndexTiersResponse](src/models/index-tiers-response.ts)</code>
- **OnError**: throws <code>[Tiers.Index21Error](src/resources/tiers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tiers.index21(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IndexTiersResponse, Tiers.Index21Error&gt;</code>, with `result.value` of type <code>[IndexTiersResponse](src/models/index-tiers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>patch4(request: Tiers.Patch4Request, options?: RequestOptions): ApiPromise&lt;TierResponse, Tiers.Patch4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing tier belonging to a specific publication

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tiers.patch4({
    publicationId: "some example string",
    tierId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type TierResponse
} catch (err) {
  // TODO: Handle 'err' of type Tiers.Patch4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tiers
  .patch4({
    publicationId: "some example string",
    tierId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TierResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>tierId</code> | <code>string</code> | The prefixed ID of the tier object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsTiersRequest1](src/models/publications-tiers-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tiers.patch4(request)`

- **OnSuccess**: <code>[TierResponse](src/models/tier-response.ts)</code>
- **OnError**: throws <code>[Tiers.Patch4Error](src/resources/tiers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tiers.patch4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TierResponse, Tiers.Patch4Error&gt;</code>, with `result.value` of type <code>[TierResponse](src/models/tier-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>put4(request: Tiers.Put4Request, options?: RequestOptions): ApiPromise&lt;TierResponse, Tiers.Put4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing tier belonging to a specific publication

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tiers.put4({
    publicationId: "some example string",
    tierId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type TierResponse
} catch (err) {
  // TODO: Handle 'err' of type Tiers.Put4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tiers
  .put4({
    publicationId: "some example string",
    tierId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TierResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>tierId</code> | <code>string</code> | The prefixed ID of the tier object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsTiersRequest1](src/models/publications-tiers-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tiers.put4(request)`

- **OnSuccess**: <code>[TierResponse](src/models/tier-response.ts)</code>
- **OnError**: throws <code>[Tiers.Put4Error](src/resources/tiers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tiers.put4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TierResponse, Tiers.Put4Error&gt;</code>, with `result.value` of type <code>[TierResponse](src/models/tier-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show16(request: Tiers.Show16Request, options?: RequestOptions): ApiPromise&lt;TierResponse, Tiers.Show16Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single tier belonging to a specific publication

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tiers.show16({
    publicationId: "some example string",
    tierId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type TierResponse
} catch (err) {
  // TODO: Handle 'err' of type Tiers.Show16Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tiers
  .show16({
    publicationId: "some example string",
    tierId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TierResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>tierId</code> | <code>string</code> | The prefixed ID of the tier object |
| <code>expand?</code> | <code>string</code> | Optional list of expandable objects.<br>`stats` - Returns statistics about the tier(s).<br>`prices` - Returns prices for the tier(s). |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tiers.show16(request)`

- **OnSuccess**: <code>[TierResponse](src/models/tier-response.ts)</code>
- **OnError**: throws <code>[Tiers.Show16Error](src/resources/tiers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tiers.show16(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TierResponse, Tiers.Show16Error&gt;</code>, with `result.value` of type <code>[TierResponse](src/models/tier-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tokens

> Source: [Tokens](src/resources/tokens.ts)

<details>
<summary><code>introspect(request?: Tokens.IntrospectRequest, options?: RequestOptions): ApiPromise&lt;IntrospectionResponse, Tokens.IntrospectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whether a token is active and metadata about the token. Send parameters as `application/x-www-form-urlencoded`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokens.introspect();
  // TODO: Handle 'response' of type IntrospectionResponse
} catch (err) {
  // TODO: Handle 'err' of type Tokens.IntrospectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokens.introspect().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IntrospectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[OauthIntrospectRequest](src/models/oauth-introspect-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokens.introspect(request)`

- **OnSuccess**: <code>[IntrospectionResponse](src/models/introspection-response.ts)</code>
- **OnError**: throws <code>[Tokens.IntrospectError](src/resources/tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokens.introspect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IntrospectionResponse, Tokens.IntrospectError&gt;</code>, with `result.value` of type <code>[IntrospectionResponse](src/models/introspection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revoke(request?: Tokens.RevokeRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tokens.RevokeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an access token or refresh token. Send parameters as `application/x-www-form-urlencoded`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokens.revoke();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tokens.RevokeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokens.revoke().asApiResult();
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
| <code>body?</code> | <code>[OauthRevokeRequest](src/models/oauth-revoke-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokens.revoke(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tokens.RevokeError](src/resources/tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokens.revoke(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tokens.RevokeError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>token(request?: Tokens.TokenRequest, options?: RequestOptions): ApiPromise&lt;TokenResponse, Tokens.TokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges an authorization code for an access token, or exchanges a refresh token for a new access token. Send parameters as application/x-www-form-urlencoded.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokens.token();
  // TODO: Handle 'response' of type TokenResponse
} catch (err) {
  // TODO: Handle 'err' of type Tokens.TokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokens.token().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[OauthTokenRequest](src/models/oauth-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokens.token(request)`

- **OnSuccess**: <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: throws <code>[Tokens.TokenError](src/resources/tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokens.token(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenResponse, Tokens.TokenError&gt;</code>, with `result.value` of type <code>[TokenResponse](src/models/token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tokenInfo(request: Tokens.TokenInfoRequest, options?: RequestOptions): ApiPromise&lt;TokenInfoResponse, Tokens.TokenInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata for the current access token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tokens.tokenInfo({ authorization: "some example string" });
  // TODO: Handle 'response' of type TokenInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type Tokens.TokenInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tokens.tokenInfo({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TokenInfoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>string</code> | Bearer access token (`Bearer <access_token>`). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tokens.tokenInfo(request)`

- **OnSuccess**: <code>[TokenInfoResponse](src/models/token-info-response.ts)</code>
- **OnError**: throws <code>[Tokens.TokenInfoError](src/resources/tokens.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tokens.tokenInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TokenInfoResponse, Tokens.TokenInfoError&gt;</code>, with `result.value` of type <code>[TokenInfoResponse](src/models/token-info-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>create13(request: Webhooks.Create13Request, options?: RequestOptions): ApiPromise&lt;WebhookResponse, Webhooks.Create13Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new webhook for a given publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.create13({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type WebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.Create13Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .create13({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsWebhooksRequest](src/models/publications-webhooks-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.create13(request)`

- **OnSuccess**: <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: throws <code>[Webhooks.Create13Error](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.create13(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResponse, Webhooks.Create13Error&gt;</code>, with `result.value` of type <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>delete6(request: Webhooks.Delete6Request, options?: RequestOptions): ApiPromise&lt;WebhooksDeleteResponse, Webhooks.Delete6Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook subscription from a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.delete6({
    publicationId: "some example string",
    endpointId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type WebhooksDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.Delete6Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .delete6({
    publicationId: "some example string",
    endpointId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksDeleteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>endpointId</code> | <code>string</code> | The prefixed ID of the webhook object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.delete6(request)`

- **OnSuccess**: <code>[WebhooksDeleteResponse](src/models/webhooks-delete-response.ts)</code>
- **OnError**: throws <code>[Webhooks.Delete6Error](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.delete6(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksDeleteResponse, Webhooks.Delete6Error&gt;</code>, with `result.value` of type <code>[WebhooksDeleteResponse](src/models/webhooks-delete-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>index22(request: Webhooks.Index22Request, options?: RequestOptions): ApiPromise&lt;IndexWebhooksResponse, Webhooks.Index22Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all webhooks belonging to a specific publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.index22({
    publicationId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type IndexWebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.Index22Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .index22({ publicationId: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IndexWebhooksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>limit?</code> | <code>number</code> | A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10. |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.index22(request)`

- **OnSuccess**: <code>[IndexWebhooksResponse](src/models/index-webhooks-response.ts)</code>
- **OnError**: throws <code>[Webhooks.Index22Error](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.index22(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IndexWebhooksResponse, Webhooks.Index22Error&gt;</code>, with `result.value` of type <code>[IndexWebhooksResponse](src/models/index-webhooks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>show17(request: Webhooks.Show17Request, options?: RequestOptions): ApiPromise&lt;WebhookResponse, Webhooks.Show17Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific webhook belonging to a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.show17({
    publicationId: "some example string",
    endpointId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type WebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.Show17Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .show17({
    publicationId: "some example string",
    endpointId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>endpointId</code> | <code>string</code> | The prefixed ID of the webhook object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.show17(request)`

- **OnSuccess**: <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: throws <code>[Webhooks.Show17Error](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.show17(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResponse, Webhooks.Show17Error&gt;</code>, with `result.value` of type <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>update4(request: Webhooks.Update4Request, options?: RequestOptions): ApiPromise&lt;WebhookResponse, Webhooks.Update4Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook subscription for a publication.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.update4({
    publicationId: "some example string",
    endpointId: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type WebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.Update4Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .update4({
    publicationId: "some example string",
    endpointId: "some example string",
    authorization: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>publicationId</code> | <code>string</code> | The prefixed ID of the publication object |
| <code>endpointId</code> | <code>string</code> | The prefixed ID of the webhook object |
| <code>authorization</code> | <code>string</code> | Bearer authentication |
| <code>body?</code> | <code>[PublicationsWebhooksRequest1](src/models/publications-webhooks-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.update4(request)`

- **OnSuccess**: <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: throws <code>[Webhooks.Update4Error](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.update4(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResponse, Webhooks.Update4Error&gt;</code>, with `result.value` of type <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/resources/workspaces.ts)

<details>
<summary><code>identify2(request: Workspaces.Identify2Request, options?: RequestOptions): ApiPromise&lt;WorkspaceIdentifyResponse, Workspaces.Identify2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about the workspace the OAuth or API token is associated with.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.identify2({ authorization: "some example string" });
  // TODO: Handle 'response' of type WorkspaceIdentifyResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.Identify2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.identify2({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspaceIdentifyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.identify2(request)`

- **OnSuccess**: <code>[WorkspaceIdentifyResponse](src/models/workspace-identify-response.ts)</code>
- **OnError**: throws <code>[Workspaces.Identify2Error](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.identify2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspaceIdentifyResponse, Workspaces.Identify2Error&gt;</code>, with `result.value` of type <code>[WorkspaceIdentifyResponse](src/models/workspace-identify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>permissions(request: Workspaces.PermissionsRequest, options?: RequestOptions): ApiPromise&lt;WorkspacePermissionsResponse, Workspaces.PermissionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the permissions granted to the OAuth or API token for this workspace. API keys return all granular OAuth scopes. OAuth tokens return only the scopes they were authorized for.

`posts` write access is only included when the Send API feature is enabled; tokens with `posts:write` but without Send API receive `posts` as `["read"]`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.permissions({ authorization: "some example string" });
  // TODO: Handle 'response' of type WorkspacePermissionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.PermissionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces.permissions({ authorization: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WorkspacePermissionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.permissions(request)`

- **OnSuccess**: <code>[WorkspacePermissionsResponse](src/models/workspace-permissions-response.ts)</code>
- **OnError**: throws <code>[Workspaces.PermissionsError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.permissions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WorkspacePermissionsResponse, Workspaces.PermissionsError&gt;</code>, with `result.value` of type <code>[WorkspacePermissionsResponse](src/models/workspace-permissions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publicationsBySubscriptionEmail(request: Workspaces.PublicationsBySubscriptionEmailRequest, options?: RequestOptions): ApiPromise&lt;PublicationsBySubscriptionEmailResponseItem[], Workspaces.PublicationsBySubscriptionEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all publications in the workspace that have a subscription for the specified email address. The workspace is determined by the provided API key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workspaces.publicationsBySubscriptionEmail({
    email: "some example string",
    authorization: "some example string",
  });
  // TODO: Handle 'response' of type PublicationsBySubscriptionEmailResponseItem[]
} catch (err) {
  // TODO: Handle 'err' of type Workspaces.PublicationsBySubscriptionEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workspaces
  .publicationsBySubscriptionEmail({ email: "some example string", authorization: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublicationsBySubscriptionEmailResponseItem[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>string</code> | The email address to search for subscriptions |
| <code>expand?</code> | <code>[PublicationsBySubscriptionEmailRequestExpandItem](src/models/publications-by-subscription-email-request-expand-item.ts)[]</code> | Optionally expand the results by adding additional information. <br>`subscription` - Returns the full Subscription object for the email address in each publication. <br>`publication` - Returns the full Publication object instead of just ID and name. <br>`subscription_custom_fields` - Returns custom field values nested within the subscription object. (Returns the subscription object regardless of whether `subscription` is requested.) |
| <code>authorization</code> | <code>string</code> | Bearer authentication |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workspaces.publicationsBySubscriptionEmail(request)`

- **OnSuccess**: <code>[PublicationsBySubscriptionEmailResponseItem](src/models/publications-by-subscription-email-response-item.ts)[]</code>
- **OnError**: throws <code>[Workspaces.PublicationsBySubscriptionEmailError](src/resources/workspaces.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workspaces.publicationsBySubscriptionEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublicationsBySubscriptionEmailResponseItem[], Workspaces.PublicationsBySubscriptionEmailError&gt;</code>, with `result.value` of type <code>[PublicationsBySubscriptionEmailResponseItem](src/models/publications-by-subscription-email-response-item.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BeehiivError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

