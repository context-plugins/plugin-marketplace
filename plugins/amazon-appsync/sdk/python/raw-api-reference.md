# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AmazonAppSyncClient](amazon_app_sync/client.py)

## ApiKeys

> Source: [ApiKeys](amazon_app_sync/apis/api_keys.py)

<details>
<summary><code>def create_api_key(api_id: str, *, body: V1ApisApikeysRequest | V1ApisApikeysRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateApiKeyResponse, CreateApiKeyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a unique key that you can distribute to clients who invoke your API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.api_keys.with_raw_response.create_api_key("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateApiKeyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateApiKeyErrorBody
```

**Async**

```python
result = await async_client.api_keys.with_raw_response.create_api_key("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateApiKeyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The ID for your GraphQL API. |
| <code>body</code> | <code>[V1ApisApikeysRequest](amazon_app_sync/models/v1_apis_apikeys_request.py) \| [V1ApisApikeysRequestDict](amazon_app_sync/models/v1_apis_apikeys_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateApiKeyResponse](amazon_app_sync/models/create_api_key_response.py), [CreateApiKeyErrorBody](amazon_app_sync/errors/create_api_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateApiKeyResponse](amazon_app_sync/models/create_api_key_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateApiKeyErrorBody](amazon_app_sync/errors/create_api_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiKeyLimitExceededException](amazon_app_sync/models/api_key_limit_exceeded_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_app_sync/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api_key(api_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteApiKeyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API key.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.api_keys.with_raw_response.delete_api_key("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiKeyErrorBody
```

**Async**

```python
result = await async_client.api_keys.with_raw_response.delete_api_key("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>id_</code> | <code>str</code> | The ID for the API key. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteApiKeyErrorBody](amazon_app_sync/errors/delete_api_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteApiKeyErrorBody](amazon_app_sync/errors/delete_api_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_api_keys(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListApiKeysResponse, ListApiKeysErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.api_keys.with_raw_response.list_api_keys("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListApiKeysResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListApiKeysErrorBody
```

**Async**

```python
result = await async_client.api_keys.with_raw_response.list_api_keys("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListApiKeysResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListApiKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListApiKeysResponse](amazon_app_sync/models/list_api_keys_response.py), [ListApiKeysErrorBody](amazon_app_sync/errors/list_api_keys_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListApiKeysResponse](amazon_app_sync/models/list_api_keys_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListApiKeysErrorBody](amazon_app_sync/errors/list_api_keys_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_api_key(api_id: str, id_: str, *, body: V1ApisApikeysRequest1 | V1ApisApikeysRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateApiKeyResponse, UpdateApiKeyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an API key. You can update the key as long as it's not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.api_keys.with_raw_response.update_api_key("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateApiKeyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateApiKeyErrorBody
```

**Async**

```python
result = await async_client.api_keys.with_raw_response.update_api_key("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateApiKeyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The ID for the GraphQL API. |
| <code>id_</code> | <code>str</code> | The API key ID. |
| <code>body</code> | <code>[V1ApisApikeysRequest1](amazon_app_sync/models/v1_apis_apikeys_request1.py) \| [V1ApisApikeysRequest1Dict](amazon_app_sync/models/v1_apis_apikeys_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateApiKeyResponse](amazon_app_sync/models/update_api_key_response.py), [UpdateApiKeyErrorBody](amazon_app_sync/errors/update_api_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateApiKeyResponse](amazon_app_sync/models/update_api_key_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateApiKeyErrorBody](amazon_app_sync/errors/update_api_key_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiKeyValidityOutOfBoundsException](amazon_app_sync/models/api_key_validity_out_of_bounds_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_app_sync/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Apicaches

> Source: [Apicaches](amazon_app_sync/apis/apicaches.py)

<details>
<summary><code>def create_api_cache(api_id: str, *, body: V1ApisApiCachesRequest | V1ApisApiCachesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateApiCacheResponse, CreateApiCacheErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a cache for the GraphQL API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apicaches.with_raw_response.create_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateApiCacheResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateApiCacheErrorBody
```

**Async**

```python
result = await async_client.apicaches.with_raw_response.create_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateApiCacheResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateApiCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The GraphQL API ID. |
| <code>body</code> | <code>[V1ApisApiCachesRequest](amazon_app_sync/models/v1_apis_api_caches_request.py) \| [V1ApisApiCachesRequestDict](amazon_app_sync/models/v1_apis_api_caches_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateApiCacheResponse](amazon_app_sync/models/create_api_cache_response.py), [CreateApiCacheErrorBody](amazon_app_sync/errors/create_api_cache_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateApiCacheResponse](amazon_app_sync/models/create_api_cache_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateApiCacheErrorBody](amazon_app_sync/errors/create_api_cache_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api_cache(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteApiCacheErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an ApiCache object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apicaches.with_raw_response.delete_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiCacheErrorBody
```

**Async**

```python
result = await async_client.apicaches.with_raw_response.delete_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteApiCacheErrorBody](amazon_app_sync/errors/delete_api_cache_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteApiCacheErrorBody](amazon_app_sync/errors/delete_api_cache_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_cache(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetApiCacheResponse, GetApiCacheErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an ApiCache object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apicaches.with_raw_response.get_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiCacheResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiCacheErrorBody
```

**Async**

```python
result = await async_client.apicaches.with_raw_response.get_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiCacheResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetApiCacheResponse](amazon_app_sync/models/get_api_cache_response.py), [GetApiCacheErrorBody](amazon_app_sync/errors/get_api_cache_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetApiCacheResponse](amazon_app_sync/models/get_api_cache_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetApiCacheErrorBody](amazon_app_sync/errors/get_api_cache_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_api_cache(api_id: str, *, body: V1ApisApiCachesUpdateRequest | V1ApisApiCachesUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateApiCacheResponse, UpdateApiCacheErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the cache for the GraphQL API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apicaches.with_raw_response.update_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateApiCacheResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateApiCacheErrorBody
```

**Async**

```python
result = await async_client.apicaches.with_raw_response.update_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateApiCacheResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateApiCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The GraphQL API ID. |
| <code>body</code> | <code>[V1ApisApiCachesUpdateRequest](amazon_app_sync/models/v1_apis_api_caches_update_request.py) \| [V1ApisApiCachesUpdateRequestDict](amazon_app_sync/models/v1_apis_api_caches_update_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateApiCacheResponse](amazon_app_sync/models/update_api_cache_response.py), [UpdateApiCacheErrorBody](amazon_app_sync/errors/update_api_cache_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateApiCacheResponse](amazon_app_sync/models/update_api_cache_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateApiCacheErrorBody](amazon_app_sync/errors/update_api_cache_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ApisApi

> Source: [ApisApi](amazon_app_sync/apis/apis_api.py)

<details>
<summary><code>def create_api(*, body: V2ApisRequest | V2ApisRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateApiResponse, CreateApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as an Event API that provides real-time message publishing and message subscriptions over WebSockets.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.create_api()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateApiErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.create_api()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V2ApisRequest](amazon_app_sync/models/v2_apis_request.py) \| [V2ApisRequestDict](amazon_app_sync/models/v2_apis_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateApiResponse](amazon_app_sync/models/create_api_response.py), [CreateApiErrorBody](amazon_app_sync/errors/create_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateApiResponse](amazon_app_sync/models/create_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateApiErrorBody](amazon_app_sync/errors/create_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_app_sync/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_graphql_api(*, body: V1ApisRequest | V1ApisRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateGraphqlApiResponse, CreateGraphqlApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.create_graphql_api()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGraphqlApiErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.create_graphql_api()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGraphqlApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ApisRequest](amazon_app_sync/models/v1_apis_request.py) \| [V1ApisRequestDict](amazon_app_sync/models/v1_apis_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateGraphqlApiResponse](amazon_app_sync/models/create_graphql_api_response.py), [CreateGraphqlApiErrorBody](amazon_app_sync/errors/create_graphql_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateGraphqlApiResponse](amazon_app_sync/models/create_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateGraphqlApiErrorBody](amazon_app_sync/errors/create_graphql_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiLimitExceededException](amazon_app_sync/models/api_limit_exceeded_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_app_sync/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_api(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Api object

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.delete_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.delete_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The Api ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteApiErrorBody](amazon_app_sync/errors/delete_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteApiErrorBody](amazon_app_sync/errors/delete_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_graphql_api(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteGraphqlApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.delete_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGraphqlApiErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.delete_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGraphqlApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteGraphqlApiErrorBody](amazon_app_sync/errors/delete_graphql_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteGraphqlApiErrorBody](amazon_app_sync/errors/delete_graphql_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetApiResponse, GetApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an Api object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.get_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.get_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The Api ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetApiResponse](amazon_app_sync/models/get_api_response.py), [GetApiErrorBody](amazon_app_sync/errors/get_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetApiResponse](amazon_app_sync/models/get_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetApiErrorBody](amazon_app_sync/errors/get_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_graphql_api(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetGraphqlApiResponse, GetGraphqlApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.get_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGraphqlApiErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.get_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGraphqlApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID for the GraphQL API. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetGraphqlApiResponse](amazon_app_sync/models/get_graphql_api_response.py), [GetGraphqlApiErrorBody](amazon_app_sync/errors/get_graphql_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetGraphqlApiResponse](amazon_app_sync/models/get_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetGraphqlApiErrorBody](amazon_app_sync/errors/get_graphql_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_apis(*, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListApisResponse, ListApisErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed information about an API, use GetApi.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.list_apis()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListApisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListApisErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.list_apis()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListApisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListApisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListApisResponse](amazon_app_sync/models/list_apis_response.py), [ListApisErrorBody](amazon_app_sync/errors/list_apis_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListApisResponse](amazon_app_sync/models/list_apis_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListApisErrorBody](amazon_app_sync/errors/list_apis_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_graphql_apis(*, next_token: str | None = None, max_results: int | None = None, api_type: ApiType2OrStr | None = None, owner: OwnerOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListGraphqlApisResponse, ListGraphqlApisErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists your GraphQL APIs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.list_graphql_apis()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGraphqlApisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGraphqlApisErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.list_graphql_apis()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGraphqlApisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGraphqlApisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>api_type</code> | <code>[ApiType2OrStr](amazon_app_sync/models/enums/api_type2.py) \| None</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).<br>**Default**: <code>None</code> |
| <code>owner</code> | <code>[OwnerOrStr](amazon_app_sync/models/enums/owner.py) \| None</code> | The account owner of the GraphQL API.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListGraphqlApisResponse](amazon_app_sync/models/list_graphql_apis_response.py), [ListGraphqlApisErrorBody](amazon_app_sync/errors/list_graphql_apis_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListGraphqlApisResponse](amazon_app_sync/models/list_graphql_apis_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListGraphqlApisErrorBody](amazon_app_sync/errors/list_graphql_apis_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_api(api_id: str, *, body: V2ApisRequest1 | V2ApisRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateApiResponse, UpdateApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an Api.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.update_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateApiErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.update_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The Api ID. |
| <code>body</code> | <code>[V2ApisRequest1](amazon_app_sync/models/v2_apis_request1.py) \| [V2ApisRequest1Dict](amazon_app_sync/models/v2_apis_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateApiResponse](amazon_app_sync/models/update_api_response.py), [UpdateApiErrorBody](amazon_app_sync/errors/update_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateApiResponse](amazon_app_sync/models/update_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateApiErrorBody](amazon_app_sync/errors/update_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_graphql_api(api_id: str, *, body: V1ApisRequest1 | V1ApisRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateGraphqlApiResponse, UpdateGraphqlApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.apis_api.with_raw_response.update_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGraphqlApiErrorBody
```

**Async**

```python
result = await async_client.apis_api.with_raw_response.update_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGraphqlApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>body</code> | <code>[V1ApisRequest1](amazon_app_sync/models/v1_apis_request1.py) \| [V1ApisRequest1Dict](amazon_app_sync/models/v1_apis_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateGraphqlApiResponse](amazon_app_sync/models/update_graphql_api_response.py), [UpdateGraphqlApiErrorBody](amazon_app_sync/errors/update_graphql_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateGraphqlApiResponse](amazon_app_sync/models/update_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateGraphqlApiErrorBody](amazon_app_sync/errors/update_graphql_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Channelnamespaces

> Source: [Channelnamespaces](amazon_app_sync/apis/channelnamespaces.py)

<details>
<summary><code>def create_channel_namespace(api_id: str, *, body: V2ApisChannelNamespacesRequest | V2ApisChannelNamespacesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateChannelNamespaceResponse, CreateChannelNamespaceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a ChannelNamespace for an Api.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.channelnamespaces.with_raw_response.create_channel_namespace("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateChannelNamespaceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateChannelNamespaceErrorBody
```

**Async**

```python
result = await async_client.channelnamespaces.with_raw_response.create_channel_namespace("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateChannelNamespaceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateChannelNamespaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The Api ID. |
| <code>body</code> | <code>[V2ApisChannelNamespacesRequest](amazon_app_sync/models/v2_apis_channel_namespaces_request.py) \| [V2ApisChannelNamespacesRequestDict](amazon_app_sync/models/v2_apis_channel_namespaces_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateChannelNamespaceResponse](amazon_app_sync/models/create_channel_namespace_response.py), [CreateChannelNamespaceErrorBody](amazon_app_sync/errors/create_channel_namespace_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateChannelNamespaceResponse](amazon_app_sync/models/create_channel_namespace_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateChannelNamespaceErrorBody](amazon_app_sync/errors/create_channel_namespace_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_app_sync/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_channel_namespace(api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteChannelNamespaceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a ChannelNamespace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.channelnamespaces.with_raw_response.delete_channel_namespace(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteChannelNamespaceErrorBody
```

**Async**

```python
result = await async_client.channelnamespaces.with_raw_response.delete_channel_namespace(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteChannelNamespaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The ID of the Api associated with the ChannelNamespace. |
| <code>name</code> | <code>str</code> | The name of the ChannelNamespace. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteChannelNamespaceErrorBody](amazon_app_sync/errors/delete_channel_namespace_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteChannelNamespaceErrorBody](amazon_app_sync/errors/delete_channel_namespace_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_channel_namespace(api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetChannelNamespaceResponse, GetChannelNamespaceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the channel namespace for a specified Api.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.channelnamespaces.with_raw_response.get_channel_namespace("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetChannelNamespaceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetChannelNamespaceErrorBody
```

**Async**

```python
result = await async_client.channelnamespaces.with_raw_response.get_channel_namespace(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetChannelNamespaceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetChannelNamespaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The Api ID. |
| <code>name</code> | <code>str</code> | The name of the ChannelNamespace. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetChannelNamespaceResponse](amazon_app_sync/models/get_channel_namespace_response.py), [GetChannelNamespaceErrorBody](amazon_app_sync/errors/get_channel_namespace_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetChannelNamespaceResponse](amazon_app_sync/models/get_channel_namespace_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetChannelNamespaceErrorBody](amazon_app_sync/errors/get_channel_namespace_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_channel_namespaces(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListChannelNamespacesResponse, ListChannelNamespacesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for the channel namespace. To retrieve code handlers, use GetChannelNamespace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.channelnamespaces.with_raw_response.list_channel_namespaces("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListChannelNamespacesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListChannelNamespacesErrorBody
```

**Async**

```python
result = await async_client.channelnamespaces.with_raw_response.list_channel_namespaces("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListChannelNamespacesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListChannelNamespacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The Api ID. |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListChannelNamespacesResponse](amazon_app_sync/models/list_channel_namespaces_response.py), [ListChannelNamespacesErrorBody](amazon_app_sync/errors/list_channel_namespaces_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListChannelNamespacesResponse](amazon_app_sync/models/list_channel_namespaces_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListChannelNamespacesErrorBody](amazon_app_sync/errors/list_channel_namespaces_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_channel_namespace(api_id: str, name: str, *, body: V2ApisChannelNamespacesRequest1 | V2ApisChannelNamespacesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateChannelNamespaceResponse, UpdateChannelNamespaceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a ChannelNamespace associated with an Api.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.channelnamespaces.with_raw_response.update_channel_namespace(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateChannelNamespaceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateChannelNamespaceErrorBody
```

**Async**

```python
result = await async_client.channelnamespaces.with_raw_response.update_channel_namespace(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateChannelNamespaceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateChannelNamespaceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The Api ID. |
| <code>name</code> | <code>str</code> | The name of the ChannelNamespace. |
| <code>body</code> | <code>[V2ApisChannelNamespacesRequest1](amazon_app_sync/models/v2_apis_channel_namespaces_request1.py) \| [V2ApisChannelNamespacesRequest1Dict](amazon_app_sync/models/v2_apis_channel_namespaces_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateChannelNamespaceResponse](amazon_app_sync/models/update_channel_namespace_response.py), [UpdateChannelNamespaceErrorBody](amazon_app_sync/errors/update_channel_namespace_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateChannelNamespaceResponse](amazon_app_sync/models/update_channel_namespace_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateChannelNamespaceErrorBody](amazon_app_sync/errors/update_channel_namespace_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataSources

> Source: [DataSources](amazon_app_sync/apis/data_sources.py)

<details>
<summary><code>def create_data_source(api_id: str, *, body: V1ApisDatasourcesRequest | V1ApisDatasourcesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateDataSourceResponse, CreateDataSourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a DataSource object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_sources.with_raw_response.create_data_source("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateDataSourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDataSourceErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.create_data_source("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateDataSourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDataSourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID for the GraphQL API for the DataSource. |
| <code>body</code> | <code>[V1ApisDatasourcesRequest](amazon_app_sync/models/v1_apis_datasources_request.py) \| [V1ApisDatasourcesRequestDict](amazon_app_sync/models/v1_apis_datasources_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateDataSourceResponse](amazon_app_sync/models/create_data_source_response.py), [CreateDataSourceErrorBody](amazon_app_sync/errors/create_data_source_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateDataSourceResponse](amazon_app_sync/models/create_data_source_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateDataSourceErrorBody](amazon_app_sync/errors/create_data_source_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_data_source(api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteDataSourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a DataSource object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_sources.with_raw_response.delete_data_source("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDataSourceErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.delete_data_source(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDataSourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>name</code> | <code>str</code> | The name of the data source. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteDataSourceErrorBody](amazon_app_sync/errors/delete_data_source_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteDataSourceErrorBody](amazon_app_sync/errors/delete_data_source_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_data_source(api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetDataSourceResponse, GetDataSourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a DataSource object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_sources.with_raw_response.get_data_source("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetDataSourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDataSourceErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.get_data_source("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetDataSourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDataSourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>name</code> | <code>str</code> | The name of the data source. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetDataSourceResponse](amazon_app_sync/models/get_data_source_response.py), [GetDataSourceErrorBody](amazon_app_sync/errors/get_data_source_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetDataSourceResponse](amazon_app_sync/models/get_data_source_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetDataSourceErrorBody](amazon_app_sync/errors/get_data_source_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_data_source_introspection(introspection_id: str, *, include_models_sdl: bool | None = None, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetDataSourceIntrospectionResponse, GetDataSourceIntrospectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the record of an existing introspection. If the retrieval is successful, the result of the instrospection will also be returned. If the retrieval fails the operation, an error message will be returned instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_sources.with_raw_response.get_data_source_introspection("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetDataSourceIntrospectionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDataSourceIntrospectionErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.get_data_source_introspection("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetDataSourceIntrospectionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDataSourceIntrospectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>introspection_id</code> | <code>str</code> | The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection record. |
| <code>include_models_sdl</code> | <code>bool \| None</code> | A boolean flag that determines whether SDL should be generated for introspected types. If set to true, each model will contain an sdl property that contains the SDL for that type. The SDL only contains the type data and no additional metadata or directives.<br>**Default**: <code>None</code> |
| <code>next_token</code> | <code>str \| None</code> | Determines the number of types to be returned in a single response before paginating. This value is typically taken from nextToken value from the previous response.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of introspected types that will be returned in a single response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetDataSourceIntrospectionResponse](amazon_app_sync/models/get_data_source_introspection_response.py), [GetDataSourceIntrospectionErrorBody](amazon_app_sync/errors/get_data_source_introspection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetDataSourceIntrospectionResponse](amazon_app_sync/models/get_data_source_introspection_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetDataSourceIntrospectionErrorBody](amazon_app_sync/errors/get_data_source_introspection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_data_sources(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListDataSourcesResponse, ListDataSourcesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the data sources for a given API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_sources.with_raw_response.list_data_sources("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListDataSourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDataSourcesErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.list_data_sources("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListDataSourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDataSourcesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListDataSourcesResponse](amazon_app_sync/models/list_data_sources_response.py), [ListDataSourcesErrorBody](amazon_app_sync/errors/list_data_sources_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListDataSourcesResponse](amazon_app_sync/models/list_data_sources_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListDataSourcesErrorBody](amazon_app_sync/errors/list_data_sources_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_data_source_introspection(*, body: V1DatasourcesIntrospectionsRequest | V1DatasourcesIntrospectionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartDataSourceIntrospectionResponse, StartDataSourceIntrospectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new introspection. Returns the introspectionId of the new introspection after its creation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_sources.with_raw_response.start_data_source_introspection()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartDataSourceIntrospectionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartDataSourceIntrospectionErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.start_data_source_introspection()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartDataSourceIntrospectionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartDataSourceIntrospectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1DatasourcesIntrospectionsRequest](amazon_app_sync/models/v1_datasources_introspections_request.py) \| [V1DatasourcesIntrospectionsRequestDict](amazon_app_sync/models/v1_datasources_introspections_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[StartDataSourceIntrospectionResponse](amazon_app_sync/models/start_data_source_introspection_response.py), [StartDataSourceIntrospectionErrorBody](amazon_app_sync/errors/start_data_source_introspection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartDataSourceIntrospectionResponse](amazon_app_sync/models/start_data_source_introspection_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[StartDataSourceIntrospectionErrorBody](amazon_app_sync/errors/start_data_source_introspection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_data_source(api_id: str, name: str, *, body: V1ApisDatasourcesRequest1 | V1ApisDatasourcesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateDataSourceResponse, UpdateDataSourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a DataSource object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data_sources.with_raw_response.update_data_source("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateDataSourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDataSourceErrorBody
```

**Async**

```python
result = await async_client.data_sources.with_raw_response.update_data_source(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateDataSourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDataSourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>name</code> | <code>str</code> | The new name for the data source. |
| <code>body</code> | <code>[V1ApisDatasourcesRequest1](amazon_app_sync/models/v1_apis_datasources_request1.py) \| [V1ApisDatasourcesRequest1Dict](amazon_app_sync/models/v1_apis_datasources_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateDataSourceResponse](amazon_app_sync/models/update_data_source_response.py), [UpdateDataSourceErrorBody](amazon_app_sync/errors/update_data_source_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateDataSourceResponse](amazon_app_sync/models/update_data_source_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateDataSourceErrorBody](amazon_app_sync/errors/update_data_source_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DomainNames

> Source: [DomainNames](amazon_app_sync/apis/domain_names.py)

<details>
<summary><code>def associate_api(domain_name: str, *, body: V1DomainnamesApiassociationRequest | V1DomainnamesApiassociationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AssociateApiResponse, AssociateApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Maps an endpoint to your custom domain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domain_names.with_raw_response.associate_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssociateApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssociateApiErrorBody
```

**Async**

```python
result = await async_client.domain_names.with_raw_response.associate_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssociateApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssociateApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | The domain name. |
| <code>body</code> | <code>[V1DomainnamesApiassociationRequest](amazon_app_sync/models/v1_domainnames_apiassociation_request.py) \| [V1DomainnamesApiassociationRequestDict](amazon_app_sync/models/v1_domainnames_apiassociation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[AssociateApiResponse](amazon_app_sync/models/associate_api_response.py), [AssociateApiErrorBody](amazon_app_sync/errors/associate_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AssociateApiResponse](amazon_app_sync/models/associate_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[AssociateApiErrorBody](amazon_app_sync/errors/associate_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_domain_name(*, body: V1DomainnamesRequest | V1DomainnamesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateDomainNameResponse, CreateDomainNameErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom DomainName object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domain_names.with_raw_response.create_domain_name()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateDomainNameResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDomainNameErrorBody
```

**Async**

```python
result = await async_client.domain_names.with_raw_response.create_domain_name()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateDomainNameResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDomainNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1DomainnamesRequest](amazon_app_sync/models/v1_domainnames_request.py) \| [V1DomainnamesRequestDict](amazon_app_sync/models/v1_domainnames_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateDomainNameResponse](amazon_app_sync/models/create_domain_name_response.py), [CreateDomainNameErrorBody](amazon_app_sync/errors/create_domain_name_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateDomainNameResponse](amazon_app_sync/models/create_domain_name_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateDomainNameErrorBody](amazon_app_sync/errors/create_domain_name_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_domain_name(domain_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteDomainNameErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom DomainName object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domain_names.with_raw_response.delete_domain_name("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDomainNameErrorBody
```

**Async**

```python
result = await async_client.domain_names.with_raw_response.delete_domain_name("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDomainNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | The domain name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteDomainNameErrorBody](amazon_app_sync/errors/delete_domain_name_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteDomainNameErrorBody](amazon_app_sync/errors/delete_domain_name_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disassociate_api(domain_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DisassociateApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an ApiAssociation object from a custom domain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domain_names.with_raw_response.disassociate_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisassociateApiErrorBody
```

**Async**

```python
result = await async_client.domain_names.with_raw_response.disassociate_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisassociateApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | The domain name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DisassociateApiErrorBody](amazon_app_sync/errors/disassociate_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DisassociateApiErrorBody](amazon_app_sync/errors/disassociate_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_association(domain_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetApiAssociationResponse, GetApiAssociationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an ApiAssociation object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domain_names.with_raw_response.get_api_association("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiAssociationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiAssociationErrorBody
```

**Async**

```python
result = await async_client.domain_names.with_raw_response.get_api_association("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetApiAssociationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | The domain name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetApiAssociationResponse](amazon_app_sync/models/get_api_association_response.py), [GetApiAssociationErrorBody](amazon_app_sync/errors/get_api_association_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetApiAssociationResponse](amazon_app_sync/models/get_api_association_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetApiAssociationErrorBody](amazon_app_sync/errors/get_api_association_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_domain_name(domain_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetDomainNameResponse, GetDomainNameErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a custom DomainName object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domain_names.with_raw_response.get_domain_name("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetDomainNameResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDomainNameErrorBody
```

**Async**

```python
result = await async_client.domain_names.with_raw_response.get_domain_name("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetDomainNameResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDomainNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | The domain name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetDomainNameResponse](amazon_app_sync/models/get_domain_name_response.py), [GetDomainNameErrorBody](amazon_app_sync/errors/get_domain_name_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetDomainNameResponse](amazon_app_sync/models/get_domain_name_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetDomainNameErrorBody](amazon_app_sync/errors/get_domain_name_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_domain_names(*, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListDomainNamesResponse, ListDomainNamesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists multiple custom domain names.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domain_names.with_raw_response.list_domain_names()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListDomainNamesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDomainNamesErrorBody
```

**Async**

```python
result = await async_client.domain_names.with_raw_response.list_domain_names()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListDomainNamesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDomainNamesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListDomainNamesResponse](amazon_app_sync/models/list_domain_names_response.py), [ListDomainNamesErrorBody](amazon_app_sync/errors/list_domain_names_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListDomainNamesResponse](amazon_app_sync/models/list_domain_names_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListDomainNamesErrorBody](amazon_app_sync/errors/list_domain_names_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_domain_name(domain_name: str, *, body: V1DomainnamesRequest1 | V1DomainnamesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateDomainNameResponse, UpdateDomainNameErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a custom DomainName object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domain_names.with_raw_response.update_domain_name("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateDomainNameResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDomainNameErrorBody
```

**Async**

```python
result = await async_client.domain_names.with_raw_response.update_domain_name("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateDomainNameResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDomainNameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | The domain name. |
| <code>body</code> | <code>[V1DomainnamesRequest1](amazon_app_sync/models/v1_domainnames_request1.py) \| [V1DomainnamesRequest1Dict](amazon_app_sync/models/v1_domainnames_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateDomainNameResponse](amazon_app_sync/models/update_domain_name_response.py), [UpdateDomainNameErrorBody](amazon_app_sync/errors/update_domain_name_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateDomainNameResponse](amazon_app_sync/models/update_domain_name_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateDomainNameErrorBody](amazon_app_sync/errors/update_domain_name_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Functions

> Source: [Functions](amazon_app_sync/apis/functions.py)

<details>
<summary><code>def create_function(api_id: str, *, body: V1ApisFunctionsRequest | V1ApisFunctionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateFunctionResponse, CreateFunctionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the resolver logic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.functions.with_raw_response.create_function("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateFunctionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFunctionErrorBody
```

**Async**

```python
result = await async_client.functions.with_raw_response.create_function("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateFunctionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFunctionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The GraphQL API ID. |
| <code>body</code> | <code>[V1ApisFunctionsRequest](amazon_app_sync/models/v1_apis_functions_request.py) \| [V1ApisFunctionsRequestDict](amazon_app_sync/models/v1_apis_functions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateFunctionResponse](amazon_app_sync/models/create_function_response.py), [CreateFunctionErrorBody](amazon_app_sync/errors/create_function_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateFunctionResponse](amazon_app_sync/models/create_function_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateFunctionErrorBody](amazon_app_sync/errors/create_function_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_function(api_id: str, function_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteFunctionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Function.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.functions.with_raw_response.delete_function("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFunctionErrorBody
```

**Async**

```python
result = await async_client.functions.with_raw_response.delete_function("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFunctionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The GraphQL API ID. |
| <code>function_id</code> | <code>str</code> | The Function ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteFunctionErrorBody](amazon_app_sync/errors/delete_function_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteFunctionErrorBody](amazon_app_sync/errors/delete_function_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_function(api_id: str, function_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetFunctionResponse, GetFunctionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Function.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.functions.with_raw_response.get_function("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetFunctionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFunctionErrorBody
```

**Async**

```python
result = await async_client.functions.with_raw_response.get_function("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetFunctionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFunctionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The GraphQL API ID. |
| <code>function_id</code> | <code>str</code> | The Function ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetFunctionResponse](amazon_app_sync/models/get_function_response.py), [GetFunctionErrorBody](amazon_app_sync/errors/get_function_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetFunctionResponse](amazon_app_sync/models/get_function_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetFunctionErrorBody](amazon_app_sync/errors/get_function_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_functions(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListFunctionsResponse, ListFunctionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List multiple functions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.functions.with_raw_response.list_functions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListFunctionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFunctionsErrorBody
```

**Async**

```python
result = await async_client.functions.with_raw_response.list_functions("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListFunctionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFunctionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The GraphQL API ID. |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListFunctionsResponse](amazon_app_sync/models/list_functions_response.py), [ListFunctionsErrorBody](amazon_app_sync/errors/list_functions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListFunctionsResponse](amazon_app_sync/models/list_functions_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListFunctionsErrorBody](amazon_app_sync/errors/list_functions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_function(api_id: str, function_id: str, *, body: V1ApisFunctionsRequest1 | V1ApisFunctionsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateFunctionResponse, UpdateFunctionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Function object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.functions.with_raw_response.update_function("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateFunctionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFunctionErrorBody
```

**Async**

```python
result = await async_client.functions.with_raw_response.update_function("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateFunctionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFunctionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The GraphQL API ID. |
| <code>function_id</code> | <code>str</code> | The function ID. |
| <code>body</code> | <code>[V1ApisFunctionsRequest1](amazon_app_sync/models/v1_apis_functions_request1.py) \| [V1ApisFunctionsRequest1Dict](amazon_app_sync/models/v1_apis_functions_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateFunctionResponse](amazon_app_sync/models/update_function_response.py), [UpdateFunctionErrorBody](amazon_app_sync/errors/update_function_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateFunctionResponse](amazon_app_sync/models/update_function_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateFunctionErrorBody](amazon_app_sync/errors/update_function_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GraphqlApis

> Source: [GraphqlApis](amazon_app_sync/apis/graphql_apis.py)

<details>
<summary><code>def create_graphql_api2(*, body: V1ApisRequest | V1ApisRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateGraphqlApiResponse, CreateGraphqlApi2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.graphql_apis.with_raw_response.create_graphql_api2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGraphqlApi2ErrorBody
```

**Async**

```python
result = await async_client.graphql_apis.with_raw_response.create_graphql_api2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGraphqlApi2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ApisRequest](amazon_app_sync/models/v1_apis_request.py) \| [V1ApisRequestDict](amazon_app_sync/models/v1_apis_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateGraphqlApiResponse](amazon_app_sync/models/create_graphql_api_response.py), [CreateGraphqlApi2ErrorBody](amazon_app_sync/errors/create_graphql_api2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateGraphqlApiResponse](amazon_app_sync/models/create_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateGraphqlApi2ErrorBody](amazon_app_sync/errors/create_graphql_api2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiLimitExceededException](amazon_app_sync/models/api_limit_exceeded_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_app_sync/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_graphql_api2(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteGraphqlApi2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.graphql_apis.with_raw_response.delete_graphql_api2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGraphqlApi2ErrorBody
```

**Async**

```python
result = await async_client.graphql_apis.with_raw_response.delete_graphql_api2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGraphqlApi2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteGraphqlApi2ErrorBody](amazon_app_sync/errors/delete_graphql_api2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteGraphqlApi2ErrorBody](amazon_app_sync/errors/delete_graphql_api2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def evaluate_mapping_template(*, body: V1DataplaneEvaluatetemplateRequest | V1DataplaneEvaluatetemplateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EvaluateMappingTemplateResponse, EvaluateMappingTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates a given template and returns the response. The mapping template can be a request or response template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the Apache Velocity Template Language (VTL).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.graphql_apis.with_raw_response.evaluate_mapping_template()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EvaluateMappingTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EvaluateMappingTemplateErrorBody
```

**Async**

```python
result = await async_client.graphql_apis.with_raw_response.evaluate_mapping_template()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EvaluateMappingTemplateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EvaluateMappingTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1DataplaneEvaluatetemplateRequest](amazon_app_sync/models/v1_dataplane_evaluatetemplate_request.py) \| [V1DataplaneEvaluatetemplateRequestDict](amazon_app_sync/models/v1_dataplane_evaluatetemplate_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[EvaluateMappingTemplateResponse](amazon_app_sync/models/evaluate_mapping_template_response.py), [EvaluateMappingTemplateErrorBody](amazon_app_sync/errors/evaluate_mapping_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EvaluateMappingTemplateResponse](amazon_app_sync/models/evaluate_mapping_template_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[EvaluateMappingTemplateErrorBody](amazon_app_sync/errors/evaluate_mapping_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_graphql_api2(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetGraphqlApiResponse, GetGraphqlApi2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.graphql_apis.with_raw_response.get_graphql_api2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGraphqlApi2ErrorBody
```

**Async**

```python
result = await async_client.graphql_apis.with_raw_response.get_graphql_api2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGraphqlApi2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID for the GraphQL API. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetGraphqlApiResponse](amazon_app_sync/models/get_graphql_api_response.py), [GetGraphqlApi2ErrorBody](amazon_app_sync/errors/get_graphql_api2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetGraphqlApiResponse](amazon_app_sync/models/get_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetGraphqlApi2ErrorBody](amazon_app_sync/errors/get_graphql_api2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_graphql_apis2(*, next_token: str | None = None, max_results: int | None = None, api_type: ApiType2OrStr | None = None, owner: OwnerOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListGraphqlApisResponse, ListGraphqlApis2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists your GraphQL APIs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.graphql_apis.with_raw_response.list_graphql_apis2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGraphqlApisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGraphqlApis2ErrorBody
```

**Async**

```python
result = await async_client.graphql_apis.with_raw_response.list_graphql_apis2()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListGraphqlApisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGraphqlApis2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>api_type</code> | <code>[ApiType2OrStr](amazon_app_sync/models/enums/api_type2.py) \| None</code> | The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).<br>**Default**: <code>None</code> |
| <code>owner</code> | <code>[OwnerOrStr](amazon_app_sync/models/enums/owner.py) \| None</code> | The account owner of the GraphQL API.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListGraphqlApisResponse](amazon_app_sync/models/list_graphql_apis_response.py), [ListGraphqlApis2ErrorBody](amazon_app_sync/errors/list_graphql_apis2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListGraphqlApisResponse](amazon_app_sync/models/list_graphql_apis_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListGraphqlApis2ErrorBody](amazon_app_sync/errors/list_graphql_apis2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_graphql_api2(api_id: str, *, body: V1ApisRequest1 | V1ApisRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateGraphqlApiResponse, UpdateGraphqlApi2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.graphql_apis.with_raw_response.update_graphql_api2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGraphqlApi2ErrorBody
```

**Async**

```python
result = await async_client.graphql_apis.with_raw_response.update_graphql_api2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGraphqlApi2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>body</code> | <code>[V1ApisRequest1](amazon_app_sync/models/v1_apis_request1.py) \| [V1ApisRequest1Dict](amazon_app_sync/models/v1_apis_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateGraphqlApiResponse](amazon_app_sync/models/update_graphql_api_response.py), [UpdateGraphqlApi2ErrorBody](amazon_app_sync/errors/update_graphql_api2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateGraphqlApiResponse](amazon_app_sync/models/update_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateGraphqlApi2ErrorBody](amazon_app_sync/errors/update_graphql_api2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](amazon_app_sync/apis/operations.py)

<details>
<summary><code>def associate_merged_graphql_api(source_api_identifier: str, *, body: V1SourceApisMergedApiAssociationsRequest | V1SourceApisMergedApiAssociationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AssociateMergedGraphqlApiResponse, AssociateMergedGraphqlApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an association between a Merged API and source API using the source API's identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.associate_merged_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssociateMergedGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssociateMergedGraphqlApiErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.associate_merged_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssociateMergedGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssociateMergedGraphqlApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_api_identifier</code> | <code>str</code> | The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API. |
| <code>body</code> | <code>[V1SourceApisMergedApiAssociationsRequest](amazon_app_sync/models/v1_source_apis_merged_api_associations_request.py) \| [V1SourceApisMergedApiAssociationsRequestDict](amazon_app_sync/models/v1_source_apis_merged_api_associations_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[AssociateMergedGraphqlApiResponse](amazon_app_sync/models/associate_merged_graphql_api_response.py), [AssociateMergedGraphqlApiErrorBody](amazon_app_sync/errors/associate_merged_graphql_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AssociateMergedGraphqlApiResponse](amazon_app_sync/models/associate_merged_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[AssociateMergedGraphqlApiErrorBody](amazon_app_sync/errors/associate_merged_graphql_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_app_sync/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disassociate_merged_graphql_api(source_api_identifier: str, association_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DisassociateMergedGraphqlApiResponse, DisassociateMergedGraphqlApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an association between a Merged API and source API using the source API's identifier and the association ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.disassociate_merged_graphql_api(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisassociateMergedGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisassociateMergedGraphqlApiErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.disassociate_merged_graphql_api(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisassociateMergedGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisassociateMergedGraphqlApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>source_api_identifier</code> | <code>str</code> | The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API. |
| <code>association_id</code> | <code>str</code> | The ID generated by the AppSync service for the source API association. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[DisassociateMergedGraphqlApiResponse](amazon_app_sync/models/disassociate_merged_graphql_api_response.py), [DisassociateMergedGraphqlApiErrorBody](amazon_app_sync/errors/disassociate_merged_graphql_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DisassociateMergedGraphqlApiResponse](amazon_app_sync/models/disassociate_merged_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DisassociateMergedGraphqlApiErrorBody](amazon_app_sync/errors/disassociate_merged_graphql_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def evaluate_code(*, body: V1DataplaneEvaluatecodeRequest | V1DataplaneEvaluatecodeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EvaluateCodeResponse, EvaluateCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For APPSYNC_JS runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.evaluate_code()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EvaluateCodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EvaluateCodeErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.evaluate_code()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EvaluateCodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EvaluateCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1DataplaneEvaluatecodeRequest](amazon_app_sync/models/v1_dataplane_evaluatecode_request.py) \| [V1DataplaneEvaluatecodeRequestDict](amazon_app_sync/models/v1_dataplane_evaluatecode_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[EvaluateCodeResponse](amazon_app_sync/models/evaluate_code_response.py), [EvaluateCodeErrorBody](amazon_app_sync/errors/evaluate_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EvaluateCodeResponse](amazon_app_sync/models/evaluate_code_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[EvaluateCodeErrorBody](amazon_app_sync/errors/evaluate_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def flush_api_cache(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, FlushApiCacheErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Flushes an ApiCache object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.flush_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FlushApiCacheErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.flush_api_cache("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FlushApiCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [FlushApiCacheErrorBody](amazon_app_sync/errors/flush_api_cache_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[FlushApiCacheErrorBody](amazon_app_sync/errors/flush_api_cache_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_graphql_api_environment_variables(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetGraphqlApiEnvironmentVariablesResponse, GetGraphqlApiEnvironmentVariablesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of environmental variable key-value pairs associated with an API by its ID value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.get_graphql_api_environment_variables("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGraphqlApiEnvironmentVariablesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGraphqlApiEnvironmentVariablesErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.get_graphql_api_environment_variables("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetGraphqlApiEnvironmentVariablesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGraphqlApiEnvironmentVariablesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The ID of the API from which the environmental variable list will be retrieved. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetGraphqlApiEnvironmentVariablesResponse](amazon_app_sync/models/get_graphql_api_environment_variables_response.py), [GetGraphqlApiEnvironmentVariablesErrorBody](amazon_app_sync/errors/get_graphql_api_environment_variables_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetGraphqlApiEnvironmentVariablesResponse](amazon_app_sync/models/get_graphql_api_environment_variables_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetGraphqlApiEnvironmentVariablesErrorBody](amazon_app_sync/errors/get_graphql_api_environment_variables_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_schema_creation_status(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetSchemaCreationStatusResponse, GetSchemaCreationStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current status of a schema creation operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.get_schema_creation_status("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSchemaCreationStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSchemaCreationStatusErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.get_schema_creation_status("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSchemaCreationStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSchemaCreationStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetSchemaCreationStatusResponse](amazon_app_sync/models/get_schema_creation_status_response.py), [GetSchemaCreationStatusErrorBody](amazon_app_sync/errors/get_schema_creation_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetSchemaCreationStatusResponse](amazon_app_sync/models/get_schema_creation_status_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetSchemaCreationStatusErrorBody](amazon_app_sync/errors/get_schema_creation_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_graphql_api_environment_variables(api_id: str, *, body: V1ApisEnvironmentVariablesRequest | V1ApisEnvironmentVariablesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PutGraphqlApiEnvironmentVariablesResponse, PutGraphqlApiEnvironmentVariablesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a list of environmental variables in an API by its ID value. When creating an environmental variable, it must follow the constraints below: Both JavaScript and VTL templates support environmental variables. Environmental variables are not evaluated before function invocation. Environmental variables only support string values. Any defined value in an environmental variable is considered a string literal and not expanded. Variable evaluations should ideally be performed in the function code. When creating an environmental variable key-value pair, it must follow the additional constraints below: Keys must begin with a letter. Keys must be at least two characters long. Keys can only contain letters, numbers, and the underscore character (_). Values can be up to 512 characters long. You can configure up to 50 key-value pairs in a GraphQL API. You can create a list of environmental variables by adding it to the environmentVariables payload as a list in the format {"key1":"value1","key2":"value2", …}. Note that each call of the PutGraphqlApiEnvironmentVariables action will result in the overwriting of the existing environmental variable list of that API. This means the existing e

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.put_graphql_api_environment_variables("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PutGraphqlApiEnvironmentVariablesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutGraphqlApiEnvironmentVariablesErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.put_graphql_api_environment_variables("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PutGraphqlApiEnvironmentVariablesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutGraphqlApiEnvironmentVariablesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The ID of the API to which the environmental variable list will be written. |
| <code>body</code> | <code>[V1ApisEnvironmentVariablesRequest](amazon_app_sync/models/v1_apis_environment_variables_request.py) \| [V1ApisEnvironmentVariablesRequestDict](amazon_app_sync/models/v1_apis_environment_variables_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[PutGraphqlApiEnvironmentVariablesResponse](amazon_app_sync/models/put_graphql_api_environment_variables_response.py), [PutGraphqlApiEnvironmentVariablesErrorBody](amazon_app_sync/errors/put_graphql_api_environment_variables_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PutGraphqlApiEnvironmentVariablesResponse](amazon_app_sync/models/put_graphql_api_environment_variables_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[PutGraphqlApiEnvironmentVariablesErrorBody](amazon_app_sync/errors/put_graphql_api_environment_variables_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_schema_creation(api_id: str, *, body: V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartSchemaCreationResponse, StartSchemaCreationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.start_schema_creation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartSchemaCreationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSchemaCreationErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.start_schema_creation("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartSchemaCreationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSchemaCreationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>body</code> | <code>[V1ApisSchemacreationRequest](amazon_app_sync/models/v1_apis_schemacreation_request.py) \| [V1ApisSchemacreationRequestDict](amazon_app_sync/models/v1_apis_schemacreation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[StartSchemaCreationResponse](amazon_app_sync/models/start_schema_creation_response.py), [StartSchemaCreationErrorBody](amazon_app_sync/errors/start_schema_creation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartSchemaCreationResponse](amazon_app_sync/models/start_schema_creation_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[StartSchemaCreationErrorBody](amazon_app_sync/errors/start_schema_creation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_schema_merge(association_id: str, merged_api_identifier: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartSchemaMergeResponse, StartSchemaMergeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a merge operation. Returns a status that shows the result of the merge operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.operations.with_raw_response.start_schema_merge("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartSchemaMergeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSchemaMergeErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.start_schema_merge(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartSchemaMergeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSchemaMergeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>association_id</code> | <code>str</code> | The ID generated by the AppSync service for the source API association. |
| <code>merged_api_identifier</code> | <code>str</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[StartSchemaMergeResponse](amazon_app_sync/models/start_schema_merge_response.py), [StartSchemaMergeErrorBody](amazon_app_sync/errors/start_schema_merge_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartSchemaMergeResponse](amazon_app_sync/models/start_schema_merge_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[StartSchemaMergeErrorBody](amazon_app_sync/errors/start_schema_merge_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Resolvers

> Source: [Resolvers](amazon_app_sync/apis/resolvers.py)

<details>
<summary><code>def create_resolver(api_id: str, type_name: str, *, body: V1ApisTypesResolversRequest | V1ApisTypesResolversRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateResolverResponse, CreateResolverErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.resolvers.with_raw_response.create_resolver("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResolverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateResolverErrorBody
```

**Async**

```python
result = await async_client.resolvers.with_raw_response.create_resolver("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateResolverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateResolverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The ID for the GraphQL API for which the resolver is being created. |
| <code>type_name</code> | <code>str</code> | The name of the Type. |
| <code>body</code> | <code>[V1ApisTypesResolversRequest](amazon_app_sync/models/v1_apis_types_resolvers_request.py) \| [V1ApisTypesResolversRequestDict](amazon_app_sync/models/v1_apis_types_resolvers_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateResolverResponse](amazon_app_sync/models/create_resolver_response.py), [CreateResolverErrorBody](amazon_app_sync/errors/create_resolver_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateResolverResponse](amazon_app_sync/models/create_resolver_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateResolverErrorBody](amazon_app_sync/errors/create_resolver_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_resolver(api_id: str, type_name: str, field_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteResolverErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Resolver object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.resolvers.with_raw_response.delete_resolver(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteResolverErrorBody
```

**Async**

```python
result = await async_client.resolvers.with_raw_response.delete_resolver(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteResolverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>type_name</code> | <code>str</code> | The name of the resolver type. |
| <code>field_name</code> | <code>str</code> | The resolver field name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteResolverErrorBody](amazon_app_sync/errors/delete_resolver_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteResolverErrorBody](amazon_app_sync/errors/delete_resolver_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_resolver(api_id: str, type_name: str, field_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetResolverResponse, GetResolverErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Resolver object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.resolvers.with_raw_response.get_resolver(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetResolverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResolverErrorBody
```

**Async**

```python
result = await async_client.resolvers.with_raw_response.get_resolver(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetResolverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResolverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>type_name</code> | <code>str</code> | The resolver type name. |
| <code>field_name</code> | <code>str</code> | The resolver field name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetResolverResponse](amazon_app_sync/models/get_resolver_response.py), [GetResolverErrorBody](amazon_app_sync/errors/get_resolver_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetResolverResponse](amazon_app_sync/models/get_resolver_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetResolverErrorBody](amazon_app_sync/errors/get_resolver_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_resolvers(api_id: str, type_name: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListResolversResponse, ListResolversErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the resolvers for a given API and type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.resolvers.with_raw_response.list_resolvers("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResolversResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResolversErrorBody
```

**Async**

```python
result = await async_client.resolvers.with_raw_response.list_resolvers("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResolversResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResolversErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>type_name</code> | <code>str</code> | The type name. |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListResolversResponse](amazon_app_sync/models/list_resolvers_response.py), [ListResolversErrorBody](amazon_app_sync/errors/list_resolvers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListResolversResponse](amazon_app_sync/models/list_resolvers_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListResolversErrorBody](amazon_app_sync/errors/list_resolvers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_resolvers_by_function(api_id: str, function_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListResolversByFunctionResponse, ListResolversByFunctionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the resolvers that are associated with a specific function.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.resolvers.with_raw_response.list_resolvers_by_function("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResolversByFunctionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResolversByFunctionErrorBody
```

**Async**

```python
result = await async_client.resolvers.with_raw_response.list_resolvers_by_function(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListResolversByFunctionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResolversByFunctionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>function_id</code> | <code>str</code> | The function ID. |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListResolversByFunctionResponse](amazon_app_sync/models/list_resolvers_by_function_response.py), [ListResolversByFunctionErrorBody](amazon_app_sync/errors/list_resolvers_by_function_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListResolversByFunctionResponse](amazon_app_sync/models/list_resolvers_by_function_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListResolversByFunctionErrorBody](amazon_app_sync/errors/list_resolvers_by_function_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_resolver(api_id: str, type_name: str, field_name: str, *, body: V1ApisTypesResolversFieldNameRequest | V1ApisTypesResolversFieldNameRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateResolverResponse, UpdateResolverErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Resolver object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.resolvers.with_raw_response.update_resolver(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateResolverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateResolverErrorBody
```

**Async**

```python
result = await async_client.resolvers.with_raw_response.update_resolver(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateResolverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateResolverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>type_name</code> | <code>str</code> | The new type name. |
| <code>field_name</code> | <code>str</code> | The new field name. |
| <code>body</code> | <code>[V1ApisTypesResolversFieldNameRequest](amazon_app_sync/models/v1_apis_types_resolvers_field_name_request.py) \| [V1ApisTypesResolversFieldNameRequestDict](amazon_app_sync/models/v1_apis_types_resolvers_field_name_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateResolverResponse](amazon_app_sync/models/update_resolver_response.py), [UpdateResolverErrorBody](amazon_app_sync/errors/update_resolver_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateResolverResponse](amazon_app_sync/models/update_resolver_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateResolverErrorBody](amazon_app_sync/errors/update_resolver_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Schema

> Source: [Schema](amazon_app_sync/apis/schema.py)

<details>
<summary><code>def get_introspection_schema(api_id: str, format_: FormatOrStr, *, include_directives: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetIntrospectionSchemaResponse, GetIntrospectionSchemaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the introspection schema for a GraphQL API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.schema.with_raw_response.get_introspection_schema("some example string", Format.SDL)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetIntrospectionSchemaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIntrospectionSchemaErrorBody
```

**Async**

```python
result = await async_client.schema.with_raw_response.get_introspection_schema("some example string", Format.SDL)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetIntrospectionSchemaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIntrospectionSchemaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>format_</code> | <code>[FormatOrStr](amazon_app_sync/models/enums/format.py)</code> | The schema format: SDL or JSON. |
| <code>include_directives</code> | <code>bool \| None</code> | A flag that specifies whether the schema introspection should contain directives.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetIntrospectionSchemaResponse](amazon_app_sync/models/get_introspection_schema_response.py), [GetIntrospectionSchemaErrorBody](amazon_app_sync/errors/get_introspection_schema_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetIntrospectionSchemaResponse](amazon_app_sync/models/get_introspection_schema_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetIntrospectionSchemaErrorBody](amazon_app_sync/errors/get_introspection_schema_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[GraphQlSchemaException](amazon_app_sync/models/graph_ql_schema_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_schema_creation_status2(api_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetSchemaCreationStatusResponse, GetSchemaCreationStatus2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current status of a schema creation operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.schema.with_raw_response.get_schema_creation_status2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSchemaCreationStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSchemaCreationStatus2ErrorBody
```

**Async**

```python
result = await async_client.schema.with_raw_response.get_schema_creation_status2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSchemaCreationStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSchemaCreationStatus2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetSchemaCreationStatusResponse](amazon_app_sync/models/get_schema_creation_status_response.py), [GetSchemaCreationStatus2ErrorBody](amazon_app_sync/errors/get_schema_creation_status2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetSchemaCreationStatusResponse](amazon_app_sync/models/get_schema_creation_status_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetSchemaCreationStatus2ErrorBody](amazon_app_sync/errors/get_schema_creation_status2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_schema_creation2(api_id: str, *, body: V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StartSchemaCreationResponse, StartSchemaCreation2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.schema.with_raw_response.start_schema_creation2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartSchemaCreationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSchemaCreation2ErrorBody
```

**Async**

```python
result = await async_client.schema.with_raw_response.start_schema_creation2("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StartSchemaCreationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSchemaCreation2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>body</code> | <code>[V1ApisSchemacreationRequest](amazon_app_sync/models/v1_apis_schemacreation_request.py) \| [V1ApisSchemacreationRequestDict](amazon_app_sync/models/v1_apis_schemacreation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[StartSchemaCreationResponse](amazon_app_sync/models/start_schema_creation_response.py), [StartSchemaCreation2ErrorBody](amazon_app_sync/errors/start_schema_creation2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StartSchemaCreationResponse](amazon_app_sync/models/start_schema_creation_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[StartSchemaCreation2ErrorBody](amazon_app_sync/errors/start_schema_creation2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sourceapiassociations

> Source: [Sourceapiassociations](amazon_app_sync/apis/sourceapiassociations.py)

<details>
<summary><code>def associate_source_graphql_api(merged_api_identifier: str, *, body: V1MergedApisSourceApiAssociationsRequest | V1MergedApisSourceApiAssociationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AssociateSourceGraphqlApiResponse, AssociateSourceGraphqlApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an association between a Merged API and source API using the Merged API's identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sourceapiassociations.with_raw_response.associate_source_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssociateSourceGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssociateSourceGraphqlApiErrorBody
```

**Async**

```python
result = await async_client.sourceapiassociations.with_raw_response.associate_source_graphql_api("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AssociateSourceGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AssociateSourceGraphqlApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merged_api_identifier</code> | <code>str</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>body</code> | <code>[V1MergedApisSourceApiAssociationsRequest](amazon_app_sync/models/v1_merged_apis_source_api_associations_request.py) \| [V1MergedApisSourceApiAssociationsRequestDict](amazon_app_sync/models/v1_merged_apis_source_api_associations_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[AssociateSourceGraphqlApiResponse](amazon_app_sync/models/associate_source_graphql_api_response.py), [AssociateSourceGraphqlApiErrorBody](amazon_app_sync/errors/associate_source_graphql_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AssociateSourceGraphqlApiResponse](amazon_app_sync/models/associate_source_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[AssociateSourceGraphqlApiErrorBody](amazon_app_sync/errors/associate_source_graphql_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_app_sync/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disassociate_source_graphql_api(merged_api_identifier: str, association_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DisassociateSourceGraphqlApiResponse, DisassociateSourceGraphqlApiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an association between a Merged API and source API using the Merged API's identifier and the association ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sourceapiassociations.with_raw_response.disassociate_source_graphql_api(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisassociateSourceGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisassociateSourceGraphqlApiErrorBody
```

**Async**

```python
result = await async_client.sourceapiassociations.with_raw_response.disassociate_source_graphql_api(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisassociateSourceGraphqlApiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisassociateSourceGraphqlApiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merged_api_identifier</code> | <code>str</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>association_id</code> | <code>str</code> | The ID generated by the AppSync service for the source API association. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[DisassociateSourceGraphqlApiResponse](amazon_app_sync/models/disassociate_source_graphql_api_response.py), [DisassociateSourceGraphqlApiErrorBody](amazon_app_sync/errors/disassociate_source_graphql_api_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DisassociateSourceGraphqlApiResponse](amazon_app_sync/models/disassociate_source_graphql_api_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[DisassociateSourceGraphqlApiErrorBody](amazon_app_sync/errors/disassociate_source_graphql_api_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_source_api_association(merged_api_identifier: str, association_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetSourceApiAssociationResponse, GetSourceApiAssociationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a SourceApiAssociation object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sourceapiassociations.with_raw_response.get_source_api_association(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSourceApiAssociationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSourceApiAssociationErrorBody
```

**Async**

```python
result = await async_client.sourceapiassociations.with_raw_response.get_source_api_association(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetSourceApiAssociationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSourceApiAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merged_api_identifier</code> | <code>str</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>association_id</code> | <code>str</code> | The ID generated by the AppSync service for the source API association. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetSourceApiAssociationResponse](amazon_app_sync/models/get_source_api_association_response.py), [GetSourceApiAssociationErrorBody](amazon_app_sync/errors/get_source_api_association_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetSourceApiAssociationResponse](amazon_app_sync/models/get_source_api_association_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetSourceApiAssociationErrorBody](amazon_app_sync/errors/get_source_api_association_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_source_api_associations(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListSourceApiAssociationsResponse, ListSourceApiAssociationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the SourceApiAssociationSummary data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sourceapiassociations.with_raw_response.list_source_api_associations("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListSourceApiAssociationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourceApiAssociationsErrorBody
```

**Async**

```python
result = await async_client.sourceapiassociations.with_raw_response.list_source_api_associations("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListSourceApiAssociationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourceApiAssociationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListSourceApiAssociationsResponse](amazon_app_sync/models/list_source_api_associations_response.py), [ListSourceApiAssociationsErrorBody](amazon_app_sync/errors/list_source_api_associations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListSourceApiAssociationsResponse](amazon_app_sync/models/list_source_api_associations_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListSourceApiAssociationsErrorBody](amazon_app_sync/errors/list_source_api_associations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_source_api_association(association_id: str, merged_api_identifier: str, *, body: V1MergedApisSourceApiAssociationsRequest1 | V1MergedApisSourceApiAssociationsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateSourceApiAssociationResponse, UpdateSourceApiAssociationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates some of the configuration choices of a particular source API association.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sourceapiassociations.with_raw_response.update_source_api_association(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateSourceApiAssociationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSourceApiAssociationErrorBody
```

**Async**

```python
result = await async_client.sourceapiassociations.with_raw_response.update_source_api_association(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateSourceApiAssociationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSourceApiAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>association_id</code> | <code>str</code> | The ID generated by the AppSync service for the source API association. |
| <code>merged_api_identifier</code> | <code>str</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>body</code> | <code>[V1MergedApisSourceApiAssociationsRequest1](amazon_app_sync/models/v1_merged_apis_source_api_associations_request1.py) \| [V1MergedApisSourceApiAssociationsRequest1Dict](amazon_app_sync/models/v1_merged_apis_source_api_associations_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateSourceApiAssociationResponse](amazon_app_sync/models/update_source_api_association_response.py), [UpdateSourceApiAssociationErrorBody](amazon_app_sync/errors/update_source_api_association_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateSourceApiAssociationResponse](amazon_app_sync/models/update_source_api_association_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateSourceApiAssociationErrorBody](amazon_app_sync/errors/update_source_api_association_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](amazon_app_sync/apis/tags.py)

<details>
<summary><code>def list_tags_for_resource(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListTagsForResourceResponse, ListTagsForResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags for a resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.list_tags_for_resource("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTagsForResourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.list_tags_for_resource("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTagsForResourceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | The GraphqlApi Amazon Resource Name (ARN). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListTagsForResourceResponse](amazon_app_sync/models/list_tags_for_resource_response.py), [ListTagsForResourceErrorBody](amazon_app_sync/errors/list_tags_for_resource_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListTagsForResourceResponse](amazon_app_sync/models/list_tags_for_resource_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListTagsForResourceErrorBody](amazon_app_sync/errors/list_tags_for_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_app_sync/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(resource_arn: str, *, body: V1TagsRequest | V1TagsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, TagResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tags a resource with user-supplied tags.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.tag_resource("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.tag_resource("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | The GraphqlApi Amazon Resource Name (ARN). |
| <code>body</code> | <code>[V1TagsRequest](amazon_app_sync/models/v1_tags_request.py) \| [V1TagsRequestDict](amazon_app_sync/models/v1_tags_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [TagResourceErrorBody](amazon_app_sync/errors/tag_resource_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[TagResourceErrorBody](amazon_app_sync/errors/tag_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_app_sync/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(resource_arn: str, tag_keys: list[str], *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, UntagResourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Untags a resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.untag_resource("some example string", ["some example string"])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagResourceErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.untag_resource("some example string", ["some example string"])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | The GraphqlApi Amazon Resource Name (ARN). |
| <code>tag_keys</code> | <code>list&#91;str&#93;</code> | A list of TagKey objects. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [UntagResourceErrorBody](amazon_app_sync/errors/untag_resource_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[UntagResourceErrorBody](amazon_app_sync/errors/untag_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_app_sync/models/access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_app_sync/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Types

> Source: [Types](amazon_app_sync/apis/types.py)

<details>
<summary><code>def create_type(api_id: str, *, body: V1ApisTypesRequest | V1ApisTypesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CreateTypeResponse, CreateTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Type object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.types.with_raw_response.create_type("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTypeErrorBody
```

**Async**

```python
result = await async_client.types.with_raw_response.create_type("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CreateTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>body</code> | <code>[V1ApisTypesRequest](amazon_app_sync/models/v1_apis_types_request.py) \| [V1ApisTypesRequestDict](amazon_app_sync/models/v1_apis_types_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[CreateTypeResponse](amazon_app_sync/models/create_type_response.py), [CreateTypeErrorBody](amazon_app_sync/errors/create_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CreateTypeResponse](amazon_app_sync/models/create_type_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[CreateTypeErrorBody](amazon_app_sync/errors/create_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_type(api_id: str, type_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Type object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.types.with_raw_response.delete_type("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTypeErrorBody
```

**Async**

```python
result = await async_client.types.with_raw_response.delete_type("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>type_name</code> | <code>str</code> | The type name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;Any, [DeleteTypeErrorBody](amazon_app_sync/errors/delete_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Success

**On `Failure`**: `error` is <code>[DeleteTypeErrorBody](amazon_app_sync/errors/delete_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_type(api_id: str, type_name: str, format_: FormatOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[GetTypeResponse, GetTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Type object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.types.with_raw_response.get_type("some example string", "some example string", Format.SDL)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTypeErrorBody
```

**Async**

```python
result = await async_client.types.with_raw_response.get_type("some example string", "some example string", Format.SDL)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type GetTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>type_name</code> | <code>str</code> | The type name. |
| <code>format_</code> | <code>[FormatOrStr](amazon_app_sync/models/enums/format.py)</code> | The type format: SDL or JSON. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[GetTypeResponse](amazon_app_sync/models/get_type_response.py), [GetTypeErrorBody](amazon_app_sync/errors/get_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[GetTypeResponse](amazon_app_sync/models/get_type_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[GetTypeErrorBody](amazon_app_sync/errors/get_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_types(api_id: str, format_: FormatOrStr, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListTypesResponse, ListTypesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the types for a given API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.types.with_raw_response.list_types("some example string", Format.SDL)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTypesErrorBody
```

**Async**

```python
result = await async_client.types.with_raw_response.list_types("some example string", Format.SDL)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>format_</code> | <code>[FormatOrStr](amazon_app_sync/models/enums/format.py)</code> | The type format: SDL or JSON. |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListTypesResponse](amazon_app_sync/models/list_types_response.py), [ListTypesErrorBody](amazon_app_sync/errors/list_types_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListTypesResponse](amazon_app_sync/models/list_types_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListTypesErrorBody](amazon_app_sync/errors/list_types_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_types_by_association(merged_api_identifier: str, association_id: str, format_: FormatOrStr, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ListTypesByAssociationResponse, ListTypesByAssociationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Type objects by the source API association ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.types.with_raw_response.list_types_by_association(
    "some example string", "some example string", Format.SDL
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTypesByAssociationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTypesByAssociationErrorBody
```

**Async**

```python
result = await async_client.types.with_raw_response.list_types_by_association(
    "some example string", "some example string", Format.SDL
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ListTypesByAssociationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTypesByAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merged_api_identifier</code> | <code>str</code> | The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API. |
| <code>association_id</code> | <code>str</code> | The ID generated by the AppSync service for the source API association. |
| <code>format_</code> | <code>[FormatOrStr](amazon_app_sync/models/enums/format.py)</code> | The format type. |
| <code>next_token</code> | <code>str \| None</code> | An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of results that you want the request to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[ListTypesByAssociationResponse](amazon_app_sync/models/list_types_by_association_response.py), [ListTypesByAssociationErrorBody](amazon_app_sync/errors/list_types_by_association_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ListTypesByAssociationResponse](amazon_app_sync/models/list_types_by_association_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[ListTypesByAssociationErrorBody](amazon_app_sync/errors/list_types_by_association_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_type(api_id: str, type_name: str, *, body: V1ApisTypesRequest1 | V1ApisTypesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UpdateTypeResponse, UpdateTypeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Type object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.types.with_raw_response.update_type("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTypeErrorBody
```

**Async**

```python
result = await async_client.types.with_raw_response.update_type("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UpdateTypeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_id</code> | <code>str</code> | The API ID. |
| <code>type_name</code> | <code>str</code> | The new type name. |
| <code>body</code> | <code>[V1ApisTypesRequest1](amazon_app_sync/models/v1_apis_types_request1.py) \| [V1ApisTypesRequest1Dict](amazon_app_sync/models/v1_apis_types_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_app_sync/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_app_sync/core/results.py)&#91;[UpdateTypeResponse](amazon_app_sync/models/update_type_response.py), [UpdateTypeErrorBody](amazon_app_sync/errors/update_type_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UpdateTypeResponse](amazon_app_sync/models/update_type_response.py)</code> -- Success

**On `Failure`**: `error` is <code>[UpdateTypeErrorBody](amazon_app_sync/errors/update_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_app_sync/models/bad_request_exception.py)</code> |
| 401 | <code>[UnauthorizedException](amazon_app_sync/models/unauthorized_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_app_sync/models/not_found_exception.py)</code> |
| 409 | <code>[ConcurrentModificationException](amazon_app_sync/models/concurrent_modification_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_app_sync/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_app_sync/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

