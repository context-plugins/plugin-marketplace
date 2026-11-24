<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationApi — operations

Accessor: `client.ConversationApi` · Source: `src/BundleSocial/Api/ConversationApi.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ConversationArchive

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationArchive(ConversationArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ConversationsArchiveResponse`
- **Error**: `ApiException<ConversationArchiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1ConversationsArchive400Error1([NotNullWhen(true)] out ApiV1ConversationsArchive400Error1? value)` [400] · `TryGetApiV1ConversationsArchive401Error1([NotNullWhen(true)] out ApiV1ConversationsArchive401Error1? value)` [401] · `TryGetApiV1ConversationsArchive403Error1([NotNullWhen(true)] out ApiV1ConversationsArchive403Error1? value)` [403] · `TryGetApiV1ConversationsArchive404Error1([NotNullWhen(true)] out ApiV1ConversationsArchive404Error1? value)` [404] · `TryGetApiV1ConversationsArchive429Error1([NotNullWhen(true)] out ApiV1ConversationsArchive429Error1? value)` [429] · `TryGetApiV1ConversationsArchive500Error1([NotNullWhen(true)] out ApiV1ConversationsArchive500Error1? value)` [500] · `TryGetApiV1ConversationsArchive502Error1([NotNullWhen(true)] out ApiV1ConversationsArchive502Error1? value)` [502] · `TryGetApiV1ConversationsArchive503Error1([NotNullWhen(true)] out ApiV1ConversationsArchive503Error1? value)` [503] · `TryGetApiV1ConversationsArchive504Error1([NotNullWhen(true)] out ApiV1ConversationsArchive504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationArchiveRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationArchiveRequest.cs` |
| `ApiV1ConversationsArchiveResponse` | `src/BundleSocial/Models/ApiV1ConversationsArchiveResponse.cs` |
| `ConversationArchiveError` | `src/BundleSocial/Errors/ConversationArchiveError.cs` |
| `ApiV1ConversationsArchive400Error1` | `src/BundleSocial/Models/ApiV1ConversationsArchive400Error1.cs` |
| `ApiV1ConversationsArchive401Error1` | `src/BundleSocial/Models/ApiV1ConversationsArchive401Error1.cs` |
| `ApiV1ConversationsArchive403Error1` | `src/BundleSocial/Models/ApiV1ConversationsArchive403Error1.cs` |
| `ApiV1ConversationsArchive404Error1` | `src/BundleSocial/Models/ApiV1ConversationsArchive404Error1.cs` |
| `ApiV1ConversationsArchive429Error1` | `src/BundleSocial/Models/ApiV1ConversationsArchive429Error1.cs` |
| `ApiV1ConversationsArchive500Error1` | `src/BundleSocial/Models/ApiV1ConversationsArchive500Error1.cs` |
| `ApiV1ConversationsArchive502Error1` | `src/BundleSocial/Models/ApiV1ConversationsArchive502Error1.cs` |
| `ApiV1ConversationsArchive503Error1` | `src/BundleSocial/Models/ApiV1ConversationsArchive503Error1.cs` |
| `ApiV1ConversationsArchive504Error1` | `src/BundleSocial/Models/ApiV1ConversationsArchive504Error1.cs` |

### ConversationGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationGet(ConversationGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ConversationsResponse1`
- **Error**: `ApiException<ConversationGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Conversations400Error1([NotNullWhen(true)] out ApiV1Conversations400Error1? value)` [400] · `TryGetApiV1Conversations401Error1([NotNullWhen(true)] out ApiV1Conversations401Error1? value)` [401] · `TryGetApiV1Conversations403Error1([NotNullWhen(true)] out ApiV1Conversations403Error1? value)` [403] · `TryGetApiV1Conversations404Error1([NotNullWhen(true)] out ApiV1Conversations404Error1? value)` [404] · `TryGetApiV1Conversations429Error1([NotNullWhen(true)] out ApiV1Conversations429Error1? value)` [429] · `TryGetApiV1Conversations500Error1([NotNullWhen(true)] out ApiV1Conversations500Error1? value)` [500] · `TryGetApiV1Conversations502Error1([NotNullWhen(true)] out ApiV1Conversations502Error1? value)` [502] · `TryGetApiV1Conversations503Error1([NotNullWhen(true)] out ApiV1Conversations503Error1? value)` [503] · `TryGetApiV1Conversations504Error1([NotNullWhen(true)] out ApiV1Conversations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationGetRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationGetRequest.cs` |
| `ApiV1ConversationsResponse1` | `src/BundleSocial/Models/ApiV1ConversationsResponse1.cs` |
| `ConversationGetError` | `src/BundleSocial/Errors/ConversationGetError.cs` |
| `ApiV1Conversations400Error1` | `src/BundleSocial/Models/ApiV1Conversations400Error1.cs` |
| `ApiV1Conversations401Error1` | `src/BundleSocial/Models/ApiV1Conversations401Error1.cs` |
| `ApiV1Conversations403Error1` | `src/BundleSocial/Models/ApiV1Conversations403Error1.cs` |
| `ApiV1Conversations404Error1` | `src/BundleSocial/Models/ApiV1Conversations404Error1.cs` |
| `ApiV1Conversations429Error1` | `src/BundleSocial/Models/ApiV1Conversations429Error1.cs` |
| `ApiV1Conversations500Error1` | `src/BundleSocial/Models/ApiV1Conversations500Error1.cs` |
| `ApiV1Conversations502Error1` | `src/BundleSocial/Models/ApiV1Conversations502Error1.cs` |
| `ApiV1Conversations503Error1` | `src/BundleSocial/Models/ApiV1Conversations503Error1.cs` |
| `ApiV1Conversations504Error1` | `src/BundleSocial/Models/ApiV1Conversations504Error1.cs` |

### ConversationGetList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationGetList(ConversationGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamId`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `platform` ← `Platform`, `socialAccountId` ← `SocialAccountId`, `status` ← `Status`, `offset` ← `Offset`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1ConversationsResponse`
- **Error**: `ApiException<ConversationGetListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Conversations400Error1([NotNullWhen(true)] out ApiV1Conversations400Error1? value)` [400] · `TryGetApiV1Conversations401Error1([NotNullWhen(true)] out ApiV1Conversations401Error1? value)` [401] · `TryGetApiV1Conversations403Error1([NotNullWhen(true)] out ApiV1Conversations403Error1? value)` [403] · `TryGetApiV1Conversations404Error1([NotNullWhen(true)] out ApiV1Conversations404Error1? value)` [404] · `TryGetApiV1Conversations429Error1([NotNullWhen(true)] out ApiV1Conversations429Error1? value)` [429] · `TryGetApiV1Conversations500Error1([NotNullWhen(true)] out ApiV1Conversations500Error1? value)` [500] · `TryGetApiV1Conversations502Error1([NotNullWhen(true)] out ApiV1Conversations502Error1? value)` [502] · `TryGetApiV1Conversations503Error1([NotNullWhen(true)] out ApiV1Conversations503Error1? value)` [503] · `TryGetApiV1Conversations504Error1([NotNullWhen(true)] out ApiV1Conversations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationGetListRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationGetListRequest.cs` |
| `PlatformBundleSocialConversationApi` | `src/BundleSocial/Models/Enums/PlatformBundleSocialConversationApi.cs` |
| `StatusBundleSocialConversationApi` | `src/BundleSocial/Models/Enums/StatusBundleSocialConversationApi.cs` |
| `ApiV1ConversationsResponse` | `src/BundleSocial/Models/ApiV1ConversationsResponse.cs` |
| `ConversationGetListError` | `src/BundleSocial/Errors/ConversationGetListError.cs` |
| `ApiV1Conversations400Error1` | `src/BundleSocial/Models/ApiV1Conversations400Error1.cs` |
| `ApiV1Conversations401Error1` | `src/BundleSocial/Models/ApiV1Conversations401Error1.cs` |
| `ApiV1Conversations403Error1` | `src/BundleSocial/Models/ApiV1Conversations403Error1.cs` |
| `ApiV1Conversations404Error1` | `src/BundleSocial/Models/ApiV1Conversations404Error1.cs` |
| `ApiV1Conversations429Error1` | `src/BundleSocial/Models/ApiV1Conversations429Error1.cs` |
| `ApiV1Conversations500Error1` | `src/BundleSocial/Models/ApiV1Conversations500Error1.cs` |
| `ApiV1Conversations502Error1` | `src/BundleSocial/Models/ApiV1Conversations502Error1.cs` |
| `ApiV1Conversations503Error1` | `src/BundleSocial/Models/ApiV1Conversations503Error1.cs` |
| `ApiV1Conversations504Error1` | `src/BundleSocial/Models/ApiV1Conversations504Error1.cs` |

### ConversationGetMessages

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationGetMessages(ConversationGetMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `offset` ← `Offset`, `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1ConversationsMessagesResponse`
- **Error**: `ApiException<ConversationGetMessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1ConversationsMessages400Error1([NotNullWhen(true)] out ApiV1ConversationsMessages400Error1? value)` [400] · `TryGetApiV1ConversationsMessages401Error1([NotNullWhen(true)] out ApiV1ConversationsMessages401Error1? value)` [401] · `TryGetApiV1ConversationsMessages403Error1([NotNullWhen(true)] out ApiV1ConversationsMessages403Error1? value)` [403] · `TryGetApiV1ConversationsMessages404Error1([NotNullWhen(true)] out ApiV1ConversationsMessages404Error1? value)` [404] · `TryGetApiV1ConversationsMessages429Error1([NotNullWhen(true)] out ApiV1ConversationsMessages429Error1? value)` [429] · `TryGetApiV1ConversationsMessages500Error1([NotNullWhen(true)] out ApiV1ConversationsMessages500Error1? value)` [500] · `TryGetApiV1ConversationsMessages502Error1([NotNullWhen(true)] out ApiV1ConversationsMessages502Error1? value)` [502] · `TryGetApiV1ConversationsMessages503Error1([NotNullWhen(true)] out ApiV1ConversationsMessages503Error1? value)` [503] · `TryGetApiV1ConversationsMessages504Error1([NotNullWhen(true)] out ApiV1ConversationsMessages504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationGetMessagesRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationGetMessagesRequest.cs` |
| `ApiV1ConversationsMessagesResponse` | `src/BundleSocial/Models/ApiV1ConversationsMessagesResponse.cs` |
| `ConversationGetMessagesError` | `src/BundleSocial/Errors/ConversationGetMessagesError.cs` |
| `ApiV1ConversationsMessages400Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages400Error1.cs` |
| `ApiV1ConversationsMessages401Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages401Error1.cs` |
| `ApiV1ConversationsMessages403Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages403Error1.cs` |
| `ApiV1ConversationsMessages404Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages404Error1.cs` |
| `ApiV1ConversationsMessages429Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages429Error1.cs` |
| `ApiV1ConversationsMessages500Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages500Error1.cs` |
| `ApiV1ConversationsMessages502Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages502Error1.cs` |
| `ApiV1ConversationsMessages503Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages503Error1.cs` |
| `ApiV1ConversationsMessages504Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages504Error1.cs` |

### ConversationMarkRead

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationMarkRead(ConversationMarkReadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ConversationsReadResponse`
- **Error**: `ApiException<ConversationMarkReadError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1ConversationsRead400Error1([NotNullWhen(true)] out ApiV1ConversationsRead400Error1? value)` [400] · `TryGetApiV1ConversationsRead401Error1([NotNullWhen(true)] out ApiV1ConversationsRead401Error1? value)` [401] · `TryGetApiV1ConversationsRead403Error1([NotNullWhen(true)] out ApiV1ConversationsRead403Error1? value)` [403] · `TryGetApiV1ConversationsRead404Error1([NotNullWhen(true)] out ApiV1ConversationsRead404Error1? value)` [404] · `TryGetApiV1ConversationsRead429Error1([NotNullWhen(true)] out ApiV1ConversationsRead429Error1? value)` [429] · `TryGetApiV1ConversationsRead500Error1([NotNullWhen(true)] out ApiV1ConversationsRead500Error1? value)` [500] · `TryGetApiV1ConversationsRead502Error1([NotNullWhen(true)] out ApiV1ConversationsRead502Error1? value)` [502] · `TryGetApiV1ConversationsRead503Error1([NotNullWhen(true)] out ApiV1ConversationsRead503Error1? value)` [503] · `TryGetApiV1ConversationsRead504Error1([NotNullWhen(true)] out ApiV1ConversationsRead504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationMarkReadRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationMarkReadRequest.cs` |
| `ApiV1ConversationsReadRequest` | `src/BundleSocial/Models/ApiV1ConversationsReadRequest.cs` |
| `ApiV1ConversationsReadResponse` | `src/BundleSocial/Models/ApiV1ConversationsReadResponse.cs` |
| `ConversationMarkReadError` | `src/BundleSocial/Errors/ConversationMarkReadError.cs` |
| `ApiV1ConversationsRead400Error1` | `src/BundleSocial/Models/ApiV1ConversationsRead400Error1.cs` |
| `ApiV1ConversationsRead401Error1` | `src/BundleSocial/Models/ApiV1ConversationsRead401Error1.cs` |
| `ApiV1ConversationsRead403Error1` | `src/BundleSocial/Models/ApiV1ConversationsRead403Error1.cs` |
| `ApiV1ConversationsRead404Error1` | `src/BundleSocial/Models/ApiV1ConversationsRead404Error1.cs` |
| `ApiV1ConversationsRead429Error1` | `src/BundleSocial/Models/ApiV1ConversationsRead429Error1.cs` |
| `ApiV1ConversationsRead500Error1` | `src/BundleSocial/Models/ApiV1ConversationsRead500Error1.cs` |
| `ApiV1ConversationsRead502Error1` | `src/BundleSocial/Models/ApiV1ConversationsRead502Error1.cs` |
| `ApiV1ConversationsRead503Error1` | `src/BundleSocial/Models/ApiV1ConversationsRead503Error1.cs` |
| `ApiV1ConversationsRead504Error1` | `src/BundleSocial/Models/ApiV1ConversationsRead504Error1.cs` |

### ConversationOpen

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationOpen(ConversationOpenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ConversationsOpenResponse`
- **Error**: `ApiException<ConversationOpenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1ConversationsOpen400Error1([NotNullWhen(true)] out ApiV1ConversationsOpen400Error1? value)` [400] · `TryGetApiV1ConversationsOpen401Error1([NotNullWhen(true)] out ApiV1ConversationsOpen401Error1? value)` [401] · `TryGetApiV1ConversationsOpen403Error1([NotNullWhen(true)] out ApiV1ConversationsOpen403Error1? value)` [403] · `TryGetApiV1ConversationsOpen404Error1([NotNullWhen(true)] out ApiV1ConversationsOpen404Error1? value)` [404] · `TryGetApiV1ConversationsOpen429Error1([NotNullWhen(true)] out ApiV1ConversationsOpen429Error1? value)` [429] · `TryGetApiV1ConversationsOpen500Error1([NotNullWhen(true)] out ApiV1ConversationsOpen500Error1? value)` [500] · `TryGetApiV1ConversationsOpen502Error1([NotNullWhen(true)] out ApiV1ConversationsOpen502Error1? value)` [502] · `TryGetApiV1ConversationsOpen503Error1([NotNullWhen(true)] out ApiV1ConversationsOpen503Error1? value)` [503] · `TryGetApiV1ConversationsOpen504Error1([NotNullWhen(true)] out ApiV1ConversationsOpen504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationOpenRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationOpenRequest.cs` |
| `ApiV1ConversationsOpenResponse` | `src/BundleSocial/Models/ApiV1ConversationsOpenResponse.cs` |
| `ConversationOpenError` | `src/BundleSocial/Errors/ConversationOpenError.cs` |
| `ApiV1ConversationsOpen400Error1` | `src/BundleSocial/Models/ApiV1ConversationsOpen400Error1.cs` |
| `ApiV1ConversationsOpen401Error1` | `src/BundleSocial/Models/ApiV1ConversationsOpen401Error1.cs` |
| `ApiV1ConversationsOpen403Error1` | `src/BundleSocial/Models/ApiV1ConversationsOpen403Error1.cs` |
| `ApiV1ConversationsOpen404Error1` | `src/BundleSocial/Models/ApiV1ConversationsOpen404Error1.cs` |
| `ApiV1ConversationsOpen429Error1` | `src/BundleSocial/Models/ApiV1ConversationsOpen429Error1.cs` |
| `ApiV1ConversationsOpen500Error1` | `src/BundleSocial/Models/ApiV1ConversationsOpen500Error1.cs` |
| `ApiV1ConversationsOpen502Error1` | `src/BundleSocial/Models/ApiV1ConversationsOpen502Error1.cs` |
| `ApiV1ConversationsOpen503Error1` | `src/BundleSocial/Models/ApiV1ConversationsOpen503Error1.cs` |
| `ApiV1ConversationsOpen504Error1` | `src/BundleSocial/Models/ApiV1ConversationsOpen504Error1.cs` |

### ConversationPrivateReply

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationPrivateReply(ConversationPrivateReplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1ConversationsPrivateReplyResponse`
- **Error**: `ApiException<ConversationPrivateReplyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1ConversationsPrivateReply400Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply400Error1? value)` [400] · `TryGetApiV1ConversationsPrivateReply401Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply401Error1? value)` [401] · `TryGetApiV1ConversationsPrivateReply403Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply403Error1? value)` [403] · `TryGetApiV1ConversationsPrivateReply404Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply404Error1? value)` [404] · `TryGetApiV1ConversationsPrivateReply429Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply429Error1? value)` [429] · `TryGetApiV1ConversationsPrivateReply500Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply500Error1? value)` [500] · `TryGetApiV1ConversationsPrivateReply502Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply502Error1? value)` [502] · `TryGetApiV1ConversationsPrivateReply503Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply503Error1? value)` [503] · `TryGetApiV1ConversationsPrivateReply504Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationPrivateReplyRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationPrivateReplyRequest.cs` |
| `ApiV1ConversationsPrivateReplyRequest` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReplyRequest.cs` |
| `ApiV1ConversationsPrivateReplyResponse` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReplyResponse.cs` |
| `ConversationPrivateReplyError` | `src/BundleSocial/Errors/ConversationPrivateReplyError.cs` |
| `ApiV1ConversationsPrivateReply400Error1` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReply400Error1.cs` |
| `ApiV1ConversationsPrivateReply401Error1` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReply401Error1.cs` |
| `ApiV1ConversationsPrivateReply403Error1` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReply403Error1.cs` |
| `ApiV1ConversationsPrivateReply404Error1` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReply404Error1.cs` |
| `ApiV1ConversationsPrivateReply429Error1` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReply429Error1.cs` |
| `ApiV1ConversationsPrivateReply500Error1` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReply500Error1.cs` |
| `ApiV1ConversationsPrivateReply502Error1` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReply502Error1.cs` |
| `ApiV1ConversationsPrivateReply503Error1` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReply503Error1.cs` |
| `ApiV1ConversationsPrivateReply504Error1` | `src/BundleSocial/Models/ApiV1ConversationsPrivateReply504Error1.cs` |

### ConversationReactMessage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationReactMessage(ConversationReactMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `MessageId`
- **Returns**: `ApiV1ConversationsMessagesReactionResponse`
- **Error**: `ApiException<ConversationReactMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1ConversationsMessagesReaction400Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction400Error1? value)` [400] · `TryGetApiV1ConversationsMessagesReaction401Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction401Error1? value)` [401] · `TryGetApiV1ConversationsMessagesReaction403Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction403Error1? value)` [403] · `TryGetApiV1ConversationsMessagesReaction404Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction404Error1? value)` [404] · `TryGetApiV1ConversationsMessagesReaction429Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction429Error1? value)` [429] · `TryGetApiV1ConversationsMessagesReaction500Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction500Error1? value)` [500] · `TryGetApiV1ConversationsMessagesReaction502Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction502Error1? value)` [502] · `TryGetApiV1ConversationsMessagesReaction503Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction503Error1? value)` [503] · `TryGetApiV1ConversationsMessagesReaction504Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationReactMessageRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationReactMessageRequest.cs` |
| `ApiV1ConversationsMessagesReactionRequest` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReactionRequest.cs` |
| `ApiV1ConversationsMessagesReactionResponse` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReactionResponse.cs` |
| `ConversationReactMessageError` | `src/BundleSocial/Errors/ConversationReactMessageError.cs` |
| `ApiV1ConversationsMessagesReaction400Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReaction400Error1.cs` |
| `ApiV1ConversationsMessagesReaction401Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReaction401Error1.cs` |
| `ApiV1ConversationsMessagesReaction403Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReaction403Error1.cs` |
| `ApiV1ConversationsMessagesReaction404Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReaction404Error1.cs` |
| `ApiV1ConversationsMessagesReaction429Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReaction429Error1.cs` |
| `ApiV1ConversationsMessagesReaction500Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReaction500Error1.cs` |
| `ApiV1ConversationsMessagesReaction502Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReaction502Error1.cs` |
| `ApiV1ConversationsMessagesReaction503Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReaction503Error1.cs` |
| `ApiV1ConversationsMessagesReaction504Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesReaction504Error1.cs` |

### ConversationSendMessage

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationSendMessage(ConversationSendMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ConversationsMessagesResponse1`
- **Error**: `ApiException<ConversationSendMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1ConversationsMessages400Error1([NotNullWhen(true)] out ApiV1ConversationsMessages400Error1? value)` [400] · `TryGetApiV1ConversationsMessages401Error1([NotNullWhen(true)] out ApiV1ConversationsMessages401Error1? value)` [401] · `TryGetApiV1ConversationsMessages403Error1([NotNullWhen(true)] out ApiV1ConversationsMessages403Error1? value)` [403] · `TryGetApiV1ConversationsMessages404Error1([NotNullWhen(true)] out ApiV1ConversationsMessages404Error1? value)` [404] · `TryGetApiV1ConversationsMessages429Error1([NotNullWhen(true)] out ApiV1ConversationsMessages429Error1? value)` [429] · `TryGetApiV1ConversationsMessages500Error1([NotNullWhen(true)] out ApiV1ConversationsMessages500Error1? value)` [500] · `TryGetApiV1ConversationsMessages502Error1([NotNullWhen(true)] out ApiV1ConversationsMessages502Error1? value)` [502] · `TryGetApiV1ConversationsMessages503Error1([NotNullWhen(true)] out ApiV1ConversationsMessages503Error1? value)` [503] · `TryGetApiV1ConversationsMessages504Error1([NotNullWhen(true)] out ApiV1ConversationsMessages504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationSendMessageRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationSendMessageRequest.cs` |
| `ApiV1ConversationsMessagesRequest` | `src/BundleSocial/Models/ApiV1ConversationsMessagesRequest.cs` |
| `ApiV1ConversationsMessagesResponse1` | `src/BundleSocial/Models/ApiV1ConversationsMessagesResponse1.cs` |
| `ConversationSendMessageError` | `src/BundleSocial/Errors/ConversationSendMessageError.cs` |
| `ApiV1ConversationsMessages400Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages400Error1.cs` |
| `ApiV1ConversationsMessages401Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages401Error1.cs` |
| `ApiV1ConversationsMessages403Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages403Error1.cs` |
| `ApiV1ConversationsMessages404Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages404Error1.cs` |
| `ApiV1ConversationsMessages429Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages429Error1.cs` |
| `ApiV1ConversationsMessages500Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages500Error1.cs` |
| `ApiV1ConversationsMessages502Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages502Error1.cs` |
| `ApiV1ConversationsMessages503Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages503Error1.cs` |
| `ApiV1ConversationsMessages504Error1` | `src/BundleSocial/Models/ApiV1ConversationsMessages504Error1.cs` |

### ConversationUpdate

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ConversationUpdate(ConversationUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ConversationsResponse1`
- **Error**: `ApiException<ConversationUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Conversations400Error1([NotNullWhen(true)] out ApiV1Conversations400Error1? value)` [400] · `TryGetApiV1Conversations401Error1([NotNullWhen(true)] out ApiV1Conversations401Error1? value)` [401] · `TryGetApiV1Conversations403Error1([NotNullWhen(true)] out ApiV1Conversations403Error1? value)` [403] · `TryGetApiV1Conversations404Error1([NotNullWhen(true)] out ApiV1Conversations404Error1? value)` [404] · `TryGetApiV1Conversations429Error1([NotNullWhen(true)] out ApiV1Conversations429Error1? value)` [429] · `TryGetApiV1Conversations500Error1([NotNullWhen(true)] out ApiV1Conversations500Error1? value)` [500] · `TryGetApiV1Conversations502Error1([NotNullWhen(true)] out ApiV1Conversations502Error1? value)` [502] · `TryGetApiV1Conversations503Error1([NotNullWhen(true)] out ApiV1Conversations503Error1? value)` [503] · `TryGetApiV1Conversations504Error1([NotNullWhen(true)] out ApiV1Conversations504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationUpdateRequest` | `src/BundleSocial/Requests/ConversationApi/ConversationUpdateRequest.cs` |
| `ApiV1ConversationsRequest` | `src/BundleSocial/Models/ApiV1ConversationsRequest.cs` |
| `ApiV1ConversationsResponse1` | `src/BundleSocial/Models/ApiV1ConversationsResponse1.cs` |
| `ConversationUpdateError` | `src/BundleSocial/Errors/ConversationUpdateError.cs` |
| `ApiV1Conversations400Error1` | `src/BundleSocial/Models/ApiV1Conversations400Error1.cs` |
| `ApiV1Conversations401Error1` | `src/BundleSocial/Models/ApiV1Conversations401Error1.cs` |
| `ApiV1Conversations403Error1` | `src/BundleSocial/Models/ApiV1Conversations403Error1.cs` |
| `ApiV1Conversations404Error1` | `src/BundleSocial/Models/ApiV1Conversations404Error1.cs` |
| `ApiV1Conversations429Error1` | `src/BundleSocial/Models/ApiV1Conversations429Error1.cs` |
| `ApiV1Conversations500Error1` | `src/BundleSocial/Models/ApiV1Conversations500Error1.cs` |
| `ApiV1Conversations502Error1` | `src/BundleSocial/Models/ApiV1Conversations502Error1.cs` |
| `ApiV1Conversations503Error1` | `src/BundleSocial/Models/ApiV1Conversations503Error1.cs` |
| `ApiV1Conversations504Error1` | `src/BundleSocial/Models/ApiV1Conversations504Error1.cs` |

