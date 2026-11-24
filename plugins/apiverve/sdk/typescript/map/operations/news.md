<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.news` · Source: `src/resources/news.ts` · 1 operation · Request and error types: namespace `News`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### news

- **Signature**: `news(request: News.NewsRequest, options?: RequestOptions): ApiPromise<V1NewsResponse, News.NewsError>`
- **Wire**: `GET /v1/news`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1NewsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `News.NewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.NewsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `category` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1NewsResponse` | `v1NewsResponseSchema` | `src/models/v1-news-response.ts` |

