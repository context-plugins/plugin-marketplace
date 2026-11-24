using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget17>))]
public sealed record XAmzTarget17 : OpenStringEnum<XAmzTarget17>
{
    private XAmzTarget17(string value) : base(value)
    {
    }

    public static readonly XAmzTarget17 StorageGateway20130630DescribeWorkingStorage = new(
        "StorageGateway_20130630.DescribeWorkingStorage");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeWorkingStorage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeWorkingStorage => onStorageGateway20130630DescribeWorkingStorage(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeWorkingStorage, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeWorkingStorage) onStorageGateway20130630DescribeWorkingStorage();
        else otherwise(Value);
    }
}
