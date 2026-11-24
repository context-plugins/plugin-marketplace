using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 AmazonSqsSendMessage = new("AmazonSQS.SendMessage");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsSendMessage, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsSendMessage => onAmazonSqsSendMessage(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsSendMessage, Action<string> otherwise)
    {
        if (this == AmazonSqsSendMessage) onAmazonSqsSendMessage();
        else otherwise(Value);
    }
}
