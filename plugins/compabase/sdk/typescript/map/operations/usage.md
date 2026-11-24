<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.usage` · Source: `src/resources/usage.ts` · 1 operation · Request and error types: namespace `Usage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `compabase`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUsage

- **Signature**: `getUsage(options?: RequestOptions): ApiPromise<UsageResponse, Usage.GetUsageError>`
- **Wire**: `GET /usage`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Usage.GetUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageResponse` | `usageResponseSchema` | `src/models/usage-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

