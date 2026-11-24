using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The status of the job: SUBMITTED - The job has been received and queued for processing. IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully completed and the output is available. FAILED - The job did not complete. For details, use the DescribeDocumentClassificationJob operation. STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is processing the request. STOPPED - The job was successfully stopped without completing.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobStatus18>))]
public sealed record JobStatus18 : OpenStringEnum<JobStatus18>
{
    private JobStatus18(string value) : base(value)
    {
    }

    public static readonly JobStatus18 Submitted = new("SUBMITTED");

    public static readonly JobStatus18 InProgress = new("IN_PROGRESS");

    public static readonly JobStatus18 Completed = new("COMPLETED");

    public static readonly JobStatus18 Failed = new("FAILED");

    public static readonly JobStatus18 StopRequested = new("STOP_REQUESTED");

    public static readonly JobStatus18 Stopped = new("STOPPED");

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
