using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceForecastExportJobApi>))]
public sealed record XAmzTarget3AmazonForecastServiceForecastExportJobApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceForecastExportJobApi>
{
    private XAmzTarget3AmazonForecastServiceForecastExportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceForecastExportJobApi AmazonForecastListForecastExportJobs = new(
        "AmazonForecast.ListForecastExportJobs");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListForecastExportJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListForecastExportJobs => onAmazonForecastListForecastExportJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListForecastExportJobs, Action<string> otherwise)
    {
        if (this == AmazonForecastListForecastExportJobs) onAmazonForecastListForecastExportJobs();
        else otherwise(Value);
    }
}
