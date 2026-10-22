<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionsSessions — operations

Accessor: `client.transactionsSessions` · Source: `src/resources/transactions-sessions.ts` · 1 operation · Request and error types: namespace `TransactionsSessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gr4vy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### updateSession

- **Signature**: `updateSession(request: TransactionsSessions.UpdateSessionRequest, options?: RequestOptions): ApiPromise<UpdateTransactionSessionResponse, TransactionsSessions.UpdateSessionError>`
- **Wire**: `POST /transactions/{transaction_id}/session`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateTransactionSessionResponse`
- **Error**: `Gr4VyError` with `kind: "api"`, an instance of `TransactionsSessions.UpdateSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Error400` · `"error401"` [401] `Error401` · `"error403"` [403] `Error403` · `"error404"` [404] `Error404` · `"error405"` [405] `Error405` · `"error409"` [409] `Error409` · `"error425"` [425] `Error425` · `"error429"` [429] `Error429` · `"error500"` [500] `Error500` · `"error502"` [502] `Error502` · `"error504"` [504] `Error504` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsSessions.UpdateSessionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transactionId` | `path` | `transaction_id` | `string` | yes |
| `token` | `query` | — | `Token4` | no |
| `body` | `body` | — | `Body2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Token4` | `token4Schema` | `src/models/unions/token4.ts` |
| `Body2` | `body2Schema` | `src/models/unions/body2.ts` |
| `UpdateTransactionSessionResponse` | `updateTransactionSessionResponseSchema` | `src/models/update-transaction-session-response.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |
| `Error401` | `error401Schema` | `src/models/error401.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error405` | `error405Schema` | `src/models/error405.ts` |
| `Error409` | `error409Schema` | `src/models/error409.ts` |
| `Error425` | `error425Schema` | `src/models/error425.ts` |
| `Error429` | `error429Schema` | `src/models/error429.ts` |
| `Error500` | `error500Schema` | `src/models/error500.ts` |
| `Error502` | `error502Schema` | `src/models/error502.ts` |
| `Error504` | `error504Schema` | `src/models/error504.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

