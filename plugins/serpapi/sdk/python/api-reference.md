# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [SerpApiClient](serp_api/client.py)

## Account

> Source: [Account](serp_api/apis/account.py)

<details>
<summary><code>def get_account(*, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the SerpApi account associated with the API key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account.get_account()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.account.get_account()
    # TODO: Handle 'response' of type Any
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](serp_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Account information

**OnError**: <code>[ApiError](serp_api/core/exceptions.py)&#91;[RawError](serp_api/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](serp_api/apis/search.py)

<details>
<summary><code>def get_search(search_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the JSON results for an asynchronous search by its `search_id`. The `search_id` is returned by /search when `async=true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.search.get_search("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.search.get_search("some example string")
    # TODO: Handle 'response' of type Any
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
| <code>search_id</code> | <code>str</code> | Identifier of the asynchronous search. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](serp_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Search result payload

**OnError**: <code>[ApiError](serp_api/core/exceptions.py)&#91;[RawError](serp_api/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_search(engine: str, *, q: str | None = None, search_query: str | None = None, api_key: str | None = None, location: str | None = None, gl: str | None = None, hl: str | None = None, device: DeviceOrStr | None = None, no_cache: bool | None = None, async_: bool | None = None, output: OutputOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a real-time search against the engine specified by the `engine` query parameter. Supports Google, Bing, YouTube, and many other engines. Engine-specific parameters are documented in the SerpApi engine reference.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.search.run_search("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.search.run_search("some example string")
    # TODO: Handle 'response' of type Any
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
| <code>engine</code> | <code>str</code> | Search engine identifier (e.g. google, bing, youtube). |
| <code>q</code> | <code>str \| None</code> | Search query (used by most engines except YouTube).<br>**Default**: <code>None</code> |
| <code>search_query</code> | <code>str \| None</code> | Search query used by the YouTube engine.<br>**Default**: <code>None</code> |
| <code>api_key</code> | <code>str \| None</code> | SerpApi private key (may also be supplied via the apiKey security scheme).<br>**Default**: <code>None</code> |
| <code>location</code> | <code>str \| None</code> | Geographic origin for the search.<br>**Default**: <code>None</code> |
| <code>gl</code> | <code>str \| None</code> | Two-letter country code.<br>**Default**: <code>None</code> |
| <code>hl</code> | <code>str \| None</code> | Two-letter language code.<br>**Default**: <code>None</code> |
| <code>device</code> | <code>[DeviceOrStr](serp_api/models/enums/device.py) \| None</code> | Device type to emulate.<br>**Default**: <code>None</code> |
| <code>no_cache</code> | <code>bool \| None</code> | Force fresh (uncached) results.<br>**Default**: <code>None</code> |
| <code>async_</code> | <code>bool \| None</code> | Submit asynchronously and retrieve results later.<br>**Default**: <code>None</code> |
| <code>output</code> | <code>[OutputOrStr](serp_api/models/enums/output.py) \| None</code> | Response format.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](serp_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Search results

**OnError**: <code>[ApiError](serp_api/core/exceptions.py)&#91;[RawError](serp_api/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

