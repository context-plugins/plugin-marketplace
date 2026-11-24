<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeleteGroup — operations

Accessor: `client.deleteGroup` · Source: `src/resources/delete-group.ts` · 1 operation · Request and error types: namespace `DeleteGroup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteGroup

- **Signature**: `deleteGroup(request?: DeleteGroup.DeleteGroupRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, DeleteGroup.DeleteGroupError>`
- **Wire**: `POST /DeleteGroup`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `DeleteGroup.DeleteGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DeleteGroup.DeleteGroupRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteGroupRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteGroupRequest` | `deleteGroupRequestSchema` | `src/models/delete-group-request.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

