using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonSimpleQueueServiceTagsApi>))]
public sealed record XAmzTarget2AmazonSimpleQueueServiceTagsApi : OpenStringEnum<XAmzTarget2AmazonSimpleQueueServiceTagsApi>
{
    private XAmzTarget2AmazonSimpleQueueServiceTagsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonSimpleQueueServiceTagsApi AmazonSqsListQueueTags = new(
        "AmazonSQS.ListQueueTags");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsListQueueTags, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsListQueueTags => onAmazonSqsListQueueTags(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsListQueueTags, Action<string> otherwise)
    {
        if (this == AmazonSqsListQueueTags) onAmazonSqsListQueueTags();
        else otherwise(Value);
    }
}
