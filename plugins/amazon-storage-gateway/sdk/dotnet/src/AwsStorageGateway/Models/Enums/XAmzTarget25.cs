using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget25>))]
public sealed record XAmzTarget25 : OpenStringEnum<XAmzTarget25>
{
    private XAmzTarget25(string value) : base(value)
    {
    }

    public static readonly XAmzTarget25 StorageGateway20130630CreateCachediScsiVolume = new(
        "StorageGateway_20130630.CreateCachediSCSIVolume");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CreateCachediScsiVolume,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630CreateCachediScsiVolume => onStorageGateway20130630CreateCachediScsiVolume(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CreateCachediScsiVolume, Action<string> otherwise)
    {
        if (this == StorageGateway20130630CreateCachediScsiVolume) onStorageGateway20130630CreateCachediScsiVolume();
        else otherwise(Value);
    }
}
