using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi>))]
public sealed record XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi : OpenStringEnum<XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi>
{
    private XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi AmazonForecastCreatePredictorBacktestExportJob = new(
        "AmazonForecast.CreatePredictorBacktestExportJob");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastCreatePredictorBacktestExportJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                AmazonForecastCreatePredictorBacktestExportJob => onAmazonForecastCreatePredictorBacktestExportJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastCreatePredictorBacktestExportJob, Action<string> otherwise)
    {
        if (this == AmazonForecastCreatePredictorBacktestExportJob) onAmazonForecastCreatePredictorBacktestExportJob();
        else otherwise(Value);
    }
}
