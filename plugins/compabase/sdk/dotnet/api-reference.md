# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CompabaseClient](src/Compabase/CompabaseClient.cs)

## Companies

> Source: [Companies](src/Compabase/Api/Companies.cs)

<details>
<summary><code>Task&lt;object&gt; GetCeidgNipByNip(GetCeidgNipByNipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sole-proprietor (CEIDG) profile by **NIP**. Subject to public CEIDG catalog
visibility. Contact email/phone revealed for API-key auth when present and allowed.
Personal owner fields follow the same RODO gating as the website.

Typical payload:
- `company` – identifiers, address, PKD activities, contacts, logo, `roles` (owner)
- `primaryPkdDescription` – localized primary PKD label
- `companySummary` – AI description for the requested `locale` only (e.g. `{ "en": "…" }`)
- `details.vat` – VAT whitelist status + bank accounts when known
- `similarCompanies` – peer JDGs from the same enrichment cache
- `changeHistory` – CEIDG change events when available
- `sudop` – public-aid (SUDOP) snapshot when checked (`null` if unavailable)
- `bzp` – public-procurement (BZP) summary when present (`null` if none)
- `ure` – URE energy concessions when checked (`null` if unavailable)
- `bdo` – BDO waste/packaging register when present (`null` if none)
- `gpw` – Warsaw Stock Exchange listing snapshot when the NIP is matched (`null` if not listed)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCeidgNipByNip(new GetCeidgNipByNipRequest
    {
        Nip = "7712488697",
        Locale = Locale.En,
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCeidgNipByNipError> ex)
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

<code>[GetCeidgNipByNipRequest](src/Compabase/Requests/Companies/GetCeidgNipByNipRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCeidgNipByNipError](src/Compabase/Errors/GetCeidgNipByNipError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanyListResponse&gt; GetCompanies(GetCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uses the same search dataset as the public site. Filters combine with **AND** where applicable.

**Response:** `data` is one page of rows; `pagination` has `limit`, `offset`, `total`, `hasMore`, and optionally `cursor` when cursor-based paging is used.

For a single company’s full profile, use `GET /companies/krs/{krs}` (KRS court number).

Parameter details are documented on each query field below.

**Pagination mode**

`offset` and `cursor` are mutually exclusive in client usage. If both are sent, the server returns `400 CONFLICTING_PARAMETERS`.

Use `offset` for shallow interactive browsing and `cursor` for deep paging/export flows.

Cursor pagination is ordered by `entity_id` ascending; `cursor` is the last `entity_id` from the prior page.

Because datasets can change between requests, deep paging may still observe occasional duplicates or skips.

With cursor mode, `pagination.total` may be unavailable and returned as `-1`; rely on `hasMore`.

**Default ordering (offset mode)**

- without `q`: `has_email` desc, then `has_website` desc, then `revenue_total` desc, then `extracted_at` desc, then `entity_id` asc.
- with `q`: same ordering as above (not TF-IDF/full-text relevance ranking).
- offset pagination is intended for interactive browsing; for deterministic deep traversal use cursor mode.

**Financial filter semantics** (for `/companies` and `/companies/count`)

- financial range filters are evaluated on the latest indexed financial snapshot per company (search index row).
- companies with `null` value for a filtered metric do not match that metric filter.
- when `last_report_year_*` is combined with financial metric filters, both are evaluated against the same indexed reporting snapshot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompanies(new GetCompaniesRequest
    {
        Q = "orlen",
        Keywords = "logistics,energy",
        Pkd = "62.01",
        Voivodeship = "mazowieckie",
        City = "Warszawa",
        RegistrationYearMin = 2015,
        RegistrationDateMin = DateTimeOffset.Parse("2026-10-07T00:00:00Z"),
        RegistrationDateMax = DateTimeOffset.Parse("2026-10-07T00:00:00Z"),
        LegalForm = "spółka akcyjna",
        Sort = Sort.RegistrationDate,
    });
    // TODO: Handle 'response' of type CompanyListResponse
}
catch (ApiException<GetCompaniesError> ex)
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

<code>[GetCompaniesRequest](src/Compabase/Requests/Companies/GetCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyListResponse](src/Compabase/Models/CompanyListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesError](src/Compabase/Errors/GetCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanyCountResponse&gt; GetCompaniesCount(GetCompaniesCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns how many companies match the same **filter set** as `GET /companies`, without returning rows.
Use the **same query parameters** as list/search (except pagination: no `limit`, `offset`, or `cursor`).
Filters combine with **AND** where applicable.

**Response:** a single integer `count`; total matching companies for the current filters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompaniesCount(new GetCompaniesCountRequest
    {
        Q = "orlen",
        Keywords = "logistics,energy",
        Pkd = "62.01",
        Voivodeship = "mazowieckie",
        City = "Warszawa",
        RegistrationYearMin = 2015,
        RegistrationDateMin = DateTimeOffset.Parse("2026-10-07T00:00:00Z"),
        RegistrationDateMax = DateTimeOffset.Parse("2026-10-07T00:00:00Z"),
        LegalForm = "spółka akcyjna",
    });
    // TODO: Handle 'response' of type CompanyCountResponse
}
catch (ApiException<GetCompaniesCountError> ex)
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

<code>[GetCompaniesCountRequest](src/Compabase/Requests/Companies/GetCompaniesCountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyCountResponse](src/Compabase/Models/CompanyCountResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesCountError](src/Compabase/Errors/GetCompaniesCountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanyListResponse&gt; GetCompaniesExport(GetCompaniesExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same filters as `GET /companies`, with page size up to **500** (vs 100 on the
standard list). Contact emails are included when available.
For large pulls, page with `cursor` (`cursor` = last row `entity_id`). Large `offset` values get slow.
Each page consumes **1** monthly quota request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompaniesExport(new GetCompaniesExportRequest
    {
        Q = "orlen",
        Keywords = "logistics,energy",
        Pkd = "62.01",
    });
    // TODO: Handle 'response' of type CompanyListResponse
}
catch (ApiException<GetCompaniesExportError> ex)
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

<code>[GetCompaniesExportRequest](src/Compabase/Requests/Companies/GetCompaniesExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyListResponse](src/Compabase/Models/CompanyListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesExportError](src/Compabase/Errors/GetCompaniesExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrs(GetCompaniesKrsByKrsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns full company profile addressed by **KRS** (Polish court registry number).
Digits only; leading zeros are optional (normalized to 10 digits server-side).

Integrations that only have a KRS number can call this directly.
One request typically covers enrichment for a company. The payload includes:
- `company` (identifiers, address, PKD, logo, capital),
- `details.contacts` (email, phone, website, deliverability flags; email/phone revealed for API keys),
- `details.vat` (VAT whitelist status + bank accounts when known),
- `details.filings` / attributes / operational status,
- `roles` and `ownership`,
- `financials.byYear` (metrics + `esf_statement_lines` when present; XML files are on the documents endpoint),
- `krz` (restructuring/insolvency proceedings summary),
- `sanctions` (MSWiA sanctions listing with measures and grounds; omitted when the company is not listed; dedicated read is `/companies/krs/{krs}/sanctions`),
- `sudop` (public aid / de minimis when checked),
- `bzp` (public procurement summary when present),
- `ure` (URE energy concessions when checked),
- `bdo` (BDO waste/packaging register when present),
- `gpw` (Warsaw Stock Exchange listing snapshot when the NIP is matched — no full OHLCV; use `/companies/krs/{krs}/gpw`),
- `crbr` (beneficial owners when present and RODO-eligible),
- `changeHistory` when non-empty,
- `similarCompanies`, `subsidiaryCompanies`, `pkdRankings`, `faq`, `insightsByYear`,
- `hasStatistics` (boolean; full peer benchmarks via `/statistics`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompaniesKrsByKrs(new GetCompaniesKrsByKrsRequest { Krs = "0000028860" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsError> ex)
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

<code>[GetCompaniesKrsByKrsRequest](src/Compabase/Requests/Companies/GetCompaniesKrsByKrsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsError](src/Compabase/Errors/GetCompaniesKrsByKrsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsConnections(GetCompaniesKrsByKrsConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Graph of related companies and people linked through shared roles/ownership
(same payload as the profile Connections UI).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompaniesKrsByKrsConnections(new GetCompaniesKrsByKrsConnectionsRequest
    {
        Krs = "0000028860",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsConnectionsError> ex)
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

<code>[GetCompaniesKrsByKrsConnectionsRequest](src/Compabase/Requests/Companies/GetCompaniesKrsByKrsConnectionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsConnectionsError](src/Compabase/Errors/GetCompaniesKrsByKrsConnectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsGroup(GetCompaniesKrsByKrsGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Corporate group of a Polish company from the global LEI register run by GLEIF, supplemented with foreign corporate
shareholders from KRS matched to the LEI register: direct parent and ultimate parent (name, country, LEI),
subsidiaries and other group companies (Polish ones with KRS number, foreign ones with country) and group size.
`direct_parent.source = "krs"` means the parent comes from the KRS shareholder list (`pct` = stake). Refreshed daily.
Same data as MCP `get_company_group`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompaniesKrsByKrsGroup(new GetCompaniesKrsByKrsGroupRequest
    {
        Krs = "0000183975",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsGroupError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompaniesKrsByKrsGroupRequest](src/Compabase/Requests/Companies/GetCompaniesKrsByKrsGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsGroupError](src/Compabase/Errors/GetCompaniesKrsByKrsGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsStatus(GetCompaniesKrsByKrsStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Quick legal-status check (Active, Bankruptcy, Liquidation).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompaniesKrsByKrsStatus(new GetCompaniesKrsByKrsStatusRequest
    {
        Krs = "0000028860",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsStatusError> ex)
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

<code>[GetCompaniesKrsByKrsStatusRequest](src/Compabase/Requests/Companies/GetCompaniesKrsByKrsStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsStatusError](src/Compabase/Errors/GetCompaniesKrsByKrsStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsStructurePeople(GetCompaniesKrsByKrsStructurePeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns ownership and management structure only (without profile or financial data):
`roles` and `ownership`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompaniesKrsByKrsStructurePeople(
        new GetCompaniesKrsByKrsStructurePeopleRequest { Krs = "0000028860" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsStructurePeopleError> ex)
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

<code>[GetCompaniesKrsByKrsStructurePeopleRequest](src/Compabase/Requests/Companies/GetCompaniesKrsByKrsStructurePeopleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsStructurePeopleError](src/Compabase/Errors/GetCompaniesKrsByKrsStructurePeopleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Financials

> Source: [Financials](src/Compabase/Api/Financials.cs)

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsFinancialDocuments(GetCompaniesKrsByKrsFinancialDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Metadata list of financial documents for the company (periods, types, names).
Returns metadata only. Structured metrics and `esf_statement_lines` are on the
profile and financial-statements endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Financials.GetCompaniesKrsByKrsFinancialDocuments(
        new GetCompaniesKrsByKrsFinancialDocumentsRequest { Krs = "0000028860" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsFinancialDocumentsError> ex)
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

<code>[GetCompaniesKrsByKrsFinancialDocumentsRequest](src/Compabase/Requests/Financials/GetCompaniesKrsByKrsFinancialDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsFinancialDocumentsError](src/Compabase/Errors/GetCompaniesKrsByKrsFinancialDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsFinancialStatements(GetCompaniesKrsByKrsFinancialStatementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns financial metrics only (without company profile or document files),
grouped by statement year. Values include PLN/USD/EUR columns from
`entity_financial_metrics` and structured `esf_statement_lines` when extracted.
XML files are on the documents endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Financials.GetCompaniesKrsByKrsFinancialStatements(
        new GetCompaniesKrsByKrsFinancialStatementsRequest { Krs = "0000028860" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsFinancialStatementsError> ex)
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

<code>[GetCompaniesKrsByKrsFinancialStatementsRequest](src/Compabase/Requests/Financials/GetCompaniesKrsByKrsFinancialStatementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsFinancialStatementsError](src/Compabase/Errors/GetCompaniesKrsByKrsFinancialStatementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsStatistics(GetCompaniesKrsByKrsStatisticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Industry / region / country peer benchmarks and the company's rank positions.
Use when `hasStatistics` on the full profile is `true`.

Response shape:
- `company` – latest indexed figures (PLN/EUR/USD) for the company
- `scopes` – rank in each peer group (`pkd_full`, `pkd_division`, `pkd_section`, `region`, `country`)
- `benchmarks` – peer distribution per scope key (`median`, `p25`/`p75`/`p90`, `n_companies`, …)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Financials.GetCompaniesKrsByKrsStatistics(new GetCompaniesKrsByKrsStatisticsRequest
    {
        Krs = "0001088645",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsStatisticsError> ex)
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

<code>[GetCompaniesKrsByKrsStatisticsRequest](src/Compabase/Requests/Financials/GetCompaniesKrsByKrsStatisticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsStatisticsError](src/Compabase/Errors/GetCompaniesKrsByKrsStatisticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/Compabase/Api/Health.cs)

<details>
<summary><code>Task&lt;HealthResponse&gt; GetHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public uptime/status endpoint for API v1 (no API key required).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Health.GetHealth();
    // TODO: Handle 'response' of type HealthResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HealthResponse](src/Compabase/Models/HealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Compabase/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/Compabase/Api/News.cs)

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsNews(GetCompaniesKrsByKrsNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Published news articles and optional claimed description / logo from company UGC.
Coverage is uneven (only companies with portal/UGC content).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.News.GetCompaniesKrsByKrsNews(new GetCompaniesKrsByKrsNewsRequest
    {
        Krs = "0000057567",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsNewsError> ex)
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

<code>[GetCompaniesKrsByKrsNewsRequest](src/Compabase/Requests/News/GetCompaniesKrsByKrsNewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsNewsError](src/Compabase/Errors/GetCompaniesKrsByKrsNewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetNews(GetNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Latest news published by Polish companies on their own websites, newest first, with the company (KRS) attached.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.News.GetNews(new GetNewsRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetNewsError> ex)
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

<code>[GetNewsRequest](src/Compabase/Requests/News/GetNewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetNewsError](src/Compabase/Errors/GetNewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Persons

> Source: [Persons](src/Compabase/Api/Persons.cs)

<details>
<summary><code>Task&lt;PersonConnectionsResponse&gt; GetPersonsByPersonIdConnections(GetPersonsByPersonIdConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all companies linked to the given person together with the
relationship type and role label for each link.

Use `GET /persons/search` to resolve a name to a `person_id` first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Persons.GetPersonsByPersonIdConnections(new GetPersonsByPersonIdConnectionsRequest
    {
        PersonId = Guid.Parse("033e6964-179b-4039-86a2-0e0590c56918"),
    });
    // TODO: Handle 'response' of type PersonConnectionsResponse
}
catch (ApiException<GetPersonsByPersonIdConnectionsError> ex)
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

<code>[GetPersonsByPersonIdConnectionsRequest](src/Compabase/Requests/Persons/GetPersonsByPersonIdConnectionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonConnectionsResponse](src/Compabase/Models/PersonConnectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetPersonsByPersonIdConnectionsError](src/Compabase/Errors/GetPersonsByPersonIdConnectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PersonsSearchResponse&gt; GetPersonsSearch(GetPersonsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for natural persons by name (first name, last name, or both).
Returns a deduplicated list of matching persons with their `person_id` key
and the number of companies they are linked to.

Use the returned `person_id` with `GET /persons/{personId}/connections`
to fetch full connection details.

Identification is restricted to name-based queries (first name, last name, or both).
Protected data, including PESEL and exact birth dates, is never exposed.
To assist with identification, every result includes a `birth_year` (integer).

**Result capping:** internally the search scans up to 2 000 matching link
rows before aggregation. For very common names the response may include
a `note` field indicating the result set was truncated; use a more specific
query to narrow results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Persons.GetPersonsSearch(new GetPersonsSearchRequest { Q = "Kowalski" });
    // TODO: Handle 'response' of type PersonsSearchResponse
}
catch (ApiException<GetPersonsSearchError> ex)
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

<code>[GetPersonsSearchRequest](src/Compabase/Requests/Persons/GetPersonsSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonsSearchResponse](src/Compabase/Models/PersonsSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetPersonsSearchError](src/Compabase/Errors/GetPersonsSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Registers

> Source: [Registers](src/Compabase/Api/Registers.cs)

<details>
<summary><code>Task&lt;object&gt; GetCeidgNipByNipNfzQueues(GetCeidgNipByNipNfzQueuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NFZ (National Health Fund) waiting lists of a healthcare provider by NIP (sole proprietors and any other provider) from the NFZ "Terminy leczenia" API: every NFZ-funded
service it runs a waiting list for, per location — NFZ forecast waiting time (stable and urgent case), people waiting,
average wait, address, phone, children, accessibility. Sorted by shortest wait. Refreshed twice a week.
The forecast is not a booking. Same data as MCP `get_company_nfz_queues`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCeidgNipByNipNfzQueues(new GetCeidgNipByNipNfzQueuesRequest
    {
        Nip = "1130018111",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCeidgNipByNipNfzQueuesError> ex)
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

<code>[GetCeidgNipByNipNfzQueuesRequest](src/Compabase/Requests/Registers/GetCeidgNipByNipNfzQueuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCeidgNipByNipNfzQueuesError](src/Compabase/Errors/GetCeidgNipByNipNfzQueuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCeidgNipByNipProcurementCounterparties(GetCeidgNipByNipProcurementCounterpartiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Buyers, contractors and consortium partners of a company or a sole proprietor (public CEIDG profile) by NIP, from BZP,
TED and CRU. Same data as MCP `get_company_procurement_counterparties`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCeidgNipByNipProcurementCounterparties(
        new GetCeidgNipByNipProcurementCounterpartiesRequest { Nip = "7352731108" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCeidgNipByNipProcurementCounterpartiesError> ex)
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

<code>[GetCeidgNipByNipProcurementCounterpartiesRequest](src/Compabase/Requests/Registers/GetCeidgNipByNipProcurementCounterpartiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCeidgNipByNipProcurementCounterpartiesError](src/Compabase/Errors/GetCeidgNipByNipProcurementCounterpartiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCeidgNipByNipWebsiteFacts(GetCeidgNipByNipWebsiteFactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same as `/companies/krs/{krs}/website-facts` for sole proprietors with a public profile (and any company) by NIP.
Same data as MCP `get_company_website_facts`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCeidgNipByNipWebsiteFacts(new GetCeidgNipByNipWebsiteFactsRequest
    {
        Nip = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCeidgNipByNipWebsiteFactsError> ex)
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

<code>[GetCeidgNipByNipWebsiteFactsRequest](src/Compabase/Requests/Registers/GetCeidgNipByNipWebsiteFactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCeidgNipByNipWebsiteFactsError](src/Compabase/Errors/GetCeidgNipByNipWebsiteFactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsBeneficiariesResponse&gt; GetCompaniesKrsByKrsBeneficiaries(GetCompaniesKrsByKrsBeneficiariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Beneficial owners of a KRS company from the Central Register of Beneficial Owners (CRBR) — name, nationality,
country of residence and nature/extent of control. PESEL is never returned (birth year only). Sole proprietors are not in CRBR.
Same data as MCP `get_company_beneficiaries`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsBeneficiaries(new GetCompaniesKrsByKrsBeneficiariesRequest
    {
        Krs = "0000446005",
    });
    // TODO: Handle 'response' of type CompaniesKrsBeneficiariesResponse
}
catch (ApiException<GetCompaniesKrsByKrsBeneficiariesError> ex)
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

<code>[GetCompaniesKrsByKrsBeneficiariesRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsBeneficiariesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsBeneficiariesResponse](src/Compabase/Models/CompaniesKrsBeneficiariesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsBeneficiariesError](src/Compabase/Errors/GetCompaniesKrsByKrsBeneficiariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsCourtGazetteResponse&gt; GetCompaniesKrsByKrsCourtGazette(GetCompaniesKrsByKrsCourtGazetteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Notices about the company published in the Court and Commercial Gazette (Monitor Sądowy i Gospodarczy) —
creditor calls, dissolution, mergers, liquidation, transformations — matched by KRS or NIP.
Same data as MCP `get_company_court_gazette`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsCourtGazette(new GetCompaniesKrsByKrsCourtGazetteRequest
    {
        Krs = "0000269394",
    });
    // TODO: Handle 'response' of type CompaniesKrsCourtGazetteResponse
}
catch (ApiException<GetCompaniesKrsByKrsCourtGazetteError> ex)
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

<code>[GetCompaniesKrsByKrsCourtGazetteRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsCourtGazetteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsCourtGazetteResponse](src/Compabase/Models/CompaniesKrsCourtGazetteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsCourtGazetteError](src/Compabase/Errors/GetCompaniesKrsByKrsCourtGazetteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsEnergyLicensesResponse&gt; GetCompaniesKrsByKrsEnergyLicenses(GetCompaniesKrsByKrsEnergyLicensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Energy Regulatory Office (URE) concessions — electricity, gas, heat and liquid fuels — with validity dates and
pending applications. Keyed by the company's NIP.
Same data as MCP `get_company_energy_licenses`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsEnergyLicenses(
        new GetCompaniesKrsByKrsEnergyLicensesRequest { Krs = "0000028860" });
    // TODO: Handle 'response' of type CompaniesKrsEnergyLicensesResponse
}
catch (ApiException<GetCompaniesKrsByKrsEnergyLicensesError> ex)
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

<code>[GetCompaniesKrsByKrsEnergyLicensesRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsEnergyLicensesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsEnergyLicensesResponse](src/Compabase/Models/CompaniesKrsEnergyLicensesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsEnergyLicensesError](src/Compabase/Errors/GetCompaniesKrsByKrsEnergyLicensesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsEuFundsResponse&gt; GetCompaniesKrsByKrsEuFunds(GetCompaniesKrsByKrsEuFundsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

EU cohesion-fund projects (Fundusze Europejskie, official MFiPR project lists) — programme, EU co-financing,
total value and dates. Keyed by NIP. Not TED procurement, not FTS Commission grants, not SUDOP state aid.
Same data as MCP `get_company_eu_funds`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsEuFunds(new GetCompaniesKrsByKrsEuFundsRequest
    {
        Krs = "0000028860",
    });
    // TODO: Handle 'response' of type CompaniesKrsEuFundsResponse
}
catch (ApiException<GetCompaniesKrsByKrsEuFundsError> ex)
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

<code>[GetCompaniesKrsByKrsEuFundsRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsEuFundsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsEuFundsResponse](src/Compabase/Models/CompaniesKrsEuFundsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsEuFundsError](src/Compabase/Errors/GetCompaniesKrsByKrsEuFundsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsEuGrantsResponse&gt; GetCompaniesKrsByKrsEuGrants(GetCompaniesKrsByKrsEuGrantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

European Commission Financial Transparency System awards — Horizon, LIFE, Erasmus+ and other direct/indirect
management grants and contracts. Keyed by NIP (VAT).
Same data as MCP `get_company_procurement`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsEuGrants(new GetCompaniesKrsByKrsEuGrantsRequest
    {
        Krs = "0000008820",
    });
    // TODO: Handle 'response' of type CompaniesKrsEuGrantsResponse
}
catch (ApiException<GetCompaniesKrsByKrsEuGrantsError> ex)
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

<code>[GetCompaniesKrsByKrsEuGrantsRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsEuGrantsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsEuGrantsResponse](src/Compabase/Models/CompaniesKrsEuGrantsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsEuGrantsError](src/Compabase/Errors/GetCompaniesKrsByKrsEuGrantsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsFilingTimelinessResponse&gt; GetCompaniesKrsByKrsFilingTimeliness(GetCompaniesKrsByKrsFilingTimelinessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For each recent financial year: period end, the date the annual financial statement was filed (KRS register
entries and the Financial Document Repository), the statutory deadline (year end + 6 months + 15 days; +3 months
for 2019–2020), days late or not filed, and whether a statutory auditor's report was filed. Also `overdue_year`
when the latest statement is past its deadline and missing.
Same data as MCP `get_company_filing_timeliness`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsFilingTimeliness(
        new GetCompaniesKrsByKrsFilingTimelinessRequest { Krs = "0000057567" });
    // TODO: Handle 'response' of type CompaniesKrsFilingTimelinessResponse
}
catch (ApiException<GetCompaniesKrsByKrsFilingTimelinessError> ex)
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

<code>[GetCompaniesKrsByKrsFilingTimelinessRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsFilingTimelinessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsFilingTimelinessResponse](src/Compabase/Models/CompaniesKrsFilingTimelinessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsFilingTimelinessError](src/Compabase/Errors/GetCompaniesKrsByKrsFilingTimelinessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsFinancialLicensesResponse&gt; GetCompaniesKrsByKrsFinancialLicenses(GetCompaniesKrsByKrsFinancialLicensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Polish Financial Supervision Authority (KNF) registers — licences and entries of banks, payment / e-money
institutions, investment firms, insurers, lending institutions and agents, with KNF number, status, registration,
decision and strike-off dates and services. Keyed by NIP.
Same data as MCP `get_company_financial_supervision`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsFinancialLicenses(
        new GetCompaniesKrsByKrsFinancialLicensesRequest { Krs = "0000028860" });
    // TODO: Handle 'response' of type CompaniesKrsFinancialLicensesResponse
}
catch (ApiException<GetCompaniesKrsByKrsFinancialLicensesError> ex)
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

<code>[GetCompaniesKrsByKrsFinancialLicensesRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsFinancialLicensesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsFinancialLicensesResponse](src/Compabase/Models/CompaniesKrsFinancialLicensesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsFinancialLicensesError](src/Compabase/Errors/GetCompaniesKrsByKrsFinancialLicensesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsGpw(GetCompaniesKrsByKrsGpwRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Listing snapshot for a KRS company matched to GPW Main Market, NewConnect, or GlobalConnect:
ticker, ISIN, last close and change, market cap, shares, EPS, P/E, dividend and yield,
plus a few recent daily bars. Quotes delayed ~15 minutes, in PLN.

Not an official GPW licensed feed. `gpw` is `null` when the company is not listed / not matched.

Optional history (still capped — never the full MAX chart):
- `include=series` — daily OHLCV, default 250 bars, max 2000 (`series_limit`)
- `include=intraday` — 1-minute bars for the last 10 calendar days
- combine as `include=series,intraday`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsGpw(new GetCompaniesKrsByKrsGpwRequest
    {
        Krs = "0000028860",
        Include = "series",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsGpwError> ex)
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

<code>[GetCompaniesKrsByKrsGpwRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsGpwRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsGpwError](src/Compabase/Errors/GetCompaniesKrsByKrsGpwError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsInsolvencyResponse&gt; GetCompaniesKrsByKrsInsolvency(GetCompaniesKrsByKrsInsolvencyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bankruptcy and restructuring proceedings from the National Debtor Register (Krajowy Rejestr Zadłużonych, KRZ):
case numbers, court, proceeding type and status, key dates.
Same data as MCP `get_company_debt_registry`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsInsolvency(new GetCompaniesKrsByKrsInsolvencyRequest
    {
        Krs = "0000026438",
    });
    // TODO: Handle 'response' of type CompaniesKrsInsolvencyResponse
}
catch (ApiException<GetCompaniesKrsByKrsInsolvencyError> ex)
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

<code>[GetCompaniesKrsByKrsInsolvencyRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsInsolvencyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsInsolvencyResponse](src/Compabase/Models/CompaniesKrsInsolvencyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsInsolvencyError](src/Compabase/Errors/GetCompaniesKrsByKrsInsolvencyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsNfzContracts(GetCompaniesKrsByKrsNfzContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NFZ (National Health Fund) contracts of a healthcare provider — contract value per year since 2008, types of care
with NFZ branch and the largest contracts (PLN). Keyed by the company's NIP. Same data as MCP `get_company_nfz_contracts`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsNfzContracts(new GetCompaniesKrsByKrsNfzContractsRequest
    {
        Krs = "0000289698",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsNfzContractsError> ex)
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

<code>[GetCompaniesKrsByKrsNfzContractsRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsNfzContractsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsNfzContractsError](src/Compabase/Errors/GetCompaniesKrsByKrsNfzContractsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsNfzQueues(GetCompaniesKrsByKrsNfzQueuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NFZ (National Health Fund) waiting lists of a healthcare provider from the NFZ "Terminy leczenia" API: every NFZ-funded
service it runs a waiting list for, per location — NFZ forecast waiting time (stable and urgent case), people waiting,
average wait, address, phone, children, accessibility. Sorted by shortest wait. Refreshed twice a week.
The forecast is not a booking. Same data as MCP `get_company_nfz_queues`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsNfzQueues(new GetCompaniesKrsByKrsNfzQueuesRequest
    {
        Krs = "0000446005",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsNfzQueuesError> ex)
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

<code>[GetCompaniesKrsByKrsNfzQueuesRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsNfzQueuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsNfzQueuesError](src/Compabase/Errors/GetCompaniesKrsByKrsNfzQueuesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsProcurementCounterpartiesResponse&gt; GetCompaniesKrsByKrsProcurementCounterparties(GetCompaniesKrsByKrsProcurementCounterpartiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Buyers the company most often wins public contracts from, contractors it most often awards contracts to, and
consortium partners — from BZP, TED and CRU. Each with KRS (when known), number of contracts, total value
(PLN/EUR/USD) and years; top 20 per role plus totals.
Same data as MCP `get_company_procurement_counterparties`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsProcurementCounterparties(
        new GetCompaniesKrsByKrsProcurementCounterpartiesRequest { Krs = "0000001764" });
    // TODO: Handle 'response' of type CompaniesKrsProcurementCounterpartiesResponse
}
catch (ApiException<GetCompaniesKrsByKrsProcurementCounterpartiesError> ex)
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

<code>[GetCompaniesKrsByKrsProcurementCounterpartiesRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsProcurementCounterpartiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsProcurementCounterpartiesResponse](src/Compabase/Models/CompaniesKrsProcurementCounterpartiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsProcurementCounterpartiesError](src/Compabase/Errors/GetCompaniesKrsByKrsProcurementCounterpartiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsPublicAidResponse&gt; GetCompaniesKrsByKrsPublicAid(GetCompaniesKrsByKrsPublicAidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public aid and de minimis aid from SUDOP (UOKiK) — full case list with amount, grantor, aid measure, purpose and
date. Keyed by NIP.
Same data as MCP `get_company_public_aid`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsPublicAid(new GetCompaniesKrsByKrsPublicAidRequest
    {
        Krs = "0000028860",
    });
    // TODO: Handle 'response' of type CompaniesKrsPublicAidResponse
}
catch (ApiException<GetCompaniesKrsByKrsPublicAidError> ex)
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

<code>[GetCompaniesKrsByKrsPublicAidRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsPublicAidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsPublicAidResponse](src/Compabase/Models/CompaniesKrsPublicAidResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsPublicAidError](src/Compabase/Errors/GetCompaniesKrsByKrsPublicAidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsRealEstateResponse&gt; GetCompaniesKrsByKrsRealEstate(GetCompaniesKrsByKrsRealEstateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Company real estate from the latest financial statement (period ending 2025+): land incl. perpetual usufruct,
buildings and premises, investment property (book values in PLN/EUR/USD), plus properties named as mortgage
collateral (address, land-register KW numbers, creditor). Micro and small entities have no such breakdown.
Same data as MCP `get_company_real_estate`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsRealEstate(new GetCompaniesKrsByKrsRealEstateRequest
    {
        Krs = "0000057567",
    });
    // TODO: Handle 'response' of type CompaniesKrsRealEstateResponse
}
catch (ApiException<GetCompaniesKrsByKrsRealEstateError> ex)
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

<code>[GetCompaniesKrsByKrsRealEstateRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsRealEstateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsRealEstateResponse](src/Compabase/Models/CompaniesKrsRealEstateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsRealEstateError](src/Compabase/Errors/GetCompaniesKrsByKrsRealEstateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsSanctionsResponse&gt; GetCompaniesKrsByKrsSanctions(GetCompaniesKrsByKrsSanctionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Official Polish Ministry of the Interior and Administration (MSWiA) sanctions listing
for a KRS company matched by KRS, NIP, or REGON.

`sanctions` is `null` when the company is not on the list. When present, `entries`
include the name on the list, listed and removed dates, restrictive measures, and
the legal grounds. Polish text stays in `measures` / `justification`; English and
German are in `measures_i18n` / `justification_i18n`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsSanctions(new GetCompaniesKrsByKrsSanctionsRequest
    {
        Krs = "some example string",
    });
    // TODO: Handle 'response' of type CompaniesKrsSanctionsResponse
}
catch (ApiException<GetCompaniesKrsByKrsSanctionsError> ex)
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

<code>[GetCompaniesKrsByKrsSanctionsRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsSanctionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsSanctionsResponse](src/Compabase/Models/CompaniesKrsSanctionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsSanctionsError](src/Compabase/Errors/GetCompaniesKrsByKrsSanctionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsSecuredLiabilitiesResponse&gt; GetCompaniesKrsByKrsSecuredLiabilities(GetCompaniesKrsByKrsSecuredLiabilitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Secured liabilities disclosed in the notes to the latest financial statement (period ending 2025+): mortgages,
registered / financial pledges, transfers of ownership, assignments — with creditor, amount, secured debt, asset and
land-register (KW) numbers.
Same data as MCP `get_company_secured_liabilities`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsSecuredLiabilities(
        new GetCompaniesKrsByKrsSecuredLiabilitiesRequest { Krs = "0000759658" });
    // TODO: Handle 'response' of type CompaniesKrsSecuredLiabilitiesResponse
}
catch (ApiException<GetCompaniesKrsByKrsSecuredLiabilitiesError> ex)
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

<code>[GetCompaniesKrsByKrsSecuredLiabilitiesRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsSecuredLiabilitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsSecuredLiabilitiesResponse](src/Compabase/Models/CompaniesKrsSecuredLiabilitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsSecuredLiabilitiesError](src/Compabase/Errors/GetCompaniesKrsByKrsSecuredLiabilitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsTendersResponse&gt; GetCompaniesKrsByKrsTenders(GetCompaniesKrsByKrsTendersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public procurement of one company: national tenders from the Public Procurement Bulletin (BZP) and EU-threshold
tenders from TED — as contractor (awards won) and as contracting authority. Returns `national` and `eu` blocks.
Same data as MCP `get_company_public_tenders / get_company_eu_tenders`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsTenders(new GetCompaniesKrsByKrsTendersRequest
    {
        Krs = "0000028860",
    });
    // TODO: Handle 'response' of type CompaniesKrsTendersResponse
}
catch (ApiException<GetCompaniesKrsByKrsTendersError> ex)
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

<code>[GetCompaniesKrsByKrsTendersRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsTendersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsTendersResponse](src/Compabase/Models/CompaniesKrsTendersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsTendersError](src/Compabase/Errors/GetCompaniesKrsByKrsTendersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompaniesKrsWasteRegistryResponse&gt; GetCompaniesKrsByKrsWasteRegistry(GetCompaniesKrsByKrsWasteRegistryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

BDO register (waste, products and packaging) — registration number, number of sites, activity flags and decisions
with issue and validity dates. Keyed by NIP.
Same data as MCP `get_company_waste_registry`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsWasteRegistry(new GetCompaniesKrsByKrsWasteRegistryRequest
    {
        Krs = "0000028860",
    });
    // TODO: Handle 'response' of type CompaniesKrsWasteRegistryResponse
}
catch (ApiException<GetCompaniesKrsByKrsWasteRegistryError> ex)
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

<code>[GetCompaniesKrsByKrsWasteRegistryRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsWasteRegistryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompaniesKrsWasteRegistryResponse](src/Compabase/Models/CompaniesKrsWasteRegistryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsWasteRegistryError](src/Compabase/Errors/GetCompaniesKrsByKrsWasteRegistryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetCompaniesKrsByKrsWebsiteFacts(GetCompaniesKrsByKrsWebsiteFactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Opening hours, branches, offer (CPV divisions and product/service names in PL/EN/DE), certifications, website
technology and clients/partners linked from the site (matched to KRS companies), read from the company's own website.
Same data as MCP `get_company_website_facts`. One request = one API call from the monthly quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Registers.GetCompaniesKrsByKrsWebsiteFacts(new GetCompaniesKrsByKrsWebsiteFactsRequest
    {
        Krs = "0000008820",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetCompaniesKrsByKrsWebsiteFactsError> ex)
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

<code>[GetCompaniesKrsByKrsWebsiteFactsRequest](src/Compabase/Requests/Registers/GetCompaniesKrsByKrsWebsiteFactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetCompaniesKrsByKrsWebsiteFactsError](src/Compabase/Errors/GetCompaniesKrsByKrsWebsiteFactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tenders

> Source: [Tenders](src/Compabase/Api/Tenders.cs)

<details>
<summary><code>Task&lt;object&gt; GetTenders(GetTendersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Polish public tenders — national notices from the Public Procurement Bulletin (BZP) and EU-threshold notices
for Poland from TED — with contracting authority, value, deadlines and (for awarded notices) the winner.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tenders.GetTenders(new GetTendersRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetTendersError> ex)
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

<code>[GetTendersRequest](src/Compabase/Requests/Tenders/GetTendersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetTendersError](src/Compabase/Errors/GetTendersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetTendersAwards(GetTendersAwardsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Largest recent public contract awards in Poland with the winning company (KRS when matched).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tenders.GetTendersAwards(new GetTendersAwardsRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetTendersAwardsError> ex)
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

<code>[GetTendersAwardsRequest](src/Compabase/Requests/Tenders/GetTendersAwardsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetTendersAwardsError](src/Compabase/Errors/GetTendersAwardsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/Compabase/Api/Usage.cs)

<details>
<summary><code>Task&lt;UsageResponse&gt; GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns how many requests this key has used in the current UTC calendar month against its limit.
This endpoint does not consume quota (usage counter is not incremented).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Usage.GetUsage();
    // TODO: Handle 'response' of type UsageResponse
}
catch (ApiException<GetUsageError> ex)
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

**OnSuccess**: <code>[UsageResponse](src/Compabase/Models/UsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetUsageError](src/Compabase/Errors/GetUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Watchlist

> Source: [Watchlist](src/Compabase/Api/Watchlist.cs)

<details>
<summary><code>Task&lt;object&gt; DeleteWatchlistKrsByKrs(DeleteWatchlistKrsByKrsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a KRS company from the watchlist of the user linked to the API key.
Reverses `POST /watchlist/krs/{krs}`; the company can be added again at any time.
Idempotent: `removed: false` when the company was not on the list.
Use `dry_run=true` to see the outcome (`would_remove`) without writing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlist.DeleteWatchlistKrsByKrs(new DeleteWatchlistKrsByKrsRequest
    {
        Krs = "0000028860",
        IdempotencyKey = "3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteWatchlistKrsByKrsError> ex)
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

<code>[DeleteWatchlistKrsByKrsRequest](src/Compabase/Requests/Watchlist/DeleteWatchlistKrsByKrsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[DeleteWatchlistKrsByKrsError](src/Compabase/Errors/DeleteWatchlistKrsByKrsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetWatchlist(GetWatchlistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists companies on the watchlist of the **user account linked to the API key**.
Requires `user_id` on the key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlist.GetWatchlist(new GetWatchlistRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetWatchlistError> ex)
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

<code>[GetWatchlistRequest](src/Compabase/Requests/Watchlist/GetWatchlistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[GetWatchlistError](src/Compabase/Errors/GetWatchlistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WatchlistAddResponse&gt; PostWatchlistKrsByKrs(PostWatchlistKrsByKrsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a company to the **watchlist of the user account linked to the API key**.

The company is identified by **KRS** (Polish court registry number). Digits only;
leading zeros are optional (normalized to 10 digits server-side).

**Create-or-keep in one call, keyed by KRS:** if the company is already on the watchlist,
the response returns `already_following: true` and no duplicate entry is created, so the call
is safe to retry. `already_following` tells which branch ran.

**Reversible:** `DELETE /watchlist/krs/{krs}` removes the entry at any time.
Use `dry_run=true` to check the plan limit and the outcome without writing.

Requires an API key associated with a Compabase portal user account (`user_id` on the key).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Watchlist.PostWatchlistKrsByKrs(new PostWatchlistKrsByKrsRequest
    {
        Krs = "0000028860",
        IdempotencyKey = "3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41",
    });
    // TODO: Handle 'response' of type WatchlistAddResponse
}
catch (ApiException<PostWatchlistKrsByKrsError> ex)
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

<code>[PostWatchlistKrsByKrsRequest](src/Compabase/Requests/Watchlist/PostWatchlistKrsByKrsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WatchlistAddResponse](src/Compabase/Models/WatchlistAddResponse.cs)</code>

**OnError**: <code>[ApiException](src/Compabase/Core/Exceptions/ApiException.cs)&lt;[PostWatchlistKrsByKrsError](src/Compabase/Errors/PostWatchlistKrsByKrsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

