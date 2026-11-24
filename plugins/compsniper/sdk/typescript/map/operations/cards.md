<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cards — operations

Accessor: `client.cards` · Source: `src/resources/cards.ts` · 3 operations · Request and error types: namespace `Cards`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelCardBatch

- **Signature**: `cancelCardBatch(request: Cards.CancelCardBatchRequest, options?: RequestOptions): ApiPromise<undefined, Cards.CancelCardBatchError>`
- **Wire**: `DELETE /v1/cards/batch/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Cards.CancelCardBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.CancelCardBatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getCardBatch

- **Signature**: `getCardBatch(request: Cards.GetCardBatchRequest, options?: RequestOptions): ApiPromise<CardBatchJob, Cards.GetCardBatchError>`
- **Wire**: `GET /v1/cards/batch/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CardBatchJob`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Cards.GetCardBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.GetCardBatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CardBatchJob` | `cardBatchJobSchema` | `src/models/card-batch-job.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### submitCardBatch

- **Signature**: `submitCardBatch(request: Cards.SubmitCardBatchRequest, options?: RequestOptions): ApiPromise<CardBatchAccepted, Cards.SubmitCardBatchError>`
- **Wire**: `POST /v1/cards/batch`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CardBatchAccepted`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `Cards.SubmitCardBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [409] `ApiErrorModel` · `"apiErrorModel4"` [429] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Cards.SubmitCardBatchRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xCreditSource` | `header` | `X-Credit-Source` | `XCreditSource` | no |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `CardBatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XCreditSource` | `xCreditSourceSchema` | `src/models/xcredit-source.ts` |
| `CardBatchRequest` | `cardBatchRequestSchema` | `src/models/card-batch-request.ts` |
| `CardBatchAccepted` | `cardBatchAcceptedSchema` | `src/models/card-batch-accepted.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

