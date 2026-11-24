using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Represents a status corresponding to the state of the session. Possible statuses are: CREATED, IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAmazonRekognitionFaceLivenessApi>))]
public sealed record StatusAmazonRekognitionFaceLivenessApi : OpenStringEnum<StatusAmazonRekognitionFaceLivenessApi>
{
    private StatusAmazonRekognitionFaceLivenessApi(string value) : base(value)
    {
    }

    public static readonly StatusAmazonRekognitionFaceLivenessApi Created = new("CREATED");

    public static readonly StatusAmazonRekognitionFaceLivenessApi InProgress = new("IN_PROGRESS");

    public static readonly StatusAmazonRekognitionFaceLivenessApi Succeeded = new("SUCCEEDED");

    public static readonly StatusAmazonRekognitionFaceLivenessApi Failed = new("FAILED");

    public static readonly StatusAmazonRekognitionFaceLivenessApi Expired = new("EXPIRED");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onInProgress,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == InProgress => onInProgress(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onInProgress,
        Action onSucceeded,
        Action onFailed,
        Action onExpired,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == InProgress) onInProgress();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
