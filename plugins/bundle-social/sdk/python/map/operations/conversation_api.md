<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationApi — operations

Accessor: `client.conversation_api` · Source: `bundle_social/apis/conversation_api.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.conversation_api.conversation_archive

- **Route**: `POST /api/v1/conversations/{id}/archive`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_archive(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ConversationsArchiveResponse`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsArchiveResponse, ConversationArchiveErrorBody]`
- **Error**: `ConversationArchiveErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1ConversationsArchive400Error1` [400] · `ApiV1ConversationsArchive401Error1` [401] · `ApiV1ConversationsArchive403Error1` [403] · `ApiV1ConversationsArchive404Error1` [404] · `ApiV1ConversationsArchive429Error1` [429] · `ApiV1ConversationsArchive500Error1` [500] · `ApiV1ConversationsArchive502Error1` [502] · `ApiV1ConversationsArchive503Error1` [503] · `ApiV1ConversationsArchive504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ConversationsArchiveResponse` | `bundle_social/models/api_v1_conversations_archive_response.py` |
| `ConversationArchiveErrorBody` | `bundle_social/errors/conversation_archive_error.py` |
| `ApiV1ConversationsArchive400Error1` | `bundle_social/models/api_v1_conversations_archive400_error1.py` |
| `ApiV1ConversationsArchive401Error1` | `bundle_social/models/api_v1_conversations_archive401_error1.py` |
| `ApiV1ConversationsArchive403Error1` | `bundle_social/models/api_v1_conversations_archive403_error1.py` |
| `ApiV1ConversationsArchive404Error1` | `bundle_social/models/api_v1_conversations_archive404_error1.py` |
| `ApiV1ConversationsArchive429Error1` | `bundle_social/models/api_v1_conversations_archive429_error1.py` |
| `ApiV1ConversationsArchive500Error1` | `bundle_social/models/api_v1_conversations_archive500_error1.py` |
| `ApiV1ConversationsArchive502Error1` | `bundle_social/models/api_v1_conversations_archive502_error1.py` |
| `ApiV1ConversationsArchive503Error1` | `bundle_social/models/api_v1_conversations_archive503_error1.py` |
| `ApiV1ConversationsArchive504Error1` | `bundle_social/models/api_v1_conversations_archive504_error1.py` |

### client.conversation_api.conversation_get

- **Route**: `GET /api/v1/conversations/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_get(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ConversationsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsResponse1, ConversationGetErrorBody]`
- **Error**: `ConversationGetErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Conversations400Error1` [400] · `ApiV1Conversations401Error1` [401] · `ApiV1Conversations403Error1` [403] · `ApiV1Conversations404Error1` [404] · `ApiV1Conversations429Error1` [429] · `ApiV1Conversations500Error1` [500] · `ApiV1Conversations502Error1` [502] · `ApiV1Conversations503Error1` [503] · `ApiV1Conversations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ConversationsResponse1` | `bundle_social/models/api_v1_conversations_response1.py` |
| `ConversationGetErrorBody` | `bundle_social/errors/conversation_get_error.py` |
| `ApiV1Conversations400Error1` | `bundle_social/models/api_v1_conversations400_error1.py` |
| `ApiV1Conversations401Error1` | `bundle_social/models/api_v1_conversations401_error1.py` |
| `ApiV1Conversations403Error1` | `bundle_social/models/api_v1_conversations403_error1.py` |
| `ApiV1Conversations404Error1` | `bundle_social/models/api_v1_conversations404_error1.py` |
| `ApiV1Conversations429Error1` | `bundle_social/models/api_v1_conversations429_error1.py` |
| `ApiV1Conversations500Error1` | `bundle_social/models/api_v1_conversations500_error1.py` |
| `ApiV1Conversations502Error1` | `bundle_social/models/api_v1_conversations502_error1.py` |
| `ApiV1Conversations503Error1` | `bundle_social/models/api_v1_conversations503_error1.py` |
| `ApiV1Conversations504Error1` | `bundle_social/models/api_v1_conversations504_error1.py` |

### client.conversation_api.conversation_get_list

- **Route**: `GET /api/v1/conversations/`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_get_list(team_id: str, *, platform: PlatformBundleSocialConversationApiOrStr | None = None, social_account_id: str | None = None, status: StatusBundleSocialConversationApiOrStr | None = None, offset: int | None = 0, limit: int | None = 10, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `platform` — query · `social_account_id` — query `socialAccountId` · `status` — query · `offset` — query · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1ConversationsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsResponse, ConversationGetListErrorBody]`
- **Error**: `ConversationGetListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Conversations400Error1` [400] · `ApiV1Conversations401Error1` [401] · `ApiV1Conversations403Error1` [403] · `ApiV1Conversations404Error1` [404] · `ApiV1Conversations429Error1` [429] · `ApiV1Conversations500Error1` [500] · `ApiV1Conversations502Error1` [502] · `ApiV1Conversations503Error1` [503] · `ApiV1Conversations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformBundleSocialConversationApiOrStr` | `bundle_social/models/enums/platform_bundle_social_conversation_api.py` |
| `StatusBundleSocialConversationApiOrStr` | `bundle_social/models/enums/status_bundle_social_conversation_api.py` |
| `ApiV1ConversationsResponse` | `bundle_social/models/api_v1_conversations_response.py` |
| `ConversationGetListErrorBody` | `bundle_social/errors/conversation_get_list_error.py` |
| `ApiV1Conversations400Error1` | `bundle_social/models/api_v1_conversations400_error1.py` |
| `ApiV1Conversations401Error1` | `bundle_social/models/api_v1_conversations401_error1.py` |
| `ApiV1Conversations403Error1` | `bundle_social/models/api_v1_conversations403_error1.py` |
| `ApiV1Conversations404Error1` | `bundle_social/models/api_v1_conversations404_error1.py` |
| `ApiV1Conversations429Error1` | `bundle_social/models/api_v1_conversations429_error1.py` |
| `ApiV1Conversations500Error1` | `bundle_social/models/api_v1_conversations500_error1.py` |
| `ApiV1Conversations502Error1` | `bundle_social/models/api_v1_conversations502_error1.py` |
| `ApiV1Conversations503Error1` | `bundle_social/models/api_v1_conversations503_error1.py` |
| `ApiV1Conversations504Error1` | `bundle_social/models/api_v1_conversations504_error1.py` |

### client.conversation_api.conversation_get_messages

- **Route**: `GET /api/v1/conversations/{id}/messages`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_get_messages(id_: str, *, offset: int | None = 0, limit: int | None = 10, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `offset` — query · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1ConversationsMessagesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsMessagesResponse, ConversationGetMessagesErrorBody]`
- **Error**: `ConversationGetMessagesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1ConversationsMessages400Error1` [400] · `ApiV1ConversationsMessages401Error1` [401] · `ApiV1ConversationsMessages403Error1` [403] · `ApiV1ConversationsMessages404Error1` [404] · `ApiV1ConversationsMessages429Error1` [429] · `ApiV1ConversationsMessages500Error1` [500] · `ApiV1ConversationsMessages502Error1` [502] · `ApiV1ConversationsMessages503Error1` [503] · `ApiV1ConversationsMessages504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ConversationsMessagesResponse` | `bundle_social/models/api_v1_conversations_messages_response.py` |
| `ConversationGetMessagesErrorBody` | `bundle_social/errors/conversation_get_messages_error.py` |
| `ApiV1ConversationsMessages400Error1` | `bundle_social/models/api_v1_conversations_messages400_error1.py` |
| `ApiV1ConversationsMessages401Error1` | `bundle_social/models/api_v1_conversations_messages401_error1.py` |
| `ApiV1ConversationsMessages403Error1` | `bundle_social/models/api_v1_conversations_messages403_error1.py` |
| `ApiV1ConversationsMessages404Error1` | `bundle_social/models/api_v1_conversations_messages404_error1.py` |
| `ApiV1ConversationsMessages429Error1` | `bundle_social/models/api_v1_conversations_messages429_error1.py` |
| `ApiV1ConversationsMessages500Error1` | `bundle_social/models/api_v1_conversations_messages500_error1.py` |
| `ApiV1ConversationsMessages502Error1` | `bundle_social/models/api_v1_conversations_messages502_error1.py` |
| `ApiV1ConversationsMessages503Error1` | `bundle_social/models/api_v1_conversations_messages503_error1.py` |
| `ApiV1ConversationsMessages504Error1` | `bundle_social/models/api_v1_conversations_messages504_error1.py` |

### client.conversation_api.conversation_mark_read

- **Route**: `POST /api/v1/conversations/{id}/read`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_mark_read(id_: str, *, body: ApiV1ConversationsReadRequest | ApiV1ConversationsReadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ConversationsReadResponse`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsReadResponse, ConversationMarkReadErrorBody]`
- **Error**: `ConversationMarkReadErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1ConversationsRead400Error1` [400] · `ApiV1ConversationsRead401Error1` [401] · `ApiV1ConversationsRead403Error1` [403] · `ApiV1ConversationsRead404Error1` [404] · `ApiV1ConversationsRead429Error1` [429] · `ApiV1ConversationsRead500Error1` [500] · `ApiV1ConversationsRead502Error1` [502] · `ApiV1ConversationsRead503Error1` [503] · `ApiV1ConversationsRead504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ConversationsReadRequest` | `bundle_social/models/api_v1_conversations_read_request.py` |
| `ApiV1ConversationsReadRequestDict` | `bundle_social/models/api_v1_conversations_read_request.py` |
| `ApiV1ConversationsReadResponse` | `bundle_social/models/api_v1_conversations_read_response.py` |
| `ConversationMarkReadErrorBody` | `bundle_social/errors/conversation_mark_read_error.py` |
| `ApiV1ConversationsRead400Error1` | `bundle_social/models/api_v1_conversations_read400_error1.py` |
| `ApiV1ConversationsRead401Error1` | `bundle_social/models/api_v1_conversations_read401_error1.py` |
| `ApiV1ConversationsRead403Error1` | `bundle_social/models/api_v1_conversations_read403_error1.py` |
| `ApiV1ConversationsRead404Error1` | `bundle_social/models/api_v1_conversations_read404_error1.py` |
| `ApiV1ConversationsRead429Error1` | `bundle_social/models/api_v1_conversations_read429_error1.py` |
| `ApiV1ConversationsRead500Error1` | `bundle_social/models/api_v1_conversations_read500_error1.py` |
| `ApiV1ConversationsRead502Error1` | `bundle_social/models/api_v1_conversations_read502_error1.py` |
| `ApiV1ConversationsRead503Error1` | `bundle_social/models/api_v1_conversations_read503_error1.py` |
| `ApiV1ConversationsRead504Error1` | `bundle_social/models/api_v1_conversations_read504_error1.py` |

### client.conversation_api.conversation_open

- **Route**: `POST /api/v1/conversations/{id}/open`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_open(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ConversationsOpenResponse`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsOpenResponse, ConversationOpenErrorBody]`
- **Error**: `ConversationOpenErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1ConversationsOpen400Error1` [400] · `ApiV1ConversationsOpen401Error1` [401] · `ApiV1ConversationsOpen403Error1` [403] · `ApiV1ConversationsOpen404Error1` [404] · `ApiV1ConversationsOpen429Error1` [429] · `ApiV1ConversationsOpen500Error1` [500] · `ApiV1ConversationsOpen502Error1` [502] · `ApiV1ConversationsOpen503Error1` [503] · `ApiV1ConversationsOpen504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ConversationsOpenResponse` | `bundle_social/models/api_v1_conversations_open_response.py` |
| `ConversationOpenErrorBody` | `bundle_social/errors/conversation_open_error.py` |
| `ApiV1ConversationsOpen400Error1` | `bundle_social/models/api_v1_conversations_open400_error1.py` |
| `ApiV1ConversationsOpen401Error1` | `bundle_social/models/api_v1_conversations_open401_error1.py` |
| `ApiV1ConversationsOpen403Error1` | `bundle_social/models/api_v1_conversations_open403_error1.py` |
| `ApiV1ConversationsOpen404Error1` | `bundle_social/models/api_v1_conversations_open404_error1.py` |
| `ApiV1ConversationsOpen429Error1` | `bundle_social/models/api_v1_conversations_open429_error1.py` |
| `ApiV1ConversationsOpen500Error1` | `bundle_social/models/api_v1_conversations_open500_error1.py` |
| `ApiV1ConversationsOpen502Error1` | `bundle_social/models/api_v1_conversations_open502_error1.py` |
| `ApiV1ConversationsOpen503Error1` | `bundle_social/models/api_v1_conversations_open503_error1.py` |
| `ApiV1ConversationsOpen504Error1` | `bundle_social/models/api_v1_conversations_open504_error1.py` |

### client.conversation_api.conversation_private_reply

- **Route**: `POST /api/v1/conversations/private-reply`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_private_reply(*, body: ApiV1ConversationsPrivateReplyRequest | ApiV1ConversationsPrivateReplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ConversationsPrivateReplyResponse`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsPrivateReplyResponse, ConversationPrivateReplyErrorBody]`
- **Error**: `ConversationPrivateReplyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1ConversationsPrivateReply400Error1` [400] · `ApiV1ConversationsPrivateReply401Error1` [401] · `ApiV1ConversationsPrivateReply403Error1` [403] · `ApiV1ConversationsPrivateReply404Error1` [404] · `ApiV1ConversationsPrivateReply429Error1` [429] · `ApiV1ConversationsPrivateReply500Error1` [500] · `ApiV1ConversationsPrivateReply502Error1` [502] · `ApiV1ConversationsPrivateReply503Error1` [503] · `ApiV1ConversationsPrivateReply504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ConversationsPrivateReplyRequest` | `bundle_social/models/api_v1_conversations_private_reply_request.py` |
| `ApiV1ConversationsPrivateReplyRequestDict` | `bundle_social/models/api_v1_conversations_private_reply_request.py` |
| `ApiV1ConversationsPrivateReplyResponse` | `bundle_social/models/api_v1_conversations_private_reply_response.py` |
| `ConversationPrivateReplyErrorBody` | `bundle_social/errors/conversation_private_reply_error.py` |
| `ApiV1ConversationsPrivateReply400Error1` | `bundle_social/models/api_v1_conversations_private_reply400_error1.py` |
| `ApiV1ConversationsPrivateReply401Error1` | `bundle_social/models/api_v1_conversations_private_reply401_error1.py` |
| `ApiV1ConversationsPrivateReply403Error1` | `bundle_social/models/api_v1_conversations_private_reply403_error1.py` |
| `ApiV1ConversationsPrivateReply404Error1` | `bundle_social/models/api_v1_conversations_private_reply404_error1.py` |
| `ApiV1ConversationsPrivateReply429Error1` | `bundle_social/models/api_v1_conversations_private_reply429_error1.py` |
| `ApiV1ConversationsPrivateReply500Error1` | `bundle_social/models/api_v1_conversations_private_reply500_error1.py` |
| `ApiV1ConversationsPrivateReply502Error1` | `bundle_social/models/api_v1_conversations_private_reply502_error1.py` |
| `ApiV1ConversationsPrivateReply503Error1` | `bundle_social/models/api_v1_conversations_private_reply503_error1.py` |
| `ApiV1ConversationsPrivateReply504Error1` | `bundle_social/models/api_v1_conversations_private_reply504_error1.py` |

### client.conversation_api.conversation_react_message

- **Route**: `POST /api/v1/conversations/{id}/messages/{messageId}/reaction`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_react_message(id_: str, message_id: str, *, body: ApiV1ConversationsMessagesReactionRequest | ApiV1ConversationsMessagesReactionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `message_id`
- **Params**: `id_` — path `id` · `message_id` — path `messageId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ConversationsMessagesReactionResponse`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsMessagesReactionResponse, ConversationReactMessageErrorBody]`
- **Error**: `ConversationReactMessageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1ConversationsMessagesReaction400Error1` [400] · `ApiV1ConversationsMessagesReaction401Error1` [401] · `ApiV1ConversationsMessagesReaction403Error1` [403] · `ApiV1ConversationsMessagesReaction404Error1` [404] · `ApiV1ConversationsMessagesReaction429Error1` [429] · `ApiV1ConversationsMessagesReaction500Error1` [500] · `ApiV1ConversationsMessagesReaction502Error1` [502] · `ApiV1ConversationsMessagesReaction503Error1` [503] · `ApiV1ConversationsMessagesReaction504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ConversationsMessagesReactionRequest` | `bundle_social/models/api_v1_conversations_messages_reaction_request.py` |
| `ApiV1ConversationsMessagesReactionRequestDict` | `bundle_social/models/api_v1_conversations_messages_reaction_request.py` |
| `ApiV1ConversationsMessagesReactionResponse` | `bundle_social/models/api_v1_conversations_messages_reaction_response.py` |
| `ConversationReactMessageErrorBody` | `bundle_social/errors/conversation_react_message_error.py` |
| `ApiV1ConversationsMessagesReaction400Error1` | `bundle_social/models/api_v1_conversations_messages_reaction400_error1.py` |
| `ApiV1ConversationsMessagesReaction401Error1` | `bundle_social/models/api_v1_conversations_messages_reaction401_error1.py` |
| `ApiV1ConversationsMessagesReaction403Error1` | `bundle_social/models/api_v1_conversations_messages_reaction403_error1.py` |
| `ApiV1ConversationsMessagesReaction404Error1` | `bundle_social/models/api_v1_conversations_messages_reaction404_error1.py` |
| `ApiV1ConversationsMessagesReaction429Error1` | `bundle_social/models/api_v1_conversations_messages_reaction429_error1.py` |
| `ApiV1ConversationsMessagesReaction500Error1` | `bundle_social/models/api_v1_conversations_messages_reaction500_error1.py` |
| `ApiV1ConversationsMessagesReaction502Error1` | `bundle_social/models/api_v1_conversations_messages_reaction502_error1.py` |
| `ApiV1ConversationsMessagesReaction503Error1` | `bundle_social/models/api_v1_conversations_messages_reaction503_error1.py` |
| `ApiV1ConversationsMessagesReaction504Error1` | `bundle_social/models/api_v1_conversations_messages_reaction504_error1.py` |

### client.conversation_api.conversation_send_message

- **Route**: `POST /api/v1/conversations/{id}/messages`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_send_message(id_: str, *, body: ApiV1ConversationsMessagesRequest | ApiV1ConversationsMessagesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ConversationsMessagesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsMessagesResponse1, ConversationSendMessageErrorBody]`
- **Error**: `ConversationSendMessageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1ConversationsMessages400Error1` [400] · `ApiV1ConversationsMessages401Error1` [401] · `ApiV1ConversationsMessages403Error1` [403] · `ApiV1ConversationsMessages404Error1` [404] · `ApiV1ConversationsMessages429Error1` [429] · `ApiV1ConversationsMessages500Error1` [500] · `ApiV1ConversationsMessages502Error1` [502] · `ApiV1ConversationsMessages503Error1` [503] · `ApiV1ConversationsMessages504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ConversationsMessagesRequest` | `bundle_social/models/api_v1_conversations_messages_request.py` |
| `ApiV1ConversationsMessagesRequestDict` | `bundle_social/models/api_v1_conversations_messages_request.py` |
| `ApiV1ConversationsMessagesResponse1` | `bundle_social/models/api_v1_conversations_messages_response1.py` |
| `ConversationSendMessageErrorBody` | `bundle_social/errors/conversation_send_message_error.py` |
| `ApiV1ConversationsMessages400Error1` | `bundle_social/models/api_v1_conversations_messages400_error1.py` |
| `ApiV1ConversationsMessages401Error1` | `bundle_social/models/api_v1_conversations_messages401_error1.py` |
| `ApiV1ConversationsMessages403Error1` | `bundle_social/models/api_v1_conversations_messages403_error1.py` |
| `ApiV1ConversationsMessages404Error1` | `bundle_social/models/api_v1_conversations_messages404_error1.py` |
| `ApiV1ConversationsMessages429Error1` | `bundle_social/models/api_v1_conversations_messages429_error1.py` |
| `ApiV1ConversationsMessages500Error1` | `bundle_social/models/api_v1_conversations_messages500_error1.py` |
| `ApiV1ConversationsMessages502Error1` | `bundle_social/models/api_v1_conversations_messages502_error1.py` |
| `ApiV1ConversationsMessages503Error1` | `bundle_social/models/api_v1_conversations_messages503_error1.py` |
| `ApiV1ConversationsMessages504Error1` | `bundle_social/models/api_v1_conversations_messages504_error1.py` |

### client.conversation_api.conversation_update

- **Route**: `PATCH /api/v1/conversations/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def conversation_update(id_: str, *, body: ApiV1ConversationsRequest | ApiV1ConversationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ConversationsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ConversationsResponse1, ConversationUpdateErrorBody]`
- **Error**: `ConversationUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Conversations400Error1` [400] · `ApiV1Conversations401Error1` [401] · `ApiV1Conversations403Error1` [403] · `ApiV1Conversations404Error1` [404] · `ApiV1Conversations429Error1` [429] · `ApiV1Conversations500Error1` [500] · `ApiV1Conversations502Error1` [502] · `ApiV1Conversations503Error1` [503] · `ApiV1Conversations504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ConversationsRequest` | `bundle_social/models/api_v1_conversations_request.py` |
| `ApiV1ConversationsRequestDict` | `bundle_social/models/api_v1_conversations_request.py` |
| `ApiV1ConversationsResponse1` | `bundle_social/models/api_v1_conversations_response1.py` |
| `ConversationUpdateErrorBody` | `bundle_social/errors/conversation_update_error.py` |
| `ApiV1Conversations400Error1` | `bundle_social/models/api_v1_conversations400_error1.py` |
| `ApiV1Conversations401Error1` | `bundle_social/models/api_v1_conversations401_error1.py` |
| `ApiV1Conversations403Error1` | `bundle_social/models/api_v1_conversations403_error1.py` |
| `ApiV1Conversations404Error1` | `bundle_social/models/api_v1_conversations404_error1.py` |
| `ApiV1Conversations429Error1` | `bundle_social/models/api_v1_conversations429_error1.py` |
| `ApiV1Conversations500Error1` | `bundle_social/models/api_v1_conversations500_error1.py` |
| `ApiV1Conversations502Error1` | `bundle_social/models/api_v1_conversations502_error1.py` |
| `ApiV1Conversations503Error1` | `bundle_social/models/api_v1_conversations503_error1.py` |
| `ApiV1Conversations504Error1` | `bundle_social/models/api_v1_conversations504_error1.py` |

