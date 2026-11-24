using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The current status of the sentiment detection job. If the status is FAILED, the Messages field shows the reason for the failure.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobStatus6>))]
public sealed record JobStatus6 : OpenStringEnum<JobStatus6>
{
    private JobStatus6(string value) : base(value)
    {
    }

    public static readonly JobStatus6 Submitted = new("SUBMITTED");

    public static readonly JobStatus6 InProgress = new("IN_PROGRESS");

    public static readonly JobStatus6 Completed = new("COMPLETED");

    public static readonly JobStatus6 Failed = new("FAILED");

    public static readonly JobStatus6 StopRequested = new("STOP_REQUESTED");

    public static readonly JobStatus6 Stopped = new("STOPPED");

    public TResult Match<TResult>(Func<TResult> onSubmitted,
        Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onStopRequested,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Submitted => onSubmitted(),
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == StopRequested => onStopRequested(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubmitted,
        Action onInProgress,
        Action onCompleted,
        Action onFailed,
        Action onStopRequested,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Submitted) onSubmitted();
        else if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == StopRequested) onStopRequested();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
