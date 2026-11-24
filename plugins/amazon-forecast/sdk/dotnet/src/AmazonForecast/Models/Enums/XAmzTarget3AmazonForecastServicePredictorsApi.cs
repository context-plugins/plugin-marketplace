using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServicePredictorsApi>))]
public sealed record XAmzTarget3AmazonForecastServicePredictorsApi : OpenStringEnum<XAmzTarget3AmazonForecastServicePredictorsApi>
{
    private XAmzTarget3AmazonForecastServicePredictorsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServicePredictorsApi AmazonForecastListPredictors = new(
        "AmazonForecast.ListPredictors");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListPredictors, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListPredictors => onAmazonForecastListPredictors(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListPredictors, Action<string> otherwise)
    {
        if (this == AmazonForecastListPredictors) onAmazonForecastListPredictors();
        else otherwise(Value);
    }
}
