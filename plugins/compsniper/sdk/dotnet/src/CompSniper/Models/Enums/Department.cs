using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Department filter
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Department>))]
public sealed record Department : OpenStringEnum<Department>
{
    private Department(string value) : base(value)
    {
    }

    public static readonly Department Any = new("any");

    public static readonly Department Menswear = new("menswear");

    public static readonly Department Womenswear = new("womenswear");

    public TResult Match<TResult>(Func<TResult> onAny,
        Func<TResult> onMenswear,
        Func<TResult> onWomenswear,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Any => onAny(),
            _ when this == Menswear => onMenswear(),
            _ when this == Womenswear => onWomenswear(),
            _ => otherwise(Value)
        };

    public void Match(Action onAny, Action onMenswear, Action onWomenswear, Action<string> otherwise)
    {
        if (this == Any) onAny();
        else if (this == Menswear) onMenswear();
        else if (this == Womenswear) onWomenswear();
        else otherwise(Value);
    }
}
