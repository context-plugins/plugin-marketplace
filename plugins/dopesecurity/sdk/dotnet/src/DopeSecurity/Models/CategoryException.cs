using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.Enums;

namespace DopeSecurity.Models;

/// <summary>
/// Per-entity override of a category restriction
/// </summary>
public record CategoryException
{
    /// <summary>
    /// The action applied for this entity
    /// </summary>
    [JsonPropertyName("restriction")]
    public required Restriction1 Restriction { get; init; }

    /// <summary>
    /// Optional block/warning page identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public string? Page { get; init; }

    /// <summary>
    /// Human-readable entity name (returned on read APIs)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Entity type (returned on read APIs)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
