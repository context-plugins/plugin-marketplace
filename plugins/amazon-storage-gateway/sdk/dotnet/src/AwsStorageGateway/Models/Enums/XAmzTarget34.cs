using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget34>))]
public sealed record XAmzTarget34 : OpenStringEnum<XAmzTarget34>
{
    private XAmzTarget34(string value) : base(value)
    {
    }

    public static readonly XAmzTarget34 StorageGateway20130630CreateStorediScsiVolume = new(
        "StorageGateway_20130630.CreateStorediSCSIVolume");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CreateStorediScsiVolume,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630CreateStorediScsiVolume => onStorageGateway20130630CreateStorediScsiVolume(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CreateStorediScsiVolume, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CreateStorediScsiVolume) onStorageGateway20130630CreateStorediScsiVolume();
        else otherwise(Value);
    }
}
