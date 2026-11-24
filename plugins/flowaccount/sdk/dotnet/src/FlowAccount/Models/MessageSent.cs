using System.Text.Json.Serialization;

namespace FlowAccount.Models;

public record MessageSent
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messageId")]
    public string? MessageId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalDocumentId")]
    public string? ExternalDocumentId { get; init; }
}
