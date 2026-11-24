using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Specification of how to split costs.
/// </summary>
public record ExternalSplit
{
    /// <summary>
    /// ID of the field to split.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Indicate whether to include the origin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeOrigin")]
    public bool? IncludeOrigin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode3? Mode { get; init; }

    /// <summary>
    /// Origin info for cost splitting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("origin")]
    public ExternalOrigin? Origin { get; init; }

    /// <summary>
    /// Targets for the split.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targets")]
    public IReadOnlyList<ExternalSplitTarget>? Targets { get; init; }

    /// <summary>
    /// Type of the split.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type5? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
