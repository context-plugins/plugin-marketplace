<!-- Generated file — do not edit; regenerated with the SDK. -->

# Permissions — operations

Accessor: `client.permissions` · Source: `src/resources/permissions.ts` · 1 operation · Request types: namespace `Permissions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### permissionsList

- **Signature**: `permissionsList(options?: RequestOptions): ApiPromise<PermissionGroupResponse[], ApiError>`
- **Wire**: `GET /api/v1/permissions/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PermissionGroupResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `PermissionGroupResponse` | `permissionGroupResponseSchema` | `src/models/permission-group-response.ts` |

