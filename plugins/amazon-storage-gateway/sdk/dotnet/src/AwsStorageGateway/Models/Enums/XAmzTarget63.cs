using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget63>))]
public sealed record XAmzTarget63 : OpenStringEnum<XAmzTarget63>
{
    private XAmzTarget63(string value) : base(value)
    {
    }

    public static readonly XAmzTarget63 StorageGateway20130630DescribeAvailabilityMonitorTest = new(
        "StorageGateway_20130630.DescribeAvailabilityMonitorTest");

    public TResult Match<TResult>(Func<TResult> onStorageGateway20130630DescribeAvailabilityMonitorTest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                StorageGateway20130630DescribeAvailabilityMonitorTest => onStorageGateway20130630DescribeAvailabilityMonitorTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onStorageGateway20130630DescribeAvailabilityMonitorTest, Action<string> otherwise)
    {
        if (this ==
            StorageGateway20130630DescribeAvailabilityMonitorTest) onStorageGateway20130630DescribeAvailabilityMonitorTest();
        else otherwise(Value);
    }
}
