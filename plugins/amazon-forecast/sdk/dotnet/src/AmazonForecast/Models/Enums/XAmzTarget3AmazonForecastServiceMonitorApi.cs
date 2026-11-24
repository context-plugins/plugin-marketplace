using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceMonitorApi>))]
public sealed record XAmzTarget3AmazonForecastServiceMonitorApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceMonitorApi>
{
    private XAmzTarget3AmazonForecastServiceMonitorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceMonitorApi AmazonForecastListMonitors = new(
        "AmazonForecast.ListMonitors");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListMonitors, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListMonitors => onAmazonForecastListMonitors(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListMonitors, Action<string> otherwise)
    {
        if (this == AmazonForecastListMonitors) onAmazonForecastListMonitors();
        else otherwise(Value);
    }
}
