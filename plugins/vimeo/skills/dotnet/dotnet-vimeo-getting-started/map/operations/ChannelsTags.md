# ChannelsTags — operations

Accessor: `client.ChannelsTags` · Source: `Api/ChannelsTags.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddChannelTag
- **HTTP**: `PUT /channels/{channel_id}/tags/{word}` (Default (api))
- **Notes**: This method adds a single tag to the specified channel. The authenticated user must be the owner of the channel.
- **Signature**: `AddChannelTag(double channelId, string word, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddChannelTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetError(out Error)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AddTagsToChannel
- **HTTP**: `PUT /channels/{channel_id}/tags` (Default (api))
- **Notes**: This method adds multiple tags to the specified channel. Include the tags as a JSON array in the body of the request using the tag field, like this: `[{ "tag": "funny" }, { "tag": "concert" }]`. The authenticated user must be the owner of the channel. For more information on batch requests like this one, see Using Common Formats and Parameters .
- **Signature**: `AddTagsToChannel(double channelId, IReadOnlyList<ChannelsTagsRequest> body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Tag>`
- **Error**: `SdkException<AddTagsToChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetError(out Error)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckIfChannelHasTag
- **HTTP**: `GET /channels/{channel_id}/tags/{word}` (Default (api))
- **Notes**: This method determines whether a tag has been added to the specified channel.
- **Signature**: `CheckIfChannelHasTag(double channelId, string word, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CheckIfChannelHasTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetError(out Error)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTagFromChannel
- **HTTP**: `DELETE /channels/{channel_id}/tags/{word}` (Default (api))
- **Notes**: This method removes a single tag from the specified channel. The authenticated user must be the owner of the channel.
- **Signature**: `DeleteTagFromChannel(double channelId, string word, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTagFromChannelError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetError(out Error)` [401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetChannelTags
- **HTTP**: `GET /channels/{channel_id}/tags` (Default (api))
- **Notes**: This method returns every tag that has been added to the specified channel.
- **Signature**: `GetChannelTags(double channelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TagConnection`
- **Error**: `SdkException<GetChannelTagsError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
