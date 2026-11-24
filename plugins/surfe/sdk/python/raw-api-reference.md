# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [SurfeClient](surfe/client.py)

## Account

> Source: [Account](surfe/apis/account.py)

<details>
<summary><code>def get_credits(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreditBalance, GetCreditsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the remaining credit balance across the email, mobile, and search/ICP credit pools.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.account.with_raw_response.get_credits()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditBalance
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCreditsErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.get_credits()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreditBalance
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCreditsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[CreditBalance](surfe/models/credit_balance.py), [GetCreditsErrorBody](surfe/errors/get_credits_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreditBalance](surfe/models/credit_balance.py)</code> -- Current credit balances.

**On `Failure`**: `error` is <code>[GetCreditsErrorBody](surfe/errors/get_credits_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](surfe/apis/companies.py)

<details>
<summary><code>def get_company_enrichment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompanyEnrichmentResult, GetCompanyEnrichmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the status and results of a company enrichment job by ID. Poll until status is COMPLETED, or use a webhook to be notified.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.companies.with_raw_response.get_company_enrichment(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyEnrichmentResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompanyEnrichmentErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_company_enrichment(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyEnrichmentResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompanyEnrichmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The enrichment job ID returned by the start operation. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[CompanyEnrichmentResult](surfe/models/company_enrichment_result.py), [GetCompanyEnrichmentErrorBody](surfe/errors/get_company_enrichment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompanyEnrichmentResult](surfe/models/company_enrichment_result.py)</code> -- Enrichment job status and enriched companies.

**On `Failure`**: `error` is <code>[GetCompanyEnrichmentErrorBody](surfe/errors/get_company_enrichment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_companies(body: CompanySearchRequest | CompanySearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompanySearchResponse, SearchCompaniesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for companies against Ideal Customer Profile filters (industry, employee count, revenue, location, keywords). When credit charging is enabled the call deducts ICP search credits and returns 402 when the balance is insufficient.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.companies.with_raw_response.search_companies(CompanySearchRequest(limit=1, filters=CompanyFilters()))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanySearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCompaniesErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.search_companies(
    CompanySearchRequest(limit=1, filters=CompanyFilters())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanySearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanySearchRequest](surfe/models/company_search_request.py) \| [CompanySearchRequestDict](surfe/models/company_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[CompanySearchResponse](surfe/models/company_search_response.py), [SearchCompaniesErrorBody](surfe/errors/search_companies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompanySearchResponse](surfe/models/company_search_response.py)</code> -- Matching companies.

**On `Failure`**: `error` is <code>[SearchCompaniesErrorBody](surfe/errors/search_companies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 429 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_company_enrichment(body: CompanyEnrichmentRequest | CompanyEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnrichmentJobAccepted, StartCompanyEnrichmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an asynchronous bulk enrichment job for companies identified by domain. Returns an enrichment ID for polling or a webhook callback.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.companies.with_raw_response.start_company_enrichment(CompanyEnrichmentRequest(companies=[Company1()]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichmentJobAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCompanyEnrichmentErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.start_company_enrichment(
    CompanyEnrichmentRequest(companies=[Company1()])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichmentJobAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCompanyEnrichmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanyEnrichmentRequest](surfe/models/company_enrichment_request.py) \| [CompanyEnrichmentRequestDict](surfe/models/company_enrichment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[EnrichmentJobAccepted](surfe/models/enrichment_job_accepted.py), [StartCompanyEnrichmentErrorBody](surfe/errors/start_company_enrichment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnrichmentJobAccepted](surfe/models/enrichment_job_accepted.py)</code> -- Enrichment job accepted.

**On `Failure`**: `error` is <code>[StartCompanyEnrichmentErrorBody](surfe/errors/start_company_enrichment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 429 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## People

> Source: [People](surfe/apis/people.py)

<details>
<summary><code>def find_people_by_email(body: PeopleFindByEmailRequest | PeopleFindByEmailRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PeopleFindByEmailResponse, FindPeopleByEmailErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrich people directly from a list of email addresses, returning the matched person profile and firmographics where available.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people.with_raw_response.find_people_by_email(PeopleFindByEmailRequest(emails=["user@example.com"]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PeopleFindByEmailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindPeopleByEmailErrorBody
```

**Async**

```python
result = await async_client.people.with_raw_response.find_people_by_email(
    PeopleFindByEmailRequest(emails=["user@example.com"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PeopleFindByEmailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FindPeopleByEmailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PeopleFindByEmailRequest](surfe/models/people_find_by_email_request.py) \| [PeopleFindByEmailRequestDict](surfe/models/people_find_by_email_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[PeopleFindByEmailResponse](surfe/models/people_find_by_email_response.py), [FindPeopleByEmailErrorBody](surfe/errors/find_people_by_email_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PeopleFindByEmailResponse](surfe/models/people_find_by_email_response.py)</code> -- Matched people.

**On `Failure`**: `error` is <code>[FindPeopleByEmailErrorBody](surfe/errors/find_people_by_email_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_people_enrichment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PeopleEnrichmentResult, GetPeopleEnrichmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the status and results of a people enrichment job by ID. Poll until status is COMPLETED, or use a webhook to be notified.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people.with_raw_response.get_people_enrichment(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PeopleEnrichmentResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPeopleEnrichmentErrorBody
```

**Async**

```python
result = await async_client.people.with_raw_response.get_people_enrichment(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PeopleEnrichmentResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPeopleEnrichmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The enrichment job ID returned by the start operation. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[PeopleEnrichmentResult](surfe/models/people_enrichment_result.py), [GetPeopleEnrichmentErrorBody](surfe/errors/get_people_enrichment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PeopleEnrichmentResult](surfe/models/people_enrichment_result.py)</code> -- Enrichment job status and enriched people.

**On `Failure`**: `error` is <code>[GetPeopleEnrichmentErrorBody](surfe/errors/get_people_enrichment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_people(body: PeopleSearchRequest | PeopleSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PeopleSearchResponse, SearchPeopleErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for people by persona filters (job titles, seniorities, departments) and company filters (industry, headcount, location). Job titles are expanded automatically with acronym and semantic matching. Results are paged with nextPageToken.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people.with_raw_response.search_people(PeopleSearchRequest(limit=1))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PeopleSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPeopleErrorBody
```

**Async**

```python
result = await async_client.people.with_raw_response.search_people(PeopleSearchRequest(limit=1))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PeopleSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchPeopleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PeopleSearchRequest](surfe/models/people_search_request.py) \| [PeopleSearchRequestDict](surfe/models/people_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[PeopleSearchResponse](surfe/models/people_search_response.py), [SearchPeopleErrorBody](surfe/errors/search_people_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PeopleSearchResponse](surfe/models/people_search_response.py)</code> -- Matching people.

**On `Failure`**: `error` is <code>[SearchPeopleErrorBody](surfe/errors/search_people_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 429 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_people_enrichment(body: PeopleEnrichmentRequest | PeopleEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnrichmentJobAccepted, StartPeopleEnrichmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an asynchronous bulk enrichment job for up to 10,000 people. Each person is identified by a LinkedIn URL, or by first name + last name + company name or domain. Returns an enrichment ID for polling or a webhook callback.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.people.with_raw_response.start_people_enrichment(
    PeopleEnrichmentRequest(people=[PersonInput()], include=IncludeSurfePeopleApi())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichmentJobAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartPeopleEnrichmentErrorBody
```

**Async**

```python
result = await async_client.people.with_raw_response.start_people_enrichment(
    PeopleEnrichmentRequest(people=[PersonInput()], include=IncludeSurfePeopleApi())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichmentJobAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartPeopleEnrichmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PeopleEnrichmentRequest](surfe/models/people_enrichment_request.py) \| [PeopleEnrichmentRequestDict](surfe/models/people_enrichment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[EnrichmentJobAccepted](surfe/models/enrichment_job_accepted.py), [StartPeopleEnrichmentErrorBody](surfe/errors/start_people_enrichment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnrichmentJobAccepted](surfe/models/enrichment_job_accepted.py)</code> -- Enrichment job accepted.

**On `Failure`**: `error` is <code>[StartPeopleEnrichmentErrorBody](surfe/errors/start_people_enrichment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 429 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Recommendations

> Source: [Recommendations](surfe/apis/recommendations.py)

<details>
<summary><code>def fetch_recommendations(body: RecommendationsFetchRequest | RecommendationsFetchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecommendationsFetchResponse, FetchRecommendationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch lookalike account recommendations resembling the best-fit companies defined by the ICP.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.recommendations.with_raw_response.fetch_recommendations(RecommendationsFetchRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecommendationsFetchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchRecommendationsErrorBody
```

**Async**

```python
result = await async_client.recommendations.with_raw_response.fetch_recommendations(RecommendationsFetchRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecommendationsFetchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FetchRecommendationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecommendationsFetchRequest](surfe/models/recommendations_fetch_request.py) \| [RecommendationsFetchRequestDict](surfe/models/recommendations_fetch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[RecommendationsFetchResponse](surfe/models/recommendations_fetch_response.py), [FetchRecommendationsErrorBody](surfe/errors/fetch_recommendations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecommendationsFetchResponse](surfe/models/recommendations_fetch_response.py)</code> -- Lookalike company recommendations.

**On `Failure`**: `error` is <code>[FetchRecommendationsErrorBody](surfe/errors/fetch_recommendations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upsert_icp(body: IcpDefinition | IcpDefinitionDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IcpDefinition, UpsertIcpErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or update the Ideal Customer Profile used to generate lookalike account recommendations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.recommendations.with_raw_response.upsert_icp(IcpDefinition())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IcpDefinition
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpsertIcpErrorBody
```

**Async**

```python
result = await async_client.recommendations.with_raw_response.upsert_icp(IcpDefinition())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IcpDefinition
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpsertIcpErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IcpDefinition](surfe/models/icp_definition.py) \| [IcpDefinitionDict](surfe/models/icp_definition.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](surfe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](surfe/core/results.py)&#91;[IcpDefinition](surfe/models/icp_definition.py), [UpsertIcpErrorBody](surfe/errors/upsert_icp_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IcpDefinition](surfe/models/icp_definition.py)</code> -- ICP saved.

**On `Failure`**: `error` is <code>[UpsertIcpErrorBody](surfe/errors/upsert_icp_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](surfe/models/error.py)</code> |
| anything unmapped | <code>[RawError](surfe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

