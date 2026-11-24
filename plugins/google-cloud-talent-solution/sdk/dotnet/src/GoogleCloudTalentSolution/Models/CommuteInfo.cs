using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Commute details related to this job.
/// </summary>
public record CommuteInfo
{
    /// <summary>
    /// Location used as the destination in the commute calculation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobLocation")]
    public Location2? JobLocation { get; init; }

    /// <summary>
    /// The number of seconds required to travel to the job location from the query location. A duration of 0 seconds indicates that the job isn't reachable within the requested duration, but was returned as part of an expanded query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("travelDuration")]
    public string? TravelDuration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
