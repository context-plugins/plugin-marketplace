using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DescribeProjectsResponse
{
    /// <summary>
    /// A list of project descriptions. The list is sorted by the date and time the projects are created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProjectDescriptions")]
    public IReadOnlyList<ProjectDescription>? ProjectDescriptions { get; init; }

    /// <summary>
    /// If the previous response was incomplete (because there is more results to retrieve), Amazon Rekognition returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
