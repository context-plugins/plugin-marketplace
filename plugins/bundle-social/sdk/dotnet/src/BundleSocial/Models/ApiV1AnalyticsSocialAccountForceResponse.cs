using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1AnalyticsSocialAccountForceResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("socialAccountId")]
    public required string SocialAccountId { get; init; }

    [JsonPropertyName("impressions")]
    public required double Impressions { get; init; }

    [JsonPropertyName("impressionsUnique")]
    public required double ImpressionsUnique { get; init; }

    [JsonPropertyName("views")]
    public required double Views { get; init; }

    [JsonPropertyName("viewsUnique")]
    public required double ViewsUnique { get; init; }

    [JsonPropertyName("likes")]
    public required double Likes { get; init; }

    [JsonPropertyName("comments")]
    public required double Comments { get; init; }

    [JsonPropertyName("postCount")]
    public required double PostCount { get; init; }

    [JsonPropertyName("followers")]
    public required double Followers { get; init; }

    [JsonPropertyName("following")]
    public required double Following { get; init; }

    [JsonPropertyName("forced")]
    public required bool Forced { get; init; }

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
