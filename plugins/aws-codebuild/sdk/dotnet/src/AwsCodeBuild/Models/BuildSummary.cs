using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record BuildSummary
{
    /// <summary>
    /// The batch build ARN.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arn")]
    public string? Arn { get; init; }

    /// <summary>
    /// When the build was started, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestedOn")]
    public DateTimeOffset? RequestedOn { get; init; }

    /// <summary>
    /// The status of the build group. FAILED The build group failed. FAULT The build group faulted. IN_PROGRESS The build group is still in progress. STOPPED The build group stopped. SUCCEEDED The build group succeeded. TIMED_OUT The build group timed out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildStatus")]
    public BuildStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? BuildStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryArtifact")]
    public ResolvedArtifact? PrimaryArtifact { get; init; }

    /// <summary>
    /// An array of ResolvedArtifact objects that represents the secondary build artifacts for the build group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryArtifacts")]
    public IReadOnlyList<ResolvedArtifact>? SecondaryArtifacts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
