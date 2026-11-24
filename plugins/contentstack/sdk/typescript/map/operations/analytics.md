<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `src/resources/analytics.ts` · 1 operation · Request and error types: namespace `Analytics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCacheRevalidationUsage

- **Signature**: `getCacheRevalidationUsage(options?: RequestOptions): ApiPromise<CacheUsage, Analytics.GetCacheRevalidationUsageError>`
- **Wire**: `GET /organizations/cache-revalidation-usage`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CacheUsage`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Analytics.GetCacheRevalidationUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CacheUsage` | `cacheUsageSchema` | `src/models/cache-usage.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

