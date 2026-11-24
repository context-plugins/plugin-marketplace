<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignsApi — operations

Accessor: `client.campaigns_api` · Source: `bitly/apis/campaigns_api.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.campaigns_api.create_campaign

- **Route**: `POST /campaigns`
- **Auth**: `bearer_auth`
- **Signature**: `def create_campaign(body: CampaignModify | CampaignModifyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Campaign`
- **Returns (raw)**: `ApiResult[Campaign, CreateCampaignErrorBody]`
- **Error**: `CreateCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignModify` | `bitly/models/campaign_modify.py` |
| `CampaignModifyDict` | `bitly/models/campaign_modify.py` |
| `Campaign` | `bitly/models/campaign.py` |
| `CreateCampaignErrorBody` | `bitly/errors/create_campaign_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.campaigns_api.create_channel

- **Route**: `POST /channels`
- **Auth**: `bearer_auth`
- **Signature**: `def create_channel(body: ChannelModify | ChannelModifyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Channel`
- **Returns (raw)**: `ApiResult[Channel, CreateChannelErrorBody]`
- **Error**: `CreateChannelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChannelModify` | `bitly/models/channel_modify.py` |
| `ChannelModifyDict` | `bitly/models/channel_modify.py` |
| `Channel` | `bitly/models/channel.py` |
| `CreateChannelErrorBody` | `bitly/errors/create_channel_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.campaigns_api.get_campaign

- **Route**: `GET /campaigns/{campaign_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_campaign(campaign_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign_guid`
- **Params**: `campaign_guid` — path
- **Returns (parsed)**: `Campaign`
- **Returns (raw)**: `ApiResult[Campaign, GetCampaignErrorBody]`
- **Error**: `GetCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402, 403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Campaign` | `bitly/models/campaign.py` |
| `GetCampaignErrorBody` | `bitly/errors/get_campaign_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.campaigns_api.get_campaigns

- **Route**: `GET /campaigns`
- **Auth**: `bearer_auth`
- **Signature**: `def get_campaigns(*, group_guid: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `group_guid` — query
- **Returns (parsed)**: `Campaigns`
- **Returns (raw)**: `ApiResult[Campaigns, GetCampaignsErrorBody]`
- **Error**: `GetCampaignsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 500, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Campaigns` | `bitly/models/campaigns.py` |
| `GetCampaignsErrorBody` | `bitly/errors/get_campaigns_error.py` |
| `Error` | `bitly/models/error.py` |

### client.campaigns_api.get_channel

- **Route**: `GET /channels/{channel_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_channel(channel_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `channel_guid`
- **Params**: `channel_guid` — path
- **Returns (parsed)**: `Channel`
- **Returns (raw)**: `ApiResult[Channel, GetChannelErrorBody]`
- **Error**: `GetChannelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402, 403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Channel` | `bitly/models/channel.py` |
| `GetChannelErrorBody` | `bitly/errors/get_channel_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.campaigns_api.get_channels

- **Route**: `GET /channels`
- **Auth**: `bearer_auth`
- **Signature**: `def get_channels(*, group_guid: str | None = None, campaign_guid: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `group_guid` — query · `campaign_guid` — query
- **Returns (parsed)**: `Channels`
- **Returns (raw)**: `ApiResult[Channels, GetChannelsErrorBody]`
- **Error**: `GetChannelsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Channels` | `bitly/models/channels.py` |
| `GetChannelsErrorBody` | `bitly/errors/get_channels_error.py` |
| `Error` | `bitly/models/error.py` |

### client.campaigns_api.update_campaign

- **Route**: `PATCH /campaigns/{campaign_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_campaign(campaign_guid: str, body: CampaignModify | CampaignModifyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `campaign_guid`, `body`
- **Params**: `campaign_guid` — path · `body` — JSON body
- **Returns (parsed)**: `Campaign`
- **Returns (raw)**: `ApiResult[Campaign, UpdateCampaignErrorBody]`
- **Error**: `UpdateCampaignErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CampaignModify` | `bitly/models/campaign_modify.py` |
| `CampaignModifyDict` | `bitly/models/campaign_modify.py` |
| `Campaign` | `bitly/models/campaign.py` |
| `UpdateCampaignErrorBody` | `bitly/errors/update_campaign_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.campaigns_api.update_channel

- **Route**: `PATCH /channels/{channel_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_channel(channel_guid: str, body: ChannelModify | ChannelModifyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `channel_guid`, `body`
- **Params**: `channel_guid` — path · `body` — JSON body
- **Returns (parsed)**: `Channel`
- **Returns (raw)**: `ApiResult[Channel, UpdateChannelErrorBody]`
- **Error**: `UpdateChannelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChannelModify` | `bitly/models/channel_modify.py` |
| `ChannelModifyDict` | `bitly/models/channel_modify.py` |
| `Channel` | `bitly/models/channel.py` |
| `UpdateChannelErrorBody` | `bitly/errors/update_channel_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

