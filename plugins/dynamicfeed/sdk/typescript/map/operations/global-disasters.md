<!-- Generated file — do not edit; regenerated with the SDK. -->

# GlobalDisasters — operations

Accessor: `client.globalDisasters` · Source: `src/resources/global-disasters.ts` · 1 operation · Request and error types: namespace `GlobalDisasters`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### globalDisastersEpGlobalDisastersGet

- **Signature**: `globalDisastersEpGlobalDisastersGet(request?: GlobalDisasters.GlobalDisastersEpGlobalDisastersGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, GlobalDisasters.GlobalDisastersEpGlobalDisastersGetError>`
- **Wire**: `GET /global-disasters`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `GlobalDisasters.GlobalDisastersEpGlobalDisastersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GlobalDisasters.GlobalDisastersEpGlobalDisastersGetRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `alertLevel` | `query` | `alert_level` | `string` | no | `"Orange;Red"` |
| `eventType` | `query` | `event_type` | `EventType` | no | — |
| `country` | `query` | — | `Country` | no | — |
| `days` | `query` | — | `number` | no | `7` |
| `limit` | `query` | — | `number` | no | `50` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventType` | `eventTypeSchema` | `src/models/unions/event-type.ts` |
| `Country` | `countrySchema` | `src/models/unions/country.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

