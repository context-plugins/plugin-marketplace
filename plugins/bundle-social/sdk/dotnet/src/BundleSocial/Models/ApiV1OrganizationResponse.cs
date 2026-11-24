using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record ApiV1OrganizationResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("createdById")]
    public required string CreatedById { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promotionCodeId")]
    public string? PromotionCodeId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avatarUrl")]
    public string? AvatarUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ref")]
    public string? Ref { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dailyPostLimit")]
    public DailyPostLimit? DailyPostLimit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dailyCommentLimit")]
    public DailyCommentLimit? DailyCommentLimit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyImportLimitPerAccount")]
    public double? MonthlyImportLimitPerAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commentImportLimitPerPost")]
    public double? CommentImportLimitPerPost { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyReviewImportLimitPerAccount")]
    public double? MonthlyReviewImportLimitPerAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyMessageLimitPerAccount")]
    public double? MonthlyMessageLimitPerAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyAutomationExecutionLimitPerAccount")]
    public double? MonthlyAutomationExecutionLimitPerAccount { get; init; }

    [JsonPropertyName("apiAccess")]
    public required bool ApiAccess { get; init; }

    [JsonPropertyName("analyticsDisabled")]
    public required bool AnalyticsDisabled { get; init; }

    [JsonPropertyName("analyticsPostsDisabled")]
    public required bool AnalyticsPostsDisabled { get; init; }

    [JsonPropertyName("uploadsCompressionEnabled")]
    public required bool UploadsCompressionEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyticsInterval")]
    public double? AnalyticsInterval { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyticsPostsInterval")]
    public double? AnalyticsPostsInterval { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forcedAccountAnalyticsDailyLimit")]
    public double? ForcedAccountAnalyticsDailyLimit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forcedPostAnalyticsDailyLimit")]
    public double? ForcedPostAnalyticsDailyLimit { get; init; }

    [JsonPropertyName("showVerboseErrors")]
    public required bool ShowVerboseErrors { get; init; }

    [JsonPropertyName("disconnectCheckEnabled")]
    public required bool DisconnectCheckEnabled { get; init; }

    [JsonPropertyName("deleteAccountAfter")]
    [Minimum(0)]
    [Maximum(168)]
    public required int DeleteAccountAfter { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset? CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deletedAt")]
    public DateTimeOffset? DeletedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suspended")]
    public bool? Suspended { get; init; }

    [JsonPropertyName("createdBy")]
    public required CreatedBy CreatedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription")]
    public Subscription? Subscription { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promotionCode")]
    public PromotionCode? PromotionCode { get; init; }

    /// <summary>
    /// Deprecated: will be removed on 2026-11-15. List teams with the paginated GET /api/v1/team instead.
    /// </summary>
    [JsonPropertyName("teams")]
    public required IReadOnlyList<Team> Teams { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
