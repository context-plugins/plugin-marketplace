using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Comparator to use
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Comparator>))]
public sealed record Comparator : OpenStringEnum<Comparator>
{
    private Comparator(string value) : base(value)
    {
    }

    public static readonly Comparator U003D = new("=");

    public static readonly Comparator U0021U003D = new("!=");

    public static readonly Comparator Exist = new("exist");

    public static readonly Comparator Exist2 = new("!exist");

    public static readonly Comparator Contain = new("contain");

    public static readonly Comparator Contain2 = new("!contain");

    public static readonly Comparator StartWith = new("startWith");

    public static readonly Comparator StartWith2 = new("!startWith");

    public static readonly Comparator EndWith = new("endWith");

    public static readonly Comparator EndWith2 = new("!endWith");

    public TResult Match<TResult>(Func<TResult> onU003D,
        Func<TResult> onU0021U003D,
        Func<TResult> onExist,
        Func<TResult> onExist2,
        Func<TResult> onContain,
        Func<TResult> onContain2,
        Func<TResult> onStartWith,
        Func<TResult> onStartWith2,
        Func<TResult> onEndWith,
        Func<TResult> onEndWith2,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == U003D => onU003D(),
            _ when this == U0021U003D => onU0021U003D(),
            _ when this == Exist => onExist(),
            _ when this == Exist2 => onExist2(),
            _ when this == Contain => onContain(),
            _ when this == Contain2 => onContain2(),
            _ when this == StartWith => onStartWith(),
            _ when this == StartWith2 => onStartWith2(),
            _ when this == EndWith => onEndWith(),
            _ when this == EndWith2 => onEndWith2(),
            _ => otherwise(Value)
        };

    public void Match(Action onU003D,
        Action onU0021U003D,
        Action onExist,
        Action onExist2,
        Action onContain,
        Action onContain2,
        Action onStartWith,
        Action onStartWith2,
        Action onEndWith,
        Action onEndWith2,
        Action<string> otherwise)
    {
        if (this == U003D) onU003D();
        else if (this == U0021U003D) onU0021U003D();
        else if (this == Exist) onExist();
        else if (this == Exist2) onExist2();
        else if (this == Contain) onContain();
        else if (this == Contain2) onContain2();
        else if (this == StartWith) onStartWith();
        else if (this == StartWith2) onStartWith2();
        else if (this == EndWith) onEndWith();
        else if (this == EndWith2) onEndWith2();
        else otherwise(Value);
    }
}
