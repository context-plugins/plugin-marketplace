<!-- Generated file — do not edit; regenerated with the SDK. -->

# UpdateGroup — operations

Accessor: `client.updateGroup` · Source: `src/resources/update-group.ts` · 1 operation · Request and error types: namespace `UpdateGroup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### updateGroup

- **Signature**: `updateGroup(request?: UpdateGroup.UpdateGroupRequestParams, options?: RequestOptions): ApiPromise<UpdateGroupResult, UpdateGroup.UpdateGroupError>`
- **Wire**: `POST /UpdateGroup`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateGroupResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `UpdateGroup.UpdateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UpdateGroup.UpdateGroupRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateGroupRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateGroupRequest` | `updateGroupRequestSchema` | `src/models/update-group-request.ts` |
| `UpdateGroupResult` | `updateGroupResultSchema` | `src/models/update-group-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

