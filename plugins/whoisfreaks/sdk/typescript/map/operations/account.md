<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 3 operations · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `whois-freaks`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### accountUsage

- **Signature**: `accountUsage(options?: RequestOptions): ApiPromise<AccountUsageResponse, Account.AccountUsageError>`
- **Wire**: `GET /v1.0/whoisapi/usage`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AccountUsageResponse`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Account.AccountUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [4XX wildcard] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountUsageResponse` | `accountUsageResponseSchema` | `src/models/account-usage-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### databaseFileStatus

- **Signature**: `databaseFileStatus(options?: RequestOptions): ApiPromise<DatabaseFileStatus, Account.DatabaseFileStatusError>`
- **Wire**: `GET /v3.4/status`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatabaseFileStatus`
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Account.DatabaseFileStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DatabaseFileStatus` | `databaseFileStatusSchema` | `src/models/database-file-status.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### rotateApiKey

- **Signature**: `rotateApiKey(options?: RequestOptions): ApiPromise<string, Account.RotateApiKeyError>`
- **Wire**: `GET /v1.0/api-key/rotate`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `WhoisFreaksError` with `kind: "api"`, an instance of `Account.RotateApiKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

