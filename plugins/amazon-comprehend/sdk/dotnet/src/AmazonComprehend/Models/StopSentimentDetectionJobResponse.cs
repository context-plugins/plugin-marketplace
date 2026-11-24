using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record StopSentimentDetectionJobResponse
{
    /// <summary>
    /// The identifier of the sentiment detection job to stop.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    /// <summary>
    /// Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously stopped with the StopSentimentDetectionJob operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobStatus")]
    public JobStatus32? JobStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
