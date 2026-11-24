using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget81>))]
public sealed record XAmzTarget81 : OpenStringEnum<XAmzTarget81>
{
    private XAmzTarget81(string value) : base(value)
    {
    }

    public static readonly XAmzTarget81 StorageGateway20130630UpdateGatewaySoftwareNow = new(
        "StorageGateway_20130630.UpdateGatewaySoftwareNow");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateGatewaySoftwareNow,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateGatewaySoftwareNow => onStorageGateway20130630UpdateGatewaySoftwareNow(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateGatewaySoftwareNow, Action<string> otherwise)
    {
        if (this == StorageGateway20130630UpdateGatewaySoftwareNow) onStorageGateway20130630UpdateGatewaySoftwareNow();
        else otherwise(Value);
    }
}
