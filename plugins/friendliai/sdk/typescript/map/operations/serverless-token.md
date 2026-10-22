<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServerlessToken — operations

Accessor: `client.serverlessToken` · Source: `src/resources/serverless-token.ts` · 2 operations · Request and error types: namespace `ServerlessToken`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### serverlessDetokenization

- **Signature**: `serverlessDetokenization(request: ServerlessToken.ServerlessDetokenizationRequest, options?: RequestOptions): ApiPromise<ServerlessDetokenizationSuccess, ServerlessToken.ServerlessDetokenizationError>`
- **Wire**: `POST /serverless/v1/detokenize`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServerlessDetokenizationSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessToken.ServerlessDetokenizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessToken.ServerlessDetokenizationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessDetokenizationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessDetokenizationBody` | `serverlessDetokenizationBodySchema` | `src/models/serverless-detokenization-body.ts` |
| `ServerlessDetokenizationSuccess` | `serverlessDetokenizationSuccessSchema` | `src/models/serverless-detokenization-success.ts` |

### serverlessTokenization

- **Signature**: `serverlessTokenization(request: ServerlessToken.ServerlessTokenizationRequest, options?: RequestOptions): ApiPromise<ServerlessTokenizationSuccess, ServerlessToken.ServerlessTokenizationError>`
- **Wire**: `POST /serverless/v1/tokenize`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ServerlessTokenizationSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ServerlessToken.ServerlessTokenizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServerlessToken.ServerlessTokenizationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `ServerlessTokenizationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `ServerlessTokenizationBody` | `serverlessTokenizationBodySchema` | `src/models/serverless-tokenization-body.ts` |
| `ServerlessTokenizationSuccess` | `serverlessTokenizationSuccessSchema` | `src/models/serverless-tokenization-success.ts` |

