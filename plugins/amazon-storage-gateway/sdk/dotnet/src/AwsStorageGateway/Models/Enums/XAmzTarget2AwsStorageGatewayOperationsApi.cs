using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsStorageGatewayOperationsApi>))]
public sealed record XAmzTarget2AwsStorageGatewayOperationsApi : OpenStringEnum<XAmzTarget2AwsStorageGatewayOperationsApi>
{
    private XAmzTarget2AwsStorageGatewayOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsStorageGatewayOperationsApi StorageGateway20130630EvictFilesFailingUpload = new(
        "StorageGateway_20130630.EvictFilesFailingUpload");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630EvictFilesFailingUpload,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630EvictFilesFailingUpload => onStorageGateway20130630EvictFilesFailingUpload(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630EvictFilesFailingUpload, Action<string> otherwise)
    {
        if (this == StorageGateway20130630EvictFilesFailingUpload) onStorageGateway20130630EvictFilesFailingUpload();
        else otherwise(Value);
    }
}
