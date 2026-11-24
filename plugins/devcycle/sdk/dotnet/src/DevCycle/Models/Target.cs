using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record Target
{
    /// <summary>
    /// A unique Target ID
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// Target name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Audience model describing target segmentation.
    /// </summary>
    [JsonPropertyName("audience")]
    public required TargetAudience Audience { get; init; }

    /// <summary>
    /// Rollout sub-document describing how a Target's audience is rolled out
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rollout")]
    public Rollout? Rollout { get; init; }

    /// <summary>
    /// Specifies variation distribution percentages for features
    /// </summary>
    [JsonPropertyName("distribution")]
    public required IReadOnlyList<TargetDistribution> Distribution { get; init; }

    /// <summary>
    /// String to bucket users into a specific variation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucketingKey")]
    public string? BucketingKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
