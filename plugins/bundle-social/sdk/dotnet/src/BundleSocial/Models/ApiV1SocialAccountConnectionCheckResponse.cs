using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record ApiV1SocialAccountConnectionCheckResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonPropertyName("socialAccountId")]
    public required string SocialAccountId { get; init; }

    [JsonPropertyName("checkedAt")]
    public required string CheckedAt { get; init; }

    [JsonPropertyName("limit")]
    [Minimum(1)]
    public required int Limit { get; init; }

    [JsonPropertyName("used")]
    [Minimum(0)]
    public required int Used { get; init; }

    [JsonPropertyName("remaining")]
    [Minimum(0)]
    public required int Remaining { get; init; }

    [JsonPropertyName("windowSeconds")]
    [Minimum(1)]
    public required int WindowSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
