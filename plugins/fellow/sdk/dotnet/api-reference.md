# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [FellowClient](src/Fellow/FellowClient.cs)

## ActionItems

> Source: [ActionItems](src/Fellow/Api/ActionItems.cs)

<details>
<summary><code>Task&lt;ActionItemResponse&gt; AppsDeveloperApiApiArchiveActionItem(AppsDeveloperApiApiArchiveActionItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ActionItems.AppsDeveloperApiApiArchiveActionItem(
        new AppsDeveloperApiApiArchiveActionItemRequest { ActionItemId = "some example string" });
    // TODO: Handle 'response' of type ActionItemResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiArchiveActionItemRequest](src/Fellow/Requests/ActionItems/AppsDeveloperApiApiArchiveActionItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActionItemResponse](src/Fellow/Models/ActionItemResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ActionItemResponse&gt; AppsDeveloperApiApiGetActionItemById(AppsDeveloperApiApiGetActionItemByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ActionItems.AppsDeveloperApiApiGetActionItemById(
        new AppsDeveloperApiApiGetActionItemByIdRequest { ActionItemId = "some example string" });
    // TODO: Handle 'response' of type ActionItemResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiGetActionItemByIdRequest](src/Fellow/Requests/ActionItems/AppsDeveloperApiApiGetActionItemByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActionItemResponse](src/Fellow/Models/ActionItemResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ActionItemsListResponse&gt; AppsDeveloperApiApiGetActionItems(AppsDeveloperApiApiGetActionItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ActionItems.AppsDeveloperApiApiGetActionItems(
        new AppsDeveloperApiApiGetActionItemsRequest { Body = new GetActionItemsRequest() });
    // TODO: Handle 'response' of type ActionItemsListResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiGetActionItemsRequest](src/Fellow/Requests/ActionItems/AppsDeveloperApiApiGetActionItemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActionItemsListResponse](src/Fellow/Models/ActionItemsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ActionItemResponse&gt; AppsDeveloperApiApiMarkActionItemComplete(AppsDeveloperApiApiMarkActionItemCompleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ActionItems.AppsDeveloperApiApiMarkActionItemComplete(
        new AppsDeveloperApiApiMarkActionItemCompleteRequest
        {
            ActionItemId = "some example string",
            Body = new MarkActionItemCompleteRequest { Completed = true },
        });
    // TODO: Handle 'response' of type ActionItemResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiMarkActionItemCompleteRequest](src/Fellow/Requests/ActionItems/AppsDeveloperApiApiMarkActionItemCompleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActionItemResponse](src/Fellow/Models/ActionItemResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Notes

> Source: [Notes](src/Fellow/Api/Notes.cs)

<details>
<summary><code>Task&lt;NoteAgendaResponse&gt; AppsDeveloperApiApiAppendNoteAgenda(AppsDeveloperApiApiAppendNoteAgendaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Notes.AppsDeveloperApiApiAppendNoteAgenda(new AppsDeveloperApiApiAppendNoteAgendaRequest
    {
        NoteId = "some example string",
        Body = new AppendNoteAgendaRequest { ContentFellowMarkdown = "some example string" },
    });
    // TODO: Handle 'response' of type NoteAgendaResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiAppendNoteAgendaRequest](src/Fellow/Requests/Notes/AppsDeveloperApiApiAppendNoteAgendaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NoteAgendaResponse](src/Fellow/Models/NoteAgendaResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; AppsDeveloperApiApiDeleteNote(AppsDeveloperApiApiDeleteNoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Notes.AppsDeveloperApiApiDeleteNote(new AppsDeveloperApiApiDeleteNoteRequest
    {
        NoteId = "some example string",
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiDeleteNoteRequest](src/Fellow/Requests/Notes/AppsDeveloperApiApiDeleteNoteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/Fellow/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NoteAgendaResponse&gt; AppsDeveloperApiApiFindReplaceNoteAgenda(AppsDeveloperApiApiFindReplaceNoteAgendaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Notes.AppsDeveloperApiApiFindReplaceNoteAgenda(
        new AppsDeveloperApiApiFindReplaceNoteAgendaRequest
        {
            NoteId = "some example string",
            Body = new FindReplaceNoteAgendaRequest
            {
                Find = "some example string",
                ContentFellowMarkdown = "some example string",
            },
        });
    // TODO: Handle 'response' of type NoteAgendaResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiFindReplaceNoteAgendaRequest](src/Fellow/Requests/Notes/AppsDeveloperApiApiFindReplaceNoteAgendaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NoteAgendaResponse](src/Fellow/Models/NoteAgendaResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NoteResponse&gt; AppsDeveloperApiApiGetNoteById(AppsDeveloperApiApiGetNoteByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Notes.AppsDeveloperApiApiGetNoteById(new AppsDeveloperApiApiGetNoteByIdRequest
    {
        NoteId = "some example string",
    });
    // TODO: Handle 'response' of type NoteResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiGetNoteByIdRequest](src/Fellow/Requests/Notes/AppsDeveloperApiApiGetNoteByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NoteResponse](src/Fellow/Models/NoteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NotesListResponse&gt; AppsDeveloperApiApiGetNotes(AppsDeveloperApiApiGetNotesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Notes.AppsDeveloperApiApiGetNotes(new AppsDeveloperApiApiGetNotesRequest
    {
        Body = new GetNotesRequest(),
    });
    // TODO: Handle 'response' of type NotesListResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiGetNotesRequest](src/Fellow/Requests/Notes/AppsDeveloperApiApiGetNotesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotesListResponse](src/Fellow/Models/NotesListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NoteAgendaResponse&gt; AppsDeveloperApiApiPrependNoteAgenda(AppsDeveloperApiApiPrependNoteAgendaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Notes.AppsDeveloperApiApiPrependNoteAgenda(
        new AppsDeveloperApiApiPrependNoteAgendaRequest
        {
            NoteId = "some example string",
            Body = new PrependNoteAgendaRequest { ContentFellowMarkdown = "some example string" },
        });
    // TODO: Handle 'response' of type NoteAgendaResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiPrependNoteAgendaRequest](src/Fellow/Requests/Notes/AppsDeveloperApiApiPrependNoteAgendaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NoteAgendaResponse](src/Fellow/Models/NoteAgendaResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NoteAgendaResponse&gt; AppsDeveloperApiApiWriteNoteAgenda(AppsDeveloperApiApiWriteNoteAgendaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Notes.AppsDeveloperApiApiWriteNoteAgenda(new AppsDeveloperApiApiWriteNoteAgendaRequest
    {
        NoteId = "some example string",
        Body = new WriteNoteAgendaRequest(),
    });
    // TODO: Handle 'response' of type NoteAgendaResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiWriteNoteAgendaRequest](src/Fellow/Requests/Notes/AppsDeveloperApiApiWriteNoteAgendaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NoteAgendaResponse](src/Fellow/Models/NoteAgendaResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Recordings

> Source: [Recordings](src/Fellow/Api/Recordings.cs)

<details>
<summary><code>Task&lt;MessageResponse&gt; AppsDeveloperApiApiDeleteRecording(AppsDeveloperApiApiDeleteRecordingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recordings.AppsDeveloperApiApiDeleteRecording(
        new AppsDeveloperApiApiDeleteRecordingRequest { RecordingId = "some example string" });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiDeleteRecordingRequest](src/Fellow/Requests/Recordings/AppsDeveloperApiApiDeleteRecordingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/Fellow/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordingResponse&gt; AppsDeveloperApiApiGetRecordingById(AppsDeveloperApiApiGetRecordingByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recordings.AppsDeveloperApiApiGetRecordingById(
        new AppsDeveloperApiApiGetRecordingByIdRequest { RecordingId = "some example string" });
    // TODO: Handle 'response' of type RecordingResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiGetRecordingByIdRequest](src/Fellow/Requests/Recordings/AppsDeveloperApiApiGetRecordingByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordingResponse](src/Fellow/Models/RecordingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordingsListResponse&gt; AppsDeveloperApiApiGetRecordings(AppsDeveloperApiApiGetRecordingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recordings.AppsDeveloperApiApiGetRecordings(new AppsDeveloperApiApiGetRecordingsRequest
    {
        Body = new GetRecordingsRequest(),
    });
    // TODO: Handle 'response' of type RecordingsListResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiGetRecordingsRequest](src/Fellow/Requests/Recordings/AppsDeveloperApiApiGetRecordingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordingsListResponse](src/Fellow/Models/RecordingsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordingUploadResponse&gt; AppsDeveloperApiApiGetUploadById(AppsDeveloperApiApiGetUploadByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recordings.AppsDeveloperApiApiGetUploadById(new AppsDeveloperApiApiGetUploadByIdRequest
    {
        RecordingId = "some example string",
    });
    // TODO: Handle 'response' of type RecordingUploadResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiGetUploadByIdRequest](src/Fellow/Requests/Recordings/AppsDeveloperApiApiGetUploadByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordingUploadResponse](src/Fellow/Models/RecordingUploadResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordingUploadsListResponse&gt; AppsDeveloperApiApiListUploads(AppsDeveloperApiApiListUploadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recordings.AppsDeveloperApiApiListUploads(new AppsDeveloperApiApiListUploadsRequest
    {
        Body = new GetUploadsRequest(),
    });
    // TODO: Handle 'response' of type RecordingUploadsListResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiListUploadsRequest](src/Fellow/Requests/Recordings/AppsDeveloperApiApiListUploadsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordingUploadsListResponse](src/Fellow/Models/RecordingUploadsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RecordingUploadSubmitResponse&gt; AppsDeveloperApiApiUploadRecording(AppsDeveloperApiApiUploadRecordingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recordings.AppsDeveloperApiApiUploadRecording(
        new AppsDeveloperApiApiUploadRecordingRequest
        {
            Body = new RecordingUploadRequest { Url = "https://example.com", Title = "some example string" },
        });
    // TODO: Handle 'response' of type RecordingUploadSubmitResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiUploadRecordingRequest](src/Fellow/Requests/Recordings/AppsDeveloperApiApiUploadRecordingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordingUploadSubmitResponse](src/Fellow/Models/RecordingUploadSubmitResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Fellow/Api/Users.cs)

<details>
<summary><code>Task&lt;AuthenticatedUserResponse&gt; AppsDeveloperApiApiGetAuthenticatedUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.AppsDeveloperApiApiGetAuthenticatedUser();
    // TODO: Handle 'response' of type AuthenticatedUserResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthenticatedUserResponse](src/Fellow/Models/AuthenticatedUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Fellow/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;WebhookCreateResponse&gt; AppsDeveloperApiApiCreateWebhook(AppsDeveloperApiApiCreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.AppsDeveloperApiApiCreateWebhook(new AppsDeveloperApiApiCreateWebhookRequest
    {
        Body = new CreateWebhookRequest { Url = "some example string", EnabledEvents = ["some example string"] },
    });
    // TODO: Handle 'response' of type WebhookCreateResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiCreateWebhookRequest](src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiCreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookCreateResponse](src/Fellow/Models/WebhookCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookDeleteResponse&gt; AppsDeveloperApiApiDeleteWebhook(AppsDeveloperApiApiDeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.AppsDeveloperApiApiDeleteWebhook(new AppsDeveloperApiApiDeleteWebhookRequest
    {
        WebhookId = "some example string",
    });
    // TODO: Handle 'response' of type WebhookDeleteResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiDeleteWebhookRequest](src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiDeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookDeleteResponse](src/Fellow/Models/WebhookDeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResponse&gt; AppsDeveloperApiApiGetWebhookById(AppsDeveloperApiApiGetWebhookByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.AppsDeveloperApiApiGetWebhookById(
        new AppsDeveloperApiApiGetWebhookByIdRequest { WebhookId = "some example string" });
    // TODO: Handle 'response' of type WebhookResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiGetWebhookByIdRequest](src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiGetWebhookByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](src/Fellow/Models/WebhookResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksListResponse&gt; AppsDeveloperApiApiListWebhooks(AppsDeveloperApiApiListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.AppsDeveloperApiApiListWebhooks(
        new AppsDeveloperApiApiListWebhooksRequest());
    // TODO: Handle 'response' of type WebhooksListResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiListWebhooksRequest](src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiListWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksListResponse](src/Fellow/Models/WebhooksListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResponse&gt; AppsDeveloperApiApiUpdateWebhook(AppsDeveloperApiApiUpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WebhooksApi.AppsDeveloperApiApiUpdateWebhook(new AppsDeveloperApiApiUpdateWebhookRequest
    {
        WebhookId = "some example string",
        Body = new UpdateWebhookRequest(),
    });
    // TODO: Handle 'response' of type WebhookResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AppsDeveloperApiApiUpdateWebhookRequest](src/Fellow/Requests/WebhooksApi/AppsDeveloperApiApiUpdateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](src/Fellow/Models/WebhookResponse.cs)</code>

**OnError**: <code>[ApiException](src/Fellow/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Fellow/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

