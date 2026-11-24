using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget60>))]
public sealed record XAmzTarget60 : OpenStringEnum<XAmzTarget60>
{
    private XAmzTarget60(string value) : base(value)
    {
    }

    public static readonly XAmzTarget60 StorageGateway20130630UpdateSnapshotSchedule = new(
        "StorageGateway_20130630.UpdateSnapshotSchedule");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateSnapshotSchedule,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateSnapshotSchedule => onStorageGateway20130630UpdateSnapshotSchedule(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateSnapshotSchedule, Action<string> otherwise)
    {
        if (this == StorageGateway20130630UpdateSnapshotSchedule) onStorageGateway20130630UpdateSnapshotSchedule();
        else otherwise(Value);
    }
}
