using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi>))]
public sealed record XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi : OpenStringEnum<XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi>
{
    private XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi StorageGateway20130630AssignTapePool = new(
        "StorageGateway_20130630.AssignTapePool");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630AssignTapePool,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630AssignTapePool => onStorageGateway20130630AssignTapePool(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630AssignTapePool, Action<string> otherwise)
    {
        if (this == StorageGateway20130630AssignTapePool) onStorageGateway20130630AssignTapePool();
        else otherwise(Value);
    }
}
