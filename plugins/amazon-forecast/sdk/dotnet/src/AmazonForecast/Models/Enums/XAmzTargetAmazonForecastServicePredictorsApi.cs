using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServicePredictorsApi>))]
public sealed record XAmzTargetAmazonForecastServicePredictorsApi : OpenStringEnum<XAmzTargetAmazonForecastServicePredictorsApi>
{
    private XAmzTargetAmazonForecastServicePredictorsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServicePredictorsApi AmazonForecastCreatePredictor = new(
        "AmazonForecast.CreatePredictor");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreatePredictor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreatePredictor => onAmazonForecastCreatePredictor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreatePredictor, Action<string> otherwise)
    {
        if (this == AmazonForecastCreatePredictor) onAmazonForecastCreatePredictor();
        else otherwise(Value);
    }
}
