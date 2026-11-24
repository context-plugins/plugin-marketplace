<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calls — operations

Accessor: `client.calls` · Source: `did_logic/apis/calls.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.calls.call_price_show

- **Route**: `GET /api/v1/call_price`
- **Auth**: `bearer_auth`
- **Signature**: `def call_price_show(a_number: str, b_number: str, sipaccount: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `a_number`, `b_number`, `sipaccount`
- **Params**: `a_number` — query · `b_number` — query · `sipaccount` — query
- **Returns (parsed)**: `ApiV1CallPriceResponse`
- **Returns (raw)**: `ApiResult[ApiV1CallPriceResponse, CallPriceShowErrorBody]`
- **Error**: `CallPriceShowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CallPrice404Error1` [404] · `ApiV1CallPrice422Error1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CallPriceResponse` | `did_logic/models/api_v1_call_price_response.py` |
| `CallPriceShowErrorBody` | `did_logic/errors/call_price_show_error.py` |
| `ApiV1CallPrice404Error1` | `did_logic/models/api_v1_call_price404_error1.py` |
| `ApiV1CallPrice422Error1` | `did_logic/models/api_v1_call_price422_error1.py` |

### client.calls.calls_recording

- **Route**: `GET /api/v1/calls/recording/{callid}`
- **Auth**: `bearer_auth`
- **Signature**: `def calls_recording(callid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `callid`
- **Params**: `callid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CallsRecordingErrorBody]`
- **Error**: `CallsRecordingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CallsRecordingResponse1` [403] · `Error` [404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CallsRecordingErrorBody` | `did_logic/errors/calls_recording_error.py` |
| `ApiV1CallsRecordingResponse1` | `did_logic/models/unions/api_v1_calls_recording_response1.py` |
| `Error` | `did_logic/models/error.py` |

### client.calls.calls_show

- **Route**: `GET /api/v1/calls`
- **Auth**: `bearer_auth`
- **Signature**: `def calls_show(*, type_: Type1OrStr | None = None, missed: MissedOrStr | None = None, from_search: str | None = None, to_search: str | None = None, amd_status: str | None = None, hangup_cause: HangupCause1OrStr | None = None, filter_: str | None = None, sip_account: str | None = None, from_: Date | None = None, to: Date | None = None, all_: bool | None = False, page: int | None = 1, per_page: int | None = 100, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `missed` — query · `from_search` — query · `to_search` — query · `amd_status` — query · `hangup_cause` — query · `filter_` — query `filter` · `sip_account` — query · `from_` — query `from` · `to` — query · `all_` — query `all` · `page` — query · `per_page` — query
- **Returns (parsed)**: `CdrListResponse`
- **Returns (raw)**: `ApiResult[CdrListResponse, CallsShowErrorBody]`
- **Error**: `CallsShowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Calls401Error1` [401] · `ApiV1Calls403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Type1OrStr` | `did_logic/models/enums/type1.py` |
| `MissedOrStr` | `did_logic/models/enums/missed.py` |
| `HangupCause1OrStr` | `did_logic/models/enums/hangup_cause1.py` |
| `CdrListResponse` | `did_logic/models/cdr_list_response.py` |
| `CallsShowErrorBody` | `did_logic/errors/calls_show_error.py` |
| `ApiV1Calls401Error1` | `did_logic/models/api_v1_calls401_error1.py` |
| `ApiV1Calls403Error1` | `did_logic/models/api_v1_calls403_error1.py` |

### client.calls.calls_statistics

- **Route**: `GET /api/v1/calls/statistics`
- **Auth**: `bearer_auth`
- **Signature**: `def calls_statistics(*, from_: str | None = None, to: str | None = None, sipfriend: str | None = None, search: int | None = None, amd_status: str | None = None, hangup_cause: HangupCause1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `sipfriend` — query · `search` — query · `amd_status` — query · `hangup_cause` — query
- **Returns (parsed)**: `ApiV1CallsStatisticsResponse`
- **Returns (raw)**: `ApiResult[ApiV1CallsStatisticsResponse, CallsStatisticsErrorBody]`
- **Error**: `CallsStatisticsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CallsStatistics403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HangupCause1OrStr` | `did_logic/models/enums/hangup_cause1.py` |
| `ApiV1CallsStatisticsResponse` | `did_logic/models/api_v1_calls_statistics_response.py` |
| `CallsStatisticsErrorBody` | `did_logic/errors/calls_statistics_error.py` |
| `ApiV1CallsStatistics403Error1` | `did_logic/models/api_v1_calls_statistics403_error1.py` |

