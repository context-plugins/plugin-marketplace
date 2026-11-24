using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies how each object's <c>timeCreated</c> metadata is preserved for transfers. If unspecified, the default behavior is the same as TIME_CREATED_SKIP. This behavior is supported for transfers to Cloud Storage buckets from Cloud Storage, Amazon S3, S3-compatible storage, and Azure sources.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeCreated>))]
public sealed record TimeCreated : OpenStringEnum<TimeCreated>
{
    private TimeCreated(string value) : base(value)
    {
    }

    public static readonly TimeCreated TimeCreatedUnspecified = new("TIME_CREATED_UNSPECIFIED");

    public static readonly TimeCreated TimeCreatedSkip = new("TIME_CREATED_SKIP");

    public static readonly TimeCreated TimeCreatedPreserveAsCustomTime = new("TIME_CREATED_PRESERVE_AS_CUSTOM_TIME");

    public TResult Match<TResult>(Func<TResult> onTimeCreatedUnspecified,
        Func<TResult> onTimeCreatedSkip,
        Func<TResult> onTimeCreatedPreserveAsCustomTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TimeCreatedUnspecified => onTimeCreatedUnspecified(),
            _ when this == TimeCreatedSkip => onTimeCreatedSkip(),
            _ when this == TimeCreatedPreserveAsCustomTime => onTimeCreatedPreserveAsCustomTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onTimeCreatedUnspecified,
        Action onTimeCreatedSkip,
        Action onTimeCreatedPreserveAsCustomTime,
        Action<string> otherwise)
    {
        if (this == TimeCreatedUnspecified) onTimeCreatedUnspecified();
        else if (this == TimeCreatedSkip) onTimeCreatedSkip();
        else if (this == TimeCreatedPreserveAsCustomTime) onTimeCreatedPreserveAsCustomTime();
        else otherwise(Value);
    }
}
