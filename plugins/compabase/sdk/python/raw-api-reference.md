# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [CompabaseClient](compabase/client.py)

## Companies

> Source: [Companies](compabase/apis/companies.py)

<details>
<summary><code>def get_ceidg_nip_by_nip(nip: str, *, locale: LocaleOrStr | None = Locale.EN, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCeidgNipByNipErrorBody]</code></summary>

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

**Sync**

```python
result = client.companies.with_raw_response.get_ceidg_nip_by_nip("7712488697", locale=Locale.EN)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCeidgNipByNipErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_ceidg_nip_by_nip("7712488697", locale=Locale.EN)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCeidgNipByNipErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nip</code> | <code>str</code> | NIP normalized to exactly 10 digits. |
| <code>locale</code> | <code>[LocaleOrStr](compabase/models/enums/locale.py) \| None</code> | Language for PKD labels and `companySummary` (one locale key in the response).<br>**Default**: <code>Locale.EN</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCeidgNipByNipErrorBody](compabase/errors/get_ceidg_nip_by_nip_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- CEIDG company profile.

**On `Failure`**: `error` is <code>[GetCeidgNipByNipErrorBody](compabase/errors/get_ceidg_nip_by_nip_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies(*, q: str | None = None, keywords: str | None = None, limit: int | None = 20, offset: int | None = 0, cursor: UUID | None = None, pkd: str | None = None, primary_only: bool | None = True, currency: CurrencyOrStr | None = Currency.PLN, voivodeship: str | None = None, postal_code: str | None = None, city: str | None = None, revenue_min: float | None = None, revenue_max: float | None = None, revenue_operating_min: float | None = None, revenue_operating_max: float | None = None, profit_operating_min: float | None = None, profit_operating_max: float | None = None, profit_net_min: float | None = None, profit_net_max: float | None = None, income_tax_min: float | None = None, income_tax_max: float | None = None, cost_wages_min: float | None = None, cost_wages_max: float | None = None, cost_amortization_min: float | None = None, cost_amortization_max: float | None = None, total_assets_min: float | None = None, total_assets_max: float | None = None, ebitda_min: float | None = None, ebitda_max: float | None = None, capital_min: float | None = None, capital_max: float | None = None, estimated_value_min: float | None = None, estimated_value_max: float | None = None, registration_year_min: int | None = None, registration_year_max: int | None = None, registration_date_min: Date | None = None, registration_date_max: Date | None = None, last_report_year_min: int | None = None, last_report_year_max: int | None = None, status_active: bool | None = None, legal_form: str | None = None, has_email: bool | None = None, has_website: bool | None = None, sort: SortOrStr | None = None, dir_: DirOrStr | None = Dir.DESC, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompanyListResponse, GetCompaniesErrorBody]</code></summary>

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

**Sync**

```python
result = client.companies.with_raw_response.get_companies(
    q="orlen",
    keywords="logistics,energy",
    pkd="62.01",
    voivodeship="mazowieckie",
    city="Warszawa",
    registration_year_min=2015,
    registration_date_min=date(2026, 10, 7),
    registration_date_max=date(2026, 10, 7),
    legal_form="spółka akcyjna",
    sort=Sort.REGISTRATION_DATE,
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_companies(
    q="orlen",
    keywords="logistics,energy",
    pkd="62.01",
    voivodeship="mazowieckie",
    city="Warszawa",
    registration_year_min=2015,
    registration_date_min=date(2026, 10, 7),
    registration_date_max=date(2026, 10, 7),
    legal_form="spółka akcyjna",
    sort=Sort.REGISTRATION_DATE,
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON<br>lookup. Whitespace is trimmed.<br>Matching strategy: - identifier-like numeric input: identifier lookup path is used first. For 10-digit numeric values, exact match is attempted against KRS (`registry_number`) and NIP; an exact match is also attempted against REGON as stored in the index. For other numeric lengths, prefix matching is used for those identifier fields. - textual input: case-insensitive substring match on company name (`ILIKE %q%`).<br>Numeric lookup has priority over text-name matching when `q` contains only digits. Example: `q=0000028860` is treated as identifier lookup (not generic relevance search).<br>**Default**: <code>None</code> |
| <code>keywords</code> | <code>str \| None</code> | Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter.<br>Each keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is supported (e.g. `keywords=a,b&keywords=c`).<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Page size. **Default:** `20`. `GET /companies` caps at **100** per request.<br>For bulk pulls use `GET /companies/export` (or `limit` &gt; 100 on `/companies` via API key), capped at **500** per page. For deep traversal, page with `cursor`.<br>**Quota accounting:** monthly quota counts each HTTP request. Row count in the page does not change the cost. Example: `limit=500` still consumes **1** request from monthly quota.<br>**Default**: <code>20</code> |
| <code>offset</code> | <code>int \| None</code> | Zero-based row offset for classic **offset** pagination.<br>Client contract: use either `offset` or `cursor` (not both). If both are provided, the server returns `400 CONFLICTING_PARAMETERS`.<br>**Default**: <code>0</code> |
| <code>cursor</code> | <code>UUID \| None</code> | Optional **cursor** for pagination: `entity_id` of the last row from the previous page.<br>Cursor paging is ordered by `entity_id` ascending. Use it for deep paging/export-style traversal. Do not combine with `offset`; if both are sent, request fails with `400 CONFLICTING_PARAMETERS`.<br>When present, the server may return `pagination.total: -1` and include `pagination.cursor` for the next page.<br>**Default**: <code>None</code> |
| <code>pkd</code> | <code>str \| None</code> | PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased server-side.<br>By default only the **primary** PKD (`primary_only=true`) is matched; set `primary_only=false` to match any code in `all_pkd_codes`.<br>**Default**: <code>None</code> |
| <code>primary_only</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` (default) means `pkd` matches `primary_pkd` only. `false` means `pkd` can match any entry in `all_pkd_codes`.<br>**Default**: <code>True</code> |
| <code>currency</code> | <code>[CurrencyOrStr](compabase/models/enums/currency.py) \| None</code> | Display/filter currency context for financial threshold filters.<br>Allowed values: `PLN`, `USD`, `EUR` (case-insensitive). Default is `PLN`.<br>For `revenue_min` / `revenue_max`, the API applies thresholds against: - `revenue_total` when `currency=PLN` - `revenue_total_usd` when `currency=USD` - `revenue_total_eur` when `currency=EUR`<br>**Default**: <code>Currency.PLN</code> |
| <code>voivodeship</code> | <code>str \| None</code> | Voivodeship / region filter. Compared to `company_search.region` **case-insensitively** (lowercased on the server).<br>Use the same spelling as stored in data (e.g. Polish voivodeship names such as `mazowieckie`, `śląskie`). Common values include: `dolnośląskie`, `małopolskie`, `mazowieckie`, `pomorskie`, `śląskie`, `wielkopolskie`.<br>**Default**: <code>None</code> |
| <code>postal_code</code> | <code>str \| None</code> | Exact postal code match (trimmed). Format depends on source data (e.g. `00-001`).<br>**Default**: <code>None</code> |
| <code>city</code> | <code>str \| None</code> | City substring filter (case-insensitive **ILIKE** `%city%`).<br>**Default**: <code>None</code> |
| <code>revenue_min</code> | <code>float \| None</code> | Minimum **total revenue** (`revenue_total`).<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. Values are in **full currency units** (not thousands), e.g. `1000000` = one million PLN. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter.<br>**Default**: <code>None</code> |
| <code>revenue_max</code> | <code>float \| None</code> | Maximum **total revenue** threshold in full units.<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used.<br>If `revenue_min > revenue_max`, the API returns `400` with code `INVALID_RANGE`. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter.<br>**Default**: <code>None</code> |
| <code>revenue_operating_min</code> | <code>float \| None</code> | Minimum operating revenue (net sales / operating revenue field from financials).<br>**Default**: <code>None</code> |
| <code>revenue_operating_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>profit_operating_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>profit_operating_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>profit_net_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>profit_net_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>income_tax_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>income_tax_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cost_wages_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cost_wages_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cost_amortization_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cost_amortization_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>total_assets_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>total_assets_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ebitda_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ebitda_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>capital_min</code> | <code>float \| None</code> | Minimum **share capital** (`capital_total`).<br>**Default**: <code>None</code> |
| <code>capital_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>estimated_value_min</code> | <code>float \| None</code> | Minimum **estimated company value** (`estimated_value`), when present in search index.<br>**Default**: <code>None</code> |
| <code>estimated_value_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>registration_year_min</code> | <code>int \| None</code> | Earliest **registration** year (`registration_date` filter): companies registered on or after `YYYY-01-01`.<br>**Default**: <code>None</code> |
| <code>registration_year_max</code> | <code>int \| None</code> | Latest registration year (`registration_date` on or before `YYYY-12-31`).<br>**Default**: <code>None</code> |
| <code>registration_date_min</code> | <code>Date \| None</code> | Earliest exact **registration date** (`registration_date` on or after this day, inclusive), format `YYYY-MM-DD`. Takes precedence over `registration_year_min`. For companies registered today, pass today's date as both `registration_date_min` and `registration_date_max`. Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.<br>**Default**: <code>None</code> |
| <code>registration_date_max</code> | <code>Date \| None</code> | Latest exact registration date (`registration_date` on or before this day, inclusive), format `YYYY-MM-DD`. Takes precedence over `registration_year_max`.<br>**Default**: <code>None</code> |
| <code>last_report_year_min</code> | <code>int \| None</code> | Earliest **financial report period** (`financial_period_to` on or after `YYYY-01-01`).<br>When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot.<br>**Default**: <code>None</code> |
| <code>last_report_year_max</code> | <code>int \| None</code> | Latest financial report period (`financial_period_to` on or before `YYYY-12-31`).<br>When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot.<br>**Default**: <code>None</code> |
| <code>status_active</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only active companies). `false` is syntactically valid and treated as no filter.<br>**Default**: <code>None</code> |
| <code>legal_form</code> | <code>str \| None</code> | Legal form substring filter (case-insensitive **ILIKE** `%legal_form%`).<br>Common values/phrases: `spółka z ograniczoną odpowiedzialnością`, `spółka akcyjna`, `prosta spółka akcyjna`, `spółka komandytowa`, `jednoosobowa działalność gospodarcza`.<br>**Default**: <code>None</code> |
| <code>has_email</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with email). `false` is syntactically valid and treated as no filter.<br>**Default**: <code>None</code> |
| <code>has_website</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with website). `false` is syntactically valid and treated as no filter.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortOrStr](compabase/models/enums/sort.py) \| None</code> | Sort the result set by one column (default: completeness / revenue ranking). Rows without a value in that column are excluded while sorting. Text columns (`name`, `nip`, `regon`, `city`, `region`, `postal_code`) sort alphabetically; `registration_date` with `dir=desc` lists the newest registrations first (future-dated register errors are skipped); `revenue_growth` with `dir=desc` lists the fastest-growing companies (y/y revenue growth in %, latest vs previous financial year from KRS statements; combine with `revenue_min` to skip small companies). Not applied to free-text (`q`) or `keywords` searches, which keep relevance order.<br>**Default**: <code>None</code> |
| <code>dir_</code> | <code>[DirOrStr](compabase/models/enums/dir.py) \| None</code> | Sort direction for `sort` (`asc` or `desc`, default `desc`).<br>**Default**: <code>Dir.DESC</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompanyListResponse](compabase/models/company_list_response.py), [GetCompaniesErrorBody](compabase/errors/get_companies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompanyListResponse](compabase/models/company_list_response.py)</code> -- Paginated search results: **`data`** is an array of companies (one object per row on this page).
Fields per row depend on filters and internal path; optional keys may be omitted or null.

**On `Failure`**: `error` is <code>[GetCompaniesErrorBody](compabase/errors/get_companies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_count(*, q: str | None = None, keywords: str | None = None, pkd: str | None = None, primary_only: bool | None = True, currency: CurrencyOrStr | None = Currency.PLN, voivodeship: str | None = None, postal_code: str | None = None, city: str | None = None, revenue_min: float | None = None, revenue_max: float | None = None, revenue_operating_min: float | None = None, revenue_operating_max: float | None = None, profit_operating_min: float | None = None, profit_operating_max: float | None = None, profit_net_min: float | None = None, profit_net_max: float | None = None, income_tax_min: float | None = None, income_tax_max: float | None = None, cost_wages_min: float | None = None, cost_wages_max: float | None = None, cost_amortization_min: float | None = None, cost_amortization_max: float | None = None, total_assets_min: float | None = None, total_assets_max: float | None = None, ebitda_min: float | None = None, ebitda_max: float | None = None, capital_min: float | None = None, capital_max: float | None = None, estimated_value_min: float | None = None, estimated_value_max: float | None = None, registration_year_min: int | None = None, registration_year_max: int | None = None, registration_date_min: Date | None = None, registration_date_max: Date | None = None, last_report_year_min: int | None = None, last_report_year_max: int | None = None, status_active: bool | None = None, legal_form: str | None = None, has_email: bool | None = None, has_website: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompanyCountResponse, GetCompaniesCountErrorBody]</code></summary>

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

**Sync**

```python
result = client.companies.with_raw_response.get_companies_count(
    q="orlen",
    keywords="logistics,energy",
    pkd="62.01",
    voivodeship="mazowieckie",
    city="Warszawa",
    registration_year_min=2015,
    registration_date_min=date(2026, 10, 7),
    registration_date_max=date(2026, 10, 7),
    legal_form="spółka akcyjna",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyCountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesCountErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_companies_count(
    q="orlen",
    keywords="logistics,energy",
    pkd="62.01",
    voivodeship="mazowieckie",
    city="Warszawa",
    registration_year_min=2015,
    registration_date_min=date(2026, 10, 7),
    registration_date_max=date(2026, 10, 7),
    legal_form="spółka akcyjna",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyCountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesCountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON<br>lookup. Whitespace is trimmed.<br>Matching strategy: - identifier-like numeric input: identifier lookup path is used first. For 10-digit numeric values, exact match is attempted against KRS (`registry_number`) and NIP; an exact match is also attempted against REGON as stored in the index. For other numeric lengths, prefix matching is used for those identifier fields. - textual input: case-insensitive substring match on company name (`ILIKE %q%`).<br>Numeric lookup has priority over text-name matching when `q` contains only digits. Example: `q=0000028860` is treated as identifier lookup (not generic relevance search).<br>**Default**: <code>None</code> |
| <code>keywords</code> | <code>str \| None</code> | Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter.<br>Each keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is supported (e.g. `keywords=a,b&keywords=c`).<br>**Default**: <code>None</code> |
| <code>pkd</code> | <code>str \| None</code> | PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased server-side.<br>By default only the **primary** PKD (`primary_only=true`) is matched; set `primary_only=false` to match any code in `all_pkd_codes`.<br>**Default**: <code>None</code> |
| <code>primary_only</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` (default) means `pkd` matches `primary_pkd` only. `false` means `pkd` can match any entry in `all_pkd_codes`.<br>**Default**: <code>True</code> |
| <code>currency</code> | <code>[CurrencyOrStr](compabase/models/enums/currency.py) \| None</code> | Display/filter currency context for financial threshold filters.<br>Allowed values: `PLN`, `USD`, `EUR` (case-insensitive). Default is `PLN`.<br>For `revenue_min` / `revenue_max`, the API applies thresholds against: - `revenue_total` when `currency=PLN` - `revenue_total_usd` when `currency=USD` - `revenue_total_eur` when `currency=EUR`<br>**Default**: <code>Currency.PLN</code> |
| <code>voivodeship</code> | <code>str \| None</code> | Voivodeship / region filter. Compared to `company_search.region` **case-insensitively** (lowercased on the server).<br>Use the same spelling as stored in data (e.g. Polish voivodeship names such as `mazowieckie`, `śląskie`). Common values include: `dolnośląskie`, `małopolskie`, `mazowieckie`, `pomorskie`, `śląskie`, `wielkopolskie`.<br>**Default**: <code>None</code> |
| <code>postal_code</code> | <code>str \| None</code> | Exact postal code match (trimmed). Format depends on source data (e.g. `00-001`).<br>**Default**: <code>None</code> |
| <code>city</code> | <code>str \| None</code> | City substring filter (case-insensitive **ILIKE** `%city%`).<br>**Default**: <code>None</code> |
| <code>revenue_min</code> | <code>float \| None</code> | Minimum **total revenue** (`revenue_total`).<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. Values are in **full currency units** (not thousands), e.g. `1000000` = one million PLN. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter.<br>**Default**: <code>None</code> |
| <code>revenue_max</code> | <code>float \| None</code> | Maximum **total revenue** threshold in full units.<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used.<br>If `revenue_min > revenue_max`, the API returns `400` with code `INVALID_RANGE`. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter.<br>**Default**: <code>None</code> |
| <code>revenue_operating_min</code> | <code>float \| None</code> | Minimum operating revenue (net sales / operating revenue field from financials).<br>**Default**: <code>None</code> |
| <code>revenue_operating_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>profit_operating_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>profit_operating_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>profit_net_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>profit_net_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>income_tax_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>income_tax_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cost_wages_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cost_wages_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cost_amortization_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cost_amortization_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>total_assets_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>total_assets_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ebitda_min</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ebitda_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>capital_min</code> | <code>float \| None</code> | Minimum **share capital** (`capital_total`).<br>**Default**: <code>None</code> |
| <code>capital_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>estimated_value_min</code> | <code>float \| None</code> | Minimum **estimated company value** (`estimated_value`), when present in search index.<br>**Default**: <code>None</code> |
| <code>estimated_value_max</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>registration_year_min</code> | <code>int \| None</code> | Earliest **registration** year (`registration_date` filter): companies registered on or after `YYYY-01-01`.<br>**Default**: <code>None</code> |
| <code>registration_year_max</code> | <code>int \| None</code> | Latest registration year (`registration_date` on or before `YYYY-12-31`).<br>**Default**: <code>None</code> |
| <code>registration_date_min</code> | <code>Date \| None</code> | Earliest exact **registration date** (`registration_date` on or after this day, inclusive), format `YYYY-MM-DD`. Takes precedence over `registration_year_min`. For companies registered today, pass today's date as both `registration_date_min` and `registration_date_max`. Applies to KRS companies and to JDG (CEIDG) rows merged into browse results.<br>**Default**: <code>None</code> |
| <code>registration_date_max</code> | <code>Date \| None</code> | Latest exact registration date (`registration_date` on or before this day, inclusive), format `YYYY-MM-DD`. Takes precedence over `registration_year_max`.<br>**Default**: <code>None</code> |
| <code>last_report_year_min</code> | <code>int \| None</code> | Earliest **financial report period** (`financial_period_to` on or after `YYYY-01-01`).<br>When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot.<br>**Default**: <code>None</code> |
| <code>last_report_year_max</code> | <code>int \| None</code> | Latest financial report period (`financial_period_to` on or before `YYYY-12-31`).<br>When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot.<br>**Default**: <code>None</code> |
| <code>status_active</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only active companies). `false` is syntactically valid and treated as no filter.<br>**Default**: <code>None</code> |
| <code>legal_form</code> | <code>str \| None</code> | Legal form substring filter (case-insensitive **ILIKE** `%legal_form%`).<br>Common values/phrases: `spółka z ograniczoną odpowiedzialnością`, `spółka akcyjna`, `prosta spółka akcyjna`, `spółka komandytowa`, `jednoosobowa działalność gospodarcza`.<br>**Default**: <code>None</code> |
| <code>has_email</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with email). `false` is syntactically valid and treated as no filter.<br>**Default**: <code>None</code> |
| <code>has_website</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with website). `false` is syntactically valid and treated as no filter.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompanyCountResponse](compabase/models/company_count_response.py), [GetCompaniesCountErrorBody](compabase/errors/get_companies_count_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompanyCountResponse](compabase/models/company_count_response.py)</code> -- Total number of companies matching the request filters.

**On `Failure`**: `error` is <code>[GetCompaniesCountErrorBody](compabase/errors/get_companies_count_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_export(*, q: str | None = None, keywords: str | None = None, limit: int | None = 100, offset: int | None = 0, cursor: UUID | None = None, pkd: str | None = None, primary_only: bool | None = True, has_email: bool | None = None, has_website: bool | None = None, status_active: bool | None = None, revenue_min: float | None = None, revenue_max: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompanyListResponse, GetCompaniesExportErrorBody]</code></summary>

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

**Sync**

```python
result = client.companies.with_raw_response.get_companies_export(q="orlen", keywords="logistics,energy", pkd="62.01")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesExportErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_companies_export(
    q="orlen", keywords="logistics,energy", pkd="62.01"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompanyListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str \| None</code> | Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON<br>lookup. Whitespace is trimmed.<br>Matching strategy: - identifier-like numeric input: identifier lookup path is used first. For 10-digit numeric values, exact match is attempted against KRS (`registry_number`) and NIP; an exact match is also attempted against REGON as stored in the index. For other numeric lengths, prefix matching is used for those identifier fields. - textual input: case-insensitive substring match on company name (`ILIKE %q%`).<br>Numeric lookup has priority over text-name matching when `q` contains only digits. Example: `q=0000028860` is treated as identifier lookup (not generic relevance search).<br>**Default**: <code>None</code> |
| <code>keywords</code> | <code>str \| None</code> | Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter.<br>Each keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is supported (e.g. `keywords=a,b&keywords=c`).<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Page size for bulk export (max 500).<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | Zero-based row offset for classic **offset** pagination.<br>Client contract: use either `offset` or `cursor` (not both). If both are provided, the server returns `400 CONFLICTING_PARAMETERS`.<br>**Default**: <code>0</code> |
| <code>cursor</code> | <code>UUID \| None</code> | Optional **cursor** for pagination: `entity_id` of the last row from the previous page.<br>Cursor paging is ordered by `entity_id` ascending. Use it for deep paging/export-style traversal. Do not combine with `offset`; if both are sent, request fails with `400 CONFLICTING_PARAMETERS`.<br>When present, the server may return `pagination.total: -1` and include `pagination.cursor` for the next page.<br>**Default**: <code>None</code> |
| <code>pkd</code> | <code>str \| None</code> | PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased server-side.<br>By default only the **primary** PKD (`primary_only=true`) is matched; set `primary_only=false` to match any code in `all_pkd_codes`.<br>**Default**: <code>None</code> |
| <code>primary_only</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` (default) means `pkd` matches `primary_pkd` only. `false` means `pkd` can match any entry in `all_pkd_codes`.<br>**Default**: <code>True</code> |
| <code>has_email</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with email). `false` is syntactically valid and treated as no filter.<br>**Default**: <code>None</code> |
| <code>has_website</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with website). `false` is syntactically valid and treated as no filter.<br>**Default**: <code>None</code> |
| <code>status_active</code> | <code>bool \| None</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only active companies). `false` is syntactically valid and treated as no filter.<br>**Default**: <code>None</code> |
| <code>revenue_min</code> | <code>float \| None</code> | Minimum **total revenue** (`revenue_total`).<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. Values are in **full currency units** (not thousands), e.g. `1000000` = one million PLN. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter.<br>**Default**: <code>None</code> |
| <code>revenue_max</code> | <code>float \| None</code> | Maximum **total revenue** threshold in full units.<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used.<br>If `revenue_min > revenue_max`, the API returns `400` with code `INVALID_RANGE`. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompanyListResponse](compabase/models/company_list_response.py), [GetCompaniesExportErrorBody](compabase/errors/get_companies_export_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompanyListResponse](compabase/models/company_list_response.py)</code> -- One page of companies (same shape as `GET /companies`).

**On `Failure`**: `error` is <code>[GetCompaniesExportErrorBody](compabase/errors/get_companies_export_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsErrorBody]</code></summary>

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

**Sync**

```python
result = client.companies.with_raw_response.get_companies_krs_by_krs("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_companies_krs_by_krs("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsErrorBody](compabase/errors/get_companies_krs_by_krs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Full company profile object resolved from KRS.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsErrorBody](compabase/errors/get_companies_krs_by_krs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_connections(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsConnectionsErrorBody]</code></summary>

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

**Sync**

```python
result = client.companies.with_raw_response.get_companies_krs_by_krs_connections("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsConnectionsErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_companies_krs_by_krs_connections("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsConnectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsConnectionsErrorBody](compabase/errors/get_companies_krs_by_krs_connections_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Connections payload.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsConnectionsErrorBody](compabase/errors/get_companies_krs_by_krs_connections_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_group(krs: str, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsGroupErrorBody]</code></summary>

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

**Sync**

```python
result = client.companies.with_raw_response.get_companies_krs_by_krs_group("0000183975")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsGroupErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_companies_krs_by_krs_group("0000183975")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>limit</code> | <code>int \| None</code> | Max group companies per list.<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsGroupErrorBody](compabase/errors/get_companies_krs_by_krs_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Corporate group.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsGroupErrorBody](compabase/errors/get_companies_krs_by_krs_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](compabase/core/results.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_status(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsStatusErrorBody]</code></summary>

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

**Sync**

```python
result = client.companies.with_raw_response.get_companies_krs_by_krs_status("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsStatusErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_companies_krs_by_krs_status("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsStatusErrorBody](compabase/errors/get_companies_krs_by_krs_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Legal status for a company.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsStatusErrorBody](compabase/errors/get_companies_krs_by_krs_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_structure_people(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsStructurePeopleErrorBody]</code></summary>

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

**Sync**

```python
result = client.companies.with_raw_response.get_companies_krs_by_krs_structure_people("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsStructurePeopleErrorBody
```

**Async**

```python
result = await async_client.companies.with_raw_response.get_companies_krs_by_krs_structure_people("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsStructurePeopleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsStructurePeopleErrorBody](compabase/errors/get_companies_krs_by_krs_structure_people_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Roles and ownership structure.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsStructurePeopleErrorBody](compabase/errors/get_companies_krs_by_krs_structure_people_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Financials

> Source: [Financials](compabase/apis/financials.py)

<details>
<summary><code>def get_companies_krs_by_krs_financial_documents(krs: str, *, limit: int | None = 25, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsFinancialDocumentsErrorBody]</code></summary>

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

**Sync**

```python
result = client.financials.with_raw_response.get_companies_krs_by_krs_financial_documents("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsFinancialDocumentsErrorBody
```

**Async**

```python
result = await async_client.financials.with_raw_response.get_companies_krs_by_krs_financial_documents("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsFinancialDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>25</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsFinancialDocumentsErrorBody](compabase/errors/get_companies_krs_by_krs_financial_documents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Document metadata page.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsFinancialDocumentsErrorBody](compabase/errors/get_companies_krs_by_krs_financial_documents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_financial_statements(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsFinancialStatementsErrorBody]</code></summary>

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

**Sync**

```python
result = client.financials.with_raw_response.get_companies_krs_by_krs_financial_statements("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsFinancialStatementsErrorBody
```

**Async**

```python
result = await async_client.financials.with_raw_response.get_companies_krs_by_krs_financial_statements("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsFinancialStatementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsFinancialStatementsErrorBody](compabase/errors/get_companies_krs_by_krs_financial_statements_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Financial metrics grouped by year.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsFinancialStatementsErrorBody](compabase/errors/get_companies_krs_by_krs_financial_statements_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_statistics(krs: str, *, locale: str | None = "en", request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsStatisticsErrorBody]</code></summary>

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

**Sync**

```python
result = client.financials.with_raw_response.get_companies_krs_by_krs_statistics("0001088645")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsStatisticsErrorBody
```

**Async**

```python
result = await async_client.financials.with_raw_response.get_companies_krs_by_krs_statistics("0001088645")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsStatisticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | Value sent with the request. |
| <code>locale</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>"en"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsStatisticsErrorBody](compabase/errors/get_companies_krs_by_krs_statistics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Rankings (`scopes`) plus peer distributions (`benchmarks` keyed by
`scope_type::scope_key`). Company figures are the latest indexed snapshot.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsStatisticsErrorBody](compabase/errors/get_companies_krs_by_krs_statistics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](compabase/apis/health.py)

<details>
<summary><code>def get_health(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[HealthResponse, RawError]</code></summary>

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

**Sync**

```python
result = client.health.with_raw_response.get_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.health.with_raw_response.get_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HealthResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[HealthResponse](compabase/models/health_response.py), [RawError](compabase/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[HealthResponse](compabase/models/health_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](compabase/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](compabase/apis/news.py)

<details>
<summary><code>def get_companies_krs_by_krs_news(krs: str, *, locale: str | None = "en", request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsNewsErrorBody]</code></summary>

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

**Sync**

```python
result = client.news.with_raw_response.get_companies_krs_by_krs_news("0000057567")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsNewsErrorBody
```

**Async**

```python
result = await async_client.news.with_raw_response.get_companies_krs_by_krs_news("0000057567")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsNewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | Value sent with the request. |
| <code>locale</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>"en"</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsNewsErrorBody](compabase/errors/get_companies_krs_by_krs_news_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- News and optional UGC fields (empty arrays/nulls when none).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsNewsErrorBody](compabase/errors/get_companies_krs_by_krs_news_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_news(*, since: str | None = None, pkd: str | None = None, city: str | None = None, locale: LocaleOrStr | None = None, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetNewsErrorBody]</code></summary>

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

**Sync**

```python
result = client.news.with_raw_response.get_news()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetNewsErrorBody
```

**Async**

```python
result = await async_client.news.with_raw_response.get_news()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetNewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>since</code> | <code>str \| None</code> | Only news published on or after this date (YYYY-MM-DD).<br>**Default**: <code>None</code> |
| <code>pkd</code> | <code>str \| None</code> | 2–5 digit prefix of the company main PKD code (e.g. `62` for IT).<br>**Default**: <code>None</code> |
| <code>city</code> | <code>str \| None</code> | Company seat city.<br>**Default**: <code>None</code> |
| <code>locale</code> | <code>[LocaleOrStr](compabase/models/enums/locale.py) \| None</code> | Language of the returned titles.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Page size, 1–100 (default 50).<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Zero-based offset (max 5000).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetNewsErrorBody](compabase/errors/get_news_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Page of news articles.

**On `Failure`**: `error` is <code>[GetNewsErrorBody](compabase/errors/get_news_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Persons

> Source: [Persons](compabase/apis/persons.py)

<details>
<summary><code>def get_persons_by_person_id_connections(person_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PersonConnectionsResponse, GetPersonsByPersonIdConnectionsErrorBody]</code></summary>

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

**Sync**

```python
result = client.persons.with_raw_response.get_persons_by_person_id_connections(
    UUID("033e6964-179b-4039-86a2-0e0590c56918")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PersonConnectionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPersonsByPersonIdConnectionsErrorBody
```

**Async**

```python
result = await async_client.persons.with_raw_response.get_persons_by_person_id_connections(
    UUID("033e6964-179b-4039-86a2-0e0590c56918")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PersonConnectionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPersonsByPersonIdConnectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>person_id</code> | <code>UUID</code> | UUID of the person; obtained from `GET /persons/search`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[PersonConnectionsResponse](compabase/models/person_connections_response.py), [GetPersonsByPersonIdConnectionsErrorBody](compabase/errors/get_persons_by_person_id_connections_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PersonConnectionsResponse](compabase/models/person_connections_response.py)</code> -- Person connections payload.

**On `Failure`**: `error` is <code>[GetPersonsByPersonIdConnectionsErrorBody](compabase/errors/get_persons_by_person_id_connections_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_persons_search(q: str, *, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PersonsSearchResponse, GetPersonsSearchErrorBody]</code></summary>

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

**Sync**

```python
result = client.persons.with_raw_response.get_persons_search("Kowalski")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PersonsSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPersonsSearchErrorBody
```

**Async**

```python
result = await async_client.persons.with_raw_response.get_persons_search("Kowalski")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PersonsSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPersonsSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | Name substring to search for (case-insensitive). Must be at least<br>**2 characters**. Matched against the stored display name using<br>`ILIKE %q%`. |
| <code>limit</code> | <code>int \| None</code> | Maximum number of persons to return. Capped at **50**.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[PersonsSearchResponse](compabase/models/persons_search_response.py), [GetPersonsSearchErrorBody](compabase/errors/get_persons_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PersonsSearchResponse](compabase/models/persons_search_response.py)</code> -- List of matching persons.

**On `Failure`**: `error` is <code>[GetPersonsSearchErrorBody](compabase/errors/get_persons_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Registers

> Source: [Registers](compabase/apis/registers.py)

<details>
<summary><code>def get_ceidg_nip_by_nip_nfz_queues(nip: str, *, service: str | None = None, town: str | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCeidgNipByNipNfzQueuesErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_ceidg_nip_by_nip_nfz_queues("1130018111")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCeidgNipByNipNfzQueuesErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_ceidg_nip_by_nip_nfz_queues("1130018111")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCeidgNipByNipNfzQueuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nip</code> | <code>str</code> | Value sent with the request. |
| <code>service</code> | <code>str \| None</code> | Filter by a fragment of the service name (diacritics optional), e.g. `okulist`, `ortoped`, `rezonans`.<br>**Default**: <code>None</code> |
| <code>town</code> | <code>str \| None</code> | Filter by town or district, e.g. `Poznań`.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCeidgNipByNipNfzQueuesErrorBody](compabase/errors/get_ceidg_nip_by_nip_nfz_queues_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- NFZ waiting lists for the NIP.

**On `Failure`**: `error` is <code>[GetCeidgNipByNipNfzQueuesErrorBody](compabase/errors/get_ceidg_nip_by_nip_nfz_queues_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ceidg_nip_by_nip_procurement_counterparties(nip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCeidgNipByNipProcurementCounterpartiesErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_ceidg_nip_by_nip_procurement_counterparties("7352731108")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCeidgNipByNipProcurementCounterpartiesErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_ceidg_nip_by_nip_procurement_counterparties("7352731108")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCeidgNipByNipProcurementCounterpartiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nip</code> | <code>str</code> | 10-digit NIP (non-digits are stripped). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCeidgNipByNipProcurementCounterpartiesErrorBody](compabase/errors/get_ceidg_nip_by_nip_procurement_counterparties_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Counterparties.

**On `Failure`**: `error` is <code>[GetCeidgNipByNipProcurementCounterpartiesErrorBody](compabase/errors/get_ceidg_nip_by_nip_procurement_counterparties_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ceidg_nip_by_nip_website_facts(nip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCeidgNipByNipWebsiteFactsErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_ceidg_nip_by_nip_website_facts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCeidgNipByNipWebsiteFactsErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_ceidg_nip_by_nip_website_facts("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCeidgNipByNipWebsiteFactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nip</code> | <code>str</code> | 10-digit NIP (non-digits are stripped). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCeidgNipByNipWebsiteFactsErrorBody](compabase/errors/get_ceidg_nip_by_nip_website_facts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Website facts.

**On `Failure`**: `error` is <code>[GetCeidgNipByNipWebsiteFactsErrorBody](compabase/errors/get_ceidg_nip_by_nip_website_facts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_beneficiaries(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsBeneficiariesResponse, GetCompaniesKrsByKrsBeneficiariesErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_beneficiaries("0000446005")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsBeneficiariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsBeneficiariesErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_beneficiaries("0000446005")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsBeneficiariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsBeneficiariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsBeneficiariesResponse](compabase/models/companies_krs_beneficiaries_response.py), [GetCompaniesKrsByKrsBeneficiariesErrorBody](compabase/errors/get_companies_krs_by_krs_beneficiaries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsBeneficiariesResponse](compabase/models/companies_krs_beneficiaries_response.py)</code> -- CRBR filing with the list of beneficial owners.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsBeneficiariesErrorBody](compabase/errors/get_companies_krs_by_krs_beneficiaries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_court_gazette(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsCourtGazetteResponse, GetCompaniesKrsByKrsCourtGazetteErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_court_gazette("0000269394")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsCourtGazetteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsCourtGazetteErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_court_gazette("0000269394")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsCourtGazetteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsCourtGazetteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsCourtGazetteResponse](compabase/models/companies_krs_court_gazette_response.py), [GetCompaniesKrsByKrsCourtGazetteErrorBody](compabase/errors/get_companies_krs_by_krs_court_gazette_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsCourtGazetteResponse](compabase/models/companies_krs_court_gazette_response.py)</code> -- MSiG notices, newest first.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsCourtGazetteErrorBody](compabase/errors/get_companies_krs_by_krs_court_gazette_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_energy_licenses(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsEnergyLicensesResponse, GetCompaniesKrsByKrsEnergyLicensesErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_energy_licenses("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsEnergyLicensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsEnergyLicensesErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_energy_licenses("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsEnergyLicensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsEnergyLicensesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsEnergyLicensesResponse](compabase/models/companies_krs_energy_licenses_response.py), [GetCompaniesKrsByKrsEnergyLicensesErrorBody](compabase/errors/get_companies_krs_by_krs_energy_licenses_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsEnergyLicensesResponse](compabase/models/companies_krs_energy_licenses_response.py)</code> -- URE concessions (null when the company holds none).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsEnergyLicensesErrorBody](compabase/errors/get_companies_krs_by_krs_energy_licenses_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_eu_funds(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsEuFundsResponse, GetCompaniesKrsByKrsEuFundsErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_eu_funds("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsEuFundsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsEuFundsErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_eu_funds("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsEuFundsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsEuFundsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsEuFundsResponse](compabase/models/companies_krs_eu_funds_response.py), [GetCompaniesKrsByKrsEuFundsErrorBody](compabase/errors/get_companies_krs_by_krs_eu_funds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsEuFundsResponse](compabase/models/companies_krs_eu_funds_response.py)</code> -- European Funds projects of the company.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsEuFundsErrorBody](compabase/errors/get_companies_krs_by_krs_eu_funds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_eu_grants(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsEuGrantsResponse, GetCompaniesKrsByKrsEuGrantsErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_eu_grants("0000008820")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsEuGrantsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsEuGrantsErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_eu_grants("0000008820")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsEuGrantsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsEuGrantsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsEuGrantsResponse](compabase/models/companies_krs_eu_grants_response.py), [GetCompaniesKrsByKrsEuGrantsErrorBody](compabase/errors/get_companies_krs_by_krs_eu_grants_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsEuGrantsResponse](compabase/models/companies_krs_eu_grants_response.py)</code> -- FTS awards of the company.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsEuGrantsErrorBody](compabase/errors/get_companies_krs_by_krs_eu_grants_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_filing_timeliness(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsFilingTimelinessResponse, GetCompaniesKrsByKrsFilingTimelinessErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_filing_timeliness("0000057567")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsFilingTimelinessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsFilingTimelinessErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_filing_timeliness("0000057567")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsFilingTimelinessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsFilingTimelinessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsFilingTimelinessResponse](compabase/models/companies_krs_filing_timeliness_response.py), [GetCompaniesKrsByKrsFilingTimelinessErrorBody](compabase/errors/get_companies_krs_by_krs_filing_timeliness_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsFilingTimelinessResponse](compabase/models/companies_krs_filing_timeliness_response.py)</code> -- Filing timeliness (null when the company has never filed a financial statement).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsFilingTimelinessErrorBody](compabase/errors/get_companies_krs_by_krs_filing_timeliness_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_financial_licenses(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsFinancialLicensesResponse, GetCompaniesKrsByKrsFinancialLicensesErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_financial_licenses("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsFinancialLicensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsFinancialLicensesErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_financial_licenses("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsFinancialLicensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsFinancialLicensesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsFinancialLicensesResponse](compabase/models/companies_krs_financial_licenses_response.py), [GetCompaniesKrsByKrsFinancialLicensesErrorBody](compabase/errors/get_companies_krs_by_krs_financial_licenses_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsFinancialLicensesResponse](compabase/models/companies_krs_financial_licenses_response.py)</code> -- KNF entries (null when the company has none).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsFinancialLicensesErrorBody](compabase/errors/get_companies_krs_by_krs_financial_licenses_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_gpw(krs: str, *, include: str | None = None, series_limit: int | None = 250, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsGpwErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_gpw("0000028860", include="series")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsGpwErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_gpw("0000028860", include="series")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsGpwErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>include</code> | <code>str \| None</code> | Comma-separated extras. Supported values `series`, `intraday`.<br>**Default**: <code>None</code> |
| <code>series_limit</code> | <code>int \| None</code> | Daily bars when `include` contains `series`. Ignored otherwise.<br>**Default**: <code>250</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsGpwErrorBody](compabase/errors/get_companies_krs_by_krs_gpw_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Listing snapshot (`gpw` may be null).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsGpwErrorBody](compabase/errors/get_companies_krs_by_krs_gpw_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_insolvency(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsInsolvencyResponse, GetCompaniesKrsByKrsInsolvencyErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_insolvency("0000026438")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsInsolvencyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsInsolvencyErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_insolvency("0000026438")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsInsolvencyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsInsolvencyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsInsolvencyResponse](compabase/models/companies_krs_insolvency_response.py), [GetCompaniesKrsByKrsInsolvencyErrorBody](compabase/errors/get_companies_krs_by_krs_insolvency_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsInsolvencyResponse](compabase/models/companies_krs_insolvency_response.py)</code> -- KRZ proceedings of the company.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsInsolvencyErrorBody](compabase/errors/get_companies_krs_by_krs_insolvency_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_nfz_contracts(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsNfzContractsErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_nfz_contracts("0000289698")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsNfzContractsErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_nfz_contracts("0000289698")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsNfzContractsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsNfzContractsErrorBody](compabase/errors/get_companies_krs_by_krs_nfz_contracts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- NFZ contracts (`nfz` is null when the company has no NFZ contracts).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsNfzContractsErrorBody](compabase/errors/get_companies_krs_by_krs_nfz_contracts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_nfz_queues(krs: str, *, service: str | None = None, town: str | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsNfzQueuesErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_nfz_queues("0000446005")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsNfzQueuesErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_nfz_queues("0000446005")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsNfzQueuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>service</code> | <code>str \| None</code> | Filter by a fragment of the service name (diacritics optional), e.g. `okulist`, `ortoped`, `rezonans`.<br>**Default**: <code>None</code> |
| <code>town</code> | <code>str \| None</code> | Filter by town or district, e.g. `Poznań`.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsNfzQueuesErrorBody](compabase/errors/get_companies_krs_by_krs_nfz_queues_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- NFZ waiting lists (`queues` is null when the provider has none).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsNfzQueuesErrorBody](compabase/errors/get_companies_krs_by_krs_nfz_queues_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_procurement_counterparties(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsProcurementCounterpartiesResponse, GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_procurement_counterparties("0000001764")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsProcurementCounterpartiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_procurement_counterparties(
    "0000001764"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsProcurementCounterpartiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsProcurementCounterpartiesResponse](compabase/models/companies_krs_procurement_counterparties_response.py), [GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody](compabase/errors/get_companies_krs_by_krs_procurement_counterparties_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsProcurementCounterpartiesResponse](compabase/models/companies_krs_procurement_counterparties_response.py)</code> -- Counterparties (null when the company has no public procurement).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsProcurementCounterpartiesErrorBody](compabase/errors/get_companies_krs_by_krs_procurement_counterparties_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_public_aid(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsPublicAidResponse, GetCompaniesKrsByKrsPublicAidErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_public_aid("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsPublicAidResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsPublicAidErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_public_aid("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsPublicAidResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsPublicAidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsPublicAidResponse](compabase/models/companies_krs_public_aid_response.py), [GetCompaniesKrsByKrsPublicAidErrorBody](compabase/errors/get_companies_krs_by_krs_public_aid_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsPublicAidResponse](compabase/models/companies_krs_public_aid_response.py)</code> -- Public aid cases of the company.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsPublicAidErrorBody](compabase/errors/get_companies_krs_by_krs_public_aid_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_real_estate(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsRealEstateResponse, GetCompaniesKrsByKrsRealEstateErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_real_estate("0000057567")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsRealEstateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsRealEstateErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_real_estate("0000057567")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsRealEstateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsRealEstateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsRealEstateResponse](compabase/models/companies_krs_real_estate_response.py), [GetCompaniesKrsByKrsRealEstateErrorBody](compabase/errors/get_companies_krs_by_krs_real_estate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsRealEstateResponse](compabase/models/companies_krs_real_estate_response.py)</code> -- Real estate (null when the balance sheet shows none).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsRealEstateErrorBody](compabase/errors/get_companies_krs_by_krs_real_estate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_sanctions(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsSanctionsResponse, GetCompaniesKrsByKrsSanctionsErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_sanctions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsSanctionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsSanctionsErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_sanctions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsSanctionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsSanctionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsSanctionsResponse](compabase/models/companies_krs_sanctions_response.py), [GetCompaniesKrsByKrsSanctionsErrorBody](compabase/errors/get_companies_krs_by_krs_sanctions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsSanctionsResponse](compabase/models/companies_krs_sanctions_response.py)</code> -- Sanctions payload. `sanctions` is null when the company is not listed.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsSanctionsErrorBody](compabase/errors/get_companies_krs_by_krs_sanctions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_secured_liabilities(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsSecuredLiabilitiesResponse, GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_secured_liabilities("0000759658")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsSecuredLiabilitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_secured_liabilities("0000759658")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsSecuredLiabilitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsSecuredLiabilitiesResponse](compabase/models/companies_krs_secured_liabilities_response.py), [GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody](compabase/errors/get_companies_krs_by_krs_secured_liabilities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsSecuredLiabilitiesResponse](compabase/models/companies_krs_secured_liabilities_response.py)</code> -- Secured liabilities (null when nothing is disclosed).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsSecuredLiabilitiesErrorBody](compabase/errors/get_companies_krs_by_krs_secured_liabilities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_tenders(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsTendersResponse, GetCompaniesKrsByKrsTendersErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_tenders("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsTendersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsTendersErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_tenders("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsTendersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsTendersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsTendersResponse](compabase/models/companies_krs_tenders_response.py), [GetCompaniesKrsByKrsTendersErrorBody](compabase/errors/get_companies_krs_by_krs_tenders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsTendersResponse](compabase/models/companies_krs_tenders_response.py)</code> -- `national` (BZP) and `eu` (TED) procurement of the company.

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsTendersErrorBody](compabase/errors/get_companies_krs_by_krs_tenders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_waste_registry(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompaniesKrsWasteRegistryResponse, GetCompaniesKrsByKrsWasteRegistryErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_waste_registry("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsWasteRegistryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsWasteRegistryErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_waste_registry("0000028860")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompaniesKrsWasteRegistryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsWasteRegistryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[CompaniesKrsWasteRegistryResponse](compabase/models/companies_krs_waste_registry_response.py), [GetCompaniesKrsByKrsWasteRegistryErrorBody](compabase/errors/get_companies_krs_by_krs_waste_registry_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompaniesKrsWasteRegistryResponse](compabase/models/companies_krs_waste_registry_response.py)</code> -- BDO entry (null when the company is not registered).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsWasteRegistryErrorBody](compabase/errors/get_companies_krs_by_krs_waste_registry_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_companies_krs_by_krs_website_facts(krs: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetCompaniesKrsByKrsWebsiteFactsErrorBody]</code></summary>

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

**Sync**

```python
result = client.registers.with_raw_response.get_companies_krs_by_krs_website_facts("0000008820")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsWebsiteFactsErrorBody
```

**Async**

```python
result = await async_client.registers.with_raw_response.get_companies_krs_by_krs_website_facts("0000008820")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCompaniesKrsByKrsWebsiteFactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetCompaniesKrsByKrsWebsiteFactsErrorBody](compabase/errors/get_companies_krs_by_krs_website_facts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Website facts (null when nothing has been read from the website).

**On `Failure`**: `error` is <code>[GetCompaniesKrsByKrsWebsiteFactsErrorBody](compabase/errors/get_companies_krs_by_krs_website_facts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tenders

> Source: [Tenders](compabase/apis/tenders.py)

<details>
<summary><code>def get_tenders(*, status: StatusOrStr | None = None, industry: str | None = None, source: SourceOrStr | None = None, region: str | None = None, city: str | None = None, postal: str | None = None, kind: KindOrStr | None = None, value_min: float | None = None, value_max: float | None = None, currency: CurrencyOrStr | None = None, limit: LimitOrInt | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetTendersErrorBody]</code></summary>

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

**Sync**

```python
result = client.tenders.with_raw_response.get_tenders()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTendersErrorBody
```

**Async**

```python
result = await async_client.tenders.with_raw_response.get_tenders()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTendersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status</code> | <code>[StatusOrStr](compabase/models/enums/status.py) \| None</code> | Open tenders or awarded contracts.<br>**Default**: <code>None</code> |
| <code>industry</code> | <code>str \| None</code> | CPV group or 2-digit CPV division.<br>**Default**: <code>None</code> |
| <code>source</code> | <code>[SourceOrStr](compabase/models/enums/source.py) \| None</code> | National (BZP) or EU (TED) notices.<br>**Default**: <code>None</code> |
| <code>region</code> | <code>str \| None</code> | Voivodeship.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>str \| None</code> | City of the contracting authority.<br>**Default**: <code>None</code> |
| <code>postal</code> | <code>str \| None</code> | Postal code prefix.<br>**Default**: <code>None</code> |
| <code>kind</code> | <code>[KindOrStr](compabase/models/enums/kind.py) \| None</code> | Contract type.<br>**Default**: <code>None</code> |
| <code>value_min</code> | <code>float \| None</code> | Minimum estimated value (in `currency`).<br>**Default**: <code>None</code> |
| <code>value_max</code> | <code>float \| None</code> | Maximum estimated value (in `currency`).<br>**Default**: <code>None</code> |
| <code>currency</code> | <code>[CurrencyOrStr](compabase/models/enums/currency.py) \| None</code> | Currency of value filters and returned values.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>[LimitOrInt](compabase/models/enums/limit.py) \| None</code> | Page size.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Zero-based offset (max 2000).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetTendersErrorBody](compabase/errors/get_tenders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Page of tender notices.

**On `Failure`**: `error` is <code>[GetTendersErrorBody](compabase/errors/get_tenders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_tenders_awards(*, industry: IndustryOrStr | None = None, min_: MinOrInt | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetTendersAwardsErrorBody]</code></summary>

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

**Sync**

```python
result = client.tenders.with_raw_response.get_tenders_awards()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTendersAwardsErrorBody
```

**Async**

```python
result = await async_client.tenders.with_raw_response.get_tenders_awards()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTendersAwardsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>industry</code> | <code>[IndustryOrStr](compabase/models/enums/industry.py) \| None</code> | Industry filter.<br>**Default**: <code>None</code> |
| <code>min_</code> | <code>[MinOrInt](compabase/models/enums/min.py) \| None</code> | Minimum contract value in PLN (default 1000000).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetTendersAwardsErrorBody](compabase/errors/get_tenders_awards_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Recent awards, largest first.

**On `Failure`**: `error` is <code>[GetTendersAwardsErrorBody](compabase/errors/get_tenders_awards_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](compabase/apis/usage.py)

<details>
<summary><code>def get_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsageResponse, GetUsageErrorBody]</code></summary>

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

**Sync**

```python
result = client.usage.with_raw_response.get_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUsageErrorBody
```

**Async**

```python
result = await async_client.usage.with_raw_response.get_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[UsageResponse](compabase/models/usage_response.py), [GetUsageErrorBody](compabase/errors/get_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsageResponse](compabase/models/usage_response.py)</code> -- Usage snapshot

**On `Failure`**: `error` is <code>[GetUsageErrorBody](compabase/errors/get_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Watchlist

> Source: [Watchlist](compabase/apis/watchlist.py)

<details>
<summary><code>def delete_watchlist_krs_by_krs(krs: str, *, dry_run: bool | None = False, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteWatchlistKrsByKrsErrorBody]</code></summary>

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

**Sync**

```python
result = client.watchlist.with_raw_response.delete_watchlist_krs_by_krs(
    "0000028860", idempotency_key="3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWatchlistKrsByKrsErrorBody
```

**Async**

```python
result = await async_client.watchlist.with_raw_response.delete_watchlist_krs_by_krs(
    "0000028860", idempotency_key="3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWatchlistKrsByKrsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | Value sent with the request. |
| <code>dry_run</code> | <code>bool \| None</code> | When `true`, the request is validated (key, KRS, plan limits) and the response says what<br>would happen (`would_add` / `would_remove`), but nothing is written and no webhook fires.<br>**Default**: <code>False</code> |
| <code>idempotency_key</code> | <code>str \| None</code> | Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by KRS,<br>so repeating the same request — with or without this header — never creates a duplicate entry.<br>The key is echoed back in the `Idempotency-Key` response header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [DeleteWatchlistKrsByKrsErrorBody](compabase/errors/delete_watchlist_krs_by_krs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Removal result.

**On `Failure`**: `error` is <code>[DeleteWatchlistKrsByKrsErrorBody](compabase/errors/delete_watchlist_krs_by_krs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_watchlist(*, limit: int | None = 20, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetWatchlistErrorBody]</code></summary>

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

**Sync**

```python
result = client.watchlist.with_raw_response.get_watchlist()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWatchlistErrorBody
```

**Async**

```python
result = await async_client.watchlist.with_raw_response.get_watchlist()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWatchlistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;Any, [GetWatchlistErrorBody](compabase/errors/get_watchlist_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Watchlist page.

**On `Failure`**: `error` is <code>[GetWatchlistErrorBody](compabase/errors/get_watchlist_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_watchlist_krs_by_krs(krs: str, *, dry_run: bool | None = False, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WatchlistAddResponse, PostWatchlistKrsByKrsErrorBody]</code></summary>

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

**Sync**

```python
result = client.watchlist.with_raw_response.post_watchlist_krs_by_krs(
    "0000028860", idempotency_key="3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistAddResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostWatchlistKrsByKrsErrorBody
```

**Async**

```python
result = await async_client.watchlist.with_raw_response.post_watchlist_krs_by_krs(
    "0000028860", idempotency_key="3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WatchlistAddResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostWatchlistKrsByKrsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>str</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |
| <code>dry_run</code> | <code>bool \| None</code> | When `true`, the request is validated (key, KRS, plan limits) and the response says what<br>would happen (`would_add` / `would_remove`), but nothing is written and no webhook fires.<br>**Default**: <code>False</code> |
| <code>idempotency_key</code> | <code>str \| None</code> | Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by KRS,<br>so repeating the same request — with or without this header — never creates a duplicate entry.<br>The key is echoed back in the `Idempotency-Key` response header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](compabase/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](compabase/core/results.py)&#91;[WatchlistAddResponse](compabase/models/watchlist_add_response.py), [PostWatchlistKrsByKrsErrorBody](compabase/errors/post_watchlist_krs_by_krs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WatchlistAddResponse](compabase/models/watchlist_add_response.py)</code> -- Company added to watchlist (or already followed).

**On `Failure`**: `error` is <code>[PostWatchlistKrsByKrsErrorBody](compabase/errors/post_watchlist_krs_by_krs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429 | <code>[ErrorResponse](compabase/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](compabase/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

