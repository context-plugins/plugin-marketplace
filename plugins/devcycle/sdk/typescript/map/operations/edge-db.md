<!-- Generated file — do not edit; regenerated with the SDK. -->

# EdgeDb — operations

Accessor: `client.edgeDb` · Source: `src/resources/edge-db.ts` · 1 operation · Request and error types: namespace `EdgeDb`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### patchV1EdgedbByUserId

- **Server**: `defaultDevCycleBucketingBucketingApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchV1EdgedbByUserId(request: EdgeDb.PatchV1EdgedbByUserIdRequest, options?: RequestOptions): ApiPromise<EdgeDbApiResponse, EdgeDb.PatchV1EdgedbByUserIdError>`
- **Wire**: `PATCH /v1/edgedb/{user_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EdgeDbApiResponse`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `EdgeDb.PatchV1EdgedbByUserIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EdgeDb.PatchV1EdgedbByUserIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `path` | `user_id` | `string` | yes |
| `sdkKey` | `query` | — | `string` | no |
| `body` | `body` | — | `UserDataEdgeDb` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserDataEdgeDb` | `userDataEdgeDbSchema` | `src/models/user-data-edge-db.ts` |
| `EdgeDbApiResponse` | `edgeDbApiResponseSchema` | `src/models/edge-db-api-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

