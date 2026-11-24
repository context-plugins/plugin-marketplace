using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget15>))]
public sealed record XAmzTarget15 : OpenStringEnum<XAmzTarget15>
{
    private XAmzTarget15(string value) : base(value)
    {
    }

    public static readonly XAmzTarget15 StorageGateway20130630DescribeUploadBuffer = new(
        "StorageGateway_20130630.DescribeUploadBuffer");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeUploadBuffer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DescribeUploadBuffer => onStorageGateway20130630DescribeUploadBuffer(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeUploadBuffer, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeUploadBuffer) onStorageGateway20130630DescribeUploadBuffer();
        else otherwise(Value);
    }
}
