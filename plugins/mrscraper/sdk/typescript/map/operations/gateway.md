<!-- Generated file — do not edit; regenerated with the SDK. -->

# Gateway — operations

Accessor: `client.gateway` · Source: `src/resources/gateway.ts` · 2 operations · Request types: namespace `Gateway`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mr-scraper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getRoot

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getRoot(request: Gateway.GetRootRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Gateway.GetRootRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `url` | `query` | `string` | yes |
| `token` | `query` | `string` | no |
| `async` | `query` | `boolean` | no |
| `beta` | `query` | `boolean` | no |
| `detectedJson` | `query` | `boolean` | no |

### postRoot

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postRoot(request: Gateway.PostRootRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Gateway.PostRootRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `async` | `query` | `boolean` | no |
| `beta` | `query` | `boolean` | no |
| `body` | `body` | `GatewayRequestBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GatewayRequestBody` | `gatewayRequestBodySchema` | `src/models/gateway-request-body.ts` |

