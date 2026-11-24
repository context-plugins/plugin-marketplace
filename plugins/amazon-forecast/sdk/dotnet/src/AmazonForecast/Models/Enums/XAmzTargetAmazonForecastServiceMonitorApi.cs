using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceMonitorApi>))]
public sealed record XAmzTargetAmazonForecastServiceMonitorApi : OpenStringEnum<XAmzTargetAmazonForecastServiceMonitorApi>
{
    private XAmzTargetAmazonForecastServiceMonitorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceMonitorApi AmazonForecastCreateMonitor = new(
        "AmazonForecast.CreateMonitor");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateMonitor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateMonitor => onAmazonForecastCreateMonitor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateMonitor, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateMonitor) onAmazonForecastCreateMonitor();
        else otherwise(Value);
    }
}
