# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [FellowClient](fellow/client.py)

## ActionItems

> Source: [ActionItems](fellow/apis/action_items.py)

<details>
<summary><code>def apps_developer_api_api_archive_action_item(action_item_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActionItemResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an action item by marking it as won't do.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.action_items.with_raw_response.apps_developer_api_api_archive_action_item("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActionItemResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.action_items.with_raw_response.apps_developer_api_api_archive_action_item(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActionItemResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>action_item_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[ActionItemResponse](fellow/models/action_item_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActionItemResponse](fellow/models/action_item_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_get_action_item_by_id(action_item_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActionItemResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an action item by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.action_items.with_raw_response.apps_developer_api_api_get_action_item_by_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActionItemResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.action_items.with_raw_response.apps_developer_api_api_get_action_item_by_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActionItemResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>action_item_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[ActionItemResponse](fellow/models/action_item_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActionItemResponse](fellow/models/action_item_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_get_action_items(body: GetActionItemsRequest | GetActionItemsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActionItemsListResponse, RawError]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.action_items.with_raw_response.apps_developer_api_api_get_action_items(GetActionItemsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActionItemsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.action_items.with_raw_response.apps_developer_api_api_get_action_items(
    GetActionItemsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActionItemsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetActionItemsRequest](fellow/models/get_action_items_request.py) \| [GetActionItemsRequestDict](fellow/models/get_action_items_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[ActionItemsListResponse](fellow/models/action_items_list_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActionItemsListResponse](fellow/models/action_items_list_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_mark_action_item_complete(action_item_id: str, body: MarkActionItemCompleteRequest | MarkActionItemCompleteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActionItemResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mark an action item as complete or incomplete.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.action_items.with_raw_response.apps_developer_api_api_mark_action_item_complete(
    "some example string", MarkActionItemCompleteRequest(completed=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActionItemResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.action_items.with_raw_response.apps_developer_api_api_mark_action_item_complete(
    "some example string", MarkActionItemCompleteRequest(completed=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActionItemResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>action_item_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[MarkActionItemCompleteRequest](fellow/models/mark_action_item_complete_request.py) \| [MarkActionItemCompleteRequestDict](fellow/models/mark_action_item_complete_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[ActionItemResponse](fellow/models/action_item_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActionItemResponse](fellow/models/action_item_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Notes

> Source: [Notes](fellow/apis/notes.py)

<details>
<summary><code>def apps_developer_api_api_append_note_agenda(note_id: str, body: AppendNoteAgendaRequest | AppendNoteAgendaRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NoteAgendaResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add Fellow Markdown to the end of a note's agenda, leaving the rest of the content in place.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.notes.with_raw_response.apps_developer_api_api_append_note_agenda(
    "some example string", AppendNoteAgendaRequest(content_fellow_markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteAgendaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.notes.with_raw_response.apps_developer_api_api_append_note_agenda(
    "some example string", AppendNoteAgendaRequest(content_fellow_markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteAgendaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>note_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[AppendNoteAgendaRequest](fellow/models/append_note_agenda_request.py) \| [AppendNoteAgendaRequestDict](fellow/models/append_note_agenda_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[NoteAgendaResponse](fellow/models/note_agenda_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[NoteAgendaResponse](fellow/models/note_agenda_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_delete_note(note_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, RawError]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.notes.with_raw_response.apps_developer_api_api_delete_note("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.notes.with_raw_response.apps_developer_api_api_delete_note("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>note_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[MessageResponse](fellow/models/message_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](fellow/models/message_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_find_replace_note_agenda(note_id: str, body: FindReplaceNoteAgendaRequest | FindReplaceNoteAgendaRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NoteAgendaResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace the single occurrence of `find` in a note's agenda with Fellow Markdown.

`find` must match exactly once. A missing or ambiguous match is a 422 and changes nothing.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.notes.with_raw_response.apps_developer_api_api_find_replace_note_agenda(
    "some example string",
    FindReplaceNoteAgendaRequest(find="some example string", content_fellow_markdown="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteAgendaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.notes.with_raw_response.apps_developer_api_api_find_replace_note_agenda(
    "some example string",
    FindReplaceNoteAgendaRequest(find="some example string", content_fellow_markdown="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteAgendaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>note_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[FindReplaceNoteAgendaRequest](fellow/models/find_replace_note_agenda_request.py) \| [FindReplaceNoteAgendaRequestDict](fellow/models/find_replace_note_agenda_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[NoteAgendaResponse](fellow/models/note_agenda_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[NoteAgendaResponse](fellow/models/note_agenda_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_get_note_by_id(note_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NoteResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a note by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.notes.with_raw_response.apps_developer_api_api_get_note_by_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.notes.with_raw_response.apps_developer_api_api_get_note_by_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>note_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[NoteResponse](fellow/models/note_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[NoteResponse](fellow/models/note_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_get_notes(body: GetNotesRequest | GetNotesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NotesListResponse, RawError]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.notes.with_raw_response.apps_developer_api_api_get_notes(GetNotesRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotesListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.notes.with_raw_response.apps_developer_api_api_get_notes(GetNotesRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NotesListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetNotesRequest](fellow/models/get_notes_request.py) \| [GetNotesRequestDict](fellow/models/get_notes_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[NotesListResponse](fellow/models/notes_list_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[NotesListResponse](fellow/models/notes_list_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_prepend_note_agenda(note_id: str, body: PrependNoteAgendaRequest | PrependNoteAgendaRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NoteAgendaResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add Fellow Markdown to the start of a note's agenda, leaving the rest of the content in place.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.notes.with_raw_response.apps_developer_api_api_prepend_note_agenda(
    "some example string", PrependNoteAgendaRequest(content_fellow_markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteAgendaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.notes.with_raw_response.apps_developer_api_api_prepend_note_agenda(
    "some example string", PrependNoteAgendaRequest(content_fellow_markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteAgendaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>note_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PrependNoteAgendaRequest](fellow/models/prepend_note_agenda_request.py) \| [PrependNoteAgendaRequestDict](fellow/models/prepend_note_agenda_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[NoteAgendaResponse](fellow/models/note_agenda_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[NoteAgendaResponse](fellow/models/note_agenda_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_write_note_agenda(note_id: str, body: WriteNoteAgendaRequest | WriteNoteAgendaRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NoteAgendaResponse, RawError]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.notes.with_raw_response.apps_developer_api_api_write_note_agenda(
    "some example string", WriteNoteAgendaRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteAgendaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.notes.with_raw_response.apps_developer_api_api_write_note_agenda(
    "some example string", WriteNoteAgendaRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NoteAgendaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>note_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[WriteNoteAgendaRequest](fellow/models/write_note_agenda_request.py) \| [WriteNoteAgendaRequestDict](fellow/models/write_note_agenda_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[NoteAgendaResponse](fellow/models/note_agenda_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[NoteAgendaResponse](fellow/models/note_agenda_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Recordings

> Source: [Recordings](fellow/apis/recordings.py)

<details>
<summary><code>def apps_developer_api_api_delete_recording(recording_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, RawError]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.recordings.with_raw_response.apps_developer_api_api_delete_recording("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.recordings.with_raw_response.apps_developer_api_api_delete_recording("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recording_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[MessageResponse](fellow/models/message_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](fellow/models/message_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_get_recording_by_id(recording_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecordingResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a recording by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.recordings.with_raw_response.apps_developer_api_api_get_recording_by_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.recordings.with_raw_response.apps_developer_api_api_get_recording_by_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recording_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[RecordingResponse](fellow/models/recording_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecordingResponse](fellow/models/recording_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_get_recordings(body: GetRecordingsRequest | GetRecordingsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecordingsListResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List recordings with optional filters and pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.recordings.with_raw_response.apps_developer_api_api_get_recordings(GetRecordingsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.recordings.with_raw_response.apps_developer_api_api_get_recordings(GetRecordingsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetRecordingsRequest](fellow/models/get_recordings_request.py) \| [GetRecordingsRequestDict](fellow/models/get_recordings_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[RecordingsListResponse](fellow/models/recordings_list_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecordingsListResponse](fellow/models/recordings_list_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_get_upload_by_id(recording_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecordingUploadResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single API-uploaded recording with its import status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.recordings.with_raw_response.apps_developer_api_api_get_upload_by_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.recordings.with_raw_response.apps_developer_api_api_get_upload_by_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recording_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[RecordingUploadResponse](fellow/models/recording_upload_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecordingUploadResponse](fellow/models/recording_upload_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_list_uploads(body: GetUploadsRequest | GetUploadsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecordingUploadsListResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List API-uploaded recordings with their import status, with optional filters and pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.recordings.with_raw_response.apps_developer_api_api_list_uploads(GetUploadsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingUploadsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.recordings.with_raw_response.apps_developer_api_api_list_uploads(GetUploadsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingUploadsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[GetUploadsRequest](fellow/models/get_uploads_request.py) \| [GetUploadsRequestDict](fellow/models/get_uploads_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[RecordingUploadsListResponse](fellow/models/recording_uploads_list_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecordingUploadsListResponse](fellow/models/recording_uploads_list_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_upload_recording(body: RecordingUploadRequest | RecordingUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RecordingUploadSubmitResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a recording from a URL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.recordings.with_raw_response.apps_developer_api_api_upload_recording(
    RecordingUploadRequest(url="https://example.com", title="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingUploadSubmitResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.recordings.with_raw_response.apps_developer_api_api_upload_recording(
    RecordingUploadRequest(url="https://example.com", title="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RecordingUploadSubmitResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecordingUploadRequest](fellow/models/recording_upload_request.py) \| [RecordingUploadRequestDict](fellow/models/recording_upload_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[RecordingUploadSubmitResponse](fellow/models/recording_upload_submit_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[RecordingUploadSubmitResponse](fellow/models/recording_upload_submit_response.py)</code> -- Created

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](fellow/apis/users.py)

<details>
<summary><code>def apps_developer_api_api_get_authenticated_user(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AuthenticatedUserResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the authenticated user and their workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.apps_developer_api_api_get_authenticated_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthenticatedUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.users.with_raw_response.apps_developer_api_api_get_authenticated_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AuthenticatedUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[AuthenticatedUserResponse](fellow/models/authenticated_user_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[AuthenticatedUserResponse](fellow/models/authenticated_user_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](fellow/apis/webhooks_api.py)

<details>
<summary><code>def apps_developer_api_api_create_webhook(body: CreateWebhookRequest | CreateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookCreateResponse, RawError]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.apps_developer_api_api_create_webhook(
    CreateWebhookRequest(url="some example string", enabled_events=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookCreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.apps_developer_api_api_create_webhook(
    CreateWebhookRequest(url="some example string", enabled_events=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookCreateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateWebhookRequest](fellow/models/create_webhook_request.py) \| [CreateWebhookRequestDict](fellow/models/create_webhook_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[WebhookCreateResponse](fellow/models/webhook_create_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookCreateResponse](fellow/models/webhook_create_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_delete_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookDeleteResponse, RawError]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.apps_developer_api_api_delete_webhook("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookDeleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.apps_developer_api_api_delete_webhook("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookDeleteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[WebhookDeleteResponse](fellow/models/webhook_delete_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookDeleteResponse](fellow/models/webhook_delete_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_get_webhook_by_id(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a webhook by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.apps_developer_api_api_get_webhook_by_id("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.apps_developer_api_api_get_webhook_by_id(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[WebhookResponse](fellow/models/webhook_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookResponse](fellow/models/webhook_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_list_webhooks(*, page_size: int | None = None, cursor: str | None = None, filters: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhooksListResponse, RawError]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.apps_developer_api_api_list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.apps_developer_api_api_list_webhooks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhooksListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[WebhooksListResponse](fellow/models/webhooks_list_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhooksListResponse](fellow/models/webhooks_list_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def apps_developer_api_api_update_webhook(webhook_id: str, body: UpdateWebhookRequest | UpdateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookResponse, RawError]</code></summary>

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

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.apps_developer_api_api_update_webhook(
    "some example string", UpdateWebhookRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.apps_developer_api_api_update_webhook(
    "some example string", UpdateWebhookRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateWebhookRequest](fellow/models/update_webhook_request.py) \| [UpdateWebhookRequestDict](fellow/models/update_webhook_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](fellow/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](fellow/core/results.py)&#91;[WebhookResponse](fellow/models/webhook_response.py), [RawError](fellow/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookResponse](fellow/models/webhook_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[RawError](fellow/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

