using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FlowAccount.Models;

public record BatchImportPayload
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("simpleDocuments")]
    public IReadOnlyList<SimpleDocument>? SimpleDocuments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batchId")]
    public string? BatchId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileName")]
    public string? FileName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batchCount")]
    public int? BatchCount { get; init; }
}
