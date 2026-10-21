<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebSearchApi — operations

Accessor: `client.webSearchApi` · Source: `src/resources/web-search-api.ts` · 1 operation · Request and error types: namespace `WebSearchApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getWebSearchProviders

- **Signature**: `getWebSearchProviders(request: WebSearchApi.GetWebSearchProvidersRequest, options?: RequestOptions): ApiPromise<WebSearchProvidersResponse, WebSearchApi.GetWebSearchProvidersError>`
- **Wire**: `GET /configurationManager/web-search`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebSearchProvidersResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `WebSearchApi.GetWebSearchProvidersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebSearchApi.GetWebSearchProvidersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reveal` | `query` | `Reveal` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Reveal` | `revealSchema` | `src/models/reveal.ts` |
| `WebSearchProvidersResponse` | `webSearchProvidersResponseSchema` | `src/models/web-search-providers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

