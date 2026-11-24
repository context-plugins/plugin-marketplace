using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1PostHistoryImportResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("socialAccountId")]
    public required string SocialAccountId { get; init; }

    [JsonPropertyName("requestedCount")]
    public required double RequestedCount { get; init; }

    [JsonPropertyName("withAnalytics")]
    public required bool WithAnalytics { get; init; }

    [JsonPropertyName("importCarousels")]
    public required bool ImportCarousels { get; init; }

    [JsonPropertyName("onlyLatest")]
    public required bool OnlyLatest { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surface")]
    public Surface? Surface { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mediaType")]
    public MediaType? MediaType { get; init; }

    [JsonPropertyName("status")]
    public required StatusBundleSocialPostImportApi Status { get; init; }

    [JsonPropertyName("postsImported")]
    public required double PostsImported { get; init; }

    [JsonPropertyName("analyticsImported")]
    public required double AnalyticsImported { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateLimitResetAt")]
    public DateTimeOffset? RateLimitResetAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startedAt")]
    public DateTimeOffset? StartedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completedAt")]
    public DateTimeOffset? CompletedAt { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset? CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deletedAt")]
    public DateTimeOffset? DeletedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
