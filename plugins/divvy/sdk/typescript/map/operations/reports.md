<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 1 operation · Request and error types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVendorAuditTrail

- **Signature**: `getVendorAuditTrail(request: Reports.GetVendorAuditTrailRequest, options?: RequestOptions): ApiPromise<AuditTrailEntry[], Reports.GetVendorAuditTrailError>`
- **Wire**: `GET /v3/reports/audit-trail/vendor/{vendorId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditTrailEntry[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Reports.GetVendorAuditTrailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetVendorAuditTrailRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `path` | `string` | yes |
| `includeArchived` | `query` | `boolean` | no |
| `start` | `query` | `number` | no |
| `max` | `query` | `number` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuditTrailEntry` | `auditTrailEntrySchema` | `src/models/audit-trail-entry.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

