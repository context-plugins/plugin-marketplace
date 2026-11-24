using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Filters the list of topic detection jobs based on job status. Returns only jobs with the specified status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobStatus17>))]
public sealed record JobStatus17 : OpenStringEnum<JobStatus17>
{
    private JobStatus17(string value) : base(value)
    {
    }

    public static readonly JobStatus17 Submitted = new("SUBMITTED");

    public static readonly JobStatus17 InProgress = new("IN_PROGRESS");

    public static readonly JobStatus17 Completed = new("COMPLETED");

    public static readonly JobStatus17 Failed = new("FAILED");

    public static readonly JobStatus17 StopRequested = new("STOP_REQUESTED");

    public static readonly JobStatus17 Stopped = new("STOPPED");

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
