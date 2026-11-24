using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ListProjectPoliciesResponse
{
    /// <summary>
    /// A list of project policies attached to the project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProjectPolicies")]
    public IReadOnlyList<ProjectPolicy>? ProjectPolicies { get; init; }

    /// <summary>
    /// If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of project policies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
