using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FileShareType>))]
public sealed record FileShareType : OpenStringEnum<FileShareType>
{
    private FileShareType(string value) : base(value)
    {
    }

    public static readonly FileShareType Nfs = new("NFS");

    public static readonly FileShareType Smb = new("SMB");

    public TResult Match<TResult>(Func<TResult> onNfs, Func<TResult> onSmb, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Nfs => onNfs(),
            _ when this == Smb => onSmb(),
            _ => otherwise(Value)
        };

    public void Match(Action onNfs, Action onSmb, Action<string> otherwise)
    {
        if (this == Nfs) onNfs();
        else if (this == Smb) onSmb();
        else otherwise(Value);
    }
}
