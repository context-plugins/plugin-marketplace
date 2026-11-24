using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribeExplainabilityExportRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the Explainability export.
    /// </summary>
    [JsonPropertyName("ExplainabilityExportArn")]
    public required string ExplainabilityExportArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
