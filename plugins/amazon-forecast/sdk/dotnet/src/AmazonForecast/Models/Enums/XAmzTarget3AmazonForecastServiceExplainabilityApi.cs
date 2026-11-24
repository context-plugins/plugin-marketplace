using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceExplainabilityApi>))]
public sealed record XAmzTarget3AmazonForecastServiceExplainabilityApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceExplainabilityApi>
{
    private XAmzTarget3AmazonForecastServiceExplainabilityApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceExplainabilityApi AmazonForecastListExplainabilities = new(
        "AmazonForecast.ListExplainabilities");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListExplainabilities,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListExplainabilities => onAmazonForecastListExplainabilities(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListExplainabilities, Action<string> otherwise)
    {
        if (this == AmazonForecastListExplainabilities) onAmazonForecastListExplainabilities();
        else otherwise(Value);
    }
}
