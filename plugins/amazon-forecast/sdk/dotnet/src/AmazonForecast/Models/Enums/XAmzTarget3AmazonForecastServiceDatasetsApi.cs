using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceDatasetsApi>))]
public sealed record XAmzTarget3AmazonForecastServiceDatasetsApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceDatasetsApi>
{
    private XAmzTarget3AmazonForecastServiceDatasetsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceDatasetsApi AmazonForecastListDatasets = new(
        "AmazonForecast.ListDatasets");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListDatasets, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListDatasets => onAmazonForecastListDatasets(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListDatasets, Action<string> otherwise)
    {
        if (this == AmazonForecastListDatasets) onAmazonForecastListDatasets();
        else otherwise(Value);
    }
}
