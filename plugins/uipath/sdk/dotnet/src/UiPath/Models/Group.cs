using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// A user group in the UiPath organization
/// </summary>
public record Group
{
    /// <summary>
    /// Unique identifier of the group
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Display name of the group
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Type classification of the group
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type1? Type { get; init; }

    /// <summary>
    /// Number of members currently in the group
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userCount")]
    public int? UserCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
