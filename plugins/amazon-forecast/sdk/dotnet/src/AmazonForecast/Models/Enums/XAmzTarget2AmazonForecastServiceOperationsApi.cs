using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceOperationsApi>))]
public sealed record XAmzTarget2AmazonForecastServiceOperationsApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceOperationsApi>
{
    private XAmzTarget2AmazonForecastServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceOperationsApi AmazonForecastDescribeAutoPredictor = new(
        "AmazonForecast.DescribeAutoPredictor");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeAutoPredictor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeAutoPredictor => onAmazonForecastDescribeAutoPredictor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeAutoPredictor, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeAutoPredictor) onAmazonForecastDescribeAutoPredictor();
        else otherwise(Value);
    }
}
