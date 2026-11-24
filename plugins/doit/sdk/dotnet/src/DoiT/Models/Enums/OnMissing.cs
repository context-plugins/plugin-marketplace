using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// What happens when every source is missing or empty on a matching row. "useFallback" (default) emits the fallback value, which is required in that mode; "nextRule" lets the row fall through to the next rule in the group.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OnMissing>))]
public sealed record OnMissing : OpenStringEnum<OnMissing>
{
    private OnMissing(string value) : base(value)
    {
    }

    public static readonly OnMissing UseFallback = new("useFallback");

    public static readonly OnMissing NextRule = new("nextRule");

    public TResult Match<TResult>(Func<TResult> onUseFallback,
        Func<TResult> onNextRule,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UseFallback => onUseFallback(),
            _ when this == NextRule => onNextRule(),
            _ => otherwise(Value)
        };

    public void Match(Action onUseFallback, Action onNextRule, Action<string> otherwise)
    {
        if (this == UseFallback) onUseFallback();
        else if (this == NextRule) onNextRule();
        else otherwise(Value);
    }
}
