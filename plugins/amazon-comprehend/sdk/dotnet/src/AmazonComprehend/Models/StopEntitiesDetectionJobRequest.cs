using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record StopEntitiesDetectionJobRequest
{
    /// <summary>
    /// The identifier of the entities detection job to stop.
    /// </summary>
    [JsonPropertyName("JobId")]
    public required string JobId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
