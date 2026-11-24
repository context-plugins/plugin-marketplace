# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AirtableClient](airtable/client.py)

## Bases

> Source: [Bases](airtable/apis/bases.py)

<details>
<summary><code>def create_base(body: CreateBaseRequest | CreateBaseRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BaseSchema, CreateBaseErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new base in the specified workspace. The request must include the workspace ID, base name, and at least one table definition with fields. Returns the newly created base with its schema.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bases.with_raw_response.create_base(
    CreateBaseRequest(
        name="some example string",
        workspace_id="some example string",
        tables=[
            Table(
                name="some example string",
                fields=[CreateFieldRequest(name="some example string", type_="some example string")],
            ),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BaseSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBaseErrorBody
```

**Async**

```python
result = await async_client.bases.with_raw_response.create_base(
    CreateBaseRequest(
        name="some example string",
        workspace_id="some example string",
        tables=[
            Table(
                name="some example string",
                fields=[CreateFieldRequest(name="some example string", type_="some example string")],
            ),
        ],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BaseSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateBaseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateBaseRequest](airtable/models/create_base_request.py) \| [CreateBaseRequestDict](airtable/models/create_base_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[BaseSchema](airtable/models/base_schema.py), [CreateBaseErrorBody](airtable/errors/create_base_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BaseSchema](airtable/models/base_schema.py)</code> -- The newly created base with its schema.

**On `Failure`**: `error` is <code>[CreateBaseErrorBody](airtable/errors/create_base_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_base_schema(base_id: str, *, include: list[IncludeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetaBasesTablesResponse, GetBaseSchemaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the schema of the specified base, including all tables, their fields (with type and configuration), and views. This endpoint provides a complete structural overview of the base.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bases.with_raw_response.get_base_schema("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetaBasesTablesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBaseSchemaErrorBody
```

**Async**

```python
result = await async_client.bases.with_raw_response.get_base_schema("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetaBasesTablesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBaseSchemaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>include</code> | <code>list&#91;[IncludeOrStr](airtable/models/enums/include.py)&#93; \| None</code> | Additional information to include in the response. Pass visibleFieldIds to include visible field IDs for each view.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[MetaBasesTablesResponse](airtable/models/meta_bases_tables_response.py), [GetBaseSchemaErrorBody](airtable/errors/get_base_schema_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetaBasesTablesResponse](airtable/models/meta_bases_tables_response.py)</code> -- The base schema with tables, fields, and views.

**On `Failure`**: `error` is <code>[GetBaseSchemaErrorBody](airtable/errors/get_base_schema_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bases(*, offset: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BaseList, ListBasesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all bases that the authenticated user has access to. Each base includes its ID, name, and permission level. Use the offset parameter from the response to paginate through all available bases.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bases.with_raw_response.list_bases()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BaseList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBasesErrorBody
```

**Async**

```python
result = await async_client.bases.with_raw_response.list_bases()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BaseList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offset</code> | <code>str \| None</code> | Pagination cursor from a previous response to fetch the next page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[BaseList](airtable/models/base_list.py), [ListBasesErrorBody](airtable/errors/list_bases_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BaseList](airtable/models/base_list.py)</code> -- A paginated list of bases.

**On `Failure`**: `error` is <code>[ListBasesErrorBody](airtable/errors/list_bases_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def whoami(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MetaWhoamiResponse, WhoamiErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ID and scopes of the currently authenticated user or service account. Useful for verifying authentication and checking available permissions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.bases.with_raw_response.whoami()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetaWhoamiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WhoamiErrorBody
```

**Async**

```python
result = await async_client.bases.with_raw_response.whoami()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MetaWhoamiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WhoamiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[MetaWhoamiResponse](airtable/models/meta_whoami_response.py), [WhoamiErrorBody](airtable/errors/whoami_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MetaWhoamiResponse](airtable/models/meta_whoami_response.py)</code> -- The current user ID and authorized scopes.

**On `Failure`**: `error` is <code>[WhoamiErrorBody](airtable/errors/whoami_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Comments

> Source: [Comments](airtable/apis/comments.py)

<details>
<summary><code>def create_comment(base_id: str, table_id_or_name: str, record_id: str, body: RecordIdCommentsRequest | RecordIdCommentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Comment, CreateCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new comment on the specified record. Comments can include user mentions using the @[usrXXXXXXXX] syntax. Requires OAuth authentication with the comment:write scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.create_comment(
    "some example string",
    "some example string",
    "some example string",
    RecordIdCommentsRequest(text="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Comment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCommentErrorBody
```

**Async**

```python
result = await async_client.comments.with_raw_response.create_comment(
    "some example string",
    "some example string",
    "some example string",
    RecordIdCommentsRequest(text="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Comment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>record_id</code> | <code>str</code> | The unique identifier of the record (starts with 'rec'). |
| <code>body</code> | <code>[RecordIdCommentsRequest](airtable/models/record_id_comments_request.py) \| [RecordIdCommentsRequestDict](airtable/models/record_id_comments_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[Comment](airtable/models/comment.py), [CreateCommentErrorBody](airtable/errors/create_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Comment](airtable/models/comment.py)</code> -- The created comment.

**On `Failure`**: `error` is <code>[CreateCommentErrorBody](airtable/errors/create_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_comment(base_id: str, table_id_or_name: str, record_id: str, comment_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecordIdCommentsCommentIdResponse, DeleteCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a comment from a record. Only the author of the comment can delete it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.delete_comment(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordIdCommentsCommentIdResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCommentErrorBody
```

**Async**

```python
result = await async_client.comments.with_raw_response.delete_comment(
    "some example string", "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordIdCommentsCommentIdResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>record_id</code> | <code>str</code> | The unique identifier of the record (starts with 'rec'). |
| <code>comment_id</code> | <code>str</code> | The unique identifier of the comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[RecordIdCommentsCommentIdResponse](airtable/models/record_id_comments_comment_id_response.py), [DeleteCommentErrorBody](airtable/errors/delete_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecordIdCommentsCommentIdResponse](airtable/models/record_id_comments_comment_id_response.py)</code> -- Confirmation that the comment was deleted.

**On `Failure`**: `error` is <code>[DeleteCommentErrorBody](airtable/errors/delete_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_comments(base_id: str, table_id_or_name: str, record_id: str, *, offset: str | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommentList, ListCommentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of comments on the specified record. Comments are returned in reverse chronological order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.list_comments(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCommentsErrorBody
```

**Async**

```python
result = await async_client.comments.with_raw_response.list_comments(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>record_id</code> | <code>str</code> | The unique identifier of the record (starts with 'rec'). |
| <code>offset</code> | <code>str \| None</code> | Pagination cursor from a previous response to fetch the next page.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The number of comments to return per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[CommentList](airtable/models/comment_list.py), [ListCommentsErrorBody](airtable/errors/list_comments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommentList](airtable/models/comment_list.py)</code> -- A paginated list of comments.

**On `Failure`**: `error` is <code>[ListCommentsErrorBody](airtable/errors/list_comments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_comment(base_id: str, table_id_or_name: str, record_id: str, comment_id: str, body: RecordIdCommentsCommentIdRequest | RecordIdCommentsCommentIdRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Comment, UpdateCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the text of an existing comment on a record. Only the author of the comment can update it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.update_comment(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    RecordIdCommentsCommentIdRequest(text="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Comment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCommentErrorBody
```

**Async**

```python
result = await async_client.comments.with_raw_response.update_comment(
    "some example string",
    "some example string",
    "some example string",
    "some example string",
    RecordIdCommentsCommentIdRequest(text="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Comment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>record_id</code> | <code>str</code> | The unique identifier of the record (starts with 'rec'). |
| <code>comment_id</code> | <code>str</code> | The unique identifier of the comment. |
| <code>body</code> | <code>[RecordIdCommentsCommentIdRequest](airtable/models/record_id_comments_comment_id_request.py) \| [RecordIdCommentsCommentIdRequestDict](airtable/models/record_id_comments_comment_id_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[Comment](airtable/models/comment.py), [UpdateCommentErrorBody](airtable/errors/update_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Comment](airtable/models/comment.py)</code> -- The updated comment.

**On `Failure`**: `error` is <code>[UpdateCommentErrorBody](airtable/errors/update_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Fields

> Source: [Fields](airtable/apis/fields.py)

<details>
<summary><code>def create_field(base_id: str, table_id: str, body: CreateFieldRequest | CreateFieldRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FieldSchema, CreateFieldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new field in the specified table. The field must include a name and type. Some field types (like singleSelect, multipleSelects) accept additional options for configuration. Note that formula and some computed field types cannot be created via the API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.fields.with_raw_response.create_field(
    "some example string",
    "some example string",
    CreateFieldRequest(name="some example string", type_="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FieldSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFieldErrorBody
```

**Async**

```python
result = await async_client.fields.with_raw_response.create_field(
    "some example string",
    "some example string",
    CreateFieldRequest(name="some example string", type_="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FieldSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id</code> | <code>str</code> | The unique identifier of the table (starts with 'tbl'). |
| <code>body</code> | <code>[CreateFieldRequest](airtable/models/create_field_request.py) \| [CreateFieldRequestDict](airtable/models/create_field_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[FieldSchema](airtable/models/field_schema.py), [CreateFieldErrorBody](airtable/errors/create_field_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FieldSchema](airtable/models/field_schema.py)</code> -- The newly created field definition.

**On `Failure`**: `error` is <code>[CreateFieldErrorBody](airtable/errors/create_field_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_field(base_id: str, table_id: str, field_id: str, body: MetaBasesTablesFieldsFieldIdRequest | MetaBasesTablesFieldsFieldIdRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FieldSchema, UpdateFieldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name, description, or configuration options of an existing field. Only the provided properties will be modified. Not all field properties can be updated after creation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.fields.with_raw_response.update_field(
    "some example string", "some example string", "some example string", MetaBasesTablesFieldsFieldIdRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FieldSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFieldErrorBody
```

**Async**

```python
result = await async_client.fields.with_raw_response.update_field(
    "some example string", "some example string", "some example string", MetaBasesTablesFieldsFieldIdRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FieldSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id</code> | <code>str</code> | The unique identifier of the table (starts with 'tbl'). |
| <code>field_id</code> | <code>str</code> | The unique identifier of the field (starts with 'fld'). |
| <code>body</code> | <code>[MetaBasesTablesFieldsFieldIdRequest](airtable/models/meta_bases_tables_fields_field_id_request.py) \| [MetaBasesTablesFieldsFieldIdRequestDict](airtable/models/meta_bases_tables_fields_field_id_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[FieldSchema](airtable/models/field_schema.py), [UpdateFieldErrorBody](airtable/errors/update_field_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FieldSchema](airtable/models/field_schema.py)</code> -- The updated field definition.

**On `Failure`**: `error` is <code>[UpdateFieldErrorBody](airtable/errors/update_field_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](airtable/apis/groups.py)

<details>
<summary><code>def create_scim_group(body: ScimGroupCreateRequest | ScimGroupCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimGroup, CreateScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new SCIM group in the enterprise account. Groups can contain user members and are used for access management.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.create_scim_group(
    ScimGroupCreateRequest(schemas=["some example string"], display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScimGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.create_scim_group(
    ScimGroupCreateRequest(schemas=["some example string"], display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScimGroupCreateRequest](airtable/models/scim_group_create_request.py) \| [ScimGroupCreateRequestDict](airtable/models/scim_group_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimGroup](airtable/models/scim_group.py), [CreateScimGroupErrorBody](airtable/errors/create_scim_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimGroup](airtable/models/scim_group.py)</code> -- The newly created SCIM group resource.

**On `Failure`**: `error` is <code>[CreateScimGroupErrorBody](airtable/errors/create_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_scim_group(group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a SCIM group from the enterprise account. Members are not deleted but are removed from the group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.delete_scim_group("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteScimGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.delete_scim_group("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_id</code> | <code>str</code> | The unique identifier of the SCIM group resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;None, [DeleteScimGroupErrorBody](airtable/errors/delete_scim_group_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteScimGroupErrorBody](airtable/errors/delete_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scim_group(group_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimGroup, GetScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single SCIM group resource by its unique identifier, including its member list.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.get_scim_group("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScimGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.get_scim_group("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_id</code> | <code>str</code> | The unique identifier of the SCIM group resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimGroup](airtable/models/scim_group.py), [GetScimGroupErrorBody](airtable/errors/get_scim_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimGroup](airtable/models/scim_group.py)</code> -- The requested SCIM group resource.

**On `Failure`**: `error` is <code>[GetScimGroupErrorBody](airtable/errors/get_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_scim_groups(*, filter_: str | None = None, start_index: int | None = 1, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimGroupListResponse, ListScimGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of SCIM group resources. Supports filtering by group display name and pagination using startIndex and count.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.list_scim_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroupListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScimGroupsErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.list_scim_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroupListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScimGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | SCIM filter expression (e.g., displayName eq "Engineering").<br>**Default**: <code>None</code> |
| <code>start_index</code> | <code>int \| None</code> | The 1-based index of the first result to return.<br>**Default**: <code>1</code> |
| <code>count</code> | <code>int \| None</code> | The maximum number of results to return per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimGroupListResponse](airtable/models/scim_group_list_response.py), [ListScimGroupsErrorBody](airtable/errors/list_scim_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimGroupListResponse](airtable/models/scim_group_list_response.py)</code> -- A SCIM ListResponse containing group resources.

**On `Failure`**: `error` is <code>[ListScimGroupsErrorBody](airtable/errors/list_scim_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_scim_group(group_id: str, body: ScimGroupCreateRequest | ScimGroupCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimGroup, ReplaceScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces a SCIM group resource entirely with the provided data. The complete member list must be included in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.replace_scim_group(
    "some example string", ScimGroupCreateRequest(schemas=["some example string"], display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceScimGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.replace_scim_group(
    "some example string", ScimGroupCreateRequest(schemas=["some example string"], display_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_id</code> | <code>str</code> | The unique identifier of the SCIM group resource. |
| <code>body</code> | <code>[ScimGroupCreateRequest](airtable/models/scim_group_create_request.py) \| [ScimGroupCreateRequestDict](airtable/models/scim_group_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimGroup](airtable/models/scim_group.py), [ReplaceScimGroupErrorBody](airtable/errors/replace_scim_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimGroup](airtable/models/scim_group.py)</code> -- The replaced SCIM group resource.

**On `Failure`**: `error` is <code>[ReplaceScimGroupErrorBody](airtable/errors/replace_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_scim_group(group_id: str, body: ScimPatchRequest | ScimPatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimGroup, UpdateScimGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM group resource using SCIM PATCH operations. Commonly used to add or remove members from the group without replacing the entire resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.update_scim_group(
    "some example string", ScimPatchRequest(schemas=["some example string"], operations=[Operation(op=Op.ADD)])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScimGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.update_scim_group(
    "some example string", ScimPatchRequest(schemas=["some example string"], operations=[Operation(op=Op.ADD)])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimGroup
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScimGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_id</code> | <code>str</code> | The unique identifier of the SCIM group resource. |
| <code>body</code> | <code>[ScimPatchRequest](airtable/models/scim_patch_request.py) \| [ScimPatchRequestDict](airtable/models/scim_patch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimGroup](airtable/models/scim_group.py), [UpdateScimGroupErrorBody](airtable/errors/update_scim_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimGroup](airtable/models/scim_group.py)</code> -- The updated SCIM group resource.

**On `Failure`**: `error` is <code>[UpdateScimGroupErrorBody](airtable/errors/update_scim_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Records

> Source: [Records](airtable/apis/records.py)

<details>
<summary><code>def create_records(base_id: str, table_id_or_name: str, body: Request | RequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Response, CreateRecordsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates up to 10 records in the specified table. Each record must include a fields object mapping field names (or IDs) to values. If typecast is enabled, the API will attempt to convert string values to the appropriate cell value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.records.with_raw_response.create_records(
    "some example string", "some example string", Request(records=[Record1(fields={})])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRecordsErrorBody
```

**Async**

```python
result = await async_client.records.with_raw_response.create_records(
    "some example string", "some example string", Request(records=[Record1(fields={})])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>body</code> | <code>[Request](airtable/models/request.py) \| [RequestDict](airtable/models/request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[Response](airtable/models/response.py), [CreateRecordsErrorBody](airtable/errors/create_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Response](airtable/models/response.py)</code> -- The created records.

**On `Failure`**: `error` is <code>[CreateRecordsErrorBody](airtable/errors/create_records_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_record(base_id: str, table_id_or_name: str, record_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecordDeleted, DeleteRecordErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single record from the specified table. The record is permanently removed and cannot be recovered through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.records.with_raw_response.delete_record(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordDeleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteRecordErrorBody
```

**Async**

```python
result = await async_client.records.with_raw_response.delete_record(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordDeleted
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>record_id</code> | <code>str</code> | The unique identifier of the record (starts with 'rec'). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[RecordDeleted](airtable/models/record_deleted.py), [DeleteRecordErrorBody](airtable/errors/delete_record_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecordDeleted](airtable/models/record_deleted.py)</code> -- Confirmation of deletion.

**On `Failure`**: `error` is <code>[DeleteRecordErrorBody](airtable/errors/delete_record_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_record(base_id: str, table_id_or_name: str, record_id: str, *, return_fields_by_field_id: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Record, GetRecordErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single record by its ID from the specified table. Returns the record's fields, creation time, and ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.records.with_raw_response.get_record(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Record
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRecordErrorBody
```

**Async**

```python
result = await async_client.records.with_raw_response.get_record(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Record
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>record_id</code> | <code>str</code> | The unique identifier of the record (starts with 'rec'). |
| <code>return_fields_by_field_id</code> | <code>bool \| None</code> | If true, the response will use field IDs as keys instead of field names.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[Record](airtable/models/record.py), [GetRecordErrorBody](airtable/errors/get_record_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Record](airtable/models/record.py)</code> -- The requested record.

**On `Failure`**: `error` is <code>[GetRecordErrorBody](airtable/errors/get_record_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_records(base_id: str, table_id_or_name: str, *, fields: list[str] | None = None, filter_by_formula: str | None = None, max_records: int | None = None, page_size: int | None = 100, sort: list[Sort | SortDict] | None = None, view: str | None = None, cell_format: CellFormatOrStr | None = None, time_zone: str | None = None, user_locale: str | None = None, return_fields_by_field_id: bool | None = None, offset: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecordList, ListRecordsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of records in the specified table. Records can be filtered using an Airtable formula, sorted by specific fields, and limited to specific fields. The maximum page size is 100 records. Use the offset parameter from the response to fetch the next page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.records.with_raw_response.list_records("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRecordsErrorBody
```

**Async**

```python
result = await async_client.records.with_raw_response.list_records("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>fields</code> | <code>list&#91;str&#93; \| None</code> | Only return data for the specified field names or IDs.<br>**Default**: <code>None</code> |
| <code>filter_by_formula</code> | <code>str \| None</code> | An Airtable formula used to filter records. The formula is evaluated for each record, and if the result is not 0, false, "", NaN, [], or #Error!, the record will be included in the response.<br>**Default**: <code>None</code> |
| <code>max_records</code> | <code>int \| None</code> | The maximum total number of records that will be returned.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The number of records returned in each request. Must be less than or equal to 100. Default is 100.<br>**Default**: <code>100</code> |
| <code>sort</code> | <code>list&#91;[Sort](airtable/models/sort.py) \| [SortDict](airtable/models/sort.py)&#93; \| None</code> | A list of sort objects that specifies how the records will be ordered. Each sort object must have a field key and an optional direction key (asc or desc).<br>**Default**: <code>None</code> |
| <code>view</code> | <code>str \| None</code> | The name or ID of a view in the table. If set, only the records in that view will be returned.<br>**Default**: <code>None</code> |
| <code>cell_format</code> | <code>[CellFormatOrStr](airtable/models/enums/cell_format.py) \| None</code> | The format that should be used for cell values. Supported values are json (default) and string.<br>**Default**: <code>None</code> |
| <code>time_zone</code> | <code>str \| None</code> | The time zone to use for formatting dates when using string cell format.<br>**Default**: <code>None</code> |
| <code>user_locale</code> | <code>str \| None</code> | The user locale to use for formatting dates when using string cell format.<br>**Default**: <code>None</code> |
| <code>return_fields_by_field_id</code> | <code>bool \| None</code> | If true, the response will use field IDs as object keys instead of field names.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>str \| None</code> | A pagination cursor returned from a previous request. Pass this value to fetch the next page of results.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[RecordList](airtable/models/record_list.py), [ListRecordsErrorBody](airtable/errors/list_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecordList](airtable/models/record_list.py)</code> -- A paginated list of records.

**On `Failure`**: `error` is <code>[ListRecordsErrorBody](airtable/errors/list_records_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_record(base_id: str, table_id_or_name: str, record_id: str, body: RecordIdRequest1 | RecordIdRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Record, ReplaceRecordErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces all fields of an existing record. Fields that are not included in the request body will be cleared. This is a destructive update that overwrites the entire record.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.records.with_raw_response.replace_record(
    "some example string", "some example string", "some example string", RecordIdRequest1(fields={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Record
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceRecordErrorBody
```

**Async**

```python
result = await async_client.records.with_raw_response.replace_record(
    "some example string", "some example string", "some example string", RecordIdRequest1(fields={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Record
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>record_id</code> | <code>str</code> | The unique identifier of the record (starts with 'rec'). |
| <code>body</code> | <code>[RecordIdRequest1](airtable/models/record_id_request1.py) \| [RecordIdRequest1Dict](airtable/models/record_id_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[Record](airtable/models/record.py), [ReplaceRecordErrorBody](airtable/errors/replace_record_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Record](airtable/models/record.py)</code> -- The replaced record.

**On `Failure`**: `error` is <code>[ReplaceRecordErrorBody](airtable/errors/replace_record_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_record(base_id: str, table_id_or_name: str, record_id: str, body: RecordIdRequest | RecordIdRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Record, UpdateRecordErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specific fields of an existing record. Only the fields included in the request body will be updated; all other fields will remain unchanged. Up to 10 records can be updated in a single request when using the batch endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.records.with_raw_response.update_record(
    "some example string", "some example string", "some example string", RecordIdRequest(fields={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Record
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateRecordErrorBody
```

**Async**

```python
result = await async_client.records.with_raw_response.update_record(
    "some example string", "some example string", "some example string", RecordIdRequest(fields={})
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Record
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateRecordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id_or_name</code> | <code>str</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>record_id</code> | <code>str</code> | The unique identifier of the record (starts with 'rec'). |
| <code>body</code> | <code>[RecordIdRequest](airtable/models/record_id_request.py) \| [RecordIdRequestDict](airtable/models/record_id_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[Record](airtable/models/record.py), [UpdateRecordErrorBody](airtable/errors/update_record_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Record](airtable/models/record.py)</code> -- The updated record.

**On `Failure`**: `error` is <code>[UpdateRecordErrorBody](airtable/errors/update_record_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tables

> Source: [Tables](airtable/apis/tables.py)

<details>
<summary><code>def create_table(base_id: str, body: CreateTableRequest | CreateTableRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TableSchema, CreateTableErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new table within the specified base. The table must include a name and at least one field definition. Optionally include a description for the table.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tables.with_raw_response.create_table(
    "some example string",
    CreateTableRequest(
        name="some example string", fields=[CreateFieldRequest(name="some example string", type_="some example string")]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TableSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTableErrorBody
```

**Async**

```python
result = await async_client.tables.with_raw_response.create_table(
    "some example string",
    CreateTableRequest(
        name="some example string", fields=[CreateFieldRequest(name="some example string", type_="some example string")]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TableSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>body</code> | <code>[CreateTableRequest](airtable/models/create_table_request.py) \| [CreateTableRequestDict](airtable/models/create_table_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[TableSchema](airtable/models/table_schema.py), [CreateTableErrorBody](airtable/errors/create_table_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TableSchema](airtable/models/table_schema.py)</code> -- The newly created table with its schema.

**On `Failure`**: `error` is <code>[CreateTableErrorBody](airtable/errors/create_table_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_table(base_id: str, table_id: str, body: MetaBasesTablesRequest | MetaBasesTablesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TableSchema, UpdateTableErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name and/or description of an existing table. Only the provided fields will be modified.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tables.with_raw_response.update_table(
    "some example string", "some example string", MetaBasesTablesRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TableSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTableErrorBody
```

**Async**

```python
result = await async_client.tables.with_raw_response.update_table(
    "some example string", "some example string", MetaBasesTablesRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TableSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>table_id</code> | <code>str</code> | The unique identifier of the table (starts with 'tbl'). |
| <code>body</code> | <code>[MetaBasesTablesRequest](airtable/models/meta_bases_tables_request.py) \| [MetaBasesTablesRequestDict](airtable/models/meta_bases_tables_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[TableSchema](airtable/models/table_schema.py), [UpdateTableErrorBody](airtable/errors/update_table_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TableSchema](airtable/models/table_schema.py)</code> -- The updated table schema.

**On `Failure`**: `error` is <code>[UpdateTableErrorBody](airtable/errors/update_table_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](airtable/apis/users.py)

<details>
<summary><code>def create_scim_user(body: ScimUserCreateRequest | ScimUserCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimUser, CreateScimUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a new user in Airtable through the SCIM protocol. The user will be added to the enterprise account. SSO must be configured as Airtable does not allow setting passwords through SCIM.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.create_scim_user(
    ScimUserCreateRequest(schemas=["some example string"], user_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScimUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.create_scim_user(
    ScimUserCreateRequest(schemas=["some example string"], user_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScimUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScimUserCreateRequest](airtable/models/scim_user_create_request.py) \| [ScimUserCreateRequestDict](airtable/models/scim_user_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimUser](airtable/models/scim_user.py), [CreateScimUserErrorBody](airtable/errors/create_scim_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimUser](airtable/models/scim_user.py)</code> -- The newly created SCIM user resource.

**On `Failure`**: `error` is <code>[CreateScimUserErrorBody](airtable/errors/create_scim_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 409, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_scim_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteScimUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a SCIM user resource from the enterprise account. The user will lose access to all Airtable resources associated with the enterprise.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.delete_scim_user("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteScimUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.delete_scim_user("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteScimUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier of the SCIM user resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;None, [DeleteScimUserErrorBody](airtable/errors/delete_scim_user_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteScimUserErrorBody](airtable/errors/delete_scim_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_scim_user(user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimUser, GetScimUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single SCIM user resource by its unique identifier. Returns the complete user profile including name, email, and active status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.get_scim_user("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScimUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.get_scim_user("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScimUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier of the SCIM user resource. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimUser](airtable/models/scim_user.py), [GetScimUserErrorBody](airtable/errors/get_scim_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimUser](airtable/models/scim_user.py)</code> -- The requested SCIM user resource.

**On `Failure`**: `error` is <code>[GetScimUserErrorBody](airtable/errors/get_scim_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_scim_users(*, filter_: str | None = None, start_index: int | None = 1, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimUserListResponse, ListScimUsersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of SCIM user resources. Supports filtering by user attributes and pagination using startIndex and count parameters per the SCIM 2.0 specification.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.list_scim_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUserListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScimUsersErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.list_scim_users()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUserListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListScimUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter_</code> | <code>str \| None</code> | SCIM filter expression (e.g., userName eq "user@example.com"). Supports eq operator on userName.<br>**Default**: <code>None</code> |
| <code>start_index</code> | <code>int \| None</code> | The 1-based index of the first result to return.<br>**Default**: <code>1</code> |
| <code>count</code> | <code>int \| None</code> | The maximum number of results to return per page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimUserListResponse](airtable/models/scim_user_list_response.py), [ListScimUsersErrorBody](airtable/errors/list_scim_users_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimUserListResponse](airtable/models/scim_user_list_response.py)</code> -- A SCIM ListResponse containing user resources.

**On `Failure`**: `error` is <code>[ListScimUsersErrorBody](airtable/errors/list_scim_users_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_scim_user(user_id: str, body: ScimUserCreateRequest | ScimUserCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimUser, ReplaceScimUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces a SCIM user resource entirely. All attributes are overwritten with the values in the request body. This is a full replacement, not a partial update.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.replace_scim_user(
    "some example string", ScimUserCreateRequest(schemas=["some example string"], user_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceScimUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.replace_scim_user(
    "some example string", ScimUserCreateRequest(schemas=["some example string"], user_name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReplaceScimUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier of the SCIM user resource. |
| <code>body</code> | <code>[ScimUserCreateRequest](airtable/models/scim_user_create_request.py) \| [ScimUserCreateRequestDict](airtable/models/scim_user_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimUser](airtable/models/scim_user.py), [ReplaceScimUserErrorBody](airtable/errors/replace_scim_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimUser](airtable/models/scim_user.py)</code> -- The replaced SCIM user resource.

**On `Failure`**: `error` is <code>[ReplaceScimUserErrorBody](airtable/errors/replace_scim_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_scim_user(user_id: str, body: ScimPatchRequest | ScimPatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScimUser, UpdateScimUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM user resource using SCIM PATCH operations. Supports add, replace, and remove operations on user attributes. Commonly used to activate or deactivate users.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.update_scim_user(
    "some example string", ScimPatchRequest(schemas=["some example string"], operations=[Operation(op=Op.ADD)])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScimUserErrorBody
```

**Async**

```python
result = await async_client.users.with_raw_response.update_scim_user(
    "some example string", ScimPatchRequest(schemas=["some example string"], operations=[Operation(op=Op.ADD)])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScimUser
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScimUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The unique identifier of the SCIM user resource. |
| <code>body</code> | <code>[ScimPatchRequest](airtable/models/scim_patch_request.py) \| [ScimPatchRequestDict](airtable/models/scim_patch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[ScimUser](airtable/models/scim_user.py), [UpdateScimUserErrorBody](airtable/errors/update_scim_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScimUser](airtable/models/scim_user.py)</code> -- The updated SCIM user resource.

**On `Failure`**: `error` is <code>[UpdateScimUserErrorBody](airtable/errors/update_scim_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 429 | <code>[ScimError](airtable/models/scim_error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](airtable/apis/webhooks_api.py)

<details>
<summary><code>def create_webhook(base_id: str, body: WebhookCreateRequest | WebhookCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookCreateResponse, CreateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook subscription for the specified base. Webhooks expire after 7 days and must be refreshed. The response includes a MAC secret used to verify webhook notification payloads. Requires OAuth authentication with the webhook:manage scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.create_webhook(
    "some example string", WebhookCreateRequest(notification_url="https://example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookCreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.create_webhook(
    "some example string", WebhookCreateRequest(notification_url="https://example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookCreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>body</code> | <code>[WebhookCreateRequest](airtable/models/webhook_create_request.py) \| [WebhookCreateRequestDict](airtable/models/webhook_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[WebhookCreateResponse](airtable/models/webhook_create_response.py), [CreateWebhookErrorBody](airtable/errors/create_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookCreateResponse](airtable/models/webhook_create_response.py)</code> -- The created webhook with MAC secret.

**On `Failure`**: `error` is <code>[CreateWebhookErrorBody](airtable/errors/create_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 422, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(base_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DeleteWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing webhook subscription. The webhook will no longer send notifications after deletion.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.delete_webhook("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.delete_webhook("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>webhook_id</code> | <code>str</code> | The unique identifier of the webhook. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;Any, [DeleteWebhookErrorBody](airtable/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Confirmation that the webhook was deleted.

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](airtable/errors/delete_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhook_payloads(base_id: str, webhook_id: str, *, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookPayloadList, ListWebhookPayloadsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payloads that have been generated for the specified webhook. Payloads are returned in chronological order and can be paginated using a cursor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.list_webhook_payloads("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookPayloadList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhookPayloadsErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_webhook_payloads(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookPayloadList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhookPayloadsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>webhook_id</code> | <code>str</code> | The unique identifier of the webhook. |
| <code>cursor</code> | <code>str \| None</code> | A cursor for pagination. Pass the cursor from the previous response to get the next page.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[WebhookPayloadList](airtable/models/webhook_payload_list.py), [ListWebhookPayloadsErrorBody](airtable/errors/list_webhook_payloads_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookPayloadList](airtable/models/webhook_payload_list.py)</code> -- A list of webhook payloads.

**On `Failure`**: `error` is <code>[ListWebhookPayloadsErrorBody](airtable/errors/list_webhook_payloads_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhooks(base_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BasesWebhooksResponse, ListWebhooksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all webhooks registered for the specified base. Includes webhook configuration, status, and expiration information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.list_webhooks("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BasesWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.list_webhooks("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BasesWebhooksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[BasesWebhooksResponse](airtable/models/bases_webhooks_response.py), [ListWebhooksErrorBody](airtable/errors/list_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BasesWebhooksResponse](airtable/models/bases_webhooks_response.py)</code> -- A list of webhooks.

**On `Failure`**: `error` is <code>[ListWebhooksErrorBody](airtable/errors/list_webhooks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refresh_webhook(base_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BasesWebhooksRefreshResponse, RefreshWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extends the expiration time of an existing webhook. Webhooks expire after 7 days of inactivity and must be periodically refreshed to remain active.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.refresh_webhook("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BasesWebhooksRefreshResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.refresh_webhook("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BasesWebhooksRefreshResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RefreshWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>base_id</code> | <code>str</code> | The unique identifier of the base (starts with 'app'). |
| <code>webhook_id</code> | <code>str</code> | The unique identifier of the webhook. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](airtable/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](airtable/core/results.py)&#91;[BasesWebhooksRefreshResponse](airtable/models/bases_webhooks_refresh_response.py), [RefreshWebhookErrorBody](airtable/errors/refresh_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BasesWebhooksRefreshResponse](airtable/models/bases_webhooks_refresh_response.py)</code> -- The refreshed webhook with new expiration time.

**On `Failure`**: `error` is <code>[RefreshWebhookErrorBody](airtable/errors/refresh_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404, 429 | <code>[Error](airtable/models/error.py)</code> |
| anything unmapped | <code>[RawError](airtable/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

