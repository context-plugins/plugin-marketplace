using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// The storage class that is associated with the new custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StorageClass>))]
public sealed record StorageClass : OpenStringEnum<StorageClass>
{
    private StorageClass(string value) : base(value)
    {
    }

    public static readonly StorageClass DeepArchive = new("DEEP_ARCHIVE");

    public static readonly StorageClass Glacier = new("GLACIER");

    public TResult Match<TResult>(Func<TResult> onDeepArchive,
        Func<TResult> onGlacier,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeepArchive => onDeepArchive(),
            _ when this == Glacier => onGlacier(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeepArchive, Action onGlacier, Action<string> otherwise)
    {
        if (this == DeepArchive) onDeepArchive();
        else if (this == Glacier) onGlacier();
        else otherwise(Value);
    }
}
