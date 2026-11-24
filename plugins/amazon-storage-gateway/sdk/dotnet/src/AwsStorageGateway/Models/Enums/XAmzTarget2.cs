using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 StorageGateway20130630CreateNfsFileShare = new(
        "StorageGateway_20130630.CreateNFSFileShare");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CreateNfsFileShare,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630CreateNfsFileShare => onStorageGateway20130630CreateNfsFileShare(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CreateNfsFileShare, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CreateNfsFileShare) onStorageGateway20130630CreateNfsFileShare();
        else otherwise(Value);
    }
}
