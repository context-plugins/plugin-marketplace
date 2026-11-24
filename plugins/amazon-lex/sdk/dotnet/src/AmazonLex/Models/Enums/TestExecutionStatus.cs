using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The test execution status for the test execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TestExecutionStatus>))]
public sealed record TestExecutionStatus : OpenStringEnum<TestExecutionStatus>
{
    private TestExecutionStatus(string value) : base(value)
    {
    }

    public static readonly TestExecutionStatus Pending = new("Pending");

    public static readonly TestExecutionStatus Waiting = new("Waiting");

    public static readonly TestExecutionStatus InProgress = new("InProgress");

    public static readonly TestExecutionStatus Completed = new("Completed");

    public static readonly TestExecutionStatus Failed = new("Failed");

    public static readonly TestExecutionStatus Stopping = new("Stopping");

    public static readonly TestExecutionStatus Stopped = new("Stopped");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onWaiting,
        Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onStopping,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Waiting => onWaiting(),
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Stopping => onStopping(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onWaiting,
        Action onInProgress,
        Action onCompleted,
        Action onFailed,
        Action onStopping,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Waiting) onWaiting();
        else if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Stopping) onStopping();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
