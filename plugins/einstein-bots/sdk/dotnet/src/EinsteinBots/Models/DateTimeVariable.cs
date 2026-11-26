using System.Text.Json.Serialization;
using EinsteinBots.Core.Models;

namespace EinsteinBots.Models;

public record DateTimeVariable
{
    /// <summary>
    /// API name of a variable defined in the bot definition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Variable type of a datetime variable.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "dateTime";

    /// <summary>
    /// Datetime in format ISO_LOCAL_DATE_TIME 'YYYY-MM-DDTHH:MM:SS'.
    /// </summary>
    [JsonPropertyName("value")]
    public required string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
