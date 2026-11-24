using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTarget4AmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTarget4AmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTarget4AmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonSimpleQueueServiceQueuesApi AmazonSqsUntagQueue = new(
        "AmazonSQS.UntagQueue");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsUntagQueue, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsUntagQueue => onAmazonSqsUntagQueue(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsUntagQueue, Action<string> otherwise)
    {
        if (this == AmazonSqsUntagQueue) onAmazonSqsUntagQueue();
        else otherwise(Value);
    }
}
