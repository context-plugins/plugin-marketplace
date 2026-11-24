using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceMonitorApi>))]
public sealed record XAmzTarget2AmazonForecastServiceMonitorApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceMonitorApi>
{
    private XAmzTarget2AmazonForecastServiceMonitorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceMonitorApi AmazonForecastDescribeMonitor = new(
        "AmazonForecast.DescribeMonitor");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeMonitor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeMonitor => onAmazonForecastDescribeMonitor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeMonitor, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeMonitor) onAmazonForecastDescribeMonitor();
        else otherwise(Value);
    }
}
