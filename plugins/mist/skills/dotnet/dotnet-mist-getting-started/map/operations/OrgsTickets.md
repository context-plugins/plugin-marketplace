# OrgsTickets — operations

Accessor: `client.OrgsTickets` · Source: `Api/OrgsTickets.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOrgTicketAttachment
- **HTTP**: `GET /api/v1/orgs/{org_id}/tickets/{ticket_id}/attachments/{attachment_id}` (ApiHost (api))
- **Notes**: Get Org ticket Attachment
- **Signature**: `GetOrgTicketAttachment(Guid orgId, Guid ticketId, Guid attachmentId, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `TicketAttachment`
- **Error**: `SdkException<GetOrgTicketAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadOrgTicketAttachment
- **HTTP**: `POST /api/v1/orgs/{org_id}/tickets/{ticket_id}/attachments` (ApiHost (api))
- **Notes**: Get Org ticket Attachment
- **Signature**: `UploadOrgTicketAttachment(Guid orgId, Guid ticketId, BinaryContent? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadOrgTicketAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddOrgTicketComment
- **HTTP**: `POST /api/v1/orgs/{org_id}/tickets/{ticket_id}/comments` (ApiHost (api))
- **Notes**: Add Comment to support ticket
- **Signature**: `AddOrgTicketComment(Guid orgId, Guid ticketId, string? comment, BinaryContent? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `comment` — nullable, no default → **must pass explicitly**
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Ticket`
- **Error**: `SdkException<AddOrgTicketCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgTickets
- **HTTP**: `GET /api/v1/orgs/{org_id}/tickets/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Tickets
- **Signature**: `CountOrgTickets(Guid orgId, OrgTicketsCountDistinct? distinct, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgTicketsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgTicket
- **HTTP**: `POST /api/v1/orgs/{org_id}/tickets` (ApiHost (api))
- **Notes**: Create a support ticket
- **Signature**: `CreateOrgTicket(Guid orgId, Ticket? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Ticket`
- **Error**: `SdkException<CreateOrgTicketError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgTicket
- **HTTP**: `GET /api/v1/orgs/{org_id}/tickets/{ticket_id}` (ApiHost (api))
- **Notes**: Get support ticket details
- **Signature**: `GetOrgTicket(Guid orgId, Guid ticketId, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `Ticket`
- **Error**: `SdkException<GetOrgTicketError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgTickets
- **HTTP**: `GET /api/v1/orgs/{org_id}/tickets` (ApiHost (api))
- **Notes**: Get List of Tickets of an Org
- **Signature**: `ListOrgTickets(Guid orgId, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `IReadOnlyList<Ticket>`
- **Error**: `SdkException<ListOrgTicketsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgTicket
- **HTTP**: `PUT /api/v1/orgs/{org_id}/tickets/{ticket_id}` (ApiHost (api))
- **Notes**: Update support ticket
- **Signature**: `UpdateOrgTicket(Guid orgId, Guid ticketId, Ticket? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Ticket`
- **Error**: `SdkException<UpdateOrgTicketError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
