using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Compabase.Core.Models;
using Compabase.Models.Enums;

namespace Compabase.Models;

/// <summary>
/// Payload POSTed to your webhook URL when a watched company changes.
/// </summary>
public record WatchlistWebhookEvent
{
    /// <summary>
    /// Event type (also sent in the <c>X-Compabase-Event</c> header).
    /// </summary>
    [JsonPropertyName("event")]
    public required Event Event { get; init; }

    [JsonPropertyName("company")]
    public required CompanyCompabaseWatchlistApi Company { get; init; }

    [JsonPropertyName("detected_at")]
    public required DateTimeOffset DetectedAt { get; init; }

    /// <summary>
    /// Field-level changes, when the event has them.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changes")]
    public IReadOnlyList<Change>? Changes { get; init; }

    /// <summary>
    /// Source register for registry events (e.g. KRZ, MSiG, BZP).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registry")]
    public string? Registry { get; init; }

    /// <summary>
    /// Change of the register counter for registry events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delta")]
    public double? Delta { get; init; }

    /// <summary>
    /// Newly filed financial statement (financials_updated).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filing")]
    public object? Filing { get; init; }

    /// <summary>
    /// Newest articles (company_news).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("news")]
    public IReadOnlyList<object>? News { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
