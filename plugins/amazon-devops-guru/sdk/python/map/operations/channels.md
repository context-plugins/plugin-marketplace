<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channels — operations

Accessor: `client.channels` · Source: `amazon_dev_ops_guru/apis/channels.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.channels.add_notification_channel

- **Route**: `PUT /channels`
- **Auth**: `sigv4`
- **Signature**: `def add_notification_channel(*, body: ChannelsRequest | ChannelsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AddNotificationChannelResponse`
- **Returns (raw)**: `ApiResult[AddNotificationChannelResponse, AddNotificationChannelErrorBody]`
- **Error**: `AddNotificationChannelErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `ServiceQuotaExceededException` [402] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChannelsRequest` | `amazon_dev_ops_guru/models/channels_request.py` |
| `ChannelsRequestDict` | `amazon_dev_ops_guru/models/channels_request.py` |
| `AddNotificationChannelResponse` | `amazon_dev_ops_guru/models/add_notification_channel_response.py` |
| `AddNotificationChannelErrorBody` | `amazon_dev_ops_guru/errors/add_notification_channel_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `ServiceQuotaExceededException` | `amazon_dev_ops_guru/models/service_quota_exceeded_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_dev_ops_guru/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.channels.list_notification_channels

- **Route**: `POST /channels`
- **Auth**: `sigv4`
- **Signature**: `def list_notification_channels(*, body: ChannelsRequest1 | ChannelsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListNotificationChannelsResponse`
- **Returns (raw)**: `ApiResult[ListNotificationChannelsResponse, ListNotificationChannelsErrorBody]`
- **Error**: `ListNotificationChannelsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChannelsRequest1` | `amazon_dev_ops_guru/models/channels_request1.py` |
| `ChannelsRequest1Dict` | `amazon_dev_ops_guru/models/channels_request1.py` |
| `ListNotificationChannelsResponse` | `amazon_dev_ops_guru/models/list_notification_channels_response.py` |
| `ListNotificationChannelsErrorBody` | `amazon_dev_ops_guru/errors/list_notification_channels_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.channels.remove_notification_channel

- **Route**: `DELETE /channels/{Id}`
- **Auth**: `sigv4`
- **Signature**: `def remove_notification_channel(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `Id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RemoveNotificationChannelErrorBody]`
- **Error**: `RemoveNotificationChannelErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RemoveNotificationChannelErrorBody` | `amazon_dev_ops_guru/errors/remove_notification_channel_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_dev_ops_guru/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

