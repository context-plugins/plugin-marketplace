# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [UnbounceClient](unbounce/client.py)

## Accounts

> Source: [Accounts](unbounce/apis/accounts.py)

<details>
<summary><code>def get_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Account</code></summary>

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
    response = client.accounts.get_account("some example string")
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts.get_account("some example string")
    # TODO: Handle 'response' of type Account
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountErrorBody
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

**OnSuccess**: <code>[Account](unbounce/models/account.py)</code> -- Account

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[GetAccountErrorBody](unbounce/errors/get_account_error.py)&#93;</code>

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
<summary><code>def get_sub_account(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SubAccount</code></summary>

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
    response = client.accounts.get_sub_account("some example string")
    # TODO: Handle 'response' of type SubAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.accounts.get_sub_account("some example string")
    # TODO: Handle 'response' of type SubAccount
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[SubAccount](unbounce/models/sub_account.py)</code> -- Sub-account

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_accounts(*, request_options: RequestOptionsOrDict | None = None) -> AccountCollection</code></summary>

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
    response = client.accounts.list_accounts()
    # TODO: Handle 'response' of type AccountCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.accounts.list_accounts()
    # TODO: Handle 'response' of type AccountCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAccountsErrorBody
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

**OnSuccess**: <code>[AccountCollection](unbounce/models/account_collection.py)</code> -- Account collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[ListAccountsErrorBody](unbounce/errors/list_accounts_error.py)&#93;</code>

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
<summary><code>def list_sub_accounts_for_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> AccountsSubAccountsResponse</code></summary>

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
    response = client.accounts.list_sub_accounts_for_account("some example string")
    # TODO: Handle 'response' of type AccountsSubAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.accounts.list_sub_accounts_for_account("some example string")
    # TODO: Handle 'response' of type AccountsSubAccountsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[AccountsSubAccountsResponse](unbounce/models/accounts_sub_accounts_response.py)</code> -- Sub-account collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Domains

> Source: [Domains](unbounce/apis/domains.py)

<details>
<summary><code>def get_domain(domain_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Domain</code></summary>

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
    response = client.domains.get_domain("some example string")
    # TODO: Handle 'response' of type Domain
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.domains.get_domain("some example string")
    # TODO: Handle 'response' of type Domain
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[Domain](unbounce/models/domain.py)</code> -- Domain

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_domains_for_sub_account(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SubAccountsDomainsResponse</code></summary>

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
    response = client.domains.list_domains_for_sub_account("some example string")
    # TODO: Handle 'response' of type SubAccountsDomainsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.domains.list_domains_for_sub_account("some example string")
    # TODO: Handle 'response' of type SubAccountsDomainsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[SubAccountsDomainsResponse](unbounce/models/sub_accounts_domains_response.py)</code> -- Domain collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Leads

> Source: [Leads](unbounce/apis/leads.py)

<details>
<summary><code>def get_lead(lead_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Lead</code></summary>

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
    response = client.leads.get_lead("some example string")
    # TODO: Handle 'response' of type Lead
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.leads.get_lead("some example string")
    # TODO: Handle 'response' of type Lead
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[Lead](unbounce/models/lead.py)</code> -- Lead

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_lead_deletion_request(page_id: str, lead_deletion_request_id: str, *, request_options: RequestOptionsOrDict | None = None) -> LeadDeletionRequest</code></summary>

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
    response = client.leads.get_lead_deletion_request("some example string", "some example string")
    # TODO: Handle 'response' of type LeadDeletionRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.leads.get_lead_deletion_request("some example string", "some example string")
    # TODO: Handle 'response' of type LeadDeletionRequest
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[LeadDeletionRequest](unbounce/models/lead_deletion_request.py)</code> -- Lead deletion request

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_lead_for_page(page_id: str, lead_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Lead</code></summary>

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
    response = client.leads.get_lead_for_page("some example string", "some example string")
    # TODO: Handle 'response' of type Lead
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.leads.get_lead_for_page("some example string", "some example string")
    # TODO: Handle 'response' of type Lead
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[Lead](unbounce/models/lead.py)</code> -- Lead

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_lead_deletion_requests(page_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PagesLeadDeletionRequestResponse</code></summary>

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
    response = client.leads.list_lead_deletion_requests("some example string")
    # TODO: Handle 'response' of type PagesLeadDeletionRequestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.leads.list_lead_deletion_requests("some example string")
    # TODO: Handle 'response' of type PagesLeadDeletionRequestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[PagesLeadDeletionRequestResponse](unbounce/models/pages_lead_deletion_request_response.py)</code> -- Lead deletion request collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_leads_for_page(page_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PagesLeadsResponse</code></summary>

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
    response = client.leads.list_leads_for_page("some example string")
    # TODO: Handle 'response' of type PagesLeadsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.leads.list_leads_for_page("some example string")
    # TODO: Handle 'response' of type PagesLeadsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[PagesLeadsResponse](unbounce/models/pages_leads_response.py)</code> -- Lead collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](unbounce/apis/meta.py)

<details>
<summary><code>def get_api_meta(*, request_options: RequestOptionsOrDict | None = None) -> Response</code></summary>

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
    response = client.meta.get_api_meta()
    # TODO: Handle 'response' of type Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.meta.get_api_meta()
    # TODO: Handle 'response' of type Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[Response](unbounce/models/response.py)</code> -- API metadata

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PageGroups

> Source: [PageGroups](unbounce/apis/page_groups.py)

<details>
<summary><code>def list_page_groups_for_sub_account(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> SubAccountsPageGroupsResponse</code></summary>

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
    response = client.page_groups.list_page_groups_for_sub_account("some example string")
    # TODO: Handle 'response' of type SubAccountsPageGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.page_groups.list_page_groups_for_sub_account("some example string")
    # TODO: Handle 'response' of type SubAccountsPageGroupsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[SubAccountsPageGroupsResponse](unbounce/models/sub_accounts_page_groups_response.py)</code> -- Page group collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pages_for_page_group(page_group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PageCollection</code></summary>

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
    response = client.page_groups.list_pages_for_page_group("some example string")
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.page_groups.list_pages_for_page_group("some example string")
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pages

> Source: [Pages](unbounce/apis/pages.py)

<details>
<summary><code>def get_page(page_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Page</code></summary>

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
    response = client.pages.get_page("some example string")
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pages.get_page("some example string")
    # TODO: Handle 'response' of type Page
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[Page](unbounce/models/page.py)</code> -- Page

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_account_pages(account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PageCollection</code></summary>

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
    response = client.pages.list_account_pages("some example string")
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pages.list_account_pages("some example string")
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_form_fields(page_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PagesFormFieldsResponse</code></summary>

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
    response = client.pages.list_form_fields("some example string")
    # TODO: Handle 'response' of type PagesFormFieldsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pages.list_form_fields("some example string")
    # TODO: Handle 'response' of type PagesFormFieldsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[PagesFormFieldsResponse](unbounce/models/pages_form_fields_response.py)</code> -- Form field collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pages(*, request_options: RequestOptionsOrDict | None = None) -> PageCollection</code></summary>

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
    response = client.pages.list_pages()
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pages.list_pages()
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pages_for_domain(domain_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PageCollection</code></summary>

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
    response = client.pages.list_pages_for_domain("some example string")
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pages.list_pages_for_domain("some example string")
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sub_account_pages(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> PageCollection</code></summary>

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
    response = client.pages.list_sub_account_pages("some example string")
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.pages.list_sub_account_pages("some example string")
    # TODO: Handle 'response' of type PageCollection
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[PageCollection](unbounce/models/page_collection.py)</code> -- Page collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](unbounce/apis/users.py)

<details>
<summary><code>def list_users(*, request_options: RequestOptionsOrDict | None = None) -> UsersResponse</code></summary>

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
    response = client.users.list_users()
    # TODO: Handle 'response' of type UsersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.users.list_users()
    # TODO: Handle 'response' of type UsersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[UsersResponse](unbounce/models/users_response.py)</code> -- User collection

**OnError**: <code>[ApiError](unbounce/core/exceptions.py)&#91;[RawError](unbounce/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

