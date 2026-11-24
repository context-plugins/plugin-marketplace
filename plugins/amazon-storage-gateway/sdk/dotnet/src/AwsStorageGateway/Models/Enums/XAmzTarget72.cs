using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget72>))]
public sealed record XAmzTarget72 : OpenStringEnum<XAmzTarget72>
{
    private XAmzTarget72(string value) : base(value)
    {
    }

    public static readonly XAmzTarget72 StorageGateway20130630UpdateMaintenanceStartTime = new(
        "StorageGateway_20130630.UpdateMaintenanceStartTime");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateMaintenanceStartTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateMaintenanceStartTime => onStorageGateway20130630UpdateMaintenanceStartTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateMaintenanceStartTime, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630UpdateMaintenanceStartTime) onStorageGateway20130630UpdateMaintenanceStartTime();
        else otherwise(Value);
    }
}
