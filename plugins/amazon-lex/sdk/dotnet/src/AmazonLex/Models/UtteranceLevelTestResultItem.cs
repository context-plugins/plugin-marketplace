using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UtteranceLevelTestResultItem
{
    /// <summary>
    /// The record number of the result.
    /// </summary>
    [JsonPropertyName("recordNumber")]
    public required int RecordNumber { get; init; }

    /// <summary>
    /// The unique identifier for the conversation associated with the result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationId")]
    public string? ConversationId { get; init; }

    [JsonPropertyName("turnResult")]
    public required TestSetTurnResult TurnResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
