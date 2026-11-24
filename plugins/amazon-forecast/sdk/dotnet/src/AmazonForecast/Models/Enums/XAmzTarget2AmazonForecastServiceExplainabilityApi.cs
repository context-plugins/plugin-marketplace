using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceExplainabilityApi>))]
public sealed record XAmzTarget2AmazonForecastServiceExplainabilityApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceExplainabilityApi>
{
    private XAmzTarget2AmazonForecastServiceExplainabilityApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceExplainabilityApi AmazonForecastDescribeExplainability = new(
        "AmazonForecast.DescribeExplainability");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeExplainability,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeExplainability => onAmazonForecastDescribeExplainability(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeExplainability, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeExplainability) onAmazonForecastDescribeExplainability();
        else otherwise(Value);
    }
}
