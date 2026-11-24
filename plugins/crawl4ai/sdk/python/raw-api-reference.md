# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [Crawl4AiClient](crawl4_ai/client.py)

<details>
<summary><code>def get_crawl_job(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetCrawlJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status and results of a crawl job

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.get_crawl_job("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCrawlJobErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.get_crawl_job("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCrawlJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>str</code> | Job ID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](crawl4_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](crawl4_ai/core/results.py)&#91;None, [GetCrawlJobErrorBody](crawl4_ai/errors/get_crawl_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetCrawlJobErrorBody](crawl4_ai/errors/get_crawl_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](crawl4_ai/core/results.py)</code> |
| anything unmapped | <code>[RawError](crawl4_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def submit_crawl_job(body: CrawlJobRequest | CrawlJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SubmitCrawlJobErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a new web crawling job

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.submit_crawl_job(CrawlJobRequest(urls=["some example string"]))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitCrawlJobErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.submit_crawl_job(CrawlJobRequest(urls=["some example string"]))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitCrawlJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CrawlJobRequest](crawl4_ai/models/crawl_job_request.py) \| [CrawlJobRequestDict](crawl4_ai/models/crawl_job_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](crawl4_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](crawl4_ai/core/results.py)&#91;None, [SubmitCrawlJobErrorBody](crawl4_ai/errors/submit_crawl_job_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SubmitCrawlJobErrorBody](crawl4_ai/errors/submit_crawl_job_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[RawError](crawl4_ai/core/results.py)</code> |
| anything unmapped | <code>[RawError](crawl4_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

