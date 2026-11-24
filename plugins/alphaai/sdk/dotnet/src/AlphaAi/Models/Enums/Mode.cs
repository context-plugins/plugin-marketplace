using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// See the endpoint description.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Strict = new("strict");

    public static readonly Mode Broadened = new("broadened");

    public static readonly Mode NoMatch = new("no_match");

    public static readonly Mode NoTerms = new("no_terms");

    public TResult Match<TResult>(Func<TResult> onStrict,
        Func<TResult> onBroadened,
        Func<TResult> onNoMatch,
        Func<TResult> onNoTerms,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Strict => onStrict(),
            _ when this == Broadened => onBroadened(),
            _ when this == NoMatch => onNoMatch(),
            _ when this == NoTerms => onNoTerms(),
            _ => otherwise(Value)
        };

    public void Match(Action onStrict, Action onBroadened, Action onNoMatch, Action onNoTerms, Action<string> otherwise)
    {
        if (this == Strict) onStrict();
        else if (this == Broadened) onBroadened();
        else if (this == NoMatch) onNoMatch();
        else if (this == NoTerms) onNoTerms();
        else otherwise(Value);
    }
}
