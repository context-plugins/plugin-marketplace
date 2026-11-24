using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Models;

public record ChoiceMessage
{
    /// <summary>
    /// Message type for answering a question with choices from the bot.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "choice";

    /// <summary>
    /// Client-generated sequence number of the message in a session. Increase this number for each subsequent message.
    /// </summary>
    [JsonPropertyName("sequenceId")]
    public required long SequenceId { get; init; }

    /// <summary>
    /// Message ID of the previous response you are replying to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inReplyToMessageId")]
    public string? InReplyToMessageId { get; init; }

    /// <summary>
    /// Index or alias of the chosen answer. The index starts with 1. Either <c>choiceIndex</c> or <c>choiceId</c> is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("choiceIndex")]
    public int? ChoiceIndex { get; init; }

    /// <summary>
    /// ID of the answer when you answer by clicking a choice button. Either <c>choiceIndex</c> or <c>choiceId</c> is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("choiceId")]
    public string? ChoiceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
