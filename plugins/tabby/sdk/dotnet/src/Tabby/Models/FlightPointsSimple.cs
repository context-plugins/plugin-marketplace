using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record FlightPointsSimple
{
    /// <summary>
    /// Origin city and airport
    /// </summary>
    [JsonPropertyName("origin")]
    public required Origin Origin { get; init; }

    /// <summary>
    /// Destination city and airport
    /// </summary>
    [JsonPropertyName("destination")]
    public required Destination Destination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
