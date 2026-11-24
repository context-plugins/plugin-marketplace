using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessReviewsImportRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("count")]
    [Minimum(1)]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
