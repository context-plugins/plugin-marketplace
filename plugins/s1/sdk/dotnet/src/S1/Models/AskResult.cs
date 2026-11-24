using System.Text.Json.Serialization;
using S1.Core.Models;
using S1.Core.Validation;
using S1.Core.Validation.Attributes;

namespace S1.Models;

public record AskResult
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("link")]
    [Format(FormatKind.Uri)]
    public required string Link { get; init; }

    [JsonPropertyName("snippet")]
    public required string Snippet { get; init; }

    /// <summary>
    /// When the page was published, as ISO 8601 (<c>YYYY-MM-DD</c> or <c>YYYY-MM-DDTHH:MM:SSZ</c>). Omitted when the engine exposes no date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published_date")]
    public string? PublishedDate { get; init; }

    /// <summary>
    /// Engine that returned the result.
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    /// <summary>
    /// How likely the result is to be about the query, two decimals. Only results scoring at least 0.5 are returned.
    /// </summary>
    [JsonPropertyName("relevance")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Relevance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
