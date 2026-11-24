using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTargetAmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTargetAmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTargetAmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonSimpleQueueServiceQueuesApi AmazonSqsCreateQueue = new(
        "AmazonSQS.CreateQueue");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsCreateQueue, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsCreateQueue => onAmazonSqsCreateQueue(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsCreateQueue, Action<string> otherwise)
    {
        if (this == AmazonSqsCreateQueue) onAmazonSqsCreateQueue();
        else otherwise(Value);
    }
}
