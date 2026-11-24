using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceOperationsApi>))]
public sealed record XAmzTarget1AmazonForecastServiceOperationsApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceOperationsApi>
{
    private XAmzTarget1AmazonForecastServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceOperationsApi AmazonForecastCreateAutoPredictor = new(
        "AmazonForecast.CreateAutoPredictor");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateAutoPredictor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateAutoPredictor => onAmazonForecastCreateAutoPredictor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateAutoPredictor, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateAutoPredictor) onAmazonForecastCreateAutoPredictor();
        else otherwise(Value);
    }
}
