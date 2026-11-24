using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in MedicalScribeOutput If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MedicalScribeJobStatus>))]
public sealed record MedicalScribeJobStatus : OpenStringEnum<MedicalScribeJobStatus>
{
    private MedicalScribeJobStatus(string value) : base(value)
    {
    }

    public static readonly MedicalScribeJobStatus Queued = new("QUEUED");

    public static readonly MedicalScribeJobStatus InProgress = new("IN_PROGRESS");

    public static readonly MedicalScribeJobStatus Failed = new("FAILED");

    public static readonly MedicalScribeJobStatus Completed = new("COMPLETED");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onInProgress,
        Func<TResult> onFailed,
        Func<TResult> onCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == InProgress => onInProgress(),
            _ when this == Failed => onFailed(),
            _ when this == Completed => onCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onInProgress,
        Action onFailed,
        Action onCompleted,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == InProgress) onInProgress();
        else if (this == Failed) onFailed();
        else if (this == Completed) onCompleted();
        else otherwise(Value);
    }
}
