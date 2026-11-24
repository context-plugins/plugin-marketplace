using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// QueryOverride. Query message defines query override for HTTP targets.
/// </summary>
public record QueryOverride
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
