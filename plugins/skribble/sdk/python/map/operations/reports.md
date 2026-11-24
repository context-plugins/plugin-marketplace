<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `skribble/apis/reports.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.reports.get_reports_etsi

- **Route**: `GET /reports/{id}/etsi`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def get_reports_etsi(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetReportsEtsiErrorBody]`
- **Error**: `GetReportsEtsiErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 404, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetReportsEtsiErrorBody` | `skribble/errors/get_reports_etsi_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

### client.reports.get_skribble_report

- **Route**: `GET /reports/{id}/skribble`
- **Auth**: `bearer`
- **Server**: `default_skribble_additional_information_api`
- **Signature**: `def get_skribble_report(id_: UUID, *, lang: LangOrStr | None = Lang.EN, attach_etsi_report: bool | None = False, time_zone: str | None = "UTC", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `lang` — query · `attach_etsi_report` — query `attachETSIReport` · `time_zone` — query `timeZone`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, GetSkribbleReportErrorBody]`
- **Error**: `GetSkribbleReportErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemSkribbleAdditionalInformationApi` [400, 401, 403, 404, 406, 429, 500, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LangOrStr` | `skribble/models/enums/lang.py` |
| `GetSkribbleReportErrorBody` | `skribble/errors/get_skribble_report_error.py` |
| `ProblemSkribbleAdditionalInformationApi` | `skribble/models/problem_skribble_additional_information_api.py` |

