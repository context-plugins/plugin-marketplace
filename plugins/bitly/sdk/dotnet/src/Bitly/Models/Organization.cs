using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

public record Organization
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("references")]
    public IReadOnlyDictionary<string, string>? References { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("is_active")]
    public required bool IsActive { get; init; }

    [JsonPropertyName("guid")]
    public required string Guid { get; init; }

    [JsonPropertyName("tier")]
    public required string Tier { get; init; }

    [JsonPropertyName("tier_family")]
    public required string TierFamily { get; init; }

    [JsonPropertyName("tier_display_name")]
    public required string TierDisplayName { get; init; }

    [JsonPropertyName("role")]
    public required string Role { get; init; }

    [JsonPropertyName("created")]
    public required string Created { get; init; }

    [JsonPropertyName("modified")]
    public required string Modified { get; init; }

    [JsonPropertyName("bsds")]
    public required IReadOnlyList<string> Bsds { get; init; }

    /// <summary>
    /// SSO authentication requirement for this organization. Possible values: "none", "any". Omitted when no auth requirements are configured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("require_sso")]
    public RequireSso? RequireSso { get; init; }

    /// <summary>
    /// Two-factor authentication requirement for this organization. Possible values: "none", "sms". Omitted when no auth requirements are configured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("require_2fa")]
    public Require2Fa? Require2Fa { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
