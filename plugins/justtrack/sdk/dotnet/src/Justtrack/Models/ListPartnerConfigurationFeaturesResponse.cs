using System.Collections.Generic;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record ListPartnerConfigurationFeaturesResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<PartnerConfigurationFeatureOutput> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
