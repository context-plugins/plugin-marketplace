<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credentials — operations

Accessor: `client.credentials` · Source: `src/resources/credentials.ts` · 5 operations · Request and error types: namespace `Credentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `plinth-us-grants-data`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### answerChallenge

- **Signature**: `answerChallenge(request: Credentials.AnswerChallengeRequest, options?: RequestOptions): ApiPromise<UnlockResult, Credentials.AnswerChallengeError>`
- **Wire**: `POST /api/v1/agent-key/answer`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UnlockResult`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Credentials.AnswerChallengeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [409] `ApiErrorModel` · `"apiErrorModel4"` [429] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.AnswerChallengeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AnswerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnswerRequest` | `answerRequestSchema` | `src/models/answer-request.ts` |
| `UnlockResult` | `unlockResultSchema` | `src/models/unlock-result.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### describeAgentKey

- **Signature**: `describeAgentKey(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/agent-key`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### describeChallenge

- **Signature**: `describeChallenge(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/agent-key/challenge`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### mintAgentKey

- **Signature**: `mintAgentKey(request: Credentials.MintAgentKeyRequest, options?: RequestOptions): ApiPromise<TrialKey, Credentials.MintAgentKeyError>`
- **Wire**: `POST /api/v1/agent-key`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrialKey`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Credentials.MintAgentKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [429] `ApiErrorModel` · `"apiErrorModel4"` [502] `ApiErrorModel` · `"apiErrorModel5"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.MintAgentKeyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signatureAgent` | `header` | `Signature-Agent` | `string` | no |
| `signatureInput` | `header` | `Signature-Input` | `string` | no |
| `signature` | `header` | `Signature` | `string` | no |
| `body` | `body` | — | `AgentKeyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AgentKeyRequest` | `agentKeyRequestSchema` | `src/models/agent-key-request.ts` |
| `TrialKey` | `trialKeySchema` | `src/models/trial-key.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### takeChallenge

- **Signature**: `takeChallenge(options?: RequestOptions): ApiPromise<ChallengeIssued, Credentials.TakeChallengeError>`
- **Wire**: `POST /api/v1/agent-key/challenge`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChallengeIssued`
- **Error**: `PlinthUsGrantsDataError` with `kind: "api"`, an instance of `Credentials.TakeChallengeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ChallengeIssued` | `challengeIssuedSchema` | `src/models/challenge-issued.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

