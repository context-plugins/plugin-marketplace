using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServicePredictorsApi>))]
public sealed record XAmzTarget2AmazonForecastServicePredictorsApi : OpenStringEnum<XAmzTarget2AmazonForecastServicePredictorsApi>
{
    private XAmzTarget2AmazonForecastServicePredictorsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServicePredictorsApi AmazonForecastDescribePredictor = new(
        "AmazonForecast.DescribePredictor");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribePredictor, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribePredictor => onAmazonForecastDescribePredictor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribePredictor, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribePredictor) onAmazonForecastDescribePredictor();
        else otherwise(Value);
    }
}
