using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8>))]
public sealed record XAmzTarget8 : OpenStringEnum<XAmzTarget8>
{
    private XAmzTarget8(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8 AmazonSqsDeleteMessageBatch = new("AmazonSQS.DeleteMessageBatch");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsDeleteMessageBatch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsDeleteMessageBatch => onAmazonSqsDeleteMessageBatch(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsDeleteMessageBatch, Action<string> otherwise)
    {
        if (this == AmazonSqsDeleteMessageBatch) onAmazonSqsDeleteMessageBatch();
        else otherwise(Value);
    }
}
