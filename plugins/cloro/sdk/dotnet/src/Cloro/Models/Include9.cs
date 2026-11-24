using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Optional flags for including additional response formats
/// </summary>
public record Include9
{
    /// <summary>
    /// Include a URL to the full HTML of the response
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public bool? Html { get; init; } = false;

    /// <summary>
    /// Include markdown-formatted response in the result. <c>result.markdown</c> is returned only when this is <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public bool? Markdown { get; init; } = false;

    /// <summary>
    /// Ignored since 8th September 2026. Every redirect link now ships as <c>redirectLink</c> beside its destination, so both are returned without this flag. Requests still sending it behave as if it were absent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleGoto")]
    public bool? GoogleGoto { get; init; } = false;
}
