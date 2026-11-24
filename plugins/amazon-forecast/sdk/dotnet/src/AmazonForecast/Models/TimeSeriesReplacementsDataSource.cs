using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record TimeSeriesReplacementsDataSource
{
    [JsonPropertyName("S3Config")]
    public required S3Config S3Config { get; init; }

    [JsonPropertyName("Schema")]
    public required Schema Schema { get; init; }

    /// <summary>
    /// The format of the replacement data, CSV or PARQUET.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Format")]
    public string? Format { get; init; }

    /// <summary>
    /// The timestamp format of the replacement data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimestampFormat")]
    public string? TimestampFormat { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
