using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record SpaceGroupCreateRequest
{
    /// <summary>
    /// name of space group
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// whether AI will be enabled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isLlmEnabled")]
    public bool? IsLlmEnabled { get; init; }

    /// <summary>
    /// whether review system will be enabled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isReviewSystemEnabled")]
    public bool? IsReviewSystemEnabled { get; init; }

    /// <summary>
    /// whether branching will be enabled
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isBranchingSystemEnabled")]
    public bool? IsBranchingSystemEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
