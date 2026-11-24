using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Index status of the AMP URL.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AmpIndexStatusVerdict>))]
public sealed record AmpIndexStatusVerdict : OpenStringEnum<AmpIndexStatusVerdict>
{
    private AmpIndexStatusVerdict(string value) : base(value)
    {
    }

    public static readonly AmpIndexStatusVerdict VerdictUnspecified = new("VERDICT_UNSPECIFIED");

    public static readonly AmpIndexStatusVerdict Pass = new("PASS");

    public static readonly AmpIndexStatusVerdict Partial = new("PARTIAL");

    public static readonly AmpIndexStatusVerdict Fail = new("FAIL");

    public static readonly AmpIndexStatusVerdict Neutral = new("NEUTRAL");

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
