# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [CoresignalClient](coresignal/client.py)

## Collect

> Source: [Collect](coresignal/apis/collect.py)

<details>
<summary><code>def bulk_collect_companies(body: BulkCollectRequest | BulkCollectRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Company], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve multiple full company records by an array of IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.collect.with_raw_response.bulk_collect_companies(BulkCollectRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Company]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.collect.with_raw_response.bulk_collect_companies(BulkCollectRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Company]
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
| <code>body</code> | <code>[BulkCollectRequest](coresignal/models/bulk_collect_request.py) \| [BulkCollectRequestDict](coresignal/models/bulk_collect_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](coresignal/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](coresignal/core/results.py)&#91;list&#91;[Company](coresignal/models/company.py)&#93;, [RawError](coresignal/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Company](coresignal/models/company.py)&#93;</code> -- Array of company records

**On `Failure`**: `error` is <code>[RawError](coresignal/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def collect_company(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Company, CollectCompanyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the full company record for the given ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.collect.with_raw_response.collect_company(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CollectCompanyErrorBody
```

**Async**

```python
result = await async_client.collect.with_raw_response.collect_company(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Company
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CollectCompanyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>int</code> | Coresignal internal company ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](coresignal/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](coresignal/core/results.py)&#91;[Company](coresignal/models/company.py), [CollectCompanyErrorBody](coresignal/errors/collect_company_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Company](coresignal/models/company.py)</code> -- Full company record

**On `Failure`**: `error` is <code>[CollectCompanyErrorBody](coresignal/errors/collect_company_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](coresignal/core/results.py)</code> |
| anything unmapped | <code>[RawError](coresignal/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](coresignal/apis/search.py)

<details>
<summary><code>def search_companies_by_es_dsl(body: Any, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[int], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search company records using a full Elasticsearch DSL query body.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search_companies_by_es_dsl({})
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[int]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.search.with_raw_response.search_companies_by_es_dsl({})
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[int]
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
| <code>body</code> | <code>Any</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](coresignal/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](coresignal/core/results.py)&#91;list&#91;int&#93;, [RawError](coresignal/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;int&#93;</code> -- Array of matching company record IDs

**On `Failure`**: `error` is <code>[RawError](coresignal/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_companies_by_filter(body: CompanyFilter | CompanyFilterDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[int], SearchCompaniesByFilterErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search company records using a structured filter object. Returns matching record IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search_companies_by_filter(CompanyFilter())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[int]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCompaniesByFilterErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search_companies_by_filter(CompanyFilter())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[int]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchCompaniesByFilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompanyFilter](coresignal/models/company_filter.py) \| [CompanyFilterDict](coresignal/models/company_filter.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](coresignal/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](coresignal/core/results.py)&#91;list&#91;int&#93;, [SearchCompaniesByFilterErrorBody](coresignal/errors/search_companies_by_filter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;int&#93;</code> -- Array of matching company record IDs

**On `Failure`**: `error` is <code>[SearchCompaniesByFilterErrorBody](coresignal/errors/search_companies_by_filter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 402, 429 | <code>[RawError](coresignal/core/results.py)</code> |
| anything unmapped | <code>[RawError](coresignal/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

