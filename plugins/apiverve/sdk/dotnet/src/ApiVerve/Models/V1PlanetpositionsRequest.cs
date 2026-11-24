using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1PlanetpositionsRequest
{
    /// <summary>
    /// The date to get planetary position data for (MM-DD-YYYY)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date")]
    public string? Date { get; init; }

    /// <summary>
    /// The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time")]
    public string? Time { get; init; }

    /// <summary>
    /// The latitude of the observer
    /// </summary>
    [JsonPropertyName("lat")]
    public required double Lat { get; init; }

    /// <summary>
    /// The longitude of the observer
    /// </summary>
    [JsonPropertyName("lon")]
    public required double Lon { get; init; }

    /// <summary>
    /// The altitude of the observer in meters
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alt")]
    public double? Alt { get; init; }

    /// <summary>
    /// The planet to get position data for
    /// </summary>
    [JsonPropertyName("planet")]
    public required string Planet { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
