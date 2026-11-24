<!-- Generated file — do not edit; regenerated with the SDK. -->

# Creategroup — operations

Accessor: `client.creategroup` · Source: `src/resources/creategroup.ts` · 1 operation · Request and error types: namespace `Creategroup`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createGroup

- **Signature**: `createGroup(request?: Creategroup.CreateGroupRequestParams, options?: RequestOptions): ApiPromise<CreateGroupResult, Creategroup.CreateGroupError>`
- **Wire**: `POST /CreateGroup`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateGroupResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Creategroup.CreateGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Creategroup.CreateGroupRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateGroupRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGroupRequest` | `createGroupRequestSchema` | `src/models/create-group-request.ts` |
| `CreateGroupResult` | `createGroupResultSchema` | `src/models/create-group-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

