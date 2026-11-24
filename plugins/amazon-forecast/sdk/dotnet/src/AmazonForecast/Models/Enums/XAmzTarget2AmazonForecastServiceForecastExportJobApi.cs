using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServiceForecastExportJobApi>))]
public sealed record XAmzTarget2AmazonForecastServiceForecastExportJobApi : OpenStringEnum<XAmzTarget2AmazonForecastServiceForecastExportJobApi>
{
    private XAmzTarget2AmazonForecastServiceForecastExportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServiceForecastExportJobApi AmazonForecastDescribeForecastExportJob = new(
        "AmazonForecast.DescribeForecastExportJob");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribeForecastExportJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastDescribeForecastExportJob => onAmazonForecastDescribeForecastExportJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribeForecastExportJob, Action<string> otherwise)
    {
        if (this == AmazonForecastDescribeForecastExportJob) onAmazonForecastDescribeForecastExportJob();
        else otherwise(Value);
    }
}
