<!-- Generated file — do not edit; regenerated with the SDK. -->

# Permissions — operations

Accessor: `client.permissions` · Source: `src/resources/permissions.ts` · 2 operations · Request and error types: namespace `Permissions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-sqs`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addPermission

- **Signature**: `addPermission(request: Permissions.AddPermissionRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.AddPermissionError>`
- **Wire**: `POST /#AddPermission`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Permissions.AddPermissionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.AddPermissionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonSimpleQueueServicePermissionsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonSimpleQueueServicePermissionsApi` | `xAmzTargetAmazonSimpleQueueServicePermissionsApiSchema` | `src/models/xamz-target-amazon-simple-queue-service-permissions-api.ts` |

### removePermission

- **Signature**: `removePermission(request: Permissions.RemovePermissionRequestParams, options?: RequestOptions): ApiPromise<undefined, Permissions.RemovePermissionError>`
- **Wire**: `POST /#RemovePermission`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonSqsError` with `kind: "api"`, an instance of `Permissions.RemovePermissionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error403"` [403] no body · `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Permissions.RemovePermissionRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonSimpleQueueServicePermissionsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonSimpleQueueServicePermissionsApi` | `xAmzTarget1AmazonSimpleQueueServicePermissionsApiSchema` | `src/models/xamz-target1-amazon-simple-queue-service-permissions-api.ts` |

