using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi>))]
public sealed record XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi : OpenStringEnum<XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi>
{
    private XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi AmazonForecastDescribePredictorBacktestExportJob = new(
        "AmazonForecast.DescribePredictorBacktestExportJob");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastDescribePredictorBacktestExportJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                AmazonForecastDescribePredictorBacktestExportJob => onAmazonForecastDescribePredictorBacktestExportJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastDescribePredictorBacktestExportJob, Action<string> otherwise)
    {
        if (this ==
            AmazonForecastDescribePredictorBacktestExportJob) onAmazonForecastDescribePredictorBacktestExportJob();
        else otherwise(Value);
    }
}
