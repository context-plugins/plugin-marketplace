using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// One limit with its current spend-window total.
/// <para>
/// API-key and membership limits use their corresponding ID. Team limits have
/// neither; percentage alerts additionally identify their parent team limit.
/// ``period_start`` is the window opening (calendar start or last reset);
/// ``period_end`` is the next calendar boundary.
/// </para>
/// </summary>
public record SpendLimitItem
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("api_key_id")]
    public required ApiKeyId ApiKeyId { get; init; }

    [JsonPropertyName("api_key_name")]
    public required ApiKeyName ApiKeyName { get; init; }

    [JsonPropertyName("membership_id")]
    public required MembershipId MembershipId { get; init; }

    [JsonPropertyName("member_name")]
    public required MemberName MemberName { get; init; }

    [JsonPropertyName("parent_limit_id")]
    public required ParentLimitId ParentLimitId { get; init; }

    [JsonPropertyName("threshold_percent")]
    public required ThresholdPercent ThresholdPercent { get; init; }

    [JsonPropertyName("interval")]
    public required SpendInterval Interval { get; init; }

    [JsonPropertyName("amount_usd")]
    public required string AmountUsd { get; init; }

    [JsonPropertyName("action")]
    public required SpendLimitAction Action { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("spend_usd")]
    public required string SpendUsd { get; init; }

    [JsonPropertyName("period_start")]
    public required string PeriodStart { get; init; }

    [JsonPropertyName("period_end")]
    public required string PeriodEnd { get; init; }

    [JsonPropertyName("reset_at")]
    public required ResetAt ResetAt { get; init; }

    [JsonPropertyName("editable")]
    public required bool Editable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
