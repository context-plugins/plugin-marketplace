using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Verdict indicates the assessment result.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Verdict1>))]
public sealed record Verdict1 : OpenStringEnum<Verdict1>
{
    private Verdict1(string value) : base(value)
    {
    }

    public static readonly Verdict1 VerdictUnspecified = new("VERDICT_UNSPECIFIED");

    public static readonly Verdict1 Pass = new("PASS");

    public static readonly Verdict1 Fail = new("FAIL");

    public static readonly Verdict1 NotApplicable = new("NOT_APPLICABLE");

    public TResult Match<TResult>(Func<TResult> onVerdictUnspecified,
        Func<TResult> onPass,
        Func<TResult> onFail,
        Func<TResult> onNotApplicable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VerdictUnspecified => onVerdictUnspecified(),
            _ when this == Pass => onPass(),
            _ when this == Fail => onFail(),
            _ when this == NotApplicable => onNotApplicable(),
            _ => otherwise(Value)
        };

    public void Match(Action onVerdictUnspecified,
        Action onPass,
        Action onFail,
        Action onNotApplicable,
        Action<string> otherwise)
    {
        if (this == VerdictUnspecified) onVerdictUnspecified();
        else if (this == Pass) onPass();
        else if (this == Fail) onFail();
        else if (this == NotApplicable) onNotApplicable();
        else otherwise(Value);
    }
}
