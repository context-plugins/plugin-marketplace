using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi>))]
public sealed record XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi : OpenStringEnum<XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi>
{
    private XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi StorageGateway20130630RefreshCache = new(
        "StorageGateway_20130630.RefreshCache");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630RefreshCache,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630RefreshCache => onStorageGateway20130630RefreshCache(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630RefreshCache, Action<string> otherwise)
    {
        if (this == StorageGateway20130630RefreshCache) onStorageGateway20130630RefreshCache();
        else otherwise(Value);
    }
}
