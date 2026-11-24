<!-- Generated file — do not edit; regenerated with the SDK. -->

# Comments — operations

Accessor: `client.comments` · Source: `src/resources/comments.ts` · 2 operations · Request types: namespace `Comments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Comments

- **Signature**: `getApiV1Comments(request?: Comments.GetApiV1CommentsRequest, options?: RequestOptions): ApiPromise<ApiV1CommentsResponse, ApiError>`
- **Wire**: `GET /api/v1/comments`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1CommentsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Comments.GetApiV1CommentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentsResponse` | `apiV1CommentsResponseSchema` | `src/models/api-v1-comments-response.ts` |

### postApiV1CommentsByThreadIdResolve

- **Signature**: `postApiV1CommentsByThreadIdResolve(request: Comments.PostApiV1CommentsByThreadIdResolveRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `POST /api/v1/comments/{threadId}/resolve`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Comments.PostApiV1CommentsByThreadIdResolveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `threadId` | `path` | `string` | yes |
| `body` | `body` | `ApiV1CommentsResolveRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1CommentsResolveRequest` | `apiV1CommentsResolveRequestSchema` | `src/models/api-v1-comments-resolve-request.ts` |

