<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 2 operations · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `coresignal`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchCompaniesByEsDsl

- **Signature**: `searchCompaniesByEsDsl(request: Search.SearchCompaniesByEsDslRequest, options?: RequestOptions): ApiPromise<number[], ApiError>`
- **Wire**: `POST /search/es_dsl`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `number[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoresignalError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Search.SearchCompaniesByEsDslRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | yes |

### searchCompaniesByFilter

- **Signature**: `searchCompaniesByFilter(request: Search.SearchCompaniesByFilterRequest, options?: RequestOptions): ApiPromise<number[], Search.SearchCompaniesByFilterError>`
- **Wire**: `POST /search/filter`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `number[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CoresignalError` with `kind: "api"`, an instance of `Search.SearchCompaniesByFilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error402"` [402] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchCompaniesByFilterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CompanyFilter` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyFilter` | `companyFilterSchema` | `src/models/company-filter.ts` |

