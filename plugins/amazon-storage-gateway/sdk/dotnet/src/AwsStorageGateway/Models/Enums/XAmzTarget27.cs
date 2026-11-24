using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget27>))]
public sealed record XAmzTarget27 : OpenStringEnum<XAmzTarget27>
{
    private XAmzTarget27(string value) : base(value)
    {
    }

    public static readonly XAmzTarget27 StorageGateway20130630DescribeNfsFileShares = new(
        "StorageGateway_20130630.DescribeNFSFileShares");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeNfsFileShares,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeNfsFileShares => onStorageGateway20130630DescribeNfsFileShares(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeNfsFileShares, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeNfsFileShares) onStorageGateway20130630DescribeNfsFileShares();
        else otherwise(Value);
    }
}
