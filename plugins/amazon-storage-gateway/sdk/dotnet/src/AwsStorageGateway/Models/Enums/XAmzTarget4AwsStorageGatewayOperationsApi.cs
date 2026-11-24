using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsStorageGatewayOperationsApi>))]
public sealed record XAmzTarget4AwsStorageGatewayOperationsApi : OpenStringEnum<XAmzTarget4AwsStorageGatewayOperationsApi>
{
    private XAmzTarget4AwsStorageGatewayOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsStorageGatewayOperationsApi StorageGateway20130630NotifyWhenUploaded = new(
        "StorageGateway_20130630.NotifyWhenUploaded");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630NotifyWhenUploaded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630NotifyWhenUploaded => onStorageGateway20130630NotifyWhenUploaded(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630NotifyWhenUploaded, Action<string> otherwise)
    {
        if (this == StorageGateway20130630NotifyWhenUploaded) onStorageGateway20130630NotifyWhenUploaded();
        else otherwise(Value);
    }
}
