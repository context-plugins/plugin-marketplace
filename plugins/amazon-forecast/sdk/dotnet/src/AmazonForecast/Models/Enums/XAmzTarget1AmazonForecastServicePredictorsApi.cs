using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServicePredictorsApi>))]
public sealed record XAmzTarget1AmazonForecastServicePredictorsApi : OpenStringEnum<XAmzTarget1AmazonForecastServicePredictorsApi>
{
    private XAmzTarget1AmazonForecastServicePredictorsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServicePredictorsApi AmazonForecastDeletePredictor = new(
        "AmazonForecast.DeletePredictor");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeletePredictor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeletePredictor => onAmazonForecastDeletePredictor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeletePredictor, Action<string> otherwise)
    {
        if (this == AmazonForecastDeletePredictor) onAmazonForecastDeletePredictor();
        else otherwise(Value);
    }
}
