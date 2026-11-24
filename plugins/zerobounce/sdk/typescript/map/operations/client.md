<!-- Generated file — do not edit; regenerated with the SDK. -->

# ZeroBounceClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 2 operations · Request types: namespace `ZeroBounceClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `ZeroBounceClient.ValidateRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `zero-bounce`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### validate

- **Signature**: `validate(request: ZeroBounceClient.ValidateRequest, options?: RequestOptions): ApiPromise<ValidateEmailResponse, ApiError>`
- **Wire**: `POST /api/validation/chatgpt-single-email-validation/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ValidateEmailResponse`
- **Error**: `ZeroBounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ZeroBounceClient.ValidateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ValidateEmailRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValidateEmailRequest` | `validateEmailRequestSchema` | `src/models/validate-email-request.ts` |
| `ValidateEmailResponse` | `validateEmailResponseSchema` | `src/models/validate-email-response.ts` |

### validateBatch

- **Signature**: `validateBatch(request: ZeroBounceClient.ValidateBatchRequestParams, options?: RequestOptions): ApiPromise<ValidateEmailResponse[], ApiError>`
- **Wire**: `POST /api/validation/chatgpt-batch-validation/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ValidateEmailResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ZeroBounceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ZeroBounceClient.ValidateBatchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ValidateBatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ValidateBatchRequest` | `validateBatchRequestSchema` | `src/models/validate-batch-request.ts` |
| `ValidateEmailResponse` | `validateEmailResponseSchema` | `src/models/validate-email-response.ts` |

