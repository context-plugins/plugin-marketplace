using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Data related to Jobs page summary
/// </summary>
public record JobsSummary
{
    /// <summary>
    /// Number of failed jobs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedJobs")]
    public int? FailedJobs { get; init; }

    /// <summary>
    /// Spark Scheduling mode
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedulingMode")]
    public string? SchedulingMode { get; init; }

    /// <summary>
    /// Number of active jobs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeJobs")]
    public int? ActiveJobs { get; init; }

    /// <summary>
    /// Number of completed jobs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completedJobs")]
    public int? CompletedJobs { get; init; }

    /// <summary>
    /// Attempts info
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attempts")]
    public IReadOnlyList<ApplicationAttemptInfo>? Attempts { get; init; }

    /// <summary>
    /// Spark Application Id
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationId")]
    public string? ApplicationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
