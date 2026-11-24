using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record Data1
{
    /// <summary>
    /// Returned created/updated open api tree structure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("docTreeId")]
    public string? DocTreeId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
