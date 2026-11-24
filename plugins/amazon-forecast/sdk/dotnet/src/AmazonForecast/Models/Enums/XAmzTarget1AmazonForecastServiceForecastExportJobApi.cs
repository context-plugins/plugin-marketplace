using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServiceForecastExportJobApi>))]
public sealed record XAmzTarget1AmazonForecastServiceForecastExportJobApi : OpenStringEnum<XAmzTarget1AmazonForecastServiceForecastExportJobApi>
{
    private XAmzTarget1AmazonForecastServiceForecastExportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServiceForecastExportJobApi AmazonForecastDeleteForecastExportJob = new(
        "AmazonForecast.DeleteForecastExportJob");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeleteForecastExportJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDeleteForecastExportJob => onAmazonForecastDeleteForecastExportJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeleteForecastExportJob, Action<string> otherwise)
    {
        if (this == AmazonForecastDeleteForecastExportJob) onAmazonForecastDeleteForecastExportJob();
        else otherwise(Value);
    }
}
