# Reference

> Source: [CompabaseClient](src/client.ts)

## Companies

> Source: [Companies](src/resources/companies.ts)

<details>
<summary><code>getCeidgNipByNip(request: Companies.GetCeidgNipByNipRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Companies.GetCeidgNipByNipError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCeidgNipByNip({ nip: "7712488697", locale: Locale.En });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCeidgNipByNipError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .getCeidgNipByNip({ nip: "7712488697", locale: Locale.En })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nip</code> | <code>string</code> | NIP normalized to exactly 10 digits. |
| <code>locale?</code> | <code>[Locale](src/models/locale.ts)</code> | Language for PKD labels and `companySummary` (one locale key in the response).<br>**Default**: "en" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCeidgNipByNip(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Companies.GetCeidgNipByNipError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCeidgNipByNip(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Companies.GetCeidgNipByNipError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanies(request?: Companies.GetCompaniesRequest, options?: RequestOptions): ApiPromise&lt;CompanyListResponse, Companies.GetCompaniesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCompanies({
    q: "orlen",
    keywords: "logistics,energy",
    pkd: "62.01",
    voivodeship: "mazowieckie",
    city: "Warszawa",
    registrationYearMin: 2015,
    registrationDateMin: "2026-10-07",
    registrationDateMax: "2026-10-07",
    legalForm: "spółka akcyjna",
    sort: Sort.RegistrationDate,
  });
  // TODO: Handle 'response' of type CompanyListResponse
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .getCompanies({
    q: "orlen",
    keywords: "logistics,energy",
    pkd: "62.01",
    voivodeship: "mazowieckie",
    city: "Warszawa",
    registrationYearMin: 2015,
    registrationDateMin: "2026-10-07",
    registrationDateMax: "2026-10-07",
    legalForm: "spółka akcyjna",
    sort: Sort.RegistrationDate,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON<br>lookup. Whitespace is trimmed.<br>Matching strategy: - identifier-like numeric input: identifier lookup path is used first. For 10-digit numeric values, exact match is attempted against KRS (`registry_number`) and NIP; an exact match is also attempted against REGON as stored in the index. For other numeric lengths, prefix matching is used for those identifier fields. - textual input: case-insensitive substring match on company name (`ILIKE %q%`).<br>Numeric lookup has priority over text-name matching when `q` contains only digits. Example: `q=0000028860` is treated as identifier lookup (not generic relevance search). |
| <code>keywords?</code> | <code>string</code> | Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter.<br>Each keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is supported (e.g. `keywords=a,b&keywords=c`). |
| <code>limit?</code> | <code>number</code> | Page size. **Default:** `20`. `GET /companies` caps at **100** per request.<br>For bulk pulls use `GET /companies/export` (or `limit` &gt; 100 on `/companies` via API key), capped at **500** per page. For deep traversal, page with `cursor`.<br>**Quota accounting:** monthly quota counts each HTTP request. Row count in the page does not change the cost. Example: `limit=500` still consumes **1** request from monthly quota.<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | Zero-based row offset for classic **offset** pagination.<br>Client contract: use either `offset` or `cursor` (not both). If both are provided, the server returns `400 CONFLICTING_PARAMETERS`.<br>**Default**: 0 |
| <code>cursor?</code> | <code>string</code> | Optional **cursor** for pagination: `entity_id` of the last row from the previous page.<br>Cursor paging is ordered by `entity_id` ascending. Use it for deep paging/export-style traversal. Do not combine with `offset`; if both are sent, request fails with `400 CONFLICTING_PARAMETERS`.<br>When present, the server may return `pagination.total: -1` and include `pagination.cursor` for the next page. |
| <code>pkd?</code> | <code>string</code> | PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased server-side.<br>By default only the **primary** PKD (`primary_only=true`) is matched; set `primary_only=false` to match any code in `all_pkd_codes`. |
| <code>primaryOnly?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` (default) means `pkd` matches `primary_pkd` only. `false` means `pkd` can match any entry in `all_pkd_codes`.<br>**Default**: true |
| <code>currency?</code> | <code>[Currency](src/models/currency.ts)</code> | Display/filter currency context for financial threshold filters.<br>Allowed values: `PLN`, `USD`, `EUR` (case-insensitive). Default is `PLN`.<br>For `revenue_min` / `revenue_max`, the API applies thresholds against: - `revenue_total` when `currency=PLN` - `revenue_total_usd` when `currency=USD` - `revenue_total_eur` when `currency=EUR`<br>**Default**: "PLN" |
| <code>voivodeship?</code> | <code>string</code> | Voivodeship / region filter. Compared to `company_search.region` **case-insensitively** (lowercased on the server).<br>Use the same spelling as stored in data (e.g. Polish voivodeship names such as `mazowieckie`, `śląskie`). Common values include: `dolnośląskie`, `małopolskie`, `mazowieckie`, `pomorskie`, `śląskie`, `wielkopolskie`. |
| <code>postalCode?</code> | <code>string</code> | Exact postal code match (trimmed). Format depends on source data (e.g. `00-001`). |
| <code>city?</code> | <code>string</code> | City substring filter (case-insensitive **ILIKE** `%city%`). |
| <code>revenueMin?</code> | <code>number</code> | Minimum **total revenue** (`revenue_total`).<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. Values are in **full currency units** (not thousands), e.g. `1000000` = one million PLN. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter. |
| <code>revenueMax?</code> | <code>number</code> | Maximum **total revenue** threshold in full units.<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used.<br>If `revenue_min > revenue_max`, the API returns `400` with code `INVALID_RANGE`. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter. |
| <code>revenueOperatingMin?</code> | <code>number</code> | Minimum operating revenue (net sales / operating revenue field from financials). |
| <code>revenueOperatingMax?</code> | <code>number</code> | - |
| <code>profitOperatingMin?</code> | <code>number</code> | - |
| <code>profitOperatingMax?</code> | <code>number</code> | - |
| <code>profitNetMin?</code> | <code>number</code> | - |
| <code>profitNetMax?</code> | <code>number</code> | - |
| <code>incomeTaxMin?</code> | <code>number</code> | - |
| <code>incomeTaxMax?</code> | <code>number</code> | - |
| <code>costWagesMin?</code> | <code>number</code> | - |
| <code>costWagesMax?</code> | <code>number</code> | - |
| <code>costAmortizationMin?</code> | <code>number</code> | - |
| <code>costAmortizationMax?</code> | <code>number</code> | - |
| <code>totalAssetsMin?</code> | <code>number</code> | - |
| <code>totalAssetsMax?</code> | <code>number</code> | - |
| <code>ebitdaMin?</code> | <code>number</code> | - |
| <code>ebitdaMax?</code> | <code>number</code> | - |
| <code>capitalMin?</code> | <code>number</code> | Minimum **share capital** (`capital_total`). |
| <code>capitalMax?</code> | <code>number</code> | - |
| <code>estimatedValueMin?</code> | <code>number</code> | Minimum **estimated company value** (`estimated_value`), when present in search index. |
| <code>estimatedValueMax?</code> | <code>number</code> | - |
| <code>registrationYearMin?</code> | <code>number</code> | Earliest **registration** year (`registration_date` filter): companies registered on or after `YYYY-01-01`. |
| <code>registrationYearMax?</code> | <code>number</code> | Latest registration year (`registration_date` on or before `YYYY-12-31`). |
| <code>registrationDateMin?</code> | <code>string</code> (date) | Earliest exact **registration date** (`registration_date` on or after this day, inclusive), format `YYYY-MM-DD`. Takes precedence over `registration_year_min`. For companies registered today, pass today's date as both `registration_date_min` and `registration_date_max`. Applies to KRS companies and to JDG (CEIDG) rows merged into browse results. |
| <code>registrationDateMax?</code> | <code>string</code> (date) | Latest exact registration date (`registration_date` on or before this day, inclusive), format `YYYY-MM-DD`. Takes precedence over `registration_year_max`. |
| <code>lastReportYearMin?</code> | <code>number</code> | Earliest **financial report period** (`financial_period_to` on or after `YYYY-01-01`).<br>When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot. |
| <code>lastReportYearMax?</code> | <code>number</code> | Latest financial report period (`financial_period_to` on or before `YYYY-12-31`).<br>When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot. |
| <code>statusActive?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only active companies). `false` is syntactically valid and treated as no filter. |
| <code>legalForm?</code> | <code>string</code> | Legal form substring filter (case-insensitive **ILIKE** `%legal_form%`).<br>Common values/phrases: `spółka z ograniczoną odpowiedzialnością`, `spółka akcyjna`, `prosta spółka akcyjna`, `spółka komandytowa`, `jednoosobowa działalność gospodarcza`. |
| <code>hasEmail?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with email). `false` is syntactically valid and treated as no filter. |
| <code>hasWebsite?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with website). `false` is syntactically valid and treated as no filter. |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | Sort the result set by one column (default: completeness / revenue ranking). Rows without a value in that column are excluded while sorting. Text columns (`name`, `nip`, `regon`, `city`, `region`, `postal_code`) sort alphabetically; `registration_date` with `dir=desc` lists the newest registrations first (future-dated register errors are skipped); `revenue_growth` with `dir=desc` lists the fastest-growing companies (y/y revenue growth in %, latest vs previous financial year from KRS statements; combine with `revenue_min` to skip small companies). Not applied to free-text (`q`) or `keywords` searches, which keep relevance order. |
| <code>dir?</code> | <code>[Dir](src/models/dir.ts)</code> | Sort direction for `sort` (`asc` or `desc`, default `desc`).<br>**Default**: "desc" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCompanies(request)`

- **OnSuccess**: <code>[CompanyListResponse](src/models/company-list-response.ts)</code>
- **OnError**: throws <code>[Companies.GetCompaniesError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyListResponse, Companies.GetCompaniesError&gt;</code>, with `result.value` of type <code>[CompanyListResponse](src/models/company-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesCount(request?: Companies.GetCompaniesCountRequest, options?: RequestOptions): ApiPromise&lt;CompanyCountResponse, Companies.GetCompaniesCountError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCompaniesCount({
    q: "orlen",
    keywords: "logistics,energy",
    pkd: "62.01",
    voivodeship: "mazowieckie",
    city: "Warszawa",
    registrationYearMin: 2015,
    registrationDateMin: "2026-10-07",
    registrationDateMax: "2026-10-07",
    legalForm: "spółka akcyjna",
  });
  // TODO: Handle 'response' of type CompanyCountResponse
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCompaniesCountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .getCompaniesCount({
    q: "orlen",
    keywords: "logistics,energy",
    pkd: "62.01",
    voivodeship: "mazowieckie",
    city: "Warszawa",
    registrationYearMin: 2015,
    registrationDateMin: "2026-10-07",
    registrationDateMax: "2026-10-07",
    legalForm: "spółka akcyjna",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyCountResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON<br>lookup. Whitespace is trimmed.<br>Matching strategy: - identifier-like numeric input: identifier lookup path is used first. For 10-digit numeric values, exact match is attempted against KRS (`registry_number`) and NIP; an exact match is also attempted against REGON as stored in the index. For other numeric lengths, prefix matching is used for those identifier fields. - textual input: case-insensitive substring match on company name (`ILIKE %q%`).<br>Numeric lookup has priority over text-name matching when `q` contains only digits. Example: `q=0000028860` is treated as identifier lookup (not generic relevance search). |
| <code>keywords?</code> | <code>string</code> | Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter.<br>Each keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is supported (e.g. `keywords=a,b&keywords=c`). |
| <code>pkd?</code> | <code>string</code> | PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased server-side.<br>By default only the **primary** PKD (`primary_only=true`) is matched; set `primary_only=false` to match any code in `all_pkd_codes`. |
| <code>primaryOnly?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` (default) means `pkd` matches `primary_pkd` only. `false` means `pkd` can match any entry in `all_pkd_codes`.<br>**Default**: true |
| <code>currency?</code> | <code>[Currency](src/models/currency.ts)</code> | Display/filter currency context for financial threshold filters.<br>Allowed values: `PLN`, `USD`, `EUR` (case-insensitive). Default is `PLN`.<br>For `revenue_min` / `revenue_max`, the API applies thresholds against: - `revenue_total` when `currency=PLN` - `revenue_total_usd` when `currency=USD` - `revenue_total_eur` when `currency=EUR`<br>**Default**: "PLN" |
| <code>voivodeship?</code> | <code>string</code> | Voivodeship / region filter. Compared to `company_search.region` **case-insensitively** (lowercased on the server).<br>Use the same spelling as stored in data (e.g. Polish voivodeship names such as `mazowieckie`, `śląskie`). Common values include: `dolnośląskie`, `małopolskie`, `mazowieckie`, `pomorskie`, `śląskie`, `wielkopolskie`. |
| <code>postalCode?</code> | <code>string</code> | Exact postal code match (trimmed). Format depends on source data (e.g. `00-001`). |
| <code>city?</code> | <code>string</code> | City substring filter (case-insensitive **ILIKE** `%city%`). |
| <code>revenueMin?</code> | <code>number</code> | Minimum **total revenue** (`revenue_total`).<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. Values are in **full currency units** (not thousands), e.g. `1000000` = one million PLN. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter. |
| <code>revenueMax?</code> | <code>number</code> | Maximum **total revenue** threshold in full units.<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used.<br>If `revenue_min > revenue_max`, the API returns `400` with code `INVALID_RANGE`. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter. |
| <code>revenueOperatingMin?</code> | <code>number</code> | Minimum operating revenue (net sales / operating revenue field from financials). |
| <code>revenueOperatingMax?</code> | <code>number</code> | - |
| <code>profitOperatingMin?</code> | <code>number</code> | - |
| <code>profitOperatingMax?</code> | <code>number</code> | - |
| <code>profitNetMin?</code> | <code>number</code> | - |
| <code>profitNetMax?</code> | <code>number</code> | - |
| <code>incomeTaxMin?</code> | <code>number</code> | - |
| <code>incomeTaxMax?</code> | <code>number</code> | - |
| <code>costWagesMin?</code> | <code>number</code> | - |
| <code>costWagesMax?</code> | <code>number</code> | - |
| <code>costAmortizationMin?</code> | <code>number</code> | - |
| <code>costAmortizationMax?</code> | <code>number</code> | - |
| <code>totalAssetsMin?</code> | <code>number</code> | - |
| <code>totalAssetsMax?</code> | <code>number</code> | - |
| <code>ebitdaMin?</code> | <code>number</code> | - |
| <code>ebitdaMax?</code> | <code>number</code> | - |
| <code>capitalMin?</code> | <code>number</code> | Minimum **share capital** (`capital_total`). |
| <code>capitalMax?</code> | <code>number</code> | - |
| <code>estimatedValueMin?</code> | <code>number</code> | Minimum **estimated company value** (`estimated_value`), when present in search index. |
| <code>estimatedValueMax?</code> | <code>number</code> | - |
| <code>registrationYearMin?</code> | <code>number</code> | Earliest **registration** year (`registration_date` filter): companies registered on or after `YYYY-01-01`. |
| <code>registrationYearMax?</code> | <code>number</code> | Latest registration year (`registration_date` on or before `YYYY-12-31`). |
| <code>registrationDateMin?</code> | <code>string</code> (date) | Earliest exact **registration date** (`registration_date` on or after this day, inclusive), format `YYYY-MM-DD`. Takes precedence over `registration_year_min`. For companies registered today, pass today's date as both `registration_date_min` and `registration_date_max`. Applies to KRS companies and to JDG (CEIDG) rows merged into browse results. |
| <code>registrationDateMax?</code> | <code>string</code> (date) | Latest exact registration date (`registration_date` on or before this day, inclusive), format `YYYY-MM-DD`. Takes precedence over `registration_year_max`. |
| <code>lastReportYearMin?</code> | <code>number</code> | Earliest **financial report period** (`financial_period_to` on or after `YYYY-01-01`).<br>When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot. |
| <code>lastReportYearMax?</code> | <code>number</code> | Latest financial report period (`financial_period_to` on or before `YYYY-12-31`).<br>When combined with financial metric filters, both are evaluated against the same indexed reporting snapshot. |
| <code>statusActive?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only active companies). `false` is syntactically valid and treated as no filter. |
| <code>legalForm?</code> | <code>string</code> | Legal form substring filter (case-insensitive **ILIKE** `%legal_form%`).<br>Common values/phrases: `spółka z ograniczoną odpowiedzialnością`, `spółka akcyjna`, `prosta spółka akcyjna`, `spółka komandytowa`, `jednoosobowa działalność gospodarcza`. |
| <code>hasEmail?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with email). `false` is syntactically valid and treated as no filter. |
| <code>hasWebsite?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with website). `false` is syntactically valid and treated as no filter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCompaniesCount(request)`

- **OnSuccess**: <code>[CompanyCountResponse](src/models/company-count-response.ts)</code>
- **OnError**: throws <code>[Companies.GetCompaniesCountError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCompaniesCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyCountResponse, Companies.GetCompaniesCountError&gt;</code>, with `result.value` of type <code>[CompanyCountResponse](src/models/company-count-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesExport(request?: Companies.GetCompaniesExportRequest, options?: RequestOptions): ApiPromise&lt;CompanyListResponse, Companies.GetCompaniesExportError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCompaniesExport({
    q: "orlen",
    keywords: "logistics,energy",
    pkd: "62.01",
  });
  // TODO: Handle 'response' of type CompanyListResponse
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCompaniesExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .getCompaniesExport({ q: "orlen", keywords: "logistics,energy", pkd: "62.01" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | Free-text search (company name and identifiers). **Digits** are treated as a possible KRS/NIP/REGON<br>lookup. Whitespace is trimmed.<br>Matching strategy: - identifier-like numeric input: identifier lookup path is used first. For 10-digit numeric values, exact match is attempted against KRS (`registry_number`) and NIP; an exact match is also attempted against REGON as stored in the index. For other numeric lengths, prefix matching is used for those identifier fields. - textual input: case-insensitive substring match on company name (`ILIKE %q%`).<br>Numeric lookup has priority over text-name matching when `q` contains only digits. Example: `q=0000028860` is treated as identifier lookup (not generic relevance search). |
| <code>keywords?</code> | <code>string</code> | Keyword filter with **OR** semantics. Pass a comma-separated list, or repeat the parameter.<br>Each keyword must be at least **2** characters after trimming. Empty tokens are ignored. Duplicate tokens may appear and are not guaranteed to be deduplicated server-side. Mixing repeated params and CSV is supported (e.g. `keywords=a,b&keywords=c`). |
| <code>limit?</code> | <code>number</code> | Page size for bulk export (max 500).<br>**Default**: 100 |
| <code>offset?</code> | <code>number</code> | Zero-based row offset for classic **offset** pagination.<br>Client contract: use either `offset` or `cursor` (not both). If both are provided, the server returns `400 CONFLICTING_PARAMETERS`.<br>**Default**: 0 |
| <code>cursor?</code> | <code>string</code> | Optional **cursor** for pagination: `entity_id` of the last row from the previous page.<br>Cursor paging is ordered by `entity_id` ascending. Use it for deep paging/export-style traversal. Do not combine with `offset`; if both are sent, request fails with `400 CONFLICTING_PARAMETERS`.<br>When present, the server may return `pagination.total: -1` and include `pagination.cursor` for the next page. |
| <code>pkd?</code> | <code>string</code> | PKD code (Polish business activity classification). **Case-insensitive**; trimmed and uppercased server-side.<br>By default only the **primary** PKD (`primary_only=true`) is matched; set `primary_only=false` to match any code in `all_pkd_codes`. |
| <code>primaryOnly?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` (default) means `pkd` matches `primary_pkd` only. `false` means `pkd` can match any entry in `all_pkd_codes`.<br>**Default**: true |
| <code>hasEmail?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with email). `false` is syntactically valid and treated as no filter. |
| <code>hasWebsite?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only companies with website). `false` is syntactically valid and treated as no filter. |
| <code>statusActive?</code> | <code>boolean</code> | Boolean filter syntax is accepted (`true`/`false`).<br>Semantics: `true` applies positive filter (only active companies). `false` is syntactically valid and treated as no filter. |
| <code>revenueMin?</code> | <code>number</code> | Minimum **total revenue** (`revenue_total`).<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used. Values are in **full currency units** (not thousands), e.g. `1000000` = one million PLN. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter. |
| <code>revenueMax?</code> | <code>number</code> | Maximum **total revenue** threshold in full units.<br>Currency depends on `currency` query param (`PLN`/`USD`/`EUR`). If `currency` is omitted, PLN is used.<br>If `revenue_min > revenue_max`, the API returns `400` with code `INVALID_RANGE`. Evaluated against the latest indexed financial snapshot per company. Companies with `null` in the selected revenue column do not match this filter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCompaniesExport(request)`

- **OnSuccess**: <code>[CompanyListResponse](src/models/company-list-response.ts)</code>
- **OnError**: throws <code>[Companies.GetCompaniesExportError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCompaniesExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyListResponse, Companies.GetCompaniesExportError&gt;</code>, with `result.value` of type <code>[CompanyListResponse](src/models/company-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrs(request: Companies.GetCompaniesKrsByKrsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCompaniesKrsByKrs({ krs: "0000028860" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCompaniesKrsByKrsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies.getCompaniesKrsByKrs({ krs: "0000028860" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCompaniesKrsByKrs(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Companies.GetCompaniesKrsByKrsError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCompaniesKrsByKrs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsConnections(request: Companies.GetCompaniesKrsByKrsConnectionsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsConnectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Graph of related companies and people linked through shared roles/ownership
(same payload as the profile Connections UI).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCompaniesKrsByKrsConnections({ krs: "0000028860" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCompaniesKrsByKrsConnectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies.getCompaniesKrsByKrsConnections({ krs: "0000028860" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCompaniesKrsByKrsConnections(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Companies.GetCompaniesKrsByKrsConnectionsError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCompaniesKrsByKrsConnections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsConnectionsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsGroup(request: Companies.GetCompaniesKrsByKrsGroupRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsGroupError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCompaniesKrsByKrsGroup({ krs: "0000183975" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCompaniesKrsByKrsGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies.getCompaniesKrsByKrsGroup({ krs: "0000183975" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>limit?</code> | <code>number</code> | Max group companies per list.<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCompaniesKrsByKrsGroup(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Companies.GetCompaniesKrsByKrsGroupError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCompaniesKrsByKrsGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsGroupError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsStatus(request: Companies.GetCompaniesKrsByKrsStatusRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Quick legal-status check (Active, Bankruptcy, Liquidation).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCompaniesKrsByKrsStatus({ krs: "0000028860" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCompaniesKrsByKrsStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies.getCompaniesKrsByKrsStatus({ krs: "0000028860" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCompaniesKrsByKrsStatus(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Companies.GetCompaniesKrsByKrsStatusError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCompaniesKrsByKrsStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsStatusError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsStructurePeople(request: Companies.GetCompaniesKrsByKrsStructurePeopleRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsStructurePeopleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns ownership and management structure only (without profile or financial data):
`roles` and `ownership`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companies.getCompaniesKrsByKrsStructurePeople({ krs: "0000028860" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Companies.GetCompaniesKrsByKrsStructurePeopleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companies
  .getCompaniesKrsByKrsStructurePeople({ krs: "0000028860" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companies.getCompaniesKrsByKrsStructurePeople(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Companies.GetCompaniesKrsByKrsStructurePeopleError](src/resources/companies.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companies.getCompaniesKrsByKrsStructurePeople(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Companies.GetCompaniesKrsByKrsStructurePeopleError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Financials

> Source: [Financials](src/resources/financials.ts)

<details>
<summary><code>getCompaniesKrsByKrsFinancialDocuments(request: Financials.GetCompaniesKrsByKrsFinancialDocumentsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Financials.GetCompaniesKrsByKrsFinancialDocumentsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.financials.getCompaniesKrsByKrsFinancialDocuments({ krs: "0000028860" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Financials.GetCompaniesKrsByKrsFinancialDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.financials
  .getCompaniesKrsByKrsFinancialDocuments({ krs: "0000028860" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 25 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.financials.getCompaniesKrsByKrsFinancialDocuments(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Financials.GetCompaniesKrsByKrsFinancialDocumentsError](src/resources/financials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.financials.getCompaniesKrsByKrsFinancialDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Financials.GetCompaniesKrsByKrsFinancialDocumentsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsFinancialStatements(request: Financials.GetCompaniesKrsByKrsFinancialStatementsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Financials.GetCompaniesKrsByKrsFinancialStatementsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.financials.getCompaniesKrsByKrsFinancialStatements({ krs: "0000028860" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Financials.GetCompaniesKrsByKrsFinancialStatementsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.financials
  .getCompaniesKrsByKrsFinancialStatements({ krs: "0000028860" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.financials.getCompaniesKrsByKrsFinancialStatements(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Financials.GetCompaniesKrsByKrsFinancialStatementsError](src/resources/financials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.financials.getCompaniesKrsByKrsFinancialStatements(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Financials.GetCompaniesKrsByKrsFinancialStatementsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsStatistics(request: Financials.GetCompaniesKrsByKrsStatisticsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Financials.GetCompaniesKrsByKrsStatisticsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.financials.getCompaniesKrsByKrsStatistics({ krs: "0001088645" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Financials.GetCompaniesKrsByKrsStatisticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.financials.getCompaniesKrsByKrsStatistics({ krs: "0001088645" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | - |
| <code>locale?</code> | <code>string</code> | -<br>**Default**: "en" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.financials.getCompaniesKrsByKrsStatistics(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Financials.GetCompaniesKrsByKrsStatisticsError](src/resources/financials.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.financials.getCompaniesKrsByKrsStatistics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Financials.GetCompaniesKrsByKrsStatisticsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/resources/health.ts)

<details>
<summary><code>getHealth(options?: RequestOptions): ApiPromise&lt;HealthResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public uptime/status endpoint for API v1 (no API key required).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.health.getHealth();
  // TODO: Handle 'response' of type HealthResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.health.getHealth().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HealthResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.health.getHealth()`

- **OnSuccess**: <code>[HealthResponse](src/models/health-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.health.getHealth().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HealthResponse, ApiError&gt;</code>, with `result.value` of type <code>[HealthResponse](src/models/health-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/resources/news.ts)

<details>
<summary><code>getCompaniesKrsByKrsNews(request: News.GetCompaniesKrsByKrsNewsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, News.GetCompaniesKrsByKrsNewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Published news articles and optional claimed description / logo from company UGC.
Coverage is uneven (only companies with portal/UGC content).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.news.getCompaniesKrsByKrsNews({ krs: "0000057567" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type News.GetCompaniesKrsByKrsNewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.news.getCompaniesKrsByKrsNews({ krs: "0000057567" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | - |
| <code>locale?</code> | <code>string</code> | -<br>**Default**: "en" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.news.getCompaniesKrsByKrsNews(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[News.GetCompaniesKrsByKrsNewsError](src/resources/news.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.news.getCompaniesKrsByKrsNews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, News.GetCompaniesKrsByKrsNewsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getNews(request?: News.GetNewsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, News.GetNewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Latest news published by Polish companies on their own websites, newest first, with the company (KRS) attached.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.news.getNews();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type News.GetNewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.news.getNews().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>since?</code> | <code>string</code> | Only news published on or after this date (YYYY-MM-DD). |
| <code>pkd?</code> | <code>string</code> | 2–5 digit prefix of the company main PKD code (e.g. `62` for IT). |
| <code>city?</code> | <code>string</code> | Company seat city. |
| <code>locale?</code> | <code>[Locale](src/models/locale.ts)</code> | Language of the returned titles. |
| <code>limit?</code> | <code>number</code> | Page size, 1–100 (default 50). |
| <code>offset?</code> | <code>number</code> | Zero-based offset (max 5000). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.news.getNews(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[News.GetNewsError](src/resources/news.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.news.getNews(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, News.GetNewsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Persons

> Source: [Persons](src/resources/persons.ts)

<details>
<summary><code>getPersonsByPersonIdConnections(request: Persons.GetPersonsByPersonIdConnectionsRequest, options?: RequestOptions): ApiPromise&lt;PersonConnectionsResponse, Persons.GetPersonsByPersonIdConnectionsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.persons.getPersonsByPersonIdConnections({
    personId: "033e6964-179b-4039-86a2-0e0590c56918",
  });
  // TODO: Handle 'response' of type PersonConnectionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Persons.GetPersonsByPersonIdConnectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.persons
  .getPersonsByPersonIdConnections({ personId: "033e6964-179b-4039-86a2-0e0590c56918" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PersonConnectionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>personId</code> | <code>string</code> | UUID of the person; obtained from `GET /persons/search`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.persons.getPersonsByPersonIdConnections(request)`

- **OnSuccess**: <code>[PersonConnectionsResponse](src/models/person-connections-response.ts)</code>
- **OnError**: throws <code>[Persons.GetPersonsByPersonIdConnectionsError](src/resources/persons.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.persons.getPersonsByPersonIdConnections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PersonConnectionsResponse, Persons.GetPersonsByPersonIdConnectionsError&gt;</code>, with `result.value` of type <code>[PersonConnectionsResponse](src/models/person-connections-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPersonsSearch(request: Persons.GetPersonsSearchRequest, options?: RequestOptions): ApiPromise&lt;PersonsSearchResponse, Persons.GetPersonsSearchError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.persons.getPersonsSearch({ q: "Kowalski" });
  // TODO: Handle 'response' of type PersonsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Persons.GetPersonsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.persons.getPersonsSearch({ q: "Kowalski" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PersonsSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | Name substring to search for (case-insensitive). Must be at least<br>**2 characters**. Matched against the stored display name using<br>`ILIKE %q%`. |
| <code>limit?</code> | <code>number</code> | Maximum number of persons to return. Capped at **50**.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.persons.getPersonsSearch(request)`

- **OnSuccess**: <code>[PersonsSearchResponse](src/models/persons-search-response.ts)</code>
- **OnError**: throws <code>[Persons.GetPersonsSearchError](src/resources/persons.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.persons.getPersonsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PersonsSearchResponse, Persons.GetPersonsSearchError&gt;</code>, with `result.value` of type <code>[PersonsSearchResponse](src/models/persons-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Registers

> Source: [Registers](src/resources/registers.ts)

<details>
<summary><code>getCeidgNipByNipNfzQueues(request: Registers.GetCeidgNipByNipNfzQueuesRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Registers.GetCeidgNipByNipNfzQueuesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCeidgNipByNipNfzQueues({ nip: "1130018111" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCeidgNipByNipNfzQueuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCeidgNipByNipNfzQueues({ nip: "1130018111" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nip</code> | <code>string</code> | - |
| <code>service?</code> | <code>string</code> | Filter by a fragment of the service name (diacritics optional), e.g. `okulist`, `ortoped`, `rezonans`. |
| <code>town?</code> | <code>string</code> | Filter by town or district, e.g. `Poznań`. |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCeidgNipByNipNfzQueues(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Registers.GetCeidgNipByNipNfzQueuesError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCeidgNipByNipNfzQueues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Registers.GetCeidgNipByNipNfzQueuesError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCeidgNipByNipProcurementCounterparties(request: Registers.GetCeidgNipByNipProcurementCounterpartiesRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Registers.GetCeidgNipByNipProcurementCounterpartiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Buyers, contractors and consortium partners of a company or a sole proprietor (public CEIDG profile) by NIP, from BZP,
TED and CRU. Same data as MCP `get_company_procurement_counterparties`. One request = one API call from the monthly quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCeidgNipByNipProcurementCounterparties({ nip: "7352731108" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCeidgNipByNipProcurementCounterpartiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers
  .getCeidgNipByNipProcurementCounterparties({ nip: "7352731108" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nip</code> | <code>string</code> | 10-digit NIP (non-digits are stripped). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCeidgNipByNipProcurementCounterparties(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Registers.GetCeidgNipByNipProcurementCounterpartiesError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCeidgNipByNipProcurementCounterparties(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Registers.GetCeidgNipByNipProcurementCounterpartiesError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCeidgNipByNipWebsiteFacts(request: Registers.GetCeidgNipByNipWebsiteFactsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Registers.GetCeidgNipByNipWebsiteFactsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same as `/companies/krs/{krs}/website-facts` for sole proprietors with a public profile (and any company) by NIP.
Same data as MCP `get_company_website_facts`. One request = one API call from the monthly quota.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCeidgNipByNipWebsiteFacts({ nip: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCeidgNipByNipWebsiteFactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers
  .getCeidgNipByNipWebsiteFacts({ nip: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>nip</code> | <code>string</code> | 10-digit NIP (non-digits are stripped). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCeidgNipByNipWebsiteFacts(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Registers.GetCeidgNipByNipWebsiteFactsError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCeidgNipByNipWebsiteFacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Registers.GetCeidgNipByNipWebsiteFactsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsBeneficiaries(request: Registers.GetCompaniesKrsByKrsBeneficiariesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsBeneficiariesResponse, Registers.GetCompaniesKrsByKrsBeneficiariesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsBeneficiaries({ krs: "0000446005" });
  // TODO: Handle 'response' of type CompaniesKrsBeneficiariesResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsBeneficiariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsBeneficiaries({ krs: "0000446005" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsBeneficiariesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsBeneficiaries(request)`

- **OnSuccess**: <code>[CompaniesKrsBeneficiariesResponse](src/models/companies-krs-beneficiaries-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsBeneficiariesError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsBeneficiaries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsBeneficiariesResponse, Registers.GetCompaniesKrsByKrsBeneficiariesError&gt;</code>, with `result.value` of type <code>[CompaniesKrsBeneficiariesResponse](src/models/companies-krs-beneficiaries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsCourtGazette(request: Registers.GetCompaniesKrsByKrsCourtGazetteRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsCourtGazetteResponse, Registers.GetCompaniesKrsByKrsCourtGazetteError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsCourtGazette({ krs: "0000269394" });
  // TODO: Handle 'response' of type CompaniesKrsCourtGazetteResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsCourtGazetteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsCourtGazette({ krs: "0000269394" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsCourtGazetteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsCourtGazette(request)`

- **OnSuccess**: <code>[CompaniesKrsCourtGazetteResponse](src/models/companies-krs-court-gazette-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsCourtGazetteError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsCourtGazette(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsCourtGazetteResponse, Registers.GetCompaniesKrsByKrsCourtGazetteError&gt;</code>, with `result.value` of type <code>[CompaniesKrsCourtGazetteResponse](src/models/companies-krs-court-gazette-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsEnergyLicenses(request: Registers.GetCompaniesKrsByKrsEnergyLicensesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsEnergyLicensesResponse, Registers.GetCompaniesKrsByKrsEnergyLicensesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsEnergyLicenses({ krs: "0000028860" });
  // TODO: Handle 'response' of type CompaniesKrsEnergyLicensesResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsEnergyLicensesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsEnergyLicenses({ krs: "0000028860" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsEnergyLicensesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsEnergyLicenses(request)`

- **OnSuccess**: <code>[CompaniesKrsEnergyLicensesResponse](src/models/companies-krs-energy-licenses-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsEnergyLicensesError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsEnergyLicenses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsEnergyLicensesResponse, Registers.GetCompaniesKrsByKrsEnergyLicensesError&gt;</code>, with `result.value` of type <code>[CompaniesKrsEnergyLicensesResponse](src/models/companies-krs-energy-licenses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsEuFunds(request: Registers.GetCompaniesKrsByKrsEuFundsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsEuFundsResponse, Registers.GetCompaniesKrsByKrsEuFundsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsEuFunds({ krs: "0000028860" });
  // TODO: Handle 'response' of type CompaniesKrsEuFundsResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsEuFundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsEuFunds({ krs: "0000028860" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsEuFundsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsEuFunds(request)`

- **OnSuccess**: <code>[CompaniesKrsEuFundsResponse](src/models/companies-krs-eu-funds-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsEuFundsError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsEuFunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsEuFundsResponse, Registers.GetCompaniesKrsByKrsEuFundsError&gt;</code>, with `result.value` of type <code>[CompaniesKrsEuFundsResponse](src/models/companies-krs-eu-funds-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsEuGrants(request: Registers.GetCompaniesKrsByKrsEuGrantsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsEuGrantsResponse, Registers.GetCompaniesKrsByKrsEuGrantsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsEuGrants({ krs: "0000008820" });
  // TODO: Handle 'response' of type CompaniesKrsEuGrantsResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsEuGrantsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsEuGrants({ krs: "0000008820" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsEuGrantsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsEuGrants(request)`

- **OnSuccess**: <code>[CompaniesKrsEuGrantsResponse](src/models/companies-krs-eu-grants-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsEuGrantsError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsEuGrants(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsEuGrantsResponse, Registers.GetCompaniesKrsByKrsEuGrantsError&gt;</code>, with `result.value` of type <code>[CompaniesKrsEuGrantsResponse](src/models/companies-krs-eu-grants-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsFilingTimeliness(request: Registers.GetCompaniesKrsByKrsFilingTimelinessRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsFilingTimelinessResponse, Registers.GetCompaniesKrsByKrsFilingTimelinessError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsFilingTimeliness({ krs: "0000057567" });
  // TODO: Handle 'response' of type CompaniesKrsFilingTimelinessResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsFilingTimelinessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers
  .getCompaniesKrsByKrsFilingTimeliness({ krs: "0000057567" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsFilingTimelinessResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsFilingTimeliness(request)`

- **OnSuccess**: <code>[CompaniesKrsFilingTimelinessResponse](src/models/companies-krs-filing-timeliness-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsFilingTimelinessError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsFilingTimeliness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsFilingTimelinessResponse, Registers.GetCompaniesKrsByKrsFilingTimelinessError&gt;</code>, with `result.value` of type <code>[CompaniesKrsFilingTimelinessResponse](src/models/companies-krs-filing-timeliness-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsFinancialLicenses(request: Registers.GetCompaniesKrsByKrsFinancialLicensesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsFinancialLicensesResponse, Registers.GetCompaniesKrsByKrsFinancialLicensesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsFinancialLicenses({ krs: "0000028860" });
  // TODO: Handle 'response' of type CompaniesKrsFinancialLicensesResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsFinancialLicensesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers
  .getCompaniesKrsByKrsFinancialLicenses({ krs: "0000028860" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsFinancialLicensesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsFinancialLicenses(request)`

- **OnSuccess**: <code>[CompaniesKrsFinancialLicensesResponse](src/models/companies-krs-financial-licenses-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsFinancialLicensesError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsFinancialLicenses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsFinancialLicensesResponse, Registers.GetCompaniesKrsByKrsFinancialLicensesError&gt;</code>, with `result.value` of type <code>[CompaniesKrsFinancialLicensesResponse](src/models/companies-krs-financial-licenses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsGpw(request: Registers.GetCompaniesKrsByKrsGpwRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Registers.GetCompaniesKrsByKrsGpwError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsGpw({ krs: "0000028860", include: "series" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsGpwError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers
  .getCompaniesKrsByKrsGpw({ krs: "0000028860", include: "series" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>include?</code> | <code>string</code> | Comma-separated extras. Supported values `series`, `intraday`. |
| <code>seriesLimit?</code> | <code>number</code> | Daily bars when `include` contains `series`. Ignored otherwise.<br>**Default**: 250 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsGpw(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsGpwError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsGpw(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Registers.GetCompaniesKrsByKrsGpwError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsInsolvency(request: Registers.GetCompaniesKrsByKrsInsolvencyRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsInsolvencyResponse, Registers.GetCompaniesKrsByKrsInsolvencyError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsInsolvency({ krs: "0000026438" });
  // TODO: Handle 'response' of type CompaniesKrsInsolvencyResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsInsolvencyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsInsolvency({ krs: "0000026438" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsInsolvencyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsInsolvency(request)`

- **OnSuccess**: <code>[CompaniesKrsInsolvencyResponse](src/models/companies-krs-insolvency-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsInsolvencyError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsInsolvency(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsInsolvencyResponse, Registers.GetCompaniesKrsByKrsInsolvencyError&gt;</code>, with `result.value` of type <code>[CompaniesKrsInsolvencyResponse](src/models/companies-krs-insolvency-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsNfzContracts(request: Registers.GetCompaniesKrsByKrsNfzContractsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Registers.GetCompaniesKrsByKrsNfzContractsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NFZ (National Health Fund) contracts of a healthcare provider — contract value per year since 2008, types of care
with NFZ branch and the largest contracts (PLN). Keyed by the company's NIP. Same data as MCP `get_company_nfz_contracts`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsNfzContracts({ krs: "0000289698" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsNfzContractsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsNfzContracts({ krs: "0000289698" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsNfzContracts(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsNfzContractsError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsNfzContracts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Registers.GetCompaniesKrsByKrsNfzContractsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsNfzQueues(request: Registers.GetCompaniesKrsByKrsNfzQueuesRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Registers.GetCompaniesKrsByKrsNfzQueuesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsNfzQueues({ krs: "0000446005" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsNfzQueuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsNfzQueues({ krs: "0000446005" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |
| <code>service?</code> | <code>string</code> | Filter by a fragment of the service name (diacritics optional), e.g. `okulist`, `ortoped`, `rezonans`. |
| <code>town?</code> | <code>string</code> | Filter by town or district, e.g. `Poznań`. |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsNfzQueues(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsNfzQueuesError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsNfzQueues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Registers.GetCompaniesKrsByKrsNfzQueuesError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsProcurementCounterparties(request: Registers.GetCompaniesKrsByKrsProcurementCounterpartiesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsProcurementCounterpartiesResponse, Registers.GetCompaniesKrsByKrsProcurementCounterpartiesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsProcurementCounterparties({
    krs: "0000001764",
  });
  // TODO: Handle 'response' of type CompaniesKrsProcurementCounterpartiesResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsProcurementCounterpartiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers
  .getCompaniesKrsByKrsProcurementCounterparties({ krs: "0000001764" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsProcurementCounterpartiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsProcurementCounterparties(request)`

- **OnSuccess**: <code>[CompaniesKrsProcurementCounterpartiesResponse](src/models/companies-krs-procurement-counterparties-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsProcurementCounterpartiesError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsProcurementCounterparties(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsProcurementCounterpartiesResponse, Registers.GetCompaniesKrsByKrsProcurementCounterpartiesError&gt;</code>, with `result.value` of type <code>[CompaniesKrsProcurementCounterpartiesResponse](src/models/companies-krs-procurement-counterparties-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsPublicAid(request: Registers.GetCompaniesKrsByKrsPublicAidRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsPublicAidResponse, Registers.GetCompaniesKrsByKrsPublicAidError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsPublicAid({ krs: "0000028860" });
  // TODO: Handle 'response' of type CompaniesKrsPublicAidResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsPublicAidError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsPublicAid({ krs: "0000028860" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsPublicAidResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsPublicAid(request)`

- **OnSuccess**: <code>[CompaniesKrsPublicAidResponse](src/models/companies-krs-public-aid-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsPublicAidError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsPublicAid(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsPublicAidResponse, Registers.GetCompaniesKrsByKrsPublicAidError&gt;</code>, with `result.value` of type <code>[CompaniesKrsPublicAidResponse](src/models/companies-krs-public-aid-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsRealEstate(request: Registers.GetCompaniesKrsByKrsRealEstateRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsRealEstateResponse, Registers.GetCompaniesKrsByKrsRealEstateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsRealEstate({ krs: "0000057567" });
  // TODO: Handle 'response' of type CompaniesKrsRealEstateResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsRealEstateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsRealEstate({ krs: "0000057567" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsRealEstateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsRealEstate(request)`

- **OnSuccess**: <code>[CompaniesKrsRealEstateResponse](src/models/companies-krs-real-estate-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsRealEstateError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsRealEstate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsRealEstateResponse, Registers.GetCompaniesKrsByKrsRealEstateError&gt;</code>, with `result.value` of type <code>[CompaniesKrsRealEstateResponse](src/models/companies-krs-real-estate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsSanctions(request: Registers.GetCompaniesKrsByKrsSanctionsRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsSanctionsResponse, Registers.GetCompaniesKrsByKrsSanctionsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsSanctions({ krs: "some example string" });
  // TODO: Handle 'response' of type CompaniesKrsSanctionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsSanctionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers
  .getCompaniesKrsByKrsSanctions({ krs: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsSanctionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsSanctions(request)`

- **OnSuccess**: <code>[CompaniesKrsSanctionsResponse](src/models/companies-krs-sanctions-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsSanctionsError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsSanctions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsSanctionsResponse, Registers.GetCompaniesKrsByKrsSanctionsError&gt;</code>, with `result.value` of type <code>[CompaniesKrsSanctionsResponse](src/models/companies-krs-sanctions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsSecuredLiabilities(request: Registers.GetCompaniesKrsByKrsSecuredLiabilitiesRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsSecuredLiabilitiesResponse, Registers.GetCompaniesKrsByKrsSecuredLiabilitiesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsSecuredLiabilities({ krs: "0000759658" });
  // TODO: Handle 'response' of type CompaniesKrsSecuredLiabilitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsSecuredLiabilitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers
  .getCompaniesKrsByKrsSecuredLiabilities({ krs: "0000759658" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsSecuredLiabilitiesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsSecuredLiabilities(request)`

- **OnSuccess**: <code>[CompaniesKrsSecuredLiabilitiesResponse](src/models/companies-krs-secured-liabilities-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsSecuredLiabilitiesError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsSecuredLiabilities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsSecuredLiabilitiesResponse, Registers.GetCompaniesKrsByKrsSecuredLiabilitiesError&gt;</code>, with `result.value` of type <code>[CompaniesKrsSecuredLiabilitiesResponse](src/models/companies-krs-secured-liabilities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsTenders(request: Registers.GetCompaniesKrsByKrsTendersRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsTendersResponse, Registers.GetCompaniesKrsByKrsTendersError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsTenders({ krs: "0000028860" });
  // TODO: Handle 'response' of type CompaniesKrsTendersResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsTendersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsTenders({ krs: "0000028860" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsTendersResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsTenders(request)`

- **OnSuccess**: <code>[CompaniesKrsTendersResponse](src/models/companies-krs-tenders-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsTendersError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsTenders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsTendersResponse, Registers.GetCompaniesKrsByKrsTendersError&gt;</code>, with `result.value` of type <code>[CompaniesKrsTendersResponse](src/models/companies-krs-tenders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsWasteRegistry(request: Registers.GetCompaniesKrsByKrsWasteRegistryRequest, options?: RequestOptions): ApiPromise&lt;CompaniesKrsWasteRegistryResponse, Registers.GetCompaniesKrsByKrsWasteRegistryError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsWasteRegistry({ krs: "0000028860" });
  // TODO: Handle 'response' of type CompaniesKrsWasteRegistryResponse
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsWasteRegistryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsWasteRegistry({ krs: "0000028860" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompaniesKrsWasteRegistryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsWasteRegistry(request)`

- **OnSuccess**: <code>[CompaniesKrsWasteRegistryResponse](src/models/companies-krs-waste-registry-response.ts)</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsWasteRegistryError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsWasteRegistry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompaniesKrsWasteRegistryResponse, Registers.GetCompaniesKrsByKrsWasteRegistryError&gt;</code>, with `result.value` of type <code>[CompaniesKrsWasteRegistryResponse](src/models/companies-krs-waste-registry-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesKrsByKrsWebsiteFacts(request: Registers.GetCompaniesKrsByKrsWebsiteFactsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Registers.GetCompaniesKrsByKrsWebsiteFactsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.registers.getCompaniesKrsByKrsWebsiteFacts({ krs: "0000008820" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Registers.GetCompaniesKrsByKrsWebsiteFactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.registers.getCompaniesKrsByKrsWebsiteFacts({ krs: "0000008820" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.registers.getCompaniesKrsByKrsWebsiteFacts(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Registers.GetCompaniesKrsByKrsWebsiteFactsError](src/resources/registers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.registers.getCompaniesKrsByKrsWebsiteFacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Registers.GetCompaniesKrsByKrsWebsiteFactsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tenders

> Source: [Tenders](src/resources/tenders.ts)

<details>
<summary><code>getTenders(request?: Tenders.GetTendersRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tenders.GetTendersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Polish public tenders — national notices from the Public Procurement Bulletin (BZP) and EU-threshold notices
for Poland from TED — with contracting authority, value, deadlines and (for awarded notices) the winner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tenders.getTenders();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tenders.GetTendersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tenders.getTenders().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>[Status](src/models/status.ts)</code> | Open tenders or awarded contracts. |
| <code>industry?</code> | <code>string</code> | CPV group or 2-digit CPV division. |
| <code>source?</code> | <code>[Source](src/models/source.ts)</code> | National (BZP) or EU (TED) notices. |
| <code>region?</code> | <code>string</code> | Voivodeship. |
| <code>city?</code> | <code>string</code> | City of the contracting authority. |
| <code>postal?</code> | <code>string</code> | Postal code prefix. |
| <code>kind?</code> | <code>[Kind](src/models/kind.ts)</code> | Contract type. |
| <code>valueMin?</code> | <code>number</code> | Minimum estimated value (in `currency`). |
| <code>valueMax?</code> | <code>number</code> | Maximum estimated value (in `currency`). |
| <code>currency?</code> | <code>[Currency](src/models/currency.ts)</code> | Currency of value filters and returned values. |
| <code>limit?</code> | <code>[Limit](src/models/limit.ts)</code> | Page size. |
| <code>offset?</code> | <code>number</code> | Zero-based offset (max 2000). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tenders.getTenders(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tenders.GetTendersError](src/resources/tenders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tenders.getTenders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tenders.GetTendersError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTendersAwards(request?: Tenders.GetTendersAwardsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Tenders.GetTendersAwardsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Largest recent public contract awards in Poland with the winning company (KRS when matched).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tenders.getTendersAwards();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Tenders.GetTendersAwardsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tenders.getTendersAwards().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>industry?</code> | <code>[Industry](src/models/industry.ts)</code> | Industry filter. |
| <code>min?</code> | <code>[Min](src/models/min.ts)</code> | Minimum contract value in PLN (default 1000000). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tenders.getTendersAwards(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Tenders.GetTendersAwardsError](src/resources/tenders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tenders.getTendersAwards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Tenders.GetTendersAwardsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/resources/usage.ts)

<details>
<summary><code>getUsage(options?: RequestOptions): ApiPromise&lt;UsageResponse, Usage.GetUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns how many requests this key has used in the current UTC calendar month against its limit.
This endpoint does not consume quota (usage counter is not incremented).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.getUsage();
  // TODO: Handle 'response' of type UsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Usage.GetUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.getUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.getUsage()`

- **OnSuccess**: <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: throws <code>[Usage.GetUsageError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.getUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageResponse, Usage.GetUsageError&gt;</code>, with `result.value` of type <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Watchlist

> Source: [Watchlist](src/resources/watchlist.ts)

<details>
<summary><code>deleteWatchlistKrsByKrs(request: Watchlist.DeleteWatchlistKrsByKrsRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Watchlist.DeleteWatchlistKrsByKrsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlist.deleteWatchlistKrsByKrs({
    krs: "0000028860",
    idempotencyKey: "3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Watchlist.DeleteWatchlistKrsByKrsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlist
  .deleteWatchlistKrsByKrs({ krs: "0000028860", idempotencyKey: "3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | - |
| <code>dryRun?</code> | <code>boolean</code> | When `true`, the request is validated (key, KRS, plan limits) and the response says what<br>would happen (`would_add` / `would_remove`), but nothing is written and no webhook fires.<br>**Default**: false |
| <code>idempotencyKey?</code> | <code>string</code> | Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by KRS,<br>so repeating the same request — with or without this header — never creates a duplicate entry.<br>The key is echoed back in the `Idempotency-Key` response header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlist.deleteWatchlistKrsByKrs(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Watchlist.DeleteWatchlistKrsByKrsError](src/resources/watchlist.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchlist.deleteWatchlistKrsByKrs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Watchlist.DeleteWatchlistKrsByKrsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWatchlist(request?: Watchlist.GetWatchlistRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Watchlist.GetWatchlistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists companies on the watchlist of the **user account linked to the API key**.
Requires `user_id` on the key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlist.getWatchlist();
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Watchlist.GetWatchlistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlist.getWatchlist().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |
| <code>offset?</code> | <code>number</code> | -<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlist.getWatchlist(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Watchlist.GetWatchlistError](src/resources/watchlist.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchlist.getWatchlist(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Watchlist.GetWatchlistError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postWatchlistKrsByKrs(request: Watchlist.PostWatchlistKrsByKrsRequest, options?: RequestOptions): ApiPromise&lt;WatchlistAddResponse, Watchlist.PostWatchlistKrsByKrsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlist.postWatchlistKrsByKrs({
    krs: "0000028860",
    idempotencyKey: "3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41",
  });
  // TODO: Handle 'response' of type WatchlistAddResponse
} catch (err) {
  // TODO: Handle 'err' of type Watchlist.PostWatchlistKrsByKrsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlist
  .postWatchlistKrsByKrs({ krs: "0000028860", idempotencyKey: "3f6c2a4e-8d1b-4c39-9f2e-1a7b5d0e9c41" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistAddResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>krs</code> | <code>string</code> | KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with `400 INVALID_KRS`. |
| <code>dryRun?</code> | <code>boolean</code> | When `true`, the request is validated (key, KRS, plan limits) and the response says what<br>would happen (`would_add` / `would_remove`), but nothing is written and no webhook fires.<br>**Default**: false |
| <code>idempotencyKey?</code> | <code>string</code> | Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by KRS,<br>so repeating the same request — with or without this header — never creates a duplicate entry.<br>The key is echoed back in the `Idempotency-Key` response header. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlist.postWatchlistKrsByKrs(request)`

- **OnSuccess**: <code>[WatchlistAddResponse](src/models/watchlist-add-response.ts)</code>
- **OnError**: throws <code>[Watchlist.PostWatchlistKrsByKrsError](src/resources/watchlist.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchlist.postWatchlistKrsByKrs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistAddResponse, Watchlist.PostWatchlistKrsByKrsError&gt;</code>, with `result.value` of type <code>[WatchlistAddResponse](src/models/watchlist-add-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CompabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

