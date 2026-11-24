using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The status of the clinical note generation. Possible Values: IN_PROGRESS FAILED COMPLETED After audio streaming finishes, and you send a MedicalScribeSessionControlEvent event (with END_OF_SESSION as the Type), the status is set to IN_PROGRESS. If the status is COMPLETED, the analytics completed successfully, and you can find the results at the locations specified in ClinicalNoteOutputLocation and TranscriptOutputLocation. If the status is FAILED, FailureReason provides details about the failure.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonTranscribeServiceOperationsApi>))]
public sealed record StatusAmazonTranscribeServiceOperationsApi : OpenStringEnum<StatusAmazonTranscribeServiceOperationsApi>
{
    private StatusAmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonTranscribeServiceOperationsApi InProgress = new("IN_PROGRESS");

    public static readonly StatusAmazonTranscribeServiceOperationsApi Failed = new("FAILED");

    public static readonly StatusAmazonTranscribeServiceOperationsApi Completed = new("COMPLETED");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onFailed,
        Func<TResult> onCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Failed => onFailed(),
            _ when this == Completed => onCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onFailed, Action onCompleted, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Failed) onFailed();
        else if (this == Completed) onCompleted();
        else otherwise(Value);
    }
}
