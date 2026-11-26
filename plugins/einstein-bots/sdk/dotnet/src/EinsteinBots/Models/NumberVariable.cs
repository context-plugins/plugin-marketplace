using System.Text.Json.Serialization;

namespace EinsteinBots.Models;

public record NumberVariable
{
    /// <summary>
    /// API name of a variable defined in the bot definition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Variable type of a number variable.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "number";

    /// <summary>
    /// Variable value in number format.
    /// </summary>
    [JsonPropertyName("value")]
    public required double? Value { get; init; }
}
