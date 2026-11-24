<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `divvy/apis/organizations.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organizations.get_billing_statement_detail

- **Route**: `GET /v3/organizations/{organizationId}/billing-statements/{billingStatementId}`
- **Server**: `default`
- **Signature**: `def get_billing_statement_detail(organization_id: str, billing_statement_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`, `billing_statement_id`
- **Params**: `organization_id` — path `organizationId` · `billing_statement_id` — path `billingStatementId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `BillingStatementDetailResponseDto`
- **Returns (raw)**: `ApiResult[BillingStatementDetailResponseDto, GetBillingStatementDetailErrorBody]`
- **Error**: `GetBillingStatementDetailErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillingStatementDetailResponseDto` | `divvy/models/billing_statement_detail_response_dto.py` |
| `GetBillingStatementDetailErrorBody` | `divvy/errors/get_billing_statement_detail_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organizations.get_organization

- **Route**: `GET /v3/organizations/{organizationId}`
- **Server**: `default`
- **Signature**: `def get_organization(organization_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`
- **Params**: `organization_id` — path `organizationId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `OrganizationResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationResponseDto, GetOrganizationErrorBody]`
- **Error**: `GetOrganizationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationResponseDto` | `divvy/models/organization_response_dto.py` |
| `GetOrganizationErrorBody` | `divvy/errors/get_organization_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organizations.get_price_plan

- **Route**: `GET /v3/organizations/{organizationId}/price-plan`
- **Server**: `default`
- **Signature**: `def get_price_plan(organization_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`
- **Params**: `organization_id` — path `organizationId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `PricePlanResponseDto`
- **Returns (raw)**: `ApiResult[PricePlanResponseDto, GetPricePlanErrorBody]`
- **Error**: `GetPricePlanErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PricePlanResponseDto` | `divvy/models/price_plan_response_dto.py` |
| `GetPricePlanErrorBody` | `divvy/errors/get_price_plan_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organizations.list_billing_statements

- **Route**: `GET /v3/organizations/{organizationId}/billing-statements`
- **Server**: `default`
- **Signature**: `def list_billing_statements(organization_id: str, *, max_: int | None = None, invoice_date_from: str | None = None, invoice_date_to: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`
- **Params**: `organization_id` — path `organizationId` · `max_` — query `max` · `invoice_date_from` — query `invoiceDateFrom` · `invoice_date_to` — query `invoiceDateTo` · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoBillingStatementResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoBillingStatementResponseDto, ListBillingStatementsErrorBody]`
- **Error**: `ListBillingStatementsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoBillingStatementResponseDto` | `divvy/models/list_response_dto_billing_statement_response_dto.py` |
| `ListBillingStatementsErrorBody` | `divvy/errors/list_billing_statements_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organizations.list_industries

- **Route**: `GET /v3/organizations/industries`
- **Server**: `default`
- **Signature**: `def list_industries(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListIndustriesResponseDto`
- **Returns (raw)**: `ApiResult[ListIndustriesResponseDto, ListIndustriesErrorBody]`
- **Error**: `ListIndustriesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListIndustriesResponseDto` | `divvy/models/list_industries_response_dto.py` |
| `ListIndustriesErrorBody` | `divvy/errors/list_industries_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.organizations.update_organization

- **Route**: `PATCH /v3/organizations/{organizationId}`
- **Server**: `default`
- **Signature**: `def update_organization(organization_id: str, body: OrganizationUpdateRequestDto | OrganizationUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_id`, `body`
- **Params**: `organization_id` — path `organizationId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `OrganizationResponseDto`
- **Returns (raw)**: `ApiResult[OrganizationResponseDto, UpdateOrganizationErrorBody]`
- **Error**: `UpdateOrganizationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationUpdateRequestDto` | `divvy/models/organization_update_request_dto.py` |
| `OrganizationUpdateRequestDtoDict` | `divvy/models/organization_update_request_dto.py` |
| `OrganizationResponseDto` | `divvy/models/organization_response_dto.py` |
| `UpdateOrganizationErrorBody` | `divvy/errors/update_organization_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

