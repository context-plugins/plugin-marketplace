using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget66>))]
public sealed record XAmzTarget66 : OpenStringEnum<XAmzTarget66>
{
    private XAmzTarget66(string value) : base(value)
    {
    }

    public static readonly XAmzTarget66 StorageGateway20130630UpdateBandwidthRateLimitSchedule = new(
        "StorageGateway_20130630.UpdateBandwidthRateLimitSchedule");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateBandwidthRateLimitSchedule,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateBandwidthRateLimitSchedule => onStorageGateway20130630UpdateBandwidthRateLimitSchedule(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateBandwidthRateLimitSchedule, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630UpdateBandwidthRateLimitSchedule) onStorageGateway20130630UpdateBandwidthRateLimitSchedule();
        else otherwise(Value);
    }
}
