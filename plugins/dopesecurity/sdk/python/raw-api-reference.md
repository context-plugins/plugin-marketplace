# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [DopeSecurityClient](dope_security/client.py)

## Authorization

> Source: [Authorization](dope_security/apis/authorization.py)

<details>
<summary><code>def generate_access_token(body: PartnerOauthTokenRequest | PartnerOauthTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PartnerOauthTokenResponse, GenerateAccessTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to generate an access token for use with the Flightdeck API. A valid access token returned from
this API is required in all other Flightdeck API calls.

Token generation is based on the OAuth 2.0 Client Credentials Flow. The returned token is used within the
HTTP Authorization header as follows:

`Authorization: Bearer `

Note:
- The required `client_id` and `client_secret` are created by an admin via the dope console.
- Returned access tokens are valid for a limited time period. Clients must check the `expires_in` value in
the response to generate a new access token before the current one expires.
- The OAuth scopes parameter is not supported and if provided will be ignored. The scopes returned in the access
token are set directly by the authorization server.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.authorization.with_raw_response.generate_access_token(
    PartnerOauthTokenRequest(client_id="some example string", client_secret="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PartnerOauthTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GenerateAccessTokenErrorBody
```

**Async**

```python
result = await async_client.authorization.with_raw_response.generate_access_token(
    PartnerOauthTokenRequest(client_id="some example string", client_secret="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PartnerOauthTokenResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GenerateAccessTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerOauthTokenRequest](dope_security/models/partner_oauth_token_request.py) \| [PartnerOauthTokenRequestDict](dope_security/models/partner_oauth_token_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[PartnerOauthTokenResponse](dope_security/models/partner_oauth_token_response.py), [GenerateAccessTokenErrorBody](dope_security/errors/generate_access_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PartnerOauthTokenResponse](dope_security/models/partner_oauth_token_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GenerateAccessTokenErrorBody](dope_security/errors/generate_access_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[OAuthError](dope_security/models/o_auth_error.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomCategoriesApi

> Source: [CustomCategoriesApi](dope_security/apis/custom_categories_api.py)

<details>
<summary><code>def add_custom_category_urls(custom_category_name: str, body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, AddCustomCategoryUrlsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to add URLs to an existing custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`)
and provide a JSON array of URLs in the request body.

Ensure that URLs are properly formatted and included in the array.

Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

If any URL in the list is invalid, the entire request will be rejected.
The 400 error response will include the list of invalid URLs in the error details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_categories_api.with_raw_response.add_custom_category_urls(
    "some example string", CustomCategoriesUrlsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddCustomCategoryUrlsErrorBody
```

**Async**

```python
result = await async_client.custom_categories_api.with_raw_response.add_custom_category_urls(
    "some example string", CustomCategoriesUrlsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddCustomCategoryUrlsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_category_name</code> | <code>str</code> | The name of the custom category to add URLs to |
| <code>body</code> | <code>[CustomCategoriesUrlsRequest](dope_security/models/custom_categories_urls_request.py) \| [CustomCategoriesUrlsRequestDict](dope_security/models/custom_categories_urls_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [AddCustomCategoryUrlsErrorBody](dope_security/errors/add_custom_category_urls_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[AddCustomCategoryUrlsErrorBody](dope_security/errors/add_custom_category_urls_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_custom_category(custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, CreateCustomCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to create a new custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`).

If the custom category already exists, a `400` error is returned.

Validation rules for `custom_category_name`:
- Must not be empty or whitespace-only
- Must not contain leading or trailing whitespace
- Maximum length of 32 characters
- Must not contain any of the following characters: `# ! @ $ % ^ * ? . / \`

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_categories_api.with_raw_response.create_custom_category("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomCategoryErrorBody
```

**Async**

```python
result = await async_client.custom_categories_api.with_raw_response.create_custom_category("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCustomCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_category_name</code> | <code>str</code> | The name of the custom category to create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [CreateCustomCategoryErrorBody](dope_security/errors/create_custom_category_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[CreateCustomCategoryErrorBody](dope_security/errors/create_custom_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_all_custom_category_urls(custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, DeleteAllCustomCategoryUrlsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete all URLs from an existing custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`).

This action will remove all URLs associated with the specified custom category.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_categories_api.with_raw_response.delete_all_custom_category_urls("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAllCustomCategoryUrlsErrorBody
```

**Async**

```python
result = await async_client.custom_categories_api.with_raw_response.delete_all_custom_category_urls(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAllCustomCategoryUrlsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_category_name</code> | <code>str</code> | The name of the custom category to delete all URLs from |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [DeleteAllCustomCategoryUrlsErrorBody](dope_security/errors/delete_all_custom_category_urls_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[DeleteAllCustomCategoryUrlsErrorBody](dope_security/errors/delete_all_custom_category_urls_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_custom_category(custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, DeleteCustomCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete a single custom category by name.
This action will remove the custom category and all of its associated data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_categories_api.with_raw_response.delete_custom_category("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomCategoryErrorBody
```

**Async**

```python
result = await async_client.custom_categories_api.with_raw_response.delete_custom_category("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_category_name</code> | <code>str</code> | The name of the custom category to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [DeleteCustomCategoryErrorBody](dope_security/errors/delete_custom_category_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[DeleteCustomCategoryErrorBody](dope_security/errors/delete_custom_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_custom_category_url(custom_category_name: str, encoded_url: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, DeleteCustomCategoryUrlErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete a specific URL from an existing custom category.

Specify the name of the custom category in the path parameter (`custom_category_name`).

Ensure that a given URL is encoded using URL encoding.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_categories_api.with_raw_response.delete_custom_category_url(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomCategoryUrlErrorBody
```

**Async**

```python
result = await async_client.custom_categories_api.with_raw_response.delete_custom_category_url(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomCategoryUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_category_name</code> | <code>str</code> | The name of the custom category to delete given URL from |
| <code>encoded_url</code> | <code>str</code> | The URL to be deleted (Ensure that URLs are properly URL-encoded using<br>the UTF8 encoding method) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [DeleteCustomCategoryUrlErrorBody](dope_security/errors/delete_custom_category_url_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[DeleteCustomCategoryUrlErrorBody](dope_security/errors/delete_custom_category_url_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_custom_categories(*, first: int | None = 50, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomCategoriesResponse, ListCustomCategoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get a paginated list of all custom categories.

Results are returned in pages using cursor based pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_categories_api.with_raw_response.list_custom_categories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomCategoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomCategoriesErrorBody
```

**Async**

```python
result = await async_client.custom_categories_api.with_raw_response.list_custom_categories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomCategoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomCategoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>first</code> | <code>int \| None</code> | An optional pagination param that states the number of records requested from the **start** of the `cursor`. The default value is **50**.<br>**Default**: <code>50</code> |
| <code>after</code> | <code>str \| None</code> | An optional pagination cursor. Pass the `endCursor` from the previous response's `pageInfo` to fetch the next page. Check `hasNextPage` in the previous response's `pageInfo` to determine whether more records are available.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[CustomCategoriesResponse](dope_security/models/custom_categories_response.py), [ListCustomCategoriesErrorBody](dope_security/errors/list_custom_categories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomCategoriesResponse](dope_security/models/custom_categories_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListCustomCategoriesErrorBody](dope_security/errors/list_custom_categories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_custom_category_urls(custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomCategoriesUrlsResponse, ListCustomCategoryUrlsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get all URLs of an existing custom category.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_categories_api.with_raw_response.list_custom_category_urls("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomCategoriesUrlsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomCategoryUrlsErrorBody
```

**Async**

```python
result = await async_client.custom_categories_api.with_raw_response.list_custom_category_urls("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomCategoriesUrlsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomCategoryUrlsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_category_name</code> | <code>str</code> | The name of the custom category to get URLs from |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[CustomCategoriesUrlsResponse](dope_security/models/custom_categories_urls_response.py), [ListCustomCategoryUrlsErrorBody](dope_security/errors/list_custom_category_urls_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomCategoriesUrlsResponse](dope_security/models/custom_categories_urls_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListCustomCategoryUrlsErrorBody](dope_security/errors/list_custom_category_urls_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def overwrite_custom_category_urls(custom_category_name: str, body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, OverwriteCustomCategoryUrlsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to replace all existing URLs of a custom category with a new list of URLs.

Specify the name of the custom category in the path parameter (`custom_category_name`)
and provide a JSON array of URLs in the request body. All existing URLs will be removed
and replaced with the provided list.

Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

If any URL in the list is invalid, the entire request will be rejected.
The 400 error response will include the list of invalid URLs in the error details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_categories_api.with_raw_response.overwrite_custom_category_urls(
    "some example string", CustomCategoriesUrlsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverwriteCustomCategoryUrlsErrorBody
```

**Async**

```python
result = await async_client.custom_categories_api.with_raw_response.overwrite_custom_category_urls(
    "some example string", CustomCategoriesUrlsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OverwriteCustomCategoryUrlsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_category_name</code> | <code>str</code> | The name of the custom category to overwrite URLs for |
| <code>body</code> | <code>[CustomCategoriesUrlsRequest](dope_security/models/custom_categories_urls_request.py) \| [CustomCategoriesUrlsRequestDict](dope_security/models/custom_categories_urls_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [OverwriteCustomCategoryUrlsErrorBody](dope_security/errors/overwrite_custom_category_urls_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[OverwriteCustomCategoryUrlsErrorBody](dope_security/errors/overwrite_custom_category_urls_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Endpoints

> Source: [Endpoints](dope_security/apis/endpoints.py)

<details>
<summary><code>def search_endpoints(*, id_: str | None = None, email_id: str | None = None, device_name: str | None = None, user_id: str | None = None, os_version: str | None = None, status: list[StatusOrStr] | None = None, debug_state: list[DebugStateOrStr] | None = None, fallback_mode: FallbackModeOrStr | None = None, location_id: str | None = None, agent_version: str | None = None, first: int | None = 50, after: str | None = None, order: OrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EndpointsSearchResponse, SearchEndpointsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get a list of all endpoints, or search for those matching a query parameter.

Note:
- To return a list of all endpoints do not include any additional parameter.
- Only one of the optional parameters is allowed to be specified per request.
- Results are returned in pages using cursor based pagination and ordered by the `lastSeen` property.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.endpoints.with_raw_response.search_endpoints()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EndpointsSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchEndpointsErrorBody
```

**Async**

```python
result = await async_client.endpoints.with_raw_response.search_endpoints()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EndpointsSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchEndpointsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str \| None</code> | Broad search query across endpoints by device, user and email identities that contain this string (case-insensitive)<br>**Default**: <code>None</code> |
| <code>email_id</code> | <code>str \| None</code> | Search by email ids that contain this string (case-insensitive)<br>**Default**: <code>None</code> |
| <code>device_name</code> | <code>str \| None</code> | Search by device names that contain this string (case-insensitive)<br>**Default**: <code>None</code> |
| <code>user_id</code> | <code>str \| None</code> | Search by user ids that contain this string (case-insensitive). `userId` for OIDC users is usually their email address.<br>**Default**: <code>None</code> |
| <code>os_version</code> | <code>str \| None</code> | Filter by this exact device OS version string<br>**Default**: <code>None</code> |
| <code>status</code> | <code>list&#91;[StatusOrStr](dope_security/models/enums/status.py)&#93; \| None</code> | Filter by this exact set of status'<br>**Default**: <code>None</code> |
| <code>debug_state</code> | <code>list&#91;[DebugStateOrStr](dope_security/models/enums/debug_state.py)&#93; \| None</code> | Filter by this exact set of debug states.<br>0 means not in debug<br>1 means debug request sent to endpoint<br>2 means debug request acknowledged by endpoint<br>**Default**: <code>None</code> |
| <code>fallback_mode</code> | <code>[FallbackModeOrStr](dope_security/models/enums/fallback_mode.py) \| None</code> | Filter by the fallback mode<br>**Default**: <code>None</code> |
| <code>location_id</code> | <code>str \| None</code> | Filter by this exact location id - with an underscore separating the case sensitive city and country values e.g. "City_Country"<br>**Default**: <code>None</code> |
| <code>agent_version</code> | <code>str \| None</code> | Filter by this exact agent version<br>**Default**: <code>None</code> |
| <code>first</code> | <code>int \| None</code> | An optional pagination param that states the number of records requested from the **start** of the `cursor`. The default value is **50**.<br>**Default**: <code>50</code> |
| <code>after</code> | <code>str \| None</code> | An optional pagination cursor. Pass the `endCursor` from the previous response's `pageInfo` to fetch the next page. Check `hasNextPage` in the previous response's `pageInfo` to determine whether more records are available.<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](dope_security/models/enums/order.py) \| None</code> | The direction of the sort by the `lastSeen` property. The default is to sort by descending<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[EndpointsSearchResponse](dope_security/models/endpoints_search_response.py), [SearchEndpointsErrorBody](dope_security/errors/search_endpoints_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EndpointsSearchResponse](dope_security/models/endpoints_search_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[SearchEndpointsErrorBody](dope_security/errors/search_endpoints_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Policies

> Source: [Policies](dope_security/apis/policies.py)

<details>
<summary><code>def create_policy(policy_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, CreatePolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to create a new policy.

Specify the name of the policy in the path parameter (`policy_name`).

If the policy already exists, a `400` error is returned.

Validation rules for `policy_name`:
- Must not be empty or whitespace-only
- Must not contain leading or trailing whitespace
- Maximum length of 32 characters
- Must not contain any of the following characters: `# ! @ $ % ^ * ? . / \`

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.create_policy("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePolicyErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.create_policy("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [CreatePolicyErrorBody](dope_security/errors/create_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[CreatePolicyErrorBody](dope_security/errors/create_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_custom_application_bypass(policy_name: str, body: PoliciesBypassApplicationsRequest1 | PoliciesBypassApplicationsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, DeleteCustomApplicationBypassErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete custom application bypass entries from a policy by name.

The operation is idempotent — names that do not exist are silently ignored.

At least one of `mac` or `windows` must be provided.

Policies that inherit application bypass from the Base Policy cannot have custom applications deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.delete_custom_application_bypass(
    "some example string", PoliciesBypassApplicationsRequest1(data=Data8(custom=Custom3()))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomApplicationBypassErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.delete_custom_application_bypass(
    "some example string", PoliciesBypassApplicationsRequest1(data=Data8(custom=Custom3()))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomApplicationBypassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to delete application bypass entries from |
| <code>body</code> | <code>[PoliciesBypassApplicationsRequest1](dope_security/models/policies_bypass_applications_request1.py) \| [PoliciesBypassApplicationsRequest1Dict](dope_security/models/policies_bypass_applications_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [DeleteCustomApplicationBypassErrorBody](dope_security/errors/delete_custom_application_bypass_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[DeleteCustomApplicationBypassErrorBody](dope_security/errors/delete_custom_application_bypass_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_custom_url_bypass(policy_name: str, body: PoliciesBypassUrlsRequest1 | PoliciesBypassUrlsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, DeleteCustomUrlBypassErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete custom URL bypass entries from a policy by name.

The operation is idempotent — names that do not exist are silently ignored.

Policies that inherit URL bypass from the Base Policy cannot have custom URLs deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.delete_custom_url_bypass(
    "some example string", PoliciesBypassUrlsRequest1(data=Data6(custom=Custom1(urls=["some example string"])))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomUrlBypassErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.delete_custom_url_bypass(
    "some example string", PoliciesBypassUrlsRequest1(data=Data6(custom=Custom1(urls=["some example string"])))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomUrlBypassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to delete URL bypass entries from |
| <code>body</code> | <code>[PoliciesBypassUrlsRequest1](dope_security/models/policies_bypass_urls_request1.py) \| [PoliciesBypassUrlsRequest1Dict](dope_security/models/policies_bypass_urls_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [DeleteCustomUrlBypassErrorBody](dope_security/errors/delete_custom_url_bypass_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[DeleteCustomUrlBypassErrorBody](dope_security/errors/delete_custom_url_bypass_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_policy(policy_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, DeletePolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to delete a custom policy by name.
This removes the policy and unassigns all users and groups from the policy.

The Base Policy cannot be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.delete_policy("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePolicyErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.delete_policy("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeletePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [DeletePolicyErrorBody](dope_security/errors/delete_policy_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[DeletePolicyErrorBody](dope_security/errors/delete_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_application_bypass(policy_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PoliciesBypassApplicationsResponse, GetApplicationBypassErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the application bypass entries for a policy.

The response contains both admin-defined `custom` entries and dope-provided
`default` entries with their per-entry toggle state, split per platform
(`mac` and `windows`).

When a policy inherits from the base policy, `inheritsFromBase` will be `true`
and the `custom` and `default` entries will reflect the base policy's settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.get_application_bypass("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesBypassApplicationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApplicationBypassErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.get_application_bypass("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesBypassApplicationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApplicationBypassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to retrieve the application bypass for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[PoliciesBypassApplicationsResponse](dope_security/models/policies_bypass_applications_response.py), [GetApplicationBypassErrorBody](dope_security/errors/get_application_bypass_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PoliciesBypassApplicationsResponse](dope_security/models/policies_bypass_applications_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetApplicationBypassErrorBody](dope_security/errors/get_application_bypass_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_policy_assignments(policy_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PoliciesAssignmentsResponse, GetPolicyAssignmentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the users and groups assigned to a policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.get_policy_assignments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesAssignmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPolicyAssignmentsErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.get_policy_assignments("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesAssignmentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPolicyAssignmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to get assignments for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[PoliciesAssignmentsResponse](dope_security/models/policies_assignments_response.py), [GetPolicyAssignmentsErrorBody](dope_security/errors/get_policy_assignments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PoliciesAssignmentsResponse](dope_security/models/policies_assignments_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetPolicyAssignmentsErrorBody](dope_security/errors/get_policy_assignments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_policy_content(policy_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PolicyContentResponse, GetPolicyContentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to retrieve the entire content of a policy, including
categories and custom categories.

When a policy inherits from the base policy, `inheritsFromBase` will be `true`
and the content will reflect the base policy's settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.get_policy_content("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PolicyContentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPolicyContentErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.get_policy_content("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PolicyContentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPolicyContentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to retrieve content for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[PolicyContentResponse](dope_security/models/policy_content_response.py), [GetPolicyContentErrorBody](dope_security/errors/get_policy_content_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PolicyContentResponse](dope_security/models/policy_content_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetPolicyContentErrorBody](dope_security/errors/get_policy_content_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_ssl_inspection(policy_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PoliciesSslInspectionResponse, GetSslInspectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the SSL inspection configuration for a policy.

The response returns `sslInspection` as an object containing the resolved
`state` (always `enabled` or `disabled`) and `inheritsFromBase` indicating
whether the policy inherits SSL inspection from the Base Policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.get_ssl_inspection("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesSslInspectionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSslInspectionErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.get_ssl_inspection("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesSslInspectionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetSslInspectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to retrieve SSL inspection for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[PoliciesSslInspectionResponse](dope_security/models/policies_ssl_inspection_response.py), [GetSslInspectionErrorBody](dope_security/errors/get_ssl_inspection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PoliciesSslInspectionResponse](dope_security/models/policies_ssl_inspection_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetSslInspectionErrorBody](dope_security/errors/get_ssl_inspection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_url_bypass(policy_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PoliciesBypassUrlsResponse, GetUrlBypassErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get the URL bypass entries for a policy.

The response contains both admin-defined `custom` entries and dope-provided
`default` entries with their per-entry toggle state.

When a policy inherits from the base policy, `inheritsFromBase` will be `true`
and the `custom` and `default` entries will reflect the base policy's settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.get_url_bypass("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesBypassUrlsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUrlBypassErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.get_url_bypass("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesBypassUrlsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUrlBypassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to retrieve the URL bypass for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[PoliciesBypassUrlsResponse](dope_security/models/policies_bypass_urls_response.py), [GetUrlBypassErrorBody](dope_security/errors/get_url_bypass_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PoliciesBypassUrlsResponse](dope_security/models/policies_bypass_urls_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetUrlBypassErrorBody](dope_security/errors/get_url_bypass_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_policies(*, first: int | None = 50, after: str | None = None, order: OrderOrStr | None = Order.ASC, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PoliciesResponse, ListPoliciesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to get a paginated list of all your policies, ordered by policy name.

Each item includes the policy name, last-modified timestamp, SSL inspection status, and
the number of conflicting assignments.

The `sslInspection` field returns the effective value (`enabled` or `disabled`). If SSL
inspection is not explicitly configured on a policy, the value is inherited from the Base Policy.

Results are returned in pages using cursor-based pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.list_policies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPoliciesErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.list_policies()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PoliciesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPoliciesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>first</code> | <code>int \| None</code> | An optional pagination param that states the number of records requested from the **start** of the `cursor`. The default value is **50**.<br>**Default**: <code>50</code> |
| <code>after</code> | <code>str \| None</code> | An optional pagination cursor. Pass the `endCursor` from the previous response's `pageInfo` to fetch the next page. Check `hasNextPage` in the previous response's `pageInfo` to determine whether more records are available.<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[OrderOrStr](dope_security/models/enums/order.py) \| None</code> | Sort order for policy names. Defaults to `asc`.<br>**Default**: <code>Order.ASC</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[PoliciesResponse](dope_security/models/policies_response.py), [ListPoliciesErrorBody](dope_security/errors/list_policies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PoliciesResponse](dope_security/models/policies_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[ListPoliciesErrorBody](dope_security/errors/list_policies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_policy_assignments(policy_name: str, body: PoliciesAssignmentsRequest | PoliciesAssignmentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, UpdatePolicyAssignmentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update the users and groups assigned to a policy.

Each provided field fully replaces that assignment list. Omitted fields are preserved.
Send an empty array to unassign all users or groups.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.update_policy_assignments(
    "some example string", PoliciesAssignmentsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePolicyAssignmentsErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.update_policy_assignments(
    "some example string", PoliciesAssignmentsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePolicyAssignmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to update assignments for |
| <code>body</code> | <code>[PoliciesAssignmentsRequest](dope_security/models/policies_assignments_request.py) \| [PoliciesAssignmentsRequestDict](dope_security/models/policies_assignments_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [UpdatePolicyAssignmentsErrorBody](dope_security/errors/update_policy_assignments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[UpdatePolicyAssignmentsErrorBody](dope_security/errors/update_policy_assignments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_policy_exceptions(policy_name: str, body: PolicyContentExceptionsRequest | PolicyContentExceptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, UpdatePolicyExceptionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update user/group-level exceptions on dope and custom categories for a policy.

Exceptions are per-user/group overrides of a category's restriction.
Each exception is keyed by the user or group identifier (e.g. email address) within a category.

A single request can update exceptions across multiple dope and custom categories.
Categories not included in the request remain unchanged. For each category provided, the submitted
exception set is treated as the complete source of truth and fully replaces any existing exceptions.
Any existing entries not included in the request for that category will be removed.
To remove all exceptions from a category, pass an empty object `{}` as its value.

All user and group identifiers are validated against the tenant directory.
If any identifier cannot be resolved, the request fails with a `400 Bad Request`,
and the response includes details of the invalid entries.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.update_policy_exceptions(
    "some example string", PolicyContentExceptionsRequest(data=Data2FlightdeckDopeSecurityPublicApiSpecification())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePolicyExceptionsErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.update_policy_exceptions(
    "some example string", PolicyContentExceptionsRequest(data=Data2FlightdeckDopeSecurityPublicApiSpecification())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePolicyExceptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to update exceptions for |
| <code>body</code> | <code>[PolicyContentExceptionsRequest](dope_security/models/policy_content_exceptions_request.py) \| [PolicyContentExceptionsRequestDict](dope_security/models/policy_content_exceptions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [UpdatePolicyExceptionsErrorBody](dope_security/errors/update_policy_exceptions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[UpdatePolicyExceptionsErrorBody](dope_security/errors/update_policy_exceptions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_policy_restrictions(policy_name: str, body: PolicyContentRestrictionsRequest | PolicyContentRestrictionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, UpdatePolicyRestrictionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update restrictions on dope and custom categories for a policy.

A single call may update restrictions on any combination of dope
and custom categories. Only submitted categories will be updated -
any category not included in the request will be left unchanged.

This API also resets categories back to inheriting from base.
Both dope categories and custom categories inherit from base
(and are reset) as a whole by sending `{inheritsFromBase:true}` in the payload.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.update_policy_restrictions(
    "some example string",
    PolicyContentRestrictionsRequest(data=DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories()),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePolicyRestrictionsErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.update_policy_restrictions(
    "some example string",
    PolicyContentRestrictionsRequest(data=DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories()),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdatePolicyRestrictionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to update restrictions for |
| <code>body</code> | <code>[PolicyContentRestrictionsRequest](dope_security/models/policy_content_restrictions_request.py) \| [PolicyContentRestrictionsRequestDict](dope_security/models/policy_content_restrictions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [UpdatePolicyRestrictionsErrorBody](dope_security/errors/update_policy_restrictions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- OK

**On `Failure`**: `error` is <code>[UpdatePolicyRestrictionsErrorBody](dope_security/errors/update_policy_restrictions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_ssl_inspection(policy_name: str, body: PoliciesSslInspectionRequest | PoliciesSslInspectionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, UpdateSslInspectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to update the SSL inspection configuration for a policy.

The request body must be either:
- `{"state": "enabled" | "disabled"}` to set a custom state on this policy, OR
- `{"inheritsFromBase": true}` to make this policy inherit SSL inspection from the Base Policy.

Exactly one of these two shapes is allowed. Anything else (extra fields,
both fields, `inheritsFromBase: false`) returns `400`. The Base Policy
cannot inherit from itself; setting `inheritsFromBase: true` on the Base
Policy returns `400`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.update_ssl_inspection(
    "some example string",
    PoliciesSslInspectionRequest(data=Data10(ssl_inspection=SslInspectionStateBody(state=State.ENABLED))),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSslInspectionErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.update_ssl_inspection(
    "some example string",
    PoliciesSslInspectionRequest(data=Data10(ssl_inspection=SslInspectionStateBody(state=State.ENABLED))),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSslInspectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to update SSL inspection for |
| <code>body</code> | <code>[PoliciesSslInspectionRequest](dope_security/models/policies_ssl_inspection_request.py) \| [PoliciesSslInspectionRequestDict](dope_security/models/policies_ssl_inspection_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [UpdateSslInspectionErrorBody](dope_security/errors/update_ssl_inspection_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- SSL inspection updated successfully

**On `Failure`**: `error` is <code>[UpdateSslInspectionErrorBody](dope_security/errors/update_ssl_inspection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upsert_application_bypass(policy_name: str, body: PoliciesBypassApplicationsRequest | PoliciesBypassApplicationsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, UpsertApplicationBypassErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upsert custom application bypass entries and/or update default application bypass states for a policy.

**Custom entries** are matched by name: matching names are overwritten, unknown names are added.
Unmentioned custom entries are preserved.

**Default entries** are matched by name: set `state` to `ignored` to suppress a default entry,
or `applied` to re-enable it. Unknown default entry names are silently ignored.

Pass `inheritsFromBase: true` as the entire `data` payload to reset the policy to inherit
all application bypass configuration from the base policy (this drops all custom entries and default
overrides for this policy).

**Detaching from Base**: If a policy inherits from the Base Policy (`inheritsFromBase: true`),
sending `custom` or `default` entries will detach it. Base entries are not copied — include any
you want to keep in the request. Once detached, further Base Policy changes will no longer
propagate to this policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.upsert_application_bypass(
    "some example string", PoliciesBypassApplicationsRequest(data=BaseInheritance())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpsertApplicationBypassErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.upsert_application_bypass(
    "some example string", PoliciesBypassApplicationsRequest(data=BaseInheritance())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpsertApplicationBypassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to update application bypass entries for |
| <code>body</code> | <code>[PoliciesBypassApplicationsRequest](dope_security/models/policies_bypass_applications_request.py) \| [PoliciesBypassApplicationsRequestDict](dope_security/models/policies_bypass_applications_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [UpsertApplicationBypassErrorBody](dope_security/errors/upsert_application_bypass_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- Application bypass updated successfully

**On `Failure`**: `error` is <code>[UpsertApplicationBypassErrorBody](dope_security/errors/upsert_application_bypass_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upsert_url_bypass(policy_name: str, body: PoliciesBypassUrlsRequest | PoliciesBypassUrlsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessMessage, UpsertUrlBypassErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upsert custom URL bypass entries and/or update default URL bypass states for a policy.

**Custom entries** are matched by name: matching names are overwritten, unknown names are added.
Unmentioned custom entries are preserved.

**Default entries** are matched by name: set `state` to `ignored` to suppress a default entry,
or `applied` to re-enable it. Unknown default entry names are silently ignored.

Pass `inheritsFromBase: true` as the entire `data` payload to reset the policy to inherit
all URL bypass configuration from the base policy (this drops all custom entries and default
overrides for this policy).

**Detaching from Base**: If a policy inherits from the Base Policy (`inheritsFromBase: true`),
sending `custom` or `default` entries will detach it. Base entries are not copied — include any
you want to keep in the request. Once detached, further Base Policy changes will no longer
propagate to this policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.policies.with_raw_response.upsert_url_bypass(
    "some example string", PoliciesBypassUrlsRequest(data=BaseInheritance())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpsertUrlBypassErrorBody
```

**Async**

```python
result = await async_client.policies.with_raw_response.upsert_url_bypass(
    "some example string", PoliciesBypassUrlsRequest(data=BaseInheritance())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessMessage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpsertUrlBypassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_name</code> | <code>str</code> | The name of the policy to update URL bypass entries for |
| <code>body</code> | <code>[PoliciesBypassUrlsRequest](dope_security/models/policies_bypass_urls_request.py) \| [PoliciesBypassUrlsRequestDict](dope_security/models/policies_bypass_urls_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](dope_security/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](dope_security/core/results.py)&#91;[SuccessMessage](dope_security/models/success_message.py), [UpsertUrlBypassErrorBody](dope_security/errors/upsert_url_bypass_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessMessage](dope_security/models/success_message.py)</code> -- URL bypass updated successfully

**On `Failure`**: `error` is <code>[UpsertUrlBypassErrorBody](dope_security/errors/upsert_url_bypass_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[ErrorsModel](dope_security/models/errors_model.py)</code> |
| anything unmapped | <code>[RawError](dope_security/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

