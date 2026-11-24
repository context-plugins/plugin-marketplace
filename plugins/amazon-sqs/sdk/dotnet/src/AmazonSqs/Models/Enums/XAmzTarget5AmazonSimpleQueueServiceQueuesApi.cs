using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5AmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTarget5AmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTarget5AmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTarget5AmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5AmazonSimpleQueueServiceQueuesApi AmazonSqsPurgeQueue = new(
        "AmazonSQS.PurgeQueue");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsPurgeQueue, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsPurgeQueue => onAmazonSqsPurgeQueue(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsPurgeQueue, Action<string> otherwise)
    {
        if (this == AmazonSqsPurgeQueue) onAmazonSqsPurgeQueue();
        else otherwise(Value);
    }
}
