# Reference

> Source: [FellowClient](src/client.ts)

## ActionItems

> Source: [ActionItems](src/resources/action-items.ts)

<details>
<summary><code>appsDeveloperApiApiArchiveActionItem(request: ActionItems.AppsDeveloperApiApiArchiveActionItemRequest, options?: RequestOptions): ApiPromise&lt;ActionItemResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an action item by marking it as won't do.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.actionItems.appsDeveloperApiApiArchiveActionItem({
    actionItemId: "some example string",
  });
  // TODO: Handle 'response' of type ActionItemResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.actionItems
  .appsDeveloperApiApiArchiveActionItem({ actionItemId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActionItemResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>actionItemId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.actionItems.appsDeveloperApiApiArchiveActionItem(request)`

- **OnSuccess**: <code>[ActionItemResponse](src/models/action-item-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.actionItems.appsDeveloperApiApiArchiveActionItem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActionItemResponse, ApiError&gt;</code>, with `result.value` of type <code>[ActionItemResponse](src/models/action-item-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiGetActionItemById(request: ActionItems.AppsDeveloperApiApiGetActionItemByIdRequest, options?: RequestOptions): ApiPromise&lt;ActionItemResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an action item by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.actionItems.appsDeveloperApiApiGetActionItemById({
    actionItemId: "some example string",
  });
  // TODO: Handle 'response' of type ActionItemResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.actionItems
  .appsDeveloperApiApiGetActionItemById({ actionItemId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActionItemResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>actionItemId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.actionItems.appsDeveloperApiApiGetActionItemById(request)`

- **OnSuccess**: <code>[ActionItemResponse](src/models/action-item-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.actionItems.appsDeveloperApiApiGetActionItemById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActionItemResponse, ApiError&gt;</code>, with `result.value` of type <code>[ActionItemResponse](src/models/action-item-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiGetActionItems(request: ActionItems.AppsDeveloperApiApiGetActionItemsRequest, options?: RequestOptions): ApiPromise&lt;ActionItemsListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List action items with optional filters and pagination.
Privileged access allows you to get action items for the account.
Non-privileged access allows you to get action items for the authenticated user only.

The `scope` filter controls which action items are returned:
- (no scope - default): All action items the user has access to
- assigned_to_me: Only action items assigned to the authenticated user
- assigned_to_others: Only action items the user can edit, assigned to teammates

The `created_at_start`, `created_at_end`, `updated_at_start` and `updated_at_end` filters take a
YYYY-MM-DD date or an ISO datetime and are inclusive. A value without a time means midnight UTC, so
pass a time on an end bound (`2024-01-05T23:59:59`) to cover the whole day. To page through a window
of changes, combine `updated_at_start` with `order_by: updated_at_asc`.

Whether `updated_at` moves depends on where the change was made. Edits in the note itself, including
its text, completion, assignees and due date, all bump `updated_at`. An assignee or due date changed
outside the note, such as from the action items list, is written to a separate record and leaves
`updated_at` unchanged, so the `updated_at` filters do not pick that item up.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.actionItems.appsDeveloperApiApiGetActionItems({ body: {} });
  // TODO: Handle 'response' of type ActionItemsListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.actionItems.appsDeveloperApiApiGetActionItems({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActionItemsListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetActionItemsRequest](src/models/get-action-items-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.actionItems.appsDeveloperApiApiGetActionItems(request)`

- **OnSuccess**: <code>[ActionItemsListResponse](src/models/action-items-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.actionItems.appsDeveloperApiApiGetActionItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActionItemsListResponse, ApiError&gt;</code>, with `result.value` of type <code>[ActionItemsListResponse](src/models/action-items-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiMarkActionItemComplete(request: ActionItems.AppsDeveloperApiApiMarkActionItemCompleteRequest, options?: RequestOptions): ApiPromise&lt;ActionItemResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mark an action item as complete or incomplete.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.actionItems.appsDeveloperApiApiMarkActionItemComplete({
    actionItemId: "some example string",
    body: { completed: true },
  });
  // TODO: Handle 'response' of type ActionItemResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.actionItems
  .appsDeveloperApiApiMarkActionItemComplete({
    actionItemId: "some example string",
    body: { completed: true },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActionItemResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>actionItemId</code> | <code>string</code> | - |
| <code>body</code> | <code>[MarkActionItemCompleteRequest](src/models/mark-action-item-complete-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.actionItems.appsDeveloperApiApiMarkActionItemComplete(request)`

- **OnSuccess**: <code>[ActionItemResponse](src/models/action-item-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.actionItems.appsDeveloperApiApiMarkActionItemComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActionItemResponse, ApiError&gt;</code>, with `result.value` of type <code>[ActionItemResponse](src/models/action-item-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Notes

> Source: [Notes](src/resources/notes.ts)

<details>
<summary><code>appsDeveloperApiApiAppendNoteAgenda(request: Notes.AppsDeveloperApiApiAppendNoteAgendaRequest, options?: RequestOptions): ApiPromise&lt;NoteAgendaResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add Fellow Markdown to the end of a note's agenda, leaving the rest of the content in place.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notes.appsDeveloperApiApiAppendNoteAgenda({
    noteId: "some example string",
    body: { contentFellowMarkdown: "some example string" },
  });
  // TODO: Handle 'response' of type NoteAgendaResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notes
  .appsDeveloperApiApiAppendNoteAgenda({
    noteId: "some example string",
    body: { contentFellowMarkdown: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NoteAgendaResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>noteId</code> | <code>string</code> | - |
| <code>body</code> | <code>[AppendNoteAgendaRequest](src/models/append-note-agenda-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notes.appsDeveloperApiApiAppendNoteAgenda(request)`

- **OnSuccess**: <code>[NoteAgendaResponse](src/models/note-agenda-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notes.appsDeveloperApiApiAppendNoteAgenda(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NoteAgendaResponse, ApiError&gt;</code>, with `result.value` of type <code>[NoteAgendaResponse](src/models/note-agenda-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiDeleteNote(request: Notes.AppsDeveloperApiApiDeleteNoteRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a note by its ID.

**Super Admin Access Required**: This endpoint is restricted to API keys with privileged access.
Only users with super admin privileges can delete notes through the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notes.appsDeveloperApiApiDeleteNote({ noteId: "some example string" });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notes
  .appsDeveloperApiApiDeleteNote({ noteId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>noteId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notes.appsDeveloperApiApiDeleteNote(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notes.appsDeveloperApiApiDeleteNote(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, ApiError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiFindReplaceNoteAgenda(request: Notes.AppsDeveloperApiApiFindReplaceNoteAgendaRequest, options?: RequestOptions): ApiPromise&lt;NoteAgendaResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace the single occurrence of `find` in a note's agenda with Fellow Markdown.

`find` must match exactly once. A missing or ambiguous match is a 422 and changes nothing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notes.appsDeveloperApiApiFindReplaceNoteAgenda({
    noteId: "some example string",
    body: { find: "some example string", contentFellowMarkdown: "some example string" },
  });
  // TODO: Handle 'response' of type NoteAgendaResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notes
  .appsDeveloperApiApiFindReplaceNoteAgenda({
    noteId: "some example string",
    body: { find: "some example string", contentFellowMarkdown: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NoteAgendaResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>noteId</code> | <code>string</code> | - |
| <code>body</code> | <code>[FindReplaceNoteAgendaRequest](src/models/find-replace-note-agenda-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notes.appsDeveloperApiApiFindReplaceNoteAgenda(request)`

- **OnSuccess**: <code>[NoteAgendaResponse](src/models/note-agenda-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notes.appsDeveloperApiApiFindReplaceNoteAgenda(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NoteAgendaResponse, ApiError&gt;</code>, with `result.value` of type <code>[NoteAgendaResponse](src/models/note-agenda-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiGetNoteById(request: Notes.AppsDeveloperApiApiGetNoteByIdRequest, options?: RequestOptions): ApiPromise&lt;NoteResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a note by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notes.appsDeveloperApiApiGetNoteById({ noteId: "some example string" });
  // TODO: Handle 'response' of type NoteResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notes
  .appsDeveloperApiApiGetNoteById({ noteId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NoteResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>noteId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notes.appsDeveloperApiApiGetNoteById(request)`

- **OnSuccess**: <code>[NoteResponse](src/models/note-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notes.appsDeveloperApiApiGetNoteById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NoteResponse, ApiError&gt;</code>, with `result.value` of type <code>[NoteResponse](src/models/note-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiGetNotes(request: Notes.AppsDeveloperApiApiGetNotesRequest, options?: RequestOptions): ApiPromise&lt;NotesListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List notes with optional filters and pagination.
Privileged access allows you to get notes for the account.
Non-privileged access allows you to get notes for the authenticated user only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notes.appsDeveloperApiApiGetNotes({ body: {} });
  // TODO: Handle 'response' of type NotesListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notes.appsDeveloperApiApiGetNotes({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotesListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetNotesRequest](src/models/get-notes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notes.appsDeveloperApiApiGetNotes(request)`

- **OnSuccess**: <code>[NotesListResponse](src/models/notes-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notes.appsDeveloperApiApiGetNotes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotesListResponse, ApiError&gt;</code>, with `result.value` of type <code>[NotesListResponse](src/models/notes-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiPrependNoteAgenda(request: Notes.AppsDeveloperApiApiPrependNoteAgendaRequest, options?: RequestOptions): ApiPromise&lt;NoteAgendaResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add Fellow Markdown to the start of a note's agenda, leaving the rest of the content in place.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notes.appsDeveloperApiApiPrependNoteAgenda({
    noteId: "some example string",
    body: { contentFellowMarkdown: "some example string" },
  });
  // TODO: Handle 'response' of type NoteAgendaResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notes
  .appsDeveloperApiApiPrependNoteAgenda({
    noteId: "some example string",
    body: { contentFellowMarkdown: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NoteAgendaResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>noteId</code> | <code>string</code> | - |
| <code>body</code> | <code>[PrependNoteAgendaRequest](src/models/prepend-note-agenda-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notes.appsDeveloperApiApiPrependNoteAgenda(request)`

- **OnSuccess**: <code>[NoteAgendaResponse](src/models/note-agenda-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notes.appsDeveloperApiApiPrependNoteAgenda(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NoteAgendaResponse, ApiError&gt;</code>, with `result.value` of type <code>[NoteAgendaResponse](src/models/note-agenda-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiWriteNoteAgenda(request: Notes.AppsDeveloperApiApiWriteNoteAgendaRequest, options?: RequestOptions): ApiPromise&lt;NoteAgendaResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Write a note's agenda and/or rename the note. Provide `content_fellow_markdown`, `title`, or both.

`content_fellow_markdown` replaces the entire agenda with the provided Fellow Markdown.

`title` renames the note, the same as renaming it in the Fellow app.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notes.appsDeveloperApiApiWriteNoteAgenda({
    noteId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type NoteAgendaResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notes
  .appsDeveloperApiApiWriteNoteAgenda({ noteId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NoteAgendaResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>noteId</code> | <code>string</code> | - |
| <code>body</code> | <code>[WriteNoteAgendaRequest](src/models/write-note-agenda-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notes.appsDeveloperApiApiWriteNoteAgenda(request)`

- **OnSuccess**: <code>[NoteAgendaResponse](src/models/note-agenda-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notes.appsDeveloperApiApiWriteNoteAgenda(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NoteAgendaResponse, ApiError&gt;</code>, with `result.value` of type <code>[NoteAgendaResponse](src/models/note-agenda-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Recordings

> Source: [Recordings](src/resources/recordings.ts)

<details>
<summary><code>appsDeveloperApiApiDeleteRecording(request: Recordings.AppsDeveloperApiApiDeleteRecordingRequest, options?: RequestOptions): ApiPromise&lt;MessageResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a recording by its ID.

**Super Admin Access Required**: This endpoint is restricted to API keys with privileged access.
Only users with super admin privileges can delete recordings through the API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recordings.appsDeveloperApiApiDeleteRecording({
    recordingId: "some example string",
  });
  // TODO: Handle 'response' of type MessageResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recordings
  .appsDeveloperApiApiDeleteRecording({ recordingId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MessageResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recordingId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recordings.appsDeveloperApiApiDeleteRecording(request)`

- **OnSuccess**: <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.recordings.appsDeveloperApiApiDeleteRecording(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MessageResponse, ApiError&gt;</code>, with `result.value` of type <code>[MessageResponse](src/models/message-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiGetRecordingById(request: Recordings.AppsDeveloperApiApiGetRecordingByIdRequest, options?: RequestOptions): ApiPromise&lt;RecordingResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a recording by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recordings.appsDeveloperApiApiGetRecordingById({
    recordingId: "some example string",
  });
  // TODO: Handle 'response' of type RecordingResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recordings
  .appsDeveloperApiApiGetRecordingById({ recordingId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordingResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recordingId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recordings.appsDeveloperApiApiGetRecordingById(request)`

- **OnSuccess**: <code>[RecordingResponse](src/models/recording-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.recordings.appsDeveloperApiApiGetRecordingById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordingResponse, ApiError&gt;</code>, with `result.value` of type <code>[RecordingResponse](src/models/recording-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiGetRecordings(request: Recordings.AppsDeveloperApiApiGetRecordingsRequest, options?: RequestOptions): ApiPromise&lt;RecordingsListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List recordings with optional filters and pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recordings.appsDeveloperApiApiGetRecordings({ body: {} });
  // TODO: Handle 'response' of type RecordingsListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recordings.appsDeveloperApiApiGetRecordings({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordingsListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetRecordingsRequest](src/models/get-recordings-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recordings.appsDeveloperApiApiGetRecordings(request)`

- **OnSuccess**: <code>[RecordingsListResponse](src/models/recordings-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.recordings.appsDeveloperApiApiGetRecordings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordingsListResponse, ApiError&gt;</code>, with `result.value` of type <code>[RecordingsListResponse](src/models/recordings-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiGetUploadById(request: Recordings.AppsDeveloperApiApiGetUploadByIdRequest, options?: RequestOptions): ApiPromise&lt;RecordingUploadResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single API-uploaded recording with its import status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recordings.appsDeveloperApiApiGetUploadById({
    recordingId: "some example string",
  });
  // TODO: Handle 'response' of type RecordingUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recordings
  .appsDeveloperApiApiGetUploadById({ recordingId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordingUploadResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recordingId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recordings.appsDeveloperApiApiGetUploadById(request)`

- **OnSuccess**: <code>[RecordingUploadResponse](src/models/recording-upload-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.recordings.appsDeveloperApiApiGetUploadById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordingUploadResponse, ApiError&gt;</code>, with `result.value` of type <code>[RecordingUploadResponse](src/models/recording-upload-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiListUploads(request: Recordings.AppsDeveloperApiApiListUploadsRequest, options?: RequestOptions): ApiPromise&lt;RecordingUploadsListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List API-uploaded recordings with their import status, with optional filters and pagination.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recordings.appsDeveloperApiApiListUploads({ body: {} });
  // TODO: Handle 'response' of type RecordingUploadsListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recordings.appsDeveloperApiApiListUploads({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordingUploadsListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetUploadsRequest](src/models/get-uploads-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recordings.appsDeveloperApiApiListUploads(request)`

- **OnSuccess**: <code>[RecordingUploadsListResponse](src/models/recording-uploads-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.recordings.appsDeveloperApiApiListUploads(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordingUploadsListResponse, ApiError&gt;</code>, with `result.value` of type <code>[RecordingUploadsListResponse](src/models/recording-uploads-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiUploadRecording(request: Recordings.AppsDeveloperApiApiUploadRecordingRequest, options?: RequestOptions): ApiPromise&lt;RecordingUploadSubmitResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a recording from a URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recordings.appsDeveloperApiApiUploadRecording({
    body: { url: "https://example.com", title: "some example string" },
  });
  // TODO: Handle 'response' of type RecordingUploadSubmitResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recordings
  .appsDeveloperApiApiUploadRecording({ body: { url: "https://example.com", title: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecordingUploadSubmitResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecordingUploadRequest](src/models/recording-upload-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recordings.appsDeveloperApiApiUploadRecording(request)`

- **OnSuccess**: <code>[RecordingUploadSubmitResponse](src/models/recording-upload-submit-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.recordings.appsDeveloperApiApiUploadRecording(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecordingUploadSubmitResponse, ApiError&gt;</code>, with `result.value` of type <code>[RecordingUploadSubmitResponse](src/models/recording-upload-submit-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>appsDeveloperApiApiGetAuthenticatedUser(options?: RequestOptions): ApiPromise&lt;AuthenticatedUserResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the authenticated user and their workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.appsDeveloperApiApiGetAuthenticatedUser();
  // TODO: Handle 'response' of type AuthenticatedUserResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.appsDeveloperApiApiGetAuthenticatedUser().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthenticatedUserResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.appsDeveloperApiApiGetAuthenticatedUser()`

- **OnSuccess**: <code>[AuthenticatedUserResponse](src/models/authenticated-user-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.appsDeveloperApiApiGetAuthenticatedUser().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthenticatedUserResponse, ApiError&gt;</code>, with `result.value` of type <code>[AuthenticatedUserResponse](src/models/authenticated-user-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>appsDeveloperApiApiCreateWebhook(request: Webhooks.AppsDeveloperApiApiCreateWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new webhook endpoint.

Creates a webhook that will receive HTTP POST requests when subscribed events occur.
The webhook will be associated with the authenticated user.

Set `scope` to `workspace` to create an account-wide webhook instead, which receives every
matching event in the account and is delivered once per event rather than once per attendee.
**Super Admin Access Required** for that value: a key acting through `X-On-Behalf-Of` cannot
create one, because impersonation drops privileged access.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.appsDeveloperApiApiCreateWebhook({
    body: { url: "some example string", enabledEvents: ["some example string"] },
  });
  // TODO: Handle 'response' of type WebhookCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .appsDeveloperApiApiCreateWebhook({
    body: { url: "some example string", enabledEvents: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateWebhookRequest](src/models/create-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.appsDeveloperApiApiCreateWebhook(request)`

- **OnSuccess**: <code>[WebhookCreateResponse](src/models/webhook-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.appsDeveloperApiApiCreateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[WebhookCreateResponse](src/models/webhook-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiDeleteWebhook(request: Webhooks.AppsDeveloperApiApiDeleteWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookDeleteResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook endpoint by its ID.

An account-wide webhook is deleted through this same endpoint, and needs a privileged key:
without one its id reads as not found.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.appsDeveloperApiApiDeleteWebhook({
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type WebhookDeleteResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .appsDeveloperApiApiDeleteWebhook({ webhookId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookDeleteResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.appsDeveloperApiApiDeleteWebhook(request)`

- **OnSuccess**: <code>[WebhookDeleteResponse](src/models/webhook-delete-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.appsDeveloperApiApiDeleteWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookDeleteResponse, ApiError&gt;</code>, with `result.value` of type <code>[WebhookDeleteResponse](src/models/webhook-delete-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiGetWebhookById(request: Webhooks.AppsDeveloperApiApiGetWebhookByIdRequest, options?: RequestOptions): ApiPromise&lt;WebhookResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a webhook by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.appsDeveloperApiApiGetWebhookById({
    webhookId: "some example string",
  });
  // TODO: Handle 'response' of type WebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .appsDeveloperApiApiGetWebhookById({ webhookId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.appsDeveloperApiApiGetWebhookById(request)`

- **OnSuccess**: <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.appsDeveloperApiApiGetWebhookById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResponse, ApiError&gt;</code>, with `result.value` of type <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiListWebhooks(request?: Webhooks.AppsDeveloperApiApiListWebhooksRequest, options?: RequestOptions): ApiPromise&lt;WebhooksListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List webhooks with optional filters and pagination.

Query Parameters:
- page_size: Number of results per page (optional, default: 20, max: 50)
- cursor: Pagination cursor for next page (optional)
- filters: JSON-encoded WebhookFilters (optional)
Example: ?filters={"status":"active","created_at_start":"2024-01-01"}

Returns a list of webhooks for the authenticated user. Privileged access
allows listing all webhooks for the account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.appsDeveloperApiApiListWebhooks();
  // TODO: Handle 'response' of type WebhooksListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks.appsDeveloperApiApiListWebhooks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhooksListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pageSize?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>filters?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.appsDeveloperApiApiListWebhooks(request)`

- **OnSuccess**: <code>[WebhooksListResponse](src/models/webhooks-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.appsDeveloperApiApiListWebhooks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhooksListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WebhooksListResponse](src/models/webhooks-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsDeveloperApiApiUpdateWebhook(request: Webhooks.AppsDeveloperApiApiUpdateWebhookRequest, options?: RequestOptions): ApiPromise&lt;WebhookResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing webhook endpoint.

Allows partial updates - only provided fields will be modified.
The webhook must belong to the authenticated user (or account for privileged access).

An account-wide webhook is updated through this same endpoint, and needs a privileged key:
without one its id reads as not found, the same answer as another user's webhook.

`scope` cannot be changed after creation, and is ignored here: a webhook's scope decides
which Svix application its endpoint lives in, so converting one means deleting and
recreating it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.appsDeveloperApiApiUpdateWebhook({
    webhookId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type WebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .appsDeveloperApiApiUpdateWebhook({ webhookId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhookId</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateWebhookRequest](src/models/update-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.appsDeveloperApiApiUpdateWebhook(request)`

- **OnSuccess**: <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.webhooks.appsDeveloperApiApiUpdateWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookResponse, ApiError&gt;</code>, with `result.value` of type <code>[WebhookResponse](src/models/webhook-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FellowError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

