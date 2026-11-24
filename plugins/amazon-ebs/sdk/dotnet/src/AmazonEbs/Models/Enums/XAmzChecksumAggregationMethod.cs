using System;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Enum;

namespace AmazonEbs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzChecksumAggregationMethod>))]
public sealed record XAmzChecksumAggregationMethod : OpenStringEnum<XAmzChecksumAggregationMethod>
{
    private XAmzChecksumAggregationMethod(string value) : base(value)
    {
    }

    public static readonly XAmzChecksumAggregationMethod Linear = new("LINEAR");

    public TResult Match<TResult>(Func<TResult> onLinear, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Linear => onLinear(),
            _ => otherwise(Value)
        };

    public void Match(Action onLinear, Action<string> otherwise)
    {
        if (this == Linear) onLinear();
        else otherwise(Value);
    }
}
