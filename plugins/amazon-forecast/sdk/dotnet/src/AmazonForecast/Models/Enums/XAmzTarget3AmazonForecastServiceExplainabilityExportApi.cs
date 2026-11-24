using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceExplainabilityExportApi>))]
public sealed record XAmzTarget3AmazonForecastServiceExplainabilityExportApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceExplainabilityExportApi>
{
    private XAmzTarget3AmazonForecastServiceExplainabilityExportApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceExplainabilityExportApi AmazonForecastListExplainabilityExports = new(
        "AmazonForecast.ListExplainabilityExports");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListExplainabilityExports,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListExplainabilityExports => onAmazonForecastListExplainabilityExports(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListExplainabilityExports, Action<string> otherwise)
    {
        if (this == AmazonForecastListExplainabilityExports) onAmazonForecastListExplainabilityExports();
        else otherwise(Value);
    }
}
