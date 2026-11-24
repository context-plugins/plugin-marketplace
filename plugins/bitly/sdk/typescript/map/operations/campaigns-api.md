<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignsApi — operations

Accessor: `client.campaignsApi` · Source: `src/resources/campaigns-api.ts` · 8 operations · Request and error types: namespace `CampaignsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bitly`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCampaign

- **Signature**: `createCampaign(request: CampaignsApi.CreateCampaignRequest, options?: RequestOptions): ApiPromise<Campaign, CampaignsApi.CreateCampaignError>`
- **Wire**: `POST /campaigns`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Campaign`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CampaignsApi.CreateCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsApi.CreateCampaignRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CampaignModify` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignModify` | `campaignModifySchema` | `src/models/campaign-modify.ts` |
| `Campaign` | `campaignSchema` | `src/models/campaign.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### createChannel

- **Signature**: `createChannel(request: CampaignsApi.CreateChannelRequest, options?: RequestOptions): ApiPromise<Channel, CampaignsApi.CreateChannelError>`
- **Wire**: `POST /channels`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Channel`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CampaignsApi.CreateChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsApi.CreateChannelRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ChannelModify` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelModify` | `channelModifySchema` | `src/models/channel-modify.ts` |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getCampaign

- **Signature**: `getCampaign(request: CampaignsApi.GetCampaignRequest, options?: RequestOptions): ApiPromise<Campaign, CampaignsApi.GetCampaignError>`
- **Wire**: `GET /campaigns/{campaign_guid}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Campaign`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CampaignsApi.GetCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsApi.GetCampaignRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignGuid` | `path` | `campaign_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Campaign` | `campaignSchema` | `src/models/campaign.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getCampaigns

- **Signature**: `getCampaigns(request?: CampaignsApi.GetCampaignsRequest, options?: RequestOptions): ApiPromise<Campaigns, CampaignsApi.GetCampaignsError>`
- **Wire**: `GET /campaigns`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Campaigns`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CampaignsApi.GetCampaignsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"error6"` [502] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsApi.GetCampaignsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `query` | `group_guid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Campaigns` | `campaignsSchema` | `src/models/campaigns.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getChannel

- **Signature**: `getChannel(request: CampaignsApi.GetChannelRequest, options?: RequestOptions): ApiPromise<Channel, CampaignsApi.GetChannelError>`
- **Wire**: `GET /channels/{channel_guid}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Channel`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CampaignsApi.GetChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsApi.GetChannelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelGuid` | `path` | `channel_guid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### getChannels

- **Signature**: `getChannels(request?: CampaignsApi.GetChannelsRequest, options?: RequestOptions): ApiPromise<Channels, CampaignsApi.GetChannelsError>`
- **Wire**: `GET /channels`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Channels`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CampaignsApi.GetChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsApi.GetChannelsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupGuid` | `query` | `group_guid` | `string` | no |
| `campaignGuid` | `query` | `campaign_guid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channels` | `channelsSchema` | `src/models/channels.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateCampaign

- **Signature**: `updateCampaign(request: CampaignsApi.UpdateCampaignRequest, options?: RequestOptions): ApiPromise<Campaign, CampaignsApi.UpdateCampaignError>`
- **Wire**: `PATCH /campaigns/{campaign_guid}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Campaign`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CampaignsApi.UpdateCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsApi.UpdateCampaignRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `campaignGuid` | `path` | `campaign_guid` | `string` | yes |
| `body` | `body` | — | `CampaignModify` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CampaignModify` | `campaignModifySchema` | `src/models/campaign-modify.ts` |
| `Campaign` | `campaignSchema` | `src/models/campaign.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

### updateChannel

- **Signature**: `updateChannel(request: CampaignsApi.UpdateChannelRequest, options?: RequestOptions): ApiPromise<Channel, CampaignsApi.UpdateChannelError>`
- **Wire**: `PATCH /channels/{channel_guid}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Channel`
- **Error**: `BitlyError` with `kind: "api"`, an instance of `CampaignsApi.UpdateChannelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [422] `Error` · `"simplifiedError"` [429] `SimplifiedError` · `"error6"` [500] `Error` · `"error7"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CampaignsApi.UpdateChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelGuid` | `path` | `channel_guid` | `string` | yes |
| `body` | `body` | — | `ChannelModify` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChannelModify` | `channelModifySchema` | `src/models/channel-modify.ts` |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `SimplifiedError` | `simplifiedErrorSchema` | `src/models/simplified-error.ts` |

