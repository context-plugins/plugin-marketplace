using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BatchRestrictions
{
    /// <summary>
    /// Specifies the maximum number of builds allowed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maximumBuildsAllowed")]
    public int? MaximumBuildsAllowed { get; init; }

    /// <summary>
    /// An array of strings that specify the compute types that are allowed for the batch build. See Build environment compute types in the CodeBuild User Guide for these values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("computeTypesAllowed")]
    public IReadOnlyList<string>? ComputeTypesAllowed { get; init; }

    /// <summary>
    /// An array of strings that specify the fleets that are allowed for the batch build. See Run builds on reserved capacity fleets in the CodeBuild User Guide for more information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fleetsAllowed")]
    public IReadOnlyList<string>? FleetsAllowed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
