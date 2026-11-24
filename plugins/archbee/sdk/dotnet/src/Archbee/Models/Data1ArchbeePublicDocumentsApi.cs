using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record Data1ArchbeePublicDocumentsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("docId")]
    public string? DocId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newRecord")]
    public bool? NewRecord { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
