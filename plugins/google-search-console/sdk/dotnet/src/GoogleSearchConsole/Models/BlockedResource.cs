using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Blocked resource.
/// </summary>
public record BlockedResource
{
    /// <summary>
    /// URL of the blocked resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
