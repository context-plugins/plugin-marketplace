using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTarget1AmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTarget1AmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTarget1AmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonSimpleQueueServiceQueuesApi AmazonSqsDeleteQueue = new(
        "AmazonSQS.DeleteQueue");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsDeleteQueue, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsDeleteQueue => onAmazonSqsDeleteQueue(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsDeleteQueue, Action<string> otherwise)
    {
        if (this == AmazonSqsDeleteQueue) onAmazonSqsDeleteQueue();
        else otherwise(Value);
    }
}
