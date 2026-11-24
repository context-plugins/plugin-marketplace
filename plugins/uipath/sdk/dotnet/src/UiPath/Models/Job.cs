using System;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// Represents a single automation job execution instance
/// </summary>
public record Job
{
    /// <summary>
    /// Unique integer identifier for the job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public long? Id { get; init; }

    /// <summary>
    /// Unique GUID key for the job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Key")]
    public Guid? Key { get; init; }

    /// <summary>
    /// Name of the process (release) that this job executes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReleaseName")]
    public string? ReleaseName { get; init; }

    /// <summary>
    /// Version of the process package used in this job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProcessVersion")]
    public string? ProcessVersion { get; init; }

    /// <summary>
    /// Current execution state of the job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("State")]
    public State? State { get; init; }

    /// <summary>
    /// How the job was initiated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Source")]
    public Source? Source { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the job started executing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the job finished executing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the job was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// Additional information or error message associated with the job state
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Info")]
    public string? Info { get; init; }

    /// <summary>
    /// Name of the machine where the robot executed the job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HostMachineName")]
    public string? HostMachineName { get; init; }

    /// <summary>
    /// A lightweight reference to a robot associated with a job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Robot")]
    public RobotRef? Robot { get; init; }

    /// <summary>
    /// ID of the folder in which this job resides
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrganizationUnitId")]
    public long? OrganizationUnitId { get; init; }

    /// <summary>
    /// JSON-serialized input arguments passed to the process
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InputArguments")]
    public string? InputArguments { get; init; }

    /// <summary>
    /// JSON-serialized output arguments returned by the process
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OutputArguments")]
    public string? OutputArguments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
