# Reference

> Source: [LushaClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>getAccountUsage(options?: RequestOptions): ApiPromise&lt;AccountUsageResponse, Account.GetAccountUsageError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getAccountUsage();
  // TODO: Handle 'response' of type AccountUsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.GetAccountUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getAccountUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountUsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getAccountUsage()`

- **OnSuccess**: <code>[AccountUsageResponse](src/models/account-usage-response.ts)</code>
- **OnError**: throws <code>[Account.GetAccountUsageError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.getAccountUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountUsageResponse, Account.GetAccountUsageError&gt;</code>, with `result.value` of type <code>[AccountUsageResponse](src/models/account-usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AccountManagement

> Source: [AccountManagement](src/resources/account-management.ts)

<details>
<summary><code>getAccountUsageStats(options?: RequestOptions): ApiPromise&lt;AccountUsageStatsResponse, AccountManagement.GetAccountUsageStatsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountManagement.getAccountUsageStats();
  // TODO: Handle 'response' of type AccountUsageStatsResponse
} catch (err) {
  // TODO: Handle 'err' of type AccountManagement.GetAccountUsageStatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountManagement.getAccountUsageStats().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountUsageStatsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountManagement.getAccountUsageStats()`

- **OnSuccess**: <code>[AccountUsageStatsResponse](src/models/account-usage-stats-response.ts)</code>
- **OnError**: throws <code>[AccountManagement.GetAccountUsageStatsError](src/resources/account-management.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountManagement.getAccountUsageStats().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountUsageStatsResponse, AccountManagement.GetAccountUsageStatsError&gt;</code>, with `result.value` of type <code>[AccountUsageStatsResponse](src/models/account-usage-stats-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BuyingGroup

> Source: [BuyingGroup](src/resources/buying-group.ts)

<details>
<summary><code>getContactsBuyingGroup(request: BuyingGroup.GetContactsBuyingGroupRequest, options?: RequestOptions): ApiPromise&lt;V3BuyingGroupResponse, BuyingGroup.GetContactsBuyingGroupError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.buyingGroup.getContactsBuyingGroup({
    body: {
      companies: [
        { clientReferenceId: "comp-ref-1", domain: "acme.com" },
        { clientReferenceId: "comp-ref-2", id: "v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345" },
      ],
      personas: [Persona.DecisionMaker, Persona.PotentialChampion],
      contactsLimit: 20,
    },
  });
  // TODO: Handle 'response' of type V3BuyingGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type BuyingGroup.GetContactsBuyingGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.buyingGroup
  .getContactsBuyingGroup({
    body: {
      companies: [
        { clientReferenceId: "comp-ref-1", domain: "acme.com" },
        { clientReferenceId: "comp-ref-2", id: "v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345" },
      ],
      personas: [Persona.DecisionMaker, Persona.PotentialChampion],
      contactsLimit: 20,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3BuyingGroupResponse
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
| <code>body</code> | <code>[V3BuyingGroupRequest](src/models/v3-buying-group-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.buyingGroup.getContactsBuyingGroup(request)`

- **OnSuccess**: <code>[V3BuyingGroupResponse](src/models/v3-buying-group-response.ts)</code>
- **OnError**: throws <code>[BuyingGroup.GetContactsBuyingGroupError](src/resources/buying-group.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.buyingGroup.getContactsBuyingGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3BuyingGroupResponse, BuyingGroup.GetContactsBuyingGroupError&gt;</code>, with `result.value` of type <code>[V3BuyingGroupResponse](src/models/v3-buying-group-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CompaniesTables

> Source: [CompaniesTables](src/resources/companies-tables.ts)

<details>
<summary><code>addCompaniesTableEntities(request: CompaniesTables.AddCompaniesTableEntitiesRequest, options?: RequestOptions): ApiPromise&lt;EntitiesAddResponse, CompaniesTables.AddCompaniesTableEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add up to 500 company IDs to an existing table. `entityIds` accepts either the encrypted Lusha token (`v{N}.…`, as returned by Search/Enrich/Get Entities) or the legacy numeric `lushaCompanyId` — an ID that's neither returns `400`. Already-present IDs are reported as `alreadyPresent` and not re-added; unresolvable IDs are not an error, they come back in `invalidIds` with a `200`.

> **Billing:** Charges `reveal_company` per newly-added company, deduped via row-count delta — duplicates and already-present companies aren't charged again.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.addCompaniesTableEntities({
    tableId: "482910",
    body: { entityIds: ["30058211", "30058212"], owner: { email: "user@example.com" } },
  });
  // TODO: Handle 'response' of type EntitiesAddResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.AddCompaniesTableEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .addCompaniesTableEntities({
    tableId: "482910",
    body: { entityIds: ["30058211", "30058212"], owner: { email: "user@example.com" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitiesAddResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>body</code> | <code>[EntitiesAddRequest](src/models/entities-add-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.addCompaniesTableEntities(request)`

- **OnSuccess**: <code>[EntitiesAddResponse](src/models/entities-add-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.AddCompaniesTableEntitiesError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.addCompaniesTableEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitiesAddResponse, CompaniesTables.AddCompaniesTableEntitiesError&gt;</code>, with `result.value` of type <code>[EntitiesAddResponse](src/models/entities-add-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCompaniesTable(request: CompaniesTables.CreateCompaniesTableRequest, options?: RequestOptions): ApiPromise&lt;TableResponse, CompaniesTables.CreateCompaniesTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new, empty companies table, optionally seeded with an initial list of company IDs.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.createCompaniesTable({
    body: { name: "postman-companies", visibility: Visibility.Private, owner: { email: "user@example.com" } },
  });
  // TODO: Handle 'response' of type TableResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.CreateCompaniesTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .createCompaniesTable({
    body: { name: "postman-companies", visibility: Visibility.Private, owner: { email: "user@example.com" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableResponse
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
| <code>body</code> | <code>[TableCreateRequest](src/models/table-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.createCompaniesTable(request)`

- **OnSuccess**: <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.CreateCompaniesTableError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.createCompaniesTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableResponse, CompaniesTables.CreateCompaniesTableError&gt;</code>, with `result.value` of type <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCompaniesTable(request: CompaniesTables.DeleteCompaniesTableRequest, options?: RequestOptions): ApiPromise&lt;V3CompaniesTablesResponse, CompaniesTables.DeleteCompaniesTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a table and all its data. This cannot be undone.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.deleteCompaniesTable({
    tableId: "482910",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type V3CompaniesTablesResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.DeleteCompaniesTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .deleteCompaniesTable({ tableId: "482910", email: "user@example.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3CompaniesTablesResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.deleteCompaniesTable(request)`

- **OnSuccess**: <code>[V3CompaniesTablesResponse](src/models/v3-companies-tables-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.DeleteCompaniesTableError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.deleteCompaniesTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3CompaniesTablesResponse, CompaniesTables.DeleteCompaniesTableError&gt;</code>, with `result.value` of type <code>[V3CompaniesTablesResponse](src/models/v3-companies-tables-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesTable(request: CompaniesTables.GetCompaniesTableRequest, options?: RequestOptions): ApiPromise&lt;TableResponse, CompaniesTables.GetCompaniesTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a table's metadata and current processing status.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.getCompaniesTable({
    tableId: "482910",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type TableResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.GetCompaniesTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .getCompaniesTable({ tableId: "482910", email: "user@example.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.getCompaniesTable(request)`

- **OnSuccess**: <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.GetCompaniesTableError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.getCompaniesTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableResponse, CompaniesTables.GetCompaniesTableError&gt;</code>, with `result.value` of type <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompaniesTableEntities(request: CompaniesTables.GetCompaniesTableEntitiesRequest, options?: RequestOptions): ApiPromise&lt;EntitiesGetResponse, CompaniesTables.GetCompaniesTableEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read a page of rows in the table, with all column values and per-cell status.

> **Billing:** Charged per row returned via `export_api`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.getCompaniesTableEntities({
    tableId: "482910",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type EntitiesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.GetCompaniesTableEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .getCompaniesTableEntities({ tableId: "482910", email: "user@example.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitiesGetResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>size?</code> | <code>number</code> | -<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.getCompaniesTableEntities(request)`

- **OnSuccess**: <code>[EntitiesGetResponse](src/models/entities-get-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.GetCompaniesTableEntitiesError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.getCompaniesTableEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitiesGetResponse, CompaniesTables.GetCompaniesTableEntitiesError&gt;</code>, with `result.value` of type <code>[EntitiesGetResponse](src/models/entities-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCompaniesTableColumns(request: CompaniesTables.ListCompaniesTableColumnsRequest, options?: RequestOptions): ApiPromise&lt;ColumnsListResponse, CompaniesTables.ListCompaniesTableColumnsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the columns on a table, with type and aggregated per-cell status counts.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.listCompaniesTableColumns({
    tableId: "482910",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type ColumnsListResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.ListCompaniesTableColumnsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .listCompaniesTableColumns({ tableId: "482910", email: "user@example.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ColumnsListResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.listCompaniesTableColumns(request)`

- **OnSuccess**: <code>[ColumnsListResponse](src/models/columns-list-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.ListCompaniesTableColumnsError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.listCompaniesTableColumns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ColumnsListResponse, CompaniesTables.ListCompaniesTableColumnsError&gt;</code>, with `result.value` of type <code>[ColumnsListResponse](src/models/columns-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCompaniesTables(request: CompaniesTables.ListCompaniesTablesRequest, options?: RequestOptions): ApiPromise&lt;TableListResponse, CompaniesTables.ListCompaniesTablesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List companies tables owned by the given user, plus any tables shared with the account.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.listCompaniesTables({
    body: { owner: { email: "user@example.com" }, page: 0, size: 10, status: Status1.Active },
  });
  // TODO: Handle 'response' of type TableListResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.ListCompaniesTablesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .listCompaniesTables({
    body: { owner: { email: "user@example.com" }, page: 0, size: 10, status: Status1.Active },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableListResponse
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
| <code>body</code> | <code>[TableListRequest](src/models/table-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.listCompaniesTables(request)`

- **OnSuccess**: <code>[TableListResponse](src/models/table-list-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.ListCompaniesTablesError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.listCompaniesTables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableListResponse, CompaniesTables.ListCompaniesTablesError&gt;</code>, with `result.value` of type <code>[TableListResponse](src/models/table-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeCompaniesTableColumn(request: CompaniesTables.RemoveCompaniesTableColumnRequest, options?: RequestOptions): ApiPromise&lt;V3CompaniesTablesColumnsResponse, CompaniesTables.RemoveCompaniesTableColumnError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.removeCompaniesTableColumn({
    tableId: "482910",
    columnId: "col_signals_funding",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type V3CompaniesTablesColumnsResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.RemoveCompaniesTableColumnError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .removeCompaniesTableColumn({
    tableId: "482910",
    columnId: "col_signals_funding",
    email: "user@example.com",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3CompaniesTablesColumnsResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>columnId</code> | <code>string</code> | The column's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.removeCompaniesTableColumn(request)`

- **OnSuccess**: <code>[V3CompaniesTablesColumnsResponse](src/models/v3-companies-tables-columns-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.RemoveCompaniesTableColumnError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.removeCompaniesTableColumn(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3CompaniesTablesColumnsResponse, CompaniesTables.RemoveCompaniesTableColumnError&gt;</code>, with `result.value` of type <code>[V3CompaniesTablesColumnsResponse](src/models/v3-companies-tables-columns-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeCompaniesTableEntities(request: CompaniesTables.RemoveCompaniesTableEntitiesRequest, options?: RequestOptions): ApiPromise&lt;EntitiesRemoveResponse, CompaniesTables.RemoveCompaniesTableEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove specific company IDs from a table.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.removeCompaniesTableEntities({
    tableId: "482910",
    body: { entityIds: ["10117615"], owner: { email: "user@example.com" } },
  });
  // TODO: Handle 'response' of type EntitiesRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.RemoveCompaniesTableEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .removeCompaniesTableEntities({
    tableId: "482910",
    body: { entityIds: ["10117615"], owner: { email: "user@example.com" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitiesRemoveResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>body</code> | <code>[EntitiesRemoveRequest](src/models/entities-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.removeCompaniesTableEntities(request)`

- **OnSuccess**: <code>[EntitiesRemoveResponse](src/models/entities-remove-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.RemoveCompaniesTableEntitiesError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.removeCompaniesTableEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitiesRemoveResponse, CompaniesTables.RemoveCompaniesTableEntitiesError&gt;</code>, with `result.value` of type <code>[EntitiesRemoveResponse](src/models/entities-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runCompaniesTableColumn(request: CompaniesTables.RunCompaniesTableColumnRequest, options?: RequestOptions): ApiPromise&lt;ColumnsRunResponse, CompaniesTables.RunCompaniesTableColumnError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.runCompaniesTableColumn({
    tableId: "482910",
    columnId: "col_signals_funding",
    body: { runScope: RunScope.Missing, owner: { email: "user@example.com" } },
  });
  // TODO: Handle 'response' of type ColumnsRunResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.RunCompaniesTableColumnError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .runCompaniesTableColumn({
    tableId: "482910",
    columnId: "col_signals_funding",
    body: { runScope: RunScope.Missing, owner: { email: "user@example.com" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ColumnsRunResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>columnId</code> | <code>string</code> | The column's ID. |
| <code>body</code> | <code>[ColumnsRunRequest](src/models/columns-run-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.runCompaniesTableColumn(request)`

- **OnSuccess**: <code>[ColumnsRunResponse](src/models/columns-run-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.RunCompaniesTableColumnError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.runCompaniesTableColumn(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ColumnsRunResponse, CompaniesTables.RunCompaniesTableColumnError&gt;</code>, with `result.value` of type <code>[ColumnsRunResponse](src/models/columns-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCompaniesTable(request: CompaniesTables.UpdateCompaniesTableRequest, options?: RequestOptions): ApiPromise&lt;TableResponse, CompaniesTables.UpdateCompaniesTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a table, change its visibility, or reassign its owner. All fields except `owner` are optional — send only what changes.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companiesTables.updateCompaniesTable({
    tableId: "482910",
    body: { name: "postman-renamed", visibility: Visibility.Shared, owner: { email: "user@example.com" } },
  });
  // TODO: Handle 'response' of type TableResponse
} catch (err) {
  // TODO: Handle 'err' of type CompaniesTables.UpdateCompaniesTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companiesTables
  .updateCompaniesTable({
    tableId: "482910",
    body: { name: "postman-renamed", visibility: Visibility.Shared, owner: { email: "user@example.com" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>body</code> | <code>[TableUpdateRequest](src/models/table-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companiesTables.updateCompaniesTable(request)`

- **OnSuccess**: <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: throws <code>[CompaniesTables.UpdateCompaniesTableError](src/resources/companies-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companiesTables.updateCompaniesTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableResponse, CompaniesTables.UpdateCompaniesTableError&gt;</code>, with `result.value` of type <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CompanyFiltersApi

> Source: [CompanyFiltersApi](src/resources/company-filters-api.ts)

<details>
<summary><code>getCompanyIndustries(options?: RequestOptions): ApiPromise&lt;IndustryLabel[], CompanyFiltersApi.GetCompanyIndustriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available industries for company filtering

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyFiltersApi.getCompanyIndustries();
  // TODO: Handle 'response' of type IndustryLabel[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyFiltersApi.GetCompanyIndustriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyFiltersApi.getCompanyIndustries().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IndustryLabel[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyFiltersApi.getCompanyIndustries()`

- **OnSuccess**: <code>[IndustryLabel](src/models/industry-label.ts)[]</code>
- **OnError**: throws <code>[CompanyFiltersApi.GetCompanyIndustriesError](src/resources/company-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyFiltersApi.getCompanyIndustries().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IndustryLabel[], CompanyFiltersApi.GetCompanyIndustriesError&gt;</code>, with `result.value` of type <code>[IndustryLabel](src/models/industry-label.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanyIntentTopics(options?: RequestOptions): ApiPromise&lt;string[], CompanyFiltersApi.GetCompanyIntentTopicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available intent topics

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyFiltersApi.getCompanyIntentTopics();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyFiltersApi.GetCompanyIntentTopicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyFiltersApi.getCompanyIntentTopics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyFiltersApi.getCompanyIntentTopics()`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[CompanyFiltersApi.GetCompanyIntentTopicsError](src/resources/company-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyFiltersApi.getCompanyIntentTopics().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], CompanyFiltersApi.GetCompanyIntentTopicsError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanyNaicsCodes(options?: RequestOptions): ApiPromise&lt;NaicsCode[], CompanyFiltersApi.GetCompanyNaicsCodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available NAICS codes

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyFiltersApi.getCompanyNaicsCodes();
  // TODO: Handle 'response' of type NaicsCode[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyFiltersApi.GetCompanyNaicsCodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyFiltersApi.getCompanyNaicsCodes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NaicsCode[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyFiltersApi.getCompanyNaicsCodes()`

- **OnSuccess**: <code>[NaicsCode](src/models/naics-code.ts)[]</code>
- **OnError**: throws <code>[CompanyFiltersApi.GetCompanyNaicsCodesError](src/resources/company-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyFiltersApi.getCompanyNaicsCodes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NaicsCode[], CompanyFiltersApi.GetCompanyNaicsCodesError&gt;</code>, with `result.value` of type <code>[NaicsCode](src/models/naics-code.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanyRevenues(options?: RequestOptions): ApiPromise&lt;RevenueRange[], CompanyFiltersApi.GetCompanyRevenuesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available revenue ranges

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyFiltersApi.getCompanyRevenues();
  // TODO: Handle 'response' of type RevenueRange[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyFiltersApi.GetCompanyRevenuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyFiltersApi.getCompanyRevenues().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevenueRange[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyFiltersApi.getCompanyRevenues()`

- **OnSuccess**: <code>[RevenueRange](src/models/revenue-range.ts)[]</code>
- **OnError**: throws <code>[CompanyFiltersApi.GetCompanyRevenuesError](src/resources/company-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyFiltersApi.getCompanyRevenues().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevenueRange[], CompanyFiltersApi.GetCompanyRevenuesError&gt;</code>, with `result.value` of type <code>[RevenueRange](src/models/revenue-range.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanySicCodes(options?: RequestOptions): ApiPromise&lt;SicCode[], CompanyFiltersApi.GetCompanySicCodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available SIC codes

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyFiltersApi.getCompanySicCodes();
  // TODO: Handle 'response' of type SicCode[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyFiltersApi.GetCompanySicCodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyFiltersApi.getCompanySicCodes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SicCode[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyFiltersApi.getCompanySicCodes()`

- **OnSuccess**: <code>[SicCode](src/models/sic-code.ts)[]</code>
- **OnError**: throws <code>[CompanyFiltersApi.GetCompanySicCodesError](src/resources/company-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyFiltersApi.getCompanySicCodes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SicCode[], CompanyFiltersApi.GetCompanySicCodesError&gt;</code>, with `result.value` of type <code>[SicCode](src/models/sic-code.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanySizes(options?: RequestOptions): ApiPromise&lt;CompanySizeRange[], CompanyFiltersApi.GetCompanySizesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available company size ranges

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyFiltersApi.getCompanySizes();
  // TODO: Handle 'response' of type CompanySizeRange[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyFiltersApi.GetCompanySizesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyFiltersApi.getCompanySizes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanySizeRange[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyFiltersApi.getCompanySizes()`

- **OnSuccess**: <code>[CompanySizeRange](src/models/company-size-range.ts)[]</code>
- **OnError**: throws <code>[CompanyFiltersApi.GetCompanySizesError](src/resources/company-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyFiltersApi.getCompanySizes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanySizeRange[], CompanyFiltersApi.GetCompanySizesError&gt;</code>, with `result.value` of type <code>[CompanySizeRange](src/models/company-size-range.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCompanyLocations(request: CompanyFiltersApi.SearchCompanyLocationsRequest, options?: RequestOptions): ApiPromise&lt;CompanyLocationFilter[], CompanyFiltersApi.SearchCompanyLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for company locations by text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyFiltersApi.searchCompanyLocations({ body: { text: "Israel" } });
  // TODO: Handle 'response' of type CompanyLocationFilter[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyFiltersApi.SearchCompanyLocationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyFiltersApi
  .searchCompanyLocations({ body: { text: "Israel" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyLocationFilter[]
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
| <code>body</code> | <code>[LocationSearchRequest](src/models/location-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyFiltersApi.searchCompanyLocations(request)`

- **OnSuccess**: <code>[CompanyLocationFilter](src/models/company-location-filter.ts)[]</code>
- **OnError**: throws <code>[CompanyFiltersApi.SearchCompanyLocationsError](src/resources/company-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyFiltersApi.searchCompanyLocations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyLocationFilter[], CompanyFiltersApi.SearchCompanyLocationsError&gt;</code>, with `result.value` of type <code>[CompanyLocationFilter](src/models/company-location-filter.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCompanyNames(request: CompanyFiltersApi.SearchCompanyNamesRequest, options?: RequestOptions): ApiPromise&lt;CompanyNameResult[], CompanyFiltersApi.SearchCompanyNamesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for company names by text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyFiltersApi.searchCompanyNames({ body: { text: "lusha" } });
  // TODO: Handle 'response' of type CompanyNameResult[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyFiltersApi.SearchCompanyNamesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyFiltersApi.searchCompanyNames({ body: { text: "lusha" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyNameResult[]
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
| <code>body</code> | <code>[CompanyNameSearchRequest](src/models/company-name-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyFiltersApi.searchCompanyNames(request)`

- **OnSuccess**: <code>[CompanyNameResult](src/models/company-name-result.ts)[]</code>
- **OnError**: throws <code>[CompanyFiltersApi.SearchCompanyNamesError](src/resources/company-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyFiltersApi.searchCompanyNames(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyNameResult[], CompanyFiltersApi.SearchCompanyNamesError&gt;</code>, with `result.value` of type <code>[CompanyNameResult](src/models/company-name-result.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCompanyTechnologies(request: CompanyFiltersApi.SearchCompanyTechnologiesRequest, options?: RequestOptions): ApiPromise&lt;Technology[], CompanyFiltersApi.SearchCompanyTechnologiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for technologies by text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.companyFiltersApi.searchCompanyTechnologies({ body: { text: "rss" } });
  // TODO: Handle 'response' of type Technology[]
} catch (err) {
  // TODO: Handle 'err' of type CompanyFiltersApi.SearchCompanyTechnologiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.companyFiltersApi
  .searchCompanyTechnologies({ body: { text: "rss" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Technology[]
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
| <code>body</code> | <code>[TechnologySearchRequest](src/models/technology-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.companyFiltersApi.searchCompanyTechnologies(request)`

- **OnSuccess**: <code>[Technology](src/models/technology.ts)[]</code>
- **OnError**: throws <code>[CompanyFiltersApi.SearchCompanyTechnologiesError](src/resources/company-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.companyFiltersApi.searchCompanyTechnologies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Technology[], CompanyFiltersApi.SearchCompanyTechnologiesError&gt;</code>, with `result.value` of type <code>[Technology](src/models/technology.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContactFiltersApi

> Source: [ContactFiltersApi](src/resources/contact-filters-api.ts)

<details>
<summary><code>getContactCountries(options?: RequestOptions): ApiPromise&lt;CountryFilter[], ContactFiltersApi.GetContactCountriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of all available countries for contact filtering

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactFiltersApi.getContactCountries();
  // TODO: Handle 'response' of type CountryFilter[]
} catch (err) {
  // TODO: Handle 'err' of type ContactFiltersApi.GetContactCountriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactFiltersApi.getContactCountries().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CountryFilter[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactFiltersApi.getContactCountries()`

- **OnSuccess**: <code>[CountryFilter](src/models/country-filter.ts)[]</code>
- **OnError**: throws <code>[ContactFiltersApi.GetContactCountriesError](src/resources/contact-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactFiltersApi.getContactCountries().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CountryFilter[], ContactFiltersApi.GetContactCountriesError&gt;</code>, with `result.value` of type <code>[CountryFilter](src/models/country-filter.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactDataPoints(options?: RequestOptions): ApiPromise&lt;string[], ContactFiltersApi.GetContactDataPointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available data points for contact filtering

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactFiltersApi.getContactDataPoints();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type ContactFiltersApi.GetContactDataPointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactFiltersApi.getContactDataPoints().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactFiltersApi.getContactDataPoints()`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[ContactFiltersApi.GetContactDataPointsError](src/resources/contact-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactFiltersApi.getContactDataPoints().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], ContactFiltersApi.GetContactDataPointsError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactDepartments(options?: RequestOptions): ApiPromise&lt;string[], ContactFiltersApi.GetContactDepartmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available departments for contact filtering

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactFiltersApi.getContactDepartments();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type ContactFiltersApi.GetContactDepartmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactFiltersApi.getContactDepartments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactFiltersApi.getContactDepartments()`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[ContactFiltersApi.GetContactDepartmentsError](src/resources/contact-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactFiltersApi.getContactDepartments().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], ContactFiltersApi.GetContactDepartmentsError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactSeniority(options?: RequestOptions): ApiPromise&lt;string[], ContactFiltersApi.GetContactSeniorityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get list of available seniority levels for contact filtering

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactFiltersApi.getContactSeniority();
  // TODO: Handle 'response' of type string[]
} catch (err) {
  // TODO: Handle 'err' of type ContactFiltersApi.GetContactSeniorityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactFiltersApi.getContactSeniority().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactFiltersApi.getContactSeniority()`

- **OnSuccess**: <code>string[]</code>
- **OnError**: throws <code>[ContactFiltersApi.GetContactSeniorityError](src/resources/contact-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactFiltersApi.getContactSeniority().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string[], ContactFiltersApi.GetContactSeniorityError&gt;</code>, with `result.value` of type <code>string[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchContactLocations(request: ContactFiltersApi.SearchContactLocationsRequest, options?: RequestOptions): ApiPromise&lt;LocationFilter[], ContactFiltersApi.SearchContactLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for locations by text for contact filtering

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactFiltersApi.searchContactLocations({ body: { text: "un" } });
  // TODO: Handle 'response' of type LocationFilter[]
} catch (err) {
  // TODO: Handle 'err' of type ContactFiltersApi.SearchContactLocationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactFiltersApi.searchContactLocations({ body: { text: "un" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LocationFilter[]
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
| <code>body</code> | <code>[LocationSearchRequest](src/models/location-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactFiltersApi.searchContactLocations(request)`

- **OnSuccess**: <code>[LocationFilter](src/models/location-filter.ts)[]</code>
- **OnError**: throws <code>[ContactFiltersApi.SearchContactLocationsError](src/resources/contact-filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactFiltersApi.searchContactLocations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LocationFilter[], ContactFiltersApi.SearchContactLocationsError&gt;</code>, with `result.value` of type <code>[LocationFilter](src/models/location-filter.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContactsTables

> Source: [ContactsTables](src/resources/contacts-tables.ts)

<details>
<summary><code>addContactsTableEntities(request: ContactsTables.AddContactsTableEntitiesRequest, options?: RequestOptions): ApiPromise&lt;EntitiesAddResponse, ContactsTables.AddContactsTableEntitiesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.addContactsTableEntities({
    tableId: "482910",
    body: {
      entityIds: ["10042854", "10042855", "10042856"],
      companyIds: ["16303253", "16303253", "12790225"],
      owner: { email: "user@example.com" },
    },
  });
  // TODO: Handle 'response' of type EntitiesAddResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.AddContactsTableEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .addContactsTableEntities({
    tableId: "482910",
    body: {
      entityIds: ["10042854", "10042855", "10042856"],
      companyIds: ["16303253", "16303253", "12790225"],
      owner: { email: "user@example.com" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitiesAddResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>body</code> | <code>[EntitiesAddRequest](src/models/entities-add-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.addContactsTableEntities(request)`

- **OnSuccess**: <code>[EntitiesAddResponse](src/models/entities-add-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.AddContactsTableEntitiesError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.addContactsTableEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitiesAddResponse, ContactsTables.AddContactsTableEntitiesError&gt;</code>, with `result.value` of type <code>[EntitiesAddResponse](src/models/entities-add-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createContactsTable(request: ContactsTables.CreateContactsTableRequest, options?: RequestOptions): ApiPromise&lt;TableResponse, ContactsTables.CreateContactsTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new, empty contacts table, optionally seeded with an initial list of contact IDs.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.createContactsTable({
    body: {
      name: "VP Sales US Tech Q2",
      visibility: Visibility.Private,
      owner: { email: "user@example.com" },
      ids: ["10042851", "10042852"],
    },
  });
  // TODO: Handle 'response' of type TableResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.CreateContactsTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .createContactsTable({
    body: {
      name: "VP Sales US Tech Q2",
      visibility: Visibility.Private,
      owner: { email: "user@example.com" },
      ids: ["10042851", "10042852"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableResponse
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
| <code>body</code> | <code>[TableCreateRequest](src/models/table-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.createContactsTable(request)`

- **OnSuccess**: <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.CreateContactsTableError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.createContactsTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableResponse, ContactsTables.CreateContactsTableError&gt;</code>, with `result.value` of type <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteContactsTable(request: ContactsTables.DeleteContactsTableRequest, options?: RequestOptions): ApiPromise&lt;V3ContactsTablesResponse, ContactsTables.DeleteContactsTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a table and all its data. This cannot be undone.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.deleteContactsTable({
    tableId: "482910",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type V3ContactsTablesResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.DeleteContactsTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .deleteContactsTable({ tableId: "482910", email: "user@example.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ContactsTablesResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.deleteContactsTable(request)`

- **OnSuccess**: <code>[V3ContactsTablesResponse](src/models/v3-contacts-tables-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.DeleteContactsTableError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.deleteContactsTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ContactsTablesResponse, ContactsTables.DeleteContactsTableError&gt;</code>, with `result.value` of type <code>[V3ContactsTablesResponse](src/models/v3-contacts-tables-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactsTable(request: ContactsTables.GetContactsTableRequest, options?: RequestOptions): ApiPromise&lt;TableResponse, ContactsTables.GetContactsTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a table's metadata and current processing status.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.getContactsTable({
    tableId: "482910",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type TableResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.GetContactsTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .getContactsTable({ tableId: "482910", email: "user@example.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.getContactsTable(request)`

- **OnSuccess**: <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.GetContactsTableError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.getContactsTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableResponse, ContactsTables.GetContactsTableError&gt;</code>, with `result.value` of type <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactsTableEntities(request: ContactsTables.GetContactsTableEntitiesRequest, options?: RequestOptions): ApiPromise&lt;EntitiesGetResponse, ContactsTables.GetContactsTableEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read a page of rows in the table, with all column values and per-cell status.

> **Billing:** Charged per row returned via `export_api`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.getContactsTableEntities({
    tableId: "482910",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type EntitiesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.GetContactsTableEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .getContactsTableEntities({ tableId: "482910", email: "user@example.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitiesGetResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 0 |
| <code>size?</code> | <code>number</code> | -<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.getContactsTableEntities(request)`

- **OnSuccess**: <code>[EntitiesGetResponse](src/models/entities-get-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.GetContactsTableEntitiesError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.getContactsTableEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitiesGetResponse, ContactsTables.GetContactsTableEntitiesError&gt;</code>, with `result.value` of type <code>[EntitiesGetResponse](src/models/entities-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContactsTableColumns(request: ContactsTables.ListContactsTableColumnsRequest, options?: RequestOptions): ApiPromise&lt;ColumnsListResponse, ContactsTables.ListContactsTableColumnsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the columns on a table, with type and aggregated per-cell status counts.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.listContactsTableColumns({
    tableId: "482910",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type ColumnsListResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.ListContactsTableColumnsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .listContactsTableColumns({ tableId: "482910", email: "user@example.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ColumnsListResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.listContactsTableColumns(request)`

- **OnSuccess**: <code>[ColumnsListResponse](src/models/columns-list-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.ListContactsTableColumnsError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.listContactsTableColumns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ColumnsListResponse, ContactsTables.ListContactsTableColumnsError&gt;</code>, with `result.value` of type <code>[ColumnsListResponse](src/models/columns-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listContactsTables(request: ContactsTables.ListContactsTablesRequest, options?: RequestOptions): ApiPromise&lt;TableListResponse, ContactsTables.ListContactsTablesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List contacts tables owned by the given user, plus any tables shared with the account.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.listContactsTables({
    body: { owner: { email: "user@example.com" }, page: 0, size: 10, status: Status1.Active },
  });
  // TODO: Handle 'response' of type TableListResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.ListContactsTablesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .listContactsTables({
    body: { owner: { email: "user@example.com" }, page: 0, size: 10, status: Status1.Active },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableListResponse
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
| <code>body</code> | <code>[TableListRequest](src/models/table-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.listContactsTables(request)`

- **OnSuccess**: <code>[TableListResponse](src/models/table-list-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.ListContactsTablesError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.listContactsTables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableListResponse, ContactsTables.ListContactsTablesError&gt;</code>, with `result.value` of type <code>[TableListResponse](src/models/table-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeContactsTableColumn(request: ContactsTables.RemoveContactsTableColumnRequest, options?: RequestOptions): ApiPromise&lt;V3ContactsTablesColumnsResponse, ContactsTables.RemoveContactsTableColumnError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a column and delete all of its cell data across the table. Default Lusha columns cannot be removed.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.removeContactsTableColumn({
    tableId: "482910",
    columnId: "col_signals_funding",
    email: "user@example.com",
  });
  // TODO: Handle 'response' of type V3ContactsTablesColumnsResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.RemoveContactsTableColumnError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .removeContactsTableColumn({
    tableId: "482910",
    columnId: "col_signals_funding",
    email: "user@example.com",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ContactsTablesColumnsResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>columnId</code> | <code>string</code> | The column's ID. |
| <code>email?</code> | <code>string</code> | Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE calls, which cannot carry a body. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.removeContactsTableColumn(request)`

- **OnSuccess**: <code>[V3ContactsTablesColumnsResponse](src/models/v3-contacts-tables-columns-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.RemoveContactsTableColumnError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.removeContactsTableColumn(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ContactsTablesColumnsResponse, ContactsTables.RemoveContactsTableColumnError&gt;</code>, with `result.value` of type <code>[V3ContactsTablesColumnsResponse](src/models/v3-contacts-tables-columns-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeContactsTableEntities(request: ContactsTables.RemoveContactsTableEntitiesRequest, options?: RequestOptions): ApiPromise&lt;EntitiesRemoveResponse, ContactsTables.RemoveContactsTableEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove specific contact IDs from a table.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.removeContactsTableEntities({
    tableId: "482910",
    body: { entityIds: ["10042851", "10042852"], owner: { email: "user@example.com" } },
  });
  // TODO: Handle 'response' of type EntitiesRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.RemoveContactsTableEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .removeContactsTableEntities({
    tableId: "482910",
    body: { entityIds: ["10042851", "10042852"], owner: { email: "user@example.com" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntitiesRemoveResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>body</code> | <code>[EntitiesRemoveRequest](src/models/entities-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.removeContactsTableEntities(request)`

- **OnSuccess**: <code>[EntitiesRemoveResponse](src/models/entities-remove-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.RemoveContactsTableEntitiesError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.removeContactsTableEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntitiesRemoveResponse, ContactsTables.RemoveContactsTableEntitiesError&gt;</code>, with `result.value` of type <code>[EntitiesRemoveResponse](src/models/entities-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runContactsTableColumn(request: ContactsTables.RunContactsTableColumnRequest, options?: RequestOptions): ApiPromise&lt;ColumnsRunResponse, ContactsTables.RunContactsTableColumnError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.runContactsTableColumn({
    tableId: "482910",
    columnId: "col_signals_funding",
    body: {
      runScope: RunScope.Specific,
      entityIds: ["10042851", "10042852"],
      owner: { email: "user@example.com" },
    },
  });
  // TODO: Handle 'response' of type ColumnsRunResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.RunContactsTableColumnError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .runContactsTableColumn({
    tableId: "482910",
    columnId: "col_signals_funding",
    body: {
      runScope: RunScope.Specific,
      entityIds: ["10042851", "10042852"],
      owner: { email: "user@example.com" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ColumnsRunResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>columnId</code> | <code>string</code> | The column's ID. |
| <code>body</code> | <code>[ColumnsRunRequest](src/models/columns-run-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.runContactsTableColumn(request)`

- **OnSuccess**: <code>[ColumnsRunResponse](src/models/columns-run-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.RunContactsTableColumnError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.runContactsTableColumn(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ColumnsRunResponse, ContactsTables.RunContactsTableColumnError&gt;</code>, with `result.value` of type <code>[ColumnsRunResponse](src/models/columns-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateContactsTable(request: ContactsTables.UpdateContactsTableRequest, options?: RequestOptions): ApiPromise&lt;TableResponse, ContactsTables.UpdateContactsTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a table, change its visibility, or reassign its owner. All fields except `owner` are optional — send only what changes.

> **Billing:** Free.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.contactsTables.updateContactsTable({
    tableId: "482910",
    body: { name: "postman-renamed", visibility: Visibility.Shared, owner: { email: "user@example.com" } },
  });
  // TODO: Handle 'response' of type TableResponse
} catch (err) {
  // TODO: Handle 'err' of type ContactsTables.UpdateContactsTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contactsTables
  .updateContactsTable({
    tableId: "482910",
    body: { name: "postman-renamed", visibility: Visibility.Shared, owner: { email: "user@example.com" } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableResponse
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
| <code>tableId</code> | <code>string</code> | The table's ID. |
| <code>body</code> | <code>[TableUpdateRequest](src/models/table-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contactsTables.updateContactsTable(request)`

- **OnSuccess**: <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: throws <code>[ContactsTables.UpdateContactsTableError](src/resources/contacts-tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contactsTables.updateContactsTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableResponse, ContactsTables.UpdateContactsTableError&gt;</code>, with `result.value` of type <code>[TableResponse](src/models/table-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Enrich

> Source: [Enrich](src/resources/enrich.ts)

<details>
<summary><code>enrichCompanies(request: Enrich.EnrichCompaniesRequest, options?: RequestOptions): ApiPromise&lt;V3CompaniesEnrichResponse, Enrich.EnrichCompaniesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrich.enrichCompanies({
    body: {
      ids: ["16303253", "12790225"],
      reveal: [
        Reveal1.EmployeesByLocation,
        Reveal1.EmployeesByDepartment,
        Reveal1.EmployeesBySeniority,
        Reveal1.Competitors,
        Reveal1.Intent,
      ],
    },
  });
  // TODO: Handle 'response' of type V3CompaniesEnrichResponse
} catch (err) {
  // TODO: Handle 'err' of type Enrich.EnrichCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrich
  .enrichCompanies({
    body: {
      ids: ["16303253", "12790225"],
      reveal: [
        Reveal1.EmployeesByLocation,
        Reveal1.EmployeesByDepartment,
        Reveal1.EmployeesBySeniority,
        Reveal1.Competitors,
        Reveal1.Intent,
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3CompaniesEnrichResponse
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
| <code>body</code> | <code>[V3CompaniesEnrichRequest](src/models/v3-companies-enrich-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrich.enrichCompanies(request)`

- **OnSuccess**: <code>[V3CompaniesEnrichResponse](src/models/v3-companies-enrich-response.ts)</code>
- **OnError**: throws <code>[Enrich.EnrichCompaniesError](src/resources/enrich.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrich.enrichCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3CompaniesEnrichResponse, Enrich.EnrichCompaniesError&gt;</code>, with `result.value` of type <code>[V3CompaniesEnrichResponse](src/models/v3-companies-enrich-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enrichContacts(request: Enrich.EnrichContactsRequest, options?: RequestOptions): ApiPromise&lt;V3ContactsEnrichResponse, Enrich.EnrichContactsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrich.enrichContacts({
    body: { ids: ["4389064654", "4389064624"], reveal: [Reveal.Emails, Reveal.Phones] },
  });
  // TODO: Handle 'response' of type V3ContactsEnrichResponse
} catch (err) {
  // TODO: Handle 'err' of type Enrich.EnrichContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrich
  .enrichContacts({ body: { ids: ["4389064654", "4389064624"], reveal: [Reveal.Emails, Reveal.Phones] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ContactsEnrichResponse
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
| <code>body</code> | <code>[V3ContactsEnrichRequest](src/models/v3-contacts-enrich-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrich.enrichContacts(request)`

- **OnSuccess**: <code>[V3ContactsEnrichResponse](src/models/v3-contacts-enrich-response.ts)</code>
- **OnError**: throws <code>[Enrich.EnrichContactsError](src/resources/enrich.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrich.enrichContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ContactsEnrichResponse, Enrich.EnrichContactsError&gt;</code>, with `result.value` of type <code>[V3ContactsEnrichResponse](src/models/v3-contacts-enrich-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Enrichment

> Source: [Enrichment](src/resources/enrichment.ts)

<details>
<summary><code>searchMultipleCompaniesV2(request: Enrichment.SearchMultipleCompaniesV2Request, options?: RequestOptions): ApiPromise&lt;Record&lt;string, CompanyBulkResponse&gt;, Enrichment.SearchMultipleCompaniesV2Error&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrichment.searchMultipleCompaniesV2({
    body: { companies: [{ id: "1", name: "Lusha" }, { id: "2", domain: "google.com" }] },
  });
  // TODO: Handle 'response' of type Record<string, CompanyBulkResponse>
} catch (err) {
  // TODO: Handle 'err' of type Enrichment.SearchMultipleCompaniesV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrichment
  .searchMultipleCompaniesV2({
    body: { companies: [{ id: "1", name: "Lusha" }, { id: "2", domain: "google.com" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, CompanyBulkResponse>
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
| <code>body</code> | <code>[CompaniesBulkRequest](src/models/companies-bulk-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrichment.searchMultipleCompaniesV2(request)`

- **OnSuccess**: <code>Record&lt;string, [CompanyBulkResponse](src/models/company-bulk-response.ts)&gt;</code>
- **OnError**: throws <code>[Enrichment.SearchMultipleCompaniesV2Error](src/resources/enrichment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrichment.searchMultipleCompaniesV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, CompanyBulkResponse&gt;, Enrichment.SearchMultipleCompaniesV2Error&gt;</code>, with `result.value` of type <code>Record&lt;string, [CompanyBulkResponse](src/models/company-bulk-response.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchMultipleContacts(request: Enrichment.SearchMultipleContactsRequest, options?: RequestOptions): ApiPromise&lt;BulkPersonResponse, Enrichment.SearchMultipleContactsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrichment.searchMultipleContacts({
    body: {
      contacts: [
        {
          contactId: "1",
          personId: "4183886134",
          fullName: "John Doe",
          email: "john@example.com",
          companies: [{ name: "Example Corp", domain: "example.com", isCurrent: true }],
        },
        {
          contactId: "2",
          personId: "4183886135",
          linkedinUrl: "https://www.linkedin.com/in/carolinaportela/",
        },
      ],
      metadata: {
        revealEmails: true,
        revealPhones: true,
        signals: [Signal.Promotion, Signal.CompanyChange],
        signalsStartDate: "2025-03-01",
        partialProfile: true,
      },
    },
  });
  // TODO: Handle 'response' of type BulkPersonResponse
} catch (err) {
  // TODO: Handle 'err' of type Enrichment.SearchMultipleContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrichment
  .searchMultipleContacts({
    body: {
      contacts: [
        {
          contactId: "1",
          personId: "4183886134",
          fullName: "John Doe",
          email: "john@example.com",
          companies: [{ name: "Example Corp", domain: "example.com", isCurrent: true }],
        },
        {
          contactId: "2",
          personId: "4183886135",
          linkedinUrl: "https://www.linkedin.com/in/carolinaportela/",
        },
      ],
      metadata: {
        revealEmails: true,
        revealPhones: true,
        signals: [Signal.Promotion, Signal.CompanyChange],
        signalsStartDate: "2025-03-01",
        partialProfile: true,
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkPersonResponse
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
| <code>body</code> | <code>[SearchBulkContactsRequest](src/models/search-bulk-contacts-request.ts)</code> | The list of contacts to enrich |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrichment.searchMultipleContacts(request)`

- **OnSuccess**: <code>[BulkPersonResponse](src/models/bulk-person-response.ts)</code>
- **OnError**: throws <code>[Enrichment.SearchMultipleContactsError](src/resources/enrichment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrichment.searchMultipleContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkPersonResponse, Enrichment.SearchMultipleContactsError&gt;</code>, with `result.value` of type <code>[BulkPersonResponse](src/models/bulk-person-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchSingleCompanyV2(request?: Enrichment.SearchSingleCompanyV2Request, options?: RequestOptions): ApiPromise&lt;CompanySingleResponse, Enrichment.SearchSingleCompanyV2Error&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrichment.searchSingleCompanyV2({
    domain: "example.com",
    company: "Lusha",
    companyId: "1234567890",
    signals: [Signal1.ItSpendIncrease],
    signalsStartDate: "2025-03-01",
    partialCompany: false,
  });
  // TODO: Handle 'response' of type CompanySingleResponse
} catch (err) {
  // TODO: Handle 'err' of type Enrichment.SearchSingleCompanyV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrichment
  .searchSingleCompanyV2({
    domain: "example.com",
    company: "Lusha",
    companyId: "1234567890",
    signals: [Signal1.ItSpendIncrease],
    signalsStartDate: "2025-03-01",
    partialCompany: false,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanySingleResponse
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
| <code>domain?</code> | <code>string</code> | The domain name associated with the company |
| <code>company?</code> | <code>string</code> | The name of the company |
| <code>companyId?</code> | <code>string</code> | A unique identifier for a Lusha company. |
| <code>signals?</code> | <code>[Signal1](src/models/signal1.ts)[]</code> | Array of signal types to retrieve for the company.<br>- `allSignals`: All available signal types<br><br>> See the Signal Options endpoint for complete list of available signals and their categories |
| <code>signalsStartDate?</code> | <code>string</code> (date) | Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not specified. |
| <code>partialCompany?</code> | <code>boolean</code> | Expand coverage with partial company profiles<br>**Default**: true |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrichment.searchSingleCompanyV2(request)`

- **OnSuccess**: <code>[CompanySingleResponse](src/models/company-single-response.ts)</code>
- **OnError**: throws <code>[Enrichment.SearchSingleCompanyV2Error](src/resources/enrichment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrichment.searchSingleCompanyV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanySingleResponse, Enrichment.SearchSingleCompanyV2Error&gt;</code>, with `result.value` of type <code>[CompanySingleResponse](src/models/company-single-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchSingleContact(request?: Enrichment.SearchSingleContactRequest, options?: RequestOptions): ApiPromise&lt;SingleContactResponse, Enrichment.SearchSingleContactError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.enrichment.searchSingleContact({
    firstName: "Dustin",
    lastName: "Moskovitz",
    personId: "4183886134",
    companyName: "Lusha",
    companyDomain: "lusha.com",
    email: "dustin@lusha.com",
    linkedinUrl: "https://www.linkedin.com/in/dustin/",
    refreshJobInfo: true,
    revealEmails: true,
    revealPhones: true,
    signals: [Signal.Promotion],
    signalsStartDate: "2025-03-01",
    partialProfile: true,
  });
  // TODO: Handle 'response' of type SingleContactResponse
} catch (err) {
  // TODO: Handle 'err' of type Enrichment.SearchSingleContactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enrichment
  .searchSingleContact({
    firstName: "Dustin",
    lastName: "Moskovitz",
    personId: "4183886134",
    companyName: "Lusha",
    companyDomain: "lusha.com",
    email: "dustin@lusha.com",
    linkedinUrl: "https://www.linkedin.com/in/dustin/",
    refreshJobInfo: true,
    revealEmails: true,
    revealPhones: true,
    signals: [Signal.Promotion],
    signalsStartDate: "2025-03-01",
    partialProfile: true,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SingleContactResponse
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
| <code>firstName?</code> | <code>string</code> | The first name of the person |
| <code>lastName?</code> | <code>string</code> | The last name of the person |
| <code>personId?</code> | <code>string</code> | The unique person identifier in Lusha |
| <code>companyName?</code> | <code>string</code> | The name of the company the person works at |
| <code>companyDomain?</code> | <code>string</code> | The domain name of the company |
| <code>email?</code> | <code>string</code> | The email address of the person |
| <code>linkedinUrl?</code> | <code>string</code> | The LinkedIn URL of the person |
| <code>refreshJobInfo?</code> | <code>boolean</code> | Set to true to refresh and update the job details for the person.<br>This ensures that outdated job information is replaced with the most recent data.<br>**Default**: false |
| <code>filterBy?</code> | <code>[FilterBy](src/models/filter-by.ts)</code> | Filters results based on specific contact details. Available options:<br>- `phoneNumbers`: Only return contacts with phone numbers<br>- `emailAddresses`: Only return contacts with email addresses<br><br>By default, results will include contacts with at least one contact detail. |
| <code>revealEmails?</code> | <code>boolean</code> | Set `revealEmails=true` to retrieve only the email address of the contact.<br>**Default**: true |
| <code>revealPhones?</code> | <code>boolean</code> | Set `revealPhones=true` to retrieve only the phone number of the contact.<br>**Default**: true |
| <code>signals?</code> | <code>[Signal](src/models/signal.ts)[]</code> | Array of signal types to retrieve for the contact.<br>- `allSignals`: All available signal types<br>- `promotion`: Promotion signals<br>- `companyChange`: Company change signals |
| <code>signalsStartDate?</code> | <code>string</code> (date) | Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not specified. |
| <code>partialProfile?</code> | <code>boolean</code> | Search for a single contact with the option to receive a partial profile.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enrichment.searchSingleContact(request)`

- **OnSuccess**: <code>[SingleContactResponse](src/models/single-contact-response.ts)</code>
- **OnError**: throws <code>[Enrichment.SearchSingleContactError](src/resources/enrichment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enrichment.searchSingleContact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SingleContactResponse, Enrichment.SearchSingleContactError&gt;</code>, with `result.value` of type <code>[SingleContactResponse](src/models/single-contact-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FiltersApi

> Source: [FiltersApi](src/resources/filters-api.ts)

<details>
<summary><code>getCompanyFilterTypes(options?: RequestOptions): ApiPromise&lt;FilterTypesDiscoveryResponse, FiltersApi.GetCompanyFilterTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all available filter types for company prospecting and whether each requires a search query.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filtersApi.getCompanyFilterTypes();
  // TODO: Handle 'response' of type FilterTypesDiscoveryResponse
} catch (err) {
  // TODO: Handle 'err' of type FiltersApi.GetCompanyFilterTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filtersApi.getCompanyFilterTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilterTypesDiscoveryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filtersApi.getCompanyFilterTypes()`

- **OnSuccess**: <code>[FilterTypesDiscoveryResponse](src/models/filter-types-discovery-response.ts)</code>
- **OnError**: throws <code>[FiltersApi.GetCompanyFilterTypesError](src/resources/filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filtersApi.getCompanyFilterTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilterTypesDiscoveryResponse, FiltersApi.GetCompanyFilterTypesError&gt;</code>, with `result.value` of type <code>[FilterTypesDiscoveryResponse](src/models/filter-types-discovery-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanyFilterValues(request: FiltersApi.GetCompanyFilterValuesRequest, options?: RequestOptions): ApiPromise&lt;FilterValuesResponse, FiltersApi.GetCompanyFilterValuesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filtersApi.getCompanyFilterValues({ filterType: FilterType1.Names });
  // TODO: Handle 'response' of type FilterValuesResponse
} catch (err) {
  // TODO: Handle 'err' of type FiltersApi.GetCompanyFilterValuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filtersApi
  .getCompanyFilterValues({ filterType: FilterType1.Names })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilterValuesResponse
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
| <code>filterType</code> | <code>[FilterType1](src/models/filter-type1.ts)</code> | - |
| <code>query?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filtersApi.getCompanyFilterValues(request)`

- **OnSuccess**: <code>[FilterValuesResponse](src/models/filter-values-response.ts)</code>
- **OnError**: throws <code>[FiltersApi.GetCompanyFilterValuesError](src/resources/filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filtersApi.getCompanyFilterValues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilterValuesResponse, FiltersApi.GetCompanyFilterValuesError&gt;</code>, with `result.value` of type <code>[FilterValuesResponse](src/models/filter-values-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactFilterTypes(options?: RequestOptions): ApiPromise&lt;FilterTypesDiscoveryResponse, FiltersApi.GetContactFilterTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all available filter types for contact prospecting and whether each requires a search query.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filtersApi.getContactFilterTypes();
  // TODO: Handle 'response' of type FilterTypesDiscoveryResponse
} catch (err) {
  // TODO: Handle 'err' of type FiltersApi.GetContactFilterTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filtersApi.getContactFilterTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilterTypesDiscoveryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filtersApi.getContactFilterTypes()`

- **OnSuccess**: <code>[FilterTypesDiscoveryResponse](src/models/filter-types-discovery-response.ts)</code>
- **OnError**: throws <code>[FiltersApi.GetContactFilterTypesError](src/resources/filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filtersApi.getContactFilterTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilterTypesDiscoveryResponse, FiltersApi.GetContactFilterTypesError&gt;</code>, with `result.value` of type <code>[FilterTypesDiscoveryResponse](src/models/filter-types-discovery-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactFilterValues(request: FiltersApi.GetContactFilterValuesRequest, options?: RequestOptions): ApiPromise&lt;FilterValuesResponse, FiltersApi.GetContactFilterValuesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filtersApi.getContactFilterValues({ filterType: FilterType.Departments });
  // TODO: Handle 'response' of type FilterValuesResponse
} catch (err) {
  // TODO: Handle 'err' of type FiltersApi.GetContactFilterValuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filtersApi
  .getContactFilterValues({ filterType: FilterType.Departments })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilterValuesResponse
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
| <code>filterType</code> | <code>[FilterType](src/models/filter-type.ts)</code> | - |
| <code>query?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filtersApi.getContactFilterValues(request)`

- **OnSuccess**: <code>[FilterValuesResponse](src/models/filter-values-response.ts)</code>
- **OnError**: throws <code>[FiltersApi.GetContactFilterValuesError](src/resources/filters-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filtersApi.getContactFilterValues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilterValuesResponse, FiltersApi.GetContactFilterValuesError&gt;</code>, with `result.value` of type <code>[FilterValuesResponse](src/models/filter-values-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Lookalikes

> Source: [Lookalikes](src/resources/lookalikes.ts)

<details>
<summary><code>getCompanyLookalikes(request: Lookalikes.GetCompanyLookalikesRequest, options?: RequestOptions): ApiPromise&lt;CompanyLookalikesResponse, Lookalikes.GetCompanyLookalikesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lookalikes.getCompanyLookalikes({
    body: {
      seeds: {
        domains: ["sap.com", "oracle.com"],
        linkedinUrls: ["https://www.linkedin.com/company/google"],
      },
      exclude: { domains: ["existingcustomer.com"] },
      limit: 100,
    },
  });
  // TODO: Handle 'response' of type CompanyLookalikesResponse
} catch (err) {
  // TODO: Handle 'err' of type Lookalikes.GetCompanyLookalikesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lookalikes
  .getCompanyLookalikes({
    body: {
      seeds: {
        domains: ["sap.com", "oracle.com"],
        linkedinUrls: ["https://www.linkedin.com/company/google"],
      },
      exclude: { domains: ["existingcustomer.com"] },
      limit: 100,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyLookalikesResponse
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
| <code>body</code> | <code>[CompanyLookalikesRequest](src/models/company-lookalikes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lookalikes.getCompanyLookalikes(request)`

- **OnSuccess**: <code>[CompanyLookalikesResponse](src/models/company-lookalikes-response.ts)</code>
- **OnError**: throws <code>[Lookalikes.GetCompanyLookalikesError](src/resources/lookalikes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lookalikes.getCompanyLookalikes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyLookalikesResponse, Lookalikes.GetCompanyLookalikesError&gt;</code>, with `result.value` of type <code>[CompanyLookalikesResponse](src/models/company-lookalikes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactLookalikes(request: Lookalikes.GetContactLookalikesRequest, options?: RequestOptions): ApiPromise&lt;ContactLookalikesResponse, Lookalikes.GetContactLookalikesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lookalikes.getContactLookalikes({
    body: {
      seeds: {
        linkedinUrls: ["https://www.linkedin.com/in/orit-shilvock-6243bb5"],
        emails: ["gal.ashkelon@lusha.com"],
        ids: ["1234"],
      },
      exclude: { emails: ["existing@customer.com"] },
      limit: 25,
    },
  });
  // TODO: Handle 'response' of type ContactLookalikesResponse
} catch (err) {
  // TODO: Handle 'err' of type Lookalikes.GetContactLookalikesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lookalikes
  .getContactLookalikes({
    body: {
      seeds: {
        linkedinUrls: ["https://www.linkedin.com/in/orit-shilvock-6243bb5"],
        emails: ["gal.ashkelon@lusha.com"],
        ids: ["1234"],
      },
      exclude: { emails: ["existing@customer.com"] },
      limit: 25,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactLookalikesResponse
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
| <code>body</code> | <code>[ContactLookalikesRequest](src/models/contact-lookalikes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lookalikes.getContactLookalikes(request)`

- **OnSuccess**: <code>[ContactLookalikesResponse](src/models/contact-lookalikes-response.ts)</code>
- **OnError**: throws <code>[Lookalikes.GetContactLookalikesError](src/resources/lookalikes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lookalikes.getContactLookalikes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactLookalikesResponse, Lookalikes.GetContactLookalikesError&gt;</code>, with `result.value` of type <code>[ContactLookalikesResponse](src/models/contact-lookalikes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postV3LookalikeCompanies(request: Lookalikes.PostV3LookalikeCompaniesRequest, options?: RequestOptions): ApiPromise&lt;CompanyLookalikesResponse2, Lookalikes.PostV3LookalikeCompaniesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lookalikes.postV3LookalikeCompanies({
    body: {
      seeds: {
        domains: ["sap.com", "oracle.com", "the-company.com"],
        linkedinUrls: ["https://www.linkedin.com/company/google", "https://www.linkedin.com/company/someone"],
      },
      exclude: {
        domains: ["existingcustomer.com", "already-sent.com"],
        linkedinUrls: ["https://www.linkedin.com/company/already-sent/"],
      },
      limit: 100,
    },
  });
  // TODO: Handle 'response' of type CompanyLookalikesResponse2
} catch (err) {
  // TODO: Handle 'err' of type Lookalikes.PostV3LookalikeCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lookalikes
  .postV3LookalikeCompanies({
    body: {
      seeds: {
        domains: ["sap.com", "oracle.com", "the-company.com"],
        linkedinUrls: ["https://www.linkedin.com/company/google", "https://www.linkedin.com/company/someone"],
      },
      exclude: {
        domains: ["existingcustomer.com", "already-sent.com"],
        linkedinUrls: ["https://www.linkedin.com/company/already-sent/"],
      },
      limit: 100,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyLookalikesResponse2
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
| <code>body</code> | <code>[CompanyLookalikesRequest2](src/models/company-lookalikes-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lookalikes.postV3LookalikeCompanies(request)`

- **OnSuccess**: <code>[CompanyLookalikesResponse2](src/models/company-lookalikes-response2.ts)</code>
- **OnError**: throws <code>[Lookalikes.PostV3LookalikeCompaniesError](src/resources/lookalikes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lookalikes.postV3LookalikeCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyLookalikesResponse2, Lookalikes.PostV3LookalikeCompaniesError&gt;</code>, with `result.value` of type <code>[CompanyLookalikesResponse2](src/models/company-lookalikes-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postV3LookalikeContacts(request: Lookalikes.PostV3LookalikeContactsRequest, options?: RequestOptions): ApiPromise&lt;ContactLookalikesResponse2, Lookalikes.PostV3LookalikeContactsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lookalikes.postV3LookalikeContacts({
    body: {
      seeds: {
        linkedinUrls: ["https://www.linkedin.com/in/johndoe"],
        contacts: [{ firstName: "Alice", lastName: "Smith", companyDomain: "sap.com" }],
        emails: ["jane@acme.com", "bob@example.com"],
        contactIds: [1234, 4567],
      },
      exclude: {
        linkedinUrls: ["https://www.linkedin.com/in/already-contacted/"],
        emails: ["existing@customer.com"],
        contactIds: [9999],
      },
      limit: 25,
    },
  });
  // TODO: Handle 'response' of type ContactLookalikesResponse2
} catch (err) {
  // TODO: Handle 'err' of type Lookalikes.PostV3LookalikeContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lookalikes
  .postV3LookalikeContacts({
    body: {
      seeds: {
        linkedinUrls: ["https://www.linkedin.com/in/johndoe"],
        contacts: [{ firstName: "Alice", lastName: "Smith", companyDomain: "sap.com" }],
        emails: ["jane@acme.com", "bob@example.com"],
        contactIds: [1234, 4567],
      },
      exclude: {
        linkedinUrls: ["https://www.linkedin.com/in/already-contacted/"],
        emails: ["existing@customer.com"],
        contactIds: [9999],
      },
      limit: 25,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactLookalikesResponse2
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
| <code>body</code> | <code>[ContactLookalikesRequest2](src/models/contact-lookalikes-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lookalikes.postV3LookalikeContacts(request)`

- **OnSuccess**: <code>[ContactLookalikesResponse2](src/models/contact-lookalikes-response2.ts)</code>
- **OnError**: throws <code>[Lookalikes.PostV3LookalikeContactsError](src/resources/lookalikes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lookalikes.postV3LookalikeContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactLookalikesResponse2, Lookalikes.PostV3LookalikeContactsError&gt;</code>, with `result.value` of type <code>[ContactLookalikesResponse2](src/models/contact-lookalikes-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Prospecting

> Source: [Prospecting](src/resources/prospecting.ts)

<details>
<summary><code>prospectingCompanies(request: Prospecting.ProspectingCompaniesRequest, options?: RequestOptions): ApiPromise&lt;V3ProspectingCompaniesResponse, Prospecting.ProspectingCompaniesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prospecting.prospectingCompanies({
    body: {
      pagination: { page: 0, size: 25 },
      filters: { companies: { include: {}, exclude: {} } },
      tableId: "583021",
      options: { includePartialProfiles: false },
    },
  });
  // TODO: Handle 'response' of type V3ProspectingCompaniesResponse
} catch (err) {
  // TODO: Handle 'err' of type Prospecting.ProspectingCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prospecting
  .prospectingCompanies({
    body: {
      pagination: { page: 0, size: 25 },
      filters: { companies: { include: {}, exclude: {} } },
      tableId: "583021",
      options: { includePartialProfiles: false },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ProspectingCompaniesResponse
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
| <code>body</code> | <code>[V3ProspectingCompaniesRequest](src/models/v3-prospecting-companies-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prospecting.prospectingCompanies(request)`

- **OnSuccess**: <code>[V3ProspectingCompaniesResponse](src/models/v3-prospecting-companies-response.ts)</code>
- **OnError**: throws <code>[Prospecting.ProspectingCompaniesError](src/resources/prospecting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prospecting.prospectingCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ProspectingCompaniesResponse, Prospecting.ProspectingCompaniesError&gt;</code>, with `result.value` of type <code>[V3ProspectingCompaniesResponse](src/models/v3-prospecting-companies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>prospectingContacts(request: Prospecting.ProspectingContactsRequest, options?: RequestOptions): ApiPromise&lt;V3ProspectingContactsResponse, Prospecting.ProspectingContactsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prospecting.prospectingContacts({
    body: {
      pagination: { page: 0, size: 100 },
      filters: { contacts: { include: {} }, companies: { include: {}, exclude: {} } },
      tableId: "482910",
      options: { includePartialProfiles: true, excludeDnc: false },
    },
  });
  // TODO: Handle 'response' of type V3ProspectingContactsResponse
} catch (err) {
  // TODO: Handle 'err' of type Prospecting.ProspectingContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prospecting
  .prospectingContacts({
    body: {
      pagination: { page: 0, size: 100 },
      filters: { contacts: { include: {} }, companies: { include: {}, exclude: {} } },
      tableId: "482910",
      options: { includePartialProfiles: true, excludeDnc: false },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ProspectingContactsResponse
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
| <code>body</code> | <code>[V3ProspectingContactsRequest](src/models/v3-prospecting-contacts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prospecting.prospectingContacts(request)`

- **OnSuccess**: <code>[V3ProspectingContactsResponse](src/models/v3-prospecting-contacts-response.ts)</code>
- **OnError**: throws <code>[Prospecting.ProspectingContactsError](src/resources/prospecting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prospecting.prospectingContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ProspectingContactsResponse, Prospecting.ProspectingContactsError&gt;</code>, with `result.value` of type <code>[V3ProspectingContactsResponse](src/models/v3-prospecting-contacts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProspectingSearchEnrich

> Source: [ProspectingSearchEnrich](src/resources/prospecting-search-enrich.ts)

<details>
<summary><code>enrichProspectingCompanies(request: ProspectingSearchEnrich.EnrichProspectingCompaniesRequest, options?: RequestOptions): ApiPromise&lt;CompanyEnrichResponse, ProspectingSearchEnrich.EnrichProspectingCompaniesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrich companies from search results. This is step 3 of the prospecting process.

*Endpoint*: **(POST) https://api.lusha.com/prospecting/company/enrich**

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prospectingSearchEnrich.enrichProspectingCompanies({
    body: { requestId: "some example string", companiesIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type CompanyEnrichResponse
} catch (err) {
  // TODO: Handle 'err' of type ProspectingSearchEnrich.EnrichProspectingCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prospectingSearchEnrich
  .enrichProspectingCompanies({
    body: { requestId: "some example string", companiesIds: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyEnrichResponse
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
| <code>body</code> | <code>[CompanyEnrichRequest](src/models/company-enrich-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prospectingSearchEnrich.enrichProspectingCompanies(request)`

- **OnSuccess**: <code>[CompanyEnrichResponse](src/models/company-enrich-response.ts)</code>
- **OnError**: throws <code>[ProspectingSearchEnrich.EnrichProspectingCompaniesError](src/resources/prospecting-search-enrich.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prospectingSearchEnrich.enrichProspectingCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyEnrichResponse, ProspectingSearchEnrich.EnrichProspectingCompaniesError&gt;</code>, with `result.value` of type <code>[CompanyEnrichResponse](src/models/company-enrich-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enrichProspectingContacts(request: ProspectingSearchEnrich.EnrichProspectingContactsRequest, options?: RequestOptions): ApiPromise&lt;ContactEnrichResponse, ProspectingSearchEnrich.EnrichProspectingContactsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prospectingSearchEnrich.enrichProspectingContacts({
    body: {
      requestId: "b6effae6-35b8-493d-91aa-7d3b1b7c7dc7",
      contactIds: ["37b4c536-eaec-11ef-ad4b-a75f8e9e1484"],
    },
  });
  // TODO: Handle 'response' of type ContactEnrichResponse
} catch (err) {
  // TODO: Handle 'err' of type ProspectingSearchEnrich.EnrichProspectingContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prospectingSearchEnrich
  .enrichProspectingContacts({
    body: {
      requestId: "b6effae6-35b8-493d-91aa-7d3b1b7c7dc7",
      contactIds: ["37b4c536-eaec-11ef-ad4b-a75f8e9e1484"],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactEnrichResponse
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
| <code>body</code> | <code>[ContactEnrichRequest](src/models/contact-enrich-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prospectingSearchEnrich.enrichProspectingContacts(request)`

- **OnSuccess**: <code>[ContactEnrichResponse](src/models/contact-enrich-response.ts)</code>
- **OnError**: throws <code>[ProspectingSearchEnrich.EnrichProspectingContactsError](src/resources/prospecting-search-enrich.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prospectingSearchEnrich.enrichProspectingContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactEnrichResponse, ProspectingSearchEnrich.EnrichProspectingContactsError&gt;</code>, with `result.value` of type <code>[ContactEnrichResponse](src/models/contact-enrich-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchProspectingCompanies(request: ProspectingSearchEnrich.SearchProspectingCompaniesRequest, options?: RequestOptions): ApiPromise&lt;CompanySearchResponse, ProspectingSearchEnrich.SearchProspectingCompaniesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prospectingSearchEnrich.searchProspectingCompanies({
    body: { pages: { page: 0, size: 20 }, filters: { companies: { include: {} } } },
  });
  // TODO: Handle 'response' of type CompanySearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ProspectingSearchEnrich.SearchProspectingCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prospectingSearchEnrich
  .searchProspectingCompanies({
    body: { pages: { page: 0, size: 20 }, filters: { companies: { include: {} } } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanySearchResponse
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
| <code>body</code> | <code>[CompanySearchRequest](src/models/company-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prospectingSearchEnrich.searchProspectingCompanies(request)`

- **OnSuccess**: <code>[CompanySearchResponse](src/models/company-search-response.ts)</code>
- **OnError**: throws <code>[ProspectingSearchEnrich.SearchProspectingCompaniesError](src/resources/prospecting-search-enrich.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prospectingSearchEnrich.searchProspectingCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanySearchResponse, ProspectingSearchEnrich.SearchProspectingCompaniesError&gt;</code>, with `result.value` of type <code>[CompanySearchResponse](src/models/company-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchProspectingContacts(request: ProspectingSearchEnrich.SearchProspectingContactsRequest, options?: RequestOptions): ApiPromise&lt;ContactSearchResponse, ProspectingSearchEnrich.SearchProspectingContactsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.prospectingSearchEnrich.searchProspectingContacts({
    body: { pages: { page: 0, size: 10 }, filters: { contacts: { include: {} } } },
  });
  // TODO: Handle 'response' of type ContactSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ProspectingSearchEnrich.SearchProspectingContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.prospectingSearchEnrich
  .searchProspectingContacts({
    body: { pages: { page: 0, size: 10 }, filters: { contacts: { include: {} } } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactSearchResponse
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
| <code>body</code> | <code>[ContactSearchRequest](src/models/contact-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.prospectingSearchEnrich.searchProspectingContacts(request)`

- **OnSuccess**: <code>[ContactSearchResponse](src/models/contact-search-response.ts)</code>
- **OnError**: throws <code>[ProspectingSearchEnrich.SearchProspectingContactsError](src/resources/prospecting-search-enrich.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.prospectingSearchEnrich.searchProspectingContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactSearchResponse, ProspectingSearchEnrich.SearchProspectingContactsError&gt;</code>, with `result.value` of type <code>[ContactSearchResponse](src/models/contact-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>searchCompanies(request: Search.SearchCompaniesRequest, options?: RequestOptions): ApiPromise&lt;V3CompaniesSearchResponse, Search.SearchCompaniesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchCompanies({
    body: {
      companies: [
        { clientReferenceId: "comp-ref-1", name: "Lusha" },
        { clientReferenceId: "comp-ref-2", domain: "salesforce.com" },
        { clientReferenceId: "comp-ref-3", id: "16303253" },
      ],
      options: { includePartialProfiles: true },
    },
  });
  // TODO: Handle 'response' of type V3CompaniesSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search
  .searchCompanies({
    body: {
      companies: [
        { clientReferenceId: "comp-ref-1", name: "Lusha" },
        { clientReferenceId: "comp-ref-2", domain: "salesforce.com" },
        { clientReferenceId: "comp-ref-3", id: "16303253" },
      ],
      options: { includePartialProfiles: true },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3CompaniesSearchResponse
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
| <code>body</code> | <code>[V3CompaniesSearchRequest](src/models/v3-companies-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchCompanies(request)`

- **OnSuccess**: <code>[V3CompaniesSearchResponse](src/models/v3-companies-search-response.ts)</code>
- **OnError**: throws <code>[Search.SearchCompaniesError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3CompaniesSearchResponse, Search.SearchCompaniesError&gt;</code>, with `result.value` of type <code>[V3CompaniesSearchResponse](src/models/v3-companies-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchContacts(request: Search.SearchContactsRequest, options?: RequestOptions): ApiPromise&lt;V3ContactsSearchResponse, Search.SearchContactsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchContacts({
    body: {
      contacts: [
        {
          clientReferenceId: "my-ref-1",
          firstName: "Orit",
          lastName: "Shilvock",
          companyName: "Lusha",
          companyDomain: "lusha.com",
        },
        { clientReferenceId: "my-ref-2", linkedinUrl: "https://www.linkedin.com/in/shmulikwillinger" },
        { clientReferenceId: "my-ref-3", email: "gal.ashkelon@lusha.com" },
        { clientReferenceId: "my-ref-4", id: "12345" },
      ],
      options: { includePartialProfiles: true },
    },
  });
  // TODO: Handle 'response' of type V3ContactsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search
  .searchContacts({
    body: {
      contacts: [
        {
          clientReferenceId: "my-ref-1",
          firstName: "Orit",
          lastName: "Shilvock",
          companyName: "Lusha",
          companyDomain: "lusha.com",
        },
        { clientReferenceId: "my-ref-2", linkedinUrl: "https://www.linkedin.com/in/shmulikwillinger" },
        { clientReferenceId: "my-ref-3", email: "gal.ashkelon@lusha.com" },
        { clientReferenceId: "my-ref-4", id: "12345" },
      ],
      options: { includePartialProfiles: true },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ContactsSearchResponse
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
| <code>body</code> | <code>[V3ContactsSearchRequest](src/models/v3-contacts-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchContacts(request)`

- **OnSuccess**: <code>[V3ContactsSearchResponse](src/models/v3-contacts-search-response.ts)</code>
- **OnError**: throws <code>[Search.SearchContactsError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ContactsSearchResponse, Search.SearchContactsError&gt;</code>, with `result.value` of type <code>[V3ContactsSearchResponse](src/models/v3-contacts-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SearchEnrich

> Source: [SearchEnrich](src/resources/search-enrich.ts)

<details>
<summary><code>searchAndEnrichCompanies(request: SearchEnrich.SearchAndEnrichCompaniesRequest, options?: RequestOptions): ApiPromise&lt;V3CompaniesSearchAndEnrichResponse, SearchEnrich.SearchAndEnrichCompaniesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchEnrich.searchAndEnrichCompanies({
    body: {
      companies: [
        { clientReferenceId: "comp-ref-1", name: "Lusha" },
        { clientReferenceId: "comp-ref-2", domain: "salesforce.com" },
      ],
      options: { includePartialProfiles: true },
    },
  });
  // TODO: Handle 'response' of type V3CompaniesSearchAndEnrichResponse
} catch (err) {
  // TODO: Handle 'err' of type SearchEnrich.SearchAndEnrichCompaniesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchEnrich
  .searchAndEnrichCompanies({
    body: {
      companies: [
        { clientReferenceId: "comp-ref-1", name: "Lusha" },
        { clientReferenceId: "comp-ref-2", domain: "salesforce.com" },
      ],
      options: { includePartialProfiles: true },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3CompaniesSearchAndEnrichResponse
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
| <code>body</code> | <code>[V3CompaniesSearchAndEnrichRequest](src/models/v3-companies-search-and-enrich-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchEnrich.searchAndEnrichCompanies(request)`

- **OnSuccess**: <code>[V3CompaniesSearchAndEnrichResponse](src/models/v3-companies-search-and-enrich-response.ts)</code>
- **OnError**: throws <code>[SearchEnrich.SearchAndEnrichCompaniesError](src/resources/search-enrich.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchEnrich.searchAndEnrichCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3CompaniesSearchAndEnrichResponse, SearchEnrich.SearchAndEnrichCompaniesError&gt;</code>, with `result.value` of type <code>[V3CompaniesSearchAndEnrichResponse](src/models/v3-companies-search-and-enrich-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchAndEnrichContacts(request: SearchEnrich.SearchAndEnrichContactsRequest, options?: RequestOptions): ApiPromise&lt;V3ContactsSearchAndEnrichResponse, SearchEnrich.SearchAndEnrichContactsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchEnrich.searchAndEnrichContacts({
    body: {
      contacts: [
        {
          clientReferenceId: "my-ref-1",
          firstName: "Orit",
          lastName: "Shilvock",
          companyName: "Lusha",
          companyDomain: "lusha.com",
        },
        { clientReferenceId: "my-ref-2", linkedinUrl: "https://www.linkedin.com/in/shmulikwillinger" },
      ],
      reveal: [Reveal.Emails, Reveal.Phones],
      options: { includePartialProfiles: true },
    },
  });
  // TODO: Handle 'response' of type V3ContactsSearchAndEnrichResponse
} catch (err) {
  // TODO: Handle 'err' of type SearchEnrich.SearchAndEnrichContactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchEnrich
  .searchAndEnrichContacts({
    body: {
      contacts: [
        {
          clientReferenceId: "my-ref-1",
          firstName: "Orit",
          lastName: "Shilvock",
          companyName: "Lusha",
          companyDomain: "lusha.com",
        },
        { clientReferenceId: "my-ref-2", linkedinUrl: "https://www.linkedin.com/in/shmulikwillinger" },
      ],
      reveal: [Reveal.Emails, Reveal.Phones],
      options: { includePartialProfiles: true },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ContactsSearchAndEnrichResponse
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
| <code>body</code> | <code>[V3ContactsSearchAndEnrichRequest](src/models/v3-contacts-search-and-enrich-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchEnrich.searchAndEnrichContacts(request)`

- **OnSuccess**: <code>[V3ContactsSearchAndEnrichResponse](src/models/v3-contacts-search-and-enrich-response.ts)</code>
- **OnError**: throws <code>[SearchEnrich.SearchAndEnrichContactsError](src/resources/search-enrich.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchEnrich.searchAndEnrichContacts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ContactsSearchAndEnrichResponse, SearchEnrich.SearchAndEnrichContactsError&gt;</code>, with `result.value` of type <code>[V3ContactsSearchAndEnrichResponse](src/models/v3-contacts-search-and-enrich-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SignalsApi

> Source: [SignalsApi](src/resources/signals-api.ts)

<details>
<summary><code>getCompanySignalFilterValues(request: SignalsApi.GetCompanySignalFilterValuesRequest, options?: RequestOptions): ApiPromise&lt;FilterValuesResponse, SignalsApi.GetCompanySignalFilterValuesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getCompanySignalFilterValues({
    filterType: FilterTypeLushaSignalsApi.NewsEventTypes,
  });
  // TODO: Handle 'response' of type FilterValuesResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetCompanySignalFilterValuesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi
  .getCompanySignalFilterValues({ filterType: FilterTypeLushaSignalsApi.NewsEventTypes })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilterValuesResponse
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
| <code>filterType</code> | <code>[FilterTypeLushaSignalsApi](src/models/filter-type-lusha-signals-api.ts)</code> | - |
| <code>query?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getCompanySignalFilterValues(request)`

- **OnSuccess**: <code>[FilterValuesResponse](src/models/filter-values-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetCompanySignalFilterValuesError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getCompanySignalFilterValues(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilterValuesResponse, SignalsApi.GetCompanySignalFilterValuesError&gt;</code>, with `result.value` of type <code>[FilterValuesResponse](src/models/filter-values-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanySignalFilters(options?: RequestOptions): ApiPromise&lt;FilterTypesDiscoveryResponse, SignalsApi.GetCompanySignalFiltersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all available filter types for company signals and whether each requires a search query.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getCompanySignalFilters();
  // TODO: Handle 'response' of type FilterTypesDiscoveryResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetCompanySignalFiltersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi.getCompanySignalFilters().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilterTypesDiscoveryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getCompanySignalFilters()`

- **OnSuccess**: <code>[FilterTypesDiscoveryResponse](src/models/filter-types-discovery-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetCompanySignalFiltersError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getCompanySignalFilters().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilterTypesDiscoveryResponse, SignalsApi.GetCompanySignalFiltersError&gt;</code>, with `result.value` of type <code>[FilterTypesDiscoveryResponse](src/models/filter-types-discovery-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanySignalScores(request: SignalsApi.GetCompanySignalScoresRequest, options?: RequestOptions): ApiPromise&lt;V3SignalScoreCompaniesResponse, SignalsApi.GetCompanySignalScoresError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getCompanySignalScores({
    body: {
      companies: [
        { clientReferenceId: "ref-1", id: "v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345" },
        { clientReferenceId: "ref-2", domain: "www.microsoft.com" },
        { clientReferenceId: "ref-3", name: "Apple" },
      ],
    },
  });
  // TODO: Handle 'response' of type V3SignalScoreCompaniesResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetCompanySignalScoresError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi
  .getCompanySignalScores({
    body: {
      companies: [
        { clientReferenceId: "ref-1", id: "v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345" },
        { clientReferenceId: "ref-2", domain: "www.microsoft.com" },
        { clientReferenceId: "ref-3", name: "Apple" },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3SignalScoreCompaniesResponse
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
| <code>body</code> | <code>[V3SignalScoreCompaniesRequest](src/models/v3-signal-score-companies-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getCompanySignalScores(request)`

- **OnSuccess**: <code>[V3SignalScoreCompaniesResponse](src/models/v3-signal-score-companies-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetCompanySignalScoresError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getCompanySignalScores(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3SignalScoreCompaniesResponse, SignalsApi.GetCompanySignalScoresError&gt;</code>, with `result.value` of type <code>[V3SignalScoreCompaniesResponse](src/models/v3-signal-score-companies-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanySignalTypes(options?: RequestOptions): ApiPromise&lt;CompanySignalTypesResponse, SignalsApi.GetCompanySignalTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full list of supported signal types for companies.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getCompanySignalTypes();
  // TODO: Handle 'response' of type CompanySignalTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetCompanySignalTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi.getCompanySignalTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanySignalTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getCompanySignalTypes()`

- **OnSuccess**: <code>[CompanySignalTypesResponse](src/models/company-signal-types-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetCompanySignalTypesError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getCompanySignalTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanySignalTypesResponse, SignalsApi.GetCompanySignalTypesError&gt;</code>, with `result.value` of type <code>[CompanySignalTypesResponse](src/models/company-signal-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanySignals(request: SignalsApi.GetCompanySignalsRequest, options?: RequestOptions): ApiPromise&lt;V3CompanySignalsResponse, SignalsApi.GetCompanySignalsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getCompanySignals({
    body: {
      ids: ["16303253"],
      signalTypes: [SignalType1.AllSignals],
      startDate: "2025-01-01",
      maxResultsPerSignal: 10,
    },
  });
  // TODO: Handle 'response' of type V3CompanySignalsResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetCompanySignalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi
  .getCompanySignals({
    body: {
      ids: ["16303253"],
      signalTypes: [SignalType1.AllSignals],
      startDate: "2025-01-01",
      maxResultsPerSignal: 10,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3CompanySignalsResponse
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
| <code>body</code> | <code>[V3CompanySignalsRequest](src/models/v3-company-signals-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getCompanySignals(request)`

- **OnSuccess**: <code>[V3CompanySignalsResponse](src/models/v3-company-signals-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetCompanySignalsError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getCompanySignals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3CompanySignalsResponse, SignalsApi.GetCompanySignalsError&gt;</code>, with `result.value` of type <code>[V3CompanySignalsResponse](src/models/v3-company-signals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCompanySignalsById(request: SignalsApi.GetCompanySignalsByIdRequest, options?: RequestOptions): ApiPromise&lt;CompanySignalsByIdResponse, SignalsApi.GetCompanySignalsByIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getCompanySignalsById({
    body: {
      companyIds: [3416],
      signals: [Signal1.WebsiteTrafficIncrease],
      startDate: "2025-01-01",
      maxResultsPerSignal: 10,
    },
  });
  // TODO: Handle 'response' of type CompanySignalsByIdResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetCompanySignalsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi
  .getCompanySignalsById({
    body: {
      companyIds: [3416],
      signals: [Signal1.WebsiteTrafficIncrease],
      startDate: "2025-01-01",
      maxResultsPerSignal: 10,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanySignalsByIdResponse
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
| <code>body</code> | <code>[CompanySignalsByIdRequest](src/models/company-signals-by-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getCompanySignalsById(request)`

- **OnSuccess**: <code>[CompanySignalsByIdResponse](src/models/company-signals-by-id-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetCompanySignalsByIdError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getCompanySignalsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanySignalsByIdResponse, SignalsApi.GetCompanySignalsByIdError&gt;</code>, with `result.value` of type <code>[CompanySignalsByIdResponse](src/models/company-signals-by-id-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactSignalScores(request: SignalsApi.GetContactSignalScoresRequest, options?: RequestOptions): ApiPromise&lt;V3SignalScoreContactsResponse, SignalsApi.GetContactSignalScoresError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getContactSignalScores({
    body: {
      contacts: [
        { clientReferenceId: "ref-1", id: "v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345" },
        { clientReferenceId: "ref-2", linkedinUrl: "https://linkedin.com/in/johndoe" },
        { clientReferenceId: "ref-3", firstName: "Jane", lastName: "Doe", companyDomain: "acme.com" },
      ],
    },
  });
  // TODO: Handle 'response' of type V3SignalScoreContactsResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetContactSignalScoresError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi
  .getContactSignalScores({
    body: {
      contacts: [
        { clientReferenceId: "ref-1", id: "v1.AbCdEfGhIjKlMnOpQrStUvWxYz012345" },
        { clientReferenceId: "ref-2", linkedinUrl: "https://linkedin.com/in/johndoe" },
        { clientReferenceId: "ref-3", firstName: "Jane", lastName: "Doe", companyDomain: "acme.com" },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3SignalScoreContactsResponse
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
| <code>body</code> | <code>[V3SignalScoreContactsRequest](src/models/v3-signal-score-contacts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getContactSignalScores(request)`

- **OnSuccess**: <code>[V3SignalScoreContactsResponse](src/models/v3-signal-score-contacts-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetContactSignalScoresError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getContactSignalScores(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3SignalScoreContactsResponse, SignalsApi.GetContactSignalScoresError&gt;</code>, with `result.value` of type <code>[V3SignalScoreContactsResponse](src/models/v3-signal-score-contacts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactSignalTypes(options?: RequestOptions): ApiPromise&lt;ContactSignalTypesResponse, SignalsApi.GetContactSignalTypesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full list of supported signal types for contacts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getContactSignalTypes();
  // TODO: Handle 'response' of type ContactSignalTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetContactSignalTypesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi.getContactSignalTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactSignalTypesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getContactSignalTypes()`

- **OnSuccess**: <code>[ContactSignalTypesResponse](src/models/contact-signal-types-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetContactSignalTypesError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getContactSignalTypes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactSignalTypesResponse, SignalsApi.GetContactSignalTypesError&gt;</code>, with `result.value` of type <code>[ContactSignalTypesResponse](src/models/contact-signal-types-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactSignals(request: SignalsApi.GetContactSignalsRequest, options?: RequestOptions): ApiPromise&lt;V3ContactSignalsResponse, SignalsApi.GetContactSignalsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getContactSignals({
    body: {
      ids: ["4389064624", "4389064654"],
      signalTypes: [SignalType.AllSignals],
      startDate: "2025-01-01",
    },
  });
  // TODO: Handle 'response' of type V3ContactSignalsResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetContactSignalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi
  .getContactSignals({
    body: {
      ids: ["4389064624", "4389064654"],
      signalTypes: [SignalType.AllSignals],
      startDate: "2025-01-01",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V3ContactSignalsResponse
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
| <code>body</code> | <code>[V3ContactSignalsRequest](src/models/v3-contact-signals-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getContactSignals(request)`

- **OnSuccess**: <code>[V3ContactSignalsResponse](src/models/v3-contact-signals-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetContactSignalsError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getContactSignals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V3ContactSignalsResponse, SignalsApi.GetContactSignalsError&gt;</code>, with `result.value` of type <code>[V3ContactSignalsResponse](src/models/v3-contact-signals-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContactSignalsById(request: SignalsApi.GetContactSignalsByIdRequest, options?: RequestOptions): ApiPromise&lt;ContactSignalsByIdResponse, SignalsApi.GetContactSignalsByIdError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getContactSignalsById({
    body: {
      contactIds: [115889],
      signals: [Signal.Promotion, Signal.CompanyChange],
      startDate: "2025-01-01",
      maxResultsPerSignal: 5,
    },
  });
  // TODO: Handle 'response' of type ContactSignalsByIdResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetContactSignalsByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi
  .getContactSignalsById({
    body: {
      contactIds: [115889],
      signals: [Signal.Promotion, Signal.CompanyChange],
      startDate: "2025-01-01",
      maxResultsPerSignal: 5,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactSignalsByIdResponse
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
| <code>body</code> | <code>[ContactSignalsByIdRequest](src/models/contact-signals-by-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getContactSignalsById(request)`

- **OnSuccess**: <code>[ContactSignalsByIdResponse](src/models/contact-signals-by-id-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetContactSignalsByIdError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getContactSignalsById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactSignalsByIdResponse, SignalsApi.GetContactSignalsByIdError&gt;</code>, with `result.value` of type <code>[ContactSignalsByIdResponse](src/models/contact-signals-by-id-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSignalOptions(request: SignalsApi.GetSignalOptionsRequest, options?: RequestOptions): ApiPromise&lt;ApiSignalsFiltersResponse, SignalsApi.GetSignalOptionsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.getSignalOptions({ objectType: ObjectType.Contact });
  // TODO: Handle 'response' of type ApiSignalsFiltersResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.GetSignalOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi.getSignalOptions({ objectType: ObjectType.Contact }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiSignalsFiltersResponse
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
| <code>objectType</code> | <code>[ObjectType](src/models/object-type.ts)</code> | The type of object to get signal options for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.getSignalOptions(request)`

- **OnSuccess**: <code>[ApiSignalsFiltersResponse](src/models/api-signals-filters-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.GetSignalOptionsError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.getSignalOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiSignalsFiltersResponse, SignalsApi.GetSignalOptionsError&gt;</code>, with `result.value` of type <code>[ApiSignalsFiltersResponse](src/models/api-signals-filters-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCompanySignals(request: SignalsApi.SearchCompanySignalsRequest, options?: RequestOptions): ApiPromise&lt;CompanySignalsByIdResponse, SignalsApi.SearchCompanySignalsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.searchCompanySignals({
    body: {
      companies: [{ id: "12344321", domain: "lusha.com" }],
      signals: [Signal1.ItSpendIncrease],
      startDate: "2025-01-01",
      maxResultsPerSignal: 10,
    },
  });
  // TODO: Handle 'response' of type CompanySignalsByIdResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.SearchCompanySignalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi
  .searchCompanySignals({
    body: {
      companies: [{ id: "12344321", domain: "lusha.com" }],
      signals: [Signal1.ItSpendIncrease],
      startDate: "2025-01-01",
      maxResultsPerSignal: 10,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanySignalsByIdResponse
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
| <code>body</code> | <code>[CompanySignalsSearchRequest](src/models/company-signals-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.searchCompanySignals(request)`

- **OnSuccess**: <code>[CompanySignalsByIdResponse](src/models/company-signals-by-id-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.SearchCompanySignalsError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.searchCompanySignals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanySignalsByIdResponse, SignalsApi.SearchCompanySignalsError&gt;</code>, with `result.value` of type <code>[CompanySignalsByIdResponse](src/models/company-signals-by-id-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchContactSignals(request: SignalsApi.SearchContactSignalsRequest, options?: RequestOptions): ApiPromise&lt;ContactSignalsSearchResponse, SignalsApi.SearchContactSignalsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalsApi.searchContactSignals({
    body: {
      contacts: [{ id: "123321", socialLink: "https://www.linkedin.com/in/ron-nabet" }],
      signals: [Signal.Promotion, Signal.CompanyChange],
      startDate: "2025-01-01",
      maxResultsPerSignal: 5,
    },
  });
  // TODO: Handle 'response' of type ContactSignalsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type SignalsApi.SearchContactSignalsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalsApi
  .searchContactSignals({
    body: {
      contacts: [{ id: "123321", socialLink: "https://www.linkedin.com/in/ron-nabet" }],
      signals: [Signal.Promotion, Signal.CompanyChange],
      startDate: "2025-01-01",
      maxResultsPerSignal: 5,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContactSignalsSearchResponse
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
| <code>body</code> | <code>[ContactSignalsSearchRequest](src/models/contact-signals-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalsApi.searchContactSignals(request)`

- **OnSuccess**: <code>[ContactSignalsSearchResponse](src/models/contact-signals-search-response.ts)</code>
- **OnError**: throws <code>[SignalsApi.SearchContactSignalsError](src/resources/signals-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalsApi.searchContactSignals(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContactSignalsSearchResponse, SignalsApi.SearchContactSignalsError&gt;</code>, with `result.value` of type <code>[ContactSignalsSearchResponse](src/models/contact-signals-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>createOptOutSubscription(request: Webhooks.CreateOptOutSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;OptOutSubscriptionResponse, Webhooks.CreateOptOutSubscriptionError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createOptOutSubscription({
    body: { url: "https://example.com/webhook", name: "Account opt-out webhook" },
  });
  // TODO: Handle 'response' of type OptOutSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.CreateOptOutSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .createOptOutSubscription({ body: { url: "https://example.com/webhook", name: "Account opt-out webhook" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OptOutSubscriptionResponse
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
| <code>body</code> | <code>[CreateOptOutSubscriptionRequest](src/models/create-opt-out-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createOptOutSubscription(request)`

- **OnSuccess**: <code>[OptOutSubscriptionResponse](src/models/opt-out-subscription-response.ts)</code>
- **OnError**: throws <code>[Webhooks.CreateOptOutSubscriptionError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.createOptOutSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OptOutSubscriptionResponse, Webhooks.CreateOptOutSubscriptionError&gt;</code>, with `result.value` of type <code>[OptOutSubscriptionResponse](src/models/opt-out-subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubscription(request: Webhooks.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateSubscriptionResponse, Webhooks.CreateSubscriptionError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createSubscription({
    body: {
      defaults: {
        url: "https://example.com/webhooks/lusha",
        entityType: EntityType2.Contact,
        signalTypes: ["promotion", "companyChange"],
      },
      subscriptions: [{ entityId: "123456", name: "My Test Webhook" }],
    },
  });
  // TODO: Handle 'response' of type CreateSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.CreateSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .createSubscription({
    body: {
      defaults: {
        url: "https://example.com/webhooks/lusha",
        entityType: EntityType2.Contact,
        signalTypes: ["promotion", "companyChange"],
      },
      subscriptions: [{ entityId: "123456", name: "My Test Webhook" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSubscriptionResponse
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
| <code>body</code> | <code>[CreateSubscriptionRequest](src/models/create-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createSubscription(request)`

- **OnSuccess**: <code>[CreateSubscriptionResponse](src/models/create-subscription-response.ts)</code>
- **OnError**: throws <code>[Webhooks.CreateSubscriptionError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.createSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSubscriptionResponse, Webhooks.CreateSubscriptionError&gt;</code>, with `result.value` of type <code>[CreateSubscriptionResponse](src/models/create-subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscriptions(request: Webhooks.DeleteSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;DeleteSubscriptionResponse, Webhooks.DeleteSubscriptionsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.deleteSubscriptions({ body: { ids: ["sub-123"] } });
  // TODO: Handle 'response' of type DeleteSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.DeleteSubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.deleteSubscriptions({ body: { ids: ["sub-123"] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteSubscriptionResponse
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
| <code>body</code> | <code>[ApiSubscriptionsDeleteRequest](src/models/api-subscriptions-delete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteSubscriptions(request)`

- **OnSuccess**: <code>[DeleteSubscriptionResponse](src/models/delete-subscription-response.ts)</code>
- **OnError**: throws <code>[Webhooks.DeleteSubscriptionsError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.deleteSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteSubscriptionResponse, Webhooks.DeleteSubscriptionsError&gt;</code>, with `result.value` of type <code>[DeleteSubscriptionResponse](src/models/delete-subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountSecret(options?: RequestOptions): ApiPromise&lt;ApiAccountSecretResponse, Webhooks.GetAccountSecretError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the current account webhook secret.

*Endpoint*: **(GET) https://api.lusha.com/api/account/secret**

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getAccountSecret();
  // TODO: Handle 'response' of type ApiAccountSecretResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetAccountSecretError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.getAccountSecret().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiAccountSecretResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getAccountSecret()`

- **OnSuccess**: <code>[ApiAccountSecretResponse](src/models/api-account-secret-response.ts)</code>
- **OnError**: throws <code>[Webhooks.GetAccountSecretError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getAccountSecret().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiAccountSecretResponse, Webhooks.GetAccountSecretError&gt;</code>, with `result.value` of type <code>[ApiAccountSecretResponse](src/models/api-account-secret-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAuditLogStats(request?: Webhooks.GetAuditLogStatsRequest, options?: RequestOptions): ApiPromise&lt;AuditLogStatsResponse, Webhooks.GetAuditLogStatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get delivery statistics for your account.

*Endpoint*: **(GET) https://api.lusha.com/api/audit-logs/stats**

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getAuditLogStats({ subscriptionId: "sub-123" });
  // TODO: Handle 'response' of type AuditLogStatsResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetAuditLogStatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.getAuditLogStats({ subscriptionId: "sub-123" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditLogStatsResponse
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
| <code>subscriptionId?</code> | <code>string</code> | Filter statistics by subscription ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getAuditLogStats(request)`

- **OnSuccess**: <code>[AuditLogStatsResponse](src/models/audit-log-stats-response.ts)</code>
- **OnError**: throws <code>[Webhooks.GetAuditLogStatsError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getAuditLogStats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditLogStatsResponse, Webhooks.GetAuditLogStatsError&gt;</code>, with `result.value` of type <code>[AuditLogStatsResponse](src/models/audit-log-stats-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAuditLogs(request?: Webhooks.GetAuditLogsRequest, options?: RequestOptions): ApiPromise&lt;AuditLogsResponse, Webhooks.GetAuditLogsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getAuditLogs({
    subscriptionId: "507f1f77bcf86cd799439011",
    status: StatusLushaWebhooksApi.Success,
    limit: 50,
    offset: 0,
  });
  // TODO: Handle 'response' of type AuditLogsResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetAuditLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .getAuditLogs({
    subscriptionId: "507f1f77bcf86cd799439011",
    status: StatusLushaWebhooksApi.Success,
    limit: 50,
    offset: 0,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditLogsResponse
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
| <code>subscriptionId?</code> | <code>string</code> | Filter by subscription ID |
| <code>status?</code> | <code>[StatusLushaWebhooksApi](src/models/status-lusha-webhooks-api.ts)</code> | Filter by delivery status |
| <code>limit?</code> | <code>number</code> | Maximum number of results (1-100)<br>**Default**: 50 |
| <code>offset?</code> | <code>number</code> | Number of results to skip<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getAuditLogs(request)`

- **OnSuccess**: <code>[AuditLogsResponse](src/models/audit-logs-response.ts)</code>
- **OnError**: throws <code>[Webhooks.GetAuditLogsError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getAuditLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditLogsResponse, Webhooks.GetAuditLogsError&gt;</code>, with `result.value` of type <code>[AuditLogsResponse](src/models/audit-logs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSubscriptionById(request: Webhooks.GetSubscriptionByIdRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionWithoutSecret, Webhooks.GetSubscriptionByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single webhook subscription by ID.

*Endpoint*: **(GET) https://api.lusha.com/api/subscriptions/{id}**

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.getSubscriptionById({ id: "507f1f77bcf86cd799439011" });
  // TODO: Handle 'response' of type SubscriptionWithoutSecret
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.GetSubscriptionByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.getSubscriptionById({ id: "507f1f77bcf86cd799439011" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionWithoutSecret
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
| <code>id</code> | <code>string</code> | Subscription ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.getSubscriptionById(request)`

- **OnSuccess**: <code>[SubscriptionWithoutSecret](src/models/subscription-without-secret.ts)</code>
- **OnError**: throws <code>[Webhooks.GetSubscriptionByIdError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.getSubscriptionById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionWithoutSecret, Webhooks.GetSubscriptionByIdError&gt;</code>, with `result.value` of type <code>[SubscriptionWithoutSecret](src/models/subscription-without-secret.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptions(request?: Webhooks.ListSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;SubscriptionListResponse, Webhooks.ListSubscriptionsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listSubscriptions({ limit: 10, offset: 0 });
  // TODO: Handle 'response' of type SubscriptionListResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListSubscriptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listSubscriptions({ limit: 10, offset: 0 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionListResponse
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
| <code>limit?</code> | <code>number</code> | Maximum number of results (1-100)<br>**Default**: 10 |
| <code>offset?</code> | <code>number</code> | Number of results to skip<br>**Default**: 0 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listSubscriptions(request)`

- **OnSuccess**: <code>[SubscriptionListResponse](src/models/subscription-list-response.ts)</code>
- **OnError**: throws <code>[Webhooks.ListSubscriptionsError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionListResponse, Webhooks.ListSubscriptionsError&gt;</code>, with `result.value` of type <code>[SubscriptionListResponse](src/models/subscription-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>regenerateAccountSecret(options?: RequestOptions): ApiPromise&lt;ApiAccountSecretRegenerateResponse, Webhooks.RegenerateAccountSecretError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.regenerateAccountSecret();
  // TODO: Handle 'response' of type ApiAccountSecretRegenerateResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.RegenerateAccountSecretError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.regenerateAccountSecret().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiAccountSecretRegenerateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.regenerateAccountSecret()`

- **OnSuccess**: <code>[ApiAccountSecretRegenerateResponse](src/models/api-account-secret-regenerate-response.ts)</code>
- **OnError**: throws <code>[Webhooks.RegenerateAccountSecretError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.regenerateAccountSecret().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiAccountSecretRegenerateResponse, Webhooks.RegenerateAccountSecretError&gt;</code>, with `result.value` of type <code>[ApiAccountSecretRegenerateResponse](src/models/api-account-secret-regenerate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testSubscription(request: Webhooks.TestSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;TestSubscriptionResponse, Webhooks.TestSubscriptionError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.testSubscription({
    id: "507f1f77bcf86cd799439011",
    mode: Mode.Full,
  });
  // TODO: Handle 'response' of type TestSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.TestSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .testSubscription({ id: "507f1f77bcf86cd799439011", mode: Mode.Full })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestSubscriptionResponse
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
| <code>id</code> | <code>string</code> | Subscription ID |
| <code>mode?</code> | <code>[Mode](src/models/mode.ts)</code> | Test mode<br>**Default**: "full" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.testSubscription(request)`

- **OnSuccess**: <code>[TestSubscriptionResponse](src/models/test-subscription-response.ts)</code>
- **OnError**: throws <code>[Webhooks.TestSubscriptionError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.testSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestSubscriptionResponse, Webhooks.TestSubscriptionError&gt;</code>, with `result.value` of type <code>[TestSubscriptionResponse](src/models/test-subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscription(request: Webhooks.UpdateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;SubscriptionResponse, Webhooks.UpdateSubscriptionError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.updateSubscription({
    id: "507f1f77bcf86cd799439011",
    body: { isActive: false },
  });
  // TODO: Handle 'response' of type SubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.UpdateSubscriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .updateSubscription({ id: "507f1f77bcf86cd799439011", body: { isActive: false } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubscriptionResponse
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
| <code>id</code> | <code>string</code> | Subscription ID |
| <code>body</code> | <code>[UpdateSubscriptionRequest](src/models/update-subscription-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.updateSubscription(request)`

- **OnSuccess**: <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: throws <code>[Webhooks.UpdateSubscriptionError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.updateSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubscriptionResponse, Webhooks.UpdateSubscriptionError&gt;</code>, with `result.value` of type <code>[SubscriptionResponse](src/models/subscription-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WebsiteVisits

> Source: [WebsiteVisits](src/resources/website-visits.ts)

<details>
<summary><code>getWebsiteVisits(request: WebsiteVisits.GetWebsiteVisitsRequest, options?: RequestOptions): ApiPromise&lt;WebsiteVisitsResponse, WebsiteVisits.GetWebsiteVisitsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.websiteVisits.getWebsiteVisits({
    body: {
      domains: ["lusha.com", "google.com"],
      startDate: "2026-01-01",
      endDate: "2026-03-18",
      pagination: { size: 25, page: 0 },
      sort: { by: "score", order: Order.Desc },
      filters: { scoreBands: [ScoreBand1.Hot, ScoreBand1.Warm], score: { min: 50 } },
    },
  });
  // TODO: Handle 'response' of type WebsiteVisitsResponse
} catch (err) {
  // TODO: Handle 'err' of type WebsiteVisits.GetWebsiteVisitsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.websiteVisits
  .getWebsiteVisits({
    body: {
      domains: ["lusha.com", "google.com"],
      startDate: "2026-01-01",
      endDate: "2026-03-18",
      pagination: { size: 25, page: 0 },
      sort: { by: "score", order: Order.Desc },
      filters: { scoreBands: [ScoreBand1.Hot, ScoreBand1.Warm], score: { min: 50 } },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebsiteVisitsResponse
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
| <code>body</code> | <code>[WebsiteVisitsRequest](src/models/website-visits-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.websiteVisits.getWebsiteVisits(request)`

- **OnSuccess**: <code>[WebsiteVisitsResponse](src/models/website-visits-response.ts)</code>
- **OnError**: throws <code>[WebsiteVisits.GetWebsiteVisitsError](src/resources/website-visits.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.websiteVisits.getWebsiteVisits(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebsiteVisitsResponse, WebsiteVisits.GetWebsiteVisitsError&gt;</code>, with `result.value` of type <code>[WebsiteVisitsResponse](src/models/website-visits-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LushaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

