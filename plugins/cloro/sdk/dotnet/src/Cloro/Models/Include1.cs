using System.Text.Json.Serialization;

namespace Cloro.Models;

/// <summary>
/// Optional flags for including additional response data
/// </summary>
public record Include1
{
    /// <summary>
    /// Include raw HTML response from Google News
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    public bool? Html { get; init; } = false;
}
