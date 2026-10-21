<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransfersApi — operations

Accessor: `client.transfersApi` · Source: `src/resources/transfers-api.ts` · 2 operations · Request and error types: namespace `TransfersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTransfer

- **Signature**: `createTransfer(request: TransfersApi.CreateTransferRequest, options?: RequestOptions): ApiPromise<undefined, TransfersApi.CreateTransferError>`
- **Wire**: `POST /v2/business-accounts/transfers`
- **Auth**: `advancedAccessToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `TransfersApi.CreateTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"error429"` [429] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransfersApi.CreateTransferRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xClientSignature` | `header` | `X-Client-Signature` | `string` | yes |
| `xClientSignedAt` | `header` | `X-Client-Signed-At` | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes |
| `idempotencyKeyHeader` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `TransferRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRequest` | `transferRequestSchema` | `src/models/transfer-request.ts` |

### getTransfer

- **Signature**: `getTransfer(request: TransfersApi.GetTransferRequest, options?: RequestOptions): ApiPromise<undefined, TransfersApi.GetTransferError>`
- **Wire**: `GET /v2/business-accounts/transfers/{businessAccountsTransferId}`
- **Auth**: `advancedAccessToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `TransfersApi.GetTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransfersApi.GetTransferRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `businessAccountsTransferId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

