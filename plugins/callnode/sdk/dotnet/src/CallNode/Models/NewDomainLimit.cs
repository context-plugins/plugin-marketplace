using System;
using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

/// <summary>
/// On the create, verify and refresh=1 answers only (absent on plain reads): the per-day cap on a domain registered less than 30 days ago, rising over its first month and reset at 00:00 UTC; null once the domain is not capped.
/// </summary>
public record NewDomainLimit
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ageDays")]
    public int? AgeDays { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dailyCap")]
    public int? DailyCap { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentToday")]
    public int? SentToday { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remaining")]
    public int? Remaining { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resetsAt")]
    public DateTimeOffset? ResetsAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
