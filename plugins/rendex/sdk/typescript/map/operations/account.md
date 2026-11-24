<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 1 operation · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `rendex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccount

- **Signature**: `getAccount(options?: RequestOptions): ApiPromise<V1AccountResponse, Account.GetAccountError>`
- **Wire**: `GET /v1/account`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AccountResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Account.GetAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AccountResponse` | `v1AccountResponseSchema` | `src/models/v1-account-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

