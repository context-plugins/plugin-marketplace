using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7>))]
public sealed record XAmzTarget7 : OpenStringEnum<XAmzTarget7>
{
    private XAmzTarget7(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7 AmazonSqsReceiveMessage = new("AmazonSQS.ReceiveMessage");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsReceiveMessage, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsReceiveMessage => onAmazonSqsReceiveMessage(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsReceiveMessage, Action<string> otherwise)
    {
        if (this == AmazonSqsReceiveMessage) onAmazonSqsReceiveMessage();
        else otherwise(Value);
    }
}
