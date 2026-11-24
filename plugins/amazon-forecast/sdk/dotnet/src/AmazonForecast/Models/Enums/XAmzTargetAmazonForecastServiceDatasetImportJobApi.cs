using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceDatasetImportJobApi>))]
public sealed record XAmzTargetAmazonForecastServiceDatasetImportJobApi : OpenStringEnum<XAmzTargetAmazonForecastServiceDatasetImportJobApi>
{
    private XAmzTargetAmazonForecastServiceDatasetImportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceDatasetImportJobApi AmazonForecastCreateDatasetImportJob = new(
        "AmazonForecast.CreateDatasetImportJob");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateDatasetImportJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateDatasetImportJob => onAmazonForecastCreateDatasetImportJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateDatasetImportJob, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateDatasetImportJob) onAmazonForecastCreateDatasetImportJob();
        else otherwise(Value);
    }
}
