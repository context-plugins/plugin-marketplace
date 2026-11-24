using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget58>))]
public sealed record XAmzTarget58 : OpenStringEnum<XAmzTarget58>
{
    private XAmzTarget58(string value) : base(value)
    {
    }

    public static readonly XAmzTarget58 StorageGateway20130630DeleteSnapshotSchedule = new(
        "StorageGateway_20130630.DeleteSnapshotSchedule");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteSnapshotSchedule,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DeleteSnapshotSchedule => onStorageGateway20130630DeleteSnapshotSchedule(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteSnapshotSchedule, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteSnapshotSchedule) onStorageGateway20130630DeleteSnapshotSchedule();
        else otherwise(Value);
    }
}
