using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget49>))]
public sealed record XAmzTarget49 : OpenStringEnum<XAmzTarget49>
{
    private XAmzTarget49(string value) : base(value)
    {
    }

    public static readonly XAmzTarget49 StorageGateway20130630UpdateBandwidthRateLimit = new(
        "StorageGateway_20130630.UpdateBandwidthRateLimit");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630UpdateBandwidthRateLimit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630UpdateBandwidthRateLimit => onStorageGateway20130630UpdateBandwidthRateLimit(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630UpdateBandwidthRateLimit, Action<string> otherwise)
    {
        if (this == StorageGateway20130630UpdateBandwidthRateLimit) onStorageGateway20130630UpdateBandwidthRateLimit();
        else otherwise(Value);
    }
}
