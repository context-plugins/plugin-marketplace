using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscRedditPostRequirementsResponse
{
    [JsonPropertyName("isFlairRequired")]
    public required bool IsFlairRequired { get; init; }

    [JsonPropertyName("isFlairEnabled")]
    public required bool IsFlairEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
