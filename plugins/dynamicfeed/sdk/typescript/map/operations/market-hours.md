<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketHours — operations

Accessor: `client.marketHours` · Source: `src/resources/market-hours.ts` · 1 operation · Request and error types: namespace `MarketHours`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### marketHoursMarketHoursGet

- **Signature**: `marketHoursMarketHoursGet(request?: MarketHours.MarketHoursMarketHoursGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, MarketHours.MarketHoursMarketHoursGetError>`
- **Wire**: `GET /market-hours`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `MarketHours.MarketHoursMarketHoursGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MarketHours.MarketHoursMarketHoursGetRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `market` | `query` | — | `Market` | no |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Market` | `marketSchema` | `src/models/unions/market.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

