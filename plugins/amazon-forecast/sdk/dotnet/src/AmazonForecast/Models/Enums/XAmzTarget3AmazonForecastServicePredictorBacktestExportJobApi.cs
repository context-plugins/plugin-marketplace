using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi>))]
public sealed record XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi : OpenStringEnum<XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi>
{
    private XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi AmazonForecastListPredictorBacktestExportJobs = new(
        "AmazonForecast.ListPredictorBacktestExportJobs");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListPredictorBacktestExportJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                AmazonForecastListPredictorBacktestExportJobs => onAmazonForecastListPredictorBacktestExportJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListPredictorBacktestExportJobs, Action<string> otherwise)
    {
        if (this == AmazonForecastListPredictorBacktestExportJobs) onAmazonForecastListPredictorBacktestExportJobs();
        else otherwise(Value);
    }
}
