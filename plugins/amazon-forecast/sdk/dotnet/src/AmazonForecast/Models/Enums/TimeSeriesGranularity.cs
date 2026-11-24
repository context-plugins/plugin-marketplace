using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// To create an Explainability for all time series in your datasets, use ALL. To create an Explainability for specific time series in your datasets, use SPECIFIC. Specify time series by uploading a CSV or Parquet file to an Amazon S3 bucket and set the location within the DataDestination data type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeSeriesGranularity>))]
public sealed record TimeSeriesGranularity : OpenStringEnum<TimeSeriesGranularity>
{
    private TimeSeriesGranularity(string value) : base(value)
    {
    }

    public static readonly TimeSeriesGranularity All = new("ALL");

    public static readonly TimeSeriesGranularity Specific = new("SPECIFIC");

    public TResult Match<TResult>(Func<TResult> onAll, Func<TResult> onSpecific, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Specific => onSpecific(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onSpecific, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Specific) onSpecific();
        else otherwise(Value);
    }
}
