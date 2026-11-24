using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServiceExportJobsApi>))]
public sealed record XAmzTargetAmazonForecastServiceExportJobsApi : OpenStringEnum<XAmzTargetAmazonForecastServiceExportJobsApi>
{
    private XAmzTargetAmazonForecastServiceExportJobsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServiceExportJobsApi AmazonForecastCreateForecastExportJob = new(
        "AmazonForecast.CreateForecastExportJob");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreateForecastExportJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastCreateForecastExportJob => onAmazonForecastCreateForecastExportJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreateForecastExportJob, Action<string> otherwise)
    {
        if (this == AmazonForecastCreateForecastExportJob) onAmazonForecastCreateForecastExportJob();
        else otherwise(Value);
    }
}
