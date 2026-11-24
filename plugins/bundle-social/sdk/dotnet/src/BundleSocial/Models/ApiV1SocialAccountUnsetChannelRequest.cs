using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1SocialAccountUnsetChannelRequest
{
    [JsonPropertyName("type")]
    public required Type3BundleSocialSocialAccountApi Type { get; init; }

    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
