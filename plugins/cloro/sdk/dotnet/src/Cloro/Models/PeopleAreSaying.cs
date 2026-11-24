using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record PeopleAreSaying
{
    /// <summary>
    /// Position within the module (1-indexed)
    /// </summary>
    [JsonPropertyName("position")]
    public required double Position { get; init; }

    /// <summary>
    /// Card title as displayed on the SERP
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Destination URL the card points to (often a Reddit, Quora, or community forum thread)
    /// </summary>
    [JsonPropertyName("link")]
    public required string Link { get; init; }

    /// <summary>
    /// Google's raw relative-time text (e.g., "5 days ago", "2 weeks ago"). Free-form string — not normalized to a timestamp.
    /// </summary>
    [JsonPropertyName("date")]
    public required string Date { get; init; }

    /// <summary>
    /// Google's <c>/goto</c> redirect for this link, in the absolute form <c>POST /v1/monitor/google/goto</c> accepts. Present only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirectLink")]
    public string? RedirectLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
