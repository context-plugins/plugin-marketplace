<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsageApi — operations

Accessor: `client.usageApi` · Source: `src/resources/usage-api.ts` · 1 operation · Request and error types: namespace `UsageApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `prisma-reviews`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUsage

- **Signature**: `getUsage(options?: RequestOptions): ApiPromise<Usage, UsageApi.GetUsageError>`
- **Wire**: `GET /v1/usage`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Usage`
- **Error**: `PrismaReviewsError` with `kind: "api"`, an instance of `UsageApi.GetUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Usage` | `usageSchema` | `src/models/usage.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

