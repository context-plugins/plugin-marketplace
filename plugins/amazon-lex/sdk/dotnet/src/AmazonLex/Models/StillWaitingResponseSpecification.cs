using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record StillWaitingResponseSpecification
{
    /// <summary>
    /// One or more message groups, each containing one or more messages, that define the prompts that Amazon Lex sends to the user.
    /// </summary>
    [JsonPropertyName("messageGroups")]
    public required IReadOnlyList<MessageGroup> MessageGroups { get; init; }

    /// <summary>
    /// How often a message should be sent to the user. Minimum of 1 second, maximum of 5 minutes.
    /// </summary>
    [JsonPropertyName("frequencyInSeconds")]
    public required int FrequencyInSeconds { get; init; }

    /// <summary>
    /// If Amazon Lex waits longer than this length of time for a response, it will stop sending messages.
    /// </summary>
    [JsonPropertyName("timeoutInSeconds")]
    public required int TimeoutInSeconds { get; init; }

    /// <summary>
    /// Indicates that the user can interrupt the response by speaking while the message is being played.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowInterrupt")]
    public bool? AllowInterrupt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
