using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscFacebookRecommendationsCommentsResponse
{
    [JsonPropertyName("comments")]
    public required IReadOnlyList<Comment> Comments { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
