using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FlowAccount.Models;

public record BatchStatus
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messages")]
    public IReadOnlyList<BatchMessageStatus>? Messages { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public BatchImportMetadata? Metadata { get; init; }
}
