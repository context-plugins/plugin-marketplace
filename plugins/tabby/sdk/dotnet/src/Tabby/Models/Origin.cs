using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Origin city and airport
/// </summary>
public record Origin
{
    /// <summary>
    /// Origin IATA airport code, for example - JFK
    /// </summary>
    [JsonPropertyName("air_code")]
    public required string AirCode { get; init; }

    /// <summary>
    /// Origin city code, for example - NYC
    /// </summary>
    [JsonPropertyName("city_code")]
    public required string CityCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
