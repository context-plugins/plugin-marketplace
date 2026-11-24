using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceForecastsApi>))]
public sealed record XAmzTarget1AmazonForecastServiceForecastsApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceForecastsApi>
{
    private XAmzTarget1AmazonForecastServiceForecastsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceForecastsApi AmazonForecastDeleteForecast = new(
        "AmazonForecast.DeleteForecast");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteForecast, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteForecast => onAmazonForecastDeleteForecast(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteForecast, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteForecast) onAmazonForecastDeleteForecast();
        else otherwise(Value);
    }
}
