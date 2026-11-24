using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceForecastsApi>))]
public sealed record XAmzTarget3AmazonForecastServiceForecastsApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceForecastsApi>
{
    private XAmzTarget3AmazonForecastServiceForecastsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceForecastsApi AmazonForecastListForecasts = new(
        "AmazonForecast.ListForecasts");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListForecasts, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListForecasts => onAmazonForecastListForecasts(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListForecasts, Action<string> otherwise)
    {
        if (this == AmazonForecastListForecasts) onAmazonForecastListForecasts();
        else otherwise(Value);
    }
}
