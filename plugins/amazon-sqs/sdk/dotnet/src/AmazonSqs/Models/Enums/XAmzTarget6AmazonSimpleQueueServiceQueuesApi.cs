using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6AmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTarget6AmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTarget6AmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTarget6AmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6AmazonSimpleQueueServiceQueuesApi AmazonSqsGetQueueAttributes = new(
        "AmazonSQS.GetQueueAttributes");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsGetQueueAttributes, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsGetQueueAttributes => onAmazonSqsGetQueueAttributes(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsGetQueueAttributes, Action<string> otherwise)
    {
        if (this == AmazonSqsGetQueueAttributes) onAmazonSqsGetQueueAttributes();
        else otherwise(Value);
    }
}
