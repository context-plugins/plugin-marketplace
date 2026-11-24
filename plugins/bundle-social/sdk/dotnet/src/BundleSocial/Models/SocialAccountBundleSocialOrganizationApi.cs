using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record SocialAccountBundleSocialOrganizationApi
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("username")]
    public required string? Username { get; init; }

    [JsonPropertyName("displayName")]
    public required string? DisplayName { get; init; }

    [JsonPropertyName("used")]
    public required double Used { get; init; }

    [JsonPropertyName("limit")]
    public required double Limit { get; init; }

    [JsonPropertyName("remaining")]
    public required double Remaining { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
