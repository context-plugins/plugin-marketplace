using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1SocialAccountMessagingEnableResponse
{
    [JsonPropertyName("socialAccountId")]
    public required string SocialAccountId { get; init; }

    [JsonPropertyName("type")]
    public required Type9 Type { get; init; }

    [JsonPropertyName("messagingStatus")]
    public required MessagingStatus MessagingStatus { get; init; }

    [JsonPropertyName("messagingLastError")]
    public required string? MessagingLastError { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
