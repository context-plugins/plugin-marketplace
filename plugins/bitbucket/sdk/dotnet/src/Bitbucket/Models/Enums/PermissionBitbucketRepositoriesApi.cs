using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PermissionBitbucketRepositoriesApi>))]
public sealed record PermissionBitbucketRepositoriesApi : OpenStringEnum<PermissionBitbucketRepositoriesApi>
{
    private PermissionBitbucketRepositoriesApi(string value) : base(value)
    {
    }

    public static readonly PermissionBitbucketRepositoriesApi Read = new("read");

    public static readonly PermissionBitbucketRepositoriesApi Write = new("write");

    public static readonly PermissionBitbucketRepositoriesApi Admin = new("admin");

    public static readonly PermissionBitbucketRepositoriesApi None = new("none");

    public TResult Match<TResult>(Func<TResult> onRead,
        Func<TResult> onWrite,
        Func<TResult> onAdmin,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Read => onRead(),
            _ when this == Write => onWrite(),
            _ when this == Admin => onAdmin(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onRead, Action onWrite, Action onAdmin, Action onNone, Action<string> otherwise)
    {
        if (this == Read) onRead();
        else if (this == Write) onWrite();
        else if (this == Admin) onAdmin();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
