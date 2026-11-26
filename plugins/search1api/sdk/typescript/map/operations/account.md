<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `src/resources/account.ts` · 1 operation · Request and error types: namespace `Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `search1-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### usage

- **Signature**: `usage(request?: Account.UsageRequest, options?: RequestOptions): ApiPromise<UsageResponse, Account.UsageError>`
- **Wire**: `GET /usage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageResponse`
- **Error**: `Search1ApiError` with `kind: "api"`, an instance of `Account.UsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [429] `ApiErrorModel` · `"apiErrorModel4"` [500] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Account.UsageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `period` | `query` | `Period` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period` | `periodSchema` | `src/models/period.ts` |
| `UsageResponse` | `usageResponseSchema` | `src/models/usage-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

