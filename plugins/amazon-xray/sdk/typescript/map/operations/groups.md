<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.groups` · Source: `src/resources/groups.ts` · 1 operation · Request and error types: namespace `Groups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `aws-x-ray`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGroups

- **Signature**: `getGroups(request?: Groups.GetGroupsRequest, options?: RequestOptions): ApiPromise<GetGroupsResult, Groups.GetGroupsError>`
- **Wire**: `POST /Groups`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetGroupsResult`
- **Error**: `AwsXRayError` with `kind: "api"`, an instance of `Groups.GetGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestException"` [400] `InvalidRequestException` · `"throttledException"` [429] `ThrottledException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Groups.GetGroupsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GroupsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupsRequest` | `groupsRequestSchema` | `src/models/groups-request.ts` |
| `GetGroupsResult` | `getGroupsResultSchema` | `src/models/get-groups-result.ts` |
| `InvalidRequestException` | `invalidRequestExceptionSchema` | `src/models/invalid-request-exception.ts` |
| `ThrottledException` | `throttledExceptionSchema` | `src/models/throttled-exception.ts` |

