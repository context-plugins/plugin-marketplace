using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1OrganizationUsageDailyLimitsResponse
{
    [JsonPropertyName("date")]
    public required string Date { get; init; }

    [JsonPropertyName("socialAccountId")]
    public required string SocialAccountId { get; init; }

    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonPropertyName("posts")]
    public required Posts Posts { get; init; }

    [JsonPropertyName("comments")]
    public required Comments Comments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
