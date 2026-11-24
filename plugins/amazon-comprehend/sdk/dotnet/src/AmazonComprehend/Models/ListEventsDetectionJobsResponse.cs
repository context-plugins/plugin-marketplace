using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ListEventsDetectionJobsResponse
{
    /// <summary>
    /// A list containing the properties of each job that is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EventsDetectionJobPropertiesList")]
    public IReadOnlyList<EventsDetectionJobProperties>? EventsDetectionJobPropertiesList { get; init; }

    /// <summary>
    /// Identifies the next page of results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
