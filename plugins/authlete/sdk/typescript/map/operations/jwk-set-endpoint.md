<!-- Generated file — do not edit; regenerated with the SDK. -->

# JwkSetEndpoint — operations

Accessor: `client.jwkSetEndpoint` · Source: `src/resources/jwk-set-endpoint.ts` · 1 operation · Request and error types: namespace `JwkSetEndpoint`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `authlete-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### serviceJwksGetApi

- **Signature**: `serviceJwksGetApi(request: JwkSetEndpoint.ServiceJwksGetApiRequest, options?: RequestOptions): ApiPromise<ServiceJwksGetResponse, JwkSetEndpoint.ServiceJwksGetApiError>`
- **Wire**: `GET /api/{serviceId}/service/jwks/get`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceJwksGetResponse`
- **Error**: `AuthleteApiError` with `kind: "api"`, an instance of `JwkSetEndpoint.ServiceJwksGetApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"result"` [400] `Result` · `"result2"` [401] `Result` · `"result3"` [403] `Result` · `"result4"` [429] `Result` · `"result5"` [500] `Result` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `JwkSetEndpoint.ServiceJwksGetApiRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `serviceId` | `path` | `string` | yes |
| `includePrivateKeys` | `query` | `boolean` | no |
| `pretty` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceJwksGetResponse` | `serviceJwksGetResponseSchema` | `src/models/service-jwks-get-response.ts` |
| `Result` | `resultSchema` | `src/models/result.ts` |

