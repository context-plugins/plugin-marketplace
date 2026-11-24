using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceDatasetImportJobApi>))]
public sealed record XAmzTarget2AmazonForecastServiceDatasetImportJobApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceDatasetImportJobApi>
{
    private XAmzTarget2AmazonForecastServiceDatasetImportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceDatasetImportJobApi AmazonForecastDescribeDatasetImportJob = new(
        "AmazonForecast.DescribeDatasetImportJob");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeDatasetImportJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeDatasetImportJob => onAmazonForecastDescribeDatasetImportJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeDatasetImportJob, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeDatasetImportJob) onAmazonForecastDescribeDatasetImportJob();
        else otherwise(Value);
    }
}
