using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record Message
{
    /// <summary>
    /// A unique identifier for the message. A MessageIdis considered unique across all Amazon Web Services accounts for an extended period of time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageId")]
    public string? MessageId { get; init; }

    /// <summary>
    /// An identifier associated with the act of receiving the message. A new receipt handle is returned every time you receive a message. When deleting a message, you provide the last received receipt handle to delete the message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReceiptHandle")]
    public string? ReceiptHandle { get; init; }

    /// <summary>
    /// An MD5 digest of the non-URL-encoded message body string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MD5OfBody")]
    public string? Md5OfBody { get; init; }

    /// <summary>
    /// The message's contents (not URL-encoded).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Body")]
    public string? Body { get; init; }

    /// <summary>
    /// A map of the attributes requested in ReceiveMessage to their respective values. Supported attributes: ApproximateReceiveCount ApproximateFirstReceiveTimestamp MessageDeduplicationId MessageGroupId SenderId SentTimestamp SequenceNumber ApproximateFirstReceiveTimestamp and SentTimestamp are each returned as an integer representing the epoch time in milliseconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Attributes")]
    public IReadOnlyDictionary<string, string>? Attributes { get; init; }

    /// <summary>
    /// An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see RFC1321.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MD5OfMessageAttributes")]
    public string? Md5OfMessageAttributes { get; init; }

    /// <summary>
    /// Each message attribute consists of a Name, Type, and Value. For more information, see Amazon SQS message attributes in the Amazon SQS Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MessageAttributes")]
    public IReadOnlyDictionary<string, MessageAttributeValue>? MessageAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
