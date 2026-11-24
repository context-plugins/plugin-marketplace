using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The state of the report. May be set to PENDING and later updated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Result1>))]
public sealed record Result1 : OpenStringEnum<Result1>
{
    private Result1(string value) : base(value)
    {
    }

    public static readonly Result1 Passed = new("PASSED");

    public static readonly Result1 Failed = new("FAILED");

    public static readonly Result1 Skipped = new("SKIPPED");

    public static readonly Result1 Ignored = new("IGNORED");

    public TResult Match<TResult>(Func<TResult> onPassed,
        Func<TResult> onFailed,
        Func<TResult> onSkipped,
        Func<TResult> onIgnored,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ when this == Skipped => onSkipped(),
            _ when this == Ignored => onIgnored(),
            _ => otherwise(Value)
        };

    public void Match(Action onPassed, Action onFailed, Action onSkipped, Action onIgnored, Action<string> otherwise)
    {
        if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else if (this == Skipped) onSkipped();
        else if (this == Ignored) onIgnored();
        else otherwise(Value);
    }
}
