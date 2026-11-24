using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget78>))]
public sealed record XAmzTarget78 : OpenStringEnum<XAmzTarget78>
{
    private XAmzTarget78(string value) : base(value)
    {
    }

    public static readonly XAmzTarget78 Comprehend20171127ListFlywheelIterationHistory = new(
        "Comprehend_20171127.ListFlywheelIterationHistory");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListFlywheelIterationHistory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListFlywheelIterationHistory => onComprehend20171127ListFlywheelIterationHistory(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListFlywheelIterationHistory, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListFlywheelIterationHistory) onComprehend20171127ListFlywheelIterationHistory();
        else otherwise(Value);
    }
}
