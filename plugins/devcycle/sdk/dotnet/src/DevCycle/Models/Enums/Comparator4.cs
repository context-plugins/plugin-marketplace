using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Comparator to use
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Comparator4>))]
public sealed record Comparator4 : OpenStringEnum<Comparator4>
{
    private Comparator4(string value) : base(value)
    {
    }

    public static readonly Comparator4 U003D = new("=");

    public static readonly Comparator4 U0021U003D = new("!=");

    public static readonly Comparator4 U003E = new(">");

    public static readonly Comparator4 U003EU003D = new(">=");

    public static readonly Comparator4 U003C = new("<");

    public static readonly Comparator4 U003CU003D = new("<=");

    public static readonly Comparator4 Exist = new("exist");

    public static readonly Comparator4 Exist2 = new("!exist");

    public static readonly Comparator4 Contain = new("contain");

    public static readonly Comparator4 Contain2 = new("!contain");

    public static readonly Comparator4 StartWith = new("startWith");

    public static readonly Comparator4 StartWith2 = new("!startWith");

    public static readonly Comparator4 EndWith = new("endWith");

    public static readonly Comparator4 EndWith2 = new("!endWith");

    public TResult Match<TResult>(Func<TResult> onU003D,
        Func<TResult> onU0021U003D,
        Func<TResult> onU003E,
        Func<TResult> onU003EU003D,
        Func<TResult> onU003C,
        Func<TResult> onU003CU003D,
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
            _ when this == U003E => onU003E(),
            _ when this == U003EU003D => onU003EU003D(),
            _ when this == U003C => onU003C(),
            _ when this == U003CU003D => onU003CU003D(),
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
        Action onU003E,
        Action onU003EU003D,
        Action onU003C,
        Action onU003CU003D,
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
        else if (this == U003E) onU003E();
        else if (this == U003EU003D) onU003EU003D();
        else if (this == U003C) onU003C();
        else if (this == U003CU003D) onU003CU003D();
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
