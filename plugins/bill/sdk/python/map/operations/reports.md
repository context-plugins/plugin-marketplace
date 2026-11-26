<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `bill/apis/reports.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.reports.get_vendor_audit_trail

- **Route**: `GET /v3/reports/audit-trail/vendor/{vendorId}`
- **Server**: `default`
- **Signature**: `def get_vendor_audit_trail(vendor_id: str, *, include_archived: bool | None = None, start: int | None = None, max_: int | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`
- **Params**: `vendor_id` — path `vendorId` · `include_archived` — query `includeArchived` · `start` — query · `max_` — query `max` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `list[AuditTrailEntry]`
- **Returns (raw)**: `ApiResult[list[AuditTrailEntry], GetVendorAuditTrailErrorBody]`
- **Error**: `GetVendorAuditTrailErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AuditTrailEntry` | `bill/models/audit_trail_entry.py` |
| `GetVendorAuditTrailErrorBody` | `bill/errors/get_vendor_audit_trail_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

