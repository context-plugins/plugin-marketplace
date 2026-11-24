using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record SendMessageResult
{
    /// <summary>
    /// An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see RFC1321.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MD5OfMessageBody")]
    public string? Md5OfMessageBody { get; init; }

    /// <summary>
    /// An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see RFC1321.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MD5OfMessageAttributes")]
    public string? Md5OfMessageAttributes { get; init; }

    /// <summary>
    /// An MD5 digest of the non-URL-encoded message system attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MD5OfMessageSystemAttributes")]
    public string? Md5OfMessageSystemAttributes { get; init; }

    /// <summary>
    /// An attribute containing the MessageId of the message sent to the queue. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageId")]
    public string? MessageId { get; init; }

    /// <summary>
    /// This parameter applies only to FIFO (first-in-first-out) queues. The large, non-consecutive number that Amazon SQS assigns to each message. The length of SequenceNumber is 128 bits. SequenceNumber continues to increase for a particular MessageGroupId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SequenceNumber")]
    public string? SequenceNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
