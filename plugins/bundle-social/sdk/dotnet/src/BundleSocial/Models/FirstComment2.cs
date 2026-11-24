using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record FirstComment2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TIKTOK")]
    [MaxLength(1200)]
    public string? Tiktok { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("YOUTUBE")]
    [MaxLength(10000)]
    public string? Youtube { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("INSTAGRAM")]
    [MaxLength(2200)]
    public string? Instagram { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FACEBOOK")]
    [MaxLength(8000)]
    public string? Facebook { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TWITTER")]
    [MaxLength(25000)]
    public string? Twitter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("THREADS")]
    [MaxLength(500)]
    public string? Threads { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LINKEDIN")]
    [MaxLength(1250)]
    public string? Linkedin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("REDDIT")]
    [MaxLength(10000)]
    public string? Reddit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MASTODON")]
    [MaxLength(500)]
    public string? Mastodon { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DISCORD")]
    [MaxLength(2000)]
    public string? Discord { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SLACK")]
    [MaxLength(30000)]
    public string? Slack { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BLUESKY")]
    [MaxLength(300)]
    public string? Bluesky { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
