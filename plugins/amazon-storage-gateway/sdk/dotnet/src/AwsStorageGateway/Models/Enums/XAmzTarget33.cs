using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget33>))]
public sealed record XAmzTarget33 : OpenStringEnum<XAmzTarget33>
{
    private XAmzTarget33(string value) : base(value)
    {
    }

    public static readonly XAmzTarget33 StorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint = new(
        "StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint => onStorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint) onStorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint();
        else otherwise(Value);
    }
}
