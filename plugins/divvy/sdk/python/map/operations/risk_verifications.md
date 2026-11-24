<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskVerifications — operations

Accessor: `client.risk_verifications` · Source: `divvy/apis/risk_verifications.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.risk_verifications.create_risk_verification_phone

- **Route**: `POST /v3/risk-verifications/phone`
- **Server**: `default`
- **Signature**: `def create_risk_verification_phone(body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateRiskVerificationPhoneErrorBody]`
- **Error**: `CreateRiskVerificationPhoneErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PhoneVerificationRequestDto` | `divvy/models/phone_verification_request_dto.py` |
| `PhoneVerificationRequestDtoDict` | `divvy/models/phone_verification_request_dto.py` |
| `CreateRiskVerificationPhoneErrorBody` | `divvy/errors/create_risk_verification_phone_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.risk_verifications.get_risk_verification_phone

- **Route**: `GET /v3/risk-verifications/phone`
- **Server**: `default`
- **Signature**: `def get_risk_verification_phone(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `GetPhoneStatusResponseDto`
- **Returns (raw)**: `ApiResult[GetPhoneStatusResponseDto, GetRiskVerificationPhoneErrorBody]`
- **Error**: `GetRiskVerificationPhoneErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetPhoneStatusResponseDto` | `divvy/models/get_phone_status_response_dto.py` |
| `GetRiskVerificationPhoneErrorBody` | `divvy/errors/get_risk_verification_phone_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.risk_verifications.get_risk_verifications

- **Route**: `GET /v3/risk-verifications`
- **Server**: `default`
- **Signature**: `def get_risk_verifications(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VerificationResponseDto`
- **Returns (raw)**: `ApiResult[VerificationResponseDto, GetRiskVerificationsErrorBody]`
- **Error**: `GetRiskVerificationsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VerificationResponseDto` | `divvy/models/verification_response_dto.py` |
| `GetRiskVerificationsErrorBody` | `divvy/errors/get_risk_verifications_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.risk_verifications.initiate_risk_verifications

- **Route**: `POST /v3/risk-verifications`
- **Server**: `default`
- **Signature**: `def initiate_risk_verifications(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `VerificationResponseDto`
- **Returns (raw)**: `ApiResult[VerificationResponseDto, InitiateRiskVerificationsErrorBody]`
- **Error**: `InitiateRiskVerificationsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VerificationResponseDto` | `divvy/models/verification_response_dto.py` |
| `InitiateRiskVerificationsErrorBody` | `divvy/errors/initiate_risk_verifications_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

