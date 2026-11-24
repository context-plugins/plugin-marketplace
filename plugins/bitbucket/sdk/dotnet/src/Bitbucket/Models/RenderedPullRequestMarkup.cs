using System.Text.Json.Serialization;

namespace Bitbucket.Models;

/// <summary>
/// User provided pull request text, interpreted in a markup language and rendered in HTML
/// </summary>
public record RenderedPullRequestMarkup
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public TitleBitbucketPullrequestsApi? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public Description? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason? Reason { get; init; }
}
