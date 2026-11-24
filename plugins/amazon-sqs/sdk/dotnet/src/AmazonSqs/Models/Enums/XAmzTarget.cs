using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget AmazonSqsDeleteMessage = new("AmazonSQS.DeleteMessage");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsDeleteMessage, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsDeleteMessage => onAmazonSqsDeleteMessage(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsDeleteMessage, Action<string> otherwise)
    {
        if (this == AmazonSqsDeleteMessage) onAmazonSqsDeleteMessage();
        else otherwise(Value);
    }
}
