# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ShortcutClient](shortcut/client.py)

## Categories

> Source: [Categories](shortcut/apis/categories.py)

<details>
<summary><code>def create_category(body: CreateCategory | CreateCategoryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Category, CreateCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Category allows you to create a new Category in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.categories.with_raw_response.create_category(CreateCategory(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Category
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCategoryErrorBody
```

**Async**

```python
result = await async_client.categories.with_raw_response.create_category(CreateCategory(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Category
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCategory](shortcut/models/create_category.py) \| [CreateCategoryDict](shortcut/models/create_category.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Category](shortcut/models/category.py), [CreateCategoryErrorBody](shortcut/errors/create_category_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Category](shortcut/models/category.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateCategoryErrorBody](shortcut/errors/create_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_category(category_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Category can be used to delete any Category.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.categories.with_raw_response.delete_category(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCategoryErrorBody
```

**Async**

```python
result = await async_client.categories.with_raw_response.delete_category(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category_public_id</code> | <code>int</code> | The unique ID of the Category. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteCategoryErrorBody](shortcut/errors/delete_category_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteCategoryErrorBody](shortcut/errors/delete_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_category(category_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Category, GetCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Category returns information about the selected Category.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.categories.with_raw_response.get_category(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Category
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCategoryErrorBody
```

**Async**

```python
result = await async_client.categories.with_raw_response.get_category(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Category
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category_public_id</code> | <code>int</code> | The unique ID of the Category. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Category](shortcut/models/category.py), [GetCategoryErrorBody](shortcut/errors/get_category_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Category](shortcut/models/category.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetCategoryErrorBody](shortcut/errors/get_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_categories(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Category], ListCategoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Categories returns a list of all Categories and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.categories.with_raw_response.list_categories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Category]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCategoriesErrorBody
```

**Async**

```python
result = await async_client.categories.with_raw_response.list_categories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Category]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCategoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Category](shortcut/models/category.py)&#93;, [ListCategoriesErrorBody](shortcut/errors/list_categories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Category](shortcut/models/category.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListCategoriesErrorBody](shortcut/errors/list_categories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_category_milestones(category_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Milestone], ListCategoryMilestonesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Category Milestones returns a list of all Milestones with the Category.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.categories.with_raw_response.list_category_milestones(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Milestone]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCategoryMilestonesErrorBody
```

**Async**

```python
result = await async_client.categories.with_raw_response.list_category_milestones(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Milestone]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCategoryMilestonesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category_public_id</code> | <code>int</code> | The unique ID of the Category. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Milestone](shortcut/models/milestone.py)&#93;, [ListCategoryMilestonesErrorBody](shortcut/errors/list_category_milestones_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Milestone](shortcut/models/milestone.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListCategoryMilestonesErrorBody](shortcut/errors/list_category_milestones_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_category_objectives(category_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Milestone], ListCategoryObjectivesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Objectives with the Category.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.categories.with_raw_response.list_category_objectives(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Milestone]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCategoryObjectivesErrorBody
```

**Async**

```python
result = await async_client.categories.with_raw_response.list_category_objectives(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Milestone]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCategoryObjectivesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category_public_id</code> | <code>int</code> | The unique ID of the Category. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Milestone](shortcut/models/milestone.py)&#93;, [ListCategoryObjectivesErrorBody](shortcut/errors/list_category_objectives_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Milestone](shortcut/models/milestone.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListCategoryObjectivesErrorBody](shortcut/errors/list_category_objectives_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_category(category_public_id: int, body: UpdateCategory | UpdateCategoryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Category, UpdateCategoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.categories.with_raw_response.update_category(1, UpdateCategory())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Category
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCategoryErrorBody
```

**Async**

```python
result = await async_client.categories.with_raw_response.update_category(1, UpdateCategory())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Category
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCategoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category_public_id</code> | <code>int</code> | The unique ID of the Category you wish to update. |
| <code>body</code> | <code>[UpdateCategory](shortcut/models/update_category.py) \| [UpdateCategoryDict](shortcut/models/update_category.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Category](shortcut/models/category.py), [UpdateCategoryErrorBody](shortcut/errors/update_category_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Category](shortcut/models/category.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateCategoryErrorBody](shortcut/errors/update_category_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](shortcut/apis/custom_fields.py)

<details>
<summary><code>def delete_custom_field(custom_field_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteCustomFieldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_fields.with_raw_response.delete_custom_field(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomFieldErrorBody
```

**Async**

```python
result = await async_client.custom_fields.with_raw_response.delete_custom_field(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCustomFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_public_id</code> | <code>UUID</code> | The unique ID of the CustomField. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteCustomFieldErrorBody](shortcut/errors/delete_custom_field_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteCustomFieldErrorBody](shortcut/errors/delete_custom_field_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_custom_field(custom_field_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomField, GetCustomFieldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_fields.with_raw_response.get_custom_field(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomField
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomFieldErrorBody
```

**Async**

```python
result = await async_client.custom_fields.with_raw_response.get_custom_field(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomField
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCustomFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_public_id</code> | <code>UUID</code> | The unique ID of the CustomField. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[CustomField](shortcut/models/custom_field.py), [GetCustomFieldErrorBody](shortcut/errors/get_custom_field_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomField](shortcut/models/custom_field.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetCustomFieldErrorBody](shortcut/errors/get_custom_field_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_custom_fields(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CustomField], ListCustomFieldsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_fields.with_raw_response.list_custom_fields()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CustomField]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomFieldsErrorBody
```

**Async**

```python
result = await async_client.custom_fields.with_raw_response.list_custom_fields()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CustomField]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCustomFieldsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[CustomField](shortcut/models/custom_field.py)&#93;, [ListCustomFieldsErrorBody](shortcut/errors/list_custom_fields_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CustomField](shortcut/models/custom_field.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListCustomFieldsErrorBody](shortcut/errors/list_custom_fields_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_custom_field(custom_field_public_id: UUID, body: UpdateCustomField | UpdateCustomFieldDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CustomField, UpdateCustomFieldErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Custom Field can be used to update the definition of a Custom Field. The order of items in the 'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the 'values' collection. New enum values may be created inline by including an object in the 'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.custom_fields.with_raw_response.update_custom_field(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateCustomField()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomField
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomFieldErrorBody
```

**Async**

```python
result = await async_client.custom_fields.with_raw_response.update_custom_field(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateCustomField()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CustomField
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateCustomFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_public_id</code> | <code>UUID</code> | The unique ID of the CustomField. |
| <code>body</code> | <code>[UpdateCustomField](shortcut/models/update_custom_field.py) \| [UpdateCustomFieldDict](shortcut/models/update_custom_field.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[CustomField](shortcut/models/custom_field.py), [UpdateCustomFieldErrorBody](shortcut/errors/update_custom_field_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CustomField](shortcut/models/custom_field.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateCustomFieldErrorBody](shortcut/errors/update_custom_field_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 409 | <code>[DataConflictError](shortcut/models/data_conflict_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](shortcut/apis/documents.py)

<details>
<summary><code>def create_doc(body: CreateDoc | CreateDocDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocSlim, CreateDocErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Doc. Supports markdown or HTML input via content_format parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.create_doc(
    CreateDoc(title="some example string", content="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocSlim
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDocErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.create_doc(
    CreateDoc(title="some example string", content="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocSlim
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDocErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateDoc](shortcut/models/create_doc.py) \| [CreateDocDict](shortcut/models/create_doc.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[DocSlim](shortcut/models/doc_slim.py), [CreateDocErrorBody](shortcut/errors/create_doc_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocSlim](shortcut/models/doc_slim.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateDocErrorBody](shortcut/errors/create_doc_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[DisabledFeatureError](shortcut/models/disabled_feature_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_doc(doc_public_id: UUID, body: GetDoc | GetDocDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteDocErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a document is deleted, connected clients will be notified via SSE events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.delete_doc(UUID("00000000-0000-0000-0000-000000000000"), GetDoc())
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDocErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.delete_doc(
    UUID("00000000-0000-0000-0000-000000000000"), GetDoc()
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDocErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_public_id</code> | <code>UUID</code> | The Doc's public ID |
| <code>body</code> | <code>[GetDoc](shortcut/models/get_doc.py) \| [GetDocDict](shortcut/models/get_doc.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteDocErrorBody](shortcut/errors/delete_doc_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteDocErrorBody](shortcut/errors/delete_doc_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[DisabledFeatureError](shortcut/models/disabled_feature_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_doc(doc_public_id: UUID, *, content_format: ContentFormat3OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Doc, GetDocErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Doc by its public ID with content. Use content_format=html query parameter to include HTML content.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.get_doc(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Doc
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.get_doc(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Doc
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDocErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_public_id</code> | <code>UUID</code> | The Doc's public ID |
| <code>content_format</code> | <code>[ContentFormat3OrStr](shortcut/models/enums/content_format3.py) \| None</code> | Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Doc](shortcut/models/doc.py), [GetDocErrorBody](shortcut/errors/get_doc_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Doc](shortcut/models/doc.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetDocErrorBody](shortcut/errors/get_doc_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[DisabledFeatureError](shortcut/models/disabled_feature_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def link_document_to_epic(doc_public_id: UUID, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, LinkDocumentToEpicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a relationship between a Document and an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.link_document_to_epic(UUID("00000000-0000-0000-0000-000000000000"), 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LinkDocumentToEpicErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.link_document_to_epic(
    UUID("00000000-0000-0000-0000-000000000000"), 1
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LinkDocumentToEpicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_public_id</code> | <code>UUID</code> | The public ID of the Document. |
| <code>epic_public_id</code> | <code>int</code> | The public ID of the Epic. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [LinkDocumentToEpicErrorBody](shortcut/errors/link_document_to_epic_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[LinkDocumentToEpicErrorBody](shortcut/errors/link_document_to_epic_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[DisabledFeatureError](shortcut/models/disabled_feature_error.py)</code> |
| 422 | <code>[UnprocessableError](shortcut/models/unprocessable_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_docs(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[DocSlim], ListDocsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Docs returns a list of Doc that the current user can read.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.list_docs()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DocSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDocsErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.list_docs()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DocSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDocsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[DocSlim](shortcut/models/doc_slim.py)&#93;, [ListDocsErrorBody](shortcut/errors/list_docs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[DocSlim](shortcut/models/doc_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListDocsErrorBody](shortcut/errors/list_docs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[DisabledFeatureError](shortcut/models/disabled_feature_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_document_epics(doc_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[EpicSlim], ListDocumentEpicsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Epics related to this Document.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.list_document_epics(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDocumentEpicsErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.list_document_epics(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDocumentEpicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_public_id</code> | <code>UUID</code> | The public ID of the Document. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;, [ListDocumentEpicsErrorBody](shortcut/errors/list_document_epics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListDocumentEpicsErrorBody](shortcut/errors/list_document_epics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[DisabledFeatureError](shortcut/models/disabled_feature_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unlink_document_from_epic(doc_public_id: UUID, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UnlinkDocumentFromEpicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a relationship between a Document and an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.unlink_document_from_epic(UUID("00000000-0000-0000-0000-000000000000"), 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnlinkDocumentFromEpicErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.unlink_document_from_epic(
    UUID("00000000-0000-0000-0000-000000000000"), 1
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnlinkDocumentFromEpicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_public_id</code> | <code>UUID</code> | The public ID of the Document. |
| <code>epic_public_id</code> | <code>int</code> | The public ID of the Epic. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [UnlinkDocumentFromEpicErrorBody](shortcut/errors/unlink_document_from_epic_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UnlinkDocumentFromEpicErrorBody](shortcut/errors/unlink_document_from_epic_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[DisabledFeatureError](shortcut/models/disabled_feature_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_doc(doc_public_id: UUID, body: UpdateDoc | UpdateDocDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Doc, UpdateDocErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing Doc's title and/or content. Supports markdown or HTML input via content_format parameter. When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected Tiptap clients to refresh. (2) For non-migrated docs, CKEditor cache is flushed and SSE events notify connected CKEditor users.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.documents.with_raw_response.update_doc(UUID("00000000-0000-0000-0000-000000000000"), UpdateDoc())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Doc
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDocErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.update_doc(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateDoc()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Doc
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDocErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>doc_public_id</code> | <code>UUID</code> | The Doc's public ID |
| <code>body</code> | <code>[UpdateDoc](shortcut/models/update_doc.py) \| [UpdateDocDict](shortcut/models/update_doc.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Doc](shortcut/models/doc.py), [UpdateDocErrorBody](shortcut/errors/update_doc_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Doc](shortcut/models/doc.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateDocErrorBody](shortcut/errors/update_doc_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[DisabledFeatureError](shortcut/models/disabled_feature_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EntityTemplates

> Source: [EntityTemplates](shortcut/apis/entity_templates.py)

<details>
<summary><code>def create_entity_template(body: CreateEntityTemplate | CreateEntityTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntityTemplate, CreateEntityTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new entity template for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entity_templates.with_raw_response.create_entity_template(
    CreateEntityTemplate(name="some example string", story_contents=CreateStoryContents())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEntityTemplateErrorBody
```

**Async**

```python
result = await async_client.entity_templates.with_raw_response.create_entity_template(
    CreateEntityTemplate(name="some example string", story_contents=CreateStoryContents())
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEntityTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateEntityTemplate](shortcut/models/create_entity_template.py) \| [CreateEntityTemplateDict](shortcut/models/create_entity_template.py)</code> | Request parameters for creating an entirely new entity template. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[EntityTemplate](shortcut/models/entity_template.py), [CreateEntityTemplateErrorBody](shortcut/errors/create_entity_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntityTemplate](shortcut/models/entity_template.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateEntityTemplateErrorBody](shortcut/errors/create_entity_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_entity_template(entity_template_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteEntityTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entity_templates.with_raw_response.delete_entity_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEntityTemplateErrorBody
```

**Async**

```python
result = await async_client.entity_templates.with_raw_response.delete_entity_template(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEntityTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_template_public_id</code> | <code>UUID</code> | The unique ID of the entity template. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteEntityTemplateErrorBody](shortcut/errors/delete_entity_template_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteEntityTemplateErrorBody](shortcut/errors/delete_entity_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disable_story_templates(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DisableStoryTemplatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables the Story Template feature for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entity_templates.with_raw_response.disable_story_templates()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisableStoryTemplatesErrorBody
```

**Async**

```python
result = await async_client.entity_templates.with_raw_response.disable_story_templates()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisableStoryTemplatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DisableStoryTemplatesErrorBody](shortcut/errors/disable_story_templates_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DisableStoryTemplatesErrorBody](shortcut/errors/disable_story_templates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def enable_story_templates(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, EnableStoryTemplatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables the Story Template feature for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entity_templates.with_raw_response.enable_story_templates()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnableStoryTemplatesErrorBody
```

**Async**

```python
result = await async_client.entity_templates.with_raw_response.enable_story_templates()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnableStoryTemplatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [EnableStoryTemplatesErrorBody](shortcut/errors/enable_story_templates_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[EnableStoryTemplatesErrorBody](shortcut/errors/enable_story_templates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_entity_template(entity_template_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntityTemplate, GetEntityTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Entity Template returns information about a given entity template.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entity_templates.with_raw_response.get_entity_template(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEntityTemplateErrorBody
```

**Async**

```python
result = await async_client.entity_templates.with_raw_response.get_entity_template(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEntityTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_template_public_id</code> | <code>UUID</code> | The unique ID of the entity template. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[EntityTemplate](shortcut/models/entity_template.py), [GetEntityTemplateErrorBody](shortcut/errors/get_entity_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntityTemplate](shortcut/models/entity_template.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetEntityTemplateErrorBody](shortcut/errors/get_entity_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_entity_templates(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[EntityTemplate], ListEntityTemplatesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the entity templates for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entity_templates.with_raw_response.list_entity_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EntityTemplate]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEntityTemplatesErrorBody
```

**Async**

```python
result = await async_client.entity_templates.with_raw_response.list_entity_templates()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EntityTemplate]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEntityTemplatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[EntityTemplate](shortcut/models/entity_template.py)&#93;, [ListEntityTemplatesErrorBody](shortcut/errors/list_entity_templates_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[EntityTemplate](shortcut/models/entity_template.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListEntityTemplatesErrorBody](shortcut/errors/list_entity_templates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_entity_template(entity_template_public_id: UUID, body: UpdateEntityTemplate | UpdateEntityTemplateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EntityTemplate, UpdateEntityTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an entity template's name or its contents.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.entity_templates.with_raw_response.update_entity_template(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateEntityTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEntityTemplateErrorBody
```

**Async**

```python
result = await async_client.entity_templates.with_raw_response.update_entity_template(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateEntityTemplate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EntityTemplate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEntityTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entity_template_public_id</code> | <code>UUID</code> | The unique ID of the template to be updated. |
| <code>body</code> | <code>[UpdateEntityTemplate](shortcut/models/update_entity_template.py) \| [UpdateEntityTemplateDict](shortcut/models/update_entity_template.py)</code> | Request parameters for changing either a template's name or any of<br>  the attributes it is designed to pre-populate. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[EntityTemplate](shortcut/models/entity_template.py), [UpdateEntityTemplateErrorBody](shortcut/errors/update_entity_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EntityTemplate](shortcut/models/entity_template.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateEntityTemplateErrorBody](shortcut/errors/update_entity_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EpicWorkflowApi

> Source: [EpicWorkflowApi](shortcut/apis/epic_workflow_api.py)

<details>
<summary><code>def get_epic_workflow(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EpicWorkflow, GetEpicWorkflowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Epic Workflow for the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epic_workflow_api.with_raw_response.get_epic_workflow()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EpicWorkflow
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEpicWorkflowErrorBody
```

**Async**

```python
result = await async_client.epic_workflow_api.with_raw_response.get_epic_workflow()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EpicWorkflow
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEpicWorkflowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[EpicWorkflow](shortcut/models/epic_workflow.py), [GetEpicWorkflowErrorBody](shortcut/errors/get_epic_workflow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EpicWorkflow](shortcut/models/epic_workflow.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetEpicWorkflowErrorBody](shortcut/errors/get_epic_workflow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Epics

> Source: [Epics](shortcut/apis/epics.py)

<details>
<summary><code>def create_epic(body: CreateEpic | CreateEpicDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Epic, CreateEpicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Epic allows you to create a new Epic in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.create_epic(CreateEpic(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Epic
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEpicErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.create_epic(CreateEpic(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Epic
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEpicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateEpic](shortcut/models/create_epic.py) \| [CreateEpicDict](shortcut/models/create_epic.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Epic](shortcut/models/epic.py), [CreateEpicErrorBody](shortcut/errors/create_epic_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Epic](shortcut/models/epic.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateEpicErrorBody](shortcut/errors/create_epic_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_epic_comment(epic_public_id: int, body: CreateEpicComment | CreateEpicCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ThreadedComment, CreateEpicCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a threaded Comment on an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.create_epic_comment(1, CreateEpicComment(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ThreadedComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEpicCommentErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.create_epic_comment(
    1, CreateEpicComment(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ThreadedComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEpicCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The ID of the associated Epic. |
| <code>body</code> | <code>[CreateEpicComment](shortcut/models/create_epic_comment.py) \| [CreateEpicCommentDict](shortcut/models/create_epic_comment.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[ThreadedComment](shortcut/models/threaded_comment.py), [CreateEpicCommentErrorBody](shortcut/errors/create_epic_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ThreadedComment](shortcut/models/threaded_comment.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateEpicCommentErrorBody](shortcut/errors/create_epic_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_epic_comment_comment(epic_public_id: int, comment_public_id: int, body: CreateCommentComment | CreateCommentCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ThreadedComment, CreateEpicCommentCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a nested Comment reply to an existing Epic Comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.create_epic_comment_comment(
    1, 1, CreateCommentComment(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ThreadedComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEpicCommentCommentErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.create_epic_comment_comment(
    1, 1, CreateCommentComment(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ThreadedComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEpicCommentCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The ID of the associated Epic. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the parent Epic Comment. |
| <code>body</code> | <code>[CreateCommentComment](shortcut/models/create_comment_comment.py) \| [CreateCommentCommentDict](shortcut/models/create_comment_comment.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[ThreadedComment](shortcut/models/threaded_comment.py), [CreateEpicCommentCommentErrorBody](shortcut/errors/create_epic_comment_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ThreadedComment](shortcut/models/threaded_comment.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateEpicCommentCommentErrorBody](shortcut/errors/create_epic_comment_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_epic_health(epic_public_id: int, body: CreateEpicHealth | CreateEpicHealthDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, CreateEpicHealthErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new health status for the specified Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.create_epic_health(1, CreateEpicHealth(status=Status1.AT_RISK))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEpicHealthErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.create_epic_health(1, CreateEpicHealth(status=Status1.AT_RISK))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEpicHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The unique ID of the Epic. |
| <code>body</code> | <code>[CreateEpicHealth](shortcut/models/create_epic_health.py) \| [CreateEpicHealthDict](shortcut/models/create_epic_health.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Health](shortcut/models/health.py), [CreateEpicHealthErrorBody](shortcut/errors/create_epic_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Health](shortcut/models/health.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateEpicHealthErrorBody](shortcut/errors/create_epic_health_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_epic(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteEpicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.delete_epic(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEpicErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.delete_epic(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEpicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The unique ID of the Epic. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteEpicErrorBody](shortcut/errors/delete_epic_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteEpicErrorBody](shortcut/errors/delete_epic_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_epic_comment(epic_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteEpicCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a Comment from an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.delete_epic_comment(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEpicCommentErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.delete_epic_comment(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEpicCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The ID of the associated Epic. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the Comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteEpicCommentErrorBody](shortcut/errors/delete_epic_comment_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteEpicCommentErrorBody](shortcut/errors/delete_epic_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_epic(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Epic, GetEpicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Epic returns information about the selected Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.get_epic(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Epic
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEpicErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.get_epic(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Epic
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEpicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The unique ID of the Epic. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Epic](shortcut/models/epic.py), [GetEpicErrorBody](shortcut/errors/get_epic_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Epic](shortcut/models/epic.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetEpicErrorBody](shortcut/errors/get_epic_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_epic_comment(epic_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ThreadedComment, GetEpicCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns information about the selected Epic Comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.get_epic_comment(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ThreadedComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEpicCommentErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.get_epic_comment(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ThreadedComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEpicCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The ID of the associated Epic. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the Comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[ThreadedComment](shortcut/models/threaded_comment.py), [GetEpicCommentErrorBody](shortcut/errors/get_epic_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ThreadedComment](shortcut/models/threaded_comment.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetEpicCommentErrorBody](shortcut/errors/get_epic_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_epic_health(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, GetEpicHealthErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current health for the specified Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.get_epic_health(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEpicHealthErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.get_epic_health(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEpicHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The unique ID of the Epic. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Health](shortcut/models/health.py), [GetEpicHealthErrorBody](shortcut/errors/get_epic_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Health](shortcut/models/health.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetEpicHealthErrorBody](shortcut/errors/get_epic_health_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_epic_comments(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ThreadedComment], ListEpicCommentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Comments on an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.list_epic_comments(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ThreadedComment]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicCommentsErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.list_epic_comments(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ThreadedComment]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicCommentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The unique ID of the Epic. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[ThreadedComment](shortcut/models/threaded_comment.py)&#93;, [ListEpicCommentsErrorBody](shortcut/errors/list_epic_comments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ThreadedComment](shortcut/models/threaded_comment.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListEpicCommentsErrorBody](shortcut/errors/list_epic_comments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_epic_documents(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[DocSlim], ListEpicDocumentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Documents related to this Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.list_epic_documents(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DocSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicDocumentsErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.list_epic_documents(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DocSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The unique ID of the Epic. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[DocSlim](shortcut/models/doc_slim.py)&#93;, [ListEpicDocumentsErrorBody](shortcut/errors/list_epic_documents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[DocSlim](shortcut/models/doc_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListEpicDocumentsErrorBody](shortcut/errors/list_epic_documents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_epic_healths(epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Health], ListEpicHealthsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the history of health statuses for the specified Epic, most recent first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.list_epic_healths(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Health]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicHealthsErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.list_epic_healths(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Health]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicHealthsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The unique ID of the Epic. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Health](shortcut/models/health.py)&#93;, [ListEpicHealthsErrorBody](shortcut/errors/list_epic_healths_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Health](shortcut/models/health.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListEpicHealthsErrorBody](shortcut/errors/list_epic_healths_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_epic_stories(epic_public_id: int, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], ListEpicStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Stories in an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.list_epic_stories(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicStoriesErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.list_epic_stories(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The unique ID of the Epic. |
| <code>includes_description</code> | <code>bool \| None</code> | A true/false boolean indicating whether to return Stories with their descriptions.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [ListEpicStoriesErrorBody](shortcut/errors/list_epic_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListEpicStoriesErrorBody](shortcut/errors/list_epic_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_epics(*, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[EpicSlim], ListEpicsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Epics returns a list of all Epics and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.list_epics()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicsErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.list_epics()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includes_description</code> | <code>bool \| None</code> | A true/false boolean indicating whether to return Epics with their descriptions.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;, [ListEpicsErrorBody](shortcut/errors/list_epics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListEpicsErrorBody](shortcut/errors/list_epics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_epics_paginated(*, includes_description: bool | None = None, page: int | None = None, page_size: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EpicPaginatedResults, ListEpicsPaginatedErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Epics with pagination returns a paginated list of Epics and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.list_epics_paginated()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EpicPaginatedResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicsPaginatedErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.list_epics_paginated()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EpicPaginatedResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEpicsPaginatedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includes_description</code> | <code>bool \| None</code> | A true/false boolean indicating whether to return Epics with their descriptions.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | The page number to return, starting with 1. Defaults to 1.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The number of Epics to return per page. Minimum 1, maximum 250, default 10.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[EpicPaginatedResults](shortcut/models/epic_paginated_results.py), [ListEpicsPaginatedErrorBody](shortcut/errors/list_epics_paginated_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EpicPaginatedResults](shortcut/models/epic_paginated_results.py)</code> -- Resource

**On `Failure`**: `error` is <code>[ListEpicsPaginatedErrorBody](shortcut/errors/list_epics_paginated_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_epic(epic_public_id: int, body: UpdateEpic | UpdateEpicDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Epic, UpdateEpicErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.update_epic(1, UpdateEpic())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Epic
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEpicErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.update_epic(1, UpdateEpic())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Epic
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEpicErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The unique ID of the Epic. |
| <code>body</code> | <code>[UpdateEpic](shortcut/models/update_epic.py) \| [UpdateEpicDict](shortcut/models/update_epic.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Epic](shortcut/models/epic.py), [UpdateEpicErrorBody](shortcut/errors/update_epic_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Epic](shortcut/models/epic.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateEpicErrorBody](shortcut/errors/update_epic_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_epic_comment(epic_public_id: int, comment_public_id: int, body: UpdateComment | UpdateCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ThreadedComment, UpdateEpicCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to update a threaded Comment on an Epic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.epics.with_raw_response.update_epic_comment(1, 1, UpdateComment(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ThreadedComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEpicCommentErrorBody
```

**Async**

```python
result = await async_client.epics.with_raw_response.update_epic_comment(1, 1, UpdateComment(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ThreadedComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEpicCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epic_public_id</code> | <code>int</code> | The ID of the associated Epic. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the Comment. |
| <code>body</code> | <code>[UpdateComment](shortcut/models/update_comment.py) \| [UpdateCommentDict](shortcut/models/update_comment.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[ThreadedComment](shortcut/models/threaded_comment.py), [UpdateEpicCommentErrorBody](shortcut/errors/update_epic_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ThreadedComment](shortcut/models/threaded_comment.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateEpicCommentErrorBody](shortcut/errors/update_epic_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExternalLink

> Source: [ExternalLink](shortcut/apis/external_link.py)

<details>
<summary><code>def get_external_link_stories(external_link: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], GetExternalLinkStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Stories which have a given External Link associated with them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.external_link.with_raw_response.get_external_link_stories("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExternalLinkStoriesErrorBody
```

**Async**

```python
result = await async_client.external_link.with_raw_response.get_external_link_stories("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetExternalLinkStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>external_link</code> | <code>str</code> | The external link associated with one or more stories. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [GetExternalLinkStoriesErrorBody](shortcut/errors/get_external_link_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[GetExternalLinkStoriesErrorBody](shortcut/errors/get_external_link_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Files

> Source: [Files](shortcut/apis/files.py)

<details>
<summary><code>def delete_file(file_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete File deletes a previously uploaded file.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.files.with_raw_response.delete_file(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFileErrorBody
```

**Async**

```python
result = await async_client.files.with_raw_response.delete_file(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file_public_id</code> | <code>int</code> | The File’s unique ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteFileErrorBody](shortcut/errors/delete_file_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteFileErrorBody](shortcut/errors/delete_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_file(file_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UploadedFile, GetFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get File returns information about the selected UploadedFile.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.files.with_raw_response.get_file(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UploadedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFileErrorBody
```

**Async**

```python
result = await async_client.files.with_raw_response.get_file(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UploadedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file_public_id</code> | <code>int</code> | The File’s unique ID. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[UploadedFile](shortcut/models/uploaded_file.py), [GetFileErrorBody](shortcut/errors/get_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UploadedFile](shortcut/models/uploaded_file.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetFileErrorBody](shortcut/errors/get_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_files(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[UploadedFile], ListFilesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Files returns a list of all UploadedFiles in the workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.files.with_raw_response.list_files()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UploadedFile]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFilesErrorBody
```

**Async**

```python
result = await async_client.files.with_raw_response.list_files()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UploadedFile]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFilesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[UploadedFile](shortcut/models/uploaded_file.py)&#93;, [ListFilesErrorBody](shortcut/errors/list_files_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[UploadedFile](shortcut/models/uploaded_file.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListFilesErrorBody](shortcut/errors/list_files_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_file(file_public_id: int, body: UpdateFile | UpdateFileDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UploadedFile, UpdateFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update File updates the properties of an UploadedFile (but not its content).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.files.with_raw_response.update_file(1, UpdateFile())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UploadedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFileErrorBody
```

**Async**

```python
result = await async_client.files.with_raw_response.update_file(1, UpdateFile())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UploadedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file_public_id</code> | <code>int</code> | The unique ID assigned to the file in Shortcut. |
| <code>body</code> | <code>[UpdateFile](shortcut/models/update_file.py) \| [UpdateFileDict](shortcut/models/update_file.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[UploadedFile](shortcut/models/uploaded_file.py), [UpdateFileErrorBody](shortcut/errors/update_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UploadedFile](shortcut/models/uploaded_file.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateFileErrorBody](shortcut/errors/update_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_files(file0: FileInput, *, story_id: int | None = None, file1: FileInput | None = None, file2: FileInput | None = None, file3: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[UploadedFile], UploadFilesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload Files uploads one or many files and optionally associates them with a story.
Use the multipart/form-data content-type to upload.
Each `file` key should contain a separate file.
Each UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.files.with_raw_response.upload_files(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UploadedFile]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadFilesErrorBody
```

**Async**

```python
result = await async_client.files.with_raw_response.upload_files(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[UploadedFile]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadFilesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file0</code> | <code>FileInput</code> | A file upload. At least one is required. |
| <code>story_id</code> | <code>int \| None</code> | The story ID that these files will be associated with.<br>**Default**: <code>None</code> |
| <code>file1</code> | <code>FileInput \| None</code> | Optional additional files.<br>**Default**: <code>None</code> |
| <code>file2</code> | <code>FileInput \| None</code> | Optional additional files.<br>**Default**: <code>None</code> |
| <code>file3</code> | <code>FileInput \| None</code> | Optional additional files.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[UploadedFile](shortcut/models/uploaded_file.py)&#93;, [UploadFilesErrorBody](shortcut/errors/upload_files_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[UploadedFile](shortcut/models/uploaded_file.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[UploadFilesErrorBody](shortcut/errors/upload_files_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](shortcut/apis/groups.py)

<details>
<summary><code>def create_group(body: CreateGroup | CreateGroupDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Group, CreateGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.create_group(
    CreateGroup(mention_name="some example string", name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.create_group(
    CreateGroup(mention_name="some example string", name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateGroup](shortcut/models/create_group.py) \| [CreateGroupDict](shortcut/models/create_group.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Group](shortcut/models/group.py), [CreateGroupErrorBody](shortcut/errors/create_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Group](shortcut/models/group.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateGroupErrorBody](shortcut/errors/create_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[UnusableEntitlementError](shortcut/models/unusable_entitlement_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_group(group_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Group, GetGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.get_group(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.get_group(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_public_id</code> | <code>UUID</code> | The unique ID of the Group. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Group](shortcut/models/group.py), [GetGroupErrorBody](shortcut/errors/get_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Group](shortcut/models/group.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetGroupErrorBody](shortcut/errors/get_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_group_stories(group_public_id: UUID, *, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], ListGroupStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Stories assigned to the Group. (By default, limited to 1,000).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.list_group_stories(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGroupStoriesErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.list_group_stories(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGroupStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_public_id</code> | <code>UUID</code> | The unique ID of the Group. |
| <code>limit</code> | <code>int \| None</code> | The maximum number of results to return. (Defaults to 1000, max 1000)<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | The offset at which to begin returning results. (Defaults to 0)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [ListGroupStoriesErrorBody](shortcut/errors/list_group_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListGroupStoriesErrorBody](shortcut/errors/list_group_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_groups(*, archived: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Group], ListGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.list_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Group]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGroupsErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.list_groups()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Group]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>archived</code> | <code>bool \| None</code> | Filter groups by their archived state. If true, returns only archived groups. If false, returns only unarchived groups. If not provided, returns all groups<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Group](shortcut/models/group.py)&#93;, [ListGroupsErrorBody](shortcut/errors/list_groups_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Group](shortcut/models/group.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListGroupsErrorBody](shortcut/errors/list_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_group(group_public_id: UUID, body: UpdateGroup | UpdateGroupDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Group, UpdateGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.groups.with_raw_response.update_group(UUID("00000000-0000-0000-0000-000000000000"), UpdateGroup())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupErrorBody
```

**Async**

```python
result = await async_client.groups.with_raw_response.update_group(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateGroup()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Group
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>group_public_id</code> | <code>UUID</code> | The unique ID of the Group. |
| <code>body</code> | <code>[UpdateGroup](shortcut/models/update_group.py) \| [UpdateGroupDict](shortcut/models/update_group.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Group](shortcut/models/group.py), [UpdateGroupErrorBody](shortcut/errors/update_group_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Group](shortcut/models/group.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateGroupErrorBody](shortcut/errors/update_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[UnusableEntitlementError](shortcut/models/unusable_entitlement_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## HealthApi

> Source: [HealthApi](shortcut/apis/health_api.py)

<details>
<summary><code>def update_health(health_public_id: UUID, body: UpdateHealth | UpdateHealthDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, UpdateHealthErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing health status by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.health_api.with_raw_response.update_health(UUID("00000000-0000-0000-0000-000000000000"), UpdateHealth())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateHealthErrorBody
```

**Async**

```python
result = await async_client.health_api.with_raw_response.update_health(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateHealth()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>health_public_id</code> | <code>UUID</code> | The unique ID of the Health record. |
| <code>body</code> | <code>[UpdateHealth](shortcut/models/update_health.py) \| [UpdateHealthDict](shortcut/models/update_health.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Health](shortcut/models/health.py), [UpdateHealthErrorBody](shortcut/errors/update_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Health](shortcut/models/health.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateHealthErrorBody](shortcut/errors/update_health_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Integrations

> Source: [Integrations](shortcut/apis/integrations.py)

<details>
<summary><code>def create_generic_integration(body: CreateGenericIntegration | CreateGenericIntegrationDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateGenericIntegrationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.integrations.with_raw_response.create_generic_integration(
    CreateGenericIntegration(webhook_url="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGenericIntegrationErrorBody
```

**Async**

```python
result = await async_client.integrations.with_raw_response.create_generic_integration(
    CreateGenericIntegration(webhook_url="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateGenericIntegrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateGenericIntegration](shortcut/models/create_generic_integration.py) \| [CreateGenericIntegrationDict](shortcut/models/create_generic_integration.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [CreateGenericIntegrationErrorBody](shortcut/errors/create_generic_integration_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateGenericIntegrationErrorBody](shortcut/errors/create_generic_integration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_generic_integration(integration_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteGenericIntegrationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.integrations.with_raw_response.delete_generic_integration(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGenericIntegrationErrorBody
```

**Async**

```python
result = await async_client.integrations.with_raw_response.delete_generic_integration(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteGenericIntegrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>integration_public_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteGenericIntegrationErrorBody](shortcut/errors/delete_generic_integration_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteGenericIntegrationErrorBody](shortcut/errors/delete_generic_integration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_generic_integration(integration_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetGenericIntegrationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.integrations.with_raw_response.get_generic_integration(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGenericIntegrationErrorBody
```

**Async**

```python
result = await async_client.integrations.with_raw_response.get_generic_integration(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetGenericIntegrationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>integration_public_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [GetGenericIntegrationErrorBody](shortcut/errors/get_generic_integration_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetGenericIntegrationErrorBody](shortcut/errors/get_generic_integration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Iterations

> Source: [Iterations](shortcut/apis/iterations.py)

<details>
<summary><code>def create_iteration(body: CreateIteration | CreateIterationDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Iteration, CreateIterationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.iterations.with_raw_response.create_iteration(
    CreateIteration(name="some example string", start_date="some example string", end_date="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Iteration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateIterationErrorBody
```

**Async**

```python
result = await async_client.iterations.with_raw_response.create_iteration(
    CreateIteration(name="some example string", start_date="some example string", end_date="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Iteration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateIterationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateIteration](shortcut/models/create_iteration.py) \| [CreateIterationDict](shortcut/models/create_iteration.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Iteration](shortcut/models/iteration.py), [CreateIterationErrorBody](shortcut/errors/create_iteration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Iteration](shortcut/models/iteration.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateIterationErrorBody](shortcut/errors/create_iteration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_iteration(iteration_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteIterationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.iterations.with_raw_response.delete_iteration(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteIterationErrorBody
```

**Async**

```python
result = await async_client.iterations.with_raw_response.delete_iteration(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteIterationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iteration_public_id</code> | <code>int</code> | The unique ID of the Iteration. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteIterationErrorBody](shortcut/errors/delete_iteration_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteIterationErrorBody](shortcut/errors/delete_iteration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disable_iterations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DisableIterationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables Iterations for the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.iterations.with_raw_response.disable_iterations()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisableIterationsErrorBody
```

**Async**

```python
result = await async_client.iterations.with_raw_response.disable_iterations()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisableIterationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DisableIterationsErrorBody](shortcut/errors/disable_iterations_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DisableIterationsErrorBody](shortcut/errors/disable_iterations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def enable_iterations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, EnableIterationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables Iterations for the current workspace

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.iterations.with_raw_response.enable_iterations()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnableIterationsErrorBody
```

**Async**

```python
result = await async_client.iterations.with_raw_response.enable_iterations()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnableIterationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [EnableIterationsErrorBody](shortcut/errors/enable_iterations_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[EnableIterationsErrorBody](shortcut/errors/enable_iterations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_iteration(iteration_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Iteration, GetIterationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.iterations.with_raw_response.get_iteration(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Iteration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIterationErrorBody
```

**Async**

```python
result = await async_client.iterations.with_raw_response.get_iteration(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Iteration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetIterationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iteration_public_id</code> | <code>int</code> | The unique ID of the Iteration. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Iteration](shortcut/models/iteration.py), [GetIterationErrorBody](shortcut/errors/get_iteration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Iteration](shortcut/models/iteration.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetIterationErrorBody](shortcut/errors/get_iteration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_iteration_stories(iteration_public_id: int, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], ListIterationStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Stories in an Iteration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.iterations.with_raw_response.list_iteration_stories(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListIterationStoriesErrorBody
```

**Async**

```python
result = await async_client.iterations.with_raw_response.list_iteration_stories(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListIterationStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iteration_public_id</code> | <code>int</code> | The unique ID of the Iteration. |
| <code>includes_description</code> | <code>bool \| None</code> | A true/false boolean indicating whether to return Stories with their descriptions.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [ListIterationStoriesErrorBody](shortcut/errors/list_iteration_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListIterationStoriesErrorBody](shortcut/errors/list_iteration_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_iterations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[IterationSlim], ListIterationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.iterations.with_raw_response.list_iterations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IterationSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListIterationsErrorBody
```

**Async**

```python
result = await async_client.iterations.with_raw_response.list_iterations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IterationSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListIterationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[IterationSlim](shortcut/models/iteration_slim.py)&#93;, [ListIterationsErrorBody](shortcut/errors/list_iterations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[IterationSlim](shortcut/models/iteration_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListIterationsErrorBody](shortcut/errors/list_iterations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_iteration(iteration_public_id: int, body: UpdateIteration | UpdateIterationDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Iteration, UpdateIterationErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PUT` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.iterations.with_raw_response.update_iteration(1, UpdateIteration())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Iteration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateIterationErrorBody
```

**Async**

```python
result = await async_client.iterations.with_raw_response.update_iteration(1, UpdateIteration())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Iteration
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateIterationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iteration_public_id</code> | <code>int</code> | The unique ID of the Iteration. |
| <code>body</code> | <code>[UpdateIteration](shortcut/models/update_iteration.py) \| [UpdateIterationDict](shortcut/models/update_iteration.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Iteration](shortcut/models/iteration.py), [UpdateIterationErrorBody](shortcut/errors/update_iteration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Iteration](shortcut/models/iteration.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateIterationErrorBody](shortcut/errors/update_iteration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## KeyResults

> Source: [KeyResults](shortcut/apis/key_results.py)

<details>
<summary><code>def get_key_result(key_result_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[KeyResult, GetKeyResultErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Key Result returns information about a chosen Key Result.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.key_results.with_raw_response.get_key_result(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type KeyResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetKeyResultErrorBody
```

**Async**

```python
result = await async_client.key_results.with_raw_response.get_key_result(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type KeyResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetKeyResultErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_result_public_id</code> | <code>UUID</code> | The ID of the Key Result. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[KeyResult](shortcut/models/key_result.py), [GetKeyResultErrorBody](shortcut/errors/get_key_result_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[KeyResult](shortcut/models/key_result.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetKeyResultErrorBody](shortcut/errors/get_key_result_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_key_result(key_result_public_id: UUID, body: UpdateKeyResult | UpdateKeyResultDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[KeyResult, UpdateKeyResultErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Key Result allows updating a Key Result's name or initial, observed, or target values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.key_results.with_raw_response.update_key_result(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateKeyResult()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type KeyResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateKeyResultErrorBody
```

**Async**

```python
result = await async_client.key_results.with_raw_response.update_key_result(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateKeyResult()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type KeyResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateKeyResultErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key_result_public_id</code> | <code>UUID</code> | The ID of the Key Result. |
| <code>body</code> | <code>[UpdateKeyResult](shortcut/models/update_key_result.py) \| [UpdateKeyResultDict](shortcut/models/update_key_result.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[KeyResult](shortcut/models/key_result.py), [UpdateKeyResultErrorBody](shortcut/errors/update_key_result_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[KeyResult](shortcut/models/key_result.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateKeyResultErrorBody](shortcut/errors/update_key_result_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Labels

> Source: [Labels](shortcut/apis/labels.py)

<details>
<summary><code>def create_label(body: CreateLabelParams | CreateLabelParamsDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Label, CreateLabelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Label allows you to create a new Label in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.create_label(CreateLabelParams(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Label
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLabelErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.create_label(CreateLabelParams(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Label
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLabelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateLabelParams](shortcut/models/create_label_params.py) \| [CreateLabelParamsDict](shortcut/models/create_label_params.py)</code> | Request parameters for creating a Label on a Shortcut Story. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Label](shortcut/models/label.py), [CreateLabelErrorBody](shortcut/errors/create_label_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Label](shortcut/models/label.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateLabelErrorBody](shortcut/errors/create_label_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_label(label_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteLabelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Label can be used to delete any Label.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.delete_label(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLabelErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.delete_label(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLabelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>label_public_id</code> | <code>int</code> | The unique ID of the Label. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteLabelErrorBody](shortcut/errors/delete_label_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteLabelErrorBody](shortcut/errors/delete_label_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_label(label_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Label, GetLabelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Label returns information about the selected Label.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.get_label(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Label
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLabelErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.get_label(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Label
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLabelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>label_public_id</code> | <code>int</code> | The unique ID of the Label. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Label](shortcut/models/label.py), [GetLabelErrorBody](shortcut/errors/get_label_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Label](shortcut/models/label.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetLabelErrorBody](shortcut/errors/get_label_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_label_epics(label_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[EpicSlim], ListLabelEpicsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Epics with the Label.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.list_label_epics(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLabelEpicsErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.list_label_epics(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLabelEpicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>label_public_id</code> | <code>int</code> | The unique ID of the Label. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;, [ListLabelEpicsErrorBody](shortcut/errors/list_label_epics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListLabelEpicsErrorBody](shortcut/errors/list_label_epics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_label_stories(label_public_id: int, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], ListLabelStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Stories with the Label.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.list_label_stories(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLabelStoriesErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.list_label_stories(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLabelStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>label_public_id</code> | <code>int</code> | The unique ID of the Label. |
| <code>includes_description</code> | <code>bool \| None</code> | A true/false boolean indicating whether to return Stories with their descriptions.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [ListLabelStoriesErrorBody](shortcut/errors/list_label_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListLabelStoriesErrorBody](shortcut/errors/list_label_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_labels(*, slim: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Label], ListLabelsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Labels returns a list of all Labels and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.list_labels()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Label]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLabelsErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.list_labels()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Label]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLabelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slim</code> | <code>bool \| None</code> | A true/false boolean indicating if the slim versions of the Label should be returned.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Label](shortcut/models/label.py)&#93;, [ListLabelsErrorBody](shortcut/errors/list_labels_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Label](shortcut/models/label.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListLabelsErrorBody](shortcut/errors/list_labels_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_label(label_public_id: int, body: UpdateLabel | UpdateLabelDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Label, UpdateLabelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.labels.with_raw_response.update_label(1, UpdateLabel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Label
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLabelErrorBody
```

**Async**

```python
result = await async_client.labels.with_raw_response.update_label(1, UpdateLabel())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Label
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLabelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>label_public_id</code> | <code>int</code> | The unique ID of the Label you wish to update. |
| <code>body</code> | <code>[UpdateLabel](shortcut/models/update_label.py) \| [UpdateLabelDict](shortcut/models/update_label.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Label](shortcut/models/label.py), [UpdateLabelErrorBody](shortcut/errors/update_label_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Label](shortcut/models/label.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateLabelErrorBody](shortcut/errors/update_label_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## LinkedFiles

> Source: [LinkedFiles](shortcut/apis/linked_files.py)

<details>
<summary><code>def create_linked_file(body: CreateLinkedFile | CreateLinkedFileDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkedFile, CreateLinkedFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Linked File allows you to create a new Linked File in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_files.with_raw_response.create_linked_file(
    CreateLinkedFile(name="some example string", type_=TypeShortcutLinkedFilesApi.GOOGLE, url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLinkedFileErrorBody
```

**Async**

```python
result = await async_client.linked_files.with_raw_response.create_linked_file(
    CreateLinkedFile(name="some example string", type_=TypeShortcutLinkedFilesApi.GOOGLE, url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLinkedFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateLinkedFile](shortcut/models/create_linked_file.py) \| [CreateLinkedFileDict](shortcut/models/create_linked_file.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[LinkedFile](shortcut/models/linked_file.py), [CreateLinkedFileErrorBody](shortcut/errors/create_linked_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkedFile](shortcut/models/linked_file.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateLinkedFileErrorBody](shortcut/errors/create_linked_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_linked_file(linked_file_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteLinkedFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Linked File can be used to delete any previously attached Linked-File.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_files.with_raw_response.delete_linked_file(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLinkedFileErrorBody
```

**Async**

```python
result = await async_client.linked_files.with_raw_response.delete_linked_file(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLinkedFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linked_file_public_id</code> | <code>int</code> | The unique identifier of the linked file. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteLinkedFileErrorBody](shortcut/errors/delete_linked_file_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteLinkedFileErrorBody](shortcut/errors/delete_linked_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_linked_file(linked_file_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkedFile, GetLinkedFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get File returns information about the selected Linked File.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_files.with_raw_response.get_linked_file(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLinkedFileErrorBody
```

**Async**

```python
result = await async_client.linked_files.with_raw_response.get_linked_file(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLinkedFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linked_file_public_id</code> | <code>int</code> | The unique identifier of the linked file. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[LinkedFile](shortcut/models/linked_file.py), [GetLinkedFileErrorBody](shortcut/errors/get_linked_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkedFile](shortcut/models/linked_file.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetLinkedFileErrorBody](shortcut/errors/get_linked_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_linked_files(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[LinkedFile], ListLinkedFilesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Linked Files returns a list of all Linked-Files and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_files.with_raw_response.list_linked_files()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[LinkedFile]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLinkedFilesErrorBody
```

**Async**

```python
result = await async_client.linked_files.with_raw_response.list_linked_files()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[LinkedFile]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLinkedFilesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[LinkedFile](shortcut/models/linked_file.py)&#93;, [ListLinkedFilesErrorBody](shortcut/errors/list_linked_files_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[LinkedFile](shortcut/models/linked_file.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListLinkedFilesErrorBody](shortcut/errors/list_linked_files_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_linked_file(linked_file_public_id: int, body: UpdateLinkedFile | UpdateLinkedFileDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkedFile, UpdateLinkedFileErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updated Linked File allows you to update properties of a previously attached Linked-File.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.linked_files.with_raw_response.update_linked_file(1, UpdateLinkedFile())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLinkedFileErrorBody
```

**Async**

```python
result = await async_client.linked_files.with_raw_response.update_linked_file(1, UpdateLinkedFile())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkedFile
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLinkedFileErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linked_file_public_id</code> | <code>int</code> | The unique identifier of the linked file. |
| <code>body</code> | <code>[UpdateLinkedFile](shortcut/models/update_linked_file.py) \| [UpdateLinkedFileDict](shortcut/models/update_linked_file.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[LinkedFile](shortcut/models/linked_file.py), [UpdateLinkedFileErrorBody](shortcut/errors/update_linked_file_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkedFile](shortcut/models/linked_file.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateLinkedFileErrorBody](shortcut/errors/update_linked_file_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MemberApi

> Source: [MemberApi](shortcut/apis/member_api.py)

<details>
<summary><code>def get_current_member_info(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MemberInfo, GetCurrentMemberInfoErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the authenticated member.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.member_api.with_raw_response.get_current_member_info()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemberInfo
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCurrentMemberInfoErrorBody
```

**Async**

```python
result = await async_client.member_api.with_raw_response.get_current_member_info()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemberInfo
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCurrentMemberInfoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[MemberInfo](shortcut/models/member_info.py), [GetCurrentMemberInfoErrorBody](shortcut/errors/get_current_member_info_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MemberInfo](shortcut/models/member_info.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetCurrentMemberInfoErrorBody](shortcut/errors/get_current_member_info_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Members

> Source: [Members](shortcut/apis/members.py)

<details>
<summary><code>def get_member(member_public_id: UUID, *, org_public_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Member, GetMemberErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a Member.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.members.with_raw_response.get_member(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Member
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMemberErrorBody
```

**Async**

```python
result = await async_client.members.with_raw_response.get_member(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Member
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMemberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>member_public_id</code> | <code>UUID</code> | The Member's unique ID. |
| <code>org_public_id</code> | <code>UUID \| None</code> | The unique ID of the Organization to limit the lookup to.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Member](shortcut/models/member.py), [GetMemberErrorBody](shortcut/errors/get_member_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Member](shortcut/models/member.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetMemberErrorBody](shortcut/errors/get_member_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_members(*, org_public_id: UUID | None = None, disabled: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Member], ListMembersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about members of the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.members.with_raw_response.list_members()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Member]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMembersErrorBody
```

**Async**

```python
result = await async_client.members.with_raw_response.list_members()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Member]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMembersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>org_public_id</code> | <code>UUID \| None</code> | The unique ID of the Organization to limit the list to.<br>**Default**: <code>None</code> |
| <code>disabled</code> | <code>bool \| None</code> | Filter members by their disabled state. If true, return only disabled members. If false, return only enabled members.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Member](shortcut/models/member.py)&#93;, [ListMembersErrorBody](shortcut/errors/list_members_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Member](shortcut/models/member.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListMembersErrorBody](shortcut/errors/list_members_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Milestones

> Source: [Milestones](shortcut/apis/milestones.py)

<details>
<summary><code>def create_milestone(body: CreateMilestone | CreateMilestoneDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Milestone, CreateMilestoneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.milestones.with_raw_response.create_milestone(CreateMilestone(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Milestone
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMilestoneErrorBody
```

**Async**

```python
result = await async_client.milestones.with_raw_response.create_milestone(CreateMilestone(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Milestone
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMilestoneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateMilestone](shortcut/models/create_milestone.py) \| [CreateMilestoneDict](shortcut/models/create_milestone.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Milestone](shortcut/models/milestone.py), [CreateMilestoneErrorBody](shortcut/errors/create_milestone_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Milestone](shortcut/models/milestone.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateMilestoneErrorBody](shortcut/errors/create_milestone_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[UnusableEntitlementError](shortcut/models/unusable_entitlement_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_milestone(milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteMilestoneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.milestones.with_raw_response.delete_milestone(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMilestoneErrorBody
```

**Async**

```python
result = await async_client.milestones.with_raw_response.delete_milestone(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMilestoneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>milestone_public_id</code> | <code>int</code> | The ID of the Milestone. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteMilestoneErrorBody](shortcut/errors/delete_milestone_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteMilestoneErrorBody](shortcut/errors/delete_milestone_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_milestone(milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Milestone, GetMilestoneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.milestones.with_raw_response.get_milestone(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Milestone
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMilestoneErrorBody
```

**Async**

```python
result = await async_client.milestones.with_raw_response.get_milestone(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Milestone
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetMilestoneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>milestone_public_id</code> | <code>int</code> | The ID of the Milestone. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Milestone](shortcut/models/milestone.py), [GetMilestoneErrorBody](shortcut/errors/get_milestone_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Milestone](shortcut/models/milestone.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetMilestoneErrorBody](shortcut/errors/get_milestone_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_milestone_epics(milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[EpicSlim], ListMilestoneEpicsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.milestones.with_raw_response.list_milestone_epics(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMilestoneEpicsErrorBody
```

**Async**

```python
result = await async_client.milestones.with_raw_response.list_milestone_epics(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMilestoneEpicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>milestone_public_id</code> | <code>int</code> | The ID of the Milestone. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;, [ListMilestoneEpicsErrorBody](shortcut/errors/list_milestone_epics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListMilestoneEpicsErrorBody](shortcut/errors/list_milestone_epics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_milestones(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Milestone], ListMilestonesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.milestones.with_raw_response.list_milestones()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Milestone]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMilestonesErrorBody
```

**Async**

```python
result = await async_client.milestones.with_raw_response.list_milestones()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Milestone]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMilestonesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Milestone](shortcut/models/milestone.py)&#93;, [ListMilestonesErrorBody](shortcut/errors/list_milestones_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Milestone](shortcut/models/milestone.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListMilestonesErrorBody](shortcut/errors/list_milestones_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_milestone(milestone_public_id: int, body: UpdateMilestone | UpdateMilestoneDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Milestone, UpdateMilestoneErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.milestones.with_raw_response.update_milestone(1, UpdateMilestone())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Milestone
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMilestoneErrorBody
```

**Async**

```python
result = await async_client.milestones.with_raw_response.update_milestone(1, UpdateMilestone())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Milestone
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMilestoneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>milestone_public_id</code> | <code>int</code> | The ID of the Milestone. |
| <code>body</code> | <code>[UpdateMilestone](shortcut/models/update_milestone.py) \| [UpdateMilestoneDict](shortcut/models/update_milestone.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Milestone](shortcut/models/milestone.py), [UpdateMilestoneErrorBody](shortcut/errors/update_milestone_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Milestone](shortcut/models/milestone.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateMilestoneErrorBody](shortcut/errors/update_milestone_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Objectives

> Source: [Objectives](shortcut/apis/objectives.py)

<details>
<summary><code>def create_objective(body: CreateObjective | CreateObjectiveDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Objective, CreateObjectiveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Objective allows you to create a new Objective in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objectives.with_raw_response.create_objective(CreateObjective(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Objective
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectiveErrorBody
```

**Async**

```python
result = await async_client.objectives.with_raw_response.create_objective(CreateObjective(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Objective
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateObjective](shortcut/models/create_objective.py) \| [CreateObjectiveDict](shortcut/models/create_objective.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Objective](shortcut/models/objective.py), [CreateObjectiveErrorBody](shortcut/errors/create_objective_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Objective](shortcut/models/objective.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateObjectiveErrorBody](shortcut/errors/create_objective_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| 403 | <code>[UnusableEntitlementError](shortcut/models/unusable_entitlement_error.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_objective_health(objective_public_id: int, body: CreateObjectiveHealth | CreateObjectiveHealthDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, CreateObjectiveHealthErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new health status for the specified Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objectives.with_raw_response.create_objective_health(
    1, CreateObjectiveHealth(status=Status1ShortcutObjectivesApi.AT_RISK)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectiveHealthErrorBody
```

**Async**

```python
result = await async_client.objectives.with_raw_response.create_objective_health(
    1, CreateObjectiveHealth(status=Status1ShortcutObjectivesApi.AT_RISK)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateObjectiveHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objective_public_id</code> | <code>int</code> | The unique ID of the Objective. |
| <code>body</code> | <code>[CreateObjectiveHealth](shortcut/models/create_objective_health.py) \| [CreateObjectiveHealthDict](shortcut/models/create_objective_health.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Health](shortcut/models/health.py), [CreateObjectiveHealthErrorBody](shortcut/errors/create_objective_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Health](shortcut/models/health.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateObjectiveHealthErrorBody](shortcut/errors/create_objective_health_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_objective(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteObjectiveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Objective can be used to delete any Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objectives.with_raw_response.delete_objective(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteObjectiveErrorBody
```

**Async**

```python
result = await async_client.objectives.with_raw_response.delete_objective(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteObjectiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objective_public_id</code> | <code>int</code> | The ID of the Objective. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteObjectiveErrorBody](shortcut/errors/delete_objective_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteObjectiveErrorBody](shortcut/errors/delete_objective_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_objective(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Objective, GetObjectiveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Objective returns information about a chosen Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objectives.with_raw_response.get_objective(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Objective
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectiveErrorBody
```

**Async**

```python
result = await async_client.objectives.with_raw_response.get_objective(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Objective
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objective_public_id</code> | <code>int</code> | The ID of the Objective. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Objective](shortcut/models/objective.py), [GetObjectiveErrorBody](shortcut/errors/get_objective_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Objective](shortcut/models/objective.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetObjectiveErrorBody](shortcut/errors/get_objective_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_objective_health(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, GetObjectiveHealthErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current health for the specified Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objectives.with_raw_response.get_objective_health(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectiveHealthErrorBody
```

**Async**

```python
result = await async_client.objectives.with_raw_response.get_objective_health(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Health
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetObjectiveHealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objective_public_id</code> | <code>int</code> | The unique ID of the Objective. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Health](shortcut/models/health.py), [GetObjectiveHealthErrorBody](shortcut/errors/get_objective_health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Health](shortcut/models/health.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetObjectiveHealthErrorBody](shortcut/errors/get_objective_health_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_objective_epics(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[EpicSlim], ListObjectiveEpicsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Epics within the Objective.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objectives.with_raw_response.list_objective_epics(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectiveEpicsErrorBody
```

**Async**

```python
result = await async_client.objectives.with_raw_response.list_objective_epics(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EpicSlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectiveEpicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objective_public_id</code> | <code>int</code> | The ID of the Objective. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;, [ListObjectiveEpicsErrorBody](shortcut/errors/list_objective_epics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[EpicSlim](shortcut/models/epic_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListObjectiveEpicsErrorBody](shortcut/errors/list_objective_epics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_objective_healths(objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Health], ListObjectiveHealthsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the history of health statuses for the specified Objective, most recent first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objectives.with_raw_response.list_objective_healths(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Health]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectiveHealthsErrorBody
```

**Async**

```python
result = await async_client.objectives.with_raw_response.list_objective_healths(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Health]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectiveHealthsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objective_public_id</code> | <code>int</code> | The unique ID of the Objective. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Health](shortcut/models/health.py)&#93;, [ListObjectiveHealthsErrorBody](shortcut/errors/list_objective_healths_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Health](shortcut/models/health.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListObjectiveHealthsErrorBody](shortcut/errors/list_objective_healths_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_objectives(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Objective], ListObjectivesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Objectives returns a list of all Objectives and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objectives.with_raw_response.list_objectives()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Objective]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectivesErrorBody
```

**Async**

```python
result = await async_client.objectives.with_raw_response.list_objectives()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Objective]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListObjectivesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Objective](shortcut/models/objective.py)&#93;, [ListObjectivesErrorBody](shortcut/errors/list_objectives_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Objective](shortcut/models/objective.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListObjectivesErrorBody](shortcut/errors/list_objectives_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_objective(objective_public_id: int, body: UpdateObjective | UpdateObjectiveDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Objective, UpdateObjectiveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Objective can be used to update Objective properties.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.objectives.with_raw_response.update_objective(1, UpdateObjective())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Objective
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateObjectiveErrorBody
```

**Async**

```python
result = await async_client.objectives.with_raw_response.update_objective(1, UpdateObjective())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Objective
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateObjectiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objective_public_id</code> | <code>int</code> | The ID of the Objective. |
| <code>body</code> | <code>[UpdateObjective](shortcut/models/update_objective.py) \| [UpdateObjectiveDict](shortcut/models/update_objective.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Objective](shortcut/models/objective.py), [UpdateObjectiveErrorBody](shortcut/errors/update_objective_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Objective](shortcut/models/objective.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateObjectiveErrorBody](shortcut/errors/update_objective_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](shortcut/apis/projects.py)

<details>
<summary><code>def create_project(body: CreateProject | CreateProjectDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, CreateProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Project is used to create a new Shortcut Project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.create_project(CreateProject(name="some example string", team_id=1))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.create_project(
    CreateProject(name="some example string", team_id=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateProject](shortcut/models/create_project.py) \| [CreateProjectDict](shortcut/models/create_project.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Project](shortcut/models/project.py), [CreateProjectErrorBody](shortcut/errors/create_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](shortcut/models/project.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateProjectErrorBody](shortcut/errors/create_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_project(project_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.delete_project(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.delete_project(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_public_id</code> | <code>int</code> | The unique ID of the Project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteProjectErrorBody](shortcut/errors/delete_project_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteProjectErrorBody](shortcut/errors/delete_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_project(project_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, GetProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Project returns information about the selected Project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.get_project(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_project(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_public_id</code> | <code>int</code> | The unique ID of the Project. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Project](shortcut/models/project.py), [GetProjectErrorBody](shortcut/errors/get_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](shortcut/models/project.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetProjectErrorBody](shortcut/errors/get_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_projects(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Project], ListProjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Projects returns a list of all Projects and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.list_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Project]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectsErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.list_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Project]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Project](shortcut/models/project.py)&#93;, [ListProjectsErrorBody](shortcut/errors/list_projects_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Project](shortcut/models/project.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListProjectsErrorBody](shortcut/errors/list_projects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_stories(project_public_id: int, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], ListStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Stories returns a list of all Stories in a selected Project and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.list_stories(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListStoriesErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.list_stories(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_public_id</code> | <code>int</code> | The unique ID of the Project. |
| <code>includes_description</code> | <code>bool \| None</code> | A true/false boolean indicating whether to return Stories with their descriptions.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [ListStoriesErrorBody](shortcut/errors/list_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListStoriesErrorBody](shortcut/errors/list_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_project(project_public_id: int, body: UpdateProject | UpdateProjectDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, UpdateProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Project can be used to change properties of a Project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.update_project(1, UpdateProject())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.update_project(1, UpdateProject())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_public_id</code> | <code>int</code> | The unique ID of the Project. |
| <code>body</code> | <code>[UpdateProject](shortcut/models/update_project.py) \| [UpdateProjectDict](shortcut/models/update_project.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Project](shortcut/models/project.py), [UpdateProjectErrorBody](shortcut/errors/update_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](shortcut/models/project.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateProjectErrorBody](shortcut/errors/update_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Repositories

> Source: [Repositories](shortcut/apis/repositories.py)

<details>
<summary><code>def get_repository(repo_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Repository, GetRepositoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Repository returns information about the selected Repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.repositories.with_raw_response.get_repository(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Repository
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRepositoryErrorBody
```

**Async**

```python
result = await async_client.repositories.with_raw_response.get_repository(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Repository
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repo_public_id</code> | <code>int</code> | The unique ID of the Repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Repository](shortcut/models/repository.py), [GetRepositoryErrorBody](shortcut/errors/get_repository_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Repository](shortcut/models/repository.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetRepositoryErrorBody](shortcut/errors/get_repository_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_repositories(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Repository], ListRepositoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Repositories returns a list of all Repositories and their attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.repositories.with_raw_response.list_repositories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Repository]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRepositoriesErrorBody
```

**Async**

```python
result = await async_client.repositories.with_raw_response.list_repositories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Repository]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRepositoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Repository](shortcut/models/repository.py)&#93;, [ListRepositoriesErrorBody](shortcut/errors/list_repositories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Repository](shortcut/models/repository.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListRepositoriesErrorBody](shortcut/errors/list_repositories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](shortcut/apis/search.py)

<details>
<summary><code>def search(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResults, SearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>page_size</code> | <code>int \| None</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250.<br>**Default**: <code>None</code> |
| <code>detail</code> | <code>[DetailOrStr](shortcut/models/enums/detail.py) \| None</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full".<br>**Default**: <code>None</code> |
| <code>next_</code> | <code>str \| None</code> | The next page token.<br>**Default**: <code>None</code> |
| <code>entity_types</code> | <code>list&#91;[EntityTypeOrStr](shortcut/models/enums/entity_type.py)&#93; \| None</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[SearchResults](shortcut/models/search_results.py), [SearchErrorBody](shortcut/errors/search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResults](shortcut/models/search_results.py)</code> -- Resource

**On `Failure`**: `error` is <code>[SearchErrorBody](shortcut/errors/search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[MaxSearchResultsExceededError](shortcut/models/max_search_results_exceeded_error.py)</code> |
| 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_documents(title: str, *, archived: bool | None = None, created_by_me: bool | None = None, followed_by_me: bool | None = None, page_size: int | None = None, next_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DocSearchResults, SearchDocumentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Documents lets you search Documents based on desired parameters.
Supports structured filters: title, archived, created_by_me, followed_by_me.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search_documents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchDocumentsErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search_documents("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DocSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>title</code> | <code>str</code> | Search text to match against document titles. Supports fuzzy matching. Required. |
| <code>archived</code> | <code>bool \| None</code> | When true, find archived documents. When false, find non-archived documents.<br>**Default**: <code>None</code> |
| <code>created_by_me</code> | <code>bool \| None</code> | When true, find documents created by the current user. When false, find documents NOT created by current user.<br>**Default**: <code>None</code> |
| <code>followed_by_me</code> | <code>bool \| None</code> | When true, find documents that the current user is following. When false, find documents NOT followed.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250.<br>**Default**: <code>None</code> |
| <code>next_</code> | <code>str \| None</code> | The next page token.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[DocSearchResults](shortcut/models/doc_search_results.py), [SearchDocumentsErrorBody](shortcut/errors/search_documents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DocSearchResults](shortcut/models/doc_search_results.py)</code> -- Resource

**On `Failure`**: `error` is <code>[SearchDocumentsErrorBody](shortcut/errors/search_documents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[MaxSearchResultsExceededError](shortcut/models/max_search_results_exceeded_error.py)</code> |
| 403 | <code>[DisabledFeatureError](shortcut/models/disabled_feature_error.py)</code> |
| 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_epics(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EpicSearchResults, SearchEpicsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search_epics("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EpicSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchEpicsErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search_epics("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EpicSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchEpicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>page_size</code> | <code>int \| None</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250.<br>**Default**: <code>None</code> |
| <code>detail</code> | <code>[DetailOrStr](shortcut/models/enums/detail.py) \| None</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full".<br>**Default**: <code>None</code> |
| <code>next_</code> | <code>str \| None</code> | The next page token.<br>**Default**: <code>None</code> |
| <code>entity_types</code> | <code>list&#91;[EntityTypeOrStr](shortcut/models/enums/entity_type.py)&#93; \| None</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[EpicSearchResults](shortcut/models/epic_search_results.py), [SearchEpicsErrorBody](shortcut/errors/search_epics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EpicSearchResults](shortcut/models/epic_search_results.py)</code> -- Resource

**On `Failure`**: `error` is <code>[SearchEpicsErrorBody](shortcut/errors/search_epics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[MaxSearchResultsExceededError](shortcut/models/max_search_results_exceeded_error.py)</code> |
| 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_iterations(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IterationSearchResults, SearchIterationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search_iterations("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IterationSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchIterationsErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search_iterations("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IterationSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchIterationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>page_size</code> | <code>int \| None</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250.<br>**Default**: <code>None</code> |
| <code>detail</code> | <code>[DetailOrStr](shortcut/models/enums/detail.py) \| None</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full".<br>**Default**: <code>None</code> |
| <code>next_</code> | <code>str \| None</code> | The next page token.<br>**Default**: <code>None</code> |
| <code>entity_types</code> | <code>list&#91;[EntityTypeOrStr](shortcut/models/enums/entity_type.py)&#93; \| None</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[IterationSearchResults](shortcut/models/iteration_search_results.py), [SearchIterationsErrorBody](shortcut/errors/search_iterations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IterationSearchResults](shortcut/models/iteration_search_results.py)</code> -- Resource

**On `Failure`**: `error` is <code>[SearchIterationsErrorBody](shortcut/errors/search_iterations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[MaxSearchResultsExceededError](shortcut/models/max_search_results_exceeded_error.py)</code> |
| 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_milestones(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectiveSearchResults, SearchMilestonesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search_milestones("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectiveSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchMilestonesErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search_milestones("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectiveSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchMilestonesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>page_size</code> | <code>int \| None</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250.<br>**Default**: <code>None</code> |
| <code>detail</code> | <code>[DetailOrStr](shortcut/models/enums/detail.py) \| None</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full".<br>**Default**: <code>None</code> |
| <code>next_</code> | <code>str \| None</code> | The next page token.<br>**Default**: <code>None</code> |
| <code>entity_types</code> | <code>list&#91;[EntityTypeOrStr](shortcut/models/enums/entity_type.py)&#93; \| None</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[ObjectiveSearchResults](shortcut/models/objective_search_results.py), [SearchMilestonesErrorBody](shortcut/errors/search_milestones_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectiveSearchResults](shortcut/models/objective_search_results.py)</code> -- Resource

**On `Failure`**: `error` is <code>[SearchMilestonesErrorBody](shortcut/errors/search_milestones_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[MaxSearchResultsExceededError](shortcut/models/max_search_results_exceeded_error.py)</code> |
| 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_objectives(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ObjectiveSearchResults, SearchObjectivesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search_objectives("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectiveSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchObjectivesErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search_objectives("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ObjectiveSearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchObjectivesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>page_size</code> | <code>int \| None</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250.<br>**Default**: <code>None</code> |
| <code>detail</code> | <code>[DetailOrStr](shortcut/models/enums/detail.py) \| None</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full".<br>**Default**: <code>None</code> |
| <code>next_</code> | <code>str \| None</code> | The next page token.<br>**Default**: <code>None</code> |
| <code>entity_types</code> | <code>list&#91;[EntityTypeOrStr](shortcut/models/enums/entity_type.py)&#93; \| None</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[ObjectiveSearchResults](shortcut/models/objective_search_results.py), [SearchObjectivesErrorBody](shortcut/errors/search_objectives_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ObjectiveSearchResults](shortcut/models/objective_search_results.py)</code> -- Resource

**On `Failure`**: `error` is <code>[SearchObjectivesErrorBody](shortcut/errors/search_objectives_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[MaxSearchResultsExceededError](shortcut/models/max_search_results_exceeded_error.py)</code> |
| 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_stories(query: str, *, page_size: int | None = None, detail: DetailOrStr | None = None, next_: str | None = None, entity_types: list[EntityTypeOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StorySearchResults, SearchStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search_stories("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StorySearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchStoriesErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search_stories("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StorySearchResults
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>page_size</code> | <code>int \| None</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250.<br>**Default**: <code>None</code> |
| <code>detail</code> | <code>[DetailOrStr](shortcut/models/enums/detail.py) \| None</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full".<br>**Default**: <code>None</code> |
| <code>next_</code> | <code>str \| None</code> | The next page token.<br>**Default**: <code>None</code> |
| <code>entity_types</code> | <code>list&#91;[EntityTypeOrStr](shortcut/models/enums/entity_type.py)&#93; \| None</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[StorySearchResults](shortcut/models/story_search_results.py), [SearchStoriesErrorBody](shortcut/errors/search_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StorySearchResults](shortcut/models/story_search_results.py)</code> -- Resource

**On `Failure`**: `error` is <code>[SearchStoriesErrorBody](shortcut/errors/search_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[MaxSearchResultsExceededError](shortcut/models/max_search_results_exceeded_error.py)</code> |
| 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Stories

> Source: [Stories](shortcut/apis/stories.py)

<details>
<summary><code>def create_multiple_stories(body: CreateStories | CreateStoriesDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], CreateMultipleStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as Create Story.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.create_multiple_stories(
    CreateStories(stories=[CreateStoryParams(name="some example string")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMultipleStoriesErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.create_multiple_stories(
    CreateStories(stories=[CreateStoryParams(name="some example string")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMultipleStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateStories](shortcut/models/create_stories.py) \| [CreateStoriesDict](shortcut/models/create_stories.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [CreateMultipleStoriesErrorBody](shortcut/errors/create_multiple_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[CreateMultipleStoriesErrorBody](shortcut/errors/create_multiple_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_story(body: CreateStoryParams | CreateStoryParamsDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Story, CreateStoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Story is used to add a new story to your Shortcut Workspace.
This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.create_story(CreateStoryParams(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Story
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.create_story(CreateStoryParams(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Story
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateStoryParams](shortcut/models/create_story_params.py) \| [CreateStoryParamsDict](shortcut/models/create_story_params.py)</code> | Request parameters for creating a story. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Story](shortcut/models/story.py), [CreateStoryErrorBody](shortcut/errors/create_story_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Story](shortcut/models/story.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateStoryErrorBody](shortcut/errors/create_story_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_story_comment(story_public_id: int, body: CreateStoryComment | CreateStoryCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoryComment, CreateStoryCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Comment allows you to create a Comment on any Story.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.create_story_comment(1, CreateStoryComment(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryCommentErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.create_story_comment(
    1, CreateStoryComment(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story that the Comment is in. |
| <code>body</code> | <code>[CreateStoryComment](shortcut/models/create_story_comment.py) \| [CreateStoryCommentDict](shortcut/models/create_story_comment.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[StoryComment](shortcut/models/story_comment.py), [CreateStoryCommentErrorBody](shortcut/errors/create_story_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoryComment](shortcut/models/story_comment.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateStoryCommentErrorBody](shortcut/errors/create_story_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_story_from_template(body: CreateStoryFromTemplateParams | CreateStoryFromTemplateParamsDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Story, CreateStoryFromTemplateErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.create_story_from_template(
    CreateStoryFromTemplateParams(story_template_id=UUID("00000000-0000-0000-0000-000000000000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Story
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryFromTemplateErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.create_story_from_template(
    CreateStoryFromTemplateParams(story_template_id=UUID("00000000-0000-0000-0000-000000000000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Story
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryFromTemplateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateStoryFromTemplateParams](shortcut/models/create_story_from_template_params.py) \| [CreateStoryFromTemplateParamsDict](shortcut/models/create_story_from_template_params.py)</code> | Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Story](shortcut/models/story.py), [CreateStoryFromTemplateErrorBody](shortcut/errors/create_story_from_template_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Story](shortcut/models/story.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateStoryFromTemplateErrorBody](shortcut/errors/create_story_from_template_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_story_reaction(story_public_id: int, comment_public_id: int, body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StoryReaction], CreateStoryReactionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a reaction to a story comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.create_story_reaction(
    1, 1, CreateOrDeleteStoryReaction(emoji="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StoryReaction]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryReactionErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.create_story_reaction(
    1, 1, CreateOrDeleteStoryReaction(emoji="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StoryReaction]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryReactionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story that the Comment is in. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the Comment. |
| <code>body</code> | <code>[CreateOrDeleteStoryReaction](shortcut/models/create_or_delete_story_reaction.py) \| [CreateOrDeleteStoryReactionDict](shortcut/models/create_or_delete_story_reaction.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StoryReaction](shortcut/models/story_reaction.py)&#93;, [CreateStoryReactionErrorBody](shortcut/errors/create_story_reaction_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StoryReaction](shortcut/models/story_reaction.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[CreateStoryReactionErrorBody](shortcut/errors/create_story_reaction_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_task(story_public_id: int, body: CreateTask | CreateTaskDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Task, CreateTaskErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Task is used to create a new task in a Story.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.create_task(1, CreateTask(description="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Task
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTaskErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.create_task(1, CreateTask(description="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Task
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story that the Task will be in. |
| <code>body</code> | <code>[CreateTask](shortcut/models/create_task.py) \| [CreateTaskDict](shortcut/models/create_task.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Task](shortcut/models/task.py), [CreateTaskErrorBody](shortcut/errors/create_task_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Task](shortcut/models/task.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateTaskErrorBody](shortcut/errors/create_task_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_multiple_stories(body: DeleteStories | DeleteStoriesDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteMultipleStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Multiple Stories allows you to delete multiple archived stories at once.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.delete_multiple_stories(DeleteStories(story_ids=[1]))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMultipleStoriesErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.delete_multiple_stories(DeleteStories(story_ids=[1]))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMultipleStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeleteStories](shortcut/models/delete_stories.py) \| [DeleteStoriesDict](shortcut/models/delete_stories.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteMultipleStoriesErrorBody](shortcut/errors/delete_multiple_stories_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteMultipleStoriesErrorBody](shortcut/errors/delete_multiple_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_story(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteStoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Story can be used to delete any Story.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.delete_story(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStoryErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.delete_story(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteStoryErrorBody](shortcut/errors/delete_story_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteStoryErrorBody](shortcut/errors/delete_story_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_story_comment(story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteStoryCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Comment from any story.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.delete_story_comment(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStoryCommentErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.delete_story_comment(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStoryCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story that the Comment is in. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the Comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteStoryCommentErrorBody](shortcut/errors/delete_story_comment_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteStoryCommentErrorBody](shortcut/errors/delete_story_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_story_reaction(story_public_id: int, comment_public_id: int, body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteStoryReactionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a reaction from any story comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.delete_story_reaction(
    1, 1, CreateOrDeleteStoryReaction(emoji="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStoryReactionErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.delete_story_reaction(
    1, 1, CreateOrDeleteStoryReaction(emoji="some example string")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStoryReactionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story that the Comment is in. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the Comment. |
| <code>body</code> | <code>[CreateOrDeleteStoryReaction](shortcut/models/create_or_delete_story_reaction.py) \| [CreateOrDeleteStoryReactionDict](shortcut/models/create_or_delete_story_reaction.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteStoryReactionErrorBody](shortcut/errors/delete_story_reaction_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteStoryReactionErrorBody](shortcut/errors/delete_story_reaction_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_task(story_public_id: int, task_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteTaskErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Task can be used to delete any previously created Task on a Story.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.delete_task(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTaskErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.delete_task(1, 1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The unique ID of the Story this Task is associated with. |
| <code>task_public_id</code> | <code>int</code> | The unique ID of the Task. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteTaskErrorBody](shortcut/errors/delete_task_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteTaskErrorBody](shortcut/errors/delete_task_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_story(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Story, GetStoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Story returns information about a chosen Story.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.get_story(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Story
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.get_story(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Story
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Story](shortcut/models/story.py), [GetStoryErrorBody](shortcut/errors/get_story_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Story](shortcut/models/story.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetStoryErrorBody](shortcut/errors/get_story_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_story_comment(story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoryComment, GetStoryCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Comment is used to get Comment information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.get_story_comment(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryCommentErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.get_story_comment(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story that the Comment is in. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the Comment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[StoryComment](shortcut/models/story_comment.py), [GetStoryCommentErrorBody](shortcut/errors/get_story_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoryComment](shortcut/models/story_comment.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetStoryCommentErrorBody](shortcut/errors/get_story_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_task(story_public_id: int, task_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Task, GetTaskErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a chosen Task.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.get_task(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Task
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.get_task(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Task
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The unique ID of the Story this Task is associated with. |
| <code>task_public_id</code> | <code>int</code> | The unique ID of the Task. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Task](shortcut/models/task.py), [GetTaskErrorBody](shortcut/errors/get_task_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Task](shortcut/models/task.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetTaskErrorBody](shortcut/errors/get_task_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_story_comment(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StoryComment], ListStoryCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Comments associated with a Story

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.list_story_comment(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StoryComment]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListStoryCommentErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.list_story_comment(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StoryComment]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListStoryCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story that the Comment is in. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StoryComment](shortcut/models/story_comment.py)&#93;, [ListStoryCommentErrorBody](shortcut/errors/list_story_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StoryComment](shortcut/models/story_comment.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListStoryCommentErrorBody](shortcut/errors/list_story_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_story_sub_tasks(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], ListStorySubTasksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.list_story_sub_tasks(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListStorySubTasksErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.list_story_sub_tasks(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListStorySubTasksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [ListStorySubTasksErrorBody](shortcut/errors/list_story_sub_tasks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListStorySubTasksErrorBody](shortcut/errors/list_story_sub_tasks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query_stories(body: SearchStories | SearchStoriesDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], QueryStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Stories lets you search Stories based on desired parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.query_stories(SearchStories())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryStoriesErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.query_stories(SearchStories())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchStories](shortcut/models/search_stories.py) \| [SearchStoriesDict](shortcut/models/search_stories.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [QueryStoriesErrorBody](shortcut/errors/query_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[QueryStoriesErrorBody](shortcut/errors/query_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def story_history(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[History], StoryHistoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.story_history(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[History]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StoryHistoryErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.story_history(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[History]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StoryHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[History](shortcut/models/history.py)&#93;, [StoryHistoryErrorBody](shortcut/errors/story_history_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[History](shortcut/models/history.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[StoryHistoryErrorBody](shortcut/errors/story_history_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unlink_comment_thread_from_slack(story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoryComment, UnlinkCommentThreadFromSlackErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.unlink_comment_thread_from_slack(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnlinkCommentThreadFromSlackErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.unlink_comment_thread_from_slack(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnlinkCommentThreadFromSlackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story to unlink. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the Comment to unlink. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[StoryComment](shortcut/models/story_comment.py), [UnlinkCommentThreadFromSlackErrorBody](shortcut/errors/unlink_comment_thread_from_slack_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoryComment](shortcut/models/story_comment.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UnlinkCommentThreadFromSlackErrorBody](shortcut/errors/unlink_comment_thread_from_slack_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_multiple_stories(body: UpdateStories | UpdateStoriesDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[StorySlim], UpdateMultipleStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Multiple Stories allows you to make changes to numerous stories at once.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.update_multiple_stories(UpdateStories(story_ids=[1]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMultipleStoriesErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.update_multiple_stories(UpdateStories(story_ids=[1]))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[StorySlim]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMultipleStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateStories](shortcut/models/update_stories.py) \| [UpdateStoriesDict](shortcut/models/update_stories.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;, [UpdateMultipleStoriesErrorBody](shortcut/errors/update_multiple_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[StorySlim](shortcut/models/story_slim.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateMultipleStoriesErrorBody](shortcut/errors/update_multiple_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_story(story_public_id: int, body: UpdateStory | UpdateStoryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Story, UpdateStoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Story can be used to update Story properties.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.update_story(1, UpdateStory())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Story
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStoryErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.update_story(1, UpdateStory())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Story
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The unique identifier of this story. |
| <code>body</code> | <code>[UpdateStory](shortcut/models/update_story.py) \| [UpdateStoryDict](shortcut/models/update_story.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Story](shortcut/models/story.py), [UpdateStoryErrorBody](shortcut/errors/update_story_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Story](shortcut/models/story.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateStoryErrorBody](shortcut/errors/update_story_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_story_comment(story_public_id: int, comment_public_id: int, body: UpdateStoryComment | UpdateStoryCommentDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoryComment, UpdateStoryCommentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Comment replaces the text of the existing Comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.update_story_comment(1, 1, UpdateStoryComment(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStoryCommentErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.update_story_comment(
    1, 1, UpdateStoryComment(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryComment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStoryCommentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The ID of the Story that the Comment is in. |
| <code>comment_public_id</code> | <code>int</code> | The ID of the Comment |
| <code>body</code> | <code>[UpdateStoryComment](shortcut/models/update_story_comment.py) \| [UpdateStoryCommentDict](shortcut/models/update_story_comment.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[StoryComment](shortcut/models/story_comment.py), [UpdateStoryCommentErrorBody](shortcut/errors/update_story_comment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoryComment](shortcut/models/story_comment.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateStoryCommentErrorBody](shortcut/errors/update_story_comment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_task(story_public_id: int, task_public_id: int, body: UpdateTask | UpdateTaskDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Task, UpdateTaskErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Task can be used to update Task properties.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories.with_raw_response.update_task(1, 1, UpdateTask())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Task
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTaskErrorBody
```

**Async**

```python
result = await async_client.stories.with_raw_response.update_task(1, 1, UpdateTask())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Task
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_public_id</code> | <code>int</code> | The unique identifier of the parent Story. |
| <code>task_public_id</code> | <code>int</code> | The unique identifier of the Task you wish to update. |
| <code>body</code> | <code>[UpdateTask](shortcut/models/update_task.py) \| [UpdateTaskDict](shortcut/models/update_task.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Task](shortcut/models/task.py), [UpdateTaskErrorBody](shortcut/errors/update_task_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Task](shortcut/models/task.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateTaskErrorBody](shortcut/errors/update_task_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## StoryLinks

> Source: [StoryLinks](shortcut/apis/story_links.py)

<details>
<summary><code>def create_story_link(body: CreateStoryLink | CreateStoryLinkDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoryLink, CreateStoryLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence: subject -> verb -> object.

The subject story acts on the object Story; the object story is the direct object of the sentence.

The subject story "blocks", "duplicates", or "relates to" the object story. Examples:
- "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state.
- "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived).
- "story 7 relates to story 3”

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.story_links.with_raw_response.create_story_link(
    CreateStoryLink(verb=VerbShortcutStoryLinksApi.BLOCKS, subject_id=1, object_id=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryLinkErrorBody
```

**Async**

```python
result = await async_client.story_links.with_raw_response.create_story_link(
    CreateStoryLink(verb=VerbShortcutStoryLinksApi.BLOCKS, subject_id=1, object_id=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateStoryLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateStoryLink](shortcut/models/create_story_link.py) \| [CreateStoryLinkDict](shortcut/models/create_story_link.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[StoryLink](shortcut/models/story_link.py), [CreateStoryLinkErrorBody](shortcut/errors/create_story_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoryLink](shortcut/models/story_link.py)</code> -- Resource

**On `Failure`**: `error` is <code>[CreateStoryLinkErrorBody](shortcut/errors/create_story_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_story_link(story_link_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteStoryLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the relationship between the stories for the given Story Link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.story_links.with_raw_response.delete_story_link(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStoryLinkErrorBody
```

**Async**

```python
result = await async_client.story_links.with_raw_response.delete_story_link(1)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteStoryLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_link_public_id</code> | <code>int</code> | The unique ID of the Story Link. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;None, [DeleteStoryLinkErrorBody](shortcut/errors/delete_story_link_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteStoryLinkErrorBody](shortcut/errors/delete_story_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_story_link(story_link_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoryLink, GetStoryLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the stories and their relationship for the given Story Link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.story_links.with_raw_response.get_story_link(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryLinkErrorBody
```

**Async**

```python
result = await async_client.story_links.with_raw_response.get_story_link(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetStoryLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_link_public_id</code> | <code>int</code> | The unique ID of the Story Link. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[StoryLink](shortcut/models/story_link.py), [GetStoryLinkErrorBody](shortcut/errors/get_story_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoryLink](shortcut/models/story_link.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetStoryLinkErrorBody](shortcut/errors/get_story_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_story_link(story_link_public_id: int, body: UpdateStoryLink | UpdateStoryLinkDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StoryLink, UpdateStoryLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the stories and/or the relationship for the given Story Link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.story_links.with_raw_response.update_story_link(1, UpdateStoryLink())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStoryLinkErrorBody
```

**Async**

```python
result = await async_client.story_links.with_raw_response.update_story_link(1, UpdateStoryLink())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StoryLink
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateStoryLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_link_public_id</code> | <code>int</code> | The unique ID of the Story Link. |
| <code>body</code> | <code>[UpdateStoryLink](shortcut/models/update_story_link.py) \| [UpdateStoryLinkDict](shortcut/models/update_story_link.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[StoryLink](shortcut/models/story_link.py), [UpdateStoryLinkErrorBody](shortcut/errors/update_story_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StoryLink](shortcut/models/story_link.py)</code> -- Resource

**On `Failure`**: `error` is <code>[UpdateStoryLinkErrorBody](shortcut/errors/update_story_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Workflows

> Source: [Workflows](shortcut/apis/workflows.py)

<details>
<summary><code>def get_workflow(workflow_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Workflow, GetWorkflowErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Workflow returns information about a chosen Workflow.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.workflows.with_raw_response.get_workflow(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Workflow
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowErrorBody
```

**Async**

```python
result = await async_client.workflows.with_raw_response.get_workflow(1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Workflow
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workflow_public_id</code> | <code>int</code> | The ID of the Workflow. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;[Workflow](shortcut/models/workflow.py), [GetWorkflowErrorBody](shortcut/errors/get_workflow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Workflow](shortcut/models/workflow.py)</code> -- Resource

**On `Failure`**: `error` is <code>[GetWorkflowErrorBody](shortcut/errors/get_workflow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_workflows(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Workflow], ListWorkflowsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Workflows in the Workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.workflows.with_raw_response.list_workflows()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Workflow]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWorkflowsErrorBody
```

**Async**

```python
result = await async_client.workflows.with_raw_response.list_workflows()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Workflow]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWorkflowsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](shortcut/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](shortcut/core/results.py)&#91;list&#91;[Workflow](shortcut/models/workflow.py)&#93;, [ListWorkflowsErrorBody](shortcut/errors/list_workflows_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Workflow](shortcut/models/workflow.py)&#93;</code> -- Resource

**On `Failure`**: `error` is <code>[ListWorkflowsErrorBody](shortcut/errors/list_workflows_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 422 | <code>[RawError](shortcut/core/results.py)</code> |
| anything unmapped | <code>[RawError](shortcut/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

