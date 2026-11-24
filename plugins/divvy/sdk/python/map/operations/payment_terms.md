<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentTerms — operations

Accessor: `client.payment_terms` · Source: `divvy/apis/payment_terms.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payment_terms.create_payment_term

- **Route**: `POST /v3/organizations/{organizationId}/payment-terms`
- **Server**: `default`
- **Signature**: `def create_payment_term(organization_id: str, body: CreatePaymentTermRequestDto | CreatePaymentTermRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`, `body`
- **Params**: `organization_id` — path `organizationId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `PaymentTermResponseDto`
- **Returns (raw)**: `ApiResult[PaymentTermResponseDto, CreatePaymentTermErrorBody]`
- **Error**: `CreatePaymentTermErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreatePaymentTermRequestDto` | `divvy/models/create_payment_term_request_dto.py` |
| `CreatePaymentTermRequestDtoDict` | `divvy/models/create_payment_term_request_dto.py` |
| `PaymentTermResponseDto` | `divvy/models/payment_term_response_dto.py` |
| `CreatePaymentTermErrorBody` | `divvy/errors/create_payment_term_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.payment_terms.get_payment_term

- **Route**: `GET /v3/organizations/{organizationId}/payment-terms/{paymentTermId}`
- **Server**: `default`
- **Signature**: `def get_payment_term(organization_id: str, payment_term_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`, `payment_term_id`
- **Params**: `organization_id` — path `organizationId` · `payment_term_id` — path `paymentTermId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `PaymentTermResponseDto`
- **Returns (raw)**: `ApiResult[PaymentTermResponseDto, GetPaymentTermErrorBody]`
- **Error**: `GetPaymentTermErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentTermResponseDto` | `divvy/models/payment_term_response_dto.py` |
| `GetPaymentTermErrorBody` | `divvy/errors/get_payment_term_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.payment_terms.list_payment_terms

- **Route**: `GET /v3/organizations/{organizationId}/payment-terms`
- **Server**: `default`
- **Signature**: `def list_payment_terms(organization_id: str, *, max_: int | None = None, sort: str | None = None, filters: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`
- **Params**: `organization_id` — path `organizationId` · `max_` — query `max` · `sort` — query · `filters` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoPaymentTermResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoPaymentTermResponseDto, ListPaymentTermsErrorBody]`
- **Error**: `ListPaymentTermsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoPaymentTermResponseDto` | `divvy/models/list_response_dto_payment_term_response_dto.py` |
| `ListPaymentTermsErrorBody` | `divvy/errors/list_payment_terms_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.payment_terms.update_payment_term

- **Route**: `PATCH /v3/organizations/{organizationId}/payment-terms/{paymentTermId}`
- **Server**: `default`
- **Signature**: `def update_payment_term(organization_id: str, payment_term_id: str, body: UpdatePaymentTermRequestDto | UpdatePaymentTermRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`, `payment_term_id`, `body`
- **Params**: `organization_id` — path `organizationId` · `payment_term_id` — path `paymentTermId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `PaymentTermResponseDto`
- **Returns (raw)**: `ApiResult[PaymentTermResponseDto, UpdatePaymentTermErrorBody]`
- **Error**: `UpdatePaymentTermErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdatePaymentTermRequestDto` | `divvy/models/update_payment_term_request_dto.py` |
| `UpdatePaymentTermRequestDtoDict` | `divvy/models/update_payment_term_request_dto.py` |
| `PaymentTermResponseDto` | `divvy/models/payment_term_response_dto.py` |
| `UpdatePaymentTermErrorBody` | `divvy/errors/update_payment_term_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

