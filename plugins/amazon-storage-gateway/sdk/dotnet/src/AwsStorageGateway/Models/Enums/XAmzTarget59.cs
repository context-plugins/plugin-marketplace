using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget59>))]
public sealed record XAmzTarget59 : OpenStringEnum<XAmzTarget59>
{
    private XAmzTarget59(string value) : base(value)
    {
    }

    public static readonly XAmzTarget59 StorageGateway20130630DescribeSnapshotSchedule = new(
        "StorageGateway_20130630.DescribeSnapshotSchedule");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeSnapshotSchedule,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeSnapshotSchedule => onStorageGateway20130630DescribeSnapshotSchedule(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeSnapshotSchedule, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeSnapshotSchedule) onStorageGateway20130630DescribeSnapshotSchedule();
        else otherwise(Value);
    }
}
