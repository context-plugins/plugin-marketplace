using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record SendMessageRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue to which a message is sent. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// The message to send. The minimum size is one character. The maximum size is 1 MiB or 1,048,576 bytes A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000 to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.
    /// </summary>
    [JsonPropertyName("MessageBody")]
    public required string MessageBody { get; init; }

    /// <summary>
    /// The length of time, in seconds, for which to delay a specific message. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive DelaySeconds value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue applies. When you set FifoQueue, you can't set DelaySeconds per message. You can set this parameter only on a queue level.
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
    /// The message system attribute to send. Each message system attribute consists of a Name, Type, and Value. Currently, the only supported message system attribute is AWSTraceHeader. Its type must be String and its value must be a correctly formatted X-Ray trace header string. The size of a message system attribute doesn't count towards the total size of a message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageSystemAttributes")]
    public IReadOnlyDictionary<string, MessageSystemAttributeValue>? MessageSystemAttributes { get; init; }

    /// <summary>
    /// This parameter applies only to FIFO (first-in-first-out) queues. The token used for deduplication of sent messages. If a message with a particular MessageDeduplicationId is sent successfully, any messages sent with the same MessageDeduplicationId are accepted successfully but aren't delivered during the 5-minute deduplication interval. For more information, see Exactly-once processing in the Amazon SQS Developer Guide. Every message must have a unique MessageDeduplicationId, You may provide a MessageDeduplicationId explicitly. If you aren't able to provide a MessageDeduplicationId and you enab
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
