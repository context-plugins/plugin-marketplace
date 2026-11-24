<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credits — operations

Accessor: `client.credits` · Source: `src/resources/credits.ts` · 3 operations · Request and error types: namespace `Credits`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCreditCurrency

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCreditCurrency(request: Credits.CreateCreditCurrencyRequestParams, options?: RequestOptions): ApiPromise<CreditCurrency, Credits.CreateCreditCurrencyError>`
- **Wire**: `POST /credits/currencies`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditCurrency`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Credits.CreateCreditCurrencyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credits.CreateCreditCurrencyRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreateCreditCurrencyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCreditCurrencyRequest` | `createCreditCurrencyRequestSchema` | `src/models/create-credit-currency-request.ts` |
| `CreditCurrency` | `creditCurrencySchema` | `src/models/credit-currency.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCreditCurrencies

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCreditCurrencies(request: Credits.ListCreditCurrenciesRequest, options?: RequestOptions): ApiPromise<CreditCurrencyListResponse, Credits.ListCreditCurrenciesError>`
- **Wire**: `GET /credits/currencies`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditCurrencyListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Credits.ListCreditCurrenciesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credits.ListCreditCurrenciesRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `status` | `query` | — | `CreditsCurrenciesGetParametersStatus` | no | `CreditsCurrenciesGetParametersStatus.All` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditsCurrenciesGetParametersStatus` | `creditsCurrenciesGetParametersStatusSchema` | `src/models/credits-currencies-get-parameters-status.ts` |
| `CreditCurrencyListResponse` | `creditCurrencyListResponseSchema` | `src/models/credit-currency-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateCreditCurrencyById

- **Server**: `defaultReferenceAnalyticsExperimentalApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCreditCurrencyById(request: Credits.UpdateCreditCurrencyByIdRequest, options?: RequestOptions): ApiPromise<CreditCurrency, Credits.UpdateCreditCurrencyByIdError>`
- **Wire**: `PUT /credits/currencies/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditCurrency`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Credits.UpdateCreditCurrencyByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credits.UpdateCreditCurrencyByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateCreditCurrencyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCreditCurrencyRequest` | `updateCreditCurrencyRequestSchema` | `src/models/update-credit-currency-request.ts` |
| `CreditCurrency` | `creditCurrencySchema` | `src/models/credit-currency.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

