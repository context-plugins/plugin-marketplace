<!-- Generated file — do not edit; regenerated with the SDK. -->

# ShippingRates — operations

Accessor: `client.shippingRates` · Source: `src/resources/shipping-rates.ts` · 2 operations · Request and error types: namespace `ShippingRates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `comp-sniper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getShippingRateUsage

- **Signature**: `getShippingRateUsage(options?: RequestOptions): ApiPromise<ShippingRateUsageResponse, ShippingRates.GetShippingRateUsageError>`
- **Wire**: `GET /v1/shipping/usage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ShippingRateUsageResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `ShippingRates.GetShippingRateUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ShippingRateUsageResponse` | `shippingRateUsageResponseSchema` | `src/models/shipping-rate-usage-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getShippingRates

- **Signature**: `getShippingRates(request: ShippingRates.GetShippingRatesRequest, options?: RequestOptions): ApiPromise<ShippingRateResponse, ShippingRates.GetShippingRatesError>`
- **Wire**: `POST /v1/shipping/rates`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ShippingRateResponse`
- **Error**: `CompSniperError` with `kind: "api"`, an instance of `ShippingRates.GetShippingRatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [409] `ApiErrorModel` · `"apiErrorModel5"` [413] `ApiErrorModel` · `"apiErrorModel6"` [422] `ApiErrorModel` · `"apiErrorModel7"` [429] `ApiErrorModel` · `"apiErrorModel8"` [502] `ApiErrorModel` · `"apiErrorModel9"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ShippingRates.GetShippingRatesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `ShippingRateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShippingRateRequest` | `shippingRateRequestSchema` | `src/models/shipping-rate-request.ts` |
| `ShippingRateResponse` | `shippingRateResponseSchema` | `src/models/shipping-rate-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

