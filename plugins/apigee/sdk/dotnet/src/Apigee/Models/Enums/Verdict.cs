using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Verdict>))]
public sealed record Verdict : OpenStringEnum<Verdict>
{
    private Verdict(string value) : base(value)
    {
    }

    public static readonly Verdict VerdictUnspecified = new("VERDICT_UNSPECIFIED");

    public static readonly Verdict None = new("NONE");

    public static readonly Verdict Fail = new("FAIL");

    public static readonly Verdict Pass = new("PASS");

    public TResult Match<TResult>(Func<TResult> onVerdictUnspecified,
        Func<TResult> onNone,
        Func<TResult> onFail,
        Func<TResult> onPass,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VerdictUnspecified => onVerdictUnspecified(),
            _ when this == None => onNone(),
            _ when this == Fail => onFail(),
            _ when this == Pass => onPass(),
            _ => otherwise(Value)
        };

    public void Match(Action onVerdictUnspecified,
        Action onNone,
        Action onFail,
        Action onPass,
        Action<string> otherwise)
    {
        if (this == VerdictUnspecified) onVerdictUnspecified();
        else if (this == None) onNone();
        else if (this == Fail) onFail();
        else if (this == Pass) onPass();
        else otherwise(Value);
    }
}
