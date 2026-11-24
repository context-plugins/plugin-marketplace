<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 1 operation · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccountUsage

- **Signature**: `getAccountUsage(options?: RequestOptions): ApiPromise<AccountUsageResponse, Account.GetAccountUsageError>`
- **Wire**: `GET /v3/account/usage`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountUsageResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `Account.GetAccountUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountUsageResponse` | `accountUsageResponseSchema` | `src/models/account-usage-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

