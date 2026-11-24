using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// Create an absolute limit or a percentage alert.
/// <para>
/// Set one scope ID for an API-key or membership limit, or neither for a team
/// limit. Percentage alerts set ``parent_limit_id`` and
/// ``threshold_percent``; their interval must match the parent and their
/// amount is inherited.
/// </para>
/// </summary>
public record SpendLimitCreateRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_key_id")]
    public ApiKeyId? ApiKeyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("membership_id")]
    public MembershipId? MembershipId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_limit_id")]
    public ParentLimitId? ParentLimitId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("threshold_percent")]
    public ThresholdPercent1? ThresholdPercent { get; init; }

    [JsonPropertyName("interval")]
    public required SpendInterval Interval { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_usd")]
    public AmountUsd? AmountUsd { get; init; }

    [JsonPropertyName("action")]
    public required SpendLimitAction Action { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
