# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [Crawl4AiClient](crawl4_ai/client.py)

<details>
<summary><code>def get_crawl_job(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.get_crawl_job("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCrawlJobErrorBody
```

**Async**

```python
try:
    await async_client.get_crawl_job("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCrawlJobErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](crawl4_ai/core/exceptions.py)&#91;[GetCrawlJobErrorBody](crawl4_ai/errors/get_crawl_job_error.py)&#93;</code>

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
<summary><code>def submit_crawl_job(body: CrawlJobRequest | CrawlJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.submit_crawl_job(CrawlJobRequest(urls=["some example string"]))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitCrawlJobErrorBody
```

**Async**

```python
try:
    await async_client.submit_crawl_job(CrawlJobRequest(urls=["some example string"]))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitCrawlJobErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](crawl4_ai/core/exceptions.py)&#91;[SubmitCrawlJobErrorBody](crawl4_ai/errors/submit_crawl_job_error.py)&#93;</code>

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

