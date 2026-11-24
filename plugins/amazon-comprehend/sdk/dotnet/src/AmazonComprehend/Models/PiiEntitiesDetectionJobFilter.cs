using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record PiiEntitiesDetectionJobFilter
{
    /// <summary>
    /// Filters on the name of the job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobName")]
    public string? JobName { get; init; }

    /// <summary>
    /// Filters the list of jobs based on job status. Returns only jobs with the specified status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobStatus")]
    public JobStatus10? JobStatus { get; init; }

    /// <summary>
    /// Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SubmitTimeBefore")]
    public DateTimeOffset? SubmitTimeBefore { get; init; }

    /// <summary>
    /// Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SubmitTimeAfter")]
    public DateTimeOffset? SubmitTimeAfter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
