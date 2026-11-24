using System.Text.Json.Serialization;

namespace SalesforceServiceCloud.Models;

public record DateVariable
{
    /// <summary>
    /// API name of a variable defined in the bot definition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Variable type of a date variable.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "date";

    /// <summary>
    /// Date in format ISO_LOCAL_DATE 'YYYY-MM-DD'.
    /// </summary>
    [JsonPropertyName("value")]
    public required string? Value { get; init; }
}
