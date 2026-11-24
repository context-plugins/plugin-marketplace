using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceForecastsApi>))]
public sealed record XAmzTarget2AmazonForecastServiceForecastsApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceForecastsApi>
{
    private XAmzTarget2AmazonForecastServiceForecastsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceForecastsApi AmazonForecastDescribeForecast = new(
        "AmazonForecast.DescribeForecast");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeForecast, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeForecast => onAmazonForecastDescribeForecast(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeForecast, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeForecast) onAmazonForecastDescribeForecast();
        else otherwise(Value);
    }
}
