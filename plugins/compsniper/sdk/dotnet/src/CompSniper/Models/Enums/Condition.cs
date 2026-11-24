using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Condition filter
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Condition>))]
public sealed record Condition : OpenStringEnum<Condition>
{
    private Condition(string value) : base(value)
    {
    }

    public static readonly Condition Any = new("any");

    public static readonly Condition New = new("new");

    public static readonly Condition GentlyUsed = new("gently_used");

    public static readonly Condition Used = new("used");

    public static readonly Condition Worn = new("worn");

    public TResult Match<TResult>(Func<TResult> onAny,
        Func<TResult> onNew,
        Func<TResult> onGentlyUsed,
        Func<TResult> onUsed,
        Func<TResult> onWorn,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Any => onAny(),
            _ when this == New => onNew(),
            _ when this == GentlyUsed => onGentlyUsed(),
            _ when this == Used => onUsed(),
            _ when this == Worn => onWorn(),
            _ => otherwise(Value)
        };

    public void Match(Action onAny,
        Action onNew,
        Action onGentlyUsed,
        Action onUsed,
        Action onWorn,
        Action<string> otherwise)
    {
        if (this == Any) onAny();
        else if (this == New) onNew();
        else if (this == GentlyUsed) onGentlyUsed();
        else if (this == Used) onUsed();
        else if (this == Worn) onWorn();
        else otherwise(Value);
    }
}
