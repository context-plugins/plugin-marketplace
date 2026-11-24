using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified, the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StorageClass>))]
public sealed record StorageClass : OpenStringEnum<StorageClass>
{
    private StorageClass(string value) : base(value)
    {
    }

    public static readonly StorageClass StorageClassUnspecified = new("STORAGE_CLASS_UNSPECIFIED");

    public static readonly StorageClass StorageClassDestinationBucketDefault = new(
        "STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT");

    public static readonly StorageClass StorageClassPreserve = new("STORAGE_CLASS_PRESERVE");

    public static readonly StorageClass StorageClassStandard = new("STORAGE_CLASS_STANDARD");

    public static readonly StorageClass StorageClassNearline = new("STORAGE_CLASS_NEARLINE");

    public static readonly StorageClass StorageClassColdline = new("STORAGE_CLASS_COLDLINE");

    public static readonly StorageClass StorageClassArchive = new("STORAGE_CLASS_ARCHIVE");

    public TResult Match<TResult>(Func<TResult> onStorageClassUnspecified,
        Func<TResult> onStorageClassDestinationBucketDefault,
        Func<TResult> onStorageClassPreserve,
        Func<TResult> onStorageClassStandard,
        Func<TResult> onStorageClassNearline,
        Func<TResult> onStorageClassColdline,
        Func<TResult> onStorageClassArchive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageClassUnspecified => onStorageClassUnspecified(),
            _ when this == StorageClassDestinationBucketDefault => onStorageClassDestinationBucketDefault(),
            _ when this == StorageClassPreserve => onStorageClassPreserve(),
            _ when this == StorageClassStandard => onStorageClassStandard(),
            _ when this == StorageClassNearline => onStorageClassNearline(),
            _ when this == StorageClassColdline => onStorageClassColdline(),
            _ when this == StorageClassArchive => onStorageClassArchive(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageClassUnspecified,
        Action onStorageClassDestinationBucketDefault,
        Action onStorageClassPreserve,
        Action onStorageClassStandard,
        Action onStorageClassNearline,
        Action onStorageClassColdline,
        Action onStorageClassArchive,
        Action<string> otherwise)
    {
        if (this == StorageClassUnspecified) onStorageClassUnspecified();
        else if (this == StorageClassDestinationBucketDefault) onStorageClassDestinationBucketDefault();
        else if (this == StorageClassPreserve) onStorageClassPreserve();
        else if (this == StorageClassStandard) onStorageClassStandard();
        else if (this == StorageClassNearline) onStorageClassNearline();
        else if (this == StorageClassColdline) onStorageClassColdline();
        else if (this == StorageClassArchive) onStorageClassArchive();
        else otherwise(Value);
    }
}
