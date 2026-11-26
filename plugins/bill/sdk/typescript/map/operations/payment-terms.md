<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentTerms — operations

Accessor: `client.paymentTerms` · Source: `src/resources/payment-terms.ts` · 4 operations · Request and error types: namespace `PaymentTerms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPaymentTerm

- **Signature**: `createPaymentTerm(request: PaymentTerms.CreatePaymentTermRequest, options?: RequestOptions): ApiPromise<PaymentTermResponseDto, PaymentTerms.CreatePaymentTermError>`
- **Wire**: `POST /v3/organizations/{organizationId}/payment-terms`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentTermResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `PaymentTerms.CreatePaymentTermError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentTerms.CreatePaymentTermRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreatePaymentTermRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreatePaymentTermRequestDto` | `createPaymentTermRequestDtoSchema` | `src/models/create-payment-term-request-dto.ts` |
| `PaymentTermResponseDto` | `paymentTermResponseDtoSchema` | `src/models/payment-term-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getPaymentTerm

- **Signature**: `getPaymentTerm(request: PaymentTerms.GetPaymentTermRequest, options?: RequestOptions): ApiPromise<PaymentTermResponseDto, PaymentTerms.GetPaymentTermError>`
- **Wire**: `GET /v3/organizations/{organizationId}/payment-terms/{paymentTermId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentTermResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `PaymentTerms.GetPaymentTermError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentTerms.GetPaymentTermRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `paymentTermId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentTermResponseDto` | `paymentTermResponseDtoSchema` | `src/models/payment-term-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listPaymentTerms

- **Signature**: `listPaymentTerms(request: PaymentTerms.ListPaymentTermsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoPaymentTermResponseDto, PaymentTerms.ListPaymentTermsError>`
- **Wire**: `GET /v3/organizations/{organizationId}/payment-terms`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoPaymentTermResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `PaymentTerms.ListPaymentTermsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentTerms.ListPaymentTermsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoPaymentTermResponseDto` | `listResponseDtoPaymentTermResponseDtoSchema` | `src/models/list-response-dto-payment-term-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updatePaymentTerm

- **Signature**: `updatePaymentTerm(request: PaymentTerms.UpdatePaymentTermRequest, options?: RequestOptions): ApiPromise<PaymentTermResponseDto, PaymentTerms.UpdatePaymentTermError>`
- **Wire**: `PATCH /v3/organizations/{organizationId}/payment-terms/{paymentTermId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentTermResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `PaymentTerms.UpdatePaymentTermError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentTerms.UpdatePaymentTermRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationId` | `path` | `string` | yes |
| `paymentTermId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdatePaymentTermRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePaymentTermRequestDto` | `updatePaymentTermRequestDtoSchema` | `src/models/update-payment-term-request-dto.ts` |
| `PaymentTermResponseDto` | `paymentTermResponseDtoSchema` | `src/models/payment-term-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

