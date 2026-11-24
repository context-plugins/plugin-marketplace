using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget47>))]
public sealed record XAmzTarget47 : OpenStringEnum<XAmzTarget47>
{
    private XAmzTarget47(string value) : base(value)
    {
    }

    public static readonly XAmzTarget47 StorageGateway20130630DeleteBandwidthRateLimit = new(
        "StorageGateway_20130630.DeleteBandwidthRateLimit");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DeleteBandwidthRateLimit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DeleteBandwidthRateLimit => onStorageGateway20130630DeleteBandwidthRateLimit(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DeleteBandwidthRateLimit, Action<string> otherwise)
    {
        if (this == StorageGateway20130630DeleteBandwidthRateLimit) onStorageGateway20130630DeleteBandwidthRateLimit();
        else otherwise(Value);
    }
}
