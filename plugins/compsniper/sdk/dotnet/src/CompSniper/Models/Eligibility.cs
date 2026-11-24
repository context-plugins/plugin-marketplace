using System.Collections.Generic;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record Eligibility
{
    [JsonPropertyName("status")]
    public required StatusCompSniperMarketplaceAndShippingShippingRatesApi Status { get; init; }

    [JsonPropertyName("requirements")]
    public required IReadOnlyList<Requirement> Requirements { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
