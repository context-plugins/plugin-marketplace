using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget67>))]
public sealed record XAmzTarget67 : OpenStringEnum<XAmzTarget67>
{
    private XAmzTarget67(string value) : base(value)
    {
    }

    public static readonly XAmzTarget67 StorageGateway20130630DescribeFileSystemAssociations = new(
        "StorageGateway_20130630.DescribeFileSystemAssociations");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeFileSystemAssociations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeFileSystemAssociations => onStorageGateway20130630DescribeFileSystemAssociations(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeFileSystemAssociations, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DescribeFileSystemAssociations) onStorageGateway20130630DescribeFileSystemAssociations();
        else otherwise(Value);
    }
}
