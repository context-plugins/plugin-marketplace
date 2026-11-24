using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Entity groups the monitor identifies in matching content.
/// </summary>
public record EntityGroup
{
    /// <summary>
    /// Reference name used to identify the entity group in monitor output.
    /// </summary>
    [JsonPropertyName("groupReference")]
    public required string GroupReference { get; init; }

    /// <summary>
    /// Optional plain-language description of the entities represented by the group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
