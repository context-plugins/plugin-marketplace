using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DescribeDominantLanguageDetectionJobRequest
{
    /// <summary>
    /// The identifier that Amazon Comprehend generated for the job. The StartDominantLanguageDetectionJob operation returns this identifier in its response.
    /// </summary>
    [JsonPropertyName("JobId")]
    public required string JobId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
