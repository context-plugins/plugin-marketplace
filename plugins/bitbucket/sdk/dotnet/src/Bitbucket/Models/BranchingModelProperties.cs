using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Core.Validation.Attributes;

namespace Bitbucket.Models;

public record BranchingModelProperties
{
    /// <summary>
    /// The active branch types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch_types")]
    [MinLength(0)]
    [MaxLength(4)]
    [UniqueItems]
    public IReadOnlyList<BranchTypeBitbucketBranchingModelApi>? BranchTypes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("development")]
    public Development1? Development { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("production")]
    public Production1? Production { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
