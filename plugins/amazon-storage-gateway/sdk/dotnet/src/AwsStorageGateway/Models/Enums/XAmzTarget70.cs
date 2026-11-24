using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget70>))]
public sealed record XAmzTarget70 : OpenStringEnum<XAmzTarget70>
{
    private XAmzTarget70(string value) : base(value)
    {
    }

    public static readonly XAmzTarget70 StorageGateway20130630UpdateGatewayInformation = new(
        "StorageGateway_20130630.UpdateGatewayInformation");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateGatewayInformation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateGatewayInformation => onStorageGateway20130630UpdateGatewayInformation(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateGatewayInformation, Action<string> otherwise)
    {
        if (this == StorageGateway20130630UpdateGatewayInformation) onStorageGateway20130630UpdateGatewayInformation();
        else otherwise(Value);
    }
}
