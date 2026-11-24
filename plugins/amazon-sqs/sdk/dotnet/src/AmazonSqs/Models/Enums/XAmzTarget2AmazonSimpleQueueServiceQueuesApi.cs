using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTarget2AmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTarget2AmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTarget2AmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonSimpleQueueServiceQueuesApi AmazonSqsListQueues = new(
        "AmazonSQS.ListQueues");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsListQueues, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsListQueues => onAmazonSqsListQueues(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsListQueues, Action<string> otherwise)
    {
        if (this == AmazonSqsListQueues) onAmazonSqsListQueues();
        else otherwise(Value);
    }
}
