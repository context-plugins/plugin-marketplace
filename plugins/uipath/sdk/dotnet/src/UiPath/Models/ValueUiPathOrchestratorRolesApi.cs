using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

public record ValueUiPathOrchestratorRolesApi
{
    /// <summary>
    /// Unique role identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public long? Id { get; init; }

    /// <summary>
    /// Display name of the role
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// Human-readable display name for the role
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DisplayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Whether this is a built-in system role that cannot be deleted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IsStatic")]
    public bool? IsStatic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
