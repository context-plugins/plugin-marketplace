using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget55>))]
public sealed record XAmzTarget55 : OpenStringEnum<XAmzTarget55>
{
    private XAmzTarget55(string value) : base(value)
    {
    }

    public static readonly XAmzTarget55 Comprehend20171127StartFlywheelIteration = new(
        "Comprehend_20171127.StartFlywheelIteration");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartFlywheelIteration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127StartFlywheelIteration => onComprehend20171127StartFlywheelIteration(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartFlywheelIteration, Action<string> otherwise)
    {
        if (this == Comprehend20171127StartFlywheelIteration) onComprehend20171127StartFlywheelIteration();
        else otherwise(Value);
    }
}
