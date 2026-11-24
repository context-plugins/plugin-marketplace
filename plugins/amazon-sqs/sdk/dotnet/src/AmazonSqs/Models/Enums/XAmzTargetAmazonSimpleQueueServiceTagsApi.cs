using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonSimpleQueueServiceTagsApi>))]
public sealed record XAmzTargetAmazonSimpleQueueServiceTagsApi : OpenStringEnum<XAmzTargetAmazonSimpleQueueServiceTagsApi>
{
    private XAmzTargetAmazonSimpleQueueServiceTagsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonSimpleQueueServiceTagsApi AmazonSqsTagQueue = new("AmazonSQS.TagQueue");

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
