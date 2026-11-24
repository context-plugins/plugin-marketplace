using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget71>))]
public sealed record XAmzTarget71 : OpenStringEnum<XAmzTarget71>
{
    private XAmzTarget71(string value) : base(value)
    {
    }

    public static readonly XAmzTarget71 StorageGateway20130630DescribeMaintenanceStartTime = new(
        "StorageGateway_20130630.DescribeMaintenanceStartTime");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeMaintenanceStartTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeMaintenanceStartTime => onStorageGateway20130630DescribeMaintenanceStartTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeMaintenanceStartTime, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DescribeMaintenanceStartTime) onStorageGateway20130630DescribeMaintenanceStartTime();
        else otherwise(Value);
    }
}
