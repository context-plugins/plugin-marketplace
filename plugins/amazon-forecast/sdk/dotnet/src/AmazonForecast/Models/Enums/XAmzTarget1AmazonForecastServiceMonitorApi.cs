using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceMonitorApi>))]
public sealed record XAmzTarget1AmazonForecastServiceMonitorApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceMonitorApi>
{
    private XAmzTarget1AmazonForecastServiceMonitorApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceMonitorApi AmazonForecastDeleteMonitor = new(
        "AmazonForecast.DeleteMonitor");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteMonitor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteMonitor => onAmazonForecastDeleteMonitor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteMonitor, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteMonitor) onAmazonForecastDeleteMonitor();
        else otherwise(Value);
    }
}
