using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTarget3AmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTarget3AmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTarget3AmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonSimpleQueueServiceQueuesApi AmazonSqsTagQueue = new("AmazonSQS.TagQueue");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsTagQueue, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsTagQueue => onAmazonSqsTagQueue(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsTagQueue, Action<string> otherwise)
    {
        if (this == AmazonSqsTagQueue) onAmazonSqsTagQueue();
        else otherwise(Value);
    }
}
