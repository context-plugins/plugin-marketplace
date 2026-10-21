<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServerlessKnowledge — operations

Accessor: `client.serverlessKnowledge` · Source: `src/resources/serverless-knowledge.ts` · 1 operation · Request and error types: namespace `ServerlessKnowledge`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### serverlessKnowledgeRetrieve

- **Signature**: `serverlessKnowledgeRetrieve(request: ServerlessKnowledge.ServerlessKnowledgeRetrieveRequest, options?: RequestOptions): ApiPromise<ServerlessKnowledgeRetrievalSuccess, ServerlessKnowledge.ServerlessKnowledgeRetrieveError>`
- **Wire**: `POST /serverless/v1/knowledge/retrieve`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServerlessKnowledgeRetrievalSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessKnowledge.ServerlessKnowledgeRetrieveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessKnowledge.ServerlessKnowledgeRetrieveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessKnowledgeRetrievalBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessKnowledgeRetrievalBody` | `serverlessKnowledgeRetrievalBodySchema` | `src/models/serverless-knowledge-retrieval-body.ts` |
| `ServerlessKnowledgeRetrievalSuccess` | `serverlessKnowledgeRetrievalSuccessSchema` | `src/models/serverless-knowledge-retrieval-success.ts` |

