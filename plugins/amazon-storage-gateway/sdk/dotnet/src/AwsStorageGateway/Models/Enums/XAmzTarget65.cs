using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget65>))]
public sealed record XAmzTarget65 : OpenStringEnum<XAmzTarget65>
{
    private XAmzTarget65(string value) : base(value)
    {
    }

    public static readonly XAmzTarget65 StorageGateway20130630DescribeBandwidthRateLimitSchedule = new(
        "StorageGateway_20130630.DescribeBandwidthRateLimitSchedule");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeBandwidthRateLimitSchedule,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeBandwidthRateLimitSchedule => onStorageGateway20130630DescribeBandwidthRateLimitSchedule(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeBandwidthRateLimitSchedule, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DescribeBandwidthRateLimitSchedule) onStorageGateway20130630DescribeBandwidthRateLimitSchedule();
        else otherwise(Value);
    }
}
