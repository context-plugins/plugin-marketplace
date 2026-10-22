<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContainerToken — operations

Accessor: `client.containerToken` · Source: `src/resources/container-token.ts` · 2 operations · Request and error types: namespace `ContainerToken`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### containerDetokenization

- **Signature**: `containerDetokenization(request: ContainerToken.ContainerDetokenizationRequest, options?: RequestOptions): ApiPromise<ContainerDetokenizationSuccess, ContainerToken.ContainerDetokenizationError>`
- **Wire**: `POST /v1/detokenize`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContainerDetokenizationSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerToken.ContainerDetokenizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerToken.ContainerDetokenizationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerDetokenizationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerDetokenizationBody` | `containerDetokenizationBodySchema` | `src/models/container-detokenization-body.ts` |
| `ContainerDetokenizationSuccess` | `containerDetokenizationSuccessSchema` | `src/models/container-detokenization-success.ts` |

### containerTokenization

- **Signature**: `containerTokenization(request: ContainerToken.ContainerTokenizationRequest, options?: RequestOptions): ApiPromise<ContainerTokenizationSuccess, ContainerToken.ContainerTokenizationError>`
- **Wire**: `POST /v1/tokenize`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContainerTokenizationSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `ContainerToken.ContainerTokenizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContainerToken.ContainerTokenizationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContainerTokenizationBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContainerTokenizationBody` | `containerTokenizationBodySchema` | `src/models/container-tokenization-body.ts` |
| `ContainerTokenizationSuccess` | `containerTokenizationSuccessSchema` | `src/models/container-tokenization-success.ts` |

