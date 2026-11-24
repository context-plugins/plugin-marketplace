<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServersApi — operations

Accessor: `client.serversApi` · Source: `src/resources/servers-api.ts` · 1 operation · Request and error types: namespace `ServersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### serversServersGet

- **Signature**: `serversServersGet(request?: ServersApi.ServersServersGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ServersApi.ServersServersGetError>`
- **Wire**: `GET /servers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `ServersApi.ServersServersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ServersApi.ServersServersGetRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `q` | `query` | — | `Q` | no | — |
| `hasRemote` | `query` | `has_remote` | `HasRemote` | no | — |
| `minStars` | `query` | `min_stars` | `MinStars` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Q` | `qSchema` | `src/models/unions/q.ts` |
| `HasRemote` | `hasRemoteSchema` | `src/models/unions/has-remote.ts` |
| `MinStars` | `minStarsSchema` | `src/models/unions/min-stars.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

