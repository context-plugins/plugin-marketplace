# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AmazonLexClient](amazon_lex/client.py)

## Aliases

> Source: [Aliases](amazon_lex/apis/aliases.py)

<details>
<summary><code>def delete_bot_alias(bot_name: str, name: str, *, body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.aliases.delete_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotAliasErrorBody
```

**Async**

```python
try:
    response = await async_client.aliases.delete_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexDeleteBotAliasRequest](amazon_lex/models/models_lex_delete_bot_alias_request.py) \| [ModelsLexDeleteBotAliasRequestDict](amazon_lex/models/models_lex_delete_bot_alias_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotAliasErrorBody](amazon_lex/errors/delete_bot_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bot_alias(bot_name: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> GetBotAliasResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about an Amazon Lex bot alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.aliases.get_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type GetBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotAliasErrorBody
```

**Async**

```python
try:
    response = await async_client.aliases.get_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type GetBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotAliasResponse](amazon_lex/models/get_bot_alias_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBotAliasErrorBody](amazon_lex/errors/get_bot_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bot_aliases(bot_name: str, *, request_options: RequestOptionsOrDict | None = None) -> GetBotAliasesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of aliases for a specified Amazon Lex bot. This operation requires permissions for the lex:GetBotAliases action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.aliases.get_bot_aliases("some example string")
    # TODO: Handle 'response' of type GetBotAliasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotAliasesErrorBody
```

**Async**

```python
try:
    response = await async_client.aliases.get_bot_aliases("some example string")
    # TODO: Handle 'response' of type GetBotAliasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotAliasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotAliasesResponse](amazon_lex/models/get_bot_aliases_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBotAliasesErrorBody](amazon_lex/errors/get_bot_aliases_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_bot_alias(bot_name: str, name: str, *, body: PutBotAliasRequest | PutBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PutBotAliasResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.aliases.put_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type PutBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutBotAliasErrorBody
```

**Async**

```python
try:
    response = await async_client.aliases.put_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type PutBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutBotAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PutBotAliasRequest](amazon_lex/models/put_bot_alias_request.py) \| [PutBotAliasRequestDict](amazon_lex/models/put_bot_alias_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutBotAliasResponse](amazon_lex/models/put_bot_alias_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[PutBotAliasErrorBody](amazon_lex/errors/put_bot_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Bots

> Source: [Bots](amazon_lex/apis/bots.py)

<details>
<summary><code>def batch_create_custom_vocabulary_item(bot_id: str, bot_version: str, locale_id: str, *, body: BatchCreateCustomVocabularyItemRequest | BatchCreateCustomVocabularyItemRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BatchCreateCustomVocabularyItemResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.batch_create_custom_vocabulary_item(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BatchCreateCustomVocabularyItemResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchCreateCustomVocabularyItemErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.batch_create_custom_vocabulary_item(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BatchCreateCustomVocabularyItemResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchCreateCustomVocabularyItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BatchCreateCustomVocabularyItemRequest](amazon_lex/models/batch_create_custom_vocabulary_item_request.py) \| [BatchCreateCustomVocabularyItemRequestDict](amazon_lex/models/batch_create_custom_vocabulary_item_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchCreateCustomVocabularyItemResponse](amazon_lex/models/batch_create_custom_vocabulary_item_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[BatchCreateCustomVocabularyItemErrorBody](amazon_lex/errors/batch_create_custom_vocabulary_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_delete_custom_vocabulary_item(bot_id: str, bot_version: str, locale_id: str, *, body: BatchDeleteCustomVocabularyItemRequest | BatchDeleteCustomVocabularyItemRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BatchDeleteCustomVocabularyItemResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.batch_delete_custom_vocabulary_item(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BatchDeleteCustomVocabularyItemResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDeleteCustomVocabularyItemErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.batch_delete_custom_vocabulary_item(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BatchDeleteCustomVocabularyItemResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDeleteCustomVocabularyItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BatchDeleteCustomVocabularyItemRequest](amazon_lex/models/batch_delete_custom_vocabulary_item_request.py) \| [BatchDeleteCustomVocabularyItemRequestDict](amazon_lex/models/batch_delete_custom_vocabulary_item_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchDeleteCustomVocabularyItemResponse](amazon_lex/models/batch_delete_custom_vocabulary_item_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[BatchDeleteCustomVocabularyItemErrorBody](amazon_lex/errors/batch_delete_custom_vocabulary_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_update_custom_vocabulary_item(bot_id: str, bot_version: str, locale_id: str, *, body: BatchUpdateCustomVocabularyItemRequest | BatchUpdateCustomVocabularyItemRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BatchUpdateCustomVocabularyItemResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.batch_update_custom_vocabulary_item(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BatchUpdateCustomVocabularyItemResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchUpdateCustomVocabularyItemErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.batch_update_custom_vocabulary_item(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BatchUpdateCustomVocabularyItemResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchUpdateCustomVocabularyItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BatchUpdateCustomVocabularyItemRequest](amazon_lex/models/batch_update_custom_vocabulary_item_request.py) \| [BatchUpdateCustomVocabularyItemRequestDict](amazon_lex/models/batch_update_custom_vocabulary_item_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchUpdateCustomVocabularyItemResponse](amazon_lex/models/batch_update_custom_vocabulary_item_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[BatchUpdateCustomVocabularyItemErrorBody](amazon_lex/errors/batch_update_custom_vocabulary_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def build_bot_locale(bot_id: str, bot_version: str, locale_id: str, *, body: BuildBotLocaleRequest | BuildBotLocaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BuildBotLocaleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.build_bot_locale("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type BuildBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BuildBotLocaleErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.build_bot_locale(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BuildBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BuildBotLocaleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BuildBotLocaleRequest](amazon_lex/models/build_bot_locale_request.py) \| [BuildBotLocaleRequestDict](amazon_lex/models/build_bot_locale_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildBotLocaleResponse](amazon_lex/models/build_bot_locale_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[BuildBotLocaleErrorBody](amazon_lex/errors/build_bot_locale_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bot(*, body: CreateBotRequest | CreateBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateBotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Lex conversational bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.create_bot()
    # TODO: Handle 'response' of type CreateBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.create_bot()
    # TODO: Handle 'response' of type CreateBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateBotRequest](amazon_lex/models/create_bot_request.py) \| [CreateBotRequestDict](amazon_lex/models/create_bot_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotResponse](amazon_lex/models/create_bot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateBotErrorBody](amazon_lex/errors/create_bot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bot_alias(bot_id: str, *, body: CreateBotAliasRequest | CreateBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateBotAliasResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.create_bot_alias("some example string")
    # TODO: Handle 'response' of type CreateBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotAliasErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.create_bot_alias("some example string")
    # TODO: Handle 'response' of type CreateBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateBotAliasRequest](amazon_lex/models/create_bot_alias_request.py) \| [CreateBotAliasRequestDict](amazon_lex/models/create_bot_alias_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotAliasResponse](amazon_lex/models/create_bot_alias_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateBotAliasErrorBody](amazon_lex/errors/create_bot_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bot_locale(bot_id: str, bot_version: str, *, body: CreateBotLocaleRequest | CreateBotLocaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateBotLocaleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.create_bot_locale("some example string", "some example string")
    # TODO: Handle 'response' of type CreateBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotLocaleErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.create_bot_locale("some example string", "some example string")
    # TODO: Handle 'response' of type CreateBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotLocaleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateBotLocaleRequest](amazon_lex/models/create_bot_locale_request.py) \| [CreateBotLocaleRequestDict](amazon_lex/models/create_bot_locale_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotLocaleResponse](amazon_lex/models/create_bot_locale_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateBotLocaleErrorBody](amazon_lex/errors/create_bot_locale_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bot_replica(bot_id: str, *, body: CreateBotReplicaRequest | CreateBotReplicaRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateBotReplicaResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Action to create a replication of the source bot in the secondary region.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.create_bot_replica("some example string")
    # TODO: Handle 'response' of type CreateBotReplicaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotReplicaErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.create_bot_replica("some example string")
    # TODO: Handle 'response' of type CreateBotReplicaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotReplicaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateBotReplicaRequest](amazon_lex/models/create_bot_replica_request.py) \| [CreateBotReplicaRequestDict](amazon_lex/models/create_bot_replica_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotReplicaResponse](amazon_lex/models/create_bot_replica_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateBotReplicaErrorBody](amazon_lex/errors/create_bot_replica_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bot_version(bot_id: str, *, body: CreateBotVersionRequest | CreateBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateBotVersionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always represent the total number of versions created of the bot, not the current number of versions. If a bot version is deleted, that bot version number will not be reused.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.create_bot_version("some example string")
    # TODO: Handle 'response' of type CreateBotVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotVersionErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.create_bot_version("some example string")
    # TODO: Handle 'response' of type CreateBotVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateBotVersionRequest](amazon_lex/models/create_bot_version_request.py) \| [CreateBotVersionRequestDict](amazon_lex/models/create_bot_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateBotVersionResponse](amazon_lex/models/create_bot_version_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateBotVersionErrorBody](amazon_lex/errors/create_bot_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bot_version1(name: str, *, body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ModelsLexCreateBotVersionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permission for the lex:CreateBotVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.create_bot_version1("some example string")
    # TODO: Handle 'response' of type ModelsLexCreateBotVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotVersion1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.create_bot_version1("some example string")
    # TODO: Handle 'response' of type ModelsLexCreateBotVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotVersion1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexCreateBotVersionRequest](amazon_lex/models/models_lex_create_bot_version_request.py) \| [ModelsLexCreateBotVersionRequestDict](amazon_lex/models/models_lex_create_bot_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsLexCreateBotVersionResponse](amazon_lex/models/models_lex_create_bot_version_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateBotVersion1ErrorBody](amazon_lex/errors/create_bot_version1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_intent(bot_id: str, bot_version: str, locale_id: str, *, body: CreateIntentRequest | CreateIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateIntentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an intent. To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with yo

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.create_intent("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type CreateIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateIntentErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.create_intent(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CreateIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateIntentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateIntentRequest](amazon_lex/models/create_intent_request.py) \| [CreateIntentRequestDict](amazon_lex/models/create_intent_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateIntentResponse](amazon_lex/models/create_intent_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateIntentErrorBody](amazon_lex/errors/create_intent_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_slot(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, body: CreateSlotRequest | CreateSlotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateSlotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.create_slot(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CreateSlotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSlotErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.create_slot(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CreateSlotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSlotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>intent_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateSlotRequest](amazon_lex/models/create_slot_request.py) \| [CreateSlotRequestDict](amazon_lex/models/create_slot_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSlotResponse](amazon_lex/models/create_slot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateSlotErrorBody](amazon_lex/errors/create_slot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_slot_type(bot_id: str, bot_version: str, locale_id: str, *, body: CreateSlotTypeRequest | CreateSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateSlotTypeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.create_slot_type("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type CreateSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSlotTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.create_slot_type(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CreateSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSlotTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateSlotTypeRequest](amazon_lex/models/create_slot_type_request.py) \| [CreateSlotTypeRequestDict](amazon_lex/models/create_slot_type_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSlotTypeResponse](amazon_lex/models/create_slot_type_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateSlotTypeErrorBody](amazon_lex/errors/create_slot_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot(bot_id: str, *, body: DeleteBotRequest | DeleteBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteBotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of a bot, including the Draft version. To delete a specific version, use the DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias, the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias, set the skipResourceInUseCheck parameter to true.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_bot("some example string")
    # TODO: Handle 'response' of type DeleteBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_bot("some example string")
    # TODO: Handle 'response' of type DeleteBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteBotRequest](amazon_lex/models/delete_bot_request.py) \| [DeleteBotRequestDict](amazon_lex/models/delete_bot_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotResponse](amazon_lex/models/delete_bot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotErrorBody](amazon_lex/errors/delete_bot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot1(name: str, *, body: ModelsLexDeleteBotRequest | ModelsLexDeleteBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for the lex:DeleteBot action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_bot1("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBot1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_bot1("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBot1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexDeleteBotRequest](amazon_lex/models/models_lex_delete_bot_request.py) \| [ModelsLexDeleteBotRequestDict](amazon_lex/models/models_lex_delete_bot_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBot1ErrorBody](amazon_lex/errors/delete_bot1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot_alias1(bot_name: str, name: str, *, body: ModelsLexDeleteBotAliasRequest | ModelsLexDeleteBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_bot_alias1("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotAlias1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_bot_alias1("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotAlias1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexDeleteBotAliasRequest](amazon_lex/models/models_lex_delete_bot_alias_request.py) \| [ModelsLexDeleteBotAliasRequestDict](amazon_lex/models/models_lex_delete_bot_alias_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotAlias1ErrorBody](amazon_lex/errors/delete_bot_alias1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot_alias2(bot_id: str, bot_alias_id: str, *, body: DeleteBotAliasRequest | DeleteBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteBotAliasResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_bot_alias2("some example string", "some example string")
    # TODO: Handle 'response' of type DeleteBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotAlias2ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_bot_alias2("some example string", "some example string")
    # TODO: Handle 'response' of type DeleteBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotAlias2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteBotAliasRequest](amazon_lex/models/delete_bot_alias_request.py) \| [DeleteBotAliasRequestDict](amazon_lex/models/delete_bot_alias_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotAliasResponse](amazon_lex/models/delete_bot_alias_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotAlias2ErrorBody](amazon_lex/errors/delete_bot_alias2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot_analyzer_recommendation(bot_id: str, bot_analyzer_request_id: str, *, body: DeleteBotAnalyzerRecommendationRequest | DeleteBotAnalyzerRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes the recommendations and analysis results for a specific bot analysis request. This operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be retrieved. The analysis request ID will still appear in the history list, but attempting to describe the recommendations will return a ResourceNotFoundException.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_bot_analyzer_recommendation("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotAnalyzerRecommendationErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_bot_analyzer_recommendation("some example string", "some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotAnalyzerRecommendationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_analyzer_request_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteBotAnalyzerRecommendationRequest](amazon_lex/models/delete_bot_analyzer_recommendation_request.py) \| [DeleteBotAnalyzerRecommendationRequestDict](amazon_lex/models/delete_bot_analyzer_recommendation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotAnalyzerRecommendationErrorBody](amazon_lex/errors/delete_bot_analyzer_recommendation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot_locale(bot_id: str, bot_version: str, locale_id: str, *, body: DeleteBotLocaleRequest | DeleteBotLocaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteBotLocaleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_bot_locale("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type DeleteBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotLocaleErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_bot_locale(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeleteBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotLocaleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteBotLocaleRequest](amazon_lex/models/delete_bot_locale_request.py) \| [DeleteBotLocaleRequestDict](amazon_lex/models/delete_bot_locale_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotLocaleResponse](amazon_lex/models/delete_bot_locale_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotLocaleErrorBody](amazon_lex/errors/delete_bot_locale_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot_replica(bot_id: str, replica_region: str, *, body: DeleteBotReplicaRequest | DeleteBotReplicaRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteBotReplicaResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to delete the replicated bot in the secondary region.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_bot_replica("some example string", "some example string")
    # TODO: Handle 'response' of type DeleteBotReplicaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotReplicaErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_bot_replica("some example string", "some example string")
    # TODO: Handle 'response' of type DeleteBotReplicaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotReplicaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>replica_region</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteBotReplicaRequest](amazon_lex/models/delete_bot_replica_request.py) \| [DeleteBotReplicaRequestDict](amazon_lex/models/delete_bot_replica_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotReplicaResponse](amazon_lex/models/delete_bot_replica_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotReplicaErrorBody](amazon_lex/errors/delete_bot_replica_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot_version(bot_id: str, bot_version: str, *, body: DeleteBotVersionRequest | DeleteBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteBotVersionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_bot_version("some example string", "some example string")
    # TODO: Handle 'response' of type DeleteBotVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotVersionErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_bot_version("some example string", "some example string")
    # TODO: Handle 'response' of type DeleteBotVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteBotVersionRequest](amazon_lex/models/delete_bot_version_request.py) \| [DeleteBotVersionRequestDict](amazon_lex/models/delete_bot_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteBotVersionResponse](amazon_lex/models/delete_bot_version_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotVersionErrorBody](amazon_lex/errors/delete_bot_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot_version1(name: str, version: str, *, body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This operation requires permissions for the lex:DeleteBotVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_bot_version1("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotVersion1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_bot_version1("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotVersion1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>version</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexDeleteBotVersionRequest](amazon_lex/models/models_lex_delete_bot_version_request.py) \| [ModelsLexDeleteBotVersionRequestDict](amazon_lex/models/models_lex_delete_bot_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotVersion1ErrorBody](amazon_lex/errors/delete_bot_version1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_custom_vocabulary(bot_id: str, bot_version: str, locale_id: str, *, body: DeleteCustomVocabularyRequest | DeleteCustomVocabularyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteCustomVocabularyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a custom vocabulary from the specified locale in the specified bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_custom_vocabulary("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type DeleteCustomVocabularyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomVocabularyErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_custom_vocabulary(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeleteCustomVocabularyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomVocabularyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteCustomVocabularyRequest](amazon_lex/models/delete_custom_vocabulary_request.py) \| [DeleteCustomVocabularyRequestDict](amazon_lex/models/delete_custom_vocabulary_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteCustomVocabularyResponse](amazon_lex/models/delete_custom_vocabulary_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteCustomVocabularyErrorBody](amazon_lex/errors/delete_custom_vocabulary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_intent(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, body: DeleteIntentRequest | DeleteIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_intent(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteIntentErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_intent(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteIntentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>intent_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteIntentRequest](amazon_lex/models/delete_intent_request.py) \| [DeleteIntentRequestDict](amazon_lex/models/delete_intent_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteIntentErrorBody](amazon_lex/errors/delete_intent_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_intent1(name: str, *, body: ModelsLexDeleteIntentRequest | ModelsLexDeleteIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove those references first. If you get the ResourceInUseException exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to DeleteIntent is successful. This operation requires permission for the lex:DeleteIntent action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_intent1("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteIntent1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_intent1("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteIntent1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexDeleteIntentRequest](amazon_lex/models/models_lex_delete_intent_request.py) \| [ModelsLexDeleteIntentRequestDict](amazon_lex/models/models_lex_delete_intent_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteIntent1ErrorBody](amazon_lex/errors/delete_intent1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_session(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: DeleteSessionRequest | DeleteSessionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteSessionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes session information for a specified bot, alias, and user ID. You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException. If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_session(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeleteSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSessionErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_session(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DeleteSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias_id</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteSessionRequest](amazon_lex/models/delete_session_request.py) \| [DeleteSessionRequestDict](amazon_lex/models/delete_session_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteSessionResponse](amazon_lex/models/delete_session_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteSessionErrorBody](amazon_lex/errors/delete_session_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RuntimeV2LexValidationException](amazon_lex/models/runtime_v2_lex_validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_lex/models/access_denied_exception.py)</code> |
| 404 | <code>[RuntimeV2LexResourceNotFoundException](amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py)</code> |
| 409 | <code>[RuntimeV2LexConflictException](amazon_lex/models/runtime_v2_lex_conflict_exception.py)</code> |
| 429 | <code>[RuntimeV2LexThrottlingException](amazon_lex/models/runtime_v2_lex_throttling_exception.py)</code> |
| 500 | <code>[RuntimeV2LexInternalServerException](amazon_lex/models/runtime_v2_lex_internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_session1(bot_name: str, bot_alias: str, user_id: str, *, body: RuntimeLexDeleteSessionRequest | RuntimeLexDeleteSessionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RuntimeLexDeleteSessionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes session information for a specified bot, alias, and user ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_session1("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type RuntimeLexDeleteSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSession1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_session1(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RuntimeLexDeleteSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSession1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RuntimeLexDeleteSessionRequest](amazon_lex/models/runtime_lex_delete_session_request.py) \| [RuntimeLexDeleteSessionRequestDict](amazon_lex/models/runtime_lex_delete_session_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RuntimeLexDeleteSessionResponse](amazon_lex/models/runtime_lex_delete_session_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteSession1ErrorBody](amazon_lex/errors/delete_session1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_slot(bot_id: str, bot_version: str, locale_id: str, intent_id: str, slot_id: str, *, body: DeleteSlotRequest | DeleteSlotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified slot from an intent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_slot(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_slot(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>intent_id</code> | <code>str</code> | Value sent with the request. |
| <code>slot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteSlotRequest](amazon_lex/models/delete_slot_request.py) \| [DeleteSlotRequestDict](amazon_lex/models/delete_slot_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteSlotErrorBody](amazon_lex/errors/delete_slot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_slot_type(bot_id: str, bot_version: str, locale_id: str, slot_type_id: str, *, body: DeleteSlotTypeRequest | DeleteSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_slot_type(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_slot_type(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>slot_type_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteSlotTypeRequest](amazon_lex/models/delete_slot_type_request.py) \| [DeleteSlotTypeRequestDict](amazon_lex/models/delete_slot_type_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteSlotTypeErrorBody](amazon_lex/errors/delete_slot_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_slot_type1(name: str, *, body: ModelsLexDeleteSlotTypeRequest | ModelsLexDeleteSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. If you get the ResourceInUseException exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the DeleteSlotType call is successful. This operation requires permission for the lex:DeleteSlotType action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_slot_type1("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotType1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_slot_type1("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotType1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexDeleteSlotTypeRequest](amazon_lex/models/models_lex_delete_slot_type_request.py) \| [ModelsLexDeleteSlotTypeRequestDict](amazon_lex/models/models_lex_delete_slot_type_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteSlotType1ErrorBody](amazon_lex/errors/delete_slot_type1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_utterances(bot_id: str, *, body: DeleteUtterancesRequest | DeleteUtterancesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the ListAggregatedUtterances operation are deleted after 15 days.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_utterances("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUtterancesErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_utterances("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUtterancesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteUtterancesRequest](amazon_lex/models/delete_utterances_request.py) \| [DeleteUtterancesRequestDict](amazon_lex/models/delete_utterances_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteUtterancesErrorBody](amazon_lex/errors/delete_utterances_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_utterances1(bot_name: str, user_id: str, *, body: ModelsLexDeleteUtterancesRequest | ModelsLexDeleteUtterancesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the lex:DeleteUtterances action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.delete_utterances1("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUtterances1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.delete_utterances1("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUtterances1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexDeleteUtterancesRequest](amazon_lex/models/models_lex_delete_utterances_request.py) \| [ModelsLexDeleteUtterancesRequestDict](amazon_lex/models/models_lex_delete_utterances_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteUtterances1ErrorBody](amazon_lex/errors/delete_utterances1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bot(bot_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeBotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata information about a bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_bot("some example string")
    # TODO: Handle 'response' of type DescribeBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_bot("some example string")
    # TODO: Handle 'response' of type DescribeBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotResponse](amazon_lex/models/describe_bot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeBotErrorBody](amazon_lex/errors/describe_bot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bot_alias(bot_id: str, bot_alias_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeBotAliasResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a specific bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type DescribeBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotAliasErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type DescribeBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotAliasResponse](amazon_lex/models/describe_bot_alias_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeBotAliasErrorBody](amazon_lex/errors/describe_bot_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bot_analyzer_recommendation(bot_id: str, bot_analyzer_request_id: str, *, body: DescribeBotAnalyzerRecommendationRequest | DescribeBotAnalyzerRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DescribeBotAnalyzerRecommendationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available status before recommendations can be retrieved. Recommendations are returned with pagination support. Each recommendation includes the issue location, priority level, detailed description, and proposed fix.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_bot_analyzer_recommendation("some example string", "some example string")
    # TODO: Handle 'response' of type DescribeBotAnalyzerRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotAnalyzerRecommendationErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_bot_analyzer_recommendation(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeBotAnalyzerRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotAnalyzerRecommendationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_analyzer_request_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DescribeBotAnalyzerRecommendationRequest](amazon_lex/models/describe_bot_analyzer_recommendation_request.py) \| [DescribeBotAnalyzerRecommendationRequestDict](amazon_lex/models/describe_bot_analyzer_recommendation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotAnalyzerRecommendationResponse](amazon_lex/models/describe_bot_analyzer_recommendation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeBotAnalyzerRecommendationErrorBody](amazon_lex/errors/describe_bot_analyzer_recommendation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bot_locale(bot_id: str, bot_version: str, locale_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeBotLocaleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the settings that a bot has for a specific locale.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_bot_locale("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type DescribeBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotLocaleErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_bot_locale(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotLocaleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotLocaleResponse](amazon_lex/models/describe_bot_locale_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeBotLocaleErrorBody](amazon_lex/errors/describe_bot_locale_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bot_recommendation(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeBotRecommendationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_bot_recommendation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeBotRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotRecommendationErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_bot_recommendation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeBotRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotRecommendationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_recommendation_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotRecommendationResponse](amazon_lex/models/describe_bot_recommendation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeBotRecommendationErrorBody](amazon_lex/errors/describe_bot_recommendation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bot_replica(bot_id: str, replica_region: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeBotReplicaResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Monitors the bot replication status through the UI console.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_bot_replica("some example string", "some example string")
    # TODO: Handle 'response' of type DescribeBotReplicaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotReplicaErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_bot_replica("some example string", "some example string")
    # TODO: Handle 'response' of type DescribeBotReplicaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotReplicaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>replica_region</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotReplicaResponse](amazon_lex/models/describe_bot_replica_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeBotReplicaErrorBody](amazon_lex/errors/describe_bot_replica_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bot_resource_generation(bot_id: str, bot_version: str, locale_id: str, generation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeBotResourceGenerationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a request to generate a bot through natural language description, made through the StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_bot_resource_generation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeBotResourceGenerationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotResourceGenerationErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_bot_resource_generation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeBotResourceGenerationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotResourceGenerationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>generation_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotResourceGenerationResponse](amazon_lex/models/describe_bot_resource_generation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeBotResourceGenerationErrorBody](amazon_lex/errors/describe_bot_resource_generation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bot_version(bot_id: str, bot_version: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeBotVersionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata about a version of a bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_bot_version("some example string", "some example string")
    # TODO: Handle 'response' of type DescribeBotVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotVersionErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_bot_version("some example string", "some example string")
    # TODO: Handle 'response' of type DescribeBotVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBotVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeBotVersionResponse](amazon_lex/models/describe_bot_version_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeBotVersionErrorBody](amazon_lex/errors/describe_bot_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_custom_vocabulary_metadata(bot_id: str, bot_version: str, locale_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeCustomVocabularyMetadataResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metadata information about a custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_custom_vocabulary_metadata(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeCustomVocabularyMetadataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCustomVocabularyMetadataErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_custom_vocabulary_metadata(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeCustomVocabularyMetadataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCustomVocabularyMetadataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeCustomVocabularyMetadataResponse](amazon_lex/models/describe_custom_vocabulary_metadata_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeCustomVocabularyMetadataErrorBody](amazon_lex/errors/describe_custom_vocabulary_metadata_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_intent(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeIntentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata about an intent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_intent(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeIntentErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_intent(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeIntentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>intent_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeIntentResponse](amazon_lex/models/describe_intent_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeIntentErrorBody](amazon_lex/errors/describe_intent_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_slot(bot_id: str, bot_version: str, locale_id: str, intent_id: str, slot_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeSlotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about a slot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_slot(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type DescribeSlotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSlotErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_slot(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type DescribeSlotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSlotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>intent_id</code> | <code>str</code> | Value sent with the request. |
| <code>slot_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeSlotResponse](amazon_lex/models/describe_slot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeSlotErrorBody](amazon_lex/errors/describe_slot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_slot_type(bot_id: str, bot_version: str, locale_id: str, slot_type_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeSlotTypeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about a slot type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.describe_slot_type(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSlotTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.describe_slot_type(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type DescribeSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSlotTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>slot_type_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeSlotTypeResponse](amazon_lex/models/describe_slot_type_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeSlotTypeErrorBody](amazon_lex/errors/describe_slot_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def generate_bot_element(bot_id: str, bot_version: str, locale_id: str, *, body: GenerateBotElementRequest | GenerateBotElementRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> GenerateBotElementResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates sample utterances for an intent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.generate_bot_element("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type GenerateBotElementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GenerateBotElementErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.generate_bot_element(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GenerateBotElementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GenerateBotElementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[GenerateBotElementRequest](amazon_lex/models/generate_bot_element_request.py) \| [GenerateBotElementRequestDict](amazon_lex/models/generate_bot_element_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenerateBotElementResponse](amazon_lex/models/generate_bot_element_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GenerateBotElementErrorBody](amazon_lex/errors/generate_bot_element_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bots(*, request_options: RequestOptionsOrDict | None = None) -> GetBotsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns bot information as follows: If you provide the nameContains field, the response includes information for the $LATEST version of all bots whose name contains the specified string. If you don't specify the nameContains field, the operation returns information about the $LATEST version of all of your bots. This operation requires permission for the lex:GetBots action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.get_bots()
    # TODO: Handle 'response' of type GetBotsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.get_bots()
    # TODO: Handle 'response' of type GetBotsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotsResponse](amazon_lex/models/get_bots_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBotsErrorBody](amazon_lex/errors/get_bots_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> GetSessionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns session information for a specified bot, alias, and user. For example, you can use this operation to retrieve session information for a user that has left a long-running session in use. If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a BadRequestException. If the locale doesn't exist or is not enabled for the alias, you receive a BadRequestException.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.get_session(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.get_session(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias_id</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSessionResponse](amazon_lex/models/get_session_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetSessionErrorBody](amazon_lex/errors/get_session_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RuntimeV2LexValidationException](amazon_lex/models/runtime_v2_lex_validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_lex/models/access_denied_exception.py)</code> |
| 404 | <code>[RuntimeV2LexResourceNotFoundException](amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py)</code> |
| 429 | <code>[RuntimeV2LexThrottlingException](amazon_lex/models/runtime_v2_lex_throttling_exception.py)</code> |
| 500 | <code>[RuntimeV2LexInternalServerException](amazon_lex/models/runtime_v2_lex_internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session1(bot_name: str, bot_alias: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> RuntimeLexGetSessionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns session information for a specified bot, alias, and user ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.get_session1("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type RuntimeLexGetSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSession1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.get_session1("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type RuntimeLexGetSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSession1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RuntimeLexGetSessionResponse](amazon_lex/models/runtime_lex_get_session_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetSession1ErrorBody](amazon_lex/errors/get_session1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_aggregated_utterances(bot_id: str, *, body: ListAggregatedUtterancesRequest | ListAggregatedUtterancesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListAggregatedUtterancesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response. You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the following conditions: The childDirected field was set to true when the bot was created. You are using slot obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_aggregated_utterances("some example string")
    # TODO: Handle 'response' of type ListAggregatedUtterancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAggregatedUtterancesErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_aggregated_utterances("some example string")
    # TODO: Handle 'response' of type ListAggregatedUtterancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAggregatedUtterancesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListAggregatedUtterancesRequest](amazon_lex/models/list_aggregated_utterances_request.py) \| [ListAggregatedUtterancesRequestDict](amazon_lex/models/list_aggregated_utterances_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAggregatedUtterancesResponse](amazon_lex/models/list_aggregated_utterances_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListAggregatedUtterancesErrorBody](amazon_lex/errors/list_aggregated_utterances_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bot_alias_replicas(bot_id: str, replica_region: str, *, body: ListBotAliasReplicasRequest | ListBotAliasReplicasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotAliasReplicasResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to list the replicated bots created from the source bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bot_alias_replicas("some example string", "some example string")
    # TODO: Handle 'response' of type ListBotAliasReplicasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotAliasReplicasErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bot_alias_replicas("some example string", "some example string")
    # TODO: Handle 'response' of type ListBotAliasReplicasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotAliasReplicasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>replica_region</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBotAliasReplicasRequest](amazon_lex/models/list_bot_alias_replicas_request.py) \| [ListBotAliasReplicasRequestDict](amazon_lex/models/list_bot_alias_replicas_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotAliasReplicasResponse](amazon_lex/models/list_bot_alias_replicas_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotAliasReplicasErrorBody](amazon_lex/errors/list_bot_alias_replicas_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bot_aliases(bot_id: str, *, body: ListBotAliasesRequest | ListBotAliasesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotAliasesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of aliases for the specified bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bot_aliases("some example string")
    # TODO: Handle 'response' of type ListBotAliasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotAliasesErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bot_aliases("some example string")
    # TODO: Handle 'response' of type ListBotAliasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotAliasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBotAliasesRequest](amazon_lex/models/list_bot_aliases_request.py) \| [ListBotAliasesRequestDict](amazon_lex/models/list_bot_aliases_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotAliasesResponse](amazon_lex/models/list_bot_aliases_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotAliasesErrorBody](amazon_lex/errors/list_bot_aliases_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bot_analyzer_history(bot_id: str, *, body: ListBotAnalyzerHistoryRequest | ListBotAnalyzerHistoryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotAnalyzerHistoryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of historical bot analysis executions for a specific bot. You can filter the results by locale and bot version. The history includes all analysis executions regardless of their status, allowing you to track past analyses and their outcomes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bot_analyzer_history("some example string")
    # TODO: Handle 'response' of type ListBotAnalyzerHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotAnalyzerHistoryErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bot_analyzer_history("some example string")
    # TODO: Handle 'response' of type ListBotAnalyzerHistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotAnalyzerHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBotAnalyzerHistoryRequest](amazon_lex/models/list_bot_analyzer_history_request.py) \| [ListBotAnalyzerHistoryRequestDict](amazon_lex/models/list_bot_analyzer_history_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotAnalyzerHistoryResponse](amazon_lex/models/list_bot_analyzer_history_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotAnalyzerHistoryErrorBody](amazon_lex/errors/list_bot_analyzer_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bot_locales(bot_id: str, bot_version: str, *, body: ListBotLocalesRequest | ListBotLocalesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotLocalesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of locales for the specified bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bot_locales("some example string", "some example string")
    # TODO: Handle 'response' of type ListBotLocalesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotLocalesErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bot_locales("some example string", "some example string")
    # TODO: Handle 'response' of type ListBotLocalesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotLocalesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBotLocalesRequest](amazon_lex/models/list_bot_locales_request.py) \| [ListBotLocalesRequestDict](amazon_lex/models/list_bot_locales_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotLocalesResponse](amazon_lex/models/list_bot_locales_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotLocalesErrorBody](amazon_lex/errors/list_bot_locales_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bot_recommendations(bot_id: str, bot_version: str, locale_id: str, *, body: ListBotRecommendationsRequest | ListBotRecommendationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotRecommendationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bot recommendations that meet the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bot_recommendations("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type ListBotRecommendationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotRecommendationsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bot_recommendations(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListBotRecommendationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotRecommendationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBotRecommendationsRequest](amazon_lex/models/list_bot_recommendations_request.py) \| [ListBotRecommendationsRequestDict](amazon_lex/models/list_bot_recommendations_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotRecommendationsResponse](amazon_lex/models/list_bot_recommendations_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotRecommendationsErrorBody](amazon_lex/errors/list_bot_recommendations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bot_replicas(bot_id: str, *, body: ListBotReplicasRequest | ListBotReplicasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotReplicasResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to list the replicated bots.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bot_replicas("some example string")
    # TODO: Handle 'response' of type ListBotReplicasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotReplicasErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bot_replicas("some example string")
    # TODO: Handle 'response' of type ListBotReplicasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotReplicasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBotReplicasRequest](amazon_lex/models/list_bot_replicas_request.py) \| [ListBotReplicasRequestDict](amazon_lex/models/list_bot_replicas_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotReplicasResponse](amazon_lex/models/list_bot_replicas_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotReplicasErrorBody](amazon_lex/errors/list_bot_replicas_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bot_resource_generations(bot_id: str, bot_version: str, locale_id: str, *, body: ListBotResourceGenerationsRequest | ListBotResourceGenerationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotResourceGenerationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the generation requests made for a bot locale.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bot_resource_generations(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListBotResourceGenerationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotResourceGenerationsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bot_resource_generations(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListBotResourceGenerationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotResourceGenerationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBotResourceGenerationsRequest](amazon_lex/models/list_bot_resource_generations_request.py) \| [ListBotResourceGenerationsRequestDict](amazon_lex/models/list_bot_resource_generations_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotResourceGenerationsResponse](amazon_lex/models/list_bot_resource_generations_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotResourceGenerationsErrorBody](amazon_lex/errors/list_bot_resource_generations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bot_version_replicas(bot_id: str, replica_region: str, *, body: ListBotVersionReplicasRequest | ListBotVersionReplicasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotVersionReplicasResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Contains information about all the versions replication statuses applicable for Global Resiliency.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bot_version_replicas("some example string", "some example string")
    # TODO: Handle 'response' of type ListBotVersionReplicasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotVersionReplicasErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bot_version_replicas("some example string", "some example string")
    # TODO: Handle 'response' of type ListBotVersionReplicasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotVersionReplicasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>replica_region</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBotVersionReplicasRequest](amazon_lex/models/list_bot_version_replicas_request.py) \| [ListBotVersionReplicasRequestDict](amazon_lex/models/list_bot_version_replicas_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotVersionReplicasResponse](amazon_lex/models/list_bot_version_replicas_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotVersionReplicasErrorBody](amazon_lex/errors/list_bot_version_replicas_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bot_versions(bot_id: str, *, body: ListBotVersionsRequest | ListBotVersionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotVersionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always returns at least one version, the DRAFT version.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bot_versions("some example string")
    # TODO: Handle 'response' of type ListBotVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bot_versions("some example string")
    # TODO: Handle 'response' of type ListBotVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBotVersionsRequest](amazon_lex/models/list_bot_versions_request.py) \| [ListBotVersionsRequestDict](amazon_lex/models/list_bot_versions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotVersionsResponse](amazon_lex/models/list_bot_versions_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotVersionsErrorBody](amazon_lex/errors/list_bot_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bots(*, body: ListBotsRequest | ListBotsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBotsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of available bots.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_bots()
    # TODO: Handle 'response' of type ListBotsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_bots()
    # TODO: Handle 'response' of type ListBotsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBotsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListBotsRequest](amazon_lex/models/list_bots_request.py) \| [ListBotsRequestDict](amazon_lex/models/list_bots_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBotsResponse](amazon_lex/models/list_bots_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBotsErrorBody](amazon_lex/errors/list_bots_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_custom_vocabulary_items(bot_id: str, bot_version: str, locale_id: str, *, body: ListCustomVocabularyItemsRequest | ListCustomVocabularyItemsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListCustomVocabularyItemsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_custom_vocabulary_items(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListCustomVocabularyItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomVocabularyItemsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_custom_vocabulary_items(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListCustomVocabularyItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomVocabularyItemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListCustomVocabularyItemsRequest](amazon_lex/models/list_custom_vocabulary_items_request.py) \| [ListCustomVocabularyItemsRequestDict](amazon_lex/models/list_custom_vocabulary_items_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCustomVocabularyItemsResponse](amazon_lex/models/list_custom_vocabulary_items_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListCustomVocabularyItemsErrorBody](amazon_lex/errors/list_custom_vocabulary_items_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_intent_metrics(bot_id: str, *, body: ListIntentMetricsRequest | ListIntentMetricsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListIntentMetricsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary metrics for the intents in your bot. The following fields are required: metrics – A list of AnalyticsIntentMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. You can specify only one order in a given request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_intent_metrics("some example string")
    # TODO: Handle 'response' of type ListIntentMetricsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntentMetricsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_intent_metrics("some example string")
    # TODO: Handle 'response' of type ListIntentMetricsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntentMetricsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListIntentMetricsRequest](amazon_lex/models/list_intent_metrics_request.py) \| [ListIntentMetricsRequestDict](amazon_lex/models/list_intent_metrics_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIntentMetricsResponse](amazon_lex/models/list_intent_metrics_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListIntentMetricsErrorBody](amazon_lex/errors/list_intent_metrics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_intent_paths(bot_id: str, *, body: ListIntentPathsRequest | ListIntentPathsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListIntentPathsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results. intentPath – Define an order of intents for which you want to retrieve metrics. Separate intents in the path with a forward slash. For example, populate the intentPath field with /BookCar/BookHotel to see details about how many times users invoked the BookCar and BookHotel intents in that order. Use the optional filters field to filter the results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_intent_paths("some example string")
    # TODO: Handle 'response' of type ListIntentPathsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntentPathsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_intent_paths("some example string")
    # TODO: Handle 'response' of type ListIntentPathsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntentPathsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListIntentPathsRequest](amazon_lex/models/list_intent_paths_request.py) \| [ListIntentPathsRequestDict](amazon_lex/models/list_intent_paths_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIntentPathsResponse](amazon_lex/models/list_intent_paths_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListIntentPathsErrorBody](amazon_lex/errors/list_intent_paths_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_intent_stage_metrics(bot_id: str, *, body: ListIntentStageMetricsRequest | ListIntentStageMetricsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListIntentStageMetricsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary metrics for the stages within intents in your bot. The following fields are required: metrics – A list of AnalyticsIntentStageMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. You can only specify one order in a given request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_intent_stage_metrics("some example string")
    # TODO: Handle 'response' of type ListIntentStageMetricsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntentStageMetricsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_intent_stage_metrics("some example string")
    # TODO: Handle 'response' of type ListIntentStageMetricsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntentStageMetricsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListIntentStageMetricsRequest](amazon_lex/models/list_intent_stage_metrics_request.py) \| [ListIntentStageMetricsRequestDict](amazon_lex/models/list_intent_stage_metrics_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIntentStageMetricsResponse](amazon_lex/models/list_intent_stage_metrics_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListIntentStageMetricsErrorBody](amazon_lex/errors/list_intent_stage_metrics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_intents(bot_id: str, bot_version: str, locale_id: str, *, body: ListIntentsRequest | ListIntentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListIntentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of intents that meet the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_intents("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type ListIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntentsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_intents("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type ListIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListIntentsRequest](amazon_lex/models/list_intents_request.py) \| [ListIntentsRequestDict](amazon_lex/models/list_intents_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIntentsResponse](amazon_lex/models/list_intents_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListIntentsErrorBody](amazon_lex/errors/list_intents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_recommended_intents(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, body: ListRecommendedIntentsRequest | ListRecommendedIntentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListRecommendedIntentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_recommended_intents(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListRecommendedIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecommendedIntentsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_recommended_intents(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListRecommendedIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecommendedIntentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_recommendation_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListRecommendedIntentsRequest](amazon_lex/models/list_recommended_intents_request.py) \| [ListRecommendedIntentsRequestDict](amazon_lex/models/list_recommended_intents_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRecommendedIntentsResponse](amazon_lex/models/list_recommended_intents_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListRecommendedIntentsErrorBody](amazon_lex/errors/list_recommended_intents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_session_analytics_data(bot_id: str, *, body: ListSessionAnalyticsDataRequest | ListSessionAnalyticsDataRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListSessionAnalyticsDataResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and endDateTime fields are required. These fields define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_session_analytics_data("some example string")
    # TODO: Handle 'response' of type ListSessionAnalyticsDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSessionAnalyticsDataErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_session_analytics_data("some example string")
    # TODO: Handle 'response' of type ListSessionAnalyticsDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSessionAnalyticsDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListSessionAnalyticsDataRequest](amazon_lex/models/list_session_analytics_data_request.py) \| [ListSessionAnalyticsDataRequestDict](amazon_lex/models/list_session_analytics_data_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSessionAnalyticsDataResponse](amazon_lex/models/list_session_analytics_data_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListSessionAnalyticsDataErrorBody](amazon_lex/errors/list_session_analytics_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_session_metrics(bot_id: str, *, body: ListSessionMetricsRequest | ListSessionMetricsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListSessionMetricsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves summary metrics for the user sessions with your bot. The following fields are required: metrics – A list of AnalyticsSessionMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results. Note that an order field exists in both binBy and metrics. Currently, you can specify it in either field, but not in both.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_session_metrics("some example string")
    # TODO: Handle 'response' of type ListSessionMetricsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSessionMetricsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_session_metrics("some example string")
    # TODO: Handle 'response' of type ListSessionMetricsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSessionMetricsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListSessionMetricsRequest](amazon_lex/models/list_session_metrics_request.py) \| [ListSessionMetricsRequestDict](amazon_lex/models/list_session_metrics_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSessionMetricsResponse](amazon_lex/models/list_session_metrics_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListSessionMetricsErrorBody](amazon_lex/errors/list_session_metrics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_slot_types(bot_id: str, bot_version: str, locale_id: str, *, body: ListSlotTypesRequest | ListSlotTypesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListSlotTypesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of slot types that match the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_slot_types("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type ListSlotTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSlotTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_slot_types(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListSlotTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSlotTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListSlotTypesRequest](amazon_lex/models/list_slot_types_request.py) \| [ListSlotTypesRequestDict](amazon_lex/models/list_slot_types_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSlotTypesResponse](amazon_lex/models/list_slot_types_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListSlotTypesErrorBody](amazon_lex/errors/list_slot_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_slots(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, body: ListSlotsRequest | ListSlotsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListSlotsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of slots that match the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_slots(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListSlotsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSlotsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_slots(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ListSlotsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSlotsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>intent_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListSlotsRequest](amazon_lex/models/list_slots_request.py) \| [ListSlotsRequestDict](amazon_lex/models/list_slots_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSlotsResponse](amazon_lex/models/list_slots_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListSlotsErrorBody](amazon_lex/errors/list_slots_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_utterance_analytics_data(bot_id: str, *, body: ListUtteranceAnalyticsDataRequest | ListUtteranceAnalyticsDataRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListUtteranceAnalyticsDataResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves a list of metadata for individual user utterances to your bot. The following fields are required: startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_utterance_analytics_data("some example string")
    # TODO: Handle 'response' of type ListUtteranceAnalyticsDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUtteranceAnalyticsDataErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_utterance_analytics_data("some example string")
    # TODO: Handle 'response' of type ListUtteranceAnalyticsDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUtteranceAnalyticsDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListUtteranceAnalyticsDataRequest](amazon_lex/models/list_utterance_analytics_data_request.py) \| [ListUtteranceAnalyticsDataRequestDict](amazon_lex/models/list_utterance_analytics_data_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListUtteranceAnalyticsDataResponse](amazon_lex/models/list_utterance_analytics_data_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListUtteranceAnalyticsDataErrorBody](amazon_lex/errors/list_utterance_analytics_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_utterance_metrics(bot_id: str, *, body: ListUtteranceMetricsRequest | ListUtteranceMetricsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListUtteranceMetricsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role. Retrieves summary metrics for the utterances in your bot. The following fields are required: metrics – A list of AnalyticsUtteranceMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order. startDateTime and endDateTime – Define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways: Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results. Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of re

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.list_utterance_metrics("some example string")
    # TODO: Handle 'response' of type ListUtteranceMetricsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUtteranceMetricsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.list_utterance_metrics("some example string")
    # TODO: Handle 'response' of type ListUtteranceMetricsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUtteranceMetricsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListUtteranceMetricsRequest](amazon_lex/models/list_utterance_metrics_request.py) \| [ListUtteranceMetricsRequestDict](amazon_lex/models/list_utterance_metrics_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListUtteranceMetricsResponse](amazon_lex/models/list_utterance_metrics_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListUtteranceMetricsErrorBody](amazon_lex/errors/list_utterance_metrics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_session(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: PutSessionRequest | PutSessionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PutSessionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.put_session(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PutSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSessionErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.put_session(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PutSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias_id</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PutSessionRequest](amazon_lex/models/put_session_request.py) \| [PutSessionRequestDict](amazon_lex/models/put_session_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutSessionResponse](amazon_lex/models/put_session_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[PutSessionErrorBody](amazon_lex/errors/put_session_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RuntimeV2LexValidationException](amazon_lex/models/runtime_v2_lex_validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_lex/models/access_denied_exception.py)</code> |
| 404 | <code>[RuntimeV2LexResourceNotFoundException](amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py)</code> |
| 409 | <code>[RuntimeV2LexConflictException](amazon_lex/models/runtime_v2_lex_conflict_exception.py)</code> |
| 424 | <code>[DependencyFailedException](amazon_lex/models/dependency_failed_exception.py)</code> |
| 429 | <code>[RuntimeV2LexThrottlingException](amazon_lex/models/runtime_v2_lex_throttling_exception.py)</code> |
| 500 | <code>[RuntimeV2LexInternalServerException](amazon_lex/models/runtime_v2_lex_internal_server_exception.py)</code> |
| 502 | <code>[BadGatewayException](amazon_lex/models/bad_gateway_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_session1(bot_name: str, bot_alias: str, user_id: str, *, body: RuntimeLexPutSessionRequest | RuntimeLexPutSessionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RuntimeLexPutSessionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot. For more information, see Managing Sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.put_session1("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type RuntimeLexPutSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSession1ErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.put_session1("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type RuntimeLexPutSessionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSession1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RuntimeLexPutSessionRequest](amazon_lex/models/runtime_lex_put_session_request.py) \| [RuntimeLexPutSessionRequestDict](amazon_lex/models/runtime_lex_put_session_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RuntimeLexPutSessionResponse](amazon_lex/models/runtime_lex_put_session_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[PutSession1ErrorBody](amazon_lex/errors/put_session1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 406 | <code>[NotAcceptableException](amazon_lex/models/not_acceptable_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 424 | <code>[RuntimeLexDependencyFailedException](amazon_lex/models/runtime_lex_dependency_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| 502 | <code>[RuntimeLexBadGatewayException](amazon_lex/models/runtime_lex_bad_gateway_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recognize_text(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: RecognizeTextRequest | RecognizeTextRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RecognizeTextResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot. In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Completion message.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.recognize_text(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RecognizeTextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizeTextErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.recognize_text(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RecognizeTextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizeTextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias_id</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RecognizeTextRequest](amazon_lex/models/recognize_text_request.py) \| [RecognizeTextRequestDict](amazon_lex/models/recognize_text_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecognizeTextResponse](amazon_lex/models/recognize_text_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[RecognizeTextErrorBody](amazon_lex/errors/recognize_text_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RuntimeV2LexValidationException](amazon_lex/models/runtime_v2_lex_validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_lex/models/access_denied_exception.py)</code> |
| 404 | <code>[RuntimeV2LexResourceNotFoundException](amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py)</code> |
| 409 | <code>[RuntimeV2LexConflictException](amazon_lex/models/runtime_v2_lex_conflict_exception.py)</code> |
| 424 | <code>[DependencyFailedException](amazon_lex/models/dependency_failed_exception.py)</code> |
| 429 | <code>[RuntimeV2LexThrottlingException](amazon_lex/models/runtime_v2_lex_throttling_exception.py)</code> |
| 500 | <code>[RuntimeV2LexInternalServerException](amazon_lex/models/runtime_v2_lex_internal_server_exception.py)</code> |
| 502 | <code>[BadGatewayException](amazon_lex/models/bad_gateway_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recognize_utterance(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: RecognizeUtteranceRequest | RecognizeUtteranceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RecognizeUtteranceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot. The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. requestAttributes sessionState The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. inputTranscript interpretations messages requestAttributes sessionState The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.recognize_utterance(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RecognizeUtteranceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizeUtteranceErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.recognize_utterance(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type RecognizeUtteranceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizeUtteranceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias_id</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RecognizeUtteranceRequest](amazon_lex/models/recognize_utterance_request.py) \| [RecognizeUtteranceRequestDict](amazon_lex/models/recognize_utterance_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecognizeUtteranceResponse](amazon_lex/models/recognize_utterance_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[RecognizeUtteranceErrorBody](amazon_lex/errors/recognize_utterance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RuntimeV2LexValidationException](amazon_lex/models/runtime_v2_lex_validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_lex/models/access_denied_exception.py)</code> |
| 404 | <code>[RuntimeV2LexResourceNotFoundException](amazon_lex/models/runtime_v2_lex_resource_not_found_exception.py)</code> |
| 409 | <code>[RuntimeV2LexConflictException](amazon_lex/models/runtime_v2_lex_conflict_exception.py)</code> |
| 424 | <code>[DependencyFailedException](amazon_lex/models/dependency_failed_exception.py)</code> |
| 429 | <code>[RuntimeV2LexThrottlingException](amazon_lex/models/runtime_v2_lex_throttling_exception.py)</code> |
| 500 | <code>[RuntimeV2LexInternalServerException](amazon_lex/models/runtime_v2_lex_internal_server_exception.py)</code> |
| 502 | <code>[BadGatewayException](amazon_lex/models/bad_gateway_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_associated_transcripts(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, body: SearchAssociatedTranscriptsRequest | SearchAssociatedTranscriptsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SearchAssociatedTranscriptsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for associated transcripts that meet the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.search_associated_transcripts(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchAssociatedTranscriptsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAssociatedTranscriptsErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.search_associated_transcripts(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type SearchAssociatedTranscriptsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchAssociatedTranscriptsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_recommendation_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SearchAssociatedTranscriptsRequest](amazon_lex/models/search_associated_transcripts_request.py) \| [SearchAssociatedTranscriptsRequestDict](amazon_lex/models/search_associated_transcripts_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchAssociatedTranscriptsResponse](amazon_lex/models/search_associated_transcripts_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[SearchAssociatedTranscriptsErrorBody](amazon_lex/errors/search_associated_transcripts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_bot_analyzer(bot_id: str, *, body: StartBotAnalyzerRequest | StartBotAnalyzerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartBotAnalyzerResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration, including intents, utterances, slots, and conversation flows, to provide actionable recommendations for optimization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.start_bot_analyzer("some example string")
    # TODO: Handle 'response' of type StartBotAnalyzerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBotAnalyzerErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.start_bot_analyzer("some example string")
    # TODO: Handle 'response' of type StartBotAnalyzerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBotAnalyzerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StartBotAnalyzerRequest](amazon_lex/models/start_bot_analyzer_request.py) \| [StartBotAnalyzerRequestDict](amazon_lex/models/start_bot_analyzer_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartBotAnalyzerResponse](amazon_lex/models/start_bot_analyzer_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StartBotAnalyzerErrorBody](amazon_lex/errors/start_bot_analyzer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_bot_recommendation(bot_id: str, bot_version: str, locale_id: str, *, body: StartBotRecommendationRequest | StartBotRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartBotRecommendationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to provide your transcript data, and to start the bot recommendation process.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.start_bot_recommendation("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type StartBotRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBotRecommendationErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.start_bot_recommendation(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StartBotRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBotRecommendationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StartBotRecommendationRequest](amazon_lex/models/start_bot_recommendation_request.py) \| [StartBotRecommendationRequestDict](amazon_lex/models/start_bot_recommendation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartBotRecommendationResponse](amazon_lex/models/start_bot_recommendation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StartBotRecommendationErrorBody](amazon_lex/errors/start_bot_recommendation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_bot_resource_generation(bot_id: str, bot_version: str, locale_id: str, *, body: StartBotResourceGenerationRequest | StartBotResourceGenerationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartBotResourceGenerationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.start_bot_resource_generation(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StartBotResourceGenerationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBotResourceGenerationErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.start_bot_resource_generation(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StartBotResourceGenerationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBotResourceGenerationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StartBotResourceGenerationRequest](amazon_lex/models/start_bot_resource_generation_request.py) \| [StartBotResourceGenerationRequestDict](amazon_lex/models/start_bot_resource_generation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartBotResourceGenerationResponse](amazon_lex/models/start_bot_resource_generation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StartBotResourceGenerationErrorBody](amazon_lex/errors/start_bot_resource_generation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_conversation(bot_id: str, bot_alias_id: str, locale_id: str, session_id: str, *, body: StartConversationRequest | StartConversationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartConversationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an HTTP/2 bidirectional event stream that enables you to send audio, text, or DTMF input in real time. After your application starts a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon Lex V2 processes the incoming events and responds with streaming text or audio events. Audio input must be in the following format: audio/lpcm sample-rate=8000 sample-size-bits=16 channel-count=1; is-big-endian=false. If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see PostFulfillmentStatusSpecification. Success message - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present. Failed message - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message. Timeout message - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. For more information, see Complet

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.start_conversation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StartConversationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartConversationErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.start_conversation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StartConversationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartConversationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias_id</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StartConversationRequest](amazon_lex/models/start_conversation_request.py) \| [StartConversationRequestDict](amazon_lex/models/start_conversation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartConversationResponse](amazon_lex/models/start_conversation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StartConversationErrorBody](amazon_lex/errors/start_conversation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RuntimeV2LexValidationException](amazon_lex/models/runtime_v2_lex_validation_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_lex/models/access_denied_exception.py)</code> |
| 429 | <code>[RuntimeV2LexThrottlingException](amazon_lex/models/runtime_v2_lex_throttling_exception.py)</code> |
| 500 | <code>[RuntimeV2LexInternalServerException](amazon_lex/models/runtime_v2_lex_internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_bot_analyzer(bot_id: str, bot_analyzer_request_id: str, *, body: StopBotAnalyzerRequest | StopBotAnalyzerRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StopBotAnalyzerResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no recommendations will be generated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.stop_bot_analyzer("some example string", "some example string")
    # TODO: Handle 'response' of type StopBotAnalyzerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBotAnalyzerErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.stop_bot_analyzer("some example string", "some example string")
    # TODO: Handle 'response' of type StopBotAnalyzerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBotAnalyzerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_analyzer_request_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StopBotAnalyzerRequest](amazon_lex/models/stop_bot_analyzer_request.py) \| [StopBotAnalyzerRequestDict](amazon_lex/models/stop_bot_analyzer_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StopBotAnalyzerResponse](amazon_lex/models/stop_bot_analyzer_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StopBotAnalyzerErrorBody](amazon_lex/errors/stop_bot_analyzer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_bot_recommendation(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, body: StopBotRecommendationRequest | StopBotRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StopBotRecommendationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop an already running Bot Recommendation request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.stop_bot_recommendation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StopBotRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBotRecommendationErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.stop_bot_recommendation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type StopBotRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBotRecommendationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_recommendation_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StopBotRecommendationRequest](amazon_lex/models/stop_bot_recommendation_request.py) \| [StopBotRecommendationRequestDict](amazon_lex/models/stop_bot_recommendation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StopBotRecommendationResponse](amazon_lex/models/stop_bot_recommendation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StopBotRecommendationErrorBody](amazon_lex/errors/stop_bot_recommendation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bot(bot_id: str, *, body: UpdateBotRequest | UpdateBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateBotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing bot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.update_bot("some example string")
    # TODO: Handle 'response' of type UpdateBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBotErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.update_bot("some example string")
    # TODO: Handle 'response' of type UpdateBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateBotRequest](amazon_lex/models/update_bot_request.py) \| [UpdateBotRequestDict](amazon_lex/models/update_bot_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateBotResponse](amazon_lex/models/update_bot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateBotErrorBody](amazon_lex/errors/update_bot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bot_alias(bot_id: str, bot_alias_id: str, *, body: UpdateBotAliasRequest | UpdateBotAliasRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateBotAliasResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.update_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type UpdateBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBotAliasErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.update_bot_alias("some example string", "some example string")
    # TODO: Handle 'response' of type UpdateBotAliasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBotAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateBotAliasRequest](amazon_lex/models/update_bot_alias_request.py) \| [UpdateBotAliasRequestDict](amazon_lex/models/update_bot_alias_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateBotAliasResponse](amazon_lex/models/update_bot_alias_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateBotAliasErrorBody](amazon_lex/errors/update_bot_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bot_locale(bot_id: str, bot_version: str, locale_id: str, *, body: UpdateBotLocaleRequest | UpdateBotLocaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateBotLocaleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings that a bot has for a specific locale.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.update_bot_locale("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type UpdateBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBotLocaleErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.update_bot_locale(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type UpdateBotLocaleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBotLocaleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateBotLocaleRequest](amazon_lex/models/update_bot_locale_request.py) \| [UpdateBotLocaleRequestDict](amazon_lex/models/update_bot_locale_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateBotLocaleResponse](amazon_lex/models/update_bot_locale_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateBotLocaleErrorBody](amazon_lex/errors/update_bot_locale_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bot_recommendation(bot_id: str, bot_version: str, locale_id: str, bot_recommendation_id: str, *, body: UpdateBotRecommendationRequest | UpdateBotRecommendationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateBotRecommendationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing bot recommendation request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.update_bot_recommendation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type UpdateBotRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBotRecommendationErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.update_bot_recommendation(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type UpdateBotRecommendationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBotRecommendationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_recommendation_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateBotRecommendationRequest](amazon_lex/models/update_bot_recommendation_request.py) \| [UpdateBotRecommendationRequestDict](amazon_lex/models/update_bot_recommendation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateBotRecommendationResponse](amazon_lex/models/update_bot_recommendation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateBotRecommendationErrorBody](amazon_lex/errors/update_bot_recommendation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_intent(bot_id: str, bot_version: str, locale_id: str, intent_id: str, *, body: UpdateIntentRequest | UpdateIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateIntentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings for an intent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.update_intent(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type UpdateIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateIntentErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.update_intent(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type UpdateIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateIntentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>intent_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateIntentRequest](amazon_lex/models/update_intent_request.py) \| [UpdateIntentRequestDict](amazon_lex/models/update_intent_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateIntentResponse](amazon_lex/models/update_intent_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateIntentErrorBody](amazon_lex/errors/update_intent_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_slot(bot_id: str, bot_version: str, locale_id: str, intent_id: str, slot_id: str, *, body: UpdateSlotRequest | UpdateSlotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateSlotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the settings for a slot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.update_slot(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type UpdateSlotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSlotErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.update_slot(
        "some example string",
        "some example string",
        "some example string",
        "some example string",
        "some example string",
    )
    # TODO: Handle 'response' of type UpdateSlotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSlotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>intent_id</code> | <code>str</code> | Value sent with the request. |
| <code>slot_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateSlotRequest](amazon_lex/models/update_slot_request.py) \| [UpdateSlotRequestDict](amazon_lex/models/update_slot_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateSlotResponse](amazon_lex/models/update_slot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateSlotErrorBody](amazon_lex/errors/update_slot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_slot_type(bot_id: str, bot_version: str, locale_id: str, slot_type_id: str, *, body: UpdateSlotTypeRequest | UpdateSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateSlotTypeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing slot type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bots.update_slot_type(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type UpdateSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSlotTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.bots.update_slot_type(
        "some example string", "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type UpdateSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSlotTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_id</code> | <code>str</code> | Value sent with the request. |
| <code>bot_version</code> | <code>str</code> | Value sent with the request. |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>slot_type_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateSlotTypeRequest](amazon_lex/models/update_slot_type_request.py) \| [UpdateSlotTypeRequestDict](amazon_lex/models/update_slot_type_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateSlotTypeResponse](amazon_lex/models/update_slot_type_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateSlotTypeErrorBody](amazon_lex/errors/update_slot_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Builtins

> Source: [Builtins](amazon_lex/apis/builtins.py)

<details>
<summary><code>def get_builtin_intent(signature: str, *, request_options: RequestOptionsOrDict | None = None) -> GetBuiltinIntentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a built-in intent. This operation requires permission for the lex:GetBuiltinIntent action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.builtins.get_builtin_intent("some example string")
    # TODO: Handle 'response' of type GetBuiltinIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBuiltinIntentErrorBody
```

**Async**

```python
try:
    response = await async_client.builtins.get_builtin_intent("some example string")
    # TODO: Handle 'response' of type GetBuiltinIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBuiltinIntentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signature</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBuiltinIntentResponse](amazon_lex/models/get_builtin_intent_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBuiltinIntentErrorBody](amazon_lex/errors/get_builtin_intent_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_builtin_intents(*, request_options: RequestOptionsOrDict | None = None) -> GetBuiltinIntentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in intents that meet the specified criteria. This operation requires permission for the lex:GetBuiltinIntents action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.builtins.get_builtin_intents()
    # TODO: Handle 'response' of type GetBuiltinIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBuiltinIntentsErrorBody
```

**Async**

```python
try:
    response = await async_client.builtins.get_builtin_intents()
    # TODO: Handle 'response' of type GetBuiltinIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBuiltinIntentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBuiltinIntentsResponse](amazon_lex/models/get_builtin_intents_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBuiltinIntentsErrorBody](amazon_lex/errors/get_builtin_intents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_builtin_slot_types(*, request_options: RequestOptionsOrDict | None = None) -> GetBuiltinSlotTypesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in slot types that meet the specified criteria. For a list of built-in slot types, see Slot Type Reference in the Alexa Skills Kit. This operation requires permission for the lex:GetBuiltInSlotTypes action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.builtins.get_builtin_slot_types()
    # TODO: Handle 'response' of type GetBuiltinSlotTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBuiltinSlotTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.builtins.get_builtin_slot_types()
    # TODO: Handle 'response' of type GetBuiltinSlotTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBuiltinSlotTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBuiltinSlotTypesResponse](amazon_lex/models/get_builtin_slot_types_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBuiltinSlotTypesErrorBody](amazon_lex/errors/get_builtin_slot_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_built_in_intents(locale_id: str, *, body: ListBuiltInIntentsRequest | ListBuiltInIntentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBuiltInIntentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter when you call the CreateIntent operation. For more information, see CreateIntent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.builtins.list_built_in_intents("some example string")
    # TODO: Handle 'response' of type ListBuiltInIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuiltInIntentsErrorBody
```

**Async**

```python
try:
    response = await async_client.builtins.list_built_in_intents("some example string")
    # TODO: Handle 'response' of type ListBuiltInIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuiltInIntentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBuiltInIntentsRequest](amazon_lex/models/list_built_in_intents_request.py) \| [ListBuiltInIntentsRequestDict](amazon_lex/models/list_built_in_intents_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBuiltInIntentsResponse](amazon_lex/models/list_built_in_intents_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBuiltInIntentsErrorBody](amazon_lex/errors/list_built_in_intents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_built_in_slot_types(locale_id: str, *, body: ListBuiltInSlotTypesRequest | ListBuiltInSlotTypesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBuiltInSlotTypesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of built-in slot types that meet the specified criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.builtins.list_built_in_slot_types("some example string")
    # TODO: Handle 'response' of type ListBuiltInSlotTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuiltInSlotTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.builtins.list_built_in_slot_types("some example string")
    # TODO: Handle 'response' of type ListBuiltInSlotTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuiltInSlotTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locale_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListBuiltInSlotTypesRequest](amazon_lex/models/list_built_in_slot_types_request.py) \| [ListBuiltInSlotTypesRequestDict](amazon_lex/models/list_built_in_slot_types_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBuiltInSlotTypesResponse](amazon_lex/models/list_built_in_slot_types_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListBuiltInSlotTypesErrorBody](amazon_lex/errors/list_built_in_slot_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Channels

> Source: [Channels](amazon_lex/apis/channels.py)

<details>
<summary><code>def delete_bot_channel_association(bot_name: str, bot_alias: str, name: str, *, body: DeleteBotChannelAssociationRequest | DeleteBotChannelAssociationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires permission for the lex:DeleteBotChannelAssociation action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.channels.delete_bot_channel_association(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotChannelAssociationErrorBody
```

**Async**

```python
try:
    response = await async_client.channels.delete_bot_channel_association(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotChannelAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteBotChannelAssociationRequest](amazon_lex/models/delete_bot_channel_association_request.py) \| [DeleteBotChannelAssociationRequestDict](amazon_lex/models/delete_bot_channel_association_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotChannelAssociationErrorBody](amazon_lex/errors/delete_bot_channel_association_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bot_channel_association(bot_name: str, bot_alias: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> GetBotChannelAssociationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the association between an Amazon Lex bot and a messaging platform. This operation requires permissions for the lex:GetBotChannelAssociation action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.channels.get_bot_channel_association(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetBotChannelAssociationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotChannelAssociationErrorBody
```

**Async**

```python
try:
    response = await async_client.channels.get_bot_channel_association(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type GetBotChannelAssociationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotChannelAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotChannelAssociationResponse](amazon_lex/models/get_bot_channel_association_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBotChannelAssociationErrorBody](amazon_lex/errors/get_bot_channel_association_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bot_channel_associations(bot_name: str, bot_alias: str, *, request_options: RequestOptionsOrDict | None = None) -> GetBotChannelAssociationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations operation requires permissions for the lex:GetBotChannelAssociations action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.channels.get_bot_channel_associations("some example string", "some example string")
    # TODO: Handle 'response' of type GetBotChannelAssociationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotChannelAssociationsErrorBody
```

**Async**

```python
try:
    response = await async_client.channels.get_bot_channel_associations("some example string", "some example string")
    # TODO: Handle 'response' of type GetBotChannelAssociationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotChannelAssociationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotChannelAssociationsResponse](amazon_lex/models/get_bot_channel_associations_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBotChannelAssociationsErrorBody](amazon_lex/errors/get_bot_channel_associations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Createuploadurl

> Source: [Createuploadurl](amazon_lex/apis/createuploadurl.py)

<details>
<summary><code>def create_upload_url(*, body: Any | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateUploadUrlResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.createuploadurl.create_upload_url()
    # TODO: Handle 'response' of type CreateUploadUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUploadUrlErrorBody
```

**Async**

```python
try:
    response = await async_client.createuploadurl.create_upload_url()
    # TODO: Handle 'response' of type CreateUploadUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUploadUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>Any \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateUploadUrlResponse](amazon_lex/models/create_upload_url_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateUploadUrlErrorBody](amazon_lex/errors/create_upload_url_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Exports

> Source: [Exports](amazon_lex/apis/exports.py)

<details>
<summary><code>def create_export(*, body: CreateExportRequest | CreateExportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateExportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot. You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For more information about exporting bots, and about the structure of the export archive, see Importing and exporting bots

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.exports.create_export()
    # TODO: Handle 'response' of type CreateExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateExportErrorBody
```

**Async**

```python
try:
    response = await async_client.exports.create_export()
    # TODO: Handle 'response' of type CreateExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateExportRequest](amazon_lex/models/create_export_request.py) \| [CreateExportRequestDict](amazon_lex/models/create_export_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateExportResponse](amazon_lex/models/create_export_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateExportErrorBody](amazon_lex/errors/create_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_export(export_id: str, *, body: DeleteExportRequest | DeleteExportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteExportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a previous export and the associated files stored in an S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.exports.delete_export("some example string")
    # TODO: Handle 'response' of type DeleteExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteExportErrorBody
```

**Async**

```python
try:
    response = await async_client.exports.delete_export("some example string")
    # TODO: Handle 'response' of type DeleteExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>export_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteExportRequest](amazon_lex/models/delete_export_request.py) \| [DeleteExportRequestDict](amazon_lex/models/delete_export_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteExportResponse](amazon_lex/models/delete_export_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteExportErrorBody](amazon_lex/errors/delete_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_export(export_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeExportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a specific export.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.exports.describe_export("some example string")
    # TODO: Handle 'response' of type DescribeExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeExportErrorBody
```

**Async**

```python
try:
    response = await async_client.exports.describe_export("some example string")
    # TODO: Handle 'response' of type DescribeExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>export_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeExportResponse](amazon_lex/models/describe_export_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeExportErrorBody](amazon_lex/errors/describe_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_export(*, request_options: RequestOptionsOrDict | None = None) -> GetExportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports the contents of a Amazon Lex resource in a specified format.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.exports.get_export()
    # TODO: Handle 'response' of type GetExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExportErrorBody
```

**Async**

```python
try:
    response = await async_client.exports.get_export()
    # TODO: Handle 'response' of type GetExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetExportResponse](amazon_lex/models/get_export_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetExportErrorBody](amazon_lex/errors/get_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_exports(*, body: ListExportsRequest | ListExportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListExportsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.exports.list_exports()
    # TODO: Handle 'response' of type ListExportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExportsErrorBody
```

**Async**

```python
try:
    response = await async_client.exports.list_exports()
    # TODO: Handle 'response' of type ListExportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListExportsRequest](amazon_lex/models/list_exports_request.py) \| [ListExportsRequestDict](amazon_lex/models/list_exports_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListExportsResponse](amazon_lex/models/list_exports_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListExportsErrorBody](amazon_lex/errors/list_exports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_export(export_id: str, *, body: UpdateExportRequest | UpdateExportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateExportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the password used to protect an export zip archive. The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the DescribeExport operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.exports.update_export("some example string")
    # TODO: Handle 'response' of type UpdateExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateExportErrorBody
```

**Async**

```python
try:
    response = await async_client.exports.update_export("some example string")
    # TODO: Handle 'response' of type UpdateExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>export_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateExportRequest](amazon_lex/models/update_export_request.py) \| [UpdateExportRequestDict](amazon_lex/models/update_export_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateExportResponse](amazon_lex/models/update_export_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateExportErrorBody](amazon_lex/errors/update_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Imports

> Source: [Imports](amazon_lex/apis/imports.py)

<details>
<summary><code>def delete_import(import_id: str, *, body: DeleteImportRequest | DeleteImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a previous import and the associated file stored in an S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.imports.delete_import("some example string")
    # TODO: Handle 'response' of type DeleteImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteImportErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.delete_import("some example string")
    # TODO: Handle 'response' of type DeleteImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteImportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteImportRequest](amazon_lex/models/delete_import_request.py) \| [DeleteImportRequestDict](amazon_lex/models/delete_import_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteImportResponse](amazon_lex/models/delete_import_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteImportErrorBody](amazon_lex/errors/delete_import_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_import(import_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a specific import.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.imports.describe_import("some example string")
    # TODO: Handle 'response' of type DescribeImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeImportErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.describe_import("some example string")
    # TODO: Handle 'response' of type DescribeImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeImportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeImportResponse](amazon_lex/models/describe_import_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeImportErrorBody](amazon_lex/errors/describe_import_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_imports(*, body: ListImportsRequest | ListImportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListImportsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.imports.list_imports()
    # TODO: Handle 'response' of type ListImportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListImportsErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.list_imports()
    # TODO: Handle 'response' of type ListImportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListImportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListImportsRequest](amazon_lex/models/list_imports_request.py) \| [ListImportsRequestDict](amazon_lex/models/list_imports_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListImportsResponse](amazon_lex/models/list_imports_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListImportsErrorBody](amazon_lex/errors/list_imports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_import(*, body: StartImportRequest | StartImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartImportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.imports.start_import()
    # TODO: Handle 'response' of type StartImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartImportErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.start_import()
    # TODO: Handle 'response' of type StartImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartImportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StartImportRequest](amazon_lex/models/start_import_request.py) \| [StartImportRequestDict](amazon_lex/models/start_import_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartImportResponse](amazon_lex/models/start_import_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StartImportErrorBody](amazon_lex/errors/start_import_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Migrations

> Source: [Migrations](amazon_lex/apis/migrations.py)

<details>
<summary><code>def get_migration(migration_id: str, *, request_options: RequestOptionsOrDict | None = None) -> GetMigrationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration alerts and warnings related to the migration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.migrations.get_migration("some example string")
    # TODO: Handle 'response' of type GetMigrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMigrationErrorBody
```

**Async**

```python
try:
    response = await async_client.migrations.get_migration("some example string")
    # TODO: Handle 'response' of type GetMigrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMigrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>migration_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMigrationResponse](amazon_lex/models/get_migration_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetMigrationErrorBody](amazon_lex/errors/get_migration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_migrations(*, request_options: RequestOptionsOrDict | None = None) -> GetMigrationsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.migrations.get_migrations()
    # TODO: Handle 'response' of type GetMigrationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMigrationsErrorBody
```

**Async**

```python
try:
    response = await async_client.migrations.get_migrations()
    # TODO: Handle 'response' of type GetMigrationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMigrationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMigrationsResponse](amazon_lex/models/get_migrations_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetMigrationsErrorBody](amazon_lex/errors/get_migrations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_migration(*, body: StartMigrationRequest | StartMigrationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartMigrationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage of the new features of Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex developer guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.migrations.start_migration()
    # TODO: Handle 'response' of type StartMigrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartMigrationErrorBody
```

**Async**

```python
try:
    response = await async_client.migrations.start_migration()
    # TODO: Handle 'response' of type StartMigrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartMigrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StartMigrationRequest](amazon_lex/models/start_migration_request.py) \| [StartMigrationRequestDict](amazon_lex/models/start_migration_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartMigrationResponse](amazon_lex/models/start_migration_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StartMigrationErrorBody](amazon_lex/errors/start_migration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 403 | <code>[ModelsLexAccessDeniedException](amazon_lex/models/models_lex_access_denied_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](amazon_lex/apis/operations.py)

<details>
<summary><code>def delete_slot_type_version(name: str, version: str, *, body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.delete_slot_type_version("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotTypeVersionErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.delete_slot_type_version("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotTypeVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>version</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteSlotTypeVersionRequest](amazon_lex/models/delete_slot_type_version_request.py) \| [DeleteSlotTypeVersionRequestDict](amazon_lex/models/delete_slot_type_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteSlotTypeVersionErrorBody](amazon_lex/errors/delete_slot_type_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_intents(*, request_options: RequestOptionsOrDict | None = None) -> GetIntentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns intent information as follows: If you specify the nameContains field, returns the $LATEST version of all intents that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all intents. The operation requires permission for the lex:GetIntents action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.get_intents()
    # TODO: Handle 'response' of type GetIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntentsErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.get_intents()
    # TODO: Handle 'response' of type GetIntentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntentsResponse](amazon_lex/models/get_intents_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetIntentsErrorBody](amazon_lex/errors/get_intents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_slot_types(*, request_options: RequestOptionsOrDict | None = None) -> GetSlotTypesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns slot type information as follows: If you specify the nameContains field, returns the $LATEST version of all slot types that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all slot types. The operation requires permission for the lex:GetSlotTypes action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.get_slot_types()
    # TODO: Handle 'response' of type GetSlotTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSlotTypesErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.get_slot_types()
    # TODO: Handle 'response' of type GetSlotTypesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSlotTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSlotTypesResponse](amazon_lex/models/get_slot_types_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetSlotTypesErrorBody](amazon_lex/errors/get_slot_types_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_utterances_view(bot_name: str, *, request_options: RequestOptionsOrDict | None = None) -> GetUtterancesViewResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the GetUtterancesView operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days. The response contains information about a maximum of 100 utterances for each version. If you set childDirected field to true when you created your bot, if you are using slot obfuscation with

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.get_utterances_view("some example string")
    # TODO: Handle 'response' of type GetUtterancesViewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUtterancesViewErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.get_utterances_view("some example string")
    # TODO: Handle 'response' of type GetUtterancesViewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUtterancesViewErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetUtterancesViewResponse](amazon_lex/models/get_utterances_view_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetUtterancesViewErrorBody](amazon_lex/errors/get_utterances_view_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_content(bot_name: str, bot_alias: str, user_id: str, *, body: PostContentRequest | PostContentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PostContentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. The PostContent operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?". After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the message, Amazon Lex

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.post_content("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostContentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostContentErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.post_content(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PostContentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostContentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PostContentRequest](amazon_lex/models/post_content_request.py) \| [PostContentRequestDict](amazon_lex/models/post_content_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostContentResponse](amazon_lex/models/post_content_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[PostContentErrorBody](amazon_lex/errors/post_content_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 406 | <code>[NotAcceptableException](amazon_lex/models/not_acceptable_exception.py)</code> |
| 408 | <code>[RequestTimeoutException](amazon_lex/models/request_timeout_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 415 | <code>[UnsupportedMediaTypeException](amazon_lex/models/unsupported_media_type_exception.py)</code> |
| 424 | <code>[RuntimeLexDependencyFailedException](amazon_lex/models/runtime_lex_dependency_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| 502 | <code>[RuntimeLexBadGatewayException](amazon_lex/models/runtime_lex_bad_gateway_exception.py)</code> |
| 508 | <code>[LoopDetectedException](amazon_lex/models/loop_detected_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_text(bot_name: str, bot_alias: str, user_id: str, *, body: PostTextRequest | PostTextRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PostTextResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. In response, Amazon Lex returns the next message to convey to the user an optional responseCard to display. Consider the following example messages: For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.operations.post_text("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type PostTextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostTextErrorBody
```

**Async**

```python
try:
    response = await async_client.operations.post_text(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type PostTextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostTextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bot_name</code> | <code>str</code> | Value sent with the request. |
| <code>bot_alias</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PostTextRequest](amazon_lex/models/post_text_request.py) \| [PostTextRequestDict](amazon_lex/models/post_text_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostTextResponse](amazon_lex/models/post_text_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[PostTextErrorBody](amazon_lex/errors/post_text_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 424 | <code>[RuntimeLexDependencyFailedException](amazon_lex/models/runtime_lex_dependency_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| 502 | <code>[RuntimeLexBadGatewayException](amazon_lex/models/runtime_lex_bad_gateway_exception.py)</code> |
| 508 | <code>[LoopDetectedException](amazon_lex/models/loop_detected_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Policy

> Source: [Policy](amazon_lex/apis/policy.py)

<details>
<summary><code>def create_resource_policy(resource_arn: str, *, body: CreateResourcePolicyRequest | CreateResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateResourcePolicyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new resource policy with the specified policy statements.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policy.create_resource_policy("some example string")
    # TODO: Handle 'response' of type CreateResourcePolicyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResourcePolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.policy.create_resource_policy("some example string")
    # TODO: Handle 'response' of type CreateResourcePolicyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateResourcePolicyRequest](amazon_lex/models/create_resource_policy_request.py) \| [CreateResourcePolicyRequestDict](amazon_lex/models/create_resource_policy_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResourcePolicyResponse](amazon_lex/models/create_resource_policy_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateResourcePolicyErrorBody](amazon_lex/errors/create_resource_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_resource_policy_statement(resource_arn: str, *, body: CreateResourcePolicyStatementRequest | CreateResourcePolicyStatementRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateResourcePolicyStatementResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policy.create_resource_policy_statement("some example string")
    # TODO: Handle 'response' of type CreateResourcePolicyStatementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResourcePolicyStatementErrorBody
```

**Async**

```python
try:
    response = await async_client.policy.create_resource_policy_statement("some example string")
    # TODO: Handle 'response' of type CreateResourcePolicyStatementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResourcePolicyStatementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateResourcePolicyStatementRequest](amazon_lex/models/create_resource_policy_statement_request.py) \| [CreateResourcePolicyStatementRequestDict](amazon_lex/models/create_resource_policy_statement_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResourcePolicyStatementResponse](amazon_lex/models/create_resource_policy_statement_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateResourcePolicyStatementErrorBody](amazon_lex/errors/create_resource_policy_statement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_resource_policy(resource_arn: str, *, body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteResourcePolicyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policy.delete_resource_policy("some example string")
    # TODO: Handle 'response' of type DeleteResourcePolicyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.policy.delete_resource_policy("some example string")
    # TODO: Handle 'response' of type DeleteResourcePolicyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteResourcePolicyRequest](amazon_lex/models/delete_resource_policy_request.py) \| [DeleteResourcePolicyRequestDict](amazon_lex/models/delete_resource_policy_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteResourcePolicyResponse](amazon_lex/models/delete_resource_policy_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteResourcePolicyErrorBody](amazon_lex/errors/delete_resource_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_resource_policy_statement(resource_arn: str, statement_id: str, *, body: DeleteResourcePolicyStatementRequest | DeleteResourcePolicyStatementRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> DeleteResourcePolicyStatementResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policy.delete_resource_policy_statement("some example string", "some example string")
    # TODO: Handle 'response' of type DeleteResourcePolicyStatementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyStatementErrorBody
```

**Async**

```python
try:
    response = await async_client.policy.delete_resource_policy_statement("some example string", "some example string")
    # TODO: Handle 'response' of type DeleteResourcePolicyStatementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyStatementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>statement_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteResourcePolicyStatementRequest](amazon_lex/models/delete_resource_policy_statement_request.py) \| [DeleteResourcePolicyStatementRequestDict](amazon_lex/models/delete_resource_policy_statement_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeleteResourcePolicyStatementResponse](amazon_lex/models/delete_resource_policy_statement_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteResourcePolicyStatementErrorBody](amazon_lex/errors/delete_resource_policy_statement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_resource_policy(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeResourcePolicyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource policy and policy revision for a bot or bot alias.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policy.describe_resource_policy("some example string")
    # TODO: Handle 'response' of type DescribeResourcePolicyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeResourcePolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.policy.describe_resource_policy("some example string")
    # TODO: Handle 'response' of type DescribeResourcePolicyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeResourcePolicyResponse](amazon_lex/models/describe_resource_policy_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeResourcePolicyErrorBody](amazon_lex/errors/describe_resource_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_resource_policy(resource_arn: str, *, body: UpdateResourcePolicyRequest | UpdateResourcePolicyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateResourcePolicyResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.policy.update_resource_policy("some example string")
    # TODO: Handle 'response' of type UpdateResourcePolicyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateResourcePolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.policy.update_resource_policy("some example string")
    # TODO: Handle 'response' of type UpdateResourcePolicyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateResourcePolicyRequest](amazon_lex/models/update_resource_policy_request.py) \| [UpdateResourcePolicyRequestDict](amazon_lex/models/update_resource_policy_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateResourcePolicyResponse](amazon_lex/models/update_resource_policy_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateResourcePolicyErrorBody](amazon_lex/errors/update_resource_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](amazon_lex/apis/tags.py)

<details>
<summary><code>def list_tags_for_resource(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None) -> ListTagsForResourceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tags.list_tags_for_resource("some example string")
    # TODO: Handle 'response' of type ListTagsForResourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

**Async**

```python
try:
    response = await async_client.tags.list_tags_for_resource("some example string")
    # TODO: Handle 'response' of type ListTagsForResourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTagsForResourceResponse](amazon_lex/models/list_tags_for_resource_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListTagsForResourceErrorBody](amazon_lex/errors/list_tags_for_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tags_for_resource1(resource_arn: str, *, request_options: RequestOptionsOrDict | None = None) -> ModelsLexListTagsForResourceResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have tags associated with them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tags.list_tags_for_resource1("some example string")
    # TODO: Handle 'response' of type ModelsLexListTagsForResourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResource1ErrorBody
```

**Async**

```python
try:
    response = await async_client.tags.list_tags_for_resource1("some example string")
    # TODO: Handle 'response' of type ModelsLexListTagsForResourceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResource1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsLexListTagsForResourceResponse](amazon_lex/models/models_lex_list_tags_for_resource_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListTagsForResource1ErrorBody](amazon_lex/errors/list_tags_for_resource1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(resource_arn: str, *, body: TagResourceRequest | TagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tags.tag_resource("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

**Async**

```python
try:
    response = await async_client.tags.tag_resource("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[TagResourceRequest](amazon_lex/models/tag_resource_request.py) \| [TagResourceRequestDict](amazon_lex/models/tag_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[TagResourceErrorBody](amazon_lex/errors/tag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource1(resource_arn: str, *, body: ModelsLexTagResourceRequest | ModelsLexTagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tags.tag_resource1("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResource1ErrorBody
```

**Async**

```python
try:
    response = await async_client.tags.tag_resource1("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResource1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexTagResourceRequest](amazon_lex/models/models_lex_tag_resource_request.py) \| [ModelsLexTagResourceRequestDict](amazon_lex/models/models_lex_tag_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[TagResource1ErrorBody](amazon_lex/errors/tag_resource1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(resource_arn: str, *, body: UntagResourceRequest | UntagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes tags from a bot, bot alias, or bot channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tags.untag_resource("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

**Async**

```python
try:
    response = await async_client.tags.untag_resource("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UntagResourceRequest](amazon_lex/models/untag_resource_request.py) \| [UntagResourceRequestDict](amazon_lex/models/untag_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UntagResourceErrorBody](amazon_lex/errors/untag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource1(resource_arn: str, *, body: ModelsLexUntagResourceRequest | ModelsLexUntagResourceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes tags from a bot, bot alias or bot channel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.tags.untag_resource1("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResource1ErrorBody
```

**Async**

```python
try:
    response = await async_client.tags.untag_resource1("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResource1ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_arn</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexUntagResourceRequest](amazon_lex/models/models_lex_untag_resource_request.py) \| [ModelsLexUntagResourceRequestDict](amazon_lex/models/models_lex_untag_resource_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UntagResource1ErrorBody](amazon_lex/errors/untag_resource1_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Testexecutions

> Source: [Testexecutions](amazon_lex/apis/testexecutions.py)

<details>
<summary><code>def describe_test_execution(test_execution_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeTestExecutionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test execution.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testexecutions.describe_test_execution("some example string")
    # TODO: Handle 'response' of type DescribeTestExecutionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestExecutionErrorBody
```

**Async**

```python
try:
    response = await async_client.testexecutions.describe_test_execution("some example string")
    # TODO: Handle 'response' of type DescribeTestExecutionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_execution_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeTestExecutionResponse](amazon_lex/models/describe_test_execution_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeTestExecutionErrorBody](amazon_lex/errors/describe_test_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_test_execution_artifacts_url(test_execution_id: str, *, request_options: RequestOptionsOrDict | None = None) -> GetTestExecutionArtifactsUrlResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The pre-signed Amazon S3 URL to download the test execution result artifacts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testexecutions.get_test_execution_artifacts_url("some example string")
    # TODO: Handle 'response' of type GetTestExecutionArtifactsUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTestExecutionArtifactsUrlErrorBody
```

**Async**

```python
try:
    response = await async_client.testexecutions.get_test_execution_artifacts_url("some example string")
    # TODO: Handle 'response' of type GetTestExecutionArtifactsUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTestExecutionArtifactsUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_execution_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTestExecutionArtifactsUrlResponse](amazon_lex/models/get_test_execution_artifacts_url_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetTestExecutionArtifactsUrlErrorBody](amazon_lex/errors/get_test_execution_artifacts_url_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_test_execution_result_items(test_execution_id: str, *, body: ListTestExecutionResultItemsRequest | ListTestExecutionResultItemsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListTestExecutionResultItemsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of test execution result items.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testexecutions.list_test_execution_result_items("some example string")
    # TODO: Handle 'response' of type ListTestExecutionResultItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestExecutionResultItemsErrorBody
```

**Async**

```python
try:
    response = await async_client.testexecutions.list_test_execution_result_items("some example string")
    # TODO: Handle 'response' of type ListTestExecutionResultItemsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestExecutionResultItemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_execution_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListTestExecutionResultItemsRequest](amazon_lex/models/list_test_execution_result_items_request.py) \| [ListTestExecutionResultItemsRequestDict](amazon_lex/models/list_test_execution_result_items_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTestExecutionResultItemsResponse](amazon_lex/models/list_test_execution_result_items_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListTestExecutionResultItemsErrorBody](amazon_lex/errors/list_test_execution_result_items_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_test_executions(*, body: ListTestExecutionsRequest | ListTestExecutionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListTestExecutionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The list of test set executions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testexecutions.list_test_executions()
    # TODO: Handle 'response' of type ListTestExecutionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestExecutionsErrorBody
```

**Async**

```python
try:
    response = await async_client.testexecutions.list_test_executions()
    # TODO: Handle 'response' of type ListTestExecutionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListTestExecutionsRequest](amazon_lex/models/list_test_executions_request.py) \| [ListTestExecutionsRequestDict](amazon_lex/models/list_test_executions_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTestExecutionsResponse](amazon_lex/models/list_test_executions_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListTestExecutionsErrorBody](amazon_lex/errors/list_test_executions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_test_execution(test_set_id: str, *, body: StartTestExecutionRequest | StartTestExecutionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartTestExecutionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to start test set execution.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testexecutions.start_test_execution("some example string")
    # TODO: Handle 'response' of type StartTestExecutionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTestExecutionErrorBody
```

**Async**

```python
try:
    response = await async_client.testexecutions.start_test_execution("some example string")
    # TODO: Handle 'response' of type StartTestExecutionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTestExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StartTestExecutionRequest](amazon_lex/models/start_test_execution_request.py) \| [StartTestExecutionRequestDict](amazon_lex/models/start_test_execution_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartTestExecutionResponse](amazon_lex/models/start_test_execution_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StartTestExecutionErrorBody](amazon_lex/errors/start_test_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Testsetdiscrepancy

> Source: [Testsetdiscrepancy](amazon_lex/apis/testsetdiscrepancy.py)

<details>
<summary><code>def create_test_set_discrepancy_report(test_set_id: str, *, body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateTestSetDiscrepancyReportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a report that describes the differences between the bot and the test set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsetdiscrepancy.create_test_set_discrepancy_report("some example string")
    # TODO: Handle 'response' of type CreateTestSetDiscrepancyReportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTestSetDiscrepancyReportErrorBody
```

**Async**

```python
try:
    response = await async_client.testsetdiscrepancy.create_test_set_discrepancy_report("some example string")
    # TODO: Handle 'response' of type CreateTestSetDiscrepancyReportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTestSetDiscrepancyReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateTestSetDiscrepancyReportRequest](amazon_lex/models/create_test_set_discrepancy_report_request.py) \| [CreateTestSetDiscrepancyReportRequestDict](amazon_lex/models/create_test_set_discrepancy_report_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateTestSetDiscrepancyReportResponse](amazon_lex/models/create_test_set_discrepancy_report_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateTestSetDiscrepancyReportErrorBody](amazon_lex/errors/create_test_set_discrepancy_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_test_set_discrepancy_report(test_set_discrepancy_report_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeTestSetDiscrepancyReportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test set discrepancy report.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsetdiscrepancy.describe_test_set_discrepancy_report("some example string")
    # TODO: Handle 'response' of type DescribeTestSetDiscrepancyReportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestSetDiscrepancyReportErrorBody
```

**Async**

```python
try:
    response = await async_client.testsetdiscrepancy.describe_test_set_discrepancy_report("some example string")
    # TODO: Handle 'response' of type DescribeTestSetDiscrepancyReportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestSetDiscrepancyReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_discrepancy_report_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeTestSetDiscrepancyReportResponse](amazon_lex/models/describe_test_set_discrepancy_report_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeTestSetDiscrepancyReportErrorBody](amazon_lex/errors/describe_test_set_discrepancy_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Testsetgenerations

> Source: [Testsetgenerations](amazon_lex/apis/testsetgenerations.py)

<details>
<summary><code>def describe_test_set_generation(test_set_generation_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeTestSetGenerationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test set generation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsetgenerations.describe_test_set_generation("some example string")
    # TODO: Handle 'response' of type DescribeTestSetGenerationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestSetGenerationErrorBody
```

**Async**

```python
try:
    response = await async_client.testsetgenerations.describe_test_set_generation("some example string")
    # TODO: Handle 'response' of type DescribeTestSetGenerationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestSetGenerationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_generation_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeTestSetGenerationResponse](amazon_lex/models/describe_test_set_generation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeTestSetGenerationErrorBody](amazon_lex/errors/describe_test_set_generation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_test_set_generation(*, body: StartTestSetGenerationRequest | StartTestSetGenerationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartTestSetGenerationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to start the generation of test set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsetgenerations.start_test_set_generation()
    # TODO: Handle 'response' of type StartTestSetGenerationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTestSetGenerationErrorBody
```

**Async**

```python
try:
    response = await async_client.testsetgenerations.start_test_set_generation()
    # TODO: Handle 'response' of type StartTestSetGenerationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTestSetGenerationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StartTestSetGenerationRequest](amazon_lex/models/start_test_set_generation_request.py) \| [StartTestSetGenerationRequestDict](amazon_lex/models/start_test_set_generation_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartTestSetGenerationResponse](amazon_lex/models/start_test_set_generation_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StartTestSetGenerationErrorBody](amazon_lex/errors/start_test_set_generation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Testsets

> Source: [Testsets](amazon_lex/apis/testsets.py)

<details>
<summary><code>def create_test_set_discrepancy_report2(test_set_id: str, *, body: CreateTestSetDiscrepancyReportRequest | CreateTestSetDiscrepancyReportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateTestSetDiscrepancyReportResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a report that describes the differences between the bot and the test set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsets.create_test_set_discrepancy_report2("some example string")
    # TODO: Handle 'response' of type CreateTestSetDiscrepancyReportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTestSetDiscrepancyReport2ErrorBody
```

**Async**

```python
try:
    response = await async_client.testsets.create_test_set_discrepancy_report2("some example string")
    # TODO: Handle 'response' of type CreateTestSetDiscrepancyReportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTestSetDiscrepancyReport2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateTestSetDiscrepancyReportRequest](amazon_lex/models/create_test_set_discrepancy_report_request.py) \| [CreateTestSetDiscrepancyReportRequestDict](amazon_lex/models/create_test_set_discrepancy_report_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateTestSetDiscrepancyReportResponse](amazon_lex/models/create_test_set_discrepancy_report_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateTestSetDiscrepancyReport2ErrorBody](amazon_lex/errors/create_test_set_discrepancy_report2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_test_set(test_set_id: str, *, body: DeleteTestSetRequest | DeleteTestSetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to delete the selected test set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsets.delete_test_set("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTestSetErrorBody
```

**Async**

```python
try:
    response = await async_client.testsets.delete_test_set("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTestSetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteTestSetRequest](amazon_lex/models/delete_test_set_request.py) \| [DeleteTestSetRequestDict](amazon_lex/models/delete_test_set_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteTestSetErrorBody](amazon_lex/errors/delete_test_set_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_test_set(test_set_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DescribeTestSetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets metadata information about the test set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsets.describe_test_set("some example string")
    # TODO: Handle 'response' of type DescribeTestSetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestSetErrorBody
```

**Async**

```python
try:
    response = await async_client.testsets.describe_test_set("some example string")
    # TODO: Handle 'response' of type DescribeTestSetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestSetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DescribeTestSetResponse](amazon_lex/models/describe_test_set_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DescribeTestSetErrorBody](amazon_lex/errors/describe_test_set_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_test_set_records(test_set_id: str, *, body: ListTestSetRecordsRequest | ListTestSetRecordsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListTestSetRecordsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The list of test set records.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsets.list_test_set_records("some example string")
    # TODO: Handle 'response' of type ListTestSetRecordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestSetRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.testsets.list_test_set_records("some example string")
    # TODO: Handle 'response' of type ListTestSetRecordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestSetRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ListTestSetRecordsRequest](amazon_lex/models/list_test_set_records_request.py) \| [ListTestSetRecordsRequestDict](amazon_lex/models/list_test_set_records_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTestSetRecordsResponse](amazon_lex/models/list_test_set_records_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListTestSetRecordsErrorBody](amazon_lex/errors/list_test_set_records_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_test_sets(*, body: ListTestSetsRequest | ListTestSetsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ListTestSetsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The list of the test sets

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsets.list_test_sets()
    # TODO: Handle 'response' of type ListTestSetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestSetsErrorBody
```

**Async**

```python
try:
    response = await async_client.testsets.list_test_sets()
    # TODO: Handle 'response' of type ListTestSetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTestSetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ListTestSetsRequest](amazon_lex/models/list_test_sets_request.py) \| [ListTestSetsRequestDict](amazon_lex/models/list_test_sets_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTestSetsResponse](amazon_lex/models/list_test_sets_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[ListTestSetsErrorBody](amazon_lex/errors/list_test_sets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_test_execution2(test_set_id: str, *, body: StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi | StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to start test set execution.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsets.start_test_execution2("some example string")
    # TODO: Handle 'response' of type StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTestExecution2ErrorBody
```

**Async**

```python
try:
    response = await async_client.testsets.start_test_execution2("some example string")
    # TODO: Handle 'response' of type StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTestExecution2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi](amazon_lex/models/start_test_execution_request_amazon_lex_model_building_v2_testsets_api.py) \| [StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiDict](amazon_lex/models/start_test_execution_request_amazon_lex_model_building_v2_testsets_api.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi](amazon_lex/models/start_test_execution_response_amazon_lex_model_building_v2_testsets_api.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[StartTestExecution2ErrorBody](amazon_lex/errors/start_test_execution2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_lex/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_test_set(test_set_id: str, *, body: UpdateTestSetRequest | UpdateTestSetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> UpdateTestSetResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The action to update the test set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.testsets.update_test_set("some example string")
    # TODO: Handle 'response' of type UpdateTestSetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTestSetErrorBody
```

**Async**

```python
try:
    response = await async_client.testsets.update_test_set("some example string")
    # TODO: Handle 'response' of type UpdateTestSetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTestSetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>test_set_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateTestSetRequest](amazon_lex/models/update_test_set_request.py) \| [UpdateTestSetRequestDict](amazon_lex/models/update_test_set_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateTestSetResponse](amazon_lex/models/update_test_set_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[UpdateTestSetErrorBody](amazon_lex/errors/update_test_set_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ValidationException](amazon_lex/models/validation_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_lex/models/service_quota_exceeded_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[ThrottlingException](amazon_lex/models/throttling_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_lex/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Versions

> Source: [Versions](amazon_lex/apis/versions.py)

<details>
<summary><code>def create_bot_version2(name: str, *, body: ModelsLexCreateBotVersionRequest | ModelsLexCreateBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of the bot based on the $LATEST version. If the $LATEST version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version. You can update only the $LATEST version of the bot. You can't update the numbered versions that you create with the CreateBotVersion operation. When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permission for the lex:CreateBotVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.create_bot_version2("some example string")
    # TODO: Handle 'response' of type ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotVersion2ErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.create_bot_version2("some example string")
    # TODO: Handle 'response' of type ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBotVersion2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexCreateBotVersionRequest](amazon_lex/models/models_lex_create_bot_version_request.py) \| [ModelsLexCreateBotVersionRequestDict](amazon_lex/models/models_lex_create_bot_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelsLexCreateBotVersionResponseAmazonLexModelBuildingV2VersionsApi](amazon_lex/models/models_lex_create_bot_version_response_amazon_lex_model_building_v2_versions_api.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateBotVersion2ErrorBody](amazon_lex/errors/create_bot_version2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_intent_version(name: str, *, body: CreateIntentVersionRequest | CreateIntentVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateIntentVersionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of an intent based on the $LATEST version of the intent. If the $LATEST version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created. You can update only the $LATEST version of the intent. You can't update the numbered versions that you create with the CreateIntentVersion operation. When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permissions to perform the lex:CreateIntentVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.create_intent_version("some example string")
    # TODO: Handle 'response' of type CreateIntentVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateIntentVersionErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.create_intent_version("some example string")
    # TODO: Handle 'response' of type CreateIntentVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateIntentVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateIntentVersionRequest](amazon_lex/models/create_intent_version_request.py) \| [CreateIntentVersionRequestDict](amazon_lex/models/create_intent_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateIntentVersionResponse](amazon_lex/models/create_intent_version_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateIntentVersionErrorBody](amazon_lex/errors/create_intent_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_slot_type_version(name: str, *, body: CreateSlotTypeVersionRequest | CreateSlotTypeVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> CreateSlotTypeVersionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of a slot type based on the $LATEST version of the specified slot type. If the $LATEST version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created. You can update only the $LATEST version of a slot type. You can't update the numbered versions that you create with the CreateSlotTypeVersion operation. When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see versioning-intro. This operation requires permissions for the lex:CreateSlotTypeVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.create_slot_type_version("some example string")
    # TODO: Handle 'response' of type CreateSlotTypeVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSlotTypeVersionErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.create_slot_type_version("some example string")
    # TODO: Handle 'response' of type CreateSlotTypeVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSlotTypeVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateSlotTypeVersionRequest](amazon_lex/models/create_slot_type_version_request.py) \| [CreateSlotTypeVersionRequestDict](amazon_lex/models/create_slot_type_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateSlotTypeVersionResponse](amazon_lex/models/create_slot_type_version_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[CreateSlotTypeVersionErrorBody](amazon_lex/errors/create_slot_type_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bot_version2(name: str, version: str, *, body: ModelsLexDeleteBotVersionRequest | ModelsLexDeleteBotVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation. This operation requires permissions for the lex:DeleteBotVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.delete_bot_version2("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotVersion2ErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.delete_bot_version2("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBotVersion2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>version</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelsLexDeleteBotVersionRequest](amazon_lex/models/models_lex_delete_bot_version_request.py) \| [ModelsLexDeleteBotVersionRequestDict](amazon_lex/models/models_lex_delete_bot_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteBotVersion2ErrorBody](amazon_lex/errors/delete_bot_version2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_intent_version(name: str, version: str, *, body: DeleteIntentVersionRequest | DeleteIntentVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation. This operation requires permissions for the lex:DeleteIntentVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.delete_intent_version("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteIntentVersionErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.delete_intent_version("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteIntentVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>version</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteIntentVersionRequest](amazon_lex/models/delete_intent_version_request.py) \| [DeleteIntentVersionRequestDict](amazon_lex/models/delete_intent_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteIntentVersionErrorBody](amazon_lex/errors/delete_intent_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_slot_type_version2(name: str, version: str, *, body: DeleteSlotTypeVersionRequest | DeleteSlotTypeVersionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a specific version of a slot type. To delete all versions of a slot type, use the DeleteSlotType operation. This operation requires permissions for the lex:DeleteSlotTypeVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.delete_slot_type_version2("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotTypeVersion2ErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.delete_slot_type_version2("some example string", "some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSlotTypeVersion2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>version</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteSlotTypeVersionRequest](amazon_lex/models/delete_slot_type_version_request.py) \| [DeleteSlotTypeVersionRequestDict](amazon_lex/models/delete_slot_type_version_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[DeleteSlotTypeVersion2ErrorBody](amazon_lex/errors/delete_slot_type_version2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bot(name: str, version_or_alias: str, *, request_options: RequestOptionsOrDict | None = None) -> GetBotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. This operation requires permissions for the lex:GetBot action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.get_bot("some example string", "some example string")
    # TODO: Handle 'response' of type GetBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.get_bot("some example string", "some example string")
    # TODO: Handle 'response' of type GetBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>version_or_alias</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotResponse](amazon_lex/models/get_bot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBotErrorBody](amazon_lex/errors/get_bot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bot_versions(name: str, *, request_options: RequestOptionsOrDict | None = None) -> GetBotVersionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all of the versions of a bot. The GetBotVersions operation returns a BotMetadata object for each version of a bot. For example, if a bot has three numbered versions, the GetBotVersions operation returns four BotMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetBotVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetBotVersions action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.get_bot_versions("some example string")
    # TODO: Handle 'response' of type GetBotVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.get_bot_versions("some example string")
    # TODO: Handle 'response' of type GetBotVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBotVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBotVersionsResponse](amazon_lex/models/get_bot_versions_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetBotVersionsErrorBody](amazon_lex/errors/get_bot_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_intent(name: str, version: str, *, request_options: RequestOptionsOrDict | None = None) -> GetIntentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about an intent. In addition to the intent name, you must specify the intent version. This operation requires permissions to perform the lex:GetIntent action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.get_intent("some example string", "some example string")
    # TODO: Handle 'response' of type GetIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntentErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.get_intent("some example string", "some example string")
    # TODO: Handle 'response' of type GetIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>version</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntentResponse](amazon_lex/models/get_intent_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetIntentErrorBody](amazon_lex/errors/get_intent_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_intent_versions(name: str, *, request_options: RequestOptionsOrDict | None = None) -> GetIntentVersionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all of the versions of an intent. The GetIntentVersions operation returns an IntentMetadata object for each version of an intent. For example, if an intent has three numbered versions, the GetIntentVersions operation returns four IntentMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetIntentVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetIntentVersions action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.get_intent_versions("some example string")
    # TODO: Handle 'response' of type GetIntentVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntentVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.get_intent_versions("some example string")
    # TODO: Handle 'response' of type GetIntentVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntentVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntentVersionsResponse](amazon_lex/models/get_intent_versions_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetIntentVersionsErrorBody](amazon_lex/errors/get_intent_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_slot_type(name: str, version: str, *, request_options: RequestOptionsOrDict | None = None) -> GetSlotTypeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.get_slot_type("some example string", "some example string")
    # TODO: Handle 'response' of type GetSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSlotTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.get_slot_type("some example string", "some example string")
    # TODO: Handle 'response' of type GetSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSlotTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>version</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSlotTypeResponse](amazon_lex/models/get_slot_type_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetSlotTypeErrorBody](amazon_lex/errors/get_slot_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_slot_type_versions(name: str, *, request_options: RequestOptionsOrDict | None = None) -> GetSlotTypeVersionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about all versions of a slot type. The GetSlotTypeVersions operation returns a SlotTypeMetadata object for each version of a slot type. For example, if a slot type has three numbered versions, the GetSlotTypeVersions operation returns four SlotTypeMetadata objects in the response, one for each numbered version and one for the $LATEST version. The GetSlotTypeVersions operation always returns at least one version, the $LATEST version. This operation requires permissions for the lex:GetSlotTypeVersions action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.get_slot_type_versions("some example string")
    # TODO: Handle 'response' of type GetSlotTypeVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSlotTypeVersionsErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.get_slot_type_versions("some example string")
    # TODO: Handle 'response' of type GetSlotTypeVersionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSlotTypeVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSlotTypeVersionsResponse](amazon_lex/models/get_slot_type_versions_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[GetSlotTypeVersionsErrorBody](amazon_lex/errors/get_slot_type_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 404 | <code>[NotFoundException](amazon_lex/models/not_found_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_bot(name: str, *, body: PutBotRequest | PutBotRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PutBotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot action. For more information, see security-iam.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.put_bot(
        "some example string",
        body=PutBotRequest(
            name="DocOrderPizzaBot",
            description="Orders a pizza from a local pizzeria.",
            intents=[ModelsLexIntent(intent_name="DocOrderPizza", intent_version="$LATEST")],
            clarification_prompt=Prompt(
                messages=[
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT,
                        content="I'm sorry, I didn't hear that. Can you repeat what you just said?",
                    ),
                    ModelsLexMessage(content_type=ContentType2.PLAIN_TEXT, content="Can you say that again?"),
                ],
                max_attempts=1,
            ),
            abort_statement=Statement(
                messages=[
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT, content="I don't understand. Can you try again?"
                    ),
                    ModelsLexMessage(content_type=ContentType2.PLAIN_TEXT, content="I'm sorry, I don't understand."),
                ],
            ),
            idle_session_ttl_in_seconds=300,
            process_behavior=ProcessBehavior.SAVE,
            locale=Locale2.EN_US,
            child_directed=True,
        ),
    )
    # TODO: Handle 'response' of type PutBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutBotErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.put_bot(
        "some example string",
        body=PutBotRequest(
            name="DocOrderPizzaBot",
            description="Orders a pizza from a local pizzeria.",
            intents=[ModelsLexIntent(intent_name="DocOrderPizza", intent_version="$LATEST")],
            clarification_prompt=Prompt(
                messages=[
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT,
                        content="I'm sorry, I didn't hear that. Can you repeat what you just said?",
                    ),
                    ModelsLexMessage(content_type=ContentType2.PLAIN_TEXT, content="Can you say that again?"),
                ],
                max_attempts=1,
            ),
            abort_statement=Statement(
                messages=[
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT, content="I don't understand. Can you try again?"
                    ),
                    ModelsLexMessage(content_type=ContentType2.PLAIN_TEXT, content="I'm sorry, I don't understand."),
                ],
            ),
            idle_session_ttl_in_seconds=300,
            process_behavior=ProcessBehavior.SAVE,
            locale=Locale2.EN_US,
            child_directed=True,
        ),
    )
    # TODO: Handle 'response' of type PutBotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutBotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PutBotRequest](amazon_lex/models/put_bot_request.py) \| [PutBotRequestDict](amazon_lex/models/put_bot_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutBotResponse](amazon_lex/models/put_bot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[PutBotErrorBody](amazon_lex/errors/put_bot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_intent(name: str, *, body: PutIntentRequest | PutIntentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PutIntentResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an intent or replaces an existing intent. To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To create an intent or replace an existing intent, you must provide the following: Intent name. For example, OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza." Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. You can specify other optional information in the request, such as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A con

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.put_intent(
        "some example string",
        body=PutIntentRequest(
            name="DocOrderPizza",
            description="Order a pizza from a local pizzeria.",
            slots=[
                ModelsLexSlot(
                    name="Type",
                    description="The type of pizza to order.",
                    slot_constraint=SlotConstraint.REQUIRED,
                    slot_type="DocPizzaType",
                    slot_type_version="$LATEST",
                    value_elicitation_prompt=Prompt(
                        messages=[ModelsLexMessage(), ModelsLexMessage(), ModelsLexMessage()], max_attempts=1
                    ),
                    priority=1,
                    sample_utterances=["Get me a {Type} pizza.", "A {Type} pizza please.", "I'd like a {Type} pizza."],
                ),
                ModelsLexSlot(
                    name="Crust",
                    description="The type of pizza crust to order.",
                    slot_constraint=SlotConstraint.REQUIRED,
                    slot_type="DocPizzaCrustType",
                    slot_type_version="$LATEST",
                    value_elicitation_prompt=Prompt(messages=[ModelsLexMessage(), ModelsLexMessage()], max_attempts=1),
                    priority=2,
                    sample_utterances=["Make it a {Crust} crust.", "I'd like a {Crust} crust."],
                ),
                ModelsLexSlot(
                    name="Sauce",
                    description="The type of sauce to use on the pizza.",
                    slot_constraint=SlotConstraint.REQUIRED,
                    slot_type="DocPizzaSauceType",
                    slot_type_version="$LATEST",
                    value_elicitation_prompt=Prompt(messages=[ModelsLexMessage(), ModelsLexMessage()], max_attempts=1),
                    priority=3,
                    sample_utterances=["Make it {Sauce} sauce.", "I'd like {Sauce} sauce."],
                ),
            ],
            sample_utterances=[
                "Order me a pizza.",
                "Order me a {Type} pizza.",
                "I want a {Crust} crust {Type} pizza",
                "I want a {Crust} crust {Type} pizza with {Sauce} sauce.",
            ],
            confirmation_prompt=Prompt(
                messages=[
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT,
                        content="Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
                    ),
                ],
                max_attempts=1,
            ),
            rejection_statement=Statement(
                messages=[
                    ModelsLexMessage(content_type=ContentType2.PLAIN_TEXT, content="Ok, I'll cancel your order."),
                    ModelsLexMessage(content_type=ContentType2.PLAIN_TEXT, content="I cancelled your order."),
                ],
            ),
            conclusion_statement=Statement(
                messages=[
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT,
                        content="All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
                    ),
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT,
                        content="OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
                    ),
                ],
                response_card="foo",
            ),
            fulfillment_activity=FulfillmentActivity(type_=TypeAmazonLexModelBuildingV2VersionsApi.RETURN_INTENT),
        ),
    )
    # TODO: Handle 'response' of type PutIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutIntentErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.put_intent(
        "some example string",
        body=PutIntentRequest(
            name="DocOrderPizza",
            description="Order a pizza from a local pizzeria.",
            slots=[
                ModelsLexSlot(
                    name="Type",
                    description="The type of pizza to order.",
                    slot_constraint=SlotConstraint.REQUIRED,
                    slot_type="DocPizzaType",
                    slot_type_version="$LATEST",
                    value_elicitation_prompt=Prompt(
                        messages=[ModelsLexMessage(), ModelsLexMessage(), ModelsLexMessage()], max_attempts=1
                    ),
                    priority=1,
                    sample_utterances=["Get me a {Type} pizza.", "A {Type} pizza please.", "I'd like a {Type} pizza."],
                ),
                ModelsLexSlot(
                    name="Crust",
                    description="The type of pizza crust to order.",
                    slot_constraint=SlotConstraint.REQUIRED,
                    slot_type="DocPizzaCrustType",
                    slot_type_version="$LATEST",
                    value_elicitation_prompt=Prompt(messages=[ModelsLexMessage(), ModelsLexMessage()], max_attempts=1),
                    priority=2,
                    sample_utterances=["Make it a {Crust} crust.", "I'd like a {Crust} crust."],
                ),
                ModelsLexSlot(
                    name="Sauce",
                    description="The type of sauce to use on the pizza.",
                    slot_constraint=SlotConstraint.REQUIRED,
                    slot_type="DocPizzaSauceType",
                    slot_type_version="$LATEST",
                    value_elicitation_prompt=Prompt(messages=[ModelsLexMessage(), ModelsLexMessage()], max_attempts=1),
                    priority=3,
                    sample_utterances=["Make it {Sauce} sauce.", "I'd like {Sauce} sauce."],
                ),
            ],
            sample_utterances=[
                "Order me a pizza.",
                "Order me a {Type} pizza.",
                "I want a {Crust} crust {Type} pizza",
                "I want a {Crust} crust {Type} pizza with {Sauce} sauce.",
            ],
            confirmation_prompt=Prompt(
                messages=[
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT,
                        content="Should I order  your {Crust} crust {Type} pizza with {Sauce} sauce?",
                    ),
                ],
                max_attempts=1,
            ),
            rejection_statement=Statement(
                messages=[
                    ModelsLexMessage(content_type=ContentType2.PLAIN_TEXT, content="Ok, I'll cancel your order."),
                    ModelsLexMessage(content_type=ContentType2.PLAIN_TEXT, content="I cancelled your order."),
                ],
            ),
            conclusion_statement=Statement(
                messages=[
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT,
                        content="All right, I ordered  you a {Crust} crust {Type} pizza with {Sauce} sauce.",
                    ),
                    ModelsLexMessage(
                        content_type=ContentType2.PLAIN_TEXT,
                        content="OK, your {Crust} crust {Type} pizza with {Sauce} sauce is on the way.",
                    ),
                ],
                response_card="foo",
            ),
            fulfillment_activity=FulfillmentActivity(type_=TypeAmazonLexModelBuildingV2VersionsApi.RETURN_INTENT),
        ),
    )
    # TODO: Handle 'response' of type PutIntentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutIntentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PutIntentRequest](amazon_lex/models/put_intent_request.py) \| [PutIntentRequestDict](amazon_lex/models/put_intent_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutIntentResponse](amazon_lex/models/put_intent_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[PutIntentErrorBody](amazon_lex/errors/put_intent_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_slot_type(name: str, *, body: PutSlotTypeRequest | PutSlotTypeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PutSlotTypeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the lex:PutSlotType action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.versions.put_slot_type(
        "some example string",
        body=PutSlotTypeRequest(
            name="PizzaSauceType",
            description="Available pizza sauces",
            enumeration_values=[EnumerationValue(value="red"), EnumerationValue(value="white")],
        ),
    )
    # TODO: Handle 'response' of type PutSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSlotTypeErrorBody
```

**Async**

```python
try:
    response = await async_client.versions.put_slot_type(
        "some example string",
        body=PutSlotTypeRequest(
            name="PizzaSauceType",
            description="Available pizza sauces",
            enumeration_values=[EnumerationValue(value="red"), EnumerationValue(value="white")],
        ),
    )
    # TODO: Handle 'response' of type PutSlotTypeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSlotTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PutSlotTypeRequest](amazon_lex/models/put_slot_type_request.py) \| [PutSlotTypeRequestDict](amazon_lex/models/put_slot_type_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_lex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutSlotTypeResponse](amazon_lex/models/put_slot_type_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_lex/core/exceptions.py)&#91;[PutSlotTypeErrorBody](amazon_lex/errors/put_slot_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[BadRequestException](amazon_lex/models/bad_request_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_lex/models/conflict_exception.py)</code> |
| 412 | <code>[PreconditionFailedException](amazon_lex/models/precondition_failed_exception.py)</code> |
| 429 | <code>[LimitExceededException](amazon_lex/models/limit_exceeded_exception.py)</code> |
| 500 | <code>[InternalFailureException](amazon_lex/models/internal_failure_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_lex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

