using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DescribeDominantLanguageDetectionJobResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DominantLanguageDetectionJobProperties")]
    public DominantLanguageDetectionJobProperties? DominantLanguageDetectionJobProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
