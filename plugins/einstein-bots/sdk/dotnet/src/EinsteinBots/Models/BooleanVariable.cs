using System.Text.Json.Serialization;

namespace EinsteinBots.Models;

public record BooleanVariable
{
    /// <summary>
    /// API name of a variable defined in the bot definition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Variable type of a boolean variable.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "boolean";

    /// <summary>
    /// Boolean value.
    /// </summary>
    [JsonPropertyName("value")]
    public required bool? Value { get; init; }
}
