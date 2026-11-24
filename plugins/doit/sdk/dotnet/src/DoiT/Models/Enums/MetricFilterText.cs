using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Text/operator used to filter metric values in metric filters (gt = greater than, lt = less than).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MetricFilterText>))]
public sealed record MetricFilterText : OpenStringEnum<MetricFilterText>
{
    private MetricFilterText(string value) : base(value)
    {
    }

    public static readonly MetricFilterText Gt = new("gt");

    public static readonly MetricFilterText Lt = new("lt");

    public TResult Match<TResult>(Func<TResult> onGt, Func<TResult> onLt, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gt => onGt(),
            _ when this == Lt => onLt(),
            _ => otherwise(Value)
        };

    public void Match(Action onGt, Action onLt, Action<string> otherwise)
    {
        if (this == Gt) onGt();
        else if (this == Lt) onLt();
        else otherwise(Value);
    }
}
