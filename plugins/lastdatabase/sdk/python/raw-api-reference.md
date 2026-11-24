# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [LastDatabaseClient](last_database/client.py)

<details>
<summary><code>def search_leads(*, type_: TypeOrStr | None = Type.EMAIL, country: str | None = None, city: str | None = None, industry: str | None = None, keyword: str | None = None, limit: int | None = 25, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LeadSearchResponse, SearchLeadsErrorBody]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.search_leads(country="usa", city="New York", industry="healthcare", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LeadSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchLeadsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.search_leads(
    country="usa", city="New York", industry="healthcare", limit=10
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LeadSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchLeadsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>[TypeOrStr](last_database/models/enums/type.py) \| None</code> | Lead inventory type. Defaults to email.<br><br>The current implementation falls back to email when<br>an unrecognized type value is supplied.<br>**Default**: <code>Type.EMAIL</code> |
| <code>country</code> | <code>str \| None</code> | Filter results by country.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>str \| None</code> | Filter results by city.<br>**Default**: <code>None</code> |
| <code>industry</code> | <code>str \| None</code> | Filter by industry. For phone inventory, this<br>parameter maps to the phone category field.<br>**Default**: <code>None</code> |
| <code>keyword</code> | <code>str \| None</code> | Keyword filter.<br><br>Email keyword matching covers country, city,<br>industry, and company name.<br><br>Phone keyword matching covers country, city,<br>and category.<br><br>Fax keyword matching covers country, city,<br>industry, and company name.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Number of records to return.<br>**Default**: <code>25</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](last_database/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](last_database/core/results.py)&#91;[LeadSearchResponse](last_database/models/lead_search_response.py), [SearchLeadsErrorBody](last_database/errors/search_leads_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LeadSearchResponse](last_database/models/lead_search_response.py)</code> -- Lead search completed successfully.

**On `Failure`**: `error` is <code>[SearchLeadsErrorBody](last_database/errors/search_leads_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[ErrorResponse](last_database/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](last_database/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

