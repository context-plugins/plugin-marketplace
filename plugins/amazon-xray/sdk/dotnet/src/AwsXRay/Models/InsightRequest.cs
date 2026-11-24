using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record InsightRequest
{
    /// <summary>
    /// The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
    /// </summary>
    [JsonPropertyName("InsightId")]
    public required string InsightId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
