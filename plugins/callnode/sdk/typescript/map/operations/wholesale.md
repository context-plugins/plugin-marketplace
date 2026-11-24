<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wholesale — operations

Accessor: `client.wholesale` · Source: `src/resources/wholesale.ts` · 5 operations · Request and error types: namespace `Wholesale`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `call-node`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listWholesaleAreas

- **Signature**: `listWholesaleAreas(request?: Wholesale.ListWholesaleAreasRequest, options?: RequestOptions): ApiPromise<ApiV1WholesaleAreasResponse, Wholesale.ListWholesaleAreasError>`
- **Wire**: `GET /api/v1/wholesale/areas`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1WholesaleAreasResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Wholesale.ListWholesaleAreasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wholesale.ListWholesaleAreasRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `countryId` | `query` | `string` | no |
| `stateId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WholesaleAreasResponse` | `apiV1WholesaleAreasResponseSchema` | `src/models/api-v1-wholesale-areas-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listWholesaleCountries

- **Signature**: `listWholesaleCountries(options?: RequestOptions): ApiPromise<ApiV1WholesaleCountriesResponse, Wholesale.ListWholesaleCountriesError>`
- **Wire**: `GET /api/v1/wholesale/countries`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1WholesaleCountriesResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Wholesale.ListWholesaleCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WholesaleCountriesResponse` | `apiV1WholesaleCountriesResponseSchema` | `src/models/api-v1-wholesale-countries-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listWholesaleStates

- **Signature**: `listWholesaleStates(request?: Wholesale.ListWholesaleStatesRequest, options?: RequestOptions): ApiPromise<ApiV1WholesaleStatesResponse, Wholesale.ListWholesaleStatesError>`
- **Wire**: `GET /api/v1/wholesale/states`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1WholesaleStatesResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Wholesale.ListWholesaleStatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wholesale.ListWholesaleStatesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `countryId` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WholesaleStatesResponse` | `apiV1WholesaleStatesResponseSchema` | `src/models/api-v1-wholesale-states-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### orderWholesaleNumber

- **Signature**: `orderWholesaleNumber(request: Wholesale.OrderWholesaleNumberRequest, options?: RequestOptions): ApiPromise<ApiV1WholesaleNumbersResponse, Wholesale.OrderWholesaleNumberError>`
- **Wire**: `POST /api/v1/wholesale/numbers`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1WholesaleNumbersResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Wholesale.OrderWholesaleNumberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error402"` [402] no body · `"error403"` [403] no body · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wholesale.OrderWholesaleNumberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xIdempotencyKey` | `header` | `X-Idempotency-Key` | `string` | no |
| `body` | `body` | — | `ApiV1WholesaleNumbersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WholesaleNumbersRequest` | `apiV1WholesaleNumbersRequestSchema` | `src/models/api-v1-wholesale-numbers-request.ts` |
| `ApiV1WholesaleNumbersResponse` | `apiV1WholesaleNumbersResponseSchema` | `src/models/api-v1-wholesale-numbers-response.ts` |

### updateWholesaleDelivery

- **Signature**: `updateWholesaleDelivery(request: Wholesale.UpdateWholesaleDeliveryRequest, options?: RequestOptions): ApiPromise<ApiV1WholesaleNumbersDeliveryResponse, Wholesale.UpdateWholesaleDeliveryError>`
- **Wire**: `PATCH /api/v1/wholesale/numbers/{id}/delivery`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1WholesaleNumbersDeliveryResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `Wholesale.UpdateWholesaleDeliveryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wholesale.UpdateWholesaleDeliveryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1WholesaleNumbersDeliveryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1WholesaleNumbersDeliveryRequest` | `apiV1WholesaleNumbersDeliveryRequestSchema` | `src/models/api-v1-wholesale-numbers-delivery-request.ts` |
| `ApiV1WholesaleNumbersDeliveryResponse` | `apiV1WholesaleNumbersDeliveryResponseSchema` | `src/models/api-v1-wholesale-numbers-delivery-response.ts` |

