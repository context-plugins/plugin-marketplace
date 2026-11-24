using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record BuildGroup
{
    /// <summary>
    /// Contains the identifier of the build group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identifier")]
    public string? Identifier { get; init; }

    /// <summary>
    /// An array of strings that contain the identifiers of the build groups that this build group depends on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dependsOn")]
    public IReadOnlyList<string>? DependsOn { get; init; }

    /// <summary>
    /// Specifies if failures in this build group can be ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreFailure")]
    public bool? IgnoreFailure { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentBuildSummary")]
    public BuildSummary? CurrentBuildSummary { get; init; }

    /// <summary>
    /// An array of BuildSummary objects that contain summaries of previous build groups.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priorBuildSummaryList")]
    public IReadOnlyList<BuildSummary>? PriorBuildSummaryList { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
