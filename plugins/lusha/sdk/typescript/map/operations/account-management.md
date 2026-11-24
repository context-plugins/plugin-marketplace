<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountManagement — operations

Accessor: `client.accountManagement` · Source: `src/resources/account-management.ts` · 1 operation · Request and error types: namespace `AccountManagement`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lusha`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAccountUsageStats

- **Signature**: `getAccountUsageStats(options?: RequestOptions): ApiPromise<AccountUsageStatsResponse, AccountManagement.GetAccountUsageStatsError>`
- **Wire**: `GET /account/usage`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountUsageStatsResponse`
- **Error**: `LushaError` with `kind: "api"`, an instance of `AccountManagement.GetAccountUsageStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [429] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountUsageStatsResponse` | `accountUsageStatsResponseSchema` | `src/models/account-usage-stats-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

