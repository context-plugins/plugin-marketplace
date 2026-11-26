<!-- Generated file — do not edit; regenerated with the SDK. -->

# CoverageApi — operations

Accessor: `client.coverageApi` · Source: `src/resources/coverage-api.ts` · 1 operation · Request and error types: namespace `CoverageApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `alph-ai`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiCoverage

- **Signature**: `getApiCoverage(options?: RequestOptions): ApiPromise<Coverage, CoverageApi.GetApiCoverageError>`
- **Wire**: `GET /api/coverage/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Coverage`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `CoverageApi.GetApiCoverageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"error3"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Coverage` | `coverageSchema` | `src/models/coverage.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

