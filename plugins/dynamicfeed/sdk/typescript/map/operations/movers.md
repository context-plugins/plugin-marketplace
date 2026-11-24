<!-- Generated file — do not edit; regenerated with the SDK. -->

# Movers — operations

Accessor: `client.movers` · Source: `src/resources/movers.ts` · 1 operation · Request and error types: namespace `Movers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### moversMoversGet

- **Signature**: `moversMoversGet(request?: Movers.MoversMoversGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Movers.MoversMoversGetError>`
- **Wire**: `GET /movers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Movers.MoversMoversGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Movers.MoversMoversGetRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `direction` | `query` | — | `string` | no | `"gainers"` |
| `assetClass` | `query` | `asset_class` | `AssetClass` | no | — |
| `limit` | `query` | — | `number` | no | `15` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetClass` | `assetClassSchema` | `src/models/unions/asset-class.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

