using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9AmazonSimpleQueueServiceQueuesApi>))]
public sealed record XAmzTarget9AmazonSimpleQueueServiceQueuesApi : OpenStringEnum<XAmzTarget9AmazonSimpleQueueServiceQueuesApi>
{
    private XAmzTarget9AmazonSimpleQueueServiceQueuesApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9AmazonSimpleQueueServiceQueuesApi AmazonSqsListDeadLetterSourceQueues = new(
        "AmazonSQS.ListDeadLetterSourceQueues");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsListDeadLetterSourceQueues,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsListDeadLetterSourceQueues => onAmazonSqsListDeadLetterSourceQueues(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsListDeadLetterSourceQueues, Action<string> otherwise)
    {
        if (this == AmazonSqsListDeadLetterSourceQueues) onAmazonSqsListDeadLetterSourceQueues();
        else otherwise(Value);
    }
}
