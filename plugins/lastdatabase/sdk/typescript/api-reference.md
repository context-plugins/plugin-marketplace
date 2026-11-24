# Reference

> Source: [LastDatabaseClient](src/client.ts)

<details>
<summary><code>searchLeads(request?: LastDatabaseClient.SearchLeadsRequest, options?: RequestOptions): ApiPromise&lt;LeadSearchResponse, LastDatabaseClient.SearchLeadsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search email, phone, or fax lead inventory.

The default lead type is email.

For phone searches, the public industry parameter maps
to the phone category field.

The current endpoint does not expose page, offset, or
cursor pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchLeads({
    country: "usa",
    city: "New York",
    industry: "healthcare",
    limit: 10,
  });
  // TODO: Handle 'response' of type LeadSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type LastDatabaseClient.SearchLeadsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .searchLeads({ country: "usa", city: "New York", industry: "healthcare", limit: 10 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LeadSearchResponse
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
| <code>type?</code> | <code>[Type](src/models/type.ts)</code> | Lead inventory type. Defaults to email.<br><br>The current implementation falls back to email when<br>an unrecognized type value is supplied.<br>**Default**: "email" |
| <code>country?</code> | <code>string</code> | Filter results by country. |
| <code>city?</code> | <code>string</code> | Filter results by city. |
| <code>industry?</code> | <code>string</code> | Filter by industry. For phone inventory, this<br>parameter maps to the phone category field. |
| <code>keyword?</code> | <code>string</code> | Keyword filter.<br><br>Email keyword matching covers country, city,<br>industry, and company name.<br><br>Phone keyword matching covers country, city,<br>and category.<br><br>Fax keyword matching covers country, city,<br>industry, and company name. |
| <code>limit?</code> | <code>number</code> | Number of records to return.<br>**Default**: 25 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchLeads(request)`

- **OnSuccess**: <code>[LeadSearchResponse](src/models/lead-search-response.ts)</code>
- **OnError**: throws <code>[LastDatabaseClient.SearchLeadsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchLeads(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LeadSearchResponse, LastDatabaseClient.SearchLeadsError&gt;</code>, with `result.value` of type <code>[LeadSearchResponse](src/models/lead-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[LastDatabaseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

