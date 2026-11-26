using System.Text.Json.Serialization;

namespace EinsteinBots.Models;

public record TextVariable
{
    /// <summary>
    /// API name of a variable defined in the bot definition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Variable type of a text variable.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "text";

    /// <summary>
    /// Variable value in text format.
    /// </summary>
    [JsonPropertyName("value")]
    public required string? Value { get; init; }
}
