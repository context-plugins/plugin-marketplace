# SDK map — slack (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | slack |
| Root namespace/module | `Slack` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `aabbe86` (`aabbe869047b57f97865885aaa14c452f8eeb3f6`, tagged `aabbe86`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/slack-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using Slack;
using Slack.Servers; // ServerEnvironment lives here

var options = new SlackClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new SlackClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddSlackClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`SlackClient.cs`.

<!-- crawler:client-options -->
All `SlackClientOptions` properties (source: `SlackClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `SlackAuth` | `OAuth2AuthorizationCodeCredentials?` |
| `SlackAuthTokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` |

`RetryOptions` members (source: `Core/Configuration/RetryOptions.cs`; build a full instance — all members are `required` — or start from `RetryOptions.Default()`):

| Member | Type |
|---|---|
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

Client constructor(s):

- `SlackClient(HttpClient httpClient, SlackClientOptions options)`
<!-- /crawler:client-options -->

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `SdkException<TError>`
(`Core/Exceptions/SdkException.cs`) exposing `.Error` of type `TError`. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class with status-specific
  `TryGet…(out …)` accessors (returns `true` when that shape is present) plus the inherited
  `TryGetRawError(out RawError)` fallback. The per-operation rows name the exact `TryGet…` methods and the HTTP
  status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`Core/ErrorResponse/RawError.cs`): `StatusCode`,
  `ReadAsString()`, `ReadAsJson<T>()`, `ReadAsBytes()`.

<!-- gen:error-core -->
Core error types (`Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
|---|---|---|
| `ApiError` — abstract base of all 0 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `Core/ErrorResponse/RawError.cs` |

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions: field names, declared types, and JSON wire names live on the records pages / `unions.md` like any other model.
<!-- /gen:error-core -->

```csharp
try { var resp = await client.{ApiGroup}.{Operation}(body); }
catch (SdkException<{Operation}Error> ex)              // Case A
{
    if (ex.Error.TryGetSomeShape(out var typed))      { /* handle that status */ }
    else if (ex.Error.TryGetRawError(out var raw))    { /* other statuses */ }
}
catch (SdkException<RawError> ex)                     // Case B
{
    var status = ex.Error.StatusCode;
    var body   = ex.Error.ReadAsString();
}
```

<!-- crawler:op-stats -->
**No-throw ("`…Result`") variants: absent across this SDK** — every operation is throw-only.
Of **506 operations**, **0 are Case A (typed)** and **506 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (56 groups, 506 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `Admin` | 112 | [map/operations/Admin.md](map/operations/Admin.md) |
| `AdminApps` | 4 | [map/operations/AdminApps.md](map/operations/AdminApps.md) |
| `AdminAppsApproved` | 2 | [map/operations/AdminAppsApproved.md](map/operations/AdminAppsApproved.md) |
| `AdminAppsRequests` | 2 | [map/operations/AdminAppsRequests.md](map/operations/AdminAppsRequests.md) |
| `AdminAppsRestricted` | 2 | [map/operations/AdminAppsRestricted.md](map/operations/AdminAppsRestricted.md) |
| `AdminConversations` | 26 | [map/operations/AdminConversations.md](map/operations/AdminConversations.md) |
| `AdminConversationsEkm` | 2 | [map/operations/AdminConversationsEkm.md](map/operations/AdminConversationsEkm.md) |
| `AdminConversationsRestrictAccess` | 6 | [map/operations/AdminConversationsRestrictAccess.md](map/operations/AdminConversationsRestrictAccess.md) |
| `AdminEmoji` | 10 | [map/operations/AdminEmoji.md](map/operations/AdminEmoji.md) |
| `AdminInviteRequests` | 6 | [map/operations/AdminInviteRequests.md](map/operations/AdminInviteRequests.md) |
| `AdminInviteRequestsApproved` | 2 | [map/operations/AdminInviteRequestsApproved.md](map/operations/AdminInviteRequestsApproved.md) |
| `AdminInviteRequestsDenied` | 2 | [map/operations/AdminInviteRequestsDenied.md](map/operations/AdminInviteRequestsDenied.md) |
| `AdminTeams` | 4 | [map/operations/AdminTeams.md](map/operations/AdminTeams.md) |
| `AdminTeamsAdmins` | 2 | [map/operations/AdminTeamsAdmins.md](map/operations/AdminTeamsAdmins.md) |
| `AdminTeamsOwners` | 2 | [map/operations/AdminTeamsOwners.md](map/operations/AdminTeamsOwners.md) |
| `AdminTeamsSettings` | 12 | [map/operations/AdminTeamsSettings.md](map/operations/AdminTeamsSettings.md) |
| `AdminUsergroups` | 8 | [map/operations/AdminUsergroups.md](map/operations/AdminUsergroups.md) |
| `AdminUsers` | 16 | [map/operations/AdminUsers.md](map/operations/AdminUsers.md) |
| `AdminUsersSession` | 4 | [map/operations/AdminUsersSession.md](map/operations/AdminUsersSession.md) |
| `ApiApi` | 2 | [map/operations/ApiApi.md](map/operations/ApiApi.md) |
| `Apps` | 16 | [map/operations/Apps.md](map/operations/Apps.md) |
| `AppsEventAuthorizations` | 2 | [map/operations/AppsEventAuthorizations.md](map/operations/AppsEventAuthorizations.md) |
| `AppsPermissions` | 4 | [map/operations/AppsPermissions.md](map/operations/AppsPermissions.md) |
| `AppsPermissionsResources` | 2 | [map/operations/AppsPermissionsResources.md](map/operations/AppsPermissionsResources.md) |
| `AppsPermissionsScopes` | 2 | [map/operations/AppsPermissionsScopes.md](map/operations/AppsPermissionsScopes.md) |
| `AppsPermissionsUsers` | 4 | [map/operations/AppsPermissionsUsers.md](map/operations/AppsPermissionsUsers.md) |
| `Auth` | 4 | [map/operations/Auth.md](map/operations/Auth.md) |
| `Bots` | 2 | [map/operations/Bots.md](map/operations/Bots.md) |
| `Calls` | 12 | [map/operations/Calls.md](map/operations/Calls.md) |
| `CallsParticipants` | 4 | [map/operations/CallsParticipants.md](map/operations/CallsParticipants.md) |
| `Chat` | 20 | [map/operations/Chat.md](map/operations/Chat.md) |
| `ChatScheduledMessages` | 2 | [map/operations/ChatScheduledMessages.md](map/operations/ChatScheduledMessages.md) |
| `Conversations` | 36 | [map/operations/Conversations.md](map/operations/Conversations.md) |
| `Dialog` | 2 | [map/operations/Dialog.md](map/operations/Dialog.md) |
| `Dnd` | 10 | [map/operations/Dnd.md](map/operations/Dnd.md) |
| `Emoji` | 2 | [map/operations/Emoji.md](map/operations/Emoji.md) |
| `Files` | 26 | [map/operations/Files.md](map/operations/Files.md) |
| `FilesComments` | 2 | [map/operations/FilesComments.md](map/operations/FilesComments.md) |
| `FilesRemote` | 12 | [map/operations/FilesRemote.md](map/operations/FilesRemote.md) |
| `Migration` | 2 | [map/operations/Migration.md](map/operations/Migration.md) |
| `Oauth` | 6 | [map/operations/Oauth.md](map/operations/Oauth.md) |
| `OauthV2` | 2 | [map/operations/OauthV2.md](map/operations/OauthV2.md) |
| `Pins` | 6 | [map/operations/Pins.md](map/operations/Pins.md) |
| `Reactions` | 8 | [map/operations/Reactions.md](map/operations/Reactions.md) |
| `Reminders` | 10 | [map/operations/Reminders.md](map/operations/Reminders.md) |
| `Rtm` | 2 | [map/operations/Rtm.md](map/operations/Rtm.md) |
| `Search` | 2 | [map/operations/Search.md](map/operations/Search.md) |
| `Stars` | 6 | [map/operations/Stars.md](map/operations/Stars.md) |
| `TeamApi` | 10 | [map/operations/TeamApi.md](map/operations/TeamApi.md) |
| `TeamProfile` | 2 | [map/operations/TeamProfile.md](map/operations/TeamProfile.md) |
| `Usergroups` | 14 | [map/operations/Usergroups.md](map/operations/Usergroups.md) |
| `UsergroupsUsers` | 4 | [map/operations/UsergroupsUsers.md](map/operations/UsergroupsUsers.md) |
| `Users` | 24 | [map/operations/Users.md](map/operations/Users.md) |
| `UsersProfile` | 4 | [map/operations/UsersProfile.md](map/operations/UsersProfile.md) |
| `Views` | 8 | [map/operations/Views.md](map/operations/Views.md) |
| `Workflows` | 6 | [map/operations/Workflows.md](map/operations/Workflows.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 660 | [`AdminConversationsArchiveerrorschema1` … `ConversationsCloseerrorschema1`](map/models/records-1-Ad-Co.md) · [`ConversationsCloseerrorschema11` … `FilesSharedPublicUrlerrorschema1Error1`](map/models/records-2-Co-Fi.md) · [`FilesSharedPublicUrlschema` … `UsergroupsUsersUpdateschema1`](map/models/records-3-Fi-Us.md) · [`Userprofileobject` … `WhoCanPost`](map/models/records-4-Us-Wh.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 0 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 91 | [map/models/enums.md](map/models/enums.md) |
<!-- /gen:models-table -->

Model conventions: records are immutable with `init`-only setters; `required` properties must be set in the
object initializer; nullable (`T?`) properties are optional. Each record field is listed as
`CSharpName (wire_name): Type` — the parenthesized name is the JSON wire name (`[JsonPropertyName]`).
Unions wrap `Optional<T>` variants — construct via a static factory or implicit
conversion, read back via `TryGet…(out …)`. Enums are **not** C# enums — build with `Type.FromValue("wire")`
or the static members (enums.md lists the literal member names: `SomeEnum.SomeMember`, not
`SomeEnum.some_member`).

<!-- gen:namespaces -->
Namespaces by content type (add `using` accordingly):

| Contents | Namespace(s) |
|---|---|
| Client & options (root) | `Slack` |
| Operation controllers (`Api/`) | `Slack.Api` |
| Records (`Models/`) | `Slack.Models` |
| Enums (`Models/Enums/`) | `Slack.Models.Enums` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `SlackClientOptions` (source: `SlackClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `SlackAuth` | `OAuth2AuthorizationCodeCredentials?` | — |
| `SlackAuthTokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Environment2`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
