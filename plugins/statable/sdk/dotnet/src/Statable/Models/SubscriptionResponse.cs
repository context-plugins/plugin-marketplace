using System;
using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Models.Enums;

namespace Statable.Models;

public record SubscriptionResponse
{
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonPropertyName("is_trial")]
    public required bool IsTrial { get; init; }

    /// <summary>
    /// When the current state stops being true — the trial's end while trialing, the paid period's end otherwise. Absent when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ends_at")]
    public DateTimeOffset? EndsAt { get; init; }

    /// <summary>
    /// True when the account has hobby sites and nothing else.
    /// </summary>
    [JsonPropertyName("only_hobby")]
    public required bool OnlyHobby { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
