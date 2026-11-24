using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget28>))]
public sealed record XAmzTarget28 : OpenStringEnum<XAmzTarget28>
{
    private XAmzTarget28(string value) : base(value)
    {
    }

    public static readonly XAmzTarget28 StorageGateway20130630UpdateNfsFileShare = new(
        "StorageGateway_20130630.UpdateNFSFileShare");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateNfsFileShare,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630UpdateNfsFileShare => onStorageGateway20130630UpdateNfsFileShare(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateNfsFileShare, Action<string> otherwise)
    {
        if (this == StorageGateway20130630UpdateNfsFileShare) onStorageGateway20130630UpdateNfsFileShare();
        else otherwise(Value);
    }
}
