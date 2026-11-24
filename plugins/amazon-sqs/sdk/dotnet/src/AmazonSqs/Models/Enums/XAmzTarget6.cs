using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6>))]
public sealed record XAmzTarget6 : OpenStringEnum<XAmzTarget6>
{
    private XAmzTarget6(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6 AmazonSqsChangeMessageVisibilityBatch = new(
        "AmazonSQS.ChangeMessageVisibilityBatch");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsChangeMessageVisibilityBatch,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsChangeMessageVisibilityBatch => onAmazonSqsChangeMessageVisibilityBatch(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsChangeMessageVisibilityBatch, Action<string> otherwise)
    {
        if (this == AmazonSqsChangeMessageVisibilityBatch) onAmazonSqsChangeMessageVisibilityBatch();
        else otherwise(Value);
    }
}
