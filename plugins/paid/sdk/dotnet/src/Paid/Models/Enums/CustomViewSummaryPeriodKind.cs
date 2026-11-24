using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// 'relative' = a rolling window ending today (set <c>unit</c> + <c>amount</c>); 'absolute' = a fixed calendar range (set <c>start</c> + <c>end</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomViewSummaryPeriodKind>))]
public sealed record CustomViewSummaryPeriodKind : OpenStringEnum<CustomViewSummaryPeriodKind>
{
    private CustomViewSummaryPeriodKind(string value) : base(value)
    {
    }

    public static readonly CustomViewSummaryPeriodKind Relative = new("relative");

    public static readonly CustomViewSummaryPeriodKind Absolute = new("absolute");

    public TResult Match<TResult>(Func<TResult> onRelative,
        Func<TResult> onAbsolute,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Relative => onRelative(),
            _ when this == Absolute => onAbsolute(),
            _ => otherwise(Value)
        };

    public void Match(Action onRelative, Action onAbsolute, Action<string> otherwise)
    {
        if (this == Relative) onRelative();
        else if (this == Absolute) onAbsolute();
        else otherwise(Value);
    }
}
