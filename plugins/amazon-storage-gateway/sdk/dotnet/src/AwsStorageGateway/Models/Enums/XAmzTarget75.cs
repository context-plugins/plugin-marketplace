using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget75>))]
public sealed record XAmzTarget75 : OpenStringEnum<XAmzTarget75>
{
    private XAmzTarget75(string value) : base(value)
    {
    }

    public static readonly XAmzTarget75 StorageGateway20130630DescribeVtlDevices = new(
        "StorageGateway_20130630.DescribeVTLDevices");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeVtlDevices,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DescribeVtlDevices => onStorageGateway20130630DescribeVtlDevices(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeVtlDevices, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeVtlDevices) onStorageGateway20130630DescribeVtlDevices();
        else otherwise(Value);
    }
}
