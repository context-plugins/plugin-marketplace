using System.Collections.Generic;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Validation.Attributes;

namespace FacebookBusinessManager.Models;

/// <summary>
/// Targeting specification for the ad set
/// </summary>
public record Targeting
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("age_min")]
    [Minimum(18)]
    public int? AgeMin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("age_max")]
    [Maximum(65)]
    public int? AgeMax { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("genders")]
    public IReadOnlyList<int>? Genders { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geo_locations")]
    public GeoLocations? GeoLocations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interests")]
    public IReadOnlyList<Interest>? Interests { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
