<!-- Generated file — do not edit; regenerated with the SDK. -->

# XBankingBalances — operations

Accessor: `client.xBankingBalances` · Source: `src/resources/xbanking-balances.ts` · 1 operation · Request and error types: namespace `XBankingBalances`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchBankingBalances

- **Signature**: `fetchBankingBalances(request?: XBankingBalances.FetchBankingBalancesRequest, options?: RequestOptions): ApiPromise<BankingBalancesResponse, XBankingBalances.FetchBankingBalancesError>`
- **Wire**: `GET /banking_balances`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BankingBalancesResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XBankingBalances.FetchBankingBalancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XBankingBalances.FetchBankingBalancesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountType` | `query` | `account_type` | `AccountType1` | no |
| `bankCode` | `query` | `bank_code` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountType1` | `accountType1Schema` | `src/models/account-type1.ts` |
| `BankingBalancesResponse` | `bankingBalancesResponseSchema` | `src/models/banking-balances-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

