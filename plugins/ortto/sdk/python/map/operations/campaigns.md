<!-- Generated file — do not edit; regenerated with the SDK. -->

# Campaigns — operations

Accessor: `client.campaigns` · Source: `ortto/apis/campaigns.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaigns.get_campaign_calendar

- **Route**: `POST /campaign/calendar`
- **Auth**: `api_key_auth`
- **Signature**: `def get_campaign_calendar(body: CampaignCalendarRequest | CampaignCalendarRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetCampaignCalendarErrorBody]`
- **Error**: `GetCampaignCalendarErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignCalendarRequest` | `ortto/models/campaign_calendar_request.py` |
| `CampaignCalendarRequestDict` | `ortto/models/campaign_calendar_request.py` |
| `GetCampaignCalendarErrorBody` | `ortto/errors/get_campaign_calendar_error.py` |
| `Error` | `ortto/models/error.py` |

### client.campaigns.get_campaign_report

- **Route**: `POST /campaign/reports/get`
- **Auth**: `api_key_auth`
- **Signature**: `def get_campaign_report(body: CampaignReportsGetRequest | CampaignReportsGetRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetCampaignReportErrorBody]`
- **Error**: `GetCampaignReportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignReportsGetRequest` | `ortto/models/campaign_reports_get_request.py` |
| `CampaignReportsGetRequestDict` | `ortto/models/campaign_reports_get_request.py` |
| `GetCampaignReportErrorBody` | `ortto/errors/get_campaign_report_error.py` |
| `Error` | `ortto/models/error.py` |

