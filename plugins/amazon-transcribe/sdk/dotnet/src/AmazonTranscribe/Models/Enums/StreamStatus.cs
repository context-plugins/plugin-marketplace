using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The streaming status of the HealthScribe streaming session. Possible Values: IN_PROGRESS PAUSED FAILED COMPLETED This status is specific to real-time streaming. A COMPLETED status doesn't mean that the post-stream analytics is complete. To get status of an analytics result, check the Status field for the analytics result within the MedicalScribePostStreamAnalyticsResult. For example, you can view the status of the ClinicalNoteGenerationResult.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StreamStatus>))]
public sealed record StreamStatus : OpenStringEnum<StreamStatus>
{
    private StreamStatus(string value) : base(value)
    {
    }

    public static readonly StreamStatus InProgress = new("IN_PROGRESS");

    public static readonly StreamStatus Paused = new("PAUSED");

    public static readonly StreamStatus Failed = new("FAILED");

    public static readonly StreamStatus Completed = new("COMPLETED");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onPaused,
        Func<TResult> onFailed,
        Func<TResult> onCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Paused => onPaused(),
            _ when this == Failed => onFailed(),
            _ when this == Completed => onCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress,
        Action onPaused,
        Action onFailed,
        Action onCompleted,
        Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Paused) onPaused();
        else if (this == Failed) onFailed();
        else if (this == Completed) onCompleted();
        else otherwise(Value);
    }
}
