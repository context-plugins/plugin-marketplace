<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sitemaps — operations

Accessor: `client.sitemaps` · Source: `src/resources/sitemaps.ts` · 4 operations · Request and error types: namespace `Sitemaps`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-search-console`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### webmastersSitemapsDelete

- **Signature**: `webmastersSitemapsDelete(request: Sitemaps.WebmastersSitemapsDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Sitemaps.WebmastersSitemapsDeleteError>`
- **Wire**: `DELETE /webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `Sitemaps.WebmastersSitemapsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sitemaps.WebmastersSitemapsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `siteUrl` | `path` | `string` | yes |
| `feedpath` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### webmastersSitemapsGet

- **Signature**: `webmastersSitemapsGet(request: Sitemaps.WebmastersSitemapsGetRequest, options?: RequestOptions): ApiPromise<WmxSitemap, Sitemaps.WebmastersSitemapsGetError>`
- **Wire**: `GET /webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WmxSitemap`
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `Sitemaps.WebmastersSitemapsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sitemaps.WebmastersSitemapsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `siteUrl` | `path` | `string` | yes |
| `feedpath` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmxSitemap` | `wmxSitemapSchema` | `src/models/wmx-sitemap.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### webmastersSitemapsList

- **Signature**: `webmastersSitemapsList(request: Sitemaps.WebmastersSitemapsListRequest, options?: RequestOptions): ApiPromise<SitemapsListResponse, Sitemaps.WebmastersSitemapsListError>`
- **Wire**: `GET /webmasters/v3/sites/{siteUrl}/sitemaps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SitemapsListResponse`
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `Sitemaps.WebmastersSitemapsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sitemaps.WebmastersSitemapsListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `siteUrl` | `path` | `string` | yes |
| `sitemapIndex` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SitemapsListResponse` | `sitemapsListResponseSchema` | `src/models/sitemaps-list-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### webmastersSitemapsSubmit

- **Signature**: `webmastersSitemapsSubmit(request: Sitemaps.WebmastersSitemapsSubmitRequest, options?: RequestOptions): ApiPromise<undefined, Sitemaps.WebmastersSitemapsSubmitError>`
- **Wire**: `PUT /webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `Sitemaps.WebmastersSitemapsSubmitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sitemaps.WebmastersSitemapsSubmitRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `siteUrl` | `path` | `string` | yes |
| `feedpath` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

