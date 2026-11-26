using System.Text.Json.Serialization;
using EinsteinBots.Core.Models;

namespace EinsteinBots.Models;

/// <summary>
/// Choice
/// </summary>
public record Choice
{
    /// <summary>
    /// Choice label.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// Choice alias, for example, a number to represent the choice.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alias")]
    public string? Alias { get; init; }

    /// <summary>
    /// Choice ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
