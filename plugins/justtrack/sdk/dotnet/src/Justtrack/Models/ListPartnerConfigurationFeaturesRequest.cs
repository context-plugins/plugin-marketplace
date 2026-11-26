using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record ListPartnerConfigurationFeaturesRequest
{
    [JsonPropertyName("filter")]
    public required ListPartnerConfigurationFeaturesFilter Filter { get; init; }

    [JsonPropertyName("page")]
    public required RequiredPage Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
