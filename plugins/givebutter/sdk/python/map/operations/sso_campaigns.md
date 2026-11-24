<!-- Generated file — do not edit; regenerated with the SDK. -->

# SsoCampaigns — operations

Accessor: `client.sso_campaigns` · Source: `givebutter/apis/sso_campaigns.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sso_campaigns.sso_campaigns_show

- **Route**: `GET /sso/v1/campaigns/{campaign}`
- **Auth**: `http`
- **Signature**: `def sso_campaigns_show(campaign: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign`
- **Params**: `campaign` — path
- **Returns (parsed)**: `CampaignResource`
- **Returns (raw)**: `ApiResult[CampaignResource, SsoCampaignsShowErrorBody]`
- **Error**: `SsoCampaignsShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthenticationException1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignResource` | `givebutter/models/campaign_resource.py` |
| `SsoCampaignsShowErrorBody` | `givebutter/errors/sso_campaigns_show_error.py` |
| `AuthenticationException1` | `givebutter/models/authentication_exception1.py` |

