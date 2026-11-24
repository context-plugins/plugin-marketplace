using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A response to a request to list workflow templates in a project.
/// </summary>
public record ListWorkflowTemplatesResponse
{
    /// <summary>
    /// Output only. List of workflow templates that could not be included in the response. Attempting to get one of these resources may indicate why it was not included in the list response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unreachable")]
    public IReadOnlyList<string>? Unreachable { get; init; }

    /// <summary>
    /// Output only. WorkflowTemplates list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("templates")]
    public IReadOnlyList<WorkflowTemplate>? Templates { get; init; }

    /// <summary>
    /// Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
