using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Acl>))]
public sealed record Acl : OpenStringEnum<Acl>
{
    private Acl(string value) : base(value)
    {
    }

    public static readonly Acl AclUnspecified = new("ACL_UNSPECIFIED");

    public static readonly Acl AclDestinationBucketDefault = new("ACL_DESTINATION_BUCKET_DEFAULT");

    public static readonly Acl AclPreserve = new("ACL_PRESERVE");

    public TResult Match<TResult>(Func<TResult> onAclUnspecified,
        Func<TResult> onAclDestinationBucketDefault,
        Func<TResult> onAclPreserve,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AclUnspecified => onAclUnspecified(),
            _ when this == AclDestinationBucketDefault => onAclDestinationBucketDefault(),
            _ when this == AclPreserve => onAclPreserve(),
            _ => otherwise(Value)
        };

    public void Match(Action onAclUnspecified,
        Action onAclDestinationBucketDefault,
        Action onAclPreserve,
        Action<string> otherwise)
    {
        if (this == AclUnspecified) onAclUnspecified();
        else if (this == AclDestinationBucketDefault) onAclDestinationBucketDefault();
        else if (this == AclPreserve) onAclPreserve();
        else otherwise(Value);
    }
}
