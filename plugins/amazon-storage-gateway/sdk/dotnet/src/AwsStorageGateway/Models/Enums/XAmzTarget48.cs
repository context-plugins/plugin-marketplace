using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget48>))]
public sealed record XAmzTarget48 : OpenStringEnum<XAmzTarget48>
{
    private XAmzTarget48(string value) : base(value)
    {
    }

    public static readonly XAmzTarget48 StorageGateway20130630DescribeBandwidthRateLimit = new(
        "StorageGateway_20130630.DescribeBandwidthRateLimit");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeBandwidthRateLimit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeBandwidthRateLimit => onStorageGateway20130630DescribeBandwidthRateLimit(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeBandwidthRateLimit, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DescribeBandwidthRateLimit) onStorageGateway20130630DescribeBandwidthRateLimit();
        else otherwise(Value);
    }
}
