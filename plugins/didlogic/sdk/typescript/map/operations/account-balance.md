<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountBalance — operations

Accessor: `client.accountBalance` · Source: `src/resources/account-balance.ts` · 1 operation · Request and error types: namespace `AccountBalance`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### balanceShow

- **Signature**: `balanceShow(options?: RequestOptions): ApiPromise<ApiV1BalanceResponse, AccountBalance.BalanceShowError>`
- **Wire**: `GET /api/v1/balance`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1BalanceResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `AccountBalance.BalanceShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Balance403Error1"` [403] `ApiV1Balance403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1BalanceResponse` | `apiV1BalanceResponseSchema` | `src/models/api-v1-balance-response.ts` |
| `ApiV1Balance403Error1` | `apiV1Balance403Error1Schema` | `src/models/api-v1-balance403-error1.ts` |

