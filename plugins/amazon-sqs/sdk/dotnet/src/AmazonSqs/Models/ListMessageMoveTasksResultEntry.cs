using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ListMessageMoveTasksResultEntry
{
    /// <summary>
    /// An identifier associated with a message movement task. When this field is returned in the response of the ListMessageMoveTasks action, it is only populated for tasks that are in RUNNING status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TaskHandle")]
    public string? TaskHandle { get; init; }

    /// <summary>
    /// The status of the message movement task. Possible values are: RUNNING, COMPLETED, CANCELLING, CANCELLED, and FAILED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public string? Status { get; init; }

    /// <summary>
    /// The ARN of the queue that contains the messages to be moved to another queue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SourceArn")]
    public string? SourceArn { get; init; }

    /// <summary>
    /// The ARN of the destination queue if it has been specified in the StartMessageMoveTask request. If a DestinationArn has not been specified in the StartMessageMoveTask request, this field value will be NULL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DestinationArn")]
    public string? DestinationArn { get; init; }

    /// <summary>
    /// The number of messages to be moved per second (the message movement rate), if it has been specified in the StartMessageMoveTask request. If a MaxNumberOfMessagesPerSecond has not been specified in the StartMessageMoveTask request, this field value will be NULL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxNumberOfMessagesPerSecond")]
    public int? MaxNumberOfMessagesPerSecond { get; init; }

    /// <summary>
    /// The approximate number of messages already moved to the destination queue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ApproximateNumberOfMessagesMoved")]
    public int? ApproximateNumberOfMessagesMoved { get; init; }

    /// <summary>
    /// The number of messages to be moved from the source queue. This number is obtained at the time of starting the message movement task and is only included after the message movement task is selected to start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ApproximateNumberOfMessagesToMove")]
    public int? ApproximateNumberOfMessagesToMove { get; init; }

    /// <summary>
    /// The task failure reason (only included if the task status is FAILED).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    /// <summary>
    /// The timestamp of starting the message movement task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartedTimestamp")]
    public int? StartedTimestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
