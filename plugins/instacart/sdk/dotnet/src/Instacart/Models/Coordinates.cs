using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

/// <summary>
/// The geographic coordinates of the delivery or pickup address.
/// </summary>
public record Coordinates
{
    /// <summary>
    /// The latitude coordinate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latitude")]
    public double? Latitude { get; init; }

    /// <summary>
    /// The longitude coordinate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("longitude")]
    public double? Longitude { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
