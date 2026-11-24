using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record NewsResult
{
    /// <summary>
    /// Position in news results (1-indexed)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public double? Position { get; init; }

    /// <summary>
    /// Title of the news article
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// URL of the news article
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public string? Link { get; init; }

    /// <summary>
    /// Text snippet describing the article
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("snippet")]
    public string? Snippet { get; init; }

    /// <summary>
    /// News source/publisher name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    /// <summary>
    /// Publication date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date")]
    public string? Date { get; init; }

    /// <summary>
    /// Page number this result appeared on (1-indexed)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public double? Page { get; init; }

    /// <summary>
    /// Thumbnail image URL (if available)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail")]
    public string? Thumbnail { get; init; }

    /// <summary>
    /// Google's <c>/goto</c> redirect for this link, in the absolute form <c>POST /v1/monitor/google/goto</c> accepts. Present only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirectLink")]
    public string? RedirectLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
