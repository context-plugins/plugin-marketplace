using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The state of the report. May be set to PENDING and later updated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Result>))]
public sealed record Result : OpenStringEnum<Result>
{
    private Result(string value) : base(value)
    {
    }

    public static readonly Result Passed = new("PASSED");

    public static readonly Result Failed = new("FAILED");

    public static readonly Result Pending = new("PENDING");

    public TResult Match<TResult>(Func<TResult> onPassed,
        Func<TResult> onFailed,
        Func<TResult> onPending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ when this == Pending => onPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onPassed, Action onFailed, Action onPending, Action<string> otherwise)
    {
        if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else if (this == Pending) onPending();
        else otherwise(Value);
    }
}
