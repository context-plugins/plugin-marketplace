using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// Parameters controlling how jobs are started
/// </summary>
public record StartInfo
{
    /// <summary>
    /// GUID key of the process (release) to start
    /// </summary>
    [JsonPropertyName("ReleaseKey")]
    public required Guid ReleaseKey { get; init; }

    /// <summary>
    /// Strategy for allocating robots to the job
    /// </summary>
    [JsonPropertyName("Strategy")]
    public required Strategy Strategy { get; init; }

    /// <summary>
    /// List of robot IDs to use when Strategy is RobotIds or Specific
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RobotIds")]
    public IReadOnlyList<long>? RobotIds { get; init; }

    /// <summary>
    /// Number of robots to use when Strategy is JobsCount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NoOfRobots")]
    public int? NoOfRobots { get; init; }

    /// <summary>
    /// Source attribution for the started jobs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Source")]
    public Source1? Source { get; init; }

    /// <summary>
    /// JSON-serialized input arguments to pass to the process
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InputArguments")]
    public string? InputArguments { get; init; }

    /// <summary>
    /// Priority level for the job queue
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobPriority")]
    public JobPriority? JobPriority { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
