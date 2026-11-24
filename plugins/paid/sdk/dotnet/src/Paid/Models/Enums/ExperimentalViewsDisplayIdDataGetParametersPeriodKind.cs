using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExperimentalViewsDisplayIdDataGetParametersPeriodKind>))]
public sealed record ExperimentalViewsDisplayIdDataGetParametersPeriodKind : OpenStringEnum<ExperimentalViewsDisplayIdDataGetParametersPeriodKind>
{
    private ExperimentalViewsDisplayIdDataGetParametersPeriodKind(string value) : base(value)
    {
    }

    public static readonly ExperimentalViewsDisplayIdDataGetParametersPeriodKind Relative = new("relative");

    public static readonly ExperimentalViewsDisplayIdDataGetParametersPeriodKind Absolute = new("absolute");

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
