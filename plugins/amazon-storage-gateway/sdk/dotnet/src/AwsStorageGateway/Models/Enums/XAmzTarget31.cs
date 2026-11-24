using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget31>))]
public sealed record XAmzTarget31 : OpenStringEnum<XAmzTarget31>
{
    private XAmzTarget31(string value) : base(value)
    {
    }

    public static readonly XAmzTarget31 StorageGateway20130630UpdateSmbFileShare = new(
        "StorageGateway_20130630.UpdateSMBFileShare");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateSmbFileShare,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630UpdateSmbFileShare => onStorageGateway20130630UpdateSmbFileShare(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateSmbFileShare, Action<string> otherwise)
    {
        if (this == StorageGateway20130630UpdateSmbFileShare) onStorageGateway20130630UpdateSmbFileShare();
        else otherwise(Value);
    }
}
