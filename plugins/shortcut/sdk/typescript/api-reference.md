# Reference

> Source: [ShortcutClient](src/client.ts)

## Categories

> Source: [Categories](src/resources/categories.ts)

<details>
<summary><code>createCategory(request: Categories.CreateCategoryRequest, options?: RequestOptions): ApiPromise&lt;Category, Categories.CreateCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Category allows you to create a new Category in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.createCategory({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Category
} catch (err) {
  // TODO: Handle 'err' of type Categories.CreateCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories
  .createCategory({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Category
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
| <code>body</code> | <code>[CreateCategory](src/models/create-category.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.createCategory(request)`

- **OnSuccess**: <code>[Category](src/models/category.ts)</code>
- **OnError**: throws <code>[Categories.CreateCategoryError](src/resources/categories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categories.createCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Category, Categories.CreateCategoryError&gt;</code>, with `result.value` of type <code>[Category](src/models/category.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCategory(request: Categories.DeleteCategoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, Categories.DeleteCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Category can be used to delete any Category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.categories.deleteCategory({ categoryPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Categories.DeleteCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.deleteCategory({ categoryPublicId: 1 }).asApiResult();
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
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.deleteCategory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Categories.DeleteCategoryError](src/resources/categories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categories.deleteCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Categories.DeleteCategoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategory(request: Categories.GetCategoryRequest, options?: RequestOptions): ApiPromise&lt;Category, Categories.GetCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Category returns information about the selected Category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.getCategory({ categoryPublicId: 1 });
  // TODO: Handle 'response' of type Category
} catch (err) {
  // TODO: Handle 'err' of type Categories.GetCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.getCategory({ categoryPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Category
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
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.getCategory(request)`

- **OnSuccess**: <code>[Category](src/models/category.ts)</code>
- **OnError**: throws <code>[Categories.GetCategoryError](src/resources/categories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categories.getCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Category, Categories.GetCategoryError&gt;</code>, with `result.value` of type <code>[Category](src/models/category.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategories(options?: RequestOptions): ApiPromise&lt;Category[], Categories.ListCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Categories returns a list of all Categories and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.listCategories();
  // TODO: Handle 'response' of type Category[]
} catch (err) {
  // TODO: Handle 'err' of type Categories.ListCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.listCategories().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Category[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.listCategories()`

- **OnSuccess**: <code>[Category](src/models/category.ts)[]</code>
- **OnError**: throws <code>[Categories.ListCategoriesError](src/resources/categories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categories.listCategories().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Category[], Categories.ListCategoriesError&gt;</code>, with `result.value` of type <code>[Category](src/models/category.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategoryMilestones(request: Categories.ListCategoryMilestonesRequest, options?: RequestOptions): ApiPromise&lt;Milestone[], Categories.ListCategoryMilestonesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Category Milestones returns a list of all Milestones with the Category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.listCategoryMilestones({ categoryPublicId: 1 });
  // TODO: Handle 'response' of type Milestone[]
} catch (err) {
  // TODO: Handle 'err' of type Categories.ListCategoryMilestonesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.listCategoryMilestones({ categoryPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone[]
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
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.listCategoryMilestones(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: throws <code>[Categories.ListCategoryMilestonesError](src/resources/categories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categories.listCategoryMilestones(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone[], Categories.ListCategoryMilestonesError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategoryObjectives(request: Categories.ListCategoryObjectivesRequest, options?: RequestOptions): ApiPromise&lt;Milestone[], Categories.ListCategoryObjectivesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Objectives with the Category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.listCategoryObjectives({ categoryPublicId: 1 });
  // TODO: Handle 'response' of type Milestone[]
} catch (err) {
  // TODO: Handle 'err' of type Categories.ListCategoryObjectivesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.listCategoryObjectives({ categoryPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone[]
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
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.listCategoryObjectives(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: throws <code>[Categories.ListCategoryObjectivesError](src/resources/categories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categories.listCategoryObjectives(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone[], Categories.ListCategoryObjectivesError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCategory(request: Categories.UpdateCategoryRequest, options?: RequestOptions): ApiPromise&lt;Category, Categories.UpdateCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.updateCategory({ categoryPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Category
} catch (err) {
  // TODO: Handle 'err' of type Categories.UpdateCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.updateCategory({ categoryPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Category
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
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category you wish to update. |
| <code>body</code> | <code>[UpdateCategory](src/models/update-category.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.updateCategory(request)`

- **OnSuccess**: <code>[Category](src/models/category.ts)</code>
- **OnError**: throws <code>[Categories.UpdateCategoryError](src/resources/categories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categories.updateCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Category, Categories.UpdateCategoryError&gt;</code>, with `result.value` of type <code>[Category](src/models/category.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](src/resources/custom-fields.ts)

<details>
<summary><code>deleteCustomField(request: CustomFields.DeleteCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomFields.DeleteCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customFields.deleteCustomField({
    customFieldPublicId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.DeleteCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .deleteCustomField({ customFieldPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>customFieldPublicId</code> | <code>string</code> | The unique ID of the CustomField. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.deleteCustomField(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomFields.DeleteCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.deleteCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomFields.DeleteCustomFieldError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomField(request: CustomFields.GetCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomField, CustomFields.GetCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.getCustomField({
    customFieldPublicId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CustomField
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.GetCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .getCustomField({ customFieldPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomField
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
| <code>customFieldPublicId</code> | <code>string</code> | The unique ID of the CustomField. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.getCustomField(request)`

- **OnSuccess**: <code>[CustomField](src/models/custom-field.ts)</code>
- **OnError**: throws <code>[CustomFields.GetCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.getCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomField, CustomFields.GetCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomField](src/models/custom-field.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomFields(options?: RequestOptions): ApiPromise&lt;CustomField[], CustomFields.ListCustomFieldsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.listCustomFields();
  // TODO: Handle 'response' of type CustomField[]
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.ListCustomFieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields.listCustomFields().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomField[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.listCustomFields()`

- **OnSuccess**: <code>[CustomField](src/models/custom-field.ts)[]</code>
- **OnError**: throws <code>[CustomFields.ListCustomFieldsError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.listCustomFields().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomField[], CustomFields.ListCustomFieldsError&gt;</code>, with `result.value` of type <code>[CustomField](src/models/custom-field.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomField(request: CustomFields.UpdateCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomField, CustomFields.UpdateCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Custom Field can be used to update the definition of a Custom Field. The order of items in the 'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the 'values' collection. New enum values may be created inline by including an object in the 'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customFields.updateCustomField({
    customFieldPublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type CustomField
} catch (err) {
  // TODO: Handle 'err' of type CustomFields.UpdateCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customFields
  .updateCustomField({ customFieldPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomField
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
| <code>customFieldPublicId</code> | <code>string</code> | The unique ID of the CustomField. |
| <code>body</code> | <code>[UpdateCustomField](src/models/update-custom-field.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customFields.updateCustomField(request)`

- **OnSuccess**: <code>[CustomField](src/models/custom-field.ts)</code>
- **OnError**: throws <code>[CustomFields.UpdateCustomFieldError](src/resources/custom-fields.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customFields.updateCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomField, CustomFields.UpdateCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomField](src/models/custom-field.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/resources/documents.ts)

<details>
<summary><code>createDoc(request: Documents.CreateDocRequest, options?: RequestOptions): ApiPromise&lt;DocSlim, Documents.CreateDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Doc. Supports markdown or HTML input via content_format parameter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.createDoc({
    body: { title: "some example string", content: "some example string" },
  });
  // TODO: Handle 'response' of type DocSlim
} catch (err) {
  // TODO: Handle 'err' of type Documents.CreateDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .createDoc({ body: { title: "some example string", content: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocSlim
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
| <code>body</code> | <code>[CreateDoc](src/models/create-doc.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.createDoc(request)`

- **OnSuccess**: <code>[DocSlim](src/models/doc-slim.ts)</code>
- **OnError**: throws <code>[Documents.CreateDocError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.createDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocSlim, Documents.CreateDocError&gt;</code>, with `result.value` of type <code>[DocSlim](src/models/doc-slim.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDoc(request: Documents.DeleteDocRequest, options?: RequestOptions): ApiPromise&lt;undefined, Documents.DeleteDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a document is deleted, connected clients will be notified via SSE events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documents.deleteDoc({ docPublicId: "00000000-0000-0000-0000-000000000000", body: {} });
} catch (err) {
  // TODO: Handle 'err' of type Documents.DeleteDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .deleteDoc({ docPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
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
| <code>docPublicId</code> | <code>string</code> | The Doc's public ID |
| <code>body</code> | <code>[GetDoc](src/models/get-doc.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.deleteDoc(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Documents.DeleteDocError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.deleteDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Documents.DeleteDocError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDoc(request: Documents.GetDocRequest, options?: RequestOptions): ApiPromise&lt;Doc, Documents.GetDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Doc by its public ID with content. Use content_format=html query parameter to include HTML content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.getDoc({ docPublicId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type Doc
} catch (err) {
  // TODO: Handle 'err' of type Documents.GetDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .getDoc({ docPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Doc
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
| <code>docPublicId</code> | <code>string</code> | The Doc's public ID |
| <code>contentFormat?</code> | <code>[ContentFormat3](src/models/content-format3.ts)</code> | Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.getDoc(request)`

- **OnSuccess**: <code>[Doc](src/models/doc.ts)</code>
- **OnError**: throws <code>[Documents.GetDocError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.getDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Doc, Documents.GetDocError&gt;</code>, with `result.value` of type <code>[Doc](src/models/doc.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linkDocumentToEpic(request: Documents.LinkDocumentToEpicRequest, options?: RequestOptions): ApiPromise&lt;undefined, Documents.LinkDocumentToEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a relationship between a Document and an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documents.linkDocumentToEpic({
    docPublicId: "00000000-0000-0000-0000-000000000000",
    epicPublicId: 1,
  });
} catch (err) {
  // TODO: Handle 'err' of type Documents.LinkDocumentToEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .linkDocumentToEpic({ docPublicId: "00000000-0000-0000-0000-000000000000", epicPublicId: 1 })
  .asApiResult();
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
| <code>docPublicId</code> | <code>string</code> | The public ID of the Document. |
| <code>epicPublicId</code> | <code>number</code> | The public ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.linkDocumentToEpic(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Documents.LinkDocumentToEpicError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.linkDocumentToEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Documents.LinkDocumentToEpicError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocs(options?: RequestOptions): ApiPromise&lt;DocSlim[], Documents.ListDocsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Docs returns a list of Doc that the current user can read.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.listDocs();
  // TODO: Handle 'response' of type DocSlim[]
} catch (err) {
  // TODO: Handle 'err' of type Documents.ListDocsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.listDocs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.listDocs()`

- **OnSuccess**: <code>[DocSlim](src/models/doc-slim.ts)[]</code>
- **OnError**: throws <code>[Documents.ListDocsError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.listDocs().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocSlim[], Documents.ListDocsError&gt;</code>, with `result.value` of type <code>[DocSlim](src/models/doc-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocumentEpics(request: Documents.ListDocumentEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], Documents.ListDocumentEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Epics related to this Document.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.listDocumentEpics({
    docPublicId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type Documents.ListDocumentEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .listDocumentEpics({ docPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
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
| <code>docPublicId</code> | <code>string</code> | The public ID of the Document. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.listDocumentEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[Documents.ListDocumentEpicsError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.listDocumentEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], Documents.ListDocumentEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unlinkDocumentFromEpic(request: Documents.UnlinkDocumentFromEpicRequest, options?: RequestOptions): ApiPromise&lt;undefined, Documents.UnlinkDocumentFromEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a relationship between a Document and an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.documents.unlinkDocumentFromEpic({
    docPublicId: "00000000-0000-0000-0000-000000000000",
    epicPublicId: 1,
  });
} catch (err) {
  // TODO: Handle 'err' of type Documents.UnlinkDocumentFromEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .unlinkDocumentFromEpic({ docPublicId: "00000000-0000-0000-0000-000000000000", epicPublicId: 1 })
  .asApiResult();
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
| <code>docPublicId</code> | <code>string</code> | The public ID of the Document. |
| <code>epicPublicId</code> | <code>number</code> | The public ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.unlinkDocumentFromEpic(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Documents.UnlinkDocumentFromEpicError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.unlinkDocumentFromEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Documents.UnlinkDocumentFromEpicError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDoc(request: Documents.UpdateDocRequest, options?: RequestOptions): ApiPromise&lt;Doc, Documents.UpdateDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing Doc's title and/or content. Supports markdown or HTML input via content_format parameter. When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected Tiptap clients to refresh. (2) For non-migrated docs, CKEditor cache is flushed and SSE events notify connected CKEditor users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.updateDoc({
    docPublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type Doc
} catch (err) {
  // TODO: Handle 'err' of type Documents.UpdateDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .updateDoc({ docPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Doc
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
| <code>docPublicId</code> | <code>string</code> | The Doc's public ID |
| <code>body</code> | <code>[UpdateDoc](src/models/update-doc.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.updateDoc(request)`

- **OnSuccess**: <code>[Doc](src/models/doc.ts)</code>
- **OnError**: throws <code>[Documents.UpdateDocError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.updateDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Doc, Documents.UpdateDocError&gt;</code>, with `result.value` of type <code>[Doc](src/models/doc.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EntityTemplates

> Source: [EntityTemplates](src/resources/entity-templates.ts)

<details>
<summary><code>createEntityTemplate(request: EntityTemplates.CreateEntityTemplateRequest, options?: RequestOptions): ApiPromise&lt;EntityTemplate, EntityTemplates.CreateEntityTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new entity template for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entityTemplates.createEntityTemplate({
    body: { name: "some example string", storyContents: {} },
  });
  // TODO: Handle 'response' of type EntityTemplate
} catch (err) {
  // TODO: Handle 'err' of type EntityTemplates.CreateEntityTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entityTemplates
  .createEntityTemplate({ body: { name: "some example string", storyContents: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityTemplate
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
| <code>body</code> | <code>[CreateEntityTemplate](src/models/create-entity-template.ts)</code> | Request parameters for creating an entirely new entity template. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entityTemplates.createEntityTemplate(request)`

- **OnSuccess**: <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: throws <code>[EntityTemplates.CreateEntityTemplateError](src/resources/entity-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entityTemplates.createEntityTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityTemplate, EntityTemplates.CreateEntityTemplateError&gt;</code>, with `result.value` of type <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEntityTemplate(request: EntityTemplates.DeleteEntityTemplateRequest, options?: RequestOptions): ApiPromise&lt;undefined, EntityTemplates.DeleteEntityTemplateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.entityTemplates.deleteEntityTemplate({
    entityTemplatePublicId: "00000000-0000-0000-0000-000000000000",
  });
} catch (err) {
  // TODO: Handle 'err' of type EntityTemplates.DeleteEntityTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entityTemplates
  .deleteEntityTemplate({ entityTemplatePublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
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
| <code>entityTemplatePublicId</code> | <code>string</code> | The unique ID of the entity template. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entityTemplates.deleteEntityTemplate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EntityTemplates.DeleteEntityTemplateError](src/resources/entity-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entityTemplates.deleteEntityTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EntityTemplates.DeleteEntityTemplateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableStoryTemplates(options?: RequestOptions): ApiPromise&lt;undefined, EntityTemplates.DisableStoryTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables the Story Template feature for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.entityTemplates.disableStoryTemplates();
} catch (err) {
  // TODO: Handle 'err' of type EntityTemplates.DisableStoryTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entityTemplates.disableStoryTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entityTemplates.disableStoryTemplates()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EntityTemplates.DisableStoryTemplatesError](src/resources/entity-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entityTemplates.disableStoryTemplates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EntityTemplates.DisableStoryTemplatesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableStoryTemplates(options?: RequestOptions): ApiPromise&lt;undefined, EntityTemplates.EnableStoryTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables the Story Template feature for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.entityTemplates.enableStoryTemplates();
} catch (err) {
  // TODO: Handle 'err' of type EntityTemplates.EnableStoryTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entityTemplates.enableStoryTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entityTemplates.enableStoryTemplates()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[EntityTemplates.EnableStoryTemplatesError](src/resources/entity-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entityTemplates.enableStoryTemplates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, EntityTemplates.EnableStoryTemplatesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEntityTemplate(request: EntityTemplates.GetEntityTemplateRequest, options?: RequestOptions): ApiPromise&lt;EntityTemplate, EntityTemplates.GetEntityTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Entity Template returns information about a given entity template.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entityTemplates.getEntityTemplate({
    entityTemplatePublicId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type EntityTemplate
} catch (err) {
  // TODO: Handle 'err' of type EntityTemplates.GetEntityTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entityTemplates
  .getEntityTemplate({ entityTemplatePublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityTemplate
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
| <code>entityTemplatePublicId</code> | <code>string</code> | The unique ID of the entity template. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entityTemplates.getEntityTemplate(request)`

- **OnSuccess**: <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: throws <code>[EntityTemplates.GetEntityTemplateError](src/resources/entity-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entityTemplates.getEntityTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityTemplate, EntityTemplates.GetEntityTemplateError&gt;</code>, with `result.value` of type <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEntityTemplates(options?: RequestOptions): ApiPromise&lt;EntityTemplate[], EntityTemplates.ListEntityTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the entity templates for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entityTemplates.listEntityTemplates();
  // TODO: Handle 'response' of type EntityTemplate[]
} catch (err) {
  // TODO: Handle 'err' of type EntityTemplates.ListEntityTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entityTemplates.listEntityTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityTemplate[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entityTemplates.listEntityTemplates()`

- **OnSuccess**: <code>[EntityTemplate](src/models/entity-template.ts)[]</code>
- **OnError**: throws <code>[EntityTemplates.ListEntityTemplatesError](src/resources/entity-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entityTemplates.listEntityTemplates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityTemplate[], EntityTemplates.ListEntityTemplatesError&gt;</code>, with `result.value` of type <code>[EntityTemplate](src/models/entity-template.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEntityTemplate(request: EntityTemplates.UpdateEntityTemplateRequest, options?: RequestOptions): ApiPromise&lt;EntityTemplate, EntityTemplates.UpdateEntityTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an entity template's name or its contents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entityTemplates.updateEntityTemplate({
    entityTemplatePublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type EntityTemplate
} catch (err) {
  // TODO: Handle 'err' of type EntityTemplates.UpdateEntityTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entityTemplates
  .updateEntityTemplate({ entityTemplatePublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityTemplate
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
| <code>entityTemplatePublicId</code> | <code>string</code> | The unique ID of the template to be updated. |
| <code>body</code> | <code>[UpdateEntityTemplate](src/models/update-entity-template.ts)</code> | Request parameters for changing either a template's name or any of<br>  the attributes it is designed to pre-populate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entityTemplates.updateEntityTemplate(request)`

- **OnSuccess**: <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: throws <code>[EntityTemplates.UpdateEntityTemplateError](src/resources/entity-templates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entityTemplates.updateEntityTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityTemplate, EntityTemplates.UpdateEntityTemplateError&gt;</code>, with `result.value` of type <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EpicWorkflowApi

> Source: [EpicWorkflowApi](src/resources/epic-workflow-api.ts)

<details>
<summary><code>getEpicWorkflow(options?: RequestOptions): ApiPromise&lt;EpicWorkflow, EpicWorkflowApi.GetEpicWorkflowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Epic Workflow for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epicWorkflowApi.getEpicWorkflow();
  // TODO: Handle 'response' of type EpicWorkflow
} catch (err) {
  // TODO: Handle 'err' of type EpicWorkflowApi.GetEpicWorkflowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epicWorkflowApi.getEpicWorkflow().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicWorkflow
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epicWorkflowApi.getEpicWorkflow()`

- **OnSuccess**: <code>[EpicWorkflow](src/models/epic-workflow.ts)</code>
- **OnError**: throws <code>[EpicWorkflowApi.GetEpicWorkflowError](src/resources/epic-workflow-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epicWorkflowApi.getEpicWorkflow().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicWorkflow, EpicWorkflowApi.GetEpicWorkflowError&gt;</code>, with `result.value` of type <code>[EpicWorkflow](src/models/epic-workflow.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Epics

> Source: [Epics](src/resources/epics.ts)

<details>
<summary><code>createEpic(request: Epics.CreateEpicRequest, options?: RequestOptions): ApiPromise&lt;Epic, Epics.CreateEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Epic allows you to create a new Epic in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.createEpic({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Epic
} catch (err) {
  // TODO: Handle 'err' of type Epics.CreateEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.createEpic({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Epic
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
| <code>body</code> | <code>[CreateEpic](src/models/create-epic.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.createEpic(request)`

- **OnSuccess**: <code>[Epic](src/models/epic.ts)</code>
- **OnError**: throws <code>[Epics.CreateEpicError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.createEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Epic, Epics.CreateEpicError&gt;</code>, with `result.value` of type <code>[Epic](src/models/epic.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEpicComment(request: Epics.CreateEpicCommentRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment, Epics.CreateEpicCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a threaded Comment on an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.createEpicComment({
    epicPublicId: 1,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type ThreadedComment
} catch (err) {
  // TODO: Handle 'err' of type Epics.CreateEpicCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics
  .createEpicComment({ epicPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment
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
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>body</code> | <code>[CreateEpicComment](src/models/create-epic-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.createEpicComment(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: throws <code>[Epics.CreateEpicCommentError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.createEpicComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment, Epics.CreateEpicCommentError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEpicCommentComment(request: Epics.CreateEpicCommentCommentRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment, Epics.CreateEpicCommentCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a nested Comment reply to an existing Epic Comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.createEpicCommentComment({
    epicPublicId: 1,
    commentPublicId: 1,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type ThreadedComment
} catch (err) {
  // TODO: Handle 'err' of type Epics.CreateEpicCommentCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics
  .createEpicCommentComment({ epicPublicId: 1, commentPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment
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
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the parent Epic Comment. |
| <code>body</code> | <code>[CreateCommentComment](src/models/create-comment-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.createEpicCommentComment(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: throws <code>[Epics.CreateEpicCommentCommentError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.createEpicCommentComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment, Epics.CreateEpicCommentCommentError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEpicHealth(request: Epics.CreateEpicHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, Epics.CreateEpicHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new health status for the specified Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.createEpicHealth({ epicPublicId: 1, body: { status: Status1.AtRisk } });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type Epics.CreateEpicHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics
  .createEpicHealth({ epicPublicId: 1, body: { status: Status1.AtRisk } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
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
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |
| <code>body</code> | <code>[CreateEpicHealth](src/models/create-epic-health.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.createEpicHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[Epics.CreateEpicHealthError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.createEpicHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, Epics.CreateEpicHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEpic(request: Epics.DeleteEpicRequest, options?: RequestOptions): ApiPromise&lt;undefined, Epics.DeleteEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.epics.deleteEpic({ epicPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Epics.DeleteEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.deleteEpic({ epicPublicId: 1 }).asApiResult();
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
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.deleteEpic(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Epics.DeleteEpicError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.deleteEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Epics.DeleteEpicError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEpicComment(request: Epics.DeleteEpicCommentRequest, options?: RequestOptions): ApiPromise&lt;undefined, Epics.DeleteEpicCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a Comment from an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.epics.deleteEpicComment({ epicPublicId: 1, commentPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Epics.DeleteEpicCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.deleteEpicComment({ epicPublicId: 1, commentPublicId: 1 }).asApiResult();
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
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.deleteEpicComment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Epics.DeleteEpicCommentError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.deleteEpicComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Epics.DeleteEpicCommentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEpic(request: Epics.GetEpicRequest, options?: RequestOptions): ApiPromise&lt;Epic, Epics.GetEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Epic returns information about the selected Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.getEpic({ epicPublicId: 1 });
  // TODO: Handle 'response' of type Epic
} catch (err) {
  // TODO: Handle 'err' of type Epics.GetEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.getEpic({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Epic
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
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.getEpic(request)`

- **OnSuccess**: <code>[Epic](src/models/epic.ts)</code>
- **OnError**: throws <code>[Epics.GetEpicError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.getEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Epic, Epics.GetEpicError&gt;</code>, with `result.value` of type <code>[Epic](src/models/epic.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEpicComment(request: Epics.GetEpicCommentRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment, Epics.GetEpicCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns information about the selected Epic Comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.getEpicComment({ epicPublicId: 1, commentPublicId: 1 });
  // TODO: Handle 'response' of type ThreadedComment
} catch (err) {
  // TODO: Handle 'err' of type Epics.GetEpicCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.getEpicComment({ epicPublicId: 1, commentPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment
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
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.getEpicComment(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: throws <code>[Epics.GetEpicCommentError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.getEpicComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment, Epics.GetEpicCommentError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEpicHealth(request: Epics.GetEpicHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, Epics.GetEpicHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current health for the specified Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.getEpicHealth({ epicPublicId: 1 });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type Epics.GetEpicHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.getEpicHealth({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
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
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.getEpicHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[Epics.GetEpicHealthError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.getEpicHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, Epics.GetEpicHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicComments(request: Epics.ListEpicCommentsRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment[], Epics.ListEpicCommentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Comments on an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.listEpicComments({ epicPublicId: 1 });
  // TODO: Handle 'response' of type ThreadedComment[]
} catch (err) {
  // TODO: Handle 'err' of type Epics.ListEpicCommentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.listEpicComments({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment[]
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
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.listEpicComments(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)[]</code>
- **OnError**: throws <code>[Epics.ListEpicCommentsError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.listEpicComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment[], Epics.ListEpicCommentsError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicDocuments(request: Epics.ListEpicDocumentsRequest, options?: RequestOptions): ApiPromise&lt;DocSlim[], Epics.ListEpicDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Documents related to this Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.listEpicDocuments({ epicPublicId: 1 });
  // TODO: Handle 'response' of type DocSlim[]
} catch (err) {
  // TODO: Handle 'err' of type Epics.ListEpicDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.listEpicDocuments({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocSlim[]
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
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.listEpicDocuments(request)`

- **OnSuccess**: <code>[DocSlim](src/models/doc-slim.ts)[]</code>
- **OnError**: throws <code>[Epics.ListEpicDocumentsError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.listEpicDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocSlim[], Epics.ListEpicDocumentsError&gt;</code>, with `result.value` of type <code>[DocSlim](src/models/doc-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicHealths(request: Epics.ListEpicHealthsRequest, options?: RequestOptions): ApiPromise&lt;Health[], Epics.ListEpicHealthsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the history of health statuses for the specified Epic, most recent first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.listEpicHealths({ epicPublicId: 1 });
  // TODO: Handle 'response' of type Health[]
} catch (err) {
  // TODO: Handle 'err' of type Epics.ListEpicHealthsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.listEpicHealths({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health[]
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
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.listEpicHealths(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)[]</code>
- **OnError**: throws <code>[Epics.ListEpicHealthsError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.listEpicHealths(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health[], Epics.ListEpicHealthsError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicStories(request: Epics.ListEpicStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], Epics.ListEpicStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Stories in an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.listEpicStories({ epicPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type Epics.ListEpicStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.listEpicStories({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Stories with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.listEpicStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[Epics.ListEpicStoriesError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.listEpicStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], Epics.ListEpicStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpics(request?: Epics.ListEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], Epics.ListEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Epics returns a list of all Epics and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.listEpics();
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type Epics.ListEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.listEpics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
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
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Epics with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.listEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[Epics.ListEpicsError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.listEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], Epics.ListEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicsPaginated(request?: Epics.ListEpicsPaginatedRequest, options?: RequestOptions): ApiPromise&lt;EpicPaginatedResults, Epics.ListEpicsPaginatedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Epics with pagination returns a paginated list of Epics and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.listEpicsPaginated();
  // TODO: Handle 'response' of type EpicPaginatedResults
} catch (err) {
  // TODO: Handle 'err' of type Epics.ListEpicsPaginatedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.listEpicsPaginated().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicPaginatedResults
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
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Epics with their descriptions. |
| <code>page?</code> | <code>number</code> | The page number to return, starting with 1. Defaults to 1. |
| <code>pageSize?</code> | <code>number</code> | The number of Epics to return per page. Minimum 1, maximum 250, default 10. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.listEpicsPaginated(request)`

- **OnSuccess**: <code>[EpicPaginatedResults](src/models/epic-paginated-results.ts)</code>
- **OnError**: throws <code>[Epics.ListEpicsPaginatedError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.listEpicsPaginated(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicPaginatedResults, Epics.ListEpicsPaginatedError&gt;</code>, with `result.value` of type <code>[EpicPaginatedResults](src/models/epic-paginated-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEpic(request: Epics.UpdateEpicRequest, options?: RequestOptions): ApiPromise&lt;Epic, Epics.UpdateEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.updateEpic({ epicPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Epic
} catch (err) {
  // TODO: Handle 'err' of type Epics.UpdateEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics.updateEpic({ epicPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Epic
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
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |
| <code>body</code> | <code>[UpdateEpic](src/models/update-epic.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.updateEpic(request)`

- **OnSuccess**: <code>[Epic](src/models/epic.ts)</code>
- **OnError**: throws <code>[Epics.UpdateEpicError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.updateEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Epic, Epics.UpdateEpicError&gt;</code>, with `result.value` of type <code>[Epic](src/models/epic.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEpicComment(request: Epics.UpdateEpicCommentRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment, Epics.UpdateEpicCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to update a threaded Comment on an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.epics.updateEpicComment({
    epicPublicId: 1,
    commentPublicId: 1,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type ThreadedComment
} catch (err) {
  // TODO: Handle 'err' of type Epics.UpdateEpicCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.epics
  .updateEpicComment({ epicPublicId: 1, commentPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment
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
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |
| <code>body</code> | <code>[UpdateComment](src/models/update-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.epics.updateEpicComment(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: throws <code>[Epics.UpdateEpicCommentError](src/resources/epics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.epics.updateEpicComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment, Epics.UpdateEpicCommentError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExternalLink

> Source: [ExternalLink](src/resources/external-link.ts)

<details>
<summary><code>getExternalLinkStories(request: ExternalLink.GetExternalLinkStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ExternalLink.GetExternalLinkStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Stories which have a given External Link associated with them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.externalLink.getExternalLinkStories({ externalLink: "some example string" });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ExternalLink.GetExternalLinkStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.externalLink
  .getExternalLinkStories({ externalLink: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>externalLink</code> | <code>string</code> | The external link associated with one or more stories. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.externalLink.getExternalLinkStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ExternalLink.GetExternalLinkStoriesError](src/resources/external-link.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.externalLink.getExternalLinkStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ExternalLink.GetExternalLinkStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Files

> Source: [Files](src/resources/files.ts)

<details>
<summary><code>deleteFile(request: Files.DeleteFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, Files.DeleteFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete File deletes a previously uploaded file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.files.deleteFile({ filePublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Files.DeleteFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.deleteFile({ filePublicId: 1 }).asApiResult();
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
| <code>filePublicId</code> | <code>number</code> | The File’s unique ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.deleteFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Files.DeleteFileError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.deleteFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Files.DeleteFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFile(request: Files.GetFileRequest, options?: RequestOptions): ApiPromise&lt;UploadedFile, Files.GetFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get File returns information about the selected UploadedFile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.getFile({ filePublicId: 1 });
  // TODO: Handle 'response' of type UploadedFile
} catch (err) {
  // TODO: Handle 'err' of type Files.GetFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.getFile({ filePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadedFile
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
| <code>filePublicId</code> | <code>number</code> | The File’s unique ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.getFile(request)`

- **OnSuccess**: <code>[UploadedFile](src/models/uploaded-file.ts)</code>
- **OnError**: throws <code>[Files.GetFileError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.getFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadedFile, Files.GetFileError&gt;</code>, with `result.value` of type <code>[UploadedFile](src/models/uploaded-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFiles(options?: RequestOptions): ApiPromise&lt;UploadedFile[], Files.ListFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Files returns a list of all UploadedFiles in the workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.listFiles();
  // TODO: Handle 'response' of type UploadedFile[]
} catch (err) {
  // TODO: Handle 'err' of type Files.ListFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.listFiles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadedFile[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.listFiles()`

- **OnSuccess**: <code>[UploadedFile](src/models/uploaded-file.ts)[]</code>
- **OnError**: throws <code>[Files.ListFilesError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.listFiles().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadedFile[], Files.ListFilesError&gt;</code>, with `result.value` of type <code>[UploadedFile](src/models/uploaded-file.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFile(request: Files.UpdateFileRequest, options?: RequestOptions): ApiPromise&lt;UploadedFile, Files.UpdateFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update File updates the properties of an UploadedFile (but not its content).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.updateFile({ filePublicId: 1, body: {} });
  // TODO: Handle 'response' of type UploadedFile
} catch (err) {
  // TODO: Handle 'err' of type Files.UpdateFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.updateFile({ filePublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadedFile
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
| <code>filePublicId</code> | <code>number</code> | The unique ID assigned to the file in Shortcut. |
| <code>body</code> | <code>[UpdateFile](src/models/update-file.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.updateFile(request)`

- **OnSuccess**: <code>[UploadedFile](src/models/uploaded-file.ts)</code>
- **OnError**: throws <code>[Files.UpdateFileError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.updateFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadedFile, Files.UpdateFileError&gt;</code>, with `result.value` of type <code>[UploadedFile](src/models/uploaded-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadFiles(request: Files.UploadFilesRequest, options?: RequestOptions): ApiPromise&lt;UploadedFile[], Files.UploadFilesError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.uploadFiles({ file0: new Uint8Array() });
  // TODO: Handle 'response' of type UploadedFile[]
} catch (err) {
  // TODO: Handle 'err' of type Files.UploadFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.uploadFiles({ file0: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadedFile[]
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
| <code>file0</code> | <code>FileInput</code> | A file upload. At least one is required. |
| <code>storyId?</code> | <code>number</code> | The story ID that these files will be associated with. |
| <code>file1?</code> | <code>FileInput</code> | Optional additional files. |
| <code>file2?</code> | <code>FileInput</code> | Optional additional files. |
| <code>file3?</code> | <code>FileInput</code> | Optional additional files. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.uploadFiles(request)`

- **OnSuccess**: <code>[UploadedFile](src/models/uploaded-file.ts)[]</code>
- **OnError**: throws <code>[Files.UploadFilesError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.uploadFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadedFile[], Files.UploadFilesError&gt;</code>, with `result.value` of type <code>[UploadedFile](src/models/uploaded-file.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/resources/groups.ts)

<details>
<summary><code>createGroup(request: Groups.CreateGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, Groups.CreateGroupError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.createGroup({
    body: { mentionName: "some example string", name: "some example string" },
  });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type Groups.CreateGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .createGroup({ body: { mentionName: "some example string", name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
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
| <code>body</code> | <code>[CreateGroup](src/models/create-group.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.createGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[Groups.CreateGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.createGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, Groups.CreateGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroup(request: Groups.GetGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, Groups.GetGroupError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.getGroup({ groupPublicId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type Groups.GetGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .getGroup({ groupPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
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
| <code>groupPublicId</code> | <code>string</code> | The unique ID of the Group. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.getGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[Groups.GetGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.getGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, Groups.GetGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGroupStories(request: Groups.ListGroupStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], Groups.ListGroupStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Stories assigned to the Group. (By default, limited to 1,000).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.listGroupStories({
    groupPublicId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type Groups.ListGroupStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .listGroupStories({ groupPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>groupPublicId</code> | <code>string</code> | The unique ID of the Group. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return. (Defaults to 1000, max 1000) |
| <code>offset?</code> | <code>number</code> | The offset at which to begin returning results. (Defaults to 0) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.listGroupStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[Groups.ListGroupStoriesError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.listGroupStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], Groups.ListGroupStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGroups(request?: Groups.ListGroupsRequest, options?: RequestOptions): ApiPromise&lt;Group[], Groups.ListGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.listGroups();
  // TODO: Handle 'response' of type Group[]
} catch (err) {
  // TODO: Handle 'err' of type Groups.ListGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.listGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group[]
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
| <code>archived?</code> | <code>boolean</code> | Filter groups by their archived state. If true, returns only archived groups. If false, returns only unarchived groups. If not provided, returns all groups |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.listGroups(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)[]</code>
- **OnError**: throws <code>[Groups.ListGroupsError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.listGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group[], Groups.ListGroupsError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGroup(request: Groups.UpdateGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, Groups.UpdateGroupError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.updateGroup({
    groupPublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type Groups.UpdateGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups
  .updateGroup({ groupPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
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
| <code>groupPublicId</code> | <code>string</code> | The unique ID of the Group. |
| <code>body</code> | <code>[UpdateGroup](src/models/update-group.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.updateGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[Groups.UpdateGroupError](src/resources/groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.groups.updateGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, Groups.UpdateGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## HealthApi

> Source: [HealthApi](src/resources/health-api.ts)

<details>
<summary><code>updateHealth(request: HealthApi.UpdateHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, HealthApi.UpdateHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing health status by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.healthApi.updateHealth({
    healthPublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type HealthApi.UpdateHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.healthApi
  .updateHealth({ healthPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
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
| <code>healthPublicId</code> | <code>string</code> | The unique ID of the Health record. |
| <code>body</code> | <code>[UpdateHealth](src/models/update-health.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.healthApi.updateHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[HealthApi.UpdateHealthError](src/resources/health-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.healthApi.updateHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, HealthApi.UpdateHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Integrations

> Source: [Integrations](src/resources/integrations.ts)

<details>
<summary><code>createGenericIntegration(request: Integrations.CreateGenericIntegrationRequest, options?: RequestOptions): ApiPromise&lt;undefined, Integrations.CreateGenericIntegrationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.integrations.createGenericIntegration({ body: { webhookUrl: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type Integrations.CreateGenericIntegrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrations
  .createGenericIntegration({ body: { webhookUrl: "some example string" } })
  .asApiResult();
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
| <code>body</code> | <code>[CreateGenericIntegration](src/models/create-generic-integration.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrations.createGenericIntegration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Integrations.CreateGenericIntegrationError](src/resources/integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrations.createGenericIntegration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Integrations.CreateGenericIntegrationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGenericIntegration(request: Integrations.DeleteGenericIntegrationRequest, options?: RequestOptions): ApiPromise&lt;undefined, Integrations.DeleteGenericIntegrationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.integrations.deleteGenericIntegration({ integrationPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Integrations.DeleteGenericIntegrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrations.deleteGenericIntegration({ integrationPublicId: 1 }).asApiResult();
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
| <code>integrationPublicId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrations.deleteGenericIntegration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Integrations.DeleteGenericIntegrationError](src/resources/integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrations.deleteGenericIntegration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Integrations.DeleteGenericIntegrationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGenericIntegration(request: Integrations.GetGenericIntegrationRequest, options?: RequestOptions): ApiPromise&lt;undefined, Integrations.GetGenericIntegrationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.integrations.getGenericIntegration({ integrationPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Integrations.GetGenericIntegrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrations.getGenericIntegration({ integrationPublicId: 1 }).asApiResult();
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
| <code>integrationPublicId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrations.getGenericIntegration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Integrations.GetGenericIntegrationError](src/resources/integrations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrations.getGenericIntegration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Integrations.GetGenericIntegrationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Iterations

> Source: [Iterations](src/resources/iterations.ts)

<details>
<summary><code>createIteration(request: Iterations.CreateIterationRequest, options?: RequestOptions): ApiPromise&lt;Iteration, Iterations.CreateIterationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.iterations.createIteration({
    body: { name: "some example string", startDate: "some example string", endDate: "some example string" },
  });
  // TODO: Handle 'response' of type Iteration
} catch (err) {
  // TODO: Handle 'err' of type Iterations.CreateIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.iterations
  .createIteration({
    body: { name: "some example string", startDate: "some example string", endDate: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Iteration
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
| <code>body</code> | <code>[CreateIteration](src/models/create-iteration.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.iterations.createIteration(request)`

- **OnSuccess**: <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: throws <code>[Iterations.CreateIterationError](src/resources/iterations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.iterations.createIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Iteration, Iterations.CreateIterationError&gt;</code>, with `result.value` of type <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteIteration(request: Iterations.DeleteIterationRequest, options?: RequestOptions): ApiPromise&lt;undefined, Iterations.DeleteIterationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.iterations.deleteIteration({ iterationPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Iterations.DeleteIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.iterations.deleteIteration({ iterationPublicId: 1 }).asApiResult();
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
| <code>iterationPublicId</code> | <code>number</code> | The unique ID of the Iteration. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.iterations.deleteIteration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Iterations.DeleteIterationError](src/resources/iterations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.iterations.deleteIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Iterations.DeleteIterationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableIterations(options?: RequestOptions): ApiPromise&lt;undefined, Iterations.DisableIterationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables Iterations for the current workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.iterations.disableIterations();
} catch (err) {
  // TODO: Handle 'err' of type Iterations.DisableIterationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.iterations.disableIterations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.iterations.disableIterations()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Iterations.DisableIterationsError](src/resources/iterations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.iterations.disableIterations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Iterations.DisableIterationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableIterations(options?: RequestOptions): ApiPromise&lt;undefined, Iterations.EnableIterationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables Iterations for the current workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.iterations.enableIterations();
} catch (err) {
  // TODO: Handle 'err' of type Iterations.EnableIterationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.iterations.enableIterations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.iterations.enableIterations()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Iterations.EnableIterationsError](src/resources/iterations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.iterations.enableIterations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Iterations.EnableIterationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIteration(request: Iterations.GetIterationRequest, options?: RequestOptions): ApiPromise&lt;Iteration, Iterations.GetIterationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.iterations.getIteration({ iterationPublicId: 1 });
  // TODO: Handle 'response' of type Iteration
} catch (err) {
  // TODO: Handle 'err' of type Iterations.GetIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.iterations.getIteration({ iterationPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Iteration
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
| <code>iterationPublicId</code> | <code>number</code> | The unique ID of the Iteration. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.iterations.getIteration(request)`

- **OnSuccess**: <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: throws <code>[Iterations.GetIterationError](src/resources/iterations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.iterations.getIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Iteration, Iterations.GetIterationError&gt;</code>, with `result.value` of type <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIterationStories(request: Iterations.ListIterationStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], Iterations.ListIterationStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Stories in an Iteration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.iterations.listIterationStories({ iterationPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type Iterations.ListIterationStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.iterations.listIterationStories({ iterationPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>iterationPublicId</code> | <code>number</code> | The unique ID of the Iteration. |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Stories with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.iterations.listIterationStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[Iterations.ListIterationStoriesError](src/resources/iterations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.iterations.listIterationStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], Iterations.ListIterationStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIterations(options?: RequestOptions): ApiPromise&lt;IterationSlim[], Iterations.ListIterationsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.iterations.listIterations();
  // TODO: Handle 'response' of type IterationSlim[]
} catch (err) {
  // TODO: Handle 'err' of type Iterations.ListIterationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.iterations.listIterations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IterationSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.iterations.listIterations()`

- **OnSuccess**: <code>[IterationSlim](src/models/iteration-slim.ts)[]</code>
- **OnError**: throws <code>[Iterations.ListIterationsError](src/resources/iterations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.iterations.listIterations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IterationSlim[], Iterations.ListIterationsError&gt;</code>, with `result.value` of type <code>[IterationSlim](src/models/iteration-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateIteration(request: Iterations.UpdateIterationRequest, options?: RequestOptions): ApiPromise&lt;Iteration, Iterations.UpdateIterationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.iterations.updateIteration({ iterationPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Iteration
} catch (err) {
  // TODO: Handle 'err' of type Iterations.UpdateIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.iterations.updateIteration({ iterationPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Iteration
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
| <code>iterationPublicId</code> | <code>number</code> | The unique ID of the Iteration. |
| <code>body</code> | <code>[UpdateIteration](src/models/update-iteration.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.iterations.updateIteration(request)`

- **OnSuccess**: <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: throws <code>[Iterations.UpdateIterationError](src/resources/iterations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.iterations.updateIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Iteration, Iterations.UpdateIterationError&gt;</code>, with `result.value` of type <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## KeyResults

> Source: [KeyResults](src/resources/key-results.ts)

<details>
<summary><code>getKeyResult(request: KeyResults.GetKeyResultRequest, options?: RequestOptions): ApiPromise&lt;KeyResult, KeyResults.GetKeyResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Key Result returns information about a chosen Key Result.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.keyResults.getKeyResult({
    keyResultPublicId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type KeyResult
} catch (err) {
  // TODO: Handle 'err' of type KeyResults.GetKeyResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.keyResults
  .getKeyResult({ keyResultPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KeyResult
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
| <code>keyResultPublicId</code> | <code>string</code> | The ID of the Key Result. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.keyResults.getKeyResult(request)`

- **OnSuccess**: <code>[KeyResult](src/models/key-result.ts)</code>
- **OnError**: throws <code>[KeyResults.GetKeyResultError](src/resources/key-results.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.keyResults.getKeyResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KeyResult, KeyResults.GetKeyResultError&gt;</code>, with `result.value` of type <code>[KeyResult](src/models/key-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateKeyResult(request: KeyResults.UpdateKeyResultRequest, options?: RequestOptions): ApiPromise&lt;KeyResult, KeyResults.UpdateKeyResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Key Result allows updating a Key Result's name or initial, observed, or target values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.keyResults.updateKeyResult({
    keyResultPublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type KeyResult
} catch (err) {
  // TODO: Handle 'err' of type KeyResults.UpdateKeyResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.keyResults
  .updateKeyResult({ keyResultPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KeyResult
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
| <code>keyResultPublicId</code> | <code>string</code> | The ID of the Key Result. |
| <code>body</code> | <code>[UpdateKeyResult](src/models/update-key-result.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.keyResults.updateKeyResult(request)`

- **OnSuccess**: <code>[KeyResult](src/models/key-result.ts)</code>
- **OnError**: throws <code>[KeyResults.UpdateKeyResultError](src/resources/key-results.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.keyResults.updateKeyResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KeyResult, KeyResults.UpdateKeyResultError&gt;</code>, with `result.value` of type <code>[KeyResult](src/models/key-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Labels

> Source: [Labels](src/resources/labels.ts)

<details>
<summary><code>createLabel(request: Labels.CreateLabelRequest, options?: RequestOptions): ApiPromise&lt;Label, Labels.CreateLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Label allows you to create a new Label in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.createLabel({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Label
} catch (err) {
  // TODO: Handle 'err' of type Labels.CreateLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.createLabel({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Label
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
| <code>body</code> | <code>[CreateLabelParams](src/models/create-label-params.ts)</code> | Request parameters for creating a Label on a Shortcut Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.createLabel(request)`

- **OnSuccess**: <code>[Label](src/models/label.ts)</code>
- **OnError**: throws <code>[Labels.CreateLabelError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.createLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Label, Labels.CreateLabelError&gt;</code>, with `result.value` of type <code>[Label](src/models/label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLabel(request: Labels.DeleteLabelRequest, options?: RequestOptions): ApiPromise&lt;undefined, Labels.DeleteLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Label can be used to delete any Label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.labels.deleteLabel({ labelPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Labels.DeleteLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.deleteLabel({ labelPublicId: 1 }).asApiResult();
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
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.deleteLabel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Labels.DeleteLabelError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.deleteLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Labels.DeleteLabelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabel(request: Labels.GetLabelRequest, options?: RequestOptions): ApiPromise&lt;Label, Labels.GetLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Label returns information about the selected Label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.getLabel({ labelPublicId: 1 });
  // TODO: Handle 'response' of type Label
} catch (err) {
  // TODO: Handle 'err' of type Labels.GetLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.getLabel({ labelPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Label
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
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.getLabel(request)`

- **OnSuccess**: <code>[Label](src/models/label.ts)</code>
- **OnError**: throws <code>[Labels.GetLabelError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.getLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Label, Labels.GetLabelError&gt;</code>, with `result.value` of type <code>[Label](src/models/label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLabelEpics(request: Labels.ListLabelEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], Labels.ListLabelEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Epics with the Label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.listLabelEpics({ labelPublicId: 1 });
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type Labels.ListLabelEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.listLabelEpics({ labelPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
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
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.listLabelEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[Labels.ListLabelEpicsError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.listLabelEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], Labels.ListLabelEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLabelStories(request: Labels.ListLabelStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], Labels.ListLabelStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Stories with the Label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.listLabelStories({ labelPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type Labels.ListLabelStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.listLabelStories({ labelPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label. |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Stories with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.listLabelStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[Labels.ListLabelStoriesError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.listLabelStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], Labels.ListLabelStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLabels(request?: Labels.ListLabelsRequest, options?: RequestOptions): ApiPromise&lt;Label[], Labels.ListLabelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Labels returns a list of all Labels and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.listLabels();
  // TODO: Handle 'response' of type Label[]
} catch (err) {
  // TODO: Handle 'err' of type Labels.ListLabelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.listLabels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Label[]
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
| <code>slim?</code> | <code>boolean</code> | A true/false boolean indicating if the slim versions of the Label should be returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.listLabels(request)`

- **OnSuccess**: <code>[Label](src/models/label.ts)[]</code>
- **OnError**: throws <code>[Labels.ListLabelsError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.listLabels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Label[], Labels.ListLabelsError&gt;</code>, with `result.value` of type <code>[Label](src/models/label.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLabel(request: Labels.UpdateLabelRequest, options?: RequestOptions): ApiPromise&lt;Label, Labels.UpdateLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labels.updateLabel({ labelPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Label
} catch (err) {
  // TODO: Handle 'err' of type Labels.UpdateLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labels.updateLabel({ labelPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Label
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
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label you wish to update. |
| <code>body</code> | <code>[UpdateLabel](src/models/update-label.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labels.updateLabel(request)`

- **OnSuccess**: <code>[Label](src/models/label.ts)</code>
- **OnError**: throws <code>[Labels.UpdateLabelError](src/resources/labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.labels.updateLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Label, Labels.UpdateLabelError&gt;</code>, with `result.value` of type <code>[Label](src/models/label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LinkedFiles

> Source: [LinkedFiles](src/resources/linked-files.ts)

<details>
<summary><code>createLinkedFile(request: LinkedFiles.CreateLinkedFileRequest, options?: RequestOptions): ApiPromise&lt;LinkedFile, LinkedFiles.CreateLinkedFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Linked File allows you to create a new Linked File in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedFiles.createLinkedFile({
    body: {
      name: "some example string",
      type: TypeShortcutLinkedFilesApi.Google,
      url: "some example string",
    },
  });
  // TODO: Handle 'response' of type LinkedFile
} catch (err) {
  // TODO: Handle 'err' of type LinkedFiles.CreateLinkedFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedFiles
  .createLinkedFile({
    body: {
      name: "some example string",
      type: TypeShortcutLinkedFilesApi.Google,
      url: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedFile
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
| <code>body</code> | <code>[CreateLinkedFile](src/models/create-linked-file.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedFiles.createLinkedFile(request)`

- **OnSuccess**: <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: throws <code>[LinkedFiles.CreateLinkedFileError](src/resources/linked-files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedFiles.createLinkedFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedFile, LinkedFiles.CreateLinkedFileError&gt;</code>, with `result.value` of type <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLinkedFile(request: LinkedFiles.DeleteLinkedFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, LinkedFiles.DeleteLinkedFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Linked File can be used to delete any previously attached Linked-File.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.linkedFiles.deleteLinkedFile({ linkedFilePublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type LinkedFiles.DeleteLinkedFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedFiles.deleteLinkedFile({ linkedFilePublicId: 1 }).asApiResult();
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
| <code>linkedFilePublicId</code> | <code>number</code> | The unique identifier of the linked file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedFiles.deleteLinkedFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[LinkedFiles.DeleteLinkedFileError](src/resources/linked-files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedFiles.deleteLinkedFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, LinkedFiles.DeleteLinkedFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLinkedFile(request: LinkedFiles.GetLinkedFileRequest, options?: RequestOptions): ApiPromise&lt;LinkedFile, LinkedFiles.GetLinkedFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get File returns information about the selected Linked File.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedFiles.getLinkedFile({ linkedFilePublicId: 1 });
  // TODO: Handle 'response' of type LinkedFile
} catch (err) {
  // TODO: Handle 'err' of type LinkedFiles.GetLinkedFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedFiles.getLinkedFile({ linkedFilePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedFile
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
| <code>linkedFilePublicId</code> | <code>number</code> | The unique identifier of the linked file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedFiles.getLinkedFile(request)`

- **OnSuccess**: <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: throws <code>[LinkedFiles.GetLinkedFileError](src/resources/linked-files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedFiles.getLinkedFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedFile, LinkedFiles.GetLinkedFileError&gt;</code>, with `result.value` of type <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLinkedFiles(options?: RequestOptions): ApiPromise&lt;LinkedFile[], LinkedFiles.ListLinkedFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Linked Files returns a list of all Linked-Files and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedFiles.listLinkedFiles();
  // TODO: Handle 'response' of type LinkedFile[]
} catch (err) {
  // TODO: Handle 'err' of type LinkedFiles.ListLinkedFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedFiles.listLinkedFiles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedFile[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedFiles.listLinkedFiles()`

- **OnSuccess**: <code>[LinkedFile](src/models/linked-file.ts)[]</code>
- **OnError**: throws <code>[LinkedFiles.ListLinkedFilesError](src/resources/linked-files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedFiles.listLinkedFiles().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedFile[], LinkedFiles.ListLinkedFilesError&gt;</code>, with `result.value` of type <code>[LinkedFile](src/models/linked-file.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLinkedFile(request: LinkedFiles.UpdateLinkedFileRequest, options?: RequestOptions): ApiPromise&lt;LinkedFile, LinkedFiles.UpdateLinkedFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updated Linked File allows you to update properties of a previously attached Linked-File.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkedFiles.updateLinkedFile({ linkedFilePublicId: 1, body: {} });
  // TODO: Handle 'response' of type LinkedFile
} catch (err) {
  // TODO: Handle 'err' of type LinkedFiles.UpdateLinkedFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkedFiles.updateLinkedFile({ linkedFilePublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedFile
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
| <code>linkedFilePublicId</code> | <code>number</code> | The unique identifier of the linked file. |
| <code>body</code> | <code>[UpdateLinkedFile](src/models/update-linked-file.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkedFiles.updateLinkedFile(request)`

- **OnSuccess**: <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: throws <code>[LinkedFiles.UpdateLinkedFileError](src/resources/linked-files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkedFiles.updateLinkedFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedFile, LinkedFiles.UpdateLinkedFileError&gt;</code>, with `result.value` of type <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MemberApi

> Source: [MemberApi](src/resources/member-api.ts)

<details>
<summary><code>getCurrentMemberInfo(options?: RequestOptions): ApiPromise&lt;MemberInfo, MemberApi.GetCurrentMemberInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the authenticated member.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.memberApi.getCurrentMemberInfo();
  // TODO: Handle 'response' of type MemberInfo
} catch (err) {
  // TODO: Handle 'err' of type MemberApi.GetCurrentMemberInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.memberApi.getCurrentMemberInfo().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MemberInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.memberApi.getCurrentMemberInfo()`

- **OnSuccess**: <code>[MemberInfo](src/models/member-info.ts)</code>
- **OnError**: throws <code>[MemberApi.GetCurrentMemberInfoError](src/resources/member-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.memberApi.getCurrentMemberInfo().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MemberInfo, MemberApi.GetCurrentMemberInfoError&gt;</code>, with `result.value` of type <code>[MemberInfo](src/models/member-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Members

> Source: [Members](src/resources/members.ts)

<details>
<summary><code>getMember(request: Members.GetMemberRequest, options?: RequestOptions): ApiPromise&lt;Member, Members.GetMemberError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a Member.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.members.getMember({ memberPublicId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type Member
} catch (err) {
  // TODO: Handle 'err' of type Members.GetMemberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.members
  .getMember({ memberPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Member
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
| <code>memberPublicId</code> | <code>string</code> | The Member's unique ID. |
| <code>orgPublicId?</code> | <code>string</code> | The unique ID of the Organization to limit the lookup to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.members.getMember(request)`

- **OnSuccess**: <code>[Member](src/models/member.ts)</code>
- **OnError**: throws <code>[Members.GetMemberError](src/resources/members.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.members.getMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Member, Members.GetMemberError&gt;</code>, with `result.value` of type <code>[Member](src/models/member.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMembers(request?: Members.ListMembersRequest, options?: RequestOptions): ApiPromise&lt;Member[], Members.ListMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about members of the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.members.listMembers();
  // TODO: Handle 'response' of type Member[]
} catch (err) {
  // TODO: Handle 'err' of type Members.ListMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.members.listMembers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Member[]
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
| <code>orgPublicId?</code> | <code>string</code> | The unique ID of the Organization to limit the list to. |
| <code>disabled?</code> | <code>boolean</code> | Filter members by their disabled state. If true, return only disabled members. If false, return only enabled members. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.members.listMembers(request)`

- **OnSuccess**: <code>[Member](src/models/member.ts)[]</code>
- **OnError**: throws <code>[Members.ListMembersError](src/resources/members.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.members.listMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Member[], Members.ListMembersError&gt;</code>, with `result.value` of type <code>[Member](src/models/member.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Milestones

> Source: [Milestones](src/resources/milestones.ts)

<details>
<summary><code>createMilestone(request: Milestones.CreateMilestoneRequest, options?: RequestOptions): ApiPromise&lt;Milestone, Milestones.CreateMilestoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.milestones.createMilestone({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Milestone
} catch (err) {
  // TODO: Handle 'err' of type Milestones.CreateMilestoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.milestones
  .createMilestone({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone
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
| <code>body</code> | <code>[CreateMilestone](src/models/create-milestone.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.milestones.createMilestone(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: throws <code>[Milestones.CreateMilestoneError](src/resources/milestones.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.milestones.createMilestone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone, Milestones.CreateMilestoneError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMilestone(request: Milestones.DeleteMilestoneRequest, options?: RequestOptions): ApiPromise&lt;undefined, Milestones.DeleteMilestoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.milestones.deleteMilestone({ milestonePublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Milestones.DeleteMilestoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.milestones.deleteMilestone({ milestonePublicId: 1 }).asApiResult();
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
| <code>milestonePublicId</code> | <code>number</code> | The ID of the Milestone. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.milestones.deleteMilestone(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Milestones.DeleteMilestoneError](src/resources/milestones.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.milestones.deleteMilestone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Milestones.DeleteMilestoneError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMilestone(request: Milestones.GetMilestoneRequest, options?: RequestOptions): ApiPromise&lt;Milestone, Milestones.GetMilestoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.milestones.getMilestone({ milestonePublicId: 1 });
  // TODO: Handle 'response' of type Milestone
} catch (err) {
  // TODO: Handle 'err' of type Milestones.GetMilestoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.milestones.getMilestone({ milestonePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone
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
| <code>milestonePublicId</code> | <code>number</code> | The ID of the Milestone. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.milestones.getMilestone(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: throws <code>[Milestones.GetMilestoneError](src/resources/milestones.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.milestones.getMilestone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone, Milestones.GetMilestoneError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMilestoneEpics(request: Milestones.ListMilestoneEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], Milestones.ListMilestoneEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.milestones.listMilestoneEpics({ milestonePublicId: 1 });
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type Milestones.ListMilestoneEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.milestones.listMilestoneEpics({ milestonePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
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
| <code>milestonePublicId</code> | <code>number</code> | The ID of the Milestone. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.milestones.listMilestoneEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[Milestones.ListMilestoneEpicsError](src/resources/milestones.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.milestones.listMilestoneEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], Milestones.ListMilestoneEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMilestones(options?: RequestOptions): ApiPromise&lt;Milestone[], Milestones.ListMilestonesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.milestones.listMilestones();
  // TODO: Handle 'response' of type Milestone[]
} catch (err) {
  // TODO: Handle 'err' of type Milestones.ListMilestonesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.milestones.listMilestones().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.milestones.listMilestones()`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: throws <code>[Milestones.ListMilestonesError](src/resources/milestones.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.milestones.listMilestones().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone[], Milestones.ListMilestonesError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMilestone(request: Milestones.UpdateMilestoneRequest, options?: RequestOptions): ApiPromise&lt;Milestone, Milestones.UpdateMilestoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.milestones.updateMilestone({ milestonePublicId: 1, body: {} });
  // TODO: Handle 'response' of type Milestone
} catch (err) {
  // TODO: Handle 'err' of type Milestones.UpdateMilestoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.milestones.updateMilestone({ milestonePublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone
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
| <code>milestonePublicId</code> | <code>number</code> | The ID of the Milestone. |
| <code>body</code> | <code>[UpdateMilestone](src/models/update-milestone.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.milestones.updateMilestone(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: throws <code>[Milestones.UpdateMilestoneError](src/resources/milestones.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.milestones.updateMilestone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone, Milestones.UpdateMilestoneError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Objectives

> Source: [Objectives](src/resources/objectives.ts)

<details>
<summary><code>createObjective(request: Objectives.CreateObjectiveRequest, options?: RequestOptions): ApiPromise&lt;Objective, Objectives.CreateObjectiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Objective allows you to create a new Objective in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectives.createObjective({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Objective
} catch (err) {
  // TODO: Handle 'err' of type Objectives.CreateObjectiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectives
  .createObjective({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Objective
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
| <code>body</code> | <code>[CreateObjective](src/models/create-objective.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectives.createObjective(request)`

- **OnSuccess**: <code>[Objective](src/models/objective.ts)</code>
- **OnError**: throws <code>[Objectives.CreateObjectiveError](src/resources/objectives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectives.createObjective(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Objective, Objectives.CreateObjectiveError&gt;</code>, with `result.value` of type <code>[Objective](src/models/objective.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createObjectiveHealth(request: Objectives.CreateObjectiveHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, Objectives.CreateObjectiveHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new health status for the specified Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectives.createObjectiveHealth({
    objectivePublicId: 1,
    body: { status: Status1ShortcutObjectivesApi.AtRisk },
  });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type Objectives.CreateObjectiveHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectives
  .createObjectiveHealth({ objectivePublicId: 1, body: { status: Status1ShortcutObjectivesApi.AtRisk } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
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
| <code>objectivePublicId</code> | <code>number</code> | The unique ID of the Objective. |
| <code>body</code> | <code>[CreateObjectiveHealth](src/models/create-objective-health.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectives.createObjectiveHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[Objectives.CreateObjectiveHealthError](src/resources/objectives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectives.createObjectiveHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, Objectives.CreateObjectiveHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteObjective(request: Objectives.DeleteObjectiveRequest, options?: RequestOptions): ApiPromise&lt;undefined, Objectives.DeleteObjectiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Objective can be used to delete any Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.objectives.deleteObjective({ objectivePublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Objectives.DeleteObjectiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectives.deleteObjective({ objectivePublicId: 1 }).asApiResult();
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
| <code>objectivePublicId</code> | <code>number</code> | The ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectives.deleteObjective(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Objectives.DeleteObjectiveError](src/resources/objectives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectives.deleteObjective(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Objectives.DeleteObjectiveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getObjective(request: Objectives.GetObjectiveRequest, options?: RequestOptions): ApiPromise&lt;Objective, Objectives.GetObjectiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Objective returns information about a chosen Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectives.getObjective({ objectivePublicId: 1 });
  // TODO: Handle 'response' of type Objective
} catch (err) {
  // TODO: Handle 'err' of type Objectives.GetObjectiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectives.getObjective({ objectivePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Objective
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
| <code>objectivePublicId</code> | <code>number</code> | The ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectives.getObjective(request)`

- **OnSuccess**: <code>[Objective](src/models/objective.ts)</code>
- **OnError**: throws <code>[Objectives.GetObjectiveError](src/resources/objectives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectives.getObjective(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Objective, Objectives.GetObjectiveError&gt;</code>, with `result.value` of type <code>[Objective](src/models/objective.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getObjectiveHealth(request: Objectives.GetObjectiveHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, Objectives.GetObjectiveHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current health for the specified Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectives.getObjectiveHealth({ objectivePublicId: 1 });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type Objectives.GetObjectiveHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectives.getObjectiveHealth({ objectivePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
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
| <code>objectivePublicId</code> | <code>number</code> | The unique ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectives.getObjectiveHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[Objectives.GetObjectiveHealthError](src/resources/objectives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectives.getObjectiveHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, Objectives.GetObjectiveHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listObjectiveEpics(request: Objectives.ListObjectiveEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], Objectives.ListObjectiveEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Epics within the Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectives.listObjectiveEpics({ objectivePublicId: 1 });
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type Objectives.ListObjectiveEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectives.listObjectiveEpics({ objectivePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
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
| <code>objectivePublicId</code> | <code>number</code> | The ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectives.listObjectiveEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[Objectives.ListObjectiveEpicsError](src/resources/objectives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectives.listObjectiveEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], Objectives.ListObjectiveEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listObjectiveHealths(request: Objectives.ListObjectiveHealthsRequest, options?: RequestOptions): ApiPromise&lt;Health[], Objectives.ListObjectiveHealthsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the history of health statuses for the specified Objective, most recent first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectives.listObjectiveHealths({ objectivePublicId: 1 });
  // TODO: Handle 'response' of type Health[]
} catch (err) {
  // TODO: Handle 'err' of type Objectives.ListObjectiveHealthsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectives.listObjectiveHealths({ objectivePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health[]
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
| <code>objectivePublicId</code> | <code>number</code> | The unique ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectives.listObjectiveHealths(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)[]</code>
- **OnError**: throws <code>[Objectives.ListObjectiveHealthsError](src/resources/objectives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectives.listObjectiveHealths(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health[], Objectives.ListObjectiveHealthsError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listObjectives(options?: RequestOptions): ApiPromise&lt;Objective[], Objectives.ListObjectivesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Objectives returns a list of all Objectives and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectives.listObjectives();
  // TODO: Handle 'response' of type Objective[]
} catch (err) {
  // TODO: Handle 'err' of type Objectives.ListObjectivesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectives.listObjectives().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Objective[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectives.listObjectives()`

- **OnSuccess**: <code>[Objective](src/models/objective.ts)[]</code>
- **OnError**: throws <code>[Objectives.ListObjectivesError](src/resources/objectives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectives.listObjectives().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Objective[], Objectives.ListObjectivesError&gt;</code>, with `result.value` of type <code>[Objective](src/models/objective.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateObjective(request: Objectives.UpdateObjectiveRequest, options?: RequestOptions): ApiPromise&lt;Objective, Objectives.UpdateObjectiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Objective can be used to update Objective properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.objectives.updateObjective({ objectivePublicId: 1, body: {} });
  // TODO: Handle 'response' of type Objective
} catch (err) {
  // TODO: Handle 'err' of type Objectives.UpdateObjectiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.objectives.updateObjective({ objectivePublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Objective
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
| <code>objectivePublicId</code> | <code>number</code> | The ID of the Objective. |
| <code>body</code> | <code>[UpdateObjective](src/models/update-objective.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.objectives.updateObjective(request)`

- **OnSuccess**: <code>[Objective](src/models/objective.ts)</code>
- **OnError**: throws <code>[Objectives.UpdateObjectiveError](src/resources/objectives.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.objectives.updateObjective(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Objective, Objectives.UpdateObjectiveError&gt;</code>, with `result.value` of type <code>[Objective](src/models/objective.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>createProject(request: Projects.CreateProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.CreateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Project is used to create a new Shortcut Project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.createProject({ body: { name: "some example string", teamId: 1 } });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.CreateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .createProject({ body: { name: "some example string", teamId: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
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
| <code>body</code> | <code>[CreateProject](src/models/create-project.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.createProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.CreateProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.createProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.CreateProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProject(request: Projects.DeleteProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, Projects.DeleteProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.deleteProject({ projectPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Projects.DeleteProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.deleteProject({ projectPublicId: 1 }).asApiResult();
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
| <code>projectPublicId</code> | <code>number</code> | The unique ID of the Project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.deleteProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.DeleteProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.deleteProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.DeleteProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.GetProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Project returns information about the selected Project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProject({ projectPublicId: 1 });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.getProject({ projectPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
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
| <code>projectPublicId</code> | <code>number</code> | The unique ID of the Project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.GetProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjects(options?: RequestOptions): ApiPromise&lt;Project[], Projects.ListProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Projects returns a list of all Projects and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.listProjects();
  // TODO: Handle 'response' of type Project[]
} catch (err) {
  // TODO: Handle 'err' of type Projects.ListProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.listProjects().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.listProjects()`

- **OnSuccess**: <code>[Project](src/models/project.ts)[]</code>
- **OnError**: throws <code>[Projects.ListProjectsError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.listProjects().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project[], Projects.ListProjectsError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStories(request: Projects.ListStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], Projects.ListStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Stories returns a list of all Stories in a selected Project and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.listStories({ projectPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type Projects.ListStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.listStories({ projectPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>projectPublicId</code> | <code>number</code> | The unique ID of the Project. |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Stories with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.listStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[Projects.ListStoriesError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.listStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], Projects.ListStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProject(request: Projects.UpdateProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.UpdateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Project can be used to change properties of a Project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.updateProject({ projectPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.UpdateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.updateProject({ projectPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
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
| <code>projectPublicId</code> | <code>number</code> | The unique ID of the Project. |
| <code>body</code> | <code>[UpdateProject](src/models/update-project.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.updateProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.UpdateProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.updateProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.UpdateProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Repositories

> Source: [Repositories](src/resources/repositories.ts)

<details>
<summary><code>getRepository(request: Repositories.GetRepositoryRequest, options?: RequestOptions): ApiPromise&lt;Repository, Repositories.GetRepositoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Repository returns information about the selected Repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.repositories.getRepository({ repoPublicId: 1 });
  // TODO: Handle 'response' of type Repository
} catch (err) {
  // TODO: Handle 'err' of type Repositories.GetRepositoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.repositories.getRepository({ repoPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Repository
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
| <code>repoPublicId</code> | <code>number</code> | The unique ID of the Repository. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.repositories.getRepository(request)`

- **OnSuccess**: <code>[Repository](src/models/repository.ts)</code>
- **OnError**: throws <code>[Repositories.GetRepositoryError](src/resources/repositories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.repositories.getRepository(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Repository, Repositories.GetRepositoryError&gt;</code>, with `result.value` of type <code>[Repository](src/models/repository.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRepositories(options?: RequestOptions): ApiPromise&lt;Repository[], Repositories.ListRepositoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Repositories returns a list of all Repositories and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.repositories.listRepositories();
  // TODO: Handle 'response' of type Repository[]
} catch (err) {
  // TODO: Handle 'err' of type Repositories.ListRepositoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.repositories.listRepositories().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Repository[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.repositories.listRepositories()`

- **OnSuccess**: <code>[Repository](src/models/repository.ts)[]</code>
- **OnError**: throws <code>[Repositories.ListRepositoriesError](src/resources/repositories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.repositories.listRepositories().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Repository[], Repositories.ListRepositoriesError&gt;</code>, with `result.value` of type <code>[Repository](src/models/repository.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise&lt;SearchResults, Search.SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.search({ query: "some example string" });
  // TODO: Handle 'response' of type SearchResults
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.search({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResults
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
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.search(request)`

- **OnSuccess**: <code>[SearchResults](src/models/search-results.ts)</code>
- **OnError**: throws <code>[Search.SearchError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResults, Search.SearchError&gt;</code>, with `result.value` of type <code>[SearchResults](src/models/search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDocuments(request: Search.SearchDocumentsRequest, options?: RequestOptions): ApiPromise&lt;DocSearchResults, Search.SearchDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Documents lets you search Documents based on desired parameters.
Supports structured filters: title, archived, created_by_me, followed_by_me.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchDocuments({ title: "some example string" });
  // TODO: Handle 'response' of type DocSearchResults
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchDocuments({ title: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocSearchResults
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
| <code>title</code> | <code>string</code> | Search text to match against document titles. Supports fuzzy matching. Required. |
| <code>archived?</code> | <code>boolean</code> | When true, find archived documents. When false, find non-archived documents. |
| <code>createdByMe?</code> | <code>boolean</code> | When true, find documents created by the current user. When false, find documents NOT created by current user. |
| <code>followedByMe?</code> | <code>boolean</code> | When true, find documents that the current user is following. When false, find documents NOT followed. |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>next?</code> | <code>string</code> | The next page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchDocuments(request)`

- **OnSuccess**: <code>[DocSearchResults](src/models/doc-search-results.ts)</code>
- **OnError**: throws <code>[Search.SearchDocumentsError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocSearchResults, Search.SearchDocumentsError&gt;</code>, with `result.value` of type <code>[DocSearchResults](src/models/doc-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchEpics(request: Search.SearchEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSearchResults, Search.SearchEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchEpics({ query: "some example string" });
  // TODO: Handle 'response' of type EpicSearchResults
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchEpics({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSearchResults
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
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchEpics(request)`

- **OnSuccess**: <code>[EpicSearchResults](src/models/epic-search-results.ts)</code>
- **OnError**: throws <code>[Search.SearchEpicsError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSearchResults, Search.SearchEpicsError&gt;</code>, with `result.value` of type <code>[EpicSearchResults](src/models/epic-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchIterations(request: Search.SearchIterationsRequest, options?: RequestOptions): ApiPromise&lt;IterationSearchResults, Search.SearchIterationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchIterations({ query: "some example string" });
  // TODO: Handle 'response' of type IterationSearchResults
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchIterationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchIterations({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IterationSearchResults
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
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchIterations(request)`

- **OnSuccess**: <code>[IterationSearchResults](src/models/iteration-search-results.ts)</code>
- **OnError**: throws <code>[Search.SearchIterationsError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchIterations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IterationSearchResults, Search.SearchIterationsError&gt;</code>, with `result.value` of type <code>[IterationSearchResults](src/models/iteration-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchMilestones(request: Search.SearchMilestonesRequest, options?: RequestOptions): ApiPromise&lt;ObjectiveSearchResults, Search.SearchMilestonesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchMilestones({ query: "some example string" });
  // TODO: Handle 'response' of type ObjectiveSearchResults
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchMilestonesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchMilestones({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectiveSearchResults
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
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchMilestones(request)`

- **OnSuccess**: <code>[ObjectiveSearchResults](src/models/objective-search-results.ts)</code>
- **OnError**: throws <code>[Search.SearchMilestonesError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchMilestones(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectiveSearchResults, Search.SearchMilestonesError&gt;</code>, with `result.value` of type <code>[ObjectiveSearchResults](src/models/objective-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchObjectives(request: Search.SearchObjectivesRequest, options?: RequestOptions): ApiPromise&lt;ObjectiveSearchResults, Search.SearchObjectivesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchObjectives({ query: "some example string" });
  // TODO: Handle 'response' of type ObjectiveSearchResults
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchObjectivesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchObjectives({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectiveSearchResults
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
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchObjectives(request)`

- **OnSuccess**: <code>[ObjectiveSearchResults](src/models/objective-search-results.ts)</code>
- **OnError**: throws <code>[Search.SearchObjectivesError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchObjectives(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectiveSearchResults, Search.SearchObjectivesError&gt;</code>, with `result.value` of type <code>[ObjectiveSearchResults](src/models/objective-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchStories(request: Search.SearchStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySearchResults, Search.SearchStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchStories({ query: "some example string" });
  // TODO: Handle 'response' of type StorySearchResults
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchStories({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySearchResults
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
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchStories(request)`

- **OnSuccess**: <code>[StorySearchResults](src/models/story-search-results.ts)</code>
- **OnError**: throws <code>[Search.SearchStoriesError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySearchResults, Search.SearchStoriesError&gt;</code>, with `result.value` of type <code>[StorySearchResults](src/models/story-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Stories

> Source: [Stories](src/resources/stories.ts)

<details>
<summary><code>createMultipleStories(request: Stories.CreateMultipleStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], Stories.CreateMultipleStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as Create Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.createMultipleStories({
    body: { stories: [{ name: "some example string" }] },
  });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type Stories.CreateMultipleStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .createMultipleStories({ body: { stories: [{ name: "some example string" }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>body</code> | <code>[CreateStories](src/models/create-stories.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.createMultipleStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[Stories.CreateMultipleStoriesError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.createMultipleStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], Stories.CreateMultipleStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStory(request: Stories.CreateStoryRequest, options?: RequestOptions): ApiPromise&lt;Story, Stories.CreateStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Story is used to add a new story to your Shortcut Workspace.
This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.createStory({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Story
} catch (err) {
  // TODO: Handle 'err' of type Stories.CreateStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.createStory({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Story
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
| <code>body</code> | <code>[CreateStoryParams](src/models/create-story-params.ts)</code> | Request parameters for creating a story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.createStory(request)`

- **OnSuccess**: <code>[Story](src/models/story.ts)</code>
- **OnError**: throws <code>[Stories.CreateStoryError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.createStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Story, Stories.CreateStoryError&gt;</code>, with `result.value` of type <code>[Story](src/models/story.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStoryComment(request: Stories.CreateStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;StoryComment, Stories.CreateStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Comment allows you to create a Comment on any Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.createStoryComment({
    storyPublicId: 1,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type StoryComment
} catch (err) {
  // TODO: Handle 'err' of type Stories.CreateStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .createStoryComment({ storyPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>body</code> | <code>[CreateStoryComment](src/models/create-story-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.createStoryComment(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: throws <code>[Stories.CreateStoryCommentError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.createStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment, Stories.CreateStoryCommentError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStoryFromTemplate(request: Stories.CreateStoryFromTemplateRequest, options?: RequestOptions): ApiPromise&lt;Story, Stories.CreateStoryFromTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.createStoryFromTemplate({
    body: { storyTemplateId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type Story
} catch (err) {
  // TODO: Handle 'err' of type Stories.CreateStoryFromTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .createStoryFromTemplate({ body: { storyTemplateId: "00000000-0000-0000-0000-000000000000" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Story
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
| <code>body</code> | <code>[CreateStoryFromTemplateParams](src/models/create-story-from-template-params.ts)</code> | Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.createStoryFromTemplate(request)`

- **OnSuccess**: <code>[Story](src/models/story.ts)</code>
- **OnError**: throws <code>[Stories.CreateStoryFromTemplateError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.createStoryFromTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Story, Stories.CreateStoryFromTemplateError&gt;</code>, with `result.value` of type <code>[Story](src/models/story.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStoryReaction(request: Stories.CreateStoryReactionRequest, options?: RequestOptions): ApiPromise&lt;StoryReaction[], Stories.CreateStoryReactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a reaction to a story comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.createStoryReaction({
    storyPublicId: 1,
    commentPublicId: 1,
    body: { emoji: "some example string" },
  });
  // TODO: Handle 'response' of type StoryReaction[]
} catch (err) {
  // TODO: Handle 'err' of type Stories.CreateStoryReactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .createStoryReaction({ storyPublicId: 1, commentPublicId: 1, body: { emoji: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryReaction[]
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |
| <code>body</code> | <code>[CreateOrDeleteStoryReaction](src/models/create-or-delete-story-reaction.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.createStoryReaction(request)`

- **OnSuccess**: <code>[StoryReaction](src/models/story-reaction.ts)[]</code>
- **OnError**: throws <code>[Stories.CreateStoryReactionError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.createStoryReaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryReaction[], Stories.CreateStoryReactionError&gt;</code>, with `result.value` of type <code>[StoryReaction](src/models/story-reaction.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTask(request: Stories.CreateTaskRequest, options?: RequestOptions): ApiPromise&lt;Task, Stories.CreateTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Task is used to create a new task in a Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.createTask({
    storyPublicId: 1,
    body: { description: "some example string" },
  });
  // TODO: Handle 'response' of type Task
} catch (err) {
  // TODO: Handle 'err' of type Stories.CreateTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .createTask({ storyPublicId: 1, body: { description: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Task
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Task will be in. |
| <code>body</code> | <code>[CreateTask](src/models/create-task.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.createTask(request)`

- **OnSuccess**: <code>[Task](src/models/task.ts)</code>
- **OnError**: throws <code>[Stories.CreateTaskError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.createTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Task, Stories.CreateTaskError&gt;</code>, with `result.value` of type <code>[Task](src/models/task.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMultipleStories(request: Stories.DeleteMultipleStoriesRequest, options?: RequestOptions): ApiPromise&lt;undefined, Stories.DeleteMultipleStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Multiple Stories allows you to delete multiple archived stories at once.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stories.deleteMultipleStories({ body: { storyIds: [1] } });
} catch (err) {
  // TODO: Handle 'err' of type Stories.DeleteMultipleStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.deleteMultipleStories({ body: { storyIds: [1] } }).asApiResult();
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
| <code>body</code> | <code>[DeleteStories](src/models/delete-stories.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.deleteMultipleStories(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Stories.DeleteMultipleStoriesError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.deleteMultipleStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Stories.DeleteMultipleStoriesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStory(request: Stories.DeleteStoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, Stories.DeleteStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Story can be used to delete any Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stories.deleteStory({ storyPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Stories.DeleteStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.deleteStory({ storyPublicId: 1 }).asApiResult();
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.deleteStory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Stories.DeleteStoryError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.deleteStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Stories.DeleteStoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStoryComment(request: Stories.DeleteStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;undefined, Stories.DeleteStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Comment from any story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stories.deleteStoryComment({ storyPublicId: 1, commentPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Stories.DeleteStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .deleteStoryComment({ storyPublicId: 1, commentPublicId: 1 })
  .asApiResult();
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.deleteStoryComment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Stories.DeleteStoryCommentError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.deleteStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Stories.DeleteStoryCommentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStoryReaction(request: Stories.DeleteStoryReactionRequest, options?: RequestOptions): ApiPromise&lt;undefined, Stories.DeleteStoryReactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a reaction from any story comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stories.deleteStoryReaction({
    storyPublicId: 1,
    commentPublicId: 1,
    body: { emoji: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type Stories.DeleteStoryReactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .deleteStoryReaction({ storyPublicId: 1, commentPublicId: 1, body: { emoji: "some example string" } })
  .asApiResult();
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |
| <code>body</code> | <code>[CreateOrDeleteStoryReaction](src/models/create-or-delete-story-reaction.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.deleteStoryReaction(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Stories.DeleteStoryReactionError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.deleteStoryReaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Stories.DeleteStoryReactionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTask(request: Stories.DeleteTaskRequest, options?: RequestOptions): ApiPromise&lt;undefined, Stories.DeleteTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Task can be used to delete any previously created Task on a Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.stories.deleteTask({ storyPublicId: 1, taskPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type Stories.DeleteTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.deleteTask({ storyPublicId: 1, taskPublicId: 1 }).asApiResult();
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
| <code>storyPublicId</code> | <code>number</code> | The unique ID of the Story this Task is associated with. |
| <code>taskPublicId</code> | <code>number</code> | The unique ID of the Task. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.deleteTask(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Stories.DeleteTaskError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.deleteTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Stories.DeleteTaskError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStory(request: Stories.GetStoryRequest, options?: RequestOptions): ApiPromise&lt;Story, Stories.GetStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Story returns information about a chosen Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.getStory({ storyPublicId: 1 });
  // TODO: Handle 'response' of type Story
} catch (err) {
  // TODO: Handle 'err' of type Stories.GetStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.getStory({ storyPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Story
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.getStory(request)`

- **OnSuccess**: <code>[Story](src/models/story.ts)</code>
- **OnError**: throws <code>[Stories.GetStoryError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.getStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Story, Stories.GetStoryError&gt;</code>, with `result.value` of type <code>[Story](src/models/story.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoryComment(request: Stories.GetStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;StoryComment, Stories.GetStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Comment is used to get Comment information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.getStoryComment({ storyPublicId: 1, commentPublicId: 1 });
  // TODO: Handle 'response' of type StoryComment
} catch (err) {
  // TODO: Handle 'err' of type Stories.GetStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.getStoryComment({ storyPublicId: 1, commentPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.getStoryComment(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: throws <code>[Stories.GetStoryCommentError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.getStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment, Stories.GetStoryCommentError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTask(request: Stories.GetTaskRequest, options?: RequestOptions): ApiPromise&lt;Task, Stories.GetTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a chosen Task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.getTask({ storyPublicId: 1, taskPublicId: 1 });
  // TODO: Handle 'response' of type Task
} catch (err) {
  // TODO: Handle 'err' of type Stories.GetTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.getTask({ storyPublicId: 1, taskPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Task
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
| <code>storyPublicId</code> | <code>number</code> | The unique ID of the Story this Task is associated with. |
| <code>taskPublicId</code> | <code>number</code> | The unique ID of the Task. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.getTask(request)`

- **OnSuccess**: <code>[Task](src/models/task.ts)</code>
- **OnError**: throws <code>[Stories.GetTaskError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.getTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Task, Stories.GetTaskError&gt;</code>, with `result.value` of type <code>[Task](src/models/task.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStoryComment(request: Stories.ListStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;StoryComment[], Stories.ListStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Comments associated with a Story

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.listStoryComment({ storyPublicId: 1 });
  // TODO: Handle 'response' of type StoryComment[]
} catch (err) {
  // TODO: Handle 'err' of type Stories.ListStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.listStoryComment({ storyPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment[]
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.listStoryComment(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)[]</code>
- **OnError**: throws <code>[Stories.ListStoryCommentError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.listStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment[], Stories.ListStoryCommentError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStorySubTasks(request: Stories.ListStorySubTasksRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], Stories.ListStorySubTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.listStorySubTasks({ storyPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type Stories.ListStorySubTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.listStorySubTasks({ storyPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.listStorySubTasks(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[Stories.ListStorySubTasksError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.listStorySubTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], Stories.ListStorySubTasksError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryStories(request: Stories.QueryStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], Stories.QueryStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Stories lets you search Stories based on desired parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.queryStories({ body: {} });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type Stories.QueryStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.queryStories({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>body</code> | <code>[SearchStories](src/models/search-stories.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.queryStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[Stories.QueryStoriesError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.queryStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], Stories.QueryStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storyHistory(request: Stories.StoryHistoryRequest, options?: RequestOptions): ApiPromise&lt;History[], Stories.StoryHistoryError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.storyHistory({ storyPublicId: 1 });
  // TODO: Handle 'response' of type History[]
} catch (err) {
  // TODO: Handle 'err' of type Stories.StoryHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.storyHistory({ storyPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type History[]
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.storyHistory(request)`

- **OnSuccess**: <code>[History](src/models/history.ts)[]</code>
- **OnError**: throws <code>[Stories.StoryHistoryError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.storyHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;History[], Stories.StoryHistoryError&gt;</code>, with `result.value` of type <code>[History](src/models/history.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unlinkCommentThreadFromSlack(request: Stories.UnlinkCommentThreadFromSlackRequest, options?: RequestOptions): ApiPromise&lt;StoryComment, Stories.UnlinkCommentThreadFromSlackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.unlinkCommentThreadFromSlack({
    storyPublicId: 1,
    commentPublicId: 1,
  });
  // TODO: Handle 'response' of type StoryComment
} catch (err) {
  // TODO: Handle 'err' of type Stories.UnlinkCommentThreadFromSlackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .unlinkCommentThreadFromSlack({ storyPublicId: 1, commentPublicId: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story to unlink. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment to unlink. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.unlinkCommentThreadFromSlack(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: throws <code>[Stories.UnlinkCommentThreadFromSlackError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.unlinkCommentThreadFromSlack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment, Stories.UnlinkCommentThreadFromSlackError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMultipleStories(request: Stories.UpdateMultipleStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], Stories.UpdateMultipleStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Multiple Stories allows you to make changes to numerous stories at once.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.updateMultipleStories({ body: { storyIds: [1] } });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type Stories.UpdateMultipleStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.updateMultipleStories({ body: { storyIds: [1] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
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
| <code>body</code> | <code>[UpdateStories](src/models/update-stories.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.updateMultipleStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[Stories.UpdateMultipleStoriesError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.updateMultipleStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], Stories.UpdateMultipleStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStory(request: Stories.UpdateStoryRequest, options?: RequestOptions): ApiPromise&lt;Story, Stories.UpdateStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Story can be used to update Story properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.updateStory({ storyPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Story
} catch (err) {
  // TODO: Handle 'err' of type Stories.UpdateStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.updateStory({ storyPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Story
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
| <code>storyPublicId</code> | <code>number</code> | The unique identifier of this story. |
| <code>body</code> | <code>[UpdateStory](src/models/update-story.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.updateStory(request)`

- **OnSuccess**: <code>[Story](src/models/story.ts)</code>
- **OnError**: throws <code>[Stories.UpdateStoryError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.updateStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Story, Stories.UpdateStoryError&gt;</code>, with `result.value` of type <code>[Story](src/models/story.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStoryComment(request: Stories.UpdateStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;StoryComment, Stories.UpdateStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Comment replaces the text of the existing Comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.updateStoryComment({
    storyPublicId: 1,
    commentPublicId: 1,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type StoryComment
} catch (err) {
  // TODO: Handle 'err' of type Stories.UpdateStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories
  .updateStoryComment({ storyPublicId: 1, commentPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment
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
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment |
| <code>body</code> | <code>[UpdateStoryComment](src/models/update-story-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.updateStoryComment(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: throws <code>[Stories.UpdateStoryCommentError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.updateStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment, Stories.UpdateStoryCommentError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTask(request: Stories.UpdateTaskRequest, options?: RequestOptions): ApiPromise&lt;Task, Stories.UpdateTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Task can be used to update Task properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stories.updateTask({ storyPublicId: 1, taskPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Task
} catch (err) {
  // TODO: Handle 'err' of type Stories.UpdateTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stories.updateTask({ storyPublicId: 1, taskPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Task
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
| <code>storyPublicId</code> | <code>number</code> | The unique identifier of the parent Story. |
| <code>taskPublicId</code> | <code>number</code> | The unique identifier of the Task you wish to update. |
| <code>body</code> | <code>[UpdateTask](src/models/update-task.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stories.updateTask(request)`

- **OnSuccess**: <code>[Task](src/models/task.ts)</code>
- **OnError**: throws <code>[Stories.UpdateTaskError](src/resources/stories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stories.updateTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Task, Stories.UpdateTaskError&gt;</code>, with `result.value` of type <code>[Task](src/models/task.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StoryLinks

> Source: [StoryLinks](src/resources/story-links.ts)

<details>
<summary><code>createStoryLink(request: StoryLinks.CreateStoryLinkRequest, options?: RequestOptions): ApiPromise&lt;StoryLink, StoryLinks.CreateStoryLinkError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storyLinks.createStoryLink({
    body: { verb: VerbShortcutStoryLinksApi.Blocks, subjectId: 1, objectId: 1 },
  });
  // TODO: Handle 'response' of type StoryLink
} catch (err) {
  // TODO: Handle 'err' of type StoryLinks.CreateStoryLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storyLinks
  .createStoryLink({ body: { verb: VerbShortcutStoryLinksApi.Blocks, subjectId: 1, objectId: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryLink
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
| <code>body</code> | <code>[CreateStoryLink](src/models/create-story-link.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storyLinks.createStoryLink(request)`

- **OnSuccess**: <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: throws <code>[StoryLinks.CreateStoryLinkError](src/resources/story-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storyLinks.createStoryLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryLink, StoryLinks.CreateStoryLinkError&gt;</code>, with `result.value` of type <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStoryLink(request: StoryLinks.DeleteStoryLinkRequest, options?: RequestOptions): ApiPromise&lt;undefined, StoryLinks.DeleteStoryLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the relationship between the stories for the given Story Link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.storyLinks.deleteStoryLink({ storyLinkPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type StoryLinks.DeleteStoryLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storyLinks.deleteStoryLink({ storyLinkPublicId: 1 }).asApiResult();
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
| <code>storyLinkPublicId</code> | <code>number</code> | The unique ID of the Story Link. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storyLinks.deleteStoryLink(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StoryLinks.DeleteStoryLinkError](src/resources/story-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storyLinks.deleteStoryLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StoryLinks.DeleteStoryLinkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoryLink(request: StoryLinks.GetStoryLinkRequest, options?: RequestOptions): ApiPromise&lt;StoryLink, StoryLinks.GetStoryLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the stories and their relationship for the given Story Link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storyLinks.getStoryLink({ storyLinkPublicId: 1 });
  // TODO: Handle 'response' of type StoryLink
} catch (err) {
  // TODO: Handle 'err' of type StoryLinks.GetStoryLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storyLinks.getStoryLink({ storyLinkPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryLink
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
| <code>storyLinkPublicId</code> | <code>number</code> | The unique ID of the Story Link. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storyLinks.getStoryLink(request)`

- **OnSuccess**: <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: throws <code>[StoryLinks.GetStoryLinkError](src/resources/story-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storyLinks.getStoryLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryLink, StoryLinks.GetStoryLinkError&gt;</code>, with `result.value` of type <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStoryLink(request: StoryLinks.UpdateStoryLinkRequest, options?: RequestOptions): ApiPromise&lt;StoryLink, StoryLinks.UpdateStoryLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the stories and/or the relationship for the given Story Link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storyLinks.updateStoryLink({ storyLinkPublicId: 1, body: {} });
  // TODO: Handle 'response' of type StoryLink
} catch (err) {
  // TODO: Handle 'err' of type StoryLinks.UpdateStoryLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storyLinks.updateStoryLink({ storyLinkPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryLink
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
| <code>storyLinkPublicId</code> | <code>number</code> | The unique ID of the Story Link. |
| <code>body</code> | <code>[UpdateStoryLink](src/models/update-story-link.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storyLinks.updateStoryLink(request)`

- **OnSuccess**: <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: throws <code>[StoryLinks.UpdateStoryLinkError](src/resources/story-links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storyLinks.updateStoryLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryLink, StoryLinks.UpdateStoryLinkError&gt;</code>, with `result.value` of type <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workflows

> Source: [Workflows](src/resources/workflows.ts)

<details>
<summary><code>getWorkflow(request: Workflows.GetWorkflowRequest, options?: RequestOptions): ApiPromise&lt;Workflow, Workflows.GetWorkflowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Workflow returns information about a chosen Workflow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflows.getWorkflow({ workflowPublicId: 1 });
  // TODO: Handle 'response' of type Workflow
} catch (err) {
  // TODO: Handle 'err' of type Workflows.GetWorkflowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflows.getWorkflow({ workflowPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Workflow
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
| <code>workflowPublicId</code> | <code>number</code> | The ID of the Workflow. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflows.getWorkflow(request)`

- **OnSuccess**: <code>[Workflow](src/models/workflow.ts)</code>
- **OnError**: throws <code>[Workflows.GetWorkflowError](src/resources/workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflows.getWorkflow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Workflow, Workflows.GetWorkflowError&gt;</code>, with `result.value` of type <code>[Workflow](src/models/workflow.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkflows(options?: RequestOptions): ApiPromise&lt;Workflow[], Workflows.ListWorkflowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Workflows in the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflows.listWorkflows();
  // TODO: Handle 'response' of type Workflow[]
} catch (err) {
  // TODO: Handle 'err' of type Workflows.ListWorkflowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflows.listWorkflows().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Workflow[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflows.listWorkflows()`

- **OnSuccess**: <code>[Workflow](src/models/workflow.ts)[]</code>
- **OnError**: throws <code>[Workflows.ListWorkflowsError](src/resources/workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflows.listWorkflows().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Workflow[], Workflows.ListWorkflowsError&gt;</code>, with `result.value` of type <code>[Workflow](src/models/workflow.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

