<!-- Generated file — do not edit; regenerated with the SDK. -->

# Licensing — operations

Accessor: `client.licensing` · Source: `src/resources/licensing.ts` · 1 operation · Request and error types: namespace `Licensing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1LicensingSpuConsumption

- **Signature**: `getApiV1LicensingSpuConsumption(request?: Licensing.GetApiV1LicensingSpuConsumptionRequest, options?: RequestOptions): ApiPromise<PublicApiSpuConsumptionResponse, Licensing.GetApiV1LicensingSpuConsumptionError>`
- **Wire**: `GET /api/v1/licensing/spuConsumption`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiSpuConsumptionResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Licensing.GetApiV1LicensingSpuConsumptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Licensing.GetApiV1LicensingSpuConsumptionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiSpuConsumptionResponse` | `publicApiSpuConsumptionResponseSchema` | `src/models/public-api-spu-consumption-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

