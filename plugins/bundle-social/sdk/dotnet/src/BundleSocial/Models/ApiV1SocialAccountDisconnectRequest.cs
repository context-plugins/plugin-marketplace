using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1SocialAccountDisconnectRequest
{
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
