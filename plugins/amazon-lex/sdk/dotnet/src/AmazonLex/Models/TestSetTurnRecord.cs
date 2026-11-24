using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TestSetTurnRecord
{
    /// <summary>
    /// The record number associated with the turn.
    /// </summary>
    [JsonPropertyName("recordNumber")]
    public required int RecordNumber { get; init; }

    /// <summary>
    /// The unique identifier for the conversation associated with the turn.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationId")]
    public string? ConversationId { get; init; }

    /// <summary>
    /// The number of turns that has elapsed up to that turn.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("turnNumber")]
    public int? TurnNumber { get; init; }

    [JsonPropertyName("turnSpecification")]
    public required TurnSpecification TurnSpecification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
