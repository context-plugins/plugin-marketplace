using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceDatasetsApi>))]
public sealed record XAmzTarget2AmazonForecastServiceDatasetsApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceDatasetsApi>
{
    private XAmzTarget2AmazonForecastServiceDatasetsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceDatasetsApi AmazonForecastDescribeDataset = new(
        "AmazonForecast.DescribeDataset");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeDataset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeDataset => onAmazonForecastDescribeDataset(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeDataset, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeDataset) onAmazonForecastDescribeDataset();
        else otherwise(Value);
    }
}
