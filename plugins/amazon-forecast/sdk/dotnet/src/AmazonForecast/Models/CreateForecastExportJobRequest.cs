using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CreateForecastExportJobRequest
{
    /// <summary>
    /// The name for the forecast export job.
    /// </summary>
    [JsonPropertyName("ForecastExportJobName")]
    public required string ForecastExportJobName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the forecast that you want to export.
    /// </summary>
    [JsonPropertyName("ForecastArn")]
    public required string ForecastArn { get; init; }

    [JsonPropertyName("Destination")]
    public required DataDestination Destination { get; init; }

    /// <summary>
    /// The optional metadata that you apply to the forecast export job to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on all
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The format of the exported data, CSV or PARQUET. The default value is CSV.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Format")]
    public string? Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
