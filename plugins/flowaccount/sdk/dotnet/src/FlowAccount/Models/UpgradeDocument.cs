using System.Text.Json.Serialization;

namespace FlowAccount.Models;

public record UpgradeDocument
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordId")]
    public long? RecordId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceDocumentSerial")]
    public string? ReferenceDocumentSerial { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceDocumentType")]
    public long? ReferenceDocumentType { get; init; }
}
