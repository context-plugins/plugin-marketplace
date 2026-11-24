using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceDatasetImportJobApi>))]
public sealed record XAmzTarget1AmazonForecastServiceDatasetImportJobApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceDatasetImportJobApi>
{
    private XAmzTarget1AmazonForecastServiceDatasetImportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceDatasetImportJobApi AmazonForecastDeleteDatasetImportJob = new(
        "AmazonForecast.DeleteDatasetImportJob");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteDatasetImportJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteDatasetImportJob => onAmazonForecastDeleteDatasetImportJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteDatasetImportJob, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteDatasetImportJob) onAmazonForecastDeleteDatasetImportJob();
        else otherwise(Value);
    }
}
