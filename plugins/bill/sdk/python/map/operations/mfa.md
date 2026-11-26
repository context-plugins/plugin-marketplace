<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mfa — operations

Accessor: `client.mfa` · Source: `bill/apis/mfa.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.mfa.generate_challenge

- **Route**: `POST /v3/mfa/challenge`
- **Server**: `default`
- **Signature**: `def generate_challenge(body: MfaChallengeRequestDto | MfaChallengeRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `MfaChallengeResponseDto`
- **Returns (raw)**: `ApiResult[MfaChallengeResponseDto, GenerateChallengeErrorBody]`
- **Error**: `GenerateChallengeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MfaChallengeRequestDto` | `bill/models/mfa_challenge_request_dto.py` |
| `MfaChallengeRequestDtoDict` | `bill/models/mfa_challenge_request_dto.py` |
| `MfaChallengeResponseDto` | `bill/models/mfa_challenge_response_dto.py` |
| `GenerateChallengeErrorBody` | `bill/errors/generate_challenge_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.mfa.list_mfa_phones

- **Route**: `GET /v3/mfa/phones`
- **Server**: `default`
- **Signature**: `def list_mfa_phones(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListMfaPhoneResponseDto`
- **Returns (raw)**: `ApiResult[ListMfaPhoneResponseDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ListMfaPhoneResponseDto` | `bill/models/list_mfa_phone_response_dto.py` |

### client.mfa.setup

- **Route**: `POST /v3/mfa/setup`
- **Server**: `default`
- **Signature**: `def setup(body: MfaSetupRequestDto | MfaSetupRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `MfaSetupResponseDto`
- **Returns (raw)**: `ApiResult[MfaSetupResponseDto, SetupErrorBody]`
- **Error**: `SetupErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MfaSetupRequestDto` | `bill/models/mfa_setup_request_dto.py` |
| `MfaSetupRequestDtoDict` | `bill/models/mfa_setup_request_dto.py` |
| `MfaSetupResponseDto` | `bill/models/mfa_setup_response_dto.py` |
| `SetupErrorBody` | `bill/errors/setup_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.mfa.step_up_session

- **Route**: `POST /v3/mfa/step-up`
- **Server**: `default`
- **Signature**: `def step_up_session(body: MfaStepUpRequestDto | MfaStepUpRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `MfaStepUpResponseDto`
- **Returns (raw)**: `ApiResult[MfaStepUpResponseDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MfaStepUpRequestDto` | `bill/models/mfa_step_up_request_dto.py` |
| `MfaStepUpRequestDtoDict` | `bill/models/mfa_step_up_request_dto.py` |
| `MfaStepUpResponseDto` | `bill/models/mfa_step_up_response_dto.py` |

### client.mfa.validate

- **Route**: `POST /v3/mfa/setup/validate`
- **Server**: `default`
- **Signature**: `def validate(body: MfaSetupValidateRequestDto | MfaSetupValidateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `StatusDto`
- **Returns (raw)**: `ApiResult[StatusDto, ValidateErrorBody]`
- **Error**: `ValidateErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MfaSetupValidateRequestDto` | `bill/models/mfa_setup_validate_request_dto.py` |
| `MfaSetupValidateRequestDtoDict` | `bill/models/mfa_setup_validate_request_dto.py` |
| `StatusDto` | `bill/models/status_dto.py` |
| `ValidateErrorBody` | `bill/errors/validate_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.mfa.validate_challenge

- **Route**: `POST /v3/mfa/challenge/validate`
- **Server**: `default`
- **Signature**: `def validate_challenge(body: MfaChallengeValidateRequestDto | MfaChallengeValidateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `MfaChallengeValidateResponseDto`
- **Returns (raw)**: `ApiResult[MfaChallengeValidateResponseDto, ValidateChallengeErrorBody]`
- **Error**: `ValidateChallengeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MfaChallengeValidateRequestDto` | `bill/models/mfa_challenge_validate_request_dto.py` |
| `MfaChallengeValidateRequestDtoDict` | `bill/models/mfa_challenge_validate_request_dto.py` |
| `MfaChallengeValidateResponseDto` | `bill/models/mfa_challenge_validate_response_dto.py` |
| `ValidateChallengeErrorBody` | `bill/errors/validate_challenge_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

