# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [LushaClient](lusha/client.py)

## Account

> Source: [Account](lusha/apis/account.py)

<details>
<summary><code>def get_account_usage(*, request_options: RequestOptionsOrDict | None = None) -> AccountUsageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a full snapshot of your account status:
- **Credits** — total, used, and remaining for the current billing cycle
- **Rate limits** — current usage and reset times for daily, hourly, and per-minute windows
- **Plan** — your current plan category and renewal dates
- **Pricing** — credit cost per action type across all public API endpoints

> **Rate limit:** This endpoint is limited to 5 requests per minute.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account.get_account_usage()
    # TODO: Handle 'response' of type AccountUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.account.get_account_usage()
    # TODO: Handle 'response' of type AccountUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountUsageResponse](lusha/models/account_usage_response.py)</code> -- Successfully retrieved account usage

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetAccountUsageErrorBody](lusha/errors/get_account_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AccountManagement

> Source: [AccountManagement](lusha/apis/account_management.py)

<details>
<summary><code>def get_account_usage_stats(*, request_options: RequestOptionsOrDict | None = None) -> AccountUsageStatsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your current API credit usage statistics including used, remaining, and total credits.

*Endpoint*: **(GET) https://api.lusha.com/account/usage**

**Rate Limits**: This endpoint has a specific rate limit of 5 requests per minute.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account_management.get_account_usage_stats()
    # TODO: Handle 'response' of type AccountUsageStatsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountUsageStatsErrorBody
```

**Async**

```python
try:
    response = await async_client.account_management.get_account_usage_stats()
    # TODO: Handle 'response' of type AccountUsageStatsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountUsageStatsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountUsageStatsResponse](lusha/models/account_usage_stats_response.py)</code> -- Account usage statistics retrieved successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetAccountUsageStatsErrorBody](lusha/errors/get_account_usage_stats_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BuyingGroup

> Source: [BuyingGroup](lusha/apis/buying_group.py)

<details>
<summary><code>def get_contacts_buying_group(body: V3BuyingGroupRequest | V3BuyingGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3BuyingGroupResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Identify the buying group within a set of target companies. Supply companies by `domain` or Lusha company `id` - the model scores and labels each returned contact with a persona role.

**Personas:**
- `decision_maker` — has budget or sign-off authority
- `potential_champion` — likely internal advocate for the purchase
- `end_user` — likely day-to-day user of the product

Pass `personas` to filter to specific roles, or omit it to get all three. Use `contactsLimit` to cap how many contacts are returned per company (default 60).

Results are lightweight previews grouped by company. Each contact includes a `has` field listing available data points, a `canReveal` field showing what can be unlocked via Enrich, a `roles` array with the assigned persona(s), and a `score` (0-1) reflecting relevance to the assigned role.

Use Enrich Contacts with the returned contact `id` to reveal emails and phones.

> **Billing:** Charged per contact returned via the `buyingGroupContact` action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.buying_group.get_contacts_buying_group(
        V3BuyingGroupRequest(
            companies=[
                V3BuyingGroupCompanyItem(client_reference_id="comp-ref-1", domain="acme.com"),
                V3BuyingGroupCompanyItem(client_reference_id="comp-ref-2", id="v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345"),
            ],
            personas=[Persona.DECISION_MAKER, Persona.POTENTIAL_CHAMPION],
            contacts_limit=20,
        ),
    )
    # TODO: Handle 'response' of type V3BuyingGroupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactsBuyingGroupErrorBody
```

**Async**

```python
try:
    response = await async_client.buying_group.get_contacts_buying_group(
        V3BuyingGroupRequest(
            companies=[
                V3BuyingGroupCompanyItem(client_reference_id="comp-ref-1", domain="acme.com"),
                V3BuyingGroupCompanyItem(client_reference_id="comp-ref-2", id="v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345"),
            ],
            personas=[Persona.DECISION_MAKER, Persona.POTENTIAL_CHAMPION],
            contacts_limit=20,
        ),
    )
    # TODO: Handle 'response' of type V3BuyingGroupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactsBuyingGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3BuyingGroupRequest](lusha/models/v3_buying_group_request.py) \| [V3BuyingGroupRequestDict](lusha/models/v3_buying_group_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3BuyingGroupResponse](lusha/models/v3_buying_group_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactsBuyingGroupErrorBody](lusha/errors/get_contacts_buying_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CompaniesTables

> Source: [CompaniesTables](lusha/apis/companies_tables.py)

<details>
<summary><code>def add_companies_table_entities(table_id: str, body: EntitiesAddRequest | EntitiesAddRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EntitiesAddResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add up to 500 company IDs to an existing table. `entityIds` accepts either the encrypted Lusha token (`v{N}.…`, as returned by Search/Enrich/Get Entities) or the legacy numeric `lushaCompanyId` — an ID that's neither returns `400`. Already-present IDs are reported as `alreadyPresent` and not re-added; unresolvable IDs are not an error, they come back in `invalidIds` with a `200`.

> **Billing:** Charges `reveal_company` per newly-added company, deduped via row-count delta — duplicates and already-present companies aren't charged again.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.add_companies_table_entities(
        "482910", EntitiesAddRequest(entity_ids=["30058211", "30058212"], owner=TableOwner(email="user@example.com"))
    )
    # TODO: Handle 'response' of type EntitiesAddResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddCompaniesTableEntitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.add_companies_table_entities(
        "482910", EntitiesAddRequest(entity_ids=["30058211", "30058212"], owner=TableOwner(email="user@example.com"))
    )
    # TODO: Handle 'response' of type EntitiesAddResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddCompaniesTableEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>body</code> | <code>[EntitiesAddRequest](lusha/models/entities_add_request.py) \| [EntitiesAddRequestDict](lusha/models/entities_add_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesAddResponse](lusha/models/entities_add_response.py)</code> -- Entities added

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[AddCompaniesTableEntitiesErrorBody](lusha/errors/add_companies_table_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_companies_table(body: TableCreateRequest | TableCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new, empty companies table, optionally seeded with an initial list of company IDs.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.create_companies_table(
        TableCreateRequest(
            name="postman-companies", visibility=Visibility.PRIVATE, owner=TableOwner(email="user@example.com")
        ),
    )
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCompaniesTableErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.create_companies_table(
        TableCreateRequest(
            name="postman-companies", visibility=Visibility.PRIVATE, owner=TableOwner(email="user@example.com")
        ),
    )
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCompaniesTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TableCreateRequest](lusha/models/table_create_request.py) \| [TableCreateRequestDict](lusha/models/table_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](lusha/models/table_response.py)</code> -- Table created

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[CreateCompaniesTableErrorBody](lusha/errors/create_companies_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_companies_table(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> V3CompaniesTablesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a table and all its data. This cannot be undone.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.delete_companies_table("482910", email="user@example.com")
    # TODO: Handle 'response' of type V3CompaniesTablesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCompaniesTableErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.delete_companies_table("482910", email="user@example.com")
    # TODO: Handle 'response' of type V3CompaniesTablesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCompaniesTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesTablesResponse](lusha/models/v3_companies_tables_response.py)</code> -- Table deleted

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[DeleteCompaniesTableErrorBody](lusha/errors/delete_companies_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_table(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> TableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a table's metadata and current processing status.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.get_companies_table("482910", email="user@example.com")
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompaniesTableErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.get_companies_table("482910", email="user@example.com")
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompaniesTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](lusha/models/table_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompaniesTableErrorBody](lusha/errors/get_companies_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_table_entities(table_id: str, *, email: EmailStr | None = None, page: int | None = 0, size: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> EntitiesGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read a page of rows in the table, with all column values and per-cell status.

> **Billing:** Charged per row returned via `export_api`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.get_companies_table_entities("482910", email="user@example.com")
    # TODO: Handle 'response' of type EntitiesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompaniesTableEntitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.get_companies_table_entities("482910", email="user@example.com")
    # TODO: Handle 'response' of type EntitiesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompaniesTableEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesGetResponse](lusha/models/entities_get_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompaniesTableEntitiesErrorBody](lusha/errors/get_companies_table_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_companies_table_columns(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ColumnsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the columns on a table, with type and aggregated per-cell status counts.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.list_companies_table_columns("482910", email="user@example.com")
    # TODO: Handle 'response' of type ColumnsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCompaniesTableColumnsErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.list_companies_table_columns("482910", email="user@example.com")
    # TODO: Handle 'response' of type ColumnsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCompaniesTableColumnsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ColumnsListResponse](lusha/models/columns_list_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[ListCompaniesTableColumnsErrorBody](lusha/errors/list_companies_table_columns_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_companies_tables(body: TableListRequest | TableListRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TableListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List companies tables owned by the given user, plus any tables shared with the account.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.list_companies_tables(
        TableListRequest(owner=TableOwner(email="user@example.com"), page=0, size=10, status=Status1.ACTIVE)
    )
    # TODO: Handle 'response' of type TableListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCompaniesTablesErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.list_companies_tables(
        TableListRequest(owner=TableOwner(email="user@example.com"), page=0, size=10, status=Status1.ACTIVE)
    )
    # TODO: Handle 'response' of type TableListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCompaniesTablesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TableListRequest](lusha/models/table_list_request.py) \| [TableListRequestDict](lusha/models/table_list_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableListResponse](lusha/models/table_list_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[ListCompaniesTablesErrorBody](lusha/errors/list_companies_tables_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_companies_table_column(table_id: str, column_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> V3CompaniesTablesColumnsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.remove_companies_table_column(
        "482910", "col_signals_funding", email="user@example.com"
    )
    # TODO: Handle 'response' of type V3CompaniesTablesColumnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveCompaniesTableColumnErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.remove_companies_table_column(
        "482910", "col_signals_funding", email="user@example.com"
    )
    # TODO: Handle 'response' of type V3CompaniesTablesColumnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveCompaniesTableColumnErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>column_id</code> | <code>str</code> | The column's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesTablesColumnsResponse](lusha/models/v3_companies_tables_columns_response.py)</code> -- Column removed

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[RemoveCompaniesTableColumnErrorBody](lusha/errors/remove_companies_table_column_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_companies_table_entities(table_id: str, body: EntitiesRemoveRequest | EntitiesRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EntitiesRemoveResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove specific company IDs from a table.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.remove_companies_table_entities(
        "482910", EntitiesRemoveRequest(entity_ids=["10117615"], owner=TableOwner(email="user@example.com"))
    )
    # TODO: Handle 'response' of type EntitiesRemoveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveCompaniesTableEntitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.remove_companies_table_entities(
        "482910", EntitiesRemoveRequest(entity_ids=["10117615"], owner=TableOwner(email="user@example.com"))
    )
    # TODO: Handle 'response' of type EntitiesRemoveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveCompaniesTableEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>body</code> | <code>[EntitiesRemoveRequest](lusha/models/entities_remove_request.py) \| [EntitiesRemoveRequestDict](lusha/models/entities_remove_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesRemoveResponse](lusha/models/entities_remove_response.py)</code> -- Entities removed

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[RemoveCompaniesTableEntitiesErrorBody](lusha/errors/remove_companies_table_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_companies_table_column(table_id: str, column_id: str, body: ColumnsRunRequest | ColumnsRunRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ColumnsRunResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call returns immediately with `status: "processing"`; poll Get Companies Table for `isProcessing` and per-column row-status counts to know when it's done, then read the values via Get Companies Table Entities.

**`runScope` values:**
- `all` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
- `missing` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
- `specific` — only the `entityIds` you pass. Also how you implement "run for this page" — fetch the page via Get Companies Table Entities, then pass those IDs here.

> **Billing:** Charged per row processed, per the column's credit tier. Company enrichment charges once per company per table — re-runs on an already-paid company in the same table are free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.run_companies_table_column(
        "482910",
        "col_signals_funding",
        ColumnsRunRequest(run_scope=RunScope.MISSING, owner=TableOwner(email="user@example.com")),
    )
    # TODO: Handle 'response' of type ColumnsRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunCompaniesTableColumnErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.run_companies_table_column(
        "482910",
        "col_signals_funding",
        ColumnsRunRequest(run_scope=RunScope.MISSING, owner=TableOwner(email="user@example.com")),
    )
    # TODO: Handle 'response' of type ColumnsRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunCompaniesTableColumnErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>column_id</code> | <code>str</code> | The column's ID. |
| <code>body</code> | <code>[ColumnsRunRequest](lusha/models/columns_run_request.py) \| [ColumnsRunRequestDict](lusha/models/columns_run_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ColumnsRunResponse](lusha/models/columns_run_response.py)</code> -- Column run started

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[RunCompaniesTableColumnErrorBody](lusha/errors/run_companies_table_column_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_companies_table(table_id: str, body: TableUpdateRequest | TableUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a table, change its visibility, or reassign its owner. All fields except `owner` are optional — send only what changes.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.companies_tables.update_companies_table(
        "482910",
        TableUpdateRequest(
            name="postman-renamed", visibility=Visibility.SHARED, owner=TableOwner(email="user@example.com")
        ),
    )
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCompaniesTableErrorBody
```

**Async**

```python
try:
    response = await async_client.companies_tables.update_companies_table(
        "482910",
        TableUpdateRequest(
            name="postman-renamed", visibility=Visibility.SHARED, owner=TableOwner(email="user@example.com")
        ),
    )
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCompaniesTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>body</code> | <code>[TableUpdateRequest](lusha/models/table_update_request.py) \| [TableUpdateRequestDict](lusha/models/table_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](lusha/models/table_response.py)</code> -- Table updated

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[UpdateCompaniesTableErrorBody](lusha/errors/update_companies_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CompanyFiltersApi

> Source: [CompanyFiltersApi](lusha/apis/company_filters_api.py)

<details>
<summary><code>def get_company_industries(*, request_options: RequestOptionsOrDict | None = None) -> list[IndustryLabel]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available industries for company filtering

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.company_filters_api.get_company_industries()
    # TODO: Handle 'response' of type list[IndustryLabel]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyIndustriesErrorBody
```

**Async**

```python
try:
    response = await async_client.company_filters_api.get_company_industries()
    # TODO: Handle 'response' of type list[IndustryLabel]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyIndustriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[IndustryLabel](lusha/models/industry_label.py)&#93;</code> -- Industry hierarchy

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanyIndustriesErrorBody](lusha/errors/get_company_industries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_intent_topics(*, request_options: RequestOptionsOrDict | None = None) -> list[str]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available intent topics

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.company_filters_api.get_company_intent_topics()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyIntentTopicsErrorBody
```

**Async**

```python
try:
    response = await async_client.company_filters_api.get_company_intent_topics()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyIntentTopicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;str&#93;</code> -- Intent topics

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanyIntentTopicsErrorBody](lusha/errors/get_company_intent_topics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_naics_codes(*, request_options: RequestOptionsOrDict | None = None) -> list[NaicsCode]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available NAICS codes

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.company_filters_api.get_company_naics_codes()
    # TODO: Handle 'response' of type list[NaicsCode]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyNaicsCodesErrorBody
```

**Async**

```python
try:
    response = await async_client.company_filters_api.get_company_naics_codes()
    # TODO: Handle 'response' of type list[NaicsCode]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyNaicsCodesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[NaicsCode](lusha/models/naics_code.py)&#93;</code> -- NAICS codes

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanyNaicsCodesErrorBody](lusha/errors/get_company_naics_codes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_revenues(*, request_options: RequestOptionsOrDict | None = None) -> list[RevenueRange]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available revenue ranges

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.company_filters_api.get_company_revenues()
    # TODO: Handle 'response' of type list[RevenueRange]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyRevenuesErrorBody
```

**Async**

```python
try:
    response = await async_client.company_filters_api.get_company_revenues()
    # TODO: Handle 'response' of type list[RevenueRange]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyRevenuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[RevenueRange](lusha/models/revenue_range.py)&#93;</code> -- Revenue ranges

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanyRevenuesErrorBody](lusha/errors/get_company_revenues_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_sic_codes(*, request_options: RequestOptionsOrDict | None = None) -> list[SicCode]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available SIC codes

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.company_filters_api.get_company_sic_codes()
    # TODO: Handle 'response' of type list[SicCode]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySicCodesErrorBody
```

**Async**

```python
try:
    response = await async_client.company_filters_api.get_company_sic_codes()
    # TODO: Handle 'response' of type list[SicCode]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySicCodesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[SicCode](lusha/models/sic_code.py)&#93;</code> -- SIC codes

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanySicCodesErrorBody](lusha/errors/get_company_sic_codes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_sizes(*, request_options: RequestOptionsOrDict | None = None) -> list[CompanySizeRange]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available company size ranges

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.company_filters_api.get_company_sizes()
    # TODO: Handle 'response' of type list[CompanySizeRange]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySizesErrorBody
```

**Async**

```python
try:
    response = await async_client.company_filters_api.get_company_sizes()
    # TODO: Handle 'response' of type list[CompanySizeRange]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySizesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[CompanySizeRange](lusha/models/company_size_range.py)&#93;</code> -- Company size ranges

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanySizesErrorBody](lusha/errors/get_company_sizes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_company_locations(body: LocationSearchRequest | LocationSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[CompanyLocationFilter]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for company locations by text

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.company_filters_api.search_company_locations(LocationSearchRequest(text="Israel"))
    # TODO: Handle 'response' of type list[CompanyLocationFilter]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompanyLocationsErrorBody
```

**Async**

```python
try:
    response = await async_client.company_filters_api.search_company_locations(LocationSearchRequest(text="Israel"))
    # TODO: Handle 'response' of type list[CompanyLocationFilter]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompanyLocationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LocationSearchRequest](lusha/models/location_search_request.py) \| [LocationSearchRequestDict](lusha/models/location_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[CompanyLocationFilter](lusha/models/company_location_filter.py)&#93;</code> -- Matching locations

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchCompanyLocationsErrorBody](lusha/errors/search_company_locations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_company_names(body: CompanyNameSearchRequest | CompanyNameSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[CompanyNameResult]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for company names by text

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.company_filters_api.search_company_names(CompanyNameSearchRequest(text="lusha"))
    # TODO: Handle 'response' of type list[CompanyNameResult]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompanyNamesErrorBody
```

**Async**

```python
try:
    response = await async_client.company_filters_api.search_company_names(CompanyNameSearchRequest(text="lusha"))
    # TODO: Handle 'response' of type list[CompanyNameResult]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompanyNamesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanyNameSearchRequest](lusha/models/company_name_search_request.py) \| [CompanyNameSearchRequestDict](lusha/models/company_name_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[CompanyNameResult](lusha/models/company_name_result.py)&#93;</code> -- Matching companies

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchCompanyNamesErrorBody](lusha/errors/search_company_names_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_company_technologies(body: TechnologySearchRequest | TechnologySearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[Technology]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for technologies by text

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.company_filters_api.search_company_technologies(TechnologySearchRequest(text="rss"))
    # TODO: Handle 'response' of type list[Technology]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompanyTechnologiesErrorBody
```

**Async**

```python
try:
    response = await async_client.company_filters_api.search_company_technologies(TechnologySearchRequest(text="rss"))
    # TODO: Handle 'response' of type list[Technology]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompanyTechnologiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TechnologySearchRequest](lusha/models/technology_search_request.py) \| [TechnologySearchRequestDict](lusha/models/technology_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Technology](lusha/models/technology.py)&#93;</code> -- Matching technologies

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchCompanyTechnologiesErrorBody](lusha/errors/search_company_technologies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ContactFiltersApi

> Source: [ContactFiltersApi](lusha/apis/contact_filters_api.py)

<details>
<summary><code>def get_contact_countries(*, request_options: RequestOptionsOrDict | None = None) -> list[CountryFilter]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of all available countries for contact filtering

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contact_filters_api.get_contact_countries()
    # TODO: Handle 'response' of type list[CountryFilter]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactCountriesErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_filters_api.get_contact_countries()
    # TODO: Handle 'response' of type list[CountryFilter]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactCountriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[CountryFilter](lusha/models/country_filter.py)&#93;</code> -- List of countries with codes

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactCountriesErrorBody](lusha/errors/get_contact_countries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_data_points(*, request_options: RequestOptionsOrDict | None = None) -> list[str]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available data points for contact filtering

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contact_filters_api.get_contact_data_points()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactDataPointsErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_filters_api.get_contact_data_points()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactDataPointsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;str&#93;</code> -- List of data points

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactDataPointsErrorBody](lusha/errors/get_contact_data_points_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_departments(*, request_options: RequestOptionsOrDict | None = None) -> list[str]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available departments for contact filtering

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contact_filters_api.get_contact_departments()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactDepartmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_filters_api.get_contact_departments()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactDepartmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;str&#93;</code> -- List of departments

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactDepartmentsErrorBody](lusha/errors/get_contact_departments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_seniority(*, request_options: RequestOptionsOrDict | None = None) -> list[str]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available seniority levels for contact filtering

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contact_filters_api.get_contact_seniority()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSeniorityErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_filters_api.get_contact_seniority()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSeniorityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;str&#93;</code> -- List of seniority levels

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactSeniorityErrorBody](lusha/errors/get_contact_seniority_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_contact_locations(body: LocationSearchRequest | LocationSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[LocationFilter]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for locations by text for contact filtering

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contact_filters_api.search_contact_locations(LocationSearchRequest(text="un"))
    # TODO: Handle 'response' of type list[LocationFilter]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchContactLocationsErrorBody
```

**Async**

```python
try:
    response = await async_client.contact_filters_api.search_contact_locations(LocationSearchRequest(text="un"))
    # TODO: Handle 'response' of type list[LocationFilter]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchContactLocationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LocationSearchRequest](lusha/models/location_search_request.py) \| [LocationSearchRequestDict](lusha/models/location_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[LocationFilter](lusha/models/location_filter.py)&#93;</code> -- Matching locations

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchContactLocationsErrorBody](lusha/errors/search_contact_locations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ContactsTables

> Source: [ContactsTables](lusha/apis/contacts_tables.py)

<details>
<summary><code>def add_contacts_table_entities(table_id: str, body: EntitiesAddRequest | EntitiesAddRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EntitiesAddResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add up to 500 contact IDs to an existing table. `entityIds` accepts either the encrypted Lusha token (`v{N}.…`, as returned by Search/Enrich/Get Entities) or the legacy numeric `personId` — an ID that's neither returns `400`. Already-present IDs are reported as `alreadyPresent` and not re-added; unresolvable IDs are not an error, they come back in `invalidIds` with a `200`.

Optionally pass `companyIds` — one `lushaCompanyId` per contact, index-aligned with `entityIds` — to help pair company-level enrichment to the right company for each contact.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.add_contacts_table_entities(
        "482910",
        EntitiesAddRequest(
            entity_ids=["10042854", "10042855", "10042856"],
            company_ids=["16303253", "16303253", "12790225"],
            owner=TableOwner(email="user@example.com"),
        ),
    )
    # TODO: Handle 'response' of type EntitiesAddResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddContactsTableEntitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.add_contacts_table_entities(
        "482910",
        EntitiesAddRequest(
            entity_ids=["10042854", "10042855", "10042856"],
            company_ids=["16303253", "16303253", "12790225"],
            owner=TableOwner(email="user@example.com"),
        ),
    )
    # TODO: Handle 'response' of type EntitiesAddResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddContactsTableEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>body</code> | <code>[EntitiesAddRequest](lusha/models/entities_add_request.py) \| [EntitiesAddRequestDict](lusha/models/entities_add_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesAddResponse](lusha/models/entities_add_response.py)</code> -- Entities added

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[AddContactsTableEntitiesErrorBody](lusha/errors/add_contacts_table_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_contacts_table(body: TableCreateRequest | TableCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new, empty contacts table, optionally seeded with an initial list of contact IDs.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.create_contacts_table(
        TableCreateRequest(
            name="VP Sales US Tech Q2",
            visibility=Visibility.PRIVATE,
            owner=TableOwner(email="user@example.com"),
            ids=["10042851", "10042852"],
        ),
    )
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContactsTableErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.create_contacts_table(
        TableCreateRequest(
            name="VP Sales US Tech Q2",
            visibility=Visibility.PRIVATE,
            owner=TableOwner(email="user@example.com"),
            ids=["10042851", "10042852"],
        ),
    )
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContactsTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TableCreateRequest](lusha/models/table_create_request.py) \| [TableCreateRequestDict](lusha/models/table_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](lusha/models/table_response.py)</code> -- Table created

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[CreateContactsTableErrorBody](lusha/errors/create_contacts_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_contacts_table(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> V3ContactsTablesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a table and all its data. This cannot be undone.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.delete_contacts_table("482910", email="user@example.com")
    # TODO: Handle 'response' of type V3ContactsTablesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteContactsTableErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.delete_contacts_table("482910", email="user@example.com")
    # TODO: Handle 'response' of type V3ContactsTablesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteContactsTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsTablesResponse](lusha/models/v3_contacts_tables_response.py)</code> -- Table deleted

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[DeleteContactsTableErrorBody](lusha/errors/delete_contacts_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contacts_table(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> TableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a table's metadata and current processing status.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.get_contacts_table("482910", email="user@example.com")
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactsTableErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.get_contacts_table("482910", email="user@example.com")
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactsTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](lusha/models/table_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactsTableErrorBody](lusha/errors/get_contacts_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contacts_table_entities(table_id: str, *, email: EmailStr | None = None, page: int | None = 0, size: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> EntitiesGetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read a page of rows in the table, with all column values and per-cell status.

> **Billing:** Charged per row returned via `export_api`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.get_contacts_table_entities("482910", email="user@example.com")
    # TODO: Handle 'response' of type EntitiesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactsTableEntitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.get_contacts_table_entities("482910", email="user@example.com")
    # TODO: Handle 'response' of type EntitiesGetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactsTableEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesGetResponse](lusha/models/entities_get_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactsTableEntitiesErrorBody](lusha/errors/get_contacts_table_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contacts_table_columns(table_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ColumnsListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the columns on a table, with type and aggregated per-cell status counts.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.list_contacts_table_columns("482910", email="user@example.com")
    # TODO: Handle 'response' of type ColumnsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContactsTableColumnsErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.list_contacts_table_columns("482910", email="user@example.com")
    # TODO: Handle 'response' of type ColumnsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContactsTableColumnsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ColumnsListResponse](lusha/models/columns_list_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[ListContactsTableColumnsErrorBody](lusha/errors/list_contacts_table_columns_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contacts_tables(body: TableListRequest | TableListRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TableListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List contacts tables owned by the given user, plus any tables shared with the account.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.list_contacts_tables(
        TableListRequest(owner=TableOwner(email="user@example.com"), page=0, size=10, status=Status1.ACTIVE)
    )
    # TODO: Handle 'response' of type TableListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContactsTablesErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.list_contacts_tables(
        TableListRequest(owner=TableOwner(email="user@example.com"), page=0, size=10, status=Status1.ACTIVE)
    )
    # TODO: Handle 'response' of type TableListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContactsTablesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TableListRequest](lusha/models/table_list_request.py) \| [TableListRequestDict](lusha/models/table_list_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableListResponse](lusha/models/table_list_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[ListContactsTablesErrorBody](lusha/errors/list_contacts_tables_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_contacts_table_column(table_id: str, column_id: str, *, email: EmailStr | None = None, request_options: RequestOptionsOrDict | None = None) -> V3ContactsTablesColumnsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.remove_contacts_table_column(
        "482910", "col_signals_funding", email="user@example.com"
    )
    # TODO: Handle 'response' of type V3ContactsTablesColumnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveContactsTableColumnErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.remove_contacts_table_column(
        "482910", "col_signals_funding", email="user@example.com"
    )
    # TODO: Handle 'response' of type V3ContactsTablesColumnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveContactsTableColumnErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>column_id</code> | <code>str</code> | The column's ID. |
| <code>email</code> | <code>EmailStr \| None</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsTablesColumnsResponse](lusha/models/v3_contacts_tables_columns_response.py)</code> -- Column removed

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[RemoveContactsTableColumnErrorBody](lusha/errors/remove_contacts_table_column_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_contacts_table_entities(table_id: str, body: EntitiesRemoveRequest | EntitiesRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EntitiesRemoveResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove specific contact IDs from a table.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.remove_contacts_table_entities(
        "482910", EntitiesRemoveRequest(entity_ids=["10042851", "10042852"], owner=TableOwner(email="user@example.com"))
    )
    # TODO: Handle 'response' of type EntitiesRemoveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveContactsTableEntitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.remove_contacts_table_entities(
        "482910", EntitiesRemoveRequest(entity_ids=["10042851", "10042852"], owner=TableOwner(email="user@example.com"))
    )
    # TODO: Handle 'response' of type EntitiesRemoveResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveContactsTableEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>body</code> | <code>[EntitiesRemoveRequest](lusha/models/entities_remove_request.py) \| [EntitiesRemoveRequestDict](lusha/models/entities_remove_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesRemoveResponse](lusha/models/entities_remove_response.py)</code> -- Entities removed

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[RemoveContactsTableEntitiesErrorBody](lusha/errors/remove_contacts_table_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_contacts_table_column(table_id: str, column_id: str, body: ColumnsRunRequest | ColumnsRunRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ColumnsRunResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Populate or refresh a column's data for some or all rows in the table. This is **asynchronous** — the call returns immediately with `status: "processing"`; poll Get Contacts Table for `isProcessing` and per-column row-status counts to know when it's done, then read the values via Get Contacts Table Entities.

**`runScope` values:**
- `all` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
- `missing` — only rows that have never been run for this column. Cheapest, safe to call repeatedly.
- `specific` — only the `entityIds` you pass. Also how you implement "run for this page" — fetch the page via Get Contacts Table Entities, then pass those IDs here.

> **Billing:** Charged per row processed, per the column's credit tier. Re-running with `all` charges again for rows that already have data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.run_contacts_table_column(
        "482910",
        "col_signals_funding",
        ColumnsRunRequest(
            run_scope=RunScope.SPECIFIC, entity_ids=["10042851", "10042852"], owner=TableOwner(email="user@example.com")
        ),
    )
    # TODO: Handle 'response' of type ColumnsRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunContactsTableColumnErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.run_contacts_table_column(
        "482910",
        "col_signals_funding",
        ColumnsRunRequest(
            run_scope=RunScope.SPECIFIC, entity_ids=["10042851", "10042852"], owner=TableOwner(email="user@example.com")
        ),
    )
    # TODO: Handle 'response' of type ColumnsRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunContactsTableColumnErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>column_id</code> | <code>str</code> | The column's ID. |
| <code>body</code> | <code>[ColumnsRunRequest](lusha/models/columns_run_request.py) \| [ColumnsRunRequestDict](lusha/models/columns_run_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ColumnsRunResponse](lusha/models/columns_run_response.py)</code> -- Column run started

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[RunContactsTableColumnErrorBody](lusha/errors/run_contacts_table_column_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_contacts_table(table_id: str, body: TableUpdateRequest | TableUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TableResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a table, change its visibility, or reassign its owner. All fields except `owner` are optional — send only what changes.

> **Billing:** Free.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.contacts_tables.update_contacts_table(
        "482910",
        TableUpdateRequest(
            name="postman-renamed", visibility=Visibility.SHARED, owner=TableOwner(email="user@example.com")
        ),
    )
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContactsTableErrorBody
```

**Async**

```python
try:
    response = await async_client.contacts_tables.update_contacts_table(
        "482910",
        TableUpdateRequest(
            name="postman-renamed", visibility=Visibility.SHARED, owner=TableOwner(email="user@example.com")
        ),
    )
    # TODO: Handle 'response' of type TableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateContactsTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>table_id</code> | <code>str</code> | The table's ID. |
| <code>body</code> | <code>[TableUpdateRequest](lusha/models/table_update_request.py) \| [TableUpdateRequestDict](lusha/models/table_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](lusha/models/table_response.py)</code> -- Table updated

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[UpdateContactsTableErrorBody](lusha/errors/update_contacts_table_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Enrich

> Source: [Enrich](lusha/apis/enrich.py)

<details>
<summary><code>def enrich_companies(body: V3CompaniesEnrichRequest | V3CompaniesEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3CompaniesEnrichResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reveal full company data for companies you've already found via Search Companies.

Pass up to 100 company `ids` (from the search response). Each enriched result includes:
- Firmographics: size, revenue range, year founded, company type
- Industry: primary industry, sub-industry, SIC/NAICS codes
- Locations: HQ and additional office sites
- Technologies, funding rounds, buyer intent topics
- LinkedIn followers, logo URL, social links

> **Billing:** Charged per successful result via the `reveal_company` action.

> **Persisting to a table:** Pass `tableId` to also add these companies to an existing table and populate the relevant enrichment columns. See Companies Tables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrich.enrich_companies(
        V3CompaniesEnrichRequest(
            ids=["16303253", "12790225"],
            reveal=[
                Reveal1.EMPLOYEES_BY_LOCATION,
                Reveal1.EMPLOYEES_BY_DEPARTMENT,
                Reveal1.EMPLOYEES_BY_SENIORITY,
                Reveal1.COMPETITORS,
                Reveal1.INTENT,
            ],
        ),
    )
    # TODO: Handle 'response' of type V3CompaniesEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichCompaniesErrorBody
```

**Async**

```python
try:
    response = await async_client.enrich.enrich_companies(
        V3CompaniesEnrichRequest(
            ids=["16303253", "12790225"],
            reveal=[
                Reveal1.EMPLOYEES_BY_LOCATION,
                Reveal1.EMPLOYEES_BY_DEPARTMENT,
                Reveal1.EMPLOYEES_BY_SENIORITY,
                Reveal1.COMPETITORS,
                Reveal1.INTENT,
            ],
        ),
    )
    # TODO: Handle 'response' of type V3CompaniesEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3CompaniesEnrichRequest](lusha/models/v3_companies_enrich_request.py) \| [V3CompaniesEnrichRequestDict](lusha/models/v3_companies_enrich_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesEnrichResponse](lusha/models/v3_companies_enrich_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[EnrichCompaniesErrorBody](lusha/errors/enrich_companies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def enrich_contacts(body: V3ContactsEnrichRequest | V3ContactsEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3ContactsEnrichResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reveal full contact data for contacts you've already found via Search Contacts.

Pass up to 100 contact `ids` (from the search response). Use the `reveal` field to control what gets unlocked:
- `emails` — work and personal email addresses
- `phones` — mobile and direct phone numbers
- Omit `reveal` to get both by default

---

### Waterfall Reveal
Fall through to your enabled third-party providers when Lusha's own data has no match, for extra reach on hard-to-match contacts.

If **Data Waterfall** is enabled on your account, with specific providers turned on under **Account > Waterfall**, the waterfall runs automatically on every Enrich Contacts call - you don't need to pass anything to trigger it.

Pass `waterfallEnabled: false` to opt a specific call out:

``json
"reveal": ["emails", "phones"],
"waterfallEnabled": false
``

- `reveal` controls **which fields** come back.
- `waterfallEnabled` controls whether the waterfall runs for this call at all. Defaults to `true` whenever Data Waterfall is enabled on your account; pass `false` to disable it just for this call.
- Provider order isn't configurable - Lusha manages that internally.
- If Data Waterfall is off or no providers are enabled on your account, `waterfallEnabled` has no effect either way.
---
> **Tip:** If `canReveal.credits` is `0` in the search response, that data has already been revealed for your account — re-enriching it is free.

> **Billing:** Charged per revealed field (email or phone) via per-datapoint pricing.

> **Persisting to a table:** Pass `tableId` to also add these contacts to an existing table and populate the Work email / Phone columns. See Contacts Tables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrich.enrich_contacts(
        V3ContactsEnrichRequest(ids=["4389064654", "4389064624"], reveal=[Reveal.EMAILS, Reveal.PHONES])
    )
    # TODO: Handle 'response' of type V3ContactsEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.enrich.enrich_contacts(
        V3ContactsEnrichRequest(ids=["4389064654", "4389064624"], reveal=[Reveal.EMAILS, Reveal.PHONES])
    )
    # TODO: Handle 'response' of type V3ContactsEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3ContactsEnrichRequest](lusha/models/v3_contacts_enrich_request.py) \| [V3ContactsEnrichRequestDict](lusha/models/v3_contacts_enrich_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsEnrichResponse](lusha/models/v3_contacts_enrich_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[EnrichContactsErrorBody](lusha/errors/enrich_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Enrichment

> Source: [Enrichment](lusha/apis/enrichment.py)

<details>
<summary><code>def search_multiple_companies_v2(body: CompaniesBulkRequest | CompaniesBulkRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> dict[str, CompanyBulkResponse]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for multiple companies in a single request. Provide a list of companies with
identifiers like domain names or company IDs.
>##### Endpoint:
``
POST https://api.lusha.com/bulk/company/v2
``

>##### Notes:
- At least one of `domain`, `company`, or `companyId` is required.
- You can process up to 100 companies per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrichment.search_multiple_companies_v2(
        CompaniesBulkRequest(
            companies=[CompanyBulkRequest(id="1", name="Lusha"), CompanyBulkRequest(id="2", domain="google.com")]
        ),
    )
    # TODO: Handle 'response' of type dict[str, CompanyBulkResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchMultipleCompaniesV2ErrorBody
```

**Async**

```python
try:
    response = await async_client.enrichment.search_multiple_companies_v2(
        CompaniesBulkRequest(
            companies=[CompanyBulkRequest(id="1", name="Lusha"), CompanyBulkRequest(id="2", domain="google.com")]
        ),
    )
    # TODO: Handle 'response' of type dict[str, CompanyBulkResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchMultipleCompaniesV2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompaniesBulkRequest](lusha/models/companies_bulk_request.py) \| [CompaniesBulkRequestDict](lusha/models/companies_bulk_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>dict&#91;str, [CompanyBulkResponse](lusha/models/company_bulk_response.py)&#93;</code> -- Bulk company search results

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchMultipleCompaniesV2ErrorBody](lusha/errors/search_multiple_companies_v2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_multiple_contacts(body: SearchBulkContactsRequest | SearchBulkContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BulkPersonResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrich multiple contacts in a single request. This endpoint allows you to submit a list of contacts
and receive enriched data for each one, including company information.

>##### Endpoint:
``
POST https://api.lusha.com/v2/person
``

>##### Notes
- You can process up to 100 contacts per request.
- Using `personId` provides the most direct way to retrieve contact information.
- At least one of `email`, `linkedinUrl`, or `company`/`domain` with `fullName` is required.

---

⚠️ **Important Notice - Unified Credits Plan Required**

| Parameter | Requirement |
|-----------|-------------|
| `revealEmails` and `revealPhones` | Only available to customers on the **Unified Credits** pricing plan |
| Plan Restriction | Attempting to use these parameters on other plans will result in a **403 Unauthorized** error |
| Default Behavior | When neither parameter is used, the API returns **both email addresses and phone numbers**, if available |

---

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrichment.search_multiple_contacts(
        SearchBulkContactsRequest(
            contacts=[
                ContactSearchBulk(
                    contact_id="1",
                    person_id="4183886134",
                    full_name="John Doe",
                    email="john@example.com",
                    companies=[
                        CompanyLushaApiDocumentationEnrichmentApi(
                            name="Example Corp", domain="example.com", is_current=True
                        ),
                    ],
                ),
                ContactSearchBulk(
                    contact_id="2", person_id="4183886135", linkedin_url="https://www.linkedin.com/in/carolinaportela/"
                ),
            ],
            metadata=Metadata2(
                reveal_emails=True,
                reveal_phones=True,
                signals=[Signal.PROMOTION, Signal.COMPANY_CHANGE],
                signals_start_date=date(2025, 3, 1),
                partial_profile=True,
            ),
        ),
    )
    # TODO: Handle 'response' of type BulkPersonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchMultipleContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.enrichment.search_multiple_contacts(
        SearchBulkContactsRequest(
            contacts=[
                ContactSearchBulk(
                    contact_id="1",
                    person_id="4183886134",
                    full_name="John Doe",
                    email="john@example.com",
                    companies=[
                        CompanyLushaApiDocumentationEnrichmentApi(
                            name="Example Corp", domain="example.com", is_current=True
                        ),
                    ],
                ),
                ContactSearchBulk(
                    contact_id="2", person_id="4183886135", linkedin_url="https://www.linkedin.com/in/carolinaportela/"
                ),
            ],
            metadata=Metadata2(
                reveal_emails=True,
                reveal_phones=True,
                signals=[Signal.PROMOTION, Signal.COMPANY_CHANGE],
                signals_start_date=date(2025, 3, 1),
                partial_profile=True,
            ),
        ),
    )
    # TODO: Handle 'response' of type BulkPersonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchMultipleContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchBulkContactsRequest](lusha/models/search_bulk_contacts_request.py) \| [SearchBulkContactsRequestDict](lusha/models/search_bulk_contacts_request.py)</code> | The list of contacts to enrich |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkPersonResponse](lusha/models/bulk_person_response.py)</code> -- The list of enriched contacts with their company details

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchMultipleContactsErrorBody](lusha/errors/search_multiple_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_single_company_v2(*, domain: str | None = None, company: str | None = None, company_id: str | None = None, signals: list[Signal1OrStr] | None = None, signals_start_date: Date | None = None, partial_company: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> CompanySingleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find detailed information about a single company by using different paramaters.
>##### Endpoint:
``
GET https://api.lusha.com/v2/company
``

>##### Notes:
- At least one of `domain`, `company`, or `companyId` is required.
- Signal sub-filters (`newsEventTypes`, `hiringByDepartments`, `hiringByLocations`) are not supported on this endpoint. Use `POST /bulk/company/v2` with the `signalsFilters` parameter for filtered signal retrieval.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrichment.search_single_company_v2(
        domain="example.com",
        company="Lusha",
        company_id="1234567890",
        signals=[Signal1.IT_SPEND_INCREASE],
        signals_start_date=date(2025, 3, 1),
        partial_company=False,
    )
    # TODO: Handle 'response' of type CompanySingleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchSingleCompanyV2ErrorBody
```

**Async**

```python
try:
    response = await async_client.enrichment.search_single_company_v2(
        domain="example.com",
        company="Lusha",
        company_id="1234567890",
        signals=[Signal1.IT_SPEND_INCREASE],
        signals_start_date=date(2025, 3, 1),
        partial_company=False,
    )
    # TODO: Handle 'response' of type CompanySingleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchSingleCompanyV2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str \| None</code> | The domain name associated with the company<br>**Default**: <code>None</code> |
| <code>company</code> | <code>str \| None</code> | The name of the company<br>**Default**: <code>None</code> |
| <code>company_id</code> | <code>str \| None</code> | A unique identifier for a Lusha company.<br>**Default**: <code>None</code> |
| <code>signals</code> | <code>list&#91;[Signal1OrStr](lusha/models/enums/signal1.py)&#93; \| None</code> | Array of signal types to retrieve for the company.<br>- `allSignals`: All available signal types<br><br>> See the Signal Options endpoint for complete list of available signals and their categories<br>**Default**: <code>None</code> |
| <code>signals_start_date</code> | <code>Date \| None</code> | Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not specified.<br>**Default**: <code>None</code> |
| <code>partial_company</code> | <code>bool \| None</code> | Expand coverage with partial company profiles<br>**Default**: <code>True</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySingleResponse](lusha/models/company_single_response.py)</code> -- Company information retrieved successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchSingleCompanyV2ErrorBody](lusha/errors/search_single_company_v2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_single_contact(*, first_name: str | None = None, last_name: str | None = None, person_id: str | None = None, company_name: str | None = None, company_domain: str | None = None, email: str | None = None, linkedin_url: str | None = None, refresh_job_info: bool | None = False, filter_by: FilterByOrStr | None = None, reveal_emails: bool | None = True, reveal_phones: bool | None = True, signals: list[SignalOrStr] | None = None, signals_start_date: Date | None = None, partial_profile: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> SingleContactResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find and enrich a single contact using various search criteria. You can search by name, email,
LinkedIn URL, or Person Id.
>##### Endpoint
``
GET https://api.lusha.com/v2/person
``

>##### Search Requirements
You must provide either:
- `personId` OR
- `email` OR
- `linkedinUrl` OR
- `firstName` AND `lastName` AND (`companyName` OR `companyDomain`)

>##### Notes:
- Provide as much information as possible for better results
- Using `personId` provides the most direct way to retrieve contact information, as it uniquely identifies a contact in Lusha's database.
- Use `refreshJobInfo=true` to get the latest employment data
- Use `filterBy` parameter to specify what contact details you need
- Include the `signals` parameter to retriever contact signals (If no signals data is found for the specified period, the `signals` object will be empty but still present in the response.)
- When requesting signals, you can optionally specify a start date using `signalsStartDate`.
- Signals data is optional. If you don't include the `signals` parameter, no signals data will be returned.

---

⚠️ **Important Notice - Unified Credits Plan Required**

| Parameter | Requirement |
|-----------|-------------|
| `revealEmails` and `revealPhones` | Only available to customers on the **Unified Credits** pricing plan |
| Plan Restriction | Attempting to use these parameters on other plans will result in a **403 Unauthorized** error |
| Default Behavior | When neither parameter is used, the API returns **both email addresses and phone numbers**, if available |

---

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.enrichment.search_single_contact(
        first_name="Dustin",
        last_name="Moskovitz",
        person_id="4183886134",
        company_name="Lusha",
        company_domain="lusha.com",
        email="dustin@lusha.com",
        linkedin_url="https://www.linkedin.com/in/dustin/",
        refresh_job_info=True,
        reveal_emails=True,
        reveal_phones=True,
        signals=[Signal.PROMOTION],
        signals_start_date=date(2025, 3, 1),
        partial_profile=True,
    )
    # TODO: Handle 'response' of type SingleContactResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchSingleContactErrorBody
```

**Async**

```python
try:
    response = await async_client.enrichment.search_single_contact(
        first_name="Dustin",
        last_name="Moskovitz",
        person_id="4183886134",
        company_name="Lusha",
        company_domain="lusha.com",
        email="dustin@lusha.com",
        linkedin_url="https://www.linkedin.com/in/dustin/",
        refresh_job_info=True,
        reveal_emails=True,
        reveal_phones=True,
        signals=[Signal.PROMOTION],
        signals_start_date=date(2025, 3, 1),
        partial_profile=True,
    )
    # TODO: Handle 'response' of type SingleContactResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchSingleContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>first_name</code> | <code>str \| None</code> | The first name of the person<br>**Default**: <code>None</code> |
| <code>last_name</code> | <code>str \| None</code> | The last name of the person<br>**Default**: <code>None</code> |
| <code>person_id</code> | <code>str \| None</code> | The unique person identifier in Lusha<br>**Default**: <code>None</code> |
| <code>company_name</code> | <code>str \| None</code> | The name of the company the person works at<br>**Default**: <code>None</code> |
| <code>company_domain</code> | <code>str \| None</code> | The domain name of the company<br>**Default**: <code>None</code> |
| <code>email</code> | <code>str \| None</code> | The email address of the person<br>**Default**: <code>None</code> |
| <code>linkedin_url</code> | <code>str \| None</code> | The LinkedIn URL of the person<br>**Default**: <code>None</code> |
| <code>refresh_job_info</code> | <code>bool \| None</code> | Set to true to refresh and update the job details for the person.<br>This ensures that outdated job information is replaced with the most recent data.<br>**Default**: <code>False</code> |
| <code>filter_by</code> | <code>[FilterByOrStr](lusha/models/enums/filter_by.py) \| None</code> | Filters results based on specific contact details. Available options:<br>- `phoneNumbers`: Only return contacts with phone numbers<br>- `emailAddresses`: Only return contacts with email addresses<br><br>By default, results will include contacts with at least one contact detail.<br>**Default**: <code>None</code> |
| <code>reveal_emails</code> | <code>bool \| None</code> | Set `revealEmails=true` to retrieve only the email address of the contact.<br>**Default**: <code>True</code> |
| <code>reveal_phones</code> | <code>bool \| None</code> | Set `revealPhones=true` to retrieve only the phone number of the contact.<br>**Default**: <code>True</code> |
| <code>signals</code> | <code>list&#91;[SignalOrStr](lusha/models/enums/signal.py)&#93; \| None</code> | Array of signal types to retrieve for the contact.<br>- `allSignals`: All available signal types<br>- `promotion`: Promotion signals<br>- `companyChange`: Company change signals<br>**Default**: <code>None</code> |
| <code>signals_start_date</code> | <code>Date \| None</code> | Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not specified.<br>**Default**: <code>None</code> |
| <code>partial_profile</code> | <code>bool \| None</code> | Search for a single contact with the option to receive a partial profile.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SingleContactResponse](lusha/models/single_contact_response.py)</code> -- Successfully found contact information

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchSingleContactErrorBody](lusha/errors/search_single_contact_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429, 451, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FiltersApi

> Source: [FiltersApi](lusha/apis/filters_api.py)

<details>
<summary><code>def get_company_filter_types(*, request_options: RequestOptionsOrDict | None = None) -> FilterTypesDiscoveryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all available filter types for company prospecting and whether each requires a search query.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.filters_api.get_company_filter_types()
    # TODO: Handle 'response' of type FilterTypesDiscoveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyFilterTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.filters_api.get_company_filter_types()
    # TODO: Handle 'response' of type FilterTypesDiscoveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyFilterTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterTypesDiscoveryResponse](lusha/models/filter_types_discovery_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanyFilterTypesErrorBody](lusha/errors/get_company_filter_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_filter_values(filter_type: FilterType1OrStr, *, query: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FilterValuesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns valid values for a single company filter type.

| Filter type | Query required? |
|---|---|
| `sizes` | No |
| `revenues` | No |
| `sics` | No |
| `naics` | No |
| `intentTopics` | No |
| `industriesLabels` | No |
| `names` | Yes (2-256 chars) |
| `technologies` | Yes (2-256 chars) |
| `locations` | Yes (2-256 chars) |

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.filters_api.get_company_filter_values(FilterType1.NAMES)
    # TODO: Handle 'response' of type FilterValuesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyFilterValuesErrorBody
```

**Async**

```python
try:
    response = await async_client.filters_api.get_company_filter_values(FilterType1.NAMES)
    # TODO: Handle 'response' of type FilterValuesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyFilterValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_type</code> | <code>[FilterType1OrStr](lusha/models/enums/filter_type1.py)</code> | Value sent with the request. |
| <code>query</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterValuesResponse](lusha/models/filter_values_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanyFilterValuesErrorBody](lusha/errors/get_company_filter_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_filter_types(*, request_options: RequestOptionsOrDict | None = None) -> FilterTypesDiscoveryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all available filter types for contact prospecting and whether each requires a search query.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.filters_api.get_contact_filter_types()
    # TODO: Handle 'response' of type FilterTypesDiscoveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactFilterTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.filters_api.get_contact_filter_types()
    # TODO: Handle 'response' of type FilterTypesDiscoveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactFilterTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterTypesDiscoveryResponse](lusha/models/filter_types_discovery_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactFilterTypesErrorBody](lusha/errors/get_contact_filter_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_filter_values(filter_type: FilterTypeOrStr, *, query: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FilterValuesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns valid values for a single contact filter type.

| Filter type | Query required? |
|---|---|
| `departments` | No |
| `seniority` | No |
| `existingDataPoints` | No |
| `countries` | No |
| `locations` | Yes (2-256 chars) |

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.filters_api.get_contact_filter_values(FilterType.DEPARTMENTS)
    # TODO: Handle 'response' of type FilterValuesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactFilterValuesErrorBody
```

**Async**

```python
try:
    response = await async_client.filters_api.get_contact_filter_values(FilterType.DEPARTMENTS)
    # TODO: Handle 'response' of type FilterValuesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactFilterValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_type</code> | <code>[FilterTypeOrStr](lusha/models/enums/filter_type.py)</code> | Value sent with the request. |
| <code>query</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterValuesResponse](lusha/models/filter_values_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactFilterValuesErrorBody](lusha/errors/get_contact_filter_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Lookalikes

> Source: [Lookalikes](lusha/apis/lookalikes.py)

<details>
<summary><code>def get_company_lookalikes(body: CompanyLookalikesRequest | CompanyLookalikesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CompanyLookalikesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find companies similar to a set of seed companies using AI-powered recommendations.

Provide 5-100 seed companies via domains or LinkedIn URLs. The API returns companies with similar size, industry, and profile.

**Pagination without duplicates:**
On your first request, omit `dedupeSessionId` — the server generates one and returns it. Pass it on every subsequent request to get more results without repeating companies already seen. Sessions are retained for 30 days.

Use the `exclude` field to always filter out specific companies (e.g. existing customers or competitors).

Results are lightweight previews. Use Enrich Companies with the returned `id` to get full firmographic data.

> **Billing:** Charged per result via the `lookalikeCompany` action.

> **Persisting to a table:** Pass `tableId` to also persist matching results into an existing table. See Companies Tables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.lookalikes.get_company_lookalikes(
        CompanyLookalikesRequest(
            seeds=CompanyIdentifiersBatch(
                domains=["sap.com", "oracle.com"], linkedin_urls=["https://www.linkedin.com/company/google"]
            ),
            exclude=CompanyIdentifiersBatch(domains=["existingcustomer.com"]),
            limit=100,
        ),
    )
    # TODO: Handle 'response' of type CompanyLookalikesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyLookalikesErrorBody
```

**Async**

```python
try:
    response = await async_client.lookalikes.get_company_lookalikes(
        CompanyLookalikesRequest(
            seeds=CompanyIdentifiersBatch(
                domains=["sap.com", "oracle.com"], linkedin_urls=["https://www.linkedin.com/company/google"]
            ),
            exclude=CompanyIdentifiersBatch(domains=["existingcustomer.com"]),
            limit=100,
        ),
    )
    # TODO: Handle 'response' of type CompanyLookalikesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanyLookalikesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanyLookalikesRequest](lusha/models/company_lookalikes_request.py) \| [CompanyLookalikesRequestDict](lusha/models/company_lookalikes_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyLookalikesResponse](lusha/models/company_lookalikes_response.py)</code> -- Successfully retrieved company lookalikes

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanyLookalikesErrorBody](lusha/errors/get_company_lookalikes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 410, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| 402 | <code>[RawError](lusha/core/results.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_lookalikes(body: ContactLookalikesRequest | ContactLookalikesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContactLookalikesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find contacts similar to a set of seed contacts using AI-powered recommendations.

Provide 5-100 seed contacts via LinkedIn URLs, emails, Lusha IDs, or name + company. The API returns contacts who share similar roles, seniority, and company profiles.

**Pagination without duplicates:**
On your first request, omit `dedupeSessionId` — the server generates one and returns it. Pass it on every subsequent request to get more results without repeating contacts already seen. Sessions are retained for 30 days.

Use the `exclude` field to always filter out specific contacts (e.g. existing customers).

Results are lightweight previews. Use Enrich Contacts with the returned `id` to get emails and phones.

> **Billing:** Charged per result via the `lookalikeContact` action.

> **Persisting to a table:** Pass `tableId` to also persist matching results into an existing table. See Contacts Tables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.lookalikes.get_contact_lookalikes(
        ContactLookalikesRequest(
            seeds=ContactIdentifiersBatch(
                linkedin_urls=["https://www.linkedin.com/in/orit-shilvock-6243bb5"],
                emails=["gal.ashkelon@lusha.com"],
                ids=["1234"],
            ),
            exclude=ContactIdentifiersBatch(emails=["existing@customer.com"]),
            limit=25,
        ),
    )
    # TODO: Handle 'response' of type ContactLookalikesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactLookalikesErrorBody
```

**Async**

```python
try:
    response = await async_client.lookalikes.get_contact_lookalikes(
        ContactLookalikesRequest(
            seeds=ContactIdentifiersBatch(
                linkedin_urls=["https://www.linkedin.com/in/orit-shilvock-6243bb5"],
                emails=["gal.ashkelon@lusha.com"],
                ids=["1234"],
            ),
            exclude=ContactIdentifiersBatch(emails=["existing@customer.com"]),
            limit=25,
        ),
    )
    # TODO: Handle 'response' of type ContactLookalikesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactLookalikesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactLookalikesRequest](lusha/models/contact_lookalikes_request.py) \| [ContactLookalikesRequestDict](lusha/models/contact_lookalikes_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactLookalikesResponse](lusha/models/contact_lookalikes_response.py)</code> -- Successfully retrieved contact lookalikes

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactLookalikesErrorBody](lusha/errors/get_contact_lookalikes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| 402 | <code>[RawError](lusha/core/results.py)</code> |
| 410 | <code>[DedupeSessionInvalidError](lusha/models/dedupe_session_invalid_error.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_v3_lookalike_companies(body: CompanyLookalikesRequest2 | CompanyLookalikesRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> CompanyLookalikesResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns company lookalikes based on seed companies.

*Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/companies**

#### How It Works

**First Request (Start a New Run):**
- Do not send `dedupeSessionId`
- Server generates one and returns it in the response
- Use returned `dedupeSessionId` for subsequent "get more" requests

**Subsequent Requests ("Get More"):**
- Send the returned `dedupeSessionId` to fetch more results without duplicates
- Server uses `dedupeSessionId` to deduplicate companies already returned
- Session history retained for 30 days from last activity (sliding window)
---

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.lookalikes.post_v3_lookalike_companies(
        CompanyLookalikesRequest2(
            seeds=CompanyIdentifiersBatch(
                domains=["sap.com", "oracle.com", "the-company.com"],
                linkedin_urls=["https://www.linkedin.com/company/google", "https://www.linkedin.com/company/someone"],
            ),
            exclude=CompanyIdentifiersBatch(
                domains=["existingcustomer.com", "already-sent.com"],
                linkedin_urls=["https://www.linkedin.com/company/already-sent/"],
            ),
            limit=100,
        ),
    )
    # TODO: Handle 'response' of type CompanyLookalikesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostV3LookalikeCompaniesErrorBody
```

**Async**

```python
try:
    response = await async_client.lookalikes.post_v3_lookalike_companies(
        CompanyLookalikesRequest2(
            seeds=CompanyIdentifiersBatch(
                domains=["sap.com", "oracle.com", "the-company.com"],
                linkedin_urls=["https://www.linkedin.com/company/google", "https://www.linkedin.com/company/someone"],
            ),
            exclude=CompanyIdentifiersBatch(
                domains=["existingcustomer.com", "already-sent.com"],
                linkedin_urls=["https://www.linkedin.com/company/already-sent/"],
            ),
            limit=100,
        ),
    )
    # TODO: Handle 'response' of type CompanyLookalikesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostV3LookalikeCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanyLookalikesRequest2](lusha/models/company_lookalikes_request2.py) \| [CompanyLookalikesRequest2Dict](lusha/models/company_lookalikes_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyLookalikesResponse2](lusha/models/company_lookalikes_response2.py)</code> -- Successfully retrieved company lookalikes

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[PostV3LookalikeCompaniesErrorBody](lusha/errors/post_v3_lookalike_companies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 410, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| 402 | <code>[RawError](lusha/core/results.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_v3_lookalike_contacts(body: ContactLookalikesRequest2 | ContactLookalikesRequest2Dict, *, request_options: RequestOptionsOrDict | None = None) -> ContactLookalikesResponse2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns contact lookalikes based on seed contacts.

*Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/contacts**

#### How It Works

**First Request (Start a New Run):**
- Do not send `dedupeSessionId`
- Server generates one and returns it in the response
- Use returned `dedupeSessionId` for subsequent "get more" requests

**Subsequent Requests ("Get More"):**
- Send the returned `dedupeSessionId` to fetch more results without duplicates
- Server dedupes against all contacts previously returned for the `dedupeSessionId`
- User-provided `exclude.*` is applied on every request and combined with server-side dedupe
- Session history retained for 30 days from last activity (sliding window)
---

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.lookalikes.post_v3_lookalike_contacts(
        ContactLookalikesRequest2(
            seeds=ContactIdentifiersBatch2(
                linkedin_urls=["https://www.linkedin.com/in/johndoe"],
                contacts=[ContactItem2(first_name="Alice", last_name="Smith", company_domain="sap.com")],
                emails=["jane@acme.com", "bob@example.com"],
                contact_ids=[1234, 4567],
            ),
            exclude=ContactIdentifiersBatch2(
                linkedin_urls=["https://www.linkedin.com/in/already-contacted/"],
                emails=["existing@customer.com"],
                contact_ids=[9999],
            ),
            limit=25,
        ),
    )
    # TODO: Handle 'response' of type ContactLookalikesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostV3LookalikeContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.lookalikes.post_v3_lookalike_contacts(
        ContactLookalikesRequest2(
            seeds=ContactIdentifiersBatch2(
                linkedin_urls=["https://www.linkedin.com/in/johndoe"],
                contacts=[ContactItem2(first_name="Alice", last_name="Smith", company_domain="sap.com")],
                emails=["jane@acme.com", "bob@example.com"],
                contact_ids=[1234, 4567],
            ),
            exclude=ContactIdentifiersBatch2(
                linkedin_urls=["https://www.linkedin.com/in/already-contacted/"],
                emails=["existing@customer.com"],
                contact_ids=[9999],
            ),
            limit=25,
        ),
    )
    # TODO: Handle 'response' of type ContactLookalikesResponse2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostV3LookalikeContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactLookalikesRequest2](lusha/models/contact_lookalikes_request2.py) \| [ContactLookalikesRequest2Dict](lusha/models/contact_lookalikes_request2.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactLookalikesResponse2](lusha/models/contact_lookalikes_response2.py)</code> -- Successfully retrieved contact lookalikes

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[PostV3LookalikeContactsErrorBody](lusha/errors/post_v3_lookalike_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| 402 | <code>[RawError](lusha/core/results.py)</code> |
| 410 | <code>[DedupeSessionInvalidError](lusha/models/dedupe_session_invalid_error.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Prospecting

> Source: [Prospecting](lusha/apis/prospecting.py)

<details>
<summary><code>def prospecting_companies(body: V3ProspectingCompaniesRequest | V3ProspectingCompaniesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3ProspectingCompaniesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for companies that match your target market using rich filter criteria.

**Filter by:**
- Size, revenue range, industry, sub-industry
- Technologies in use
- Locations (HQ country, state, city)
- SIC and NAICS codes
- Buyer intent topics
- Signal activity (headcount changes, hiring surges, news events, LinkedIn activity intent)

Use the returned company `id` values with Enrich Companies to get full firmographic data.

> **Billing:** Charged per result via `api_search`. If signals are requested, an additional charge applies per matched signal per result.

> **Persisting to a table:** Pass `tableId` to also persist matching results into an existing table. This is additive — the primary response is unchanged, and a `tableWrite` object is added showing what happened on the table side. See Companies Tables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.prospecting.prospecting_companies(
        V3ProspectingCompaniesRequest(
            pagination=V3PaginationRequest(page=0, size=25),
            filters=Filters(
                companies=Companies1(include=V3CompanyProspectingFilters(), exclude=V3CompanyProspectingFilters())
            ),
            table_id="583021",
            options=Options1(include_partial_profiles=False),
        ),
    )
    # TODO: Handle 'response' of type V3ProspectingCompaniesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProspectingCompaniesErrorBody
```

**Async**

```python
try:
    response = await async_client.prospecting.prospecting_companies(
        V3ProspectingCompaniesRequest(
            pagination=V3PaginationRequest(page=0, size=25),
            filters=Filters(
                companies=Companies1(include=V3CompanyProspectingFilters(), exclude=V3CompanyProspectingFilters())
            ),
            table_id="583021",
            options=Options1(include_partial_profiles=False),
        ),
    )
    # TODO: Handle 'response' of type V3ProspectingCompaniesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProspectingCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3ProspectingCompaniesRequest](lusha/models/v3_prospecting_companies_request.py) \| [V3ProspectingCompaniesRequestDict](lusha/models/v3_prospecting_companies_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ProspectingCompaniesResponse](lusha/models/v3_prospecting_companies_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[ProspectingCompaniesErrorBody](lusha/errors/prospecting_companies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def prospecting_contacts(body: V3ProspectingContactsRequest | V3ProspectingContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3ProspectingContactsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for contacts that match your Ideal Customer Profile using rich filter criteria.

**Filter by contact attributes:**
- Job title, seniority, department
- Location (city, state, country, continent)
- Existing data points (e.g. only contacts with a known work email)
- Signal activity (promotion, job change)

**Filter by company attributes:**
- Size, revenue, industry, technologies
- Location, intent topics, funding

Use the returned contact `id` values with Enrich Contacts to reveal emails and phones.

> **Billing:** Charged per result via `api_search`. If signals are requested, an additional charge applies per matched signal per result.

> **Persisting to a table:** Pass `tableId` to also persist matching results into an existing table. This is additive — the primary response is unchanged, and a `tableWrite` object is added showing what happened on the table side. See Contacts Tables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.prospecting.prospecting_contacts(
        V3ProspectingContactsRequest(
            pagination=V3PaginationRequest(page=0, size=100),
            filters=V3ProspectingContactFilters(
                contacts=Contacts(include=V3ContactFilterCriteria()),
                companies=Companies(include=V3CompanyFilterCriteria(), exclude=V3CompanyFilterCriteria()),
            ),
            table_id="482910",
            options=Options(include_partial_profiles=True, exclude_dnc=False),
        ),
    )
    # TODO: Handle 'response' of type V3ProspectingContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProspectingContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.prospecting.prospecting_contacts(
        V3ProspectingContactsRequest(
            pagination=V3PaginationRequest(page=0, size=100),
            filters=V3ProspectingContactFilters(
                contacts=Contacts(include=V3ContactFilterCriteria()),
                companies=Companies(include=V3CompanyFilterCriteria(), exclude=V3CompanyFilterCriteria()),
            ),
            table_id="482910",
            options=Options(include_partial_profiles=True, exclude_dnc=False),
        ),
    )
    # TODO: Handle 'response' of type V3ProspectingContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProspectingContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3ProspectingContactsRequest](lusha/models/v3_prospecting_contacts_request.py) \| [V3ProspectingContactsRequestDict](lusha/models/v3_prospecting_contacts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ProspectingContactsResponse](lusha/models/v3_prospecting_contacts_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[ProspectingContactsErrorBody](lusha/errors/prospecting_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ProspectingSearchEnrich

> Source: [ProspectingSearchEnrich](lusha/apis/prospecting_search_enrich.py)

<details>
<summary><code>def enrich_prospecting_companies(body: CompanyEnrichRequest | CompanyEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CompanyEnrichResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrich companies from search results. This is step 3 of the prospecting process.

*Endpoint*: **(POST) https://api.lusha.com/prospecting/company/enrich**

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.prospecting_search_enrich.enrich_prospecting_companies(
        CompanyEnrichRequest(request_id="some example string", companies_ids=["some example string"])
    )
    # TODO: Handle 'response' of type CompanyEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichProspectingCompaniesErrorBody
```

**Async**

```python
try:
    response = await async_client.prospecting_search_enrich.enrich_prospecting_companies(
        CompanyEnrichRequest(request_id="some example string", companies_ids=["some example string"])
    )
    # TODO: Handle 'response' of type CompanyEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichProspectingCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanyEnrichRequest](lusha/models/company_enrich_request.py) \| [CompanyEnrichRequestDict](lusha/models/company_enrich_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyEnrichResponse](lusha/models/company_enrich_response.py)</code> -- Enriched company data

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[EnrichProspectingCompaniesErrorBody](lusha/errors/enrich_prospecting_companies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def enrich_prospecting_contacts(body: ContactEnrichRequest | ContactEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContactEnrichResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrich contacts from search results. This is step 3 of the prospecting process.

*Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/enrich**
---

⚠️ **Important Notice - Unified Credits Plan Required**

| Parameter | Requirement |
|-----------|-------------|
| `revealEmails` and `revealPhones` | Only available to customers on the **Unified Credits** pricing plan |
| Plan Restriction | Attempting to use these parameters on other plans will result in a **403 Unauthorized** error |
| Default Behavior | When neither parameter is used, the API returns **both email addresses and phone numbers**, if available |

---

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.prospecting_search_enrich.enrich_prospecting_contacts(
        ContactEnrichRequest(
            request_id="b6effae6-35b8-493d-91aa-7d3b1b7c7dc7", contact_ids=["37b4c536-eaec-11ef-ad4b-a75f8e9e1484"]
        ),
    )
    # TODO: Handle 'response' of type ContactEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichProspectingContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.prospecting_search_enrich.enrich_prospecting_contacts(
        ContactEnrichRequest(
            request_id="b6effae6-35b8-493d-91aa-7d3b1b7c7dc7", contact_ids=["37b4c536-eaec-11ef-ad4b-a75f8e9e1484"]
        ),
    )
    # TODO: Handle 'response' of type ContactEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichProspectingContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactEnrichRequest](lusha/models/contact_enrich_request.py) \| [ContactEnrichRequestDict](lusha/models/contact_enrich_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactEnrichResponse](lusha/models/contact_enrich_response.py)</code> -- Enriched contact data

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[EnrichProspectingContactsErrorBody](lusha/errors/enrich_prospecting_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_prospecting_companies(body: CompanySearchRequest | CompanySearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CompanySearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for companies using various filters. This is step 2 of the prospecting process.

*Endpoint*: **(POST) https://api.lusha.com/prospecting/company/search**
---

##### Signal Filtering (Premium Feature)
Filter companies by signal types to identify those with recent business events and changes.

> **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.prospecting_search_enrich.search_prospecting_companies(
        CompanySearchRequest(
            pages=PaginationParams(page=0, size=20), filters=Filters1(companies=CompanyFilters(include=Include()))
        ),
    )
    # TODO: Handle 'response' of type CompanySearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchProspectingCompaniesErrorBody
```

**Async**

```python
try:
    response = await async_client.prospecting_search_enrich.search_prospecting_companies(
        CompanySearchRequest(
            pages=PaginationParams(page=0, size=20), filters=Filters1(companies=CompanyFilters(include=Include()))
        ),
    )
    # TODO: Handle 'response' of type CompanySearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchProspectingCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanySearchRequest](lusha/models/company_search_request.py) \| [CompanySearchRequestDict](lusha/models/company_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySearchResponse](lusha/models/company_search_response.py)</code> -- Search results with company IDs

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchProspectingCompaniesErrorBody](lusha/errors/search_prospecting_companies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_prospecting_contacts(body: ContactSearchRequest | ContactSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContactSearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for contacts using various filters. This is step 2 of the prospecting process.

*Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/search**
---
##### Signal Filtering (Premium Feature)
Filter contacts by signal types to find prospects at key career moments.

> **Note:** This is a premium feature. Credits are charged for each signal type that returns results.

---
##### DNC Filtering (Scale Feature)
Use `excludeDnc: true` at the top level of the request body to filter out contacts whose phone numbers are all marked Do Not Call.
- Contacts with **at least one callable phone** appear in results - Only callable phones are shown — DNC phones are hidden - Contacts with **only DNC phones** are excluded entirely
> **Note**: Returns **403** on unsupported plans.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.prospecting_search_enrich.search_prospecting_contacts(
        ContactSearchRequest(
            pages=PaginationParams(page=0, size=10),
            filters=FiltersLushaApiDocumentationProspectingSearchEnrichApi(contacts=ContactFilters(include=Include1())),
        ),
    )
    # TODO: Handle 'response' of type ContactSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchProspectingContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.prospecting_search_enrich.search_prospecting_contacts(
        ContactSearchRequest(
            pages=PaginationParams(page=0, size=10),
            filters=FiltersLushaApiDocumentationProspectingSearchEnrichApi(contacts=ContactFilters(include=Include1())),
        ),
    )
    # TODO: Handle 'response' of type ContactSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchProspectingContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactSearchRequest](lusha/models/contact_search_request.py) \| [ContactSearchRequestDict](lusha/models/contact_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactSearchResponse](lusha/models/contact_search_response.py)</code> -- Search results with contact IDs

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchProspectingContactsErrorBody](lusha/errors/search_prospecting_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](lusha/apis/search.py)

<details>
<summary><code>def search_companies(body: V3CompaniesSearchRequest | V3CompaniesSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3CompaniesSearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up companies by identifier. Returns a preview of each company profile.

**Accepted identifiers (at least one required per company):**
- Lusha company `id`
- `name`
- `domain`

Up to 100 companies per request. Each result includes a `has` field listing the data available via Enrich Companies.

Pass a `signals` filter to narrow results to companies showing specific activity (e.g. headcount growth, hiring surge).

> **Billing:** Charged per successful result via the `api_search` action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.search.search_companies(
        V3CompaniesSearchRequest(
            companies=[
                V3CompanySearchItem(client_reference_id="comp-ref-1", name="Lusha"),
                V3CompanySearchItem(client_reference_id="comp-ref-2", domain="salesforce.com"),
                V3CompanySearchItem(client_reference_id="comp-ref-3", id="16303253"),
            ],
            options=V3SearchOptions(include_partial_profiles=True),
        ),
    )
    # TODO: Handle 'response' of type V3CompaniesSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompaniesErrorBody
```

**Async**

```python
try:
    response = await async_client.search.search_companies(
        V3CompaniesSearchRequest(
            companies=[
                V3CompanySearchItem(client_reference_id="comp-ref-1", name="Lusha"),
                V3CompanySearchItem(client_reference_id="comp-ref-2", domain="salesforce.com"),
                V3CompanySearchItem(client_reference_id="comp-ref-3", id="16303253"),
            ],
            options=V3SearchOptions(include_partial_profiles=True),
        ),
    )
    # TODO: Handle 'response' of type V3CompaniesSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3CompaniesSearchRequest](lusha/models/v3_companies_search_request.py) \| [V3CompaniesSearchRequestDict](lusha/models/v3_companies_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesSearchResponse](lusha/models/v3_companies_search_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchCompaniesErrorBody](lusha/errors/search_companies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_contacts(body: V3ContactsSearchRequest | V3ContactsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3ContactsSearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up contacts by identifier. Returns a non-PII preview of each profile — no emails or phone numbers.

**Accepted identifiers (one required per contact):**
- Lusha contact `id`
- `linkedinUrl`
- `email`
- `firstName` + `lastName` + `companyName` or `companyDomain`

Up to 100 contacts per request. Each result includes:
- `has` — data points available on this profile
- `canReveal` — what you can unlock via Enrich Contacts, and the credit cost

Pass a `signals` filter to narrow results to contacts with recent activity (e.g. promotion, job change).

> **Billing:** Charged per successful result via the `api_search` action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.search.search_contacts(
        V3ContactsSearchRequest(
            contacts=[
                V3ContactSearchItem(
                    client_reference_id="my-ref-1",
                    first_name="Orit",
                    last_name="Shilvock",
                    company_name="Lusha",
                    company_domain="lusha.com",
                ),
                V3ContactSearchItem(
                    client_reference_id="my-ref-2", linkedin_url="https://www.linkedin.com/in/shmulikwillinger"
                ),
                V3ContactSearchItem(client_reference_id="my-ref-3", email="gal.ashkelon@lusha.com"),
                V3ContactSearchItem(client_reference_id="my-ref-4", id="12345"),
            ],
            options=V3SearchOptions(include_partial_profiles=True),
        ),
    )
    # TODO: Handle 'response' of type V3ContactsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.search.search_contacts(
        V3ContactsSearchRequest(
            contacts=[
                V3ContactSearchItem(
                    client_reference_id="my-ref-1",
                    first_name="Orit",
                    last_name="Shilvock",
                    company_name="Lusha",
                    company_domain="lusha.com",
                ),
                V3ContactSearchItem(
                    client_reference_id="my-ref-2", linkedin_url="https://www.linkedin.com/in/shmulikwillinger"
                ),
                V3ContactSearchItem(client_reference_id="my-ref-3", email="gal.ashkelon@lusha.com"),
                V3ContactSearchItem(client_reference_id="my-ref-4", id="12345"),
            ],
            options=V3SearchOptions(include_partial_profiles=True),
        ),
    )
    # TODO: Handle 'response' of type V3ContactsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3ContactsSearchRequest](lusha/models/v3_contacts_search_request.py) \| [V3ContactsSearchRequestDict](lusha/models/v3_contacts_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsSearchResponse](lusha/models/v3_contacts_search_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchContactsErrorBody](lusha/errors/search_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SearchEnrich

> Source: [SearchEnrich](lusha/apis/search_enrich.py)

<details>
<summary><code>def search_and_enrich_companies(body: V3CompaniesSearchAndEnrichRequest | V3CompaniesSearchAndEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3CompaniesSearchAndEnrichResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find companies and reveal their full data in a single call. Combines Search and Enrich into one request.

Provide company identifiers the same way you would for Search Companies. Up to 100 companies per request.

> **Billing:** Same as Enrich Companies — charged per successful result via the `reveal_company` action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.search_enrich.search_and_enrich_companies(
        V3CompaniesSearchAndEnrichRequest(
            companies=[
                V3CompanySearchItem(client_reference_id="comp-ref-1", name="Lusha"),
                V3CompanySearchItem(client_reference_id="comp-ref-2", domain="salesforce.com"),
            ],
            options=V3SearchOptions(include_partial_profiles=True),
        ),
    )
    # TODO: Handle 'response' of type V3CompaniesSearchAndEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAndEnrichCompaniesErrorBody
```

**Async**

```python
try:
    response = await async_client.search_enrich.search_and_enrich_companies(
        V3CompaniesSearchAndEnrichRequest(
            companies=[
                V3CompanySearchItem(client_reference_id="comp-ref-1", name="Lusha"),
                V3CompanySearchItem(client_reference_id="comp-ref-2", domain="salesforce.com"),
            ],
            options=V3SearchOptions(include_partial_profiles=True),
        ),
    )
    # TODO: Handle 'response' of type V3CompaniesSearchAndEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAndEnrichCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3CompaniesSearchAndEnrichRequest](lusha/models/v3_companies_search_and_enrich_request.py) \| [V3CompaniesSearchAndEnrichRequestDict](lusha/models/v3_companies_search_and_enrich_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesSearchAndEnrichResponse](lusha/models/v3_companies_search_and_enrich_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchAndEnrichCompaniesErrorBody](lusha/errors/search_and_enrich_companies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_and_enrich_contacts(body: V3ContactsSearchAndEnrichRequest | V3ContactsSearchAndEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3ContactsSearchAndEnrichResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find contacts and reveal their full data in a single call. Combines Search and Enrich into one request.

Provide contact identifiers the same way you would for Search Contacts. Use the `reveal` field to control what gets unlocked (`emails`, `phones`, or both).

Up to 100 contacts per request.

> **Billing:** Two charges apply — one for the search (`api_search`) and one per revealed field. The `billing.creditsCharged` in the response reflects the total.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.search_enrich.search_and_enrich_contacts(
        V3ContactsSearchAndEnrichRequest(
            contacts=[
                V3ContactSearchItem(
                    client_reference_id="my-ref-1",
                    first_name="Orit",
                    last_name="Shilvock",
                    company_name="Lusha",
                    company_domain="lusha.com",
                ),
                V3ContactSearchItem(
                    client_reference_id="my-ref-2", linkedin_url="https://www.linkedin.com/in/shmulikwillinger"
                ),
            ],
            reveal=[Reveal.EMAILS, Reveal.PHONES],
            options=V3SearchOptions(include_partial_profiles=True),
        ),
    )
    # TODO: Handle 'response' of type V3ContactsSearchAndEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAndEnrichContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.search_enrich.search_and_enrich_contacts(
        V3ContactsSearchAndEnrichRequest(
            contacts=[
                V3ContactSearchItem(
                    client_reference_id="my-ref-1",
                    first_name="Orit",
                    last_name="Shilvock",
                    company_name="Lusha",
                    company_domain="lusha.com",
                ),
                V3ContactSearchItem(
                    client_reference_id="my-ref-2", linkedin_url="https://www.linkedin.com/in/shmulikwillinger"
                ),
            ],
            reveal=[Reveal.EMAILS, Reveal.PHONES],
            options=V3SearchOptions(include_partial_profiles=True),
        ),
    )
    # TODO: Handle 'response' of type V3ContactsSearchAndEnrichResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAndEnrichContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3ContactsSearchAndEnrichRequest](lusha/models/v3_contacts_search_and_enrich_request.py) \| [V3ContactsSearchAndEnrichRequestDict](lusha/models/v3_contacts_search_and_enrich_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsSearchAndEnrichResponse](lusha/models/v3_contacts_search_and_enrich_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchAndEnrichContactsErrorBody](lusha/errors/search_and_enrich_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SignalsApi

> Source: [SignalsApi](lusha/apis/signals_api.py)

<details>
<summary><code>def get_company_signal_filter_values(filter_type: FilterTypeLushaSignalsApiOrStr, *, query: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FilterValuesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns valid values for a single company signal filter type.

| Filter type | Query required? |
|---|---|
| `newsEventTypes` | No |
| `hiringByDepartments` | No |
| `hiringByLocations` | Yes (2-256 chars) |
| `intentCategories` | No — the `query` parameter is not supported for this filter type; passing one returns `400` |

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_company_signal_filter_values(FilterTypeLushaSignalsApi.NEWS_EVENT_TYPES)
    # TODO: Handle 'response' of type FilterValuesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalFilterValuesErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_company_signal_filter_values(
        FilterTypeLushaSignalsApi.NEWS_EVENT_TYPES
    )
    # TODO: Handle 'response' of type FilterValuesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalFilterValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_type</code> | <code>[FilterTypeLushaSignalsApiOrStr](lusha/models/enums/filter_type_lusha_signals_api.py)</code> | Value sent with the request. |
| <code>query</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterValuesResponse](lusha/models/filter_values_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanySignalFilterValuesErrorBody](lusha/errors/get_company_signal_filter_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_signal_filters(*, request_options: RequestOptionsOrDict | None = None) -> FilterTypesDiscoveryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all available filter types for company signals and whether each requires a search query.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_company_signal_filters()
    # TODO: Handle 'response' of type FilterTypesDiscoveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalFiltersErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_company_signal_filters()
    # TODO: Handle 'response' of type FilterTypesDiscoveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalFiltersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterTypesDiscoveryResponse](lusha/models/filter_types_discovery_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanySignalFiltersErrorBody](lusha/errors/get_company_signal_filters_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_signal_scores(body: V3SignalScoreCompaniesRequest | V3SignalScoreCompaniesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3SignalScoreCompaniesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Score companies by their active buying signals. Returns the aggregate Signal Score - a `[0, 1]` value reflecting the fraction of the company's active signals - plus the active signal breakdown.

Accepts up to 100 companies, each identified by exactly one of `id`, `domain`, `name`, or `email`. All identifiers are resolved to Lusha company IDs server-side before scoring.

Each result is one of:
- A **scored entry** - `signalScore`, `signalTypes`, and `noActiveSignals`.
- A **`NOT_FOUND`** entry - the company service could not resolve the supplied identifier.
- A **`NO_SCORE`** entry - the company resolved, but the scoring engine returned nothing for it.

> **Billing:** 1 credit is charged per scored row via `signal_score_company_reveal`. This action is currently limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free (`billing.creditsCharged` is `0`). Error rows (`NOT_FOUND` / `NO_SCORE`) are never charged.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_company_signal_scores(
        V3SignalScoreCompaniesRequest(
            companies=[
                V3SignalScoreCompanyItem(client_reference_id="ref-1", id="v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345"),
                V3SignalScoreCompanyItem(client_reference_id="ref-2", domain="www.microsoft.com"),
                V3SignalScoreCompanyItem(client_reference_id="ref-3", name="Apple"),
            ],
        ),
    )
    # TODO: Handle 'response' of type V3SignalScoreCompaniesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalScoresErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_company_signal_scores(
        V3SignalScoreCompaniesRequest(
            companies=[
                V3SignalScoreCompanyItem(client_reference_id="ref-1", id="v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345"),
                V3SignalScoreCompanyItem(client_reference_id="ref-2", domain="www.microsoft.com"),
                V3SignalScoreCompanyItem(client_reference_id="ref-3", name="Apple"),
            ],
        ),
    )
    # TODO: Handle 'response' of type V3SignalScoreCompaniesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalScoresErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3SignalScoreCompaniesRequest](lusha/models/v3_signal_score_companies_request.py) \| [V3SignalScoreCompaniesRequestDict](lusha/models/v3_signal_score_companies_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3SignalScoreCompaniesResponse](lusha/models/v3_signal_score_companies_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanySignalScoresErrorBody](lusha/errors/get_company_signal_scores_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_signal_types(*, request_options: RequestOptionsOrDict | None = None) -> CompanySignalTypesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full list of supported signal types for companies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_company_signal_types()
    # TODO: Handle 'response' of type CompanySignalTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_company_signal_types()
    # TODO: Handle 'response' of type CompanySignalTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySignalTypesResponse](lusha/models/company_signal_types_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanySignalTypesErrorBody](lusha/errors/get_company_signal_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_signals(body: V3CompanySignalsRequest | V3CompanySignalsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3CompanySignalsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve signal events for a list of companies — hiring activity, headcount changes, web traffic, IT spend, and news.

Pass up to 100 company `ids`. Use `signalTypes` to specify which signals to return (or use `allSignals`). Optionally set a `startDate` to limit results to recent activity.

> **Billing:** Charged per matched signal per result via the `showSignalsCompany` action.

> **Persisting to a table:** Pass `tableId` to also add these companies to an existing table and populate the Signals column. See Companies Tables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_company_signals(
        V3CompanySignalsRequest(
            ids=["16303253"],
            signal_types=[SignalType1.ALL_SIGNALS],
            start_date=date(2025, 1, 1),
            max_results_per_signal=10,
        ),
    )
    # TODO: Handle 'response' of type V3CompanySignalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalsErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_company_signals(
        V3CompanySignalsRequest(
            ids=["16303253"],
            signal_types=[SignalType1.ALL_SIGNALS],
            start_date=date(2025, 1, 1),
            max_results_per_signal=10,
        ),
    )
    # TODO: Handle 'response' of type V3CompanySignalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3CompanySignalsRequest](lusha/models/v3_company_signals_request.py) \| [V3CompanySignalsRequestDict](lusha/models/v3_company_signals_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompanySignalsResponse](lusha/models/v3_company_signals_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanySignalsErrorBody](lusha/errors/get_company_signals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_company_signals_by_id(body: CompanySignalsByIdRequest | CompanySignalsByIdRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CompanySignalsByIdResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve signals data for a list of company IDs.
This endpoint allows you to get recent activities and signals for up to 100 companies per request.

*Endpoint*: **(POST) https://api.lusha.com/api/signals/companies**

**Default Behavior:**
- Returns signals from the last 6 months by default
- Use `startDate` to customize the timeframe

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_company_signals_by_id(
        CompanySignalsByIdRequest(
            company_ids=[3416],
            signals=[Signal1.WEBSITE_TRAFFIC_INCREASE],
            start_date=date(2025, 1, 1),
            max_results_per_signal=10,
        ),
    )
    # TODO: Handle 'response' of type CompanySignalsByIdResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_company_signals_by_id(
        CompanySignalsByIdRequest(
            company_ids=[3416],
            signals=[Signal1.WEBSITE_TRAFFIC_INCREASE],
            start_date=date(2025, 1, 1),
            max_results_per_signal=10,
        ),
    )
    # TODO: Handle 'response' of type CompanySignalsByIdResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCompanySignalsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanySignalsByIdRequest](lusha/models/company_signals_by_id_request.py) \| [CompanySignalsByIdRequestDict](lusha/models/company_signals_by_id_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySignalsByIdResponse](lusha/models/company_signals_by_id_response.py)</code> -- Company signals retrieved successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetCompanySignalsByIdErrorBody](lusha/errors/get_company_signals_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_signal_scores(body: V3SignalScoreContactsRequest | V3SignalScoreContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3SignalScoreContactsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Score contacts by their active buying signals. Returns the aggregate Signal Score - a `[0, 1]` value - plus the active signal breakdown per contact.

Accepts up to 100 contacts. Each contact is resolved to a Lusha person ID and company ID server-side (identity only - no PII is revealed) before scoring. Provide one of:
- `id` (encrypted Lusha contact ID)
- `linkedinUrl`
- `email`
- `firstName` + `lastName` + (`companyName` or `companyDomain`)

Each result is one of:
- A **scored entry** - `signalScore`, `signalTypes`, and `noActiveSignals`.
- A **`NOT_FOUND`** entry - identity resolution failed for the supplied identifier.
- A **`NO_SCORE`** entry - the contact resolved, but the scoring engine returned nothing for it.

> **Note:** A full outage of the identity-resolution provider is never masked as `NOT_FOUND` - it returns a retryable `502` instead, so callers can retry rather than treating the batch as authoritatively unresolved.

> **Billing:** 1 credit is charged per scored row via `signal_score_contact_reveal`. This action is currently limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free (`billing.creditsCharged` is `0`). Error rows (`NOT_FOUND` / `NO_SCORE`) are never charged.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_contact_signal_scores(
        V3SignalScoreContactsRequest(
            contacts=[
                V3SignalScoreContactItem(client_reference_id="ref-1", id="v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345"),
                V3SignalScoreContactItem(client_reference_id="ref-2", linkedin_url="https://linkedin.com/in/johndoe"),
                V3SignalScoreContactItem(
                    client_reference_id="ref-3", first_name="Jane", last_name="Doe", company_domain="acme.com"
                ),
            ],
        ),
    )
    # TODO: Handle 'response' of type V3SignalScoreContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSignalScoresErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_contact_signal_scores(
        V3SignalScoreContactsRequest(
            contacts=[
                V3SignalScoreContactItem(client_reference_id="ref-1", id="v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345"),
                V3SignalScoreContactItem(client_reference_id="ref-2", linkedin_url="https://linkedin.com/in/johndoe"),
                V3SignalScoreContactItem(
                    client_reference_id="ref-3", first_name="Jane", last_name="Doe", company_domain="acme.com"
                ),
            ],
        ),
    )
    # TODO: Handle 'response' of type V3SignalScoreContactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSignalScoresErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3SignalScoreContactsRequest](lusha/models/v3_signal_score_contacts_request.py) \| [V3SignalScoreContactsRequestDict](lusha/models/v3_signal_score_contacts_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3SignalScoreContactsResponse](lusha/models/v3_signal_score_contacts_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactSignalScoresErrorBody](lusha/errors/get_contact_signal_scores_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429, 502 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_signal_types(*, request_options: RequestOptionsOrDict | None = None) -> ContactSignalTypesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full list of supported signal types for contacts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_contact_signal_types()
    # TODO: Handle 'response' of type ContactSignalTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSignalTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_contact_signal_types()
    # TODO: Handle 'response' of type ContactSignalTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSignalTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactSignalTypesResponse](lusha/models/contact_signal_types_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactSignalTypesErrorBody](lusha/errors/get_contact_signal_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_signals(body: V3ContactSignalsRequest | V3ContactSignalsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V3ContactSignalsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve signal events for a list of contacts — job changes and promotions.

Pass up to 100 contact `ids`. Use `signalTypes` to specify which events to return (`promotion`, `companyChange`, or `allSignals`). Optionally set a `startDate` to limit results to recent activity.

> **Billing:** Charged per matched signal per result via the `showSignalsContact` action.

> **Persisting to a table:** Pass `tableId` to also add these contacts to an existing table and populate the Signals column. See Contacts Tables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_contact_signals(
        V3ContactSignalsRequest(
            ids=["4389064624", "4389064654"], signal_types=[SignalType.ALL_SIGNALS], start_date=date(2025, 1, 1)
        ),
    )
    # TODO: Handle 'response' of type V3ContactSignalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSignalsErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_contact_signals(
        V3ContactSignalsRequest(
            ids=["4389064624", "4389064654"], signal_types=[SignalType.ALL_SIGNALS], start_date=date(2025, 1, 1)
        ),
    )
    # TODO: Handle 'response' of type V3ContactSignalsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSignalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V3ContactSignalsRequest](lusha/models/v3_contact_signals_request.py) \| [V3ContactSignalsRequestDict](lusha/models/v3_contact_signals_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactSignalsResponse](lusha/models/v3_contact_signals_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactSignalsErrorBody](lusha/errors/get_contact_signals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_contact_signals_by_id(body: ContactSignalsByIdRequest | ContactSignalsByIdRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContactSignalsByIdResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve signals data for a list of contact IDs.
This endpoint allows you to get recent activities and signals for up to 100 contacts per request.

*Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts**

**Default Behavior:**
- Returns signals from the last 6 months by default
- Use `startDate` to customize the timeframe
- Each signal type requested counts towards credit usage

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_contact_signals_by_id(
        ContactSignalsByIdRequest(
            contact_ids=[115889],
            signals=[Signal.PROMOTION, Signal.COMPANY_CHANGE],
            start_date=date(2025, 1, 1),
            max_results_per_signal=5,
        ),
    )
    # TODO: Handle 'response' of type ContactSignalsByIdResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSignalsByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_contact_signals_by_id(
        ContactSignalsByIdRequest(
            contact_ids=[115889],
            signals=[Signal.PROMOTION, Signal.COMPANY_CHANGE],
            start_date=date(2025, 1, 1),
            max_results_per_signal=5,
        ),
    )
    # TODO: Handle 'response' of type ContactSignalsByIdResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContactSignalsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactSignalsByIdRequest](lusha/models/contact_signals_by_id_request.py) \| [ContactSignalsByIdRequestDict](lusha/models/contact_signals_by_id_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactSignalsByIdResponse](lusha/models/contact_signals_by_id_response.py)</code> -- Contact signals retrieved successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetContactSignalsByIdErrorBody](lusha/errors/get_contact_signals_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_signal_options(object_type: ObjectTypeOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiSignalsFiltersResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve available signal options for a specific entity type (contact or company).
This endpoint returns the list of signal types you can filter by when enriching contacts or companies.

**Endpoints:**

* **Contacts:** `GET /api/signals/filters/contact`
* **Companies:** `GET /api/signals/filters/company`

#### Available Signal Types

#### For contacts:

* **`allSignals`** - All available contact signal types
* **`promotion`** - Job title promotions
* **`companyChange`** - Company changes

---

#### For companies:

* **`allSignals`** - All available company signal types

**Hiring & Workforce:**

* **`surgeInHiring`** - Overall hiring activity increase
* **`surgeInHiringByDepartment`** - Department-specific hiring surges
* **`surgeInHiringByLocation`** - Location-specific hiring surges

**Headcount Trends:**

| Signal | Description |
|--------|-------------|
| `headcountIncrease1m` / `headcountDecrease1m` | 1-month employee count changes |
| `headcountIncrease3m` / `headcountDecrease3m` | 3-month employee count changes |
| `headcountIncrease6m` / `headcountDecrease6m` | 6-month employee count changes |
| `headcountIncrease12m` / `headcountDecrease12m` | 12-month employee count changes |

**Technology & Digital Presence:**

* **`websiteTrafficIncrease`** - Website traffic growth
* **`websiteTrafficDecrease`** - Website traffic decline
* **`itSpendIncrease`** - IT spending increase
* **`itSpendDecrease`** - IT spending decrease

**News Events:**

To retrieve company news, use one or more of the following category values:

| Signal | Included Events |
|--------|-----------------|
| `commercialActivityNews` | Partnership, New Customer, New Vendor |
| `corporateStrategyNews` | M&A, Facilities Expansion, New Location, Facility Closure, Asset Sale, Lawsuit Filed |
| `financialEventsNews` | Funding Round, Asset Investment, Strategic Investment, IPO |
| `marketIntelligenceNews` | Event Participation, Recognition, Competitor Activity |
| `peopleNews` | Executive Hire, Executive Departure, Executive Promotion, Headcount Increase, Headcount Decrease |
| `productActivityNews` | Product Launch, Product Development, Product Integration |
| `riskNews` | Security Issue, Lawsuit Faced |

> The response also includes available values for signal sub-filters:

* `newsEventTypes` — available event type values for news signal filtering
* `hiringByDepartments` — available department values for hiring surge filtering
* `hiringByLocations` — available location values for hiring surge filtering (array of `{ country, state }` objects)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.get_signal_options(ObjectType.CONTACT)
    # TODO: Handle 'response' of type ApiSignalsFiltersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSignalOptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.get_signal_options(ObjectType.CONTACT)
    # TODO: Handle 'response' of type ApiSignalsFiltersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSignalOptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>object_type</code> | <code>[ObjectTypeOrStr](lusha/models/enums/object_type.py)</code> | The type of object to get signal options for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiSignalsFiltersResponse](lusha/models/api_signals_filters_response.py)</code> -- List of available signal types for the specified object type

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetSignalOptionsErrorBody](lusha/errors/get_signal_options_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_company_signals(body: CompanySignalsSearchRequest | CompanySignalsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CompanySignalsByIdResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for company signals using identifiers like domain, company name, or ID.
This endpoint combines search and signal enrichment in a single request.

*Endpoint*: **(POST) https://api.lusha.com/api/signals/companies/search**

**Search Requirements:**
Each company must have at least one identifier:
- Company ID (as string)
- Company name
- Company domain

**Default Behavior:**
- Returns signals from the last 6 months by default
- Companies are matched based on provided identifiers

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.search_company_signals(
        CompanySignalsSearchRequest(
            companies=[Company1LushaSignalsApi(id="12344321", domain="lusha.com")],
            signals=[Signal1.IT_SPEND_INCREASE],
            start_date=date(2025, 1, 1),
            max_results_per_signal=10,
        ),
    )
    # TODO: Handle 'response' of type CompanySignalsByIdResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompanySignalsErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.search_company_signals(
        CompanySignalsSearchRequest(
            companies=[Company1LushaSignalsApi(id="12344321", domain="lusha.com")],
            signals=[Signal1.IT_SPEND_INCREASE],
            start_date=date(2025, 1, 1),
            max_results_per_signal=10,
        ),
    )
    # TODO: Handle 'response' of type CompanySignalsByIdResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompanySignalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanySignalsSearchRequest](lusha/models/company_signals_search_request.py) \| [CompanySignalsSearchRequestDict](lusha/models/company_signals_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySignalsByIdResponse](lusha/models/company_signals_by_id_response.py)</code> -- Company signals search results

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchCompanySignalsErrorBody](lusha/errors/search_company_signals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_contact_signals(body: ContactSignalsSearchRequest | ContactSignalsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContactSignalsSearchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for contact signals using identifiers like LinkedIn URL, email, or name + company.
This endpoint combines search and signal enrichment in a single request.

*Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts/search**

**Search Requirements:**
Each contact can be identified by:
- Contact ID
- LinkedIn URL
- Email address
- Full name + Company (name or domain)

**Default Behavior:**
- Returns signals from the last 6 months by default
- Contacts are matched based on provided identifiers
- Returns both contact data and associated signals

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.signals_api.search_contact_signals(
        ContactSignalsSearchRequest(
            contacts=[ContactLushaSignalsApi(id="123321", social_link="https://www.linkedin.com/in/ron-nabet")],
            signals=[Signal.PROMOTION, Signal.COMPANY_CHANGE],
            start_date=date(2025, 1, 1),
            max_results_per_signal=5,
        ),
    )
    # TODO: Handle 'response' of type ContactSignalsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchContactSignalsErrorBody
```

**Async**

```python
try:
    response = await async_client.signals_api.search_contact_signals(
        ContactSignalsSearchRequest(
            contacts=[ContactLushaSignalsApi(id="123321", social_link="https://www.linkedin.com/in/ron-nabet")],
            signals=[Signal.PROMOTION, Signal.COMPANY_CHANGE],
            start_date=date(2025, 1, 1),
            max_results_per_signal=5,
        ),
    )
    # TODO: Handle 'response' of type ContactSignalsSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchContactSignalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ContactSignalsSearchRequest](lusha/models/contact_signals_search_request.py) \| [ContactSignalsSearchRequestDict](lusha/models/contact_signals_search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactSignalsSearchResponse](lusha/models/contact_signals_search_response.py)</code> -- Contact signals search results

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[SearchContactSignalsErrorBody](lusha/errors/search_contact_signals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](lusha/apis/webhooks_api.py)

<details>
<summary><code>def create_opt_out_subscription(body: CreateOptOutSubscriptionRequest | CreateOptOutSubscriptionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> OptOutSubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe to real-time notifications when a contact opts out of data processing. When a contact requests removal, Lusha sends an `OptOutWebhookPayload` to your endpoint so you can action the removal in your own systems (CRM, outreach tools, etc.).

*Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/opt-out**

---

**How it works:**
- Create one opt-out subscription per account (scoped to `contact` entity type)
- Lusha delivers a POST request to your URL whenever a contact opts out
- The payload includes the contact identity, opt-out date, and the specific data points (emails and/or phones) that must be removed

**Payload you'll receive:**
``json
{
"contactId": "987654321",
"fullName": "Jane Doe",
"companyName": "Acme Corp",
"jobTitle": "Director of Product",
"linkedinUrl": "https://www.linkedin.com/in/jane-doe",
"contactOptOutDate": "2026-04-22 14:32:11.412",
"contactExposureDate": "2025-08-03 09:15:47",
"datapoints": [
{ "datapointId": "+14155550199", "datapointType": "phone" },
{ "datapointId": "jane.doe@acme.com", "datapointType": "email" }
],
"partnerClientId": "acme-crm-tenant-42"
}
``

> **Important:** Signature verification applies the same way as standard webhook deliveries. See Security & Verification for details.

> **Note:** Ensure your account has a webhook secret before creating this subscription. See Regenerate Account Secret.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.create_opt_out_subscription(
        CreateOptOutSubscriptionRequest(url="https://example.com/webhook", name="Account opt-out webhook")
    )
    # TODO: Handle 'response' of type OptOutSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOptOutSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.create_opt_out_subscription(
        CreateOptOutSubscriptionRequest(url="https://example.com/webhook", name="Account opt-out webhook")
    )
    # TODO: Handle 'response' of type OptOutSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOptOutSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateOptOutSubscriptionRequest](lusha/models/create_opt_out_subscription_request.py) \| [CreateOptOutSubscriptionRequestDict](lusha/models/create_opt_out_subscription_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OptOutSubscriptionResponse](lusha/models/opt_out_subscription_response.py)</code> -- Opt-out subscription created successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[CreateOptOutSubscriptionErrorBody](lusha/errors/create_opt_out_subscription_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_subscription(body: CreateSubscriptionRequest | CreateSubscriptionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CreateSubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates one or more webhook subscriptions for real-time signal notifications.

**Delivery & Reliability:**
- Webhooks are delivered with automatic retry on failures
- Maximum 3 retry attempts with exponential backoff
- Subscriptions auto-disable after max retries exceeded
- All deliveries are logged in audit logs

> **Note:** Your webhook endpoint must respond with a proper acknowledgment.
See Client Response Format below for details.

> **Limit:** Maximum 25 subscriptions per request

*Endpoint*: **(POST) https://api.lusha.com/api/subscriptions**

---

### Webhook Payload You'll Receive
When a signal is triggered, this payload is sent to your webhook URL:
``json
{
"id": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c",
"type": "promotion",
"entityType": "contact",
"entityId": "4158887495",
"subscriptionId": "507f1f77bcf86cd799439011",
"data": {
"personId": 4158887495,
"currentCompanyId": 40823133,
"currentCompanyName": "OMG Hospitality Group LLC",
"currentDomain": "omghospitalitygroup.com",
"currentTitle": "Bartender",
"currentDepartments": [
{ "id": 7, "value": "Other" }
],
"previousCompanyName": "First Watch Restaurants",
"previousDomain": "firstwatch.com",
"signalDate": "2025-07-01"
},
"timestamp": "2026-01-14T16:16:35.841Z",
"billing": {
"creditsCharged": 1
}
}
``
**Example — Company News Signal:**
``json
{
"id": "a7c92f14-1234-4b3e-9d22-8b4fe1d0bc45",
"type": "commercialActivityNews",
"entityType": "company",
"entityId": "33222678",
"subscriptionId": "507f1f77bcf86cd799439011",
"data": {
"companyId": "33222678",
"companyName": "Lusha",
"domain": "lusha.com",
"signalId": "1503910",
"eventType": "partnership",
"eventSummary": "Lusha announced a strategic partnership with Salesforce.",
"articlePublishedDate": "2025-06-15",
"articleTitle": "Lusha Partners with Salesforce",
"articleHighlight": "The partnership enables Salesforce users to access Lusha data directly within their CRM.",
"eventEffectiveDate": "2025-06-10",
"articleUrl": "https://example.com/lusha-salesforce-partnership"
},
"timestamp": "2026-01-14T16:16:35.841Z",
"billing": {
"creditsCharged": 1
}
}
``

**Headers Included:**

| Header | Description |
|--------|-------------|
| `X-Lusha-Signature` | HMAC-SHA256 signature for verification |
| `X-Lusha-Timestamp` | Unix timestamp of the request |
| `Content-Type` | application/json |
| `User-Agent` | Lusha-Webhooks/1.0 |

---
⚠️ **Important:** Ensure your account has a webhook secret before creating subscriptions.
Create one via the Regenerate Account Secret endpoint.

---

### Client Response Format (Required)

When your webhook endpoint receives a delivery, it **must** acknowledge receipt with this response:

**Required Response:**
``json
{
"received": true,
"timestamp": "2026-02-05T10:30:45.123Z",
"webhookId": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c"
}
``

Response Requirements

| Requirement | Value |
|-------------|-------|
| **HTTP Status** | `201 Created` (recommended) or any `2xx` status |
| **Content-Type** | `application/json` |
| **Response Time** | Within 10 seconds |

Field Descriptions & Implementation Guide

**Field Descriptions:**
* `received` (boolean, required): Confirmation flag - must be `true`
* `timestamp` (string, required): ISO 8601 timestamp of receipt
* `webhookId` (string, required): Echo the `id` from webhook payload

**Implementation Example:**
``javascript
app.post('/webhook', async (req, res) => {
// 1. Verify signature
if (!verifyWebhookSignature(req)) {
return res.status(401).json({ error: 'Invalid signature' });
}

// 2. Queue for async processing
await queueWebhook(req.body);

// 3. Acknowledge immediately
res.status(201).json({
received: true,
timestamp: new Date().toISOString(),
webhookId: req.body.id
});
``

**Important Notes:**
* Return acknowledgment **before** heavy processing
* Non-2xx responses trigger retry mechanism
* After 3 failed retries, subscription is disabled

----

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.create_subscription(
        CreateSubscriptionRequest(
            defaults=Defaults(
                url="https://example.com/webhooks/lusha",
                entity_type=EntityType2.CONTACT,
                signal_types=["promotion", "companyChange"],
            ),
            subscriptions=[Subscription1(entity_id="123456", name="My Test Webhook")],
        ),
    )
    # TODO: Handle 'response' of type CreateSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.create_subscription(
        CreateSubscriptionRequest(
            defaults=Defaults(
                url="https://example.com/webhooks/lusha",
                entity_type=EntityType2.CONTACT,
                signal_types=["promotion", "companyChange"],
            ),
            subscriptions=[Subscription1(entity_id="123456", name="My Test Webhook")],
        ),
    )
    # TODO: Handle 'response' of type CreateSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSubscriptionRequest](lusha/models/create_subscription_request.py) \| [CreateSubscriptionRequestDict](lusha/models/create_subscription_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSubscriptionResponse](lusha/models/create_subscription_response.py)</code> -- Subscriptions created (full or partial success)

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[CreateSubscriptionErrorBody](lusha/errors/create_subscription_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_subscriptions(body: ApiSubscriptionsDeleteRequest | ApiSubscriptionsDeleteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DeleteSubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one or more webhook subscriptions. Returns detailed results for each deletion with partial success support.

*Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/delete**

---

**Behavior:**
- Each subscription is processed independently
- Returns detailed results for each item including deleted subscription info
- Invalid ID formats are gracefully handled and reported as NOT_FOUND
- Duplicate IDs are automatically deduplicated
- Deletion is permanent and cannot be undone

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.delete_subscriptions(ApiSubscriptionsDeleteRequest(ids=["sub-123"]))
    # TODO: Handle 'response' of type DeleteSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSubscriptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.delete_subscriptions(ApiSubscriptionsDeleteRequest(ids=["sub-123"]))
    # TODO: Handle 'response' of type DeleteSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSubscriptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiSubscriptionsDeleteRequest](lusha/models/api_subscriptions_delete_request.py) \| [ApiSubscriptionsDeleteRequestDict](lusha/models/api_subscriptions_delete_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteSubscriptionResponse](lusha/models/delete_subscription_response.py)</code> -- Delete operation completed (full or partial success)

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[DeleteSubscriptionsErrorBody](lusha/errors/delete_subscriptions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_account_secret(*, request_options: RequestOptionsOrDict | None = None) -> ApiAccountSecretResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the current account webhook secret.

*Endpoint*: **(GET) https://api.lusha.com/api/account/secret**

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.get_account_secret()
    # TODO: Handle 'response' of type ApiAccountSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountSecretErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_account_secret()
    # TODO: Handle 'response' of type ApiAccountSecretResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountSecretErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiAccountSecretResponse](lusha/models/api_account_secret_response.py)</code> -- Account secret retrieved successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetAccountSecretErrorBody](lusha/errors/get_account_secret_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_audit_log_stats(*, subscription_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AuditLogStatsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get delivery statistics for your account.

*Endpoint*: **(GET) https://api.lusha.com/api/audit-logs/stats**

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.get_audit_log_stats(subscription_id="sub-123")
    # TODO: Handle 'response' of type AuditLogStatsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAuditLogStatsErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_audit_log_stats(subscription_id="sub-123")
    # TODO: Handle 'response' of type AuditLogStatsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAuditLogStatsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str \| None</code> | Filter statistics by subscription ID<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuditLogStatsResponse](lusha/models/audit_log_stats_response.py)</code> -- Statistics retrieved successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetAuditLogStatsErrorBody](lusha/errors/get_audit_log_stats_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_audit_logs(*, subscription_id: str | None = None, status: StatusLushaWebhooksApiOrStr | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> AuditLogsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve webhook delivery logs for your account.

*Endpoint*: **(GET) https://api.lusha.com/api/audit-logs**

**What's Logged:**
- All webhook delivery attempts (success and failures)
- HTTP status codes and response times
- Error messages for failed deliveries
- Delivery timestamps and duration metrics

**Filtering:**
- Filter by subscription ID to see logs for specific subscriptions
- Filter by status to see only successes, failures, or permanent failures

**Rate Limit:** 100 requests/minute per account

> **Note:** Logs are retained for 90 days (successful) and 180 days (failed/DLQ)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.get_audit_logs(
        subscription_id="507f1f77bcf86cd799439011", status=StatusLushaWebhooksApi.SUCCESS, limit=50, offset=0
    )
    # TODO: Handle 'response' of type AuditLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAuditLogsErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_audit_logs(
        subscription_id="507f1f77bcf86cd799439011", status=StatusLushaWebhooksApi.SUCCESS, limit=50, offset=0
    )
    # TODO: Handle 'response' of type AuditLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAuditLogsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str \| None</code> | Filter by subscription ID<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusLushaWebhooksApiOrStr](lusha/models/enums/status_lusha_webhooks_api.py) \| None</code> | Filter by delivery status<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of results (1-100)<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Number of results to skip<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuditLogsResponse](lusha/models/audit_logs_response.py)</code> -- Audit logs retrieved successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetAuditLogsErrorBody](lusha/errors/get_audit_logs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_subscription_by_id(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> SubscriptionWithoutSecret</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single webhook subscription by ID.

*Endpoint*: **(GET) https://api.lusha.com/api/subscriptions/{id}**

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.get_subscription_by_id("507f1f77bcf86cd799439011")
    # TODO: Handle 'response' of type SubscriptionWithoutSecret
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSubscriptionByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_subscription_by_id("507f1f77bcf86cd799439011")
    # TODO: Handle 'response' of type SubscriptionWithoutSecret
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSubscriptionByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionWithoutSecret](lusha/models/subscription_without_secret.py)</code> -- Subscription retrieved successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetSubscriptionByIdErrorBody](lusha/errors/get_subscription_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_subscriptions(*, limit: int | None = 10, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> SubscriptionListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all webhook subscriptions for your account with pagination support.

*Endpoint*: **(GET) https://api.lusha.com/api/subscriptions**

**Pagination:**
- Results are sorted by `createdAt` in descending order (newest first)
- Default limit: 10, max limit: 100
- Use `offset` for pagination through large result sets

> **Note:** The webhook `secret` is never returned in list responses for security.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.list_subscriptions(limit=10, offset=0)
    # TODO: Handle 'response' of type SubscriptionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSubscriptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.list_subscriptions(limit=10, offset=0)
    # TODO: Handle 'response' of type SubscriptionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSubscriptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Maximum number of results (1-100)<br>**Default**: <code>10</code> |
| <code>offset</code> | <code>int \| None</code> | Number of results to skip<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionListResponse](lusha/models/subscription_list_response.py)</code> -- List of subscriptions retrieved successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[ListSubscriptionsErrorBody](lusha/errors/list_subscriptions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def regenerate_account_secret(*, request_options: RequestOptionsOrDict | None = None) -> ApiAccountSecretRegenerateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Regenerate the account webhook secret. Affects **all subscriptions** for the account.

*Endpoint*: **(POST) https://api.lusha.com/api/account/secret/regenerate**

**Behavior:**
- If a secret already exists: Replaces with new secret (old secret is invalidated)
- If no secret exists: Creates new secret automatically

**Important Notes:**
- The secret is only shown once in the response. Store it securely.
- This endpoint always succeeds (upsert operation)
- Regenerating invalidates the old secret for **all subscriptions** (if one existed)
- An account secret must exist before webhooks can be delivered

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.regenerate_account_secret()
    # TODO: Handle 'response' of type ApiAccountSecretRegenerateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RegenerateAccountSecretErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.regenerate_account_secret()
    # TODO: Handle 'response' of type ApiAccountSecretRegenerateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RegenerateAccountSecretErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiAccountSecretRegenerateResponse](lusha/models/api_account_secret_regenerate_response.py)</code> -- Account secret regenerated successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[RegenerateAccountSecretErrorBody](lusha/errors/regenerate_account_secret_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def test_subscription(id_: str, *, mode: ModeOrStr | None = Mode.FULL, request_options: RequestOptionsOrDict | None = None) -> TestSubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Test a webhook subscription by sending a test signal. Supports three test modes.

*Endpoint*: **(POST) https://api.lusha.com/api/subscriptions/{id}/test**
---
**Test Modes:**
- `direct` - Quick HTTP check only (validates URL responds correctly)
- `kafka` - Fanout handler only (tests Kafka message processing)
- `full` - Complete Kafka flow (default - end-to-end test)

**Important Notes:**
- Test deliveries do NOT consume credits
- Test payloads use mock data
- Useful for verifying webhook configuration before going live

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.test_subscription("507f1f77bcf86cd799439011", mode=Mode.FULL)
    # TODO: Handle 'response' of type TestSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.test_subscription("507f1f77bcf86cd799439011", mode=Mode.FULL)
    # TODO: Handle 'response' of type TestSubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID |
| <code>mode</code> | <code>[ModeOrStr](lusha/models/enums/mode.py) \| None</code> | Test mode<br>**Default**: <code>Mode.FULL</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestSubscriptionResponse](lusha/models/test_subscription_response.py)</code> -- Test executed successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[TestSubscriptionErrorBody](lusha/errors/test_subscription_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_subscription(id_: str, body: UpdateSubscriptionRequest | UpdateSubscriptionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing webhook subscription. All fields are optional.

*Endpoint*: **(PATCH) https://api.lusha.com/api/subscriptions/{id}**

---
**Reactivating Disabled Subscriptions:**

When setting `isActive: true` on a previously disabled subscription, the system automatically:
- Clears the `blockReason` field
- Clears the `blockedAt` timestamp
- Resets the retry counter

**Regenerating Secrets:**

Set `regenerateSecret: true` to generate a new webhook secret. The new secret:
- Affects **all subscriptions** for your account
- Is only shown once in the response
- Immediately invalidates the old secret
---

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.update_subscription(
        "507f1f77bcf86cd799439011", UpdateSubscriptionRequest(is_active=False)
    )
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.update_subscription(
        "507f1f77bcf86cd799439011", UpdateSubscriptionRequest(is_active=False)
    )
    # TODO: Handle 'response' of type SubscriptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Subscription ID |
| <code>body</code> | <code>[UpdateSubscriptionRequest](lusha/models/update_subscription_request.py) \| [UpdateSubscriptionRequestDict](lusha/models/update_subscription_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](lusha/models/subscription_response.py)</code> -- Subscription updated successfully

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[UpdateSubscriptionErrorBody](lusha/errors/update_subscription_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebsiteVisits

> Source: [WebsiteVisits](lusha/apis/website_visits.py)

<details>
<summary><code>def get_website_visits(body: WebsiteVisitsRequest | WebsiteVisitsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> WebsiteVisitsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns companies ranked by website-visit signals for your tracked domains and date range.

Domains must be configured for tracking in the Lusha dashboard — they are resolved to site IDs server-side. Each result combines a V3 company firmographic preview (same shape as Search Companies) with behavioral visit metrics.

**Notes:**
- Date range must be ≤ 3 months
- If any requested domain is not configured for tracking, the entire request fails with `400`
- `limit` accepts 1–150

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.website_visits.get_website_visits(
        WebsiteVisitsRequest(
            domains=["lusha.com", "google.com"],
            start_date=date(2026, 1, 1),
            end_date=date(2026, 3, 18),
            pagination=PaginationLushaApiDocumentationWebsiteVisitsApi(size=25, page=0),
            sort=Sort(by="score", order=Order.DESC),
            filters=WebsiteVisitsFilters(
                score_bands=[ScoreBand1.HOT, ScoreBand1.WARM], score=WebsiteVisitsIntRange(min=50)
            ),
        ),
    )
    # TODO: Handle 'response' of type WebsiteVisitsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebsiteVisitsErrorBody
```

**Async**

```python
try:
    response = await async_client.website_visits.get_website_visits(
        WebsiteVisitsRequest(
            domains=["lusha.com", "google.com"],
            start_date=date(2026, 1, 1),
            end_date=date(2026, 3, 18),
            pagination=PaginationLushaApiDocumentationWebsiteVisitsApi(size=25, page=0),
            sort=Sort(by="score", order=Order.DESC),
            filters=WebsiteVisitsFilters(
                score_bands=[ScoreBand1.HOT, ScoreBand1.WARM], score=WebsiteVisitsIntRange(min=50)
            ),
        ),
    )
    # TODO: Handle 'response' of type WebsiteVisitsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebsiteVisitsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WebsiteVisitsRequest](lusha/models/website_visits_request.py) \| [WebsiteVisitsRequestDict](lusha/models/website_visits_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](lusha/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebsiteVisitsResponse](lusha/models/website_visits_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](lusha/core/exceptions.py)&#91;[GetWebsiteVisitsErrorBody](lusha/errors/get_website_visits_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 429 | <code>[ErrorResponse](lusha/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](lusha/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

