using System.Collections.Generic;
using System.Text.Json.Serialization;
using Applike.Core.Models;

namespace Applike.Models;

public record ListPartnerConfigurationsResponse
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<PartnerConfigurationOutput> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
