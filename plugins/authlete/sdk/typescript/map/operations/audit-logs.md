<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLogs — operations

Accessor: `client.auditLogs` · Source: `src/resources/audit-logs.ts` · 2 operations · Request and error types: namespace `AuditLogs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### auditEntriesGetIdpApi

- **Signature**: `auditEntriesGetIdpApi(request: AuditLogs.AuditEntriesGetIdpApiRequest, options?: RequestOptions): ApiPromise<AuditEntriesGetResponse, AuditLogs.AuditEntriesGetIdpApiError>`
- **Wire**: `GET /api/audit/entries`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditEntriesGetResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `AuditLogs.AuditEntriesGetIdpApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"idpError"` [400] `IdpError` · `"idpError2"` [401] `IdpError` · `"idpError3"` [403] `IdpError` · `"idpError4"` [500] `IdpError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLogs.AuditEntriesGetIdpApiRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `after` | `query` | `Date` (date-time) | no | — |
| `before` | `query` | `Date` (date-time) | no | — |
| `types` | `query` | `string[]` | no | — |
| `organizationId` | `query` | `number` | no | — |
| `limit` | `query` | `number` | no | `100` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuditEntriesGetResponse` | `auditEntriesGetResponseSchema` | `src/models/audit-entries-get-response.ts` |
| `IdpError` | `idpErrorSchema` | `src/models/idp-error.ts` |

### auditTypesGetIdpApi

- **Signature**: `auditTypesGetIdpApi(options?: RequestOptions): ApiPromise<string[], AuditLogs.AuditTypesGetIdpApiError>`
- **Wire**: `GET /api/audit/types`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `AuditLogs.AuditTypesGetIdpApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"idpError"` [400] `IdpError` · `"idpError2"` [401] `IdpError` · `"idpError3"` [403] `IdpError` · `"idpError4"` [500] `IdpError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IdpError` | `idpErrorSchema` | `src/models/idp-error.ts` |

