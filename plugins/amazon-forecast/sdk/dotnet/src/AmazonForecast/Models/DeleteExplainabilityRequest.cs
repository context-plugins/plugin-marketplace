using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeleteExplainabilityRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the Explainability resource to delete.
    /// </summary>
    [JsonPropertyName("ExplainabilityArn")]
    public required string ExplainabilityArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
