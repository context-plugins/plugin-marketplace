using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record SandboxSessionPhase
{
    /// <summary>
    /// The name of the sandbox phase.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phaseType")]
    public string? PhaseType { get; init; }

    /// <summary>
    /// The current status of the sandbox phase. Valid values include: FAILED The sandbox phase failed. FAULT The sandbox phase faulted. IN_PROGRESS The sandbox phase is still in progress. STOPPED The sandbox phase stopped. SUCCEEDED The sandbox phase succeeded. TIMED_OUT The sandbox phase timed out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phaseStatus")]
    public PhaseStatus? PhaseStatus { get; init; }

    /// <summary>
    /// When the sandbox phase started, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// When the sandbox phase ended, expressed in Unix time format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// How long, in seconds, between the starting and ending times of the sandbox's phase.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("durationInSeconds")]
    public int? DurationInSeconds { get; init; }

    /// <summary>
    /// An array of PhaseContext objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contexts")]
    public IReadOnlyList<PhaseContext>? Contexts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
