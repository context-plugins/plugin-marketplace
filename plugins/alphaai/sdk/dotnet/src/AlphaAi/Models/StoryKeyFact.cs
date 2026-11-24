using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record StoryKeyFact
{
    /// <summary>
    /// The fact as the summary states it; every figure in it appears in the source article.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// The <c>uid</c> of the article the fact was read from — a row of <c>/api/stories/{story_id}/materials/</c>, openable with <c>/api/news/{uid}/</c>. Empty when that article has since been removed.
    /// </summary>
    [JsonPropertyName("source_uid")]
    public required string SourceUid { get; init; }

    /// <summary>
    /// The source domain of that article.
    /// </summary>
    [JsonPropertyName("publisher")]
    public required string Publisher { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
