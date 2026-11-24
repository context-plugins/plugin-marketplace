using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Destination city and airport
/// </summary>
public record Destination
{
    /// <summary>
    /// Destination IATA airport code, for example - LAX
    /// </summary>
    [JsonPropertyName("air_code")]
    public required string AirCode { get; init; }

    /// <summary>
    /// Destination city code, for example - LAX
    /// </summary>
    [JsonPropertyName("city_code")]
    public required string CityCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
