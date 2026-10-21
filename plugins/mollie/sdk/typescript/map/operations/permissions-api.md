<!-- Generated file — do not edit; regenerated with the SDK. -->

# PermissionsApi — operations

Accessor: `client.permissionsApi` · Source: `src/resources/permissions-api.ts` · 2 operations · Request and error types: namespace `PermissionsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPermission

- **Signature**: `getPermission(request: PermissionsApi.GetPermissionRequest, options?: RequestOptions): ApiPromise<undefined, PermissionsApi.GetPermissionError>`
- **Wire**: `GET /v2/permissions/{permissionId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PermissionsApi.GetPermissionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PermissionsApi.GetPermissionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `permissionId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listPermissions

- **Signature**: `listPermissions(request: PermissionsApi.ListPermissionsRequest, options?: RequestOptions): ApiPromise<undefined, PermissionsApi.ListPermissionsError>`
- **Wire**: `GET /v2/permissions`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PermissionsApi.ListPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PermissionsApi.ListPermissionsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

