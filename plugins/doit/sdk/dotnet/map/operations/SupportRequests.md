<!-- Generated file — do not edit; regenerated with the SDK. -->

# SupportRequests — operations

Accessor: `client.SupportRequests` · Source: `src/DoiT/Api/SupportRequests.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddTicketTags

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AddTicketTags(AddTicketTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TicketId`, `Body`
- **Returns**: `TagsResponse`
- **Error**: `ApiException<AddTicketTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddTicketTagsRequest` | `src/DoiT/Requests/SupportRequests/AddTicketTagsRequest.cs` |
| `TagsRequest` | `src/DoiT/Models/TagsRequest.cs` |
| `TagsResponse` | `src/DoiT/Models/TagsResponse.cs` |
| `AddTicketTagsError` | `src/DoiT/Errors/AddTicketTagsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### CreateTicket

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateTicket(CreateTicketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TicketResponseExtApi`
- **Error**: `ApiException<CreateTicketError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTicketRequest` | `src/DoiT/Requests/SupportRequests/CreateTicketRequest.cs` |
| `TicketCreateFormExtApi` | `src/DoiT/Models/TicketCreateFormExtApi.cs` |
| `TicketResponseExtApi` | `src/DoiT/Models/TicketResponseExtApi.cs` |
| `CreateTicketError` | `src/DoiT/Errors/CreateTicketError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### CreateTicketComment

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateTicketComment(CreateTicketCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TicketId`, `Body`
- **Returns**: `CommentExtApi`
- **Error**: `ApiException<CreateTicketCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTicketCommentRequest` | `src/DoiT/Requests/SupportRequests/CreateTicketCommentRequest.cs` |
| `CreateCommentRequest` | `src/DoiT/Models/CreateCommentRequest.cs` |
| `CommentExtApi` | `src/DoiT/Models/CommentExtApi.cs` |
| `CreateTicketCommentError` | `src/DoiT/Errors/CreateTicketCommentError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetTicket

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetTicket(GetTicketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TicketId`
- **Returns**: `TicketDetailExtApi`
- **Error**: `ApiException<GetTicketError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTicketRequest` | `src/DoiT/Requests/SupportRequests/GetTicketRequest.cs` |
| `TicketDetailExtApi` | `src/DoiT/Models/TicketDetailExtApi.cs` |
| `GetTicketError` | `src/DoiT/Errors/GetTicketError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListTicketComments

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListTicketComments(ListTicketCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TicketId`
- **Returns**: `CommentsResponseExtApi`
- **Error**: `ApiException<ListTicketCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTicketCommentsRequest` | `src/DoiT/Requests/SupportRequests/ListTicketCommentsRequest.cs` |
| `CommentsResponseExtApi` | `src/DoiT/Models/CommentsResponseExtApi.cs` |
| `ListTicketCommentsError` | `src/DoiT/Errors/ListTicketCommentsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListTicketTags

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListTicketTags(ListTicketTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TicketId`
- **Returns**: `TagsGetResponse`
- **Error**: `ApiException<ListTicketTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTicketTagsRequest` | `src/DoiT/Requests/SupportRequests/ListTicketTagsRequest.cs` |
| `TagsGetResponse` | `src/DoiT/Models/TagsGetResponse.cs` |
| `ListTicketTagsError` | `src/DoiT/Errors/ListTicketTagsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListTickets

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListTickets(ListTicketsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `minCreationTime` ← `MinCreationTime`, `maxCreationTime` ← `MaxCreationTime`
- **Returns**: `TicketsList`
- **Error**: `ApiException<ListTicketsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTicketsRequest` | `src/DoiT/Requests/SupportRequests/ListTicketsRequest.cs` |
| `TicketsList` | `src/DoiT/Models/TicketsList.cs` |
| `ListTicketsError` | `src/DoiT/Errors/ListTicketsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### RemoveTicketTags

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `RemoveTicketTags(RemoveTicketTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TicketId`, `Body`
- **Returns**: `TagsResponse`
- **Error**: `ApiException<RemoveTicketTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveTicketTagsRequest` | `src/DoiT/Requests/SupportRequests/RemoveTicketTagsRequest.cs` |
| `TagsRequest` | `src/DoiT/Models/TagsRequest.cs` |
| `TagsResponse` | `src/DoiT/Models/TagsResponse.cs` |
| `RemoveTicketTagsError` | `src/DoiT/Errors/RemoveTicketTagsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateTicket

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateTicket(UpdateTicketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TicketId`, `Body`
- **Returns**: `SupportV1TicketsResponse`
- **Error**: `ApiException<UpdateTicketError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTicketRequest` | `src/DoiT/Requests/SupportRequests/UpdateTicketRequest.cs` |
| `SupportV1TicketsRequest` | `src/DoiT/Models/SupportV1TicketsRequest.cs` |
| `SupportV1TicketsResponse` | `src/DoiT/Models/SupportV1TicketsResponse.cs` |
| `UpdateTicketError` | `src/DoiT/Errors/UpdateTicketError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

