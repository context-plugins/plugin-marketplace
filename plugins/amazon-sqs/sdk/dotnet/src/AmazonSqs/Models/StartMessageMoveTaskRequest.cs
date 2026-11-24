using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record StartMessageMoveTaskRequest
{
    /// <summary>
    /// The ARN of the queue that contains the messages to be moved to another queue. Currently, only ARNs of dead-letter queues (DLQs) whose sources are other Amazon SQS queues are accepted. DLQs whose sources are non-SQS queues, such as Lambda or Amazon SNS topics, are not currently supported.
    /// </summary>
    [JsonPropertyName("SourceArn")]
    public required string SourceArn { get; init; }

    /// <summary>
    /// The ARN of the queue that receives the moved messages. You can use this field to specify the destination queue where you would like to redrive messages. If this field is left blank, the messages will be redriven back to their respective original source queues.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DestinationArn")]
    public string? DestinationArn { get; init; }

    /// <summary>
    /// The number of messages to be moved per second (the message movement rate). You can use this field to define a fixed message movement rate. The maximum value for messages per second is 500. If this field is left blank, the system will optimize the rate based on the queue message backlog size, which may vary throughout the duration of the message movement task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxNumberOfMessagesPerSecond")]
    public int? MaxNumberOfMessagesPerSecond { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
