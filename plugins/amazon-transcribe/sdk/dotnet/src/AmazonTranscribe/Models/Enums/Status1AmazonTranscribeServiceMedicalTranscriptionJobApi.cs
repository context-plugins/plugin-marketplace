using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Lists all medical transcription jobs that have the status specified in your request. Jobs are ordered by creation date, with the newest job first.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1AmazonTranscribeServiceMedicalTranscriptionJobApi>))]
public sealed record Status1AmazonTranscribeServiceMedicalTranscriptionJobApi : OpenStringEnum<Status1AmazonTranscribeServiceMedicalTranscriptionJobApi>
{
    private Status1AmazonTranscribeServiceMedicalTranscriptionJobApi(string value) : base(value)
    {
    }

    public static readonly Status1AmazonTranscribeServiceMedicalTranscriptionJobApi Queued = new("QUEUED");

    public static readonly Status1AmazonTranscribeServiceMedicalTranscriptionJobApi InProgress = new("IN_PROGRESS");

    public static readonly Status1AmazonTranscribeServiceMedicalTranscriptionJobApi Failed = new("FAILED");

    public static readonly Status1AmazonTranscribeServiceMedicalTranscriptionJobApi Completed = new("COMPLETED");

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
