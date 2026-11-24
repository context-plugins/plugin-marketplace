using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ListEndpointsResponse
{
    /// <summary>
    /// Displays a list of endpoint properties being retrieved by the service in response to the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndpointPropertiesList")]
    public IReadOnlyList<EndpointProperties>? EndpointPropertiesList { get; init; }

    /// <summary>
    /// Identifies the next page of results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
