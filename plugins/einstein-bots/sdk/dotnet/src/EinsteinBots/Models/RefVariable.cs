using System.Text.Json.Serialization;

namespace EinsteinBots.Models;

public record RefVariable
{
    /// <summary>
    /// API name of a variable defined in the bot definition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Variable type of a reference ID variable.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "ref";

    /// <summary>
    /// Variable value in reference ID format.
    /// </summary>
    [JsonPropertyName("value")]
    public required string? Value { get; init; }
}
