# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [LeadspaceClient](leadspace/client.py)

## Authorization

> Source: [Authorization](leadspace/apis/authorization.py)

<details>
<summary><code>def create_authorization_token(body: AuthorizationRequest | AuthorizationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AuthorizationResponse, CreateAuthorizationTokenErrorBody]</code></summary>

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
result = client.authorization.with_raw_response.create_authorization_token(
    AuthorizationRequest(user="some example string", pass_="some example string", audience="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthorizationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAuthorizationTokenErrorBody
```

**Async**

```python
result = await async_client.authorization.with_raw_response.create_authorization_token(
    AuthorizationRequest(user="some example string", pass_="some example string", audience="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthorizationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateAuthorizationTokenErrorBody
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

**Returns**: <code>[ApiResult](leadspace/core/results.py)&#91;[AuthorizationResponse](leadspace/models/authorization_response.py), [CreateAuthorizationTokenErrorBody](leadspace/errors/create_authorization_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AuthorizationResponse](leadspace/models/authorization_response.py)</code> -- Token issued

**On `Failure`**: `error` is <code>[CreateAuthorizationTokenErrorBody](leadspace/errors/create_authorization_token_error.py)</code>

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
<summary><code>def refresh_authorization_token(body: RefreshRequest | RefreshRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AuthorizationResponse, RefreshAuthorizationTokenErrorBody]</code></summary>

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
result = client.authorization.with_raw_response.refresh_authorization_token(
    RefreshRequest(user="some example string", refresh_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthorizationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshAuthorizationTokenErrorBody
```

**Async**

```python
result = await async_client.authorization.with_raw_response.refresh_authorization_token(
    RefreshRequest(user="some example string", refresh_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthorizationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshAuthorizationTokenErrorBody
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

**Returns**: <code>[ApiResult](leadspace/core/results.py)&#91;[AuthorizationResponse](leadspace/models/authorization_response.py), [RefreshAuthorizationTokenErrorBody](leadspace/errors/refresh_authorization_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AuthorizationResponse](leadspace/models/authorization_response.py)</code> -- Token refreshed

**On `Failure`**: `error` is <code>[RefreshAuthorizationTokenErrorBody](leadspace/errors/refresh_authorization_token_error.py)</code>

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
<summary><code>def discover_company_contacts(body: DiscoveryRequest | DiscoveryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DiscoveryAccepted, DiscoverCompanyContactsErrorBody]</code></summary>

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
result = client.discovery.with_raw_response.discover_company_contacts(DiscoveryRequest(data=[DiscoveryItem()]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiscoveryAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DiscoverCompanyContactsErrorBody
```

**Async**

```python
result = await async_client.discovery.with_raw_response.discover_company_contacts(
    DiscoveryRequest(data=[DiscoveryItem()])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiscoveryAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DiscoverCompanyContactsErrorBody
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

**Returns**: <code>[ApiResult](leadspace/core/results.py)&#91;[DiscoveryAccepted](leadspace/models/discovery_accepted.py), [DiscoverCompanyContactsErrorBody](leadspace/errors/discover_company_contacts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DiscoveryAccepted](leadspace/models/discovery_accepted.py)</code> -- Bulk job successfully accepted

**On `Failure`**: `error` is <code>[DiscoverCompanyContactsErrorBody](leadspace/errors/discover_company_contacts_error.py)</code>

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
<summary><code>def enrich_bulk_records(body: BulkEnrichmentRequest | BulkEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkAccepted, EnrichBulkRecordsErrorBody]</code></summary>

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
result = client.enrichment.with_raw_response.enrich_bulk_records(
    BulkEnrichmentRequest(data=[SingleEnrichmentRequest()])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichBulkRecordsErrorBody
```

**Async**

```python
result = await async_client.enrichment.with_raw_response.enrich_bulk_records(
    BulkEnrichmentRequest(data=[SingleEnrichmentRequest()])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichBulkRecordsErrorBody
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

**Returns**: <code>[ApiResult](leadspace/core/results.py)&#91;[BulkAccepted](leadspace/models/bulk_accepted.py), [EnrichBulkRecordsErrorBody](leadspace/errors/enrich_bulk_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkAccepted](leadspace/models/bulk_accepted.py)</code> -- The bulk job was successfully accepted

**On `Failure`**: `error` is <code>[EnrichBulkRecordsErrorBody](leadspace/errors/enrich_bulk_records_error.py)</code>

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
<summary><code>def enrich_single_record(body: SingleEnrichmentRequest | SingleEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnrichmentResult, EnrichSingleRecordErrorBody]</code></summary>

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
result = client.enrichment.with_raw_response.enrich_single_record(SingleEnrichmentRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichmentResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichSingleRecordErrorBody
```

**Async**

```python
result = await async_client.enrichment.with_raw_response.enrich_single_record(SingleEnrichmentRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichmentResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichSingleRecordErrorBody
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

**Returns**: <code>[ApiResult](leadspace/core/results.py)&#91;[EnrichmentResult](leadspace/models/enrichment_result.py), [EnrichSingleRecordErrorBody](leadspace/errors/enrich_single_record_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnrichmentResult](leadspace/models/enrichment_result.py)</code> -- The enrichment request was successfully processed

**On `Failure`**: `error` is <code>[EnrichSingleRecordErrorBody](leadspace/errors/enrich_single_record_error.py)</code>

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
<summary><code>def score_company_intent(body: IntentRequest | IntentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IntentAccepted, ScoreCompanyIntentErrorBody]</code></summary>

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
result = client.intent.with_raw_response.score_company_intent(IntentRequest(data=[Datum()]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IntentAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ScoreCompanyIntentErrorBody
```

**Async**

```python
result = await async_client.intent.with_raw_response.score_company_intent(IntentRequest(data=[Datum()]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IntentAccepted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ScoreCompanyIntentErrorBody
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

**Returns**: <code>[ApiResult](leadspace/core/results.py)&#91;[IntentAccepted](leadspace/models/intent_accepted.py), [ScoreCompanyIntentErrorBody](leadspace/errors/score_company_intent_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IntentAccepted](leadspace/models/intent_accepted.py)</code> -- The bulk job has successfully been accepted

**On `Failure`**: `error` is <code>[ScoreCompanyIntentErrorBody](leadspace/errors/score_company_intent_error.py)</code>

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
<summary><code>def get_bulk_enrichment_results(bulk_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkResults, GetBulkEnrichmentResultsErrorBody]</code></summary>

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
result = client.results.with_raw_response.get_bulk_enrichment_results("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBulkEnrichmentResultsErrorBody
```

**Async**

```python
result = await async_client.results.with_raw_response.get_bulk_enrichment_results("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBulkEnrichmentResultsErrorBody
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

**Returns**: <code>[ApiResult](leadspace/core/results.py)&#91;[BulkResults](leadspace/models/bulk_results.py), [GetBulkEnrichmentResultsErrorBody](leadspace/errors/get_bulk_enrichment_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkResults](leadspace/models/bulk_results.py)</code> -- The request is done

**On `Failure`**: `error` is <code>[GetBulkEnrichmentResultsErrorBody](leadspace/errors/get_bulk_enrichment_results_error.py)</code>

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
<summary><code>def get_discovery_results(bulk_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DiscoveryResults, GetDiscoveryResultsErrorBody]</code></summary>

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
result = client.results.with_raw_response.get_discovery_results("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiscoveryResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDiscoveryResultsErrorBody
```

**Async**

```python
result = await async_client.results.with_raw_response.get_discovery_results("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DiscoveryResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDiscoveryResultsErrorBody
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

**Returns**: <code>[ApiResult](leadspace/core/results.py)&#91;[DiscoveryResults](leadspace/models/discovery_results.py), [GetDiscoveryResultsErrorBody](leadspace/errors/get_discovery_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DiscoveryResults](leadspace/models/discovery_results.py)</code> -- Request is done

**On `Failure`**: `error` is <code>[GetDiscoveryResultsErrorBody](leadspace/errors/get_discovery_results_error.py)</code>

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
<summary><code>def get_intent_results(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IntentResults, GetIntentResultsErrorBody]</code></summary>

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
result = client.results.with_raw_response.get_intent_results("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IntentResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIntentResultsErrorBody
```

**Async**

```python
result = await async_client.results.with_raw_response.get_intent_results("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IntentResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIntentResultsErrorBody
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

**Returns**: <code>[ApiResult](leadspace/core/results.py)&#91;[IntentResults](leadspace/models/intent_results.py), [GetIntentResultsErrorBody](leadspace/errors/get_intent_results_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IntentResults](leadspace/models/intent_results.py)</code> -- Intent results

**On `Failure`**: `error` is <code>[GetIntentResultsErrorBody](leadspace/errors/get_intent_results_error.py)</code>

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

