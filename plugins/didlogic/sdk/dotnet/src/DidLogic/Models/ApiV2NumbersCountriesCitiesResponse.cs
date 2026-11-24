using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersCountriesCitiesResponse
{
    /// <summary>
    /// List of cities with available DID numbers
    /// </summary>
    [JsonPropertyName("cities")]
    public required IReadOnlyList<City> Cities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
