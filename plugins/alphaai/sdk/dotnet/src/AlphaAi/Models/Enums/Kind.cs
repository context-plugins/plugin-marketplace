using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind EarningsRelease = new("earnings_release");

    public TResult Match<TResult>(Func<TResult> onEarningsRelease, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EarningsRelease => onEarningsRelease(),
            _ => otherwise(Value)
        };

    public void Match(Action onEarningsRelease, Action<string> otherwise)
    {
        if (this == EarningsRelease) onEarningsRelease();
        else otherwise(Value);
    }
}
