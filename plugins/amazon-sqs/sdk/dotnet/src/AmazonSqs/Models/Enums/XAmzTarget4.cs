using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 AmazonSqsStartMessageMoveTask = new("AmazonSQS.StartMessageMoveTask");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsStartMessageMoveTask, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsStartMessageMoveTask => onAmazonSqsStartMessageMoveTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsStartMessageMoveTask, Action<string> otherwise)
    {
        if (this == AmazonSqsStartMessageMoveTask) onAmazonSqsStartMessageMoveTask();
        else otherwise(Value);
    }
}
