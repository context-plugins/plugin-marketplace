using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// Request payload for stopping a running job
/// </summary>
public record StopJobRequest
{
    /// <summary>
    /// Unique integer identifier of the job to stop
    /// </summary>
    [JsonPropertyName("jobId")]
    public required long JobId { get; init; }

    /// <summary>
    /// Stop strategy. SoftStop waits for the current activity to complete before stopping; Kill immediately terminates the robot process.
    /// </summary>
    [JsonPropertyName("strategy")]
    public required Strategy1 Strategy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
