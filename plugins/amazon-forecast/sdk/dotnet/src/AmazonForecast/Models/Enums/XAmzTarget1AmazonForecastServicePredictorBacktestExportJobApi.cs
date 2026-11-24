using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi>))]
public sealed record XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi : OpenStringEnum<XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi>
{
    private XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi AmazonForecastDeletePredictorBacktestExportJob = new(
        "AmazonForecast.DeletePredictorBacktestExportJob");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDeletePredictorBacktestExportJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                AmazonForecastDeletePredictorBacktestExportJob => onAmazonForecastDeletePredictorBacktestExportJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDeletePredictorBacktestExportJob, Action<string> otherwise)
    {
        if (this == AmazonForecastDeletePredictorBacktestExportJob) onAmazonForecastDeletePredictorBacktestExportJob();
        else otherwise(Value);
    }
}
