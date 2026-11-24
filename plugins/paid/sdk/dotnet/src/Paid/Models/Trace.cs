using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// A single cost trace record with customer and product info
/// </summary>
public record Trace
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
    [JsonPropertyName("model")]
    public required string Model { get; init; }

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

    /// <summary>
    /// The internal customer ID associated with this trace
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Your system's customer ID associated with this trace
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalCustomerId")]
    public string? ExternalCustomerId { get; init; }

    /// <summary>
    /// The product ID associated with this trace
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productId")]
    public string? ProductId { get; init; }

    /// <summary>
    /// Your system's product ID associated with this trace
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalProductId")]
    public string? ExternalProductId { get; init; }

    /// <summary>
    /// DEPRECATED: Use productId instead. The product/agent ID associated with this trace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentId")]
    public string? AgentId { get; init; }

    /// <summary>
    /// DEPRECATED: Use externalProductId instead. Your system's agent/product ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalAgentId")]
    public string? ExternalAgentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
