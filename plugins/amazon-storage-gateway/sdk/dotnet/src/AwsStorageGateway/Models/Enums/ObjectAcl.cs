using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is private.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ObjectAcl>))]
public sealed record ObjectAcl : OpenStringEnum<ObjectAcl>
{
    private ObjectAcl(string value) : base(value)
    {
    }

    public static readonly ObjectAcl Private = new("private");

    public static readonly ObjectAcl PublicRead = new("public-read");

    public static readonly ObjectAcl PublicReadWrite = new("public-read-write");

    public static readonly ObjectAcl AuthenticatedRead = new("authenticated-read");

    public static readonly ObjectAcl BucketOwnerRead = new("bucket-owner-read");

    public static readonly ObjectAcl BucketOwnerFullControl = new("bucket-owner-full-control");

    public static readonly ObjectAcl AwsExecRead = new("aws-exec-read");

    public TResult Match<TResult>(Func<TResult> onPrivate,
        Func<TResult> onPublicRead,
        Func<TResult> onPublicReadWrite,
        Func<TResult> onAuthenticatedRead,
        Func<TResult> onBucketOwnerRead,
        Func<TResult> onBucketOwnerFullControl,
        Func<TResult> onAwsExecRead,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Private => onPrivate(),
            _ when this == PublicRead => onPublicRead(),
            _ when this == PublicReadWrite => onPublicReadWrite(),
            _ when this == AuthenticatedRead => onAuthenticatedRead(),
            _ when this == BucketOwnerRead => onBucketOwnerRead(),
            _ when this == BucketOwnerFullControl => onBucketOwnerFullControl(),
            _ when this == AwsExecRead => onAwsExecRead(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrivate,
        Action onPublicRead,
        Action onPublicReadWrite,
        Action onAuthenticatedRead,
        Action onBucketOwnerRead,
        Action onBucketOwnerFullControl,
        Action onAwsExecRead,
        Action<string> otherwise)
    {
        if (this == Private) onPrivate();
        else if (this == PublicRead) onPublicRead();
        else if (this == PublicReadWrite) onPublicReadWrite();
        else if (this == AuthenticatedRead) onAuthenticatedRead();
        else if (this == BucketOwnerRead) onBucketOwnerRead();
        else if (this == BucketOwnerFullControl) onBucketOwnerFullControl();
        else if (this == AwsExecRead) onAwsExecRead();
        else otherwise(Value);
    }
}
