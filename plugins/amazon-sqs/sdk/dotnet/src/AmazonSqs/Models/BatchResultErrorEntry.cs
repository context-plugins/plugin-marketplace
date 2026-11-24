using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record BatchResultErrorEntry
{
    /// <summary>
    /// The Id of an entry in a batch request.
    /// </summary>
    [JsonPropertyName("Id")]
    public required string Id { get; init; }

    /// <summary>
    /// Specifies whether the error happened due to the caller of the batch API action.
    /// </summary>
    [JsonPropertyName("SenderFault")]
    public required bool SenderFault { get; init; }

    /// <summary>
    /// An error code representing why the action failed on this entry.
    /// </summary>
    [JsonPropertyName("Code")]
    public required string Code { get; init; }

    /// <summary>
    /// A message explaining why the action failed on this entry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
