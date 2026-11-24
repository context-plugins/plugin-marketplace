<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 1 operation · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `juri-sign`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccountCredits

- **Signature**: `getAccountCredits(options?: RequestOptions): ApiPromise<AccountCreditsResponse, Account.GetAccountCreditsError>`
- **Wire**: `GET /account/credits`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountCreditsResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Account.GetAccountCreditsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthenticated1"` [401] `Unauthenticated1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountCreditsResponse` | `accountCreditsResponseSchema` | `src/models/account-credits-response.ts` |
| `Unauthenticated1` | `unauthenticated1Schema` | `src/models/unauthenticated1.ts` |

