using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record DataBundleSocialCommentApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TWITTER")]
    public TwitterBundleSocialCommentApi? Twitter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FACEBOOK")]
    public FacebookBundleSocialCommentApi? Facebook { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("INSTAGRAM")]
    public InstagramBundleSocialCommentApi? Instagram { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("THREADS")]
    public ThreadsBundleSocialCommentApi? Threads { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TIKTOK")]
    public TiktokBundleSocialCommentApi? Tiktok { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LINKEDIN")]
    public LinkedinBundleSocialCommentApi? Linkedin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("YOUTUBE")]
    public YoutubeBundleSocialCommentApi? Youtube { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("REDDIT")]
    public RedditBundleSocialCommentApi? Reddit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MASTODON")]
    public MastodonBundleSocialCommentApi? Mastodon { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DISCORD")]
    public DiscordBundleSocialCommentApi? Discord { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SLACK")]
    public SlackBundleSocialCommentApi? Slack { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BLUESKY")]
    public BlueskyBundleSocialCommentApi? Bluesky { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
