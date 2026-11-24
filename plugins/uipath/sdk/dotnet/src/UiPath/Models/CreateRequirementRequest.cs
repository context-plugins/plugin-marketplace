using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Request payload for creating a new requirement
/// </summary>
public record CreateRequirementRequest
{
    /// <summary>
    /// Display name for the new requirement
    /// </summary>
    [JsonPropertyName("name")]
    [MaxLength(512)]
    public required string Name { get; init; }

    /// <summary>
    /// Detailed description of the requirement specification
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Optional external identifier for integration with third-party tools
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    public string? ExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
