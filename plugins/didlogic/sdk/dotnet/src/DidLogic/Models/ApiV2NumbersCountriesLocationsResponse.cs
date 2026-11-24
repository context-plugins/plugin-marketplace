using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersCountriesLocationsResponse
{
    /// <summary>
    /// List of locations matching search criteria
    /// </summary>
    [JsonPropertyName("locations")]
    public required IReadOnlyList<Location> Locations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
