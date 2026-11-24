using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Artwork
{
    /// <summary>
    /// Artwork title
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Link to more information about the artwork
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public string? Link { get; init; }

    /// <summary>
    /// Author or creator name — omitted when not present
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author")]
    public string? Author { get; init; }

    /// <summary>
    /// Google's <c>/goto</c> redirect for this link, in the absolute form <c>POST /v1/monitor/google/goto</c> accepts. Present only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirectLink")]
    public string? RedirectLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
