using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record ExplainabilityConfig
{
    /// <summary>
    /// To create an Explainability for all time series in your datasets, use ALL. To create an Explainability for specific time series in your datasets, use SPECIFIC. Specify time series by uploading a CSV or Parquet file to an Amazon S3 bucket and set the location within the DataDestination data type.
    /// </summary>
    [JsonPropertyName("TimeSeriesGranularity")]
    public required TimeSeriesGranularity TimeSeriesGranularity { get; init; }

    /// <summary>
    /// To create an Explainability for all time points in your forecast horizon, use ALL. To create an Explainability for specific time points in your forecast horizon, use SPECIFIC. Specify time points with the StartDateTime and EndDateTime parameters within the CreateExplainability operation.
    /// </summary>
    [JsonPropertyName("TimePointGranularity")]
    public required TimePointGranularity TimePointGranularity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
