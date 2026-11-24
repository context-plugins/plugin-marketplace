using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AttributeName>))]
public sealed record AttributeName : OpenStringEnum<AttributeName>
{
    private AttributeName(string value) : base(value)
    {
    }

    public static readonly AttributeName All = new("All");

    public static readonly AttributeName Policy = new("Policy");

    public static readonly AttributeName VisibilityTimeout = new("VisibilityTimeout");

    public static readonly AttributeName MaximumMessageSize = new("MaximumMessageSize");

    public static readonly AttributeName MessageRetentionPeriod = new("MessageRetentionPeriod");

    public static readonly AttributeName ApproximateNumberOfMessages = new("ApproximateNumberOfMessages");

    public static readonly AttributeName ApproximateNumberOfMessagesNotVisible = new(
        "ApproximateNumberOfMessagesNotVisible");

    public static readonly AttributeName CreatedTimestamp = new("CreatedTimestamp");

    public static readonly AttributeName LastModifiedTimestamp = new("LastModifiedTimestamp");

    public static readonly AttributeName QueueArn = new("QueueArn");

    public static readonly AttributeName ApproximateNumberOfMessagesDelayed = new("ApproximateNumberOfMessagesDelayed");

    public static readonly AttributeName DelaySeconds = new("DelaySeconds");

    public static readonly AttributeName ReceiveMessageWaitTimeSeconds = new("ReceiveMessageWaitTimeSeconds");

    public static readonly AttributeName RedrivePolicy = new("RedrivePolicy");

    public static readonly AttributeName FifoQueue = new("FifoQueue");

    public static readonly AttributeName ContentBasedDeduplication = new("ContentBasedDeduplication");

    public static readonly AttributeName KmsMasterKeyId = new("KmsMasterKeyId");

    public static readonly AttributeName KmsDataKeyReusePeriodSeconds = new("KmsDataKeyReusePeriodSeconds");

    public static readonly AttributeName DeduplicationScope = new("DeduplicationScope");

    public static readonly AttributeName FifoThroughputLimit = new("FifoThroughputLimit");

    public static readonly AttributeName RedriveAllowPolicy = new("RedriveAllowPolicy");

    public static readonly AttributeName SqsManagedSseEnabled = new("SqsManagedSseEnabled");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onPolicy,
        Func<TResult> onVisibilityTimeout,
        Func<TResult> onMaximumMessageSize,
        Func<TResult> onMessageRetentionPeriod,
        Func<TResult> onApproximateNumberOfMessages,
        Func<TResult> onApproximateNumberOfMessagesNotVisible,
        Func<TResult> onCreatedTimestamp,
        Func<TResult> onLastModifiedTimestamp,
        Func<TResult> onQueueArn,
        Func<TResult> onApproximateNumberOfMessagesDelayed,
        Func<TResult> onDelaySeconds,
        Func<TResult> onReceiveMessageWaitTimeSeconds,
        Func<TResult> onRedrivePolicy,
        Func<TResult> onFifoQueue,
        Func<TResult> onContentBasedDeduplication,
        Func<TResult> onKmsMasterKeyId,
        Func<TResult> onKmsDataKeyReusePeriodSeconds,
        Func<TResult> onDeduplicationScope,
        Func<TResult> onFifoThroughputLimit,
        Func<TResult> onRedriveAllowPolicy,
        Func<TResult> onSqsManagedSseEnabled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Policy => onPolicy(),
            _ when this == VisibilityTimeout => onVisibilityTimeout(),
            _ when this == MaximumMessageSize => onMaximumMessageSize(),
            _ when this == MessageRetentionPeriod => onMessageRetentionPeriod(),
            _ when this == ApproximateNumberOfMessages => onApproximateNumberOfMessages(),
            _ when this == ApproximateNumberOfMessagesNotVisible => onApproximateNumberOfMessagesNotVisible(),
            _ when this == CreatedTimestamp => onCreatedTimestamp(),
            _ when this == LastModifiedTimestamp => onLastModifiedTimestamp(),
            _ when this == QueueArn => onQueueArn(),
            _ when this == ApproximateNumberOfMessagesDelayed => onApproximateNumberOfMessagesDelayed(),
            _ when this == DelaySeconds => onDelaySeconds(),
            _ when this == ReceiveMessageWaitTimeSeconds => onReceiveMessageWaitTimeSeconds(),
            _ when this == RedrivePolicy => onRedrivePolicy(),
            _ when this == FifoQueue => onFifoQueue(),
            _ when this == ContentBasedDeduplication => onContentBasedDeduplication(),
            _ when this == KmsMasterKeyId => onKmsMasterKeyId(),
            _ when this == KmsDataKeyReusePeriodSeconds => onKmsDataKeyReusePeriodSeconds(),
            _ when this == DeduplicationScope => onDeduplicationScope(),
            _ when this == FifoThroughputLimit => onFifoThroughputLimit(),
            _ when this == RedriveAllowPolicy => onRedriveAllowPolicy(),
            _ when this == SqsManagedSseEnabled => onSqsManagedSseEnabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onPolicy,
        Action onVisibilityTimeout,
        Action onMaximumMessageSize,
        Action onMessageRetentionPeriod,
        Action onApproximateNumberOfMessages,
        Action onApproximateNumberOfMessagesNotVisible,
        Action onCreatedTimestamp,
        Action onLastModifiedTimestamp,
        Action onQueueArn,
        Action onApproximateNumberOfMessagesDelayed,
        Action onDelaySeconds,
        Action onReceiveMessageWaitTimeSeconds,
        Action onRedrivePolicy,
        Action onFifoQueue,
        Action onContentBasedDeduplication,
        Action onKmsMasterKeyId,
        Action onKmsDataKeyReusePeriodSeconds,
        Action onDeduplicationScope,
        Action onFifoThroughputLimit,
        Action onRedriveAllowPolicy,
        Action onSqsManagedSseEnabled,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Policy) onPolicy();
        else if (this == VisibilityTimeout) onVisibilityTimeout();
        else if (this == MaximumMessageSize) onMaximumMessageSize();
        else if (this == MessageRetentionPeriod) onMessageRetentionPeriod();
        else if (this == ApproximateNumberOfMessages) onApproximateNumberOfMessages();
        else if (this == ApproximateNumberOfMessagesNotVisible) onApproximateNumberOfMessagesNotVisible();
        else if (this == CreatedTimestamp) onCreatedTimestamp();
        else if (this == LastModifiedTimestamp) onLastModifiedTimestamp();
        else if (this == QueueArn) onQueueArn();
        else if (this == ApproximateNumberOfMessagesDelayed) onApproximateNumberOfMessagesDelayed();
        else if (this == DelaySeconds) onDelaySeconds();
        else if (this == ReceiveMessageWaitTimeSeconds) onReceiveMessageWaitTimeSeconds();
        else if (this == RedrivePolicy) onRedrivePolicy();
        else if (this == FifoQueue) onFifoQueue();
        else if (this == ContentBasedDeduplication) onContentBasedDeduplication();
        else if (this == KmsMasterKeyId) onKmsMasterKeyId();
        else if (this == KmsDataKeyReusePeriodSeconds) onKmsDataKeyReusePeriodSeconds();
        else if (this == DeduplicationScope) onDeduplicationScope();
        else if (this == FifoThroughputLimit) onFifoThroughputLimit();
        else if (this == RedriveAllowPolicy) onRedriveAllowPolicy();
        else if (this == SqsManagedSseEnabled) onSqsManagedSseEnabled();
        else otherwise(Value);
    }
}
