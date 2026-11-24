using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record FulfillmentStartResponseSpecification
{
    /// <summary>
    /// The delay between when the Lambda fulfillment function starts running and the start message is played. If the Lambda function returns before the delay is over, the start message isn't played.
    /// </summary>
    [JsonPropertyName("delayInSeconds")]
    public required int DelayInSeconds { get; init; }

    /// <summary>
    /// 1 - 5 message groups that contain start messages. Amazon Lex chooses one of the messages to play to the user.
    /// </summary>
    [JsonPropertyName("messageGroups")]
    public required IReadOnlyList<MessageGroup> MessageGroups { get; init; }

    /// <summary>
    /// Determines whether the user can interrupt the start message while it is playing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowInterrupt")]
    public bool? AllowInterrupt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
