using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListInstances.
/// </summary>
public record GoogleCloudApigeeV1ListInstancesResponse
{
    /// <summary>
    /// Page token that you can include in a ListInstance request to retrieve the next page of content. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Instances in the specified organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instances")]
    public IReadOnlyList<GoogleCloudApigeeV1Instance>? Instances { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
