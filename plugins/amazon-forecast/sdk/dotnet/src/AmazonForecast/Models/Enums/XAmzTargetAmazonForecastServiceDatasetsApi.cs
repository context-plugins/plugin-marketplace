using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceDatasetsApi>))]
public sealed record XAmzTargetAmazonForecastServiceDatasetsApi : OpenStringEnum<XAmzTargetAmazonForecastServiceDatasetsApi>
{
    private XAmzTargetAmazonForecastServiceDatasetsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceDatasetsApi AmazonForecastCreateDataset = new(
        "AmazonForecast.CreateDataset");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateDataset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateDataset => onAmazonForecastCreateDataset(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateDataset, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateDataset) onAmazonForecastCreateDataset();
        else otherwise(Value);
    }
}
