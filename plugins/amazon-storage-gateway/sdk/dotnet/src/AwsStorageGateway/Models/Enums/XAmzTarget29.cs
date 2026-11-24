using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget29>))]
public sealed record XAmzTarget29 : OpenStringEnum<XAmzTarget29>
{
    private XAmzTarget29(string value) : base(value)
    {
    }

    public static readonly XAmzTarget29 StorageGateway20130630CreateSmbFileShare = new(
        "StorageGateway_20130630.CreateSMBFileShare");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CreateSmbFileShare,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630CreateSmbFileShare => onStorageGateway20130630CreateSmbFileShare(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CreateSmbFileShare, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CreateSmbFileShare) onStorageGateway20130630CreateSmbFileShare();
        else otherwise(Value);
    }
}
