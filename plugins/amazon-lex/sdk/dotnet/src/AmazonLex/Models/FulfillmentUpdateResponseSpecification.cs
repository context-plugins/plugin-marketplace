using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record FulfillmentUpdateResponseSpecification
{
    /// <summary>
    /// The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
    /// </summary>
    [JsonPropertyName("frequencyInSeconds")]
    public required int FrequencyInSeconds { get; init; }

    /// <summary>
    /// 1 - 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
    /// </summary>
    [JsonPropertyName("messageGroups")]
    public required IReadOnlyList<MessageGroup> MessageGroups { get; init; }

    /// <summary>
    /// Determines whether the user can interrupt an update message while it is playing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowInterrupt")]
    public bool? AllowInterrupt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
