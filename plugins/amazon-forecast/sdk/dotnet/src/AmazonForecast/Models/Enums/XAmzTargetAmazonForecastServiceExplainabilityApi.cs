using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceExplainabilityApi>))]
public sealed record XAmzTargetAmazonForecastServiceExplainabilityApi : OpenStringEnum<XAmzTargetAmazonForecastServiceExplainabilityApi>
{
    private XAmzTargetAmazonForecastServiceExplainabilityApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceExplainabilityApi AmazonForecastCreateExplainability = new(
        "AmazonForecast.CreateExplainability");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateExplainability,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateExplainability => onAmazonForecastCreateExplainability(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateExplainability, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateExplainability) onAmazonForecastCreateExplainability();
        else otherwise(Value);
    }
}
