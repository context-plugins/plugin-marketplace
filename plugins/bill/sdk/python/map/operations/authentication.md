<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authentication — operations

Accessor: `client.authentication` · Source: `bill/apis/authentication.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.authentication.get_session_info

- **Route**: `GET /v3/login/session`
- **Server**: `default`
- **Signature**: `def get_session_info(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `SessionInfoResponseDto`
- **Returns (raw)**: `ApiResult[SessionInfoResponseDto, GetSessionInfoErrorBody]`
- **Error**: `GetSessionInfoErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SessionInfoResponseDto` | `bill/models/session_info_response_dto.py` |
| `GetSessionInfoErrorBody` | `bill/errors/get_session_info_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.authentication.list_all_organizations

- **Route**: `GET /v3/login/organizations`
- **Server**: `default`
- **Signature**: `def list_all_organizations(*, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListAllResponseDtoAllOrganizationsResponseDto`
- **Returns (raw)**: `ApiResult[ListAllResponseDtoAllOrganizationsResponseDto, ListAllOrganizationsErrorBody]`
- **Error**: `ListAllOrganizationsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAllResponseDtoAllOrganizationsResponseDto` | `bill/models/list_all_response_dto_all_organizations_response_dto.py` |
| `ListAllOrganizationsErrorBody` | `bill/errors/list_all_organizations_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.authentication.login

- **Route**: `POST /v3/login`
- **Server**: `default`
- **Signature**: `def login(body: LoginRequestDto | LoginRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `LoginResponseDto`
- **Returns (raw)**: `ApiResult[LoginResponseDto, LoginErrorBody]`
- **Error**: `LoginErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LoginRequestDto` | `bill/models/login_request_dto.py` |
| `LoginRequestDtoDict` | `bill/models/login_request_dto.py` |
| `LoginResponseDto` | `bill/models/login_response_dto.py` |
| `LoginErrorBody` | `bill/errors/login_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.authentication.logout

- **Route**: `POST /v3/logout`
- **Server**: `default`
- **Signature**: `def logout(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, LogoutErrorBody]`
- **Error**: `LogoutErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LogoutErrorBody` | `bill/errors/logout_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

