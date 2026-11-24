<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stock — operations

Accessor: `client.stock` · Source: `src/resources/stock.ts` · 1 operation · Request types: namespace `Stock`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `financial-modeling-prep`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listStocks

- **Signature**: `listStocks(options?: RequestOptions): ApiPromise<Record<string, unknown>[], ApiError>`
- **Wire**: `GET /stock/list`
- **Auth**: `apiKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinancialModelingPrepError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

