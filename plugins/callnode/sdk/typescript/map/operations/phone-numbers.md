<!-- Generated file — do not edit; regenerated with the SDK. -->

# PhoneNumbers — operations

Accessor: `client.phoneNumbers` · Source: `src/resources/phone-numbers.ts` · 6 operations · Request and error types: namespace `PhoneNumbers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `call-node`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getNumber

- **Signature**: `getNumber(request: PhoneNumbers.GetNumberRequest, options?: RequestOptions): ApiPromise<ApiV1NumbersResponse1, PhoneNumbers.GetNumberError>`
- **Wire**: `GET /api/v1/numbers/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1NumbersResponse1`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `PhoneNumbers.GetNumberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PhoneNumbers.GetNumberRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1NumbersResponse1` | `apiV1NumbersResponse1Schema` | `src/models/api-v1-numbers-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listNumbers

- **Signature**: `listNumbers(request?: PhoneNumbers.ListNumbersRequest, options?: RequestOptions): ApiPromise<ApiV1NumbersResponse, PhoneNumbers.ListNumbersError>`
- **Wire**: `GET /api/v1/numbers`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1NumbersResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `PhoneNumbers.ListNumbersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PhoneNumbers.ListNumbersRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `status` | `query` | `string` | no |
| `type` | `query` | `Type3` | no |
| `purchaseSource` | `query` | `PurchaseSource1` | no |
| `tag` | `query` | `string` | no |
| `q` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type3` | `type3Schema` | `src/models/type3.ts` |
| `PurchaseSource1` | `purchaseSource1Schema` | `src/models/purchase-source1.ts` |
| `ApiV1NumbersResponse` | `apiV1NumbersResponseSchema` | `src/models/api-v1-numbers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### purchaseNumber

- **Signature**: `purchaseNumber(request: PhoneNumbers.PurchaseNumberRequestParams, options?: RequestOptions): ApiPromise<PurchaseNumberResponse, PhoneNumbers.PurchaseNumberError>`
- **Wire**: `POST /api/v1/numbers`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PurchaseNumberResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `PhoneNumbers.PurchaseNumberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [402] `Error` · `"error4"` [409] `Error` · `"error5"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PhoneNumbers.PurchaseNumberRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PurchaseNumberRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PurchaseNumberRequest` | `purchaseNumberRequestSchema` | `src/models/purchase-number-request.ts` |
| `PurchaseNumberResponse` | `purchaseNumberResponseSchema` | `src/models/purchase-number-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### releaseNumber

- **Signature**: `releaseNumber(request: PhoneNumbers.ReleaseNumberRequest, options?: RequestOptions): ApiPromise<ApiV1NumbersResponse3, PhoneNumbers.ReleaseNumberError>`
- **Wire**: `DELETE /api/v1/numbers/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1NumbersResponse3`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `PhoneNumbers.ReleaseNumberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PhoneNumbers.ReleaseNumberRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1NumbersResponse3` | `apiV1NumbersResponse3Schema` | `src/models/api-v1-numbers-response3.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### searchAvailableNumbers

- **Signature**: `searchAvailableNumbers(request?: PhoneNumbers.SearchAvailableNumbersRequest, options?: RequestOptions): ApiPromise<ApiV1NumbersAvailableResponse, PhoneNumbers.SearchAvailableNumbersError>`
- **Wire**: `GET /api/v1/numbers/available`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1NumbersAvailableResponse`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `PhoneNumbers.SearchAvailableNumbersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PhoneNumbers.SearchAvailableNumbersRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `type` | `query` | `Type3` | no | `Type3.Local` |
| `areaCode` | `query` | `string` | no | — |
| `prefix` | `query` | `Prefix` | no | — |
| `vanity` | `query` | `string` | no | — |
| `quantity` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type3` | `type3Schema` | `src/models/type3.ts` |
| `Prefix` | `prefixSchema` | `src/models/prefix.ts` |
| `ApiV1NumbersAvailableResponse` | `apiV1NumbersAvailableResponseSchema` | `src/models/api-v1-numbers-available-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateNumber

- **Signature**: `updateNumber(request: PhoneNumbers.UpdateNumberRequest, options?: RequestOptions): ApiPromise<ApiV1NumbersResponse1, PhoneNumbers.UpdateNumberError>`
- **Wire**: `PATCH /api/v1/numbers/{id}`
- **Auth**: all of `apiKeyAuth`, `timestampAuth`, `signatureAuth` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1NumbersResponse1`
- **Error**: `CallNodeError` with `kind: "api"`, an instance of `PhoneNumbers.UpdateNumberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PhoneNumbers.UpdateNumberRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1NumbersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1NumbersRequest` | `apiV1NumbersRequestSchema` | `src/models/api-v1-numbers-request.ts` |
| `ApiV1NumbersResponse1` | `apiV1NumbersResponse1Schema` | `src/models/api-v1-numbers-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

