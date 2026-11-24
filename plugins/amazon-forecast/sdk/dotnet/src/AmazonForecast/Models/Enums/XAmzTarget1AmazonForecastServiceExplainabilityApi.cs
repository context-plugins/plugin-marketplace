using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceExplainabilityApi>))]
public sealed record XAmzTarget1AmazonForecastServiceExplainabilityApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceExplainabilityApi>
{
    private XAmzTarget1AmazonForecastServiceExplainabilityApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceExplainabilityApi AmazonForecastDeleteExplainability = new(
        "AmazonForecast.DeleteExplainability");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteExplainability,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteExplainability => onAmazonForecastDeleteExplainability(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteExplainability, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteExplainability) onAmazonForecastDeleteExplainability();
        else otherwise(Value);
    }
}
