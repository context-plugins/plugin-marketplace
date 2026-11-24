using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.AnyOf;

namespace Paid.Models;

/// <summary>
/// usage variant
/// </summary>
public record Cost1
{
    /// <summary>
    /// Discriminator value: usage
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "usage";

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
    /// Provider name, used together with <c>model</c> to look up pricing (e.g. "openai", "anthropic").
    /// </summary>
    [JsonPropertyName("vendor")]
    public required string Vendor { get; init; }

    /// <summary>
    /// Exact provider model ID (e.g. "gpt-4o-2024-08-06").
    /// </summary>
    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonPropertyName("usage")]
    public required TokenUsage Usage { get; init; }

    /// <summary>
    /// If supplied, overrides server-side pricing. The usage breakdown is still recorded for analytics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("costOverride")]
    public CostOverride? CostOverride { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
