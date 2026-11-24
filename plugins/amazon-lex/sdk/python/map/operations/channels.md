<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channels — operations

Accessor: `client.channels` · Source: `amazon_lex/apis/channels.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.channels.delete_bot_channel_association

- **Route**: `DELETE /bots/{botName}/aliases/{botAlias}/channels/{name}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_bot_channel_association(bot_name: str, bot_alias: str, name: str, *, body: DeleteBotChannelAssociationRequest | DeleteBotChannelAssociationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `bot_alias`, `name`
- **Params**: `bot_name` — path `botName` · `bot_alias` — path `botAlias` · `name` — path · `body` — JSON body
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DeleteBotChannelAssociationErrorBody]`
- **Error**: `DeleteBotChannelAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBotChannelAssociationRequest` | `amazon_lex/models/delete_bot_channel_association_request.py` |
| `DeleteBotChannelAssociationRequestDict` | `amazon_lex/models/delete_bot_channel_association_request.py` |
| `DeleteBotChannelAssociationErrorBody` | `amazon_lex/errors/delete_bot_channel_association_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `ConflictException` | `amazon_lex/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.channels.get_bot_channel_association

- **Route**: `GET /bots/{botName}/aliases/{botAlias}/channels/{name}`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_bot_channel_association(bot_name: str, bot_alias: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `bot_alias`, `name`
- **Params**: `bot_name` — path `botName` · `bot_alias` — path `botAlias` · `name` — path
- **Returns (parsed)**: `GetBotChannelAssociationResponse`
- **Returns (raw)**: `ApiResult[GetBotChannelAssociationResponse, GetBotChannelAssociationErrorBody]`
- **Error**: `GetBotChannelAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBotChannelAssociationResponse` | `amazon_lex/models/get_bot_channel_association_response.py` |
| `GetBotChannelAssociationErrorBody` | `amazon_lex/errors/get_bot_channel_association_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_lex/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

### client.channels.get_bot_channel_associations

- **Route**: `GET /bots/{botName}/aliases/{botAlias}/channels`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_bot_channel_associations(bot_name: str, bot_alias: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bot_name`, `bot_alias`
- **Params**: `bot_name` — path `botName` · `bot_alias` — path `botAlias`
- **Returns (parsed)**: `GetBotChannelAssociationsResponse`
- **Returns (raw)**: `ApiResult[GetBotChannelAssociationsResponse, GetBotChannelAssociationsErrorBody]`
- **Error**: `GetBotChannelAssociationsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBotChannelAssociationsResponse` | `amazon_lex/models/get_bot_channel_associations_response.py` |
| `GetBotChannelAssociationsErrorBody` | `amazon_lex/errors/get_bot_channel_associations_error.py` |
| `BadRequestException` | `amazon_lex/models/bad_request_exception.py` |
| `LimitExceededException` | `amazon_lex/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_lex/models/internal_failure_exception.py` |

