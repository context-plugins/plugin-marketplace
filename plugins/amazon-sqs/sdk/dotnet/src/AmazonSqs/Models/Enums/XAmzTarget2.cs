using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 AmazonSqsCancelMessageMoveTask = new("AmazonSQS.CancelMessageMoveTask");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsCancelMessageMoveTask, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsCancelMessageMoveTask => onAmazonSqsCancelMessageMoveTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsCancelMessageMoveTask, Action<string> otherwise)
    {
        if (this == AmazonSqsCancelMessageMoveTask) onAmazonSqsCancelMessageMoveTask();
        else otherwise(Value);
    }
}
