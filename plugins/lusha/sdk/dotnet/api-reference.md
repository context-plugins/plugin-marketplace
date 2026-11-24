# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [LushaClient](src/Lusha/LushaClient.cs)

## Account

> Source: [Account](src/Lusha/Api/Account.cs)

<details>
<summary><code>Task&lt;AccountUsageResponse&gt; GetAccountUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Account.GetAccountUsage();
    // TODO: Handle 'response' of type AccountUsageResponse
}
catch (ApiException<GetAccountUsageError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountUsageResponse](src/Lusha/Models/AccountUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetAccountUsageError](src/Lusha/Errors/GetAccountUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AccountManagement

> Source: [AccountManagement](src/Lusha/Api/AccountManagement.cs)

<details>
<summary><code>Task&lt;AccountUsageStatsResponse&gt; GetAccountUsageStats(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AccountManagement.GetAccountUsageStats();
    // TODO: Handle 'response' of type AccountUsageStatsResponse
}
catch (ApiException<GetAccountUsageStatsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountUsageStatsResponse](src/Lusha/Models/AccountUsageStatsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetAccountUsageStatsError](src/Lusha/Errors/GetAccountUsageStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BuyingGroup

> Source: [BuyingGroup](src/Lusha/Api/BuyingGroup.cs)

<details>
<summary><code>Task&lt;V3BuyingGroupResponse&gt; GetContactsBuyingGroup(GetContactsBuyingGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.BuyingGroup.GetContactsBuyingGroup(new GetContactsBuyingGroupRequest
    {
        Body = new V3BuyingGroupRequest
        {
            Companies = [
                new V3BuyingGroupCompanyItem { ClientReferenceId = "comp-ref-1", Domain = "acme.com" },
                new V3BuyingGroupCompanyItem
                {
                    ClientReferenceId = "comp-ref-2",
                    Id = "v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345",
                },
            ],
            Personas = [Persona.DecisionMaker, Persona.PotentialChampion],
            ContactsLimit = 20,
        },
    });
    // TODO: Handle 'response' of type V3BuyingGroupResponse
}
catch (ApiException<GetContactsBuyingGroupError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactsBuyingGroupRequest](src/Lusha/Requests/BuyingGroup/GetContactsBuyingGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3BuyingGroupResponse](src/Lusha/Models/V3BuyingGroupResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactsBuyingGroupError](src/Lusha/Errors/GetContactsBuyingGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CompaniesTables

> Source: [CompaniesTables](src/Lusha/Api/CompaniesTables.cs)

<details>
<summary><code>Task&lt;EntitiesAddResponse&gt; AddCompaniesTableEntities(AddCompaniesTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.AddCompaniesTableEntities(new AddCompaniesTableEntitiesRequest
    {
        TableId = "482910",
        Body = new EntitiesAddRequest
        {
            EntityIds = ["30058211", "30058212"],
            Owner = new TableOwner { Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type EntitiesAddResponse
}
catch (ApiException<AddCompaniesTableEntitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddCompaniesTableEntitiesRequest](src/Lusha/Requests/CompaniesTables/AddCompaniesTableEntitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesAddResponse](src/Lusha/Models/EntitiesAddResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[AddCompaniesTableEntitiesError](src/Lusha/Errors/AddCompaniesTableEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TableResponse&gt; CreateCompaniesTable(CreateCompaniesTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.CreateCompaniesTable(new CreateCompaniesTableRequest
    {
        Body = new TableCreateRequest
        {
            Name = "postman-companies",
            Visibility = Visibility.Private,
            Owner = new TableOwner { Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type TableResponse
}
catch (ApiException<CreateCompaniesTableError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCompaniesTableRequest](src/Lusha/Requests/CompaniesTables/CreateCompaniesTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](src/Lusha/Models/TableResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[CreateCompaniesTableError](src/Lusha/Errors/CreateCompaniesTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3CompaniesTablesResponse&gt; DeleteCompaniesTable(DeleteCompaniesTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.DeleteCompaniesTable(new DeleteCompaniesTableRequest
    {
        TableId = "482910",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type V3CompaniesTablesResponse
}
catch (ApiException<DeleteCompaniesTableError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCompaniesTableRequest](src/Lusha/Requests/CompaniesTables/DeleteCompaniesTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesTablesResponse](src/Lusha/Models/V3CompaniesTablesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[DeleteCompaniesTableError](src/Lusha/Errors/DeleteCompaniesTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TableResponse&gt; GetCompaniesTable(GetCompaniesTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.GetCompaniesTable(new GetCompaniesTableRequest
    {
        TableId = "482910",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type TableResponse
}
catch (ApiException<GetCompaniesTableError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompaniesTableRequest](src/Lusha/Requests/CompaniesTables/GetCompaniesTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](src/Lusha/Models/TableResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesTableError](src/Lusha/Errors/GetCompaniesTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntitiesGetResponse&gt; GetCompaniesTableEntities(GetCompaniesTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.GetCompaniesTableEntities(new GetCompaniesTableEntitiesRequest
    {
        TableId = "482910",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type EntitiesGetResponse
}
catch (ApiException<GetCompaniesTableEntitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompaniesTableEntitiesRequest](src/Lusha/Requests/CompaniesTables/GetCompaniesTableEntitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesGetResponse](src/Lusha/Models/EntitiesGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesTableEntitiesError](src/Lusha/Errors/GetCompaniesTableEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ColumnsListResponse&gt; ListCompaniesTableColumns(ListCompaniesTableColumnsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.ListCompaniesTableColumns(new ListCompaniesTableColumnsRequest
    {
        TableId = "482910",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type ColumnsListResponse
}
catch (ApiException<ListCompaniesTableColumnsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCompaniesTableColumnsRequest](src/Lusha/Requests/CompaniesTables/ListCompaniesTableColumnsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ColumnsListResponse](src/Lusha/Models/ColumnsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[ListCompaniesTableColumnsError](src/Lusha/Errors/ListCompaniesTableColumnsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TableListResponse&gt; ListCompaniesTables(ListCompaniesTablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.ListCompaniesTables(new ListCompaniesTablesRequest
    {
        Body = new TableListRequest
        {
            Owner = new TableOwner { Email = "user@example.com" },
            Page = 0,
            Size = 10,
            Status = Status1.Active,
        },
    });
    // TODO: Handle 'response' of type TableListResponse
}
catch (ApiException<ListCompaniesTablesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCompaniesTablesRequest](src/Lusha/Requests/CompaniesTables/ListCompaniesTablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableListResponse](src/Lusha/Models/TableListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[ListCompaniesTablesError](src/Lusha/Errors/ListCompaniesTablesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3CompaniesTablesColumnsResponse&gt; RemoveCompaniesTableColumn(RemoveCompaniesTableColumnRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.RemoveCompaniesTableColumn(new RemoveCompaniesTableColumnRequest
    {
        TableId = "482910",
        ColumnId = "col_signals_funding",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type V3CompaniesTablesColumnsResponse
}
catch (ApiException<RemoveCompaniesTableColumnError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveCompaniesTableColumnRequest](src/Lusha/Requests/CompaniesTables/RemoveCompaniesTableColumnRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesTablesColumnsResponse](src/Lusha/Models/V3CompaniesTablesColumnsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[RemoveCompaniesTableColumnError](src/Lusha/Errors/RemoveCompaniesTableColumnError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntitiesRemoveResponse&gt; RemoveCompaniesTableEntities(RemoveCompaniesTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.RemoveCompaniesTableEntities(new RemoveCompaniesTableEntitiesRequest
    {
        TableId = "482910",
        Body = new EntitiesRemoveRequest
        {
            EntityIds = ["10117615"],
            Owner = new TableOwner { Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type EntitiesRemoveResponse
}
catch (ApiException<RemoveCompaniesTableEntitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveCompaniesTableEntitiesRequest](src/Lusha/Requests/CompaniesTables/RemoveCompaniesTableEntitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesRemoveResponse](src/Lusha/Models/EntitiesRemoveResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[RemoveCompaniesTableEntitiesError](src/Lusha/Errors/RemoveCompaniesTableEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ColumnsRunResponse&gt; RunCompaniesTableColumn(RunCompaniesTableColumnRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.RunCompaniesTableColumn(new RunCompaniesTableColumnRequest
    {
        TableId = "482910",
        ColumnId = "col_signals_funding",
        Body = new ColumnsRunRequest
        {
            RunScope = RunScope.Missing,
            Owner = new TableOwner { Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type ColumnsRunResponse
}
catch (ApiException<RunCompaniesTableColumnError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RunCompaniesTableColumnRequest](src/Lusha/Requests/CompaniesTables/RunCompaniesTableColumnRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ColumnsRunResponse](src/Lusha/Models/ColumnsRunResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[RunCompaniesTableColumnError](src/Lusha/Errors/RunCompaniesTableColumnError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TableResponse&gt; UpdateCompaniesTable(UpdateCompaniesTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompaniesTables.UpdateCompaniesTable(new UpdateCompaniesTableRequest
    {
        TableId = "482910",
        Body = new TableUpdateRequest
        {
            Name = "postman-renamed",
            Visibility = Visibility.Shared,
            Owner = new TableOwner { Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type TableResponse
}
catch (ApiException<UpdateCompaniesTableError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCompaniesTableRequest](src/Lusha/Requests/CompaniesTables/UpdateCompaniesTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](src/Lusha/Models/TableResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[UpdateCompaniesTableError](src/Lusha/Errors/UpdateCompaniesTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CompanyFiltersApi

> Source: [CompanyFiltersApi](src/Lusha/Api/CompanyFiltersApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;IndustryLabel&gt;&gt; GetCompanyIndustries(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompanyFiltersApi.GetCompanyIndustries();
    // TODO: Handle 'response' of type IReadOnlyList<IndustryLabel>
}
catch (ApiException<GetCompanyIndustriesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[IndustryLabel](src/Lusha/Models/IndustryLabel.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanyIndustriesError](src/Lusha/Errors/GetCompanyIndustriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;string&gt;&gt; GetCompanyIntentTopics(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompanyFiltersApi.GetCompanyIntentTopics();
    // TODO: Handle 'response' of type IReadOnlyList<string>
}
catch (ApiException<GetCompanyIntentTopicsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanyIntentTopicsError](src/Lusha/Errors/GetCompanyIntentTopicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;NaicsCode&gt;&gt; GetCompanyNaicsCodes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompanyFiltersApi.GetCompanyNaicsCodes();
    // TODO: Handle 'response' of type IReadOnlyList<NaicsCode>
}
catch (ApiException<GetCompanyNaicsCodesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[NaicsCode](src/Lusha/Models/NaicsCode.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanyNaicsCodesError](src/Lusha/Errors/GetCompanyNaicsCodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;RevenueRange&gt;&gt; GetCompanyRevenues(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompanyFiltersApi.GetCompanyRevenues();
    // TODO: Handle 'response' of type IReadOnlyList<RevenueRange>
}
catch (ApiException<GetCompanyRevenuesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[RevenueRange](src/Lusha/Models/RevenueRange.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanyRevenuesError](src/Lusha/Errors/GetCompanyRevenuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;SicCode&gt;&gt; GetCompanySicCodes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompanyFiltersApi.GetCompanySicCodes();
    // TODO: Handle 'response' of type IReadOnlyList<SicCode>
}
catch (ApiException<GetCompanySicCodesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[SicCode](src/Lusha/Models/SicCode.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanySicCodesError](src/Lusha/Errors/GetCompanySicCodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CompanySizeRange&gt;&gt; GetCompanySizes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompanyFiltersApi.GetCompanySizes();
    // TODO: Handle 'response' of type IReadOnlyList<CompanySizeRange>
}
catch (ApiException<GetCompanySizesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CompanySizeRange](src/Lusha/Models/CompanySizeRange.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanySizesError](src/Lusha/Errors/GetCompanySizesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CompanyLocationFilter&gt;&gt; SearchCompanyLocations(SearchCompanyLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompanyFiltersApi.SearchCompanyLocations(new SearchCompanyLocationsRequest
    {
        Body = new LocationSearchRequest { Text = "Israel" },
    });
    // TODO: Handle 'response' of type IReadOnlyList<CompanyLocationFilter>
}
catch (ApiException<SearchCompanyLocationsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCompanyLocationsRequest](src/Lusha/Requests/CompanyFiltersApi/SearchCompanyLocationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CompanyLocationFilter](src/Lusha/Models/CompanyLocationFilter.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchCompanyLocationsError](src/Lusha/Errors/SearchCompanyLocationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CompanyNameResult&gt;&gt; SearchCompanyNames(SearchCompanyNamesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompanyFiltersApi.SearchCompanyNames(new SearchCompanyNamesRequest
    {
        Body = new CompanyNameSearchRequest { Text = "lusha" },
    });
    // TODO: Handle 'response' of type IReadOnlyList<CompanyNameResult>
}
catch (ApiException<SearchCompanyNamesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCompanyNamesRequest](src/Lusha/Requests/CompanyFiltersApi/SearchCompanyNamesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CompanyNameResult](src/Lusha/Models/CompanyNameResult.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchCompanyNamesError](src/Lusha/Errors/SearchCompanyNamesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Technology&gt;&gt; SearchCompanyTechnologies(SearchCompanyTechnologiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CompanyFiltersApi.SearchCompanyTechnologies(new SearchCompanyTechnologiesRequest
    {
        Body = new TechnologySearchRequest { Text = "rss" },
    });
    // TODO: Handle 'response' of type IReadOnlyList<Technology>
}
catch (ApiException<SearchCompanyTechnologiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCompanyTechnologiesRequest](src/Lusha/Requests/CompanyFiltersApi/SearchCompanyTechnologiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Technology](src/Lusha/Models/Technology.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchCompanyTechnologiesError](src/Lusha/Errors/SearchCompanyTechnologiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContactFiltersApi

> Source: [ContactFiltersApi](src/Lusha/Api/ContactFiltersApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CountryFilter&gt;&gt; GetContactCountries(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactFiltersApi.GetContactCountries();
    // TODO: Handle 'response' of type IReadOnlyList<CountryFilter>
}
catch (ApiException<GetContactCountriesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CountryFilter](src/Lusha/Models/CountryFilter.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactCountriesError](src/Lusha/Errors/GetContactCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;string&gt;&gt; GetContactDataPoints(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactFiltersApi.GetContactDataPoints();
    // TODO: Handle 'response' of type IReadOnlyList<string>
}
catch (ApiException<GetContactDataPointsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactDataPointsError](src/Lusha/Errors/GetContactDataPointsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;string&gt;&gt; GetContactDepartments(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactFiltersApi.GetContactDepartments();
    // TODO: Handle 'response' of type IReadOnlyList<string>
}
catch (ApiException<GetContactDepartmentsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactDepartmentsError](src/Lusha/Errors/GetContactDepartmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;string&gt;&gt; GetContactSeniority(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactFiltersApi.GetContactSeniority();
    // TODO: Handle 'response' of type IReadOnlyList<string>
}
catch (ApiException<GetContactSeniorityError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactSeniorityError](src/Lusha/Errors/GetContactSeniorityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;LocationFilter&gt;&gt; SearchContactLocations(SearchContactLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactFiltersApi.SearchContactLocations(new SearchContactLocationsRequest
    {
        Body = new LocationSearchRequest { Text = "un" },
    });
    // TODO: Handle 'response' of type IReadOnlyList<LocationFilter>
}
catch (ApiException<SearchContactLocationsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchContactLocationsRequest](src/Lusha/Requests/ContactFiltersApi/SearchContactLocationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[LocationFilter](src/Lusha/Models/LocationFilter.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchContactLocationsError](src/Lusha/Errors/SearchContactLocationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContactsTables

> Source: [ContactsTables](src/Lusha/Api/ContactsTables.cs)

<details>
<summary><code>Task&lt;EntitiesAddResponse&gt; AddContactsTableEntities(AddContactsTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.AddContactsTableEntities(new AddContactsTableEntitiesRequest
    {
        TableId = "482910",
        Body = new EntitiesAddRequest
        {
            EntityIds = ["10042854", "10042855", "10042856"],
            CompanyIds = ["16303253", "16303253", "12790225"],
            Owner = new TableOwner { Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type EntitiesAddResponse
}
catch (ApiException<AddContactsTableEntitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddContactsTableEntitiesRequest](src/Lusha/Requests/ContactsTables/AddContactsTableEntitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesAddResponse](src/Lusha/Models/EntitiesAddResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[AddContactsTableEntitiesError](src/Lusha/Errors/AddContactsTableEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TableResponse&gt; CreateContactsTable(CreateContactsTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.CreateContactsTable(new CreateContactsTableRequest
    {
        Body = new TableCreateRequest
        {
            Name = "VP Sales US Tech Q2",
            Visibility = Visibility.Private,
            Owner = new TableOwner { Email = "user@example.com" },
            Ids = ["10042851", "10042852"],
        },
    });
    // TODO: Handle 'response' of type TableResponse
}
catch (ApiException<CreateContactsTableError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateContactsTableRequest](src/Lusha/Requests/ContactsTables/CreateContactsTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](src/Lusha/Models/TableResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[CreateContactsTableError](src/Lusha/Errors/CreateContactsTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3ContactsTablesResponse&gt; DeleteContactsTable(DeleteContactsTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.DeleteContactsTable(new DeleteContactsTableRequest
    {
        TableId = "482910",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type V3ContactsTablesResponse
}
catch (ApiException<DeleteContactsTableError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteContactsTableRequest](src/Lusha/Requests/ContactsTables/DeleteContactsTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsTablesResponse](src/Lusha/Models/V3ContactsTablesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[DeleteContactsTableError](src/Lusha/Errors/DeleteContactsTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TableResponse&gt; GetContactsTable(GetContactsTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.GetContactsTable(new GetContactsTableRequest
    {
        TableId = "482910",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type TableResponse
}
catch (ApiException<GetContactsTableError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactsTableRequest](src/Lusha/Requests/ContactsTables/GetContactsTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](src/Lusha/Models/TableResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactsTableError](src/Lusha/Errors/GetContactsTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntitiesGetResponse&gt; GetContactsTableEntities(GetContactsTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.GetContactsTableEntities(new GetContactsTableEntitiesRequest
    {
        TableId = "482910",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type EntitiesGetResponse
}
catch (ApiException<GetContactsTableEntitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactsTableEntitiesRequest](src/Lusha/Requests/ContactsTables/GetContactsTableEntitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesGetResponse](src/Lusha/Models/EntitiesGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactsTableEntitiesError](src/Lusha/Errors/GetContactsTableEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ColumnsListResponse&gt; ListContactsTableColumns(ListContactsTableColumnsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.ListContactsTableColumns(new ListContactsTableColumnsRequest
    {
        TableId = "482910",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type ColumnsListResponse
}
catch (ApiException<ListContactsTableColumnsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListContactsTableColumnsRequest](src/Lusha/Requests/ContactsTables/ListContactsTableColumnsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ColumnsListResponse](src/Lusha/Models/ColumnsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[ListContactsTableColumnsError](src/Lusha/Errors/ListContactsTableColumnsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TableListResponse&gt; ListContactsTables(ListContactsTablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.ListContactsTables(new ListContactsTablesRequest
    {
        Body = new TableListRequest
        {
            Owner = new TableOwner { Email = "user@example.com" },
            Page = 0,
            Size = 10,
            Status = Status1.Active,
        },
    });
    // TODO: Handle 'response' of type TableListResponse
}
catch (ApiException<ListContactsTablesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListContactsTablesRequest](src/Lusha/Requests/ContactsTables/ListContactsTablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableListResponse](src/Lusha/Models/TableListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[ListContactsTablesError](src/Lusha/Errors/ListContactsTablesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3ContactsTablesColumnsResponse&gt; RemoveContactsTableColumn(RemoveContactsTableColumnRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.RemoveContactsTableColumn(new RemoveContactsTableColumnRequest
    {
        TableId = "482910",
        ColumnId = "col_signals_funding",
        Email = "user@example.com",
    });
    // TODO: Handle 'response' of type V3ContactsTablesColumnsResponse
}
catch (ApiException<RemoveContactsTableColumnError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveContactsTableColumnRequest](src/Lusha/Requests/ContactsTables/RemoveContactsTableColumnRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsTablesColumnsResponse](src/Lusha/Models/V3ContactsTablesColumnsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[RemoveContactsTableColumnError](src/Lusha/Errors/RemoveContactsTableColumnError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntitiesRemoveResponse&gt; RemoveContactsTableEntities(RemoveContactsTableEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.RemoveContactsTableEntities(new RemoveContactsTableEntitiesRequest
    {
        TableId = "482910",
        Body = new EntitiesRemoveRequest
        {
            EntityIds = ["10042851", "10042852"],
            Owner = new TableOwner { Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type EntitiesRemoveResponse
}
catch (ApiException<RemoveContactsTableEntitiesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveContactsTableEntitiesRequest](src/Lusha/Requests/ContactsTables/RemoveContactsTableEntitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitiesRemoveResponse](src/Lusha/Models/EntitiesRemoveResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[RemoveContactsTableEntitiesError](src/Lusha/Errors/RemoveContactsTableEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ColumnsRunResponse&gt; RunContactsTableColumn(RunContactsTableColumnRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.RunContactsTableColumn(new RunContactsTableColumnRequest
    {
        TableId = "482910",
        ColumnId = "col_signals_funding",
        Body = new ColumnsRunRequest
        {
            RunScope = RunScope.Specific,
            EntityIds = ["10042851", "10042852"],
            Owner = new TableOwner { Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type ColumnsRunResponse
}
catch (ApiException<RunContactsTableColumnError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RunContactsTableColumnRequest](src/Lusha/Requests/ContactsTables/RunContactsTableColumnRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ColumnsRunResponse](src/Lusha/Models/ColumnsRunResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[RunContactsTableColumnError](src/Lusha/Errors/RunContactsTableColumnError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TableResponse&gt; UpdateContactsTable(UpdateContactsTableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ContactsTables.UpdateContactsTable(new UpdateContactsTableRequest
    {
        TableId = "482910",
        Body = new TableUpdateRequest
        {
            Name = "postman-renamed",
            Visibility = Visibility.Shared,
            Owner = new TableOwner { Email = "user@example.com" },
        },
    });
    // TODO: Handle 'response' of type TableResponse
}
catch (ApiException<UpdateContactsTableError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateContactsTableRequest](src/Lusha/Requests/ContactsTables/UpdateContactsTableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TableResponse](src/Lusha/Models/TableResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[UpdateContactsTableError](src/Lusha/Errors/UpdateContactsTableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Enrich

> Source: [Enrich](src/Lusha/Api/Enrich.cs)

<details>
<summary><code>Task&lt;V3CompaniesEnrichResponse&gt; EnrichCompanies(EnrichCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Enrich.EnrichCompanies(new EnrichCompaniesRequest
    {
        Body = new V3CompaniesEnrichRequest
        {
            Ids = ["16303253", "12790225"],
            Reveal = [
                Reveal1.EmployeesByLocation,
                Reveal1.EmployeesByDepartment,
                Reveal1.EmployeesBySeniority,
                Reveal1.Competitors,
                Reveal1.Intent,
            ],
        },
    });
    // TODO: Handle 'response' of type V3CompaniesEnrichResponse
}
catch (ApiException<EnrichCompaniesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnrichCompaniesRequest](src/Lusha/Requests/Enrich/EnrichCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesEnrichResponse](src/Lusha/Models/V3CompaniesEnrichResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[EnrichCompaniesError](src/Lusha/Errors/EnrichCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3ContactsEnrichResponse&gt; EnrichContacts(EnrichContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```json
"reveal": ["emails", "phones"],
"waterfallEnabled": false
```

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

```csharp
try
{
    var response = await client.Enrich.EnrichContacts(new EnrichContactsRequest
    {
        Body = new V3ContactsEnrichRequest
        {
            Ids = ["4389064654", "4389064624"],
            Reveal = [Reveal.Emails, Reveal.Phones],
        },
    });
    // TODO: Handle 'response' of type V3ContactsEnrichResponse
}
catch (ApiException<EnrichContactsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnrichContactsRequest](src/Lusha/Requests/Enrich/EnrichContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsEnrichResponse](src/Lusha/Models/V3ContactsEnrichResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[EnrichContactsError](src/Lusha/Errors/EnrichContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Enrichment

> Source: [Enrichment](src/Lusha/Api/Enrichment.cs)

<details>
<summary><code>Task&lt;IReadOnlyDictionary&lt;string, CompanyBulkResponse&gt;&gt; SearchMultipleCompaniesV2(SearchMultipleCompaniesV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for multiple companies in a single request. Provide a list of companies with
identifiers like domain names or company IDs.
>##### Endpoint:
```
POST https://api.lusha.com/bulk/company/v2
```

>##### Notes:
- At least one of `domain`, `company`, or `companyId` is required.
- You can process up to 100 companies per request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Enrichment.SearchMultipleCompaniesV2(new SearchMultipleCompaniesV2Request
    {
        Body = new CompaniesBulkRequest
        {
            Companies = [
                new CompanyBulkRequest { Id = "1", Name = "Lusha" },
                new CompanyBulkRequest { Id = "2", Domain = "google.com" },
            ],
        },
    });
    // TODO: Handle 'response' of type IReadOnlyDictionary<string, CompanyBulkResponse>
}
catch (ApiException<SearchMultipleCompaniesV2Error> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchMultipleCompaniesV2Request](src/Lusha/Requests/Enrichment/SearchMultipleCompaniesV2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyDictionary&lt;string, [CompanyBulkResponse](src/Lusha/Models/CompanyBulkResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchMultipleCompaniesV2Error](src/Lusha/Errors/SearchMultipleCompaniesV2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkPersonResponse&gt; SearchMultipleContacts(SearchMultipleContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrich multiple contacts in a single request. This endpoint allows you to submit a list of contacts
and receive enriched data for each one, including company information.

>##### Endpoint:
```
POST https://api.lusha.com/v2/person
```

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

```csharp
try
{
    var response = await client.Enrichment.SearchMultipleContacts(new SearchMultipleContactsRequest
    {
        Body = new SearchBulkContactsRequest
        {
            Contacts = [
                new ContactSearchBulk
                {
                    ContactId = "1",
                    PersonId = "4183886134",
                    FullName = "John Doe",
                    Email = "john@example.com",
                    Companies = [
                        new CompanyLushaApiDocumentationEnrichmentApi
                        {
                            Name = "Example Corp",
                            Domain = "example.com",
                            IsCurrent = true,
                        },
                    ],
                },
                new ContactSearchBulk
                {
                    ContactId = "2",
                    PersonId = "4183886135",
                    LinkedinUrl = "https://www.linkedin.com/in/carolinaportela/",
                },
            ],
            Metadata = new Metadata2
            {
                RevealEmails = true,
                RevealPhones = true,
                Signals = [Signal.Promotion, Signal.CompanyChange],
                SignalsStartDate = DateTimeOffset.Parse("2025-03-01T00:00:00Z"),
                PartialProfile = true,
            },
        },
    });
    // TODO: Handle 'response' of type BulkPersonResponse
}
catch (ApiException<SearchMultipleContactsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchMultipleContactsRequest](src/Lusha/Requests/Enrichment/SearchMultipleContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkPersonResponse](src/Lusha/Models/BulkPersonResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchMultipleContactsError](src/Lusha/Errors/SearchMultipleContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanySingleResponse&gt; SearchSingleCompanyV2(SearchSingleCompanyV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find detailed information about a single company by using different paramaters.
>##### Endpoint:
```
GET https://api.lusha.com/v2/company
```

>##### Notes:
- At least one of `domain`, `company`, or `companyId` is required.
- Signal sub-filters (`newsEventTypes`, `hiringByDepartments`, `hiringByLocations`) are not supported on this endpoint. Use `POST /bulk/company/v2` with the `signalsFilters` parameter for filtered signal retrieval.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Enrichment.SearchSingleCompanyV2(new SearchSingleCompanyV2Request
    {
        Domain = "example.com",
        Company = "Lusha",
        CompanyId = "1234567890",
        Signals = [Signal1.ItSpendIncrease],
        SignalsStartDate = DateTimeOffset.Parse("2025-03-01T00:00:00Z"),
        PartialCompany = false,
    });
    // TODO: Handle 'response' of type CompanySingleResponse
}
catch (ApiException<SearchSingleCompanyV2Error> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchSingleCompanyV2Request](src/Lusha/Requests/Enrichment/SearchSingleCompanyV2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySingleResponse](src/Lusha/Models/CompanySingleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchSingleCompanyV2Error](src/Lusha/Errors/SearchSingleCompanyV2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SingleContactResponse&gt; SearchSingleContact(SearchSingleContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find and enrich a single contact using various search criteria. You can search by name, email,
LinkedIn URL, or Person Id.
>##### Endpoint
```
GET https://api.lusha.com/v2/person
```

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

```csharp
try
{
    var response = await client.Enrichment.SearchSingleContact(new SearchSingleContactRequest
    {
        FirstName = "Dustin",
        LastName = "Moskovitz",
        PersonId = "4183886134",
        CompanyName = "Lusha",
        CompanyDomain = "lusha.com",
        Email = "dustin@lusha.com",
        LinkedinUrl = "https://www.linkedin.com/in/dustin/",
        RefreshJobInfo = true,
        RevealEmails = true,
        RevealPhones = true,
        Signals = [Signal.Promotion],
        SignalsStartDate = DateTimeOffset.Parse("2025-03-01T00:00:00Z"),
        PartialProfile = true,
    });
    // TODO: Handle 'response' of type SingleContactResponse
}
catch (ApiException<SearchSingleContactError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchSingleContactRequest](src/Lusha/Requests/Enrichment/SearchSingleContactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SingleContactResponse](src/Lusha/Models/SingleContactResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchSingleContactError](src/Lusha/Errors/SearchSingleContactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FiltersApi

> Source: [FiltersApi](src/Lusha/Api/FiltersApi.cs)

<details>
<summary><code>Task&lt;FilterTypesDiscoveryResponse&gt; GetCompanyFilterTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.FiltersApi.GetCompanyFilterTypes();
    // TODO: Handle 'response' of type FilterTypesDiscoveryResponse
}
catch (ApiException<GetCompanyFilterTypesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterTypesDiscoveryResponse](src/Lusha/Models/FilterTypesDiscoveryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanyFilterTypesError](src/Lusha/Errors/GetCompanyFilterTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FilterValuesResponse&gt; GetCompanyFilterValues(GetCompanyFilterValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.FiltersApi.GetCompanyFilterValues(new GetCompanyFilterValuesRequest
    {
        FilterType = FilterType1.Names,
    });
    // TODO: Handle 'response' of type FilterValuesResponse
}
catch (ApiException<GetCompanyFilterValuesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanyFilterValuesRequest](src/Lusha/Requests/FiltersApi/GetCompanyFilterValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterValuesResponse](src/Lusha/Models/FilterValuesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanyFilterValuesError](src/Lusha/Errors/GetCompanyFilterValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FilterTypesDiscoveryResponse&gt; GetContactFilterTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.FiltersApi.GetContactFilterTypes();
    // TODO: Handle 'response' of type FilterTypesDiscoveryResponse
}
catch (ApiException<GetContactFilterTypesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterTypesDiscoveryResponse](src/Lusha/Models/FilterTypesDiscoveryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactFilterTypesError](src/Lusha/Errors/GetContactFilterTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FilterValuesResponse&gt; GetContactFilterValues(GetContactFilterValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.FiltersApi.GetContactFilterValues(new GetContactFilterValuesRequest
    {
        FilterType = FilterType.Departments,
    });
    // TODO: Handle 'response' of type FilterValuesResponse
}
catch (ApiException<GetContactFilterValuesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactFilterValuesRequest](src/Lusha/Requests/FiltersApi/GetContactFilterValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterValuesResponse](src/Lusha/Models/FilterValuesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactFilterValuesError](src/Lusha/Errors/GetContactFilterValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Lookalikes

> Source: [Lookalikes](src/Lusha/Api/Lookalikes.cs)

<details>
<summary><code>Task&lt;CompanyLookalikesResponse&gt; GetCompanyLookalikes(GetCompanyLookalikesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Lookalikes.GetCompanyLookalikes(new GetCompanyLookalikesRequest
    {
        Body = new CompanyLookalikesRequest
        {
            Seeds = new CompanyIdentifiersBatch
            {
                Domains = ["sap.com", "oracle.com"],
                LinkedinUrls = ["https://www.linkedin.com/company/google"],
            },
            Exclude = new CompanyIdentifiersBatch { Domains = ["existingcustomer.com"] },
            Limit = 100,
        },
    });
    // TODO: Handle 'response' of type CompanyLookalikesResponse
}
catch (ApiException<GetCompanyLookalikesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanyLookalikesRequest](src/Lusha/Requests/Lookalikes/GetCompanyLookalikesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyLookalikesResponse](src/Lusha/Models/CompanyLookalikesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanyLookalikesError](src/Lusha/Errors/GetCompanyLookalikesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactLookalikesResponse&gt; GetContactLookalikes(GetContactLookalikesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Lookalikes.GetContactLookalikes(new GetContactLookalikesRequest
    {
        Body = new ContactLookalikesRequest
        {
            Seeds = new ContactIdentifiersBatch
            {
                LinkedinUrls = ["https://www.linkedin.com/in/orit-shilvock-6243bb5"],
                Emails = ["gal.ashkelon@lusha.com"],
                Ids = ["1234"],
            },
            Exclude = new ContactIdentifiersBatch { Emails = ["existing@customer.com"] },
            Limit = 25,
        },
    });
    // TODO: Handle 'response' of type ContactLookalikesResponse
}
catch (ApiException<GetContactLookalikesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactLookalikesRequest](src/Lusha/Requests/Lookalikes/GetContactLookalikesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactLookalikesResponse](src/Lusha/Models/ContactLookalikesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactLookalikesError](src/Lusha/Errors/GetContactLookalikesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanyLookalikesResponse2&gt; PostV3LookalikeCompanies(PostV3LookalikeCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Lookalikes.PostV3LookalikeCompanies(new PostV3LookalikeCompaniesRequest
    {
        Body = new CompanyLookalikesRequest2
        {
            Seeds = new CompanyIdentifiersBatch
            {
                Domains = ["sap.com", "oracle.com", "the-company.com"],
                LinkedinUrls = ["https://www.linkedin.com/company/google", "https://www.linkedin.com/company/someone"],
            },
            Exclude = new CompanyIdentifiersBatch
            {
                Domains = ["existingcustomer.com", "already-sent.com"],
                LinkedinUrls = ["https://www.linkedin.com/company/already-sent/"],
            },
            Limit = 100,
        },
    });
    // TODO: Handle 'response' of type CompanyLookalikesResponse2
}
catch (ApiException<PostV3LookalikeCompaniesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostV3LookalikeCompaniesRequest](src/Lusha/Requests/Lookalikes/PostV3LookalikeCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyLookalikesResponse2](src/Lusha/Models/CompanyLookalikesResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[PostV3LookalikeCompaniesError](src/Lusha/Errors/PostV3LookalikeCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactLookalikesResponse2&gt; PostV3LookalikeContacts(PostV3LookalikeContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Lookalikes.PostV3LookalikeContacts(new PostV3LookalikeContactsRequest
    {
        Body = new ContactLookalikesRequest2
        {
            Seeds = new ContactIdentifiersBatch2
            {
                LinkedinUrls = ["https://www.linkedin.com/in/johndoe"],
                Contacts = [new ContactItem2 { FirstName = "Alice", LastName = "Smith", CompanyDomain = "sap.com" }],
                Emails = ["jane@acme.com", "bob@example.com"],
                ContactIds = [1234, 4567],
            },
            Exclude = new ContactIdentifiersBatch2
            {
                LinkedinUrls = ["https://www.linkedin.com/in/already-contacted/"],
                Emails = ["existing@customer.com"],
                ContactIds = [9999],
            },
            Limit = 25,
        },
    });
    // TODO: Handle 'response' of type ContactLookalikesResponse2
}
catch (ApiException<PostV3LookalikeContactsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostV3LookalikeContactsRequest](src/Lusha/Requests/Lookalikes/PostV3LookalikeContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactLookalikesResponse2](src/Lusha/Models/ContactLookalikesResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[PostV3LookalikeContactsError](src/Lusha/Errors/PostV3LookalikeContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Prospecting

> Source: [Prospecting](src/Lusha/Api/Prospecting.cs)

<details>
<summary><code>Task&lt;V3ProspectingCompaniesResponse&gt; ProspectingCompanies(ProspectingCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Prospecting.ProspectingCompanies(new ProspectingCompaniesRequest
    {
        Body = new V3ProspectingCompaniesRequest
        {
            Pagination = new V3PaginationRequest { Page = 0, Size = 25 },
            Filters = new Filters
            {
                Companies = new Companies1
                {
                    Include = new V3CompanyProspectingFilters(),
                    Exclude = new V3CompanyProspectingFilters(),
                },
            },
            TableId = "583021",
            Options = new Options1 { IncludePartialProfiles = false },
        },
    });
    // TODO: Handle 'response' of type V3ProspectingCompaniesResponse
}
catch (ApiException<ProspectingCompaniesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProspectingCompaniesRequest](src/Lusha/Requests/Prospecting/ProspectingCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ProspectingCompaniesResponse](src/Lusha/Models/V3ProspectingCompaniesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[ProspectingCompaniesError](src/Lusha/Errors/ProspectingCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3ProspectingContactsResponse&gt; ProspectingContacts(ProspectingContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Prospecting.ProspectingContacts(new ProspectingContactsRequest
    {
        Body = new V3ProspectingContactsRequest
        {
            Pagination = new V3PaginationRequest { Page = 0, Size = 100 },
            Filters = new V3ProspectingContactFilters
            {
                Contacts = new Contacts { Include = new V3ContactFilterCriteria() },
                Companies = new Companies
                {
                    Include = new V3CompanyFilterCriteria(),
                    Exclude = new V3CompanyFilterCriteria(),
                },
            },
            TableId = "482910",
            Options = new Options { IncludePartialProfiles = true, ExcludeDnc = false },
        },
    });
    // TODO: Handle 'response' of type V3ProspectingContactsResponse
}
catch (ApiException<ProspectingContactsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProspectingContactsRequest](src/Lusha/Requests/Prospecting/ProspectingContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ProspectingContactsResponse](src/Lusha/Models/V3ProspectingContactsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[ProspectingContactsError](src/Lusha/Errors/ProspectingContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProspectingSearchEnrich

> Source: [ProspectingSearchEnrich](src/Lusha/Api/ProspectingSearchEnrich.cs)

<details>
<summary><code>Task&lt;CompanyEnrichResponse&gt; EnrichProspectingCompanies(EnrichProspectingCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ProspectingSearchEnrich.EnrichProspectingCompanies(new EnrichProspectingCompaniesRequest
    {
        Body = new CompanyEnrichRequest { RequestId = "some example string", CompaniesIds = ["some example string"] },
    });
    // TODO: Handle 'response' of type CompanyEnrichResponse
}
catch (ApiException<EnrichProspectingCompaniesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnrichProspectingCompaniesRequest](src/Lusha/Requests/ProspectingSearchEnrich/EnrichProspectingCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyEnrichResponse](src/Lusha/Models/CompanyEnrichResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[EnrichProspectingCompaniesError](src/Lusha/Errors/EnrichProspectingCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactEnrichResponse&gt; EnrichProspectingContacts(EnrichProspectingContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ProspectingSearchEnrich.EnrichProspectingContacts(new EnrichProspectingContactsRequest
    {
        Body = new ContactEnrichRequest
        {
            RequestId = "b6effae6-35b8-493d-91aa-7d3b1b7c7dc7",
            ContactIds = ["37b4c536-eaec-11ef-ad4b-a75f8e9e1484"],
        },
    });
    // TODO: Handle 'response' of type ContactEnrichResponse
}
catch (ApiException<EnrichProspectingContactsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnrichProspectingContactsRequest](src/Lusha/Requests/ProspectingSearchEnrich/EnrichProspectingContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactEnrichResponse](src/Lusha/Models/ContactEnrichResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[EnrichProspectingContactsError](src/Lusha/Errors/EnrichProspectingContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanySearchResponse&gt; SearchProspectingCompanies(SearchProspectingCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ProspectingSearchEnrich.SearchProspectingCompanies(new SearchProspectingCompaniesRequest
    {
        Body = new CompanySearchRequest
        {
            Pages = new PaginationParams { Page = 0d, Size = 20d },
            Filters = new Filters1 { Companies = new CompanyFilters { Include = new Include() } },
        },
    });
    // TODO: Handle 'response' of type CompanySearchResponse
}
catch (ApiException<SearchProspectingCompaniesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchProspectingCompaniesRequest](src/Lusha/Requests/ProspectingSearchEnrich/SearchProspectingCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySearchResponse](src/Lusha/Models/CompanySearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchProspectingCompaniesError](src/Lusha/Errors/SearchProspectingCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactSearchResponse&gt; SearchProspectingContacts(SearchProspectingContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ProspectingSearchEnrich.SearchProspectingContacts(new SearchProspectingContactsRequest
    {
        Body = new ContactSearchRequest
        {
            Pages = new PaginationParams { Page = 0d, Size = 10d },
            Filters = new FiltersLushaApiDocumentationProspectingSearchEnrichApi
            {
                Contacts = new ContactFilters { Include = new Include1() },
            },
        },
    });
    // TODO: Handle 'response' of type ContactSearchResponse
}
catch (ApiException<SearchProspectingContactsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchProspectingContactsRequest](src/Lusha/Requests/ProspectingSearchEnrich/SearchProspectingContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactSearchResponse](src/Lusha/Models/ContactSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchProspectingContactsError](src/Lusha/Errors/SearchProspectingContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/Lusha/Api/Search.cs)

<details>
<summary><code>Task&lt;V3CompaniesSearchResponse&gt; SearchCompanies(SearchCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Search.SearchCompanies(new SearchCompaniesRequest
    {
        Body = new V3CompaniesSearchRequest
        {
            Companies = [
                new V3CompanySearchItem { ClientReferenceId = "comp-ref-1", Name = "Lusha" },
                new V3CompanySearchItem { ClientReferenceId = "comp-ref-2", Domain = "salesforce.com" },
                new V3CompanySearchItem { ClientReferenceId = "comp-ref-3", Id = "16303253" },
            ],
            Options = new V3SearchOptions { IncludePartialProfiles = true },
        },
    });
    // TODO: Handle 'response' of type V3CompaniesSearchResponse
}
catch (ApiException<SearchCompaniesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCompaniesRequest](src/Lusha/Requests/Search/SearchCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesSearchResponse](src/Lusha/Models/V3CompaniesSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchCompaniesError](src/Lusha/Errors/SearchCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3ContactsSearchResponse&gt; SearchContacts(SearchContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Search.SearchContacts(new SearchContactsRequest
    {
        Body = new V3ContactsSearchRequest
        {
            Contacts = [
                new V3ContactSearchItem
                {
                    ClientReferenceId = "my-ref-1",
                    FirstName = "Orit",
                    LastName = "Shilvock",
                    CompanyName = "Lusha",
                    CompanyDomain = "lusha.com",
                },
                new V3ContactSearchItem
                {
                    ClientReferenceId = "my-ref-2",
                    LinkedinUrl = "https://www.linkedin.com/in/shmulikwillinger",
                },
                new V3ContactSearchItem { ClientReferenceId = "my-ref-3", Email = "gal.ashkelon@lusha.com" },
                new V3ContactSearchItem { ClientReferenceId = "my-ref-4", Id = "12345" },
            ],
            Options = new V3SearchOptions { IncludePartialProfiles = true },
        },
    });
    // TODO: Handle 'response' of type V3ContactsSearchResponse
}
catch (ApiException<SearchContactsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchContactsRequest](src/Lusha/Requests/Search/SearchContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsSearchResponse](src/Lusha/Models/V3ContactsSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchContactsError](src/Lusha/Errors/SearchContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SearchEnrich

> Source: [SearchEnrich](src/Lusha/Api/SearchEnrich.cs)

<details>
<summary><code>Task&lt;V3CompaniesSearchAndEnrichResponse&gt; SearchAndEnrichCompanies(SearchAndEnrichCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SearchEnrich.SearchAndEnrichCompanies(new SearchAndEnrichCompaniesRequest
    {
        Body = new V3CompaniesSearchAndEnrichRequest
        {
            Companies = [
                new V3CompanySearchItem { ClientReferenceId = "comp-ref-1", Name = "Lusha" },
                new V3CompanySearchItem { ClientReferenceId = "comp-ref-2", Domain = "salesforce.com" },
            ],
            Options = new V3SearchOptions { IncludePartialProfiles = true },
        },
    });
    // TODO: Handle 'response' of type V3CompaniesSearchAndEnrichResponse
}
catch (ApiException<SearchAndEnrichCompaniesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchAndEnrichCompaniesRequest](src/Lusha/Requests/SearchEnrich/SearchAndEnrichCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompaniesSearchAndEnrichResponse](src/Lusha/Models/V3CompaniesSearchAndEnrichResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchAndEnrichCompaniesError](src/Lusha/Errors/SearchAndEnrichCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3ContactsSearchAndEnrichResponse&gt; SearchAndEnrichContacts(SearchAndEnrichContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SearchEnrich.SearchAndEnrichContacts(new SearchAndEnrichContactsRequest
    {
        Body = new V3ContactsSearchAndEnrichRequest
        {
            Contacts = [
                new V3ContactSearchItem
                {
                    ClientReferenceId = "my-ref-1",
                    FirstName = "Orit",
                    LastName = "Shilvock",
                    CompanyName = "Lusha",
                    CompanyDomain = "lusha.com",
                },
                new V3ContactSearchItem
                {
                    ClientReferenceId = "my-ref-2",
                    LinkedinUrl = "https://www.linkedin.com/in/shmulikwillinger",
                },
            ],
            Reveal = [Reveal.Emails, Reveal.Phones],
            Options = new V3SearchOptions { IncludePartialProfiles = true },
        },
    });
    // TODO: Handle 'response' of type V3ContactsSearchAndEnrichResponse
}
catch (ApiException<SearchAndEnrichContactsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchAndEnrichContactsRequest](src/Lusha/Requests/SearchEnrich/SearchAndEnrichContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactsSearchAndEnrichResponse](src/Lusha/Models/V3ContactsSearchAndEnrichResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchAndEnrichContactsError](src/Lusha/Errors/SearchAndEnrichContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SignalsApi

> Source: [SignalsApi](src/Lusha/Api/SignalsApi.cs)

<details>
<summary><code>Task&lt;FilterValuesResponse&gt; GetCompanySignalFilterValues(GetCompanySignalFilterValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetCompanySignalFilterValues(new GetCompanySignalFilterValuesRequest
    {
        FilterType = FilterTypeLushaSignalsApi.NewsEventTypes,
    });
    // TODO: Handle 'response' of type FilterValuesResponse
}
catch (ApiException<GetCompanySignalFilterValuesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanySignalFilterValuesRequest](src/Lusha/Requests/SignalsApi/GetCompanySignalFilterValuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterValuesResponse](src/Lusha/Models/FilterValuesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanySignalFilterValuesError](src/Lusha/Errors/GetCompanySignalFilterValuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FilterTypesDiscoveryResponse&gt; GetCompanySignalFilters(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetCompanySignalFilters();
    // TODO: Handle 'response' of type FilterTypesDiscoveryResponse
}
catch (ApiException<GetCompanySignalFiltersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FilterTypesDiscoveryResponse](src/Lusha/Models/FilterTypesDiscoveryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanySignalFiltersError](src/Lusha/Errors/GetCompanySignalFiltersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3SignalScoreCompaniesResponse&gt; GetCompanySignalScores(GetCompanySignalScoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetCompanySignalScores(new GetCompanySignalScoresRequest
    {
        Body = new V3SignalScoreCompaniesRequest
        {
            Companies = [
                new V3SignalScoreCompanyItem
                {
                    ClientReferenceId = "ref-1",
                    Id = "v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345",
                },
                new V3SignalScoreCompanyItem { ClientReferenceId = "ref-2", Domain = "www.microsoft.com" },
                new V3SignalScoreCompanyItem { ClientReferenceId = "ref-3", Name = "Apple" },
            ],
        },
    });
    // TODO: Handle 'response' of type V3SignalScoreCompaniesResponse
}
catch (ApiException<GetCompanySignalScoresError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanySignalScoresRequest](src/Lusha/Requests/SignalsApi/GetCompanySignalScoresRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3SignalScoreCompaniesResponse](src/Lusha/Models/V3SignalScoreCompaniesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanySignalScoresError](src/Lusha/Errors/GetCompanySignalScoresError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanySignalTypesResponse&gt; GetCompanySignalTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetCompanySignalTypes();
    // TODO: Handle 'response' of type CompanySignalTypesResponse
}
catch (ApiException<GetCompanySignalTypesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySignalTypesResponse](src/Lusha/Models/CompanySignalTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanySignalTypesError](src/Lusha/Errors/GetCompanySignalTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3CompanySignalsResponse&gt; GetCompanySignals(GetCompanySignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetCompanySignals(new GetCompanySignalsRequest
    {
        Body = new V3CompanySignalsRequest
        {
            Ids = ["16303253"],
            SignalTypes = [SignalType1.AllSignals],
            StartDate = DateTimeOffset.Parse("2025-01-01T00:00:00Z"),
            MaxResultsPerSignal = 10,
        },
    });
    // TODO: Handle 'response' of type V3CompanySignalsResponse
}
catch (ApiException<GetCompanySignalsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanySignalsRequest](src/Lusha/Requests/SignalsApi/GetCompanySignalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3CompanySignalsResponse](src/Lusha/Models/V3CompanySignalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanySignalsError](src/Lusha/Errors/GetCompanySignalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanySignalsByIdResponse&gt; GetCompanySignalsById(GetCompanySignalsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetCompanySignalsById(new GetCompanySignalsByIdRequest
    {
        Body = new CompanySignalsByIdRequest
        {
            CompanyIds = [3416],
            Signals = [Signal1.WebsiteTrafficIncrease],
            StartDate = DateTimeOffset.Parse("2025-01-01T00:00:00Z"),
            MaxResultsPerSignal = 10,
        },
    });
    // TODO: Handle 'response' of type CompanySignalsByIdResponse
}
catch (ApiException<GetCompanySignalsByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanySignalsByIdRequest](src/Lusha/Requests/SignalsApi/GetCompanySignalsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySignalsByIdResponse](src/Lusha/Models/CompanySignalsByIdResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetCompanySignalsByIdError](src/Lusha/Errors/GetCompanySignalsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3SignalScoreContactsResponse&gt; GetContactSignalScores(GetContactSignalScoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetContactSignalScores(new GetContactSignalScoresRequest
    {
        Body = new V3SignalScoreContactsRequest
        {
            Contacts = [
                new V3SignalScoreContactItem
                {
                    ClientReferenceId = "ref-1",
                    Id = "v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345",
                },
                new V3SignalScoreContactItem
                {
                    ClientReferenceId = "ref-2",
                    LinkedinUrl = "https://linkedin.com/in/johndoe",
                },
                new V3SignalScoreContactItem
                {
                    ClientReferenceId = "ref-3",
                    FirstName = "Jane",
                    LastName = "Doe",
                    CompanyDomain = "acme.com",
                },
            ],
        },
    });
    // TODO: Handle 'response' of type V3SignalScoreContactsResponse
}
catch (ApiException<GetContactSignalScoresError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactSignalScoresRequest](src/Lusha/Requests/SignalsApi/GetContactSignalScoresRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3SignalScoreContactsResponse](src/Lusha/Models/V3SignalScoreContactsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactSignalScoresError](src/Lusha/Errors/GetContactSignalScoresError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactSignalTypesResponse&gt; GetContactSignalTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetContactSignalTypes();
    // TODO: Handle 'response' of type ContactSignalTypesResponse
}
catch (ApiException<GetContactSignalTypesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactSignalTypesResponse](src/Lusha/Models/ContactSignalTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactSignalTypesError](src/Lusha/Errors/GetContactSignalTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V3ContactSignalsResponse&gt; GetContactSignals(GetContactSignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetContactSignals(new GetContactSignalsRequest
    {
        Body = new V3ContactSignalsRequest
        {
            Ids = ["4389064624", "4389064654"],
            SignalTypes = [SignalType.AllSignals],
            StartDate = DateTimeOffset.Parse("2025-01-01T00:00:00Z"),
        },
    });
    // TODO: Handle 'response' of type V3ContactSignalsResponse
}
catch (ApiException<GetContactSignalsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactSignalsRequest](src/Lusha/Requests/SignalsApi/GetContactSignalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V3ContactSignalsResponse](src/Lusha/Models/V3ContactSignalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactSignalsError](src/Lusha/Errors/GetContactSignalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactSignalsByIdResponse&gt; GetContactSignalsById(GetContactSignalsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetContactSignalsById(new GetContactSignalsByIdRequest
    {
        Body = new ContactSignalsByIdRequest
        {
            ContactIds = [115889],
            Signals = [Signal.Promotion, Signal.CompanyChange],
            StartDate = DateTimeOffset.Parse("2025-01-01T00:00:00Z"),
            MaxResultsPerSignal = 5,
        },
    });
    // TODO: Handle 'response' of type ContactSignalsByIdResponse
}
catch (ApiException<GetContactSignalsByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContactSignalsByIdRequest](src/Lusha/Requests/SignalsApi/GetContactSignalsByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactSignalsByIdResponse](src/Lusha/Models/ContactSignalsByIdResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetContactSignalsByIdError](src/Lusha/Errors/GetContactSignalsByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiSignalsFiltersResponse&gt; GetSignalOptions(GetSignalOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.GetSignalOptions(new GetSignalOptionsRequest
    {
        ObjectType = ObjectType.Contact,
    });
    // TODO: Handle 'response' of type ApiSignalsFiltersResponse
}
catch (ApiException<GetSignalOptionsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignalOptionsRequest](src/Lusha/Requests/SignalsApi/GetSignalOptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiSignalsFiltersResponse](src/Lusha/Models/ApiSignalsFiltersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetSignalOptionsError](src/Lusha/Errors/GetSignalOptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanySignalsByIdResponse&gt; SearchCompanySignals(SearchCompanySignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.SearchCompanySignals(new SearchCompanySignalsRequest
    {
        Body = new CompanySignalsSearchRequest
        {
            Companies = [new Company1LushaSignalsApi { Id = "12344321", Domain = "lusha.com" }],
            Signals = [Signal1.ItSpendIncrease],
            StartDate = DateTimeOffset.Parse("2025-01-01T00:00:00Z"),
            MaxResultsPerSignal = 10,
        },
    });
    // TODO: Handle 'response' of type CompanySignalsByIdResponse
}
catch (ApiException<SearchCompanySignalsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCompanySignalsRequest](src/Lusha/Requests/SignalsApi/SearchCompanySignalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySignalsByIdResponse](src/Lusha/Models/CompanySignalsByIdResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchCompanySignalsError](src/Lusha/Errors/SearchCompanySignalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContactSignalsSearchResponse&gt; SearchContactSignals(SearchContactSignalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SignalsApi.SearchContactSignals(new SearchContactSignalsRequest
    {
        Body = new ContactSignalsSearchRequest
        {
            Contacts = [
                new ContactLushaSignalsApi { Id = "123321", SocialLink = "https://www.linkedin.com/in/ron-nabet" },
            ],
            Signals = [Signal.Promotion, Signal.CompanyChange],
            StartDate = DateTimeOffset.Parse("2025-01-01T00:00:00Z"),
            MaxResultsPerSignal = 5,
        },
    });
    // TODO: Handle 'response' of type ContactSignalsSearchResponse
}
catch (ApiException<SearchContactSignalsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchContactSignalsRequest](src/Lusha/Requests/SignalsApi/SearchContactSignalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContactSignalsSearchResponse](src/Lusha/Models/ContactSignalsSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[SearchContactSignalsError](src/Lusha/Errors/SearchContactSignalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Lusha/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;OptOutSubscriptionResponse&gt; CreateOptOutSubscription(CreateOptOutSubscriptionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
```json
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
```

> **Important:** Signature verification applies the same way as standard webhook deliveries. See Security & Verification for details.

> **Note:** Ensure your account has a webhook secret before creating this subscription. See Regenerate Account Secret.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.CreateOptOutSubscription(new CreateOptOutSubscriptionOperationRequest
    {
        Body = new CreateOptOutSubscriptionRequest
        {
            Url = "https://example.com/webhook",
            Name = "Account opt-out webhook",
        },
    });
    // TODO: Handle 'response' of type OptOutSubscriptionResponse
}
catch (ApiException<CreateOptOutSubscriptionError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateOptOutSubscriptionOperationRequest](src/Lusha/Requests/WebhooksApi/CreateOptOutSubscriptionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OptOutSubscriptionResponse](src/Lusha/Models/OptOutSubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[CreateOptOutSubscriptionError](src/Lusha/Errors/CreateOptOutSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateSubscriptionResponse&gt; CreateSubscription(CreateSubscriptionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
```json
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
```
**Example — Company News Signal:**
```json
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
```

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
````json
{
"received": true,
"timestamp": "2026-02-05T10:30:45.123Z",
"webhookId": "f3b87e05-0402-4f3e-8e26-6a38fd0ad62c"
}
````

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
```javascript
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
```

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

```csharp
try
{
    var response = await client.WebhooksApi.CreateSubscription(new CreateSubscriptionOperationRequest
    {
        Body = new CreateSubscriptionRequest
        {
            Defaults = new Defaults
            {
                Url = "https://example.com/webhooks/lusha",
                EntityType = EntityType2.Contact,
                SignalTypes = ["promotion", "companyChange"],
            },
            Subscriptions = [new Subscription1 { EntityId = "123456", Name = "My Test Webhook" }],
        },
    });
    // TODO: Handle 'response' of type CreateSubscriptionResponse
}
catch (ApiException<CreateSubscriptionError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSubscriptionOperationRequest](src/Lusha/Requests/WebhooksApi/CreateSubscriptionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSubscriptionResponse](src/Lusha/Models/CreateSubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[CreateSubscriptionError](src/Lusha/Errors/CreateSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeleteSubscriptionResponse&gt; DeleteSubscriptions(DeleteSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.DeleteSubscriptions(new DeleteSubscriptionsRequest
    {
        Body = new ApiSubscriptionsDeleteRequest { Ids = ["sub-123"] },
    });
    // TODO: Handle 'response' of type DeleteSubscriptionResponse
}
catch (ApiException<DeleteSubscriptionsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSubscriptionsRequest](src/Lusha/Requests/WebhooksApi/DeleteSubscriptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteSubscriptionResponse](src/Lusha/Models/DeleteSubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[DeleteSubscriptionsError](src/Lusha/Errors/DeleteSubscriptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiAccountSecretResponse&gt; GetAccountSecret(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.GetAccountSecret();
    // TODO: Handle 'response' of type ApiAccountSecretResponse
}
catch (ApiException<GetAccountSecretError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiAccountSecretResponse](src/Lusha/Models/ApiAccountSecretResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetAccountSecretError](src/Lusha/Errors/GetAccountSecretError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AuditLogStatsResponse&gt; GetAuditLogStats(GetAuditLogStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.GetAuditLogStats(new GetAuditLogStatsRequest
    {
        SubscriptionId = "sub-123",
    });
    // TODO: Handle 'response' of type AuditLogStatsResponse
}
catch (ApiException<GetAuditLogStatsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAuditLogStatsRequest](src/Lusha/Requests/WebhooksApi/GetAuditLogStatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuditLogStatsResponse](src/Lusha/Models/AuditLogStatsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetAuditLogStatsError](src/Lusha/Errors/GetAuditLogStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AuditLogsResponse&gt; GetAuditLogs(GetAuditLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.GetAuditLogs(new GetAuditLogsRequest
    {
        SubscriptionId = "507f1f77bcf86cd799439011",
        Status = StatusLushaWebhooksApi.Success,
        Limit = 50,
        Offset = 0,
    });
    // TODO: Handle 'response' of type AuditLogsResponse
}
catch (ApiException<GetAuditLogsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAuditLogsRequest](src/Lusha/Requests/WebhooksApi/GetAuditLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuditLogsResponse](src/Lusha/Models/AuditLogsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetAuditLogsError](src/Lusha/Errors/GetAuditLogsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionWithoutSecret&gt; GetSubscriptionById(GetSubscriptionByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.GetSubscriptionById(new GetSubscriptionByIdRequest
    {
        Id = "507f1f77bcf86cd799439011",
    });
    // TODO: Handle 'response' of type SubscriptionWithoutSecret
}
catch (ApiException<GetSubscriptionByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSubscriptionByIdRequest](src/Lusha/Requests/WebhooksApi/GetSubscriptionByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionWithoutSecret](src/Lusha/Models/SubscriptionWithoutSecret.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetSubscriptionByIdError](src/Lusha/Errors/GetSubscriptionByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionListResponse&gt; ListSubscriptions(ListSubscriptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.ListSubscriptions(new ListSubscriptionsRequest { Limit = 10, Offset = 0 });
    // TODO: Handle 'response' of type SubscriptionListResponse
}
catch (ApiException<ListSubscriptionsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSubscriptionsRequest](src/Lusha/Requests/WebhooksApi/ListSubscriptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionListResponse](src/Lusha/Models/SubscriptionListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[ListSubscriptionsError](src/Lusha/Errors/ListSubscriptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiAccountSecretRegenerateResponse&gt; RegenerateAccountSecret(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.RegenerateAccountSecret();
    // TODO: Handle 'response' of type ApiAccountSecretRegenerateResponse
}
catch (ApiException<RegenerateAccountSecretError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiAccountSecretRegenerateResponse](src/Lusha/Models/ApiAccountSecretRegenerateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[RegenerateAccountSecretError](src/Lusha/Errors/RegenerateAccountSecretError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestSubscriptionResponse&gt; TestSubscription(TestSubscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.TestSubscription(new TestSubscriptionRequest
    {
        Id = "507f1f77bcf86cd799439011",
        Mode = Mode.Full,
    });
    // TODO: Handle 'response' of type TestSubscriptionResponse
}
catch (ApiException<TestSubscriptionError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TestSubscriptionRequest](src/Lusha/Requests/WebhooksApi/TestSubscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestSubscriptionResponse](src/Lusha/Models/TestSubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[TestSubscriptionError](src/Lusha/Errors/TestSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponse&gt; UpdateSubscription(UpdateSubscriptionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.UpdateSubscription(new UpdateSubscriptionOperationRequest
    {
        Id = "507f1f77bcf86cd799439011",
        Body = new UpdateSubscriptionRequest { IsActive = false },
    });
    // TODO: Handle 'response' of type SubscriptionResponse
}
catch (ApiException<UpdateSubscriptionError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSubscriptionOperationRequest](src/Lusha/Requests/WebhooksApi/UpdateSubscriptionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/Lusha/Models/SubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[UpdateSubscriptionError](src/Lusha/Errors/UpdateSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebsiteVisits

> Source: [WebsiteVisits](src/Lusha/Api/WebsiteVisits.cs)

<details>
<summary><code>Task&lt;WebsiteVisitsResponse&gt; GetWebsiteVisits(GetWebsiteVisitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebsiteVisits.GetWebsiteVisits(new GetWebsiteVisitsRequest
    {
        Body = new WebsiteVisitsRequest
        {
            Domains = ["lusha.com", "google.com"],
            StartDate = DateTimeOffset.Parse("2026-01-01T00:00:00Z"),
            EndDate = DateTimeOffset.Parse("2026-03-18T00:00:00Z"),
            Pagination = new PaginationLushaApiDocumentationWebsiteVisitsApi { Size = 25, Page = 0 },
            Sort = new Sort { By = "score", Order = Order.Desc },
            Filters = new WebsiteVisitsFilters
            {
                ScoreBands = [ScoreBand1.Hot, ScoreBand1.Warm],
                Score = new WebsiteVisitsIntRange { Min = 50 },
            },
        },
    });
    // TODO: Handle 'response' of type WebsiteVisitsResponse
}
catch (ApiException<GetWebsiteVisitsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebsiteVisitsRequest](src/Lusha/Requests/WebsiteVisits/GetWebsiteVisitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebsiteVisitsResponse](src/Lusha/Models/WebsiteVisitsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Lusha/Core/Exceptions/ApiException.cs)&lt;[GetWebsiteVisitsError](src/Lusha/Errors/GetWebsiteVisitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

