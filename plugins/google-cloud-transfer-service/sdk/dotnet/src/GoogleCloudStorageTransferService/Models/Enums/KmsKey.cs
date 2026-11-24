using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as KMS_KEY_DESTINATION_BUCKET_DEFAULT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<KmsKey>))]
public sealed record KmsKey : OpenStringEnum<KmsKey>
{
    private KmsKey(string value) : base(value)
    {
    }

    public static readonly KmsKey KmsKeyUnspecified = new("KMS_KEY_UNSPECIFIED");

    public static readonly KmsKey KmsKeyDestinationBucketDefault = new("KMS_KEY_DESTINATION_BUCKET_DEFAULT");

    public static readonly KmsKey KmsKeyPreserve = new("KMS_KEY_PRESERVE");

    public TResult Match<TResult>(Func<TResult> onKmsKeyUnspecified,
        Func<TResult> onKmsKeyDestinationBucketDefault,
        Func<TResult> onKmsKeyPreserve,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == KmsKeyUnspecified => onKmsKeyUnspecified(),
            _ when this == KmsKeyDestinationBucketDefault => onKmsKeyDestinationBucketDefault(),
            _ when this == KmsKeyPreserve => onKmsKeyPreserve(),
            _ => otherwise(Value)
        };

    public void Match(Action onKmsKeyUnspecified,
        Action onKmsKeyDestinationBucketDefault,
        Action onKmsKeyPreserve,
        Action<string> otherwise)
    {
        if (this == KmsKeyUnspecified) onKmsKeyUnspecified();
        else if (this == KmsKeyDestinationBucketDefault) onKmsKeyDestinationBucketDefault();
        else if (this == KmsKeyPreserve) onKmsKeyPreserve();
        else otherwise(Value);
    }
}
