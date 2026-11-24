using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MessageSystemAttributeName>))]
public sealed record MessageSystemAttributeName : OpenStringEnum<MessageSystemAttributeName>
{
    private MessageSystemAttributeName(string value) : base(value)
    {
    }

    public static readonly MessageSystemAttributeName All = new("All");

    public static readonly MessageSystemAttributeName SenderId = new("SenderId");

    public static readonly MessageSystemAttributeName SentTimestamp = new("SentTimestamp");

    public static readonly MessageSystemAttributeName ApproximateReceiveCount = new("ApproximateReceiveCount");

    public static readonly MessageSystemAttributeName ApproximateFirstReceiveTimestamp = new(
        "ApproximateFirstReceiveTimestamp");

    public static readonly MessageSystemAttributeName SequenceNumber = new("SequenceNumber");

    public static readonly MessageSystemAttributeName MessageDeduplicationId = new("MessageDeduplicationId");

    public static readonly MessageSystemAttributeName MessageGroupId = new("MessageGroupId");

    public static readonly MessageSystemAttributeName AwsTraceHeader = new("AWSTraceHeader");

    public static readonly MessageSystemAttributeName DeadLetterQueueSourceArn = new("DeadLetterQueueSourceArn");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onSenderId,
        Func<TResult> onSentTimestamp,
        Func<TResult> onApproximateReceiveCount,
        Func<TResult> onApproximateFirstReceiveTimestamp,
        Func<TResult> onSequenceNumber,
        Func<TResult> onMessageDeduplicationId,
        Func<TResult> onMessageGroupId,
        Func<TResult> onAwsTraceHeader,
        Func<TResult> onDeadLetterQueueSourceArn,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == SenderId => onSenderId(),
            _ when this == SentTimestamp => onSentTimestamp(),
            _ when this == ApproximateReceiveCount => onApproximateReceiveCount(),
            _ when this == ApproximateFirstReceiveTimestamp => onApproximateFirstReceiveTimestamp(),
            _ when this == SequenceNumber => onSequenceNumber(),
            _ when this == MessageDeduplicationId => onMessageDeduplicationId(),
            _ when this == MessageGroupId => onMessageGroupId(),
            _ when this == AwsTraceHeader => onAwsTraceHeader(),
            _ when this == DeadLetterQueueSourceArn => onDeadLetterQueueSourceArn(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onSenderId,
        Action onSentTimestamp,
        Action onApproximateReceiveCount,
        Action onApproximateFirstReceiveTimestamp,
        Action onSequenceNumber,
        Action onMessageDeduplicationId,
        Action onMessageGroupId,
        Action onAwsTraceHeader,
        Action onDeadLetterQueueSourceArn,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == SenderId) onSenderId();
        else if (this == SentTimestamp) onSentTimestamp();
        else if (this == ApproximateReceiveCount) onApproximateReceiveCount();
        else if (this == ApproximateFirstReceiveTimestamp) onApproximateFirstReceiveTimestamp();
        else if (this == SequenceNumber) onSequenceNumber();
        else if (this == MessageDeduplicationId) onMessageDeduplicationId();
        else if (this == MessageGroupId) onMessageGroupId();
        else if (this == AwsTraceHeader) onAwsTraceHeader();
        else if (this == DeadLetterQueueSourceArn) onDeadLetterQueueSourceArn();
        else otherwise(Value);
    }
}
