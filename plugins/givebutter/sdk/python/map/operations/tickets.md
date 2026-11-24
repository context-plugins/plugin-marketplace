<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tickets — operations

Accessor: `client.tickets` · Source: `givebutter/apis/tickets.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tickets.tickets_index

- **Route**: `GET /v1/tickets`
- **Auth**: `http`
- **Signature**: `def tickets_index(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1TicketsResponse`
- **Returns (raw)**: `ApiResult[V1TicketsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1TicketsResponse` | `givebutter/models/v1_tickets_response.py` |

### client.tickets.tickets_show

- **Route**: `GET /v1/tickets/{ticket}`
- **Auth**: `http`
- **Signature**: `def tickets_show(ticket: str | None, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticket`
- **Params**: `ticket` — path
- **Returns (parsed)**: `TicketResource`
- **Returns (raw)**: `ApiResult[TicketResource, TicketsShowErrorBody]`
- **Error**: `TicketsShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TicketResource` | `givebutter/models/ticket_resource.py` |
| `TicketsShowErrorBody` | `givebutter/errors/tickets_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

