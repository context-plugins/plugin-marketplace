# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CoresignalClient](coresignal/client.py)

## Collect

> Source: [Collect](coresignal/apis/collect.py)

<details>
<summary><code>def bulk_collect_companies(body: BulkCollectRequest | BulkCollectRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[Company]</code></summary>

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
try:
    response = client.collect.bulk_collect_companies(BulkCollectRequest())
    # TODO: Handle 'response' of type list[Company]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.collect.bulk_collect_companies(BulkCollectRequest())
    # TODO: Handle 'response' of type list[Company]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;[Company](coresignal/models/company.py)&#93;</code> -- Array of company records

**OnError**: <code>[ApiError](coresignal/core/exceptions.py)&#91;[RawError](coresignal/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def collect_company(id_: int, *, request_options: RequestOptionsOrDict | None = None) -> Company</code></summary>

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
try:
    response = client.collect.collect_company(1)
    # TODO: Handle 'response' of type Company
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CollectCompanyErrorBody
```

**Async**

```python
try:
    response = await async_client.collect.collect_company(1)
    # TODO: Handle 'response' of type Company
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CollectCompanyErrorBody
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

**OnSuccess**: <code>[Company](coresignal/models/company.py)</code> -- Full company record

**OnError**: <code>[ApiError](coresignal/core/exceptions.py)&#91;[CollectCompanyErrorBody](coresignal/errors/collect_company_error.py)&#93;</code>

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
<summary><code>def search_companies_by_es_dsl(body: Any, *, request_options: RequestOptionsOrDict | None = None) -> list[int]</code></summary>

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
try:
    response = client.search.search_companies_by_es_dsl({})
    # TODO: Handle 'response' of type list[int]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.search.search_companies_by_es_dsl({})
    # TODO: Handle 'response' of type list[int]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;int&#93;</code> -- Array of matching company record IDs

**OnError**: <code>[ApiError](coresignal/core/exceptions.py)&#91;[RawError](coresignal/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_companies_by_filter(body: CompanyFilter | CompanyFilterDict, *, request_options: RequestOptionsOrDict | None = None) -> list[int]</code></summary>

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
try:
    response = client.search.search_companies_by_filter(CompanyFilter())
    # TODO: Handle 'response' of type list[int]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompaniesByFilterErrorBody
```

**Async**

```python
try:
    response = await async_client.search.search_companies_by_filter(CompanyFilter())
    # TODO: Handle 'response' of type list[int]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchCompaniesByFilterErrorBody
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

**OnSuccess**: <code>list&#91;int&#93;</code> -- Array of matching company record IDs

**OnError**: <code>[ApiError](coresignal/core/exceptions.py)&#91;[SearchCompaniesByFilterErrorBody](coresignal/errors/search_companies_by_filter_error.py)&#93;</code>

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

