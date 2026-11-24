<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountApi — operations

Accessor: `client.accountApi` · Source: `src/resources/account-api.ts` · 1 operation · Request and error types: namespace `AccountApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `staying-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### account

- **Signature**: `account(options?: RequestOptions): ApiPromise<AccountEnvelope, AccountApi.AccountError>`
- **Wire**: `GET /account`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountEnvelope`
- **Error**: `StayingApiError` with `kind: "api"`, an instance of `AccountApi.AccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [401] `ErrorEnvelope` · `"errorEnvelope2"` [429] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountEnvelope` | `accountEnvelopeSchema` | `src/models/account-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

