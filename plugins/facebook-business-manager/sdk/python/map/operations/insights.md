<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `facebook_business_manager/apis/insights.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insights.get_ad_account_insights

- **Route**: `GET /act_{ad_account_id}/insights`
- **Auth**: `bearer_auth`
- **Signature**: `def get_ad_account_insights(ad_account_id: str, *, fields: str | None = None, time_range: str | None = None, breakdowns: str | None = None, level: LevelOrStr | None = None, time_increment: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`
- **Params**: `ad_account_id` — path · `fields` — query · `time_range` — query · `breakdowns` — query · `level` — query · `time_increment` — query
- **Returns (parsed)**: `InsightsResponse`
- **Returns (raw)**: `ApiResult[InsightsResponse, GetAdAccountInsightsErrorBody]`
- **Error**: `GetAdAccountInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LevelOrStr` | `facebook_business_manager/models/enums/level.py` |
| `InsightsResponse` | `facebook_business_manager/models/insights_response.py` |
| `GetAdAccountInsightsErrorBody` | `facebook_business_manager/errors/get_ad_account_insights_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

### client.insights.get_campaign_insights

- **Route**: `GET /{campaign_id}/insights`
- **Auth**: `bearer_auth`
- **Signature**: `def get_campaign_insights(campaign_id: str, *, fields: str | None = None, time_range: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign_id`
- **Params**: `campaign_id` — path · `fields` — query · `time_range` — query
- **Returns (parsed)**: `InsightsResponse`
- **Returns (raw)**: `ApiResult[InsightsResponse, GetCampaignInsightsErrorBody]`
- **Error**: `GetCampaignInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightsResponse` | `facebook_business_manager/models/insights_response.py` |
| `GetCampaignInsightsErrorBody` | `facebook_business_manager/errors/get_campaign_insights_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

