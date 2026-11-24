<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 1 operation · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `surfe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCredits

- **Signature**: `getCredits(options?: RequestOptions): ApiPromise<CreditBalance, Account.GetCreditsError>`
- **Wire**: `GET /credits`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditBalance`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `Account.GetCreditsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditBalance` | `creditBalanceSchema` | `src/models/credit-balance.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

