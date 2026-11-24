using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

public record Source
{
    /// <summary>
    /// ID of the contributing source system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceId")]
    public string? SourceId { get; init; }

    /// <summary>
    /// ID of the record in the source system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordId")]
    public string? RecordId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
