using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Optional flags for including additional response formats
/// </summary>
public record Include12
{
    /// <summary>
    /// Include a URL to the full HTML of the page that Bing rendered
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public bool? Html { get; init; } = false;

    /// <summary>
    /// Include the answer formatted in Markdown in the result. <c>result.markdown</c> is returned only when this is <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    public bool? Markdown { get; init; } = false;
}
