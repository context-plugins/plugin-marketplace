using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 StorageGateway20130630ListGateways = new("StorageGateway_20130630.ListGateways");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630ListGateways,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630ListGateways => onStorageGateway20130630ListGateways(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630ListGateways, Action<string> otherwise)
    {
        if (this == StorageGateway20130630ListGateways) onStorageGateway20130630ListGateways();
        else otherwise(Value);
    }
}
