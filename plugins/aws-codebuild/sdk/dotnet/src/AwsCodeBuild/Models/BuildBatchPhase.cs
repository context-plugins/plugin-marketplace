using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record BuildBatchPhase
{
    /// <summary>
    /// The name of the batch build phase. Valid values include: COMBINE_ARTIFACTS Build output artifacts are being combined and uploaded to the output location. DOWNLOAD_BATCHSPEC The batch build specification is being downloaded. FAILED One or more of the builds failed. IN_PROGRESS The batch build is in progress. STOPPED The batch build was stopped. SUBMITTED The btach build has been submitted. SUCCEEDED The batch build succeeded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phaseType")]
    public PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? PhaseType { get; init; }

    /// <summary>
    /// The current status of the batch build phase. Valid values include: FAILED The build phase failed. FAULT The build phase faulted. IN_PROGRESS The build phase is still in progress. STOPPED The build phase stopped. SUCCEEDED The build phase succeeded. TIMED_OUT The build phase timed out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phaseStatus")]
    public PhaseStatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? PhaseStatus { get; init; }

    /// <summary>
    /// When the batch build phase started, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// When the batch build phase ended, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// How long, in seconds, between the starting and ending times of the batch build's phase.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("durationInSeconds")]
    public int? DurationInSeconds { get; init; }

    /// <summary>
    /// Additional information about the batch build phase. Especially to help troubleshoot a failed batch build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contexts")]
    public IReadOnlyList<PhaseContext>? Contexts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
