# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GoogleCloudTalentSolutionClient](google_cloud_talent_solution/client.py)

<details>
<summary><code>def jobs_projects_operations_get(projects_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, JobsProjectsOperationsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_operations_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsOperationsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_operations_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsOperationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>operations_id</code> | <code>str</code> | Resource name segment (operationsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Operation](google_cloud_talent_solution/models/operation.py), [JobsProjectsOperationsGetErrorBody](google_cloud_talent_solution/errors/jobs_projects_operations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_talent_solution/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsOperationsGetErrorBody](google_cloud_talent_solution/errors/jobs_projects_operations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_client_events_create(projects_id: str, tenants_id: str, body: ClientEvent | ClientEventDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ClientEvent, JobsProjectsTenantsClientEventsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in self service tools. Learn more about self service tools.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_client_events_create(
    "some example string", "some example string", ClientEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClientEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsClientEventsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_client_events_create(
    "some example string", "some example string", ClientEvent()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ClientEvent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsClientEventsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[ClientEvent](google_cloud_talent_solution/models/client_event.py) \| [ClientEventDict](google_cloud_talent_solution/models/client_event.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[ClientEvent](google_cloud_talent_solution/models/client_event.py), [JobsProjectsTenantsClientEventsCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_client_events_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ClientEvent](google_cloud_talent_solution/models/client_event.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsClientEventsCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_client_events_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_companies_create(projects_id: str, tenants_id: str, body: Company | CompanyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Company, JobsProjectsTenantsCompaniesCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new company entity.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_companies_create(
    "some example string", "some example string", Company()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_companies_create(
    "some example string", "some example string", Company()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[Company](google_cloud_talent_solution/models/company.py) \| [CompanyDict](google_cloud_talent_solution/models/company.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Company](google_cloud_talent_solution/models/company.py), [JobsProjectsTenantsCompaniesCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Company](google_cloud_talent_solution/models/company.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsCompaniesCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_companies_delete(projects_id: str, tenants_id: str, companies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, JobsProjectsTenantsCompaniesDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specified company. Prerequisite: The company has no jobs associated with it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_companies_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_companies_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>companies_id</code> | <code>str</code> | Resource name segment (companiesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;Any, [JobsProjectsTenantsCompaniesDeleteErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsCompaniesDeleteErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_companies_get(projects_id: str, tenants_id: str, companies_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Company, JobsProjectsTenantsCompaniesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_companies_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_companies_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>companies_id</code> | <code>str</code> | Resource name segment (companiesId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Company](google_cloud_talent_solution/models/company.py), [JobsProjectsTenantsCompaniesGetErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Company](google_cloud_talent_solution/models/company.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsCompaniesGetErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_companies_list(projects_id: str, tenants_id: str, *, page_size: int | None = None, page_token: str | None = None, require_open_jobs: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListCompaniesResponse, JobsProjectsTenantsCompaniesListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all companies associated with the project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_companies_list("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListCompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_companies_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListCompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The starting indicator from which to return results.<br>**Default**: <code>None</code> |
| <code>require_open_jobs</code> | <code>bool \| None</code> | Set to true if the companies requested must have open jobs. Defaults to false. If true, at most page_size of companies are fetched, among which only those with open jobs are returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[ListCompaniesResponse](google_cloud_talent_solution/models/list_companies_response.py), [JobsProjectsTenantsCompaniesListErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListCompaniesResponse](google_cloud_talent_solution/models/list_companies_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsCompaniesListErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_companies_patch(projects_id: str, tenants_id: str, companies_id: str, body: Company | CompanyDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Company, JobsProjectsTenantsCompaniesPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specified company.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_companies_patch(
    "some example string", "some example string", "some example string", Company()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_companies_patch(
    "some example string", "some example string", "some example string", Company()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompaniesPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>companies_id</code> | <code>str</code> | Resource name segment (companiesId). |
| <code>body</code> | <code>[Company](google_cloud_talent_solution/models/company.py) \| [CompanyDict](google_cloud_talent_solution/models/company.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify the company fields to be updated. Only top level fields of Company are supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Company](google_cloud_talent_solution/models/company.py), [JobsProjectsTenantsCompaniesPatchErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Company](google_cloud_talent_solution/models/company.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsCompaniesPatchErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_companies_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_complete_query(projects_id: str, tenants_id: str, *, company: str | None = None, language_codes: list[str] | None = None, page_size: int | None = None, query: str | None = None, scope: ScopeOrStr | None = None, type_: Type4OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompleteQueryResponse, JobsProjectsTenantsCompleteQueryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_complete_query("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompleteQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompleteQueryErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_complete_query(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompleteQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCompleteQueryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>company</code> | <code>str \| None</code> | If provided, restricts completion to specified company. The format is "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for example, "projects/foo/tenants/bar/companies/baz".<br>**Default**: <code>None</code> |
| <code>language_codes</code> | <code>list&#91;str&#93; \| None</code> | The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is 255.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Required. Completion result count. The maximum allowed page size is 10.<br>**Default**: <code>None</code> |
| <code>query</code> | <code>str \| None</code> | Required. The query used to generate suggestions. The maximum number of allowed characters is 255.<br>**Default**: <code>None</code> |
| <code>scope</code> | <code>[ScopeOrStr](google_cloud_talent_solution/models/enums/scope.py) \| None</code> | The scope of the completion. The defaults is CompletionScope.PUBLIC.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type4OrStr](google_cloud_talent_solution/models/enums/type4.py) \| None</code> | The completion topic. The default is CompletionType.COMBINED.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[CompleteQueryResponse](google_cloud_talent_solution/models/complete_query_response.py), [JobsProjectsTenantsCompleteQueryErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_complete_query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompleteQueryResponse](google_cloud_talent_solution/models/complete_query_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsCompleteQueryErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_complete_query_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_create(projects_id: str, body: Tenant | TenantDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Tenant, JobsProjectsTenantsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new tenant entity.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_create("some example string", Tenant())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Tenant
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_create("some example string", Tenant())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Tenant
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>body</code> | <code>[Tenant](google_cloud_talent_solution/models/tenant.py) \| [TenantDict](google_cloud_talent_solution/models/tenant.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Tenant](google_cloud_talent_solution/models/tenant.py), [JobsProjectsTenantsCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Tenant](google_cloud_talent_solution/models/tenant.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_delete(projects_id: str, tenants_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, JobsProjectsTenantsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes specified tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_delete("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_delete("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;Any, [JobsProjectsTenantsDeleteErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsDeleteErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_get(projects_id: str, tenants_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Tenant, JobsProjectsTenantsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves specified tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Tenant
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Tenant
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Tenant](google_cloud_talent_solution/models/tenant.py), [JobsProjectsTenantsGetErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Tenant](google_cloud_talent_solution/models/tenant.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsGetErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_batch_create(projects_id: str, tenants_id: str, body: BatchCreateJobsRequest | BatchCreateJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, JobsProjectsTenantsJobsBatchCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins executing a batch create jobs operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_batch_create(
    "some example string", "some example string", BatchCreateJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsBatchCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_batch_create(
    "some example string", "some example string", BatchCreateJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsBatchCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[BatchCreateJobsRequest](google_cloud_talent_solution/models/batch_create_jobs_request.py) \| [BatchCreateJobsRequestDict](google_cloud_talent_solution/models/batch_create_jobs_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Operation](google_cloud_talent_solution/models/operation.py), [JobsProjectsTenantsJobsBatchCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_batch_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_talent_solution/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsBatchCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_batch_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_batch_delete(projects_id: str, tenants_id: str, body: BatchDeleteJobsRequest | BatchDeleteJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, JobsProjectsTenantsJobsBatchDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins executing a batch delete jobs operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_batch_delete(
    "some example string", "some example string", BatchDeleteJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsBatchDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_batch_delete(
    "some example string", "some example string", BatchDeleteJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsBatchDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[BatchDeleteJobsRequest](google_cloud_talent_solution/models/batch_delete_jobs_request.py) \| [BatchDeleteJobsRequestDict](google_cloud_talent_solution/models/batch_delete_jobs_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Operation](google_cloud_talent_solution/models/operation.py), [JobsProjectsTenantsJobsBatchDeleteErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_batch_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_talent_solution/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsBatchDeleteErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_batch_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_batch_update(projects_id: str, tenants_id: str, body: BatchUpdateJobsRequest | BatchUpdateJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Operation, JobsProjectsTenantsJobsBatchUpdateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Begins executing a batch update jobs operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_batch_update(
    "some example string", "some example string", BatchUpdateJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsBatchUpdateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_batch_update(
    "some example string", "some example string", BatchUpdateJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Operation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsBatchUpdateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[BatchUpdateJobsRequest](google_cloud_talent_solution/models/batch_update_jobs_request.py) \| [BatchUpdateJobsRequestDict](google_cloud_talent_solution/models/batch_update_jobs_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Operation](google_cloud_talent_solution/models/operation.py), [JobsProjectsTenantsJobsBatchUpdateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_batch_update_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Operation](google_cloud_talent_solution/models/operation.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsBatchUpdateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_batch_update_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_create(projects_id: str, tenants_id: str, body: Job | JobDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Job, JobsProjectsTenantsJobsCreateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_create("some example string", "some example string", Job())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsCreateErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_create(
    "some example string", "some example string", Job()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsCreateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[Job](google_cloud_talent_solution/models/job.py) \| [JobDict](google_cloud_talent_solution/models/job.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Job](google_cloud_talent_solution/models/job.py), [JobsProjectsTenantsJobsCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_create_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Job](google_cloud_talent_solution/models/job.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsCreateErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_create_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_delete(projects_id: str, tenants_id: str, jobs_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, JobsProjectsTenantsJobsDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsDeleteErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_delete(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>jobs_id</code> | <code>str</code> | Resource name segment (jobsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;Any, [JobsProjectsTenantsJobsDeleteErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsDeleteErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_get(projects_id: str, tenants_id: str, jobs_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Job, JobsProjectsTenantsJobsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsGetErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_get(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>jobs_id</code> | <code>str</code> | Resource name segment (jobsId). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Job](google_cloud_talent_solution/models/job.py), [JobsProjectsTenantsJobsGetErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Job](google_cloud_talent_solution/models/job.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsGetErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_list(projects_id: str, tenants_id: str, *, filter_: str | None = None, job_view: JobView1OrStr | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListJobsResponse, JobsProjectsTenantsJobsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists jobs by filter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_list("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_list(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>filter_</code> | <code>str \| None</code> | Required. The filter string specifies the jobs to be enumerated. Supported operator: =, AND The fields eligible for filtering are: * `companyName` * `requisitionId` * `status` Available values: OPEN, EXPIRED, ALL. Defaults to OPEN if no value is specified. At least one of `companyName` and `requisitionId` must present or an INVALID_ARGUMENT error is thrown. Sample Query: * companyName = "projects/foo/tenants/bar/companies/baz" * companyName = "projects/foo/tenants/bar/companies/baz" AND requisitionId = "req-1" * companyName = "projects/foo/tenants/bar/companies/baz" AND status = "EXPIRED" * requisitionId = "req-1" * requisitionId = "req-1" AND status = "EXPIRED"<br>**Default**: <code>None</code> |
| <code>job_view</code> | <code>[JobView1OrStr](google_cloud_talent_solution/models/enums/job_view1.py) \| None</code> | The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_FULL if no value is specified.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of jobs to be returned per page of results. If job_view is set to JobView.JOB_VIEW_ID_ONLY, the maximum allowed page size is 1000. Otherwise, the maximum allowed page size is 100. Default is 100 if empty or a number < 1 is specified.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The starting point of a query result.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[ListJobsResponse](google_cloud_talent_solution/models/list_jobs_response.py), [JobsProjectsTenantsJobsListErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListJobsResponse](google_cloud_talent_solution/models/list_jobs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsListErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_patch(projects_id: str, tenants_id: str, jobs_id: str, body: Job | JobDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Job, JobsProjectsTenantsJobsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_patch(
    "some example string", "some example string", "some example string", Job()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_patch(
    "some example string", "some example string", "some example string", Job()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>jobs_id</code> | <code>str</code> | Resource name segment (jobsId). |
| <code>body</code> | <code>[Job](google_cloud_talent_solution/models/job.py) \| [JobDict](google_cloud_talent_solution/models/job.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Job](google_cloud_talent_solution/models/job.py), [JobsProjectsTenantsJobsPatchErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Job](google_cloud_talent_solution/models/job.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsPatchErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_search(projects_id: str, tenants_id: str, body: SearchJobsRequest | SearchJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchJobsResponse, JobsProjectsTenantsJobsSearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_search(
    "some example string", "some example string", SearchJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsSearchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_search(
    "some example string", "some example string", SearchJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[SearchJobsRequest](google_cloud_talent_solution/models/search_jobs_request.py) \| [SearchJobsRequestDict](google_cloud_talent_solution/models/search_jobs_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[SearchJobsResponse](google_cloud_talent_solution/models/search_jobs_response.py), [JobsProjectsTenantsJobsSearchErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchJobsResponse](google_cloud_talent_solution/models/search_jobs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsSearchErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_jobs_search_for_alert(projects_id: str, tenants_id: str, body: SearchJobsRequest | SearchJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchJobsResponse, JobsProjectsTenantsJobsSearchForAlertErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_jobs_search_for_alert(
    "some example string", "some example string", SearchJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsSearchForAlertErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_jobs_search_for_alert(
    "some example string", "some example string", SearchJobsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsJobsSearchForAlertErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[SearchJobsRequest](google_cloud_talent_solution/models/search_jobs_request.py) \| [SearchJobsRequestDict](google_cloud_talent_solution/models/search_jobs_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[SearchJobsResponse](google_cloud_talent_solution/models/search_jobs_response.py), [JobsProjectsTenantsJobsSearchForAlertErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_search_for_alert_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchJobsResponse](google_cloud_talent_solution/models/search_jobs_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsJobsSearchForAlertErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_search_for_alert_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_list(projects_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListTenantsResponse, JobsProjectsTenantsListErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all tenants associated with the project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTenantsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsListErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTenantsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>page_size</code> | <code>int \| None</code> | The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive number is provided.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The starting indicator from which to return results.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[ListTenantsResponse](google_cloud_talent_solution/models/list_tenants_response.py), [JobsProjectsTenantsListErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListTenantsResponse](google_cloud_talent_solution/models/list_tenants_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsListErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_list_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobs_projects_tenants_patch(projects_id: str, tenants_id: str, body: Tenant | TenantDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Tenant, JobsProjectsTenantsPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specified tenant.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.jobs_projects_tenants_patch("some example string", "some example string", Tenant())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Tenant
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsPatchErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.jobs_projects_tenants_patch(
    "some example string", "some example string", Tenant()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Tenant
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsProjectsTenantsPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projects_id</code> | <code>str</code> | Resource name segment (projectsId). |
| <code>tenants_id</code> | <code>str</code> | Resource name segment (tenantsId). |
| <code>body</code> | <code>[Tenant](google_cloud_talent_solution/models/tenant.py) \| [TenantDict](google_cloud_talent_solution/models/tenant.py)</code> | The request body. |
| <code>update_mask</code> | <code>str \| None</code> | Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in tenant are updated. Otherwise all the fields are updated. A field mask to specify the tenant fields to be updated. Only top level fields of Tenant are supported.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_cloud_talent_solution/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](google_cloud_talent_solution/core/results.py)&#91;[Tenant](google_cloud_talent_solution/models/tenant.py), [JobsProjectsTenantsPatchErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Tenant](google_cloud_talent_solution/models/tenant.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[JobsProjectsTenantsPatchErrorBody](google_cloud_talent_solution/errors/jobs_projects_tenants_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_cloud_talent_solution/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_cloud_talent_solution/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

