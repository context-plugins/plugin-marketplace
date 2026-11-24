using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceDatasetsApi>))]
public sealed record XAmzTarget1AmazonForecastServiceDatasetsApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceDatasetsApi>
{
    private XAmzTarget1AmazonForecastServiceDatasetsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceDatasetsApi AmazonForecastDeleteDataset = new(
        "AmazonForecast.DeleteDataset");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteDataset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteDataset => onAmazonForecastDeleteDataset(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteDataset, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteDataset) onAmazonForecastDeleteDataset();
        else otherwise(Value);
    }
}
