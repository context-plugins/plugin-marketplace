using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget51>))]
public sealed record XAmzTarget51 : OpenStringEnum<XAmzTarget51>
{
    private XAmzTarget51(string value) : base(value)
    {
    }

    public static readonly XAmzTarget51 StorageGateway20130630DescribeChapCredentials = new(
        "StorageGateway_20130630.DescribeChapCredentials");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeChapCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeChapCredentials => onStorageGateway20130630DescribeChapCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeChapCredentials, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DescribeChapCredentials) onStorageGateway20130630DescribeChapCredentials();
        else otherwise(Value);
    }
}
