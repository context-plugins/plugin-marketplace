using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The current status of the label detection job.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobStatusAmazonRekognitionStoredVideoAnalysisApi>))]
public sealed record JobStatusAmazonRekognitionStoredVideoAnalysisApi : OpenStringEnum<JobStatusAmazonRekognitionStoredVideoAnalysisApi>
{
    private JobStatusAmazonRekognitionStoredVideoAnalysisApi(string value) : base(value)
    {
    }

    public static readonly JobStatusAmazonRekognitionStoredVideoAnalysisApi InProgress = new("IN_PROGRESS");

    public static readonly JobStatusAmazonRekognitionStoredVideoAnalysisApi Succeeded = new("SUCCEEDED");

    public static readonly JobStatusAmazonRekognitionStoredVideoAnalysisApi Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onSucceeded, Action onFailed, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
