using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 AmazonSqsChangeMessageVisibility = new("AmazonSQS.ChangeMessageVisibility");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsChangeMessageVisibility, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsChangeMessageVisibility => onAmazonSqsChangeMessageVisibility(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsChangeMessageVisibility, Action<string> otherwise)
    {
        if (this == AmazonSqsChangeMessageVisibility) onAmazonSqsChangeMessageVisibility();
        else otherwise(Value);
    }
}
