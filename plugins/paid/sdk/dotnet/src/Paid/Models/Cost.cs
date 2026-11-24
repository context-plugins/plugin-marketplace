using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.AnyOf;

namespace Paid.Models;

/// <summary>
/// cost variant
/// </summary>
public record Cost
{
    /// <summary>
    /// Discriminator value: cost
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "cost";

    /// <summary>
    /// Record time in RFC3339 format with timezone. Defaults to server receive time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public DateTimeOffset? Timestamp { get; init; }

    [JsonPropertyName("customer")]
    public required CustomerAttribution Customer { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product")]
    public ProductAttribution? Product { get; init; }

    /// <summary>
    /// Free-form metadata for filtering and analytics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    /// <summary>
    /// Cost amount in major units of <c>currency</c> (e.g. dollars).
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    /// <summary>
    /// ISO 4217 currency code, e.g. "USD".
    /// </summary>
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    /// <summary>
    /// Optional vendor tag for analytics (e.g. "openai", "anthropic"). Not used for pricing in this mode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vendor")]
    public string? Vendor { get; init; }

    /// <summary>
    /// Optional model tag for analytics (e.g. "gpt-4o-2024-08-06").
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
