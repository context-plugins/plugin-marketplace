<!-- Generated file — do not edit; regenerated with the SDK. -->

# CampaignsApi — operations

Accessor: `client.CampaignsApi` · Source: `src/Bitly/Api/CampaignsApi.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateCampaign(CreateCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Campaign`
- **Error**: `ApiException<CreateCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCampaignRequest` | `src/Bitly/Requests/CampaignsApi/CreateCampaignRequest.cs` |
| `CampaignModify` | `src/Bitly/Models/CampaignModify.cs` |
| `Campaign` | `src/Bitly/Models/Campaign.cs` |
| `CreateCampaignError` | `src/Bitly/Errors/CreateCampaignError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### CreateChannel

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateChannel(CreateChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Channel`
- **Error**: `ApiException<CreateChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateChannelRequest` | `src/Bitly/Requests/CampaignsApi/CreateChannelRequest.cs` |
| `ChannelModify` | `src/Bitly/Models/ChannelModify.cs` |
| `Channel` | `src/Bitly/Models/Channel.cs` |
| `CreateChannelError` | `src/Bitly/Errors/CreateChannelError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCampaign(GetCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CampaignGuid`
- **Returns**: `Campaign`
- **Error**: `ApiException<GetCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402, 403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCampaignRequest` | `src/Bitly/Requests/CampaignsApi/GetCampaignRequest.cs` |
| `Campaign` | `src/Bitly/Models/Campaign.cs` |
| `GetCampaignError` | `src/Bitly/Errors/GetCampaignError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetCampaigns

- **Auth**: `options.BearerAuth`
- **Signature**: `GetCampaigns(GetCampaignsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `group_guid` ← `GroupGuid`
- **Returns**: `Campaigns`
- **Error**: `ApiException<GetCampaignsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 500, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCampaignsRequest` | `src/Bitly/Requests/CampaignsApi/GetCampaignsRequest.cs` |
| `Campaigns` | `src/Bitly/Models/Campaigns.cs` |
| `GetCampaignsError` | `src/Bitly/Errors/GetCampaignsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetChannel

- **Auth**: `options.BearerAuth`
- **Signature**: `GetChannel(GetChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ChannelGuid`
- **Returns**: `Channel`
- **Error**: `ApiException<GetChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402, 403, 404, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetChannelRequest` | `src/Bitly/Requests/CampaignsApi/GetChannelRequest.cs` |
| `Channel` | `src/Bitly/Models/Channel.cs` |
| `GetChannelError` | `src/Bitly/Errors/GetChannelError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### GetChannels

- **Auth**: `options.BearerAuth`
- **Signature**: `GetChannels(GetChannelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `group_guid` ← `GroupGuid`, `campaign_guid` ← `CampaignGuid`
- **Returns**: `Channels`
- **Error**: `ApiException<GetChannelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [402, 403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetChannelsRequest` | `src/Bitly/Requests/CampaignsApi/GetChannelsRequest.cs` |
| `Channels` | `src/Bitly/Models/Channels.cs` |
| `GetChannelsError` | `src/Bitly/Errors/GetChannelsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### UpdateCampaign

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateCampaign(UpdateCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CampaignGuid`, `Body`
- **Returns**: `Campaign`
- **Error**: `ApiException<UpdateCampaignError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCampaignRequest` | `src/Bitly/Requests/CampaignsApi/UpdateCampaignRequest.cs` |
| `CampaignModify` | `src/Bitly/Models/CampaignModify.cs` |
| `Campaign` | `src/Bitly/Models/Campaign.cs` |
| `UpdateCampaignError` | `src/Bitly/Errors/UpdateCampaignError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

### UpdateChannel

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateChannel(UpdateChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ChannelGuid`, `Body`
- **Returns**: `Channel`
- **Error**: `ApiException<UpdateChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 402, 403, 404, 422, 500, 503] · `TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateChannelRequest` | `src/Bitly/Requests/CampaignsApi/UpdateChannelRequest.cs` |
| `ChannelModify` | `src/Bitly/Models/ChannelModify.cs` |
| `Channel` | `src/Bitly/Models/Channel.cs` |
| `UpdateChannelError` | `src/Bitly/Errors/UpdateChannelError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |
| `SimplifiedError` | `src/Bitly/Models/SimplifiedError.cs` |

