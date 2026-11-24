using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscFacebookRecommendationsImportResponse1
{
    [JsonPropertyName("imports")]
    public required IReadOnlyList<Import1> Imports { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
