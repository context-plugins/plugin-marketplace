# SDK map — Vimeo (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | Vimeo |
| Root namespace/module | `VimeoApi` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `c25275f` (`c25275fd265d7f5987ad22d614e778dc047af940`, tagged `c25275f`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/vimeo-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using VimeoApi;
using VimeoApi.Servers; // ServerEnvironment lives here

var options = new VimeoApiClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new VimeoApiClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddVimeoApiClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`VimeoApiClient.cs`.

<!-- crawler:client-options -->
All `VimeoApiClientOptions` properties (source: `VimeoApiClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `Bearer` | `string?` |
| `Oauth2AuthorizationCode` | `OAuth2AuthorizationCodeCredentials?` |
| `Oauth2AuthorizationCodeTokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` |
| `Oauth2ClientCredentials` | `OAuth2ClientCredentials?` |
| `Oauth2ClientCredentialsTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` |

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

- `VimeoApiClient(HttpClient httpClient, VimeoApiClientOptions options)`
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
| `ApiError` — abstract base of all 411 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **520 operations**, **411 are Case A (typed)** and **109 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (100 groups, 520 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `ApiAppsWebhooks` | 5 | [map/operations/ApiAppsWebhooks.md](map/operations/ApiAppsWebhooks.md) |
| `ApiInformationEssentials` | 1 | [map/operations/ApiInformationEssentials.md](map/operations/ApiInformationEssentials.md) |
| `AuthenticationExtrasAuthenticate` | 1 | [map/operations/AuthenticationExtrasAuthenticate.md](map/operations/AuthenticationExtrasAuthenticate.md) |
| `AuthenticationExtrasConvert` | 1 | [map/operations/AuthenticationExtrasConvert.md](map/operations/AuthenticationExtrasConvert.md) |
| `AuthenticationExtrasEssentials` | 2 | [map/operations/AuthenticationExtrasEssentials.md](map/operations/AuthenticationExtrasEssentials.md) |
| `AuthenticationExtrasExchange` | 1 | [map/operations/AuthenticationExtrasExchange.md](map/operations/AuthenticationExtrasExchange.md) |
| `CategoriesChannels` | 1 | [map/operations/CategoriesChannels.md](map/operations/CategoriesChannels.md) |
| `CategoriesEssentials` | 2 | [map/operations/CategoriesEssentials.md](map/operations/CategoriesEssentials.md) |
| `CategoriesGroups` | 1 | [map/operations/CategoriesGroups.md](map/operations/CategoriesGroups.md) |
| `CategoriesUsers` | 8 | [map/operations/CategoriesUsers.md](map/operations/CategoriesUsers.md) |
| `CategoriesVideos` | 4 | [map/operations/CategoriesVideos.md](map/operations/CategoriesVideos.md) |
| `ChannelsCategories` | 4 | [map/operations/ChannelsCategories.md](map/operations/ChannelsCategories.md) |
| `ChannelsEssentials` | 7 | [map/operations/ChannelsEssentials.md](map/operations/ChannelsEssentials.md) |
| `ChannelsModerators` | 7 | [map/operations/ChannelsModerators.md](map/operations/ChannelsModerators.md) |
| `ChannelsPrivateChannelMembers` | 4 | [map/operations/ChannelsPrivateChannelMembers.md](map/operations/ChannelsPrivateChannelMembers.md) |
| `ChannelsSubscriptionsAndSubscribers` | 7 | [map/operations/ChannelsSubscriptionsAndSubscribers.md](map/operations/ChannelsSubscriptionsAndSubscribers.md) |
| `ChannelsTags` | 5 | [map/operations/ChannelsTags.md](map/operations/ChannelsTags.md) |
| `ChannelsVideos` | 7 | [map/operations/ChannelsVideos.md](map/operations/ChannelsVideos.md) |
| `EmbedPresetsCustomLogos` | 8 | [map/operations/EmbedPresetsCustomLogos.md](map/operations/EmbedPresetsCustomLogos.md) |
| `EmbedPresetsEssentials` | 10 | [map/operations/EmbedPresetsEssentials.md](map/operations/EmbedPresetsEssentials.md) |
| `EmbedPresetsFolders` | 1 | [map/operations/EmbedPresetsFolders.md](map/operations/EmbedPresetsFolders.md) |
| `EmbedPresetsTimelineEvents` | 2 | [map/operations/EmbedPresetsTimelineEvents.md](map/operations/EmbedPresetsTimelineEvents.md) |
| `EmbedPresetsVideos` | 5 | [map/operations/EmbedPresetsVideos.md](map/operations/EmbedPresetsVideos.md) |
| `FoldersEssentials` | 11 | [map/operations/FoldersEssentials.md](map/operations/FoldersEssentials.md) |
| `FoldersItems` | 3 | [map/operations/FoldersItems.md](map/operations/FoldersItems.md) |
| `FoldersVideos` | 10 | [map/operations/FoldersVideos.md](map/operations/FoldersVideos.md) |
| `GroupsEssentials` | 4 | [map/operations/GroupsEssentials.md](map/operations/GroupsEssentials.md) |
| `GroupsSubscriptions` | 4 | [map/operations/GroupsSubscriptions.md](map/operations/GroupsSubscriptions.md) |
| `GroupsUsers` | 5 | [map/operations/GroupsUsers.md](map/operations/GroupsUsers.md) |
| `GroupsVideos` | 5 | [map/operations/GroupsVideos.md](map/operations/GroupsVideos.md) |
| `LikesEssentials` | 11 | [map/operations/LikesEssentials.md](map/operations/LikesEssentials.md) |
| `LiveAnalytics` | 1 | [map/operations/LiveAnalytics.md](map/operations/LiveAnalytics.md) |
| `LiveAudioTracks` | 2 | [map/operations/LiveAudioTracks.md](map/operations/LiveAudioTracks.md) |
| `LiveEmbedPrivacy` | 6 | [map/operations/LiveEmbedPrivacy.md](map/operations/LiveEmbedPrivacy.md) |
| `LiveEssentials` | 19 | [map/operations/LiveEssentials.md](map/operations/LiveEssentials.md) |
| `LiveEventActivation` | 3 | [map/operations/LiveEventActivation.md](map/operations/LiveEventActivation.md) |
| `LiveEventAutomatedClosedCaptions` | 3 | [map/operations/LiveEventAutomatedClosedCaptions.md](map/operations/LiveEventAutomatedClosedCaptions.md) |
| `LiveEventDestinations` | 12 | [map/operations/LiveEventDestinations.md](map/operations/LiveEventDestinations.md) |
| `LiveEventEnd` | 3 | [map/operations/LiveEventEnd.md](map/operations/LiveEventEnd.md) |
| `LiveEventLowLatency` | 3 | [map/operations/LiveEventLowLatency.md](map/operations/LiveEventLowLatency.md) |
| `LiveEventM3U8Playback` | 2 | [map/operations/LiveEventM3U8Playback.md](map/operations/LiveEventM3U8Playback.md) |
| `LiveEventSessions` | 2 | [map/operations/LiveEventSessions.md](map/operations/LiveEventSessions.md) |
| `LiveEventThumbnails` | 15 | [map/operations/LiveEventThumbnails.md](map/operations/LiveEventThumbnails.md) |
| `LiveEventVideos` | 12 | [map/operations/LiveEventVideos.md](map/operations/LiveEventVideos.md) |
| `LiveGraphics` | 3 | [map/operations/LiveGraphics.md](map/operations/LiveGraphics.md) |
| `LiveScenes` | 5 | [map/operations/LiveScenes.md](map/operations/LiveScenes.md) |
| `OnDemandBackgrounds` | 5 | [map/operations/OnDemandBackgrounds.md](map/operations/OnDemandBackgrounds.md) |
| `OnDemandEssentials` | 7 | [map/operations/OnDemandEssentials.md](map/operations/OnDemandEssentials.md) |
| `OnDemandGenres` | 8 | [map/operations/OnDemandGenres.md](map/operations/OnDemandGenres.md) |
| `OnDemandPosters` | 4 | [map/operations/OnDemandPosters.md](map/operations/OnDemandPosters.md) |
| `OnDemandPromotions` | 5 | [map/operations/OnDemandPromotions.md](map/operations/OnDemandPromotions.md) |
| `OnDemandPurchasesAndRentals` | 3 | [map/operations/OnDemandPurchasesAndRentals.md](map/operations/OnDemandPurchasesAndRentals.md) |
| `OnDemandRegions` | 8 | [map/operations/OnDemandRegions.md](map/operations/OnDemandRegions.md) |
| `OnDemandSeasons` | 3 | [map/operations/OnDemandSeasons.md](map/operations/OnDemandSeasons.md) |
| `OnDemandVideos` | 4 | [map/operations/OnDemandVideos.md](map/operations/OnDemandVideos.md) |
| `PaymentsEssentials` | 4 | [map/operations/PaymentsEssentials.md](map/operations/PaymentsEssentials.md) |
| `PortfoliosEssentials` | 4 | [map/operations/PortfoliosEssentials.md](map/operations/PortfoliosEssentials.md) |
| `PortfoliosVideos` | 8 | [map/operations/PortfoliosVideos.md](map/operations/PortfoliosVideos.md) |
| `SearchFederated` | 2 | [map/operations/SearchFederated.md](map/operations/SearchFederated.md) |
| `ShowcasesCustomShowcaseLogos` | 5 | [map/operations/ShowcasesCustomShowcaseLogos.md](map/operations/ShowcasesCustomShowcaseLogos.md) |
| `ShowcasesCustomShowcaseThumbnails` | 5 | [map/operations/ShowcasesCustomShowcaseThumbnails.md](map/operations/ShowcasesCustomShowcaseThumbnails.md) |
| `ShowcasesEssentials` | 14 | [map/operations/ShowcasesEssentials.md](map/operations/ShowcasesEssentials.md) |
| `ShowcasesShowcaseVideos` | 16 | [map/operations/ShowcasesShowcaseVideos.md](map/operations/ShowcasesShowcaseVideos.md) |
| `SubscriptionPlansEssentials` | 1 | [map/operations/SubscriptionPlansEssentials.md](map/operations/SubscriptionPlansEssentials.md) |
| `TagsEssentials` | 1 | [map/operations/TagsEssentials.md](map/operations/TagsEssentials.md) |
| `TeamsEssentials` | 5 | [map/operations/TeamsEssentials.md](map/operations/TeamsEssentials.md) |
| `TeamsMembers` | 3 | [map/operations/TeamsMembers.md](map/operations/TeamsMembers.md) |
| `TutorialEssentials` | 1 | [map/operations/TutorialEssentials.md](map/operations/TutorialEssentials.md) |
| `UsersAnalytics` | 2 | [map/operations/UsersAnalytics.md](map/operations/UsersAnalytics.md) |
| `UsersEssentials` | 4 | [map/operations/UsersEssentials.md](map/operations/UsersEssentials.md) |
| `UsersFeeds` | 2 | [map/operations/UsersFeeds.md](map/operations/UsersFeeds.md) |
| `UsersFollowers` | 12 | [map/operations/UsersFollowers.md](map/operations/UsersFollowers.md) |
| `UsersLms` | 1 | [map/operations/UsersLms.md](map/operations/UsersLms.md) |
| `UsersPictures` | 10 | [map/operations/UsersPictures.md](map/operations/UsersPictures.md) |
| `UsersSearch` | 1 | [map/operations/UsersSearch.md](map/operations/UsersSearch.md) |
| `UsersWatchHistory` | 3 | [map/operations/UsersWatchHistory.md](map/operations/UsersWatchHistory.md) |
| `VideosAi` | 11 | [map/operations/VideosAi.md](map/operations/VideosAi.md) |
| `VideosAnimatedThumbnails` | 5 | [map/operations/VideosAnimatedThumbnails.md](map/operations/VideosAnimatedThumbnails.md) |
| `VideosChapters` | 12 | [map/operations/VideosChapters.md](map/operations/VideosChapters.md) |
| `VideosContentRatings` | 1 | [map/operations/VideosContentRatings.md](map/operations/VideosContentRatings.md) |
| `VideosCreativeCommons` | 1 | [map/operations/VideosCreativeCommons.md](map/operations/VideosCreativeCommons.md) |
| `VideosCredits` | 8 | [map/operations/VideosCredits.md](map/operations/VideosCredits.md) |
| `VideosEmbedPrivacy` | 3 | [map/operations/VideosEmbedPrivacy.md](map/operations/VideosEmbedPrivacy.md) |
| `VideosEssentials` | 15 | [map/operations/VideosEssentials.md](map/operations/VideosEssentials.md) |
| `VideosFragments` | 3 | [map/operations/VideosFragments.md](map/operations/VideosFragments.md) |
| `VideosLanguages` | 1 | [map/operations/VideosLanguages.md](map/operations/VideosLanguages.md) |
| `VideosLiveM3U8Playback` | 2 | [map/operations/VideosLiveM3U8Playback.md](map/operations/VideosLiveM3U8Playback.md) |
| `VideosModeration` | 1 | [map/operations/VideosModeration.md](map/operations/VideosModeration.md) |
| `VideosNondestructiveTrimming` | 1 | [map/operations/VideosNondestructiveTrimming.md](map/operations/VideosNondestructiveTrimming.md) |
| `VideosRecommendations` | 1 | [map/operations/VideosRecommendations.md](map/operations/VideosRecommendations.md) |
| `VideosShowcases` | 2 | [map/operations/VideosShowcases.md](map/operations/VideosShowcases.md) |
| `VideosTags` | 6 | [map/operations/VideosTags.md](map/operations/VideosTags.md) |
| `VideosTextTracks` | 9 | [map/operations/VideosTextTracks.md](map/operations/VideosTextTracks.md) |
| `VideosThumbnails` | 7 | [map/operations/VideosThumbnails.md](map/operations/VideosThumbnails.md) |
| `VideosTranscripts` | 2 | [map/operations/VideosTranscripts.md](map/operations/VideosTranscripts.md) |
| `VideosUnlistedVideos` | 6 | [map/operations/VideosUnlistedVideos.md](map/operations/VideosUnlistedVideos.md) |
| `VideosUploads` | 4 | [map/operations/VideosUploads.md](map/operations/VideosUploads.md) |
| `VideosVersions` | 13 | [map/operations/VideosVersions.md](map/operations/VideosVersions.md) |
| `VideosVideoComments` | 9 | [map/operations/VideosVideoComments.md](map/operations/VideosVideoComments.md) |
| `WatchLaterQueueEssentials` | 8 | [map/operations/WatchLaterQueueEssentials.md](map/operations/WatchLaterQueueEssentials.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 784 | [`AccountDictionaryQuota` … `Edit1`](map/models/records-1-Ac-Ed.md) · [`Edit2` … `Membership`](map/models/records-2-Ed-Me.md) · [`MeOndemandPagesRequest` … `SentimentWidget`](map/models/records-3-Me-Se.md) · [`SentimentWidget1` … `VideosAiTranscribeRequest`](map/models/records-4-Se-Vi.md) · [`VideosAiTranslateDubbingRequest` … `Website`](map/models/records-5-Vi-We.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 1 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 281 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `VimeoApi` |
| Operation controllers (`Api/`) | `VimeoApi.Api` |
| Records (`Models/`) | `VimeoApi.Models` |
| Enums (`Models/Enums/`) | `VimeoApi.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `VimeoApi.Models.AnyOf` |
| Error classes (`Errors/`) | `VimeoApi.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `VimeoApiClientOptions` (source: `VimeoApiClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `Bearer` | `string?` | — |
| `Oauth2AuthorizationCode` | `OAuth2AuthorizationCodeCredentials?` | — |
| `Oauth2AuthorizationCodeTokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` | — |
| `Oauth2ClientCredentials` | `OAuth2ClientCredentials?` | — |
| `Oauth2ClientCredentialsTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
