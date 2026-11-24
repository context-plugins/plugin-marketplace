<!-- Generated file — do not edit; regenerated with the SDK. -->

# DrugShortages — operations

Accessor: `client.drugShortages` · Source: `src/resources/drug-shortages.ts` · 1 operation · Request and error types: namespace `DrugShortages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### drugShortagesDrugShortagesGet

- **Signature**: `drugShortagesDrugShortagesGet(request?: DrugShortages.DrugShortagesDrugShortagesGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, DrugShortages.DrugShortagesDrugShortagesGetError>`
- **Wire**: `GET /drug-shortages`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `DrugShortages.DrugShortagesDrugShortagesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DrugShortages.DrugShortagesDrugShortagesGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no | — |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no | — |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

