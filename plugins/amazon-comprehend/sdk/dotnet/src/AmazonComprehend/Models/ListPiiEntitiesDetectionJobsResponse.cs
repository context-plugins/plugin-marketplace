using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ListPiiEntitiesDetectionJobsResponse
{
    /// <summary>
    /// A list containing the properties of each job that is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PiiEntitiesDetectionJobPropertiesList")]
    public IReadOnlyList<PiiEntitiesDetectionJobProperties>? PiiEntitiesDetectionJobPropertiesList { get; init; }

    /// <summary>
    /// Identifies the next page of results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
