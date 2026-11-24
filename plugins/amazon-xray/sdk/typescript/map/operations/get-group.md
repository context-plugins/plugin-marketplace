<!-- Generated file — do not edit; regenerated with the SDK. -->

# GetGroup — operations

Accessor: `client.getGroup` · Source: `src/resources/get-group.ts` · 1 operation · Request and error types: namespace `GetGroup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGroup

- **Signature**: `getGroup(request?: GetGroup.GetGroupRequestParams, options?: RequestOptions): ApiPromise<GetGroupResult, GetGroup.GetGroupError>`
- **Wire**: `POST /GetGroup`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetGroupResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `GetGroup.GetGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GetGroup.GetGroupRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetGroupRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetGroupRequest` | `getGroupRequestSchema` | `src/models/get-group-request.ts` |
| `GetGroupResult` | `getGroupResultSchema` | `src/models/get-group-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

