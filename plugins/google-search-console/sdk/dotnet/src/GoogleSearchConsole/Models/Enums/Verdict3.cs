using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// High-level rich results inspection result for this URL.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Verdict3>))]
public sealed record Verdict3 : OpenStringEnum<Verdict3>
{
    private Verdict3(string value) : base(value)
    {
    }

    public static readonly Verdict3 VerdictUnspecified = new("VERDICT_UNSPECIFIED");

    public static readonly Verdict3 Pass = new("PASS");

    public static readonly Verdict3 Partial = new("PARTIAL");

    public static readonly Verdict3 Fail = new("FAIL");

    public static readonly Verdict3 Neutral = new("NEUTRAL");

    public TResult Match<TResult>(Func<TResult> onVerdictUnspecified,
        Func<TResult> onPass,
        Func<TResult> onPartial,
        Func<TResult> onFail,
        Func<TResult> onNeutral,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VerdictUnspecified => onVerdictUnspecified(),
            _ when this == Pass => onPass(),
            _ when this == Partial => onPartial(),
            _ when this == Fail => onFail(),
            _ when this == Neutral => onNeutral(),
            _ => otherwise(Value)
        };

    public void Match(Action onVerdictUnspecified,
        Action onPass,
        Action onPartial,
        Action onFail,
        Action onNeutral,
        Action<string> otherwise)
    {
        if (this == VerdictUnspecified) onVerdictUnspecified();
        else if (this == Pass) onPass();
        else if (this == Partial) onPartial();
        else if (this == Fail) onFail();
        else if (this == Neutral) onNeutral();
        else otherwise(Value);
    }
}
