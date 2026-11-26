using System.Text.Json.Serialization;
using Search1Api.Core.Models;
using Search1Api.Core.Validation;
using Search1Api.Core.Validation.Attributes;
using Search1Api.Models.Enums;

namespace Search1Api.Models;

public record SearchResult
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("link")]
    [Format(FormatKind.Uri)]
    public required string Link { get; init; }

    [JsonPropertyName("snippet")]
    public required string Snippet { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// When the page was published, as ISO 8601: <c>YYYY-MM-DD</c> when only the day is known (web search engines), or <c>YYYY-MM-DDTHH:MM:SSZ</c> in UTC when the source carries a time (x, reddit, github, arxiv, youtube, bilibili, wechat, news feeds). Omitted when the source exposes no date, so treat it as optional per result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published_date")]
    public string? PublishedDate { get; init; }

    /// <summary>
    /// What a <c>github</c> result is: a repository, an issue, a pull request, or a discussion. Only present for <c>search_service: "github"</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind? Kind { get; init; }

    /// <summary>
    /// Stargazer count of a <c>github</c> repository result (<c>kind: "repo"</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stars")]
    public int? Stars { get; init; }

    /// <summary>
    /// Primary language of a <c>github</c> repository result (<c>kind: "repo"</c>). Omitted when GitHub reports none.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public string? Language { get; init; }

    /// <summary>
    /// Comment count on a <c>github</c> issue, pull request or discussion, or on a <c>hackernews</c> thread (POST /news).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_comments")]
    public int? NumComments { get; init; }

    /// <summary>
    /// POST /news with <c>search_service: "hackernews"</c> only: the submitted article. <c>link</c> is the Hacker News discussion thread; <c>story_url</c> is empty for Ask HN / Show HN text posts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_url")]
    [Format(FormatKind.Uri)]
    public string? StoryUrl { get; init; }

    /// <summary>
    /// POST /news with <c>search_service: "hackernews"</c> only: upvotes on the thread.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("points")]
    public int? Points { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
