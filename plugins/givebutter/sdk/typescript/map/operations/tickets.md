<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tickets — operations

Accessor: `client.tickets` · Source: `src/resources/tickets.ts` · 2 operations · Request and error types: namespace `Tickets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### ticketsIndex

- **Signature**: `ticketsIndex(options?: RequestOptions): ApiPromise<V1TicketsResponse, ApiError>`
- **Wire**: `GET /v1/tickets`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TicketsResponse`
- **Error**: `GivebutterError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TicketsResponse` | `v1TicketsResponseSchema` | `src/models/v1-tickets-response.ts` |

### ticketsShow

- **Signature**: `ticketsShow(request: Tickets.TicketsShowRequest, options?: RequestOptions): ApiPromise<TicketResource, Tickets.TicketsShowError>`
- **Wire**: `GET /v1/tickets/{ticket}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TicketResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Tickets.TicketsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tickets.TicketsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticket` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TicketResource` | `ticketResourceSchema` | `src/models/ticket-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

