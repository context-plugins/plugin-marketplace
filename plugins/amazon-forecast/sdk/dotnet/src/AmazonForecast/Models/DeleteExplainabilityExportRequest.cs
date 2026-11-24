using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeleteExplainabilityExportRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the Explainability export to delete.
    /// </summary>
    [JsonPropertyName("ExplainabilityExportArn")]
    public required string ExplainabilityExportArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
