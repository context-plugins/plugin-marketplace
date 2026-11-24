using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The status of the job: SUBMITTED - The job has been received and is queued for processing. IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED - The job did not complete. To get details, use the DescribeTopicDetectionJob operation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobStatus26>))]
public sealed record JobStatus26 : OpenStringEnum<JobStatus26>
{
    private JobStatus26(string value) : base(value)
    {
    }

    public static readonly JobStatus26 Submitted = new("SUBMITTED");

    public static readonly JobStatus26 InProgress = new("IN_PROGRESS");

    public static readonly JobStatus26 Completed = new("COMPLETED");

    public static readonly JobStatus26 Failed = new("FAILED");

    public static readonly JobStatus26 StopRequested = new("STOP_REQUESTED");

    public static readonly JobStatus26 Stopped = new("STOPPED");

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
