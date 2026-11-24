using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// URI query. When specified, replaces the query part of the task URI. Setting the query value to an empty string clears the URI query segment.
/// </summary>
public record QueryOverride1
{
    /// <summary>
    /// The query parameters (e.g., qparam1=123&amp;qparam2=456). Default is an empty string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryParams")]
    public string? QueryParams { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
