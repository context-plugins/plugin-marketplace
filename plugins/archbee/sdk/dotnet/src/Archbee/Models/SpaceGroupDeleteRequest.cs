using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record SpaceGroupDeleteRequest
{
    /// <summary>
    /// Space group id to delete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spaceGroupId")]
    public string? SpaceGroupId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
