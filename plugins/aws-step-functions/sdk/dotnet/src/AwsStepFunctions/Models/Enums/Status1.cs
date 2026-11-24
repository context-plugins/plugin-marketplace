using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// The current status of the Map Run.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Running = new("RUNNING");

    public static readonly Status1 Succeeded = new("SUCCEEDED");

    public static readonly Status1 Failed = new("FAILED");

    public static readonly Status1 Aborted = new("ABORTED");

    public TResult Match<TResult>(Func<TResult> onRunning,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onAborted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Running => onRunning(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Aborted => onAborted(),
            _ => otherwise(Value)
        };

    public void Match(Action onRunning, Action onSucceeded, Action onFailed, Action onAborted, Action<string> otherwise)
    {
        if (this == Running) onRunning();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Aborted) onAborted();
        else otherwise(Value);
    }
}
