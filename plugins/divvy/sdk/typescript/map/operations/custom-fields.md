<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.customFields` · Source: `src/resources/custom-fields.ts` · 9 operations · Request and error types: namespace `CustomFields`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomField

- **Signature**: `createCustomField(request: CustomFields.CreateCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomFieldResponseDto, CustomFields.CreateCustomFieldError>`
- **Wire**: `POST /v3/spend/custom-fields`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CustomFields.CreateCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.CreateCustomFieldRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `CreateCustomFieldRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomFieldRequestDto` | `createCustomFieldRequestDtoSchema` | `src/models/create-custom-field-request-dto.ts` |
| `CustomFieldResponseDto` | `customFieldResponseDtoSchema` | `src/models/custom-field-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createCustomFieldValues

- **Signature**: `createCustomFieldValues(request: CustomFields.CreateCustomFieldValuesRequest, options?: RequestOptions): ApiPromise<CustomFieldValueResponseDto[], CustomFields.CreateCustomFieldValuesError>`
- **Wire**: `POST /v3/spend/custom-fields/{customFieldId}/values`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldValueResponseDto[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CustomFields.CreateCustomFieldValuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.CreateCustomFieldValuesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customFieldId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `CreateCustomFieldValueRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomFieldValueRequestDto` | `createCustomFieldValueRequestDtoSchema` | `src/models/create-custom-field-value-request-dto.ts` |
| `CustomFieldValueResponseDto` | `customFieldValueResponseDtoSchema` | `src/models/custom-field-value-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteCustomField

- **Signature**: `deleteCustomField(request: CustomFields.DeleteCustomFieldRequest, options?: RequestOptions): ApiPromise<undefined, CustomFields.DeleteCustomFieldError>`
- **Wire**: `DELETE /v3/spend/custom-fields/{customFieldId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CustomFields.DeleteCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.DeleteCustomFieldRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customFieldId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### deleteCustomFieldValue

- **Signature**: `deleteCustomFieldValue(request: CustomFields.DeleteCustomFieldValueRequest, options?: RequestOptions): ApiPromise<undefined, CustomFields.DeleteCustomFieldValueError>`
- **Wire**: `DELETE /v3/spend/custom-fields/{customFieldId}/values`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CustomFields.DeleteCustomFieldValueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.DeleteCustomFieldValueRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customFieldId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `DeleteCustomFieldValuesRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCustomFieldValuesRequestDto` | `deleteCustomFieldValuesRequestDtoSchema` | `src/models/delete-custom-field-values-request-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCustomField

- **Signature**: `getCustomField(request: CustomFields.GetCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomFieldResponseDto, CustomFields.GetCustomFieldError>`
- **Wire**: `GET /v3/spend/custom-fields/{customFieldId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomFieldResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CustomFields.GetCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.GetCustomFieldRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customFieldId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldResponseDto` | `customFieldResponseDtoSchema` | `src/models/custom-field-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCustomFieldValues

- **Signature**: `getCustomFieldValues(request: CustomFields.GetCustomFieldValuesRequest, options?: RequestOptions): ApiPromise<CustomFieldValueResponseDto, CustomFields.GetCustomFieldValuesError>`
- **Wire**: `GET /v3/spend/custom-fields/{customFieldId}/values/{customFieldValueId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomFieldValueResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CustomFields.GetCustomFieldValuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.GetCustomFieldValuesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customFieldId` | `path` | `string` | yes |
| `customFieldValueId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomFieldValueResponseDto` | `customFieldValueResponseDtoSchema` | `src/models/custom-field-value-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCustomFieldValues

- **Signature**: `listCustomFieldValues(request: CustomFields.ListCustomFieldValuesRequest, options?: RequestOptions): ApiPromise<PaginationResponseDtoCustomFieldValueResponseDto, CustomFields.ListCustomFieldValuesError>`
- **Wire**: `GET /v3/spend/custom-fields/{customFieldId}/values`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationResponseDtoCustomFieldValueResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CustomFields.ListCustomFieldValuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.ListCustomFieldValuesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customFieldId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `nextPage` | `query` | `string` | no |
| `prevPage` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationResponseDtoCustomFieldValueResponseDto` | `paginationResponseDtoCustomFieldValueResponseDtoSchema` | `src/models/pagination-response-dto-custom-field-value-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listCustomFields

- **Signature**: `listCustomFields(request?: CustomFields.ListCustomFieldsRequest, options?: RequestOptions): ApiPromise<PaginationResponseDtoCustomFieldResponseDto, CustomFields.ListCustomFieldsError>`
- **Wire**: `GET /v3/spend/custom-fields`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginationResponseDtoCustomFieldResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CustomFields.ListCustomFieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.ListCustomFieldsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `nextPage` | `query` | `string` | no |
| `prevPage` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `apiToken` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginationResponseDtoCustomFieldResponseDto` | `paginationResponseDtoCustomFieldResponseDtoSchema` | `src/models/pagination-response-dto-custom-field-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateCustomField

- **Signature**: `updateCustomField(request: CustomFields.UpdateCustomFieldRequest, options?: RequestOptions): ApiPromise<CustomFieldResponseDto, CustomFields.UpdateCustomFieldError>`
- **Wire**: `PATCH /v3/spend/custom-fields/{customFieldId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomFieldResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `CustomFields.UpdateCustomFieldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomFields.UpdateCustomFieldRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customFieldId` | `path` | `string` | yes |
| `apiToken` | `header` | `string` | no |
| `body` | `body` | `UpdateCustomFieldRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomFieldRequestDto` | `updateCustomFieldRequestDtoSchema` | `src/models/update-custom-field-request-dto.ts` |
| `CustomFieldResponseDto` | `customFieldResponseDtoSchema` | `src/models/custom-field-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

