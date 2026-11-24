using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// URI path. When specified, replaces the existing path of the task URL. Setting the path value to an empty string clears the URI path segment.
/// </summary>
public record PathOverride2
{
    /// <summary>
    /// The URI path (e.g., /users/1234). Default is an empty string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
