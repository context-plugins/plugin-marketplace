<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.Automations` · Source: `src/Beehiiv/Api/Automations.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Index6

- **Signature**: `Index6(Index6Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`, `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `AutomationsListResponse`
- **Error**: `ApiException<Index6Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Index6Request` | `src/Beehiiv/Requests/Automations/Index6Request.cs` |
| `AutomationsListRequestExpandItem` | `src/Beehiiv/Models/Enums/AutomationsListRequestExpandItem.cs` |
| `AutomationsListResponse` | `src/Beehiiv/Models/AutomationsListResponse.cs` |
| `Index6Error` | `src/Beehiiv/Errors/Index6Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### ListEmails

- **Signature**: `ListEmails(ListEmailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `AutomationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `page` ← `Page`
- **Returns**: `AutomationEmailsListResponse`
- **Error**: `ApiException<ListEmailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEmailsRequest` | `src/Beehiiv/Requests/Automations/ListEmailsRequest.cs` |
| `AutomationEmailsListResponse` | `src/Beehiiv/Models/AutomationEmailsListResponse.cs` |
| `ListEmailsError` | `src/Beehiiv/Errors/ListEmailsError.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

### Show3

- **Signature**: `Show3(Show3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `AutomationId`, `Authorization`
- **Query params (wire ← C#)**: `expand[]` ← `Expand`
- **Returns**: `AutomationsGetResponse`
- **Error**: `ApiException<Show3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show3Request` | `src/Beehiiv/Requests/Automations/Show3Request.cs` |
| `AutomationsGetRequestExpandItem` | `src/Beehiiv/Models/Enums/AutomationsGetRequestExpandItem.cs` |
| `AutomationsGetResponse` | `src/Beehiiv/Models/AutomationsGetResponse.cs` |
| `Show3Error` | `src/Beehiiv/Errors/Show3Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

