using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceWhatIfForecastApi>))]
public sealed record XAmzTarget3AmazonForecastServiceWhatIfForecastApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceWhatIfForecastApi>
{
    private XAmzTarget3AmazonForecastServiceWhatIfForecastApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceWhatIfForecastApi AmazonForecastListWhatIfForecasts = new(
        "AmazonForecast.ListWhatIfForecasts");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListWhatIfForecasts, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListWhatIfForecasts => onAmazonForecastListWhatIfForecasts(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListWhatIfForecasts, Action<string> otherwise)
    {
        if (this == AmazonForecastListWhatIfForecasts) onAmazonForecastListWhatIfForecasts();
        else otherwise(Value);
    }
}
