<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedEmbeddings — operations

Accessor: `client.dedicatedEmbeddings` · Source: `src/resources/dedicated-embeddings.ts` · 1 operation · Request and error types: namespace `DedicatedEmbeddings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dedicatedEmbeddings

- **Signature**: `dedicatedEmbeddings(request: DedicatedEmbeddings.DedicatedEmbeddingsRequest, options?: RequestOptions): ApiPromise<DedicatedEmbeddingsSuccess, DedicatedEmbeddings.DedicatedEmbeddingsError>`
- **Wire**: `POST /dedicated/v1/embeddings`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedEmbeddingsSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedEmbeddings.DedicatedEmbeddingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedEmbeddings.DedicatedEmbeddingsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedEmbeddingsBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedEmbeddingsBody` | `dedicatedEmbeddingsBodySchema` | `src/models/dedicated-embeddings-body.ts` |
| `DedicatedEmbeddingsSuccess` | `dedicatedEmbeddingsSuccessSchema` | `src/models/dedicated-embeddings-success.ts` |

