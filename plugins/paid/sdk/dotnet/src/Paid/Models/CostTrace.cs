using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// A single cost trace record
/// </summary>
public record CostTrace
{
    /// <summary>
    /// The name/type of the operation (e.g., "trace.openai.agents.on_agent")
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The vendor/provider (e.g., "openai", "anthropic", "mistral")
    /// </summary>
    [JsonPropertyName("vendor")]
    public required string Vendor { get; init; }

    /// <summary>
    /// The model used for the operation (e.g., "gpt-4o-mini", "claude-3-sonnet")
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// Cost amount with currency
    /// </summary>
    [JsonPropertyName("cost")]
    public required CostAmount Cost { get; init; }

    /// <summary>
    /// Unix timestamp in nanoseconds when the operation started
    /// </summary>
    [JsonPropertyName("startTimeUnixNano")]
    public required string StartTimeUnixNano { get; init; }

    /// <summary>
    /// Unix timestamp in nanoseconds when the operation completed
    /// </summary>
    [JsonPropertyName("endTimeUnixNano")]
    public required string EndTimeUnixNano { get; init; }

    /// <summary>
    /// Additional metadata about the trace (e.g., tokens, etc.)
    /// </summary>
    [JsonPropertyName("attributes")]
    public required IReadOnlyDictionary<string, object> Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
