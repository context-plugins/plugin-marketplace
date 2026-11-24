# Reference

> Source: [CoresignalClient](src/client.ts)

## Collect

> Source: [Collect](src/resources/collect.ts)

<details>
<summary><code>bulkCollectCompanies(request: Collect.BulkCollectCompaniesRequest, options?: RequestOptions): ApiPromise&lt;Company[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve multiple full company records by an array of IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collect.bulkCollectCompanies({ body: {} });
  // TODO: Handle 'response' of type Company[]
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
const result = await client.collect.bulkCollectCompanies({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Company[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkCollectRequest](src/models/bulk-collect-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collect.bulkCollectCompanies(request)`

- **OnSuccess**: <code>[Company](src/models/company.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.collect.bulkCollectCompanies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Company[], ApiError&gt;</code>, with `result.value` of type <code>[Company](src/models/company.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoresignalError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>collectCompany(request: Collect.CollectCompanyRequest, options?: RequestOptions): ApiPromise&lt;Company, Collect.CollectCompanyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the full company record for the given ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.collect.collectCompany({ id: 1 });
  // TODO: Handle 'response' of type Company
} catch (err) {
  // TODO: Handle 'err' of type Collect.CollectCompanyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.collect.collectCompany({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Company
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
| <code>id</code> | <code>number</code> | Coresignal internal company ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.collect.collectCompany(request)`

- **OnSuccess**: <code>[Company](src/models/company.ts)</code>
- **OnError**: throws <code>[Collect.CollectCompanyError](src/resources/collect.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.collect.collectCompany(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Company, Collect.CollectCompanyError&gt;</code>, with `result.value` of type <code>[Company](src/models/company.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CoresignalError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>searchCompaniesByEsDsl(request: Search.SearchCompaniesByEsDslRequest, options?: RequestOptions): ApiPromise&lt;number[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search company records using a full Elasticsearch DSL query body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchCompaniesByEsDsl({ body: {} });
  // TODO: Handle 'response' of type number[]
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
const result = await client.search.searchCompaniesByEsDsl({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchCompaniesByEsDsl(request)`

- **OnSuccess**: <code>number[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.search.searchCompaniesByEsDsl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number[], ApiError&gt;</code>, with `result.value` of type <code>number[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CoresignalError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCompaniesByFilter(request: Search.SearchCompaniesByFilterRequest, options?: RequestOptions): ApiPromise&lt;number[], Search.SearchCompaniesByFilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search company records using a structured filter object. Returns matching record IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchCompaniesByFilter({ body: {} });
  // TODO: Handle 'response' of type number[]
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchCompaniesByFilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchCompaniesByFilter({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number[]
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
| <code>body</code> | <code>[CompanyFilter](src/models/company-filter.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchCompaniesByFilter(request)`

- **OnSuccess**: <code>number[]</code>
- **OnError**: throws <code>[Search.SearchCompaniesByFilterError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchCompaniesByFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number[], Search.SearchCompaniesByFilterError&gt;</code>, with `result.value` of type <code>number[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CoresignalError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

