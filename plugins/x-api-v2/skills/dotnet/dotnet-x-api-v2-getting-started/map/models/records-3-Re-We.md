# Records (`ResourceNotFoundProblem` … `WebhookConfig`)

**Exact coverage: `ResourceNotFoundProblem` through `WebhookConfig`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `XApiV2.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `ResourceNotFoundProblem` | — | `Detail (detail): string !req`, `Parameter (parameter): string?`, `ResourceId (resource_id): string?`, `ResourceType (resource_type): string !req`, `Status (status): int?`, `Title (title): string !req`, `Type (type): string`, `Value (value): string?` | `Models/ResourceNotFoundProblem.cs` |
| `ResourceUnavailableProblem` | — | `Detail (detail): string !req`, `ResourceId (resource_id): string?`, `ResourceType (resource_type): string !req`, `Status (status): int?`, `Title (title): string !req`, `Type (type): string` | `Models/ResourceUnavailableProblem.cs` |
| `RulesCount` | — | `AllProjectClientApps (all_project_client_apps): IReadOnlyList<RulesCountClientAppRulesCount>?`, `CapPerClientApp (cap_per_client_app): string?`, `CapPerProject (cap_per_project): string?`, `ClientAppRulesCount (client_app_rules_count): RulesCountClientAppRulesCount?`, `ProjectRulesCount (project_rules_count): string?` | `Models/RulesCount.cs` |
| `RulesCountClientAppRulesCount` | A count of filtered-stream rules for a single client application. | `ClientAppId (client_app_id): string?`, `RuleCount (rule_count): long !req` | `Models/RulesCountClientAppRulesCount.cs` |
| `SearchCommunitiesResponse` | — | `Data (data): IReadOnlyList<Community>?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Meta (meta): Meta38?` | `Models/SearchCommunitiesResponse.cs` |
| `SearchCommunityNotesWrittenResponse` | — | `Data (data): IReadOnlyList<Note>?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Meta (meta): Meta4?` | `Models/SearchCommunityNotesWrittenResponse.cs` |
| `SearchEligiblePostsResponse` | — | `Data (data): IReadOnlyList<Post>?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?`, `Meta (meta): Meta4?` | `Models/SearchEligiblePostsResponse.cs` |
| `SearchNewsResponse` | — | `Data (data): IReadOnlyList<News>?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Meta (meta): Meta3?` | `Models/SearchNewsResponse.cs` |
| `SearchPostsAllResponse` | — | `Data (data): IReadOnlyList<Post>?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?`, `Meta (meta): Meta30?` | `Models/SearchPostsAllResponse.cs` |
| `SearchPostsRecentResponse` | — | `Data (data): IReadOnlyList<Post>?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?`, `Meta (meta): Meta30?` | `Models/SearchPostsRecentResponse.cs` |
| `SearchSpacesResponse` | — | `Data (data): IReadOnlyList<Space>?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?`, `Meta (meta): Meta3?` | `Models/SearchSpacesResponse.cs` |
| `SearchUsersResponse` | — | `Data (data): IReadOnlyList<User>?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?`, `Meta (meta): Meta45?` | `Models/SearchUsersResponse.cs` |
| `SendBroadcastChatRequest` | — | `ReplyTo (reply_to): string?`, `Text (text): string !req` | `Models/SendBroadcastChatRequest.cs` |
| `SendBroadcastChatResponse` | — | `Data (data): SendBroadcastChatResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/SendBroadcastChatResponse.cs` |
| `SendBroadcastChatResponseData` | — | `Success (success): bool !req`, `Timestamp (timestamp): string !req` | `Models/SendBroadcastChatResponseData.cs` |
| `SendChatMessageRequest` | — | `ConversationToken (conversation_token): string?`, `EncodedMessageCreateEvent (encoded_message_create_event): string !req`, `EncodedMessageEventSignature (encoded_message_event_signature): string?`, `MessageId (message_id): string !req` | `Models/SendChatMessageRequest.cs` |
| `SendChatMessageResponse` | — | `Data (data): SendChatMessageResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/SendChatMessageResponse.cs` |
| `SendChatMessageResponseData` | — | `EncodedMessageEvent (encoded_message_event): string !req` | `Models/SendChatMessageResponseData.cs` |
| `SendChatTypingIndicatorResponse` | — | `Data (data): SendChatTypingIndicatorResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/SendChatTypingIndicatorResponse.cs` |
| `SendChatTypingIndicatorResponseData` | — | `Success (success): bool !req` | `Models/SendChatTypingIndicatorResponseData.cs` |
| `Space` | — | `CreatedAt (created_at): DateTimeOffset?`, `CreatorId (creator_id): string?`, `EndedAt (ended_at): DateTimeOffset?`, `HostIds (host_ids): IReadOnlyList<string>?`, `Id (id): string?`, `InvitedUserIds (invited_user_ids): IReadOnlyList<string>?`, `IsTicketed (is_ticketed): bool?`, `Lang (lang): string?`, `ParticipantCount (participant_count): int?`, `ScheduledStart (scheduled_start): DateTimeOffset?`, `SpeakerIds (speaker_ids): IReadOnlyList<string>?`, `StartedAt (started_at): DateTimeOffset?`, `State (state): string?`, `SubscriberCount (subscriber_count): int?`, `Title (title): string?`, `TopicIds (topic_ids): IReadOnlyList<string>?`, `UpdatedAt (updated_at): DateTimeOffset?` | `Models/Space.cs` |
| `StreamLabelsComplianceResponse` | Tweet Label event. | `Data (data): PostLabelData !req` (union) | `Models/StreamLabelsComplianceResponse.cs` |
| `StreamLabelsComplianceResponse1` | — | `Errors (errors): IReadOnlyList<Problem> !req` (union) | `Models/StreamLabelsComplianceResponse1.cs` |
| `StreamLikesComplianceResponse` | Compliance event. | `Data (data): LikeComplianceSchema !req` | `Models/StreamLikesComplianceResponse.cs` |
| `StreamLikesComplianceResponse1` | — | `Errors (errors): IReadOnlyList<Problem> !req` (union) | `Models/StreamLikesComplianceResponse1.cs` |
| `StreamLikesFirehoseResponse` | — | `Data (data): LikeWithPostAuthor?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?` | `Models/StreamLikesFirehoseResponse.cs` |
| `StreamLikesSample10Response` | — | `Data (data): LikeWithPostAuthor?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?` | `Models/StreamLikesSample10Response.cs` |
| `StreamPostsComplianceResponse` | Compliance event. | `Data (data): PostComplianceData !req` (union) | `Models/StreamPostsComplianceResponse.cs` |
| `StreamPostsComplianceResponse1` | — | `Errors (errors): IReadOnlyList<Problem> !req` (union) | `Models/StreamPostsComplianceResponse1.cs` |
| `StreamPostsFirehoseEnResponse` | — | `Data (data): Post?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?` | `Models/StreamPostsFirehoseEnResponse.cs` |
| `StreamPostsFirehoseJaResponse` | — | `Data (data): Post?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?` | `Models/StreamPostsFirehoseJaResponse.cs` |
| `StreamPostsFirehoseKoResponse` | — | `Data (data): Post?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?` | `Models/StreamPostsFirehoseKoResponse.cs` |
| `StreamPostsFirehosePtResponse` | — | `Data (data): Post?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?` | `Models/StreamPostsFirehosePtResponse.cs` |
| `StreamPostsFirehoseResponse` | — | `Data (data): Post?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?` | `Models/StreamPostsFirehoseResponse.cs` |
| `StreamPostsResponse` | A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched. | `Data (data): Post?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?`, `MatchingRules (matching_rules): IReadOnlyList<MatchingRule>?` | `Models/StreamPostsResponse.cs` |
| `StreamPostsSample10Response` | — | `Data (data): Post?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?` | `Models/StreamPostsSample10Response.cs` |
| `StreamPostsSampleResponse` | — | `Data (data): Post?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Includes (includes): Expansions?` | `Models/StreamPostsSampleResponse.cs` |
| `StreamUsersComplianceResponse` | User compliance event. | `Data (data): UserComplianceData !req` (union) | `Models/StreamUsersComplianceResponse.cs` |
| `StreamUsersComplianceResponse1` | — | `Errors (errors): IReadOnlyList<Problem> !req` (union) | `Models/StreamUsersComplianceResponse1.cs` |
| `Topic` | — | `Description (description): string?`, `Id (id): string?`, `Name (name): string?` | `Models/Topic.cs` |
| `Trend` | — | `TrendName (trend_name): string?`, `TweetCount (tweet_count): int?` | `Models/Trend.cs` |
| `Tweet` | — | `AuthorId (author_id): string !req`, `Id (id): string !req` | `Models/Tweet.cs` |
| `Tweet2` | — | `Id (id): string !req` | `Models/Tweet2.cs` |
| `UnblockUsersDmsResponse` | — | `Data (data): UnblockUsersDmsResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UnblockUsersDmsResponse.cs` |
| `UnblockUsersDmsResponseData` | — | `Blocked (blocked): bool !req` | `Models/UnblockUsersDmsResponseData.cs` |
| `UnfollowListResponse` | — | `Data (data): UnfollowListResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UnfollowListResponse.cs` |
| `UnfollowListResponseData` | — | `Following (following): bool !req` | `Models/UnfollowListResponseData.cs` |
| `UnfollowUserResponse` | — | `Data (data): UnfollowUserResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UnfollowUserResponse.cs` |
| `UnfollowUserResponseData` | — | `Following (following): bool !req` | `Models/UnfollowUserResponseData.cs` |
| `UnlikeComplianceSchema` | — | `EventAt (event_at): DateTimeOffset !req`, `Favorite (favorite): Favorite !req` | `Models/UnlikeComplianceSchema.cs` |
| `UnlikePostResponse` | — | `Data (data): UnlikePostResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UnlikePostResponse.cs` |
| `UnlikePostResponseData` | — | `Liked (liked): bool !req` | `Models/UnlikePostResponseData.cs` |
| `UnmuteUserResponse` | — | `Data (data): UnmuteUserResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UnmuteUserResponse.cs` |
| `UnmuteUserResponseData` | — | `Muting (muting): bool !req` | `Models/UnmuteUserResponseData.cs` |
| `UnpinListResponse` | — | `Data (data): UnpinListResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UnpinListResponse.cs` |
| `UnpinListResponseData` | — | `Pinned (pinned): bool !req` | `Models/UnpinListResponseData.cs` |
| `UnrepostPostResponse` | — | `Data (data): UnrepostPostResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UnrepostPostResponse.cs` |
| `UnrepostPostResponseData` | — | `Retweeted (retweeted): bool !req` | `Models/UnrepostPostResponseData.cs` |
| `UpdateActivitySubscriptionRequest` | — | `Tag (tag): string?`, `WebhookId (webhook_id): string?` | `Models/UpdateActivitySubscriptionRequest.cs` |
| `UpdateActivitySubscriptionResponse` | — | `Data (data): UpdateActivitySubscriptionResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UpdateActivitySubscriptionResponse.cs` |
| `UpdateActivitySubscriptionResponseData` | — | `Subscription (subscription): UpdateActivitySubscriptionResponseDataSubscription?`, `TotalSubscriptions (total_subscriptions): int?` | `Models/UpdateActivitySubscriptionResponseData.cs` |
| `UpdateActivitySubscriptionResponseDataSubscription` | — | `CreatedAt (created_at): string?`, `EventType (event_type): string?`, `Filter (filter): UpdateActivitySubscriptionResponseDataSubscriptionFilter?`, `SubscriptionId (subscription_id): string?`, `Tag (tag): string?`, `UpdatedAt (updated_at): string?`, `WebhookId (webhook_id): string?` | `Models/UpdateActivitySubscriptionResponseDataSubscription.cs` |
| `UpdateActivitySubscriptionResponseDataSubscriptionFilter` | — | `Direction (direction): string?`, `Keyword (keyword): string?`, `UserId (user_id): string?` | `Models/UpdateActivitySubscriptionResponseDataSubscriptionFilter.cs` |
| `UpdateListsRequest` | — | `Description (description): string?`, `Name (name): string?`, `Private (private): bool?` | `Models/UpdateListsRequest.cs` |
| `UpdateListsResponse` | — | `Data (data): UpdateListsResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UpdateListsResponse.cs` |
| `UpdateListsResponseData` | — | `Updated (updated): bool !req` | `Models/UpdateListsResponseData.cs` |
| `UpdateRulesAdd` | — | `Tag (tag): string?`, `Value (value): string !req` | `Models/UpdateRulesAdd.cs` |
| `UpdateRulesDelete` | — | `Ids (ids): IReadOnlyList<string>?`, `Values (values): IReadOnlyList<string>?` | `Models/UpdateRulesDelete.cs` |
| `UpdateRulesRequest` | — | `Add (add): IReadOnlyList<UpdateRulesAdd>?`, `Delete (delete): UpdateRulesDelete?` | `Models/UpdateRulesRequest.cs` |
| `UpdateRulesResponse` | — | `Data (data): IReadOnlyList<UpdateRulesResponseData>?`, `Errors (errors): IReadOnlyList<Problem>?` (union), `Meta (meta): Meta46?` | `Models/UpdateRulesResponse.cs` |
| `UpdateRulesResponseData` | — | `Id (id): string?`, `Tag (tag): string?`, `Value (value): string?` | `Models/UpdateRulesResponseData.cs` |
| `UpdateScheduledBroadcastRequest` | — | `AvailableForReplay (available_for_replay): bool?`, `ChatOption (chat_option): string?`, `Description (description): string?`, `IsLocked (is_locked): bool?`, `Locale (locale): string?`, `ManualPublish (manual_publish): bool?`, `RollForward (roll_forward): bool?`, `ScheduledBroadcastId (scheduled_broadcast_id): string !req`, `ScheduledEndMs (scheduled_end_ms): string !req`, `ScheduledStartMs (scheduled_start_ms): string !req`, `SourceId (source_id): string?`, `ThumbnailMediaId (thumbnail_media_id): string?`, `Title (title): string?` | `Models/UpdateScheduledBroadcastRequest.cs` |
| `UpdateScheduledBroadcastResponse` | — | `Data (data): UpdateScheduledBroadcastResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/UpdateScheduledBroadcastResponse.cs` |
| `UpdateScheduledBroadcastResponseData` | — | `AvailableForReplay (available_for_replay): bool?`, `BroadcastId (broadcast_id): string?`, `ChatOption (chat_option): string?`, `Description (description): string?`, `Locale (locale): string?`, `ManualPublish (manual_publish): bool?`, `RecurringScheduleId (recurring_schedule_id): string?`, `ScheduledBroadcastId (scheduled_broadcast_id): string?`, `ScheduledEndMs (scheduled_end_ms): string?`, `ScheduledStartMs (scheduled_start_ms): string?`, `SourceId (source_id): string?`, `State (state): string?`, `TelecastId (telecast_id): string?`, `ThumbnailMediaId (thumbnail_media_id): string?`, `Title (title): string?` | `Models/UpdateScheduledBroadcastResponseData.cs` |
| `Url` | A URL entity found in the Post text, enriched with link metadata. | `Description (description): string?`, `DisplayUrl (display_url): string?`, `End (end): long !req`, `ExpandedUrl (expanded_url): string?`, `Images (images): IReadOnlyList<Image?>?`, `MediaKey (media_key): string?`, `Start (start): long !req`, `Status (status): long?`, `Title (title): string?`, `UnwoundUrl (unwound_url): string?`, `UrlValue (url): string?` | `Models/Url.cs` |
| `Url1` | A URL entity found in note Post text. | `DisplayUrl (display_url): string?`, `End (end): long !req`, `ExpandedUrl (expanded_url): string?`, `Start (start): long !req`, `Url (url): string?` | `Models/Url1.cs` |
| `Url2` | A URL entity found in profile text. | `Description (description): string?`, `DisplayUrl (display_url): string?`, `End (end): long !req`, `ExpandedUrl (expanded_url): string?`, `Images (images): IReadOnlyList<Image?>?`, `MediaKey (media_key): string?`, `Start (start): long !req`, `Status (status): long?`, `Title (title): string?`, `UnwoundUrl (unwound_url): string?`, `Url (url): string !req` | `Models/Url2.cs` |
| `Url3` | Entities for the User's profile website URL. | `Urls (urls): IReadOnlyList<Url2?>?` | `Models/Url3.cs` |
| `Url5` | A URL entity. | `DisplayUrl (display_url): string?`, `End (end): long !req`, `ExpandedUrl (expanded_url): string?`, `Start (start): long !req`, `Url (url): string !req` | `Models/Url5.cs` |
| `Usage` | — | `CapResetDay (cap_reset_day): int?`, `DailyClientAppUsage (daily_client_app_usage): IReadOnlyList<UsageDailyClientAppUsage>?`, `DailyProjectUsage (daily_project_usage): UsageDailyProjectUsage?`, `ProjectCap (project_cap): string?`, `ProjectId (project_id): string?`, `ProjectUsage (project_usage): string?` | `Models/Usage.cs` |
| `Usage1` | A single day's usage entry. | `Date (date): string !req`, `Usage (usage): string?` | `Models/Usage1.cs` |
| `UsageDailyClientAppUsage` | Per-client-app daily Post usage entry. | `ClientAppId (client_app_id): string?`, `Usage (usage): IReadOnlyList<Usage1>?`, `UsageResultCount (usage_result_count): long !req` | `Models/UsageDailyClientAppUsage.cs` |
| `UsageDailyProjectUsage` | Project-level daily Post usage for the caller's project. | `ProjectId (project_id): string?`, `Usage (usage): IReadOnlyList<Usage1?>?` | `Models/UsageDailyProjectUsage.cs` |
| `User` | — | `Affiliation (affiliation): UserAffiliation?`, `ConfirmedEmail (confirmed_email): string?`, `ConnectionStatus (connection_status): IReadOnlyList<UserConnectionStatus>?`, `CreatedAt (created_at): DateTimeOffset?`, `Description (description): string?`, `Entities (entities): UserEntities?`, `Id (id): string?`, `IsIdentityVerified (is_identity_verified): bool?`, `Location (location): string?`, `MostRecentPostId (most_recent_post_id): string?`, `Name (name): string?`, `Parody (parody): bool?`, `PinnedPostId (pinned_post_id): string?`, `ProfileBannerUrl (profile_banner_url): string?`, `ProfileImageUrl (profile_image_url): string?`, `Protected (protected): bool?`, `PublicMetrics (public_metrics): UserPublicMetrics?`, `ReceivesYourDm (receives_your_dm): bool?`, `SubscribesToYou (subscribes_to_you): bool?`, `Subscription (subscription): UserSubscription?`, `SubscriptionType (subscription_type): string?`, `Url (url): string?`, `Username (username): string?`, `Verified (verified): bool?`, `VerifiedFollowersCount (verified_followers_count): int?`, `VerifiedType (verified_type): string?`, `Withheld (withheld): UserWithheld?` | `Models/User.cs` |
| `User1` | — | `Id (id): string !req` | `Models/User1.cs` |
| `UserAffiliation` | Metadata about a user's affiliation. | `BadgeUrl (badge_url): string?`, `Description (description): string?`, `Url (url): string?`, `UserId (user_id): IReadOnlyList<string?>?` | `Models/UserAffiliation.cs` |
| `UserComplianceSchema` | — | `EventAt (event_at): DateTimeOffset !req`, `User (user): User1 !req` | `Models/UserComplianceSchema.cs` |
| `UserDeleteComplianceSchema` | — | `UserDelete (user_delete): UserComplianceSchema !req` | `Models/UserDeleteComplianceSchema.cs` |
| `UserEntities` | A list of metadata found in the User's profile description. | `Description (description): Description?`, `Url (url): Url3?` | `Models/UserEntities.cs` |
| `UserProfileModificationComplianceSchema` | — | `UserProfileModification (user_profile_modification): UserProfileModificationObjectSchema !req` | `Models/UserProfileModificationComplianceSchema.cs` |
| `UserProfileModificationObjectSchema` | — | `EventAt (event_at): DateTimeOffset !req`, `NewValue (new_value): string !req`, `ProfileField (profile_field): string !req`, `User (user): User1 !req` | `Models/UserProfileModificationObjectSchema.cs` |
| `UserProtectComplianceSchema` | — | `UserProtect (user_protect): UserComplianceSchema !req` | `Models/UserProtectComplianceSchema.cs` |
| `UserPublicMetrics` | A list of metrics for this User. | `FollowersCount (followers_count): long !req`, `FollowingCount (following_count): long !req`, `LikeCount (like_count): long?`, `ListedCount (listed_count): long !req`, `MediaCount (media_count): long?`, `PostCount (post_count): long !req` | `Models/UserPublicMetrics.cs` |
| `UserScrubGeoObjectSchema` | — | `EventAt (event_at): DateTimeOffset !req`, `UpToTweetId (up_to_tweet_id): string !req`, `User (user): User1 !req` | `Models/UserScrubGeoObjectSchema.cs` |
| `UserScrubGeoSchema` | — | `ScrubGeo (scrub_geo): UserScrubGeoObjectSchema !req` | `Models/UserScrubGeoSchema.cs` |
| `UserSubscription` | The subscription relationship between this User and you. | `SubscribesToYou (subscribes_to_you): bool !req` | `Models/UserSubscription.cs` |
| `UserSuspendComplianceSchema` | — | `UserSuspend (user_suspend): UserComplianceSchema !req` | `Models/UserSuspendComplianceSchema.cs` |
| `UserTakedownComplianceSchema` | — | `EventAt (event_at): DateTimeOffset !req`, `User (user): User1 !req`, `WithheldInCountries (withheld_in_countries): IReadOnlyList<string> !req` | `Models/UserTakedownComplianceSchema.cs` |
| `UserUndeleteComplianceSchema` | — | `UserUndelete (user_undelete): UserComplianceSchema !req` | `Models/UserUndeleteComplianceSchema.cs` |
| `UserUnprotectComplianceSchema` | — | `UserUnprotect (user_unprotect): UserComplianceSchema !req` | `Models/UserUnprotectComplianceSchema.cs` |
| `UserUnsuspendComplianceSchema` | — | `UserUnsuspend (user_unsuspend): UserComplianceSchema !req` | `Models/UserUnsuspendComplianceSchema.cs` |
| `UserWithheld` | Withholding details for withheld content. | `CountryCodes (country_codes): IReadOnlyList<string?>?`, `Scope (scope): Scope1?` | `Models/UserWithheld.cs` |
| `UserWithheldComplianceSchema` | — | `UserWithheld (user_withheld): UserTakedownComplianceSchema !req` | `Models/UserWithheldComplianceSchema.cs` |
| `ValidateAccountActivitySubscriptionResponse` | — | `Data (data): ValidateAccountActivitySubscriptionResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/ValidateAccountActivitySubscriptionResponse.cs` |
| `ValidateAccountActivitySubscriptionResponseData` | — | `Subscribed (subscribed): bool !req` | `Models/ValidateAccountActivitySubscriptionResponseData.cs` |
| `ValidateWebhooksResponse` | — | `Data (data): ValidateWebhooksResponseData?`, `Errors (errors): IReadOnlyList<Problem>?` (union) | `Models/ValidateWebhooksResponse.cs` |
| `ValidateWebhooksResponseData` | — | `Valid (valid): bool !req` | `Models/ValidateWebhooksResponseData.cs` |
| `Value` | Per-factor bucket counts for a scoring model. | `NegativeFactorBucketCounts (negative_factor_bucket_counts): NegativeFactorBucketCounts?`, `NeutralFactorBucketCounts (neutral_factor_bucket_counts): NeutralFactorBucketCounts?`, `PositiveFactorBucketCounts (positive_factor_bucket_counts): PositiveFactorBucketCounts?` | `Models/Value.cs` |
| `WebhookConfig` | — | `CreatedAt (created_at): string?`, `Id (id): string?`, `Url (url): string?`, `Valid (valid): bool?` | `Models/WebhookConfig.cs` |
