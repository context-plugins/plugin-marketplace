using System;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// The status of an audience size job.
/// </summary>
public record AudienceSizeJob
{
    [JsonPropertyName("jobId")]
    public required string JobId { get; init; }

    /// <summary>
    /// "pending": The job is running
    /// "success": The job is finished
    /// "failed": The job could not be completed
    /// "cancelled": The job was cancelled before it finished
    /// </summary>
    [JsonPropertyName("status")]
    public required AudienceSizeStatus1 Status { get; init; }

    /// <summary>
    /// The size of the audience. Set if <c>status</c> is "success".
    /// </summary>
    [JsonPropertyName("size")]
    public required double? Size { get; init; }

    /// <summary>
    /// The timestamp when the job finished. Set if <c>status</c> is "success".
    /// </summary>
    [JsonPropertyName("evaluatedAt")]
    public required DateTimeOffset? EvaluatedAt { get; init; }

    /// <summary>
    /// The reason the job failed. Set if <c>status</c> is "failed".
    /// </summary>
    [JsonPropertyName("error")]
    public required string? Error { get; init; }
}
