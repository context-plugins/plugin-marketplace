using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ProjectBuildBatchConfig
{
    /// <summary>
    /// Specifies the service role ARN for the batch build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceRole")]
    public string? ServiceRole { get; init; }

    /// <summary>
    /// Specifies if the build artifacts for the batch build should be combined into a single artifact location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("combineArtifacts")]
    public bool? CombineArtifacts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("restrictions")]
    public BatchRestrictions? Restrictions { get; init; }

    /// <summary>
    /// Specifies the maximum amount of time, in minutes, that the batch build must be completed in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeoutInMins")]
    public int? TimeoutInMins { get; init; }

    /// <summary>
    /// Specifies how build status reports are sent to the source provider for the batch build. This property is only used when the source provider for your project is Bitbucket, GitHub, or GitHub Enterprise, and your project is configured to report build statuses to the source provider. REPORT_AGGREGATED_BATCH (Default) Aggregate all of the build statuses into a single status report. REPORT_INDIVIDUAL_BUILDS Send a separate status report for each individual build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batchReportMode")]
    public BatchReportMode? BatchReportMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
