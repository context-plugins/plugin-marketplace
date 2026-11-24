<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tickets — operations

Accessor: `client.Tickets` · Source: `src/Givebutter/Api/Tickets.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TicketsIndex

- **Auth**: `options.Http`
- **Signature**: `TicketsIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1TicketsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `V1TicketsResponse` | `src/Givebutter/Models/V1TicketsResponse.cs` |

### TicketsShow

- **Auth**: `options.Http`
- **Signature**: `TicketsShow(TicketsShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticket`
- **Returns**: `TicketResource`
- **Error**: `ApiException<TicketsShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value)` [403] · `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TicketsShowRequest` | `src/Givebutter/Requests/Tickets/TicketsShowRequest.cs` |
| `TicketResource` | `src/Givebutter/Models/TicketResource.cs` |
| `TicketsShowError` | `src/Givebutter/Errors/TicketsShowError.cs` |
| `AuthorizationException1` | `src/Givebutter/Models/AuthorizationException1.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

