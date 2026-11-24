using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonSimpleQueueServiceTagsApi>))]
public sealed record XAmzTarget1AmazonSimpleQueueServiceTagsApi : OpenStringEnum<XAmzTarget1AmazonSimpleQueueServiceTagsApi>
{
    private XAmzTarget1AmazonSimpleQueueServiceTagsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonSimpleQueueServiceTagsApi AmazonSqsUntagQueue = new("AmazonSQS.UntagQueue");

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
