using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record SsoAccountResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("logo")]
    public required string Logo { get; init; }

    [JsonPropertyName("cover")]
    public required string Cover { get; init; }

    [JsonPropertyName("tagline")]
    public required string Tagline { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("phone")]
    public required string Phone { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("website")]
    public required string Website { get; init; }

    [JsonPropertyName("facebook")]
    public required string Facebook { get; init; }

    [JsonPropertyName("linkedin")]
    public required string Linkedin { get; init; }

    [JsonPropertyName("twitter")]
    public required string Twitter { get; init; }

    [JsonPropertyName("snapchat")]
    public required string Snapchat { get; init; }

    [JsonPropertyName("instagram")]
    public required string Instagram { get; init; }

    [JsonPropertyName("tiktok")]
    public required string Tiktok { get; init; }

    [JsonPropertyName("youtube")]
    public required string Youtube { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonPropertyName("last_campaign_id")]
    public required string LastCampaignId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
