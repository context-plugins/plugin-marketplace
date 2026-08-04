# ChannelsCategories — operations

Accessor: `client.ChannelsCategories` · Source: `Api/ChannelsCategories.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddChannelCategories
- **HTTP**: `PUT /channels/{channel_id}/categories` (Default (api))
- **Notes**: This method adds the specified channel to multiple categories.
- **Signature**: `AddChannelCategories(double channelId, ChannelsCategoriesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddChannelCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401, 403] · `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CategorizeChannel
- **HTTP**: `PUT /channels/{channel_id}/categories/{category}` (Default (api))
- **Notes**: This method adds the specified channel to a single category. The authenticated user must be the owner of the channel.
- **Signature**: `CategorizeChannel(string category, double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CategorizeChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteChannelCategory
- **HTTP**: `DELETE /channels/{channel_id}/categories/{category}` (Default (api))
- **Notes**: This method removes a channel from the specified category. The authenticated user must be the owner of the channel.
- **Signature**: `DeleteChannelCategory(string category, double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteChannelCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChannelCategories
- **HTTP**: `GET /channels/{channel_id}/categories` (Default (api))
- **Notes**: This method returns every category to which the specified channel belongs.
- **Signature**: `GetChannelCategories(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetChannelCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
