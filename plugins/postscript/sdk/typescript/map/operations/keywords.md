<!-- Generated file — do not edit; regenerated with the SDK. -->

# Keywords — operations

Accessor: `client.keywords` · Source: `src/resources/keywords.ts` · 2 operations · Request and error types: namespace `Keywords`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `postscript`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getKeyword

- **Signature**: `getKeyword(request: Keywords.GetKeywordRequest, options?: RequestOptions): ApiPromise<ApiV2KeywordsResponse, Keywords.GetKeywordError>`
- **Wire**: `GET /api/v2/keywords/{id}`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2KeywordsResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Keywords.GetKeywordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Keywords404Error1"` [404] `ApiV2Keywords404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Keywords.GetKeywordRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2KeywordsResponse` | `apiV2KeywordsResponseSchema` | `src/models/api-v2-keywords-response.ts` |
| `ApiV2Keywords404Error1` | `apiV2Keywords404Error1Schema` | `src/models/api-v2-keywords404-error1.ts` |

### getKeywords

- **Signature**: `getKeywords(request?: Keywords.GetKeywordsRequest, options?: RequestOptions): ApiPromise<ApiV2KeywordsResponse1, Keywords.GetKeywordsError>`
- **Wire**: `GET /api/v2/keywords`
- **Auth**: `sec0`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2KeywordsResponse1`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Keywords.GetKeywordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2Keywords403Error1"` [403] `ApiV2Keywords403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Keywords.GetKeywordsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2KeywordsResponse1` | `apiV2KeywordsResponse1Schema` | `src/models/api-v2-keywords-response1.ts` |
| `ApiV2Keywords403Error1` | `apiV2Keywords403Error1Schema` | `src/models/api-v2-keywords403-error1.ts` |

