using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

/// <summary>
/// What a story id resolves to. Exactly one of <c>story</c>, <c>redirect_to</c> and <c>article</c> is filled, according to <c>status</c>.
/// </summary>
public record StoryLookup
{
    /// <summary>
    /// <c>found</c>: <c>story</c> is filled. <c>merged</c>: this story was folded into another one, <c>redirect_to</c> is its id. <c>not_a_story</c>: the id belongs to an article only one publisher carried, <c>article</c> names it. (An unknown id is a 404, not a status.)
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusAlphAiRestStoriesApi Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story")]
    public Story? Story { get; init; }

    /// <summary>
    /// The surviving story's id, when <c>status</c> is <c>merged</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirect_to")]
    public string? RedirectTo { get; init; }

    /// <summary>
    /// The single-publisher article the id belongs to, when <c>status</c> is <c>not_a_story</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("article")]
    public StoryArticleRef? Article { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
