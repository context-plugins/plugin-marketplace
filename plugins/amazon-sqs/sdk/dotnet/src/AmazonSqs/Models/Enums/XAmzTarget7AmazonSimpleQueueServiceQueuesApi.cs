using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7AmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTarget7AmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTarget7AmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTarget7AmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7AmazonSimpleQueueServiceQueuesApi AmazonSqsSetQueueAttributes = new(
        "AmazonSQS.SetQueueAttributes");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsSetQueueAttributes, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsSetQueueAttributes => onAmazonSqsSetQueueAttributes(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsSetQueueAttributes, Action<string> otherwise)
    {
        if (this == AmazonSqsSetQueueAttributes) onAmazonSqsSetQueueAttributes();
        else otherwise(Value);
    }
}
