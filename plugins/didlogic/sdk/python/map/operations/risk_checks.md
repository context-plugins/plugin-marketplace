<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskChecks — operations

Accessor: `client.risk_checks` · Source: `did_logic/apis/risk_checks.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.risk_checks.numbers_risk_checks_create

- **Route**: `POST /api/v2/numbers/risk_checks`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_risk_checks_create(body: ApiV2NumbersRiskChecksRequest | ApiV2NumbersRiskChecksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV2NumbersRiskChecksResponse1`
- **Returns (raw)**: `ApiResult[ApiV2NumbersRiskChecksResponse1, NumbersRiskChecksCreateErrorBody]`
- **Error**: `NumbersRiskChecksCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersRiskChecks401Error1` [401] · `ApiV2NumbersRiskChecks403Error1` [403] · `ApiV2NumbersRiskChecksResponse21` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersRiskChecksRequest` | `did_logic/models/api_v2_numbers_risk_checks_request.py` |
| `ApiV2NumbersRiskChecksRequestDict` | `did_logic/models/api_v2_numbers_risk_checks_request.py` |
| `ApiV2NumbersRiskChecksResponse1` | `did_logic/models/api_v2_numbers_risk_checks_response1.py` |
| `NumbersRiskChecksCreateErrorBody` | `did_logic/errors/numbers_risk_checks_create_error.py` |
| `ApiV2NumbersRiskChecks401Error1` | `did_logic/models/api_v2_numbers_risk_checks401_error1.py` |
| `ApiV2NumbersRiskChecks403Error1` | `did_logic/models/api_v2_numbers_risk_checks403_error1.py` |
| `ApiV2NumbersRiskChecksResponse21` | `did_logic/models/unions/api_v2_numbers_risk_checks_response21.py` |

### client.risk_checks.numbers_risk_checks_index

- **Route**: `GET /api/v2/numbers/risk_checks`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_risk_checks_index(*, task_ids: str | None = None, status: StatusDidlogicComRiskChecksApiOrStr | None = None, created_at_from: Date | None = None, created_at_to: Date | None = None, processed_at_from: Date | None = None, processed_at_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `task_ids` — query · `status` — query · `created_at_from` — query · `created_at_to` — query · `processed_at_from` — query · `processed_at_to` — query · `order_by` — query · `order` — query · `page` — query · `per_page` — query
- **Returns (parsed)**: `ApiV2NumbersRiskChecksResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersRiskChecksResponse, NumbersRiskChecksIndexErrorBody]`
- **Error**: `NumbersRiskChecksIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersRiskChecks401Error1` [401] · `ApiV2NumbersRiskChecks403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusDidlogicComRiskChecksApiOrStr` | `did_logic/models/enums/status_didlogic_com_risk_checks_api.py` |
| `OrderOrStr` | `did_logic/models/enums/order.py` |
| `ApiV2NumbersRiskChecksResponse` | `did_logic/models/api_v2_numbers_risk_checks_response.py` |
| `NumbersRiskChecksIndexErrorBody` | `did_logic/errors/numbers_risk_checks_index_error.py` |
| `ApiV2NumbersRiskChecks401Error1` | `did_logic/models/api_v2_numbers_risk_checks401_error1.py` |
| `ApiV2NumbersRiskChecks403Error1` | `did_logic/models/api_v2_numbers_risk_checks403_error1.py` |

### client.risk_checks.numbers_risk_checks_logs

- **Route**: `GET /api/v2/numbers/risk_checks/logs`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_risk_checks_logs(*, ids: str | None = None, task_ids: int | None = None, number: str | None = None, status: StatusDidlogicComRiskChecksApiOrStr | None = None, risk_level: RiskLevelOrStr | None = None, created_at_from: Date | None = None, created_at_to: Date | None = None, processed_at_from: Date | None = None, processed_at_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `ids` — query · `task_ids` — query · `number` — query · `status` — query · `risk_level` — query · `created_at_from` — query · `created_at_to` — query · `processed_at_from` — query · `processed_at_to` — query · `order_by` — query · `order` — query · `page` — query · `per_page` — query
- **Returns (parsed)**: `ApiV2NumbersRiskChecksLogsResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersRiskChecksLogsResponse, NumbersRiskChecksLogsErrorBody]`
- **Error**: `NumbersRiskChecksLogsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersRiskChecksLogs401Error1` [401] · `ApiV2NumbersRiskChecksLogs403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusDidlogicComRiskChecksApiOrStr` | `did_logic/models/enums/status_didlogic_com_risk_checks_api.py` |
| `RiskLevelOrStr` | `did_logic/models/enums/risk_level.py` |
| `OrderOrStr` | `did_logic/models/enums/order.py` |
| `ApiV2NumbersRiskChecksLogsResponse` | `did_logic/models/api_v2_numbers_risk_checks_logs_response.py` |
| `NumbersRiskChecksLogsErrorBody` | `did_logic/errors/numbers_risk_checks_logs_error.py` |
| `ApiV2NumbersRiskChecksLogs401Error1` | `did_logic/models/api_v2_numbers_risk_checks_logs401_error1.py` |
| `ApiV2NumbersRiskChecksLogs403Error1` | `did_logic/models/api_v2_numbers_risk_checks_logs403_error1.py` |

