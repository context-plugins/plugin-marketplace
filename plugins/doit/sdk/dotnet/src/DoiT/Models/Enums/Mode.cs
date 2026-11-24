using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Controls how the dimension’s <c>values</c> are matched when the alert query runs. If mode is omitted, behavior defaults to is.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode IsMember = new("is");

    public static readonly Mode StartsWith = new("starts_with");

    public static readonly Mode EndsWith = new("ends_with");

    public static readonly Mode Contains = new("contains");

    public static readonly Mode Regexp = new("regexp");

    public TResult Match<TResult>(Func<TResult> onIsMember,
        Func<TResult> onStartsWith,
        Func<TResult> onEndsWith,
        Func<TResult> onContains,
        Func<TResult> onRegexp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IsMember => onIsMember(),
            _ when this == StartsWith => onStartsWith(),
            _ when this == EndsWith => onEndsWith(),
            _ when this == Contains => onContains(),
            _ when this == Regexp => onRegexp(),
            _ => otherwise(Value)
        };

    public void Match(Action onIsMember,
        Action onStartsWith,
        Action onEndsWith,
        Action onContains,
        Action onRegexp,
        Action<string> otherwise)
    {
        if (this == IsMember) onIsMember();
        else if (this == StartsWith) onStartsWith();
        else if (this == EndsWith) onEndsWith();
        else if (this == Contains) onContains();
        else if (this == Regexp) onRegexp();
        else otherwise(Value);
    }
}
