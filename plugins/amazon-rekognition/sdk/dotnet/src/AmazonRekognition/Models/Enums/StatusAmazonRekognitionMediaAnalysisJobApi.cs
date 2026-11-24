using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The current status of the media analysis job.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonRekognitionMediaAnalysisJobApi>))]
public sealed record StatusAmazonRekognitionMediaAnalysisJobApi : OpenStringEnum<StatusAmazonRekognitionMediaAnalysisJobApi>
{
    private StatusAmazonRekognitionMediaAnalysisJobApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonRekognitionMediaAnalysisJobApi Created = new("CREATED");

    public static readonly StatusAmazonRekognitionMediaAnalysisJobApi Queued = new("QUEUED");

    public static readonly StatusAmazonRekognitionMediaAnalysisJobApi InProgress = new("IN_PROGRESS");

    public static readonly StatusAmazonRekognitionMediaAnalysisJobApi Succeeded = new("SUCCEEDED");

    public static readonly StatusAmazonRekognitionMediaAnalysisJobApi Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onQueued,
        Func<TResult> onInProgress,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Queued => onQueued(),
            _ when this == InProgress => onInProgress(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onQueued,
        Action onInProgress,
        Action onSucceeded,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Queued) onQueued();
        else if (this == InProgress) onInProgress();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
