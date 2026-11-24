using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record UpdateTargetDto
{
    /// <summary>
    /// A unique Target ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_id")]
    public string? Id { get; init; }

    /// <summary>
    /// Target name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

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
    /// Audience model describing target segmentation.
    /// </summary>
    [JsonPropertyName("audience")]
    public required TargetAudience Audience { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
