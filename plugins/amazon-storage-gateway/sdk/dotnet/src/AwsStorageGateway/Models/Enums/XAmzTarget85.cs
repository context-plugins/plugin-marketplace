using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget85>))]
public sealed record XAmzTarget85 : OpenStringEnum<XAmzTarget85>
{
    private XAmzTarget85(string value) : base(value)
    {
    }

    public static readonly XAmzTarget85 StorageGateway20130630UpdateVtlDeviceType = new(
        "StorageGateway_20130630.UpdateVTLDeviceType");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateVtlDeviceType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630UpdateVtlDeviceType => onStorageGateway20130630UpdateVtlDeviceType(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateVtlDeviceType, Action<string> otherwise)
    {
        if (this == StorageGateway20130630UpdateVtlDeviceType) onStorageGateway20130630UpdateVtlDeviceType();
        else otherwise(Value);
    }
}
