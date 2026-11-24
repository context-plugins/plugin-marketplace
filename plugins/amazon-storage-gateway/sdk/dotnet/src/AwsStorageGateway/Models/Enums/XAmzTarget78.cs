using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget78>))]
public sealed record XAmzTarget78 : OpenStringEnum<XAmzTarget78>
{
    private XAmzTarget78(string value) : base(value)
    {
    }

    public static readonly XAmzTarget78 StorageGateway20130630ListVolumeRecoveryPoints = new(
        "StorageGateway_20130630.ListVolumeRecoveryPoints");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListVolumeRecoveryPoints,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630ListVolumeRecoveryPoints => onStorageGateway20130630ListVolumeRecoveryPoints(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListVolumeRecoveryPoints, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListVolumeRecoveryPoints) onStorageGateway20130630ListVolumeRecoveryPoints();
        else otherwise(Value);
    }
}
