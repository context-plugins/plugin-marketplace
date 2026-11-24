<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wildfires — operations

Accessor: `client.wildfires` · Source: `src/resources/wildfires.ts` · 1 operation · Request and error types: namespace `Wildfires`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### wildfiresWildfiresGet

- **Signature**: `wildfiresWildfiresGet(request?: Wildfires.WildfiresWildfiresGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Wildfires.WildfiresWildfiresGetError>`
- **Wire**: `GET /wildfires`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Wildfires.WildfiresWildfiresGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wildfires.WildfiresWildfiresGetRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `state` | `query` | — | `State` | no | — |
| `onlyUncontained` | `query` | `only_uncontained` | `boolean` | no | `false` |
| `minAcres` | `query` | `min_acres` | `number` | no | `0` |
| `limit` | `query` | — | `number` | no | `25` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `State` | `stateSchema` | `src/models/unions/state.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

