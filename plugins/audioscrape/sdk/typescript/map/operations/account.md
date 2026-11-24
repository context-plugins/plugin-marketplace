<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 2 operations · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMe

- **Signature**: `getMe(options?: RequestOptions): ApiPromise<MeResponse, Account.GetMeError>`
- **Wire**: `GET /api/me`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MeResponse`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Account.GetMeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `MeResponse` | `meResponseSchema` | `src/models/me-response.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### getMeUsage

- **Signature**: `getMeUsage(options?: RequestOptions): ApiPromise<UsageResponse, Account.GetMeUsageError>`
- **Wire**: `GET /api/me/usage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageResponse`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Account.GetMeUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageResponse` | `usageResponseSchema` | `src/models/usage-response.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

