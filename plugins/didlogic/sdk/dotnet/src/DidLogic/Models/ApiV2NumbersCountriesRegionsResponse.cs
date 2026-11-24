using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersCountriesRegionsResponse
{
    /// <summary>
    /// List of states/provinces with available DID numbers
    /// </summary>
    [JsonPropertyName("regions")]
    public required IReadOnlyList<Region> Regions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
