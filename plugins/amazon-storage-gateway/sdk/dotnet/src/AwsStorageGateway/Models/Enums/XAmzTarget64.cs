using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget64>))]
public sealed record XAmzTarget64 : OpenStringEnum<XAmzTarget64>
{
    private XAmzTarget64(string value) : base(value)
    {
    }

    public static readonly XAmzTarget64 StorageGateway20130630StartAvailabilityMonitorTest = new(
        "StorageGateway_20130630.StartAvailabilityMonitorTest");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630StartAvailabilityMonitorTest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630StartAvailabilityMonitorTest => onStorageGateway20130630StartAvailabilityMonitorTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630StartAvailabilityMonitorTest, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630StartAvailabilityMonitorTest) onStorageGateway20130630StartAvailabilityMonitorTest();
        else otherwise(Value);
    }
}
