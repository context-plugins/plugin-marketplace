using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9>))]
public sealed record XAmzTarget9 : OpenStringEnum<XAmzTarget9>
{
    private XAmzTarget9(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9 StorageGateway20130630DescribeCache = new(
        "StorageGateway_20130630.DescribeCache");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeCache,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StorageGateway20130630DescribeCache => onStorageGateway20130630DescribeCache(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeCache, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeCache) onStorageGateway20130630DescribeCache();
        else otherwise(Value);
    }
}
