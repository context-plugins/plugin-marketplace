# Reference

> Source: [AirtableClient](src/client.ts)

## Bases

> Source: [Bases](src/resources/bases.ts)

<details>
<summary><code>createBase(request: Bases.CreateBaseRequestParams, options?: RequestOptions): ApiPromise&lt;BaseSchema, Bases.CreateBaseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new base in the specified workspace. The request must include the workspace ID, base name, and at least one table definition with fields. Returns the newly created base with its schema.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bases.createBase({
    body: {
      name: "some example string",
      workspaceId: "some example string",
      tables: [
        {
          name: "some example string",
          fields: [{ name: "some example string", type: "some example string" }],
        },
      ],
    },
  });
  // TODO: Handle 'response' of type BaseSchema
} catch (err) {
  // TODO: Handle 'err' of type Bases.CreateBaseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bases
  .createBase({
    body: {
      name: "some example string",
      workspaceId: "some example string",
      tables: [
        {
          name: "some example string",
          fields: [{ name: "some example string", type: "some example string" }],
        },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BaseSchema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateBaseRequest](src/models/create-base-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bases.createBase(request)`

- **OnSuccess**: <code>[BaseSchema](src/models/base-schema.ts)</code>
- **OnError**: throws <code>[Bases.CreateBaseError](src/resources/bases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bases.createBase(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BaseSchema, Bases.CreateBaseError&gt;</code>, with `result.value` of type <code>[BaseSchema](src/models/base-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBaseSchema(request: Bases.GetBaseSchemaRequest, options?: RequestOptions): ApiPromise&lt;MetaBasesTablesResponse, Bases.GetBaseSchemaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the schema of the specified base, including all tables, their fields (with type and configuration), and views. This endpoint provides a complete structural overview of the base.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bases.getBaseSchema({ baseId: "some example string" });
  // TODO: Handle 'response' of type MetaBasesTablesResponse
} catch (err) {
  // TODO: Handle 'err' of type Bases.GetBaseSchemaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bases.getBaseSchema({ baseId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetaBasesTablesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>include?</code> | <code>[Include](src/models/include.ts)[]</code> | Additional information to include in the response. Pass visibleFieldIds to include visible field IDs for each view. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bases.getBaseSchema(request)`

- **OnSuccess**: <code>[MetaBasesTablesResponse](src/models/meta-bases-tables-response.ts)</code>
- **OnError**: throws <code>[Bases.GetBaseSchemaError](src/resources/bases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bases.getBaseSchema(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetaBasesTablesResponse, Bases.GetBaseSchemaError&gt;</code>, with `result.value` of type <code>[MetaBasesTablesResponse](src/models/meta-bases-tables-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBases(request?: Bases.ListBasesRequest, options?: RequestOptions): ApiPromise&lt;BaseList, Bases.ListBasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of all bases that the authenticated user has access to. Each base includes its ID, name, and permission level. Use the offset parameter from the response to paginate through all available bases.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bases.listBases();
  // TODO: Handle 'response' of type BaseList
} catch (err) {
  // TODO: Handle 'err' of type Bases.ListBasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bases.listBases().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BaseList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offset?</code> | <code>string</code> | Pagination cursor from a previous response to fetch the next page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bases.listBases(request)`

- **OnSuccess**: <code>[BaseList](src/models/base-list.ts)</code>
- **OnError**: throws <code>[Bases.ListBasesError](src/resources/bases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bases.listBases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BaseList, Bases.ListBasesError&gt;</code>, with `result.value` of type <code>[BaseList](src/models/base-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>whoami(options?: RequestOptions): ApiPromise&lt;MetaWhoamiResponse, Bases.WhoamiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the ID and scopes of the currently authenticated user or service account. Useful for verifying authentication and checking available permissions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bases.whoami();
  // TODO: Handle 'response' of type MetaWhoamiResponse
} catch (err) {
  // TODO: Handle 'err' of type Bases.WhoamiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bases.whoami().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetaWhoamiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bases.whoami()`

- **OnSuccess**: <code>[MetaWhoamiResponse](src/models/meta-whoami-response.ts)</code>
- **OnError**: throws <code>[Bases.WhoamiError](src/resources/bases.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bases.whoami().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetaWhoamiResponse, Bases.WhoamiError&gt;</code>, with `result.value` of type <code>[MetaWhoamiResponse](src/models/meta-whoami-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Comments

> Source: [Comments](src/resources/comments.ts)

<details>
<summary><code>createComment(request: Comments.CreateCommentRequest, options?: RequestOptions): ApiPromise&lt;Comment, Comments.CreateCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new comment on the specified record. Comments can include user mentions using the @[usrXXXXXXXX] syntax. Requires OAuth authentication with the comment:write scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.createComment({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type Comment
} catch (err) {
  // TODO: Handle 'err' of type Comments.CreateCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .createComment({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    body: { text: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Comment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>recordId</code> | <code>string</code> | The unique identifier of the record (starts with 'rec'). |
| <code>body</code> | <code>[RecordIdCommentsRequest](src/models/record-id-comments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.createComment(request)`

- **OnSuccess**: <code>[Comment](src/models/comment.ts)</code>
- **OnError**: throws <code>[Comments.CreateCommentError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.createComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Comment, Comments.CreateCommentError&gt;</code>, with `result.value` of type <code>[Comment](src/models/comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteComment(request: Comments.DeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;RecordIdCommentsCommentIdResponse, Comments.DeleteCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a comment from a record. Only the author of the comment can delete it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.deleteComment({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    commentId: "some example string",
  });
  // TODO: Handle 'response' of type RecordIdCommentsCommentIdResponse
} catch (err) {
  // TODO: Handle 'err' of type Comments.DeleteCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .deleteComment({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    commentId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordIdCommentsCommentIdResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>recordId</code> | <code>string</code> | The unique identifier of the record (starts with 'rec'). |
| <code>commentId</code> | <code>string</code> | The unique identifier of the comment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.deleteComment(request)`

- **OnSuccess**: <code>[RecordIdCommentsCommentIdResponse](src/models/record-id-comments-comment-id-response.ts)</code>
- **OnError**: throws <code>[Comments.DeleteCommentError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.deleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordIdCommentsCommentIdResponse, Comments.DeleteCommentError&gt;</code>, with `result.value` of type <code>[RecordIdCommentsCommentIdResponse](src/models/record-id-comments-comment-id-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listComments(request: Comments.ListCommentsRequest, options?: RequestOptions): ApiPromise&lt;CommentList, Comments.ListCommentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of comments on the specified record. Comments are returned in reverse chronological order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.listComments({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
  });
  // TODO: Handle 'response' of type CommentList
} catch (err) {
  // TODO: Handle 'err' of type Comments.ListCommentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .listComments({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommentList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>recordId</code> | <code>string</code> | The unique identifier of the record (starts with 'rec'). |
| <code>offset?</code> | <code>string</code> | Pagination cursor from a previous response to fetch the next page. |
| <code>pageSize?</code> | <code>number</code> | The number of comments to return per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.listComments(request)`

- **OnSuccess**: <code>[CommentList](src/models/comment-list.ts)</code>
- **OnError**: throws <code>[Comments.ListCommentsError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.listComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommentList, Comments.ListCommentsError&gt;</code>, with `result.value` of type <code>[CommentList](src/models/comment-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateComment(request: Comments.UpdateCommentRequest, options?: RequestOptions): ApiPromise&lt;Comment, Comments.UpdateCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the text of an existing comment on a record. Only the author of the comment can update it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.updateComment({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    commentId: "some example string",
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type Comment
} catch (err) {
  // TODO: Handle 'err' of type Comments.UpdateCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .updateComment({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    commentId: "some example string",
    body: { text: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Comment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>recordId</code> | <code>string</code> | The unique identifier of the record (starts with 'rec'). |
| <code>commentId</code> | <code>string</code> | The unique identifier of the comment. |
| <code>body</code> | <code>[RecordIdCommentsCommentIdRequest](src/models/record-id-comments-comment-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.updateComment(request)`

- **OnSuccess**: <code>[Comment](src/models/comment.ts)</code>
- **OnError**: throws <code>[Comments.UpdateCommentError](src/resources/comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.comments.updateComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Comment, Comments.UpdateCommentError&gt;</code>, with `result.value` of type <code>[Comment](src/models/comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Fields

> Source: [Fields](src/resources/fields.ts)

<details>
<summary><code>createField(request: Fields.CreateFieldRequestParams, options?: RequestOptions): ApiPromise&lt;FieldSchema, Fields.CreateFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new field in the specified table. The field must include a name and type. Some field types (like singleSelect, multipleSelects) accept additional options for configuration. Note that formula and some computed field types cannot be created via the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fields.createField({
    baseId: "some example string",
    tableId: "some example string",
    body: { name: "some example string", type: "some example string" },
  });
  // TODO: Handle 'response' of type FieldSchema
} catch (err) {
  // TODO: Handle 'err' of type Fields.CreateFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fields
  .createField({
    baseId: "some example string",
    tableId: "some example string",
    body: { name: "some example string", type: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FieldSchema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableId</code> | <code>string</code> | The unique identifier of the table (starts with 'tbl'). |
| <code>body</code> | <code>[CreateFieldRequest](src/models/create-field-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fields.createField(request)`

- **OnSuccess**: <code>[FieldSchema](src/models/field-schema.ts)</code>
- **OnError**: throws <code>[Fields.CreateFieldError](src/resources/fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fields.createField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FieldSchema, Fields.CreateFieldError&gt;</code>, with `result.value` of type <code>[FieldSchema](src/models/field-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateField(request: Fields.UpdateFieldRequest, options?: RequestOptions): ApiPromise&lt;FieldSchema, Fields.UpdateFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name, description, or configuration options of an existing field. Only the provided properties will be modified. Not all field properties can be updated after creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fields.updateField({
    baseId: "some example string",
    tableId: "some example string",
    fieldId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FieldSchema
} catch (err) {
  // TODO: Handle 'err' of type Fields.UpdateFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fields
  .updateField({
    baseId: "some example string",
    tableId: "some example string",
    fieldId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FieldSchema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableId</code> | <code>string</code> | The unique identifier of the table (starts with 'tbl'). |
| <code>fieldId</code> | <code>string</code> | The unique identifier of the field (starts with 'fld'). |
| <code>body</code> | <code>[MetaBasesTablesFieldsFieldIdRequest](src/models/meta-bases-tables-fields-field-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fields.updateField(request)`

- **OnSuccess**: <code>[FieldSchema](src/models/field-schema.ts)</code>
- **OnError**: throws <code>[Fields.UpdateFieldError](src/resources/fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fields.updateField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FieldSchema, Fields.UpdateFieldError&gt;</code>, with `result.value` of type <code>[FieldSchema](src/models/field-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/resources/groups.ts)

<details>
<summary><code>createScimGroup(request: Groups.CreateScimGroupRequest, options?: RequestOptions): ApiPromise&lt;ScimGroup, Groups.CreateScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new SCIM group in the enterprise account. Groups can contain user members and are used for access management.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.createScimGroup({
    body: { schemas: ["some example string"], displayName: "some example string" },
  });
  // TODO: Handle 'response' of type ScimGroup
} catch (err) {
  // TODO: Handle 'err' of type Groups.CreateScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .createScimGroup({ body: { schemas: ["some example string"], displayName: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScimGroupCreateRequest](src/models/scim-group-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.createScimGroup(request)`

- **OnSuccess**: <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: throws <code>[Groups.CreateScimGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.createScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimGroup, Groups.CreateScimGroupError&gt;</code>, with `result.value` of type <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteScimGroup(request: Groups.DeleteScimGroupRequest, options?: RequestOptions): ApiPromise&lt;undefined, Groups.DeleteScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a SCIM group from the enterprise account. Members are not deleted but are removed from the group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.groups.deleteScimGroup({ groupId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Groups.DeleteScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.deleteScimGroup({ groupId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>string</code> | The unique identifier of the SCIM group resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.deleteScimGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Groups.DeleteScimGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.deleteScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Groups.DeleteScimGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScimGroup(request: Groups.GetScimGroupRequest, options?: RequestOptions): ApiPromise&lt;ScimGroup, Groups.GetScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single SCIM group resource by its unique identifier, including its member list.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.getScimGroup({ groupId: "some example string" });
  // TODO: Handle 'response' of type ScimGroup
} catch (err) {
  // TODO: Handle 'err' of type Groups.GetScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.getScimGroup({ groupId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>string</code> | The unique identifier of the SCIM group resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.getScimGroup(request)`

- **OnSuccess**: <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: throws <code>[Groups.GetScimGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.getScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimGroup, Groups.GetScimGroupError&gt;</code>, with `result.value` of type <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listScimGroups(request?: Groups.ListScimGroupsRequest, options?: RequestOptions): ApiPromise&lt;ScimGroupListResponse, Groups.ListScimGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of SCIM group resources. Supports filtering by group display name and pagination using startIndex and count.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.listScimGroups();
  // TODO: Handle 'response' of type ScimGroupListResponse
} catch (err) {
  // TODO: Handle 'err' of type Groups.ListScimGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.listScimGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimGroupListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | SCIM filter expression (e.g., displayName eq "Engineering"). |
| <code>startIndex?</code> | <code>number</code> | The 1-based index of the first result to return.<br>**Default**: 1 |
| <code>count?</code> | <code>number</code> | The maximum number of results to return per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.listScimGroups(request)`

- **OnSuccess**: <code>[ScimGroupListResponse](src/models/scim-group-list-response.ts)</code>
- **OnError**: throws <code>[Groups.ListScimGroupsError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.listScimGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimGroupListResponse, Groups.ListScimGroupsError&gt;</code>, with `result.value` of type <code>[ScimGroupListResponse](src/models/scim-group-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceScimGroup(request: Groups.ReplaceScimGroupRequest, options?: RequestOptions): ApiPromise&lt;ScimGroup, Groups.ReplaceScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces a SCIM group resource entirely with the provided data. The complete member list must be included in the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.replaceScimGroup({
    groupId: "some example string",
    body: { schemas: ["some example string"], displayName: "some example string" },
  });
  // TODO: Handle 'response' of type ScimGroup
} catch (err) {
  // TODO: Handle 'err' of type Groups.ReplaceScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .replaceScimGroup({
    groupId: "some example string",
    body: { schemas: ["some example string"], displayName: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>string</code> | The unique identifier of the SCIM group resource. |
| <code>body</code> | <code>[ScimGroupCreateRequest](src/models/scim-group-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.replaceScimGroup(request)`

- **OnSuccess**: <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: throws <code>[Groups.ReplaceScimGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.replaceScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimGroup, Groups.ReplaceScimGroupError&gt;</code>, with `result.value` of type <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateScimGroup(request: Groups.UpdateScimGroupRequest, options?: RequestOptions): ApiPromise&lt;ScimGroup, Groups.UpdateScimGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM group resource using SCIM PATCH operations. Commonly used to add or remove members from the group without replacing the entire resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.updateScimGroup({
    groupId: "some example string",
    body: { schemas: ["some example string"], operations: [{ op: Op.Add }] },
  });
  // TODO: Handle 'response' of type ScimGroup
} catch (err) {
  // TODO: Handle 'err' of type Groups.UpdateScimGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .updateScimGroup({
    groupId: "some example string",
    body: { schemas: ["some example string"], operations: [{ op: Op.Add }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimGroup
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>string</code> | The unique identifier of the SCIM group resource. |
| <code>body</code> | <code>[ScimPatchRequest](src/models/scim-patch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.updateScimGroup(request)`

- **OnSuccess**: <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: throws <code>[Groups.UpdateScimGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.updateScimGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimGroup, Groups.UpdateScimGroupError&gt;</code>, with `result.value` of type <code>[ScimGroup](src/models/scim-group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Records

> Source: [Records](src/resources/records.ts)

<details>
<summary><code>createRecords(request: Records.CreateRecordsRequest, options?: RequestOptions): ApiPromise&lt;Response, Records.CreateRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates up to 10 records in the specified table. Each record must include a fields object mapping field names (or IDs) to values. If typecast is enabled, the API will attempt to convert string values to the appropriate cell value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.createRecords({
    baseId: "some example string",
    tableIdOrName: "some example string",
    body: { records: [{ fields: {} }] },
  });
  // TODO: Handle 'response' of type Response
} catch (err) {
  // TODO: Handle 'err' of type Records.CreateRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .createRecords({
    baseId: "some example string",
    tableIdOrName: "some example string",
    body: { records: [{ fields: {} }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Response
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>body</code> | <code>[Request](src/models/request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.createRecords(request)`

- **OnSuccess**: <code>[Response](src/models/response.ts)</code>
- **OnError**: throws <code>[Records.CreateRecordsError](src/resources/records.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.records.createRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Response, Records.CreateRecordsError&gt;</code>, with `result.value` of type <code>[Response](src/models/response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteRecord(request: Records.DeleteRecordRequest, options?: RequestOptions): ApiPromise&lt;RecordDeleted, Records.DeleteRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single record from the specified table. The record is permanently removed and cannot be recovered through the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.deleteRecord({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
  });
  // TODO: Handle 'response' of type RecordDeleted
} catch (err) {
  // TODO: Handle 'err' of type Records.DeleteRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .deleteRecord({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordDeleted
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>recordId</code> | <code>string</code> | The unique identifier of the record (starts with 'rec'). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.deleteRecord(request)`

- **OnSuccess**: <code>[RecordDeleted](src/models/record-deleted.ts)</code>
- **OnError**: throws <code>[Records.DeleteRecordError](src/resources/records.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.records.deleteRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordDeleted, Records.DeleteRecordError&gt;</code>, with `result.value` of type <code>[RecordDeleted](src/models/record-deleted.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecord(request: Records.GetRecordRequest, options?: RequestOptions): ApiPromise&lt;RecordModel, Records.GetRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single record by its ID from the specified table. Returns the record's fields, creation time, and ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.getRecord({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
  });
  // TODO: Handle 'response' of type RecordModel
} catch (err) {
  // TODO: Handle 'err' of type Records.GetRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .getRecord({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordModel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>recordId</code> | <code>string</code> | The unique identifier of the record (starts with 'rec'). |
| <code>returnFieldsByFieldId?</code> | <code>boolean</code> | If true, the response will use field IDs as keys instead of field names. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.getRecord(request)`

- **OnSuccess**: <code>[RecordModel](src/models/record-model.ts)</code>
- **OnError**: throws <code>[Records.GetRecordError](src/resources/records.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.records.getRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordModel, Records.GetRecordError&gt;</code>, with `result.value` of type <code>[RecordModel](src/models/record-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRecords(request: Records.ListRecordsRequest, options?: RequestOptions): ApiPromise&lt;RecordList, Records.ListRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of records in the specified table. Records can be filtered using an Airtable formula, sorted by specific fields, and limited to specific fields. The maximum page size is 100 records. Use the offset parameter from the response to fetch the next page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.listRecords({
    baseId: "some example string",
    tableIdOrName: "some example string",
  });
  // TODO: Handle 'response' of type RecordList
} catch (err) {
  // TODO: Handle 'err' of type Records.ListRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .listRecords({ baseId: "some example string", tableIdOrName: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>fields?</code> | <code>string[]</code> | Only return data for the specified field names or IDs. |
| <code>filterByFormula?</code> | <code>string</code> | An Airtable formula used to filter records. The formula is evaluated for each record, and if the result is not 0, false, "", NaN, [], or #Error!, the record will be included in the response. |
| <code>maxRecords?</code> | <code>number</code> | The maximum total number of records that will be returned. |
| <code>pageSize?</code> | <code>number</code> | The number of records returned in each request. Must be less than or equal to 100. Default is 100.<br>**Default**: 100 |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)[]</code> | A list of sort objects that specifies how the records will be ordered. Each sort object must have a field key and an optional direction key (asc or desc). |
| <code>view?</code> | <code>string</code> | The name or ID of a view in the table. If set, only the records in that view will be returned. |
| <code>cellFormat?</code> | <code>[CellFormat](src/models/cell-format.ts)</code> | The format that should be used for cell values. Supported values are json (default) and string. |
| <code>timeZone?</code> | <code>string</code> | The time zone to use for formatting dates when using string cell format. |
| <code>userLocale?</code> | <code>string</code> | The user locale to use for formatting dates when using string cell format. |
| <code>returnFieldsByFieldId?</code> | <code>boolean</code> | If true, the response will use field IDs as object keys instead of field names. |
| <code>offset?</code> | <code>string</code> | A pagination cursor returned from a previous request. Pass this value to fetch the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.listRecords(request)`

- **OnSuccess**: <code>[RecordList](src/models/record-list.ts)</code>
- **OnError**: throws <code>[Records.ListRecordsError](src/resources/records.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.records.listRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordList, Records.ListRecordsError&gt;</code>, with `result.value` of type <code>[RecordList](src/models/record-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceRecord(request: Records.ReplaceRecordRequest, options?: RequestOptions): ApiPromise&lt;RecordModel, Records.ReplaceRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces all fields of an existing record. Fields that are not included in the request body will be cleared. This is a destructive update that overwrites the entire record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.replaceRecord({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    body: { fields: {} },
  });
  // TODO: Handle 'response' of type RecordModel
} catch (err) {
  // TODO: Handle 'err' of type Records.ReplaceRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .replaceRecord({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    body: { fields: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordModel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>recordId</code> | <code>string</code> | The unique identifier of the record (starts with 'rec'). |
| <code>body</code> | <code>[RecordIdRequest1](src/models/record-id-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.replaceRecord(request)`

- **OnSuccess**: <code>[RecordModel](src/models/record-model.ts)</code>
- **OnError**: throws <code>[Records.ReplaceRecordError](src/resources/records.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.records.replaceRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordModel, Records.ReplaceRecordError&gt;</code>, with `result.value` of type <code>[RecordModel](src/models/record-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateRecord(request: Records.UpdateRecordRequest, options?: RequestOptions): ApiPromise&lt;RecordModel, Records.UpdateRecordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates specific fields of an existing record. Only the fields included in the request body will be updated; all other fields will remain unchanged. Up to 10 records can be updated in a single request when using the batch endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.records.updateRecord({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    body: { fields: {} },
  });
  // TODO: Handle 'response' of type RecordModel
} catch (err) {
  // TODO: Handle 'err' of type Records.UpdateRecordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.records
  .updateRecord({
    baseId: "some example string",
    tableIdOrName: "some example string",
    recordId: "some example string",
    body: { fields: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordModel
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableIdOrName</code> | <code>string</code> | The name or unique identifier (starts with 'tbl') of the table. |
| <code>recordId</code> | <code>string</code> | The unique identifier of the record (starts with 'rec'). |
| <code>body</code> | <code>[RecordIdRequest](src/models/record-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.records.updateRecord(request)`

- **OnSuccess**: <code>[RecordModel](src/models/record-model.ts)</code>
- **OnError**: throws <code>[Records.UpdateRecordError](src/resources/records.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.records.updateRecord(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordModel, Records.UpdateRecordError&gt;</code>, with `result.value` of type <code>[RecordModel](src/models/record-model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tables

> Source: [Tables](src/resources/tables.ts)

<details>
<summary><code>createTable(request: Tables.CreateTableRequestParams, options?: RequestOptions): ApiPromise&lt;TableSchema, Tables.CreateTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new table within the specified base. The table must include a name and at least one field definition. Optionally include a description for the table.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tables.createTable({
    baseId: "some example string",
    body: {
      name: "some example string",
      fields: [{ name: "some example string", type: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type TableSchema
} catch (err) {
  // TODO: Handle 'err' of type Tables.CreateTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tables
  .createTable({
    baseId: "some example string",
    body: {
      name: "some example string",
      fields: [{ name: "some example string", type: "some example string" }],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableSchema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>body</code> | <code>[CreateTableRequest](src/models/create-table-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tables.createTable(request)`

- **OnSuccess**: <code>[TableSchema](src/models/table-schema.ts)</code>
- **OnError**: throws <code>[Tables.CreateTableError](src/resources/tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tables.createTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableSchema, Tables.CreateTableError&gt;</code>, with `result.value` of type <code>[TableSchema](src/models/table-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTable(request: Tables.UpdateTableRequest, options?: RequestOptions): ApiPromise&lt;TableSchema, Tables.UpdateTableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name and/or description of an existing table. Only the provided fields will be modified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tables.updateTable({
    baseId: "some example string",
    tableId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TableSchema
} catch (err) {
  // TODO: Handle 'err' of type Tables.UpdateTableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tables
  .updateTable({ baseId: "some example string", tableId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TableSchema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>tableId</code> | <code>string</code> | The unique identifier of the table (starts with 'tbl'). |
| <code>body</code> | <code>[MetaBasesTablesRequest](src/models/meta-bases-tables-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tables.updateTable(request)`

- **OnSuccess**: <code>[TableSchema](src/models/table-schema.ts)</code>
- **OnError**: throws <code>[Tables.UpdateTableError](src/resources/tables.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tables.updateTable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TableSchema, Tables.UpdateTableError&gt;</code>, with `result.value` of type <code>[TableSchema](src/models/table-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>createScimUser(request: Users.CreateScimUserRequest, options?: RequestOptions): ApiPromise&lt;ScimUser, Users.CreateScimUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provisions a new user in Airtable through the SCIM protocol. The user will be added to the enterprise account. SSO must be configured as Airtable does not allow setting passwords through SCIM.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.createScimUser({
    body: { schemas: ["some example string"], userName: "some example string" },
  });
  // TODO: Handle 'response' of type ScimUser
} catch (err) {
  // TODO: Handle 'err' of type Users.CreateScimUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .createScimUser({ body: { schemas: ["some example string"], userName: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimUser
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScimUserCreateRequest](src/models/scim-user-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.createScimUser(request)`

- **OnSuccess**: <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: throws <code>[Users.CreateScimUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.createScimUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimUser, Users.CreateScimUserError&gt;</code>, with `result.value` of type <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteScimUser(request: Users.DeleteScimUserRequest, options?: RequestOptions): ApiPromise&lt;undefined, Users.DeleteScimUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a SCIM user resource from the enterprise account. The user will lose access to all Airtable resources associated with the enterprise.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.deleteScimUser({ userId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Users.DeleteScimUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.deleteScimUser({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the SCIM user resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.deleteScimUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Users.DeleteScimUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.deleteScimUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Users.DeleteScimUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScimUser(request: Users.GetScimUserRequest, options?: RequestOptions): ApiPromise&lt;ScimUser, Users.GetScimUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single SCIM user resource by its unique identifier. Returns the complete user profile including name, email, and active status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getScimUser({ userId: "some example string" });
  // TODO: Handle 'response' of type ScimUser
} catch (err) {
  // TODO: Handle 'err' of type Users.GetScimUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getScimUser({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimUser
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the SCIM user resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getScimUser(request)`

- **OnSuccess**: <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: throws <code>[Users.GetScimUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.getScimUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimUser, Users.GetScimUserError&gt;</code>, with `result.value` of type <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listScimUsers(request?: Users.ListScimUsersRequest, options?: RequestOptions): ApiPromise&lt;ScimUserListResponse, Users.ListScimUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of SCIM user resources. Supports filtering by user attributes and pagination using startIndex and count parameters per the SCIM 2.0 specification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listScimUsers();
  // TODO: Handle 'response' of type ScimUserListResponse
} catch (err) {
  // TODO: Handle 'err' of type Users.ListScimUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.listScimUsers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimUserListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filter?</code> | <code>string</code> | SCIM filter expression (e.g., userName eq "user@example.com"). Supports eq operator on userName. |
| <code>startIndex?</code> | <code>number</code> | The 1-based index of the first result to return.<br>**Default**: 1 |
| <code>count?</code> | <code>number</code> | The maximum number of results to return per page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.listScimUsers(request)`

- **OnSuccess**: <code>[ScimUserListResponse](src/models/scim-user-list-response.ts)</code>
- **OnError**: throws <code>[Users.ListScimUsersError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.listScimUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimUserListResponse, Users.ListScimUsersError&gt;</code>, with `result.value` of type <code>[ScimUserListResponse](src/models/scim-user-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>replaceScimUser(request: Users.ReplaceScimUserRequest, options?: RequestOptions): ApiPromise&lt;ScimUser, Users.ReplaceScimUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces a SCIM user resource entirely. All attributes are overwritten with the values in the request body. This is a full replacement, not a partial update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.replaceScimUser({
    userId: "some example string",
    body: { schemas: ["some example string"], userName: "some example string" },
  });
  // TODO: Handle 'response' of type ScimUser
} catch (err) {
  // TODO: Handle 'err' of type Users.ReplaceScimUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .replaceScimUser({
    userId: "some example string",
    body: { schemas: ["some example string"], userName: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimUser
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the SCIM user resource. |
| <code>body</code> | <code>[ScimUserCreateRequest](src/models/scim-user-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.replaceScimUser(request)`

- **OnSuccess**: <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: throws <code>[Users.ReplaceScimUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.replaceScimUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimUser, Users.ReplaceScimUserError&gt;</code>, with `result.value` of type <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateScimUser(request: Users.UpdateScimUserRequest, options?: RequestOptions): ApiPromise&lt;ScimUser, Users.UpdateScimUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Partially updates a SCIM user resource using SCIM PATCH operations. Supports add, replace, and remove operations on user attributes. Commonly used to activate or deactivate users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateScimUser({
    userId: "some example string",
    body: { schemas: ["some example string"], operations: [{ op: Op.Add }] },
  });
  // TODO: Handle 'response' of type ScimUser
} catch (err) {
  // TODO: Handle 'err' of type Users.UpdateScimUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .updateScimUser({
    userId: "some example string",
    body: { schemas: ["some example string"], operations: [{ op: Op.Add }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScimUser
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The unique identifier of the SCIM user resource. |
| <code>body</code> | <code>[ScimPatchRequest](src/models/scim-patch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateScimUser(request)`

- **OnSuccess**: <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: throws <code>[Users.UpdateScimUserError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.updateScimUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScimUser, Users.UpdateScimUserError&gt;</code>, with `result.value` of type <code>[ScimUser](src/models/scim-user.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>createWebhook(request: Webhooks.CreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookCreateResponse, Webhooks.CreateWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook subscription for the specified base. Webhooks expire after 7 days and must be refreshed. The response includes a MAC secret used to verify webhook notification payloads. Requires OAuth authentication with the webhook:manage scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.createWebhook({
    baseId: "some example string",
    body: { notificationUrl: "https://example.com" },
  });
  // TODO: Handle 'response' of type WebhookCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.CreateWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .createWebhook({ baseId: "some example string", body: { notificationUrl: "https://example.com" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>body</code> | <code>[WebhookCreateRequest](src/models/webhook-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.createWebhook(request)`

- **OnSuccess**: <code>[WebhookCreateResponse](src/models/webhook-create-response.ts)</code>
- **OnError**: throws <code>[Webhooks.CreateWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.createWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookCreateResponse, Webhooks.CreateWebhookError&gt;</code>, with `result.value` of type <code>[WebhookCreateResponse](src/models/webhook-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhook(request: Webhooks.DeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Webhooks.DeleteWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing webhook subscription. The webhook will no longer send notifications after deletion.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.deleteWebhook({
    baseId: "some example string",
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.DeleteWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .deleteWebhook({ baseId: "some example string", webhookId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the webhook. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.deleteWebhook(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Webhooks.DeleteWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.deleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Webhooks.DeleteWebhookError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhookPayloads(request: Webhooks.ListWebhookPayloadsRequest, options?: RequestOptions): ApiPromise&lt;WebhookPayloadList, Webhooks.ListWebhookPayloadsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of payloads that have been generated for the specified webhook. Payloads are returned in chronological order and can be paginated using a cursor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhookPayloads({
    baseId: "some example string",
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type WebhookPayloadList
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListWebhookPayloadsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .listWebhookPayloads({ baseId: "some example string", webhookId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookPayloadList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the webhook. |
| <code>cursor?</code> | <code>string</code> | A cursor for pagination. Pass the cursor from the previous response to get the next page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhookPayloads(request)`

- **OnSuccess**: <code>[WebhookPayloadList](src/models/webhook-payload-list.ts)</code>
- **OnError**: throws <code>[Webhooks.ListWebhookPayloadsError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listWebhookPayloads(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookPayloadList, Webhooks.ListWebhookPayloadsError&gt;</code>, with `result.value` of type <code>[WebhookPayloadList](src/models/webhook-payload-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhooks(request: Webhooks.ListWebhooksRequest, options?: RequestOptions): ApiPromise&lt;BasesWebhooksResponse, Webhooks.ListWebhooksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all webhooks registered for the specified base. Includes webhook configuration, status, and expiration information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.listWebhooks({ baseId: "some example string" });
  // TODO: Handle 'response' of type BasesWebhooksResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.ListWebhooksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.listWebhooks({ baseId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BasesWebhooksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.listWebhooks(request)`

- **OnSuccess**: <code>[BasesWebhooksResponse](src/models/bases-webhooks-response.ts)</code>
- **OnError**: throws <code>[Webhooks.ListWebhooksError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.listWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BasesWebhooksResponse, Webhooks.ListWebhooksError&gt;</code>, with `result.value` of type <code>[BasesWebhooksResponse](src/models/bases-webhooks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshWebhook(request: Webhooks.RefreshWebhookRequest, options?: RequestOptions): ApiPromise&lt;BasesWebhooksRefreshResponse, Webhooks.RefreshWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extends the expiration time of an existing webhook. Webhooks expire after 7 days of inactivity and must be periodically refreshed to remain active.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.refreshWebhook({
    baseId: "some example string",
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type BasesWebhooksRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.RefreshWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .refreshWebhook({ baseId: "some example string", webhookId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BasesWebhooksRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>baseId</code> | <code>string</code> | The unique identifier of the base (starts with 'app'). |
| <code>webhookId</code> | <code>string</code> | The unique identifier of the webhook. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.refreshWebhook(request)`

- **OnSuccess**: <code>[BasesWebhooksRefreshResponse](src/models/bases-webhooks-refresh-response.ts)</code>
- **OnError**: throws <code>[Webhooks.RefreshWebhookError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.refreshWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BasesWebhooksRefreshResponse, Webhooks.RefreshWebhookError&gt;</code>, with `result.value` of type <code>[BasesWebhooksRefreshResponse](src/models/bases-webhooks-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AirtableError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

