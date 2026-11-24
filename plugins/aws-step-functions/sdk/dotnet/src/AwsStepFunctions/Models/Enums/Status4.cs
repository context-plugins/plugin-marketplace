using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// The current status of the execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status4>))]
public sealed record Status4 : OpenStringEnum<Status4>
{
    private Status4(string value) : base(value)
    {
    }

    public static readonly Status4 Succeeded = new("SUCCEEDED");

    public static readonly Status4 Failed = new("FAILED");

    public static readonly Status4 TimedOut = new("TIMED_OUT");

    public TResult Match<TResult>(Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onTimedOut,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == TimedOut => onTimedOut(),
            _ => otherwise(Value)
        };

    public void Match(Action onSucceeded, Action onFailed, Action onTimedOut, Action<string> otherwise)
    {
        if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == TimedOut) onTimedOut();
        else otherwise(Value);
    }
}
