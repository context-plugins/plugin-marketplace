using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The build outcome
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Outcome>))]
public sealed record Outcome : OpenStringEnum<Outcome>
{
    private Outcome(string value) : base(value)
    {
    }

    public static readonly Outcome Canceled = new("canceled");

    public static readonly Outcome InfrastructureFail = new("infrastructure_fail");

    public static readonly Outcome Timedout = new("timedout");

    public static readonly Outcome Failed = new("failed");

    public static readonly Outcome NoTests = new("no_tests");

    public static readonly Outcome Success = new("success");

    public TResult Match<TResult>(Func<TResult> onCanceled,
        Func<TResult> onInfrastructureFail,
        Func<TResult> onTimedout,
        Func<TResult> onFailed,
        Func<TResult> onNoTests,
        Func<TResult> onSuccess,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Canceled => onCanceled(),
            _ when this == InfrastructureFail => onInfrastructureFail(),
            _ when this == Timedout => onTimedout(),
            _ when this == Failed => onFailed(),
            _ when this == NoTests => onNoTests(),
            _ when this == Success => onSuccess(),
            _ => otherwise(Value)
        };

    public void Match(Action onCanceled,
        Action onInfrastructureFail,
        Action onTimedout,
        Action onFailed,
        Action onNoTests,
        Action onSuccess,
        Action<string> otherwise)
    {
        if (this == Canceled) onCanceled();
        else if (this == InfrastructureFail) onInfrastructureFail();
        else if (this == Timedout) onTimedout();
        else if (this == Failed) onFailed();
        else if (this == NoTests) onNoTests();
        else if (this == Success) onSuccess();
        else otherwise(Value);
    }
}
