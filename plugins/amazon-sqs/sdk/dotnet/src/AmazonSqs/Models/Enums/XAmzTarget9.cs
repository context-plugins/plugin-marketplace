using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9>))]
public sealed record XAmzTarget9 : OpenStringEnum<XAmzTarget9>
{
    private XAmzTarget9(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9 AmazonSqsSendMessageBatch = new("AmazonSQS.SendMessageBatch");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsSendMessageBatch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsSendMessageBatch => onAmazonSqsSendMessageBatch(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsSendMessageBatch, Action<string> otherwise)
    {
        if (this == AmazonSqsSendMessageBatch) onAmazonSqsSendMessageBatch();
        else otherwise(Value);
    }
}
