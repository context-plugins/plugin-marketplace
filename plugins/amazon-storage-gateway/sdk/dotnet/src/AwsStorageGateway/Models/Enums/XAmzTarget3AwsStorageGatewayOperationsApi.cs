using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsStorageGatewayOperationsApi>))]
public sealed record XAmzTarget3AwsStorageGatewayOperationsApi : OpenStringEnum<XAmzTarget3AwsStorageGatewayOperationsApi>
{
    private XAmzTarget3AwsStorageGatewayOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsStorageGatewayOperationsApi StorageGateway20130630JoinDomain = new(
        "StorageGateway_20130630.JoinDomain");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630JoinDomain, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630JoinDomain => onStorageGateway20130630JoinDomain(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630JoinDomain, Action<string> otherwise)
    {
        if (this == StorageGateway20130630JoinDomain) onStorageGateway20130630JoinDomain();
        else otherwise(Value);
    }
}
