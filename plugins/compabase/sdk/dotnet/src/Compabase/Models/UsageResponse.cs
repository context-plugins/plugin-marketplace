using System;
using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record UsageResponse
{
    [JsonPropertyName("used")]
    public required int Used { get; init; }

    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    [JsonPropertyName("remaining")]
    public required int Remaining { get; init; }

    /// <summary>
    /// Current billing period date (ISO 8601 date).
    /// </summary>
    [JsonPropertyName("monthUtc")]
    public required string MonthUtc { get; init; }

    /// <summary>
    /// When the billing period resets (ISO 8601 datetime with timezone).
    /// </summary>
    [JsonPropertyName("resetsAtUtc")]
    public required DateTimeOffset ResetsAtUtc { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
