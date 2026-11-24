using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record BuildPhaseAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi
{
    /// <summary>
    /// The name of the build phase. Valid values include: BUILD Core build activities typically occur in this build phase. COMPLETED The build has been completed. DOWNLOAD_SOURCE Source code is being downloaded in this build phase. FINALIZING The build process is completing in this build phase. INSTALL Installation activities typically occur in this build phase. POST_BUILD Post-build activities typically occur in this build phase. PRE_BUILD Pre-build activities typically occur in this build phase. PROVISIONING The build environment is being set up. QUEUED The build has been submitted and is queued be
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phaseType")]
    public PhaseType? PhaseType { get; init; }

    /// <summary>
    /// The current status of the build phase. Valid values include: FAILED The build phase failed. FAULT The build phase faulted. IN_PROGRESS The build phase is still in progress. STOPPED The build phase stopped. SUCCEEDED The build phase succeeded. TIMED_OUT The build phase timed out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phaseStatus")]
    public PhaseStatus1? PhaseStatus { get; init; }

    /// <summary>
    /// When the build phase started, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// When the build phase ended, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// How long, in seconds, between the starting and ending times of the build's phase.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("durationInSeconds")]
    public int? DurationInSeconds { get; init; }

    /// <summary>
    /// Additional information about a build phase, especially to help troubleshoot a failed build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contexts")]
    public IReadOnlyList<PhaseContext>? Contexts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
