using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Item7
{
    /// <summary>
    /// Location tag ID to pass as data.TIKTOK.locationId.
    /// </summary>
    [JsonPropertyName("locationId")]
    public required string LocationId { get; init; }

    /// <summary>
    /// Location name to pass as data.TIKTOK.locationName.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Extra location details. Can be a country, a region, a city or a full street address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public string? Address { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
