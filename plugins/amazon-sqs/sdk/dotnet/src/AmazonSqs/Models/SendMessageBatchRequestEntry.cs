using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record SendMessageBatchRequestEntry
{
    /// <summary>
    /// An identifier for a message in this batch used to communicate the result. The Ids of a batch request need to be unique within a request. This identifier can have up to 80 characters. The following characters are accepted: alphanumeric characters, hyphens(-), and underscores (_).
    /// </summary>
    [JsonPropertyName("Id")]
    public required string Id { get; init; }

    /// <summary>
    /// The body of the message.
    /// </summary>
    [JsonPropertyName("MessageBody")]
    public required string MessageBody { get; init; }

    /// <summary>
    /// The length of time, in seconds, for which a specific message is delayed. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive DelaySeconds value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue is applied. When you set FifoQueue, you can't set DelaySeconds per message. You can set this parameter only on a queue level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DelaySeconds")]
    public int? DelaySeconds { get; init; }

    /// <summary>
    /// Each message attribute consists of a Name, Type, and Value. For more information, see Amazon SQS message attributes in the Amazon SQS Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageAttributes")]
    public IReadOnlyDictionary<string, MessageAttributeValue>? MessageAttributes { get; init; }

    /// <summary>
    /// The message system attribute to send Each message system attribute consists of a Name, Type, and Value. Currently, the only supported message system attribute is AWSTraceHeader. Its type must be String and its value must be a correctly formatted X-Ray trace header string. The size of a message system attribute doesn't count towards the total size of a message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageSystemAttributes")]
    public IReadOnlyDictionary<string, MessageSystemAttributeValue>? MessageSystemAttributes { get; init; }

    /// <summary>
    /// This parameter applies only to FIFO (first-in-first-out) queues. The token used for deduplication of messages within a 5-minute minimum deduplication interval. If a message with a particular MessageDeduplicationId is sent successfully, subsequent messages with the same MessageDeduplicationId are accepted successfully but aren't delivered. For more information, see Exactly-once processing in the Amazon SQS Developer Guide. Every message must have a unique MessageDeduplicationId, You may provide a MessageDeduplicationId explicitly. If you aren't able to provide a MessageDeduplicationId and you e
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageDeduplicationId")]
    public string? MessageDeduplicationId { get; init; }

    /// <summary>
    /// MessageGroupId is an attribute used in Amazon SQS FIFO (First-In-First-Out) and standard queues. In FIFO queues, MessageGroupId organizes messages into distinct groups. Messages within the same message group are always processed one at a time, in strict order, ensuring that no two messages from the same group are processed simultaneously. In standard queues, using MessageGroupId enables fair queues. It is used to identify the tenant a message belongs to, helping maintain consistent message dwell time across all tenants during noisy neighbor events. Unlike FIFO queues, messages with the same Me
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageGroupId")]
    public string? MessageGroupId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
