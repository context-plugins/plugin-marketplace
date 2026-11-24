using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;
using AmazonSqs.Models.Enums;

namespace AmazonSqs.Models;

public record ReceiveMessageRequest
{
    /// <summary>
    /// The URL of the Amazon SQS queue from which messages are received. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// This parameter has been discontinued but will be supported for backward compatibility. To provide attribute names, you are encouraged to use MessageSystemAttributeNames. A list of attributes that need to be returned along with each message. These attributes include: All – Returns all values. ApproximateFirstReceiveTimestamp – Returns the time the message was first received from the queue (epoch time in milliseconds). ApproximateReceiveCount – Returns the number of times a message has been received across all queues but not deleted. AWSTraceHeader – Returns the X-Ray trace header string. Sender
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AttributeNames")]
    public IReadOnlyList<AttributeName>? AttributeNames { get; init; }

    /// <summary>
    /// A list of attributes that need to be returned along with each message. These attributes include: All – Returns all values. ApproximateFirstReceiveTimestamp – Returns the time the message was first received from the queue (epoch time in milliseconds). ApproximateReceiveCount – Returns the number of times a message has been received across all queues but not deleted. AWSTraceHeader – Returns the X-Ray trace header string. SenderId For a user, returns the user ID, for example ABCDEFGHI1JKLMNOPQ23R. For an IAM role, returns the IAM role ID, for example ABCDE1F2GH3I4JK5LMNOP:i-a123b456. SentTimesta
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageSystemAttributeNames")]
    public IReadOnlyList<MessageSystemAttributeName>? MessageSystemAttributeNames { get; init; }

    /// <summary>
    /// The name of the message attribute, where N is the index. The name can contain alphanumeric characters and the underscore (_), hyphen (-), and period (.). The name is case-sensitive and must be unique among all attribute names for the message. The name must not start with AWS-reserved prefixes such as AWS. or Amazon. (or any casing variants). The name must not start or end with a period (.), and it should not have periods in succession (..). The name can be up to 256 characters long. When using ReceiveMessage, you can send a list of attribute names to receive, or you can return all of the attri
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageAttributeNames")]
    public IReadOnlyList<string>? MessageAttributeNames { get; init; }

    /// <summary>
    /// The maximum number of messages to return. Amazon SQS never returns more messages than this value (however, fewer messages might be returned). Valid values: 1 to 10. Default: 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxNumberOfMessages")]
    public int? MaxNumberOfMessages { get; init; }

    /// <summary>
    /// The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a ReceiveMessage request. If not specified, the default visibility timeout for the queue is used, which is 30 seconds. Understanding VisibilityTimeout: When a message is received from a queue, it becomes temporarily invisible to other consumers for the duration of the visibility timeout. This prevents multiple consumers from processing the same message simultaneously. If the message is not deleted or its visibility timeout is not extended before the timeout expires, it bec
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VisibilityTimeout")]
    public int? VisibilityTimeout { get; init; }

    /// <summary>
    /// The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If a message is available, the call returns sooner than WaitTimeSeconds. If no messages are available and the wait time expires, the call does not return a message list. If you are using the Java SDK, it returns a ReceiveMessageResponse object, which has a empty list instead of a Null object. To avoid HTTP errors, ensure that the HTTP response timeout for ReceiveMessage requests is longer than the WaitTimeSeconds parameter. For example, with the Java SDK, you can set HTTP transport setting
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WaitTimeSeconds")]
    public int? WaitTimeSeconds { get; init; }

    /// <summary>
    /// This parameter applies only to FIFO (first-in-first-out) queues. The token used for deduplication of ReceiveMessage calls. If a networking issue occurs after a ReceiveMessage action, and instead of a response you receive a generic error, it is possible to retry the same action with an identical ReceiveRequestAttemptId to retrieve the same set of messages, even if their visibility timeout has not yet expired. You can use ReceiveRequestAttemptId only for 5 minutes after a ReceiveMessage action. When you set FifoQueue, a caller of the ReceiveMessage action can provide a ReceiveRequestAttemptId ex
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReceiveRequestAttemptId")]
    public string? ReceiveRequestAttemptId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
