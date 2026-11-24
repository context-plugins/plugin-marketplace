<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.news` · Source: `src/resources/news.ts` · 2 operations · Request and error types: namespace `News`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `compabase`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCompaniesKrsByKrsNews

- **Signature**: `getCompaniesKrsByKrsNews(request: News.GetCompaniesKrsByKrsNewsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, News.GetCompaniesKrsByKrsNewsError>`
- **Wire**: `GET /companies/krs/{krs}/news`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `News.GetCompaniesKrsByKrsNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"errorResponse2"` [400] `ErrorResponse` · `"errorResponse3"` [401] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetCompaniesKrsByKrsNewsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `krs` | `path` | `string` | yes | — |
| `locale` | `query` | `string` | no | `"en"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getNews

- **Signature**: `getNews(request?: News.GetNewsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, News.GetNewsError>`
- **Wire**: `GET /news`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `News.GetNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetNewsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `since` | `query` | `string` | no |
| `pkd` | `query` | `string` | no |
| `city` | `query` | `string` | no |
| `locale` | `query` | `Locale` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Locale` | `localeSchema` | `src/models/locale.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

