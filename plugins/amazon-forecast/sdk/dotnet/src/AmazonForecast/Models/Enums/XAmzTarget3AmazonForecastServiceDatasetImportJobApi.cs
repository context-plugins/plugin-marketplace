using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AmazonForecastServiceDatasetImportJobApi>))]
public sealed record XAmzTarget3AmazonForecastServiceDatasetImportJobApi : OpenStringEnum<XAmzTarget3AmazonForecastServiceDatasetImportJobApi>
{
    private XAmzTarget3AmazonForecastServiceDatasetImportJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AmazonForecastServiceDatasetImportJobApi AmazonForecastListDatasetImportJobs = new(
        "AmazonForecast.ListDatasetImportJobs");

    public TResult Match<TResult>(Func<TResult> onAmazonForecastListDatasetImportJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonForecastListDatasetImportJobs => onAmazonForecastListDatasetImportJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonForecastListDatasetImportJobs, Action<string> otherwise)
    {
        if (this == AmazonForecastListDatasetImportJobs) onAmazonForecastListDatasetImportJobs();
        else otherwise(Value);
    }
}
