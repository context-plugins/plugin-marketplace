using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Geographic coordinates of the place
/// </summary>
public record GpsCoordinates
{
    /// <summary>
    /// Latitude coordinate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latitude")]
    public double? Latitude { get; init; }

    /// <summary>
    /// Longitude coordinate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("longitude")]
    public double? Longitude { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
