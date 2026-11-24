using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record WorkflowTypeInfos
{
    /// <summary>
    /// The list of workflow type information.
    /// </summary>
    [JsonPropertyName("typeInfos")]
    public required IReadOnlyList<WorkflowTypeInfo> TypeInfos { get; init; }

    /// <summary>
    /// If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
