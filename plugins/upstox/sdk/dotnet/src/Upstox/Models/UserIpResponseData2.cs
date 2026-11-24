using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

/// <summary>
/// Current IP configuration.
/// </summary>
public record UserIpResponseData2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_ip")]
    public string? PrimaryIp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondary_ip")]
    public string? SecondaryIp { get; init; }

    /// <summary>
    /// ISO-8601 timestamp when primary IP was last changed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_ip_updated_at")]
    public string? PrimaryIpUpdatedAt { get; init; }

    /// <summary>
    /// ISO-8601 timestamp when secondary IP was last changed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondary_ip_updated_at")]
    public string? SecondaryIpUpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_ip_family_members")]
    public IReadOnlyList<FamilyMemberData>? PrimaryIpFamilyMembers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondary_ip_family_members")]
    public IReadOnlyList<FamilyMemberData>? SecondaryIpFamilyMembers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("access_tokens_invalidated")]
    public bool? AccessTokensInvalidated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
