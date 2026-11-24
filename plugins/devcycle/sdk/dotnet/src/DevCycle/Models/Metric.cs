using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record Metric
{
    /// <summary>
    /// Name of the Metric
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id.
    /// Must only contain lower-case characters and <c>_</c>, <c>-</c> or <c>.</c>.
    /// </summary>
    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    /// <summary>
    /// Metric description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public string? Description { get; init; }

    /// <summary>
    /// A unique Metric ID
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// The Project owning the Metric
    /// </summary>
    [JsonPropertyName("_project")]
    public required string Project { get; init; }

    /// <summary>
    /// Source that created the Metric
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source2? Source { get; init; }

    /// <summary>
    /// Event associated with metric
    /// </summary>
    [JsonPropertyName("event")]
    public required string Event { get; init; }

    /// <summary>
    /// Metric dimension
    /// </summary>
    [JsonPropertyName("dimension")]
    public required Dimension Dimension { get; init; }

    /// <summary>
    /// Indicates whether the metric is optimized for increase or decreasae
    /// </summary>
    [JsonPropertyName("optimize")]
    public required Optimize Optimize { get; init; }

    /// <summary>
    /// The date the Metric was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The date the Metric was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
