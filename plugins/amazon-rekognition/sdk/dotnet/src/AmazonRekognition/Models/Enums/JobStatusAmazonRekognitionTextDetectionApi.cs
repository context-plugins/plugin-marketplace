using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Current status of the text detection job.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobStatusAmazonRekognitionTextDetectionApi>))]
public sealed record JobStatusAmazonRekognitionTextDetectionApi : OpenStringEnum<JobStatusAmazonRekognitionTextDetectionApi>
{
    private JobStatusAmazonRekognitionTextDetectionApi(string value) : base(value)
    {
    }

    public static readonly JobStatusAmazonRekognitionTextDetectionApi InProgress = new("IN_PROGRESS");

    public static readonly JobStatusAmazonRekognitionTextDetectionApi Succeeded = new("SUCCEEDED");

    public static readonly JobStatusAmazonRekognitionTextDetectionApi Failed = new("FAILED");

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
