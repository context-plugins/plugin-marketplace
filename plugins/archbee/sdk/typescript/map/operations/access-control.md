<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccessControl — operations

Accessor: `client.accessControl` · Source: `src/resources/access-control.ts` · 1 operation · Request and error types: namespace `AccessControl`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `archbee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### requestMagicLinkAccess

- **Signature**: `requestMagicLinkAccess(request: AccessControl.RequestMagicLinkAccessRequest, options?: RequestOptions): ApiPromise<AccessControlRequestResponse, AccessControl.RequestMagicLinkAccessError>`
- **Wire**: `POST /access-control/request`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccessControlRequestResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `AccessControl.RequestMagicLinkAccessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accessControlRequest400Error1"` [400] `AccessControlRequest400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AccessControl.RequestMagicLinkAccessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccessControlRequestRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessControlRequestRequest` | `accessControlRequestRequestSchema` | `src/models/access-control-request-request.ts` |
| `AccessControlRequestResponse` | `accessControlRequestResponseSchema` | `src/models/access-control-request-response.ts` |
| `AccessControlRequest400Error1` | `accessControlRequest400Error1Schema` | `src/models/access-control-request400-error1.ts` |

