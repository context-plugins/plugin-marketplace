# Reference

> Source: [SurfeClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>getCredits(options?: RequestOptions): ApiPromise&lt;CreditBalance, Account.GetCreditsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the remaining credit balance across the email, mobile, and search/ICP credit pools.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getCredits();
  // TODO: Handle 'response' of type CreditBalance
} catch (err) {
  // TODO: Handle 'err' of type Account.GetCreditsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getCredits().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditBalance
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getCredits()`

- **OnSuccess**: <code>[CreditBalance](src/models/credit-balance.ts)</code>
- **OnError**: throws <code>[Account.GetCreditsError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.getCredits().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditBalance, Account.GetCreditsError&gt;</code>, with `result.value` of type <code>[CreditBalance](src/models/credit-balance.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](src/resources/companies.ts)

<details>
<summary><code>getCompanyEnrichment(request: Companies.GetCompanyEnrichmentRequest, options?: RequestOptions): ApiPromise&lt;CompanyEnrichmentResult, Companies.GetCompanyEnrichmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the status and results of a company enrichment job by ID. Poll until status is COMPLETED, or use a webhook to be notified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCompanyEnrichment({
    id: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CompanyEnrichmentResult
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCompanyEnrichmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .getCompanyEnrichment({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyEnrichmentResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The enrichment job ID returned by the start operation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCompanyEnrichment(request)`

- **OnSuccess**: <code>[CompanyEnrichmentResult](src/models/company-enrichment-result.ts)</code>
- **OnError**: throws <code>[Companies.GetCompanyEnrichmentError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCompanyEnrichment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyEnrichmentResult, Companies.GetCompanyEnrichmentError&gt;</code>, with `result.value` of type <code>[CompanyEnrichmentResult](src/models/company-enrichment-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCompanies(request: Companies.SearchCompaniesRequest, options?: RequestOptions): ApiPromise&lt;CompanySearchResponse, Companies.SearchCompaniesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for companies against Ideal Customer Profile filters (industry, employee count, revenue, location, keywords). When credit charging is enabled the call deducts ICP search credits and returns 402 when the balance is insufficient.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.searchCompanies({ body: { limit: 1, filters: {} } });
  // TODO: Handle 'response' of type CompanySearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Companies.SearchCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies.searchCompanies({ body: { limit: 1, filters: {} } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanySearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanySearchRequest](src/models/company-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.searchCompanies(request)`

- **OnSuccess**: <code>[CompanySearchResponse](src/models/company-search-response.ts)</code>
- **OnError**: throws <code>[Companies.SearchCompaniesError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.searchCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanySearchResponse, Companies.SearchCompaniesError&gt;</code>, with `result.value` of type <code>[CompanySearchResponse](src/models/company-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startCompanyEnrichment(request: Companies.StartCompanyEnrichmentRequest, options?: RequestOptions): ApiPromise&lt;EnrichmentJobAccepted, Companies.StartCompanyEnrichmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an asynchronous bulk enrichment job for companies identified by domain. Returns an enrichment ID for polling or a webhook callback.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.startCompanyEnrichment({ body: { companies: [{}] } });
  // TODO: Handle 'response' of type EnrichmentJobAccepted
} catch (err) {
  // TODO: Handle 'err' of type Companies.StartCompanyEnrichmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies.startCompanyEnrichment({ body: { companies: [{}] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnrichmentJobAccepted
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanyEnrichmentRequest](src/models/company-enrichment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.startCompanyEnrichment(request)`

- **OnSuccess**: <code>[EnrichmentJobAccepted](src/models/enrichment-job-accepted.ts)</code>
- **OnError**: throws <code>[Companies.StartCompanyEnrichmentError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.startCompanyEnrichment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnrichmentJobAccepted, Companies.StartCompanyEnrichmentError&gt;</code>, with `result.value` of type <code>[EnrichmentJobAccepted](src/models/enrichment-job-accepted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## People

> Source: [People](src/resources/people.ts)

<details>
<summary><code>findPeopleByEmail(request: People.FindPeopleByEmailRequest, options?: RequestOptions): ApiPromise&lt;PeopleFindByEmailResponse, People.FindPeopleByEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrich people directly from a list of email addresses, returning the matched person profile and firmographics where available.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.findPeopleByEmail({ body: { emails: ["user@example.com"] } });
  // TODO: Handle 'response' of type PeopleFindByEmailResponse
} catch (err) {
  // TODO: Handle 'err' of type People.FindPeopleByEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people
  .findPeopleByEmail({ body: { emails: ["user@example.com"] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PeopleFindByEmailResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PeopleFindByEmailRequest](src/models/people-find-by-email-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.findPeopleByEmail(request)`

- **OnSuccess**: <code>[PeopleFindByEmailResponse](src/models/people-find-by-email-response.ts)</code>
- **OnError**: throws <code>[People.FindPeopleByEmailError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.findPeopleByEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PeopleFindByEmailResponse, People.FindPeopleByEmailError&gt;</code>, with `result.value` of type <code>[PeopleFindByEmailResponse](src/models/people-find-by-email-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPeopleEnrichment(request: People.GetPeopleEnrichmentRequest, options?: RequestOptions): ApiPromise&lt;PeopleEnrichmentResult, People.GetPeopleEnrichmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the status and results of a people enrichment job by ID. Poll until status is COMPLETED, or use a webhook to be notified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.getPeopleEnrichment({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type PeopleEnrichmentResult
} catch (err) {
  // TODO: Handle 'err' of type People.GetPeopleEnrichmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people
  .getPeopleEnrichment({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PeopleEnrichmentResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The enrichment job ID returned by the start operation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.getPeopleEnrichment(request)`

- **OnSuccess**: <code>[PeopleEnrichmentResult](src/models/people-enrichment-result.ts)</code>
- **OnError**: throws <code>[People.GetPeopleEnrichmentError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.getPeopleEnrichment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PeopleEnrichmentResult, People.GetPeopleEnrichmentError&gt;</code>, with `result.value` of type <code>[PeopleEnrichmentResult](src/models/people-enrichment-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchPeople(request: People.SearchPeopleRequest, options?: RequestOptions): ApiPromise&lt;PeopleSearchResponse, People.SearchPeopleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for people by persona filters (job titles, seniorities, departments) and company filters (industry, headcount, location). Job titles are expanded automatically with acronym and semantic matching. Results are paged with nextPageToken.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.searchPeople({ body: { limit: 1 } });
  // TODO: Handle 'response' of type PeopleSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type People.SearchPeopleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people.searchPeople({ body: { limit: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PeopleSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PeopleSearchRequest](src/models/people-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.searchPeople(request)`

- **OnSuccess**: <code>[PeopleSearchResponse](src/models/people-search-response.ts)</code>
- **OnError**: throws <code>[People.SearchPeopleError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.searchPeople(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PeopleSearchResponse, People.SearchPeopleError&gt;</code>, with `result.value` of type <code>[PeopleSearchResponse](src/models/people-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startPeopleEnrichment(request: People.StartPeopleEnrichmentRequest, options?: RequestOptions): ApiPromise&lt;EnrichmentJobAccepted, People.StartPeopleEnrichmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an asynchronous bulk enrichment job for up to 10,000 people. Each person is identified by a LinkedIn URL, or by first name + last name + company name or domain. Returns an enrichment ID for polling or a webhook callback.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.people.startPeopleEnrichment({ body: { people: [{}], include: {} } });
  // TODO: Handle 'response' of type EnrichmentJobAccepted
} catch (err) {
  // TODO: Handle 'err' of type People.StartPeopleEnrichmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.people
  .startPeopleEnrichment({ body: { people: [{}], include: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnrichmentJobAccepted
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PeopleEnrichmentRequest](src/models/people-enrichment-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.people.startPeopleEnrichment(request)`

- **OnSuccess**: <code>[EnrichmentJobAccepted](src/models/enrichment-job-accepted.ts)</code>
- **OnError**: throws <code>[People.StartPeopleEnrichmentError](src/resources/people.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.people.startPeopleEnrichment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnrichmentJobAccepted, People.StartPeopleEnrichmentError&gt;</code>, with `result.value` of type <code>[EnrichmentJobAccepted](src/models/enrichment-job-accepted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Recommendations

> Source: [Recommendations](src/resources/recommendations.ts)

<details>
<summary><code>fetchRecommendations(request: Recommendations.FetchRecommendationsRequest, options?: RequestOptions): ApiPromise&lt;RecommendationsFetchResponse, Recommendations.FetchRecommendationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch lookalike account recommendations resembling the best-fit companies defined by the ICP.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recommendations.fetchRecommendations({ body: {} });
  // TODO: Handle 'response' of type RecommendationsFetchResponse
} catch (err) {
  // TODO: Handle 'err' of type Recommendations.FetchRecommendationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recommendations.fetchRecommendations({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecommendationsFetchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecommendationsFetchRequest](src/models/recommendations-fetch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recommendations.fetchRecommendations(request)`

- **OnSuccess**: <code>[RecommendationsFetchResponse](src/models/recommendations-fetch-response.ts)</code>
- **OnError**: throws <code>[Recommendations.FetchRecommendationsError](src/resources/recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recommendations.fetchRecommendations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecommendationsFetchResponse, Recommendations.FetchRecommendationsError&gt;</code>, with `result.value` of type <code>[RecommendationsFetchResponse](src/models/recommendations-fetch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertIcp(request: Recommendations.UpsertIcpRequest, options?: RequestOptions): ApiPromise&lt;IcpDefinition, Recommendations.UpsertIcpError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or update the Ideal Customer Profile used to generate lookalike account recommendations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recommendations.upsertIcp({ body: {} });
  // TODO: Handle 'response' of type IcpDefinition
} catch (err) {
  // TODO: Handle 'err' of type Recommendations.UpsertIcpError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recommendations.upsertIcp({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IcpDefinition
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IcpDefinition](src/models/icp-definition.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recommendations.upsertIcp(request)`

- **OnSuccess**: <code>[IcpDefinition](src/models/icp-definition.ts)</code>
- **OnError**: throws <code>[Recommendations.UpsertIcpError](src/resources/recommendations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recommendations.upsertIcp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IcpDefinition, Recommendations.UpsertIcpError&gt;</code>, with `result.value` of type <code>[IcpDefinition](src/models/icp-definition.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SurfeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

