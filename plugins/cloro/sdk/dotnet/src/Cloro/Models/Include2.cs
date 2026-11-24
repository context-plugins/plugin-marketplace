using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Optional flags for including additional response formats
/// </summary>
public record Include2
{
    /// <summary>
    /// Include a URL to the full HTML of the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public bool? Html { get; init; } = false;

    /// <summary>
    /// Include markdown-formatted response in the result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public bool? Markdown { get; init; } = false;

    /// <summary>
    /// Include raw streaming response events
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawResponse")]
    public bool? RawResponse { get; init; } = false;
}
