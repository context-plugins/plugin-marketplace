<!-- Generated file — do not edit; regenerated with the SDK. -->

# DedicatedToken — operations

Accessor: `client.dedicatedToken` · Source: `src/resources/dedicated-token.ts` · 2 operations · Request and error types: namespace `DedicatedToken`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dedicatedDetokenization

- **Signature**: `dedicatedDetokenization(request: DedicatedToken.DedicatedDetokenizationRequest, options?: RequestOptions): ApiPromise<DedicatedDetokenizationSuccess, DedicatedToken.DedicatedDetokenizationError>`
- **Wire**: `POST /dedicated/v1/detokenize`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedDetokenizationSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedToken.DedicatedDetokenizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedToken.DedicatedDetokenizationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedDetokenizationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedDetokenizationBody` | `dedicatedDetokenizationBodySchema` | `src/models/dedicated-detokenization-body.ts` |
| `DedicatedDetokenizationSuccess` | `dedicatedDetokenizationSuccessSchema` | `src/models/dedicated-detokenization-success.ts` |

### dedicatedTokenization

- **Signature**: `dedicatedTokenization(request: DedicatedToken.DedicatedTokenizationRequest, options?: RequestOptions): ApiPromise<DedicatedTokenizationSuccess, DedicatedToken.DedicatedTokenizationError>`
- **Wire**: `POST /dedicated/v1/tokenize`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DedicatedTokenizationSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `DedicatedToken.DedicatedTokenizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DedicatedToken.DedicatedTokenizationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `DedicatedTokenizationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `DedicatedTokenizationBody` | `dedicatedTokenizationBodySchema` | `src/models/dedicated-tokenization-body.ts` |
| `DedicatedTokenizationSuccess` | `dedicatedTokenizationSuccessSchema` | `src/models/dedicated-tokenization-success.ts` |

