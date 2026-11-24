<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sharing — operations

Accessor: `client.sharing` · Source: `src/resources/sharing.ts` · 2 operations · Request and error types: namespace `Sharing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getResourcePermission

- **Signature**: `getResourcePermission(request: Sharing.GetResourcePermissionRequest, options?: RequestOptions): ApiPromise<ResourcePermissionsResponse, Sharing.GetResourcePermissionError>`
- **Wire**: `GET /sharing/v1/{resourceType}/{resourceId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResourcePermissionsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Sharing.GetResourcePermissionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sharing.GetResourcePermissionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceType` | `path` | `ResourceType` | yes |
| `resourceId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `ResourcePermissionsResponse` | `resourcePermissionsResponseSchema` | `src/models/resource-permissions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateResourcePermission

- **Signature**: `updateResourcePermission(request: Sharing.UpdateResourcePermissionRequest, options?: RequestOptions): ApiPromise<ResourcePermissionsResponse, Sharing.UpdateResourcePermissionError>`
- **Wire**: `PUT /sharing/v1/{resourceType}/{resourceId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResourcePermissionsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Sharing.UpdateResourcePermissionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sharing.UpdateResourcePermissionRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `resourceType` | `path` | `ResourceType` | yes |
| `resourceId` | `path` | `string` | yes |
| `body` | `body` | `SharingV1Request` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceType` | `resourceTypeSchema` | `src/models/resource-type.ts` |
| `SharingV1Request` | `sharingV1RequestSchema` | `src/models/sharing-v1-request.ts` |
| `ResourcePermissionsResponse` | `resourcePermissionsResponseSchema` | `src/models/resource-permissions-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

