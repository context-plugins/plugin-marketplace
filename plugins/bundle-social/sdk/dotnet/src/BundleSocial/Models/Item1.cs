using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Item1
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("profilePostId")]
    public required string ProfilePostId { get; init; }

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

    [JsonPropertyName("dislikes")]
    public required double Dislikes { get; init; }

    [JsonPropertyName("comments")]
    public required double Comments { get; init; }

    [JsonPropertyName("shares")]
    public required double Shares { get; init; }

    [JsonPropertyName("saves")]
    public required double Saves { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("raw")]
    public object? Raw { get; init; }

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
