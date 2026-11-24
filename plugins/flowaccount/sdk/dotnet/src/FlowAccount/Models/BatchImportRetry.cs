using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FlowAccount.Models;

public record BatchImportRetry
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batchId")]
    public string? BatchId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messageIds")]
    public IReadOnlyList<string>? MessageIds { get; init; }
}
