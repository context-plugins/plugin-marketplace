<!-- Generated file — do not edit; regenerated with the SDK. -->

# QuoteApi — operations

Accessor: `client.quoteApi` · Source: `src/resources/quote-api.ts` · 1 operation · Request types: namespace `QuoteApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `financial-modeling-prep`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getQuote

- **Signature**: `getQuote(request: QuoteApi.GetQuoteRequest, options?: RequestOptions): ApiPromise<Quote[], ApiError>`
- **Wire**: `GET /quote/{symbol}`
- **Auth**: `apiKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Quote[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinancialModelingPrepError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `QuoteApi.GetQuoteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `symbol` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Quote` | `quoteSchema` | `src/models/quote.ts` |

