using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FlowAccount.Models;

public record BatchHistory
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadataList")]
    public IReadOnlyList<BatchImportMetadata>? MetadataList { get; init; }
}
