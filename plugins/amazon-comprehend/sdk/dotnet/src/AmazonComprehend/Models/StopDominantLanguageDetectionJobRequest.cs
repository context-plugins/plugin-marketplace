using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record StopDominantLanguageDetectionJobRequest
{
    /// <summary>
    /// The identifier of the dominant language detection job to stop.
    /// </summary>
    [JsonPropertyName("JobId")]
    public required string JobId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
