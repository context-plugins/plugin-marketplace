using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Verdict1>))]
public sealed record Verdict1 : OpenStringEnum<Verdict1>
{
    private Verdict1(string value) : base(value)
    {
    }

    public static readonly Verdict1 VerdictUnspecified = new("VERDICT_UNSPECIFIED");

    public static readonly Verdict1 Pass = new("PASS");

    public static readonly Verdict1 Partial = new("PARTIAL");

    public static readonly Verdict1 Fail = new("FAIL");

    public static readonly Verdict1 Neutral = new("NEUTRAL");

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
