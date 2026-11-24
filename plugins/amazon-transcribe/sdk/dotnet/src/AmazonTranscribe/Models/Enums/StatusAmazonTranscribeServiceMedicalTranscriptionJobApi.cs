using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Returns only medical transcription jobs with the specified status. Jobs are ordered by creation date, with the newest job first. If you do not include Status, all medical transcription jobs are returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonTranscribeServiceMedicalTranscriptionJobApi>))]
public sealed record StatusAmazonTranscribeServiceMedicalTranscriptionJobApi : OpenStringEnum<StatusAmazonTranscribeServiceMedicalTranscriptionJobApi>
{
    private StatusAmazonTranscribeServiceMedicalTranscriptionJobApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonTranscribeServiceMedicalTranscriptionJobApi Queued = new("QUEUED");

    public static readonly StatusAmazonTranscribeServiceMedicalTranscriptionJobApi InProgress = new("IN_PROGRESS");

    public static readonly StatusAmazonTranscribeServiceMedicalTranscriptionJobApi Failed = new("FAILED");

    public static readonly StatusAmazonTranscribeServiceMedicalTranscriptionJobApi Completed = new("COMPLETED");

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
