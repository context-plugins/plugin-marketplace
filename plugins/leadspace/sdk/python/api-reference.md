# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [LeadspaceClient](leadspace/client.py)

## Authorization

> Source: [Authorization](leadspace/apis/authorization.py)

<details>
<summary><code>def create_authorization_token(body: AuthorizationRequest | AuthorizationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AuthorizationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges the Program ID and authentication secret supplied by Leadspace for a bearer token. Tokens expire every 24 hours.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.authorization.create_authorization_token(
        AuthorizationRequest(user="some example string", pass_="some example string", audience="some example string")
    )
    # TODO: Handle 'response' of type AuthorizationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAuthorizationTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.authorization.create_authorization_token(
        AuthorizationRequest(user="some example string", pass_="some example string", audience="some example string")
    )
    # TODO: Handle 'response' of type AuthorizationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAuthorizationTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AuthorizationRequest](leadspace/models/authorization_request.py) \| [AuthorizationRequestDict](leadspace/models/authorization_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](leadspace/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorizationResponse](leadspace/models/authorization_response.py)</code> -- Token issued

**OnError**: <code>[ApiError](leadspace/core/exceptions.py)&#91;[CreateAuthorizationTokenErrorBody](leadspace/errors/create_authorization_token_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](leadspace/core/results.py)</code> |
| anything unmapped | <code>[RawError](leadspace/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refresh_authorization_token(body: RefreshRequest | RefreshRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AuthorizationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges a refreshToken for a new bearer token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.authorization.refresh_authorization_token(
        RefreshRequest(user="some example string", refresh_token="some example string")
    )
    # TODO: Handle 'response' of type AuthorizationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshAuthorizationTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.authorization.refresh_authorization_token(
        RefreshRequest(user="some example string", refresh_token="some example string")
    )
    # TODO: Handle 'response' of type AuthorizationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshAuthorizationTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RefreshRequest](leadspace/models/refresh_request.py) \| [RefreshRequestDict](leadspace/models/refresh_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](leadspace/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorizationResponse](leadspace/models/authorization_response.py)</code> -- Token refreshed

**OnError**: <code>[ApiError](leadspace/core/exceptions.py)&#91;[RefreshAuthorizationTokenErrorBody](leadspace/errors/refresh_authorization_token_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](leadspace/core/results.py)</code> |
| anything unmapped | <code>[RawError](leadspace/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](leadspace/apis/discovery.py)

<details>
<summary><code>def discover_company_contacts(body: DiscoveryRequest | DiscoveryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DiscoveryAccepted</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expands up to 500 accounts into ranked contacts. Either companyName or companyWebsite is mandatory for each account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.discovery.discover_company_contacts(DiscoveryRequest(data=[DiscoveryItem()]))
    # TODO: Handle 'response' of type DiscoveryAccepted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DiscoverCompanyContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.discovery.discover_company_contacts(DiscoveryRequest(data=[DiscoveryItem()]))
    # TODO: Handle 'response' of type DiscoveryAccepted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DiscoverCompanyContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DiscoveryRequest](leadspace/models/discovery_request.py) \| [DiscoveryRequestDict](leadspace/models/discovery_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](leadspace/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiscoveryAccepted](leadspace/models/discovery_accepted.py)</code> -- Bulk job successfully accepted

**OnError**: <code>[ApiError](leadspace/core/exceptions.py)&#91;[DiscoverCompanyContactsErrorBody](leadspace/errors/discover_company_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 427, 500 | <code>[Error](leadspace/models/error.py)</code> |
| 401, 403 | <code>[RawError](leadspace/core/results.py)</code> |
| anything unmapped | <code>[RawError](leadspace/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Enrichment

> Source: [Enrichment](leadspace/apis/enrichment.py)

<details>
<summary><code>def enrich_bulk_records(body: BulkEnrichmentRequest | BulkEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BulkAccepted</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts up to 500 records per request and returns a polling URI. An optional callbackUrl receives a notification when processing completes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrichment.enrich_bulk_records(BulkEnrichmentRequest(data=[SingleEnrichmentRequest()]))
    # TODO: Handle 'response' of type BulkAccepted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichBulkRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.enrichment.enrich_bulk_records(
        BulkEnrichmentRequest(data=[SingleEnrichmentRequest()])
    )
    # TODO: Handle 'response' of type BulkAccepted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichBulkRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkEnrichmentRequest](leadspace/models/bulk_enrichment_request.py) \| [BulkEnrichmentRequestDict](leadspace/models/bulk_enrichment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](leadspace/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkAccepted](leadspace/models/bulk_accepted.py)</code> -- The bulk job was successfully accepted

**OnError**: <code>[ApiError](leadspace/core/exceptions.py)&#91;[EnrichBulkRecordsErrorBody](leadspace/errors/enrich_bulk_records_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 427, 500 | <code>[ErrorLeadspaceApiV4EnrichmentApi](leadspace/models/error_leadspace_api_v4_enrichment_api.py)</code> |
| 401 | <code>[RawError](leadspace/core/results.py)</code> |
| anything unmapped | <code>[RawError](leadspace/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def enrich_single_record(body: SingleEnrichmentRequest | SingleEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EnrichmentResult</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Synchronously enriches one record. Account enrichment requires a company name. Person enrichment requires first name, last name, and one of company name, email address, or website.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrichment.enrich_single_record(SingleEnrichmentRequest())
    # TODO: Handle 'response' of type EnrichmentResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichSingleRecordErrorBody
```

**Async**

```python
try:
    response = await async_client.enrichment.enrich_single_record(SingleEnrichmentRequest())
    # TODO: Handle 'response' of type EnrichmentResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichSingleRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SingleEnrichmentRequest](leadspace/models/single_enrichment_request.py) \| [SingleEnrichmentRequestDict](leadspace/models/single_enrichment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](leadspace/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnrichmentResult](leadspace/models/enrichment_result.py)</code> -- The enrichment request was successfully processed

**OnError**: <code>[ApiError](leadspace/core/exceptions.py)&#91;[EnrichSingleRecordErrorBody](leadspace/errors/enrich_single_record_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 427, 500 | <code>[ErrorLeadspaceApiV4EnrichmentApi](leadspace/models/error_leadspace_api_v4_enrichment_api.py)</code> |
| 401, 405, 415, 429 | <code>[RawError](leadspace/core/results.py)</code> |
| anything unmapped | <code>[RawError](leadspace/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Intent

> Source: [Intent](leadspace/apis/intent.py)

<details>
<summary><code>def score_company_intent(body: IntentRequest | IntentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> IntentAccepted</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a bulk of companies for intent refresh. Company name is required. Returns a polling URI.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.intent.score_company_intent(IntentRequest(data=[Datum()]))
    # TODO: Handle 'response' of type IntentAccepted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScoreCompanyIntentErrorBody
```

**Async**

```python
try:
    response = await async_client.intent.score_company_intent(IntentRequest(data=[Datum()]))
    # TODO: Handle 'response' of type IntentAccepted
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScoreCompanyIntentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IntentRequest](leadspace/models/intent_request.py) \| [IntentRequestDict](leadspace/models/intent_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](leadspace/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntentAccepted](leadspace/models/intent_accepted.py)</code> -- The bulk job has successfully been accepted

**OnError**: <code>[ApiError](leadspace/core/exceptions.py)&#91;[ScoreCompanyIntentErrorBody](leadspace/errors/score_company_intent_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 427, 500 | <code>[Error](leadspace/models/error.py)</code> |
| 401 | <code>[RawError](leadspace/core/results.py)</code> |
| anything unmapped | <code>[RawError](leadspace/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Results

> Source: [Results](leadspace/apis/results.py)

<details>
<summary><code>def get_bulk_enrichment_results(bulk_id: str, *, request_options: RequestOptionsOrDict | None = None) -> BulkResults</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the results of a previously submitted bulk enrichment job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.results.get_bulk_enrichment_results("some example string")
    # TODO: Handle 'response' of type BulkResults
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBulkEnrichmentResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.results.get_bulk_enrichment_results("some example string")
    # TODO: Handle 'response' of type BulkResults
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBulkEnrichmentResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bulk_id</code> | <code>str</code> | The Leadspace bulk identifier returned when the job was accepted |
| <code>request_options</code> | <code>[RequestOptionsOrDict](leadspace/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkResults](leadspace/models/bulk_results.py)</code> -- The request is done

**OnError**: <code>[ApiError](leadspace/core/exceptions.py)&#91;[GetBulkEnrichmentResultsErrorBody](leadspace/errors/get_bulk_enrichment_results_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](leadspace/core/results.py)</code> |
| 500 | <code>[Error](leadspace/models/error.py)</code> |
| anything unmapped | <code>[RawError](leadspace/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_discovery_results(bulk_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DiscoveryResults</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.results.get_discovery_results("some example string")
    # TODO: Handle 'response' of type DiscoveryResults
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDiscoveryResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.results.get_discovery_results("some example string")
    # TODO: Handle 'response' of type DiscoveryResults
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDiscoveryResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bulk_id</code> | <code>str</code> | The Leadspace bulk identifier returned when the job was accepted |
| <code>request_options</code> | <code>[RequestOptionsOrDict](leadspace/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiscoveryResults](leadspace/models/discovery_results.py)</code> -- Request is done

**OnError**: <code>[ApiError](leadspace/core/exceptions.py)&#91;[GetDiscoveryResultsErrorBody](leadspace/errors/get_discovery_results_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](leadspace/core/results.py)</code> |
| 500 | <code>[Error](leadspace/models/error.py)</code> |
| anything unmapped | <code>[RawError](leadspace/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_intent_results(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> IntentResults</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.results.get_intent_results("some example string")
    # TODO: Handle 'response' of type IntentResults
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntentResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.results.get_intent_results("some example string")
    # TODO: Handle 'response' of type IntentResults
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntentResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>str</code> | The Leadspace bulk identifier returned when the job was accepted |
| <code>request_options</code> | <code>[RequestOptionsOrDict](leadspace/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntentResults](leadspace/models/intent_results.py)</code> -- Intent results

**OnError**: <code>[ApiError](leadspace/core/exceptions.py)&#91;[GetIntentResultsErrorBody](leadspace/errors/get_intent_results_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](leadspace/core/results.py)</code> |
| 500 | <code>[Error](leadspace/models/error.py)</code> |
| anything unmapped | <code>[RawError](leadspace/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

