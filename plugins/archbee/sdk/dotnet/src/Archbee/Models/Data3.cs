using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record Data3
{
    /// <summary>
    /// Created Doc id (first doc in case of archive tree).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("docId")]
    public string? DocId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
