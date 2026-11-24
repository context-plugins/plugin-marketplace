# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [UnbounceClient](unbounce/client.py)

## Accounts

> Source: [Accounts](unbounce/apis/accounts.py)

<details>
<summary><code>def get_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Account, GetAccountErrorBody]</code></summary>

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
result = client.accounts.with_raw_response.get_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Account
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.get_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Account
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[Account](unbounce/models/account.py), [GetAccountErrorBody](unbounce/errors/get_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Account](unbounce/models/account.py)</code> -- Account

**On `Failure`**: `error` is <code>[GetAccountErrorBody](unbounce/errors/get_account_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[Error](unbounce/models/error.py)</code> |
| anything unmapped | <code>[RawError](unbounce/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sub_account(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SubAccount, RawError]</code></summary>

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
result = client.accounts.with_raw_response.get_sub_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.accounts.with_raw_response.get_sub_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubAccount
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[SubAccount](unbounce/models/sub_account.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SubAccount](unbounce/models/sub_account.py)</code> -- Sub-account

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_accounts(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountCollection, ListAccountsErrorBody]</code></summary>

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
result = client.accounts.with_raw_response.list_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAccountsErrorBody
```

**Async**

```python
result = await async_client.accounts.with_raw_response.list_accounts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[AccountCollection](unbounce/models/account_collection.py), [ListAccountsErrorBody](unbounce/errors/list_accounts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountCollection](unbounce/models/account_collection.py)</code> -- Account collection

**On `Failure`**: `error` is <code>[ListAccountsErrorBody](unbounce/errors/list_accounts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error](unbounce/models/error.py)</code> |
| anything unmapped | <code>[RawError](unbounce/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sub_accounts_for_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AccountsSubAccountsResponse, RawError]</code></summary>

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
result = client.accounts.with_raw_response.list_sub_accounts_for_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountsSubAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.accounts.with_raw_response.list_sub_accounts_for_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AccountsSubAccountsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[AccountsSubAccountsResponse](unbounce/models/accounts_sub_accounts_response.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[AccountsSubAccountsResponse](unbounce/models/accounts_sub_accounts_response.py)</code> -- Sub-account collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Domains

> Source: [Domains](unbounce/apis/domains.py)

<details>
<summary><code>def get_domain(domain_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Domain, RawError]</code></summary>

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
result = client.domains.with_raw_response.get_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Domain
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.domains.with_raw_response.get_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Domain
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[Domain](unbounce/models/domain.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Domain](unbounce/models/domain.py)</code> -- Domain

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_domains_for_sub_account(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SubAccountsDomainsResponse, RawError]</code></summary>

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
result = client.domains.with_raw_response.list_domains_for_sub_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubAccountsDomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.domains.with_raw_response.list_domains_for_sub_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubAccountsDomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[SubAccountsDomainsResponse](unbounce/models/sub_accounts_domains_response.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SubAccountsDomainsResponse](unbounce/models/sub_accounts_domains_response.py)</code> -- Domain collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Leads

> Source: [Leads](unbounce/apis/leads.py)

<details>
<summary><code>def get_lead(lead_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Lead, RawError]</code></summary>

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
result = client.leads.with_raw_response.get_lead("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Lead
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.leads.with_raw_response.get_lead("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Lead
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lead_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[Lead](unbounce/models/lead.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Lead](unbounce/models/lead.py)</code> -- Lead

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_lead_deletion_request(page_id: str, lead_deletion_request_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LeadDeletionRequest, RawError]</code></summary>

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
result = client.leads.with_raw_response.get_lead_deletion_request("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LeadDeletionRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.leads.with_raw_response.get_lead_deletion_request(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LeadDeletionRequest
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | Value sent with the request. |
| <code>lead_deletion_request_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[LeadDeletionRequest](unbounce/models/lead_deletion_request.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[LeadDeletionRequest](unbounce/models/lead_deletion_request.py)</code> -- Lead deletion request

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_lead_for_page(page_id: str, lead_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Lead, RawError]</code></summary>

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
result = client.leads.with_raw_response.get_lead_for_page("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Lead
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.leads.with_raw_response.get_lead_for_page("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Lead
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | Value sent with the request. |
| <code>lead_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[Lead](unbounce/models/lead.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Lead](unbounce/models/lead.py)</code> -- Lead

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_lead_deletion_requests(page_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PagesLeadDeletionRequestResponse, RawError]</code></summary>

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
result = client.leads.with_raw_response.list_lead_deletion_requests("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PagesLeadDeletionRequestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.leads.with_raw_response.list_lead_deletion_requests("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PagesLeadDeletionRequestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[PagesLeadDeletionRequestResponse](unbounce/models/pages_lead_deletion_request_response.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PagesLeadDeletionRequestResponse](unbounce/models/pages_lead_deletion_request_response.py)</code> -- Lead deletion request collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_leads_for_page(page_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PagesLeadsResponse, RawError]</code></summary>

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
result = client.leads.with_raw_response.list_leads_for_page("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PagesLeadsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.leads.with_raw_response.list_leads_for_page("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PagesLeadsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[PagesLeadsResponse](unbounce/models/pages_leads_response.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PagesLeadsResponse](unbounce/models/pages_leads_response.py)</code> -- Lead collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](unbounce/apis/meta.py)

<details>
<summary><code>def get_api_meta(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Response, RawError]</code></summary>

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
result = client.meta.with_raw_response.get_api_meta()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.meta.with_raw_response.get_api_meta()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[Response](unbounce/models/response.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Response](unbounce/models/response.py)</code> -- API metadata

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PageGroups

> Source: [PageGroups](unbounce/apis/page_groups.py)

<details>
<summary><code>def list_page_groups_for_sub_account(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SubAccountsPageGroupsResponse, RawError]</code></summary>

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
result = client.page_groups.with_raw_response.list_page_groups_for_sub_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubAccountsPageGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.page_groups.with_raw_response.list_page_groups_for_sub_account("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SubAccountsPageGroupsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[SubAccountsPageGroupsResponse](unbounce/models/sub_accounts_page_groups_response.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SubAccountsPageGroupsResponse](unbounce/models/sub_accounts_page_groups_response.py)</code> -- Page group collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pages_for_page_group(page_group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PageCollection, RawError]</code></summary>

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
result = client.page_groups.with_raw_response.list_pages_for_page_group("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.page_groups.with_raw_response.list_pages_for_page_group("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_group_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[PageCollection](unbounce/models/page_collection.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pages

> Source: [Pages](unbounce/apis/pages.py)

<details>
<summary><code>def get_page(page_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Page, RawError]</code></summary>

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
result = client.pages.with_raw_response.get_page("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Page
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pages.with_raw_response.get_page("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Page
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[Page](unbounce/models/page.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Page](unbounce/models/page.py)</code> -- Page

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_account_pages(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PageCollection, RawError]</code></summary>

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
result = client.pages.with_raw_response.list_account_pages("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pages.with_raw_response.list_account_pages("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>account_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[PageCollection](unbounce/models/page_collection.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_form_fields(page_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PagesFormFieldsResponse, RawError]</code></summary>

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
result = client.pages.with_raw_response.list_form_fields("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PagesFormFieldsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pages.with_raw_response.list_form_fields("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PagesFormFieldsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[PagesFormFieldsResponse](unbounce/models/pages_form_fields_response.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PagesFormFieldsResponse](unbounce/models/pages_form_fields_response.py)</code> -- Form field collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pages(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PageCollection, RawError]</code></summary>

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
result = client.pages.with_raw_response.list_pages()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pages.with_raw_response.list_pages()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[PageCollection](unbounce/models/page_collection.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pages_for_domain(domain_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PageCollection, RawError]</code></summary>

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
result = client.pages.with_raw_response.list_pages_for_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pages.with_raw_response.list_pages_for_domain("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[PageCollection](unbounce/models/page_collection.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sub_account_pages(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PageCollection, RawError]</code></summary>

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
result = client.pages.with_raw_response.list_sub_account_pages("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.pages.with_raw_response.list_sub_account_pages("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PageCollection
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sub_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[PageCollection](unbounce/models/page_collection.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](unbounce/apis/users.py)

<details>
<summary><code>def list_users(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersResponse, RawError]</code></summary>

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
result = client.users.with_raw_response.list_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.users.with_raw_response.list_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](unbounce/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](unbounce/core/results.py)&#91;[UsersResponse](unbounce/models/users_response.py), [RawError](unbounce/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsersResponse](unbounce/models/users_response.py)</code> -- User collection

**On `Failure`**: `error` is <code>[RawError](unbounce/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

