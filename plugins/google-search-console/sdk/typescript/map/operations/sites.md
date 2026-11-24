<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sites — operations

Accessor: `client.sites` · Source: `src/resources/sites.ts` · 4 operations · Request and error types: namespace `Sites`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-search-console`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### webmastersSitesAdd

- **Signature**: `webmastersSitesAdd(request: Sites.WebmastersSitesAddRequest, options?: RequestOptions): ApiPromise<undefined, Sites.WebmastersSitesAddError>`
- **Wire**: `PUT /webmasters/v3/sites/{siteUrl}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `Sites.WebmastersSitesAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.WebmastersSitesAddRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `siteUrl` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### webmastersSitesDelete

- **Signature**: `webmastersSitesDelete(request: Sites.WebmastersSitesDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Sites.WebmastersSitesDeleteError>`
- **Wire**: `DELETE /webmasters/v3/sites/{siteUrl}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `Sites.WebmastersSitesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.WebmastersSitesDeleteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `siteUrl` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### webmastersSitesGet

- **Signature**: `webmastersSitesGet(request: Sites.WebmastersSitesGetRequest, options?: RequestOptions): ApiPromise<WmxSite, Sites.WebmastersSitesGetError>`
- **Wire**: `GET /webmasters/v3/sites/{siteUrl}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WmxSite`
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `Sites.WebmastersSitesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sites.WebmastersSitesGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `siteUrl` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WmxSite` | `wmxSiteSchema` | `src/models/wmx-site.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### webmastersSitesList

- **Signature**: `webmastersSitesList(options?: RequestOptions): ApiPromise<SitesListResponse, Sites.WebmastersSitesListError>`
- **Wire**: `GET /webmasters/v3/sites`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SitesListResponse`
- **Error**: `GoogleSearchConsoleError` with `kind: "api"`, an instance of `Sites.WebmastersSitesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SitesListResponse` | `sitesListResponseSchema` | `src/models/sites-list-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

