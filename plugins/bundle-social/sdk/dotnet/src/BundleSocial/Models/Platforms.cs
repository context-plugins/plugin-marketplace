using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Platforms
{
    [JsonPropertyName("FACEBOOK")]
    public required FacebookBundleSocialAppApi Facebook { get; init; }

    [JsonPropertyName("INSTAGRAM")]
    public required InstagramBundleSocialAppApi Instagram { get; init; }

    [JsonPropertyName("TIKTOK")]
    public required TiktokBundleSocialAppApi Tiktok { get; init; }

    [JsonPropertyName("YOUTUBE")]
    public required YoutubeBundleSocialAppApi Youtube { get; init; }

    [JsonPropertyName("TWITTER")]
    public required TwitterBundleSocialAppApi Twitter { get; init; }

    [JsonPropertyName("PINTEREST")]
    public required PinterestBundleSocialAppApi Pinterest { get; init; }

    [JsonPropertyName("REDDIT")]
    public required RedditBundleSocialAppApi Reddit { get; init; }

    [JsonPropertyName("MASTODON")]
    public required MastodonBundleSocialAppApi Mastodon { get; init; }

    [JsonPropertyName("DISCORD")]
    public required DiscordBundleSocialAppApi Discord { get; init; }

    [JsonPropertyName("SLACK")]
    public required SlackBundleSocialAppApi Slack { get; init; }

    [JsonPropertyName("BLUESKY")]
    public required BlueskyBundleSocialAppApi Bluesky { get; init; }

    [JsonPropertyName("GOOGLE_BUSINESS")]
    public required GooglebusinessBundleSocialAppApi GoogleBusiness { get; init; }

    [JsonPropertyName("LINKEDIN")]
    public required LinkedinBundleSocialAppApi Linkedin { get; init; }

    [JsonPropertyName("THREADS")]
    public required ThreadsBundleSocialAppApi Threads { get; init; }

    [JsonPropertyName("SNAPCHAT")]
    public required SnapchatBundleSocialAppApi Snapchat { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
