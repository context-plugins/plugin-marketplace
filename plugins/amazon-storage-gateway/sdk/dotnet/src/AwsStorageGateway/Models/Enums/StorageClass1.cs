using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// The storage class that is associated with the custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StorageClass1>))]
public sealed record StorageClass1 : OpenStringEnum<StorageClass1>
{
    private StorageClass1(string value) : base(value)
    {
    }

    public static readonly StorageClass1 DeepArchive = new("DEEP_ARCHIVE");

    public static readonly StorageClass1 Glacier = new("GLACIER");

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
