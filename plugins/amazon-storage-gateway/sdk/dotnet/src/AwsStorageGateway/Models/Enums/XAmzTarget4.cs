using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 StorageGateway20130630DescribeGatewayInformation = new(
        "StorageGateway_20130630.DescribeGatewayInformation");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeGatewayInformation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeGatewayInformation => onStorageGateway20130630DescribeGatewayInformation(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeGatewayInformation, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DescribeGatewayInformation) onStorageGateway20130630DescribeGatewayInformation();
        else otherwise(Value);
    }
}
