<!-- Generated file — do not edit; regenerated with the SDK. -->

# Earthquakes — operations

Accessor: `client.earthquakes` · Source: `src/resources/earthquakes.ts` · 1 operation · Request and error types: namespace `Earthquakes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### earthquakesEarthquakesGet

- **Signature**: `earthquakesEarthquakesGet(request?: Earthquakes.EarthquakesEarthquakesGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Earthquakes.EarthquakesEarthquakesGetError>`
- **Wire**: `GET /earthquakes`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Earthquakes.EarthquakesEarthquakesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Earthquakes.EarthquakesEarthquakesGetRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `minMagnitude` | `query` | `min_magnitude` | `number` | no | `2.5` |
| `period` | `query` | — | `string` | no | `"day"` |
| `tsunamiOnly` | `query` | `tsunami_only` | `boolean` | no | `false` |
| `limit` | `query` | — | `number` | no | `30` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

