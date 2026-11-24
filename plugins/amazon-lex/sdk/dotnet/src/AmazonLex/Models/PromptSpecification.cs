using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record PromptSpecification
{
    /// <summary>
    /// A collection of messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at runtime.
    /// </summary>
    [JsonPropertyName("messageGroups")]
    public required IReadOnlyList<MessageGroup> MessageGroups { get; init; }

    /// <summary>
    /// The maximum number of times the bot tries to elicit a response from the user using this prompt.
    /// </summary>
    [JsonPropertyName("maxRetries")]
    public required int MaxRetries { get; init; }

    /// <summary>
    /// Indicates whether the user can interrupt a speech prompt from the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowInterrupt")]
    public bool? AllowInterrupt { get; init; }

    /// <summary>
    /// Indicates how a message is selected from a message group among retries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messageSelectionStrategy")]
    public MessageSelectionStrategy? MessageSelectionStrategy { get; init; }

    /// <summary>
    /// Specifies the advanced settings on each attempt of the prompt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promptAttemptsSpecification")]
    public IReadOnlyDictionary<string, PromptAttemptSpecification>? PromptAttemptsSpecification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
