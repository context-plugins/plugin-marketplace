using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8AmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTarget8AmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTarget8AmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTarget8AmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8AmazonSimpleQueueServiceQueuesApi AmazonSqsGetQueueUrl = new(
        "AmazonSQS.GetQueueUrl");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsGetQueueUrl, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsGetQueueUrl => onAmazonSqsGetQueueUrl(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsGetQueueUrl, Action<string> otherwise)
    {
        if (this == AmazonSqsGetQueueUrl) onAmazonSqsGetQueueUrl();
        else otherwise(Value);
    }
}
